import os
def merge():
    file1 = open(os.path.dirname(__file__) + "/DemandInfo.txt" , "r");
    file2 = open(os.path.dirname(__file__) + "/PInfo.txt" , "r");
    file3 = open(os.path.dirname(__file__) + "/GenInfo.txt" , "w");
    f1list = file1.read().splitlines()
    f2list = file2.read().splitlines()
    index = 0;
    
    for fstr in f1list:
        if fstr == "" or fstr[0]=="#":
            continue;
        file3.write(fstr+"-"+f2list[index]+'\n')
        index = index +1
    
    

merge()