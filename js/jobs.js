// jobs.js

//******** אם פרט לא יודע אז לכתוב null במקום וזה יוצג כ"לא ידוע"  ********
// אבל לא להשאיר ריק, כי זה גורם שכל המשרות לא יוצגו
const jobs = [
    {
        id: 1,
        title: "מפתח/ת פרונט-אנד ג'וניור",
        company: "נאסף מרחבי הרשת",
        location: "תל אביב",
        description: "אנחנו מחפשים מפתח/ת פרונט-אנד ג'וניור להצטרף לצוות שלנו. תעבדו על פרויקטים מרתקים ותלמדו מצוות מנוסה.",
        requirements: ["HTML", "CSS", "JavaScript", "React"],
        category: "frontend",
        type: "full-time",
        salary: 12000,
        applyUrl: "https://techco.com/careers/frontend-junior" // הוספנו שדה חדש


    },
    {
        id: 2,
        title: "מפתח/ת בק-אנד ג'וניור",
        company: "נאסף מרחבי הרשת",
        location: "חיפה",
        description: "דרוש/ה מפתח/ת בק-אנד ג'וניור לעבודה על מערכות מידע מתקדמות. הזדמנות מצוינת ללמוד ולהתפתח בתחום הבק-אנד.",
        requirements: ["Python", "Django", "SQL"],
        category: "backend",
        type: "full-time",
        salary: 13000
    },
    {
        id: 3,
        title: "מפתח/ת פול-סטאק ג'וניור",
        company: "נאסף מרחבי הרשת",
        location: "ירושלים",
        description: "מחפשים מפתח/ת פול-סטאק ג'וניור לעבודה על פרויקטים מגוונים. תוכלו לעבוד על כל שכבות האפליקציה ולהרחיב את הידע שלכם.",
        requirements: ["JavaScript", "Node.js", "React", "MongoDB"],
        category: "fullstack",
        type: "full-time",
        salary: 14000
    },
    {
        id: 4,
        title: "מפתח/ת פרונט-אנד מתמחה",
        company: "נאסף מרחבי הרשת",
        location: "תל אביב",
        description: "סטארט-אפ מבטיח מחפש מתמחה בפרונט-אנד לעבודה על מוצר חדשני. הזדמנות מעולה לצבור ניסיון ולהשתלב בתעשייה.",
        requirements: ["HTML", "CSS", "JavaScript", "Vue.js"],
        category: "frontend",
        type: "part-time",
        salary: 6000
    },
    {
        id: 5,
        title: "מהנדס/ת DevOps",
        company: "נאסף מרחבי הרשת",
        location: "הרצליה",
        description: "חברת ענן מובילה מחפשת מהנדס/ת DevOps לניהול ותחזוקת תשתיות ענן. נדרש ידע בכלי אוטומציה ותזמור.",
        requirements: ["Linux", "AWS", "Docker", "Kubernetes", "Jenkins"],
        category: "devops",
        type: "full-time",
        salary: 18000
    },
    {
        id: 6,
        title: "מפתח/ת מובייל",
        company: "נאסף מרחבי הרשת",
        location: "רמת גן",
        description: "דרוש/ה מפתח/ת מובייל לעבודה על אפליקציות iOS ו-Android. נדרש ניסיון בפיתוח אפליקציות native או היברידיות.",
        requirements: ["Swift", "Kotlin", "React Native", "Flutter"],
        category: "mobile",
        type: "contract",
        salary: 20000
    },
    {
        id: 7,
        title: "מנהל/ת מוצר טכנולוגי",
        company: "נאסף מרחבי הרשת",
        location: "תל אביב",
        description: "חברת הייטק מחפשת מנהל/ת מוצר טכנולוגי להוביל פיתוח של מוצרים חדשניים. נדרשת הבנה טכנית ויכולת ניהול.",
        requirements: ["ניהול מוצר", "אפיון", "אג'ייל", "ידע טכני בסיסי"],
        category: "product",
        type: "full-time",
        salary: 22000
    },
    {
        id: 8,
        title: "מעצב/ת UX/UI",
        company: "נאסף מרחבי הרשת",
        location: "תל אביב",
        description: "סטודיו עיצוב מוביל מחפש מעצב/ת UX/UI ליצירת חוויות משתמש מרהיבות ואינטואיטיביות.",
        requirements: ["Figma", "Adobe XD", "Sketch", "עיצוב אינטראקטיבי"],
        category: "design",
        type: "full-time",
        salary: 15000
    },
    {
        id: 9,
        title: "מהנדס/ת QA",
        company: "נאסף מרחבי הרשת",
        location: "חיפה",
        description: "דרוש/ה מהנדס/ת QA לביצוע בדיקות ידניות ואוטומטיות על מערכות מורכבות. נדרש ידע בכתיבת תסריטי בדיקה ואוטומציה.",
        requirements: ["Selenium", "TestNG", "JIRA", "SQL"],
        category: "qa",
        type: "full-time",
        salary: 14000
    },
    {
        id: 10,
        title: "מפתח/ת Python",
        company: "נאסף מרחבי הרשת",
        location: "באר שבע",
        description: "חברת ביג דאטה מחפשת מפתח/ת Python לעבודה על מערכות עיבוד נתונים מתקדמות.",
        requirements: ["Python", "Pandas", "NumPy", "SQL", "Apache Spark"],
        category: "backend",
        type: "full-time",
        salary: 16000
    },
{
    id: 11,
    title: "Junior Cobol Programmer",
    company: "Confidential",
    location: "Rishon LeZion, Center District, Israel",
    description: "פיתוח ותחזוקה של המערכת, פיתוח רגולציה (FATCA, CRS CB), כחלק מצוות בארגון פיננסי גדול.",
    requirements: ["תואר אקדמאי", "בוגר/ת קורס COBOL MF"],
    category: "Development",
    type: "Full-time",
    salary: null,
    applyUrl: null
},
{
    id: 12,
    title: "Entry Level Penetration Tester",
    company: "Clear Gate | Cyber Security & Research",
    location: "Israel (Remote)",
    description: "ביצוע בדיקות חדירה והערכות סיכון, כתיבת דוחות טכניים, פיתוח כלים והרחבת ידע בעולם אבטחת המידע.",
    requirements: ["ניסיון בפלטפורמות כגון Hack the Box, TryHackMe", "הבנה של OWASP", "אנגלית שוטפת", "הסמכות כמו OSCP, eWPT", "הבנה במערכות הפעלה Linux/Windows", "הבנה בסיסית בשפות תכנות כמו JavaScript, Python"],
    category: "Cybersecurity",
    type: "Full-time",
    salary: null,
    applyUrl: "https://www.clear-gate.com/careers/job-application-consultant/"
},
{
    id: 13,
    title: "Junior QA Tester",
    company: "WeDev Technologies",
    location: "Bat Yam, Tel Aviv District, Israel",
    description: "ביצוע בדיקות ידניות של פתרונות מבוססי רשת עבור ארגונים ומותגים גדולים. בדיקות יסודיות כדי להבטיח חווית משתמש מושלמת.",
    requirements: ["יכולת לכתוב תרחישי בדיקה יצירתיים", "יכולת עבודה עצמאית ובצוות", "תשומת לב לפרטים", "כישורי תקשורת טובים", "תעודות רלוונטיות באבטחת איכות"],
    category: "Quality Assurance",
    type: "Full-time",
    salary: null,
    applyUrl: "https://wedev.co.il/en"
},
{
    id: 14,
    title: "ג'וניור/ית לביקורת פנים במגזר הפיננסי – משרה התחלתית",
    company: "Deloitte",
    location: "Israel",
    description: "המשרה כוללת ייעוץ בתחום ניהול סיכונים עבור חברות מובילות במגזר הפיננסי, ביצוע פרויקטים של ביקורת פנים, סקרי סיכונים ותאימות, והכרות עם מתודולוגיות מתקדמות לניהול והערכת סיכונים.",
    requirements: ["תואר ראשון רלוונטי – חובה", "ניסיון ב-Excel / SQL – יתרון", "היכרות עם שוק ההון / מוסדות פיננסיים – יתרון", "שליטה גבוהה באנגלית – יתרון", "סקרנות ורצון ללמוד"],
    category: "Audit",
    type: "Full-time",
    salary: null,
    applyUrl: "https://jobs.deloitte.co.il/job/31-647/"
}






];

export default jobs;