#coding:utf-8
import discord,os,time,random,io
from discord.ext import commands
from discord.utils import get

txthelp="""
Bonjour !

Attention, toutes les commandes avec * ne peuvent pas encore être faites
Quand le serveur sera totalement mis en place, le channel de log recevra un message du bot quand un commentaire sera posté, et quand un article dépassera les 10,100,1000,10000... vues.

Voici les commandes de ce bot : 
    /help : affiche ce message d'aide
    /quit : éteint le bot discord (seul l'administrateur du bot peut le faire)
    * /articles : affiche l'état des articles publiés (nombre de vues, nombre de commentaires)
    * /statues : affiche l'état du serveur (le serveur python )
"""

f=io.open("config.nathcfg","r",encoding="utf-8")
data=f.read().split("\n")
f.close()

config={}
for d in data:
    dd=d.split(":")
    if len(dd)==2:
        config[dd[0]]=dd[1]



