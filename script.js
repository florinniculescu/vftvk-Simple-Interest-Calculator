function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();

    } else {
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * parseInt(years) * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var result_line1 = "If you deposit <mark>" + principal + "</mark>, \<br\>";
    var result_line2 = "at an interest rate of <mark>" + rate + "%" + "</mark>. \<br\>";
    var result_line3 = "You will receive an amount of <mark>" + interest + "</mark>, \<br\>";
    var result_line4 = "in the year <mark>" + year + "</mark> \<br\>";
    document.getElementById("result").innerHTML = result_line1 + result_line2 + result_line3 + result_line4; 
    }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}