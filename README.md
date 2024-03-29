# Website
http://123.57.187.239:8000/admin/
用户名：yueyuea 密码：yueyuea

```
Using the URLconf defined in Website.urls, Django tried these URL patterns, in this order:

admin/
[name='index']
merchant/area [name='area']
merchant/ [name='merchant']
api/ getProvince/ [name='getProvince']
api/ getCity/ [name='getCity']
api/ getDistrict/ [name='getDistrict']
api/ login/ [name='login']
api/ register/ [name='register']
api/ match/ [name='matchService']

api/ person/ getMerchantNameToTel/ [name='GetMerchantNameToTel']
api/ person/ getOrderId/ [name='GetOrderId']
api/ person/ getOrderIdToInfo/ [name='GetOrderIdToInfo']
api/ person/ getOrderList/ [name='GetOrderList']
api/ person/ getRequirements/ [name='GetRequirements']
api/ person/ getTelToUserName/ [name='GetTelToUserName']
api/ person/ postOrderInfo/ [name='PostOrderInfo']
api/ person/ getOrderNumber/ [name='getOrderNumber']
api/ person/ postMerchantToOrder/ [name='PostMerchantToOrder']
api/ person/ getOrderAllInfo/ [name='GetOrderAllInfo']
api/ person/ postDescToOrder/ [name='PostDescToOrder']
api/ person/ getCityToDistrict/ [name='GetCityToDistrict']
api/ person/ getDistrictToMerchant/ [name='GetDistrictToMerchant']
api/ person/ postRobotOrderInfo/ [name='PostRobotOrderInfo']

```

## 接口说明
### 登录接口
- 接口URL: http://123.57.187.239:8000/api/login/
- 调用方式: GET
- 参数格式:

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| Username | Number   | 是       | 用户名   |
| Password | Number   | 是       | 密码     |

- 响应格式

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| result   | string   | 是       | 返回结果 |

- 返回示例
```python
if not user:
    return JsonResponse({
        'result':"用户名或密码不正确"
    })
return JsonResponse({
    'result':"success"
})
```

### 1. GetTelToUserName接口
- 接口URL: 
- 调用方式: GET
- 参数格式:

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| user_tel | Number   | 是       | 用户电话号   |

- 响应格式

| 参数名称  | 参数类型  | 是否必选 | 参数说明 |
| -------- | -------- | -------- | --------|
| result   | string   | 是       | 返回结果 |
| user_name | string   | 否       |返回用户名|

```python
return JsonResponse({
        'result':"success"
        'user_name': user.user_name
    })
```

### 2. GetRequirements接口(返回需求列表)
- 接口URL: 
- 调用方式: GET
- 参数格式:

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| 无入参 |    |       |    |

- 响应格式

| 参数名称  | 参数类型  | 是否必选 | 参数说明 |
| -------- | -------- | -------- | --------|
| result   | string   | 是       | 返回结果 |
| requirements | list | 是     | [需求id, 需求名] |

```python
 return JsonResponse({
        'result':"success",
        'requirements': requirements_list
    })
```

### 3. PostOrderinfo接口 （生成订单）
- 接口URL: 
- 调用方式: POST
- 参数格式:

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| username | string   | 是       |用户名  |
| user_tel | Number   | 否       | 用户电话   |
| requirement_id  | Number   | 是       | 需求id   |

- 响应格式

| 参数名称  | 参数类型  | 是否必选 | 参数说明 |
| -------- | -------- | -------- | --------|
| result    | string    | 是       | 返回生成订单结果 |

```python
  return JsonResponse({
        'result':"success"
    })
```

### 4. GetOrderId接口
- 接口URL: 
- 调用方式: GET
- 参数格式:

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
|无         |         |           |         |

- 响应格式

| 参数名称  | 参数类型  | 是否必选 | 参数说明 |
| -------- | -------- | -------- | --------|
| result    | string    | 是       | 返回结果success |
| OrdersId | list  | 是 |所有未处于完成状态的订单|

```python
return JsonResponse({
    'result':"success",
    'OrddersId':orders
})
```

