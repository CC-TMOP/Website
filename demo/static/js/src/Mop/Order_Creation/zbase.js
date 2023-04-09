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
                    <input type="submit">
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
        this.$phonenumber_Input = this.$Order_Create.find(".menu_order_content_phonenumber_Input");
        this.mop.$menu_order_content.append(this.$Order_Create);

        this.start();
    }

    start() {
        this.appendRequirements();
        this.add_listening_events_phone_number();
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
}