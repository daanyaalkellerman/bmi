const btn = document.getElementById('cal');

btn.addEventListener('click', function(){

    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if(height =='' || weight == ''){
        alert('pleasse fill out the input fields')
        return
    }

    //weight / (height * height)

    height = height / 100

    let BMI = (weight / (height * height));

    BMI = BMI.toFixed(2);
   
    document.querySelector('#result').innerHTML = BMI;

    let status = '';

    if(BMI < 18.5){
        document.querySelector('.comment').innerHTML =  "Underweight";
    }
    if(BMI >=18.5 && BMI < 25){
        document.querySelector('.comment').innerHTML=  "Healthy";
    }
    if(BMI >=25 && BMI < 30){
        document.querySelector('.comment').innerHTML=  "Overweight";
    }
    if(BMI >=30){
        document.querySelector('.comment').innerHTML=  "Obese";
    }

});