/* DASHBOARD SPECIFIC STYLES */
:root {
    --primary: #667eea;
    --primary-dark: #5a67d8;
    --secondary: #764ba2;
    --success: #48bb78;
    --warning: #ed8936;
    --danger: #f56565;
    --dark: #2d3748;
    --light: #f7fafc;
    --gray: #a0aec0;
    --white: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--dark);
}

/* Navigation */
.navbar {
    background: var(--white);
    padding: 1rem 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.nav-brand {
    display: flex;
    align-items: center;
    gap: 10px;
}

.nav-brand h2 {
    color: var(--primary);
    margin: 0;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
    margin: 0;
}

.nav-menu a {
    text-decoration: none;
    color: var(--dark);
    font-weight: 500;
    padding: 10px 0;
    position: relative;
    transition: color 0.3s;
}

.nav-menu a:hover,
.nav-menu a.active {
    color: var(--primary);
}

.nav-menu a.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--primary);
}

.user-profile {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 25px;
    background: var(--light);
    transition: all 0.3s;
}

.user-profile:hover {
    background: var(--primary);
    color: white;
}

.user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
}

.login-btn {
    background: var(--primary);
    color: white;
    padding: 12px 24px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
}

.login-btn:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
}

.user-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    min-width: 200px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s;
}

.user-dropdown.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.user-dropdown a {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 20px;
    text-decoration: none;
    color: var(--dark);
    border-bottom: 1px solid #f1f5f9;
    transition: background 0.3s;
}

.user-dropdown a:hover {
    background: var(--light);
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: var(--dark);
    margin: 3px 0;
    transition: 0.3s;
}

/* Hero Dashboard */
.dashboard-hero {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    color: white;
    padding: 100px 0 80px;
    position: relative;
    overflow: hidden;
}

.dashboard-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.hero-text h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.username {
    background: linear-gradient(45deg, #fbbf24, #f59e0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-stats {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    font-size: 1.1rem;
}

.hero-image img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

/* Stats Grid */
.dashboard-stats {
    padding: 80px 0;
    background: var(--light);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.stat-card {
    background: white;
    padding: 2.5rem 2rem;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
}

.stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
}

.stat-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
}

.stat-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 2rem;
    color: white;
}

.stat-card h3 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Quick Actions */
.quick-actions {
    padding: 100px 0;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--dark);
}

.section-title i {
    color: var(--primary);
    margin-right: 1rem;
}

.action-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.action-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: inherit;
    padding: 3rem 2rem;
    border-radius: 20px;
    border: 2px solid #e2e8f0;
    transition: all 0.3s;
    text-align: center;
}

.action-card:hover {
    border-color: var(--primary);
    transform: translateY(-12px);
    box-shadow: 0 25px 50px rgba(102, 126, 234, 0.15);
}

.action-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: white;
    margin-bottom: 1.5rem;
}

.action-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--dark);
}

/* Recent Activity */
.recent-activity {
    padding: 100px 0;
    background: var(--light);
}

.activity-list {
    max-width: 800px;
    margin: 0 auto;
}

.activity-item {
    display: flex;
    gap: 1.5rem;
    padding: 2rem;
    background: white;
    border-radius: 16px;
    margin-bottom: 1rem;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    transition: all 0.3s;
}

.activity-item:hover {
    transform: translateX(10px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.12);
}

.activity-icon {
    font-size: 2rem;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
}

.activity-content h4 {
    margin-bottom: 0.5rem;
    color: var(--dark);
}

.time {
    color: var(--gray);
    font-size: 0.9rem;
}

.see-more {
    text-align: center;
    margin-top: 3rem;
}

/* Recommended Books */
.recommended-books {
    padding: 100px 0;
}

.books-slider {
    display: flex;
    gap: 2rem;
    overflow-x: auto;
    padding: 2rem 0;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
}

.books-slider::-webkit-scrollbar {
    display: none;
}

.book-card {
    min-width: 220px;
    background: white;
    border-radius: 16px;
    padding: 1.5rem;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: all 0.3s;
    scroll-snap-align: start;
}

.book-card:hover {
    transform: translateY(-10px);
}

.book-card img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 1rem;
}

.book-rating {
    color: #fbbf24;
    font-weight: 600;
    margin: 1rem 0;
}

.btn-small {
    background: var(--primary);
    color: white;
    padding: 10px 20px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 500;
    display: inline-block;
    transition: all 0.3s;
}

.btn-small:hover {
    background: var(--primary-dark);
}

/* Footer */
.footer {
    background: var(--dark);
    color: white;
    padding: 80px 0 40px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: 3rem;
}

.footer-section h3,
.footer-section h4 {
    margin-bottom: 1.5rem;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.8rem;
}

.footer-section a {
    color: var(--gray);
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: white;
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
}

.social-links a {
    width: 45px;
    height: 45px;
    background: var(--primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: all 0.3s;
}

.social-links a:hover {
    background: var(--secondary);
    transform: translateY(-3px);
}

.footer-bottom {
    border-top: 1px solid var(--gray);
    padding-top: 2rem;
    text-align: center;
    color: var(--gray);
}

/* WhatsApp Button */
.whatsapp-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #25D366;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
    cursor: pointer;
    transition: all 0.3s;
    z-index: 1000;
    font-size: 1.5rem;
}

.whatsapp-btn:hover {
    transform: scale(1.1);
}

/* Responsive */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    
    .nav-menu {
        display: none;
    }
    
    .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .hero-text h1 {
        font-size: 2rem;
    }
    
    .stats-grid {
        grid-template-columns: 1fr;
    }
    
    .action-grid {
        grid-template-columns: 1fr;
    }
    
    .activity-item {
        flex-direction: column;
        text-align: center;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 15px;
    }
    
    .dashboard-hero {
        padding: 60px 0 60px;
    }
}
