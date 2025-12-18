const questions = [
    {
        "num": 1,
        "question_hi": "व्याकरण में शब्द के कितने मुख्य भेद माने जाते हैं?",
        "options_hi": ["पाँच", "चार", "छह", "सात"],
        "answer_hi": "पाँच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "संज्ञा की परिभाषा क्या है?",
        "options_hi": ["किसी व्यक्ति, वस्तु, स्थान या भाव का नाम", "क्रिया की विशेषता", "संज्ञा के स्थान पर प्रयुक्त शब्द", "शब्दों का संयोजन"],
        "answer_hi": "किसी व्यक्ति, वस्तु, स्थान या भाव का नाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "सर्वनाम का शाब्दिक अर्थ क्या है?",
        "options_hi": ["नाम के बदले", "विशेष नाम", "क्रिया का नाम", "गुण का नाम"],
        "answer_hi": "नाम के बदले",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "विशेषण शब्दों का मुख्य कार्य क्या है?",
        "options_hi": ["संज्ञा या सर्वनाम की विशेषता बताना", "क्रिया का समय बताना", "वाक्य को जोड़ना", "भाव प्रकट करना"],
        "answer_hi": "संज्ञा या सर्वनाम की विशेषता बताना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "क्रिया शब्दों का प्रयोग किस लिए होता है?",
        "options_hi": ["किसी कार्य या अवस्था का बोध कराने के लिए", "नाम बताने के लिए", "गुण बताने के लिए", "संबंध बताने के लिए"],
        "answer_hi": "किसी कार्य या अवस्था का बोध कराने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "अव्यय शब्दों की प्रमुख विशेषता क्या है?",
        "options_hi": ["इनके रूप में परिवर्तन नहीं होता", "ये हमेशा बदलते रहते हैं", "ये केवल संज्ञा के साथ आते हैं", "ये वचन बदलते हैं"],
        "answer_hi": "इनके रूप में परिवर्तन नहीं होता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "किसी विशेष व्यक्ति, वस्तु या स्थान के नाम को क्या कहते हैं?",
        "options_hi": ["व्यक्तिवाचक संज्ञा", "जातिवाचक संज्ञा", "भाववाचक संज्ञा", "समूहवाचक संज्ञा"],
        "answer_hi": "व्यक्तिवाचक संज्ञा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "सामान्य वर्ग या जाति का बोध कराने वाली संज्ञा क्या कहलाती है?",
        "options_hi": ["जातिवाचक संज्ञा", "व्यक्तिवाचक संज्ञा", "द्रव्यवाचक संज्ञा", "भाववाचक संज्ञा"],
        "answer_hi": "जातिवाचक संज्ञा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "भाव, गुण या दशा का बोध कराने वाली संज्ञा क्या कहलाती है?",
        "options_hi": ["भाववाचक संज्ञा", "जातिवाचक संज्ञा", "समूहवाचक संज्ञा", "द्रव्यवाचक संज्ञा"],
        "answer_hi": "भाववाचक संज्ञा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "किसी समूह या समुदाय का बोध कराने वाली संज्ञा क्या कहलाती है?",
        "options_hi": ["समूहवाचक संज्ञा", "भाववाचक संज्ञा", "जातिवाचक संज्ञा", "व्यक्तिवाचक संज्ञा"],
        "answer_hi": "समूहवाचक संज्ञा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "धातु, द्रव्य या पदार्थ का बोध कराने वाली संज्ञा क्या कहलाती है?",
        "options_hi": ["द्रव्यवाचक संज्ञा", "भाववाचक संज्ञा", "समूहवाचक संज्ञा", "जातिवाचक संज्ञा"],
        "answer_hi": "द्रव्यवाचक संज्ञा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "वक्ता या बोलने वाले के लिए प्रयुक्त सर्वनाम क्या कहलाता है?",
        "options_hi": ["उत्तम पुरुष", "मध्यम पुरुष", "अन्य पुरुष", "निजवाचक"],
        "answer_hi": "उत्तम पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "सुनने वाले या श्रोता के लिए प्रयुक्त सर्वनाम क्या कहलाता है?",
        "options_hi": ["मध्यम पुरुष", "उत्तम पुरुष", "अन्य पुरुष", "निश्चयवाचक"],
        "answer_hi": "मध्यम पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "जिस व्यक्ति या वस्तु के बारे में बात की जाए, उसके लिए प्रयुक्त सर्वनाम क्या कहलाता है?",
        "options_hi": ["अन्य पुरुष", "उत्तम पुरुष", "मध्यम पुरुष", "प्रश्नवाचक"],
        "answer_hi": "अन्य पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "वक्ता द्वारा स्वयं के लिए प्रयुक्त सर्वनाम क्या कहलाता है?",
        "options_hi": ["निजवाचक", "निश्चयवाचक", "अनिश्चयवाचक", "सम्बन्धवाचक"],
        "answer_hi": "निजवाचक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "निकट या दूर की वस्तु का निश्चयपूर्वक बोध कराने वाला सर्वनाम क्या कहलाता है?",
        "options_hi": ["निश्चयवाचक", "निजवाचक", "अनिश्चयवाचक", "प्रश्नवाचक"],
        "answer_hi": "निश्चयवाचक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "अनिश्चित व्यक्ति या वस्तु का बोध कराने वाला सर्वनाम क्या कहलाता है?",
        "options_hi": ["अनिश्चयवाचक", "निश्चयवाचक", "प्रश्नवाचक", "सम्बन्धवाचक"],
        "answer_hi": "अनिश्चयवाचक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "प्रश्न पूछने के लिए प्रयुक्त सर्वनाम क्या कहलाता है?",
        "options_hi": ["प्रश्नवाचक", "निश्चयवाचक", "अनिश्चयवाचक", "सम्बन्धवाचक"],
        "answer_hi": "प्रश्नवाचक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "दो वाक्यों या वस्तुओं के बीच संबंध बताने वाला सर्वनाम क्या कहलाता है?",
        "options_hi": ["सम्बन्धवाचक", "प्रश्नवाचक", "निश्चयवाचक", "अनिश्चयवाचक"],
        "answer_hi": "सम्बन्धवाचक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "गुण, रंग, आकार, स्थान आदि का बोध कराने वाला विशेषण क्या कहलाता है?",
        "options_hi": ["गुणवाचक विशेषण", "संख्यावाचक विशेषण", "परिमाणवाचक विशेषण", "सार्वनामिक विशेषण"],
        "answer_hi": "गुणवाचक विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "संख्या का बोध कराने वाला विशेषण क्या कहलाता है?",
        "options_hi": ["संख्यावाचक विशेषण", "गुणवाचक विशेषण", "परिमाणवाचक विशेषण", "सार्वनामिक विशेषण"],
        "answer_hi": "संख्यावाचक विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "मात्रा या परिमाण का बोध कराने वाला विशेषण क्या कहलाता है?",
        "options_hi": ["परिमाणवाचक विशेषण", "गुणवाचक विशेषण", "संख्यावाचक विशेषण", "सार्वनामिक विशेषण"],
        "answer_hi": "परिमाणवाचक विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "सर्वनाम के रूप में प्रयुक्त होने वाला विशेषण क्या कहलाता है?",
        "options_hi": ["सार्वनामिक विशेषण", "गुणवाचक विशेषण", "संख्यावाचक विशेषण", "परिमाणवाचक विशेषण"],
        "answer_hi": "सार्वनामिक विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "विशेषण की मूल अवस्था को क्या कहते हैं?",
        "options_hi": ["मूलावस्था", "तुलनात्मक अवस्था", "श्रेष्ठतम अवस्था", "सामान्य अवस्था"],
        "answer_hi": "मूलावस्था",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "विशेषण की तुलना करने वाली अवस्था को क्या कहते हैं?",
        "options_hi": ["तुलनात्मक अवस्था", "मूलावस्था", "श्रेष्ठतम अवस्था", "विशिष्ट अवस्था"],
        "answer_hi": "तुलनात्मक अवस्था",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "विशेषण की सबसे अधिक या सर्वश्रेष्ठ अवस्था को क्या कहते हैं?",
        "options_hi": ["श्रेष्ठतम अवस्था", "मूलावस्था", "तुलनात्मक अवस्था", "उत्कृष्ट अवस्था"],
        "answer_hi": "श्रेष्ठतम अवस्था",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "जिस क्रिया का फल कर्ता पर ही पड़े, उसे क्या कहते हैं?",
        "options_hi": ["अकर्मक क्रिया", "सकर्मक क्रिया", "द्विकर्मक क्रिया", "प्रेरणार्थक क्रिया"],
        "answer_hi": "अकर्मक क्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "जिस क्रिया का फल कर्म पर पड़े, उसे क्या कहते हैं?",
        "options_hi": ["सकर्मक क्रिया", "अकर्मक क्रिया", "द्विकर्मक क्रिया", "संयुक्त क्रिया"],
        "answer_hi": "सकर्मक क्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "जो क्रिया दो कर्म लेती है, उसे क्या कहते हैं?",
        "options_hi": ["द्विकर्मक क्रिया", "सकर्मक क्रिया", "अकर्मक क्रिया", "प्रेरणार्थक क्रिया"],
        "answer_hi": "द्विकर्मक क्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "जो क्रिया किसी कार्य को कराने का बोध कराए, उसे क्या कहते हैं?",
        "options_hi": ["प्रेरणार्थक क्रिया", "सकर्मक क्रिया", "अकर्मक क्रिया", "नामधातु क्रिया"],
        "answer_hi": "प्रेरणार्थक क्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "दो या दो से अधिक क्रियाओं के मेल से बनी क्रिया को क्या कहते हैं?",
        "options_hi": ["संयुक्त क्रिया", "प्रेरणार्थक क्रिया", "नामधातु क्रिया", "कृदंत क्रिया"],
        "answer_hi": "संयुक्त क्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "संज्ञा या विशेषण से बनी क्रिया को क्या कहते हैं?",
        "options_hi": ["नामधातु क्रिया", "संयुक्त क्रिया", "प्रेरणार्थक क्रिया", "कृदंत क्रिया"],
        "answer_hi": "नामधातु क्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "कृदंत प्रत्यय से बनी क्रिया को क्या कहते हैं?",
        "options_hi": ["कृदंत क्रिया", "नामधातु क्रिया", "संयुक्त क्रिया", "प्रेरणार्थक क्रिया"],
        "answer_hi": "कृदंत क्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "क्रिया का वह रूप जो समय का बोध कराए, उसे क्या कहते हैं?",
        "options_hi": ["काल", "वाच्य", "पुरुष", "लिंग"],
        "answer_hi": "काल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "क्रिया का वह रूप जो कर्ता, कर्म या भाव के अनुसार बदले, उसे क्या कहते हैं?",
        "options_hi": ["वाच्य", "काल", "पुरुष", "लिंग"],
        "answer_hi": "वाच्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "जब क्रिया का रूप कर्ता के अनुसार बदले, तो उसे क्या कहते हैं?",
        "options_hi": ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "सकर्मक वाच्य"],
        "answer_hi": "कर्तृवाच्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "जब क्रिया का रूप कर्म के अनुसार बदले, तो उसे क्या कहते हैं?",
        "options_hi": ["कर्मवाच्य", "कर्तृवाच्य", "भाववाच्य", "अकर्मक वाच्य"],
        "answer_hi": "कर्मवाच्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "जब क्रिया का रूप भाव के अनुसार बदले, तो उसे क्या कहते हैं?",
        "options_hi": ["भाववाच्य", "कर्तृवाच्य", "कर्मवाच्य", "विशेषण वाच्य"],
        "answer_hi": "भाववाच्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "क्रिया की विशेषता बताने वाले अव्यय को क्या कहते हैं?",
        "options_hi": ["क्रिया विशेषण", "संबंधबोधक", "समुच्चयबोधक", "विस्मयादिबोधक"],
        "answer_hi": "क्रिया विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "संज्ञा या सर्वनाम का संबंध वाक्य के अन्य शब्दों से बताने वाले अव्यय को क्या कहते हैं?",
        "options_hi": ["संबंधबोधक", "क्रिया विशेषण", "समुच्चयबोधक", "विस्मयादिबोधक"],
        "answer_hi": "संबंधबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "शब्दों, वाक्यांशों या वाक्यों को जोड़ने वाले अव्यय को क्या कहते हैं?",
        "options_hi": ["समुच्चयबोधक", "क्रिया विशेषण", "संबंधबोधक", "विस्मयादिबोधक"],
        "answer_hi": "समुच्चयबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "आश्चर्य, हर्ष, शोक आदि भाव प्रकट करने वाले अव्यय को क्या कहते हैं?",
        "options_hi": ["विस्मयादिबोधक", "क्रिया विशेषण", "संबंधबोधक", "समुच्चयबोधक"],
        "answer_hi": "विस्मयादिबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "क्रिया के ढंग या तरीके का बोध कराने वाले क्रिया विशेषण को क्या कहते हैं?",
        "options_hi": ["रीतिवाचक क्रिया विशेषण", "कालवाचक", "स्थानवाचक", "परिमाणवाचक"],
        "answer_hi": "रीतिवाचक क्रिया विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "क्रिया के समय का बोध कराने वाले क्रिया विशेषण को क्या कहते हैं?",
        "options_hi": ["कालवाचक क्रिया विशेषण", "रीतिवाचक", "स्थानवाचक", "परिमाणवाचक"],
        "answer_hi": "कालवाचक क्रिया विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "क्रिया के स्थान का बोध कराने वाले क्रिया विशेषण को क्या कहते हैं?",
        "options_hi": ["स्थानवाचक क्रिया विशेषण", "रीतिवाचक", "कालवाचक", "परिमाणवाचक"],
        "answer_hi": "स्थानवाचक क्रिया विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "क्रिया की मात्रा या परिमाण का बोध कराने वाले क्रिया विशेषण को क्या कहते हैं?",
        "options_hi": ["परिमाणवाचक क्रिया विशेषण", "रीतिवाचक", "कालवाचक", "स्थानवाचक"],
        "answer_hi": "परिमाणवाचक क्रिया विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "विशेषण की विशेषता बताने वाले शब्द क्या कहलाते हैं?",
        "options_hi": ["प्रविशेषण", "क्रिया विशेषण", "सर्वनाम", "संबंधबोधक"],
        "answer_hi": "प्रविशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "संज्ञा का लिंग निर्धारण करने वाले सामान्य नियम कितने हैं?",
        "options_hi": ["तीन", "दो", "चार", "पाँच"],
        "answer_hi": "तीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "संज्ञा का वचन कितने प्रकार का होता है?",
        "options_hi": ["दो", "तीन", "चार", "पाँच"],
        "answer_hi": "दो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "कारक के कितने भेद होते हैं?",
        "options_hi": ["आठ", "सात", "छह", "पाँच"],
        "answer_hi": "आठ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "कर्ता कारक का मुख्य कार्य क्या है?",
        "options_hi": ["क्रिया करने वाले का बोध", "क्रिया के लक्ष्य का बोध", "साधन का बोध", "संबंध का बोध"],
        "answer_hi": "क्रिया करने वाले का बोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "कर्म कारक का मुख्य कार्य क्या है?",
        "options_hi": ["क्रिया के लक्ष्य का बोध", "कर्ता का बोध", "साधन का बोध", "उद्देश्य का बोध"],
        "answer_hi": "क्रिया के लक्ष्य का बोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "करण कारक का मुख्य कार्य क्या है?",
        "options_hi": ["साधन या माध्यम का बोध", "कर्ता का बोध", "कर्म का बोध", "संबंध का बोध"],
        "answer_hi": "साधन या माध्यम का बोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "संप्रदान कारक का मुख्य कार्य क्या है?",
        "options_hi": ["उद्देश्य या हेतु का बोध", "कर्ता का बोध", "कर्म का बोध", "साधन का बोध"],
        "answer_hi": "उद्देश्य या हेतु का बोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "अपादान कारक का मुख्य कार्य क्या है?",
        "options_hi": ["अलग होने का बोध", "संबंध का बोध", "स्थान का बोध", "कर्ता का बोध"],
        "answer_hi": "अलग होने का बोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "संबंध कारक का मुख्य कार्य क्या है?",
        "options_hi": ["संबंध का बोध", "कर्ता का बोध", "कर्म का बोध", "साधन का बोध"],
        "answer_hi": "संबंध का बोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "अधिकरण कारक का मुख्य कार्य क्या है?",
        "options_hi": ["स्थान या समय का बोध", "कर्ता का बोध", "कर्म का बोध", "साधन का बोध"],
        "answer_hi": "स्थान या समय का बोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "संबोधन कारक का मुख्य कार्य क्या है?",
        "options_hi": ["संबोधित करने का बोध", "कर्ता का बोध", "कर्म का बोध", "संबंध का बोध"],
        "answer_hi": "संबोधित करने का बोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "विभक्ति किसे कहते हैं?",
        "options_hi": ["कारक के चिह्न", "वचन के चिह्न", "लिंग के चिह्न", "काल के चिह्न"],
        "answer_hi": "कारक के चिह्न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "समास किसे कहते हैं?",
        "options_hi": ["दो या अधिक शब्दों का संक्षिप्त रूप", "शब्द का विस्तार", "वाक्य का संक्षेप", "अर्थ का परिवर्तन"],
        "answer_hi": "दो या अधिक शब्दों का संक्षिप्त रूप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "समास के कितने भेद होते हैं?",
        "options_hi": ["छह", "पाँच", "चार", "तीन"],
        "answer_hi": "छह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "जहाँ उत्तरपद प्रधान हो, वह कौन सा समास होता है?",
        "options_hi": ["तत्पुरुष समास", "द्वंद्व समास", "कर्मधारय समास", "बहुव्रीहि समास"],
        "answer_hi": "तत्पुरुष समास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "जहाँ दोनों पद प्रधान हों, वह कौन सा समास होता है?",
        "options_hi": ["द्वंद्व समास", "तत्पुरुष समास", "कर्मधारय समास", "बहुव्रीहि समास"],
        "answer_hi": "द्वंद्व समास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "जहाँ विशेषण और विशेष्य का संबंध हो, वह कौन सा समास होता है?",
        "options_hi": ["कर्मधारय समास", "तत्पुरुष समास", "द्वंद्व समास", "बहुव्रीहि समास"],
        "answer_hi": "कर्मधारय समास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "जहाँ समस्त पद से नया अर्थ निकले, वह कौन सा समास होता है?",
        "options_hi": ["बहुव्रीहि समास", "तत्पुरुष समास", "द्वंद्व समास", "कर्मधारय समास"],
        "answer_hi": "बहुव्रीहि समास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "जहाँ पूर्वपद अव्यय हो, वह कौन सा समास होता है?",
        "options_hi": ["अव्ययीभाव समास", "तत्पुरुष समास", "द्विगु समास", "बहुव्रीहि समास"],
        "answer_hi": "अव्ययीभाव समास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "जहाँ संख्यावाचक शब्द हो, वह कौन सा समास होता है?",
        "options_hi": ["द्विगु समास", "तत्पुरुष समास", "द्वंद्व समास", "कर्मधारय समास"],
        "answer_hi": "द्विगु समास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "उपसर्ग किसे कहते हैं?",
        "options_hi": ["शब्द के आरंभ में जुड़ने वाला शब्दांश", "शब्द के अंत में जुड़ने वाला", "शब्द के बीच में जुड़ने वाला", "पृथक शब्द"],
        "answer_hi": "शब्द के आरंभ में जुड़ने वाला शब्दांश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "प्रत्यय किसे कहते हैं?",
        "options_hi": ["शब्द के अंत में जुड़ने वाला शब्दांश", "शब्द के आरंभ में जुड़ने वाला", "शब्द के बीच में जुड़ने वाला", "पृथक शब्द"],
        "answer_hi": "शब्द के अंत में जुड़ने वाला शब्दांश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "संधि किसे कहते हैं?",
        "options_hi": ["दो वर्णों का मेल", "शब्दों का मेल", "वाक्यों का मेल", "अर्थों का मेल"],
        "answer_hi": "दो वर्णों का मेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "संधि के कितने भेद होते हैं?",
        "options_hi": ["तीन", "दो", "चार", "पाँच"],
        "answer_hi": "तीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "स्वर संधि किसे कहते हैं?",
        "options_hi": ["दो स्वरों का मेल", "स्वर और व्यंजन का मेल", "दो व्यंजनों का मेल", "विसर्ग का मेल"],
        "answer_hi": "दो स्वरों का मेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "व्यंजन संधि किसे कहते हैं?",
        "options_hi": ["व्यंजन और स्वर या व्यंजन का मेल", "दो स्वरों का मेल", "विसर्ग का मेल", "अनुस्वार का मेल"],
        "answer_hi": "व्यंजन और स्वर या व्यंजन का मेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "विसर्ग संधि किसे कहते हैं?",
        "options_hi": ["विसर्ग और स्वर या व्यंजन का मेल", "दो स्वरों का मेल", "दो व्यंजनों का मेल", "अनुस्वार का मेल"],
        "answer_hi": "विसर्ग और स्वर या व्यंजन का मेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "समानार्थी शब्द किसे कहते हैं?",
        "options_hi": ["समान अर्थ वाले शब्द", "विपरीत अर्थ वाले", "एक से अधिक अर्थ वाले", "संकुचित अर्थ वाले"],
        "answer_hi": "समान अर्थ वाले शब्द",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "विलोम शब्द किसे कहते हैं?",
        "options_hi": ["विपरीत अर्थ वाले शब्द", "समान अर्थ वाले", "एक से अधिक अर्थ वाले", "विशेष अर्थ वाले"],
        "answer_hi": "विपरीत अर्थ वाले शब्द",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "अनेकार्थी शब्द किसे कहते हैं?",
        "options_hi": ["एक से अधिक अर्थ वाले शब्द", "एक अर्थ वाले", "विपरीत अर्थ वाले", "समान अर्थ वाले"],
        "answer_hi": "एक से अधिक अर्थ वाले शब्द",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "युग्म शब्द किसे कहते हैं?",
        "options_hi": ["जोड़े में प्रयुक्त होने वाले शब्द", "अकेले प्रयुक्त", "तीन शब्दों के जोड़े", "विपरीत शब्द"],
        "answer_hi": "जोड़े में प्रयुक्त होने वाले शब्द",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "तद्भव शब्द किसे कहते हैं?",
        "options_hi": ["संस्कृत से बदले हुए रूप", "विदेशी भाषा से आए", "मूल हिंदी", "क्षेत्रीय भाषा के"],
        "answer_hi": "संस्कृत से बदले हुए रूप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "तत्सम शब्द किसे कहते हैं?",
        "options_hi": ["ज्यों के त्यों संस्कृत शब्द", "बदले हुए रूप", "विदेशी शब्द", "क्षेत्रीय शब्द"],
        "answer_hi": "ज्यों के त्यों संस्कृत शब्द",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "देशज शब्द किसे कहते हैं?",
        "options_hi": ["क्षेत्रीय भाषाओं के शब्द", "संस्कृत के", "विदेशी", "तद्भव"],
        "answer_hi": "क्षेत्रीय भाषाओं के शब्द",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "विदेशी शब्द किसे कहते हैं?",
        "options_hi": ["अन्य भाषाओं से आए शब्द", "संस्कृत के", "तद्भव", "देशज"],
        "answer_hi": "अन्य भाषाओं से आए शब्द",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "लिंग के कितने भेद होते हैं?",
        "options_hi": ["तीन", "दो", "चार", "पाँच"],
        "answer_hi": "तीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "पुल्लिंग संज्ञा की पहचान क्या है?",
        "options_hi": ["आकारांत न होना", "आकारांत होना", "इकारांत होना", "उकारांत होना"],
        "answer_hi": "आकारांत न होना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "स्त्रीलिंग संज्ञा की पहचान क्या है?",
        "options_hi": ["आकारांत होना", "इकारांत होना", "उकारांत होना", "ऊकारांत होना"],
        "answer_hi": "आकारांत होना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "नपुंसकलिंग संज्ञा की पहचान क्या है?",
        "options_hi": ["वस्तुओं के नाम", "व्यक्तियों के नाम", "भावों के नाम", "स्थानों के नाम"],
        "answer_hi": "वस्तुओं के नाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "वचन के कितने भेद होते हैं?",
        "options_hi": ["दो", "तीन", "चार", "पाँच"],
        "answer_hi": "दो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "एकवचन किसे कहते हैं?",
        "options_hi": ["एक व्यक्ति या वस्तु का बोध", "एक से अधिक का बोध", "समूह का बोध", "अनिश्चित का बोध"],
        "answer_hi": "एक व्यक्ति या वस्तु का बोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "बहुवचन किसे कहते हैं?",
        "options_hi": ["एक से अधिक का बोध", "एक का बोध", "दो का बोध", "अनिश्चित का बोध"],
        "answer_hi": "एक से अधिक का बोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "काल के कितने भेद होते हैं?",
        "options_hi": ["तीन", "दो", "चार", "पाँच"],
        "answer_hi": "तीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "भूतकाल किसे कहते हैं?",
        "options_hi": ["बीते हुए समय का बोध", "वर्तमान समय का बोध", "आने वाले समय का बोध", "अनिश्चित समय का बोध"],
        "answer_hi": "बीते हुए समय का बोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "वर्तमान काल किसे कहते हैं?",
        "options_hi": ["वर्तमान समय का बोध", "बीते समय का बोध", "आने वाले समय का बोध", "सामान्य समय का बोध"],
        "answer_hi": "वर्तमान समय का बोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "भविष्यत् काल किसे कहते हैं?",
        "options_hi": ["आने वाले समय का बोध", "बीते समय का बोध", "वर्तमान समय का बोध", "अनिश्चित समय का बोध"],
        "answer_hi": "आने वाले समय का बोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "वाच्य के कितने भेद होते हैं?",
        "options_hi": ["तीन", "दो", "चार", "पाँच"],
        "answer_hi": "तीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "कर्तृवाच्य किसे कहते हैं?",
        "options_hi": ["कर्ता प्रधान वाक्य", "कर्म प्रधान वाक्य", "भाव प्रधान वाक्य", "विशेषण प्रधान वाक्य"],
        "answer_hi": "कर्ता प्रधान वाक्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "कर्मवाच्य किसे कहते हैं?",
        "options_hi": ["कर्म प्रधान वाक्य", "कर्ता प्रधान वाक्य", "भाव प्रधान वाक्य", "काल प्रधान वाक्य"],
        "answer_hi": "कर्म प्रधान वाक्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "भाववाच्य किसे कहते हैं?",
        "options_hi": ["भाव प्रधान वाक्य", "कर्ता प्रधान वाक्य", "कर्म प्रधान वाक्य", "विशेषण प्रधान वाक्य"],
        "answer_hi": "भाव प्रधान वाक्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "वाक्य में शब्दों का सही क्रम क्या होता है?",
        "options_hi": ["कर्ता + कर्म + क्रिया", "क्रिया + कर्ता + कर्म", "कर्म + कर्ता + क्रिया", "कर्ता + क्रिया + कर्म"],
        "answer_hi": "कर्ता + कर्म + क्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "वाक्य के कितने अंग होते हैं?",
        "options_hi": ["दो", "तीन", "चार", "पाँच"],
        "answer_hi": "दो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "वाक्य के दो मुख्य अंग कौन से हैं?",
        "options_hi": ["उद्देश्य और विधेय", "कर्ता और कर्म", "संज्ञा और क्रिया", "विशेषण और क्रिया विशेषण"],
        "answer_hi": "उद्देश्य और विधेय",
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