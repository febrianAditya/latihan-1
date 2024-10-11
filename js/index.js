


let cekHeader = document.querySelector("#header-details")
let cekHeader2 = document.getElementById("header-details")
let cekHeader3 = document.getElementsByClassName("details")



// let name = document.getElementById("name-user").value
// console.log(cekHeader3);



function handleSubmit(event) {
    // console.log(event, "==> ini event");
    
    event.preventDefault()    // untuk matiiin kebiasaan dari submit
    // console.log("aku terpanggil");
    const valueNameUser = document.getElementById("name-user").value
    console.log(valueNameUser);


    const fullNameUser = document.getElementById("fullname-user").innerHTML = valueNameUser
    // const roleUser = document.getElementById("role-user").innerHTML
    console.log(fullNameUser);
    
    
}