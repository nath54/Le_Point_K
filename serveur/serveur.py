#coding:utf-8
import os
from datetime import date


class Main:
    def __init__(self):
        self.liste_ecriture_logs=[]
        self.liste_ecriture_articles=[]
        self.liste_ecriture_commentaires=[]
        self.liste_ecriture_accounts=[]
        #
        print("Le serveur est lancé")        

    def log(self,txt):
        now = datetime.datetime.now()
        self.liste_ecriture_logs.append(str(now.hour)+"-"+str(now.minute)+"-"+str(now.second)+" : "+txt)
        

    def write_log(self):
        now = datetime.datetime.now()
        if len(self.liste_ecriture_logs)>0:
            f=io.open("log-"+str(nom.year)+"-"+str(nom.month)+"-"+str(now.day)+".txt","a",encoding="utf-8")
            f.write(self.liste_ecriture_logs[0])
            f.close()
            del(self.liste_ecriture_logs[0])

    def envoyer_message(self,txt):
        pass

    def post_commentaire(self,txt):
        self.liste_ecriture_commentaire.append(txt)

    def get_texte(self):
        txt=""
        if(txt.split("|")[0]=="commentaire"):
            self.post_commentaire(txt)
        



