const questions =[
  {
    "num": 1,
    "question_en": "What is the output of print(8 // 3 * 2)?",
    "question_hi": "print(8 // 3 * 2) का आउटपुट क्या होगा?",
    "options_en": ["4", "5", "6", "2"],
    "options_hi": ["4", "5", "6", "2"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which method is used to check if string contains only ASCII characters?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग में केवल ASCII करैक्टर हैं, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["isascii()", "ascii()", "check_ascii()", "validate_ascii()"],
    "options_hi": ["isascii()", "ascii()", "check_ascii()", "validate_ascii()"],
    "answer_en": "isascii()",
    "answer_hi": "isascii()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the output of print('Python'.istitle())?",
    "question_hi": "print('Python'.istitle()) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which keyword is used to create a generator?",
    "question_hi": "जनरेटर बनाने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["yield", "generator", "generate", "yield from"],
    "options_hi": ["yield", "generator", "generate", "yield from"],
    "answer_en": "yield",
    "answer_hi": "yield",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the output of print('Python'[-2:])?",
    "question_hi": "print('Python'[-2:]) का आउटपुट क्या होगा?",
    "options_en": ["on", "no", "Python", "th"],
    "options_hi": ["on", "no", "Python", "th"],
    "answer_en": "on",
    "answer_hi": "on",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which function is used to create a slice object?",
    "question_hi": "स्लाइस ऑब्जेक्ट बनाने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["slice()", "slicer()", "cut()", "part()"],
    "options_hi": ["slice()", "slicer()", "cut()", "part()"],
    "answer_en": "slice()",
    "answer_hi": "slice()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the output of print(3 > 2 > 1)?",
    "question_hi": "print(3 > 2 > 1) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which method is used to check if string is decimal?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग डेसीमल है, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["isdecimal()", "isdigit()", "isnumeric()", "isnumber()"],
    "options_hi": ["isdecimal()", "isdigit()", "isnumeric()", "isnumber()"],
    "answer_en": "isdecimal()",
    "answer_hi": "isdecimal()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the output of print(bool({}))?",
    "question_hi": "print(bool({})) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "{}", "Error"],
    "options_hi": ["False", "True", "{}", "त्रुटि"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which operator is used for bitwise OR?",
    "question_hi": "बिटवाइज OR के लिए कौन सा ऑपरेटर उपयोग किया जाता है?",
    "options_en": ["|", "||", "or", "&"],
    "options_hi": ["|", "||", "or", "&"],
    "answer_en": "|",
    "answer_hi": "|",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the output of print(abs(0))?",
    "question_hi": "print(abs(0)) का आउटपुट क्या होगा?",
    "options_en": ["0", "1", "-1", "Error"],
    "options_hi": ["0", "1", "-1", "त्रुटि"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which method is used to capitalize first character of each word?",
    "question_hi": "हर वर्ड के पहले करैक्टर को कैपिटलाइज करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["title()", "capitalize()", "upper()", "first_upper()"],
    "options_hi": ["title()", "capitalize()", "upper()", "first_upper()"],
    "answer_en": "title()",
    "answer_hi": "title()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the output of print('PYTHON'.isupper())?",
    "question_hi": "print('PYTHON'.isupper()) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which function is used to create a reversed iterator?",
    "question_hi": "रिवर्स्ड इटरेटर बनाने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["reversed()", "reverse()", "backwards()", "flip()"],
    "options_hi": ["reversed()", "reverse()", "backwards()", "flip()"],
    "answer_en": "reversed()",
    "answer_hi": "reversed()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the output of print(not '')?",
    "question_hi": "print(not '') का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which method is used to find the minimum value in list?",
    "question_hi": "लिस्ट में मिनिमम वैल्यू ढूंढने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["min()", "minimum()", "smallest()", "least()"],
    "options_hi": ["min()", "minimum()", "smallest()", "least()"],
    "answer_en": "min()",
    "answer_hi": "min()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the output of print(min('ABC'))?",
    "question_hi": "print(min('ABC')) का आउटपुट क्या होगा?",
    "options_en": ["A", "B", "C", "ABC"],
    "options_hi": ["A", "B", "C", "ABC"],
    "answer_en": "A",
    "answer_hi": "A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword is used for asynchronous functions?",
    "question_hi": "असिंक्रोनस फंक्शन्स के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["async", "await", "both async and await", "asynchronous"],
    "options_hi": ["async", "await", "async और await दोनों", "asynchronous"],
    "answer_en": "both async and await",
    "answer_hi": "async और await दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the output of print('Hi'.zfill(5))?",
    "question_hi": "print('Hi'.zfill(5)) का आउटपुट क्या होगा?",
    "options_en": ["000Hi", "Hi000", "Hi", "00Hi0"],
    "options_hi": ["000Hi", "Hi000", "Hi", "00Hi0"],
    "answer_en": "000Hi",
    "answer_hi": "000Hi",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which function is used to get global variables?",
    "question_hi": "ग्लोबल वेरिएबल्स प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["globals()", "global_vars()", "vars()", "all_vars()"],
    "options_hi": ["globals()", "global_vars()", "vars()", "all_vars()"],
    "answer_en": "globals()",
    "answer_hi": "globals()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the output of print(2 * 3 ** 2)?",
    "question_hi": "print(2 * 3 ** 2) का आउटपुट क्या होगा?",
    "options_en": ["18", "36", "12", "6"],
    "options_hi": ["18", "36", "12", "6"],
    "answer_en": "18",
    "answer_hi": "18",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which method is used to check if string is identifier?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग आइडेंटिफायर है, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["isidentifier()", "isid()", "identifier()", "isvalid()"],
    "options_hi": ["isidentifier()", "isid()", "identifier()", "isvalid()"],
    "answer_en": "isidentifier()",
    "answer_hi": "isidentifier()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the output of print(bool(100))?",
    "question_hi": "print(bool(100)) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "100", "Error"],
    "options_hi": ["True", "False", "100", "त्रुटि"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword is used for decorators?",
    "question_hi": "डेकोरेटर्स के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["@", "decorator", "wrap", "decorate"],
    "options_hi": ["@", "decorator", "wrap", "decorate"],
    "answer_en": "@",
    "answer_hi": "@",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the output of print('Python'[::3])?",
    "question_hi": "print('Python'[::3]) का आउटपुट क्या होगा?",
    "options_en": ["Ph", "yto", "Python", "Ptn"],
    "options_hi": ["Ph", "yto", "Python", "Ptn"],
    "answer_en": "Ph",
    "answer_hi": "Ph",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which function is used to get the object representation?",
    "question_hi": "ऑब्जेक्ट रिप्रेजेंटेशन प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["repr()", "str()", "ascii()", "represent()"],
    "options_hi": ["repr()", "str()", "ascii()", "represent()"],
    "answer_en": "repr()",
    "answer_hi": "repr()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the output of print(5 is 5.0)?",
    "question_hi": "print(5 is 5.0) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "5", "Error"],
    "options_hi": ["False", "True", "5", "त्रुटि"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method is used to pop item from dictionary?",
    "question_hi": "डिक्शनरी से आइटम पॉप करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["popitem()", "pop()", "remove()", "delete()"],
    "options_hi": ["popitem()", "pop()", "remove()", "delete()"],
    "answer_en": "popitem()",
    "answer_hi": "popitem()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the output of print(25 // 4)?",
    "question_hi": "print(25 // 4) का आउटपुट क्या होगा?",
    "options_en": ["6", "6.25", "7", "5"],
    "options_hi": ["6", "6.25", "7", "5"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which module is used for operating system interfaces?",
    "question_hi": "ऑपरेटिंग सिस्टम इंटरफेस के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["os", "sys", "system", "platform"],
    "options_hi": ["os", "sys", "system", "platform"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the output of print('123abc'.isalnum())?",
    "question_hi": "print('123abc'.isalnum()) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which function is used to execute Python code?",
    "question_hi": "Python कोड एक्सीक्यूट करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["exec()", "eval()", "run()", "execute()"],
    "options_hi": ["exec()", "eval()", "run()", "execute()"],
    "answer_en": "exec()",
    "answer_hi": "exec()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the output of print([x for x in range(1,4)])?",
    "question_hi": "print([x for x in range(1,4)]) का आउटपुट क्या होगा?",
    "options_en": ["[1,2,3]", "[0,1,2,3]", "[1,2,3,4]", "[0,1,2]"],
    "options_hi": ["[1,2,3]", "[0,1,2,3]", "[1,2,3,4]", "[0,1,2]"],
    "answer_en": "[1,2,3]",
    "answer_hi": "[1,2,3]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which method is used to translate characters in string?",
    "question_hi": "स्ट्रिंग में करैक्टर्स ट्रांसलेट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["translate()", "replace()", "convert()", "change()"],
    "options_hi": ["translate()", "replace()", "convert()", "change()"],
    "answer_en": "translate()",
    "answer_hi": "translate()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the output of print(chr(48))?",
    "question_hi": "print(chr(48)) का आउटपुट क्या होगा?",
    "options_en": ["0", "1", "48", "Error"],
    "options_hi": ["0", "1", "48", "त्रुटि"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which keyword is used for method resolution order?",
    "question_hi": "मेथड रेजोल्यूशन ऑर्डर के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["mro()", "__mro__", "both mro() and __mro__", "resolution()"],
    "options_hi": ["mro()", "__mro__", "mro() और __mro__ दोनों", "resolution()"],
    "answer_en": "both mro() and __mro__",
    "answer_hi": "mro() और __mro__ दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the output of print(ord('0'))?",
    "question_hi": "print(ord('0')) का आउटपुट क्या होगा?",
    "options_en": ["48", "0", "49", "1"],
    "options_hi": ["48", "0", "49", "1"],
    "answer_en": "48",
    "answer_hi": "48",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which method is used to check if string is space?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग स्पेस है, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["isspace()", "isblank()", "isempty()", "iswhitespace()"],
    "options_hi": ["isspace()", "isblank()", "isempty()", "iswhitespace()"],
    "answer_en": "isspace()",
    "answer_hi": "isspace()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the output of print(sum([1, 2, 3, 4]))?",
    "question_hi": "print(sum([1, 2, 3, 4])) का आउटपुट क्या होगा?",
    "options_en": ["10", "6", "7", "8"],
    "options_hi": ["10", "6", "7", "8"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which function is used to get the truncated value?",
    "question_hi": "ट्रंकेटेड वैल्यू प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["math.trunc()", "trunc()", "int()", "floor()"],
    "options_hi": ["math.trunc()", "trunc()", "int()", "floor()"],
    "answer_en": "math.trunc()",
    "answer_hi": "math.trunc()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the output of print('Python'.find('z'))?",
    "question_hi": "print('Python'.find('z')) का आउटपुट क्या होगा?",
    "options_en": ["-1", "0", "Error", "None"],
    "options_hi": ["-1", "0", "त्रुटि", "None"],
    "answer_en": "-1",
    "answer_hi": "-1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method is used to create a set from iterable?",
    "question_hi": "इटरेबल से सेट बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["set()", "{}", "both set() and {}", "create_set()"],
    "options_hi": ["set()", "{}", "set() और {} दोनों", "create_set()"],
    "answer_en": "both set() and {}",
    "answer_hi": "set() और {} दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the output of print(pow(4, 0.5))?",
    "question_hi": "print(pow(4, 0.5)) का आउटपुट क्या होगा?",
    "options_en": ["2.0", "2", "4", "0.5"],
    "options_hi": ["2.0", "2", "4", "0.5"],
    "answer_en": "2.0",
    "answer_hi": "2.0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which function is used to create a memory view?",
    "question_hi": "मेमोरी व्यू बनाने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["memoryview()", "view()", "buffer()", "memview()"],
    "options_hi": ["memoryview()", "view()", "buffer()", "memview()"],
    "answer_en": "memoryview()",
    "answer_hi": "memoryview()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the output of print('Python'.startswith('p'))?",
    "question_hi": "print('Python'.startswith('p')) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "p", "Error"],
    "options_hi": ["False", "True", "p", "त्रुटि"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which method is used to clear dictionary?",
    "question_hi": "डिक्शनरी क्लियर करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["clear()", "empty()", "remove()", "delete()"],
    "options_hi": ["clear()", "empty()", "remove()", "delete()"],
    "answer_en": "clear()",
    "answer_hi": "clear()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the output of print(bin(5))?",
    "question_hi": "print(bin(5)) का आउटपुट क्या होगा?",
    "options_en": ["0b101", "101", "5", "0b5"],
    "options_hi": ["0b101", "101", "5", "0b5"],
    "answer_en": "0b101",
    "answer_hi": "0b101",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which function is used to get the current working directory?",
    "question_hi": "करंट वर्किंग डायरेक्टरी प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["os.getcwd()", "os.cwd()", "os.pwd()", "os.current_dir()"],
    "options_hi": ["os.getcwd()", "os.cwd()", "os.pwd()", "os.current_dir()"],
    "answer_en": "os.getcwd()",
    "answer_hi": "os.getcwd()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the output of print(oct(15))?",
    "question_hi": "print(oct(15)) का आउटपुट क्या होगा?",
    "options_en": ["0o17", "17", "15", "0o15"],
    "options_hi": ["0o17", "17", "15", "0o15"],
    "answer_en": "0o17",
    "answer_hi": "0o17",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which method is used to copy dictionary?",
    "question_hi": "डिक्शनरी कॉपी करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["copy()", "dict()", "both copy() and dict()", "clone()"],
    "options_hi": ["copy()", "dict()", "copy() और dict() दोनों", "clone()"],
    "answer_en": "both copy() and dict()",
    "answer_hi": "copy() और dict() दोनों",
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