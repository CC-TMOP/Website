class Fill_Order {
    constructor(mop) {
        this.mop = mop;
        this.$Fill_Order = $(`
<div class="menu_order_content_2">
    <h1 class="menu_order_content_h1">订单内容填充</h1>
    <table style="margin: 0 auto; border-collapse: separate; border-spacing: 5px 10px;">
        <tbody>
            <tr>
                <td>
                    <label>订单号:</label>
                </td>
                <td>
                    <input id="orderIdFromUser" class="menu_order_content_orderid_Input" type="text" placeholder="订单号" readonly="readonly">
                </td>
            </tr>
            <tr data-id="username">
                <td>
                    <label>用户名:</label>
                </td>
                <td>
                    <input id="usernameFromTel"class="menu_order_content_username_Input" type="text" placeholder="用户名" readonly="readonly">
                </td>
            </tr>
            <tr data-id="phonenumber">
                <td>
                    <label>电话:</label>
                </td>
                <td>
                    <input id="telToUsername" class="menu_order_content_phonenumber_Input" type="text" placeholder="电话" readonly="readonly">
                </td>
            </tr>
            <tr data-id="requirement">
                <td>
                    <label>需求:</label>
                </td>
                <td>
                    <input id="requirement_readonly" class="requirement_readonly" type="text" placeholder="需求" readonly="readonly">
                </td>
            </tr>
            <tr data-id="useraddress">
                <td>
                    <label>用户地址:</label>
                </td>
                <td>
                    <input id="user_address" class="user_address" type="text" placeholder="用户地址" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>商家:</label>
                </td>
                <td>
                    <select name="merchant" id="merchant">
                        <option value="">-------</option>
                        <option value="1">xx餐馆</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <label>商家联系电话:</label>
                </td>
                <td>
                    <input id="Business_telephone_numberr" class="Business_telephone_numberr" type="text" placeholder="商家联系电话" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <button class="submit-btn" id="submit-btn">提交</button>
                </td>
                <td>
                    <input type="reset">
                </td>
            </tr>
        </tbody>
    </table>
</div>
`);

        this.$Fill_Order.hide();
        
        this.mop.$menu_order_content.append(this.$Fill_Order);
    }
}class Mop {
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
                <li class="merchant_system_track_status">
                    <a href="#">
                        <div class="icon">
                            <img src="../static/image/merchant_system/merchant-menu-finance.png">
                        </div>
                        <div class="title">订单状态追踪</div>
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
        this.$merchant_system_track_status = this.$Mop.find(".merchant_system_track_status");
        this.$index_content = this.$Mop.find(".content");
        this.$menu_order_content = this.$Mop.find(".menu_order_content");
        

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
        this.listening_merchant_system_track_status(); // 订单状态追踪
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
            outer.root.ajax.GetOrderList(1);
            // outer.root.item3.orders = ["1", "2", "3"];
            outer.root.item3.updateTable();
            outer.hide_item();
            outer.root.item3.$Order_List.show();
            outer.$menu_order_content.show();
        })
    }

    listening_merchant_system_track_status() {
        let outer = this;
        this.$merchant_system_track_status.click(function(){
            outer.hide_item();
            outer.root.item4.$Track_Status.show();
            outer.$menu_order_content.show();
        })
        
    }

    hide_item() {
        this.$index_content.hide();
        this.root.item1.$Order_Create.hide();
        this.root.item2.$Fill_Order.hide();
        this.root.item3.$Order_List.hide();
        this.root.item4.$Track_Status.hide();
    }

}class Order_Create {
    constructor(mop) {
        this.mop = mop;
        this.$Order_Create = $(`
<div class="menu_order_content_1">
    <h1 class="menu_order_content_h1">订单创建</h1>
    <table style="margin: 0 auto; border-collapse: separate; border-spacing: 5px 10px;">
        <tbody>
            <tr>
                <td>
                    <label>用户名:</label>
                </td>
                <td>
                    <input id="usernameFromTel"class="menu_order_content_username_Input" type="text" placeholder="用户名" readonly="readonly">
                </td>
            </tr>
            <br>
            <br>
            <tr>
                <td>
                    <label>电话:</label>
                </td>
                <td>
                    <input id="telToUsername" class="menu_order_content_phonenumber_Input" type="text" placeholder="输入电话" onfocus="this.placeholder=''" onblur="this.placeholder='输入电话'">
                </td>
            </tr>
            <br>
            <br>
            <tr>
                <td>
                    <label>需求:</label>
                </td>
                <td>
                    <select name="requirement" id="requirement">
                        <option value="">请选择服务</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="submit">
                </td>
                <td>
                    <input type="reset">
                </td>
            </tr>       
        </tbody>
    </table>
</div>
`);
        this.$Order_Create.hide();
        this.$phonenumber_Input = this.$Order_Create.find(".menu_order_content_phonenumber_Input");
        this.mop.$menu_order_content.append(this.$Order_Create);

        this.start();
    }

    start() {
        this.appendRequirements();
        this.add_listening_events_phone_number();
    }

    appendRequirements() {
        this.mop.root.ajax.GetRequirements();
    }

    add_listening_events_phone_number() { // 电话框取消选中后转后端
        let outer = this;
        this.$phonenumber_Input.change(function() {
            if (!$(this).is(":checked")) {
                console.log("电话框取消选中后转后端");
                outer.mop.root.ajax.telToUsername(document.getElementById("telToUsername").value);
            }
        })
    }
}class Order_List {
    constructor(mop) {
        this.mop = mop;
        this.orders = [];
        this.$Order_List = $(`
<div class="menu_order_content_3">
    <h1 class="menu_order_content_h1">订单列表</h1>
    <table id="order-table">
        <tbody>
            <tr>
                <td>订单号</td>
            </tr>
        </tbody>
    </table>
</div>
`);
        this.$Order_List.hide();
        this.mop.$menu_order_content.append(this.$Order_List);
        this.start();
    }

    start() {
        
    }

    updateTable() {
        let outer = this;
        const tableBody = document.querySelector("#order-table tbody");
         // 清空当前表格
        tableBody.innerHTML = "";
        this.orders.forEach((order) => {
            const row = document.createElement("tr");
            const cell = document.createElement("td");
            cell.textContent = order;
            row.appendChild(cell);
            cell.addEventListener("click", () => {
                outer.mop.root.ajax.GetOrderIdToInfo(order);
                // outer.mop.hide_item();
                // outer.mop.root.item2.$Fill_Order.show();
                // outer.mop.$menu_order_content.show();
            });
            tableBody.appendChild(row);
        });
    }
}class Track_Status {
    constructor(mop) {
        this.mop = mop;
        this.$Track_Status = $(`
<div class="menu_order_content_4">
    <h1 class="menu_order_content_h1">订单状态追踪</h1>
    <table style="margin: 0 auto; border-collapse: separate; border-spacing: 5px 10px;">
        <tbody>
            <tr>
                <td>
                    <label>订单号:</label>
                </td>
                <td>
                    <input id="orderIdFromUser" class="menu_order_content_orderid_Input" type="text" placeholder="订单号" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>用户名:</label>
                </td>
                <td>
                    <input id="orderIdFromUser" class="menu_order_content_orderid_Input" type="text" placeholder="用户名" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>电话号:</label>
                </td>
                <td>
                    <input id="orderIdFromUser" class="menu_order_content_orderid_Input" type="text" placeholder="电话号" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>需求:</label>
                </td>
                <td>
                    <input id="orderIdFromUser" class="menu_order_content_orderid_Input" type="text" placeholder="需求" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>用户地址:</label>
                </td>
                <td>
                    <input id="orderIdFromUser" class="menu_order_content_orderid_Input" type="text" placeholder="用户地址" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>商家:</label>
                </td>
                <td>
                    <input id="orderIdFromUser" class="menu_order_content_orderid_Input" type="text" placeholder="商家" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>商家联系方式:</label>
                </td>
                <td>
                    <input id="orderIdFromUser" class="menu_order_content_orderid_Input" type="text" placeholder="商家联系方式" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>创建时间:</label>
                </td>
                <td>
                    <input id="orderIdFromUser" class="menu_order_content_orderid_Input" type="text" placeholder="创建时间" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>状态:</label>
                </td>
                <td>
                    <input id="orderIdFromUser" class="menu_order_content_orderid_Input" type="text" placeholder="状态" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>结算方式:</label>
                </td>
                <td>
                    <select name="merchant" id="merchant">
                        <option value="">-------</option>
                        <option value="1">现金</option>
                        <option value="2">账户余额</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <button class="submit-btn" id="submit-btn">订单完成</button>
                </td>
                <td>
                    <button class="submit-btn" id="submit-btn">订单修改</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
`);
        this.$Track_Status.hide();
        
        this.mop.$menu_order_content.append(this.$Track_Status);
    }
}class Ajax {
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
    
}export class Mainapp {
    constructor(id) {
        this.id = id;
        this.$demoapp = $('#' + id);
        this.mop = new Mop(this);
        this.ajax = new Ajax(this);
        this.item1 = new Order_Create(this.mop);
        this.item2 = new Fill_Order(this.mop);
        this.item3 = new Order_List(this.mop);
        this.item4 = new Track_Status(this.mop);
        this.start();
    }

    start() {

    }
}

// $(document).ready(function(){
//     $(".siderbar_menu li").click(function(){
//         $(".siderbar_menu li").removeClass("active");
//         $(this).addClass("active");
//     })
//     $(".hamburger").click(function(){
//         $(".wrapper").addClass("active");
//     })
//     $(".bg_shadow,.close").click(function(){
//         $(".wrapper").removeClass("active");
//     })

//     var x=document.getElementById("name");
//     x.innerHTML="商家xxx";
// })


/*

<div class="circle-container">
    <div class="circle active">1</div>
    <div>—————</div>
    <div class="circle">2</div>
    <div>—————</div>
    <div class="circle">3</div>
    <div>—————</div>
    <div class="circle">4</div>
</div>
<script>
const circles = document.querySelectorAll('.circle');
const submitBtn = document.querySelector('#submit-btn');
let activeCircleIndex = 0;
submitBtn.addEventListener('click', () => {
    console.log("circles clicked");
    // 取消当前圆圈的填充色
    circles[activeCircleIndex].classList.remove('active');
    // 计算下一个圆圈的索引
    activeCircleIndex = (activeCircleIndex + 1) % circles.length;
    // 填充下一个圆圈的颜色
    circles[activeCircleIndex].classList.add('active');
  });
</script>
*/