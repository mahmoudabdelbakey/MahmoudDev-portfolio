/**
 * Mahmoud.Dev - Contact Form Engine
 * Reliable dispatch to mahmoudabdelbakey1@gmail.com
 * Handles direct Gmail compose, mailto fallback, local persistence, and instant feedback.
 */

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('ajaxContactForm');
    const formFeedback = document.getElementById('formFeedback');
    const submitBtn = document.getElementById('contactSubmitBtn');

    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('contactName');
        const emailInput = document.getElementById('contactEmail');
        const projectTypeInput = document.getElementById('contactProjectType');
        const descInput = document.getElementById('contactDescription');
        const budgetInput = document.getElementById('contactBudget');

        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        const projectType = projectTypeInput ? projectTypeInput.value : 'Custom Web App';
        const description = descInput ? descInput.value.trim() : '';
        const budget = budgetInput ? budgetInput.value.trim() : 'Flexible';

        if (!name || !email || !description) {
            showErrorFeedback('Please fill in your name, email, and project description.');
            return;
        }

        // Email destination
        const targetEmail = 'mahmoudabdelbakey1@gmail.com';
        const subject = `💼 [Mahmoud.Dev] Project Inquiry from ${name} (${projectType})`;
        const body = `Hello Mahmoud,\n\nI would like to discuss a project with you:\n\n• Name: ${name}\n• Email: ${email}\n• Project Type: ${projectType}\n• Budget: ${budget}\n\nProject Details:\n${description}\n\n---\nSent via Mahmoud.Dev Portfolio`;

        // Direct web & client URLs
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        const mailtoUrl = `mailto:${encodeURIComponent(targetEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Save locally so no data is ever lost
        try {
            const saved = JSON.parse(localStorage.getItem('mahmoud_inquiries') || '[]');
            saved.push({
                name,
                email,
                projectType,
                budget,
                description,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('mahmoud_inquiries', JSON.stringify(saved));
        } catch (storageErr) {
            console.warn('LocalStorage notice:', storageErr);
        }

        // Try opening Gmail composer directly in a new tab
        const opened = window.open(gmailUrl, '_blank');
        if (!opened) {
            // Popup blocker prevented new tab, fallback to mailto trigger
            window.location.href = mailtoUrl;
        }

        // Render interactive feedback card
        showSuccessCard({ name, email, targetEmail, gmailUrl, mailtoUrl, body });

        // Reset form
        contactForm.reset();
    });

    function showErrorFeedback(message) {
        if (!formFeedback) return;
        formFeedback.style.display = 'block';
        formFeedback.className = 'contact-feedback-box error';
        formFeedback.style.backgroundColor = '#FDF2F2';
        formFeedback.style.color = '#9B1C1C';
        formFeedback.style.border = '1px solid #F8B4B4';
        formFeedback.style.padding = '1rem';
        formFeedback.style.borderRadius = 'var(--radius-md)';
        formFeedback.style.marginBottom = '1.5rem';
        formFeedback.innerHTML = `<strong>⚠️ Attention:</strong> ${message}`;
    }

    function showSuccessCard({ name, targetEmail, gmailUrl, mailtoUrl, body }) {
        if (!formFeedback) return;
        formFeedback.style.display = 'block';
        formFeedback.className = 'contact-feedback-box success';
        formFeedback.style.backgroundColor = 'var(--teal-light)';
        formFeedback.style.color = 'var(--teal-hover)';
        formFeedback.style.border = '1px solid var(--teal-border)';
        formFeedback.style.padding = '1.25rem';
        formFeedback.style.borderRadius = 'var(--radius-md)';
        formFeedback.style.marginBottom = '1.5rem';
        formFeedback.innerHTML = `
            <div style="font-weight: 700; font-size: 1.05rem; margin-bottom: 0.35rem; display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 1.2rem;">✓</span> Ready to Dispatch to Mahmoud!
            </div>
            <p style="margin: 0 0 1rem 0; font-size: 0.92rem; line-height: 1.5; color: var(--text-secondary);">
                Thank you <strong>${escapeHtml(name)}</strong>! We opened your email client to send directly to <strong>${targetEmail}</strong>. If your browser blocked the window, please choose below:
            </p>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
                <a href="${gmailUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="text-decoration: none; padding: 0.5rem 1rem;">
                    🚀 Open in Gmail Web
                </a>
                <a href="${mailtoUrl}" class="btn btn-outline btn-sm" style="text-decoration: none; padding: 0.5rem 1rem; border: 1px solid var(--teal-primary); color: var(--teal-primary); border-radius: var(--radius-sm); font-weight: 500;">
                    ✉️ Open Default Mail App
                </a>
                <button type="button" id="copyDetailsBtn" class="btn btn-sm" style="background: transparent; border: 1px solid var(--text-subtle); color: var(--text-secondary); border-radius: var(--radius-sm); padding: 0.5rem 1rem; cursor: pointer;">
                    📋 Copy Text
                </button>
            </div>
            <div id="copyNotice" style="display: none; margin-top: 0.5rem; font-size: 0.85rem; color: var(--teal-primary); font-weight: 600;">
                ✓ Details copied to clipboard!
            </div>
        `;

        const copyBtn = document.getElementById('copyDetailsBtn');
        const copyNotice = document.getElementById('copyNotice');
        if (copyBtn && copyNotice) {
            copyBtn.addEventListener('click', () => {
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(body).then(() => {
                        copyNotice.style.display = 'block';
                        setTimeout(() => { copyNotice.style.display = 'none'; }, 3000);
                    });
                }
            });
        }
    }

    function escapeHtml(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
        );
    }
});
