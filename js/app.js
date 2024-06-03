/*Событие клика. Считывает ошибку о неправильном вводе в форме по значению, не отправляя на сервер.
А когда правильно , от отправляет на сервер*/
let btn = document.querySelector("#one");//находим элем
let inp = document.querySelector("#input");
console.log(inp);
// search();
btn.addEventListener('click', checkName);//заметь без скобок т.к. вернет андефайнд до действия пользователя.
// ---------------------------code before and after---------------------------------------
function rextionInput(){
}
function checkName(event){
    if(inp.value == 'Ilona'){
        // event.stopPropagation();
        // event.target.removeEventListener('click', checkName);
        console.log( inp.value + 'Страница перезагрузилась и значене на сервере');
    }
    else{
        alert('введите опять коррекстное значения');
        event.preventDefault()
    }
}
// function search(){
//     alert('hi');
// }


