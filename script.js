'use strict'

const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")


number1.addEventListener('change', radiocheck)
number2.addEventListener('change', radiocheck)


function result(op, total) {
    document.getElementById("enzansi").innerHTML = op

    if(!isNaN(total)){
        document.getElementById("outPut").innerHTML = `計算結果は${total}です`
    }else{
        document.getElementById("outPut").innerHTML = "数値を入力してください"
    }
}


function radiocheck(){
    let elements = document.getElementsByName("calc")
    let checkValue = ''

    for(let i = 0; i < elements.length; i++){
        if(elements[i].checked){
        checkValue = elements[i].value
        }
    }

        if(checkValue == "tasu"){
            let total = parseInt(number1.value) + parseInt(number2.value)

            result('+', total)
           
        }else if(checkValue == "hiku"){
            let total = parseInt(number1.value) - parseInt(number2.value)

           result('-', total)
            
        }else if(checkValue == "kake"){
            let total = parseInt(number1.value) * parseInt(number2.value)

            result('✕', total)
    
        }else if(checkValue == "wari"){
            let total = parseInt(number1.value) / parseInt(number2.value)

            result('÷', total)

        }
}

