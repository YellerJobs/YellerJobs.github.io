const API_KEY = 'AIzaSyDOvvNWd2umTdn5BC86hm96mJ6z2-RUYVE';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

const translations = {
    en: {
        title: "Resume Analyzer",
        placeholder: "Paste your resume here or drop a file...",
        button: "Analyze Resume",
        overallRating: "Overall Rating",
        keyStrengths: "Key Strengths",
        areasForImprovement: "Areas for Improvement",
        suitableRoles: "Suitable Roles",
        actionableSuggestions: "Actionable Suggestions",
        resumeUploaded: "Resume uploaded successfully",
        showResume: "Show Resume",
        hideResume: "Hide Resume",
        analyzingResume: "Analyzing your resume..."

    },
    he: {
        title: "מנתח קורות חיים",
        placeholder: "הדבק את קורות החיים שלך כאן או גרור קובץ...",
        button: "נתח קורות חיים",
        overallRating: "דירוג כללי",
        keyStrengths: "חוזקות מרכזיות",
        areasForImprovement: "תחומים לשיפור",
        suitableRoles: "תפקידים מתאימים",
        actionableSuggestions: "הצעות לפעולה",
        resumeUploaded: "קורות החיים הועלו בהצלחה",
        showResume: "הצג קורות חיים",
        hideResume: "הסתר קורות חיים",
        analyzingResume: "מנתח את קורות החיים שלך..."

    }
};

document.addEventListener('DOMContentLoaded', () => {
    const analyzeButton = document.getElementById('analyzeButton');
    const languageSelect = document.getElementById('languageSelect');
    const resumeTextArea = document.getElementById('resumeText');
    const resultDiv = document.getElementById('result');
    const dropZone = document.getElementById('dropZone');

    analyzeButton.addEventListener('click', analyzeResume);
    languageSelect.addEventListener('change', handleLanguageChange);

    // File drop functionality
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file) {
            handleFile(file);
        }
    });

    // File input functionality
    const fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            handleFile(file);
        }
    });

    handleLanguageChange(); // Initialize language
});

function handleLanguageChange() {
    const language = document.getElementById('languageSelect').value;
    document.body.setAttribute('dir', language === 'he' ? 'rtl' : 'ltr');
    updateUILanguage(language);
}

function updateUILanguage(language) {
    const trans = translations[language] || translations.en;
    document.getElementById('pageTitle').textContent = trans.title;
    document.getElementById('resumeText').placeholder = trans.placeholder;
    document.getElementById('analyzeButton').textContent = trans.button;
    document.getElementById('dropZoneText').textContent = trans.placeholder;

    // Update toggle button text if it exists
    const toggleButton = document.getElementById('toggleResumeButton');
    if (toggleButton) {
        toggleButton.textContent = resumeTextArea.style.display === 'none' ? trans.showResume : trans.hideResume;
    }
}

function handleFile(file) {
    const allowedTypes = ['text/plain', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf'];
    const maxSizeBytes = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
        alert('Only .txt, .docx, and .pdf files are allowed.');
        return;
    }

    if (file.size > maxSizeBytes) {
        alert('File size exceeds 5MB limit.');
        return;
    }

    const resumeText = document.getElementById('resumeText');
    resumeText.value = 'Processing file...';

    if (file.type === 'text/plain') {
        const reader = new FileReader();
        reader.onload = (event) => {
            resumeText.value = event.target.result;
            showResumeUploadedMessage();
        };
        reader.readAsText(file);
    } else if (file.type === 'application/pdf') {
        const reader = new FileReader();
        reader.onload = function(event) {
            const typedarray = new Uint8Array(this.result);

            pdfjsLib.getDocument(typedarray).promise.then(function(pdf) {
                let fullText = '';
                let countPromises = [];
                for (let i = 1; i <= pdf.numPages; i++) {
                    countPromises.push(pdf.getPage(i).then(function(page) {
                        return page.getTextContent().then(function(content) {
                            return content.items.map(item => item.str).join(' ');
                        });
                    }));
                }
                Promise.all(countPromises).then(function (texts) {
                    resumeText.value = texts.join('\n\n');
                    showResumeUploadedMessage();
                });
            });
        };
        reader.readAsArrayBuffer(file);
    } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        const reader = new FileReader();
        reader.onload = function(event) {
            mammoth.extractRawText({arrayBuffer: event.target.result})
                .then(function(result){
                    resumeText.value = result.value;
                    showResumeUploadedMessage();
                })
                .catch(function(error) {
                    console.error(error);
                    resumeText.value = 'Error processing DOCX file. Please try again or paste the content manually.';
                });
        };
        reader.readAsArrayBuffer(file);
    }
}

