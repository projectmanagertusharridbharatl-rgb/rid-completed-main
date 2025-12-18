const questions = [
    {
        "num": 1,
        "question_hi": "हिंदी व्याकरण में शब्दों के कितने भेद होते हैं?",
        "options_hi": ["दो", "तीन", "चार", "पाँच"],
        "answer_hi": "पाँच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "संज्ञा किसे कहते हैं?",
        "options_hi": ["वस्तु, स्थान या व्यक्ति के नाम", "क्रिया करने वाले", "गुण बताने वाले", "सम्बन्ध बताने वाले"],
        "answer_hi": "वस्तु, स्थान या व्यक्ति के नाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "सर्वनाम का शाब्दिक अर्थ क्या है?",
        "options_hi": ["नाम के स्थान पर प्रयुक्त", "नया नाम", "गुप्त नाम", "विशेष नाम"],
        "answer_hi": "नाम के स्थान पर प्रयुक्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "विशेषण किसे कहते हैं?",
        "options_hi": ["संज्ञा या सर्वनाम की विशेषता बताने वाले", "क्रिया की विशेषता", "समय बताने वाले", "स्थान बताने वाले"],
        "answer_hi": "संज्ञा या सर्वनाम की विशेषता बताने वाले",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "क्रिया किसे कहते हैं?",
        "options_hi": ["काम करने या होने का बोध कराने वाले", "नाम बताने वाले", "गुण बताने वाले", "सम्बन्ध बताने वाले"],
        "answer_hi": "काम करने या होने का बोध कराने वाले",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "अव्यय किसे कहते हैं?",
        "options_hi": ["जिसके रूप में परिवर्तन न हो", "जिसका रूप बदलता", "जो क्रिया हो", "जो नाम हो"],
        "answer_hi": "जिसके रूप में परिवर्तन न हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "संज्ञा के कितने भेद होते हैं?",
        "options_hi": ["पाँच", "तीन", "चार", "छह"],
        "answer_hi": "पाँच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "व्यक्तिवाचक संज्ञा किसे कहते हैं?",
        "options_hi": ["विशेष व्यक्ति या वस्तु का नाम", "समूह का नाम", "गुण का नाम", "भाव का नाम"],
        "answer_hi": "विशेष व्यक्ति या वस्तु का नाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "जातिवाचक संज्ञा का उदाहरण क्या है?",
        "options_hi": ["लड़का", "राम", "गंगा", "भारत"],
        "answer_hi": "लड़का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "भाववाचक संज्ञा किसे कहते हैं?",
        "options_hi": ["भाव, गुण या दशा का बोध", "व्यक्ति का नाम", "वस्तु का नाम", "स्थान का नाम"],
        "answer_hi": "भाव, गुण या दशा का बोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "समूहवाचक संज्ञा का उदाहरण क्या है?",
        "options_hi": ["सभा", "बचपन", "मोहन", "दिल्ली"],
        "answer_hi": "सभा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "द्रव्यवाचक संज्ञा किसे कहते हैं?",
        "options_hi": ["धातु, द्रव्य या पदार्थ", "भाव", "समूह", "व्यक्ति"],
        "answer_hi": "धातु, द्रव्य या पदार्थ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "सर्वनाम के कितने भेद होते हैं?",
        "options_hi": ["छह", "पाँच", "चार", "तीन"],
        "answer_hi": "छह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "पुरुषवाचक सर्वनाम किसे कहते हैं?",
        "options_hi": ["वक्ता, श्रोता या अन्य", "प्रश्न करने वाले", "संकेत करने वाले", "सम्बन्ध बताने वाले"],
        "answer_hi": "वक्ता, श्रोता या अन्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "निजवाचक सर्वनाम का उदाहरण क्या है?",
        "options_hi": ["आप", "वह", "यह", "कौन"],
        "answer_hi": "आप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "निश्चयवाचक सर्वनाम किसे कहते हैं?",
        "options_hi": ["निकट या दूर की वस्तु का बोध", "प्रश्न पूछने वाले", "सम्बन्ध बताने वाले", "अनिश्चित बताने वाले"],
        "answer_hi": "निकट या दूर की वस्तु का बोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "अनिश्चयवाचक सर्वनाम का उदाहरण क्या है?",
        "options_hi": ["कोई", "वह", "यह", "मैं"],
        "answer_hi": "कोई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "प्रश्नवाचक सर्वनाम किसे कहते हैं?",
        "options_hi": ["प्रश्न पूछने के लिए", "उत्तर देने के लिए", "संकेत करने के लिए", "सम्बन्ध बताने के लिए"],
        "answer_hi": "प्रश्न पूछने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "सम्बन्धवाचक सर्वनाम का उदाहरण क्या है?",
        "options_hi": ["जो", "कौन", "यह", "वह"],
        "answer_hi": "जो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "विशेषण के कितने भेद होते हैं?",
        "options_hi": ["चार", "तीन", "पाँच", "छह"],
        "answer_hi": "चार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "गुणवाचक विशेषण किसे कहते हैं?",
        "options_hi": ["गुण, रंग, आकार आदि बताने वाले", "संख्या बताने वाले", "परिमाण बताने वाले", "सार्वनामिक"],
        "answer_hi": "गुण, रंग, आकार आदि बताने वाले",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "परिमाणवाचक विशेषण का उदाहरण क्या है?",
        "options_hi": ["कुछ", "लाल", "बड़ा", "अच्छा"],
        "answer_hi": "कुछ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "संख्यावाचक विशेषण कितने प्रकार के होते हैं?",
        "options_hi": ["दो", "तीन", "चार", "पाँच"],
        "answer_hi": "दो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "निश्चित संख्यावाचक विशेषण का उदाहरण क्या है?",
        "options_hi": ["पाँच", "कुछ", "बहुत", "थोड़ा"],
        "answer_hi": "पाँच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "अनिश्चित संख्यावाचक विशेषण का उदाहरण क्या है?",
        "options_hi": ["कई", "दस", "पचास", "सौ"],
        "answer_hi": "कई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "सार्वनामिक विशेषण किसे कहते हैं?",
        "options_hi": ["सर्वनाम से बने विशेषण", "गुण बताने वाले", "संख्या बताने वाले", "परिमाण बताने वाले"],
        "answer_hi": "सर्वनाम से बने विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "क्रिया के कितने भेद होते हैं?",
        "options_hi": ["दो", "तीन", "चार", "पाँच"],
        "answer_hi": "दो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "सकर्मक क्रिया किसे कहते हैं?",
        "options_hi": ["जिसका फल कर्म पर पड़े", "जिसका फल कर्ता पर पड़े", "जिसका कोई कर्म न हो", "जो सहायक हो"],
        "answer_hi": "जिसका फल कर्म पर पड़े",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "अकर्मक क्रिया का उदाहरण क्या है?",
        "options_hi": ["सोना", "पढ़ना", "लिखना", "खाना"],
        "answer_hi": "सोना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "प्रेरणार्थक क्रिया किसे कहते हैं?",
        "options_hi": ["जो क्रिया कराने का बोध कराए", "जो स्वयं हो", "जो सहायक हो", "जो मुख्य हो"],
        "answer_hi": "जो क्रिया कराने का बोध कराए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "संयुक्त क्रिया कितने प्रकार की होती है?",
        "options_hi": ["दस", "आठ", "बारह", "पंद्रह"],
        "answer_hi": "दस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "नामधातु क्रिया किसे कहते हैं?",
        "options_hi": ["संज्ञा या विशेषण से बनी क्रिया", "क्रिया से बनी क्रिया", "सर्वनाम से बनी", "अव्यय से बनी"],
        "answer_hi": "संज्ञा या विशेषण से बनी क्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "कृदंत क्रिया किसे कहते हैं?",
        "options_hi": ["कृदंत प्रत्यय से बनी क्रिया", "मूल क्रिया", "संयुक्त क्रिया", "प्रेरणार्थक क्रिया"],
        "answer_hi": "कृदंत प्रत्यय से बनी क्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "अव्यय के कितने भेद होते हैं?",
        "options_hi": ["चार", "पाँच", "तीन", "छह"],
        "answer_hi": "चार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "क्रिया विशेषण किसे कहते हैं?",
        "options_hi": ["क्रिया की विशेषता बताने वाले", "संज्ञा की विशेषता", "सर्वनाम की विशेषता", "विशेषण की विशेषता"],
        "answer_hi": "क्रिया की विशेषता बताने वाले",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "संबंधबोधक अव्यय किसे कहते हैं?",
        "options_hi": ["संज्ञा या सर्वनाम का संबंध बताने वाले", "क्रिया की विशेषता", "समुच्चय बोधक", "विस्मयादिबोधक"],
        "answer_hi": "संज्ञा या सर्वनाम का संबंध बताने वाले",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "समुच्चयबोधक अव्यय का उदाहरण क्या है?",
        "options_hi": ["और", "धीरे", "यहाँ", "वाह"],
        "answer_hi": "और",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "विस्मयादिबोधक अव्यय किसे कहते हैं?",
        "options_hi": ["आश्चर्य, हर्ष, शोक आदि भाव", "संबंध बताने वाले", "समुच्चय बताने वाले", "क्रिया की विशेषता"],
        "answer_hi": "आश्चचर्य, हर्ष, शोक आदि भाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "कालवाचक क्रिया विशेषण का उदाहरण क्या है?",
        "options_hi": ["कल", "धीरे", "यहाँ", "बहुत"],
        "answer_hi": "कल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "स्थानवाचक क्रिया विशेषण का उदाहरण क्या है?",
        "options_hi": ["यहाँ", "धीरे", "बहुत", "कल"],
        "answer_hi": "यहाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "रीतिवाचक क्रिया विशेषण का उदाहरण क्या है?",
        "options_hi": ["धीरे", "कल", "यहाँ", "बहुत"],
        "answer_hi": "धीरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "परिमाणवाचक क्रिया विशेषण का उदाहरण क्या है?",
        "options_hi": ["बहुत", "कल", "यहाँ", "धीरे"],
        "answer_hi": "बहुत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "क्रिया विशेषण के कितने भेद होते हैं?",
        "options_hi": ["चार", "तीन", "पाँच", "छह"],
        "answer_hi": "चार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "अव्ययीभाव समास किसका उदाहरण है?",
        "options_hi": ["अव्यय का", "संज्ञा का", "सर्वनाम का", "विशेषण का"],
        "answer_hi": "अव्यय का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "व्यक्तिवाचक संज्ञा का उदाहरण क्या है?",
        "options_hi": ["राम", "लड़का", "सेना", "लोहा"],
        "answer_hi": "राम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "द्वितीया पुरुष सर्वनाम का उदाहरण क्या है?",
        "options_hi": ["तुम", "मैं", "वह", "यह"],
        "answer_hi": "तुम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "उत्तम पुरुष सर्वनाम का उदाहरण क्या है?",
        "options_hi": ["मैं", "तुम", "वह", "यह"],
        "answer_hi": "मैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "मध्यम पुरुष सर्वनाम का उदाहरण क्या है?",
        "options_hi": ["तुम", "मैं", "वह", "यह"],
        "answer_hi": "तुम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "अन्य पुरुष सर्वनाम का उदाहरण क्या है?",
        "options_hi": ["वह", "मैं", "तुम", "आप"],
        "answer_hi": "वह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "विशेषण की अवस्थाएँ कितनी होती हैं?",
        "options_hi": ["तीन", "दो", "चार", "पाँच"],
        "answer_hi": "तीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "मूलावस्था विशेषण का उदाहरण क्या है?",
        "options_hi": ["बड़ा", "बड़ा-बड़ा", "सबसे बड़ा", "अधिक बड़ा"],
        "answer_hi": "बड़ा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "तुलनात्मक अवस्था विशेषण का उदाहरण क्या है?",
        "options_hi": ["अधिक बड़ा", "बड़ा", "सबसे बड़ा", "बड़ा-बड़ा"],
        "answer_hi": "अधिक बड़ा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "श्रेष्ठतम अवस्था विशेषण का उदाहरण क्या है?",
        "options_hi": ["सबसे बड़ा", "बड़ा", "अधिक बड़ा", "बड़ा-बड़ा"],
        "answer_hi": "सबसे बड़ा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "प्रविशेषण किसे कहते हैं?",
        "options_hi": ["विशेषण की विशेषता बताने वाले", "संज्ञा की विशेषता", "क्रिया की विशेषता", "सर्वनाम की विशेषता"],
        "answer_hi": "विशेषण की विशेषता बताने वाले",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "समानाधिकरण समुच्चयबोधक का उदाहरण क्या है?",
        "options_hi": ["और", "क्योंकि", "ताकि", "परंतु"],
        "answer_hi": "और",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "व्याधिकरण समुच्चयबोधक का उदाहरण क्या है?",
        "options_hi": ["क्योंकि", "और", "या", "तथा"],
        "answer_hi": "क्योंकि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "पूर्वकालिक क्रिया किसे कहते हैं?",
        "options_hi": ["एक क्रिया के पूर्व होना", "क्रिया के बाद होना", "क्रिया के साथ होना", "क्रिया के बिना"],
        "answer_hi": "एक क्रिया के पूर्व होना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "समापिका क्रिया किसे कहते हैं?",
        "options_hi": ["वाक्य का अंत करने वाली", "वाक्य के बीच में आने वाली", "वाक्य के आरंभ में आने वाली", "सहायक क्रिया"],
        "answer_hi": "वाक्य का अंत करने वाली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "असमापिका क्रिया किसे कहते हैं?",
        "options_hi": ["वाक्य पूरा न करने वाली", "वाक्य पूरा करने वाली", "मुख्य क्रिया", "सहायक क्रिया"],
        "answer_hi": "वाक्य पूरा न करने वाली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "एकवचन संज्ञा का उदाहरण क्या है?",
        "options_hi": ["लड़का", "लड़के", "लड़कों", "लड़कियाँ"],
        "answer_hi": "लड़का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "बहुवचन संज्ञा का उदाहरण क्या है?",
        "options_hi": ["लड़के", "लड़का", "किताब", "मेज़"],
        "answer_hi": "लड़के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "स्त्रीलिंग संज्ञा का उदाहरण क्या है?",
        "options_hi": ["लड़की", "लड़का", "गुरु", "डॉक्टर"],
        "answer_hi": "लड़की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "पुल्लिंग संज्ञा का उदाहरण क्या है?",
        "options_hi": ["लड़का", "लड़की", "शिक्षिका", "बहन"],
        "answer_hi": "लड़का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "नपुंसकलिंग संज्ञा का उदाहरण क्या है?",
        "options_hi": ["पेड़", "लड़का", "लड़की", "गाय"],
        "answer_hi": "पेड़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "सकर्मक क्रिया का उदाहरण क्या है?",
        "options_hi": ["पढ़ना", "सोना", "जागना", "हँसना"],
        "answer_hi": "पढ़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "द्विकर्मक क्रिया किसे कहते हैं?",
        "options_hi": ["दो कर्म लेने वाली", "एक कर्म लेने वाली", "कोई कर्म न लेने वाली", "तीन कर्म लेने वाली"],
        "answer_hi": "दो कर्म लेने वाली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "प्रथम प्रेरणार्थक क्रिया का उदाहरण क्या है?",
        "options_hi": ["पढ़ाना", "पढ़ना", "पढ़वाना", "सिखाना"],
        "answer_hi": "पढ़ाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "द्वितीय प्रेरणार्थक क्रिया का उदाहरण क्या है?",
        "options_hi": ["पढ़वाना", "पढ़ना", "पढ़ाना", "सोना"],
        "answer_hi": "पढ़वाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "सामान्य भूत काल का उदाहरण क्या है?",
        "options_hi": ["वह गया", "वह जा रहा", "वह जाएगा", "वह जाता"],
        "answer_hi": "वह गया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "अपूर्ण भूत काल का उदाहरण क्या है?",
        "options_hi": ["वह जा रहा था", "वह गया", "वह जाएगा", "वह जाता"],
        "answer_hi": "वह जा रहा था",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "संदिग्ध भूत काल का उदाहरण क्या है?",
        "options_hi": ["वह गया होगा", "वह गया", "वह जा रहा था", "वह जाएगा"],
        "answer_hi": "वह गया होगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "आसन्न भूत काल का उदाहरण क्या है?",
        "options_hi": ["वह अभी गया है", "वह गया", "वह जा रहा था", "वह जाएगा"],
        "answer_hi": "वह अभी गया है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "हेतुहेतुमद् भूत काल का उदाहरण क्या है?",
        "options_hi": ["यदि वह जाता तो", "वह गया", "वह जा रहा था", "वह जाएगा"],
        "answer_hi": "यदि वह जाता तो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "सामान्य वर्तमान काल का उदाहरण क्या है?",
        "options_hi": ["वह जाता है", "वह जा रहा", "वह गया", "वह जाएगा"],
        "answer_hi": "वह जाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "तात्कालिक वर्तमान काल का उदाहरण क्या है?",
        "options_hi": ["वह जा रहा है", "वह जाता", "वह गया", "वह जाएगा"],
        "answer_hi": "वह जा रहा है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "पूर्ण वर्तमान काल का उदाहरण क्या है?",
        "options_hi": ["वह गया है", "वह जा रहा", "वह जाता", "वह जाएगा"],
        "answer_hi": "वह गया है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "संदिग्ध वर्तमान काल का उदाहरण क्या है?",
        "options_hi": ["वह जाता होगा", "वह जाता", "वह जा रहा", "वह गया"],
        "answer_hi": "वह जाता होगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "संभाव्य वर्तमान काल का उदाहरण क्या है?",
        "options_hi": ["वह जाता हो", "वह जाता", "वह जा रहा", "वह गया"],
        "answer_hi": "वह जाता हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "सामान्य भविष्यत् काल का उदाहरण क्या है?",
        "options_hi": ["वह जाएगा", "वह जाता", "वह जा रहा", "वह गया"],
        "answer_hi": "वह जाएगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "संभाव्य भविष्यत् काल का उदाहरण क्या है?",
        "options_hi": ["वह जाए", "वह जाएगा", "वह जाता", "वह गया"],
        "answer_hi": "वह जाए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "ह्रस्व स्वर कितने होते हैं?",
        "options_hi": ["तीन", "चार", "पाँच", "छह"],
        "answer_hi": "तीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "दीर्घ स्वर कितने होते हैं?",
        "options_hi": ["सात", "आठ", "नौ", "दस"],
        "answer_hi": "सात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "संयुक्त स्वर कितने होते हैं?",
        "options_hi": ["दो", "तीन", "चार", "पाँच"],
        "answer_hi": "दो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "अयोगवाह कितने होते हैं?",
        "options_hi": ["दो", "तीन", "चार", "पाँच"],
        "answer_hi": "दो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "स्पर्श व्यंजन कितने होते हैं?",
        "options_hi": ["पच्चीस", "बीस", "पंद्रह", "दस"],
        "answer_hi": "पच्चीस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "अंतःस्थ व्यंजन कितने होते हैं?",
        "options_hi": ["चार", "तीन", "पाँच", "छह"],
        "answer_hi": "चार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "ऊष्म व्यंजन कितने होते हैं?",
        "options_hi": ["चार", "तीन", "पाँच", "छह"],
        "answer_hi": "चार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "अनुनासिक व्यंजन कितने होते हैं?",
        "options_hi": ["पाँच", "चार", "तीन", "छह"],
        "answer_hi": "पाँच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "व्यंजन के कितने भेद होते हैं?",
        "options_hi": ["तीन", "चार", "पाँच", "छह"],
        "answer_hi": "तीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "संयुक्त व्यंजन कितने होते हैं?",
        "options_hi": ["चार", "तीन", "पाँच", "छह"],
        "answer_hi": "चार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "द्विगु समास का उदाहरण क्या है?",
        "options_hi": ["पंचवटी", "रामायण", "विद्यालय", "पुस्तकालय"],
        "answer_hi": "पंचवटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "द्वंद्व समास का उदाहरण क्या है?",
        "options_hi": ["माता-पिता", "विद्यालय", "रसोईघर", "पंचवटी"],
        "answer_hi": "माता-पिता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "तत्पुरुष समास का उदाहरण क्या है?",
        "options_hi": ["रसोईघर", "माता-पिता", "पंचवटी", "देशप्रेम"],
        "answer_hi": "रसोईघर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "बहुव्रीहि समास का उदाहरण क्या है?",
        "options_hi": ["चंद्रमुख", "रसोईघर", "माता-पिता", "पंचवटी"],
        "answer_hi": "चंद्रमुख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "कर्मधारय समास का उदाहरण क्या है?",
        "options_hi": ["नीलकंठ", "रसोईघर", "माता-पिता", "पंचवटी"],
        "answer_hi": "नीलकंठ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "अव्ययीभाव समास का उदाहरण क्या है?",
        "options_hi": ["यथाशक्ति", "रसोईघर", "माता-पिता", "नीलकंठ"],
        "answer_hi": "यथाशक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "लिंग के कितने भेद होते हैं?",
        "options_hi": ["तीन", "दो", "चार", "पाँच"],
        "answer_hi": "तीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "वचन के कितने भेद होते हैं?",
        "options_hi": ["दो", "तीन", "चार", "पाँच"],
        "answer_hi": "दो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "कारक के कितने भेद होते हैं?",
        "options_hi": ["आठ", "सात", "छह", "पाँच"],
        "answer_hi": "आठ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "विभक्ति किसे कहते हैं?",
        "options_hi": ["कारक के चिह्न", "वचन के चिह्न", "लिंग के चिह्न", "काल के चिह्न"],
        "answer_hi": "कारक के चिह्न",
        "attempted": false,
        "selected": ""
    }
];
// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "hindi";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

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
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
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

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
            return;
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // Calculate time spent
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // Save to localStorage
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }
        } else {
            notAttempted++;
        }

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    // Save result data
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // Stop camera stream if active
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }

    // Redirect
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.background = color;
        circle.textContent = i + 1;
        circle.onclick = () => jumpToQuestion(i);
        nav.appendChild(circle);
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA ----------------------
let videoStream;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};