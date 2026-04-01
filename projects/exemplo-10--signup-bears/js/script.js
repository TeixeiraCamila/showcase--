// Sign Up Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const signupBtn = document.querySelector('.signup-btn');
    const termsCheckbox = document.getElementById('terms');
    const socialButtons = document.querySelectorAll('.google-btn, .social-circle');
    const container = document.querySelector('.container');

    function showToast(message, type = 'default') {
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 10);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 400);
        }, 3000);
    }

    socialButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showToast('This feature is not implemented yet', 'error');
        });
    });

    signupBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (!termsCheckbox.checked) {
            showToast('Please agree to the terms of service', 'error');
            return;
        }

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (!name || !email || !password || !confirmPassword) {
            showToast('Please fill in all fields', 'error');
            return;
        }

        if (password !== confirmPassword) {
            showToast('Passwords do not match', 'error');
            return;
        }

        showToast('Account created successfully!', 'success');

        container.classList.add('swap-animation');

        setTimeout(() => {
            container.style.flexDirection = 'row-reverse';
            container.classList.remove('swap-animation');
            container.classList.add('swap-completed');
            
            const formContainer = document.querySelector('.form-container');
            formContainer.innerHTML = `
                <div style="text-align: center; padding: 40px 20px;">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#27AE60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <h1 class="welcome-text" style="margin-top: 24px;">Welcome aboard!</h1>
                    <p class="sub-text">Your account has been created successfully.</p>
                    <button class="google-btn" style="margin-top: 20px; width: 100%;" onclick="window.location.reload()">Back to Home</button>
                </div>
            `;
        }, 400);
    });
});
