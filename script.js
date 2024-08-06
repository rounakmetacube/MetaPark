var passwordField = document.getElementById("password");
var passwordInput = document.getElementById("password").value;
var input = document.getElementById("step1");
var counter = 1;
var fullName;

var emp = new Employee();
var emp_vehicle = new Vehicle();

input.addEventListener("keypress", function(event)
{
    if(event.key === "Enter")
    {
        event.preventDefault();
        NextStep();
    }
});

function nameValidation()
{
    let nameInput = document.getElementById("fullName").value;
    let noNumericRegExp = /\d/;
    if(nameInput.length < 2)
    {
        alert("Name must have minimum of 2 characters")
        return false;
    }
    
    else if(noNumericRegExp.test(nameInput))
    {
        alert("Name must not have numeric characters")
        return false;
    }
    else 
    {
        emp.empName = nameInput;
        return true;
    }
}

function storingGender()
{
    if(document.getElementById('genderOptionMale').checked) {
        emp.gender = "Male";
      }
      else if(document.getElementById('genderOptionFemale').checked) {
        emp.gender = "Female";
      }
}

function emailValidation()
{
    let emailInput = document.getElementById("email").value;   
    if(emailInput.includes('@') && emailInput.includes("."))
    {
        emp.email = emailInput;
        return true;
    }
    else
    {
        alert("Wrong Email Address");
        return false;
    }
}

function passwordValidation()
{
    passwordInput = document.getElementById("password").value;   
    let upperCaseCheck = /[A-Z]/;
    let lowerCaseCheck = /[a-z]/;
    let numberCheck = /[0-9]/;
    if(passwordInput.length < 8)
    {
        alert("Password Length Must Be More Than 7 Characters");
        return false;
    }
    
    if (passwordInput.length >= 8 && upperCaseCheck.test(passwordInput) && numberCheck.test(passwordInput) && lowerCaseCheck.test(passwordInput))
    {
        emp.password = passwordInput;
        return true;
    }
    else
    {
        alert("Password Must Contain Uppercase, Lowercase and Numeric Characters");
        return false;
    }    
}

function confirmPasswordValidation()
{
    let confirmPassInput = document.getElementById("confirmPass").value;      
    if(confirmPassInput == passwordInput)
    {
        return true;
    }
    else
    {
        alert("Wrong Password Entered");
        return false;
    }
}

function numberValidation()
{
    let phoneNoInput = document.getElementById("phNumber").value;
    if(phoneNoInput.length > 8)
    {
        emp.phoneNumber = phoneNoInput;
        return true;
    }
    else
    {
        alert("Invalid Phone Number");
        return false;
    }
}


function regFormToClass()
{
    switch(counter)
    {
        case 7:
            emp_vehicle.brand = document.getElementById("VehicleCompany").value;
            NextStep();
            break;
        case 8:
            emp_vehicle.model = document.getElementById("VehicleModel").value;
            NextStep();
            break;
        case 9:
            emp_vehicle.type = document.getElementById("vehicleType").value;
            NextStep();
            break;
        case 10:
            emp_vehicle.vehicleNumber = document.getElementById("vehicleNumber").value;
            NextStep();
            break;
        case 11:
            emp_vehicle.empID = document.getElementById("empID").value;
            NextStep();
            break;
        case 12:
            emp_vehicle.identification = document.getElementById("identification").value;
            NextStep();
            break;       
    }
}

function NextStep()
{
    switch(counter)
    {
        case 1:
            if(nameValidation())
                {
                    document.getElementById('genderLabelID').innerHTML = `Hello ${emp.empName},Select your gender: `;
                    input = document.getElementById("step" + (counter + 1));
                    ActivateNextBlock();
                }
            break;
        case 2:
                storingGender();
                input = document.getElementById("step" + (counter + 1));
                ActivateNextBlock();
                break;
        case 3:
            if(emailValidation())
            {
                input = document.getElementById("step" + (counter + 1));
                ActivateNextBlock();
            }
            break;
        case 4:
            if(passwordValidation())
            {
                input = document.getElementById("step" + (counter + 1));
                ActivateNextBlock();
            }
            break;
        case 5:
            if(confirmPasswordValidation())
            {
                ActivateNextBlock();
            }
            break;
        case 6:
            if(numberValidation())
            {
                document.getElementById("regSubmitButton").style.display = "none";
                let regNo = Math.floor(Math.random() * 1001);
                emp.regID = regNo;
                document.getElementById("regConfirmText").innerHTML = `Your Registration Number is ${regNo}`;
                document.getElementById("regConfirmText").style.display = "block";
                document.getElementById("VehicleRegForm").style.display = "flex";
                input = document.getElementById("step" + (counter + 1));
                ActivateNextBlock();
            }
            break;
        case 12:
            document.getElementById("step" + counter).style.display = "none";
            alert("Registration Complete. Pick the pricing plan to continue");
            document.getElementById("vehicleRegConfirmText").innerHTML = `Thank You For Registration ${emp.empName}`;
            document.getElementById("vehicleRegConfirmText").style.display = "block";    
            document.getElementById("Pricing").style.display = "flex";
            document.getElementById("PricingCurrency").style.display = "block";
            break;
        default:
            if(counter < 12)
            {
                input = document.getElementById("step" + (counter + 1));
                ActivateNextBlock();
                break;
            }
    }
}

