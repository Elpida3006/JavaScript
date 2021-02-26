class CristhmasDinner {
    constructor(budget) {

        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    //validate that the budget (the budget cannot be negative 
    get budget() {
        return this._budget
    }
    set budget(value) {
        if (Number(value) > 0) {
            this._budget = value
        } else {
            throw new Error(`The budget cannot be a negative number`)
        }
    }

    //array that has the type of the product and the price for it
    shopping(product) {
        let [typeProduct, priceProduct] = product
        if (+priceProduct > this.budget) {
            throw new Error(`Not enough money to buy this product`)
        } else {
            this.products.push(typeProduct)
            this.budget -= priceProduct;
            return `You have successfully bought ${typeProduct}!`
        }



    }
    recipes(reciepe) {
        let { recipeName: recipeName, productsList: productsList } = reciepe
        //Ако всички продукти от productList присъстват в масива продукти,
        productsList.map(product => {
            if (!this.products.includes(product)) { throw new Error("We do not have this product"); }
        });
        this.dishes.push(reciepe);
        return `${recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish) {
        //search property in object- recipeName in array this.dishes
        let searchDish = this.dishes.filter(dishCompleted => dishCompleted.recipeName == dish)
        if (!searchDish) {
            throw new Error(`We do not have this dish`)
        }
        if (this.guests[name]) {
            throw new Error(`This guest has already been invited`)
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }
    showAttendance() {

        //search property in object- (this.guests) do you have at  property  object's-(reciepe) in array (this.dishes)
        let result = '';
        Object.entries(this.guests).forEach(nameDish => {
            let product = this.dishes.find(reciepe => reciepe.recipeName == nameDish[1])
            result += `${nameDish[0]} will eat ${nameDish[1]}, which consists of ${product.productsList.join(', ')}\n`
        });
        return result.trim()
    }
}
let dinner = new CristhmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});
dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());