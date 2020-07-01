#coding:utf-8
print("Démarage...")


from lib_srv_discord import *

print("Librairies chargées.")

#class bot
class Bot(discord.Client):
    def __init__(self):
        super().__init__()
        self.channels_logs=[693079666361237504]
        self.name="Pkbot"

    async def on_ready(self):
        actt=[""]
        await self.change_presence(activity=discord.Game(name=random.choice(actt)))
        #await self.change_presence(activity=discord.CustomActivity(name=actt[0]))
        print("Logged in as ")
        print(self.user.name)
        print(self.user.id)
        print("---------")
        for ic in self.channels_logs:
            gen=self.get_channel(ic) #get le general du server de test
            if gen!=None:
                await gen.send(self.name+" is ready !")
    
    async def send_message_log(self,message):
        for ic in self.channels_logs:
            gen=self.get_channel(ic) #get le general du server de test
            if gen!=None:
                await gen.send(message)

    async def on_message(self,msg):
        author=msg.author
        content=msg.content
        isbot=False
        if(author == bot.user): isbot=True
        if not isbot:
            if content.startswith(config["prefix"]+"help"):
                await msg.channel.send(txthelp)
            elif content.startswith(config["prefix"]+"status"):
                await msg.channel.send("Le serveur python n'est pas encore mis en place.")
            elif content.startswith(config["prefix"]+"articles"):
                await msg.channel.send("Le serveur python n'est pas encore mis en place.")
            elif content.startswith(config["prefix"]+"quit") and author.id==495602071828037665:
                await msg.channel.send("Le bot va s'éteindre...")
                await self.logout()
                await self.close()


print("Démarage du bot...")
#on lance le programme
if __name__== "__main__":
    bot = Bot()
    bot.run(config["token"])




