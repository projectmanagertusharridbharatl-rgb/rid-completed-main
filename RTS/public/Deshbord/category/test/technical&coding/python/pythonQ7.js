const questions =[
  {
    "num": 1,
    "question_en": "What is the output of print(12 / 4 * 3)?",
    "question_hi": "print(12 / 4 * 3) का आउटपुट क्या होगा?",
    "options_en": ["9.0", "9", "1.0", "12"],
    "options_hi": ["9.0", "9", "1.0", "12"],
    "answer_en": "9.0",
    "answer_hi": "9.0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which method is used to check if string contains only printable characters?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग में केवल प्रिंटेबल करैक्टर हैं, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["isprintable()", "printable()", "canprint()", "displayable()"],
    "options_hi": ["isprintable()", "printable()", "canprint()", "displayable()"],
    "answer_en": "isprintable()",
    "answer_hi": "isprintable()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the output of print('hello world'.istitle())?",
    "question_hi": "print('hello world'.istitle()) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "Error", "None"],
    "options_hi": ["False", "True", "त्रुटि", "None"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which keyword is used to create a lambda function?",
    "question_hi": "लैम्बडा फंक्शन बनाने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["lambda", "def", "function", "lambda_func"],
    "options_hi": ["lambda", "def", "function", "lambda_func"],
    "answer_en": "lambda",
    "answer_hi": "lambda",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the output of print('Python'[1:-1])?",
    "question_hi": "print('Python'[1:-1]) का आउटपुट क्या होगा?",
    "options_en": ["ytho", "Python", "Pyth", "yth"],
    "options_hi": ["ytho", "Python", "Pyth", "yth"],
    "answer_en": "ytho",
    "answer_hi": "ytho",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which function is used to create a filter object?",
    "question_hi": "फिल्टर ऑब्जेक्ट बनाने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["filter()", "filt()", "select()", "where()"],
    "options_hi": ["filter()", "filt()", "select()", "where()"],
    "answer_en": "filter()",
    "answer_hi": "filter()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the output of print(1 == 1.0 and 1 is 1.0)?",
    "question_hi": "print(1 == 1.0 and 1 is 1.0) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "Error", "None"],
    "options_hi": ["False", "True", "त्रुटि", "None"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which method is used to check if string is a valid identifier?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग वैलिड आइडेंटिफायर है, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["isidentifier()", "isid()", "identifier()", "isvalid()"],
    "options_hi": ["isidentifier()", "isid()", "identifier()", "isvalid()"],
    "answer_en": "isidentifier()",
    "answer_hi": "isidentifier()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the output of print(bool('None'))?",
    "question_hi": "print(bool('None')) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "None", "Error"],
    "options_hi": ["True", "False", "None", "त्रुटि"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which operator is used for bitwise XOR?",
    "question_hi": "बिटवाइज XOR के लिए कौन सा ऑपरेटर उपयोग किया जाता है?",
    "options_en": ["^", "xor", "&", "|"],
    "options_hi": ["^", "xor", "&", "|"],
    "answer_en": "^",
    "answer_hi": "^",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the output of print(abs(3.14))?",
    "question_hi": "print(abs(3.14)) का आउटपुट क्या होगा?",
    "options_en": ["3.14", "-3.14", "3", "Error"],
    "options_hi": ["3.14", "-3.14", "3", "त्रुटि"],
    "answer_en": "3.14",
    "answer_hi": "3.14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which method is used to convert first character to uppercase?",
    "question_hi": "पहले करैक्टर को अप्परकेस में कन्वर्ट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["capitalize()", "title()", "upper()", "first_upper()"],
    "options_hi": ["capitalize()", "title()", "upper()", "first_upper()"],
    "answer_en": "capitalize()",
    "answer_hi": "capitalize()",
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
    "question_en": "Which function is used to create a map object?",
    "question_hi": "मैप ऑब्जेक्ट बनाने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["map()", "mapper()", "apply()", "transform()"],
    "options_hi": ["map()", "mapper()", "apply()", "transform()"],
    "answer_en": "map()",
    "answer_hi": "map()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the output of print(not [])?",
    "question_hi": "print(not []) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "[]", "Error"],
    "options_hi": ["True", "False", "[]", "त्रुटि"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which method is used to count elements in list?",
    "question_hi": "लिस्ट में एलिमेंट्स काउंट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["count()", "len()", "size()", "length()"],
    "options_hi": ["count()", "len()", "size()", "length()"],
    "answer_en": "len()",
    "answer_hi": "len()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the output of print(max([1, 2, 3, 2]))?",
    "question_hi": "print(max([1, 2, 3, 2])) का आउटपुट क्या होगा?",
    "options_en": ["3", "2", "1", "4"],
    "options_hi": ["3", "2", "1", "4"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword is used for variable annotations?",
    "question_hi": "वेरिएबल एनोटेशन्स के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": [":", "->", "annotation", "var"],
    "options_hi": [":", "->", "annotation", "var"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the output of print('42'.zfill(5))?",
    "question_hi": "print('42'.zfill(5)) का आउटपुट क्या होगा?",
    "options_en": ["00042", "42000", "42", "00420"],
    "options_hi": ["00042", "42000", "42", "00420"],
    "answer_en": "00042",
    "answer_hi": "00042",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which function is used to get the built-in functions?",
    "question_hi": "बिल्ट-इन फंक्शन्स प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["dir(__builtins__)", "builtins()", "functions()", "methods()"],
    "options_hi": ["dir(__builtins__)", "builtins()", "functions()", "methods()"],
    "answer_en": "dir(__builtins__)",
    "answer_hi": "dir(__builtins__)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the output of print(3 ** 2 * 2)?",
    "question_hi": "print(3 ** 2 * 2) का आउटपुट क्या होगा?",
    "options_en": ["18", "12", "9", "6"],
    "options_hi": ["18", "12", "9", "6"],
    "answer_en": "18",
    "answer_hi": "18",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which method is used to check if string is in ASCII?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग ASCII में है, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["isascii()", "ascii()", "check_ascii()", "validate_ascii()"],
    "options_hi": ["isascii()", "ascii()", "check_ascii()", "validate_ascii()"],
    "answer_en": "isascii()",
    "answer_hi": "isascii()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the output of print(bool(0.1))?",
    "question_hi": "print(bool(0.1)) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "0.1", "Error"],
    "options_hi": ["True", "False", "0.1", "त्रुटि"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword is used for list comprehensions?",
    "question_hi": "लिस्ट कॉम्प्रिहेंशन्स के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["for", "in", "both for and in", "comprehension"],
    "options_hi": ["for", "in", "for और in दोनों", "comprehension"],
    "answer_en": "both for and in",
    "answer_hi": "for और in दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the output of print('Python'[-3:-1])?",
    "question_hi": "print('Python'[-3:-1]) का आउटपुट क्या होगा?",
    "options_en": ["ho", "th", "on", "yt"],
    "options_hi": ["ho", "th", "on", "yt"],
    "answer_en": "ho",
    "answer_hi": "ho",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which function is used to get the object attributes?",
    "question_hi": "ऑब्जेक्ट एट्रिब्यूट्स प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["dir()", "attributes()", "vars()", "props()"],
    "options_hi": ["dir()", "attributes()", "vars()", "props()"],
    "answer_en": "dir()",
    "answer_hi": "dir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the output of print(5 is not 6)?",
    "question_hi": "print(5 is not 6) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "5", "Error"],
    "options_hi": ["True", "False", "5", "त्रुटि"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method is used to get dictionary keys?",
    "question_hi": "डिक्शनरी कीज़ प्राप्त करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["keys()", "get_keys()", "key()", "all_keys()"],
    "options_hi": ["keys()", "get_keys()", "key()", "all_keys()"],
    "answer_en": "keys()",
    "answer_hi": "keys()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the output of print(18 % 7)?",
    "question_hi": "print(18 % 7) का आउटपुट क्या होगा?",
    "options_en": ["4", "3", "2", "1"],
    "options_hi": ["4", "3", "2", "1"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which module is used for command line arguments?",
    "question_hi": "कमांड लाइन आर्गुमेंट्स के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["sys", "argparse", "os", "both sys and argparse"],
    "options_hi": ["sys", "argparse", "os", "sys और argparse दोनों"],
    "answer_en": "both sys and argparse",
    "answer_hi": "sys और argparse दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the output of print('Python3.9'.isalnum())?",
    "question_hi": "print('Python3.9'.isalnum()) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "Error", "None"],
    "options_hi": ["False", "True", "त्रुटि", "None"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which function is used to compile Python code?",
    "question_hi": "Python कोड कम्पाइल करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["compile()", "build()", "make()", "create()"],
    "options_hi": ["compile()", "build()", "make()", "create()"],
    "answer_en": "compile()",
    "answer_hi": "compile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the output of print([x*2 for x in [1,2,3]])?",
    "question_hi": "print([x*2 for x in [1,2,3]]) का आउटपुट क्या होगा?",
    "options_en": ["[2,4,6]", "[1,2,3]", "[1,4,9]", "[2,3,4]"],
    "options_hi": ["[2,4,6]", "[1,2,3]", "[1,4,9]", "[2,3,4]"],
    "answer_en": "[2,4,6]",
    "answer_hi": "[2,4,6]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which method is used to make string translation table?",
    "question_hi": "स्ट्रिंग ट्रांसलेशन टेबल बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["str.maketrans()", "maketrans()", "translate_table()", "trans_table()"],
    "options_hi": ["str.maketrans()", "maketrans()", "translate_table()", "trans_table()"],
    "answer_en": "str.maketrans()",
    "answer_hi": "str.maketrans()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the output of print(chr(32))?",
    "question_hi": "print(chr(32)) का आउटपुट क्या होगा?",
    "options_en": [" ", "0", "32", "space"],
    "options_hi": [" ", "0", "32", "स्पेस"],
    "answer_en": " ",
    "answer_hi": " ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which keyword is used for class decorators?",
    "question_hi": "क्लास डेकोरेटर्स के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["@", "decorator", "class_decorator", "cls_decor"],
    "options_hi": ["@", "decorator", "class_decorator", "cls_decor"],
    "answer_en": "@",
    "answer_hi": "@",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the output of print(ord('9'))?",
    "question_hi": "print(ord('9')) का आउटपुट क्या होगा?",
    "options_en": ["57", "9", "56", "8"],
    "options_hi": ["57", "9", "56", "8"],
    "answer_en": "57",
    "answer_hi": "57",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which method is used to check if string is title case?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग टाइटल केस में है, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["istitle()", "titlecase()", "check_title()", "is_title()"],
    "options_hi": ["istitle()", "titlecase()", "check_title()", "is_title()"],
    "answer_en": "istitle()",
    "answer_hi": "istitle()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the output of print(all([1, 1, 1]))?",
    "question_hi": "print(all([1, 1, 1])) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which function is used to get the mathematical constants?",
    "question_hi": "मैथमेटिकल कॉन्स्टेंट्स प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["math.pi", "pi()", "constant()", "math.constants()"],
    "options_hi": ["math.pi", "pi()", "constant()", "math.constants()"],
    "answer_en": "math.pi",
    "answer_hi": "math.pi",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the output of print('Python'.index('P'))?",
    "question_hi": "print('Python'.index('P')) का आउटपुट क्या होगा?",
    "options_en": ["0", "1", "Error", "None"],
    "options_hi": ["0", "1", "त्रुटि", "None"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method is used to create a dictionary from iterable?",
    "question_hi": "इटरेबल से डिक्शनरी बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["dict()", "{}", "both dict() and {}", "create_dict()"],
    "options_hi": ["dict()", "{}", "dict() और {} दोनों", "create_dict()"],
    "answer_en": "both dict() and {}",
    "answer_hi": "dict() और {} दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the output of print(pow(2, 4, 3))?",
    "question_hi": "print(pow(2, 4, 3)) का आउटपुट क्या होगा?",
    "options_en": ["1", "16", "2", "0"],
    "options_hi": ["1", "16", "2", "0"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which function is used to create a zip object?",
    "question_hi": "जिप ऑब्जेक्ट बनाने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["zip()", "zipper()", "combine()", "merge()"],
    "options_hi": ["zip()", "zipper()", "combine()", "merge()"],
    "answer_en": "zip()",
    "answer_hi": "zip()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the output of print('Python'.endswith('thon'))?",
    "question_hi": "print('Python'.endswith('thon')) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "thon", "Error"],
    "options_hi": ["True", "False", "thon", "त्रुटि"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which method is used to get dictionary values?",
    "question_hi": "डिक्शनरी वैल्यूज प्राप्त करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["values()", "get_values()", "value()", "all_values()"],
    "options_hi": ["values()", "get_values()", "value()", "all_values()"],
    "answer_en": "values()",
    "answer_hi": "values()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the output of print(hex(100))?",
    "question_hi": "print(hex(100)) का आउटपुट क्या होगा?",
    "options_en": ["0x64", "64", "100", "0x100"],
    "options_hi": ["0x64", "64", "100", "0x100"],
    "answer_en": "0x64",
    "answer_hi": "0x64",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which function is used to get the system path?",
    "question_hi": "सिस्टम पाथ प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["sys.path", "os.path", "path()", "system_path()"],
    "options_hi": ["sys.path", "os.path", "path()", "system_path()"],
    "answer_en": "sys.path",
    "answer_hi": "sys.path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the output of print(oct(100))?",
    "question_hi": "print(oct(100)) का आउटपुट क्या होगा?",
    "options_en": ["0o144", "144", "100", "0o100"],
    "options_hi": ["0o144", "144", "100", "0o100"],
    "answer_en": "0o144",
    "answer_hi": "0o144",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which method is used to update set with another set?",
    "question_hi": "सेट को दूसरे सेट से अपडेट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["update()", "union()", "merge()", "combine()"],
    "options_hi": ["update()", "union()", "merge()", "combine()"],
    "answer_en": "update()",
    "answer_hi": "update()",
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