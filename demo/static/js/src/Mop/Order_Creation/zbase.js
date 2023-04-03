class Order_Create {
    constructor(mop) {
        this.mop = mop;
        this.$Order_Create = $(`
<div class="circle-container">
    <div class="circle active">1</div>
    <div>—————</div>
    <div class="circle">2</div>
    <div>—————</div>
    <div class="circle">3</div>
    <div>—————</div>
    <div class="circle">4</div>
</div>
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
`);
        this.$Order_Create.hide();
        
        this.mop.$menu_order_content.append(this.$Order_Create);
    }
}