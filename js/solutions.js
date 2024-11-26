const pythonSolutions = {
    easy: [
        {
            title: "סכום מערך",
            explanation: "פונקציה זו מחשבת את סכום כל האיברים במערך באמצעות לולאת for.",
            code: `
def array_sum(arr):
    total = 0
    for num in arr:
        total += num
    return total
            `
        },
        {
            title: "בדיקת פלינדרום",
            explanation: "פונקציה זו בודקת אם מחרוזת היא פלינדרום על ידי השוואת המחרוזת המקורית עם היפוכה.",
            code: `
def is_palindrome(s):
    return s == s[::-1]
            `
        },
        {
            title: "מציאת מינימום במערך",
            explanation: "פונקציה זו מוצאת את הערך המינימלי במערך באמצעות פונקציית min() המובנית.",
            code: `
def find_minimum(arr):
    return min(arr) if arr else None
            `
        },
        {
            title: "בדיקת מספר ראשוני",
            explanation: "פונקציה זו בודקת אם מספר הוא ראשוני על ידי בדיקת חלוקה עד לשורש הריבועי של המספר.",
            code: `
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
            `
        },
        {
            title: "מציאת האיבר הנפוץ ביותר",
            explanation: "פונקציה זו מוצאת את האיבר הנפוץ ביותר במערך באמצעות ספירת הופעות ומציאת המקסימום.",
            code: `
def most_frequent(arr):
    return max(set(arr), key=arr.count) if arr else None
            `
        }
    ],
    medium: [
        {
            title: "מציאת זוג מספרים עם סכום נתון",
            explanation: "פונקציה זו מוצאת שני מספרים במערך שסכומם שווה למספר נתון באמצעות מילון.",
            code: `
def find_pair_with_sum(arr, target):
    seen = {}
    for num in arr:
        complement = target - num
        if complement in seen:
            return [complement, num]
        seen[num] = True
    return None
            `
        },
        {
            title: "מיון מערך",
            explanation: "פונקציה זו ממיינת מערך בסדר עולה באמצעות אלגוריתם מיון בועות.",
            code: `
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr
            `
        },
        {
            title: "חישוב חזקה",
            explanation: "פונקציה זו מחשבת חזקה של מספר באמצעות לולאה.",
            code: `
def power(base, exponent):
    result = 1
    for _ in range(exponent):
        result *= base
    return result
            `
        },
        {
            title: "מציאת הערך השני הגבוה ביותר",
            explanation: "פונקציה זו מוצאת את הערך השני הגבוה ביותר במערך באמצעות מעבר אחד על המערך.",
            code: `
def second_highest(arr):
    if len(arr) < 2:
        return None
    max1, max2 = float('-inf'), float('-inf')
    for num in arr:
        if num > max1:
            max2, max1 = max1, num
        elif num > max2 and num != max1:
            max2 = num
    return max2 if max2 != float('-inf') else None
            `
        },
        {
            title: "מיון מחרוזות לפי אורך",
            explanation: "פונקציה זו ממיינת מחרוזות לפי אורכן באמצעות פונקציית sorted() עם מפתח מותאם אישית.",
            code: `
def sort_strings_by_length(strings):
    return sorted(strings, key=len)
            `
        }
    ],
    hard: [
        {
            title: "מציאת תת-מחרוזת משותפת ארוכה ביותר",
            explanation: "פונקציה זו מוצאת את התת-מחרוזת המשותפת הארוכה ביותר בין שתי מחרוזות באמצעות תכנות דינמי.",
            code: `
def longest_common_substring(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    max_length, end_index = 0, 0

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
                if dp[i][j] > max_length:
                    max_length = dp[i][j]
                    end_index = i

    return s1[end_index - max_length:end_index]
            `
        },
        {
            title: "אלגוריתם Knuth-Morris-Pratt",
            explanation: "פונקציה זו מיישמת את אלגוריתם KMP לחיפוש תת-מחרוזת.",
            code: `
def kmp_search(text, pattern):
    def compute_lps(pattern):
        lps = [0] * len(pattern)
        length = 0
        i = 1
        while i < len(pattern):
            if pattern[i] == pattern[length]:
                length += 1
                lps[i] = length
                i += 1
            else:
                if length != 0:
                    length = lps[length - 1]
                else:
                    lps[i] = 0
                    i += 1
        return lps

    lps = compute_lps(pattern)
    i = j = 0
    while i < len(text):
        if pattern[j] == text[i]:
            i += 1
            j += 1
        if j == len(pattern):
            return i - j
        elif i < len(text) and pattern[j] != text[i]:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1
    return -1
            `
        },
        {
            title: "מציאת מספר נעדר",
            explanation: "פונקציה זו מוצאת מספר נעדר במערך מ-1 עד N באמצעות נוסחת סכום הסדרה האריתמטית.",
            code: `
def find_missing_number(arr):
    n = len(arr) + 1
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(arr)
    missing = expected_sum - actual_sum
    return missing if missing != 0 else None
            `
        },
        {
            title: "מכפלת כל המספרים חוץ מהנוכחי",
            explanation: "פונקציה זו מחשבת את המכפלה של כל המספרים במערך חוץ מהאיבר הנוכחי באמצעות שתי מכפלות מצטברות.",
            code: `
def product_except_self(arr):
    n = len(arr)
    left_products = [1] * n
    right_products = [1] * n
    result = [1] * n

    for i in range(1, n):
        left_products[i] = left_products[i-1] * arr[i-1]

    for i in range(n-2, -1, -1):
        right_products[i] = right_products[i+1] * arr[i+1]

    for i in range(n):
        result[i] = left_products[i] * right_products[i]

    return result
            `
        },
        {
            title: "מציאת אנגרמה קצרה ביותר",
            explanation: "פונקציה זו מוצאת את האנגרמה הקצרה ביותר של תבנית בתוך מחרוזת באמצעות חלון גלישה.",
            code: `
from collections import Counter

def shortest_anagram(s, p):
    p_count = Counter(p)
    window_count = Counter()
    left = 0
    min_length = float('inf')
    min_substring = ""

    for right in range(len(s)):
        window_count[s[right]] += 1

        while all(window_count[c] >= p_count[c] for c in p_count):
            if right - left + 1 < min_length:
                min_length = right - left + 1
                min_substring = s[left:right+1]

            window_count[s[left]] -= 1
            if window_count[s[left]] == 0:
                del window_count[s[left]]
            left += 1

    return min_substring
            `
        }
    ]
};