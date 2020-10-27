
import os,io

a_remplacer=[
    ["Informatique","Science"],
    ["informatique","science"]
]

def traite_file(txt):
    #
    for aremp in a_remplacer:
        dr=0
        ind=txt.find(aremp[0])
        while ind!=-1:
            #
            print("Voulez vous remplacer '"+aremp[0]+"' par '"+aremp[1]+"' index = "+str(ind)+": ")
            print("\n"+(txt[ind-10:ind+len(aremp[0])+10])+"\n")
            print("\n press enter to replace else it's will not replace ")
            r=input("")
            if r=="":
                a=txt[:ind]
                b=aremp[1]
                c=txt[ind+len(aremp[0]):]
                txt=txt[:ind]+aremp[1]+txt[ind+len(aremp[0]):]
                print(type(a),type(b),type(c),type(txt))

            print("new : "+txt[ind-10:ind+len(aremp[0])+10]+"\n")
            #
            dr=ind+len(aremp[1])
            ind=txt.find(aremp[0],dr)
    return txt

def rename_dir(dir_path):
    for elt in os.listdir(dir_path):
        print("elt actuel : "+dir_path+elt)
        if os.path.isdir(dir_path+elt):
            rename_dir(dir_path+elt+"/")
        else:
            a=elt.split(".")
            if len(a)>1 and a[-1] in ["json","js","html"]:
                f=io.open(dir_path+elt,"r",encoding="utf-8")
                txt=f.read()
                f.close()
                #
                txt=traite_file(txt)
                #
                f=io.open(dir_path+elt,"w",encoding="utf-8")
                f.write(txt)
                f.close()


if __name__=="__main__":
    rename_dir("./")
