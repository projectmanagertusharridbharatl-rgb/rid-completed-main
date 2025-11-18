const questions = [
  {
    "num": 1,
    "question_en": "What is the output of print(2 ** 3)?",
    "question_hi": "print(2 ** 3) का आउटपुट क्या होगा?",
    "options_en": ["6", "8", "9", "5"],
    "options_hi": ["6", "8", "9", "5"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which keyword is used to create a function in Python?",
    "question_hi": "Python में एक फ़ंक्शन बनाने के लिए कौन-सा कीवर्ड उपयोग होता है?",
    "options_en": ["function", "def", "define", "func"],
    "options_hi": ["function", "def", "define", "func"],
    "answer_en": "def",
    "answer_hi": "def",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does the 'len()' function return for a string 'hello'?",
    "question_hi": "स्ट्रिंग 'hello' के लिए 'len()' फ़ंक्शन क्या लौटाता है?",
    "options_en": ["4", "5", "6", "Error"],
    "options_hi": ["4", "5", "6", "त्रुटि"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which of the following is a mutable data type in Python?",
    "question_hi": "निम्नलिखित में से कौन सा Python में परिवर्तनशील डेटा टाइप है?",
    "options_en": ["tuple", "string", "list", "int"],
    "options_hi": ["टपल", "स्ट्रिंग", "लिस्ट", "इंट"],
    "answer_en": "list",
    "answer_hi": "लिस्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the output of print(type([]))?",
    "question_hi": "print(type([])) का आउटपुट क्या होगा?",
    "options_en": ["<class 'list'>", "<class 'tuple'>", "<class 'array'>", "<class 'dict'>"],
    "options_hi": ["<class 'list'>", "<class 'tuple'>", "<class 'array'>", "<class 'dict'>"],
    "answer_en": "<class 'list'>",
    "answer_hi": "<class 'list'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which method is used to add an element to a list?",
    "question_hi": "लिस्ट में एलिमेंट जोड़ने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["add()", "append()", "insert()", "push()"],
    "options_hi": ["add()", "append()", "insert()", "push()"],
    "answer_en": "append()",
    "answer_hi": "append()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What does PEP 8 refer to in Python?",
    "question_hi": "Python में PEP 8 किसे संदर्भित करता है?",
    "options_en": ["Python Enhancement Proposal for style guide", "Python Error Protocol", "Python Execution Process", "Python Extension Package"],
    "options_hi": ["स्टाइल गाइड के लिए Python एनहैंसमेंट प्रपोजल", "Python एरर प्रोटोकॉल", "Python एक्सीक्यूशन प्रोसेस", "Python एक्सटेंशन पैकेज"],
    "answer_en": "Python Enhancement Proposal for style guide",
    "answer_hi": "स्टाइल गाइड के लिए Python एनहैंसमेंट प्रपोजल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which operator is used for floor division in Python?",
    "question_hi": "Python में फ्लोर डिवीजन के लिए कौन सा ऑपरेटर उपयोग किया जाता है?",
    "options_en": ["/", "//", "%", "**"],
    "options_hi": ["/", "//", "%", "**"],
    "answer_en": "//",
    "answer_hi": "//",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the output of print('Python'[1:4])?",
    "question_hi": "print('Python'[1:4]) का आउटपुट क्या होगा?",
    "options_en": ["yth", "Pyt", "thon", "ytho"],
    "options_hi": ["yth", "Pyt", "thon", "ytho"],
    "answer_en": "yth",
    "answer_hi": "yth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which of the following is used to define a class in Python?",
    "question_hi": "Python में क्लास डिफाइन करने के लिए निम्नलिखित में से क्या उपयोग किया जाता है?",
    "options_en": ["class", "def", "struct", "object"],
    "options_hi": ["class", "def", "struct", "object"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the output of print(10 % 3)?",
    "question_hi": "print(10 % 3) का आउटपुट क्या होगा?",
    "options_en": ["1", "3", "0", "3.33"],
    "options_hi": ["1", "3", "0", "3.33"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which function is used to get user input in Python?",
    "question_hi": "Python में यूजर इनपुट प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["input()", "get()", "scan()", "read()"],
    "options_hi": ["input()", "get()", "scan()", "read()"],
    "answer_en": "input()",
    "answer_hi": "input()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What does the 'range(5)' function generate?",
    "question_hi": "'range(5)' फ़ंक्शन क्या जनरेट करता है?",
    "options_en": ["[0,1,2,3,4]", "[1,2,3,4,5]", "[0,1,2,3,4,5]", "[5]"],
    "options_hi": ["[0,1,2,3,4]", "[1,2,3,4,5]", "[0,1,2,3,4,5]", "[5]"],
    "answer_en": "[0,1,2,3,4]",
    "answer_hi": "[0,1,2,3,4]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which of the following is NOT a Python data type?",
    "question_hi": "निम्नलिखित में से कौन सा Python डेटा टाइप नहीं है?",
    "options_en": ["int", "float", "char", "str"],
    "options_hi": ["int", "float", "char", "str"],
    "answer_en": "char",
    "answer_hi": "char",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the output of print('Hello' + 'World')?",
    "question_hi": "print('Hello' + 'World') का आउटपुट क्या होगा?",
    "options_en": ["HelloWorld", "Hello World", "Hello+World", "Error"],
    "options_hi": ["HelloWorld", "Hello World", "Hello+World", "त्रुटि"],
    "answer_en": "HelloWorld",
    "answer_hi": "HelloWorld",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "How do you start a comment in Python?",
    "question_hi": "Python में कमेंट कैसे शुरू करते हैं?",
    "options_en": ["//", "#", "/*", "--"],
    "options_hi": ["//", "#", "/*", "--"],
    "answer_en": "#",
    "answer_hi": "#",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the output of print(bool(0))?",
    "question_hi": "print(bool(0)) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "0", "Error"],
    "options_hi": ["True", "False", "0", "त्रुटि"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which method is used to remove the last element from a list?",
    "question_hi": "लिस्ट से आखिरी एलिमेंट रिमूव करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["remove()", "pop()", "delete()", "clear()"],
    "options_hi": ["remove()", "pop()", "delete()", "clear()"],
    "answer_en": "pop()",
    "answer_hi": "pop()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the output of print(3 * 'a')?",
    "question_hi": "print(3 * 'a') का आउटपुट क्या होगा?",
    "options_en": ["aaa", "3a", "a3", "Error"],
    "options_hi": ["aaa", "3a", "a3", "त्रुटि"],
    "answer_en": "aaa",
    "answer_hi": "aaa",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which keyword is used for inheritance in Python?",
    "question_hi": "Python में इनहेरिटेंस के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["inherits", "extends", "super", "class"],
    "options_hi": ["inherits", "extends", "super", "class"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the output of print(2 == '2')?",
    "question_hi": "print(2 == '2') का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which module is used for mathematical operations?",
    "question_hi": "मैथमेटिकल ऑपरेशन्स के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["math", "calc", "numpy", "random"],
    "options_hi": ["math", "calc", "numpy", "random"],
    "answer_en": "math",
    "answer_hi": "math",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the output of print('Python'.upper())?",
    "question_hi": "print('Python'.upper()) का आउटपुट क्या होगा?",
    "options_en": ["PYTHON", "python", "Python", "PyThOn"],
    "options_hi": ["PYTHON", "python", "Python", "PyThOn"],
    "answer_en": "PYTHON",
    "answer_hi": "PYTHON",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which symbol is used for single line comments in Python?",
    "question_hi": "Python में सिंगल लाइन कमेंट्स के लिए कौन सा सिंबल उपयोग किया जाता है?",
    "options_en": ["//", "#", "/*", "--"],
    "options_hi": ["//", "#", "/*", "--"],
    "answer_en": "#",
    "answer_hi": "#",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the output of print(10 // 3)?",
    "question_hi": "print(10 // 3) का आउटपुट क्या होगा?",
    "options_en": ["3", "3.33", "3.0", "4"],
    "options_hi": ["3", "3.33", "3.0", "4"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which function converts a string to integer?",
    "question_hi": "कौन सा फ़ंक्शन स्ट्रिंग को इंटीजर में कन्वर्ट करता है?",
    "options_en": ["int()", "str()", "float()", "convert()"],
    "options_hi": ["int()", "str()", "float()", "convert()"],
    "answer_en": "int()",
    "answer_hi": "int()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the output of print(len([1,2,3]))?",
    "question_hi": "print(len([1,2,3])) का आउटपुट क्या होगा?",
    "options_en": ["3", "2", "1", "4"],
    "options_hi": ["3", "2", "1", "4"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which keyword is used to handle exceptions?",
    "question_hi": "एक्सेप्शन हैंडल करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["try", "catch", "exception", "error"],
    "options_hi": ["try", "catch", "exception", "error"],
    "answer_en": "try",
    "answer_hi": "try",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the output of print(not True)?",
    "question_hi": "print(not True) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "None", "Error"],
    "options_hi": ["False", "True", "None", "त्रुटि"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which method returns the number of items in a dictionary?",
    "question_hi": "कौन सी मेथड डिक्शनरी में आइटम्स की संख्या लौटाती है?",
    "options_en": ["count()", "size()", "len()", "items()"],
    "options_hi": ["count()", "size()", "len()", "items()"],
    "answer_en": "len()",
    "answer_hi": "len()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the output of print('Python'[0])?",
    "question_hi": "print('Python'[0]) का आउटपुट क्या होगा?",
    "options_en": ["P", "y", "p", "Error"],
    "options_hi": ["P", "y", "p", "त्रुटि"],
    "answer_en": "P",
    "answer_hi": "P",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which operator is used for exponentiation?",
    "question_hi": "एक्सपोनेंशिएशन के लिए कौन सा ऑपरेटर उपयोग किया जाता है?",
    "options_en": ["^", "**", "//", "*"],
    "options_hi": ["^", "**", "//", "*"],
    "answer_en": "**",
    "answer_hi": "**",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the output of print(type(3.14))?",
    "question_hi": "print(type(3.14)) का आउटपुट क्या होगा?",
    "options_en": ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'number'>"],
    "options_hi": ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'number'>"],
    "answer_en": "<class 'float'>",
    "answer_hi": "<class 'float'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which function is used to open a file?",
    "question_hi": "फाइल ओपन करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["open()", "file()", "read()", "load()"],
    "options_hi": ["open()", "file()", "read()", "load()"],
    "answer_en": "open()",
    "answer_hi": "open()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the output of print(True and False)?",
    "question_hi": "print(True and False) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "None", "Error"],
    "options_hi": ["True", "False", "None", "त्रुटि"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which method is used to get all keys from a dictionary?",
    "question_hi": "डिक्शनरी से सभी कीज़ प्राप्त करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["keys()", "get()", "items()", "all()"],
    "options_hi": ["keys()", "get()", "items()", "all()"],
    "answer_en": "keys()",
    "answer_hi": "keys()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the output of print(10 > 5)?",
    "question_hi": "print(10 > 5) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "10", "5"],
    "options_hi": ["True", "False", "10", "5"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which keyword is used to create a loop?",
    "question_hi": "लूप बनाने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["for", "loop", "while", "both for and while"],
    "options_hi": ["for", "loop", "while", "for और while दोनों"],
    "answer_en": "both for and while",
    "answer_hi": "for और while दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the output of print('hello'.capitalize())?",
    "question_hi": "print('hello'.capitalize()) का आउटपुट क्या होगा?",
    "options_en": ["Hello", "HELLO", "hello", "hELLO"],
    "options_hi": ["Hello", "HELLO", "hello", "hELLO"],
    "answer_en": "Hello",
    "answer_hi": "Hello",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which function is used to find the maximum value?",
    "question_hi": "मैक्सिमम वैल्यू ढूंढने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["max()", "maximum()", "largest()", "big()"],
    "options_hi": ["max()", "maximum()", "largest()", "big()"],
    "answer_en": "max()",
    "answer_hi": "max()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the output of print(2 + 3 * 4)?",
    "question_hi": "print(2 + 3 * 4) का आउटपुट क्या होगा?",
    "options_en": ["20", "14", "24", "Error"],
    "options_hi": ["20", "14", "24", "त्रुटि"],
    "answer_en": "14",
    "answer_hi": "14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method is used to remove whitespace from string?",
    "question_hi": "स्ट्रिंग से व्हाइटस्पेस रिमूव करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["trim()", "strip()", "remove()", "clean()"],
    "options_hi": ["trim()", "strip()", "remove()", "clean()"],
    "answer_en": "strip()",
    "answer_hi": "strip()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the output of print(bool(''))?",
    "question_hi": "print(bool('')) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "None", "Error"],
    "options_hi": ["True", "False", "None", "त्रुटि"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which module is used for random numbers?",
    "question_hi": "रैंडम नंबर्स के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["random", "math", "numpy", "statistics"],
    "options_hi": ["random", "math", "numpy", "statistics"],
    "answer_en": "random",
    "answer_hi": "random",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the output of print([1,2,3] + [4,5])?",
    "question_hi": "print([1,2,3] + [4,5]) का आउटपुट क्या होगा?",
    "options_en": ["[1,2,3,4,5]", "[1,2,3][4,5]", "Error", "[5,7,3]"],
    "options_hi": ["[1,2,3,4,5]", "[1,2,3][4,5]", "त्रुटि", "[5,7,3]"],
    "answer_en": "[1,2,3,4,5]",
    "answer_hi": "[1,2,3,4,5]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which keyword is used to return a value from function?",
    "question_hi": "फ़ंक्शन से वैल्यू रिटर्न करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["return", "break", "yield", "exit"],
    "options_hi": ["return", "break", "yield", "exit"],
    "answer_en": "return",
    "answer_hi": "return",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the output of print('Python'.find('th'))?",
    "question_hi": "print('Python'.find('th')) का आउटपुट क्या होगा?",
    "options_en": ["2", "3", "4", "-1"],
    "options_hi": ["2", "3", "4", "-1"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which method is used to sort a list?",
    "question_hi": "लिस्ट सॉर्ट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["sort()", "order()", "arrange()", "sorted()"],
    "options_hi": ["sort()", "order()", "arrange()", "sorted()"],
    "answer_en": "sort()",
    "answer_hi": "sort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the output of print(7 // 2)?",
    "question_hi": "print(7 // 2) का आउटपुट क्या होगा?",
    "options_en": ["3", "3.5", "4", "3.0"],
    "options_hi": ["3", "3.5", "4", "3.0"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which function is used to get the absolute value?",
    "question_hi": "एब्सोल्यूट वैल्यू प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["abs()", "absolute()", "mod()", "value()"],
    "options_hi": ["abs()", "absolute()", "mod()", "value()"],
    "answer_en": "abs()",
    "answer_hi": "abs()",
    "attempted": false,
    "selected": ""
  }
];


let currentQuestion = 0; 
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes
let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");
        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}



////////////////////////////////////////////////////////////////////////////////////////////

// submit 
function jumpToQuestion(index) {
            currentQuestion = index;
            loadQuestion(index);
        }

        function submitQuiz() {
            let confirmation = confirm("Are you sure you want to submit the test?");
            
            if (!confirmation) {
                return; // अगर यूज़र 'Cancel' करता है तो आगे नहीं बढ़ेंगे
            }

            let attempted = 0;
            let notAttempted = 0;
            let score = 0;
            const results = [];

            questions.forEach(q => {
                if (q.attempted) {
                    attempted++;
                    if (q.selected === q.answer) {
                        score++;
                    }
                } else {
                    notAttempted++;
                }
                results.push({ question: q.question, selected: q.selected || "Not Answered", correct: q.answer });
            });

            localStorage.setItem("attempted", attempted);
            localStorage.setItem("notAttempted", notAttempted);
            localStorage.setItem("score", score);
            localStorage.setItem("results", JSON.stringify(results));

            // रिजल्ट देखने से पहले एक और कन्फर्मेशन ले सकते हैं
            let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
            if (viewResult) {
                window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
            }
        }
        window.onload = () => {
            loadQuestion(currentQuestion);
        };


function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};


///////////////////////////////////////