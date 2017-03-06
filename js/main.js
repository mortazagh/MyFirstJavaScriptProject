//variable Define
//var In1, In2, output;
In1 = 0, In2 = 0, output = 0;


i = 0;
j = 0;
ArrayI = new Array()
ArrayO = new Array()

function Income() {
    ArrayI[i] = document.getElementById("id_income_1").value;
    In1 = Number(In1) + Number(ArrayI[i]);
    i++;
    document.getElementById("show in come").innerHTML = In1;



}

function outcome() {
    ArrayO[j] = document.getElementById("id_outcome1").value
    In2 = Number(In2) + Number(ArrayO[j]);
    j++;
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