### 5. GetOrderIdToInfo接口
- 接口URL: 
- 调用方式: GET
- 参数格式:

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
|order_number    | Number        |     是      |      订单号   |

- 响应格式

| 参数名称  | 参数类型  | 是否必选 | 参数说明 |
| -------- | -------- | -------- | --------|
| result    | string    | 是       | 返回结果success |
| username | stirng  | 是 |用户名|
| user_tel | Number   | 是    | 用户电话   |
|requirement|string|是|需求名称|
|useraddress|string |是|用户地址|
|city|list|是|[citycode, cityname]|   

```python   
return JsonResponse({
    'result':"success",
    'username':user.user_name,
    'user_tel':user.user_tel,
    'requirement':order.order_type_number,
    'useraddress':user.user_address,
    'city':city_code
})

```

### 6. CityToDistrict接口
- 接口URL: 
- 调用方式: GET
- 参数格式:

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
|citycode    | Number        |     是      |      地级市编号   |

- 响应格式

| 参数名称  | 参数类型  | 是否必选 | 参数说明 |
| -------- | -------- | -------- | --------|
| result    | string    | 是       | 返回结果success |
|district| list | 是| 所属地级市的区编号，区名|

```python
return JsonResponse({
    'result': "success",
    'districts': districts,
})
```


### 7. DistrictToMerchant接口
- 接口URL: 
- 调用方式: GET
- 参数格式:
- 接口说明：前端发送区编号和订单号，后端根据订单号截取需求大类ID，然后查询该区编号下，符合该需求大类ID的商家

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
|districtcode    | Number        |     是      |      区编号   |
|order_number    | Number        |     是      |      订单号   |

- 响应格式

| 参数名称  | 参数类型  | 是否必选 | 参数说明 |
| -------- | -------- | -------- | --------|
| result    | string    | 是       | 返回结果success |
|merchants_list| list | 是| 所属区的商家id，店名|

```python
return JsonResponse({
    'result': "success",
    'districts': merchants,
})
```

### 8. GetMerchantNameToTel接口
- 接口URL: 
- 调用方式: GET
- 参数格式:

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
|merchant_id    | Number        |     是      |      商家id   |

- 响应格式

| 参数名称  | 参数类型  | 是否必选 | 参数说明 |
| -------- | -------- | -------- | --------|
| result    | string    | 是       | 返回结果success |
|merchant_user_tel| string | 是| 商家电话|

```python
return JsonResponse({
    'result':"success"
    'merchant_user_tel': merchant_tel
})
```

### 9. getRobotOrderNumber接口

- 接口 URL:未定义
- 调用方式: Post
- 参数格式:

| 参数名称    | 参数类型 | 是否必选 | 参数说明 |
| ----------- | -------- | -------- | -------- |
| MsgUserID   | string   | 是       | 用户 id  |
| MsgDemandID | string   | 是       | 需求 id  |

- 响应格式

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| MsgInfo  | string   | 是       | 回复信息 |

```python
RetInfo = "xxxx"
return JsonResponse({
       	MsgInfo = "RetInfo"
 })
```

### 10. GetOrderList接口【要改】

- 接口 URL:未定义
- 调用方式: Get
- 参数格式: 
- 接口说明：前端发送订单状态，后端返回该状态下的所有订单记录具体信息列表

| 参数名称    | 参数类型 | 是否必选 | 参数说明 |
| ----------- | -------- | -------- | -------- |
| Order_status  | int   | 是       | 订单状态  |

- 响应格式

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| result   | string   | 是       | 返回结果 |
| Order_list  | list   | 是       | 订单具体信息列表[订单号,用户名，需求名，商家id，订单状态，创建时间，结束时间，订单评价] |

```python
return JsonResponse({
    'result':"success",
    'OrddersId':orders
})
```

### 11. SearchOrderInfo接口【未定】

- 接口 URL:未定义
- 调用方式: Get
- 参数格式:
- 接口说明：前端发送搜索条件给，后端返回符合条件的订单记录

| 参数名称    | 参数类型 | 是否必选 | 参数说明 |
| ----------- | -------- | -------- | -------- |
|Merchant_id  | Number | 是    | 商家id   |

