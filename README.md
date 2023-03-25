# Website

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

### TelToUsername接口(修改了一下：已弃用)
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


### PostOrderinfo接口 （生成订单）
- 接口URL: 
- 调用方式: POST
- 参数格式:

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| order_number | int   | 是       | 订单号   |
| user_id      | int   | 是       | 用户id   |
| merchant_id  | int   | 是       | 商家id   |

- 响应格式

| 参数名称  | 参数类型  | 是否必选 | 参数说明 |
| --------  | -------- | -------- | --------|
| user_name     | string   | 是       |返回用户名  |
| user_tel      | string   | 否       |返回用户电话|
| user_address  | string   | 否       |返回用户地址|
| merchant_name | string   | 否       |返回商家名  |
| merchant_tel  | string   | 否       |返回商家电话|


### GetRequirements接口
- 接口URL: 
- 调用方式: GET
- 参数格式:

| 参数名称 | 参数类型 | 是否必选 | 参数说明 |
| -------- | -------- | -------- | -------- |
| 无入参 |    |       |    |

- 响应格式

| 参数名称  | 参数类型  | 是否必选 | 参数说明 |
| -------- | -------- | -------- | --------|
| requirements | list   | 是       | [需求id, 需求名] |

- 返回示例
```python
 return JsonResponse({
        'requirement_id': requirements.requirement_id,
        'requirement_name': requirements.requirement_name,
        'requirement_value': requirement_value
    })
```