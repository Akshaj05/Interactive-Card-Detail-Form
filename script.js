let flag = 0;
function validation()
{
    let x = document.getElementById("name_inpt").value;
    let y = document.getElementById("number_inpt").value;
    let z = document.getElementById("month_inpt").value;
    let a = document.getElementById("year_inpt").value;
    let b = document.getElementById("cvc_inpt").value;

    if(x.length == 0)
    {
        document.getElementById("name_validation").innerHTML = "Can't Be Blank";
    }
    if(isNaN(x) == false && x.length != 0)
    {
        document.getElementById("name_validation").innerHTML = "Wrong format, Use only letters";
        document.getElementById("name").innerHTML = x;
    }
    if(isNaN(x) == true && x.length != 0)
    {
        document.getElementById("name_validation").innerHTML = "";
        document.getElementById("name").innerHTML = x;
        flag++;
    }

    if(y.length == 0)
    {
        document.getElementById("number_validation").innerHTML = "Can't Be Blank";
    }
    if(isNaN(y) == true && y.length != 0)
    {
        document.getElementById("number_validation").innerHTML = "Wrong format, Use only numbers";
        document.getElementById("card-number").innerHTML = y;
    }
    if(isNaN(y) == false && y.length != 16)
    {
        document.getElementById("number_validation").innerHTML = "Wrong format, Use 16 digit number";
        document.getElementById("card-number").innerHTML = y;
    }
    if(isNaN(y) == false && y.length == 16)
    {
        document.getElementById("number_validation").innerHTML = "";
        document.getElementById("card-number").innerHTML = y;
        flag++;
    }
    if(z.length == 0)
    {
        document.getElementById("month_validation").innerHTML = "Can't Be Blank";
    }
    if(isNaN(z) == true && z.length != 0)
    {
        document.getElementById("month_validation").innerHTML = "Wrong format, Use only numbers";
        document.getElementById("month").innerHTML = z;
    }
    if(isNaN(z) == false && z.length != 2)
    {
        document.getElementById("month_validation").innerHTML = "Wrong format, Use 2 digit number";
        document.getElementById("month").innerHTML = z;
    }
    if(isNaN(z) == false && z.length == 2)
    {
        document.getElementById("month_validation").innerHTML = "";
        document.getElementById("month").innerHTML = z;
        flag++;
    }
    if(a.length == 0)
    {
        document.getElementById("year_validation").innerHTML = "Can't Be Blank";
    }
    if(isNaN(a) == true && a.length != 0)
    {
        document.getElementById("year_validation").innerHTML = "Wrong format, Use only numbers";
        document.getElementById("year").innerHTML = a;
    }
    if(isNaN(a) == false && a.length != 2)
    {
        document.getElementById("year_validation").innerHTML = "Wrong format, Use 2 digit number";
        document.getElementById("year").innerHTML = a;
    }
    if(isNaN(a) == false && a.length == 2)
    {
        document.getElementById("year_validation").innerHTML = "";
        document.getElementById("year").innerHTML = a;
        flag++;
    }
    if(b.length == 0)
    {
        document.getElementById("cvc_validation").innerHTML = "Can't Be Blank";
    }
    if(isNaN(b) == true && b.length != 0)
    {
        document.getElementById("cvc_validation").innerHTML = "Wrong format, Use only numbers";
        document.getElementById("cvv").innerHTML = b;
    }
    if(isNaN(b) == false && b.length != 3)
    {
        document.getElementById("cvc_validation").innerHTML = "Wrong format, Use 3 digit number";
        document.getElementById("cvv").innerHTML = b;
    }
    if(isNaN(b) == false && b.length == 3)
    {
        document.getElementById("cvc_validation").innerHTML = "";
        document.getElementById("cvc").innerHTML = b;
        flag++;
    }
    switch_section();
    
}

function switch_section()
{
    if(flag == 5)
    {
        document.getElementById("right_sec").style.display = "none";
        document.getElementById("completed_sec").style.display = "flex";
    }
    console.log(flag);
}
