let array = [];

function add()
{
    let input = document.querySelector(".in").value;
    array.push(input);
    document.querySelector(".col2").innerHTML = array;
}
function del(){
    array.pop(); 
    document.querySelector(".col2").innerHTML = array;
}  