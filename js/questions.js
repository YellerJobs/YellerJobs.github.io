const leetCodeQuestions = {
    easy: [
        {
            question: "כתוב פונקציה שמקבלת מערך של מספרים ומחזירה את סכומם.",
            tests: [
                { input: [1, 2, 3, 4, 5], expected: 15 },
                { input: [-1, 0, 1], expected: 0 },
                { input: [], expected: 0 }
            ]
        },
        {
            question: "כתוב פונקציה שבודקת האם מחרוזת היא פלינדרום.",
            tests: [
                { input: "רדאר", expected: true },
                { input: "hello", expected: false },
                { input: "א", expected: true }
            ]
        },
        {
            question: "כתוב פונקציה שמחזירה את הערך המינימלי במערך.",
            tests: [
                { input: [3, 5, 1, 9, 2], expected: 1 },
                { input: [-3, -5, -1, -9, -2], expected: -9 },
                { input: [], expected: null }
            ]
        },
        {
            question: "כתוב פונקציה שבודקת האם מספר הוא ראשוני.",
            tests: [
                { input: 7, expected: true },
                { input: 10, expected: false },
                { input: 1, expected: false }
            ]
        },
        {
            question: "כתוב פונקציה שמחזירה את האיבר הנפוץ ביותר במערך.",
            tests: [
                { input: [1, 2, 2, 3, 4], expected: 2 },
                { input: [7, 7, 7, 7], expected: 7 },
                { input: [], expected: null }
            ]
        }
    ],
    medium: [
        {
            question: "כתוב פונקציה שמוצאת את שני המספרים במערך שסכומם שווה למספר נתון.",
            tests: [
                { input: [[10, 5, 2, 3, 7, 5], 10], expected: [3, 7] },
                { input: [[1, 2, 3, 4, 5], 9], expected: [4, 5] },
                { input: [[1, 1, 1, 1], 5], expected: null }
            ]
        },
        {
            question: "כתוב פונקציה שממיינת מערך בסדר עולה ללא שימוש בפונקציית מיון מובנית.",
            tests: [
                { input: [5, 2, 8, 12, 1, 6], expected: [1, 2, 5, 6, 8, 12] },
                { input: [3, 3, 3, 3], expected: [3, 3, 3, 3] },
                { input: [], expected: [] }
            ]
        },
        {
            question: "כתוב פונקציה שמחשבת את חזקה של מספר ללא שימוש בפונקציה מובנית.",
            tests: [
                { input: [2, 3], expected: 8 },
                { input: [5, 0], expected: 1 },
                { input: [10, 2], expected: 100 }
            ]
        },
        {
            question: "כתוב פונקציה שמחזירה את הערך השני הגבוה ביותר במערך.",
            tests: [
                { input: [10, 5, 20, 7], expected: 10 },
                { input: [1, 1, 1, 1], expected: null },
                { input: [5], expected: null }
            ]
        },
        {
            question: "כתוב פונקציה שממיינת מחרוזות לפי אורך.",
            tests: [
                { input: ["apple", "banana", "kiwi", "pear"], expected: ["kiwi", "pear", "apple", "banana"] },
                { input: ["same", "size", "words"], expected: ["same", "size", "words"] },
                { input: [], expected: [] }
            ]
        }
    ],
    hard: [
        {
            question: "כתוב פונקציה שמוצאת את המחרוזת המשותפת הארוכה ביותר בין שתי מחרוזות.",
            tests: [
                { input: ["abcdefg", "abcde"], expected: "abcde" },
                { input: ["programming", "programmer"], expected: "program" },
                { input: ["abc", "def"], expected: "" }
            ]
        },
        {
            question: "כתוב פונקציה שמיישמת את אלגוריתם ה-Knuth-Morris-Pratt לחיפוש תת-מחרוזת.",
            tests: [
                { input: ["ABABDABACDABABCABAB", "ABABCABAB"], expected: 10 },
                { input: ["AAAAAAA", "AAA"], expected: 0 },
                { input: ["ABC", "D"], expected: -1 }
            ]
        },
        {
            question: "כתוב פונקציה שמחפשת מספר נעדר במערך מ-1 עד N.",
            tests: [
                { input: [3, 7, 1, 2, 8, 4, 5], expected: 6 },
                { input: [1, 2, 3, 4, 5], expected: null },
                { input: [2], expected: 1 }
            ]
        },
        {
            question: "כתוב פונקציה שמחשבת את המכפלה של כל המספרים במערך חוץ מהאיבר הנוכחי.",
            tests: [
                { input: [1, 2, 3, 4], expected: [24, 12, 8, 6] },
                { input: [0, 1, 2, 3], expected: [6, 0, 0, 0] },
                { input: [5, 5, 5, 5], expected: [125, 125, 125, 125] }
            ]
        },
        {
            question: "כתוב פונקציה שמוצאת את המחרוזת האנגרמה הקצרה ביותר שנמצאת בתוך מחרוזת אחרת.",
            tests: [
                { input: ["cbaebabacd", "abc"], expected: "cba" },
                { input: ["abab", "ab"], expected: "ab" },
                { input: ["abc", "def"], expected: "" }
            ]
        }
    ]
};
