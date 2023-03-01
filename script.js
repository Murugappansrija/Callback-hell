let display = document.getElementById("para")
display.innerHTML = ""

function ten(cb = () => {}) {
    display.innerHTML = "10"
    cb()
    
    
   
}

function nine(cb = () => {}) {
   
    display.innerHTML = "9"
    cb()
    
    
}

function eight(cb = () => {}) {
    
    display.innerHTML = "8"
    cb()
    
  
    
}

function seven(cb = () => {}) {
    
    display.innerHTML = "7"
    cb()
    

    
}
function six(cb = ()  =>{}) {
   
    display.innerHTML = "6"
    cb()
    

    
} 

function five(cb= () =>{}) {
   
    display.innerHTML = "5"
    cb()
    
   
} 

function four(cb = () =>{}) {
   
    display.innerHTML = "4"
    cb()
    
    
} 

function three(cb = () =>{}) {
    
    display.innerHTML = "3"
    cb()
    
} 

function two(cb = () =>{}) {
   
    display.innerHTML = "2"
    cb()
      
} 

function one(cb = () =>{}) {
   
    display.innerHTML = "1"
    cb()
     
} 
function zero(cb = () =>{}) {
    
    display.innerText = "HAPPY INDIPENDENCE DAY  "
    
                  
    cb()
    
    
} 



   
    




 function start() {
  ten(() => setTimeout(() =>{
   nine(() => setTimeout(() =>{
    eight(() => setTimeout(() =>{
     seven(() => setTimeout(() =>{
      six(() => setTimeout(() =>{
       five(() => setTimeout(() => {
        four(() => setTimeout(() =>{
         three(() => setTimeout(() => {
          two(() => setTimeout(() => {
           one(() => setTimeout(() =>{
             zero()  
            }, 1000));       
          }, 1000));
        },1000));
       },1000));
      }, 1000));
     }, 1000));
    }, 1000));
   }, 1000));
  }, 1000));
 },1000));
 }
 
start();

