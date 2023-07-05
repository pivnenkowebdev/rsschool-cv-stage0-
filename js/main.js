window.addEventListener('DOMContentLoaded', () => {
   document.body.style.visibility = 'visible';
   gsap.registerPlugin(ScrollTrigger);

      // smooth scroll to anchor-link
      document.querySelectorAll('a[href^="#"').forEach(link => {

         link.addEventListener('click', function(e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);

            const topOffset = document.querySelector('.header').offsetHeight;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
               top: offsetPosition,
               behavior: 'smooth'
            });
         });
      });

   
      // mobile-menu
      const burger = document.querySelector('.burger');
      const mobileMenu = document.querySelector('.header__menu--mobile');
      const mobileLink = document.querySelectorAll('.header__menu--mobile a')

      // open\close mobile menu
      burger.addEventListener('click',function(){
         burger.classList.toggle('active');
         mobileMenu.classList.toggle('active');
         document.body.classList.toggle('active')
      })

      // close mobile menu when click to link
      mobileLink.forEach((item)=>{
         item.addEventListener('click',()=>{
            burger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('active');
         })
      })

      // resize and close mobile menu
      window.addEventListener('resize',function(){
         burger.classList.remove('active');
         mobileMenu.classList.remove('active');
         document.body.classList.remove('active');
      })

   


      const tlPreview = gsap.timeline({})
  
      tlPreview.from('.about-me__holder-avatar',{
         x:400,
         duration:3,
         opacity:0,
         ease:"back.out(1.5)",
       })
      
      .from('.wrapper-main-title',{
        x:-400,
        duration:3,
        opacity:0,
        ease:"back.out(1.5)",
      },'<')

      .from('.wrapper-main-subtitle',{
         x:-400,
         duration:3,
         opacity:0,
         ease:"back.out(1.5)",
       },'<')

      .from('.about-me__contacts',{
         x:-400,
         duration:3,
         opacity:0,
         ease:"back.out(1.5)",
       },'<')
       
      .from('#about-me-description',{
         x:-400,
         duration:1,
         opacity:0,
         ease:"back.out(1.5)",
       })
       
       .from('#my-skills',{
         stagger:0.3,
         opacity:0,
         y:200,
         scrollTrigger:{
             // markers:true,
             trigger: '#my-skills',
             start: 'top 90%',
             end:'30% 60%',
             scrub:1.5,
             toggleActions: 'play none none reverse',
         }
       })

       .from('#portfolio',{
         stagger:0.3,
         opacity:0,
         y:200,
         scrollTrigger:{
             // markers:true,
             trigger: '#portfolio',
             start: 'top 90%',
             end:'30% 60%',
             scrub:1.5,
             toggleActions: 'play none none reverse',
         }
       })
    
       gsap.from('.education-experiance__item',{
         stagger:0.4,
         opacity:0,
         y:200,
         scrollTrigger:{
             // markers:true,
             trigger: '.education-experiance__item',
             start: 'top 90%',
             end:'30% 60%',
             scrub:1.5,
             toggleActions: 'play none none reverse',
         }
       })

       gsap.from('.example-code__item',{
         stagger:0.4,
         opacity:0,
         y:200,
         scrollTrigger:{
             // markers:true,
             trigger: '.example-code__item',
             start: 'top 90%',
             end:'30% 60%',
             scrub:1.5,
             toggleActions: 'play none none reverse',
         }
       })
       function parallax(){
         const preview = document.querySelector('#my-skills');
         const initialX = preview.offsetLeft + preview.offsetWidth / 0.1;
         const initialY = preview.offsetTop + preview.offsetHeight / 0.1;
                  
         document.addEventListener('mousemove', function(event) {
            const mouseX = event.clientX - initialX;
            const mouseY = event.clientY - initialY;
            
            gsap.to('.my-skills__holder-img', {
               rotationX: -mouseY * 0.1, // Изменение угла поворота по оси X
               rotationY: -mouseX * 0.1, // Изменение угла поворота по оси Y
               ease: 'power2.out'
            });
         });
      
      }

      parallax()
})

