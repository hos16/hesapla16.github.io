function hesaplama() {
    var diplomaPuani, diplomaCheck, tytHamPuan, tytYerlestirmePuan, tytTurkceDogru, tytTurkceYanlis, tytTurkceNet, tytTemelMatematikDogru, tytTemelMatematikYanlis, tytTemelMatematikNet, tytSosyalBilimlerDogru, tytSosyalBilimlerYanlis, tytSosyalBilimlerNet, tytFenBilimleriDogru, tytFenBilimleriYanlis, tytFenBilimleriNet;
    var aytmatd, aytmaty, aytmatn, aytkimyad, aytkimyay, aytkimyan, aytbiyolojid, aytbiyolojiy, aytbiyolojin, aytfizikd, aytfiziky, aytfizikn, aytedebiyatd, aytedebiyaty, aytedebiyatn, ayttarih1d, ayttarih1y, ayttarih1n, aytcografya1d, aytcografya1y, aytcografya1n, ayttarih2d, ayttarih2y, ayttarih2n, aytcografya2d, aytcografya2y, aytcografya2n, aytfelsefed, aytfelsefey, aytfelsefen, aytdind, aytdiny, aytdinn, aytdild, aytdily, aytdiln;
    var aytsayısalhampuan, aytsözelhampuan, ayteşithampuan, aytsayısalyerleştirme, aytsözelyerleştirme, ayteşityerleştirme, aytdilhampuan, aytdilyerleştirme;

    diplomaCheck = document.getElementById("diplomaAktif");

    if (diplomaCheck.checked == true) {
        var diplomaPuani = (((document.getElementById("diplomaa").value) * 0.6) / 2);
    } else {
        var diplomaPuani = ((document.getElementById("diplomaa").value) * 0.6);
    }

    tytTurkceDogru = document.getElementById("tyt-t-d").value;
    tytTurkceYanlis = document.getElementById("tyt-t-y").value;

    tytTemelMatematikDogru = document.getElementById("tyt-m-d").value;
    tytTemelMatematikYanlis = document.getElementById("tyt-m-y").value;

    tytSosyalBilimlerDogru = document.getElementById("tyt-s-d").value;
    tytSosyalBilimlerYanlis = document.getElementById("tyt-s-y").value;

    tytFenBilimleriDogru = document.getElementById("tyt-f-d").value;
    tytFenBilimleriYanlis = document.getElementById("tyt-f-y").value;

    tytTurkceNet = tytTurkceDogru - (tytTurkceYanlis / 4);
    tytTemelMatematikNet = tytTemelMatematikDogru - (tytTemelMatematikYanlis / 4);
    tytSosyalBilimlerNet = tytSosyalBilimlerDogru - (tytSosyalBilimlerYanlis / 4);
    tytFenBilimleriNet = tytFenBilimleriDogru - (tytFenBilimleriYanlis / 4);

    document.getElementById("tyt-t-n").value = tytTurkceDogru - (tytTurkceYanlis / 4);
    document.getElementById("tyt-m-n").value = tytTemelMatematikDogru - (tytTemelMatematikYanlis / 4);
    document.getElementById("tyt-s-n").value = tytSosyalBilimlerDogru - (tytSosyalBilimlerYanlis / 4);
    document.getElementById("tyt-f-n").value = tytFenBilimleriDogru - (tytFenBilimleriYanlis / 4);

    tytHamPuan = (tytTurkceNet * 3.25) + (tytTemelMatematikNet * 3.25) + (tytSosyalBilimlerNet * 3.50) + (tytFenBilimleriNet * 3.50) + 100;
    tytYerlestirmePuan = tytHamPuan + parseFloat(diplomaPuani);


    document.getElementById("tyt-ham").value = tytHamPuan;
    document.getElementById("tyt-yer").value = tytYerlestirmePuan;


    /////////////////////////////////////////////////////////////////////////////////////ayt/////////////////////////////////////
    aytmatd = document.getElementById("yks-m-d").value;
    aytmaty = document.getElementById("yks-m-y").value;
    aytmatn = aytmatd - (aytmaty / 4);
    ///////////////////////////////////////////
    aytkimyad = document.getElementById("yks-k-d").value;
    aytkimyay = document.getElementById("yks-k-y").value;
    aytkimyan = aytkimyad - (aytkimyay / 4);
    //////////////////////////////////////////
    aytfizikd = document.getElementById("yks-f-d").value;
    aytfiziky = document.getElementById("yks-f-y").value;
    aytfizikn = aytfizikd - (aytfiziky / 4);
    //////////////////////////////////////////
    aytbiyolojid = document.getElementById("yks-b-d").value;
    aytbiyolojiy = document.getElementById("yks-b-y").value;
    aytbiyolojin = aytbiyolojid - (aytbiyolojiy / 4);
    /////////////////////////////////////////////////////////////////////sözel////////////////////////////////////////////////////////////
    aytedebiyatd = document.getElementById("yks-e-d").value;
    aytedebiyaty = document.getElementById("yks-e-y").value;
    aytedebiyatn = aytedebiyatd - (aytedebiyaty / 4);
    /////////////////////////////////////////
    aytcografya1d = document.getElementById("yks-cog-1-d").value;
    aytcografya1y = document.getElementById("yks-cog-1-y").value;
    aytcografya1n = aytcografya1d - (aytcografya1y / 4);
    ////////////////////////////////////////
    ayttarih1d = document.getElementById("yks-tar-1-d").value;
    ayttarih1y = document.getElementById("yks-tar-1-y").value;
    ayttarih1n = ayttarih1d - (ayttarih1y / 4);
    /////////////////////////////////////////////////////////////////////eşitağırlık/////////////////////////////////////////////////////////
    aytcografya2d = document.getElementById("yks-cog-2-d").value;
    aytcografya2y = document.getElementById("yks-cog-2-y").value;
    aytcografya2n = aytcografya2d - (aytcografya2y / 4);
    /////////////////////////////////////////
    aytfelsefed = document.getElementById("yks-fel-d").value;
    aytfelsefey = document.getElementById("yks-fel-y").value;
    aytfelsefen = aytfelsefed - (aytfelsefey / 4);
    /////////////////////////////////////////
    aytdind = document.getElementById("yks-din-d").value;
    aytdiny = document.getElementById("yks-din-y").value;
    aytdinn = aytdind - (aytdiny / 4);
    ////////////////////////////////////////
    ayttarih2d = document.getElementById("yks-tar-2-d").value;
    ayttarih2y = document.getElementById("yks-tar-2-y").value;
    ayttarih2n = ayttarih2d - (ayttarih2y / 4);
    ////////////////////////////////////////
    aytdild = document.getElementById("yks-d-d").value;
    aytdily = document.getElementById("yks-d-y").value;
    aytdiln = aytdild - (aytdily / 4);
    //////////////////////////////////////////////////////son//////////////////////////////////////////////////////////////////
    document.getElementById("yks-m-n").value = aytmatd - (aytmaty / 4);
    document.getElementById("yks-k-n").value = aytkimyad - (aytkimyay / 4);
    document.getElementById("yks-f-n").value = aytfizikd - (aytfiziky / 4);
    document.getElementById("yks-b-n").value = aytbiyolojid - (aytbiyolojiy / 4);
    document.getElementById("yks-e-n").value = aytedebiyatd - (aytedebiyaty / 4) //
    document.getElementById("yks-cog-1-n").value = aytcografya1d - (aytcografya1y / 4); //
    document.getElementById("yks-tar-1-n").value = ayttarih1d - (ayttarih1y / 4); //
    document.getElementById("yks-cog-2-n").value = aytcografya2d - (aytcografya2y / 4); //
    document.getElementById("yks-fel-n").value = aytfelsefed - (aytfelsefey / 4); //
    document.getElementById("yks-din-n").value = aytdind - (aytdiny / 4); //
    document.getElementById("yks-tar-2-n").value = ayttarih2d - (ayttarih2y / 4); //
    document.getElementById("yks-d-n").value = aytdild - (aytdily / 4);

    aytsayısalhampuan = (aytmatn * 5) + (aytfizikn * 5) + (aytbiyolojin * 5) + (aytkimyan * 5) + 100;
    aytsayısalyerleştirme = aytsayısalhampuan + parseFloat(diplomaPuani);

    aytdilhampuan = (aytdiln * 5) + 100;
    aytdilyerleştirme = aytdilhampuan + parseFloat(diplomaPuani);

    ayteşithampuan = (aytmatn * 5) + (aytedebiyatn * 5) + (aytcografya1n * 5) + (ayttarih1n * 5) + 100;
    ayteşityerleştirme = ayteşithampuan + parseFloat(diplomaPuani);

    aytsözelhampuan = (aytedebiyatn * 5) + (aytcografya1n * 5) + (ayttarih1n * 5) + (aytcografya2n * 5) + (aytfelsefen * 5) + (aytdinn * 5) + (ayttarih2n * 5) + 100;
    aytsözelyerleştirme = aytsözelhampuan + parseFloat(diplomaPuani);

    ////////////////////////////sayısal
    document.getElementById("yks-say-ham").value = aytsayısalhampuan;
    document.getElementById("yks-say-yer").value = aytsayısalyerleştirme;
    /////////////////////////////sözel
    document.getElementById("yks-s-ham").value = aytsözelhampuan;
    document.getElementById("yks-s-yer").value = aytsözelyerleştirme;
    //////////////////////////////////eşit
    document.getElementById("yks-ea-ham").value = ayteşithampuan;
    document.getElementById("yks-ea-yer").value = ayteşityerleştirme;
    ///////////////////////////////dil
    document.getElementById("yks-d-ham").value = aytdilhampuan;
    document.getElementById("yks-d-yer").value = aytdilyerleştirme;

    if (aytsayısalhampuan == 500) {
        document.getElementById("yks-s-say-ham-1").value = 1;
    } else {
        document.getElementById("yks-s-say-ham-1").value = 0;
    }

    if (aytsayısalhampuan == 500) {
        document.getElementById("yks-s-say-ham-1").value = 1;
    } else {
        document.getElementById("yks-s-say-ham-1").value = 0;
    }
}

