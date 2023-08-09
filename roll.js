function getInputValue(){
    const miPrice = document.getElementById("miprice").value;
    const maPrice = document.getElementById("maprice").value;

    document.getElementById("min").innerHTML = miPrice;
    document.getElementById("max").innerHTML = maPrice;
}

  function random() {
    const miPrice = Math.abs(document.getElementById("miprice").value);
    const maPrice = Math.abs(document.getElementById("maprice").value);
    const chance = Math.floor(Math.random() * 100) + 1;
    document.getElementById("price").innerHTML = Math.floor(Math.random() * (maPrice * 100 - miPrice * 100) + miPrice * 100) / 100;
    if (chance <= 50) {
        maPr = (30 / 100) * maPrice;
        console.log("low");
        document.getElementById("price").innerHTML = Math.floor(Math.random() * (maPr* 100 - miPrice * 100) + miPrice * 100) / 100;
    } else if (chance > 50 && chance <= 80){
        console.log("mid");
        document.getElementById("price").innerHTML = Math.floor(Math.random() * ((60 / 100) * maPrice * 100 - ( 30 / 100) * maPrice * 100) + ( 30 / 100) * maPrice * 100) / 100;
    } else {
        console.log("high");
        document.getElementById("price").innerHTML = Math.floor(Math.random() * (maPrice * 100 - ( 60 / 100) * maPrice * 100) + ( 60 / 100) * maPrice * 100) / 100;
    }
}