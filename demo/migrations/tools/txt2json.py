#!/usr/bin/python
# -*- coding: UTF-8 -*-
"""
@author:ZSW
@file:txt2db.py
@time:2020/10/10
"""

import os
import re
import sys
sys.path.append(os.path.dirname((os.path.dirname(os.path.dirname(__file__)))) )
sys.path.append(os.path.dirname(os.path.dirname((os.path.dirname(os.path.dirname(__file__)))) ))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Website.settings")
import django
django.setup()



def bulk_add1():
    print("nihao ---- 1")
    from demo.models.area import province
    province.Province.objects.all().delete()
    data_list = []
    folder_path = os.path.join("Website/demo/migrations/china_region/area_json/1")
    file_names = []
    
    print (os.path.abspath(folder_path));
    for _, _, filenames in os.walk(folder_path):
        for filename in filenames:
            file_names.append(filename)
    
    for filename in file_names:
        
        file_path = os.path.join(folder_path, filename)
        
        # 打开文件
        with open(file_path, "r") as f:
            content = f.read()
            
            # 使用正则表达式匹配每一个{}为一个单元
            pattern = r"\{.*?\}"
            match = re.findall(pattern, content)
            for word in match:
                word = word[1:-1]
                parts = word.split(',')
                dic = {}
                for tmpword in parts:
                    tmp = tmpword.split(':')
                    dic[tmp[0][1:-1]] = str(tmp[1])
                print (dic["adcode"])
                print (dic["name"])
                #course = province.Province(code=(str(dic["adcode"])[1:-1]), name=(str(dic["name"])[1:-1]))
                course = province.Province(code=str(dic["adcode"]), name=(str(dic["name"])[1:-1]))

                # 添加到字典
                data_list.append(course)
    province.Province.objects.bulk_create(data_list)


def bulk_add2():
    print("nihao ---- 2")
    from demo.models.area import city
    city.City.objects.all().delete()
    data_list = []
    folder_path = os.path.join("Website/demo/migrations/china_region/area_json/2")
    file_names = []
    for _, _, filenames in os.walk(folder_path):
        for filename in filenames:
            file_names.append(filename)
    print (os.path.abspath(folder_path));
    for filename in file_names:
        
        file_path = os.path.join(folder_path, filename)
        
        # 打开文件
        with open(file_path, "r") as f:
            content = f.read()
            # 使用正则表达式匹配每一个{}为一个单元
            pattern = r"\{.*?\}"
            match = re.findall(pattern, content)
            for word in match:
                word = word[1:-1]
                parts = word.split(',')
                dic = {}
                for tmpword in parts:
                    tmp = tmpword.split(':')
                    dic[tmp[0][1:-1]] = str(tmp[1])
                print (dic["adcode"])
                print (dic["name"])
                course = city.City(code=(str(dic["adcode"])), name=(str(dic["name"])[1:-1]) , provinceCode = (str(dic["parent"])))

                # 添加到字典
                data_list.append(course)
    city.City.objects.bulk_create(data_list)

def bulk_add3():
    print("nihao ---- 3")
    from demo.models.area.district import District
    District.objects.all().delete()
    data_list = []
    folder_path = os.path.join("Website/demo/migrations/china_region/area_json/3")
    file_names = []
    for _, _, filenames in os.walk(folder_path):
        for filename in filenames:
            file_names.append(filename)
    print (os.path.abspath(folder_path));
    for filename in file_names:
        
        file_path = os.path.join(folder_path, filename)
        
        # 打开文件
        with open(file_path, "r") as f:
            content = f.read()
            # 使用正则表达式匹配每一个{}为一个单元
            pattern = r"\{.*?\}"
            match = re.findall(pattern, content)
            for word in match:
                word = word[1:-1]
                parts = word.split(',')
                dic = {}
                for tmpword in parts:
                    tmp = tmpword.split(':')
                    dic[tmp[0][1:-1]] = str(tmp[1])
                print (dic["adcode"])
                print (dic["name"])
                course = District(code=(str(dic["adcode"])), name=(str(dic["name"])[1:-1]) , cityCode = (str(dic["parent"])) , provinceCode = (str(int((int(int(dic["parent"])/10000)*10000) + 0.5))) )

                # 添加到字典
                data_list.append(course)
    District.objects.bulk_create(data_list)


def bulk_add4():
    from demo.models.area.street import Street
    Street.objects.all().delete()
    data_list = []
    folder_path = os.path.join("Website/demo/migrations/china_region/area_json/4")
    file_names = []
    for _, _, filenames in os.walk(folder_path):
        for filename in filenames:
            file_names.append(filename)
    print (os.path.abspath(folder_path));
    for filename in file_names:
        
        file_path = os.path.join(folder_path, filename)
        
        # 打开文件
        with open(file_path, "r") as f:
            content = f.read()
            # 使用正则表达式匹配每一个{}为一个单元
            pattern = r"\{.*?\}"
            match = re.findall(pattern, content)
            for word in match:
                word = word[1:-1]
                parts = word.split(',')
                dic = {}
                for tmpword in parts:
                    tmp = tmpword.split(':')
                    dic[tmp[0][1:-1]] = str(tmp[1])
                print (dic["adcode"])
                print (dic["name"])
                p = int(dic["parent"][1:-1])
                
                course = Street(code=(str(dic["adcode"])[1:-1]), name=(str(dic["name"])[1:-1]) , districtCode = (str(dic["parent"])[1:-1]) , provinceCode = (str(int(int(p/10000)*10000+0.5))) , cityCode = (str(int(int(p/100)*100 +0.5))) )

                # 添加到字典
                data_list.append(course)
    Street.objects.bulk_create(data_list)

if __name__ == "__main__":
    # bulk_add1()
    # bulk_add2()
    # bulk_add3()
    bulk_add4()
    print('Done!')