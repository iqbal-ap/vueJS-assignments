<script setup>
import { computed, reactive, ref, toRef } from 'vue'

const props = defineProps({
  msg: String,
})
const data = reactive({
  result: 0,
  display: 0,
  operator: '',
  tempNumber: 0,
  afterEqual: false,
  decimalMode: false,
  tempNumberMode: false,
})

function clearAll() {
  data.result = 0;
  data.tempNumber = 0;
  data.operator = '';
  data.display = data.result;
  data.afterEqual = false;
  data.decimalMode = false;
  return;
}
function changeSign() {
  data.result *= -1;
  data.display = data.result;
  data.afterEqual = false;
  return;
}
function toPercent() {
  data.result /= 100;
  data.display = data.result;
  data.afterEqual = false;
  return;
}
function getNumber(thisEvent) {
  const value = thisEvent.target.innerHTML;
  if (data.operator) {
    const decimalPoint = data.decimalMode && Number.isInteger(data.tempNumber)? '.' : '';
    data.tempNumber = Number(data.tempNumber.toString() + decimalPoint + value);
    data.display = data.tempNumber;
  } else {
    if (data.afterEqual) {
      data.result = 0;
      data.afterEqual = false;
    }
    const decimalPoint = data.decimalMode && Number.isInteger(data.display) ? '.' : '';
    data.result = Number(data.result.toString() + decimalPoint + value);
    data.display = data.result;
  }

  return;
}
function toDecimal() {
  if (!data.decimalMode) {
    data.decimalMode = true;
  }
  return;
}
function getOperator(thisOperator) {
  if (data.operator) {
    const newResult = calculate(data.result, data.operator, data.tempNumber)
    data.result = newResult;
    data.display = data.result;
    data.tempNumber = '0';
  }
  
  data.operator = thisOperator;
  data.decimalMode = false;
  return;
}
function getEqual() {
  if (data.operator) {
    const newResult = calculate(data.result, data.operator, data.tempNumber)
    data.result = newResult;
    data.display = data.result;
    data.tempNumber = '0';
    data.operator = '';
    data.afterEqual = true;
  }
}
function calculate(currentVal, operator, newVal) {
  let newResult = 0;
  if (operator === 'divide') {
    newResult = currentVal / newVal;
  } else if (operator === 'times') {
    newResult = currentVal * newVal;
  } else if (operator === 'minus') {
    newResult = currentVal - newVal;
  } else if (operator === 'plus') {
    newResult = currentVal + newVal;
  }
  
  return newResult;
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="container-md">
    <div class="col">
      <table class="table table-bordered">
        <tbody>
          <tr>
            <td id="bootstrap-overrides" class="result" colspan="4">
              {{ data.display }}
            </td>
          </tr>
          <tr>
            <td @click="clearAll">C</td>
            <td @click="changeSign">+/-</td>
            <td @click="toPercent">&percnt;</td>
            <td id="bootstrap-overrides" class="last-column" @click="getOperator('divide')">&divide;</td>
          </tr>
          <tr>
            <td @click="getNumber($event)">7</td>
            <td @click="getNumber($event)">8</td>
            <td @click="getNumber($event)">9</td>
            <td id="bootstrap-overrides" class="last-column" @click="getOperator('times')">&times;</td>
          </tr>
          <tr>
            <td @click="getNumber($event)">4</td>
            <td @click="getNumber($event)">5</td>
            <td @click="getNumber($event)">6</td>
            <td id="bootstrap-overrides" class="last-column" @click="getOperator('minus')">&minus;</td>
          </tr>
          <tr>
            <td @click="getNumber($event)">1</td>
            <td @click="getNumber($event)">2</td>
            <td @click="getNumber($event)">3</td>
            <td id="bootstrap-overrides" class="last-column" @click="getOperator('plus')">&plus;</td>
          </tr>
          <tr>
            <td @click="getNumber($event)" colspan="2">0</td>
            <td @click="toDecimal">.</td>
            <td id="bootstrap-overrides" class="last-column" @click="getEqual">&equals;</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
#bootstrap-overrides.result {
  background-color: #333;
  color: #fff;
}

#bootstrap-overrides.last-column {
  background-color: orange;
  color: #fff;
}

#bootstrap-overrides.last-column:active {
  background-color: #333;
  opacity: 0.5;
  color: #fff;
}

.table td:not(#bootstrap-overrides):active {
  background-color: #333;
  opacity: 0.5;
  color: #fff;
}
</style>
