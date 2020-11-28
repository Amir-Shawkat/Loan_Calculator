 //Listen for submit
 document.getElementById('loan-form').addEventListener('submit',function(e){
   
  

  //Hide Result
   document.getElementById('results').style.display='none'

   //Show Loader
   document.getElementById('loading').style.display='block'

   setTimeout(calculateResults,2000)

   e.preventDefault()
 })
 

 //Calculate Results
 function calculateResults(){
   console.log('Calculating.....')
   //UI Vars
   const amount=document.getElementById('amount')
   const interest=document.getElementById('interest')
   const years=document.getElementById('years')
   const monthlyPayment=document.getElementById('monthly-payment')
   const totalPayment=document.getElementById('total-payment')
   const totalInterest=document.getElementById('total-interest')

   const principal=parseFloat(amount.value)
   const calculatedInterest=parseFloat(interest.value)/100/12
   const calculatedPayments=parseFloat(years.value)*12

   //Compute Monthly Payment
   const x=Math.pow(1+calculatedInterest,calculatedPayments)
   const monthly=(principal*calculatedInterest*x)/(x-1)

   if(isFinite(monthly)){
     monthlyPayment.value=monthly.toFixed(2)
     totalPayment.value=(monthly*calculatedPayments).toFixed(2)
     totalInterest.value=((monthly*calculatedPayments)-principal).toFixed(2)

     //show results
     document.getElementById('results').style.display='block'
     //hide loader
     document.getElementById('loading').style.display='none'
   } else {
     showError('Please Check Your Numbers')
   }
   
 }

 //Show Error
 function showError(error){

   //hide results
   document.getElementById('results').style.display='none'
   //hide loader
   document.getElementById('loading').style.display='none'

   //Create div
   const errorDiv=document.createElement('div')

   //Get Elements
   const card=document.querySelector('.card')
   const heading=document.querySelector('.heading')

   //Add class
   errorDiv.className='alert alert-danger'

   //Create textNode and append to div
   errorDiv.appendChild(document.createTextNode(error))

   //Insert error above heading
   card.insertBefore(errorDiv,heading)

   //Clear error after 3 sec
   setTimeout(clearError,5000)
 }

 //Clear Error
 function clearError(){
   document.querySelector('.alert').remove()
 }

 

//  var amnt = document.getElementById('amount');
//  var preamnt;
//  amnt.addEventListener('change',function(){
//    preamnt = amnt.value
//    amnt.value=`${amount.value} BDT`
//  })
//  amnt.addEventListener('click',function(){
//   if(preamnt != undefined)
//   {
//     amnt.value=preamnt
//   }
    
// })

eventLoader(document.getElementById('amount'),"BDT")

eventLoader(document.getElementById('interest'),"%")

eventLoader(document.getElementById('years'),"years")

// function eventLoader(e,s){
  
//   var preamnt;
//   e.addEventListener('change',function(){
//     e.type='text'
//     preamnt = e.value
//     e.value=`${e.value} ${s}`
//   })
//   e.addEventListener('click',function(){
//     if(preamnt != undefined)
//     {
//       e.value=preamnt
//     }
//     if(e.type='text'){
//       e.type='number'
//     }
      
//   })
// }

function eventLoader(e,s){
  
  var preamnt;
  e.addEventListener('focusout',function(){
    e.type='text'
    preamnt = e.value
    e.value=`${e.value} ${s}`
  })
  e.addEventListener('focusin',function(){
    if(preamnt != undefined)
    {
      e.value=preamnt
    }
    if(e.type='text'){
      e.type='number'
    }
      
  })
}