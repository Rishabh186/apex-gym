/* ============================================
   APEX GYM — Main JavaScript
   ============================================ */

(function () {
  'use strict';

  // --- DOM References ---
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.navbar__link');
  const contactForm = document.getElementById('contactForm');
  const sections = document.querySelectorAll('section[id]');

  // --- Hamburger Menu Toggle ---
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu on nav link click
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // --- Sticky Navbar Scroll Effect ---
  var scrollTicking = false;

  window.addEventListener('scroll', function () {
    if (!scrollTicking) {
      requestAnimationFrame(function () {
        if (window.scrollY > 50) {
          navbar.classList.add('navbar--scrolled');
        } else {
          navbar.classList.remove('navbar--scrolled');
        }
        updateActiveLink();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });

  // --- Scroll-Triggered Fade-In Animations ---
  var fadeElements = document.querySelectorAll('.fade-in');

  var fadeObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeElements.forEach(function (el) {
    fadeObserver.observe(el);
  });

  // --- Active Nav Link Highlighting ---
  function updateActiveLink() {
    var scrollPos = window.scrollY + 100;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // --- Contact Form Handler ---
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var submitBtn = contactForm.querySelector('button[type="submit"]');
    var originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate submission
    setTimeout(function () {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;

      // Show success message
      var existing = contactForm.querySelector('.form-success');
      if (existing) existing.remove();

      var msg = document.createElement('div');
      msg.className = 'form-success';
      msg.textContent = 'Message sent successfully! We\'ll get back to you soon.';
      contactForm.appendChild(msg);

      contactForm.reset();

      // Remove success message after delay
      setTimeout(function () {
        msg.remove();
      }, 5000);
    }, 800);
  });
})();
