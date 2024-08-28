var video=document.querySelector("#video-play");
var section=document.querySelector("#section5");
var videoLink=document.querySelector("#video-play video");
var circle=document.querySelector('#circle-one');
var col=document.querySelectorAll("#col");

gsap.to(circle,{
    rotate: -18,
    yoyo: true,
    repeat: -1,
    duration: 2.5,
    ease: "power2.out",
})
var circle=document.querySelector('#circle-two');
gsap.to(circle,{
    transform: "translatey(-150px)",
    yoyo: true,
    repeat: -1,
    duration: 2.5,
    ease: "power2.out",
})


video.addEventListener("mouseenter",function(){
    video.style.display="inline-block";
})
video.addEventListener("mouseleave",function(){
    video.style.display="none";
})
section.addEventListener("mouseenter",function(){
    video.style.display="inline-block";
})
section.addEventListener("mouseleave",function(){
    video.style.display="none";
})

col.forEach((e)=>{
    e.addEventListener("mouseenter",function(){
       const videoSrc= e.getAttribute("data-video");
       videoLink.setAttribute("src",videoSrc);
    })
})

let heading=document.querySelectorAll("#heading h1");
let colimg=document.querySelector("#col-right img");
let checking=document.querySelector("#heading");
let message=document.querySelector("#contents #msg");


heading.forEach((e)=>{
    e.addEventListener("click",function(){
        let source=e.getAttribute("data-img");
        let sourcemsg=e.getAttribute("data-msg");
        colimg.setAttribute('src',source);
        message.textContent=sourcemsg;
    })
})


let one=document.querySelector("#one");
let before1=window.getComputedStyle(one,"::before");


let two=document.querySelector("#two");
let before2=window.getComputedStyle(two,"::before");


let three=document.querySelector("#three");
let before3=window.getComputedStyle(three,"::before");


one.addEventListener("click",function(){
    one.style.color="#EFEAE3";
    one.style.setProperty('--first','inline-block');
    two.style.color="#efeae35f";
    two.style.setProperty('--second','none');
    three.style.color="#efeae35f";
    three.style.setProperty('--third','none');
})

two.addEventListener("click",function(){
    one.style.color="#efeae35f";
    one.style.setProperty('--first','none');
    two.style.color="#EFEAE3";
    two.style.setProperty('--second','inline-block');
    three.style.color="#efeae35f";
    three.style.setProperty('--third','none');
})


three.addEventListener("click",function(){
    one.style.color="#efeae35f";
    one.style.setProperty('--first','none');
    two.style.color="#efeae35f";
    two.style.setProperty('--second','none');
    three.style.color="#EFEAE3";
    three.style.setProperty('--third','inline-block');
})  


  let nav2=document.querySelector('#header #nav2');
  let toggler=document.querySelector('#nav2 .menu-btn');
  let logo=document.querySelector('.logo');
  let topup=document.querySelector("#top-up");
  let topup2=document.querySelector('#top-up2');
  let upDown=document.querySelector('#up-down');
  let count=0;
  nav2.addEventListener('click',function(){
    if(count==0){
        toggler.classList.add('active1');
        logo.style.opacity='0';
        logo.style.transition='.4s';
        topup.style.top='0';
        upDown.style.top='0';
        count=1;
    }
    else{
        toggler.classList.remove('active1');
        logo.style.opacity='1';
        logo.style.transition='.4s';
        topup.style.top='-100%';
        upDown.style.top='-100%';
        count=0
    }
  })



  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });



  let swiper1=document.querySelector('.swiper');
  let incircle=document.querySelector('#circlesw');

  swiper1.addEventListener('mouseenter',function(){
    gsap.to(incircle,{
        opacity: 1,
        transform: 'scale(1)',
    })
  })


  swiper1.addEventListener('mouseleave',function(){
    gsap.to(incircle,{
        opacity: 0,
        transform: 'scale(0)',
    })
  })


  swiper1.addEventListener('mousemove',function(e){
    let x=e.clientX;
    let y=e.clientY;
    gsap.to(incircle,{
        opacity: 1,
        transform: 'scale(1) translate(-50%,-50%)',
        left: x,
        duration: .5,
        ease: 'power3.out',
        top: y,
    })
  })