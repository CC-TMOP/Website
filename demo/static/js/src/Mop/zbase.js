export class Mainapp {
    constructor(id) {
        this.id = id;
        this.$demoapp = $('#' + id);
        this.mop = new Mop(this);
        this.ajax = new Ajax(this);
        this.item1 = new Order_Create(this.mop);
        this.item2 = new Fill_Order(this.mop);
        this.item3 = new Order_List(this.mop);
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