function kontrol() {
    var x, y, z, t, o, p, r, s, t, u, v, m, n, q, c;
    x = document.getElementById('tyt-t-d').value;
    y = document.getElementById('tyt-s-d').value;
    z = document.getElementById('tyt-m-d').value;
    t = document.getElementById('tyt-f-d').value;
    o = document.getElementById('yks-m-d').value;
    p = document.getElementById('yks-f-d').value;
    r = document.getElementById('yks-k-d').value;
    u = document.getElementById('yks-b-d').value;
    n = document.getElementById('yks-e-d').value;
    m = document.getElementById('yks-tar-1-d').value;
    c = document.getElementById('yks-cog-1-d').value;
    q = document.getElementById('yks-tar-2-d').value;
    v = document.getElementById('yks-cog-2-d').value;
    s = document.getElementById('yks-fel-d').value;
    a = document.getElementById('yks-din-d').value;
    b = document.getElementById('yks-d-d').value;
    if (40 < x)
        document.getElementById('tyt-t-d').value = 40;
    if (20 < y)
        document.getElementById('tyt-s-d').value = 20;
    if (40 < z)
        document.getElementById('tyt-m-d').value = 40;
    if (20 < t)
        document.getElementById('tyt-f-d').value = 20;
    if (40 < o)
        document.getElementById('yks-m-d').value = 40;
    if (14 < p)
        document.getElementById('yks-f-d').value = 14;
    if (13 < r)
        document.getElementById('yks-k-d').value = 13;
    if (13 < u)
        document.getElementById('yks-b-d').value = 13;
    if (24 < n)
        document.getElementById('yks-e-d').value = 24;
    if (10 < m)
        document.getElementById('yks-tar-1-d').value = 10;
    if (6 < c)
        document.getElementById('yks-cog-1-d').value = 6;
    if (11 < q)
        document.getElementById('yks-tar-2-d').value = 11;
    if (11 < v)
        document.getElementById('yks-cog-2-d').value = 11;
    if (12 < s)
        document.getElementById('yks-fel-d').value = 12;
    if (6 < a)
        document.getElementById('yks-din-d').value = 6;
    if (80 < b)
        document.getElementById('yks-d-d').value = 80;
}
var kont;
kont = setInterval(kontrol, 200)
var olc;

olc = setInterval(hesaplama, 200);