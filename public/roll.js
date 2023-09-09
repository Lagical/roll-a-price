function getInputValue(){
    const miPrice = document.getElementById("miprice").value;
    const maPrice = document.getElementById("maprice").value;

    document.getElementById("min").innerHTML = miPrice + " lowest";
    document.getElementById("max").innerHTML = maPrice + " highest";
}

  function random() {
    let history= [];
    const miPrice = Math.abs(document.getElementById("miprice").value);
    const maPrice = Math.abs(document.getElementById("maprice").value);
    const maPr1 = (30 / 100) * maPrice;
    const maPr2 = (60 / 100) * maPrice;
    const chance = Math.floor(Math.random() * 100) + 1;
    if (chance <= 50) {
        const price = Math.floor(Math.random() * (maPr1 * 100 - miPrice * 100) + miPrice * 100) / 100 + " e";
        document.getElementById("price").innerHTML = price;
        history.push(price)
        console.log(price + " low");
    } else if (chance > 50 && chance <= 80){
        const price = Math.floor(Math.random() * (maPr2 * 100 - ( 30 / 100) * maPrice * 100) + maPr1 * 100) / 100 + " e";
        document.getElementById("price").innerHTML = price;
        history.push(price)
        console.log(price + " mid");
    } else {
        const price = Math.floor(Math.random() * (maPrice * 100 - maPr2 * 100) + maPr2 * 100) / 100 + " e";
        document.getElementById("price").innerHTML = price;
        history.push(price)
        console.log(price + " high");
    }
        let list = document.getElementById("priceHistory");
        for (i = 0; i < history.length; ++i) {
            let li = document.createElement('li');
            li.innerText = history[i];
            list.appendChild(li);
        }
        console.log(history);
}