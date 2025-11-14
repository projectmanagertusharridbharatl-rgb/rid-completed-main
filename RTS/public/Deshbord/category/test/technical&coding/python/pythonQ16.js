const questions = [
  {
    "num": 1,
    "question_en": "Who developed the Python programming language?",
    "question_hi": "Python प्रोग्रामिंग भाषा का विकास किसने किया?",
    "options_en": ["Dennis Ritchie", "Guido van Rossum", "James Gosling", "Bjarne Stroustrup"],
    "options_hi": ["Dennis Ritchie", "Guido van Rossum", "James Gosling", "Bjarne Stroustrup"],
    "answer_en": "Guido van Rossum",
    "answer_hi": "Guido van Rossum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "In which year was Python first released?",
    "question_hi": "Python पहली बार किस वर्ष जारी किया गया था?",
    "options_en": ["1991", "1989", "2000", "1995"],
    "options_hi": ["1991", "1989", "2000", "1995"],
    "answer_en": "1991",
    "answer_hi": "1991",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Python is a _____ language.",
    "question_hi": "Python एक _____ भाषा है।",
    "options_en": ["Compiled", "Interpreted", "Markup", "Assembly"],
    "options_hi": ["कंपाइल्ड", "इंटरप्रेटेड", "मार्कअप", "असेंबली"],
    "answer_en": "Interpreted",
    "answer_hi": "इंटरप्रेटेड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which of the following is a valid Python variable name?",
    "question_hi": "निम्न में से कौन-सा Python वैरिएबल नाम वैध है?",
    "options_en": ["2name", "_name", "name@", "for"],
    "options_hi": ["2name", "_name", "name@", "for"],
    "answer_en": "_name",
    "answer_hi": "_name",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which symbol is used for comments in Python?",
    "question_hi": "Python में टिप्पणी (comment) के लिए कौन-सा चिन्ह प्रयोग होता है?",
    "options_en": ["//", "/*", "#", "<!-- -->"],
    "options_hi": ["//", "/*", "#", "<!-- -->"],
    "answer_en": "#",
    "answer_hi": "#",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which of these is not a Python keyword?",
    "question_hi": "इनमें से कौन-सा Python कीवर्ड नहीं है?",
    "options_en": ["pass", "eval", "assert", "nonlocal"],
    "options_hi": ["pass", "eval", "assert", "nonlocal"],
    "answer_en": "eval",
    "answer_hi": "eval",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the correct file extension for Python files?",
    "question_hi": "Python फाइलों के लिए सही एक्सटेंशन क्या है?",
    "options_en": [".py", ".python", ".p", ".pt"],
    "options_hi": [".py", ".python", ".p", ".pt"],
    "answer_en": ".py",
    "answer_hi": ".py",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which function displays output in Python?",
    "question_hi": "Python में आउटपुट दिखाने के लिए कौन-सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["print()", "echo()", "output()", "display()"],
    "options_hi": ["print()", "echo()", "output()", "display()"],
    "answer_en": "print()",
    "answer_hi": "print()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which function reads input from the user?",
    "question_hi": "यूज़र से इनपुट लेने के लिए कौन-सा फ़ंक्शन प्रयोग किया जाता है?",
    "options_en": ["input()", "scan()", "read()", "get()"],
    "options_hi": ["input()", "scan()", "read()", "get()"],
    "answer_en": "input()",
    "answer_hi": "input()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the output of type(5)?",
    "question_hi": "type(5) का आउटपुट क्या होगा?",
    "options_en": ["<class 'str'>", "<class 'int'>", "<class 'float'>", "<class 'bool'>"],
    "options_hi": ["<class 'str'>", "<class 'int'>", "<class 'float'>", "<class 'bool'>"],
    "answer_en": "<class 'int'>",
    "answer_hi": "<class 'int'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which data type is immutable in Python?",
    "question_hi": "Python में कौन-सा डेटा टाइप अपरिवर्तनीय (immutable) है?",
    "options_en": ["List", "Tuple", "Dictionary", "Set"],
    "options_hi": ["List", "Tuple", "Dictionary", "Set"],
    "answer_en": "Tuple",
    "answer_hi": "Tuple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which operator is used for exponentiation?",
    "question_hi": "घातांक (exponentiation) के लिए कौन-सा ऑपरेटर उपयोग किया जाता है?",
    "options_en": ["^", "**", "//", "%"],
    "options_hi": ["^", "**", "//", "%"],
    "answer_en": "**",
    "answer_hi": "**",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the result of 3 * 'Hi'?",
    "question_hi": "3 * 'Hi' का परिणाम क्या होगा?",
    "options_en": ["HiHiHi", "Error", "Hi3", "3Hi"],
    "options_hi": ["HiHiHi", "Error", "Hi3", "3Hi"],
    "answer_en": "HiHiHi",
    "answer_hi": "HiHiHi",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which function returns the length of a string?",
    "question_hi": "कौन-सा फ़ंक्शन किसी स्ट्रिंग की लंबाई लौटाता है?",
    "options_en": ["count()", "length()", "len()", "size()"],
    "options_hi": ["count()", "length()", "len()", "size()"],
    "answer_en": "len()",
    "answer_hi": "len()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the output of 10 // 3?",
    "question_hi": "10 // 3 का आउटपुट क्या होगा?",
    "options_en": ["3", "3.33", "4", "Error"],
    "options_hi": ["3", "3.33", "4", "Error"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which keyword is used to define a function?",
    "question_hi": "फ़ंक्शन को परिभाषित करने के लिए कौन-सा कीवर्ड प्रयोग किया जाता है?",
    "options_en": ["define", "func", "def", "lambda"],
    "options_hi": ["define", "func", "def", "lambda"],
    "answer_en": "def",
    "answer_hi": "def",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which function converts a string to an integer?",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग को integer में बदलता है?",
    "options_en": ["str()", "int()", "float()", "eval()"],
    "options_hi": ["str()", "int()", "float()", "eval()"],
    "answer_en": "int()",
    "answer_hi": "int()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword is used for conditional branching?",
    "question_hi": "शर्तीय branching के लिए कौन-सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["switch", "case", "if", "loop"],
    "options_hi": ["switch", "case", "if", "loop"],
    "answer_en": "if",
    "answer_hi": "if",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which function returns the smallest value?",
    "question_hi": "कौन-सा फ़ंक्शन सबसे छोटा मान लौटाता है?",
    "options_en": ["small()", "min()", "least()", "tiny()"],
    "options_hi": ["small()", "min()", "least()", "tiny()"],
    "answer_en": "min()",
    "answer_hi": "min()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which function returns the largest value?",
    "question_hi": "कौन-सा फ़ंक्शन सबसे बड़ा मान लौटाता है?",
    "options_en": ["max()", "large()", "greater()", "big()"],
    "options_hi": ["max()", "large()", "greater()", "big()"],
    "answer_en": "max()",
    "answer_hi": "max()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which keyword is used to start a loop in Python?",
    "question_hi": "Python में लूप शुरू करने के लिए कौन-सा कीवर्ड प्रयोग होता है?",
    "options_en": ["repeat", "for", "loop", "iterate"],
    "options_hi": ["repeat", "for", "loop", "iterate"],
    "answer_en": "for",
    "answer_hi": "for",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the output of len([1,2,3])?",
    "question_hi": "len([1,2,3]) का आउटपुट क्या होगा?",
    "options_en": ["2", "3", "4", "Error"],
    "options_hi": ["2", "3", "4", "Error"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which function returns the data type of an object?",
    "question_hi": "कौन-सा फ़ंक्शन किसी ऑब्जेक्ट का डेटा टाइप लौटाता है?",
    "options_en": ["typeof()", "type()", "datatype()", "classof()"],
    "options_hi": ["typeof()", "type()", "datatype()", "classof()"],
    "answer_en": "type()",
    "answer_hi": "type()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword is used to define a class?",
    "question_hi": "क्लास को परिभाषित करने के लिए कौन-सा कीवर्ड उपयोग होता है?",
    "options_en": ["object", "define", "class", "struct"],
    "options_hi": ["object", "define", "class", "struct"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which method adds an element to the end of a list?",
    "question_hi": "कौन-सी मेथड लिस्ट के अंत में एक तत्व जोड़ती है?",
    "options_en": ["add()", "append()", "insert()", "extend()"],
    "options_hi": ["add()", "append()", "insert()", "extend()"],
    "answer_en": "append()",
    "answer_hi": "append()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which method removes all items from a list?",
    "question_hi": "कौन-सी मेथड लिस्ट से सभी आइटम हटाती है?",
    "options_en": ["remove()", "pop()", "clear()", "delete()"],
    "options_hi": ["remove()", "pop()", "clear()", "delete()"],
    "answer_en": "clear()",
    "answer_hi": "clear()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which keyword is used to handle exceptions?",
    "question_hi": "एक्सेप्शन को हैंडल करने के लिए कौन-सा कीवर्ड प्रयोग किया जाता है?",
    "options_en": ["catch", "handle", "except", "error"],
    "options_hi": ["catch", "handle", "except", "error"],
    "answer_en": "except",
    "answer_hi": "except",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which function converts a number to a string?",
    "question_hi": "कौन-सा फ़ंक्शन किसी संख्या को स्ट्रिंग में बदलता है?",
    "options_en": ["int()", "str()", "float()", "repr()"],
    "options_hi": ["int()", "str()", "float()", "repr()"],
    "answer_en": "str()",
    "answer_hi": "str()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which function converts a string to lowercase?",
    "question_hi": "कौन-सी मेथड स्ट्रिंग को लोअरकेस में बदलती है?",
    "options_en": ["toLower()", "lower()", "down()", "small()"],
    "options_hi": ["toLower()", "lower()", "down()", "small()"],
    "answer_en": "lower()",
    "answer_hi": "lower()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which method returns the number of occurrences of a value in a list?",
    "question_hi": "कौन-सी मेथड किसी लिस्ट में किसी वैल्यू की आवृत्ति (occurrence) लौटाती है?",
    "options_en": ["find()", "count()", "index()", "match()"],
    "options_hi": ["find()", "count()", "index()", "match()"],
    "answer_en": "count()",
    "answer_hi": "count()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which keyword creates an infinite loop?",
    "question_hi": "कौन-सा कीवर्ड एक अनंत लूप बनाता है?",
    "options_en": ["while True", "for True", "loop()", "do forever"],
    "options_hi": ["while True", "for True", "loop()", "do forever"],
    "answer_en": "while True",
    "answer_hi": "while True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which operator is used for floor division?",
    "question_hi": "Floor division के लिए कौन-सा ऑपरेटर प्रयोग होता है?",
    "options_en": ["/", "//", "%", "**"],
    "options_hi": ["/", "//", "%", "**"],
    "answer_en": "//",
    "answer_hi": "//",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which function returns the absolute value of a number?",
    "question_hi": "कौन-सा फ़ंक्शन किसी संख्या का परिमाण (absolute value) लौटाता है?",
    "options_en": ["abs()", "fabs()", "mod()", "mag()"],
    "options_hi": ["abs()", "fabs()", "mod()", "mag()"],
    "answer_en": "abs()",
    "answer_hi": "abs()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which method removes the last item from a list?",
    "question_hi": "कौन-सी मेथड लिस्ट से अंतिम आइटम हटाती है?",
    "options_en": ["remove()", "pop()", "delete()", "clear()"],
    "options_hi": ["remove()", "pop()", "delete()", "clear()"],
    "answer_en": "pop()",
    "answer_hi": "pop()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which method sorts a list in ascending order?",
    "question_hi": "कौन-सी मेथड लिस्ट को आरोही क्रम में sort करती है?",
    "options_en": ["arrange()", "sort()", "order()", "ascending()"],
    "options_hi": ["arrange()", "sort()", "order()", "ascending()"],
    "answer_en": "sort()",
    "answer_hi": "sort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which function returns the power of a number?",
    "question_hi": "कौन-सा फ़ंक्शन किसी संख्या का घातांक (power) लौटाता है?",
    "options_en": ["exp()", "pow()", "power()", "math()"],
    "options_hi": ["exp()", "pow()", "power()", "math()"],
    "answer_en": "pow()",
    "answer_hi": "pow()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which function converts an iterable into a list?",
    "question_hi": "कौन-सा फ़ंक्शन किसी iterable को लिस्ट में बदलता है?",
    "options_en": ["tuple()", "list()", "set()", "array()"],
    "options_hi": ["tuple()", "list()", "set()", "array()"],
    "answer_en": "list()",
    "answer_hi": "list()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which keyword is used to import modules?",
    "question_hi": "मॉड्यूल को इम्पोर्ट करने के लिए कौन-सा कीवर्ड उपयोग होता है?",
    "options_en": ["load", "include", "import", "use"],
    "options_hi": ["load", "include", "import", "use"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which module in Python supports random number generation?",
    "question_hi": "Python में कौन-सा मॉड्यूल रैंडम नंबर जनरेशन को सपोर्ट करता है?",
    "options_en": ["math", "random", "numbers", "sys"],
    "options_hi": ["math", "random", "numbers", "sys"],
    "answer_en": "random",
    "answer_hi": "random",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which keyword is used to exit a loop prematurely?",
    "question_hi": "कौन-सा कीवर्ड लूप से समय से पहले बाहर निकलने के लिए उपयोग किया जाता है?",
    "options_en": ["exit", "stop", "break", "quit"],
    "options_hi": ["exit", "stop", "break", "quit"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which keyword skips the current iteration of a loop?",
    "question_hi": "कौन-सा कीवर्ड लूप की वर्तमान iteration को छोड़ देता है?",
    "options_en": ["skip", "continue", "pass", "break"],
    "options_hi": ["skip", "continue", "pass", "break"],
    "answer_en": "continue",
    "answer_hi": "continue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method returns the index of an element in a list?",
    "question_hi": "कौन-सी मेथड लिस्ट में किसी तत्व का इंडेक्स लौटाती है?",
    "options_en": ["find()", "index()", "locate()", "position()"],
    "options_hi": ["find()", "index()", "locate()", "position()"],
    "answer_en": "index()",
    "answer_hi": "index()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the output of bool(0)?",
    "question_hi": "bool(0) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "None", "Error"],
    "options_hi": ["True", "False", "None", "Error"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which function rounds a number to nearest integer?",
    "question_hi": "कौन-सा फ़ंक्शन किसी संख्या को निकटतम पूर्णांक तक राउंड करता है?",
    "options_en": ["ceil()", "floor()", "round()", "int()"],
    "options_hi": ["ceil()", "floor()", "round()", "int()"],
    "answer_en": "round()",
    "answer_hi": "round()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which statement is used to do nothing in Python?",
    "question_hi": "Python में कुछ भी न करने के लिए कौन-सा स्टेटमेंट उपयोग होता है?",
    "options_en": ["pass", "continue", "break", "return"],
    "options_hi": ["pass", "continue", "break", "return"],
    "answer_en": "pass",
    "answer_hi": "pass",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which data type is used to store key-value pairs?",
    "question_hi": "कौन-सा डेटा टाइप key-value जोड़े को स्टोर करने के लिए उपयोग किया जाता है?",
    "options_en": ["List", "Set", "Tuple", "Dictionary"],
    "options_hi": ["List", "Set", "Tuple", "Dictionary"],
    "answer_en": "Dictionary",
    "answer_hi": "Dictionary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which method removes a key from a dictionary?",
    "question_hi": "कौन-सी मेथड किसी dictionary से key हटाती है?",
    "options_en": ["remove()", "del()", "pop()", "clear()"],
    "options_hi": ["remove()", "del()", "pop()", "clear()"],
    "answer_en": "pop()",
    "answer_hi": "pop()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which function returns the list of keys in a dictionary?",
    "question_hi": "कौन-सा फ़ंक्शन dictionary में मौजूद सभी keys की सूची लौटाता है?",
    "options_en": ["getkeys()", "keys()", "items()", "values()"],
    "options_hi": ["getkeys()", "keys()", "items()", "values()"],
    "answer_en": "keys()",
    "answer_hi": "keys()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which method returns a list of dictionary items as tuples?",
    "question_hi": "कौन-सी मेथड dictionary के आइटम को ट्यूपल की सूची के रूप में लौटाती है?",
    "options_en": ["items()", "keys()", "values()", "pairs()"],
    "options_hi": ["items()", "keys()", "values()", "pairs()"],
    "answer_en": "items()",
    "answer_hi": "items()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which function creates a spl file info object?",
    "question_hi": "SPL फाइल इन्फो ऑब्जेक्ट बनाने के लिए किस फंक्शन का उपयोग किया जाता है?",
    "options_en": ["SplFileInfo", "FileInfo", "SplFile", "File"],
    "options_hi": ["SplFileInfo", "FileInfo", "SplFile", "File"],
    "answer_en": "SplFileInfo",
    "answer_hi": "SplFileInfo",
    "attempted": false,
    "selected": ""
  }
]




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