function showAppointments(){
    let appointment = getAppointments();

    const table = document.querySelector("table");

    for(let i = 0; i < appointment.length; i++){
        let row = table.insertRow(-1);
            const cell1 = row.insertCell();
            const cell2 = row.insertCell();
            const cell3 = row.insertCell();
            const cell4 = row.insertCell();
            const cell5 = row.insertCell();
            cell1.innerHTML = appointment[i].date;
            cell2.innerHTML = appointment[i].name;
            cell3.innerHTML = appointment[i].time;
            cell4.innerHTML = appointment[i].address;
            cell5.innerHTML = appointment[i].note;
    }

}

function getAppointments(){
    const str = localStorage.getItem("localData");
    if(str != null)
        appointment = JSON.parse(str);
    return appointment;
}

showAppointments();