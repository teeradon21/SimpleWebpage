function checkform(){
    let companyname = document.getElementById("companyname")
    if (!companyname.value){
        alert("โปรดกรอกชื่อบริษัท")
        return
    }
    let contactname = document.getElementById("contactname")
    if (!contactname.value){
        alert("โปรดกรอกชื่อผู้ติดต่อ")
        return
    }
    let contacttel = document.getElementById("contacttel")
    if (!contacttel.value){
        alert("โปรดกรอกเบอร์ผู้ติดต่อ")
        return
    }
    let seat = document.getElementById("seat")
    if (seat.value){
        if (!(/^\d$/.test(seat.value)) || parseInt(seat.value)<1 || parseInt(seat.value)>10){
            alert("จำนวนเก้าอี้ ต้องเป็นตัวเลข ค่าระหว่าง 1 ถึง 10 เท่านั้น")
        }
    }
}