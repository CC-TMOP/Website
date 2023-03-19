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



}