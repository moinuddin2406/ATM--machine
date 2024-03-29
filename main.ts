#!/usr/bin/env node
// shabang
import inquirer from "inquirer"
import chalk from "chalk"
import { log } from "console";
// print welcome message
console.log("\n\tWelcome to ATM project\n");
// initialize user balance and pin code
let myBalance = 50000;
let myPin = 1212;
// input pin
let pinAnswer = await inquirer. prompt ([{
    name : "pin",
    message : "Enter your Pin",
    type :"number",

}])
// validate pin
if (pinAnswer.pin === myPin ) {console.log("You are successfully logged into your account ");   



// selected operation
let operationAns =await inquirer.prompt([{
    name : "operation",
    message :"Please select option",
    type : "list",
    choices :["withdraw","Fastcash","Balance Inquiry"]

}])
// if user select withdraw option
if (operationAns.operation === "withdraw") {
    let amountAmount = await inquirer.prompt([{
  name :"amount",
  message : "Enter your Amount",
  type : "number",      
    }])
    // if user withdraw then remaining balance print
    if (amountAmount.amount <= myBalance) {
       let balance = myBalance -  amountAmount.amount;
       console.log(`Your Remaining Balance is ${balance}`);
    }
    //    if user withdraw > available blance print insuffient balance
    
else{
    console.log("You Have Insufficient Balance");
    
    }    
}
// if user select fast cash option
else if ( 
    operationAns.operation === "Fastcash") {
        let FastcashAns = await inquirer.prompt([{
           name : "amount",
           type: "list" ,
           choices : ["1000","5000","10000","25000"],
        
        }])
        if (FastcashAns.amount <= myBalance) {
            let balance2 = myBalance-FastcashAns.amount;
            console.log(`Your Remaining Balance is ${balance2}`);
            
            
        }
    else{ console.log("You Have Insufficient Balance");
    }   
}
// if user enter > amount than current balance
else if (operationAns.operation=== "Balance Inquiry") {console.log(`your current Balance is ${myBalance}`);   
}}
// if user enter wrong pin
else{
    console.log("invalid pin code.Please try again")}