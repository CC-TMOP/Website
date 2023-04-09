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
            url:"",
            type:"GET",
            data:{
                OrderId:OrderId,
            },
            success:function(resp) {
                if(resp.result==="success") {
                    var input = $('table tr[data-id="username"] input[type="text"]');
                    input.val(resp.username);
                    
                    outer.root.mop.hide_item();
                    outer.root.item2.$Fill_Order.show();
                    outer.root.mop.$menu_order_content.show();
                }
            }
        });
    }
    
}