function ActivateNextBlock()
{
    document.getElementById("step" + counter).style.display = "none";
    document.getElementById("step" + (counter + 1)).style.display = "block";
    counter++;
}

passwordField.addEventListener('input',()=>{
    if(passwordField.value.length<4)
    {
        passwordField.style.borderColor = "red";
    }
    else if(passwordField.value.length>=4 && passwordField.value.length<8)
    {
        passwordField.style.borderColor = "yellow";
    }
    else if(passwordField.length >= 8 && upperCaseCheck.test(passwordField) && numberCheck.test(passwordField) && lowerCaseCheck.test(passwordField))
    {
        passwordField.style.borderColor = "green";
    }
})

const pricingArray = 
{
    cycle:
    {
        daily:5, monthly:100, yearly:500
    },
    motorcycle:
    {
        daily:10, monthly:200, yearly:1000
    },
    fourwheeler:
    {
        daily:20, monthly:500, yearly:3500
    }
};

const currencyRates = {
    USD:1,
    INR:83.86, 
    JPY:142.92 
};

let currencyDropdown = document.getElementById("currency");
let currencySignArray = document.getElementsByClassName("currencySign");
let monthlyPriceArray = document.getElementsByClassName("monthlyPricing");
let dailyPriceArray = document.getElementsByClassName("dailyPricing");
let yearyPriceArray = document.getElementsByClassName("yearlyPricing");
let circlePriceArray = document.getElementsByClassName("circlePricing");

currencyDropdown.addEventListener("change", ()=>{
    switch(currencyDropdown.value)
    {
        case "USD":
            for(let c of currencySignArray)
            {
                c.innerHTML = "$";
            }
            pricingConverter(currencyRates.USD);
            break;
        case "INR":
            for(let c of currencySignArray)
            {
               c.innerHTML = "₹";
            }
            pricingConverter(currencyRates.INR);
            break;
       case "JPY":
            for(let c of currencySignArray)
            {
               c.innerHTML = "¥";
            }
            pricingConverter(currencyRates.JPY);
            break;    
    }
}
)

function pricingConverter(currencyRate)
{
    //Circle Pricing
    circlePriceArray[0].innerHTML = Math.round(pricingArray['cycle'].monthly*currencyRate);
    circlePriceArray[1].innerHTML = Math.round(pricingArray['motorcycle'].monthly*currencyRate);
    circlePriceArray[2].innerHTML = Math.round(pricingArray['fourwheeler'].monthly*currencyRate);

    for(var i=0;i<dailyPriceArray.length;i++){
        if(i==0){
            dailyPriceArray[i].innerHTML = Math.round(pricingArray['cycle'].daily*currencyRate);
            monthlyPriceArray[i].innerHTML = Math.round(pricingArray['cycle'].monthly*currencyRate);
            yearyPriceArray[i].innerHTML = Math.round(pricingArray['cycle'].yearly*currencyRate);
        }
        if(i==1){
            dailyPriceArray[i].innerHTML = Math.round(pricingArray['motorcycle'].daily*currencyRate);
            monthlyPriceArray[i].innerHTML = Math.round(pricingArray['motorcycle'].monthly*currencyRate);
            yearyPriceArray[i].innerHTML = Math.round(pricingArray['motorcycle'].yearly*currencyRate);
       }
        if(i==2){
            dailyPriceArray[i].innerHTML = Math.round(pricingArray['fourwheeler'].daily*currencyRate);
            monthlyPriceArray[i].innerHTML = Math.round(pricingArray['fourwheeler'].monthly*currencyRate);
            yearyPriceArray[i].innerHTML = Math.round(pricingArray['fourwheeler'].yearly*currencyRate);
      }
    }
}

