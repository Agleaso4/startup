function showAppointments(){
    let arr = getAppointments();

    const table = document.querySelector("table");

    for(let i = 0; i < arr.length; i++){
        let row = table.insertRow(-1);
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

function getAppointments(){
    const str = localStorage.getItem("localData");
    if(str != null)
        arr = JSON.parse(str);
    return arr;
}

showAppointments();