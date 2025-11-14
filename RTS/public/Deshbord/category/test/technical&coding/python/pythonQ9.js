const questions =[
  {
    "num": 1,
    "question_en": "What is the output of print(8 / 2 * (2 + 2))?",
    "question_hi": "print(8 / 2 * (2 + 2)) का आउटपुट क्या होगा?",
    "options_en": ["16.0", "8.0", "4.0", "1.0"],
    "options_hi": ["16.0", "8.0", "4.0", "1.0"],
    "answer_en": "16.0",
    "answer_hi": "16.0",
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
    "question_en": "What is the output of print('Hello'.islower())?",
    "question_hi": "print('Hello'.islower()) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "Error", "None"],
    "options_hi": ["False", "True", "त्रुटि", "None"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which keyword is used to create a generator expression?",
    "question_hi": "जनरेटर एक्सप्रेशन बनाने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["()", "generator", "yield", "genexpr"],
    "options_hi": ["()", "generator", "yield", "genexpr"],
    "answer_en": "()",
    "answer_hi": "()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the output of print('Python'[-4:-1])?",
    "question_hi": "print('Python'[-4:-1]) का आउटपुट क्या होगा?",
    "options_en": ["tho", "yth", "hon", "Pyt"],
    "options_hi": ["tho", "yth", "hon", "Pyt"],
    "answer_en": "tho",
    "answer_hi": "tho",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which function is used to create a range object?",
    "question_hi": "रेंज ऑब्जेक्ट बनाने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["range()", "ranger()", "sequence()", "numbers()"],
    "options_hi": ["range()", "ranger()", "sequence()", "numbers()"],
    "answer_en": "range()",
    "answer_hi": "range()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the output of print(3 == 3 and 4 == 5)?",
    "question_hi": "print(3 == 3 and 4 == 5) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "Error", "None"],
    "options_hi": ["False", "True", "त्रुटि", "None"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which method is used to check if string is decimal?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग डेसीमल है, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["isdecimal()", "isdigit()", "isnumeric()", "all of the above"],
    "options_hi": ["isdecimal()", "isdigit()", "isnumeric()", "उपरोक्त सभी"],
    "answer_en": "isdecimal()",
    "answer_hi": "isdecimal()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the output of print(bool(' '))?",
    "question_hi": "print(bool(' ')) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", " ", "Error"],
    "options_hi": ["True", "False", " ", "त्रुटि"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which operator is used for left shift?",
    "question_hi": "लेफ्ट शिफ्ट के लिए कौन सा ऑपरेटर उपयोग किया जाता है?",
    "options_en": ["<<", ">>", ">>>", "shl"],
    "options_hi": ["<<", ">>", ">>>", "shl"],
    "answer_en": "<<",
    "answer_hi": "<<",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the output of print(abs(3+4j))?",
    "question_hi": "print(abs(3+4j)) का आउटपुट क्या होगा?",
    "options_en": ["5.0", "7.0", "3.0", "Error"],
    "options_hi": ["5.0", "7.0", "3.0", "त्रुटि"],
    "answer_en": "5.0",
    "answer_hi": "5.0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which method is used to convert string to title case?",
    "question_hi": "स्ट्रिंग को टाइटल केस में कन्वर्ट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["title()", "capitalize()", "upper()", "titlecase()"],
    "options_hi": ["title()", "capitalize()", "upper()", "titlecase()"],
    "answer_en": "title()",
    "answer_hi": "title()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the output of print('PYTHON'.islower())?",
    "question_hi": "print('PYTHON'.islower()) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "Error", "None"],
    "options_hi": ["False", "True", "त्रुटि", "None"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which function is used to create a complex number?",
    "question_hi": "कॉम्प्लेक्स नंबर बनाने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["complex()", "comp()", "cnum()", "create_complex()"],
    "options_hi": ["complex()", "comp()", "cnum()", "create_complex()"],
    "answer_en": "complex()",
    "answer_hi": "complex()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the output of print(not 'hello')?",
    "question_hi": "print(not 'hello') का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "hello", "Error"],
    "options_hi": ["False", "True", "hello", "त्रुटि"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which method is used to sort list in descending order?",
    "question_hi": "लिस्ट को डिसेंडिंग ऑर्डर में सॉर्ट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["sort(reverse=True)", "sorted(reverse=True)", "both sort() and sorted()", "descend()"],
    "options_hi": ["sort(reverse=True)", "sorted(reverse=True)", "sort() और sorted() दोनों", "descend()"],
    "answer_en": "both sort() and sorted()",
    "answer_hi": "sort() और sorted() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the output of print(min([3, 1, 4, 2]))?",
    "question_hi": "print(min([3, 1, 4, 2])) का आउटपुट क्या होगा?",
    "options_en": ["1", "2", "3", "4"],
    "options_hi": ["1", "2", "3", "4"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword is used for walrus operator?",
    "question_hi": "वालरस ऑपरेटर के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": [":=", "walrus", "assign", "set"],
    "options_hi": [":=", "walrus", "assign", "set"],
    "answer_en": ":=",
    "answer_hi": ":=",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the output of print('test'.zfill(6))?",
    "question_hi": "print('test'.zfill(6)) का आउटपुट क्या होगा?",
    "options_en": ["00test", "test00", "test", "0000test"],
    "options_hi": ["00test", "test00", "test", "0000test"],
    "answer_en": "00test",
    "answer_hi": "00test",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which function is used to get the current date?",
    "question_hi": "करंट डेट प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["datetime.date.today()", "date.today()", "both datetime.date.today() and date.today()", "current_date()"],
    "options_hi": ["datetime.date.today()", "date.today()", "datetime.date.today() और date.today() दोनों", "current_date()"],
    "answer_en": "both datetime.date.today() and date.today()",
    "answer_hi": "datetime.date.today() और date.today() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the output of print(2 ** 3 ** 2)?",
    "question_hi": "print(2 ** 3 ** 2) का आउटपुट क्या होगा?",
    "options_en": ["512", "64", "256", "72"],
    "options_hi": ["512", "64", "256", "72"],
    "answer_en": "512",
    "answer_hi": "512",
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
    "question_en": "What is the output of print(bool(1000))?",
    "question_hi": "print(bool(1000)) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "1000", "Error"],
    "options_hi": ["True", "False", "1000", "त्रुटि"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword is used for type hints?",
    "question_hi": "टाइप हिंट्स के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": [":", "->", "hint", "type"],
    "options_hi": [":", "->", "hint", "type"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the output of print('Python'[1:5:2])?",
    "question_hi": "print('Python'[1:5:2]) का आउटपुट क्या होगा?",
    "options_en": ["yh", "yt", "to", "hn"],
    "options_hi": ["yh", "yt", "to", "hn"],
    "answer_en": "yh",
    "answer_hi": "yh",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which function is used to get the object type?",
    "question_hi": "ऑब्जेक्ट टाइप प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["type()", "typeof()", "gettype()", "dtype()"],
    "options_hi": ["type()", "typeof()", "gettype()", "dtype()"],
    "answer_en": "type()",
    "answer_hi": "type()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the output of print(5 is not 5.0)?",
    "question_hi": "print(5 is not 5.0) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "5", "Error"],
    "options_hi": ["True", "False", "5", "त्रुटि"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method is used to copy dictionary?",
    "question_hi": "डिक्शनरी कॉपी करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["copy()", "dict()", "both copy() and dict()", "clone()"],
    "options_hi": ["copy()", "dict()", "copy() और dict() दोनों", "clone()"],
    "answer_en": "both copy() and dict()",
    "answer_hi": "copy() और dict() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the output of print(25 // 6)?",
    "question_hi": "print(25 // 6) का आउटपुट क्या होगा?",
    "options_en": ["4", "4.16", "5", "3"],
    "options_hi": ["4", "4.16", "5", "3"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which module is used for unit testing?",
    "question_hi": "यूनिट टेस्टिंग के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["unittest", "pytest", "doctest", "all of the above"],
    "options_hi": ["unittest", "pytest", "doctest", "उपरोक्त सभी"],
    "answer_en": "all of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the output of print('Python123'.isalpha())?",
    "question_hi": "print('Python123'.isalpha()) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "Error", "None"],
    "options_hi": ["False", "True", "त्रुटि", "None"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which function is used to get the input from user?",
    "question_hi": "यूजर से इनपुट प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["input()", "get()", "read()", "scan()"],
    "options_hi": ["input()", "get()", "read()", "scan()"],
    "answer_en": "input()",
    "answer_hi": "input()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the output of print([x for x in 'hello' if x in 'aeiou'])?",
    "question_hi": "print([x for x in 'hello' if x in 'aeiou']) का आउटपुट क्या होगा?",
    "options_en": ["['e','o']", "['h','e','l','l','o']", "['a','e','i','o','u']", "['h','l','l']"],
    "options_hi": ["['e','o']", "['h','e','l','l','o']", "['a','e','i','o','u']", "['h','l','l']"],
    "answer_en": "['e','o']",
    "answer_hi": "['e','o']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which method is used to remove prefix from string?",
    "question_hi": "स्ट्रिंग से प्रीफिक्स रिमूव करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["removeprefix()", "lstrip()", "strip()", "cut()"],
    "options_hi": ["removeprefix()", "lstrip()", "strip()", "cut()"],
    "answer_en": "removeprefix()",
    "answer_hi": "removeprefix()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the output of print(chr(65))?",
    "question_hi": "print(chr(65)) का आउटपुट क्या होगा?",
    "options_en": ["A", "a", "65", "B"],
    "options_hi": ["A", "a", "65", "B"],
    "answer_en": "A",
    "answer_hi": "A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which keyword is used for metaclass?",
    "question_hi": "मेटाक्लास के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["metaclass", "type", "class", "meta"],
    "options_hi": ["metaclass", "type", "class", "meta"],
    "answer_en": "metaclass",
    "answer_hi": "metaclass",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the output of print(ord('Z'))?",
    "question_hi": "print(ord('Z')) का आउटपुट क्या होगा?",
    "options_en": ["90", "65", "122", "97"],
    "options_hi": ["90", "65", "122", "97"],
    "answer_en": "90",
    "answer_hi": "90",
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
    "question_en": "What is the output of print(sum(range(1, 6)))?",
    "question_hi": "print(sum(range(1, 6))) का आउटपुट क्या होगा?",
    "options_en": ["15", "10", "5", "20"],
    "options_hi": ["15", "10", "5", "20"],
    "answer_en": "15",
    "answer_hi": "15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which function is used to get the square root?",
    "question_hi": "स्क्वायर रूट प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["math.sqrt()", "sqrt()", "root()", "square_root()"],
    "options_hi": ["math.sqrt()", "sqrt()", "root()", "square_root()"],
    "answer_en": "math.sqrt()",
    "answer_hi": "math.sqrt()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the output of print('Python'.find('thon'))?",
    "question_hi": "print('Python'.find('thon')) का आउटपुट क्या होगा?",
    "options_en": ["2", "3", "4", "-1"],
    "options_hi": ["2", "3", "4", "-1"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method is used to create a bytearray from iterable?",
    "question_hi": "इटरेबल से बाइटअरे बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["bytearray()", "bytes()", "both bytearray() and bytes()", "create_bytearray()"],
    "options_hi": ["bytearray()", "bytes()", "bytearray() और bytes() दोनों", "create_bytearray()"],
    "answer_en": "bytearray()",
    "answer_hi": "bytearray()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the output of print(pow(10, 2, 3))?",
    "question_hi": "print(pow(10, 2, 3)) का आउटपुट क्या होगा?",
    "options_en": ["1", "100", "2", "0"],
    "options_hi": ["1", "100", "2", "0"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which function is used to create a memoryview?",
    "question_hi": "मेमोरीव्यू बनाने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["memoryview()", "view()", "buffer()", "memview()"],
    "options_hi": ["memoryview()", "view()", "buffer()", "memview()"],
    "answer_en": "memoryview()",
    "answer_hi": "memoryview()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the output of print('Python'.startswith('python'))?",
    "question_hi": "print('Python'.startswith('python')) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "python", "Error"],
    "options_hi": ["False", "True", "python", "त्रुटि"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which method is used to remove element from set?",
    "question_hi": "सेट से एलिमेंट रिमूव करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["remove()", "discard()", "pop()", "all of the above"],
    "options_hi": ["remove()", "discard()", "pop()", "उपरोक्त सभी"],
    "answer_en": "all of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the output of print(bin(15))?",
    "question_hi": "print(bin(15)) का आउटपुट क्या होगा?",
    "options_en": ["0b1111", "1111", "15", "0b15"],
    "options_hi": ["0b1111", "1111", "15", "0b15"],
    "answer_en": "0b1111",
    "answer_hi": "0b1111",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which function is used to get the environment variables?",
    "question_hi": "एनवायरनमेंट वेरिएबल्स प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["os.environ", "os.getenv()", "both os.environ and os.getenv()", "environment()"],
    "options_hi": ["os.environ", "os.getenv()", "os.environ और os.getenv() दोनों", "environment()"],
    "answer_en": "both os.environ and os.getenv()",
    "answer_hi": "os.environ और os.getenv() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the output of print(oct(255))?",
    "question_hi": "print(oct(255)) का आउटपुट क्या होगा?",
    "options_en": ["0o377", "377", "255", "0o255"],
    "options_hi": ["0o377", "377", "255", "0o255"],
    "answer_en": "0o377",
    "answer_hi": "0o377",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which method is used to clear set?",
    "question_hi": "सेट क्लियर करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["clear()", "empty()", "remove()", "delete()"],
    "options_hi": ["clear()", "empty()", "remove()", "delete()"],
    "answer_en": "clear()",
    "answer_hi": "clear()",
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