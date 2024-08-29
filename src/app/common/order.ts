export class Order {
    totalQuantity: number;
    totalPrice: number;

    constructor(order?: Order){
        this.totalQuantity = order ? order.totalQuantity : 0;
        this.totalPrice = order ? order.totalPrice : 0;
    }
}
