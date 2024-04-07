#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgMagenta.italic("\t\tCURRENCY CONVERTER"));
// Object representing currency exchange rates
const currancy = {
    usd: 1,
    pakistani_Rupee: 277.54,
    Indian_Rupee: 83.3,
    Afghan_Afghani: 71.23,
    Turkish_lira: 32.07,
    Sri_Lankan: 298.61,
    Dubai: 3.67,
    EUR: 0.92,
    Australian_Dollar: 1.52,
    Canadian_Dollar: 1.36,
    Swiss_Franc: 0.9,
    Chinese_Yuan_Renminbi: 7.23,
    Maldivian_Rufiyaa: 15.46,
    Bahraini_Dinar: 0.38,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.green.italic("Select the currency to convert from."),
        type: "list",
        choices: Object.keys(currancy),
    },
    {
        name: "to",
        message: chalk.magenta.red.italic("Select the currency to convert into."),
        type: "list",
        choices: Object.keys(currancy),
    },
    {
        name: "amount",
        message: chalk.magenta.italic("Enter Amount."),
        type: "number",
    },
]);
// Extract exchange rates for selected currencies
let fromAmount = currancy[user_answer.from];
let toAmount = currancy[user_answer.to];
let Amount = user_answer.amount;
// Calculate conversion
let baseAmount = Amount / fromAmount;
let convertAmount = baseAmount * toAmount;
// Output the converted amount
console.log(chalk.yellow("Converted Amount : " + convertAmount));
