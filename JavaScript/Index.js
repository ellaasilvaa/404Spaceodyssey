// Simple starfield + subtle interactivity
(function(){
  const canvas = document.getElementById('stars');
  const ctx = canvas.getContext('2d');
  let w=0,h=0,stars=[];
  const STAR_COUNT = 260;

  function resize(){
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function rand(min,max){ return Math.random()*(max-min)+min; }

  function init(){
    stars = [];
    for(let i=0;i<STAR_COUNT;i++){
      stars.push({
        x: Math.random()*w,
        y: Math.random()*h,
        z: rand(0.2,1),
        r: rand(0.3,1.8),
        vx: rand(-0.02,0.02),
        vy: rand(-0.02,0.02)
      });
    }
  }

  function draw(){
    ctx.clearRect(0,0,w,h);
    // faint vignette
    const g = ctx.createRadialGradient(w*0.5,h*0.45,0,w*0.5,h*0.45,Math.max(w,h));
    g.addColorStop(0,'rgba(255,255,255,0)');
    g.addColorStop(1,'rgba(2,6,12,0.5)');
    ctx.fillStyle = g;
    ctx.fillRect(0,0,w,h);

    for(let s of stars){
      // parallax drift
      s.x += s.vx * (1 + (s.z*3));
      s.y += s.vy * (1 + (s.z*3));

      // wrap edges
      if(s.x < 0) s.x = w;
      if(s.x > w) s.x = 0;
      if(s.y < 0) s.y = h;
      if(s.y > h) s.y = 0;

      const alpha = 0.6 * s.z;
      ctx.beginPath();
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.arc(s.x, s.y, s.r*s.z, 0, Math.PI*2);
      ctx.fill();
    }
  }

  let last=0;
  function loop(t){
    const dt = Math.min(50, t-last);
    last = t;
    draw();
    requestAnimationFrame(loop);
  }

  // mouse parallax for scene
  const scene = document.querySelector('.scene');
  const monolith = document.querySelector('.monolith');
  const eye = document.getElementById('eye');

  function onMove(e){
    const x = (e.clientX / innerWidth - 0.5) * 30;
    const y = (e.clientY / innerHeight - 0.5) * 20;
    scene.style.transform = `perspective(1200px) rotateY(${x*0.2}deg) rotateX(${y*0.2}deg)`;
    monolith.style.transform = `translateY(${ -8 - y }px) rotateX(${ Math.max(-6,Math.min(6, -y*0.6)) }deg)`;
    eye.style.transform = `translateZ(40px) translateX(${ -x*0.8 }px) translateY(${ -y*0.6 }px)`;
  }

  // reduced motion?
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reduced){
    init();
    requestAnimationFrame(loop);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', (e)=> onMove(e.touches[0] || e));
    // eye pulse
    eye.classList.add('pulse');
  } else {
    // static fallback
    ctx.fillStyle = 'rgba(255,255,255,0.02)';
    ctx.fillRect(0,0,w,h);
  }

  // simple resize + init
  window.addEventListener('load', init);
})();