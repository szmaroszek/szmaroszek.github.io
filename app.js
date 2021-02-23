(function() {
    var x, lastTime = 0, vendors = ['webkit', 'moz', 'ms', 'o'];
    for(x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
  
    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime(),
            timeToCall = Math.max(0, 16 - (currTime - lastTime)),
            id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
  
    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
  }());





var example = ['effective.', 'intuitive.', 'playful.', 'creative.', 'inspiring.','beautiful.','engaging.'];

function textSequence(i) {

    if (example.length > i) {
        setTimeout(function() {
          
            document.getElementById('desc').innerHTML = example[i];
            textSequence(++i);
            
        }, 1500); // 1 second (in milliseconds)

    } else if (example.length == i) { // Loop
        textSequence(0);
    }

}


const scratch = document.querySelector('#scratch');
const section1 = document.querySelector('#section1');
const keep = document.querySelector('#keep-scr');

section1.addEventListener('mousemove', (e) => {
  let xAxis = ((window.innerWidth - e.pageX)/130);
  let yAxis = ((window.innerHeight / 2 - e.pageY)/130);
  scratch.style.transform = `rotateY(-${xAxis}deg) rotateX(${yAxis}deg)`;
})

document.getElementById('svgmessage').addEventListener

document.getElementById('svgmessage').addEventListener('mousemove', () => {
  cursor.style.height = '65px';
  cursor.style.width = '65px';
})
document.getElementById('svgmessage').addEventListener('mouseleave', () => {
  cursor.style.height = '40px';
  cursor.style.width = '40px';
})

const cursor = document.getElementById('cursor');
const body = document.getElementById('body');
const canvas = document.getElementsByTagName('canvas');

const workRectangle = document.getElementsByClassName('work-rectangle');

const close = document.getElementsByClassName('close');
const line1 = document.getElementsByClassName('line-1');
const line2 = document.getElementsByClassName('line-2');


const more = document.getElementsByClassName('more');
const arrow = document.getElementsByClassName('arrow');
const soonTxt = document.getElementsByClassName('soon-txt')
var currentRectangle=4;

body.addEventListener('mousemove', (e) => {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
})



for (var i = 0; i < workRectangle.length; i++) {
  close[i].addEventListener('mouseenter', () => {
    cursor.style.height = '65px';
    cursor.style.width = '65px';
  });
  close[i].addEventListener('mouseleave', () => {
    cursor.style.height = '40px';
    cursor.style.width = '40px';
  });
  close[i].addEventListener('click', function closeRectangle(){
      document.getElementById('rectangle-'+ currentRectangle).style.transition = 'transform .5s';
      document.getElementById('rectangle-'+ currentRectangle).style.transform = 'translateX(250%)';
      currentRectangle--;
  });

  more[i].addEventListener('mouseenter', () => {
    cursor.style.height = '65px';
    cursor.style.width = '65px';
  });
  more[i].addEventListener('mouseleave', () => {
    cursor.style.height = '40px';
    cursor.style.width = '40px';
  });
  more[i].addEventListener('click', function showMore(){
    arrow[currentRectangle-1].style.opacity = '0';
    soonTxt[currentRectangle-1].style.opacity = '1';
    if (window.getComputedStyle(document.getElementsByClassName('works-title')[0], null).color == 'rgb(11, 9, 10)'){
      more[currentRectangle-1].style.backgroundColor = 'rgba(11, 9, 10, 1)';
    } 
    else{
      more[currentRectangle-1].style.backgroundColor = 'rgba(245, 245, 245, 1)';
    }

    setTimeout(() => {
    arrow[currentRectangle-1].style.opacity = '1';
    soonTxt[currentRectangle-1].style.opacity = '0';
    more[currentRectangle-1].style.backgroundColor = 'rgba(245, 245, 245, 0)';
    }, 2000);
});
}

document.getElementById('replay').addEventListener('mouseenter', (e) => {
  cursor.style.height = '100px';
  cursor.style.width = '100px';
});
document.getElementById('replay').addEventListener('mouseleave', (e) => {
  cursor.style.height = '40px';
  cursor.style.width = '40px';
});

document.getElementById('replay').addEventListener('click', (e) => {
  currentRectangle=4;
  setTimeout(() => {
    for (var i = currentRectangle; i > 0; i--) {
        document.getElementById('rectangle-'+ i).style.opacity = '0';

        gsap.to('#rectangle-1', 0.5,{
          scrollTrigger: {
            trigger: '.section2-text',
            start: '0px 70%',
          },
          opacity:1,
          x: 90,
        })
        
        gsap.to('#rectangle-2', 0.5,{
          scrollTrigger: {
            trigger: '.section2-text',
            start: '0px 70%',
          },
          opacity:1,
          x: 105,
        })
        
        gsap.to('#rectangle-3', 0.5,{
          scrollTrigger: {
            trigger: '.section2-text',
            start: '0px 70%',
          },
          opacity:1,
          x: 120,
        })
        
        gsap.to('#rectangle-4', 0.5,{
          scrollTrigger: {
            trigger: '.section2-text',
            start: '0px 70%',
          },
          opacity:1,
          x: 135,
        })
        
      console.log(i)
  }}, 20);
    });

  gsap.to('#svgmessage',{
      scrollTrigger: {
      trigger: '#section2',
      toggleActions: "restart none none reverse",
    },
    opacity: '1',
  })
    

gsap.to('#works', {
  scrollTrigger:{
    trigger: '.section2-text',
  } ,

  y: -300
})

gsap.to('#rectangle-1', 0.5,{
  scrollTrigger: {
    trigger: '.section2-text',
    start: '0px 70%',
  },
  opacity:1,
  x: 90,
  delay: .3,
})

gsap.to('#rectangle-2', 0.5,{
  scrollTrigger: {
    trigger: '.section2-text',
    start: '0px 70%',
  },
  opacity:1,
  x: 105,
  delay: .2,
})

gsap.to('#rectangle-3', 0.5,{
  scrollTrigger: {
    trigger: '.section2-text',
    start: '0px 70%',
  },
  opacity:1,
  x: 120,
  delay: .1,
})

gsap.to('#rectangle-4', 0.5,{
  scrollTrigger: {
    trigger: '.section2-text',
    start: '0px 70%',
  },
  opacity:1,
  x: 135,
  
})

gsap.to('#replay', 0.5,{
  scrollTrigger: {
    trigger: '.section2-text',
    start: '0px 70%',
  },
  opacity:1,
  delay: 3
  
})


gsap.to('#technologies', {
  scrollTrigger: {
    trigger: '#technologies-text',
  },
  y: -300
})


const me = gsap.timeline({
  scrollTrigger: {
    trigger: '#section3',
    pin: true,
    scrub: true,
    end: '+=4000',
  },
})

me.to('#ambitious', 0.01, {opacity: .8})
me.to('#determined', 0.01, {opacity: .8})
me.to('#hard-working', 0.01, {opacity: .8})

gsap.to('#ambitious', {
  scrollTrigger: {
    trigger: '#ambitious',
    start: 'top top',
    end: '+=4500',
    scrub: .5,
  },
  x: 4000
})

gsap.to('#determined', {
  scrollTrigger: {
    trigger: '#ambitious',
    start: 'top top',
    end: '+=4500',
    scrub: .5,
  },
  x: -4000
})

gsap.to('#hard-working', {
  scrollTrigger: {
    trigger: '#ambitious',
    start: 'top top',
    end: '+=4500',
    scrub: .5,
  },
  x: 4000,
})

gsap.to('#me',{
  scrollTrigger: {
    trigger: '#hard-working',
    start: '3000px center',
    end: '+=200',
    scrub: true,
  },
  opacity: 1,
})


gsap.to('#svgmessage',{
  scrollTrigger: {
  trigger: '#section4',
  end: '+=100',
  toggleActions: "restart none none reverse"
},
opacity: '0',
display: 'none'
})


gsap.to('#section4',{
  scrollTrigger: {
  trigger: '#section4',
  start:'+=100 center',
  end: '+=100',
},
opacity:1
})
