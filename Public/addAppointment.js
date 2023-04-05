function addAppointments(){
    let appointments = localStorage.getItem("localData");
    appointments = JSON.parse(appointments);
    if(appointments === null){
        appointments = [];
    }
    appointments.push({
        date:document.getElementById("date").value,
        name:document.getElementById("name").value,
        time:document.getElementById("time").value,
        address:document.getElementById("address").value,
        note:document.getElementById("note").value
    });

    localStorage.setItem("localData", JSON.stringify(appointments));
}