    let a = 0
    let operation = ''
    let last = ''
    let now = ''

    function get(button,wind){
        if(a===1){
            wind.value =''
            wind.value  = wind.value +  button.value
            a=0
        }else{
            wind.value  = wind.value +  button.value
        }


    }

    function summ(button,wind,wind2){
        last = wind.value
        wind2.value = button.value + wind.value
        a = 1
        operation = '+'
        console.log(wind2.value)
    }

    function clear_input(button,wind,wind2){
        wind2.value = ''
        wind.value = ''
        a = 0
        operation = ''
    }

    function total(button,wind,wind2){
        if(operation ==='+'){
            last = Number(last)
            now = Number(wind.value)
            wind2.value = last + now
        }
    }
