const bill_t = document.querySelector("#bill-total");
const slider = document.querySelector("#tip");
const tip_percentage = document.querySelector("#tip-percentage");
const tip_amount = document.querySelector("#tip-amount");
const total_amount = document.querySelector("#total");

bill_t.addEventListener("input", calculateTip);
slider.addEventListener("input", calculateTip);

function calculateTip() {
    if (isNaN(bill_t.value)) {
        alert("ENTER A VALID INPUT");
        return; // Exit the function if the input is not a valid number
    }

    let bill = parseFloat(bill_t.value);
    let tip = parseFloat(slider.value);

    tip_percentage.value = tip;

    let total_tip = parseFloat(((tip * bill) / 100).toFixed(2));

    tip_amount.value = total_tip;

    total_amount.value = parseFloat(bill + total_tip).toFixed(2);
}
