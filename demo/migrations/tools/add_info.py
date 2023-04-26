import os
import sys
import datetime
sys.path.append(os.path.dirname(os.path.dirname((os.path.dirname(os.path.dirname(__file__))))) )
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Website.settings")
import django
django.setup()

import demo.models.area as area;
import demo.models.basic_requirement as basic_requirement ; 
import demo.models.bill as bill; 
import demo.models.merchant as merchant;
import demo.models.order as order; 
import demo.models.requirement as  requirement;
import demo.models.urgency as urgency; 
import demo.models.user_level_time as user_level_time;
import demo.models.user as user; 
import demo.models.user_level as user_level;
import demo.models.worker as worker;
import demo.models.worker_type as worker_type;
from django.utils import timezone
   

def add_area():
    return
    
def add_basic_requirement():
    data_list = []
    data_list.append(basic_requirement.basic_requirement_table.Basic_requirement_table(basic_requirement_id="1", basic_requirement_name="餐饮服务"))
    data_list.append(basic_requirement.basic_requirement_table.Basic_requirement_table(basic_requirement_id="2", basic_requirement_name="上门服务"))
    data_list.append(basic_requirement.basic_requirement_table.Basic_requirement_table(basic_requirement_id="3", basic_requirement_name="跑腿服务"))
    data_list.append(basic_requirement.basic_requirement_table.Basic_requirement_table(basic_requirement_id="4", basic_requirement_name="陪护服务"))
    data_list.append(basic_requirement.basic_requirement_table.Basic_requirement_table(basic_requirement_id="5", basic_requirement_name="定制服务"))
    basic_requirement.basic_requirement_table.Basic_requirement_table.objects.bulk_create(data_list)
    return
    #添加到需求
    

def add_bill():
    return

def add_merchant():
    data_list = []
    data_list.append(merchant.merchant_table.Merchant_table(
            merchant_id = 1,
            merchant_password = "001",
            merchant_name = "小u药店",
            merchant_tel = "13000000001",
            merchant_address = "西长安街街道",
            merchant_address_code = 110102001,
            merchant_status = 1,
            service_type = 2,
            block = 110102001,
            merchant_assistant_name = "小u",
            merchant_assistant_tel = "13010000001",
            merchant_remark = "",
        )
    )
    data_list.append(merchant.merchant_table.Merchant_table(
            merchant_id = 2,
            merchant_password = "002",
            merchant_name = "小u饭店",
            merchant_tel = "13000000002",
            merchant_address = "西长安街街道",
            merchant_address_code = 110102001,
            merchant_status = 1,
            service_type = 1,
            block = 110102001,
            merchant_assistant_name = "小u",
            merchant_assistant_tel = "13010000001",
            merchant_remark = "",
        )
    )
    data_list.append(merchant.merchant_table.Merchant_table(
            merchant_id = 3,
            merchant_password = "003",
            merchant_name = "小u服装店",
            merchant_tel = "13000000003",
            merchant_address = "西长安街街道",
            merchant_address_code = 110102001,
            merchant_status = 1,
            service_type = 2,
            block = 110102001,
            merchant_assistant_name = "小u",
            merchant_assistant_tel = "13010000001",
            merchant_remark = "",
        )
    )
    data_list.append(merchant.merchant_table.Merchant_table(
            merchant_id = 4,
            merchant_password = "004",
            merchant_name = "小u洗浴",
            merchant_tel = "13000000004",
            merchant_address = "西长安街街道",
            merchant_address_code = 110102001,
            merchant_status = 1,
            service_type = 1,
            block = 110102001,
            merchant_assistant_name = "小u",
            merchant_assistant_tel = "13010000001",
            merchant_remark = "",
        )
    )
    merchant.merchant_table.Merchant_table.objects.bulk_create(data_list)
    return

