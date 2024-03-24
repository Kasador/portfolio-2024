// check if on mobile/desktop
let getMobileWrapper = document.getElementById("mobile-wrapper");
// load loading screens for windows desktop mode / iphone mobile mode
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById("iphoneBootup").style.display = "block";
    document.addEventListener('DOMContentLoaded', e => {
        // true for mobile device
        console.log('Using Mobile Device.');
        console.log('Booting Apple IOS...');

        var mobileVideo = document.getElementById("iphoneBootup");
        var mobileContent = document.getElementById("mobile");

        mobileVideo.addEventListener('ended', e => {
            // console.log('video ended');
            mobileContent.style.display = "block";
            mobileVideo.style.display = "none";
            getMobileWrapper.style.display = "block";
        });
    }
)} else {
    document.getElementById("windows7Bootup").style.display = "block";
    document.addEventListener('DOMContentLoaded', e => {
        var desktopVideo = document.getElementById("windows7Bootup");
        var desktopContent = document.getElementById("desktop");
        // false for not mobile device
        console.log('Not Using Mobile Device.');
        console.log('Booting Windows 7...');

        desktopVideo.addEventListener('ended', e => {
            desktopContent.style.display = "block";
            desktopVideo.style.display = "none";
        });
    }
)};
// Return today's date and time
let currentTime = new Date();
let getDate = currentTime.getDate();
let getDay = currentTime.getDay();          
let unlockDate = getDay;                   // Get the weekday as a number (0-6)
switch (unlockDate) {
    case 0:
        unlockDate = "Sunday";
        break;
    case 1:
        unlockDate= "Monday";
        break;
    case 2:
        unlockDate= "Tuesday";
        break;
    case 3:
        unlockDate= "Wednesday";
        break;
    case 4:
        unlockDate= "Thursday";
        break;
    case 5:
        unlockDate= "Friday";
        break;
    case 6:
        unlockDate= "Saturday";
}
let getFullYear = currentTime.getFullYear();         // Get the four digit year (yyyy)
let getHours = currentTime.getHours();               // Get the hour (0-23)
let getMilliseconds = currentTime.getMilliseconds(); // Get the milliseconds (0-999)
let getMinutes = currentTime.getMinutes();           // Get the minutes (0-59)
let getMonth = currentTime.getMonth();               // Get the month (0-11)
let getSeconds = currentTime.getSeconds();           // Get the seconds (0-59)
let getTime = currentTime.getTime();                 // Get the time (milliseconds since January 1, 1970)
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let displayMonth = months[getMonth];

// update and display desktop time/date on main screen
let desktopTimeData = document.getElementById("desktop-time-wrapper");
let desktopTimeDisplay = document.getElementById("desktop-time");
let desktopDateDisplay = document.getElementById("desktop-date");
let ampm = getHours >= 12 ? 'PM' : 'AM';

const formatAMPM = (e) => {
    var hours = getHours;
    var minutes = getMinutes;
    var seconds = getSeconds;
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    // ':' + seconds + 
    return strTime;
};
var updatedTime;
var desktopMonth = getMonth + 1;
let formatDate = desktopMonth + "/" + getDate + "/" + getFullYear
const startClock = (e) => {
    var updatedTime = formatAMPM();
    console.log(updatedTime);
    desktopTimeDisplay.innerHTML = updatedTime;
    desktopDateDisplay.innerHTML = formatDate;
    if ( updatedTime !== updatedTime ) {
        desktopTimeDisplay.innerHTML = updatedTime;
        console.log("Time was changed! Updating clock...");
    }
};
// calendar box info
let calendarBox = document.getElementById('mobile-calendar-box');
let calendarMonth = document.getElementById('mobile-calendar-month');
let calendarDate = document.getElementById('mobile-calendar-date');
let calendarDay = document.getElementById('mobile-calendar-day');
// Desktop show/hide login 
let passwordInput = document.getElementById("desktop-input");
let passwordBtn = document.getElementById("desktop-input-btn");
let inputData = document.getElementById("desktop-input-wrapper");
let loginPic = document.getElementById("desktop-image-wrapper");
let switchUserBtn = document.getElementById("desktop-switch-user-btn");
let shutdownBtn = document.getElementById("desktop-shutdown-btn");
let shutdownVideo = document.getElementById("windows7Shutdown");
let desktopMenu = document.getElementById("desktop");
let desktopBootup = document.getElementById("windows7Bootup");
let windowsLogo = document.getElementById("desktop-windows-icon-wrapper");
let welcomeVideo = document.getElementById("windows7Welcome");
let loginScreen = document.getElementById("desktop-login-wrapper");
let desktopLoggedIn = document.getElementById("desktop-main");

