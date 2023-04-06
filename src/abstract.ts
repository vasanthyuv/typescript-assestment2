abstract class Customer{
    name:string;
    age:number;
    address:string;
    contactnumber:number;
    constructor(name:string,age:number,address:string,contactnum:number){
        this.name=name;
        this.age=age;
        this.address=address;
        this.contactnumber=contactnum;
    }


public abstract accessdetails():any;
public abstract display():any;


}
class Loan extends Customer{
     loanaccountno:number;
     loantype:string;
     loanamount:number;
     durationinterestrate:number;

constructor(name:string,age:number,address:string,contactnumber:number,loanaccountno:number,loantype:string,loanamount:number,durationinterestrate:number){

super(name,age,address,contactnumber);
this.loanaccountno=loanaccountno;
this.loantype=loantype;
this.loanamount=loanamount;
this.durationinterestrate=durationinterestrate;


}

public display() {
    console.log("name:"+this.name);
    console.log("age"+this.age);
    console.log("address:"+this.address);
    console.log("contactnumber:"+this.contactnumber);
    console.log("loan account no"+this.loanaccountno);
    console.log("loan type"+this.loantype);
    console.log("loan amount"+this.loanamount);
    console.log("duration interest rate"+this.durationinterestrate);

this.interestcalculate();
    
}



 interestcalculate():any{
    console.log("the total interest paid :"+(this.durationinterestrate*this.loanamount*1/100));
    console.log("the total amount paid:"+this.loanamount);


}





}

let l = new Loan("vasanth",12,"vinayagar",982323,121212,"housingloan",20000,13);

l.display()






