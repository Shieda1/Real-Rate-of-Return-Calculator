// https://www.omnicalculator.com/finance/real-rate-of-return

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const realrateofreturnRadio = document.getElementById('realrateofreturnRadio');
const nominalrateofreturnRadio = document.getElementById('nominalrateofreturnRadio');
const inflationrateRadio = document.getElementById('inflationrateRadio');

let realrateofreturn;
let nominalrateofreturn = v1;
let inflationrate = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

realrateofreturnRadio.addEventListener('click', function() {
  variable1.textContent = 'Nominal rate of return';
  variable2.textContent = 'Inflation rate';
  nominalrateofreturn = v1;
  inflationrate = v2;
  result.textContent = '';
});

nominalrateofreturnRadio.addEventListener('click', function() {
  variable1.textContent = 'Real rate of return';
  variable2.textContent = 'Inflation rate';
  realrateofreturn = v1;
  inflationrate = v2;
  result.textContent = '';
});

inflationrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Real rate of return';
  variable2.textContent = 'Nominal rate of return';
  realrateofreturn = v1;
  nominalrateofreturn = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(realrateofreturnRadio.checked)
    result.textContent = `Real rate of return = ${computerealrateofreturn().toFixed(2)}`;

  else if(nominalrateofreturnRadio.checked)
    result.textContent = `Nominal rate of return = ${computenominalrateofreturn().toFixed(2)}`;

  else if(inflationrateRadio.checked)
    result.textContent = `Inflation rate = ${computeinflationrate().toFixed(2)}`;
})

// calculation

function computerealrateofreturn() {
  return  (((1 + (Number(nominalrateofreturn.value) / 100)) / (1 + (Number(inflationrate.value) / 100))) - 1) * 100;
}

function computenominalrateofreturn() {
  return (((Number(realrateofreturn.value) / 100) * (1 + (Number(inflationrate.value) / 100))) - 1) * 100;
}

function computeinflationrate() {
  return (((1 + (Number(nominalrateofreturn.value) / 100)) / (1 + (Number(realrateofreturn.value) / 100))) - 1) * 100;
}