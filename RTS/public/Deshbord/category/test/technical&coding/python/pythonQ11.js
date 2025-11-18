const questions =[
  {
    "num": 1,
    "question_en": "What is the output of print(10 - 2 * 3 + 4)?",
    "question_hi": "print(10 - 2 * 3 + 4) का आउटपुट क्या होगा?",
    "options_en": ["8", "12", "16", "20"],
    "options_hi": ["8", "12", "16", "20"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which method is used to check if string contains only digits?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग में केवल डिजिट्स हैं, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["isdigit()", "isnumeric()", "isdecimal()", "all of the above"],
    "options_hi": ["isdigit()", "isnumeric()", "isdecimal()", "उपरोक्त सभी"],
    "answer_en": "all of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the output of print('hello'.isupper())?",
    "question_hi": "print('hello'.isupper()) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "Error", "None"],
    "options_hi": ["False", "True", "त्रुटि", "None"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which keyword is used to create a context manager?",
    "question_hi": "कॉन्टेक्स्ट मैनेजर बनाने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["with", "context", "manage", "using"],
    "options_hi": ["with", "context", "manage", "using"],
    "answer_en": "with",
    "answer_hi": "with",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the output of print('Python'[1:])?",
    "question_hi": "print('Python'[1:]) का आउटपुट क्या होगा?",
    "options_en": ["ython", "Pytho", "Pyth", "ython"],
    "options_hi": ["ython", "Pytho", "Pyth", "ython"],
    "answer_en": "ython",
    "answer_hi": "ython",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which function is used to create an enumerate object?",
    "question_hi": "एन्युमरेट ऑब्जेक्ट बनाने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["enumerate()", "counter()", "indexer()", "number()"],
    "options_hi": ["enumerate()", "counter()", "indexer()", "number()"],
    "answer_en": "enumerate()",
    "answer_hi": "enumerate()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the output of print(2 == '2' or 2 == 2)?",
    "question_hi": "print(2 == '2' or 2 == 2) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which method is used to check if string is alphabetic?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग अल्फाबेटिक है, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["isalpha()", "isalnum()", "isletter()", "alphabetic()"],
    "options_hi": ["isalpha()", "isalnum()", "isletter()", "alphabetic()"],
    "answer_en": "isalpha()",
    "answer_hi": "isalpha()",
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
    "question_en": "What is the output of print(abs(-100))?",
    "question_hi": "print(abs(-100)) का आउटपुट क्या होगा?",
    "options_en": ["100", "-100", "0", "Error"],
    "options_hi": ["100", "-100", "0", "त्रुटि"],
    "answer_en": "100",
    "answer_hi": "100",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which method is used to swap case of string?",
    "question_hi": "स्ट्रिंग का केस स्वैप करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["swapcase()", "changecase()", "togglecase()", "flipcase()"],
    "options_hi": ["swapcase()", "changecase()", "togglecase()", "flipcase()"],
    "answer_en": "swapcase()",
    "answer_hi": "swapcase()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the output of print('PYTHON'.lower())?",
    "question_hi": "print('PYTHON'.lower()) का आउटपुट क्या होगा?",
    "options_en": ["python", "PYTHON", "Python", "pYTHON"],
    "options_hi": ["python", "PYTHON", "Python", "pYTHON"],
    "answer_en": "python",
    "answer_hi": "python",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which function is used to create a sorted list?",
    "question_hi": "सॉर्टेड लिस्ट बनाने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["sorted()", "sort()", "order()", "arrange()"],
    "options_hi": ["sorted()", "sort()", "order()", "arrange()"],
    "answer_en": "sorted()",
    "answer_hi": "sorted()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the output of print(not False)?",
    "question_hi": "print(not False) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which method is used to reverse list?",
    "question_hi": "लिस्ट रिवर्स करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["reverse()", "reversed()", "flip()", "backward()"],
    "options_hi": ["reverse()", "reversed()", "flip()", "backward()"],
    "answer_en": "reverse()",
    "answer_hi": "reverse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the output of print(min([5, 3, 8, 1]))?",
    "question_hi": "print(min([5, 3, 8, 1])) का आउटपुट क्या होगा?",
    "options_en": ["1", "3", "5", "8"],
    "options_hi": ["1", "3", "5", "8"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword is used for nonlocal variables?",
    "question_hi": "नॉनलोकल वेरिएबल्स के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["nonlocal", "global", "local", "outer"],
    "options_hi": ["nonlocal", "global", "local", "outer"],
    "answer_en": "nonlocal",
    "answer_hi": "nonlocal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the output of print('7'.zfill(3))?",
    "question_hi": "print('7'.zfill(3)) का आउटपुट क्या होगा?",
    "options_en": ["007", "700", "7", "070"],
    "options_hi": ["007", "700", "7", "070"],
    "answer_en": "007",
    "answer_hi": "007",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which function is used to get the current time?",
    "question_hi": "करंट टाइम प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["time.time()", "datetime.now()", "both time.time() and datetime.now()", "current_time()"],
    "options_hi": ["time.time()", "datetime.now()", "time.time() और datetime.now() दोनों", "current_time()"],
    "answer_en": "both time.time() and datetime.now()",
    "answer_hi": "time.time() और datetime.now() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the output of print(4 ** (1/2))?",
    "question_hi": "print(4 ** (1/2)) का आउटपुट क्या होगा?",
    "options_en": ["2.0", "2", "4", "0.5"],
    "options_hi": ["2.0", "2", "4", "0.5"],
    "answer_en": "2.0",
    "answer_hi": "2.0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which method is used to check if string is ASCII?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग ASCII है, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["isascii()", "ascii()", "check_ascii()", "validate_ascii()"],
    "options_hi": ["isascii()", "ascii()", "check_ascii()", "validate_ascii()"],
    "answer_en": "isascii()",
    "answer_hi": "isascii()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the output of print(bool([]))?",
    "question_hi": "print(bool([])) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "[]", "Error"],
    "options_hi": ["False", "True", "[]", "त्रुटि"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword is used for dictionary comprehensions?",
    "question_hi": "डिक्शनरी कॉम्प्रिहेंशन्स के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["for", "in", "both for and in", "dict_comp"],
    "options_hi": ["for", "in", "for और in दोनों", "dict_comp"],
    "answer_en": "both for and in",
    "answer_hi": "for और in दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the output of print('Python'[2:5])?",
    "question_hi": "print('Python'[2:5]) का आउटपुट क्या होगा?",
    "options_en": ["tho", "yth", "thon", "Pyt"],
    "options_hi": ["tho", "yth", "thon", "Pyt"],
    "answer_en": "tho",
    "answer_hi": "tho",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which function is used to get the object documentation?",
    "question_hi": "ऑब्जेक्ट डॉक्युमेंटेशन प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["help()", "doc()", "info()", "documentation()"],
    "options_hi": ["help()", "doc()", "info()", "documentation()"],
    "answer_en": "help()",
    "answer_hi": "help()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the output of print(5 is 5)?",
    "question_hi": "print(5 is 5) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "5", "Error"],
    "options_hi": ["True", "False", "5", "त्रुटि"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method is used to get dictionary items?",
    "question_hi": "डिक्शनरी आइटम्स प्राप्त करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["items()", "get_items()", "item()", "all_items()"],
    "options_hi": ["items()", "get_items()", "item()", "all_items()"],
    "answer_en": "items()",
    "answer_hi": "items()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the output of print(30 % 7)?",
    "question_hi": "print(30 % 7) का आउटपुट क्या होगा?",
    "options_en": ["2", "3", "4", "1"],
    "options_hi": ["2", "3", "4", "1"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which module is used for data compression?",
    "question_hi": "डेटा कम्प्रेशन के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["zlib", "gzip", "zipfile", "all of the above"],
    "options_hi": ["zlib", "gzip", "zipfile", "उपरोक्त सभी"],
    "answer_en": "all of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the output of print('Python3'.isalpha())?",
    "question_hi": "print('Python3'.isalpha()) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "Error", "None"],
    "options_hi": ["False", "True", "त्रुटि", "None"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which function is used to format value as string?",
    "question_hi": "वैल्यू को स्ट्रिंग के रूप में फॉर्मेट करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["format()", "str()", "both format() and str()", "tostring()"],
    "options_hi": ["format()", "str()", "format() और str() दोनों", "tostring()"],
    "answer_en": "both format() and str()",
    "answer_hi": "format() और str() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the output of print([x for x in range(0, 5, 2)])?",
    "question_hi": "print([x for x in range(0, 5, 2)]) का आउटपुट क्या होगा?",
    "options_en": ["[0,2,4]", "[0,1,2,3,4]", "[2,4]", "[1,3]"],
    "options_hi": ["[0,2,4]", "[0,1,2,3,4]", "[2,4]", "[1,3]"],
    "answer_en": "[0,2,4]",
    "answer_hi": "[0,2,4]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which method is used to remove leading characters?",
    "question_hi": "लीडिंग करैक्टर्स रिमूव करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["lstrip()", "strip()", "rstrip()", "remove()"],
    "options_hi": ["lstrip()", "strip()", "rstrip()", "remove()"],
    "answer_en": "lstrip()",
    "answer_hi": "lstrip()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the output of print(chr(10))?",
    "question_hi": "print(chr(10)) का आउटपुट क्या होगा?",
    "options_en": ["\\n", "10", "newline", "Error"],
    "options_hi": ["\\n", "10", "न्यूलाइन", "त्रुटि"],
    "answer_en": "\\n",
    "answer_hi": "\\n",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which keyword is used for set comprehensions?",
    "question_hi": "सेट कॉम्प्रिहेंशन्स के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["for", "in", "both for and in", "set_comp"],
    "options_hi": ["for", "in", "for और in दोनों", "set_comp"],
    "answer_en": "both for and in",
    "answer_hi": "for और in दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the output of print(ord('\\n'))?",
    "question_hi": "print(ord('\\n')) का आउटपुट क्या होगा?",
    "options_en": ["10", "13", "newline", "Error"],
    "options_hi": ["10", "13", "न्यूलाइन", "त्रुटि"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which method is used to check if string is lowercase?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग लोअरकेस में है, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["islower()", "lowercase()", "check_lower()", "is_lower()"],
    "options_hi": ["islower()", "lowercase()", "check_lower()", "is_lower()"],
    "answer_en": "islower()",
    "answer_hi": "islower()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the output of print(any([0, 0, 0]))?",
    "question_hi": "print(any([0, 0, 0])) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "Error", "None"],
    "options_hi": ["False", "True", "त्रुटि", "None"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which function is used to get the mathematical infinity?",
    "question_hi": "मैथमेटिकल इनफिनिटी प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["math.inf", "inf()", "infinity()", "math.infinity()"],
    "options_hi": ["math.inf", "inf()", "infinity()", "math.infinity()"],
    "answer_en": "math.inf",
    "answer_hi": "math.inf",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the output of print('Python'.rfind('y'))?",
    "question_hi": "print('Python'.rfind('y')) का आउटपुट क्या होगा?",
    "options_en": ["1", "2", "3", "-1"],
    "options_hi": ["1", "2", "3", "-1"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method is used to create a frozenset?",
    "question_hi": "फ्रोजनसेट बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["frozenset()", "frozen()", "immutable_set()", "fixed_set()"],
    "options_hi": ["frozenset()", "frozen()", "immutable_set()", "fixed_set()"],
    "answer_en": "frozenset()",
    "answer_hi": "frozenset()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the output of print(pow(5, 2))?",
    "question_hi": "print(pow(5, 2)) का आउटपुट क्या होगा?",
    "options_en": ["25", "10", "7", "32"],
    "options_hi": ["25", "10", "7", "32"],
    "answer_en": "25",
    "answer_hi": "25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which function is used to create an iter object?",
    "question_hi": "इटर ऑब्जेक्ट बनाने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["iter()", "iterator()", "make_iter()", "create_iter()"],
    "options_hi": ["iter()", "iterator()", "make_iter()", "create_iter()"],
    "answer_en": "iter()",
    "answer_hi": "iter()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the output of print('Python'.startswith(''))?",
    "question_hi": "print('Python'.startswith('')) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which method is used to remove trailing characters?",
    "question_hi": "ट्रेलिंग करैक्टर्स रिमूव करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["rstrip()", "strip()", "lstrip()", "remove()"],
    "options_hi": ["rstrip()", "strip()", "lstrip()", "remove()"],
    "answer_en": "rstrip()",
    "answer_hi": "rstrip()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the output of print(hex(255))?",
    "question_hi": "print(hex(255)) का आउटपुट क्या होगा?",
    "options_en": ["0xff", "ff", "255", "0x255"],
    "options_hi": ["0xff", "ff", "255", "0x255"],
    "answer_en": "0xff",
    "answer_hi": "0xff",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which function is used to get the platform information?",
    "question_hi": "प्लेटफॉर्म इनफॉर्मेशन प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["platform.platform()", "sys.platform", "os.name", "all of the above"],
    "options_hi": ["platform.platform()", "sys.platform", "os.name", "उपरोक्त सभी"],
    "answer_en": "all of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the output of print(oct(64))?",
    "question_hi": "print(oct(64)) का आउटपुट क्या होगा?",
    "options_en": ["0o100", "100", "64", "0o64"],
    "options_hi": ["0o100", "100", "64", "0o64"],
    "answer_en": "0o100",
    "answer_hi": "0o100",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which method is used to add element to set?",
    "question_hi": "सेट में एलिमेंट जोड़ने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["add()", "append()", "insert()", "put()"],
    "options_hi": ["add()", "append()", "insert()", "put()"],
    "answer_en": "add()",
    "answer_hi": "add()",
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