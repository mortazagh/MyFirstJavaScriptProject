//variable Define
//var In1, In2, output;
var In1 = 0, In2 = 0, output = 0;
var i = 0, j = 0, ArrayI = [], ArrayO = [];

function Income() {
    ArrayI[i] = document.getElementById("id_income_1").value;
    In1 = parseInt(In1) + parseInt(ArrayI[i]);
    i++;
    // NOTE: Id should be chosen with no whitespace in the middle
    // TODO: Perhaps change it to show_income
    document.getElementById("show in come").innerHTML = In1;
}

function outcome() {
    ArrayO[j] = document.getElementById("id_outcome1").value
    In2 = parseInt(In2) + parseInt(ArrayO[j]);
    j++;
    // TODO: Same for the id here
    document.getElementById("show out come").innerHTML = In2;
}

function Compare() {
    change = In1 - In2
    if (change > 0)
        output = " Good life !";
    else if (change < 0)
        output = "Awsome Life!!!";
    else
        output = "SoSO life";
    document.getElementById("Output").innerHTML = output + "  " + change;
}

function Analyze() {
    change = In1 - In2
    if (change > In2 * 0.5)
        output = " Wow Slow Down !";
    else
        output = "Hmm it is Good !";

    document.getElementById("modal_text").innerHTML = output;
}
