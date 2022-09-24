$(document).ready(onReady);

let employeeArray = [];
let monthCost = 0;

function onReady(){
    console.log('Ready Freddy!!!1!1!!!');

    $('#employee-info-form').on('submit', addEmployee);
    // any button push, whether its the submit, or a delete button, should
    // trigger costCruncher
    $(':button').on('click', costCruncher)

}

function addEmployee(event){
    event.preventDefault();

    // new employee info entered in field
    let newEmployee = {
        firstName: $('#first-name').val(),
        lastName: $('#last-name').val(),
        employeeID: $('#employee-id').val(),
        jobTitle: $('#job-title').val(),
        annualSalary: $('#annual-salary').val()
    }

    // push new employee object to array
    employeeArray.push(newEmployee);

    render();
}   

function costCruncher() {
    console.log('CRUNCH');
    for ( let person of employeeArray){
        console.log(person.annualSalary);
    }
    

}

function render(){

    
    $('#employee-table').empty();
    

    for( let employee of employeeArray){
        $('#employee-table').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.employeeID}</td>
                <td>${employee.jobTitle}</td>
                <td>${employee.annualSalary}</td>
            </tr>
        `);
    }

    // $('#total-monthly').append(`Total Monthly: ${monthCost}`);
}