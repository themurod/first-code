let ism = prompt('ismingiz')
let familiya = prompt('familyangiz')
let parol = prompt('parol kiriting')
let report = prompt('arizangizni kiriting')
// ISM TUGRI YOZILISHI BOSHLANDI
let boshi = ism.charAt().toUpperCase()
let davomi = ism.slice(1).toLowerCase()
let $ism = boshi + davomi 
let fboshi = familiya.charAt().toUpperCase()
let fdavomi = familiya.slice(1).toLowerCase()
let $familiya = fboshi + fdavomi 
// ISM TUGRI YOZILISHI TUGADI



if ( parol.length > 16 || $ism.length > 18 || $ism.length < 2 ) {
    console.log(`akkount yaratilmadi!
    sabab: parolingiz juda uzun,
    yoki ismda muammo bor !`)
}
else if (parol.length <= 8 ) {
    console.log(`akkount yaratilmadi!
    sabab: parolingiz juda kichik !`)
} else {
    console.log(`akkount muvaffaqiyatli yaratildi! 
    
    ism: ${$ism}
    familiya: ${$familiya}
    parol: ${parol} `)     
}
if (report.length > 30 ) {
    console.log(`ariza: ${report}`)
    
} else (
    console.log(`ariza juda ham kichik, 30 harfan ko'proq bo'lsin.
     hozir matnda ${report.length} ta harf qatnashgan`)
)