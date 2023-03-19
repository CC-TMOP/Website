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
                        <div class="title">订单管理</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="icon">
                            <img src="../static/image/merchant_system/merchant-menu-commodity.png">
                        </div>
                        <div class="title">商品管理</div>
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
                <div class="circle active"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
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
    </div>
</div>
<script>
const circles = document.querySelectorAll('.circle');
const submitBtn = document.querySelector('#submit-btn');
let activeCircleIndex = 0;
submitBtn.addEventListener('click', () => {
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
        this.root.$demoapp.append(this.$Mop);
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
            outer.$menu_order_content.show();
        })
    }

    add_listening_events_phone_number() { // 电话框取消选中后转后端
        let outer = this;
        this.$phonenumber_Input.change(function() {
            if (!$(this).is(":checked")) {
                outer.root.ajax.telToUsername(document.getElementById("telToUsername").value);
            }
        })
    }


}