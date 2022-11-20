function change_theme(button,theme){

    console.log(theme.href)

    if (theme.href === 'http://localhost:63342/calculator/css/css.css'){
        button.innerText = 'Светлая тема'
        theme.href = 'http://localhost:63342/calculator/css/css1.css'
    }else{
        button.innerText = 'Тёмная тема'
        theme.href ='http://localhost:63342/calculator/css/css.css'
    }
}