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