- 响应格式

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| result   | string   | 是       | 返回结果 |
| Order_list  | list   | 是       | 订单列表 |

### 12. PostMerchantToOrder接口【更新订单记录的接口】

- 接口 URL:未定义
- 调用方式: POST
- 参数格式:
- 接口说明：前端发送订单号，商家id，订单状态，后端将商家id，订单状态更新到数据库的该订单记录中

| 参数名称    | 参数类型 | 是否必选 | 参数说明 |
| ----------- | -------- | -------- | -------- |
|order_number      | Number | 是    | 订单号   |
|merchant_id | Number | 是    | 商家id   |
|order_status | int    | 是    | 订单状态  |

- 响应格式

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| result   | string   | 是      | 返回结果success |

```python
return JsonResponse({
    'result':"success"
})
```

### 13. GetOrderAllInfo接口【返回订单信息的接口】

- 接口 URL:未定义
- 调用方式: Get
- 参数格式:
- 接口说明：前端发送订单号，后端将该订单号的所有订单信息返回给前端

| 参数名称    | 参数类型 | 是否必选 | 参数说明 |
| ----------- | -------- | -------- | -------- |
|order_number      | Number | 是    | 订单号   |

- 响应格式

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| result   | string   | 是       | 返回结果 |
|User_name     | string | 否    | 用户名   |
|Requirement_name  |string  |否     |需求名称  |
|requirement_id  | string | 否    | 需求id   |
|User_address  |string  |否     |用户地址  |
|Merchant_name|string  | 否    | 商家名   |
|Merchant_id  | Number | 否    | 商家id   |
|Merchant_tel| string | 否| 商家电话|
|Order_create_time | datetime | 否    | 创建时间  |
|Order_completion_time | datetime | 否    | 结束时间  |
|Order_status | int    | 否    | 订单状态  |
|Order_price |double    | 否    | 订单金额  |
|Order_desc | string | 否    | 订单评价  |

```python
return JsonResponse({
    'result':"success",
    'user_name':user.user_name,
    'requirement_name':requirement.requirement_name,
    'requirement_id':requirement.requirement_id,
    'user_address':user.user_address,
    'merchant_name':merchant.merchant_address,
    'merchant_id':merchant.merchant_id,
    'merchant_tel':merchant.merchant_tel,
    'order_create_time':order.order_create_time,
    'order_completion_timee':order.order_completion_timee
    'order_status':order.order_status,
    'order_price':order.order_price,
    'order_desc':order.order_desc,
})
```

### 14. PostPriceToOrder.接口【扣款接口】 (to do)

- 接口 URL:未定义
- 调用方式: Post
- 参数格式:
- 接口说明：前端发送订单号，需求id，结算类型，订单状态，后端去查询该需求的价格，并查询用户享受的折扣，计算出当前订单的金额，将金额和订单状态更新到数据库中，最后根据结算方式，判断是否要从账户进行扣款
- 详细实现思路：看issue《关于PostPriceToOrder.py接口的修改建议》

| 参数名称    | 参数类型 | 是否必选 | 参数说明 |
| ----------- | -------- | -------- | -------- |
|order_number      | Number | 是    | 订单号   |
|requirement_id  | string | 是    | 需求id   |
|order_pay_type     | int    | 是    | 结算类型  |
|order_status | int    | 是    | 订单状态  |

- 响应格式

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| result   | string   | 是      | 返回结果success |

```python
return JsonResponse({
    'result':"success"
})
```

### 15. PostDescToOrder接口【更新订单记录的接口】

- 接口 URL:未定义
- 调用方式: Post
- 参数格式:
- 接口说明：前端发送订单号，订单评价，后端将订单评价更新到数据库中

| 参数名称    | 参数类型 | 是否必选 | 参数说明 |
| ----------- | -------- | -------- | -------- |
|order_number      | Number | 是    | 订单号   |
|Order_desc   | string | 是    | 订单评价  |

- 响应格式

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| result   | string   | 是      | 返回结果success |

```python
return JsonResponse({
    'result':"success"
})
```

