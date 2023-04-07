class Track_Status {
    constructor(mop) {
        this.mop = mop;
        this.$Track_Status = $(`
<div class="menu_order_content_4">
    <h1 class="menu_order_content_h1">订单状态追踪</h1>
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
                    <input id="orderIdFromUser" class="menu_order_content_orderid_Input" type="text" placeholder="用户名" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>电话号:</label>
                </td>
                <td>
                    <input id="orderIdFromUser" class="menu_order_content_orderid_Input" type="text" placeholder="电话号" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>需求:</label>
                </td>
                <td>
                    <input id="orderIdFromUser" class="menu_order_content_orderid_Input" type="text" placeholder="需求" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>用户地址:</label>
                </td>
                <td>
                    <input id="orderIdFromUser" class="menu_order_content_orderid_Input" type="text" placeholder="用户地址" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>商家:</label>
                </td>
                <td>
                    <input id="orderIdFromUser" class="menu_order_content_orderid_Input" type="text" placeholder="商家" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>商家联系方式:</label>
                </td>
                <td>
                    <input id="orderIdFromUser" class="menu_order_content_orderid_Input" type="text" placeholder="商家联系方式" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>创建时间:</label>
                </td>
                <td>
                    <input id="orderIdFromUser" class="menu_order_content_orderid_Input" type="text" placeholder="创建时间" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>状态:</label>
                </td>
                <td>
                    <input id="orderIdFromUser" class="menu_order_content_orderid_Input" type="text" placeholder="状态" readonly="readonly">
                </td>
            </tr>
            <tr>
                <td>
                    <label>结算方式:</label>
                </td>
                <td>
                    <select name="merchant" id="merchant">
                        <option value="">-------</option>
                        <option value="1">现金</option>
                        <option value="2">账户余额</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <button class="submit-btn" id="submit-btn">订单完成</button>
                </td>
                <td>
                    <button class="submit-btn" id="submit-btn">订单修改</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
`);
        this.$Track_Status.hide();
        
        this.mop.$menu_order_content.append(this.$Track_Status);
    }
}