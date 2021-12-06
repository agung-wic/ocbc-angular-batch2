// hello world
const hello: string = 'Hello World!';

console.log(hello);

// variable and data type in typescript
let address: string = 'Madiun'
let age: number = 23
let item: number | string = 105
let isActive: boolean = true

// console.log("I life in "+address)
// console.log("I'm "+age+" years old")
// console.log("just an item: "+ item)
// console.log("Is it valid? "+isActive)

// Parameter Function

function getProfileTS(name: string, age: number) {
    console.log(`Hello, ${name}!, your age is ${age} old`)
}

// getProfileTS('Agung', 23)

// Array declaration and assignment

let itemsTS: (string | number | boolean)[]
itemsTS = ['Sepatu', 'Sandal', false, 1, 2]

// console.log(itemsTS)

// object declaration

let personTS: {
    name: string,
    age: number,
    address?: string
} = {
    name: 'Agung',
    age: 23
}

// console.log(personTS)

// interface

interface Phone {
    brand: string,
    merk: string,
    type: string,
    price: number,
    features?: string[]
}

let myPhone: Phone[] = [
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
]

// console.log(myPhone[0])

// class

class Customer {
    name: string
    age: number
    money: number
    items: string[] = ['Buku', 'Laptop']

    constructor(name: string, age: number, money: number) {
        this.name = name
        this.age = age
        this.money = money
    }

    updateDataMoney(money: number) {
        this.money = money
    }

    addItem(itemName: any) {
        this.items.push(itemName)
    }
}

const agung = new Customer('agung', 23, 10000000)
agung.updateDataMoney(15000000)
agung.addItem('Smartphone')

// console.log(agung)

class Shop {
    customer: Customer[] = []

    addCustomer(newCustomer: Customer) {
        this.customer.push(newCustomer)
    }
}

const shopee = new Shop()
shopee.addCustomer(agung)
// console.log(shopee)

// Data Modifier Public

class Employee {
    public code: string
    constructor(public name: string) {
        this.name = name
    }

    getCode() {
        return this.code
    }
}

class SalesEmployee extends Employee {
    getSalesCode() {
        return 'sales ' + this.name + this.code
    }
}

let emp = new Employee('Mawar')
emp.code = "123"
// console.log(emp.name)

// Data Modifier Private

// class Employee1{
//     private code: string
//     constructor(private name: string){
//         this.name = name
//     }

//     getCode(){
//         return this.code
//     }
// }

// class SalesEmployee1 extends Employee1{
//     getSalesCode(){
//         return 'sales '+ this.name + this.code
//     }
// }
// let emp1 = new Employee1('Mawar')
// emp1.code = "123"

// Data Modifier Protected

// class Employee2 {
//     protected code: string
//     constructor(protected name: string) {
//         this.name = name
//     }

//     getCode() {
//         return this.code
//     }
// }

// class SalesEmployee2 extends Employee2 {
//     getSalesCode() {
//         return 'sales ' + this.name + this.code
//     }
// }
// let emp2 = new Employee2('Mawar')
// emp2.code = "123"

