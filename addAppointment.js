const arr = new Array();
function addAppointments(){
    getAppointments();
    arr.push({
        date:document.getElementById("date").value,
        name:document.getElementById("name").value,
        time:document.getElementById("time").value,
        address:document.getElementById("address").value,
        note:document.getElementById("note").value
    });

    localStorage.setItem("localData", JSON.stringify(arr));
    showAppointments();
    window.location.href = "landscaper.html";
}
function getAppointments(){
    const str = localStorage.getItem("localData");
    if(str != null)
        arr = JSON.parse(str);
}
function showAppointments(){
    getAppointments();

    const table = document.getElementById("table-body");

    const x = table.row.length;
    
    while(--x){
        table.deleteRow(x);
    }

    for(i = 0; i < arr.length; i++){
        const row = table.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
        const cell3 = row.insertCell();
        const cell4 = row.insertCell();
        const cell5 = row.insertCell();
        cell1.innerHTML = arr[i].date;
        cell2.innerHTML = arr[i].name;
        cell3.innerHTML = arr[i].time;
        cell4.innerHTML = arr[i].address;
        cell5.innerHTML = arr[i].note;
    }

}