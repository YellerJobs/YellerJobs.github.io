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
                <p><i class="fas fa-map-marker-alt"></i> ${job.location}</p>
                <p>${job.description}</p>
                <p class="requirements"><strong>דרישות:</strong> ${job.requirements.join(', ')}</p>
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

    // רינדור ראשוני של כל המשרות
    renderJobs(jobs);
});