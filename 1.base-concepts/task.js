"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b,2)-4*a*c;
  if (d===0){
    arr[0] = -b/(2*a);
  }
  else if (d>0){
    arr[0]=(-b + Math.sqrt(d) )/(2*a);
    arr[1]=(-b - Math.sqrt(d) )/(2*a);

  }
  else {
    arr = [];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (percent === "" || percent === " " || isNaN(Number(percent))) {
    console.log('Параметр "Процентная ставка" содержит неправильное значение "${percent}"');
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (contribution === "" || contribution === " " || isNaN(Number(contribution))) {
    console.log('Параметр "Начальный взнос" содержит неправильное значение "${contribution}"');
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (amount === "" || amount === " " || isNaN(Number(amount))) {
    console.log('Параметр "Общая стоимость содержит неправильное значение "${contribution}"');
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);

  let bodyCredit = amount - contribution;
  let currentDate = new Date();
  let month = Math.floor((countMonths - currentDate)/(1000*60*60*24*30));
  let percentMonth = percent/(100*12);
  let paymentMonth = bodyCredit * (percentMonth + (percentMonth / (Math.pow(1 + percentMonth, month) - 1)));
  
  let totalSum = paymentMonth*month;

  console.log(totalSum.toFixed(2));
  return totalSum.toFixed(2);
}