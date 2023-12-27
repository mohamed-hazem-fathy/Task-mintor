// let num ; = [...document.querySelectorAll('.numbers')]
let step1 = document.querySelector('.main');
let step2 = document.querySelector('.container');
let btn = [...document.querySelectorAll('.numbers')];

let span = document.getElementById('span1')
let sup = document.getElementById('mybtn') 



// document.getElementById('').innerHTML = num[1].values 


let num =  [...document.querySelectorAll('.numbers')].value;


// btn.onclick = function(evnt){
//     const clickedElementNumber = evnt.target.getAttribute('data-numder')
//     console.log('clickedElementNumber = ', clickedElementNumber)
//     for(let i = 1; i>5;i++){
//         num = [...document.querySelectorAll('.numbers')].value;
//         span.innerHTML = num[i].value
//     }
    

    
 

   
// }
sup.onclick = function(){
    step1.style.display = 'none'
    step2.style.display = 'flex'

}

btn.forEach(function(btnItem){
    console.log('btnItem = ', btnItem)
    btnItem.onclick = function (event){
        
        console.log('event', event)
        
        span.innerHTML = event.target.getAttribute('data-numder');

        btn.forEach(item=>item.classList.remove('active'))

        event.target.classList.add('active')

        
    }
})


// btn.forEach(function(btnItem){
//     btnItem.onclick = function (e){
//         e.target.getAttribue('')
//     }
    

// });