class Mop {
    constructor(root) {
        this.root = root;
        this.$Mop = $(`
<div class="navbar">
    <div class="hamburger">
        <i class="fas fa-bars"></i>
    </div>
    <div class="logo">
        <a href="#">养老系统</a>
    </div>
</div>
<div class="wrapper">
    <div class="sidebar">
        <div class="bg_shadow"></div>
        <div class="sidebar_inner">
            <div class="close">
                <i class="fas fa-times"></i>
            </div>
            <ul class="siderbar_menu">
                <li>
                    <a href="">
                        <div class="icon">  
                            <img src="../static/image/merchant_system/merchant-home.png">
                        </div>
                        <div class="title">商家首页</div>
                    </a>
                </li>
                <li class="merchant_system_menu_order">
                    <a href="#">
                        <div class="icon">
                            <img src="../static/image/merchant_system/merchant-menu-order.png">
                        </div>
                        <div class="title">订单创建</div>
                    </a>
                </li>
                <li class="merchant_system_order_fill">
                    <a href="#">
                        <div class="icon">
                            <img src="../static/image/merchant_system/merchant-menu-commodity.png">
                        </div>
                        <div class="title">填充订单</div>
                    </a>
                </li>
                <li class="merchant_system_order_list">
                    <a href="#">
                        <div class="icon">
                            <img src="../static/image/merchant_system/merchant-menu-customer.png">
                        </div>
                        <div class="title">订单列表</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="icon">
                            <img src="../static/image/merchant_system/merchant-menu-finance.png">
                        </div>
                        <div class="title">财务管理</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="icon">
                            <img src="../static/image/merchant_system/merchant-menu-operational-analysis.png">
                        </div>
                        <div class="title">经营分析</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="icon">
                            <img src="../static/image/merchant_system/merchant-menu-promotion.png">
                        </div>
                        <div class="title">门店推广</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="icon">
                            <img src="../static/image/merchant_system/merchant-menu-marketing.png">
                        </div>
                        <div class="title">营销活动</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="icon">
                            <img src="../static/image/merchant_system/merchant-menu-delivery.png">
                        </div>
                        <div class="title">配送服务</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="icon">
                            <img src="../static/image/merchant_system/merchant-menu-setting.png">
                        </div>
                        <div class="title">店铺设置</div>
                    </a>
                </li>
            </ul>
            
        </div>
    </div>
    <div class="main_container">
        <div id="name"></div>
        <div class="content">
            <div class="item1">Item1</div>
            <div class="item_set">
                <div class="item2">Item2</div>
                <div class="item3">Item3</div>
                <div class="item4">Item4</div>
            </div>
        </div>
        <div class="menu_order_content" style="align-content: center;">

        </div>
    </div>
</div>
<script>
$.get("", function (data) {
    for(var i = 0; i < data.requirements.length; i++){
        // 循环遍历接收的含有所有省的列表
        $new = $("<option value="+data.requirements[i][0]+">"+data.requirements[i][1]+"</option>");
        // 将该省份添加到前端的下拉列表中
        $("#requirement").append($new);
    }
});
</script>
        `);
        this.$merchant_system_order_create = this.$Mop.find(".merchant_system_menu_order");
        this.$merchant_system_order_fill = this.$Mop.find(".merchant_system_order_fill");
        this.$merchant_system_order_list = this.$Mop.find(".merchant_system_order_list");
        this.$index_content = this.$Mop.find(".content");
        this.$menu_order_content = this.$Mop.find(".menu_order_content");
        this.$phonenumber_Input = this.$Mop.find(".menu_order_content_phonenumber_Input");
        this.$menu_order_content.hide();
        this.root.$demoapp.append(this.$Mop);
        this.item1;
        this.start();
    }
    start() {
        this.add_listening_events(); // 监听事件集
    }
    add_listening_events() {
        let outer = this;
        this.listening_merchant_system_order_create(); // 订单创建button提交事件
        this.listening_merchant_system_order_fill(); // 订单填充
        this.listening_merchant_system_order_list(); // 订单列表
        this.add_listening_events_phone_number();
    }

    listening_merchant_system_order_create() {
        let outer = this;
        this.$merchant_system_order_create.click(function(){
            outer.hide_item();
            outer.root.item1.$Order_Create.show();
            outer.$menu_order_content.show();
        })
    }

    listening_merchant_system_order_fill() {
        let outer = this;
        this.$merchant_system_order_fill.click(function() {
            outer.hide_item();
            outer.root.item2.$Fill_Order.show();
            outer.$menu_order_content.show();
        })
    }

    listening_merchant_system_order_list() {
        let outer = this;
        this.$merchant_system_order_list.click(function(){
            // outer.root.ajax.GetOrderList(1);
            outer.root.item3.orders = ["1", "2", "3"];
            outer.root.item3.updateTable();
            outer.hide_item();
            outer.root.item3.$Order_List.show();
            outer.$menu_order_content.show();
        })
    }

    add_listening_events_phone_number() { // 电话框取消选中后转后端
        let outer = this;
        this.$phonenumber_Input.change(function() {
            if (!$(this).is(":checked")) {
                console.log("电话框取消选中后转后端");
                outer.root.ajax.telToUsername(document.getElementById("telToUsername").value);
            }
        })
    }

    hide_item() {
        this.$index_content.hide();
        this.root.item1.$Order_Create.hide();
        this.root.item2.$Fill_Order.hide();
        this.root.item3.$Order_List.hide();
    }

}