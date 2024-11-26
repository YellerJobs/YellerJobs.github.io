import jobs from './jobs.js';

// גלובליים משתנים
const jobList = document.getElementById('job-list');
const searchInput = document.getElementById('search');
const categorySelect = document.getElementById('category');
const jobTypeSelect = document.getElementById('job-type');
const minSalaryInput = document.getElementById('min-salary');
const maxSalaryInput = document.getElementById('max-salary');
const backToTopButton = document.getElementById("back-to-top");


// פונקציות

function init() {
    renderJobs(jobs);
    setupEventListeners();
    populateJobSuggestions();
}

function setupEventListeners() {
    searchInput.addEventListener('input', filterJobs);
    categorySelect.addEventListener('change', filterJobs);
    jobTypeSelect.addEventListener('change', filterJobs);
    minSalaryInput.addEventListener('input', filterJobs);
    maxSalaryInput.addEventListener('input', filterJobs);
    window.addEventListener('scroll', scrollFunction);
    backToTopButton.addEventListener('click', scrollToTop);
}

function filterJobs() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;
    const selectedJobType = jobTypeSelect.value;
    const minSalary = parseInt(minSalaryInput.value) || 0;
    const maxSalary = parseInt(maxSalaryInput.value) || Infinity;

    const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm) ||
                              job.company.toLowerCase().includes(searchTerm) ||
                              job.description.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === '' || job.category === selectedCategory;
        const matchesJobType = selectedJobType === '' || job.type === selectedJobType;
        const matchesSalary = job.salary >= minSalary && job.salary <= maxSalary;
        return matchesSearch && matchesCategory && matchesJobType && matchesSalary;
    });

    renderJobs(filteredJobs);
}

function renderJobs(jobsToRender) {
    jobList.innerHTML = '';

    // הפוך את המערך כך שהמשרה האחרונה תופיע ראשונה
    jobsToRender.slice().reverse().forEach((job) => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');

        const safeRender = (value, defaultValue = 'לא ידוע') => value != null ? value : defaultValue;

        jobCard.innerHTML = `
            <h3>${safeRender(job.title)}</h3>
            <p class="company"><i class="fas fa-building"></i> ${safeRender(job.company)}</p>
            <p class="location"><i class="fas fa-map-marker-alt"></i> ${safeRender(job.location)}</p>
            <p class="job-type"><i class="fas fa-briefcase"></i> ${safeRender(getJobTypeHebrew(job.type))}</p>
            <p class="salary"><i class="fas fa-shekel-sign"></i> ${safeRender(job.salary, 'לא ידוע')}</p>
            <p class="job-summary">${safeRender(job.description ? job.description.substring(0, 100) + '...' : null)}</p>
            <div class="job-card-actions">
                <button class="expand-job" data-id="${job.id}">
                    <i class="fas fa-expand"></i> הצג עוד
                </button>
                <a href="${safeRender(job.applyUrl, '#')}" class="apply-job" target="_blank" rel="noopener noreferrer">
    <i class="fas fa-paper-plane"></i>&nbsp;הגש מועמדות
</a>

            </div>
        `;

        jobList.appendChild(jobCard);
    });

    // הוספת מאזין אירועים לכל הכפתורים "הצג עוד"
    const expandButtons = document.querySelectorAll('.expand-job');
    expandButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const jobId = event.target.getAttribute('data-id');
            const job = jobsToRender.find(j => j.id === parseInt(jobId)); // מוצא את המשרה לפי ה-id שלה
            showJobDetails(job);
        });
    });
}


function showJobDetails(job) {
    const modal = document.getElementById('jobModal');
    const modalContent = document.getElementById('modalJobDetails');
    const safeRender = (value, defaultValue = 'לא ידוע') => value != null ? value : defaultValue;

    modalContent.innerHTML = `
        <h2>${safeRender(job.title)}</h2>
        <div class="job-detail"><i class="fas fa-building"></i> <strong>חברה:&nbsp;</strong>${safeRender(job.company)}</div>
        <div class="job-detail"><i class="fas fa-map-marker-alt"></i> <strong>מיקום:&nbsp;</strong>${safeRender(job.location)}</div>
        <div class="job-detail"><i class="fas fa-briefcase"></i> <strong>סוג משרה:&nbsp;</strong>${safeRender(getJobTypeHebrew(job.type))}</div>
        <div class="job-detail"><i class="fas fa-shekel-sign"></i> <strong>שכר:&nbsp;</strong>${safeRender(job.salary, 'לא ידוע')}</div>
        <div class="job-detail"><i class="fas fa-tags"></i> <strong>קטגוריה:&nbsp;</strong>${safeRender(getCategoryHebrew(job.category))}</div>

        <div class="description">
            <h3><i class="fas fa-info-circle"></i> תיאור משרה</h3>
            <p>${safeRender(job.description)}</p>
        </div>

        <div class="requirements">
            <h3><i class="fas fa-list"></i> דרישות</h3>
            <ul>
                ${job.requirements ? job.requirements.map(req => `<li>${req}</li>`).join('') : '<li>אין דרישות מיוחדות</li>'}
            </ul>
        </div>

        <a href="${safeRender(job.applyUrl, '#')}" class="apply-job" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-paper-plane"></i> הגש מועמדות
        </a>
    `;

    modal.style.display = "block";
}

// הוספת קוד לסגירת המודאל
const modal = document.getElementById('jobModal');
const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function getJobTypeHebrew(type) {
    if (type == null) return 'לא ידוע';
    const types = {
        'full-time': 'משרה מלאה',
        'part-time': 'משרה חלקית',
        'contract': 'חוזה'
    };
    return types[type] || type;
}

function getCategoryHebrew(category) {
    if (category == null) return 'לא ידוע';
    const categories = {
        'frontend': 'פרונט-אנד',
        'backend': 'בק-אנד',
        'fullstack': 'פול-סטאק',
        'devops': 'DevOps',
        'mobile': 'פיתוח מובייל',
        'product': 'ניהול מוצר',
        'design': 'עיצוב',
        'qa': 'בדיקות תוכנה'
    };
    return categories[category] || category;
}

function saveJob(jobId) {
    let savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
    if (!savedJobs.includes(jobId)) {
        savedJobs.push(jobId);
        localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
        alert('המשרה נשמרה בהצלחה!');
    } else {
        alert('משרה זו כבר שמורה');
    }
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function populateJobSuggestions() {
    const jobSuggestions = document.getElementById('job-suggestions');
    const allJobTitles = [...new Set(jobs.map(job => job.title))];

    allJobTitles.forEach(title => {
        const option = document.createElement('option');
        option.value = title;
        jobSuggestions.appendChild(option);
    });
}

// אתחול האפליקציה
init();