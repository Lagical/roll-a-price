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
    const maPr1 = (30 / 100) * (maPrice-miPrice) + miPrice;
    const maPr2 = (60 / 100) * (maPrice-miPrice) + miPrice;
    const chance = Math.floor(Math.random() * 100) + 1;
    if (chance <= 50) {
        console.log(maPr1)
        console.log(maPrice)
        console.log(miPrice)
        const price = Math.floor(Math.random() * (maPr1 * 100 - miPrice * 100) + miPrice * 100) / 100 + " e";
        console.log(price + " 1")
        document.getElementById("price").innerHTML = "Current price " + price;
        history.push(price)
    } else if (chance > 50 && chance <= 80){
        const price = Math.floor(Math.random() * (maPr2 * 100 - ( 30 / 100) * maPrice * 100) + maPr1 * 100) / 100 + " e";
        console.log(price + " 2")
        console.log(maPr2)
        document.getElementById("price").innerHTML = "Current price " + price;
        history.push(price)
    } else {
        const price = Math.floor(Math.random() * (maPrice * 100 - maPr2 * 100) + maPr2 * 100) / 100 + " e";
        console.log(price + " 3")
        document.getElementById("price").innerHTML = "Current price " + price;
        history.push(price)
    }
        let list = document.getElementById("priceHistory");
        for (i = 0; i < history.length; ++i) {
            let li = document.createElement('li');
            li.innerText = history[i];
            list.appendChild(li);
        }
        console.log(history);
}