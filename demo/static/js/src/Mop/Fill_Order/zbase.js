class Fill_Order {
    constructor(mop) {
        this.mop = mop;
        this.$Fill_Order = $(`
<div class="menu_order_content_2">
    <h1 class="menu_order_content_h1">订单内容填充</h1>
    <table style="margin: 0 auto; border-collapse: separate; border-spacing: 5px 10px;">
        <tbody>
            <tr>
                <td>
                    <label>订单号:</label>
                </td>
                <td>
                    <input id="orderIdFromUser" class="menu_order_content_orderid_Input" type="text" placeholder="订单号" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>用户名:</label>
                </td>
                <td>
                    <input id="usernameFromTel"class="menu_order_content_username_Input" type="text" placeholder="用户名" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>电话:</label>
                </td>
                <td>
                    <input id="telToUsername" class="menu_order_content_phonenumber_Input" type="text" placeholder="电话" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>需求:</label>
                </td>
                <td>
                    <input id="requirement_readonly" class="requirement_readonly" type="text" placeholder="需求" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>用户地址:</label>
                </td>
                <td>
                    <input id="user_address" class="user_address" type="text" placeholder="用户地址" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>商家:</label>
                </td>
                <td>
                    <select name="merchant" id="merchant">
                        <option value="">-------</option>
                        <option value="1">xx餐馆</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <label>商家联系电话:</label>
                </td>
                <td>
                    <input id="Business_telephone_numberr" class="Business_telephone_numberr" type="text" placeholder="商家联系电话" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <button class="submit-btn" id="submit-btn">提交</button>
                </td>
                <td>
                    <input type="reset">
                </td>
            </tr>
        </tbody>
    </table>
</div>
`);

        this.$Fill_Order.hide();
        
        this.mop.$menu_order_content.append(this.$Fill_Order);
    }
}