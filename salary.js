$(document).ready(onReady);

let employeeArray = [];

function onReady(){
    console.log('Ready Freddy!!!1!1!!!');

    $('#employee-info-form').on('submit', addEmployee);
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
}