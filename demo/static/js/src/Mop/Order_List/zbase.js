class Order_List {
    constructor(mop) {
        this.mop = mop;
        this.orders = [];
        this.$Order_List = $(`
<div class="menu_order_content_3">
    <h1 class="menu_order_content_h1">订单列表</h1>
    <table id="order-table">
        <tbody>

        </tbody>
    </table>
</div>
`);
        this.$Order_List.hide();
        this.mop.$menu_order_content.append(this.$Order_List);
        this.start();
    }

    start() {
        
    }

    updateTable() {
        let outer = this;
        const tableBody = document.querySelector("#order-table tbody");
         // 清空当前表格
        tableBody.innerHTML = "";
        this.orders.forEach((order) => {
            const row = document.createElement("tr");
            const cell = document.createElement("td");
            cell.textContent = order;
            row.appendChild(cell);
            cell.addEventListener("click", () => {
                outer.mop.root.ajax.GetOrderIdToInfo(order);
                // outer.mop.hide_item();
                // outer.mop.root.item2.$Fill_Order.show();
                // outer.mop.$menu_order_content.show();
            });
            tableBody.appendChild(row);
        });
    }
}