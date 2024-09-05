document.addEventListener('DOMContentLoaded', () => {
    const jobList = document.getElementById('job-list');
    const searchInput = document.getElementById('search');
    const categorySelect = document.getElementById('category');

    function renderJobs(jobsToRender) {
        jobList.innerHTML = '';
        jobsToRender.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.classList.add('job-card');
            jobCard.innerHTML = `
                <h3>${job.title}</h3>
                <p class="company">${job.company}</p>
                <p>${job.location}</p>
                <p>${job.description}</p>
                <p>דרישות: ${job.requirements.join(', ')}</p>
            `;
            jobList.appendChild(jobCard);
        });
    }

    function filterJobs() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categorySelect.value;

        const filteredJobs = jobs.filter(job => {
            const matchesSearch = job.title.toLowerCase().includes(searchTerm) ||
                                  job.company.toLowerCase().includes(searchTerm) ||
                                  job.description.toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory === '' || job.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        renderJobs(filteredJobs);
    }

    searchInput.addEventListener('input', filterJobs);
    categorySelect.addEventListener('change', filterJobs);

    // טיפול בטופס יצירת קשר
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // כאן תוכל להוסיף לוגיקה לשליחת הטופס, למשל באמצעות API או שירות צד שלישי
        alert('תודה על פנייתך! נחזור אליך בהקדם.');
        contactForm.reset();
    });

    // רינדור ראשוני של המשרות
    renderJobs(jobs);
});