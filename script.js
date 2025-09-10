// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu li a');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    // Get service name in Arabic
    const serviceNames = {
        'winch': 'ونش السيارات',
        'flatbed': 'سطحة السيارات',
        'repair': 'إصلاح طوارئ',
        'battery': 'بطارية السيارة',
        'unlock': 'فتح السيارات',
        'fuel': 'توصيل الوقود'
    };
    
    const serviceName = serviceNames[service] || 'خدمة عامة';
    
    // Create WhatsApp message
    const whatsappMessage = `مرحباً، أحتاج إلى ${serviceName}
    
الاسم: ${name}
رقم الهاتف: ${phone}
الخدمة المطلوبة: ${serviceName}
${message ? 'تفاصيل إضافية: ' + message : ''}

شكراً لكم`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Open WhatsApp
    window.open(`https://wa.me/971562661500?text=${encodedMessage}`, '_blank');
    
    // Show success message
    alert('تم إرسال طلبكم بنجاح! سيتم التواصل معكم قريباً.');
    
    // Reset form
    this.reset();
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .area-card, .feature, .stat');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Emergency contact buttons click tracking
document.querySelectorAll('.emergency-btn, .contact-btn, .floating-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Phone number formatting
document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    // UAE phone number formatting
    if (value.startsWith('971')) {
        value = value.slice(3);
    }
    if (value.startsWith('0')) {
        value = value.slice(1);
    }
    
    // Format as XXX XXX XXX
    if (value.length >= 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
    } else if (value.length >= 3) {
        value = value.replace(/(\d{3})(\d{3})/, '$1 $2');
    }
    
    e.target.value = value;
});

// Loading animation for page
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// SEO and Analytics tracking functions
function trackServiceClick(serviceName) {
    // Track service clicks for analytics
    console.log(`Service clicked: ${serviceName}`);
    
    // Here you can add Google Analytics or other tracking code
    if (typeof gtag !== 'undefined') {
        gtag('event', 'service_click', {
            'service_name': serviceName
        });
    }
}

function trackPhoneCall() {
    // Track phone calls for analytics
    console.log('Phone call initiated');
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'phone_call', {
            'phone_number': '0562661500'
        });
    }
}

function trackWhatsAppClick() {
    // Track WhatsApp clicks for analytics
    console.log('WhatsApp clicked');
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            'phone_number': '971562661500'
        });
    }
}

// Add event listeners for tracking
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', trackPhoneCall);
});

document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link => {
    link.addEventListener('click', trackWhatsAppClick);
});

document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        const serviceName = this.querySelector('h3').textContent;
        trackServiceClick(serviceName);
    });
});

// Auto-hide mobile menu on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop && currentScroll > 100) {
        // Scrolling down
        document.querySelector('.header').style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        document.querySelector('.header').style.transform = 'translateY(0)';
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Emergency bar auto-show/hide
window.addEventListener('scroll', function() {
    const emergencyBar = document.querySelector('.emergency-bar');
    
    if (window.scrollY > 200) {
        emergencyBar.classList.add('show');
    } else {
        emergencyBar.classList.remove('show');
    }
});
