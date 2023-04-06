interface Savingaccount{
   
    balance(balance:number,interst:number):void;
}

interface Currentaccount{
   balance(balance:number,interest:any):void;
}

class Account implements Savingaccount,Currentaccount{
  


balance(balance:number,interest:any): void {
    if(interest!=0){
   console.log("savings account has been updated with new balance:"+(balance));
    }
    else{
   console.log("Current account has been updated with new balance:"+(balance)); 
}

}
}
let sav:Savingaccount=new Account()
sav.balance(2000,100)

let cur:Currentaccount=new Account()
cur.balance(40000,null)