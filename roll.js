function getInputValue(){
    const miPrice = document.getElementById("miprice").value;
    const maPrice = document.getElementById("maprice").value;

    document.getElementById("min").innerHTML = miPrice;
    document.getElementById("max").innerHTML = maPrice;
}

function random() {
    const miPrice = Math.ceil(document.getElementById("miprice").value);
    const maPrice = Math.floor(document.getElementById("maprice").value);
    document.getElementById("price").innerHTML = Math.floor(Math.random() * (maPrice * 100 - (miPrice+1) * 100) + miPrice * 100) / 100;
  }