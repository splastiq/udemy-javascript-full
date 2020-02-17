'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет за месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
}
//start();

let appData = {
    //budget: money,
    //timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце");
        let b = +prompt("Во сколько обойдется?");
        if (a != "" && b != "" && typeof(a) != null && typeof(b) != null && a.length < 50) {
            appData.expenses[a] = b;
        } else {
            console.log("Bad result!");
            i--;
        }
    }
}
//chooseExpenses();

function detectLevel() {
    switch (true) {
        case (appData.moneyPerDay < 20): console.log("Низкий достаток!"); break;
        case (appData.moneyPerDay > 1000): console.log("Высокий достаток"); break;
        default: console.log("Нормальный достаток"); break;
    }
}
//detectLevel();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ваш бюджет на один день " + appData.moneyPerDay);
}
//detectDayBudget();

function checkSavings() {
    if (appData.savings) {
        let save = +prompt("Введите сумму накоплений");
        let percent = +prompt("Введите под какой процент");
        appData.monthIncome = save / 100 * percent / 12;
        alert(appData.monthIncome);
    } else {
        console.log("Накоплений нет!");
    }
}
//checkSavings();

function chooseOptExpenses() {
    for (let i=1; i<4; i++) {
        let ras = prompt("Введи необязательный расход");
        appData.optionalExpenses[i] = ras;
    }
}
chooseOptExpenses();
console.log(appData.optionalExpenses);
