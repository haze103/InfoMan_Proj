// Function to check login credentials
function checkLoginCreds(strUserType) {
    var strStudentNumber = document.getElementById('txtUniqueIdentifier').value;
    var strPassword = document.getElementById('txtPassword').value;

    if (strStudentNumber === 'yourValidStudentNumber' && strPassword === 'yourValidPassword') {
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
        strCode += strChars.charAt(Math.floor(Math.random() * 8));
        counter += 1;
    }
    return strCode;
}

var strGeneratedVerCode = generateVerCode();

function sendEmail() {
    //send an email to the email address containing the generated verification code using generateVerCode() of the user stored in the database
    strGeneratedVerCode;
}

function showPopup() {
    document.querySelector('.shpContainer').classList.add('disabled');
    document.querySelector('.fsubPopup').style.display = 'flex';
}
  
function closePopup() {
    document.querySelector('.shpContainer').classList.remove('disabled');
    document.querySelector('.fsubPopup').style.display = 'none';
}

  
function confirmVerCode() {
    var strVerificationCode = document.getElementById('txtVerCode').value;
    if (strVerificationCode === strGeneratedVerCode) {
        alert('Verification code confirmed. You can proceed.');
        window.location.href = "home.html";
    } else {
        alert('Incorrect verification code. Please try again.');
    }
}
