let ticket = document.getElementById("ticket");
let qty = document.getElementById("qty");
let total = document.getElementById("total");

function update(){

let price = ticket.value;
let jumlah = qty.value;

total.innerHTML = (price * jumlah).toLocaleString();

}

ticket.addEventListener("change",update);
qty.addEventListener("change",update);


function order(){

alert("Order berhasil dikirim!");

}
