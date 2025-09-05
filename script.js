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
    
    document.getElementById("signinDialog").showModal(); 
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
  next = document.querySelector(".next");
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

//default event array

// const eventsArr = [
//   {
//     day: 13,
//     month: 11,
//     year: 2022,
//     events: [
//       {
//         title: "Event 1 lorem ipsun dolar sit genfa tersd dsad ",
//         time: "10:00 AM",
//       },
//       {
//         title: "Event 2",
//         time: "11:00 AM",
//       },
//     ],
//   },
// ];

const eventsArr = [];
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
    if(
        i === new Date().getDate() &&
        year === new Date().getFullYear() &&
        month === new Date().getMonth()
    ){ 
      days += `<div class="day today">${i}</div>`;
    }
    else{
      days += `<div class="day">${i}</div>`;
    }
  }
  //add next month days
  for(let j = 1; j <= nextDays; j++){
    days += `<div class="day next-date">${j}</div>`;
  }
  daysContainer.innerHTML = days;

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