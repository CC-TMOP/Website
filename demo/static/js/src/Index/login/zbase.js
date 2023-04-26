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
