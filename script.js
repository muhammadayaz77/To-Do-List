let ul = document.querySelector('.ul');
let input = document.querySelector('.in')


    function add(){
        if(input.value == '')
{
    alert('List is empty;')
}
else
{

        let li = document.createElement('li');
        li.textContent = input.value;
        ul.appendChild(li);
        input.value = "";
}
    }


function rem(){
   ul.lastChild.remove();
}