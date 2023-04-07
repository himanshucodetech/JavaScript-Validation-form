function fillform() {
  if (nbb == false) {
    alert('enter valid username');
    return false;

  } else {

    alert('form submited');
    return true;
  }

}
let nbb = false;


function userName() {
  const user = document.getElementById('user').value;
  let len = user.length;
  let input = document.getElementById("user");
  input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);
  const re = /(?:[^a-zA-Z0-9]{1,2})/;
  if (len >= 16) {
    document.getElementById('userna').innerHTML = 'Name Should Be 16 Character';
  } else if (user.charAt(0) === ' ') {
    document.getElementById('userna').innerHTML = 'Not Start With Space';
  } else if (len <= 2) {
    document.getElementById('userna').innerHTML = 'Name Contain More Than 2 Character'
  }
  else if (re.test(user)) {
    document.getElementById('userna').innerHTML = '✅';
    nbb = true;
  } else {
    document.getElementById('userna').innerHTML = 'Must contain @,_,-, not repeat any letter more than two times and you choice to take number also anywhere in user name field';
  }
}

user.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    e.preventDefault();
  }

});


function firstName() {
  const first = document.getElementById('first').value;
  let len = first.length;
  let input = document.getElementById("first");
  input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);
  const re = /(^[A-Za-z]{2,16})([ ]{0,1})([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})/;


 if (len >= 16) {
    document.getElementById('firstna').innerHTML = 'Name Should Be 16 Character';
  }

  else if (first.charAt(0) === ' ') {
    document.getElementById('firstna').innerHTML = 'Not Start With Space';
  } else if (len <= 2) {
    document.getElementById('firstna').innerHTML = 'Name Contain More Than 2 Character'
  }
  else if (re.test(first)) {
    document.getElementById('firstna').innerHTML = '✅';
  }

  else if (first === 'X Æ A-12') {
    document.getElementById('firstna').innerHTML = 'valid name ✅';
  }

  else {
    document.getElementById('firstna').innerHTML = 'Invalid Name ❌';
  }

}
first.addEventListener("keydown", (e) => {
  if ((first.selectionStart===0 && e.keyCode ===32) || /[^\w\s]/.test(e.key) || /\d/.test(e.key)) {
    e.preventDefault();
  }
});


function lastName() {
  const last = document.getElementById('last').value;
  let len = last.length;
  let input = document.getElementById("last");
  input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);

  const re = /^(?!.*([a-zA-Z.])\1{1,})(?=.*([a-zA-Z.])\1)[a-zA-Z.]{0,15}$/gm;
  if (len >= 12) {
    document.getElementById('lastna').innerHTML = 'Name Should Be 12 Character';
  } else if (last.charAt(0) === ' ') {
    document.getElementById('lastna').innerHTML = 'Not Start With Space';
  } else if (len <= 0) {
    document.getElementById('lastna').innerHTML = 'Name Contain More Than 2 Character'
  }
  else if (re.test(last)) {
    document.getElementById('lastna').innerHTML = '✅';
  } else {
    document.getElementById('lastna').innerHTML = 'Invalid Name ❌';
  }

  const inputValue = input.value;
  if (inputValue.includes(".")) {
    input.disabled = true;
  } else {
    input.disabled = false;
  }

}







function validateEmail() {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const emailSuccess = document.getElementById('email-success');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.innerText = 'Invalid email format ❌';
    emailSuccess.innerText = '';
  }
  else if ((emailInput.value.match(/\.com/g) || []).length > 1) {
    emailError.innerText = 'Email should not contain .com more than once';
    emailSuccess.innerText = '';
  } else {
    emailError.innerText = '';
    emailSuccess.innerText = 'Valid email format ✅';
  }
}

function passwordValidation() {

  const password = document.getElementById('password').value;
  const reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (reg.test(password)) {
    document.getElementById('passAns').innerHTML = '✅';
  } else {
    document.getElementById('passAns').innerHTML = 'Invalid password must have combination of uppercase, lowercase, special symbol @ and number ❌';
  }

  return password
}


