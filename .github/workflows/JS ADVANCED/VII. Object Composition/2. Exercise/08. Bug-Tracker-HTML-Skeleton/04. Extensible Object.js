function solve() {
    //създаваме обект със зададен прототип
    const proto = {};

    const instance = Object.create(proto);

    //дефинираме функция, копираща свойства и методи
    instance.extend = function(template) {
        //обхождаме шаблона

        for (let prop in template) {
            if (typeof template[prop] === 'function') {
                //ako e funkciq, Копираме върху прототипа
                proto[prop] = template[prop]
            } else {
                instance[prop] = template[prop]
            }
        }
    };
    return instance
}





var template = {
    extensionMethod: function() {
        console.log("From extension method")
    }
};

var testObject = solve();
testObject.extend(template);
// expect(Object.getPrototypeOf(testObject).hasOwnProperty('extensionMethod')).to.equal(true, "Object's prototype was not extended");