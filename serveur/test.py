# WS server example that synchronizes state across clients
from datetime import date
import asyncio
import json
import logging
import websockets

cac="|"
cacc="#"
ccac="$"
cccc="£"

logging.basicConfig()


articles=[
    {"id":"001","nbvues":0,"commentaires":[]},
    {"id":"010","nbvues":0,"commentaires":[]},
    {"id":"011","nbvues":0,"commentaires":[]}
]

USERS = set()

def save():
    txt=""
    for a in articles:
        txt+=str(a["id"])+cacc
        txt+=str(a["nbvues"])+cacc
        for c in a["commentaire"]:
            pc1,pc2,pc3,pc4=c["pseudo"],c["email"],c["date"],c["message"]
            txt+=pc1+cccc
            txt+=pc2+cccc
            txt+=pc3+cccc
            txt+=pc4+cccc
            txt+=ccac
        txt+=cac
    f=io.open("save.txt","w",encoding="utf-8")
    f.write(txt[:-1])
    f.close()

def load():
    f=io.open("save.txt","r",encoding="utf-8")
    data=f.read().split(cac)
    f.close()
    articles=[]
    for d in data:
        dd=d.split(cacc)
        aa={}
        aa["id"]=dd[0]    
        aa["nbvues"]=int(dd[1])
        aa["commentaires"]=[]
        if dd[2]!="":
            dc=dd[2].split(ccac)
            for cd in dc:
                g=cd.split(cccc)
                com={}
                com["pseudo"]=g[0]
                com["email"]=g[1]
                com["date"]=g[2]
                com["message"]=g[3]
    return articles


def articles_event():
    return json.dumps({"type": "articles", **articles})


def users_event():
    return json.dumps({"type": "users", "count": len(USERS)})


async def notify_articles():
    if USERS:  # asyncio.wait doesn't accept an empty list
        message = articles_event()
        await asyncio.wait([user.send(message) for user in USERS])


async def notify_users():
    if USERS:  # asyncio.wait doesn't accept an empty list
        message = users_event()
        await asyncio.wait([user.send(message) for user in USERS])


async def register(websocket):
    USERS.add(websocket)
    await notify_users()

async def unregister(websocket):
    USERS.remove(websocket)
    await notify_users()


async def main(websocket, path):
    # register(websocket) sends user_event() to websocket
    await register(websocket)
    try:
        #await websocket.send(articles_event())

        async for message in websocket:
            data = json.loads(message)
            if data["action"] == "get_articles":
                print("request get articles")
                await notify_articles()
            elif data["action"] == "read_article":
                for a in articles:
                    if a["id"]==data["id"]:
                        a["nbvues"]+=1
                        print("article vu : ",a)
                await notify_articles()
            elif data["action"] == "commentaire":
                
                for a in articles:
                    if a["id"]==data["id"]:
                        now=datetime.datetime()
                        day=str(now.year)+"-"+str(now.month)+"-"+str(now.day)
                        a["commentaire"].append({"pseudo":data["pseudo"],"email":["email"],"date":day,"message":data["message"]})
                        print("commentaire posted : ",a)
                await notify_articles()
            else:
                logging.error("unsupported event: {}", data)
    finally:
        await unregister(websocket)


start_server = websockets.serve(main, "localhost", 6789)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()