# Website
http://123.57.187.239:8000/admin/
用户名：yueyuea 密码：yueyuea


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

### 1. TelToUserName接口
- 接口URL: 
- 调用方式: GET
- 参数格式:

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| phonenumber | Number   | 是       | 用户电话号   |

- 响应格式

| 参数名称  | 参数类型  | 是否必选 | 参数说明 |
| -------- | -------- | -------- | --------|
| result   | string   | 是       | 返回结果 |
| username | string   | 否       |返回用户名|

```python
return JsonResponse({
        'result':"success"
        'merchant_phonenumber': user.user_name
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
| phonenumber | Number   | 否       | 用户电话   |
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

### 4. GetOrdersId接口
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
|OrderId    | Number        |     是      |      订单号   |

- 响应格式

| 参数名称  | 参数类型  | 是否必选 | 参数说明 |
| -------- | -------- | -------- | --------|
| result    | string    | 是       | 返回结果success |
| username | stirng  | 是 |用户名|
| phonenumber | Number   | 是    | 用户电话   |
|requirement|string|是|需求名称|
|useraddress|string |是|用户地址|
|city|list|是|[citycode, cityname]|   

```python   
return JsonResponse({
    'result':"success",
    'username':user.user_name,
    'phonenumber':user.user_tel,
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


### 7. DistrictToMerchant接口
- 接口URL: 
- 调用方式: GET
- 参数格式:

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
|districtcode    | Number        |     是      |      区编号   |
|MsgBasicDemandID  | string | 是    | 需求大类id   |

- 响应格式

| 参数名称  | 参数类型  | 是否必选 | 参数说明 |
| -------- | -------- | -------- | --------|
| result    | string    | 是       | 返回结果success |
|merchants_list| list | 是| 所属区的商家id，店名|

### 8. MerchantNameToTel接口
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
|merchant_phonenumber| string | 是| 商家电话|

```python
return JsonResponse({
    'result':"success"
    'merchant_phonenumber': merchant_tel
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

### 10. GetOrderList接口

- 接口 URL:未定义
- 调用方式: Get
- 参数格式:

| 参数名称    | 参数类型 | 是否必选 | 参数说明 |
| ----------- | -------- | -------- | -------- |
| Order_status  | int   | 是       | 订单状态  |

- 响应格式

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| Order_list  | list   | 是       | 订单列表 |

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

| 参数名称    | 参数类型 | 是否必选 | 参数说明 |
| ----------- | -------- | -------- | -------- |
|Merchant_id  | Number | 是    | 商家id   |

- 响应格式

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| Order_list  | list   | 是       | 订单列表 |

### 12. UpdateMerchant接口【更新订单记录的接口】

- 接口 URL:未定义
- 调用方式: Get
- 参数格式:
- 接口说明：前端发送订单号，商家id，订单状态，后端将商家id，订单状态更新到数据库的该订单记录中

| 参数名称    | 参数类型 | 是否必选 | 参数说明 |
| ----------- | -------- | -------- | -------- |
|OrderId      | Number | 是    | 订单号   |
|Merchant_id  | Number | 是    | 商家id   |
|Order_status | int    | 是    | 订单状态为进行中  |

- 响应格式

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| result   | string   | 是      | 返回结果success |

### 13. GetOrderAllInfo接口【返回订单信息的接口】

- 接口 URL:未定义
- 调用方式: Get
- 参数格式:
- 接口说明：前端发送订单号，后端将该订单号的所有订单信息返回给前端

| 参数名称    | 参数类型 | 是否必选 | 参数说明 |
| ----------- | -------- | -------- | -------- |
|OrderId      | Number | 是    | 订单号   |

- 响应格式

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
|OrderId      | Number | 是    | 订单号   |
|Username     | string | 是    | 用户名   |
|Requirement  |string  |是     |需求名称  |
|MsgDemandID  | string | 是    | 需求id   |
|Useraddress  |string  |是     |用户地址  |
|Merchant_name|string  | 是    | 商家名   |
|Merchant_id  | Number | 是    | 商家id   |
|Merchant_phonenumber| string | 是| 商家电话|
|Order_create_time | datetime | 是    | 创建时间  |
|Order_completion_time | datetime | 是    | 结束时间  |
|Order_status | int    | 是    | 订单状态  |
|Order_price |double    | 是    | 订单金额  |
|Order_desc | string | 是    | 订单评价  |

### 14. UpdateOrderPrice接口【未定，涉及到扣款操作】

- 接口 URL:未定义
- 调用方式: Get
- 参数格式:

| 参数名称    | 参数类型 | 是否必选 | 参数说明 |
| ----------- | -------- | -------- | -------- |
|OrderId      | Number | 是    | 订单号   |
|MsgDemandID  | string | 是    | 需求id   |
|Pay_type     | int    | 是    | 结算类型  |
|Order_status | int    | 是    | 订单状态为已完成  |

- 响应格式

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| result   | string   | 是      | 返回结果success |

### 15. UpdateOrderDesc接口【更新订单记录的接口】

- 接口 URL:未定义
- 调用方式: Get
- 参数格式:
- 接口说明：前端发送订单号，订单评价，后端将订单评价更新到数据库中

| 参数名称    | 参数类型 | 是否必选 | 参数说明 |
| ----------- | -------- | -------- | -------- |
|OrderId      | Number | 是    | 订单号   |
|Order_desc   | string | 是    | 订单评价  |

- 响应格式

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| result   | string   | 是      | 返回结果success |