def add_order():
    datetime.datetime.now(tz=timezone.utc)
    data_list = []
    data_list.append(order.order_table.Order_table(
            order_number ="222222333333111111101",
            user_id="2101010201",
            merchant_id= 2,
            order_create_time = datetime.datetime.now().strftime(r"%Y-%m-%d") ,
            order_complete_time = datetime.datetime.now().strftime(r"%Y-%m-%d") ,
            order_type_number = 101,
            order_status = 1,
            order_price = 1000,
            order_comment ="",
            order_pay_type = 1,
        )
    )
    data_list.append(order.order_table.Order_table(
            order_number ="222222333333111111201",
            user_id="2101010201",
            merchant_id= 2,
            order_create_time = datetime.datetime.now().strftime(r"%Y-%m-%d") ,
            order_complete_time = datetime.datetime.now().strftime(r"%Y-%m-%d") ,
            order_type_number = 201,
            order_status = 2,
            order_price = 100,
            order_comment ="",
            order_pay_type = 2,
        )
    )
    data_list.append(order.order_table.Order_table(
            order_number ="222222333333111111301",
            user_id="2101010202",
            merchant_id= 1,
            order_create_time = datetime.datetime.now().strftime(r"%Y-%m-%d") ,
            order_complete_time = datetime.datetime.now().strftime(r"%Y-%m-%d") ,
            order_type_number = 301,
            order_status = 1,
            order_price = 10,
            order_comment ="",
            order_pay_type = 1,
        )
    )
    data_list.append(order.order_table.Order_table(
            order_number ="222222333333111111401",
            user_id="2101010201",
            merchant_id= 2,
            order_create_time = datetime.datetime.now().strftime(r"%Y-%m-%d") ,
            order_complete_time = datetime.datetime.now().strftime(r"%Y-%m-%d") ,
            order_type_number = 401,
            order_status = 3,
            order_price = 200,
            order_comment ="",
            order_pay_type = 2,
        )
    )
    order.order_table.Order_table.objects.bulk_create(data_list)
    

    return

def add_requirement():
    data_list = []
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "101" , requirement_name = "送餐" ,requirement_value = "1000"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "102" , requirement_name = "堂食" ,requirement_value = "12"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "103" , requirement_name = "居家做饭" ,requirement_value = "20"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "201" , requirement_name = "家政打扫" ,requirement_value = "100"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "202" , requirement_name = "刷洗碗筷" ,requirement_value = "3"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "203" , requirement_name = "家电维修" ,requirement_value = "0"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "204" , requirement_name = "开锁换锁" ,requirement_value = "50"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "205" , requirement_name = "清洗衣物" ,requirement_value = "20"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "206" , requirement_name = "衣物整理" ,requirement_value = "5"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "207" , requirement_name = "床铺整理" ,requirement_value = "3"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "208" , requirement_name = "穿脱衣裤" ,requirement_value = "5"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "209" , requirement_name = "上门体检" ,requirement_value = "100"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "210" , requirement_name = "剪指甲" ,requirement_value = "5"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "211" , requirement_name = "理发" ,requirement_value = "5"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "212" , requirement_name = "洗澡" ,requirement_value = "10"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "213" , requirement_name = "洗头" ,requirement_value = "5"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "214" , requirement_name = "洗脚" ,requirement_value = "5"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "215" , requirement_name = "洗脸" ,requirement_value = "3"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "216" , requirement_name = "擦洗" ,requirement_value = "10"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "217" , requirement_name = "刷牙漱口" ,requirement_value = "5"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "218" , requirement_name = "假牙养护" ,requirement_value = "5"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "219" , requirement_name = "修面" ,requirement_value = "5"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "220" , requirement_name = "梳头" ,requirement_value = "3"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "221" , requirement_name = "化妆" ,requirement_value = "10"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "222" , requirement_name = "喂饭" ,requirement_value = "3"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "223" , requirement_name = "协助如厕" ,requirement_value = "10"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "224" , requirement_name = "更换尿布" ,requirement_value = "5"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "225" , requirement_name = "协助用药" ,requirement_value = "5"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "226" , requirement_name = "打点滴" ,requirement_value = "0"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "301" , requirement_name = "买药" ,requirement_value = "10"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "302" , requirement_name = "买菜" ,requirement_value = "10"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "303" , requirement_name = "超市购物" ,requirement_value = "10"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "304" , requirement_name = "取送家具" ,requirement_value = "50"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "305" , requirement_name = "代取快递" ,requirement_value = "3"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "306" , requirement_name = "代邮寄" ,requirement_value = "5"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "307" , requirement_name = "取送文件" ,requirement_value = "10"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "308" , requirement_name = "代办业务" ,requirement_value = "50"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "309" , requirement_name = "取送物品" ,requirement_value = "10"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "401" , requirement_name = "看病陪护" ,requirement_value = "200"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "402" , requirement_name = "运动陪护" ,requirement_value = "200"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "403" , requirement_name = "出行陪护" ,requirement_value = "200"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "404" , requirement_name = "睡眠陪护" ,requirement_value = "200"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "405" , requirement_name = "聊天陪护" ,requirement_value = "100"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "406" , requirement_name = "读书陪护" ,requirement_value = "100"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "407" , requirement_name = "学习陪护" ,requirement_value = "100"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "501" , requirement_name = "按摩推拿" ,requirement_value = "300"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "502" , requirement_name = "教书法绘画" ,requirement_value = "300"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "503" , requirement_name = "私人医生" ,requirement_value = "2000"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "504" , requirement_name = "法律援助" ,requirement_value = "300"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "505" , requirement_name = "健身教练" ,requirement_value = "200"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "506" , requirement_name = "每月健身" ,requirement_value = "1000"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "507" , requirement_name = "居家照顾" ,requirement_value = "500"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "508" , requirement_name = "整月居家陪护" ,requirement_value = "5000"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "509" , requirement_name = "定制团建" ,requirement_value = "0"))
    data_list.append(requirement.requirement_table.Requirement_table(requirement_id = "510" , requirement_name = "定制其他" ,requirement_value = "0"))


    requirement.requirement_table.Requirement_table.objects.bulk_create(data_list)
    return

