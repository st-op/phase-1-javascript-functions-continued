function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun('bathe my dog')

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}
mondayWork('work from home')

function wrapAdjective(symbol = "*") {
    return function superCool(description = "a hard worker", phrase = "You are") {
      return `${phrase} ${symbol}${description}${symbol}!`;
    };
  }
wrapAdjective('||')("a dedicated programmer");

// You are *a hard worker* 
// you are ||a dedicated programmer||