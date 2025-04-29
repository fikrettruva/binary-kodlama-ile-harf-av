sayilar = [30, 17, 17, 17, 30]
for satir in range(5):
    sayi = sayilar[satir]
    binary = ""
    for index in range(5):
        binary = "" + str(sayi % 2) + binary
        sayi = Math.idiv(sayi, 2)
    for sutun in range(5):
        if binary[sutun] == "1":
            led.plot(sutun, satir)
        else:
            led.unplot(sutun, satir)