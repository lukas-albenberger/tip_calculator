function calculateTip() {
    var billAmount = document.getElementById("billAmt").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numOfPeople = document.getElementById("peopleAmount").value;

    if (billAmount === "" || serviceQuality == 0) {
        alert("please enter values");
        return;
    }

    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
    
    document.getElementById("each").style.display = "none"; }
    else {
        document.getElementById("each").style.display = "block";
    }

    const total = (billAmount * serviceQuality) / numOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";

    document.getElementById("calculate").onclick = function()
    {    
        calculateTip();
    }
};