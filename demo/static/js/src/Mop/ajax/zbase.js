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
            url:"",
            type:"GET",
            data:{
                phoneNumber:phoneNumber,
            },
            success:function(resp) {
                if(resp.result==="success") {
                    console.log("匹配到该电话号码对应的User");
                    document.getElementById("usernameFromTel").value = resp.username;
                }
            }
        });
    }

    GetOrderList(Order_status) {
        let outer = this;
        $.ajax({
            url:"",
            type:"GET",
            data:{
                Order_status:Order_status,
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
                    outer.root.mop.hide_item();
                    outer.root.item2.$Fill_Order.show();
                    outer.root.mop.$menu_order_content.show();
                }
            }
        });
    }
    
}