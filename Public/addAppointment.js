function addAppointments(){
    let arr = localStorage.getItem("localData");
    arr = JSON.parse(arr);
    if(arr === null){
        arr = [];
    }
    arr.push({
        date:document.getElementById("date").value,
        name:document.getElementById("name").value,
        time:document.getElementById("time").value,
        address:document.getElementById("address").value,
        note:document.getElementById("note").value
    });

    localStorage.setItem("localData", JSON.stringify(arr));
}