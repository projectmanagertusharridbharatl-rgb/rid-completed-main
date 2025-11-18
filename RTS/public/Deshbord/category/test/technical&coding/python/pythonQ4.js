const questions = [
  {
    "num": 1,
    "question_en": "What is the output of print((2 + 3) * 4)?",
    "question_hi": "print((2 + 3) * 4) का आउटपुट क्या होगा?",
    "options_en": ["20", "14", "24", "9"],
    "options_hi": ["20", "14", "24", "9"],
    "answer_en": "20",
    "answer_hi": "20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which method is used to check if string contains only alphabets and numbers?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग में केवल अल्फाबेट्स और नंबर्स हैं, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["isalnum()", "isalpha()", "isdigit()", "isalphanum()"],
    "options_hi": ["isalnum()", "isalpha()", "isdigit()", "isalphanum()"],
    "answer_en": "isalnum()",
    "answer_hi": "isalnum()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the output of print('HELLO'.isupper())?",
    "question_hi": "print('HELLO'.isupper()) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which keyword is used to define a static method?",
    "question_hi": "स्टैटिक मेथड डिफाइन करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["@staticmethod", "static", "staticmethod", "@static"],
    "options_hi": ["@staticmethod", "static", "staticmethod", "@static"],
    "answer_en": "@staticmethod",
    "answer_hi": "@staticmethod",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the output of print('Python'[-3:])?",
    "question_hi": "print('Python'[-3:]) का आउटपुट क्या होगा?",
    "options_en": ["hon", "thon", "Python", "Pyt"],
    "options_hi": ["hon", "thon", "Python", "Pyt"],
    "answer_en": "hon",
    "answer_hi": "hon",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which function is used to convert to complex number?",
    "question_hi": "कॉम्प्लेक्स नंबर में कन्वर्ट करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["complex()", "tocomplex()", "comp()", "cnum()"],
    "options_hi": ["complex()", "tocomplex()", "comp()", "cnum()"],
    "answer_en": "complex()",
    "answer_hi": "complex()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the output of print(5 > 3 or 2 < 1)?",
    "question_hi": "print(5 > 3 or 2 < 1) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which method is used to check if string contains only whitespace?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग में केवल व्हाइटस्पेस है, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["isspace()", "isblank()", "isempty()", "iswhitespace()"],
    "options_hi": ["isspace()", "isblank()", "isempty()", "iswhitespace()"],
    "answer_en": "isspace()",
    "answer_hi": "isspace()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the output of print(bool([1,2,3]))?",
    "question_hi": "print(bool([1,2,3])) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "[1,2,3]", "Error"],
    "options_hi": ["True", "False", "[1,2,3]", "त्रुटि"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which operator is used for identity comparison?",
    "question_hi": "आइडेंटिटी कम्पेरिजन के लिए कौन सा ऑपरेटर उपयोग किया जाता है?",
    "options_en": ["is", "==", "===", "id"],
    "options_hi": ["is", "==", "===", "id"],
    "answer_en": "is",
    "answer_hi": "is",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the output of print(abs(-10))?",
    "question_hi": "print(abs(-10)) का आउटपुट क्या होगा?",
    "options_en": ["10", "-10", "0", "Error"],
    "options_hi": ["10", "-10", "0", "त्रुटि"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which method is used to find the first occurrence of substring?",
    "question_hi": "सबस्ट्रिंग की पहली ऑकरेंस ढूंढने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["find()", "index()", "search()", "locate()"],
    "options_hi": ["find()", "index()", "search()", "locate()"],
    "answer_en": "find()",
    "answer_hi": "find()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the output of print('Hello World'.title())?",
    "question_hi": "print('Hello World'.title()) का आउटपुट क्या होगा?",
    "options_en": ["Hello World", "Hello world", "hello world", "HELLO WORLD"],
    "options_hi": ["Hello World", "Hello world", "hello world", "HELLO WORLD"],
    "answer_en": "Hello World",
    "answer_hi": "Hello World",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which function is used to create a frozen set?",
    "question_hi": "फ्रोजन सेट बनाने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["frozenset()", "frozen()", "immutable_set()", "fixed_set()"],
    "options_hi": ["frozenset()", "frozen()", "immutable_set()", "fixed_set()"],
    "answer_en": "frozenset()",
    "answer_hi": "frozenset()",
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
    "question_en": "Which method is used to count occurrences of element in list?",
    "question_hi": "लिस्ट में एलिमेंट की ऑकरेंस काउंट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["count()", "occurrence()", "find()", "search()"],
    "options_hi": ["count()", "occurrence()", "find()", "search()"],
    "answer_en": "count()",
    "answer_hi": "count()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the output of print(min('abcde'))?",
    "question_hi": "print(min('abcde')) का आउटपुट क्या होगा?",
    "options_en": ["a", "e", "b", "c"],
    "options_hi": ["a", "e", "b", "c"],
    "answer_en": "a",
    "answer_hi": "a",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword is used to define a class method?",
    "question_hi": "क्लास मेथड डिफाइन करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["@classmethod", "classmethod", "cls", "@class"],
    "options_hi": ["@classmethod", "classmethod", "cls", "@class"],
    "answer_en": "@classmethod",
    "answer_hi": "@classmethod",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the output of print('Python'.ljust(10, '-'))?",
    "question_hi": "print('Python'.ljust(10, '-')) का आउटपुट क्या होगा?",
    "options_en": ["Python----", "----Python", "Python", "---Python---"],
    "options_hi": ["Python----", "----Python", "Python", "---Python---"],
    "answer_en": "Python----",
    "answer_hi": "Python----",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which function is used to get the hash of an object?",
    "question_hi": "ऑब्जेक्ट का हैश प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["hash()", "gethash()", "object_hash()", "id()"],
    "options_hi": ["hash()", "gethash()", "object_hash()", "id()"],
    "answer_en": "hash()",
    "answer_hi": "hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the output of print(3 * 2 ** 3)?",
    "question_hi": "print(3 * 2 ** 3) का आउटपुट क्या होगा?",
    "options_en": ["24", "18", "64", "12"],
    "options_hi": ["24", "18", "64", "12"],
    "answer_en": "24",
    "answer_hi": "24",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which method is used to check if string is in lowercase?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग लोअरकेस में है, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["islower()", "lowercase()", "checklower()", "allsmall()"],
    "options_hi": ["islower()", "lowercase()", "checklower()", "allsmall()"],
    "answer_en": "islower()",
    "answer_hi": "islower()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the output of print(bool(0.0))?",
    "question_hi": "print(bool(0.0)) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "0.0", "Error"],
    "options_hi": ["False", "True", "0.0", "त्रुटि"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword is used to define a property?",
    "question_hi": "प्रॉपर्टी डिफाइन करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["@property", "property", "prop", "@prop"],
    "options_hi": ["@property", "property", "prop", "@prop"],
    "answer_en": "@property",
    "answer_hi": "@property",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the output of print('Python'[::2])?",
    "question_hi": "print('Python'[::2]) का आउटपुट क्या होगा?",
    "options_en": ["Pto", "yhn", "Python", "Pyth"],
    "options_hi": ["Pto", "yhn", "Python", "Pyth"],
    "answer_en": "Pto",
    "answer_hi": "Pto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which function is used to get the octal representation?",
    "question_hi": "ऑक्टल रिप्रेजेंटेशन प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["oct()", "tooctal()", "octal()", "base8()"],
    "options_hi": ["oct()", "tooctal()", "octal()", "base8()"],
    "answer_en": "oct()",
    "answer_hi": "oct()",
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
    "question_en": "Which method is used to get a value from dictionary with default?",
    "question_hi": "डिफॉल्ट के साथ डिक्शनरी से वैल्यू प्राप्त करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["get()", "fetch()", "retrieve()", "obtain()"],
    "options_hi": ["get()", "fetch()", "retrieve()", "obtain()"],
    "answer_en": "get()",
    "answer_hi": "get()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the output of print(17 % 5)?",
    "question_hi": "print(17 % 5) का आउटपुट क्या होगा?",
    "options_en": ["2", "3", "4", "1"],
    "options_hi": ["2", "3", "4", "1"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which module is used for JSON operations?",
    "question_hi": "JSON ऑपरेशन्स के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["json", "simplejson", "ujson", "jsonlib"],
    "options_hi": ["json", "simplejson", "ujson", "jsonlib"],
    "answer_en": "json",
    "answer_hi": "json",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the output of print('Python123'.isalnum())?",
    "question_hi": "print('Python123'.isalnum()) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which function is used to format strings?",
    "question_hi": "स्ट्रिंग्स फॉर्मेट करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["format()", "f-string", "% operator", "all of the above"],
    "options_hi": ["format()", "f-string", "% operator", "उपरोक्त सभी"],
    "answer_en": "all of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the output of print([x for x in 'abc'])?",
    "question_hi": "print([x for x in 'abc']) का आउटपुट क्या होगा?",
    "options_en": ["['a','b','c']", "['abc']", "[97,98,99]", "['a','b']"],
    "options_hi": ["['a','b','c']", "['abc']", "[97,98,99]", "['a','b']"],
    "answer_en": "['a','b','c']",
    "answer_hi": "['a','b','c']",
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
    "question_en": "What is the output of print(ascii('ñ'))?",
    "question_hi": "print(ascii('ñ')) का आउटपुट क्या होगा?",
    "options_en": ["'\\xf1'", "'ñ'", "Error", "None"],
    "options_hi": ["'\\xf1'", "'ñ'", "त्रुटि", "None"],
    "answer_en": "'\\xf1'",
    "answer_hi": "'\\xf1'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which keyword is used for multiple inheritance?",
    "question_hi": "मल्टीपल इनहेरिटेंस के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["class", "inherits", "extends", "Python supports it directly"],
    "options_hi": ["class", "inherits", "extends", "Python सीधे सपोर्ट करता है"],
    "answer_en": "Python supports it directly",
    "answer_hi": "Python सीधे सपोर्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the output of print(len({'a':1, 'b':2}))?",
    "question_hi": "print(len({'a':1, 'b':2})) का आउटपुट क्या होगा?",
    "options_en": ["2", "1", "3", "Error"],
    "options_hi": ["2", "1", "3", "त्रुटि"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which method is used to check if all characters are printable?",
    "question_hi": "यह चेक करने के लिए कि सभी करैक्टर प्रिंटेबल हैं, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["isprintable()", "printable()", "canprint()", "displayable()"],
    "options_hi": ["isprintable()", "printable()", "canprint()", "displayable()"],
    "answer_en": "isprintable()",
    "answer_hi": "isprintable()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the output of print(all([True, True, False]))?",
    "question_hi": "print(all([True, True, False])) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "Error", "None"],
    "options_hi": ["False", "True", "त्रुटि", "None"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which function is used to get the ceiling value?",
    "question_hi": "सीलिंग वैल्यू प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["math.ceil()", "ceil()", "math.floor()", "round()"],
    "options_hi": ["math.ceil()", "ceil()", "math.floor()", "round()"],
    "answer_en": "math.ceil()",
    "answer_hi": "math.ceil()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the output of print('Python'.index('t'))?",
    "question_hi": "print('Python'.index('t')) का आउटपुट क्या होगा?",
    "options_en": ["2", "3", "4", "Error"],
    "options_hi": ["2", "3", "4", "त्रुटि"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method is used to create a list from iterable?",
    "question_hi": "इटरेबल से लिस्ट बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["list()", "[]", "both list() and []", "create_list()"],
    "options_hi": ["list()", "[]", "list() और [] दोनों", "create_list()"],
    "answer_en": "both list() and []",
    "answer_hi": "list() और [] दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the output of print(round(2.675, 2))?",
    "question_hi": "print(round(2.675, 2)) का आउटपुट क्या होगा?",
    "options_en": ["2.67", "2.68", "2.67 or 2.68", "2.7"],
    "options_hi": ["2.67", "2.68", "2.67 या 2.68", "2.7"],
    "answer_en": "2.67 or 2.68",
    "answer_hi": "2.67 या 2.68",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which function is used to create a bytearray?",
    "question_hi": "बाइटअरे बनाने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["bytearray()", "bytes()", "create_bytearray()", "barr()"],
    "options_hi": ["bytearray()", "bytes()", "create_bytearray()", "barr()"],
    "answer_en": "bytearray()",
    "answer_hi": "bytearray()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the output of print('Python'.endswith('on'))?",
    "question_hi": "print('Python'.endswith('on')) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "on", "Error"],
    "options_hi": ["True", "False", "on", "त्रुटि"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which method is used to remove suffix from string?",
    "question_hi": "स्ट्रिंग से सफिक्स रिमूव करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["removesuffix()", "rstrip()", "strip()", "cutend()"],
    "options_hi": ["removesuffix()", "rstrip()", "strip()", "cutend()"],
    "answer_en": "removesuffix()",
    "answer_hi": "removesuffix()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the output of print(hex(16))?",
    "question_hi": "print(hex(16)) का आउटपुट क्या होगा?",
    "options_en": ["0x10", "10", "16", "0x16"],
    "options_hi": ["0x10", "10", "16", "0x16"],
    "answer_en": "0x10",
    "answer_hi": "0x10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which function is used to get the memory address?",
    "question_hi": "मेमोरी एड्रेस प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["id()", "memory()", "address()", "hex(id())"],
    "options_hi": ["id()", "memory()", "address()", "hex(id())"],
    "answer_en": "id()",
    "answer_hi": "id()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the output of print(oct(16))?",
    "question_hi": "print(oct(16)) का आउटपुट क्या होगा?",
    "options_en": ["0o20", "20", "16", "0o16"],
    "options_hi": ["0o20", "20", "16", "0o16"],
    "answer_en": "0o20",
    "answer_hi": "0o20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which method is used to check if a key exists in dictionary?",
    "question_hi": "यह चेक करने के लिए कि डिक्शनरी में की है या नहीं, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["in", "has_key()", "contains()", "exists()"],
    "options_hi": ["in", "has_key()", "contains()", "exists()"],
    "answer_en": "in",
    "answer_hi": "in",
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