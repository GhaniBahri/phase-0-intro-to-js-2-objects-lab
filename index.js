// Write your solution in this file!
const employee = {
    name: 'a', streetAddress:'b'
}
function updateEmployeeWithKeyAndValue(obj, key, value){
    const obj2 = {...obj}
    obj2[key]= value
    return obj2
    
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
     obj[key] = value
     return obj
}
function deleteFromEmployeeByKey(obj, key){
    const obj2 = {...obj}
    delete obj2[key]
    return obj2
}
function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}