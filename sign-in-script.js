function checkLoginCreds(strUserType) {
    var strStudentNumber = document.getElementById('txtUniqueIdentifier').value;
    var strPassword = document.getElementById('txtPassword').value;

    if (strStudentNumber === 'StudentNumber01' && strPassword === 'ValidPassword01') { // this will be edited after connecting with the db
        window.location.href = "home.html";
    } else if (strStudentNumber === '' || strPassword === '') {
        alert('Input field/s are empty.');
    } else {
        if (strUserType === 'student') {
            alert('Incorrect student number or password.');
        }
        else if (strUserType === 'faculty') {
            alert('Incorrect Employee ID or password.');
        }
    }
}

function generateVerCode() {
    let strCode = '';
    const strChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let counter = 0;
    while (counter < 8) {
        strCode += strChars.charAt(Math.floor(Math.random() * strChars.length));
        counter += 1;
    }
    return strCode;
}

const strGeneratedVerCode = generateVerCode();

function confirmVerCode() {
    var strVerificationCode = document.getElementById('txtVerCode').value;

    if (strVerificationCode === strGeneratedVerCode) {
        alert('Verification code confirmed. Please change your password in account settings.');
        window.location.href = "home.html";
    } else {
        alert('Invalid verification code. Please try again.');
    }
}

// error sending going to be fixed soon
function sendOTP() {
    // var strEmail = document.getElementById(''); => this is from the db/ this code will be edited
    let strEmailBody = `<h2>Your OTP is: ${strGeneratedVerCode}</h2>`;

    // got this code from https://smtpjs.com/ 
    Email.send({
        SecureToken: "bba39834-f516-40ed-a1b7-9eb109085a2b",
        To : 'espiritu.mickaeladanna@gmail.com', // will be edited
        From : "PUP-NALLRC",
        Subject : "Here is your OTP",
        Body : strEmailBody,
    }).then(
      message => {
        if (message === "OK") {
            alert("Your OTP has been sent to your email.");
        } else {
            alert("Error sending an OTP to your email.");
        }
      }
    )
}

function showPopup() {
    document.querySelector('.shpContainer').classList.add('disabled');
    document.querySelector('.fsubPopup').style.display = 'flex';
    sendOTP();
}
  
function closePopup() {
    document.querySelector('.shpContainer').classList.remove('disabled');
    document.querySelector('.fsubPopup').style.display = 'none';
}