loginPic.addEventListener('click', e => {
    inputData.style.display = "block";
});
switchUserBtn.addEventListener('click', e => {
    inputData.style.display = "none";
});
passwordInput.addEventListener('keypress', e => {
    let inputValue = passwordInput.value;
    if ( (e.key === 'Enter') && (!inputValue == null || !inputValue == "") ) {
        console.log('password: ' + passwordInput.value);
        // signed in! desktop main bg change
        showDesktop(e);
    }
});
passwordBtn.addEventListener('click', e => {
    let inputValue = passwordInput.value;
    if ( (!inputValue == null || !inputValue == "") ) {
        console.log('password: ' + passwordInput.value);
        // signed in! desktop main bg change
        showDesktop(e);
    }
});
shutdownBtn.addEventListener('click', e => {
    shutdownVideo.style.display = "block";
    windowsLogo.style.position = "fixed";
    // put logo here
    shutdownVideo.play();
    console.log('Shutting down...');

    shutdownVideo.addEventListener('ended', e => {
        console.log('Shutdown Complete');
        shutdownVideo.style.display = "none";
        desktopMenu.style.display = "none";
        desktopBootup.style.display = "none";

    });
});
// When user enters value in input box, "fake log in" to desktop
const showDesktop = (e) => {
    console.log('Logging in...');
    welcomeVideo.style.display = "block";
    welcomeVideo.play();

    welcomeVideo.addEventListener('ended', e => {
        console.log('Logged in');
        desktopMenu.setAttribute("class", "desktop-change-bg");
        startClock();
        setInterval(startClock, 1000);
        loginScreen.style.display = "none";
        welcomeVideo.style.display = "none";
        desktopLoggedIn.style.display = "block";
    });
};

// get current year for website copyright footer
let footerYear = document.getElementById('footer-year');
footerYear.innerHTML = getFullYear;

// get time for iphone/mobile unlock screen
var mobileHours = currentTime.getHours().toString().padStart(2, '0');
var mobileMinutes = currentTime.getMinutes().toString().padStart(2, '0');
var formattedTime = `${mobileHours}:${mobileMinutes}`;
document.getElementById('unlock-date').innerHTML = unlockDate + ", " + displayMonth + " " + getDate;
document.getElementById('unlock-time').innerHTML = formattedTime;

// function for random status bar || random time between (1-30s) || pick random img/change
// case statement for random images

