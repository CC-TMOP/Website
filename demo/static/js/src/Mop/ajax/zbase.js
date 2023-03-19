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

    
}