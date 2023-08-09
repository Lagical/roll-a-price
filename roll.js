function getInputValue(){
    const miPrice = document.getElementById("miprice").value;
    const maPrice = document.getElementById("maprice").value;

    document.getElementById("min").innerHTML = miPrice + " lowest";
    document.getElementById("max").innerHTML = maPrice + " highest";
}

  function random() {
    const miPrice = Math.abs(document.getElementById("miprice").value);
    const maPrice = Math.abs(document.getElementById("maprice").value);
    const maPr1 = (30 / 100) * maPrice;
    const maPr2 = (60 / 100) * maPrice;
    const chance = Math.floor(Math.random() * 100) + 1;
    if (chance <= 50) {
        console.log("low");
        document.getElementById("price").innerHTML = Math.floor(Math.random() * (maPr1 * 100 - miPrice * 100) + miPrice * 100) / 100 + " e";
    } else if (chance > 50 && chance <= 80){
        console.log("mid");
        document.getElementById("price").innerHTML = Math.floor(Math.random() * (maPr2 * 100 - ( 30 / 100) * maPrice * 100) + maPr1 * 100) / 100 + " e";
    } else {
        console.log("high");
        document.getElementById("price").innerHTML = Math.floor(Math.random() * (maPrice * 100 - maPr2 * 100) + maPr2 * 100) / 100 + " e";
    }
}