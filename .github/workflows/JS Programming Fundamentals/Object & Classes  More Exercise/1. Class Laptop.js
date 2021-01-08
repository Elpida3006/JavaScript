class Laptopinfo {

    constructor(info, quality) {

        this.info = info;
        this.isOn = false;
        this.quality = quality;
    }


    turnOn() {
        this.quality -= 1
        this.isOn = true;
    }

    turnOff() {
        this.quality -= 1
        this.isOn = false;
    }

    showInfo() {
        let laptop = "";
        laptop += (JSON.stringify(this.info))
        return laptop;
    }


    get price() {
        let result;
        result = (800 - (this.info.age * 2) + (this.quality * 0.5));
        return result
    }

}
const Laptop = result;

let laptop = new Laptop({ producer: "Dell", age: 2, brand: "XPS" }, 10);

laptop.turnOn()
laptop.turnOff()
laptop.turnOn()

expect(laptop.info.producer).to.equal("Dell")
expect(laptop.info.age).to.equal(2)
expect(laptop.info.brand).to.equal("XPS")
expect(laptop.isOn).to.equal(true)
expect(laptop.price).to.equal(799.5)