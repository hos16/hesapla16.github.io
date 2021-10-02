function hesapla() {
    var not1, harfnot, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15;
    //parsefloat()
    s1 = document.getElementById('sinav1').value * 6; //matematik
    s2 = document.getElementById('sinav2').value * 2; //fizik
    s3 = document.getElementById('sinav3').value * 2; //kimya
    s4 = document.getElementById('sinav4').value * 2; //biyo
    s5 = document.getElementById('sinav5').value * 5; //edebiyat
    s6 = document.getElementById('sinav6').value * 4; //ing
    s7 = document.getElementById('sinav7').value * 2; //almanca
    s8 = document.getElementById('sinav8').value * 2; //resim
    s9 = document.getElementById('sinav9').value * 2; //beden
    s10 = document.getElementById('sinav10').value * 2; //felsefe
    s11 = document.getElementById('sinav11').value * 2; //tarih
    s12 = document.getElementById('sinav12').value * 2; //cog
    s13 = document.getElementById('sinav13').value * 1; //astronomi
    s14 = document.getElementById('sinav14').value * 1; //demokrasi 
    s15 = document.getElementById('sinav15').value * 2; //din

    not1 = (s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9 + s10 + s11 + s12 + s13 + s14 + s15) / 37.0;


    if (document.getElementById('sinav1').value >= 00 && document.getElementById('sinav1').value < 50)
        document.getElementById('yüz').innerHTML = "Malesef Matematik 50 Altında olduğu için belge alamadınız!", //mat
        harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').style.display = "block",
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav2').value >= 00 && document.getElementById('sinav2').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız', //fizik
        document.getElementById('yüz').innerHTML = "Malesef Fizik 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block",
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav3').value >= 00 && document.getElementById('sinav3').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız ', //kimya
        document.getElementById('yüz').innerHTML = "Malesef Kimya 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block",
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav4').value >= 00 && document.getElementById('sinav4').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').innerHTML = "Malesef Biyoloji 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block", //biyo
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav5').value >= 00 && document.getElementById('sinav5').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız', //edebiyat
        document.getElementById('yüz').innerHTML = "Malesef Edebiyat 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block",
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav6').value >= 00 && document.getElementById('sinav6').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız', //ing
        document.getElementById('yüz').innerHTML = "Malesef İngilizce 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block",
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav7').value >= 00 && document.getElementById('sinav7').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız', //almanaca
        document.getElementById('yüz').innerHTML = "Malesef Almanca 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block",
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav8').value >= 00 && document.getElementById('sinav8').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız', //resim
        document.getElementById('yüz').innerHTML = "Malesef Görsel/Müzik 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block",
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav9').value >= 00 && document.getElementById('sinav9').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').innerHTML = "Malesef Beden 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block", //beden
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav10').value >= 00 && document.getElementById('sinav10').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').innerHTML = "Malesef Felsefe 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block", //felsefe
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav11').value >= 00 && document.getElementById('sinav11').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').innerHTML = "Malesef Tarih 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block", //tarih
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav12').value >= 00 && document.getElementById('sinav12').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').innerHTML = "Malesef Coğrafya 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block", //cog
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav13').value >= 00 && document.getElementById('sinav13').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').innerHTML = "Malesef Astronomi 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block", //astronomi
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav14').value >= 00 && document.getElementById('sinav14').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').innerHTML = "Malesef Demokrosi 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block", //demok
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav15').value >= 00 && document.getElementById('sinav15').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').innerHTML = "Malesef Din 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block", //din
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (not1 >= 85 && not1 <= 100)
        harfnot = 'Tebrikler! Taktir belgesini Hak kazandınız!',
        document.getElementById('mesaj').style.display = "block",
        setTimeout("document.getElementById('mesaj').style.display = 'none'", 10000);
    else if (not1 >= 70 && not1 <= 85)
        harfnot = 'Tebrikler! Teşekkür belgesini Hak kazandınız!',
        document.getElementById('tesekkür').style.display = "block",
        setTimeout("document.getElementById('tesekkür').style.display = 'none'", 10000);
    else if (not1 >= 0 && not1 < 70)
        harfnot = 'Malesef hiç bir belge kazanamadınız!',
        document.getElementById('hic').style.display = "block",
        setTimeout("document.getElementById('hic').style.display = 'none'", 10000);

    document.getElementById('mesaj').innerHTML = "Aferin " +
        not1 + " puan ile Taktir Belgesini almaya hak kazandınız!";
    document.getElementById('hic').innerHTML = "Malesef " +
        not1 + " puan ile HİÇ BELGE alamadınız!";
    document.getElementById('tesekkür').innerHTML = "Aferin " +
        not1 + " puan ile Teşekkür Belgesini almaya hak kazandınız!";

    document.getElementById('txtortalama').value = not1;
    document.getElementById('txtharf').value = harfnot;

}

function kontrol() {
    var y, x, z, t, o, p, r, s, q, e, r, v, b, c, w;

    y = document.getElementById('sinav1').value;
    x = document.getElementById('sinav2').value;
    z = document.getElementById('sinav3').value;
    t = document.getElementById('sinav4').value;
    o = document.getElementById('sinav5').value;
    p = document.getElementById('sinav6').value;
    r = document.getElementById('sinav7').value;
    s = document.getElementById('sinav8').value;
    q = document.getElementById('sinav9').value;
    e = document.getElementById('sinav10').value;
    r = document.getElementById('sinav11').value;
    v = document.getElementById('sinav12').value;
    b = document.getElementById('sinav13').value;
    c = document.getElementById('sinav14').value;
    w = document.getElementById('sinav15').value;


    if (100 < y)
        document.getElementById('sinav1').value = 100;
    if (100 < x)
        document.getElementById('sinav2').value = 100;
    if (100 < z)
        document.getElementById('sinav3').value = 100;
    if (100 < t)
        document.getElementById('sinav4').value = 100;
    if (100 < o)
        document.getElementById('sinav5').value = 100;
    if (100 < p)
        document.getElementById('sinav6').value = 100;
    if (100 < r)
        document.getElementById('sinav7').value = 100;
    if (100 < s)
        document.getElementById('sinav8').value = 100;
    if (100 < q)
        document.getElementById('sinav9').value = 100;
    if (100 < e)
        document.getElementById('sinav10').value = 100;
    if (100 < r)
        document.getElementById('sinav11').value = 100;
    if (100 < v)
        document.getElementById('sinav12').value = 100;
    if (100 < b)
        document.getElementById('sinav13').value = 100;
    if (100 < c)
        document.getElementById('sinav14').value = 100;
    if (100 < w)
        document.getElementById('sinav15').value = 100;

}
var tarama;

tarama = setInterval(kontrol, 300);