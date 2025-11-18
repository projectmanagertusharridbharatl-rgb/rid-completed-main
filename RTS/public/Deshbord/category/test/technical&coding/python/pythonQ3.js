const questions =[
  {
    "num": 1,
    "question_en": "What is the output of print(2 + 3 * 4 ** 2)?",
    "question_hi": "print(2 + 3 * 4 ** 2) का आउटपुट क्या होगा?",
    "options_en": ["50", "98", "80", "56"],
    "options_hi": ["50", "98", "80", "56"],
    "answer_en": "50",
    "answer_hi": "50",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which method is used to check if all characters are alphabets?",
    "question_hi": "यह चेक करने के लिए कि सभी करैक्टर अल्फाबेट हैं, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["isalpha()", "isalnum()", "isletter()", "alphabetic()"],
    "options_hi": ["isalpha()", "isalnum()", "isletter()", "alphabetic()"],
    "answer_en": "isalpha()",
    "answer_hi": "isalpha()",
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
    "question_en": "Which keyword is used to create an empty class?",
    "question_hi": "एम्प्टी क्लास बनाने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["pass", "empty", "None", "void"],
    "options_hi": ["pass", "empty", "None", "void"],
    "answer_en": "pass",
    "answer_hi": "pass",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the output of print('Python'[2:])?",
    "question_hi": "print('Python'[2:]) का आउटपुट क्या होगा?",
    "options_en": ["thon", "Python", "Pyth", "yth"],
    "options_hi": ["thon", "Python", "Pyth", "yth"],
    "answer_en": "thon",
    "answer_hi": "thon",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which function is used to convert to float?",
    "question_hi": "फ्लोट में कन्वर्ट करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["float()", "tofloat()", "decimal()", "number()"],
    "options_hi": ["float()", "tofloat()", "decimal()", "number()"],
    "answer_en": "float()",
    "answer_hi": "float()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the output of print(5 > 3 and 2 < 1)?",
    "question_hi": "print(5 > 3 and 2 < 1) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "Error", "None"],
    "options_hi": ["False", "True", "त्रुटि", "None"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which method is used to check if string contains only digits?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग में केवल डिजिट्स हैं, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["isdigit()", "isnumeric()", "isnumber()", "both isdigit() and isnumeric()"],
    "options_hi": ["isdigit()", "isnumeric()", "isnumber()", "isdigit() और isnumeric() दोनों"],
    "answer_en": "both isdigit() and isnumeric()",
    "answer_hi": "isdigit() और isnumeric() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
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
    "num": 10,
    "question_en": "Which operator is used for membership test?",
    "question_hi": "मेंबरशिप टेस्ट के लिए कौन सा ऑपरेटर उपयोग किया जाता है?",
    "options_en": ["in", "has", "contains", "member"],
    "options_hi": ["in", "has", "contains", "member"],
    "answer_en": "in",
    "answer_hi": "in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the output of print(abs(-5.5))?",
    "question_hi": "print(abs(-5.5)) का आउटपुट क्या होगा?",
    "options_en": ["5.5", "-5.5", "5", "-5"],
    "options_hi": ["5.5", "-5.5", "5", "-5"],
    "answer_en": "5.5",
    "answer_hi": "5.5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which method is used to find the index of an element in list?",
    "question_hi": "लिस्ट में एलिमेंट का इंडेक्स ढूंढने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["index()", "find()", "search()", "locate()"],
    "options_hi": ["index()", "find()", "search()", "locate()"],
    "answer_en": "index()",
    "answer_hi": "index()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the output of print('Python'.swapcase())?",
    "question_hi": "print('Python'.swapcase()) का आउटपुट क्या होगा?",
    "options_en": ["pYTHON", "PYTHON", "python", "Python"],
    "options_hi": ["pYTHON", "PYTHON", "python", "Python"],
    "answer_en": "pYTHON",
    "answer_hi": "pYTHON",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which function is used to create a tuple?",
    "question_hi": "टपल बनाने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["tuple()", "tup()", "create_tuple()", "list()"],
    "options_hi": ["tuple()", "tup()", "create_tuple()", "list()"],
    "answer_en": "tuple()",
    "answer_hi": "tuple()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the output of print(not(5 > 3))?",
    "question_hi": "print(not(5 > 3)) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "5", "3"],
    "options_hi": ["False", "True", "5", "3"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which method is used to extend a list with another list?",
    "question_hi": "लिस्ट को दूसरी लिस्ट से एक्सटेंड करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["extend()", "append()", "add()", "concat()"],
    "options_hi": ["extend()", "append()", "add()", "concat()"],
    "answer_en": "extend()",
    "answer_hi": "extend()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the output of print(max('Python'))?",
    "question_hi": "print(max('Python')) का आउटपुट क्या होगा?",
    "options_en": ["y", "P", "n", "t"],
    "options_hi": ["y", "P", "n", "t"],
    "answer_en": "y",
    "answer_hi": "y",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword is used in function definition for variable arguments?",
    "question_hi": "वेरिएबल आर्गुमेंट्स के लिए फंक्शन डेफिनिशन में कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["*args", "**kwargs", "both *args and **kwargs", "varargs"],
    "options_hi": ["*args", "**kwargs", "*args और **kwargs दोनों", "varargs"],
    "answer_en": "both *args and **kwargs",
    "answer_hi": "*args और **kwargs दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the output of print('Python'.center(10, '*'))?",
    "question_hi": "print('Python'.center(10, '*')) का आउटपुट क्या होगा?",
    "options_en": ["**Python**", "**Python", "Python**", "***Python***"],
    "options_hi": ["**Python**", "**Python", "Python**", "***Python***"],
    "answer_en": "**Python**",
    "answer_hi": "**Python**",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which function is used to get the identity of an object?",
    "question_hi": "ऑब्जेक्ट की आइडेंटिटी प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["id()", "identity()", "object_id()", "hash()"],
    "options_hi": ["id()", "identity()", "object_id()", "hash()"],
    "answer_en": "id()",
    "answer_hi": "id()",
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
    "question_en": "Which method is used to check if string is in title case?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग टाइटल केस में है, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["istitle()", "istitlecase()", "title()", "checktitle()"],
    "options_hi": ["istitle()", "istitlecase()", "title()", "checktitle()"],
    "answer_en": "istitle()",
    "answer_hi": "istitle()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the output of print(bool(' '))?",
    "question_hi": "print(bool(' ')) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword is used to prevent method overriding?",
    "question_hi": "मेथड ओवरराइडिंग को प्रिवेंट करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["final", "sealed", "private", "Python doesn't have this feature"],
    "options_hi": ["final", "sealed", "private", "Python में यह फीचर नहीं है"],
    "answer_en": "Python doesn't have this feature",
    "answer_hi": "Python में यह फीचर नहीं है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the output of print('Python'[:2])?",
    "question_hi": "print('Python'[:2]) का आउटपुट क्या होगा?",
    "options_en": ["Py", "Pyt", "Python", "yth"],
    "options_hi": ["Py", "Pyt", "Python", "yth"],
    "answer_en": "Py",
    "answer_hi": "Py",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which function is used to get the hexadecimal representation?",
    "question_hi": "हेक्साडेसिमल रिप्रेजेंटेशन प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["hex()", "tohex()", "hexadecimal()", "base16()"],
    "options_hi": ["hex()", "tohex()", "hexadecimal()", "base16()"],
    "answer_en": "hex()",
    "answer_hi": "hex()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the output of print(5 == 5.0 and 5 is 5.0)?",
    "question_hi": "print(5 == 5.0 and 5 is 5.0) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "Error", "None"],
    "options_hi": ["False", "True", "त्रुटि", "None"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method is used to get key-value pairs from dictionary?",
    "question_hi": "डिक्शनरी से की-वैल्यू पेयर्स प्राप्त करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["items()", "pairs()", "keyvalues()", "entries()"],
    "options_hi": ["items()", "pairs()", "keyvalues()", "entries()"],
    "answer_en": "items()",
    "answer_hi": "items()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the output of print(15 / 4)?",
    "question_hi": "print(15 / 4) का आउटपुट क्या होगा?",
    "options_en": ["3.75", "3", "4", "3.5"],
    "options_hi": ["3.75", "3", "4", "3.5"],
    "answer_en": "3.75",
    "answer_hi": "3.75",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which module is used for regular expressions?",
    "question_hi": "रेगुलर एक्सप्रेशन्स के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["re", "regex", "regexp", "pattern"],
    "options_hi": ["re", "regex", "regexp", "pattern"],
    "answer_en": "re",
    "answer_hi": "re",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the output of print('123'.isdecimal())?",
    "question_hi": "print('123'.isdecimal()) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which function is used to get the binary representation?",
    "question_hi": "बाइनरी रिप्रेजेंटेशन प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["bin()", "tobinary()", "binary()", "base2()"],
    "options_hi": ["bin()", "tobinary()", "binary()", "base2()"],
    "answer_en": "bin()",
    "answer_hi": "bin()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the output of print([x*2 for x in range(3)])?",
    "question_hi": "print([x*2 for x in range(3)]) का आउटपुट क्या होगा?",
    "options_en": ["[0,2,4]", "[0,1,2]", "[2,4,6]", "[1,2,3]"],
    "options_hi": ["[0,2,4]", "[0,1,2]", "[2,4,6]", "[1,2,3]"],
    "answer_en": "[0,2,4]",
    "answer_hi": "[0,2,4]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which method is used to partition a string?",
    "question_hi": "स्ट्रिंग को पार्टिशन करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["partition()", "split()", "divide()", "separate()"],
    "options_hi": ["partition()", "split()", "divide()", "separate()"],
    "answer_en": "partition()",
    "answer_hi": "partition()",
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
    "question_en": "Which keyword is used for the base class in inheritance?",
    "question_hi": "इनहेरिटेंस में बेस क्लास के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["base", "super", "parent", "object"],
    "options_hi": ["base", "super", "parent", "object"],
    "answer_en": "super",
    "answer_hi": "super",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the output of print(ord('a'))?",
    "question_hi": "print(ord('a')) का आउटपुट क्या होगा?",
    "options_en": ["97", "65", "a", "1"],
    "options_hi": ["97", "65", "a", "1"],
    "answer_en": "97",
    "answer_hi": "97",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which method is used to check if string is in uppercase?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग अप्परकेस में है, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["isupper()", "uppercase()", "checkupper()", "allcaps()"],
    "options_hi": ["isupper()", "uppercase()", "checkupper()", "allcaps()"],
    "answer_en": "isupper()",
    "answer_hi": "isupper()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the output of print(sum(range(5)))?",
    "question_hi": "print(sum(range(5))) का आउटपुट क्या होगा?",
    "options_en": ["10", "15", "5", "0"],
    "options_hi": ["10", "15", "5", "0"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which function is used to round a number?",
    "question_hi": "नंबर राउंड करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["round()", "ceil()", "floor()", "trunc()"],
    "options_hi": ["round()", "ceil()", "floor()", "trunc()"],
    "answer_en": "round()",
    "answer_hi": "round()",
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
    "question_en": "Which method is used to create a shallow copy of list?",
    "question_hi": "लिस्ट की शैलो कॉपी बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["copy()", "[:]", "list()", "all of the above"],
    "options_hi": ["copy()", "[:]", "list()", "उपरोक्त सभी"],
    "answer_en": "all of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the output of print(pow(2, 3, 3))?",
    "question_hi": "print(pow(2, 3, 3)) का आउटपुट क्या होगा?",
    "options_en": ["2", "8", "1", "0"],
    "options_hi": ["2", "8", "1", "0"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which function is used to create a set?",
    "question_hi": "सेट बनाने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["set()", "create_set()", "{}", "both set() and {}"],
    "options_hi": ["set()", "create_set()", "{}", "set() और {} दोनों"],
    "answer_en": "both set() and {}",
    "answer_hi": "set() और {} दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the output of print('Python'.startswith('P'))?",
    "question_hi": "print('Python'.startswith('P')) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "P", "Error"],
    "options_hi": ["True", "False", "P", "त्रुटि"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which method is used to remove an element by index from list?",
    "question_hi": "इंडेक्स के आधार पर लिस्ट से एलिमेंट रिमूव करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["pop()", "remove()", "delete()", "discard()"],
    "options_hi": ["pop()", "remove()", "delete()", "discard()"],
    "answer_en": "pop()",
    "answer_hi": "pop()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the output of print(bin(10))?",
    "question_hi": "print(bin(10)) का आउटपुट क्या होगा?",
    "options_en": ["0b1010", "1010", "10", "0b10"],
    "options_hi": ["0b1010", "1010", "10", "0b10"],
    "answer_en": "0b1010",
    "answer_hi": "0b1010",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which function is used to get the character from ASCII value?",
    "question_hi": "ASCII वैल्यू से करैक्टर प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["chr()", "character()", "ascii()", "ord()"],
    "options_hi": ["chr()", "character()", "ascii()", "ord()"],
    "answer_en": "chr()",
    "answer_hi": "chr()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the output of print(oct(10))?",
    "question_hi": "print(oct(10)) का आउटपुट क्या होगा?",
    "options_en": ["0o12", "12", "10", "0o10"],
    "options_hi": ["0o12", "12", "10", "0o10"],
    "answer_en": "0o12",
    "answer_hi": "0o12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which method is used to create a deep copy of list?",
    "question_hi": "लिस्ट की डीप कॉपी बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["deepcopy()", "copy.deepcopy()", "fullcopy()", "completecopy()"],
    "options_hi": ["deepcopy()", "copy.deepcopy()", "fullcopy()", "completecopy()"],
    "answer_en": "copy.deepcopy()",
    "answer_hi": "copy.deepcopy()",
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