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
                <li>
                    <a href="#">
                        <div class="icon">
                            <img src="../static/image/merchant_system/merchant-menu-commodity.png">
                        </div>
                        <div class="title">填充订单</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="icon">
                            <img src="../static/image/merchant_system/merchant-menu-customer.png">
                        </div>
                        <div class="title">顾客管理</div>
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
            <div class="circle-container">
                <div class="circle active">1</div>
                <div>—————</div>
                <div class="circle">2</div>
                <div>—————</div>
                <div class="circle">3</div>
                <div>—————</div>
                <div class="circle">4</div>
            </div>
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
                                    <option value="1">送餐</option>
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
                        <button id="submit-btn">提交</button>
                    </tbody>
                </table>
            </div>
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
                        <tr>
                            <td>
                                <label>用户名:</label>
                            </td>
                            <td>
                                <input id="usernameFromTel"class="menu_order_content_username_Input" type="text" placeholder="用户名" readonly="readonly">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>电话:</label>
                            </td>
                            <td>
                                <input id="telToUsername" class="menu_order_content_phonenumber_Input" type="text" placeholder="电话" readonly="readonly">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>需求:</label>
                            </td>
                            <td>
                                <input id="requirement_readonly" class="requirement_readonly" type="text" placeholder="需求" readonly="readonly">
                            </td>
                        </tr>
                        <tr>
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
        </div>
    </div>
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
        this.$merchant_system_menu_order = this.$Mop.find(".merchant_system_menu_order");
        this.$index_content = this.$Mop.find(".content");
        this.$menu_order_content = this.$Mop.find(".menu_order_content");
        this.$phonenumber_Input = this.$Mop.find(".menu_order_content_phonenumber_Input");
        this.$menu_order_content.hide();
        this.$menu_order_content_2 = this.$Mop.find(".menu_order_content_2");
        this.$menu_order_content_1 = this.$Mop.find(".menu_order_content_1");
        // this.$submit-btn = this.$Mop.find("");
        this.root.$demoapp.append(this.$Mop);
        this.item1;
        this.start();
    }
    start() {
        this.add_listening_events(); // 监听事件集
    }
    add_listening_events() {
        let outer = this;
        this.add_listening_events_menu_order(); // 订单管理button提交事件
        this.add_listening_events_phone_number();
    }

    add_listening_events_menu_order() {
        console.log("menu_order");
        let outer = this;
        this.$merchant_system_menu_order.click(function(){
            console.log("click");
            outer.$index_content.hide();
            // outer.$menu_order_content.show();
            outer.$menu_order_content_2.hide();
            outer.item1 = new Order_Create(outer);
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


}class Order_Create {
    constructor(mop) {
        this.mop = mop;
        this.$Order_Create = $(`
<div class="circle-container">
    <div class="circle active">1</div>
    <div>—————</div>
    <div class="circle">2</div>
    <div>—————</div>
    <div class="circle">3</div>
    <div>—————</div>
    <div class="circle">4</div>
</div>
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
                        <option value="1">送餐</option>
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
            <button id="submit-btn">提交</button>
        </tbody>
    </table>
</div>
`);
        // this.$Order_Create.hide();
        
        this.mop.$menu_order_content.append(this.$Order_Create);
        this.$Order_Create.show();
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

    
}export class Mainapp {
    constructor(id) {
        this.id = id;
        this.$demoapp = $('#' + id);
        this.mop = new Mop(this);
        this.ajax = new Ajax(this);
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