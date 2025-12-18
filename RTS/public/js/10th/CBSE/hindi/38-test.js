const questions = [
    {
        "num": 1,
        "question_hi": "व्याकरण में 'पद' का क्या अर्थ है?",
        "options_hi": ["शब्द", "वाक्य", "अर्थ", "विभक्ति"],
        "answer_hi": "शब्द",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "पद विचार का अध्ययन किसके अंतर्गत किया जाता है?",
        "options_hi": ["व्याकरण", "साहित्य", "काव्य", "नाटक"],
        "answer_hi": "व्याकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "किसी शब्द का वाक्य में प्रयुक्त रूप क्या कहलाता है?",
        "options_hi": ["पद", "शब्द", "वाक्यांश", "अक्षर"],
        "answer_hi": "पद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "पद के कितने भेद होते हैं?",
        "options_hi": ["दो", "तीन", "चार", "पाँच"],
        "answer_hi": "दो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "पद के दो मुख्य भेद कौन-से हैं?",
        "options_hi": ["सार्थक और निरर्थक", "विकारी और अविकारी", "संज्ञा और सर्वनाम", "क्रिया और विशेषण"],
        "answer_hi": "विकारी और अविकारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "विकारी पद किसे कहते हैं?",
        "options_hi": ["जो रूप बदलते हैं", "जो नहीं बदलते", "जो अर्थहीन हैं", "जो संक्षिप्त हैं"],
        "answer_hi": "जो रूप बदलते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "अविकारी पद किसे कहते हैं?",
        "options_hi": ["जो रूप नहीं बदलते", "जो बदलते हैं", "जो अर्थहीन हैं", "जो लंबे हैं"],
        "answer_hi": "जो रूप नहीं बदलते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "विकारी पद के कितने भेद होते हैं?",
        "options_hi": ["चार", "पाँच", "छह", "सात"],
        "answer_hi": "चार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "विकारी पद के भेद कौन-से हैं?",
        "options_hi": ["संज्ञा, सर्वनाम, विशेषण, क्रिया", "क्रिया विशेषण, समुच्चयबोधक", "संबंधबोधक, विस्मयादिबोधक", "उपसर्ग, प्रत्यय"],
        "answer_hi": "संज्ञा, सर्वनाम, विशेषण, क्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "अविकारी पद के कितने भेद होते हैं?",
        "options_hi": ["चार", "पाँच", "छह", "सात"],
        "answer_hi": "चार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "अविकारी पद के भेद कौन-से हैं?",
        "options_hi": ["क्रिया विशेषण, समुच्चयबोधक, संबंधबोधक, विस्मयादिबोधक", "संज्ञा, सर्वनाम, विशेषण, क्रिया", "लिंग, वचन, कारक, काल", "उपसर्ग, प्रत्यय, समास, संधि"],
        "answer_hi": "क्रिया विशेषण, समुच्चयबोधक, संबंधबोधक, विस्मयादिबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "संज्ञा पद किसे कहते हैं?",
        "options_hi": ["व्यक्ति, वस्तु, स्थान के नाम", "सर्वनाम के स्थान पर", "क्रिया का वर्णन", "विशेषण का काम"],
        "answer_hi": "व्यक्ति, वस्तु, स्थान के नाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "सर्वनाम पद किसे कहते हैं?",
        "options_hi": ["संज्ञा के स्थान पर प्रयुक्त शब्द", "क्रिया का वर्णन", "विशेषण का काम", "अविकारी शब्द"],
        "answer_hi": "संज्ञा के स्थान पर प्रयुक्त शब्द",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "विशेषण पद किसे कहते हैं?",
        "options_hi": ["संज्ञा या सर्वनाम की विशेषता बताने वाला", "क्रिया का वर्णन", "अविकारी शब्द", "समुच्चयबोधक"],
        "answer_hi": "संज्ञा या सर्वनाम की विशेषता बताने वाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "क्रिया पद किसे कहते हैं?",
        "options_hi": ["कार्य का बोध कराने वाला", "विशेषता बताने वाला", "संज्ञा के स्थान पर", "अविकारी शब्द"],
        "answer_hi": "कार्य का बोध कराने वाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "क्रिया विशेषण पद किसे कहते हैं?",
        "options_hi": ["क्रिया की विशेषता बताने वाला", "संज्ञा की विशेषता", "सर्वनाम का काम", "विकारी पद"],
        "answer_hi": "क्रिया की विशेषता बताने वाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "समुच्चयबोधक पद किसे कहते हैं?",
        "options_hi": ["दो शब्दों या वाक्यों को जोड़ने वाला", "क्रिया की विशेषता बताने वाला", "संबंध बताने वाला", "भाव व्यक्त करने वाला"],
        "answer_hi": "दो शब्दों या वाक्यों को जोड़ने वाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "संबंधबोधक पद किसे कहते हैं?",
        "options_hi": ["संज्ञा या सर्वनाम का संबंध बताने वाला", "क्रिया की विशेषता", "शब्दों को जोड़ने वाला", "भाव व्यक्त करने वाला"],
        "answer_hi": "संज्ञा या सर्वनाम का संबंध बताने वाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "विस्मयादिबोधक पद किसे कहते हैं?",
        "options_hi": ["आश्चर्य, हर्ष, शोक आदि भाव व्यक्त करने वाला", "क्रिया की विशेषता", "संबंध बताने वाला", "शब्दों को जोड़ने वाला"],
        "answer_hi": "आश्चर्य, हर्ष, शोक आदि भाव व्यक्त करने वाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "पद-परिचय में किसका विवरण दिया जाता है?",
        "options_hi": ["पद के सभी व्याकरणिक लक्षणों का", "केवल अर्थ का", "केवल भेद का", "केवल रूप का"],
        "answer_hi": "पद के सभी व्याकरणिक लक्षणों का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "पद-परिचय में सर्वप्रथम क्या बताया जाता है?",
        "options_hi": ["पद का भेद", "पद का अर्थ", "पद का वाक्य", "पद का लेखक"],
        "answer_hi": "पद का भेद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "संज्ञा पद का परिचय देते समय क्या बताया जाता है?",
        "options_hi": ["संज्ञा के भेद, लिंग, वचन, कारक", "केवल अर्थ", "केवल लिंग", "केवल वचन"],
        "answer_hi": "संज्ञा के भेद, लिंग, वचन, कारक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "सर्वनाम पद का परिचय देते समय क्या बताया जाता है?",
        "options_hi": ["सर्वनाम के भेद, पुरुष, वचन, कारक", "केवल अर्थ", "केवल पुरुष", "केवल भेद"],
        "answer_hi": "सर्वनाम के भेद, पुरुष, वचन, कारक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "विशेषण पद का परिचय देते समय क्या बताया जाता है?",
        "options_hi": ["विशेषण के भेद, लिंग, वचन, विशेष्य", "केवल अर्थ", "केवल भेद", "केवल विशेष्य"],
        "answer_hi": "विशेषण के भेद, लिंग, वचन, विशेष्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "क्रिया पद का परिचय देते समय क्या बताया जाता है?",
        "options_hi": ["क्रिया के भेद, वाच्य, काल, पुरुष, वचन", "केवल अर्थ", "केवल काल", "केवल भेद"],
        "answer_hi": "क्रिया के भेद, वाच्य, काल, पुरुष, वचन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "क्रिया विशेषण पद का परिचय देते समय क्या बताया जाता है?",
        "options_hi": ["क्रिया विशेषण के भेद और विशेष्य", "केवल अर्थ", "केवल भेद", "केवल विशेष्य"],
        "answer_hi": "क्रिया विशेषण के भेद और विशेष्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "समुच्चयबोधक पद का परिचय देते समय क्या बताया जाता है?",
        "options_hi": ["समुच्चयबोधक के भेद और संयुक्त पद", "केवल अर्थ", "केवल भेद", "केवल संयुक्त पद"],
        "answer_hi": "समुच्चयबोधक के भेद और संयुक्त पद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "संबंधबोधक पद का परिचय देते समय क्या बताया जाता है?",
        "options_hi": ["संबंधबोधक के भेद और संबंधी पद", "केवल अर्थ", "केवल भेद", "केवल संबंधी पद"],
        "answer_hi": "संबंधबोधक के भेद और संबंधी पद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "विस्मयादिबोधक पद का परिचय देते समय क्या बताया जाता है?",
        "options_hi": ["विस्मयादिबोधक के भेद और भाव", "केवल अर्थ", "केवल भेद", "केवल भाव"],
        "answer_hi": "विस्मयादिबोधक के भेद और भाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "पद-परिचय का क्या उपयोग है?",
        "options_hi": ["व्याकरणिक ज्ञान बढ़ाना", "कविता लिखना", "कहानी सुनाना", "निबंध लिखना"],
        "answer_hi": "व्याकरणिक ज्ञान बढ़ाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "'राम' शब्द वाक्य में प्रयुक्त होने पर क्या कहलाएगा?",
        "options_hi": ["पद", "शब्द", "वाक्य", "वाक्यांश"],
        "answer_hi": "पद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "कौन-सा पद विकारी नहीं है?",
        "options_hi": ["क्रिया विशेषण", "संज्ञा", "सर्वनाम", "विशेषण"],
        "answer_hi": "क्रिया विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "कौन-सा पद अविकारी है?",
        "options_hi": ["और", "लड़का", "सुंदर", "पढ़ता"],
        "answer_hi": "और",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "'वह' शब्द किस प्रकार का पद है?",
        "options_hi": ["सर्वनाम", "संज्ञा", "विशेषण", "क्रिया"],
        "answer_hi": "सर्वनाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "'तेज' शब्द किस प्रकार का पद हो सकता है?",
        "options_hi": ["विशेषण या क्रिया विशेषण", "केवल संज्ञा", "केवल सर्वनाम", "केवल क्रिया"],
        "answer_hi": "विशेषण या क्रिया विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "'धीरे' शब्द किस प्रकार का पद है?",
        "options_hi": ["क्रिया विशेषण", "संज्ञा", "सर्वनाम", "विशेषण"],
        "answer_hi": "क्रिया विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "'किंतु' शब्द किस प्रकार का पद है?",
        "options_hi": ["समुच्चयबोधक", "संबंधबोधक", "विस्मयादिबोधक", "क्रिया विशेषण"],
        "answer_hi": "समुच्चयबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "'में' शब्द किस प्रकार का पद है?",
        "options_hi": ["संबंधबोधक", "समुच्चयबोधक", "विस्मयादिबोधक", "क्रिया विशेषण"],
        "answer_hi": "संबंधबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "'अरे!' शब्द किस प्रकार का पद है?",
        "options_hi": ["विस्मयादिबोधक", "समुच्चयबोधक", "संबंधबोधक", "क्रिया विशेषण"],
        "answer_hi": "विस्मयादिबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "पद और शब्द में क्या अंतर है?",
        "options_hi": ["शब्द वाक्य में प्रयुक्त होने पर पद कहलाता है", "दोनों समान हैं", "पद छोटा होता है", "शब्द बड़ा होता है"],
        "answer_hi": "शब्द वाक्य में प्रयुक्त होने पर पद कहलाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "वाक्य में प्रत्येक पद का क्या महत्व है?",
        "options_hi": ["अर्थ निर्धारण", "सजावट", "लंबाई बढ़ाना", "कविता बनाना"],
        "answer_hi": "अर्थ निर्धारण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "पद-विचार का अध्ययन क्यों आवश्यक है?",
        "options_hi": ["भाषा की शुद्धता के लिए", "कविता लिखने के लिए", "गाना गाने के लिए", "नृत्य करने के लिए"],
        "answer_hi": "भाषा की शुद्धता के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "किस पद का रूप लिंग, वचन और कारक के अनुसार बदलता है?",
        "options_hi": ["संज्ञा", "क्रिया विशेषण", "समुच्चयबोधक", "विस्मयादिबोधक"],
        "answer_hi": "संज्ञा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "किस पद का रूप पुरुष, वचन और कारक के अनुसार बदलता है?",
        "options_hi": ["सर्वनाम", "क्रिया विशेषण", "संबंधबोधक", "विस्मयादिबोधक"],
        "answer_hi": "सर्वनाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "किस पद का रूप विशेष्य के लिंग और वचन के अनुसार बदलता है?",
        "options_hi": ["विशेषण", "क्रिया विशेषण", "समुच्चयबोधक", "संबंधबोधक"],
        "answer_hi": "विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "किस पद का रूप काल, पुरुष और वचन के अनुसार बदलता है?",
        "options_hi": ["क्रिया", "क्रिया विशेषण", "समुच्चयबोधक", "विस्मयादिबोधक"],
        "answer_hi": "क्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "कौन-से पद का रूप नहीं बदलता?",
        "options_hi": ["अविकारी पद", "विकारी पद", "संज्ञा", "सर्वनाम"],
        "answer_hi": "अविकारी पद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "पद-विचार किस भाषा के अध्ययन में महत्वपूर्ण है?",
        "options_hi": ["सभी भाषाओं में", "केवल अंग्रेजी में", "केवल संस्कृत में", "केवल उर्दू में"],
        "answer_hi": "सभी भाषाओं में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "पद-परिचय में 'लिंग' किस पद के लिए बताया जाता है?",
        "options_hi": ["संज्ञा, सर्वनाम, विशेषण", "क्रिया विशेषण", "समुच्चयबोधक", "संबंधबोधक"],
        "answer_hi": "संज्ञा, सर्वनाम, विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "पद-परिचय में 'वचन' किस पद के लिए बताया जाता है?",
        "options_hi": ["संज्ञा, सर्वनाम, विशेषण, क्रिया", "क्रिया विशेषण", "समुच्चयबोधक", "विस्मयादिबोधक"],
        "answer_hi": "संज्ञा, सर्वनाम, विशेषण, क्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "पद-परिचय में 'कारक' किस पद के लिए बताया जाता है?",
        "options_hi": ["संज्ञा और सर्वनाम", "विशेषण", "क्रिया", "क्रिया विशेषण"],
        "answer_hi": "संज्ञा और सर्वनाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "पद-परिचय में 'विशेष्य' किस पद के लिए बताया जाता है?",
        "options_hi": ["विशेषण", "संज्ञा", "सर्वनाम", "क्रिया"],
        "answer_hi": "विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "पद-परिचय में 'काल' किस पद के लिए बताया जाता है?",
        "options_hi": ["क्रिया", "संज्ञा", "सर्वनाम", "विशेषण"],
        "answer_hi": "क्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "पद-परिचय में 'पुरुष' किस पद के लिए बताया जाता है?",
        "options_hi": ["सर्वनाम और क्रिया", "संज्ञा", "विशेषण", "क्रिया विशेषण"],
        "answer_hi": "सर्वनाम और क्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "पद-परिचय में 'वाच्य' किस पद के लिए बताया जाता है?",
        "options_hi": ["क्रिया", "संज्ञा", "सर्वनाम", "विशेषण"],
        "answer_hi": "क्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "पद-परिचय में 'भाव' किस पद के लिए बताया जाता है?",
        "options_hi": ["विस्मयादिबोधक", "समुच्चयबोधक", "संबंधबोधक", "क्रिया विशेषण"],
        "answer_hi": "विस्मयादिबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "'लड़का पढ़ता है' - इस वाक्य में 'लड़का' किस प्रकार का पद है?",
        "options_hi": ["संज्ञा", "सर्वनाम", "विशेषण", "क्रिया"],
        "answer_hi": "संज्ञा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "'वह गाता है' - इस वाक्य में 'वह' किस प्रकार का पद है?",
        "options_hi": ["सर्वनाम", "संज्ञा", "विशेषण", "क्रिया"],
        "answer_hi": "सर्वनाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "'सुंदर फूल' - इस वाक्यांश में 'सुंदर' किस प्रकार का पद है?",
        "options_hi": ["विशेषण", "संज्ञा", "सर्वनाम", "क्रिया"],
        "answer_hi": "विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "'राम पढ़ता है' - इस वाक्य में 'पढ़ता' किस प्रकार का पद है?",
        "options_hi": ["क्रिया", "संज्ञा", "सर्वनाम", "विशेषण"],
        "answer_hi": "क्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "'वह तेज दौड़ता है' - इस वाक्य में 'तेज' किस प्रकार का पद है?",
        "options_hi": ["क्रिया विशेषण", "संज्ञा", "सर्वनाम", "विशेषण"],
        "answer_hi": "क्रिया विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "'राम और श्याम' - इस वाक्यांश में 'और' किस प्रकार का पद है?",
        "options_hi": ["समुच्चयबोधक", "संबंधबोधक", "विस्मयादिबोधक", "क्रिया विशेषण"],
        "answer_hi": "समुच्चयबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "'मेज पर किताब है' - इस वाक्य में 'पर' किस प्रकार का पद है?",
        "options_hi": ["संबंधबोधक", "समुच्चयबोधक", "विस्मयादिबोधक", "क्रिया विशेषण"],
        "answer_hi": "संबंधबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "'अहा! क्या दृश्य है' - इस वाक्य में 'अहा!' किस प्रकार का पद है?",
        "options_hi": ["विस्मयादिबोधक", "समुच्चयबोधक", "संबंधबोधक", "क्रिया विशेषण"],
        "answer_hi": "विस्मयादिबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "पद-विचार का सम्बन्ध किससे है?",
        "options_hi": ["व्याकरण से", "साहित्य से", "इतिहास से", "भूगोल से"],
        "answer_hi": "व्याकरण से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "किसी पद का व्याकरणिक विश्लेषण क्या कहलाता है?",
        "options_hi": ["पद-परिचय", "शब्द-भेद", "वाक्य-विचार", "अलंकार"],
        "answer_hi": "पद-परिचय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "पद-विचार का ज्ञान किसके लिए उपयोगी है?",
        "options_hi": ["भाषा सीखने वालों के लिए", "केवल कवियों के लिए", "केवल शिक्षकों के लिए", "केवल छात्रों के लिए"],
        "answer_hi": "भाषा सीखने वालों के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "वाक्य के सभी पदों का विश्लेषण क्या कहलाता है?",
        "options_hi": ["पद-परिचय", "वाक्य-विचार", "शब्द-भेद", "समास-विग्रह"],
        "answer_hi": "पद-परिचय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "पद-विचार में किस बात पर ध्यान दिया जाता है?",
        "options_hi": ["पद के व्याकरणिक गुण", "पद का सौंदर्य", "पद की लंबाई", "पद का उच्चारण"],
        "answer_hi": "पद के व्याकरणिक गुण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "कौन-सा पद संज्ञा का काम करता है?",
        "options_hi": ["सर्वनाम", "विशेषण", "क्रिया", "क्रिया विशेषण"],
        "answer_hi": "सर्वनाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "कौन-सा पद संज्ञा या सर्वनाम की विशेषता बताता है?",
        "options_hi": ["विशेषण", "क्रिया", "समुच्चयबोधक", "संबंधबोधक"],
        "answer_hi": "विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "कौन-सा पद कार्य का बोध कराता है?",
        "options_hi": ["क्रिया", "संज्ञा", "सर्वनाम", "विशेषण"],
        "answer_hi": "क्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "कौन-सा पद क्रिया की विशेषता बताता है?",
        "options_hi": ["क्रिया विशेषण", "विशेषण", "संज्ञा", "सर्वनाम"],
        "answer_hi": "क्रिया विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "कौन-सा पद शब्दों या वाक्यों को जोड़ता है?",
        "options_hi": ["समुच्चयबोधक", "संबंधबोधक", "विस्मयादिबोधक", "क्रिया विशेषण"],
        "answer_hi": "समुच्चयबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "कौन-सा पद संबंध बताता है?",
        "options_hi": ["संबंधबोधक", "समुच्चयबोधक", "विस्मयादिबोधक", "क्रिया विशेषण"],
        "answer_hi": "संबंधबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "कौन-सा पद भाव व्यक्त करता है?",
        "options_hi": ["विस्मयादिबोधक", "समुच्चयबोधक", "संबंधबोधक", "क्रिया विशेषण"],
        "answer_hi": "विस्मयादिबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "पद-विचार का प्रमुख उद्देश्य क्या है?",
        "options_hi": ["भाषा की संरचना समझना", "कविता लिखना", "गद्य लिखना", "भाषण देना"],
        "answer_hi": "भाषा की संरचना समझना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "पद-परिचय में किस बात का उल्लेख नहीं किया जाता?",
        "options_hi": ["पद का सौंदर्य", "पद का भेद", "पद का लिंग", "पद का वचन"],
        "answer_hi": "पद का सौंदर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "किस पद के लिए 'विशेष्य' बताना आवश्यक है?",
        "options_hi": ["विशेषण", "संज्ञा", "सर्वनाम", "क्रिया"],
        "answer_hi": "विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "किस पद के लिए 'संयुक्त पद' बताना आवश्यक है?",
        "options_hi": ["समुच्चयबोधक", "संबंधबोधक", "विस्मयादिबोधक", "क्रिया विशेषण"],
        "answer_hi": "समुच्चयबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "किस पद के लिए 'संबंधी पद' बताना आवश्यक है?",
        "options_hi": ["संबंधबोधक", "समुच्चयबोधक", "विस्मयादिबोधक", "क्रिया विशेषण"],
        "answer_hi": "संबंधबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "किस पद के लिए 'भाव' बताना आवश्यक है?",
        "options_hi": ["विस्मयादिबोधक", "समुच्चयबोधक", "संबंधबोधक", "क्रिया विशेषण"],
        "answer_hi": "विस्मयादिबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "पद-विचार का ज्ञान किस विषय में सहायक है?",
        "options_hi": ["भाषा शिक्षण", "गणित", "विज्ञान", "चित्रकला"],
        "answer_hi": "भाषा शिक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "पद-परिचय देते समय किसका ध्यान रखना चाहिए?",
        "options_hi": ["व्याकरणिक नियम", "कविता का तुक", "गद्य का प्रवाह", "भाषण का ढंग"],
        "answer_hi": "व्याकरणिक नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "पद-विचार का अध्ययन किस स्तर पर किया जाता है?",
        "options_hi": ["प्राथमिक से उच्च स्तर तक", "केवल प्राथमिक", "केवल उच्च", "केवल स्नातक"],
        "answer_hi": "प्राथमिक से उच्च स्तर तक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "कौन-सा पद वाक्य में स्वतंत्र रूप से प्रयुक्त होता है?",
        "options_hi": ["सभी पद", "केवल संज्ञा", "केवल क्रिया", "केवल विशेषण"],
        "answer_hi": "सभी पद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "पद-विचार में किस प्रकार के प्रश्न पूछे जाते हैं?",
        "options_hi": ["पद का भेद, लिंग, वचन आदि", "पद का अर्थ", "पद का इतिहास", "पद का उच्चारण"],
        "answer_hi": "पद का भेद, लिंग, वचन आदि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "पद-परिचय की प्रक्रिया क्या है?",
        "options_hi": ["व्यवस्थित विश्लेषण", "अनुमान", "कल्पना", "अनुकरण"],
        "answer_hi": "व्यवस्थित विश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "पद-विचार का महत्व क्या है?",
        "options_hi": ["भाषा की शुद्धता", "कविता रचना", "गद्य लेखन", "वार्तालाप"],
        "answer_hi": "भाषा की शुद्धता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "किस पद के विभिन्न रूप होते हैं?",
        "options_hi": ["विकारी पद", "अविकारी पद", "क्रिया विशेषण", "समुच्चयबोधक"],
        "answer_hi": "विकारी पद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "किस पद के एक ही रूप होता है?",
        "options_hi": ["अविकारी पद", "विकारी पद", "संज्ञा", "सर्वनाम"],
        "answer_hi": "अविकारी पद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "पद-विचार का सम्बन्ध किस विचार से है?",
        "options_hi": ["वाक्य विचार", "ध्वनि विचार", "अर्थ विचार", "लेखन विचार"],
        "answer_hi": "वाक्य विचार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "पद-परिचय किस भाषा में दिया जाता है?",
        "options_hi": ["हिंदी", "अंग्रेजी", "संस्कृत", "कोई भी भाषा"],
        "answer_hi": "हिंदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "पद-विचार के अंतर्गत किसका अध्ययन किया जाता है?",
        "options_hi": ["पद के सभी पहलू", "केवल अर्थ", "केवल उच्चारण", "केवल लेखन"],
        "answer_hi": "पद के सभी पहलू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "पद-विचार की सहायता से क्या समझा जा सकता है?",
        "options_hi": ["वाक्य संरचना", "कविता का भाव", "गद्य का प्रवाह", "नाटक का कथानक"],
        "answer_hi": "वाक्य संरचना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "पद-विचार किस प्रकार के ज्ञान को बढ़ाता है?",
        "options_hi": ["व्याकरणिक ज्ञान", "साहित्यिक ज्ञान", "ऐतिहासिक ज्ञान", "वैज्ञानिक ज्ञान"],
        "answer_hi": "व्याकरणिक ज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "पद-विचार का प्रयोग कहाँ किया जाता है?",
        "options_hi": ["भाषा शिक्षण में", "गणित में", "विज्ञान में", "कला में"],
        "answer_hi": "भाषा शिक्षण में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "पद-विचार की आवश्यकता क्यों है?",
        "options_hi": ["भाषा समझने के लिए", "कविता लिखने के लिए", "गाना गाने के लिए", "नृत्य करने के लिए"],
        "answer_hi": "भाषा समझने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "पद-विचार का मुख्य उद्देश्य क्या है?",
        "options_hi": ["भाषा का व्याकरणिक विश्लेषण", "साहित्य रचना", "काव्य निर्माण", "नाटक लेखन"],
        "answer_hi": "भाषा का व्याकरणिक विश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "पद-विचार का अध्ययन किसे कहते हैं?",
        "options_hi": ["पदों का व्याकरणिक विश्लेषण", "शब्दों का संग्रह", "वाक्यों का निर्माण", "भाषा का इतिहास"],
        "answer_hi": "पदों का व्याकरणिक विश्लेषण",
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