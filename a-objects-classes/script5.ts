class Carr {
    model: string;
    year: number;
    color: string;
    mileage: number;
    fuelType: string;
    stickShift: boolean;
    paymentMethod: string;
    price: number;

    constructor(model: string, year: number, color: string, mileage: number, fuelType: string, stickShift: boolean, paymentMethod: string, price: number) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
        this.fuelType = fuelType;
        this.stickShift = stickShift;
        this.paymentMethod = paymentMethod;
        this.price = price;
    }

    adjustPriceBasedOnPaymentMethod() {
        if (this.paymentMethod !== "cash") {
            this.price = this.price * 1.25;
        }
    }

    newMileage(mileage: number) {
        this.mileage = mileage;
    }
}

const carr1 = new Carr("tracker", 2021, "red", 36040, "gas", false, "cash", 100000);
const carr2 = new Carr("tracker", 2021, "red", 36040, "gas", false, "loan", 100000);

console.log(carr1);
console.log(carr2);
carr2.adjustPriceBasedOnPaymentMethod();
carr2.newMileage(40000);
console.log(carr2);