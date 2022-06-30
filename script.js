'use strict'

const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")


number1.addEventListener('change', total)
number2.addEventListener('change', total)


function total(){

    let total = parseInt(number1.value) + parseInt(number2.value) // valueの値を数値に変換して代入

    if(!isNaN(total)){

        document.getElementById("outPut").innerHTML = `数値の合計は${total}です`

    }else{
        document.getElementById("outPut").innerHTML = "数値を入力してください"
    }
}