class Order_Create {
    constructor(mop) {
        this.mop = mop;
        this.$Order_Create = $(`
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
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="Order_Create_Submit_div">
                        <button class="Order_Create_Submit_Button" id="Order_Create_Submit_Button">提交</button>
                    </div>
                </td>
                <td>
                    <input type="reset">
                </td>
            </tr>       
        </tbody>
    </table>
</div>
`);
        this.$Order_Create.hide();
        this.$menu_order_content_submit = this.$Order_Create.find(".Order_Create_Submit_Button");
        this.$phonenumber_Input = this.$Order_Create.find(".menu_order_content_phonenumber_Input");
        this.mop.$menu_order_content.append(this.$Order_Create);

        this.start();
    }

    start() {
        this.appendRequirements();
        this.add_listening_events_phone_number();
        this.add_listening_events_submit();
    }

    appendRequirements() {
        this.mop.root.ajax.GetRequirements();
    }

    add_listening_events_phone_number() { // 电话框取消选中后转后端
        let outer = this;

        this.$phonenumber_Input.change(function() {
            if (!$(this).is(":checked")) {
                console.log("电话框取消选中后转后端");
                outer.mop.root.ajax.telToUsername(document.getElementById("telToUsername").value);
            }
        })
    }

    add_listening_events_submit() {
        let outer = this;
        this.$menu_order_content_submit.click(function() {
            var myselect=document.getElementById("requirement");
            var index=myselect.selectedIndex ;
            if (index <= 0) {
                return;
            }
            var username = document.getElementById("usernameFromTel").value;
            var tel = document.getElementById("telToUsername").value;
            var requirement_id = myselect.options[index].value;
            outer.mop.root.ajax.PostOrderinfo(username, tel, requirement_id);
        });
    }
}