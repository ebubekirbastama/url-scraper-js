(function() {
    // Kullanıcıdan kaç link toplanacağını sor
    let adet = parseInt(prompt("Kaç tane link toplamak istiyorsunuz?"), 10);

    if (isNaN(adet) || adet <= 0) {
        alert("Geçerli bir sayı girmediniz.");
        return;
    }

    // Sayfadaki <div class="post-title"> içindeki linkleri bul
    let linkler = Array.from(document.querySelectorAll(".post-title a"))
        .slice(0, adet)
        .map(a => a.href.trim());

    if (linkler.length === 0) {
        alert("Hiç link bulunamadı!");
        return;
    }

    let metin = linkler.join("\n");

    // Kopyalamak için gizli textarea oluştur
    let textarea = document.createElement("textarea");
    textarea.value = metin;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);

    // Seç ve kopyala
    textarea.select();
    try {
        document.execCommand("copy");
        alert("Toplam " + linkler.length + " link panoya kopyalandı!");
        console.log("✔ Kopyalandı:\n", metin);
    } catch (err) {
        console.error("Kopyalama hatası:", err);
        alert("Kopyalanamadı, konsola yazıldı.");
    }

    // Temizle
    document.body.removeChild(textarea);
})();