// MOBILE || fix for iphone onclick event to tap
window.addEventListener('DOMContentLoaded', (e) => {
// Grab HTML Elements
    let getMobileBG = document.getElementById("mobile");
    let hideWelcomeScreen = document.getElementById("lock-screen-wrapper");
    let hideWelcomeFooter = document.getElementById("footer-mobile-unlock");
    let showPasscodeMenu = document.getElementById("mobile-unlock-screen");
    let cancelBtn = document.getElementById("passcode-cancel");

    // enter passcode screen on tap
    getMobileWrapper.addEventListener("click", (e) => {
        if (showPasscodeMenu.style.display !== "block") {// on tap of Welcome Screen, change to passcode screen
            console.log("Face ID disabled, enter password.");
            getMobileBG.classList.add('mobile-change-bg');
            getMobileWrapper.style.display = "none";
            hideWelcomeScreen.style.display = "none";
            hideWelcomeFooter.style.display = "none";
            showPasscodeMenu.style.display = "block";
        } else {
            // do something
        };
    });
    // function to change mode to delete on number tap
    let dotOne = document.getElementById("one");
    let dotTwo = document.getElementById("two");
    let dotThree = document.getElementById("three");
    let dotFour = document.getElementById("four");
    let dotFive = document.getElementById("five");
    let dotSix = document.getElementById("six");
    let changeCarrierToTime = document.getElementById('mobile-carrier');
    let showMobileScreen = document.getElementById('mobile-main');
    let showMobileFooter = document.getElementById('mobile-main-footer');

    const getNumber = (e) => {
        // change cancel to delete || add dot
        cancelBtn.innerHTML = "Delete";
        console.log('Entered.');
        // logic for passcode advancement
        if (!dotOne.classList.contains('active-dots-change')) {
            dotOne.classList.add("active-dots-change");
        } else if (!dotTwo.classList.contains('active-dots-change')) {
            dotTwo.classList.add("active-dots-change");
        } else if (!dotThree.classList.contains('active-dots-change')) {
            dotThree.classList.add("active-dots-change");
        } else if (!dotFour.classList.contains('active-dots-change')) {
            dotFour.classList.add("active-dots-change");
        } else if (!dotFive.classList.contains('active-dots-change')) {
            dotFive.classList.add("active-dots-change");
        } else if (!dotSix.classList.contains('active-dots-change')) {
            dotSix.classList.add("active-dots-change");
            console.log("Passcode Correct.");
            getMobileBG.classList.remove('mobile-change-bg');
            showPasscodeMenu.style.display = "none";
            showMobileScreen.style.display = 'block';
            showMobileFooter.style.display = 'block';
            changeCarrierToTime.innerHTML = formattedTime;
            console.log('Calendar Loaded!');
            calendarMonth.innerHTML = displayMonth;
            calendarDate.innerHTML = getDate;
            calendarDay.innerHTML = unlockDate;
        } 
    };
    // on number tap, get that number's value (getEach)
    let keypadNumbers = Array.from(document.getElementsByClassName('keypad-btns'));
    const getEachBtn = keypadNumbers.map((number) => {
        number.addEventListener("click", getNumber, false);
    }); 
    cancelBtn.addEventListener('click', (e) => {
        // check if user had tapped number
        if (cancelBtn.innerText == 'Cancel') {
            console.log("Back to Welcome Screen.");
            getMobileWrapper.style.display = "block";
            hideWelcomeScreen.style.display = "block";
            hideWelcomeFooter.style.display = "block";
            showPasscodeMenu.style.display = "none";
            getMobileBG.classList.remove('mobile-change-bg');
        } else if (cancelBtn.innerText == 'Delete') {
            // delete dot 
            console.log("Deleted.");
            if (dotFive.classList.contains('active-dots-change')) {
                dotFive.classList.remove("active-dots-change");
            } else if (dotFour.classList.contains('active-dots-change')) {
                dotFour.classList.remove("active-dots-change");
            } else if (dotThree.classList.contains('active-dots-change')) {
                dotThree.classList.remove("active-dots-change");
            } else if (dotTwo.classList.contains('active-dots-change')) {
                dotTwo.classList.remove("active-dots-change");
            } else if (dotOne.classList.contains('active-dots-change')) {
                dotOne.classList.remove("active-dots-change");
                cancelBtn.innerHTML = "Cancel";
            };
        };
    });
});



// prevent double tap zoom on mobile
// const preventZoom = (e) => {
//     var t2 = e.timeStamp;
//     var t1 = e.currentTarget.dataset.lastTouch || t2;
//     var dt = t2 - t1;
//     var fingers = e.touches.length;
//     e.currentTarget.dataset.lastTouch = t2;

//     if (!dt || dt > 500 || fingers > 1) return; // not double-tap

//     e.preventDefault();
//     e.target.click();
// };
// window.addEventListener('DOMContentLoaded', preventZoom); 



// get users location for weather API
// navigator.geolocation.getCurrentPosition((position) => {
//     doSomething(position.coords.latitude, position.coords.longitude);
// });

// if ("geolocation" in navigator) {
//     /* geolocation is available */
//   } else {
//     /* geolocation IS NOT available */
//   }