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
        case 6:
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