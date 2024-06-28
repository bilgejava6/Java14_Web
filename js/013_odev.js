const userList = [];
let editUserId = -1;
function tabloYukle(){
    let tabloUserList = document.getElementById('userList');
    tabloUserList.innerHTML = '';
    userList.forEach((u,index)=>{
        tabloUserList.innerHTML += `<tr  id="${index}">
        <td>${index+1}</td>
        <td>${u.ad} ${u.soyad}</td>
        <td>${u.adres}</td>
        <td>${u.yas}</td>
        <td>
            <button onclick="sil(${index})"> X </button>
            <button onclick="duzenle(${index})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Edit
            </button>
        </td>
    </tr>`; 
    }); 
}
function sil(index){
    userList.splice(index,1);
    tabloYukle();
}
function duzenle(index){
    let user = userList[index];
    let ad = document.getElementById('ad_guncelle');
    let soyad = document.getElementById('soyad_guncelle');
    let adres = document.getElementById('adres_guncelle');
    let yas = document.getElementById('yas_guncelle');
    console.log(user);
    ad.value = user.ad;
    soyad.value = user.soyad;
    adres.value = user.adres;
    yas.value = user.yas;
    editUserId = index;
}
function guncelle(){
    let ad = document.getElementById('ad_guncelle').value;
    let soyad = document.getElementById('soyad_guncelle').value;
    let adres = document.getElementById('adres_guncelle').value;
    let yas = document.getElementById('yas_guncelle').value;
    userList[editUserId].ad = ad;
    userList[editUserId].soyad = soyad;
    userList[editUserId].adres = adres;
    userList[editUserId].yas = yas;
    tabloYukle();
}

function ekle(){
    let ad = document.getElementById('ad').value;
    let soyad = document.getElementById('soyad').value;
    let adres = document.getElementById('adres').value;
    let yas = document.getElementById('yas').value;
    /***
     * Eğer bir object oluşturylacak ise,
     * Key:Value şeklinde oluşturulmalıdır.
     * {
     *  ad : "Ahmet",
     *  soyad: "TAŞ"
     * }
     * Ancak, bir değişken adı, Key ile aynı ismi taşıyor ise
     * let ad = "Ahmet";
     * let soyad = "TAŞ"; 
     * şeklinde ise Key ayrıca yazılmaz, çünkü değişkenin adı
     * Key olarak değişkenin değeri Value olarak atanır.
     * {
     *  ad,
     *  soyad
     * }
     * 
     */
    userList.push({
        ad,
        soyad,
        adres,
        yas
    });
    tabloYukle();
}