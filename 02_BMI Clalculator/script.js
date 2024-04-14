const form = document.querySelector('form')
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // jab form ke andar event aaye tab select kare kyunki jab aap click kar rahe hain tabhi aap un value ko bhi lena chah rahe hain
    // or agar bahar lenge toh jaise hi page load ho gayaha hai toh  jab script run hogi tab empty value height ke andar or weigt ke andar store ho jayegi

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid height ${weight}`;
    } else {
        const BMI= (weight / ((height * height)/10000)).toFixed(2);
        // show the result
        result.innerHTML = `<span>${BMI}</span>`
    }

});


