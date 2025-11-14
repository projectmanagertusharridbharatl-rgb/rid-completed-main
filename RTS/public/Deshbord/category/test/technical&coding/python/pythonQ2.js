const questions = [
  {
    "num": 1,
    "question_en": "What is the output of print(5 + 3 * 2)?",
    "question_hi": "print(5 + 3 * 2) का आउटपुट क्या होगा?",
    "options_en": ["11", "16", "13", "10"],
    "options_hi": ["11", "16", "13", "10"],
    "answer_en": "11",
    "answer_hi": "11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which method is used to convert string to lowercase?",
    "question_hi": "स्ट्रिंग को लोअरकेस में कन्वर्ट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["lower()", "tolower()", "casefold()", "small()"],
    "options_hi": ["lower()", "tolower()", "casefold()", "small()"],
    "answer_en": "lower()",
    "answer_hi": "lower()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the output of print(2 == 2.0)?",
    "question_hi": "print(2 == 2.0) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which keyword is used to define a constant in Python?",
    "question_hi": "Python में कॉन्स्टेंट डिफाइन करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["const", "final", "constant", "Python doesn't have constants"],
    "options_hi": ["const", "final", "constant", "Python में कॉन्स्टेंट नहीं होते"],
    "answer_en": "Python doesn't have constants",
    "answer_hi": "Python में कॉन्स्टेंट नहीं होते",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the output of print('Python'[-1])?",
    "question_hi": "print('Python'[-1]) का आउटपुट क्या होगा?",
    "options_en": ["n", "P", "y", "Error"],
    "options_hi": ["n", "P", "y", "त्रुटि"],
    "answer_en": "n",
    "answer_hi": "n",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which function is used to get the data type?",
    "question_hi": "डेटा टाइप प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["type()", "dtype()", "typeof()", "gettype()"],
    "options_hi": ["type()", "dtype()", "typeof()", "gettype()"],
    "answer_en": "type()",
    "answer_hi": "type()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the output of print(10 != 10)?",
    "question_hi": "print(10 != 10) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "10", "Error"],
    "options_hi": ["True", "False", "10", "त्रुटि"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which method is used to check if string contains substring?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग में सबस्ट्रिंग है या नहीं, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["contains()", "in", "find()", "search()"],
    "options_hi": ["contains()", "in", "find()", "search()"],
    "answer_en": "in",
    "answer_hi": "in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the output of print(bool('False'))?",
    "question_hi": "print(bool('False')) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which operator has the highest precedence?",
    "question_hi": "किस ऑपरेटर की प्रीसीडेंस सबसे ज्यादा होती है?",
    "options_en": ["+", "*", "**", "()"],
    "options_hi": ["+", "*", "**", "()"],
    "answer_en": "()",
    "answer_hi": "()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the output of print(round(3.14159, 2))?",
    "question_hi": "print(round(3.14159, 2)) का आउटपुट क्या होगा?",
    "options_en": ["3.14", "3.15", "3.1", "3.0"],
    "options_hi": ["3.14", "3.15", "3.1", "3.0"],
    "answer_en": "3.14",
    "answer_hi": "3.14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which method is used to remove an element by value from list?",
    "question_hi": "वैल्यू के आधार पर लिस्ट से एलिमेंट रिमूव करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["remove()", "pop()", "delete()", "discard()"],
    "options_hi": ["remove()", "pop()", "delete()", "discard()"],
    "answer_en": "remove()",
    "answer_hi": "remove()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the output of print('Python'.replace('P', 'J'))?",
    "question_hi": "print('Python'.replace('P', 'J')) का आउटपुट क्या होगा?",
    "options_en": ["Jython", "Python", "JythonP", "Error"],
    "options_hi": ["Jython", "Python", "JythonP", "त्रुटि"],
    "answer_en": "Jython",
    "answer_hi": "Jython",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which function is used to create a sequence of numbers?",
    "question_hi": "नंबर्स की सीक्वेंस बनाने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["range()", "sequence()", "numbers()", "list()"],
    "options_hi": ["range()", "sequence()", "numbers()", "list()"],
    "answer_en": "range()",
    "answer_hi": "range()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the output of print(True or False)?",
    "question_hi": "print(True or False) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "None", "Error"],
    "options_hi": ["True", "False", "None", "त्रुटि"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which method is used to add an element at specific position?",
    "question_hi": "स्पेसिफिक पोजीशन पर एलिमेंट जोड़ने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["insert()", "add()", "append()", "put()"],
    "options_hi": ["insert()", "add()", "append()", "put()"],
    "answer_en": "insert()",
    "answer_hi": "insert()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the output of print(min([5,2,8,1]))?",
    "question_hi": "print(min([5,2,8,1])) का आउटपुट क्या होगा?",
    "options_en": ["1", "2", "5", "8"],
    "options_hi": ["1", "2", "5", "8"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword is used to skip current iteration?",
    "question_hi": "करंट इटरेशन स्किप करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["skip", "continue", "break", "pass"],
    "options_hi": ["skip", "continue", "break", "pass"],
    "answer_en": "continue",
    "answer_hi": "continue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the output of print('Python'.split('t'))?",
    "question_hi": "print('Python'.split('t')) का आउटपुट क्या होगा?",
    "options_en": ["['Py', 'hon']", "['Pyth', 'on']", "['P', 'ython']", "Error"],
    "options_hi": ["['Py', 'hon']", "['Pyth', 'on']", "['P', 'ython']", "त्रुटि"],
    "answer_en": "['Py', 'hon']",
    "answer_hi": "['Py', 'hon']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which function is used to get the length of a list?",
    "question_hi": "लिस्ट की लंबाई प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["len()", "length()", "size()", "count()"],
    "options_hi": ["len()", "length()", "size()", "count()"],
    "answer_en": "len()",
    "answer_hi": "len()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the output of print(4 ** 0.5)?",
    "question_hi": "print(4 ** 0.5) का आउटपुट क्या होगा?",
    "options_en": ["2.0", "2", "4", "0.5"],
    "options_hi": ["2.0", "2", "4", "0.5"],
    "answer_en": "2.0",
    "answer_hi": "2.0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which method is used to check if string starts with specific character?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग स्पेसिफिक कैरेक्टर से शुरू होती है या नहीं, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["startswith()", "beginwith()", "checkstart()", "first()"],
    "options_hi": ["startswith()", "beginwith()", "checkstart()", "first()"],
    "answer_en": "startswith()",
    "answer_hi": "startswith()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the output of print(bool(1))?",
    "question_hi": "print(bool(1)) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "1", "Error"],
    "options_hi": ["True", "False", "1", "त्रुटि"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword is used to exit a loop?",
    "question_hi": "लूप से बाहर निकलने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["exit", "break", "stop", "end"],
    "options_hi": ["exit", "break", "stop", "end"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the output of print('Python'[::-1])?",
    "question_hi": "print('Python'[::-1]) का आउटपुट क्या होगा?",
    "options_en": ["nohtyP", "Python", "P", "Error"],
    "options_hi": ["nohtyP", "Python", "P", "त्रुटि"],
    "answer_en": "nohtyP",
    "answer_hi": "nohtyP",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which function is used to convert to string?",
    "question_hi": "स्ट्रिंग में कन्वर्ट करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["str()", "string()", "tostring()", "convert()"],
    "options_hi": ["str()", "string()", "tostring()", "convert()"],
    "answer_en": "str()",
    "answer_hi": "str()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the output of print(3 < 5 < 7)?",
    "question_hi": "print(3 < 5 < 7) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method is used to get all values from dictionary?",
    "question_hi": "डिक्शनरी से सभी वैल्यूज प्राप्त करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["values()", "get()", "items()", "all()"],
    "options_hi": ["values()", "get()", "items()", "all()"],
    "answer_en": "values()",
    "answer_hi": "values()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the output of print(10 / 3)?",
    "question_hi": "print(10 / 3) का आउटपुट क्या होगा?",
    "options_en": ["3.333", "3", "3.0", "4"],
    "options_hi": ["3.333", "3", "3.0", "4"],
    "answer_en": "3.333",
    "answer_hi": "3.333",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which module is used for date and time?",
    "question_hi": "डेट और टाइम के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["datetime", "time", "date", "calendar"],
    "options_hi": ["datetime", "time", "date", "calendar"],
    "answer_en": "datetime",
    "answer_hi": "datetime",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the output of print('Python'.isalpha())?",
    "question_hi": "print('Python'.isalpha()) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "Error", "None"],
    "options_hi": ["True", "False", "त्रुटि", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which function is used to get the square root?",
    "question_hi": "स्क्वायर रूट प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["sqrt()", "root()", "square()", "pow()"],
    "options_hi": ["sqrt()", "root()", "square()", "pow()"],
    "answer_en": "sqrt()",
    "answer_hi": "sqrt()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the output of print([i for i in range(3)])?",
    "question_hi": "print([i for i in range(3)]) का आउटपुट क्या होगा?",
    "options_en": ["[0,1,2]", "[1,2,3]", "[0,1]", "[1,2]"],
    "options_hi": ["[0,1,2]", "[1,2,3]", "[0,1]", "[1,2]"],
    "answer_en": "[0,1,2]",
    "answer_hi": "[0,1,2]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which method is used to join list elements into string?",
    "question_hi": "लिस्ट एलिमेंट्स को स्ट्रिंग में जोड़ने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["join()", "concat()", "merge()", "combine()"],
    "options_hi": ["join()", "concat()", "merge()", "combine()"],
    "answer_en": "join()",
    "answer_hi": "join()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the output of print(ord('A'))?",
    "question_hi": "print(ord('A')) का आउटपुट क्या होगा?",
    "options_en": ["65", "97", "A", "1"],
    "options_hi": ["65", "97", "A", "1"],
    "answer_en": "65",
    "answer_hi": "65",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which keyword is used for null in Python?",
    "question_hi": "Python में null के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["null", "None", "nil", "empty"],
    "options_hi": ["null", "None", "nil", "empty"],
    "answer_en": "None",
    "answer_hi": "None",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the output of print(chr(97))?",
    "question_hi": "print(chr(97)) का आउटपुट क्या होगा?",
    "options_en": ["a", "A", "97", "Error"],
    "options_hi": ["a", "A", "97", "त्रुटि"],
    "answer_en": "a",
    "answer_hi": "a",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which method is used to check if string is numeric?",
    "question_hi": "यह चेक करने के लिए कि स्ट्रिंग न्यूमेरिक है या नहीं, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["isnumeric()", "isdigit()", "isnumber()", "both isnumeric() and isdigit()"],
    "options_hi": ["isnumeric()", "isdigit()", "isnumber()", "isnumeric() और isdigit() दोनों"],
    "answer_en": "both isnumeric() and isdigit()",
    "answer_hi": "isnumeric() और isdigit() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the output of print(sum([1,2,3]))?",
    "question_hi": "print(sum([1,2,3])) का आउटपुट क्या होगा?",
    "options_en": ["6", "5", "4", "3"],
    "options_hi": ["6", "5", "4", "3"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which function is used to get the power of a number?",
    "question_hi": "नंबर की पावर प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["pow()", "power()", "**", "both pow() and **"],
    "options_hi": ["pow()", "power()", "**", "pow() और ** दोनों"],
    "answer_en": "both pow() and **",
    "answer_hi": "pow() और ** दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the output of print('Python'.count('y'))?",
    "question_hi": "print('Python'.count('y')) का आउटपुट क्या होगा?",
    "options_en": ["1", "0", "2", "Error"],
    "options_hi": ["1", "0", "2", "त्रुटि"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method is used to reverse a list?",
    "question_hi": "लिस्ट रिवर्स करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["reverse()", "reversed()", "flip()", "backward()"],
    "options_hi": ["reverse()", "reversed()", "flip()", "backward()"],
    "answer_en": "reverse()",
    "answer_hi": "reverse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the output of print(divmod(10, 3))?",
    "question_hi": "print(divmod(10, 3)) का आउटपुट क्या होगा?",
    "options_en": ["(3,1)", "(1,3)", "(3,3)", "(1,1)"],
    "options_hi": ["(3,1)", "(1,3)", "(3,3)", "(1,1)"],
    "answer_en": "(3,1)",
    "answer_hi": "(3,1)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which function is used to create a dictionary?",
    "question_hi": "डिक्शनरी बनाने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["dict()", "dictionary()", "create_dict()", "map()"],
    "options_hi": ["dict()", "dictionary()", "create_dict()", "map()"],
    "answer_en": "dict()",
    "answer_hi": "dict()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the output of print('Python'.endswith('n'))?",
    "question_hi": "print('Python'.endswith('n')) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "n", "Error"],
    "options_hi": ["True", "False", "n", "त्रुटि"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which method is used to remove all elements from list?",
    "question_hi": "लिस्ट से सभी एलिमेंट्स रिमूव करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["clear()", "remove()", "delete()", "empty()"],
    "options_hi": ["clear()", "remove()", "delete()", "empty()"],
    "answer_en": "clear()",
    "answer_hi": "clear()",
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
    "question_en": "Which function is used to get ASCII value of character?",
    "question_hi": "कैरेक्टर का ASCII वैल्यू प्राप्त करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["ord()", "ascii()", "chr()", "code()"],
    "options_hi": ["ord()", "ascii()", "chr()", "code()"],
    "answer_en": "ord()",
    "answer_hi": "ord()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the output of print(oct(8))?",
    "question_hi": "print(oct(8)) का आउटपुट क्या होगा?",
    "options_en": ["0o10", "10", "8", "0o8"],
    "options_hi": ["0o10", "10", "8", "0o8"],
    "answer_en": "0o10",
    "answer_hi": "0o10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which method is used to copy a list?",
    "question_hi": "लिस्ट कॉपी करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["copy()", "clone()", "dup()", "replicate()"],
    "options_hi": ["copy()", "clone()", "dup()", "replicate()"],
    "answer_en": "copy()",
    "answer_hi": "copy()",
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