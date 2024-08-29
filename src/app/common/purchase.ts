import { Address } from "./address";
import { Customer } from "./customer";
import { Order } from "./order";
import { OrderItem } from "./order-item";

export class Purchase {
    customer: Customer | null;
    shippingAddress: Address | null;
    billingAddress: Address | null;
    order: Order | null;
    orderItems: OrderItem[] | [];

    constructor(purchase?: Purchase){
        this.customer = purchase ? purchase.customer : null;
        this.shippingAddress = purchase ? purchase.shippingAddress : null;
        this.billingAddress = purchase ? purchase.billingAddress : null;
        this.order = purchase ? purchase.order : null;
        this.orderItems = purchase ? purchase.orderItems : [];
    }
}
