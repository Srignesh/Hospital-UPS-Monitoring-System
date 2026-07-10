/* ===========================
        LIVE CLOCK
=========================== */

function updateClock(){

    const now = new Date();

    const time = now.toLocaleTimeString("en-IN",{
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",
        hour12:true
    });

    const day = now.toLocaleDateString("en-IN",{
        weekday:"long"
    });

    const date = now.toLocaleDateString("en-IN",{
        day:"numeric",
        month:"long",
        year:"numeric"
    });

    document.getElementById("liveTime").innerHTML = time;

    document.getElementById("liveDay").innerHTML = day;

    document.getElementById("liveDate").innerHTML = date;

}
/* ===========================
   ThingSpeak API URLs
=========================== */

const GRID_URL =
"https://api.thingspeak.com/channels/3281912/feeds/last.json?api_key=X3D4GSC2HB7Z5PWF";

const BATTERY_URL =
"https://api.thingspeak.com/channels/3281915/feeds/last.json?api_key=LR0RTGQE4TC77OZA";


/* ===========================
      GRID DATA
=========================== */

async function loadGrid(){

    try{

        const response = await fetch(GRID_URL);

        const data = await response.json();

        document.getElementById("gridVoltage").innerHTML =
        Number(data.field1).toFixed(1)+" V";

        document.getElementById("gridCurrent").innerHTML =
        Number(data.field2).toFixed(3)+" A";

        document.getElementById("gridPower").innerHTML =
        Number(data.field3).toFixed(1)+" W";

        document.getElementById("gridEnergy").innerHTML =
        Number(data.field4).toFixed(3)+" kWh";

        // IMPORTANT
        // Your ThingSpeak:
        // field5 = Frequency
        // field6 = Power Factor

        document.getElementById("gridFreq").innerHTML =
        Number(data.field5).toFixed(1)+" Hz";

        document.getElementById("gridPF").innerHTML =
        Number(data.field6).toFixed(2);

    }

    catch(error){

        console.log(error);

    }

}


/* ===========================
      BATTERY DATA
=========================== */

async function loadBattery(){

    try{

        const response = await fetch(BATTERY_URL);

        const data = await response.json();

        document.getElementById("batteryVoltage").innerHTML =
        Number(data.field1).toFixed(1)+" V";

        document.getElementById("batteryCurrent").innerHTML =
        Number(data.field2).toFixed(3)+" A";

        document.getElementById("batteryPower").innerHTML =
        Number(data.field3).toFixed(1)+" W";

        document.getElementById("batteryEnergy").innerHTML =
        Number(data.field4).toFixed(3)+" kWh";

        document.getElementById("batteryFreq").innerHTML =
        Number(data.field5).toFixed(1)+" Hz";

        document.getElementById("batteryPF").innerHTML =
        Number(data.field6).toFixed(2);

    }

    catch(error){

        console.log(error);

    }

}


/* ===========================
     Load Every 5 Seconds
=========================== */

/* ===========================
      INITIAL LOAD
=========================== */

updateClock();

loadGrid();

loadBattery();


/* ===========================
      LIVE CLOCK
=========================== */

setInterval(updateClock,1000);


/* ===========================
   THINGSPEAK REFRESH
=========================== */

setInterval(()=>{

    loadGrid();

    loadBattery();

},5000);