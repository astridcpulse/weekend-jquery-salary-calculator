$(document).ready(onReady);

function onReady(){
    console.log('Ready Freddy!!!1!1!!!');

    $('#employee-info-form').on('submit', addEmployee);
}

function addEmployee(event){
    event.preventDefault();
}