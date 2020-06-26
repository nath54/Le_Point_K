# WS server example that synchronizes state across clients
from datetime import date
import asyncio
import json
import logging
import websockets
import os


class Serveur():
    def __init__(self):
        self.cac="|"
        self.cacc="#"
        self.ccac="$"
        self.cccc="£"

        logging.basicConfig()

        # ARTICLE :
        #  - id : l'identifiant de l'article
        #  - titre : le titre de l'article
        #  - date : la date de l'article en format texte, mais avec le format : jour en entier, mois en texte, année en entier
        #  - lien : le lien de la page de l'article
        #  - post-img : l'image de l'article 
        #  - alt-img : du texte qui est affiché quand la souris reste quelques secondes sur l'image
        #  - category : la catégorie de l'article ( écologie , politique , informatique , santé )
        #  - journal : le numéro du journal où l'article est, null si il n'est pas paru dans un journal
        #  - nbvues : le nombre de fois ou un utilisateur ouvre la page
        #  - commentaires : la liste des commentaires qui ont été postés sur l'article
        if not "save.txt" in os.listdir("./"):
            self.articles=[
                {"id":"000000","titre":"Faut-il interdire le glyphosate ?","date":"14 juin 2020","lien":"articles/art_glypho_1/article.html","post-img":"articles/art_glypho_1/img1.jpg","alt-img":"Faut-il interdire le glyphosate ?","category":"écologie","journal":None,"nbvues":0,"commentaires":[]},
                {"id":"000001","titre":"Le nucléaire, une bonne source d'énergie ?","date":"16 juin 2020","lien":"articles/art_glypho_1/article.html","post-img":"articles/art_nucleaire_1/post.jpeg","alt-img":"Le nucléaire, une bonne source d'énergie ?","category":"écologie","journal":None,"nbvues":0,"commentaires":[]},
            ]
        else:
            self.load()

        print("\narticles : ")
        for a in self.articles:
            print("  - "+str(a))
        print("\n")

        self.USERS = set()

    def sectxt(self,txt):
        txt=txt.replace(self.cac," Pipe")
        txt=txt.replace(self.cacc," Diese")
        txt=txt.replace(self.ccac," Dollars")
        txt=txt.replace(self.cccc," Pound")
        return txt

    def save(self):
        print("\nsaving articles...")
        txt=""
        for a in self.articles:
            txt+=self.sectxt(str(a["id"]))+self.cacc
            txt+=self.sectxt(str(a["titre"]))+self.cacc
            txt+=self.sectxt(str(a["date"]))+self.cacc
            txt+=self.sectxt(str(a["lien"]))+self.cacc
            txt+=self.sectxt(str(a["post-img"]))+self.cacc
            txt+=self.sectxt(str(a["alt-img"]))+self.cacc
            txt+=self.sectxt(str(a["category"]))+self.cacc
            txt+=self.sectxt(str(a["journal"]))+self.cacc
            txt+=self.sectxt(str(a["nbvues"]))+self.cacc
            for c in a["commentaire"]:
                pc1,pc2,pc3,pc4=c["pseudo"],c["email"],c["date"],c["message"]
                txt+=self.sectxt(pc1)+self.cccc
                txt+=self.sectxt(pc2)+self.cccc
                txt+=self.sectxt(pc3)+self.cccc
                txt+=self.sectxt(pc4)+self.cccc
                txt+=self.ccac
            txt+=self.cac
        f=io.open("save.txt","w",encoding="utf-8")
        f.write(txt[:-1])
        f.close()
        print("\narticles saved.")

    def load(self):
        print("\nloading articles ...")
        f=io.open("save.txt","r",encoding="utf-8")
        data=f.read().split(self.cac)
        f.close()
        self.articles=[]
        for d in data:
            dd=d.split(self.cacc)
            aa={}
            a["id"]=str(dd[0])
            a["titre"]=str(dd[1])
            a["date"]=str(dd[2])
            a["lien"]=str(dd[3])
            a["post-img"]=str(dd[4])
            a["alt-img"]=str(dd[5])
            a["category"]=str(dd[6])
            a["journal"]=str(dd[7])
            a["nbvues"]=str(dd[8])
            aa["commentaires"]=[]
            if dd[9]!="":
                dc=dd[9].split(self.ccac)
                for cd in dc:
                    g=cd.split(self.cccc)
                    com={}
                    com["pseudo"]=g[0]
                    com["email"]=g[1]
                    com["date"]=g[2]
                    com["message"]=g[3]
                    aa["commentaires"].append(com)
            
            self.articles.append(aa)
        print("\narticles loaded.")


    def articles_event(self):
        return json.dumps({"type": "articles", **self.articles})


    def users_event(self):
        return json.dumps({"type": "users", "count": len(self.USERS)})


    async def notify_articles(self):
        if self.USERS:  # asyncio.wait doesn't accept an empty list
            message = self.articles_event()
            await asyncio.wait([user.send(message) for user in self.USERS])


    async def notify_users(self):
        if USERS:  # asyncio.wait doesn't accept an empty list
            message = self.users_event()
            await asyncio.wait([user.send(message) for user in self.USERS])


    async def register(self,websocket):
        self.USERS.add(websocket)
        await notify_users()

    async def unregister(self,websocket):
        self.USERS.remove(websocket)
        await notify_users()


    async def main_server(self, websocket, path):
        # register(websocket) sends user_event() to websocket
        await self.register(websocket)
        try:
            #await websocket.send(articles_event())

            async for message in websocket:
                data = json.loads(message)
                if data["action"] == "get_articles":
                    print("request get articles")
                    await self.notify_articles()
                elif data["action"] == "read_article":
                    for a in articles:
                        if a["id"]==data["id"]:
                            a["nbvues"]+=1
                            print("article vu : ",a)
                    await self.notify_articles()
                elif data["action"] == "commentaire":
                    
                    for a in self.articles:
                        if a["id"]==data["id"]:
                            now=datetime.datetime()
                            day=str(now.year)+"-"+str(now.month)+"-"+str(now.day)
                            a["commentaire"].append({"pseudo":data["pseudo"],"email":["email"],"date":day,"message":data["message"]})
                            print("commentaire posted : ",a)
                    await self.notify_articles()
                else:
                    logging.error("unsupported event: {}", data)
        finally:
            await self.unregister(websocket)

    def main(self):
        print("Starting server ...")
        self.start_server = websockets.serve(self.main_server, "localhost", 6789)

        print("Server started.")
        asyncio.get_event_loop().run_until_complete(self.start_server)
        asyncio.get_event_loop().run_forever()



server=Serveur()
server.main()

print("server quit.")
