 document.addEventListener('DOMContentLoaded', function() {
            const addWorkExperienceBtn = document.getElementById('addWorkExperience');
            const addEducationBtn = document.getElementById('addEducation');
            const addCertificationBtn = document.getElementById('addCertification');
            const addProjectBtn = document.getElementById('addProject');
            const generateResumeBtn = document.getElementById('generateResume');
            const downloadResumeBtn = document.getElementById('downloadResume');
            const downloadHTMLBtn = document.getElementById('downloadHTML');
            const downloadWordBtn = document.getElementById('downloadResume');



















                // Fetch the content of the CSS file directly (from the path `css/resume_builder.css`)
    fetch('css/resume_builder.css')
        .then(response => response.text())
        .then(cssContent => {



            downloadHTMLBtn.addEventListener('click', function() {
                const resumePreview = document.getElementById('resumePreview');
                const resumeHTML = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Resume</title>
                        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
                        <!-- Inline CSS for A4 page layout -->
                        <style>
                            /* A4 page size and layout */
                            @page {
                                size: A4;
                                margin: 20mm;
                            }

                            body {
                                font-family: Arial, sans-serif;
                                padding: 0;
                                margin: 0;
                            }

                            /* Ensure content fits in the A4 size */
                            .resume-preview {
                                width: 100%;
                                height: 100%;
                                box-sizing: border-box;
                            }

                            /* Add custom styles for A4 page view */
                            .resume-preview h1 {
                                font-size: 28px;
                            }

                            .resume-preview h2 {
                                font-size: 22px;
                            }

                            /* Embed the existing CSS */
                            ${cssContent}
                        </style>
                    </head>
                    <body>
                        <div class="resume-preview">
                            ${resumePreview.innerHTML}
                        </div>
                    </body>
                    </html>
                `;

                // Create a Blob with the HTML content
                const blob = new Blob([resumeHTML], { type: 'text/html' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'resume.html';
                link.click();
            });
        })
        .catch(error => {
            console.error('Error fetching CSS:', error);
            alert('There was an error including the CSS in your HTML download.');
        });












            function createRemoveButton(parentElement) {
                const removeBtn = document.createElement('span');
                removeBtn.innerHTML = '<i class="fas fa-times"></i>';
                removeBtn.classList.add('remove-item');
                removeBtn.addEventListener('click', function() {
                    parentElement.remove();
                    generateResume();
                });
                return removeBtn;
            }

            function addWorkExperience() {
                const container = document.getElementById('workExperienceContainer');
                const newItem = document.createElement('div');
                newItem.classList.add('work-experience-item');
                newItem.innerHTML = `
                    <div class="form-group">
                        <label>Company</label>
                        <input type="text" class="company" placeholder="Tech Company">
                    </div>
                    <div class="form-group">
                        <label>Job Title</label>
                        <input type="text" class="jobTitle" placeholder="Software Engineer">
                    </div>
                    <div class="form-group">
                        <label>Date Range</label>
                        <input type="text" class="dateRange" placeholder="Jan 2021 - Present">
                    </div>
                    <div class="form-group">
                        <label>Job Responsibilities</label>
                        <textarea class="jobDescription" placeholder="• Led development of key features&#10;• Improved performance by 50%&#10;• Managed team of 5 developers"></textarea>
                    </div>
                `;
                newItem.appendChild(createRemoveButton(newItem));
                container.appendChild(newItem);
                attachInputListeners();
            }

            function addEducation() {
                const container = document.getElementById('educationContainer');
                const newItem = document.createElement('div');
                newItem.classList.add('education-item');
                newItem.innerHTML = `
                    <div class="form-group">
                        <label>Degree</label>
                        <input type="text" class="degree" placeholder="Bachelor of Science in Computer Science">
                    </div>
                    <div class="form-group">
                        <label>Institution</label>
                        <input type="text" class="institution" placeholder="Stanford University">
                    </div>
                    <div class="form-group">
                        <label>Graduation Date</label>
                        <input type="text" class="graduationDate" placeholder="May 2020">
                    </div>
                    <div class="form-group">
                        <label>GPA (optional)</label>
                        <input type="text" class="gpa" placeholder="3.8/4.0">
                    </div>
                `;
                newItem.appendChild(createRemoveButton(newItem));
                container.appendChild(newItem);
                attachInputListeners();
            }

            function addCertification() {
                const container = document.getElementById('certificationsContainer');
                const newItem = document.createElement('div');
                newItem.classList.add('certification-item');
                newItem.innerHTML = `
                    <div class="form-group">
                        <label>Certification Name</label>
                        <input type="text" class="certificationName" placeholder="AWS Certified Solutions Architect">
                    </div>
                    <div class="form-group">
        <label>Issuing Organization</label>
                        <input type="text" class="issuingOrg" placeholder="Amazon Web Services">
                    </div>
                    <div class="form-group">
                        <label>Date Obtained</label>
                        <input type="text" class="certificationDate" placeholder="June 2022">
                    </div>
                    <div class="form-group">
                        <label>Credential ID (optional)</label>
                        <input type="text" class="credentialId" placeholder="ABC123XYZ">
                    </div>
                `;
                newItem.appendChild(createRemoveButton(newItem));
                container.appendChild(newItem);
                attachInputListeners();
            }

            function addProject() {
                const container = document.getElementById('projectsContainer');
                const newItem = document.createElement('div');
                newItem.classList.add('project-item');
                newItem.innerHTML = `
                    <div class="form-group">
                        <label>Project Name</label>
                        <input type="text" class="projectName" placeholder="Personal Portfolio Website">
                    </div>
                    <div class="form-group">
                        <label>Project Description</label>
                        <textarea class="projectDescription" placeholder="• Built a responsive portfolio website using React&#10;• Implemented CI/CD pipeline&#10;• Integrated with headless CMS"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Technologies Used</label>
                        <input type="text" class="projectTech" placeholder="React, Node.js, AWS">
                    </div>
                    <div class="form-group">
                        <label>Project Link</label>
                        <input type="text" class="projectLink" placeholder="https://github.com/username/project">
                    </div>
                `;
                newItem.appendChild(createRemoveButton(newItem));
                container.appendChild(newItem);
                attachInputListeners();
            }

            function attachInputListeners() {
                document.querySelectorAll('input, textarea').forEach(input => {
                    input.removeEventListener('input', generateResume);
                    input.addEventListener('input', generateResume);
                });
            }

            function generateResume() {
                const resumePreview = document.getElementById('resumePreview');
                resumePreview.innerHTML = '';

                // Personal Info Section
                const personalInfo = `
                    <div class="resume-header">
                        <h1>${document.getElementById('fullName').value || 'Your Name'}</h1>
                        <div class="contact-info">
                            ${document.getElementById('email').value ? `<span><i class="fas fa-envelope"></i> ${document.getElementById('email').value}</span>` : ''}
                            ${document.getElementById('phone').value ? `<span><i class="fas fa-phone"></i> ${document.getElementById('phone').value}</span>` : ''}
                            ${document.getElementById('location').value ? `<span><i class="fas fa-map-marker-alt"></i> ${document.getElementById('location').value}</span>` : ''}
                            ${document.getElementById('portfolio').value ? `<span><i class="fas fa-globe"></i> <a href="${document.getElementById('portfolio').value}" target="_blank">Portfolio</a></span>` : ''}
                            ${document.getElementById('linkedin').value ? `<span><i class="fab fa-linkedin"></i> <a href="${document.getElementById('linkedin').value}" target="_blank">LinkedIn</a></span>` : ''}
                            ${document.getElementById('github').value ? `<span><i class="fab fa-github"></i> <a href="${document.getElementById('github').value}" target="_blank">GitHub</a></span>` : ''}
                        </div>
                    </div>
                `;
                resumePreview.innerHTML += personalInfo;

                // Professional Summary
                const summary = document.getElementById('professionalSummary').value;
                if (summary) {
                    resumePreview.innerHTML += `
                        <section class="professional-summary">
                            <h2><i class="fas fa-star"></i> Professional Summary</h2>
                            <p>${summary}</p>
                        </section>
                    `;
                }

                // Work Experience
                const workExperiences = document.getElementsByClassName('work-experience-item');
                if (workExperiences.length > 0) {
                    let workHTML = '<section class="work-experience"><h2><i class="fas fa-briefcase"></i> Work Experience</h2>';
                    Array.from(workExperiences).forEach(function(exp) {
                        if (exp.querySelector('.company').value || exp.querySelector('.jobTitle').value) {
                            workHTML += `
                                <div class="job">
                                    <h3>${exp.querySelector('.jobTitle').value} at ${exp.querySelector('.company').value}</h3>
                                    <p><i class="far fa-calendar-alt"></i> ${exp.querySelector('.dateRange').value}</p>
                                    <div class="job-description">${exp.querySelector('.jobDescription').value.split('\n').map(line => `<p>${line}</p>`).join('')}</div>
                                </div>
                            `;
                        }
                    });
                    workHTML += '</section>';
                    resumePreview.innerHTML += workHTML;
                }

                // Education
                const educations = document.getElementsByClassName('education-item');
                if (educations.length > 0) {
                    let eduHTML = '<section class="education"><h2><i class="fas fa-graduation-cap"></i> Education</h2>';
                    Array.from(educations).forEach(function(edu) {
                        if (edu.querySelector('.degree').value || edu.querySelector('.institution').value) {
                            eduHTML += `
                                <div class="education-entry">
                                    <h3>${edu.querySelector('.degree').value}</h3>
                                    <p><i class="fas fa-university"></i> ${edu.querySelector('.institution').value}</p>
                                    <p><i class="far fa-calendar-alt"></i> ${edu.querySelector('.graduationDate').value}</p>
                                    ${edu.querySelector('.gpa').value ? `<p><i class="fas fa-star"></i> GPA: ${edu.querySelector('.gpa').value}</p>` : ''}
                                </div>
                            `;
                        }
                    });
                    eduHTML += '</section>';
                    resumePreview.innerHTML += eduHTML;
                }

                // Skills
                const skills = document.getElementById('skills').value;
                if (skills) {
                    const skillsArray = skills.split(',').map(skill => skill.trim());
                    let skillsHTML = `
                        <section class="skills">
                            <h2><i class="fas fa-code"></i> Technical Skills</h2>
                            <div class="skills-grid">
                                ${skillsArray.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                            </div>
                        </section>
                    `;
                    resumePreview.innerHTML += skillsHTML;
                }

                // Certifications
                const certifications = document.getElementsByClassName('certification-item');
                if (certifications.length > 0) {
                    let certHTML = '<section class="certifications"><h2><i class="fas fa-certificate"></i> Certifications</h2>';
                    Array.from(certifications).forEach(function(cert) {
                        if (cert.querySelector('.certificationName').value || cert.querySelector('.issuingOrg').value) {
                            certHTML += `
                                <div class="certification">
                                    <h3>${cert.querySelector('.certificationName').value}</h3>
                                    <p><i class="fas fa-building"></i> ${cert.querySelector('.issuingOrg').value}</p>
                                    <p><i class="far fa-calendar-alt"></i> ${cert.querySelector('.certificationDate').value}</p>
                                    ${cert.querySelector('.credentialId').value ? `<p><i class="fas fa-id-badge"></i> Credential ID: ${cert.querySelector('.credentialId').value}</p>` : ''}
                                </div>
                            `;
                        }
                    });
                    certHTML += '</section>';
                    resumePreview.innerHTML += certHTML;
                }

                // Projects
                const projects = document.getElementsByClassName('project-item');
                if (projects.length > 0) {
                    let projHTML = '<section class="projects"><h2><i class="fas fa-project-diagram"></i> Projects</h2>';
                    Array.from(projects).forEach(function(proj) {
                        if (proj.querySelector('.projectName').value || proj.querySelector('.projectDescription').value) {
                            projHTML += `
                                <div class="project">
                                    <h3>${proj.querySelector('.projectName').value}</h3>
                                    <div class="project-description">${proj.querySelector('.projectDescription').value.split('\n').map(line => `<p>${line}</p>`).join('')}</div>
                                    ${proj.querySelector('.projectTech').value ? `<p><i class="fas fa-tools"></i> Technologies: ${proj.querySelector('.projectTech').value}</p>` : ''}
                                    ${proj.querySelector('.projectLink').value ? `<p><i class="fas fa-link"></i> <a href="${proj.querySelector('.projectLink').value}" target="_blank">Project Link</a></p>` : ''}
                                </div>
                            `;
                        }
                    });
                    projHTML += '</section>';
                    resumePreview.innerHTML += projHTML;
                }
            }










 function downloadResume() {
   window.print();
}





            // Event Listeners
            addWorkExperienceBtn.addEventListener('click', addWorkExperience);
            addEducationBtn.addEventListener('click', addEducation);
            addCertificationBtn.addEventListener('click', addCertification);
            addProjectBtn.addEventListener('click', addProject);
            generateResumeBtn.addEventListener('click', generateResume);
            downloadResumeBtn.addEventListener('click', downloadResume);

            // Initial setup
            attachInputListeners();
            addWorkExperience();
            addEducation();
            addCertification();
            addProject();
        });