document.addEventListener("DOMContentLoaded", function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-item');

  navLinks.forEach(link => {
    if (currentPath.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
});


function openDialog() {
    let form = document.querySelector("#signinDialog form"); 
    form.reset();
    
    document.getElementById("signinDialog").show(); 
}
document.addEventListener("DOMContentLoaded", () => {
  const registerLink = document.getElementById("link1");
  const registerDialog = document.getElementById("registerDialog");
  const signinDialog = document.getElementById("signinDialog");

  registerLink.addEventListener("click", () => {
    if (signinDialog.open) signinDialog.close();
    registerDialog.showModal();
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const registerLink = document.getElementById("link2");
  const registerDialog = document.getElementById("registerDialog");
  const signinDialog = document.getElementById("signinDialog");

  registerLink.addEventListener("click", () => {
    if (registerDialog.open)registerDialog.close();

    signinDialog.showModal();
  });
});

document.querySelectorAll(".toggle-password").forEach((toggle) => {
    toggle.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

    toggle.addEventListener("click", () => {
      const targetId = toggle.getAttribute("data-target");
      const input = document.getElementById(targetId);
      const icon = toggle.querySelector("i");

      if (input) {
        const isVisible = input.type === "text";
        input.type = isVisible ? "password" : "text";

        
        if (isVisible) {
          icon.classList.remove("fa-eye");
          icon.classList.add("fa-eye-slash");
        } else {
          icon.classList.remove("fa-eye-slash");
          icon.classList.add("fa-eye");
        }
      }
    });
  });
document.querySelectorAll(".close-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const dialog = document.getElementById(targetId);
    if (dialog && dialog.open) dialog.close();
  });
});

//for calander
const calendar = document.querySelector(".calendar"),
  date = document.querySelector(".date"),
  daysContainer = document.querySelector(".days"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  eventDay = document.querySelector(".event-day"),
  eventsContainer = document.querySelector(".events"),
  eventDate = document.querySelector(".event-date"),
  addEventSubmit = document.querySelector(".add-event-btn ");
let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();
let selectedDay = null;
let selectedMonth = null;
let selectedYear = null;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


const eventsArr = [];
getEvents()
//function to add days in days with class day and prev-date next-date on previous month and next month days and active on today
function initCalendar() {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  const prevDays = prevLastDay.getDate();
  const lastDate = lastDay.getDate();
  const day = firstDay.getDay();
  const nextDays = 7 - lastDay.getDay() - 1;
  
  //update date top of calander
  date.innerHTML = months[month] + " " + year;

  //adding days on dom
  let days = "";
   //prev month days
   for (let x = day; x > 0; x--) {
    days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
  }
  //current month days
  for(let i = 1; i <= lastDate; i++){
    let event = false;
    eventsArr.forEach((eventObj) => {
      if(
        eventObj.day === i &&
        eventObj.month === month + 1 &&
        eventObj.year === year
      ){
        //if event found
        event = true;
      }
    })
    if(
        i === new Date().getDate() &&
        year === new Date().getFullYear() &&
        month === new Date().getMonth()
    ){ 
       activeDay = i;
      getActiveDay(i);
      updateEvents(i);
      //if event found add also event class also today
       //add active on today at start up
        if (event) {
        days += `<div class="day today active event">${i}</div>`;
      } else {
        days += `<div class="day today active">${i}</div>`;
      }
    }
    //add remaining as it is
    else{
        if (event) {
        days += `<div class="day event">${i}</div>`;
      } else {
        days += `<div class="day">${i}</div>`;
      }
    }
  }
  //add next month days
  for(let j = 1; j <= nextDays; j++){
    days += `<div class="day next-date">${j}</div>`;
  }
  daysContainer.innerHTML = days;
  //add listner after calander initialized
  addListner();
}
initCalendar();

//function to add month and year on prev and next button
//prev month
function prevMonth() {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  initCalendar();
}
//next month
function nextMonth() {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  initCalendar();
}
//add eventlistnner on prev and next 
prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);
//calander ready

//function to add active on day
function addListner() {
  const days = document.querySelectorAll(".day");
  days.forEach((day) => {
    day.addEventListener("click", (e) => {
      // Set the clicked day
      activeDay = Number(e.target.innerHTML);

      // Remove active class from all days
      days.forEach((day) => {
        day.classList.remove("active");
      });

      // Check if it's a prev or next date and switch month accordingly
      if (e.target.classList.contains("prev-date")) {
        prevMonth();
        setTimeout(() => {
          const newDays = document.querySelectorAll(".day");
          newDays.forEach((day) => {
            if (!day.classList.contains("prev-date") && Number(day.innerHTML) === activeDay) {
              day.classList.add("active");
              getActiveDay(activeDay);
              updateEvents(activeDay);
            }
          });
        }, 100);
      } else if (e.target.classList.contains("next-date")) {
        nextMonth();
        setTimeout(() => {
          const newDays = document.querySelectorAll(".day");
          newDays.forEach((day) => {
            if (!day.classList.contains("next-date") && Number(day.innerHTML) === activeDay) {
              day.classList.add("active");
              getActiveDay(activeDay);
              updateEvents(activeDay);
            }
          });
        }, 100);
      } else {
        // Normal day clicked
        e.target.classList.add("active");
        getActiveDay(activeDay);
        updateEvents(activeDay);
      }
    });
  });
}

const addEventBtn = document.querySelector(".add-event"),
  addEventContainer = document.querySelector(".add-event-wrapper "),
  addEventCloseBtn = document.querySelector(".close "),
  addEventTitle = document.querySelector(".event-name"),
  addEventFrom = document.querySelector(".event-time-from"),
  addEventTo = document.querySelector(".event-time-to");


addEventBtn.addEventListener("click", () => {
  addEventContainer.classList.toggle("active");
});
addEventCloseBtn.addEventListener("click", () => {
  addEventContainer.classList.remove("active");
});

document.addEventListener("click", (e) => { 
  if (e.target !== addEventBtn && !addEventContainer.contains(e.target)) {
    addEventContainer.classList.remove("active");
  }
});
//allow 50 chars in eventtitle
addEventTitle.addEventListener("input", (e) => {
  addEventTitle.value = addEventTitle.value.slice(0, 50);
});


addEventFrom.addEventListener("input", (e) => {
  let value = addEventFrom.value.replace(/[^0-9:]/g, "");

  if (e.inputType === "deleteContentBackward") {
    // Clean up dangling colon
    if (value.length === 3 && value.endsWith(":")) {
      value = value.slice(0, 2);
    }
  } else {
    // Auto-insert colon after HH
    if (value.length === 2) {
      value += ":";
    }
  }

  if (value.length > 5) {
    value = value.slice(0, 5);
  }

  addEventFrom.value = value;
});
addEventTo.addEventListener("input", (e) => {
  let value = addEventTo.value.replace(/[^0-9:]/g, "");

  if (e.inputType === "deleteContentBackward") {
    // Clean up dangling colon
    if (value.length === 3 && value.endsWith(":")) {
      value = value.slice(0, 2);
    }
  } else {
    // Auto-insert colon after HH
    if (value.length === 2) {
      value += ":";
    }
  }

  if (value.length > 5) {
    value = value.slice(0, 5);
  }

  addEventTo.value = value;
});

//function get active day day name and date and update eventday eventdate

function getActiveDay(date) {
  const day = new Date(year, month, date);
  const dayName = day.toString().split(" ")[0];
  eventDay.innerHTML = dayName;
  eventDate.innerHTML = date + " " + months[month] + " " + year;
}
//function update events when a day is active
function updateEvents(date) {
  let events = "";
  eventsArr.forEach((event) => {
    if (
      date === event.day &&
      month + 1 === event.month &&
      year === event.year
    ) {
      event.events.forEach((event) => {
        events += `<div class="event">
            <div class="title">
              <i class="fas fa-circle"></i>
              <h3 class="event-title">${event.title}</h3>
            </div>
            <div class="event-time">
              <span class="event-time">${event.time}</span>
            </div>
        </div>`;
      });
    }
  });
  if (events === "") {
    events = `<div class="no-event">
            <h3>No Events</h3>
        </div>`;
  }
  eventsContainer.innerHTML = events;
  //save events when new one add
  saveEvents();
  
}

//lets creat function to add events

addEventSubmit.addEventListener("click",() => {
  const eventTitle = addEventTitle.value;
  const eventTimeFrom = addEventFrom.value;
  const eventTimeTo = addEventTo.value;

  if (eventTitle === "" || eventTimeFrom === "" || eventTimeTo === "") {
    alert("Please fill all the fields");
    return;
  }
   //check correct time format 24 hour
  const timeFromArr = eventTimeFrom.split(":");
  const timeToArr = eventTimeTo.split(":");
  if (
    timeFromArr.length !== 2 ||
    timeToArr.length !== 2 ||
    timeFromArr[0] > 23 ||
    timeFromArr[1] > 59 ||
    timeToArr[0] > 23 ||
    timeToArr[1] > 59
  ) {
    alert("Invalid Time Format");
    return;
  }

  const timeFrom = convertTime(eventTimeFrom);
  const timeTo = convertTime(eventTimeTo);

  const newEvent = {
    title : eventTitle,
    time: timeFrom + " - " + timeTo,
  };

  let eventAdded = false;

  if (eventsArr.length > 0) {
    eventsArr.forEach((item) => {
      if (
        item.day === activeDay &&
        item.month === month + 1 &&
        item.year === year
      ) {
        item.events.push(newEvent);
        eventAdded = true;
      }
    });
  }
  //if event array emty or current day has no evnt creat new
  if (!eventAdded) {
    eventsArr.push({
      day: activeDay,
      month: month + 1,
      year: year,
      events: [newEvent],
    });
  }
//remove active from add event form
  addEventContainer.classList.remove("active");
  //clear the field
  addEventTitle.value = "";
  addEventFrom.value = "";
  addEventTo.value = "";
  //show current added event
  updateEvents(activeDay);
  //also add event class to newly added day if not alrady
  const activeDayElem = document.querySelector(".day.active");
  if(!activeDayElem.classList.contains("event")){
    activeDayElem.classList.add("event");
  }
});
//function to delete event when clicked on event
eventsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("event")) {
    if (confirm("Are you sure you want to delete this event?")) {
      const eventTitle = e.target.children[0].children[1].innerHTML;
      eventsArr.forEach((event) => {
        if (
          event.day === activeDay &&
          event.month === month + 1 &&
          event.year === year
        ) {
          event.events.forEach((item, index) => {
            if (item.title === eventTitle) {
              event.events.splice(index, 1);//remove one itme with this index
            }
          });
          //if no events left in a day then remove that day from eventsArr
          if (event.events.length === 0) {
            eventsArr.splice(eventsArr.indexOf(event), 1);
            //remove event class from day
            const activeDayEl = document.querySelector(".day.active");
            if (activeDayEl.classList.contains("event")) {
              activeDayEl.classList.remove("event");
            }
          }
        }
      });
      updateEvents(activeDay);
    }
  }
});


function convertTime(time) {
  //convert time to 24 hour format
  let timeArr = time.split(":");
  let timeHour = timeArr[0];
  let timeMin = timeArr[1];
  let timeFormat = timeHour >= 12 ? "PM" : "AM";
  timeHour = timeHour % 12 || 12;
  time = timeHour + ":" + timeMin + " " + timeFormat;
  return time;
}

//function to save events in local storage
function saveEvents() {
  localStorage.setItem("events", JSON.stringify(eventsArr));
}

//function to get events from local storage
function getEvents() {
  //check if events are already saved in local storage then return event else nothing
  if (localStorage.getItem("events") === null) {
    return;
  }
  eventsArr.push(...JSON.parse(localStorage.getItem("events")));
}