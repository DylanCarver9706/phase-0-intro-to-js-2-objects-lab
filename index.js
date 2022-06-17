const employee = {
    name: "Bob",
    streetAddress: "123 Cedar Ln",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updateEmployee = { ...employee }
    updateEmployee[key] = value
    return updateEmployee
}
const updateEmployee = updateEmployeeWithKeyAndValue(
    employee,
    name,
    "Sam"
)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
const updateAddress = destructivelyUpdateEmployeeWithKeyAndValue(
    employee, 
    streetAddress, 
    "12 Broadway"
    
)
function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = { ...employee}
    delete newEmployee[key]
    return newEmployee
}
const newEmployee = deleteFromEmployeeByKey(
    employee, 
    key, 
    "Sam"
) 
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key]
    return employee
}
