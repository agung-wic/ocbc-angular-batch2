var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// hello world
var hello = 'Hello World!';
console.log(hello);
// variable and data type in typescript
var address = 'Madiun';
var age = 23;
var item = 105;
var isActive = true;
// console.log("I life in "+address)
// console.log("I'm "+age+" years old")
// console.log("just an item: "+ item)
// console.log("Is it valid? "+isActive)
// Parameter Function
function getProfileTS(name, age) {
    console.log("Hello, ".concat(name, "!, your age is ").concat(age, " old"));
}
// getProfileTS('Agung', 23)
// Array declaration and assignment
var itemsTS;
itemsTS = ['Sepatu', 'Sandal', false, 1, 2];
// console.log(itemsTS)
// object declaration
var personTS = {
    name: 'Agung',
    age: 23
};
var myPhone = [
    {
        brand: "Xiaomi",
        merk: "Redmi",
        type: "Xiaomi Redmi Note 8",
        price: 2100000,
        features: ["Quad Rear Camera", "MIUI 12"]
    },
    {
        brand: "Apple",
        merk: "Iphone",
        type: "Iphone 13",
        price: 20000000
    }
];
// console.log(myPhone[0])
// class
var Customer = /** @class */ (function () {
    function Customer(name, age, money) {
        this.items = ['Buku', 'Laptop'];
        this.name = name;
        this.age = age;
        this.money = money;
    }
    Customer.prototype.updateDataMoney = function (money) {
        this.money = money;
    };
    Customer.prototype.addItem = function (itemName) {
        this.items.push(itemName);
    };
    return Customer;
}());
var agung = new Customer('agung', 23, 10000000);
agung.updateDataMoney(15000000);
agung.addItem('Smartphone');
// console.log(agung)
var Shop = /** @class */ (function () {
    function Shop() {
        this.customer = [];
    }
    Shop.prototype.addCustomer = function (newCustomer) {
        this.customer.push(newCustomer);
    };
    return Shop;
}());
var shopee = new Shop();
shopee.addCustomer(agung);
// console.log(shopee)
// Data Modifier Public
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
        this.name = name;
    }
    Employee.prototype.getCode = function () {
        return this.code;
    };
    return Employee;
}());
var SalesEmployee = /** @class */ (function (_super) {
    __extends(SalesEmployee, _super);
    function SalesEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SalesEmployee.prototype.getSalesCode = function () {
        return 'sales ' + this.name + this.code;
    };
    return SalesEmployee;
}(Employee));
var emp = new Employee('Mawar');
emp.code = "123";
console.log(emp.name);
