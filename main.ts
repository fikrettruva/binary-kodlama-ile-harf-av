let sayi: number;
let binary: string;
let sayilar = [30, 17, 17, 17, 30]
for (let satir = 0; satir < 5; satir++) {
    sayi = sayilar[satir]
    binary = ""
    for (let index = 0; index < 5; index++) {
        binary = "" + ("" + sayi % 2) + binary
        sayi = Math.idiv(sayi, 2)
    }
    for (let sutun = 0; sutun < 5; sutun++) {
        if (binary[sutun] == "1") {
            led.plot(sutun, satir)
        } else {
            led.unplot(sutun, satir)
        }
        
    }
}
