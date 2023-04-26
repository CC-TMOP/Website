import os
def Create():
    file1 = open(os.path.dirname(__file__) + "/BaseInfo.txt" , "r");
    file2 = open(os.path.dirname(__file__) + "/CreateInfo.txt" , "w");
    
    f1list = file1.read().splitlines()
    datatemplate = "data_list.append(requirement.requirement_table.Requirement_table(requirement_id = \"x1\" , requirement_name = \"x2\" ,requirement_value = \"x3\"))"

    for fstr in f1list:
        if fstr == "" or fstr[0]=="#":
            continue;
        lis = fstr.split("-", 2)
        aim = datatemplate
        aim = aim.replace("x1", lis[0])
        aim = aim.replace("x2", lis[1])
        aim = aim.replace("x3", lis[2])

        file2.write(aim+"\n")
    
    
    

Create()