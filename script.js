var input = document.getElementById("step1");
var counter = 1;
var fullName;
input.addEventListener("keypress", function(event)
{
    if(event.key === "Enter")
    {
        event.preventDefault();
        NextStep();
    }
});

function NextStep()
{
    switch(counter)
    {
        case 1:
            fullName = document.getElementById('fullName').value;
            document.getElementById('genderLabelID').innerHTML = "Hello " + fullName + ", Select your gender: ";
            input = document.getElementById("step" + (counter + 1));
            ActivateNextBlock();
            break;
        case 5:
            ActivateNextBlock();
            break;
        case 6:
            document.getElementById("regSubmitButton").style.display = "none";
            document.getElementById("regConfirmText").value = "Thank You For Registration ${fullName}";
            document.getElementById("regConfirmText").style.display = "block";
            document.getElementById("VehicleRegForm").style.display = "flex";
            input = document.getElementById("step" + (counter + 1));
            ActivateNextBlock();
            break;
            
        default:
            input = document.getElementById("step" + (counter + 1));
            ActivateNextBlock();
            break;
    }
}

function ActivateNextBlock()
{
    document.getElementById("step" + counter).style.display = "none";
    document.getElementById("step" + (counter + 1)).style.display = "block";
    counter++;
}