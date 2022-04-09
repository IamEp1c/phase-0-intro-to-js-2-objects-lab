const employee = {
    name: 'Qaz',
    streetAddress: '101 mains st'
}


function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
         ...employee,
        [key]: value
    }

}

// console.log(updateEmployeeWithKeyAndValue(employee, 'Eren Yeager', 'Attack titan'))

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const copyEmployee = {...employee}
    delete copyEmployee[key]
    return copyEmployee
}

// console.log(deleteFromEmployeeByKey(employee))

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}
