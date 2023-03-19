class Ajax {
    constructor(root) {
        this.root = root;
        this.start();
    }

    start() {

    }

    login_on_remote(username, password) { //在远程服务器上登录
        let outer = this;
        $.ajax({
            url:"http://123.57.187.239:8000/api/login/",
            type:"GET",
            data:{
                username:username,
                password:password,
            },
            success:function(resp) {
                if(resp.result==="success") {
                    console.log("success_login");
                    window.location.href="http://123.57.187.239:8000/merchant/";
                } else {
                    outer.root.login.$login_error_message.html(resp.result);
                    console.log("fail_login");
                }
            }
        });
    }

    register_on_remote(username,password,password_confirm) { //在远程服务器上注册
        let outer = this;
        console.log(username);
        console.log(password);
        console.log(password_confirm);
        $.ajax({
            url: "http://123.57.187.239:8000/api/register/",
            type:"GET",
            data:{
                username:username,
                password:password,
                password_confirm:password_confirm,
            },
            success:function(resp) {
                console.log(resp);
                if(resp.result === "success") {
                    // location.reload();   //刷新页面
                    window.location.href="http://123.57.187.239:8000/merchant/";
                } else {
                    outer.root.register.$register_error_message.html(resp.result);
                }
            }
        });
    }

    match_service(code) {
        let outer = this;
        $.ajax({
            url: "http://123.57.187.239:8000/api/match/",
            type: "GET",
            data:{
                code:code,
            },
            success:function(resp) {
                console.log(resp);
            }
        })
    }
}
class MainLogin  {
    constructor(root) {
        this.root = root;
        this.$MainLogin = $(`
<div class="Main-Login">
    <div class="Main-Login-Box">
        <div class="Main-Login-Box-spaceShip"></div>
        <div class="Main-Login-Box-Username">
            <div class="Main-Login-Item">
                <input class="Main-Login-Box-Username-Input" type="text" placeholder="输入用户名" onfocus="this.placeholder=''" onblur="this.placeholder='输入用户名'">
            </div>
        </div>
        <div class="Main-Login-Box-Password">
            <div class="Main-Login-Item">
                <input class="Main-Login-Box-Password-Input" type="password" placeholder="输入密码" onfocus="this.placeholder=''" onblur="this.placeholder='输入密码'">
            </div>
        </div>
        <div class="Main-Login-Box-Submit">
            <button class="Main-Login-Box-Submit-Button">登录</button>
        </div>
        <div class="Main-Login-Error-Messages">
        </div>
        <br>
        <div class="Main-Login-Box-Option">
            注册
        </div>
    </div>
</div>
`);

        this.$login = this.$MainLogin.find(".Main-Login-Box");
        this.$login_username = this.$login.find(".Main-Login-Box-Username-Input");
        this.$login_password = this.$login.find(".Main-Login-Box-Password-Input");
        this.$login_submit = this.$login.find(".Main-Login-Box-Submit button");
        this.$login_register = this.$login.find(".Main-Login-Box-Option");
        this.$login_error_message = this.$login.find(".Main-Login-Error-Messages")

        this.root.$demoapp.append(this.$MainLogin);
        this.start();
    }
    start() {
        this.add_listening_events(); // 监听事件集
    }
    add_listening_events() {
        let outer = this;
        this.add_listening_events_login(); // 登录提交事件
    }
    add_listening_events_login() {
        let outer = this;
        this.$login_register.click(function(){
            outer.register();
    });
        this.$login_submit.click(function(){
            let username = outer.$login_username.val();
            let password = outer.$login_password.val();
            outer.$login_username.empty();
            outer.$login_password.empty();
            outer.root.ajax.login_on_remote(username,password); // 调用远端登录函数
            // let code = "010111010100000101";
            // outer.root.ajax.match_service(code);
        });
    }

    register() {
        this.hide();
        this.root.register.show();
        
    }

    hide(){
        this.$MainLogin.hide();
    }

    show(){
        this.$MainLogin.show();
    }
}
class MainRegister {
    constructor(root) {
        this.root = root;
        this.$MainRegister = $(`
<div class="Main-Register">         
    <div class="Main-Register-Box">
        <div class="Main-Register-Box-spaceShip"></div>
        <div class="Main-Register-Box-Title">
            注册
        </div>
        <div class="Main-Register-Box-Username">
            <div class="Main-Register-Item">
                <input class="Main-Register-Box-Username-Input" type="text" placeholder="输入用户名" onfocus="this.placeholder=''" onblur="this.placeholder='输入用户名'">
            </div>
        </div>
        <div class="Main-Register-Box-Password">
            <div class="Main-Register-Item">
                <input class="Main-Register-Box-Password-Input" type="password" placeholder="输入密码" onfocus="this.placeholder=''" onblur="this.placeholder='输入密码'">
            </div>
        </div>
        <div class="Main-Register-Box-Password-Confirm">
            <div class="Main-Register-Item">
                <input class="Main-Register-Box-Password-Input-Confirm" type="password" placeholder="确认密码" onfocus="this.placeholder=''" onblur="this.placeholder='确认密码'">
            </div>
        </div>
        <div class="Main-Register-Box-Submit">
            <button class="Main-Register-Box-Submit-Button">注册</button>
        </div>
        <div class="Main-Register-Error-Messages">
        </div>
        <br>
        <div class="Main-Register-Box-Option">
            登录
        </div>
    </div>
</div>
        
`);
        this.$register = this.$MainRegister.find(".Main-Register-Box");
        this.$register_username = this.$register.find(".Main-Register-Box-Username-Input");
        this.$register_password = this.$register.find(".Main-Register-Box-Password-Input");
        this.$register_password_confirm = this.$register.find(".Main-Register-Box-Password-Input-Confirm");
        this.$register_submit = this.$register.find(".Main-Register-Box-Submit button");
        this.$register_login = this.$register.find(".Main-Register-Box-Option");
        this.$register_error_message = this.$register.find(".Main-Register-Error-Messages");
        this.$MainRegister.hide();
        this.root.$demoapp.append(this.$MainRegister);
        this.start();
    } 

    start() {
        this.add_listening_events();
    }
    add_listening_events() {
        let outer = this;
        this.add_listening_events_register(); // 注册提交事件
    } 
    add_listening_events_register() {
        let outer = this;
        this.$register_login.click(function(){
            outer.login();
        });
        this.$register_submit.click(function(){
            let username = outer.$register_username.val();
            let password = outer.$register_password.val();
            let password_confirm = outer.$register_password_confirm.val();
            outer.$register_error_message.empty();
            outer.root.ajax.register_on_remote(username,password,password_confirm);
        });
    }
   

    login() {
        this.hide();
        this.root.login.show();
        
    }

    hide(){
        this.$MainRegister.hide();

    }
    show(){
        this.$MainRegister.show();
    }



}export class Mainapp {
    constructor(id) {
        this.id = id;
        this.$demoapp = $('#' + id);
        this.login = new MainLogin(this);
        this.ajax = new Ajax(this);
        this.register = new MainRegister(this);
        this.start();
    }

    start() {

    }
}
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