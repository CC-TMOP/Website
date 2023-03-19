export class Mainapp {
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