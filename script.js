let newText = document.querySelector('.text');
let stars = document.querySelectorAll('.star');
let bx = document.querySelectorAll('.bxs-star');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header');
let section =  document.querySelectorAll('section');




let swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  


  stars.forEach((each) => {
    each.addEventListener('click',(e)=>{
      bx.forEach(lists =>{
        lists.style.color='rgb(93, 92, 92)';
      }
      );
     if(e.target.classList.contains('bx')){
       console.log(e.target);
     let dataValue = each.dataset.number;
       for(let i=1;i<=dataValue;i++){
       let newvalue = document.querySelector(`button[data-number = '${i}']`);
       console.log(newvalue);
       console.log(newvalue.firstElementChild);
       newvalue.firstElementChild.style.color ='white';
       console.log(dataValue);
         if(dataValue === '1'){
            newText.innerHTML = `<h3>BAD</h3>`;
         }
         else if(dataValue === '2'){
          newText.innerHTML = `<h3>NOT BAD</h3>`;
         }
         else if(dataValue === '3'){
          newText.innerHTML = `<h3>GOOD</h3>`;
         }
         else if(dataValue === '4'){
          newText.innerHTML = `<h3>LOVED IT</h3>`;
           }
       }
       
     }; 
     setDefault();
    });
  });
  

  //console.log(dataValue);


console.log(bx);
  function setDefault(){
    let updatedText = setTimeout(() => {
      newText.innerHTML =`<h3>Thanks for rating  us!! </h3>`;
      bx.forEach(lists =>{
        lists.style.color='rgb(93, 92, 92)';
      }
      );
    },4000);
    updatedText;
    
  };

  menu.addEventListener('click', function(){
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  });

  window.addEventListener('scroll', function(){
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
  });

  let newObserver = new IntersectionObserver(entries =>{
    entries.forEach(list =>{
    if(list.isIntersecting){
      header.classList.add('sticky');
    }
    });
  });

  section.forEach(each =>{
    newObserver.observe(each);
  });



