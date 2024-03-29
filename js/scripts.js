document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    // gsap scroll

    // header_big_text
    gsap.to(".header_big_text", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1",
      scrollTrigger: {
        trigger: ".hero_section",
        markers:false,
        scrub: true,
        toggleActions: "restart none none restart" // Kích hoạt hiệu ứng khi đi ngược lại
      }
    });
  
    gsap.to(".header_big_text", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power1",
      scrollTrigger: {
        trigger: ".about-section",
        start: "20% bottom", // Kích hoạt hiệu ứng khi section khác xuất hiện
        end: "bottom top",
        markers: false,
        scrub:true,
        toggleActions: "restart none reverse none" // Kích hoạt hiệu ứng khi đi ngược lại
      }
    });
  });
    // end header_big_text   

    // header_second_text
    gsap.to(".header_second_text", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1",
        scrollTrigger: {
          trigger: ".hero_section",
          markers:false,
          scrub: true,
          toggleActions: "restart none none restart" // Kích hoạt hiệu ứng khi đi ngược lại
        }
      });
    
      gsap.to(".header_second_text", {
        opacity: 0,
        y: 150,
        duration: 1,
        ease: "power1",
        scrollTrigger: {
          trigger: ".about-section",
          start: "20% bottom", // Kích hoạt hiệu ứng khi section khác xuất hiện
          end: "bottom top",
          markers: false,
          scrub:true,
          toggleActions: "restart none reverse none" // Kích hoạt hiệu ứng khi đi ngược lại
        }
      });
    // end header_secon_text

    // header_p_text 
    gsap.to(".header_p_text", {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power1",
        scrollTrigger: {
          trigger: ".hero_section",
          markers:false,
          scrub: true,
          toggleActions: "restart none none restart" // Kích hoạt hiệu ứng khi đi ngược lại
        }
      });
    
      gsap.to(".header_p_text", {
        opacity: 0,
        x: 150,
        duration: 1,
        ease: "power1",
        scrollTrigger: {
          trigger: ".about-section",
          start: "20% bottom", // Kích hoạt hiệu ứng khi section khác xuất hiện
          end: "bottom top",
          markers: false,
          scrub:true,
          toggleActions: "restart none reverse none" // Kích hoạt hiệu ứng khi đi ngược lại
        }
      });
    // end header_p_text

// about_section

gsap.to(".about_title", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power1",
    scrollTrigger: {
      trigger: ".about_section",
      markers: false,
      scrub: true,
      start: "top top",
      pin: true,
      pinSpacing: false, // Kích hoạt hiệu ứng khi đi ngược lại
    }
  });
  
// about_card 

gsap.to(".about_card2_1",{
  y:0,
  opacity:1,
  duration: 1,
  scrollTrigger: { 
    trigger: "",
    pin:true,
    markers: false,
  }
});

// end about_card

// Tạo một timeline
const timeline = gsap.timeline();

// Lặp qua mỗi div trong section và thêm hiệu ứng vào timeline
document.querySelectorAll('.about_section .box').forEach((box, index) => {
  timeline.to(box, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: box,
      scrub:true,
      markers: true,
      start: "90% center", // Kích hoạt hiệu ứng khi top của div cách top của viewport 80%
      toggleActions: "play none none reverse" // Kích hoạt hiệu ứng khi cuộn xuống và ngược lại khi cuộn lên
    }
  });
});

// end about-section

    // lenis scroll smooth 
    const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
    // end lenis scroll