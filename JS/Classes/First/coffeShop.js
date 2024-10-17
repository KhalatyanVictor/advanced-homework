class CoffeeShop {
    #orders;

    constructor(name, menu) {
        this._name = name;
        this._menu = menu;
        this.#orders = [];
    }

    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }

    get menu() {
        return this._menu;
    }

    get orders() {
        return this.#orders;
    }
    set orders(newOrders) {
        this.#orders = newOrders;
    }

    addOrder(itemName) {
        const item = this._menu.find(menuItem => menuItem.item === itemName);
        if (item) {
            this.#orders.push(item);
            return "Order added!";
        } else {
            return "This item is currently unavailable!";
        }
    }

    fulfillOrder() {
        if (this.#orders.length > 0) {
            let fulfilledItem = this.#orders.shift();
            return `The ${fulfilledItem.item} is ready!`;
        } else {
            return "All orders have been fulfilled!";
        }
    }

    listOrders() {
        return this.#orders.map(order => order.item);
    }

    dueAmount() {
        return this.#orders.reduce((total, order) => total + order.price, 0);
    }

    cheapestItem() {
        let cheapest = this._menu.reduce((cheapest, item) => {
            return item.price < cheapest.price ? item : cheapest;
        });
        return cheapest.item;
    }

    drinksOnly() {
        return this._menu.filter(item => item.type === 'drink').map(item => item.item);
    }

    foodsOnly() {
        return this._menu.filter(item => item.type === 'food').map(item => item.item);
    }
}

const menu = [
    { item: "cinnamon roll", type: "food", price: 1.50 },
    { item: "iced coffee", type: "drink", price: 0.67 },
    { item: "burger", type: "food", price: 3.00 },
    { item: "coffee", type: "drink", price: 1.00 }
];

const tcs = new CoffeeShop("Vaspur's Coffee Shop", menu);

console.log(tcs.addOrder("iced coffee"));
console.log(tcs.fulfillOrder());
console.log(tcs.addOrder("cinnamon roll"));
console.log(tcs.addOrder("iced coffee"));
console.log(tcs.listOrders());
console.log(tcs.dueAmount());
console.log(tcs.cheapestItem());
console.log(tcs.drinksOnly());
console.log(tcs.foodsOnly());