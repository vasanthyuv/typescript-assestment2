"use strict";
class Customer {
    constructor(name, age, address, contactnum) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.contactnumber = contactnum;
    }
}
class Loan extends Customer {
    constructor(name, age, address, contactnumber, loanaccountno, loantype, loanamount, durationinterestrate) {
        super(name, age, address, contactnumber);
        this.loanaccountno = loanaccountno;
        this.loantype = loantype;
        this.loanamount = loanamount;
        this.durationinterestrate = durationinterestrate;
    }
    display() {
        console.log("name:" + super.name);
        console.log("age" + super.age);
        console.log("address:" + super.address);
        console.log("contactnumber:" + super.contactnumber);
        console.log("loan account no" + this.loanaccountno);
        console.log("loan type" + this.loantype);
        console.log("loan amount" + this.loanamount);
        console.log("duration interest rate" + this.durationinterestrate);
        this.interestcalculate();
    }
    interestcalculate() {
        console.log("the total interest paid :" + (this.durationinterestrate * this.loanamount * 1 / 100));
        console.log("the total amount paid:" + this.loanamount);
    }
}
let l = new Loan("vasanth", 12, "vinayagar", 982323, 121212, "housingloan", 20000, 13);
l.display();
