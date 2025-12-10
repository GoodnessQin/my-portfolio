// script.js - small interactions: mobile nav toggle, smooth scroll, reveal-on-scroll

document.addEventListener('DOMContentLoaded', function(){
  // nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-nav');
  toggle && toggle.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior:'smooth' });
        // close mobile nav if open
        if(nav.classList.contains('open')){
          nav.classList.remove('open');
          toggle.setAttribute('aria-expanded','false');
        }
      }
    });
  });

  // reveal on scroll (basic)
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(r=> revealObserver.observe(r));
});
// CLIENTS SECTION: trigger animations when section enters viewport
document.addEventListener('DOMContentLoaded', () => {
  const clientsFrame = document.querySelector('.clients-frame');
  const clientsSection = document.querySelector('#clients');

  if (!clientsSection) return;

  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // reveal frame (frameIn animation already set via CSS but in-case we want to toggle)
        clientsFrame.classList.add('in-view');

        // trigger staggered list items (they already have animation-delay; ensure they run)
        document.querySelectorAll('.who-list li').forEach(li => {
          li.style.visibility = 'visible';
        });

        o.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  obs.observe(clientsSection);
});
/* Uses your existing fade-up system */
  const projectFade = document.querySelectorAll('.fade-up-on-view');
  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.2 });

  projectFade.forEach(item => observer2.observe(item));


  // Fade-up animation on scroll
// Fade-up animation on scroll
const serviceCards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

serviceCards.forEach(card => observer.observe(card));
// Fade in elements on scroll
const footerObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      document.querySelector('.footer-title').style.opacity = "1";
    }
  });
}, { threshold: 0.2 });

footerObserver.observe(document.querySelector('.footer-section'));