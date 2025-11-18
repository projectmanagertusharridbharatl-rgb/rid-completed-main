const questions = [
  {
    "num": 1,
    "question_en": "What is the output of print(4 + 3 * 2 ** 2)?",
    "question_hi": "print(4 + 3 * 2 ** 2) का आउटपुट क्या होगा?",
    "options_en": ["16", "28", "20", "12"],
    "options_hi": ["16", "28", "20", "12"],
    "answer_en": "16",
    "answer_hi": "16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which method is used to encode a string to bytes?",
    "question_hi": "स्ट्रिंग को बाइट्स में एनकोड करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["encode()", "tobytes()", "bytes()", "convert()"],
    "options_hi": ["encode()", "tobytes()", "bytes()", "convert()"],
    "answer_en": "encode()",
    "answer_hi": "encode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the output of print('python'.islower())?",
    "question_hi": "print('python'.islower()) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which keyword is used to define an abstract method?",
    "question_hi": "एब्स्ट्रैक्ट मेथड डिफाइन करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["@abstractmethod", "abstract", "abstractmethod", "@abstract"],
    "options_hi": ["@abstractmethod", "abstract", "abstractmethod", "@abstract"],
    "answer_en": "@abstractmethod",
    "answer_hi": "@abstractmethod",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the output of print('Python'[:-2])?",
    "question_hi": "print('Python'[:-2]) का आउटपुट क्या होगा?",
    "options_en": ["Pyth", "Python", "thon", "Pyt"],
    "options_hi": ["Pyth", "Python", "thon", "Pyt"],
    "answer_en": "Pyth",
    "answer_hi": "Pyth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which function is used to decode bytes to string?",
    "question_hi": "बाइट्स को स्ट्रिंग में डिकोड करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["decode()", "tostring()", "str()", "convert()"],
    "options_hi": ["decode()", "tostring()", "str()", "convert()"],
    "answer_en": "decode()",
    "answer_hi": "decode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the output of print(7 != 7)?",
    "question_hi": "print(7 != 7) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "7", "Error"],
    "options_hi": ["False", "True", "7", "त्रुटि"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which method is used to check if string is printable?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग प्रिंटेबल है, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["isprintable()", "printable()", "canprint()", "displayable()"],
    "options_hi": ["isprintable()", "printable()", "canprint()", "displayable()"],
    "answer_en": "isprintable()",
    "answer_hi": "isprintable()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the output of print(bool('0'))?",
    "question_hi": "print(bool('0')) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "0", "Error"],
    "options_hi": ["True", "False", "0", "त्रुटि"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which operator is used for bitwise AND?",
    "question_hi": "बिटवाइज AND के लिए कौन सा ऑपरेटर उपयोग किया जाता है?",
    "options_en": ["&", "&&", "and", "|"],
    "options_hi": ["&", "&&", "and", "|"],
    "answer_en": "&",
    "answer_hi": "&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the output of print(abs(-7))?",
    "question_hi": "print(abs(-7)) का आउटपुट क्या होगा?",
    "options_en": ["7", "-7", "0", "Error"],
    "options_hi": ["7", "-7", "0", "त्रुटि"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which method is used to find the last occurrence of substring?",
    "question_hi": "सबस्ट्रिंग की आखिरी ऑकरेंस ढूंढने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["rfind()", "rindex()", "find()", "last()"],
    "options_hi": ["rfind()", "rindex()", "find()", "last()"],
    "answer_en": "rfind()",
    "answer_hi": "rfind()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the output of print('hello world'.title())?",
    "question_hi": "print('hello world'.title()) का आउटपुट क्या होगा?",
    "options_en": ["Hello World", "Hello world", "hello world", "HELLO WORLD"],
    "options_hi": ["Hello World", "Hello world", "hello world", "HELLO WORLD"],
    "answer_en": "Hello World",
    "answer_hi": "Hello World",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which function is used to create a memory view?",
    "question_hi": "मेमोरी व्यू बनाने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["memoryview()", "memview()", "view()", "buffer()"],
    "options_hi": ["memoryview()", "memview()", "view()", "buffer()"],
    "answer_en": "memoryview()",
    "answer_hi": "memoryview()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the output of print(not 0)?",
    "question_hi": "print(not 0) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "0", "Error"],
    "options_hi": ["True", "False", "0", "त्रुटि"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which method is used to find the maximum value in list?",
    "question_hi": "लिस्ट में मैक्सिमम वैल्यू ढूंढने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["max()", "maximum()", "largest()", "big()"],
    "options_hi": ["max()", "maximum()", "largest()", "big()"],
    "answer_en": "max()",
    "answer_hi": "max()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the output of print(max('xyz'))?",
    "question_hi": "print(max('xyz')) का आउटपुट क्या होगा?",
    "options_en": ["z", "x", "y", "xyz"],
    "options_hi": ["z", "x", "y", "xyz"],
    "answer_en": "z",
    "answer_hi": "z",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword is used for function annotations?",
    "question_hi": "फंक्शन एनोटेशन्स के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["->", ":", "annotation", "def"],
    "options_hi": ["->", ":", "annotation", "def"],
    "answer_en": "->",
    "answer_hi": "->",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the output of print('Python'.rjust(10, '*'))?",
    "question_hi": "print('Python'.rjust(10, '*')) का आउटपुट क्या होगा?",
    "options_en": ["****Python", "Python****", "Python", "***Python***"],
    "options_hi": ["****Python", "Python****", "Python", "***Python***"],
    "answer_en": "****Python",
    "answer_hi": "****Python",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which function is used to get the object size?",
    "question_hi": "ऑब्जेक्ट साइज प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["sys.getsizeof()", "size()", "len()", "sizeof()"],
    "options_hi": ["sys.getsizeof()", "size()", "len()", "sizeof()"],
    "answer_en": "sys.getsizeof()",
    "answer_hi": "sys.getsizeof()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the output of print(2 ** 2 ** 3)?",
    "question_hi": "print(2 ** 2 ** 3) का आउटपुट क्या होगा?",
    "options_en": ["256", "64", "512", "16"],
    "options_hi": ["256", "64", "512", "16"],
    "answer_en": "256",
    "answer_hi": "256",
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
    "question_en": "What is the output of print(bool(-1))?",
    "question_hi": "print(bool(-1)) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "-1", "Error"],
    "options_hi": ["True", "False", "-1", "त्रुटि"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword is used for context managers?",
    "question_hi": "कॉन्टेक्स्ट मैनेजर्स के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["with", "context", "manage", "using"],
    "options_hi": ["with", "context", "manage", "using"],
    "answer_en": "with",
    "answer_hi": "with",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the output of print('Python'[1::2])?",
    "question_hi": "print('Python'[1::2]) का आउटपुट क्या होगा?",
    "options_en": ["yhn", "Pto", "Python", "Pyth"],
    "options_hi": ["yhn", "Pto", "Python", "Pyth"],
    "answer_en": "yhn",
    "answer_hi": "yhn",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which function is used to get the ASCII representation?",
    "question_hi": "ASCII रिप्रेजेंटेशन प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["ascii()", "toascii()", "str()", "repr()"],
    "options_hi": ["ascii()", "toascii()", "str()", "repr()"],
    "answer_en": "ascii()",
    "answer_hi": "ascii()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the output of print(5 is not 5)?",
    "question_hi": "print(5 is not 5) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "5", "Error"],
    "options_hi": ["False", "True", "5", "त्रुटि"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method is used to set default value in dictionary?",
    "question_hi": "डिक्शनरी में डिफॉल्ट वैल्यू सेट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["setdefault()", "default()", "put()", "set()"],
    "options_hi": ["setdefault()", "default()", "put()", "set()"],
    "answer_en": "setdefault()",
    "answer_hi": "setdefault()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the output of print(20 % 6)?",
    "question_hi": "print(20 % 6) का आउटपुट क्या होगा?",
    "options_en": ["2", "3", "4", "1"],
    "options_hi": ["2", "3", "4", "1"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which module is used for system-specific parameters?",
    "question_hi": "सिस्टम-स्पेसिफिक पैरामीटर्स के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["sys", "os", "system", "platform"],
    "options_hi": ["sys", "os", "system", "platform"],
    "answer_en": "sys",
    "answer_hi": "sys",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the output of print('Python3'.isalnum())?",
    "question_hi": "print('Python3'.isalnum()) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which function is used to evaluate expressions?",
    "question_hi": "एक्सप्रेशन्स इवैल्यूएट करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["eval()", "exec()", "calculate()", "compute()"],
    "options_hi": ["eval()", "exec()", "calculate()", "compute()"],
    "answer_en": "eval()",
    "answer_hi": "eval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the output of print([x.upper() for x in 'abc'])?",
    "question_hi": "print([x.upper() for x in 'abc']) का आउटपुट क्या होगा?",
    "options_en": ["['A','B','C']", "['ABC']", "[65,66,67]", "['a','b','c']"],
    "options_hi": ["['A','B','C']", "['ABC']", "[65,66,67]", "['a','b','c']"],
    "answer_en": "['A','B','C']",
    "answer_hi": "['A','B','C']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which method is used to expand tabs in string?",
    "question_hi": "स्ट्रिंग में टैब्स एक्सपैंड करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["expandtabs()", "tabs()", "replace()", "convert()"],
    "options_hi": ["expandtabs()", "tabs()", "replace()", "convert()"],
    "answer_en": "expandtabs()",
    "answer_hi": "expandtabs()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the output of print(ord(' '))?",
    "question_hi": "print(ord(' ')) का आउटपुट क्या होगा?",
    "options_en": ["32", "0", "space", "Error"],
    "options_hi": ["32", "0", "स्पेस", "त्रुटि"],
    "answer_en": "32",
    "answer_hi": "32",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which keyword is used for method chaining?",
    "question_hi": "मेथड चेनिंग के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["self", "return self", "chain", "Python supports it naturally"],
    "options_hi": ["self", "return self", "chain", "Python नेचुरली सपोर्ट करता है"],
    "answer_en": "Python supports it naturally",
    "answer_hi": "Python नेचुरली सपोर्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the output of print(len(set([1,2,3,3])))?",
    "question_hi": "print(len(set([1,2,3,3]))) का आउटपुट क्या होगा?",
    "options_en": ["3", "4", "1", "Error"],
    "options_hi": ["3", "4", "1", "त्रुटि"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which method is used to check if string is ASCII?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग ASCII है, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["isascii()", "ascii()", "checkascii()", "validate()"],
    "options_hi": ["isascii()", "ascii()", "checkascii()", "validate()"],
    "answer_en": "isascii()",
    "answer_hi": "isascii()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the output of print(any([False, False, True]))?",
    "question_hi": "print(any([False, False, True])) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which function is used to get the floor value?",
    "question_hi": "फ्लोर वैल्यू प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["math.floor()", "floor()", "math.ceil()", "round()"],
    "options_hi": ["math.floor()", "floor()", "math.ceil()", "round()"],
    "answer_en": "math.floor()",
    "answer_hi": "math.floor()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the output of print('Python'.rindex('y'))?",
    "question_hi": "print('Python'.rindex('y')) का आउटपुट क्या होगा?",
    "options_en": ["1", "2", "3", "Error"],
    "options_hi": ["1", "2", "3", "त्रुटि"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method is used to create a tuple from iterable?",
    "question_hi": "इटरेबल से टपल बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["tuple()", "()", "both tuple() and ()", "create_tuple()"],
    "options_hi": ["tuple()", "()", "tuple() और () दोनों", "create_tuple()"],
    "answer_en": "both tuple() and ()",
    "answer_hi": "tuple() और () दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the output of print(pow(3, 4))?",
    "question_hi": "print(pow(3, 4)) का आउटपुट क्या होगा?",
    "options_en": ["81", "12", "64", "27"],
    "options_hi": ["81", "12", "64", "27"],
    "answer_en": "81",
    "answer_hi": "81",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which function is used to create bytes?",
    "question_hi": "बाइट्स बनाने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["bytes()", "bytearray()", "b''", "all of the above"],
    "options_hi": ["bytes()", "bytearray()", "b''", "उपरोक्त सभी"],
    "answer_en": "all of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the output of print('Python'.startswith('Py'))?",
    "question_hi": "print('Python'.startswith('Py')) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Py", "Error"],
    "options_hi": ["True", "False", "Py", "त्रुटि"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which method is used to update dictionary with another dictionary?",
    "question_hi": "डिक्शनरी को दूसरी डिक्शनरी से अपडेट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["update()", "merge()", "combine()", "extend()"],
    "options_hi": ["update()", "merge()", "combine()", "extend()"],
    "answer_en": "update()",
    "answer_hi": "update()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the output of print(hex(10))?",
    "question_hi": "print(hex(10)) का आउटपुट क्या होगा?",
    "options_en": ["0xa", "a", "10", "0x10"],
    "options_hi": ["0xa", "a", "10", "0x10"],
    "answer_en": "0xa",
    "answer_hi": "0xa",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which function is used to get the local variables?",
    "question_hi": "लोकल वेरिएबल्स प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["locals()", "vars()", "both locals() and vars()", "variables()"],
    "options_hi": ["locals()", "vars()", "locals() और vars() दोनों", "variables()"],
    "answer_en": "both locals() and vars()",
    "answer_hi": "locals() और vars() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the output of print(oct(20))?",
    "question_hi": "print(oct(20)) का आउटपुट क्या होगा?",
    "options_en": ["0o24", "24", "20", "0o20"],
    "options_hi": ["0o24", "24", "20", "0o20"],
    "answer_en": "0o24",
    "answer_hi": "0o24",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which method is used to remove a key from dictionary?",
    "question_hi": "डिक्शनरी से की रिमूव करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["pop()", "remove()", "delete()", "discard()"],
    "options_hi": ["pop()", "remove()", "delete()", "discard()"],
    "answer_en": "pop()",
    "answer_hi": "pop()",
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