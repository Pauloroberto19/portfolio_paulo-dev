/* ========================================
   PORTFÓLIO - JAVASCRIPT
   ======================================== */

(function () {
    'use strict';

    // Marca que o JS está ativo (as animações de "reveal" dependem disso)
    document.documentElement.classList.add('js');

    var root = document.documentElement;

    // ========== TEMA CLARO / ESCURO ==========
    var themeToggle = document.getElementById('themeToggle');

    function setTheme(theme) {
        root.setAttribute('data-theme', theme);
        try { localStorage.setItem('theme', theme); } catch (e) {}
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            setTheme(current === 'dark' ? 'light' : 'dark');
        });
    }

    // ========== MENU MOBILE ==========
    var hamburger = document.getElementById('hamburger');
    var navMenu = document.getElementById('navMenu');
    var navLinks = document.querySelectorAll('.nav-link');

    function closeMenu() {
        if (!hamburger || !navMenu) return;
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            var open = navMenu.classList.toggle('active');
            hamburger.classList.toggle('active', open);
            hamburger.setAttribute('aria-expanded', String(open));
        });
    }

    navLinks.forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    // ========== LINK ATIVO NO MENU ==========
    var sections = document.querySelectorAll('main section[id]');

    function highlightActiveLink() {
        var pos = window.scrollY + 120;
        sections.forEach(function (section) {
            if (pos >= section.offsetTop && pos < section.offsetTop + section.offsetHeight) {
                navLinks.forEach(function (l) { l.classList.remove('active'); });
                var active = document.querySelector('.nav-link[href="#' + section.id + '"]');
                if (active) active.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveLink, { passive: true });
    highlightActiveLink();

    // ========== FOTO (com alternativa caso não carregue) ==========
    var avatarImg = document.getElementById('avatarImg');
    var avatar = document.querySelector('.avatar');

    if (avatarImg && avatar) {
        avatarImg.addEventListener('error', function () {
            avatar.classList.add('no-photo');
        });
    }

    // ========== ANIMAÇÃO AO ROLAR ==========
    var revealItems = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealItems.forEach(function (el) { observer.observe(el); });
    } else {
        revealItems.forEach(function (el) { el.classList.add('visible'); });
    }

    // ========== FORMULÁRIO DE CONTATO ==========
    // Como o GitHub Pages é um site estático (sem servidor), o formulário
    // abre o app de e-mail do visitante com a mensagem já preenchida.
    var EMAIL = 'paulo.robertodearaujo2005@gmail.com';
    var form = document.getElementById('contactForm');
    var successMessage = document.getElementById('successMessage');

    function validEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    if (form) {
        var emailInput = document.getElementById('email');

        emailInput.addEventListener('blur', function () {
            emailInput.classList.toggle('invalid', !!emailInput.value && !validEmail(emailInput.value));
        });

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var name = document.getElementById('name').value.trim();
            var email = emailInput.value.trim();
            var message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Por favor, preencha todos os campos!');
                return;
            }
            if (!validEmail(email)) {
                emailInput.classList.add('invalid');
                alert('Digite um e-mail válido.');
                return;
            }

            var subject = 'Contato pelo portfólio - ' + name;
            var body = message + '\n\n— ' + name + ' (' + email + ')';

            window.location.href = 'mailto:' + EMAIL +
                '?subject=' + encodeURIComponent(subject) +
                '&body=' + encodeURIComponent(body);

            successMessage.classList.add('show');
            form.reset();
            setTimeout(function () { successMessage.classList.remove('show'); }, 4000);
        });
    }

    // ========== ANO NO RODAPÉ ==========
    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
})();
