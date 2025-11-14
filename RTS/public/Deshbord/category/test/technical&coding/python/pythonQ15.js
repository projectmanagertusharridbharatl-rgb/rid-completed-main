const questions = [
  {
    "num": 1,
    "question_en": "Which keyword is used to define a function in Python?",
    "question_hi": "Python में एक फ़ंक्शन को परिभाषित करने के लिए कौन-सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["func", "def", "function", "define"],
    "options_hi": ["func", "def", "function", "define"],
    "answer_en": "def",
    "answer_hi": "def",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which of the following is an immutable data type in Python?",
    "question_hi": "निम्नलिखित में से कौन-सा Python में अपरिवर्तनीय (immutable) डेटा टाइप है?",
    "options_en": ["List", "Dictionary", "Tuple", "Set"],
    "options_hi": ["List", "Dictionary", "Tuple", "Set"],
    "answer_en": "Tuple",
    "answer_hi": "Tuple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the output of type(3.5)?",
    "question_hi": "type(3.5) का आउटपुट क्या होगा?",
    "options_en": ["int", "float", "complex", "str"],
    "options_hi": ["int", "float", "complex", "str"],
    "answer_en": "float",
    "answer_hi": "float",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which function returns the length of a list?",
    "question_hi": "कौन-सा फ़ंक्शन किसी लिस्ट की लंबाई लौटाता है?",
    "options_en": ["count()", "size()", "length()", "len()"],
    "options_hi": ["count()", "size()", "length()", "len()"],
    "answer_en": "len()",
    "answer_hi": "len()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which symbol is used for comments in Python?",
    "question_hi": "Python में टिप्पणी (comment) लिखने के लिए कौन-सा चिन्ह उपयोग किया जाता है?",
    "options_en": ["//", "/* */", "#", "<!-- -->"],
    "options_hi": ["//", "/* */", "#", "<!-- -->"],
    "answer_en": "#",
    "answer_hi": "#",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which of the following creates a dictionary?",
    "question_hi": "निम्नलिखित में से कौन-सा एक dictionary बनाता है?",
    "options_en": ["{}", "[]", "()", "set()"],
    "options_hi": ["{}", "[]", "()", "set()"],
    "answer_en": "{}",
    "answer_hi": "{}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which operator is used for floor division in Python?",
    "question_hi": "Python में floor division के लिए कौन-सा ऑपरेटर उपयोग किया जाता है?",
    "options_en": ["/", "//", "%", "**"],
    "options_hi": ["/", "//", "%", "**"],
    "answer_en": "//",
    "answer_hi": "//",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What will be the output of bool(0)?",
    "question_hi": "bool(0) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "0", "None"],
    "options_hi": ["True", "False", "0", "None"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which keyword is used to start a loop in Python?",
    "question_hi": "Python में लूप शुरू करने के लिए कौन-सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["repeat", "for", "loop", "iterate"],
    "options_hi": ["repeat", "for", "loop", "iterate"],
    "answer_en": "for",
    "answer_hi": "for",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which method is used to add an element to a list?",
    "question_hi": "लिस्ट में एक तत्व जोड़ने के लिए कौन-सी मेथड का उपयोग किया जाता है?",
    "options_en": ["insert()", "append()", "extend()", "add()"],
    "options_hi": ["insert()", "append()", "extend()", "add()"],
    "answer_en": "append()",
    "answer_hi": "append()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
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
    "num": 12,
    "question_en": "Which function converts a string into an integer?",
    "question_hi": "कौन-सा फ़ंक्शन एक स्ट्रिंग को integer में बदलता है?",
    "options_en": ["int()", "float()", "str()", "eval()"],
    "options_hi": ["int()", "float()", "str()", "eval()"],
    "answer_en": "int()",
    "answer_hi": "int()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which module in Python supports regular expressions?",
    "question_hi": "Python में नियमित अभिव्यक्तियों (regular expressions) के लिए कौन-सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["regex", "re", "pyregex", "express"],
    "options_hi": ["regex", "re", "pyregex", "express"],
    "answer_en": "re",
    "answer_hi": "re",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which method removes whitespace from both ends of a string?",
    "question_hi": "कौन-सी मेथड स्ट्रिंग के दोनों सिरों से whitespace हटाती है?",
    "options_en": ["trim()", "strip()", "remove()", "split()"],
    "options_hi": ["trim()", "strip()", "remove()", "split()"],
    "answer_en": "strip()",
    "answer_hi": "strip()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What keyword is used to handle exceptions?",
    "question_hi": "अपवादों (exceptions) को संभालने के लिए कौन-सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["catch", "try", "handle", "error"],
    "options_hi": ["catch", "try", "handle", "error"],
    "answer_en": "try",
    "answer_hi": "try",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which built-in function returns the absolute value of a number?",
    "question_hi": "कौन-सा बिल्ट-इन फ़ंक्शन किसी संख्या का परिमाण (absolute value) लौटाता है?",
    "options_en": ["abs()", "mod()", "fabs()", "absolute()"],
    "options_hi": ["abs()", "mod()", "fabs()", "absolute()"],
    "answer_en": "abs()",
    "answer_hi": "abs()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which of these keywords is used to define a class in Python?",
    "question_hi": "Python में एक क्लास परिभाषित करने के लिए कौन-सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["object", "define", "class", "struct"],
    "options_hi": ["object", "define", "class", "struct"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which method is called automatically when an object is created?",
    "question_hi": "जब कोई ऑब्जेक्ट बनाया जाता है, तो कौन-सी मेथड अपने-आप कॉल होती है?",
    "options_en": ["__init__()", "__start__()", "__create__()", "__object__()"],
    "options_hi": ["__init__()", "__start__()", "__create__()", "__object__()"],
    "answer_en": "__init__()",
    "answer_hi": "__init__()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which function gives the current working directory?",
    "question_hi": "वर्तमान कार्य निर्देशिका प्राप्त करने के लिए कौन-सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["os.getcwd()", "os.path()", "os.dir()", "os.get()"],
    "options_hi": ["os.getcwd()", "os.path()", "os.dir()", "os.get()"],
    "answer_en": "os.getcwd()",
    "answer_hi": "os.getcwd()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What will print(10 % 3) return?",
    "question_hi": "print(10 % 3) क्या लौटाएगा?",
    "options_en": ["1", "2", "3", "0"],
    "options_hi": ["1", "2", "3", "0"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which function is used to take input from the user?",
    "question_hi": "यूज़र से इनपुट लेने के लिए कौन-सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["scan()", "input()", "read()", "get()"],
    "options_hi": ["scan()", "input()", "read()", "get()"],
    "answer_en": "input()",
    "answer_hi": "input()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What will be the output of print(type([]))?",
    "question_hi": "print(type([])) का आउटपुट क्या होगा?",
    "options_en": ["dict", "set", "list", "tuple"],
    "options_hi": ["dict", "set", "list", "tuple"],
    "answer_en": "list",
    "answer_hi": "list",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which keyword is used to import a module?",
    "question_hi": "किस कीवर्ड का उपयोग एक मॉड्यूल इम्पोर्ट करने के लिए किया जाता है?",
    "options_en": ["from", "get", "import", "include"],
    "options_hi": ["from", "get", "import", "include"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the default return value of a Python function if no return statement is given?",
    "question_hi": "यदि किसी Python फ़ंक्शन में return स्टेटमेंट नहीं है, तो उसका डिफ़ॉल्ट रिटर्न मान क्या होता है?",
    "options_en": ["0", "False", "None", "Empty string"],
    "options_hi": ["0", "False", "None", "Empty string"],
    "answer_en": "None",
    "answer_hi": "None",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which method is used to open a file in Python?",
    "question_hi": "Python में फ़ाइल खोलने के लिए कौन-सी मेथड उपयोग की जाती है?",
    "options_en": ["file()", "open()", "read()", "load()"],
    "options_hi": ["file()", "open()", "read()", "load()"],
    "answer_en": "open()",
    "answer_hi": "open()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which keyword is used to exit a loop prematurely?",
    "question_hi": "लूप को बीच में रोकने के लिए कौन-सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["exit", "break", "stop", "end"],
    "options_hi": ["exit", "break", "stop", "end"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which built-in data type is used to store true or false values?",
    "question_hi": "True या False मानों को संग्रहीत करने के लिए कौन-सा बिल्ट-इन डेटा टाइप उपयोग होता है?",
    "options_en": ["int", "str", "bool", "float"],
    "options_hi": ["int", "str", "bool", "float"],
    "answer_en": "bool",
    "answer_hi": "bool",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What will be the output of len('Python')?",
    "question_hi": "len('Python') का आउटपुट क्या होगा?",
    "options_en": ["5", "6", "7", "None"],
    "options_hi": ["5", "6", "7", "None"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which operator is used for exponentiation in Python?",
    "question_hi": "Python में घातांक (exponentiation) के लिए कौन-सा ऑपरेटर उपयोग होता है?",
    "options_en": ["^", "**", "exp()", "pow"],
    "options_hi": ["^", "**", "exp()", "pow"],
    "answer_en": "**",
    "answer_hi": "**",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which method returns all keys of a dictionary?",
    "question_hi": "कौन-सी मेथड किसी dictionary की सभी keys लौटाती है?",
    "options_en": ["values()", "keys()", "items()", "get()"],
    "options_hi": ["values()", "keys()", "items()", "get()"],
    "answer_en": "keys()",
    "answer_hi": "keys()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which function is used to get user input as an integer directly?",
    "question_hi": "यूज़र इनपुट को सीधे integer के रूप में लेने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["input()", "int(input())", "eval()", "read()"],
    "options_hi": ["input()", "int(input())", "eval()", "read()"],
    "answer_en": "int(input())",
    "answer_hi": "int(input())",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which keyword is used with exceptions to run code no matter what?",
    "question_hi": "अपवादों के साथ ऐसा कौन-सा कीवर्ड उपयोग किया जाता है जो हर हाल में कोड चलाता है?",
    "options_en": ["finally", "always", "end", "complete"],
    "options_hi": ["finally", "always", "end", "complete"],
    "answer_en": "finally",
    "answer_hi": "finally",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What will be the output of 3 * 'Hi'?",
    "question_hi": "3 * 'Hi' का आउटपुट क्या होगा?",
    "options_en": ["HiHiHi", "Error", "Hi3", "3Hi"],
    "options_hi": ["HiHiHi", "Error", "Hi3", "3Hi"],
    "answer_en": "HiHiHi",
    "answer_hi": "HiHiHi",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which module provides mathematical functions in Python?",
    "question_hi": "Python में गणितीय फ़ंक्शंस के लिए कौन-सा मॉड्यूल उपयोग होता है?",
    "options_en": ["math", "cmath", "numbers", "calc"],
    "options_hi": ["math", "cmath", "numbers", "calc"],
    "answer_en": "math",
    "answer_hi": "math",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which function returns the smallest item in an iterable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी iterable में सबसे छोटा आइटम लौटाता है?",
    "options_en": ["min()", "small()", "less()", "tiny()"],
    "options_hi": ["min()", "small()", "less()", "tiny()"],
    "answer_en": "min()",
    "answer_hi": "min()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which function converts a number into a string?",
    "question_hi": "कौन-सा फ़ंक्शन किसी संख्या को स्ट्रिंग में बदलता है?",
    "options_en": ["int()", "str()", "float()", "repr()"],
    "options_hi": ["int()", "str()", "float()", "repr()"],
    "answer_en": "str()",
    "answer_hi": "str()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the output of bool('False')?",
    "question_hi": "bool('False') का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "Error", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which statement is used to skip the rest of the current loop iteration?",
    "question_hi": "लूप की वर्तमान iteration के बाकी हिस्से को छोड़ने के लिए कौन-सा स्टेटमेंट उपयोग होता है?",
    "options_en": ["stop", "continue", "break", "pass"],
    "options_hi": ["stop", "continue", "break", "pass"],
    "answer_en": "continue",
    "answer_hi": "continue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which function returns a sorted version of a list?",
    "question_hi": "कौन-सा फ़ंक्शन किसी लिस्ट का क्रमबद्ध (sorted) संस्करण लौटाता है?",
    "options_en": ["order()", "sorted()", "arrange()", "sort()"],
    "options_hi": ["order()", "sorted()", "arrange()", "sort()"],
    "answer_en": "sorted()",
    "answer_hi": "sorted()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which function returns the memory location of an object?",
    "question_hi": "कौन-सा फ़ंक्शन किसी ऑब्जेक्ट का मेमोरी पता लौटाता है?",
    "options_en": ["memory()", "id()", "loc()", "addr()"],
    "options_hi": ["memory()", "id()", "loc()", "addr()"],
    "answer_en": "id()",
    "answer_hi": "id()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which function is used to get the maximum value from a list?",
    "question_hi": "कौन-सा फ़ंक्शन किसी लिस्ट में अधिकतम मान लौटाता है?",
    "options_en": ["max()", "high()", "top()", "greater()"],
    "options_hi": ["max()", "high()", "top()", "greater()"],
    "answer_en": "max()",
    "answer_hi": "max()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which operator is used to compare two values?",
    "question_hi": "दो मानों की तुलना करने के लिए कौन-सा ऑपरेटर उपयोग किया जाता है?",
    "options_en": ["=", "==", "equals", "==="],
    "options_hi": ["=", "==", "equals", "==="],
    "answer_en": "==",
    "answer_hi": "==",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which method adds multiple elements to a list?",
    "question_hi": "कौन-सी मेथड लिस्ट में कई तत्व जोड़ती है?",
    "options_en": ["append()", "extend()", "add()", "combine()"],
    "options_hi": ["append()", "extend()", "add()", "combine()"],
    "answer_en": "extend()",
    "answer_hi": "extend()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which function returns a range of numbers?",
    "question_hi": "कौन-सा फ़ंक्शन संख्याओं की एक श्रृंखला लौटाता है?",
    "options_en": ["series()", "range()", "list()", "seq()"],
    "options_hi": ["series()", "range()", "list()", "seq()"],
    "answer_en": "range()",
    "answer_hi": "range()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which function checks the data type of a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल के डेटा टाइप की जांच करता है?",
    "options_en": ["type()", "data()", "typeof()", "class()"],
    "options_hi": ["type()", "data()", "typeof()", "class()"],
    "answer_en": "type()",
    "answer_hi": "type()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which function is used to find the length of a string?",
    "question_hi": "कौन-सा फ़ंक्शन किसी स्ट्रिंग की लंबाई पता करने के लिए उपयोग होता है?",
    "options_en": ["count()", "len()", "size()", "length()"],
    "options_hi": ["count()", "len()", "size()", "length()"],
    "answer_en": "len()",
    "answer_hi": "len()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which function is used to round off a number to the nearest integer?",
    "question_hi": "कौन-सा फ़ंक्शन किसी संख्या को निकटतम पूर्णांक तक राउंड ऑफ करता है?",
    "options_en": ["ceil()", "floor()", "round()", "approx()"],
    "options_hi": ["ceil()", "floor()", "round()", "approx()"],
    "answer_en": "round()",
    "answer_hi": "round()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which keyword is used to define an anonymous function?",
    "question_hi": "एक anonymous function को परिभाषित करने के लिए कौन-सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["def", "lambda", "func", "anon"],
    "options_hi": ["def", "lambda", "func", "anon"],
    "answer_en": "lambda",
    "answer_hi": "lambda",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which function returns the Unicode code of a character?",
    "question_hi": "कौन-सा फ़ंक्शन किसी अक्षर का Unicode कोड लौटाता है?",
    "options_en": ["chr()", "ord()", "ascii()", "code()"],
    "options_hi": ["chr()", "ord()", "ascii()", "code()"],
    "answer_en": "ord()",
    "answer_hi": "ord()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which function creates a SPL file info object?",
    "question_hi": "SPL फाइल इन्फो ऑब्जेक्ट बनाने के लिए किस फंक्शन का उपयोग किया जाता है?",
    "options_en": ["SplFileInfo", "FileInfo", "SplFile", "File"],
    "options_hi": ["SplFileInfo", "FileInfo", "SplFile", "File"],
    "answer_en": "SplFileInfo",
    "answer_hi": "SplFileInfo",
    "attempted": false,
    "selected": ""
  }
]
;



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