function showPass() {
  const password = document.getElementById('password');
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}


function passwordValidation2() {
  const password = document.getElementById('password').value;
  const password2 = document.getElementById('password2').value;
  if (password === password2) {
    document.getElementById('passAns2').innerHTML = '✅';
  } else if (!(password.length === password2.length)) {
    document.getElementById('passAns2').innerHTML = 'Password not match ❌';
  }
}

function showPass2() {
  const password2 = document.getElementById('password2');
  if (password2.type === "password") {
    password2.type = "text";
  } else {
    password2.type = "password";
  }
}

function colorValidation() {
  const color = document.getElementById('color').value;
  console.log(color);

  if (color === '#000000') {
    document.getElementById('colorAns').innerHTML = 'Pick color';
  } else {
    document.getElementById('colorAns').innerHTML = color;
  }
}



function dateValidation() {
  const date = document.getElementById('date').value;

  if (date === '') {
    document.getElementById('dateAns').innerHTML = 'Select Date';
  } else {
    document.getElementById('dateAns').innerHTML = '✅';
  }
}


function textFieldValidation() {
  const text = document.getElementById('text').value;
  if (text === '') {
    document.getElementById('textAns').innerHTML = 'field required';
  } else if (text.charAt(0) === " ") {
    document.getElementById('textAns').innerHTML = 'space not accepted';
  } else if (text.length <= 3) {
    document.getElementById('textAns').innerHTML = 'must be more than 3 character';
  } else if (text.length >= 20) {
    document.getElementById('textAns').innerHTML = 'it should be less than 20 character';
  } else {
    document.getElementById('textAns').innerHTML = '✅';
  }
}


const fileInput = document.getElementById('pdf-file');
const allowedExtensions = /(\.pdf)$/i;
fileInput.addEventListener('change', function () {
  const files = fileInput.files;
  const file = files[0];
  if (!allowedExtensions.test(file.name)) {
    document.getElementById('pdfan').innerHTML = 'Only pdf file are allowed';
    fileInput.value = '';
  }
});



