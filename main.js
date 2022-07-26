// Select the button

const btn = document.getElementById('calculate');

// Add an event listner for the button
btn.addEventListener('click', function (){

    // select the height and weight
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if (height == '' || weight == '') {

        alert('Please fill in the height and weight fields!');
        return;
    }

    // Calculating the BMI
    // BMI = weight in KG / (height in m * height in m)

    // Convert height from cm to m
    height = height / 100

    let BMI = (weight / (height * height));

    // 2 digits after the comma
    BMI = BMI.toFixed(2);

    // Display the BMI
    document.querySelector('#result').innerHTML = BMI;

    // Display the comment
    let status = '';

    if (BMI < 18.5) {
        status = 'Underweight!';
    }

    if (BMI >= 18.5 && BMI < 25) {
        status = 'Healthy!';
    }

    if (BMI >= 25 && BMI < 30) {
        status = 'Overweight!';
    }
    if (BMI >= 30) {
        status = 'Obese!';
    }

    // Show the comment
    document.querySelector('.comment').innerHTML =`Comment: You are <span id="status">${status}</span>`;


});
