function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function validate()
{
    var total=0;
    for(var i=1;i<=12;i++)
    {
        var item="item"+i;
        var val=parseInt(document.getElementById(item).value);
        total=total+val;
    }
    if(total==0)
    {
        alert("Select gift to buy");
        return false;
    }
    else{
        return true;
    }
}