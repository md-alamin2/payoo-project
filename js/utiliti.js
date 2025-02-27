function getInputById(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseInt(value);
    return convertedValue;
}
function getInnerTextById(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

function setInnerTextByIdAndValue(id, value){
    document.getElementById(id).innerText = value;
}

function handleToggle(id, status){
    document.getElementById(id).style.display= status;
}