function validateFile() {
  var fileInput = document.getElementById('file');
  var filepath = fileInput.value;
  var allowedExtensions = /(\.jpg|\.jpeg|\.png|\..gif)$/i;
  if (!allowedExtensions.exec(filepath)) {
    document.getElementById('jpgan').innerHTML = 'Only .jpg .jpeg .png .gif file are allowed to upload';
    fileInput.value = ' ';
    return false;
  } else {
    if (fileInput.files && fileInput.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById('jpgan').innerHTML = '✅';
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
  }
}



function validateDOB() {
  var dobInput = document.getElementById("dob");
  var dob = dobInput.value;
  var dobRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  if (!dobRegex.test(dob)) {
    document.getElementById("dobError").innerHTML = "Invalid date format ❌";
    return false;
  }
  var dobParts = dob.split("/");
  var dobDate = new Date(dobParts[2], dobParts[1] - 1, dobParts[0]);
  var currentDate = new Date();
  if (dobDate >= currentDate) {
    document.getElementById("dobError").innerHTML = "DOB must be in the past";
    return false;
  }
  document.getElementById("dobError").innerHTML = "";
  return true;
}

function validateAddress() {
  const addressInput = document.getElementById("address");
  const addressError = document.getElementById("addressError ❌");
  const addressRegex = /^[/\//a-zA-Z0-9\s,'-]*$/;



  if (!addressRegex.test(addressInput.value)) {
    addressError.innerHTML = "Please enter a valid address.";
    addressInput.classList.add("invalid ❌");
  } else {
    addressError.innerHTML = "";
    addressInput.classList.remove("invalid ❌");
  }

}

function language() {
  const lag = document.getElementById('language').value;
  console.log(lag);
  if (lag === 'Select language') {
    document.getElementById('languageAns').innerHTML = 'Select Language';
  }
}



const countrySelect = document.getElementById("country-select");
const phoneInput = document.getElementById("phone-input");
const codeInput = document.getElementById("code-input");

countrySelect.addEventListener("change", () => {
  const selectedCountry = countrySelect.value;
  let countryCode = "";
  var maxLength = "";

  switch (selectedCountry) {
    case "us":
      countryCode = "+1";
      phoneInput.setAttribute("maxlength", "11");
      phoneInput.setAttribute("minlength", "4");
      break;
   
    case "india":
      countryCode = "+91";
      phoneInput.setAttribute("maxlength", "10");
      phoneInput.setAttribute("minlength", "10");
      break;
    case "china":
      countryCode = "+86";
      phoneInput.setAttribute("maxlength", "11");
      phoneInput.setAttribute("minlength", "11");
      break;
    case "uae":
      countryCode = "+971";
      phoneInput.setAttribute("maxlength", "9");
      phoneInput.setAttribute("minlength", "9");
      break;
    default:
      codeInput.value = "";
      return;
  }

  codeInput.value = countryCode;
  phoneInput.value = "";
  phoneInput.placeholder = "Enter your phone number";

  phoneInput.focus();
});

phoneInput.addEventListener("input", () => {
  const selectedCountry = countrySelect.value;
  const phoneNumber = phoneInput.value;
  const regex = getRegexForCountry(selectedCountry);

  if (phoneNumber.match(regex)) {
    phoneInput.setCustomValidity("");
  } else {
    phoneInput.setCustomValidity("Please enter a valid phone number for your selected  country.");
  }
});

function getRegexForCountry(countryCode) {
  switch (countryCode) {
    case "us":
      return /\b(?!1)[0-9]{10}\b/gm;

    case "vietnam":
      return /^(03|05|07|08|09)\d{5,9}$/;
    case "india":
      return /^[6789]\d{9}$/gm;
    case "china":
      return /^(13|14|15|16|17|18|19)\d{9}$/;
    case "uae":
      return /^[2-9]\d{1}\d{7}|5[0-9]{1}\d{7}$/gm;
    default:
      return /.*/;
  }
}



const countryStateInfo = {
  INDIA: {
    UttarPradesh: {
      "Lucknow": ["226016", "226005", "226010", "226011"],
      "Deoria": ["274001", "274806", "274001"],
      "Gorakhpur": ["273016", "276005", "276010", "276011"],
      "Mau": ["221601", "221606", "221609"],
    },
    MadhyaPradesh: {
      Bhopal: ["462001", "462002"],
      Ujjan: ["463010", "463013"],
      Indor: ["467010", "467013"],
    },
  },
  Germany: {
    Bavaria: {
      Munich: ["80331", "80333", "80335", "80336"],
      Nuremberg: ["90402", "90403", "90404", "90405"],
    },
    Hessen: {
      Frankfurt: ["60306", "60308", "60309", "60310"],
      Surat: ["55246", "55247", "55248", "55249"],
    },
  },


  Nepal: {
    Kathmandu: {
      Pokhara: ["80331", "80333", "80335", "80336"],
      Deukhuri: ["90402", "90403", "90404", "90405"],
    },
    Bagmati: {
      Gandaki: ["60306", "60308", "60309", "60310"],
      Lumbini: ["55246", "55247", "55248", "55249"],
    },
  },

};






window.onload = function () {
  //todo: Get all input html elements from the DOM

  const countrySelection = document.querySelector("#Country"),
    stateSelection = document.querySelector("#State"),
    citySelection = document.querySelector("#City"),
    zipSelection = document.querySelector("#Zip");



  // todo: Disable all  Selection by setting disabled to false
  stateSelection.disabled = true;
  citySelection.disabled = true;
  zipSelection.disabled = true;



  for (let country in countryStateInfo) {
    countrySelection.options[countrySelection.options.length] = new Option(
      country,
      country
    );
  }


  //Todo: Country Changed

  countrySelection.onchange = (e) => {
    stateSelection.disabled = false;
    // todo: Clear all options from State Selection
    stateSelection.length = 1;
    citySelection.length = 1;
    zipSelection.length = 1;



    // todo: Load states by looping over countryStateInfo
    for (let state in countryStateInfo[e.target.value]) {
      stateSelection.options[stateSelection.options.length] = new Option(
        state,
        state
      );
    }
  };

  //todo: State Changed
  stateSelection.onchange = (e) => {
    citySelection.disabled = false;

    citySelection.length = 1;
    zipSelection.length = 1;
    for (let city in countryStateInfo[countrySelection.value][e.target.value]) {
      citySelection.options[citySelection.options.length] = new Option(
        city,
        city
      );
    }
  };

  //todo: State Changed
  stateSelection.onchange = (e) => {
    citySelection.disabled = false;
    citySelection.length = 1; // remove all options bar first
    zipSelection.length = 1; // remove all options bar first
    for (let city in countryStateInfo[countrySelection.value][e.target.value]) {
      citySelection.options[citySelection.options.length] = new Option(
        city,
        city
      );
    }
  };


  //todo: city Changed
  citySelection.onchange = (e) => {
    zipSelection.disabled = false;



    zipSelection.length = 1; // remove all options bar first


    let zips =
      countryStateInfo[countrySelection.value][stateSelection.value][
      e.target.value
      ];

    for (let i = 0; i < zips.length; i++) {
      zipSelection.options[zipSelection.options.length] = new Option(

        zips[i],
        zips[i],
      );
    }
  };

};




function validateAadharNumber() {
  const aadharNumberInput = document.getElementById("aadharNumber");
  const aadharNumberRegex = /^\d{12}$/;
  const isAadharNumberValid = aadharNumberRegex.test(aadharNumberInput.value);
  if (!isAadharNumberValid) {
    aadharNumberInput.classList.add("error");
    document.getElementById('aadharca').innerHTML = 'Enter valid 12 digit aadhar  number ❌';
  } else {
    aadharNumberInput.classList.remove("error");
    document.getElementById('aadharca').innerHTML = ' ✅';
  }

}




function validateAccountNumber() {
  const accountNumberInput = document.getElementById('account-number');
  const accountNumber = accountNumberInput.value;
  const regex = /^\d{8,12}$/;

  if (!regex.test(accountNumber)) {
    accountNumberInput.setCustomValidity('Account number contain only numbers');
    accountNumberInput.classList.add('error');
    document.getElementById('accno').innerHTML = ' Please enter a valid 8-12 digit account number";';
  } else {
    accountNumberInput.setCustomValidity('');
    accountNumberInput.classList.remove('error');
    document.getElementById('accno').innerHTML = '✅';
  }
}


const accountNumberInput = document.getElementById('account-number');
accountNumberInput.addEventListener('keyup', validateAccountNumber);



function martial() {
  const lag = document.getElementById('marital').value;
  console.log(lag);
  if (lag === 'Select marital status') {
    document.getElementById('marts').innerHTML = 'Select marital status';
  }
}




const form = document.querySelector('form');
const confirmationCheckbox = document.getElementById('confirmation');

form.addEventListener('submit', function(event) {
  if (!confirmationCheckbox.checked) {
    event.preventDefault();
    alert('Please confirm that the above mentioned information provided is accurate.');
  }
});



(function () {

  const form = document.querySelector('#sectionForm');
  const checkboxes = form.querySelectorAll('input[type=checkbox]');
  const checkboxLength = checkboxes.length;
  const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

  function init() {
    if (firstCheckbox) {
      for (let i = 0; i < checkboxLength; i++) {
        checkboxes[i].addEventListener('change', checkValidity);
      }

      checkValidity();
    }
  }

  function isChecked() {
    for (let i = 0; i < checkboxLength; i++) {
      if (checkboxes[i].checked) return true;
    }

    return false;
  }

  function checkValidity() {
    const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';
    firstCheckbox.setCustomValidity(errorMessage);
  }
  init();

})();


