function showResumeUploadedMessage() {
    const resumeText = document.getElementById('resumeText');
    const dropZone = document.getElementById('dropZone');
    const language = document.getElementById('languageSelect').value;
    const trans = translations[language];

    // Hide the textarea
    resumeText.style.display = 'none';

    // Create and show the success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `<i class="fas fa-check-circle"></i> ${trans.resumeUploaded}`;
    dropZone.appendChild(successMessage);

    // Create toggle button
    const toggleButton = document.createElement('button');
    toggleButton.id = 'toggleResumeButton';
    toggleButton.textContent = trans.showResume;
    toggleButton.className = 'toggle-button';
    toggleButton.onclick = toggleResumeDisplay;
    dropZone.appendChild(toggleButton);
}

function toggleResumeDisplay() {
    const resumeText = document.getElementById('resumeText');
    const toggleButton = document.getElementById('toggleResumeButton');
    const language = document.getElementById('languageSelect').value;
    const trans = translations[language];

    if (resumeText.style.display === 'none') {
        resumeText.style.display = 'block';
        toggleButton.textContent = trans.hideResume;
    } else {
        resumeText.style.display = 'none';
        toggleButton.textContent = trans.showResume;
    }
}

async function analyzeResume() {
    const resumeText = document.getElementById('resumeText').value;
    const resultDiv = document.getElementById('result');
    const language = document.getElementById('languageSelect').value;
    const trans = translations[language];

    if (!resumeText) {
        resultDiv.textContent = 'Please enter a resume to analyze.';
        return;
    }

    // Show loading animation
    resultDiv.innerHTML = `
        <div class="loading-container">
            <div class="fancy-spinner">
                <div class="ring"></div>
                <div class="ring"></div>
                <div class="dot"></div>
            </div>
            <p class="loading-text">${trans.analyzingResume}</p>
        </div>
    `;
    document.getElementById('analyzeButton').disabled = true;

    const prompt = `
    Please provide a focused analysis of the following resume. Your analysis should include:

    1. Overall Rating: Provide a rating out of 10 and briefly explain the reasoning.
    2. Key Strengths: Identify and explain the top 3 strengths of the resume.
    3. Areas for Improvement: Highlight the top 3 areas where the resume could be enhanced.
    4. Suitable Roles: Based on the content, suggest 2-3 specific job roles this resume seems most suited for.
    5. Actionable Suggestions: Provide 3 specific, actionable suggestions for improving the resume. These should be detailed and explain why they would be beneficial.

    Resume:
    ${resumeText}

    Please provide your response in ${translations[language].title}.
    Regardless of the language of the resume, please analyze it and respond in the requested language.
    Format your response using appropriate headers for each section of the analysis.
    `;

    try {
        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();
        const generatedText = data.candidates[0].content.parts[0].text;
        displayFormattedResult(generatedText, language);
    } catch (error) {
        console.error('Error:', error);
        resultDiv.textContent = 'An error occurred while analyzing the resume.';
    } finally {
        document.getElementById('analyzeButton').disabled = false;
    }
}

function displayFormattedResult(text, language) {
    const resultDiv = document.getElementById('result');
    const trans = translations[language] || translations.en;

    const sections = text.split(/(?=^\d+\.\s+[A-Z])/m);

    let formattedHTML = '<div class="analysis-result">';

    sections.forEach(section => {
        const lines = section.trim().split('\n');
        const headerMatch = lines[0].match(/^(\d+)\.\s+(.+)/);

        if (headerMatch) {
            const [, number, title] = headerMatch;
            const cleanTitle = title.trim();
            const iconClass = getIconForSection(cleanTitle);
            const content = lines.slice(1);

            formattedHTML += `
                <div class="result-section">
                    <h2><i class="${iconClass} icon"></i>${trans[camelCase(cleanTitle)] || cleanTitle}</h2>
                    ${formatContent(content)}
                </div>
            `;
        } else {
            formattedHTML += formatContent(lines);
        }
    });

    formattedHTML += '</div>';

    resultDiv.innerHTML = formattedHTML || text;
}

function formatContent(lines) {
    let formattedContent = '';
    let inList = false;

    lines.forEach(line => {
        line = line.trim();
        if (line.match(/^[-•]\s/)) {
            if (!inList) {
                formattedContent += '<ul>';
                inList = true;
            }
            formattedContent += `<li>${formatBoldText(line.replace(/^[-•]\s/, ''))}</li>`;
        } else {
            if (inList) {
                formattedContent += '</ul>';
                inList = false;
            }
            if (line) {
                formattedContent += `<p>${formatBoldText(line)}</p>`;
            }
        }
    });

    if (inList) {
        formattedContent += '</ul>';
    }

    return formattedContent;
}

function formatBoldText(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<span class="bold">\$1</span>');
}

function getIconForSection(header) {
    const iconMap = {
        'Overall Rating': 'fas fa-star',
        'Key Strengths': 'fas fa-thumbs-up',
        'Areas for Improvement': 'fas fa-tools',
        'Suitable Roles': 'fas fa-briefcase',
        'Actionable Suggestions': 'fas fa-lightbulb'
    };

    return iconMap[header] || 'fas fa-info-circle';
}

function camelCase(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}
