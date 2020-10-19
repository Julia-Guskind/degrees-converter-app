// need to track degree input tag
// track actual degree value
// calcualte output in radians and put it in radians tag

const degreeInput = document.getElementById("degrees")

console.log(degreeInput)

function convertToRadians()
{
    // take the actual degree input value
    const degreeValue = document.getElementById("degrees").value
    // multiply by 3.14 / 180 to get radians
    let radianValue = degreeValue * (3.14 / 180)
    // set value of the radians tag to this converted value 
    document.getElementById("radians").value = radianValue;
}

degreeInput.addEventListener('input', convertToRadians)