### 16. PostAddUserInfo接口【插入用户信息的接口】(to do)

- 接口 URL:未定义
- 调用方式: Post
- 参数格式:
- 接口说明：前端发送用户详细信息，后端根据信息创建用户ID，并把信息插入到数据库中

| 参数名称    | 参数类型 | 是否必选 | 参数说明 |
| ----------- | -------- | -------- | -------- |
|user_name    | string | 是    | 用户姓名 |
|user_sex     | int | 是    | 用户性别  |
|user_id_card | string | 是    | 用户身份证号   |
|user_tel      | string | 是    | 用户电话 |
|user_birthday | date | 是    | 用户生日  |
|user_address_code | int | 是    | 地址ID |
|user_age      | int | 是    | 用户年龄  |
|user_remark   | string | 否    | 用户备注 |

- 响应格式

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| result   | string   | 是      | 返回结果success |

### 17. PostAddMerchantInfo接口【插入商家信息的接口】(to do)

- 接口 URL:未定义
- 调用方式: Post
- 参数格式:
- 接口说明：前端发送商家详细信息，后端根据信息创建商家ID，并把信息插入到数据库中

| 参数名称    | 参数类型 | 是否必选 | 参数说明 |
| ----------- | -------- | -------- | -------- |
|merchant_name   | string | 是    | 商家名称 |
|merchant_tel    | string | 是    | 商家电话  |
|service_type    | int | 是    | 服务类型ID   |
|merchant_address_code    | int | 是    | 地址ID |
|merchant_status          | int | 是    | 商家状态  |
|merchant_assistant_name  | string | 是    | 店员姓名 |
|merchant_assistant_tel   | string | 是    | 店员电话  |
|merchant_remark          | string | 否    | 商家备注 |

- 响应格式

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| result   | string   | 是      | 返回结果success |


### 18. PostAddWorkerInfo接口【插入员工信息的接口】(to do)

- 接口 URL:未定义
- 调用方式: Post
- 参数格式:
- 接口说明：前端发送员工详细信息，后端根据员工ID，把信息插入到数据库中

| 参数名称    | 参数类型 | 是否必选 | 参数说明 |
| ----------- | -------- | -------- | -------- |
|worker_id     | string | 是    | 员工id  |
|worker_name    | string | 是    | 员工姓名 |
|worker_sex     | int | 是    | 员工性别  |
|worker_id_card | string | 是    | 员工身份证号  |
|worker_phone   | string | 是    | 员工电话 |
|worker_birthday | date | 是    | 出生日期  |
|worker_address_code | int | 是    | 地址ID  |
|worker_email   | string | 是    | 员工邮箱 |
|worker_age     | int | 是    | 员工年龄  |
|worker_type_id | int | 是    | 员工类型ID |

- 响应格式

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| result   | string   | 是      | 返回结果success |

- 员工类型【对照信息的时候用】

| 员工类型ID    | 员工类型名 |
| ----------- | -------- |
| 11    | 订单传递工作人员 |
| 12    | 订单对接工作人员 |
| 13    | 订单跟踪工作人员 |
| 14    | 订单反馈工作人员 |
| 21    | 餐饮服务工作人员 |
| 22    | 上门服务工作人员 |
| 23    | 跑腿服务工作人员 |
| 24    | 陪护服务工作人员 |
| 25    | 定制服务工作人员 |
| 31    | 监督流程工作人员 |
| 32    | 监督服务工作人员 |
| 41    | 对接合作方工作人员 |
| 42    | 对接老人工作人员 |
| 43    | 账号管理工作人员 |
| 51    | 人工客服工作人员 |
| 52    | 线下接待工作人员 |


### 19. GetWorkerType接口【返回员工类型列表】

- 接口 URL:未定义
- 调用方式: Post
- 参数格式:
- 接口说明：后端发送员工类别列表给前端

| 参数名称    | 参数类型 | 是否必选 | 参数说明 |
| ----------- | -------- | -------- | -------- |
|无    |    |     |    |

- 响应格式

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| result   | string   | 是      | 返回结果success |
| worker_type | list  | 是 |[worker_type_id,worker_type_name]|
