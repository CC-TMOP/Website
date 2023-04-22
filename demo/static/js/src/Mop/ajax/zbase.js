class Ajax {
    constructor(root) {
        this.root = root;
        this.start();
    }

    start() {

    }

    telToUsername(phoneNumber) {
        let outer = this;
        $.ajax({
            url:"http://123.57.187.239:8000/api/person/getTelToUserName/",
            type:"GET",
            data:{
                user_tel:phoneNumber,
            },
            success:function(resp) {
                if(resp.result==="success") {
                    console.log(resp.user_name);
                    document.getElementById("usernameFromTel").value = resp.user_name;
                }
            }
        });
    }

    GetRequirements() {
        let outer = this;
        $.ajax({
            url:"http://123.57.187.239:8000/api/person/getRequirements/",
            type:"GET",
            data:{},
            success:function(resp) {
                if(resp.result==="success") {
                    for(var i = 0;i < resp.requirements.length; i++){
                        let $new = $("<option value="+resp.requirements[i][0]+">"+resp.requirements[i][1]+"</option>");
                        $("#requirement").append($new);
                    }
                }
            }
        });
    }

    GetOrderList(order_status) {
        let outer = this;
        $.ajax({
            url:"http://123.57.187.239:8000/api/person/getOrderList/",
            type:"GET",
            data:{
                order_status:order_status,
            },
            success:function(resp) {
                if(resp.result==="success") {
                    outer.root.item3.orders = resp.OrddersId;
                }
            }
        });
    }

    GetOrderIdToInfo(OrderId) {
        let outer = this;
        $.ajax({
            url:"http://123.57.187.239:8000/api/person/getOrderIdToInfo/",
            type:"GET",
            data:{
                order_number:OrderId,
            },
            success:function(resp) {
                if(resp.result==="success") {
                    var inputusername = $('table tr[data-id="username"] input[type="text"]');
                    var inputorderid = $('table tr[data-id="orderid"] input[type="text"]');
                    var inputtel = $('table tr[data-id="phonenumber"] input[type="text"]');
                    var inputrequirement = $('table tr[data-id="requirement"] input[type="text"]');
                    var inputuseraddress = $('table tr[data-id="useraddress"] input[type="text"]');

                    inputorderid.val(OrderId);
                    inputusername.val(resp.username);
                    inputtel.val(resp.phonenumber);
                    inputrequirement.val(resp.requirement);
                    inputuseraddress.val(resp.useraddress);
                    outer.DistrictToMerchant(resp.city, OrderId);
                    outer.root.mop.hide_item();
                    outer.root.item2.$Fill_Order.show();
                    outer.root.mop.$menu_order_content.show();
                }
            }
        });
    }

    DistrictToMerchant(districtcode, order_number) {
        let outer = this;
        $.ajax({
            url:"http://123.57.187.239:8000/api/person/getDistrictToMerchant/",
            type:"GET",
            data:{
                order_number:order_number,
                districtcode:districtcode,
            },
            success:function(resp) {
                if(resp.result==="success") {
                    for(var i = 0;i < resp.districts.length; i++){
                        let $new = $("<option value="+resp.districts[i][0]+">"+resp.districts[i][1]+"</option>");
                        $("#merchant").append($new);
                    }
                }
            }
        });
    }

    MerchantToTel(id) {
        let outer = this;
        $.ajax({
            url:"http://123.57.187.239:8000/api/person/getMerchantNameToTel/",
            type:"GET",
            data:{
                merchant_id:id,
            },
            success:function(resp) {
                if(resp.result==="success") {
                    document.getElementById("Business_telephone_numberr").value = resp.merchant_phonenumber;
                }
            }
        });
    }
    
    PostOrderinfo(username, tel, requirement_id) {
        let outer = this;
        $.ajax({
            url:"http://123.57.187.239:8000/api/person/postOrderinfo/",
            type:"POST",
            data:{
                username:username,
                user_tel:tel,
                requirement_id:requirement_id,
            },
            success:function(resp) {
                if(resp.result==="success") {
                    console.log("创建订单成功");
                }
            }
        });
    }
}