def add_urgency():
    return

def add_user_level_time():
    return

def add_user():
    data_list = []
    data_list.append(user.user_table.User_table(
                user_id = "2104010201" ,
                user_name = "小明",
                user_sex = 1,
                user_tel = "13011111111",
                user_age = 18,
                user_address = "西长安街街道",
                user_address_code =  110102001,
                user_birthday = datetime.datetime.now().strftime(r"%Y-%m-%d %H:%M:%S") ,
                user_id_card = "",
                user_remark = "",
            )
        )
    data_list.append(user.user_table.User_table(
                user_id = "2104010202",
                user_name = "小红",
                user_sex = 0,
                user_tel = "13022222222",
                user_age = 18,
                user_address = "西长安街街道",
                user_address_code = 110102001,
                user_birthday = datetime.datetime.now().strftime(r"%Y-%m-%d %H:%M:%S") ,
                user_id_card = "",
                user_remark = "",
            )
        )
    data_list.append(user.user_table.User_table(
                user_id = "2104010203",
                user_name = "小松",
                user_sex = 1,
                user_tel = "13033333333",
                user_age = 19,
                user_address = "西长安街街道",
                user_address_code = 110102001,
                user_birthday = datetime.datetime.now().strftime(r"%Y-%m-%d %H:%M:%S") ,
                user_id_card = "",
                user_remark = "",
            )   
        )
    data_list.append(user.user_table.User_table(
                user_id = "2104010204",
                user_name = "小兰",
                user_sex = 0,
                user_tel = "13044444444",
                user_age = 17,
                user_address = "西长安街街道",
                user_address_code = 110102001,
                user_birthday = datetime.datetime.now().strftime(r"%Y-%m-%d %H:%M:%S") ,
                user_id_card = "",
                user_remark = "",
            )
        )
    data_list.append(user.user_table.User_table(
                user_id = "2104010205",
                user_name = "小欧",
                user_sex = 1,
                user_tel = "13055555555",
                user_age = 20,
                user_address = "西长安街街道",
                user_address_code = 110102001,
                user_birthday = datetime.datetime.now().strftime(r"%Y-%m-%d %H:%M:%S") ,
                user_id_card = "",
                user_remark = "",
            )
        )
    user.user_table.User_table.objects.bulk_create(data_list)
    return

def add_user_level():
    return

def add_worker():
    return

def add_worker_type():
    return

def add_all():
    #add_area()
    #add_basic_requirement()
    add_bill()
    #add_merchant()
    #add_order()
    #add_requirement()
    add_urgency()
    add_user_level_time()
    #add_user()
    add_user_level()
    add_worker()
    add_worker_type()

if __name__ == "__main__":
    add_all();