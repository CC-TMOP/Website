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
