//Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    //Hide results
    document.getElementById('results').style.display = 'none';
    //Show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);



    e.preventDefault();
});


//Calucalte Results
function calculateResults(){
    console.log("Calucalationg...")
    //UI Vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('intrest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const caluclateInterest = parseFloat(interest.value) / 100 /12;
    const calucaltedPaymnets = parseFloat(years.value) * 12; 


    //Compute monthly paymnet
    const x = Math.pow(1 + caluclateInterest, calucaltedPaymnets);
    const monthly = (principal*x*caluclateInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calucaltedPaymnets).toFixed(2);
        totalInterest.value = ((monthly* calucaltedPaymnets)-principal).toFixed(2);

        //Show Results
        document.getElementById('results').style.display = 'block';

        //Hide Loader
        document.getElementById('loading').style.display = 'none';
    }else {
       showError('Please check your numbers');
    }

    

}

//Show Error
function showError(error){

     //Hide Loader
     document.getElementById('loading').style.display = 'none';
    //crreat Div
    const errorDiv = document.createElement('div');

    // get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //Add class
    errorDiv.className = 'alert alert-danger';

    //Create text node and append to div

    errorDiv.appendChild(document.createTextNode(error));

    //Insert Error above heading
    card.insertBefore(errorDiv, heading);

    //clear Error after 3 seconds

    setTimeout(clearError, 3000)

}

//clear Error
function clearError(){
    document.querySelector('.alert').remove();
}