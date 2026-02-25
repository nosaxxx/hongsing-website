// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

// Close menu when clicking a link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav').classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Submission
function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    
    // Build message for LINE
    const message = `📝 詢問表單\n` +
        `姓名: ${data.get('name')}\n` +
        `電話: ${data.get('phone')}\n` +
        `Email: ${data.get('email')}\n` +
        `需求: ${data.get('message')}`;
    
    alert('感謝您的詢問！我們會盡快與您聯繫。\n\n您也可以直接加 LINE: SQ0968999809');
    form.reset();
}

// Announcement System
const announcements = [
    {
        text: "📢 連假公告：3/1 - 3/10 放假休息，請提前安排工程進度，祝大家假期愉快！",
        start: "2026-03-01",
        end: "2026-03-10"
    },
    {
        text: "🧧 春節連假公告：2026年農曆新年期間暫停施工，敬請提前安排",
        start: "2026-01-20",
        end: "2026-02-15"
    },
    {
        text: "📢 中秋節連假：10/6-10/10 暫停出貨，祝佳節愉快！",
        start: "2025-10-01",
        end: "2025-10-10"
    }
];

function checkAnnouncement() {
    const now = new Date();
    
    for (const announcement of announcements) {
        const start = new Date(announcement.start);
        const end = new Date(announcement.end);
        
        if (now >= start && now <= end) {
            const banner = document.getElementById('announcement-banner');
            const text = document.getElementById('announcement-text');
            text.textContent = announcement.text;
            banner.style.display = 'block';
            return;
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkAnnouncement();
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});
