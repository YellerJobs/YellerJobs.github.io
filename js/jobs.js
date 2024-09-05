// jobs.js

//******** אם פרט לא יודע אז לכתוב null במקום וזה יוצג כ"לא ידוע"  ********
// אבל לא להשאיר ריק, כי זה גורם שכל המשרות לא יוצגו
const jobs = [
    {
        id: 1,
        title: "מפתח/ת פרונט-אנד ג'וניור",
        company: "TechCo",
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
        company: "DataSys",
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
        company: "WebWizards",
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
        company: "StartUpNow",
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
        company: "CloudTech",
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
        company: "AppMasters",
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
        company: "InnovateTech",
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
        company: "DesignPro",
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
        company: "TestMasters",
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
        company: "DataInnovators",
        location: "באר שבע",
        description: "חברת ביג דאטה מחפשת מפתח/ת Python לעבודה על מערכות עיבוד נתונים מתקדמות.",
        requirements: ["Python", "Pandas", "NumPy", "SQL", "Apache Spark"],
        category: "backend",
        type: "full-time",
        salary: 16000
    }
];

export default jobs;