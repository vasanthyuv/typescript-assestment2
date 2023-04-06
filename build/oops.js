"use strict";
class Account {
    balance(balance, interest) {
        if (interest != 0) {
            console.log("savings account has been updated with new balance:" + (balance));
        }
        else {
            console.log("Current account has been updated with new balance:" + (balance));
        }
    }
}
let sav = new Account();
sav.balance(2000, 100);
let cur = new Account();
cur.balance(40000, null);
