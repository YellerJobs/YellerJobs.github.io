const API_KEY = '__API_KEY__'; 
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

document.getElementById('analyzeButton').addEventListener('click', analyzeResume);
document.getElementById('languageSelect').addEventListener('change', handleLanguageChange);

const translations = {
    en: {
        title: "Resume Analyzer",
        placeholder: "Paste your resume here...",
        button: "Analyze Resume",
        overallRating: "Overall Rating",
        keyStrengths: "Key Strengths",
        areasForImprovement: "Areas for Improvement",
        suitableRoles: "Suitable Roles",
        actionableSuggestions: "Actionable Suggestions"
    },
    he: {
        title: "מנתח קורות חיים",
        placeholder: "הדבק את קורות החיים שלך כאן...",
        button: "נתח קורות חיים",
        overallRating: "דירוג כללי",
        keyStrengths: "חוזקות מרכזיות",
        areasForImprovement: "תחומים לשיפור",
        suitableRoles: "תפקידים מתאימים",
        actionableSuggestions: "הצעות לפעולה"
    }
};

function handleLanguageChange() {
    const languageSelect = document.getElementById('languageSelect');
    const customLanguageInput = document.getElementById('customLanguage');
    const language = languageSelect.value;

    customLanguageInput.style.display = language === 'custom' ? 'block' : 'none';

    if (language === 'he') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
    }

    updateUILanguage(language);
}

function updateUILanguage(language) {
    const trans = translations[language] || translations.en;
    document.getElementById('pageTitle').textContent = trans.title;
    document.getElementById('resumeText').placeholder = trans.placeholder;
    document.getElementById('analyzeButton').textContent = trans.button;
}

async function analyzeResume() {
    const resumeText = document.getElementById('resumeText').value;
    const resultDiv = document.getElementById('result');
    const languageSelect = document.getElementById('languageSelect');
    const customLanguageInput = document.getElementById('customLanguage');

    let language = languageSelect.value;
    if (language === 'custom') {
        language = customLanguageInput.value || 'English';
    }

    if (!resumeText) {
        resultDiv.textContent = 'Please enter a resume to analyze.';
        return;
    }

    resultDiv.textContent = 'Analyzing...';

    const prompt = `
    Please provide a focused analysis of the following resume. Your analysis should include:

    1. Overall Rating: Provide a rating out of 10 and briefly explain the reasoning.

    2. Key Strengths: Identify and explain the top 3 strengths of the resume.

    3. Areas for Improvement: Highlight the top 3 areas where the resume could be enhanced.

    4. Suitable Roles: Based on the content, suggest 2-3 specific job roles this resume seems most suited for.

    5. Actionable Suggestions: Provide 3 specific, actionable suggestions for improving the resume. These should be detailed and explain why they would be beneficial.

    Resume:
    ${resumeText}

    Please provide your response in ${language}.
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
    }
}

function displayFormattedResult(text, language) {
    const resultDiv = document.getElementById('result');
    const trans = translations[language] || translations.en;

    // Split the text into sections based on main headers
    const sections = text.split(/(?=^\d+\.\s+[A-Z])/m);

    let formattedHTML = '';

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
            // If it's not a main header, just add it as content
            formattedHTML += formatContent(lines);
        }
    });

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

// Initialize language direction and UI on page load
handleLanguageChange();
console.log(API_KEY)
