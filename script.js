

const app = {
    init: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetPage = e.target.getAttribute('data-page');
                this.navigate(targetPage);
            });
        });

       
        const findBtn = document.getElementById('findBtn');
        if (findBtn) {
            findBtn.addEventListener('click', () => this.findLaptop());
        }

        // Handle Contact Form
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleForm(e));
        }
    },

    navigate: function(pageId) {
        //
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-page') === pageId);
        });

       
        document.querySelectorAll('.page').forEach(page => {
            page.classList.toggle('active', page.id === pageId);
        });


        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    findLaptop: function() {
        const budget = document.getElementById('budgetSelect').value;
        const display = document.getElementById('resultDisplay');
        
        let recommendation = "";
        
        switch(budget) {
            case 'budget':
                recommendation = "Top Pick: Lenovo IdeaPad 3 — Great for the fundamentals.";
                break;
            case 'mid':
                recommendation = "Top Pick: HP Envy x360 — The ultimate versatile playmaker.";
                break;
            case 'premium':
                recommendation = "Top Pick: MacBook Pro M3 — The Ballon d'Or of laptops.";
                break;
            default:
                recommendation = "Select a budget to see the scouting report.";
        }

        display.innerText = recommendation;
        display.style.opacity = 0;
        setTimeout(() => display.style.opacity = 1, 10);
    },

    handleForm: function(e) {
        e.preventDefault();
        const success = document.getElementById('successMsg');
        success.classList.remove('hidden');
        e.target.reset();
        
        
        setTimeout(() => {
            success.classList.add('hidden');
        }, 4000);
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());