let first  = ''
let second = ''
let operation = ''
let finish = false
wind1 = document.getElementById('wind')

    function cleara(){
        wind1.textContent =''
        first = ''
        finish = ''
        operation = ''
    }
    function clearlast(){
        wind1.textContent = wind1.textContent.slice(0,-1)
    }
    function get(button){
        if(finish===true){
            finish = false
            wind1.textContent =''
            wind1.textContent = wind1.textContent + button.value
        }else{
            wind1.textContent = wind1.textContent + button.value
        }

    }
    function operat(button){
        // if( wind1.textContent.indexOf(operation) === true ) { // находим подстроку
        //     return
        // }
        if(operation!==''){
            second = wind1.textContent.replace(first,'')
            second = second.replace(operation,'')
            second =Number(second)
            if(operation ==='+'){
                wind1.textContent = first + second
                first = first + second
            }
            if(operation ==='-'){
                wind1.textContent = first - second
                first = first - second
            }
            if(operation === '*'){
                wind1.textContent = first * second
                first = first * second
            }
            if(operation ==='/'){
                wind1.textContent = first / second
                first = first / second
            }
            wind1.textContent = wind1.textContent + button.value
            operation = button.value
        }else{
            first = Number(wind1.textContent)
            wind1.textContent = wind1.textContent +  button.value
            operation = button.value
        }

    }
    function total(){
        second = wind1.textContent.replace(first,'')
        second = second.replace(operation,'')
        second =Number(second)

        if(operation ==='+'){
            wind1.textContent = first + second
        }
        if(operation ==='-'){
            wind1.textContent = first - second
        }
        if(operation === '*'){
            wind1.textContent = first * second
        }
        if(operation ==='/'){
            wind1.textContent = first / second
        }
        first  = ''
        second = ''
        operation = ''
        finish = true
    }
    function operat2(button){

        first = Number(wind1.textContent)
        if(button.value === '^'){
            wind1.textContent = first**2
        }
        if(button.value === '1/x'){
            wind1.textContent = 1/first
        }
        if(button.value === '2'){
            wind1.textContent = Math.sqrt(first)
        }
        if(button.value === '%'){
            wind1.textContent = first/100
        }
        if(button.value === '+/-'){
            wind1.textContent = first *(-1)
        }
    }

