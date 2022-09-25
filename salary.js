$(document).ready(onReady);

let employeeArray = [];
let monthCost = 0;

function onReady(){
    console.log('Ready Freddy!!!1!1!!!');

    $('#employee-info-form').on('submit', addEmployee);
    
    $('#employee-table').on('click', '.removeEmp', deleteEmployee);

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
    costCruncher();

    render();
}   

function costCruncher() {
    let tempVal = 0;
    
    for ( let person of employeeArray){
        tempVal += Number(person.annualSalary);
        
        //rounds the monthly cost to two decimal places
        monthCost = (tempVal / 12).toFixed(2);
    }
}

function deleteEmployee() {
  
    $(this).parent().parent().remove();
    // if the employeeArray could be updated by the delete function, then simply running the costCruncher function would calculate the new monthly total
    costCruncher();
  }

// render function contains all actions that display state to DOM
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
                <td> 
                    <button class="removeEmp">
                        DELETE EMPLOYEE
                    </button>
                <td>
            </tr>
        `);
    }
    if (monthCost >= 20000){
        $('#total-monthly').css("background-color", "red");
    }

    $('#total-monthly').text(`Total Monthly: ${monthCost}`);
}