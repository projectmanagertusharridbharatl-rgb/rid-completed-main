const questions = [
    {
        "num": 1,
        "question_hi": "'गृह शांति' नाटक के रचनाकार कौन हैं?",
        "options_hi": ["प्रेमचंद", "भारतेन्दु हरिश्चंद्र", "जयशंकर प्रसाद", "मोहन राकेश"],
        "answer_hi": "भारतेन्दु हरिश्चंद्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "भारतेन्दु हरिश्चंद्र को किस उपाधि से जाना जाता है?",
        "options_hi": ["हिंदी सम्राट", "नाटक सम्राट", "कवि सम्राट", "रस सम्राट"],
        "answer_hi": "हिंदी सम्राट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "'गृह शांति' नाटक किस प्रकार का नाटक है?",
        "options_hi": ["ऐतिहासिक", "प्रहसन", "सामाजिक", "पौराणिक"],
        "answer_hi": "सामाजिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "नाटक का मुख्य विषय क्या है?",
        "options_hi": ["राजनीतिक संघर्ष", "पारिवारिक कलह", "धार्मिक विवाद", "आर्थिक समस्या"],
        "answer_hi": "पारिवारिक कलह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "नाटक में गृह कलह का मुख्य कारण क्या है?",
        "options_hi": ["आर्थिक तंगी", "स्त्री विवाद", "संपत्ति का बंटवारा", "बच्चों की शिक्षा"],
        "answer_hi": "स्त्री विवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "नाटक का नायक कौन है?",
        "options_hi": ["कुंवर साहब", "ठाकुर साहब", "मुंशी जी", "बाबू जी"],
        "answer_hi": "कुंवर साहब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "नाटक की नायिका कौन है?",
        "options_hi": ["शारदा", "कमला", "गौरी", "सरस्वती"],
        "answer_hi": "शारदा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "कुंवर साहब की पत्नी का क्या नाम है?",
        "options_hi": ["शारदा", "कमला", "गौरी", "लक्ष्मी"],
        "answer_hi": "शारदा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "नाटक में दूसरी स्त्री पात्र कौन है?",
        "options_hi": ["रमा", "सीता", "गौरी", "पार्वती"],
        "answer_hi": "गौरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "गौरी किसकी पत्नी है?",
        "options_hi": ["कुंवर साहब के भाई की", "मुंशी जी की", "ठाकुर साहब की", "बाबू जी की"],
        "answer_hi": "कुंवर साहब के भाई की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "नाटक में मुख्य संघर्ष किसके बीच है?",
        "options_hi": ["भाइयों के बीच", "पत्नियों के बीच", "पिता-पुत्र के बीच", "सास-बहू के बीच"],
        "answer_hi": "पत्नियों के बीच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "नाटक का संदेश क्या है?",
        "options_hi": ["पारिवारिक एकता", "धन का महत्व", "शिक्षा की आवश्यकता", "स्त्री शिक्षा"],
        "answer_hi": "पारिवारिक एकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "भारतेन्दु हरिश्चंद्र ने यह नाटक किस भाषा में लिखा?",
        "options_hi": ["ब्रज भाषा", "खड़ी बोली", "अवधी", "संस्कृत"],
        "answer_hi": "ब्रज भाषा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "नाटक किस युग से संबंधित है?",
        "options_hi": ["भारतेन्दु युग", "द्विवेदी युग", "छायावाद युग", "प्रगतिवाद युग"],
        "answer_hi": "भारतेन्दु युग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "नाटक में हास्य का तत्व किस पात्र द्वारा लाया गया है?",
        "options_hi": ["मुंशी जी", "ठाकुर साहब", "नौकर", "बाबू जी"],
        "answer_hi": "मुंशी जी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "नाटक का अंत कैसा है?",
        "options_hi": ["दुखद", "सुखद", "अनिश्चित", "रहस्यमय"],
        "answer_hi": "सुखद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "पारिवारिक कलह का समाधान कैसे निकलता है?",
        "options_hi": ["बुजुर्गों के हस्तक्षेप से", "कानून से", "धर्म से", "शिक्षा से"],
        "answer_hi": "बुजुर्गों के हस्तक्षेप से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "नाटक में किस सामाजिक बुराई पर प्रहार किया गया है?",
        "options_hi": ["दहेज प्रथा", "स्त्री शिक्षा का अभाव", "पारिवारिक कलह", "जाति प्रथा"],
        "answer_hi": "पारिवारिक कलह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "भारतेन्दु का जन्म कब हुआ था?",
        "options_hi": ["1850", "1855", "1860", "1865"],
        "answer_hi": "1850",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "नाटक में संवाद की भाषा कैसी है?",
        "options_hi": ["संस्कृतनिष्ठ", "जनभाषा के निकट", "अंग्रेजी मिश्रित", "फारसी मिश्रित"],
        "answer_hi": "जनभाषा के निकट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "नाटक का मुख्य उद्देश्य क्या है?",
        "options_hi": ["मनोरंजन", "शिक्षा", "सामाजिक सुधार", "राजनीतिक जागरण"],
        "answer_hi": "सामाजिक सुधार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "नाटक में कितने अंक हैं?",
        "options_hi": ["तीन", "चार", "पाँच", "छह"],
        "answer_hi": "तीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "नाटक की रचना किस शताब्दी में हुई?",
        "options_hi": ["18वीं", "19वीं", "20वीं", "17वीं"],
        "answer_hi": "19वीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "भारतेन्दु के नाटकों की प्रमुख विशेषता क्या है?",
        "options_hi": ["राजनीतिक विचार", "सामाजिक यथार्थ", "धार्मिक भावना", "प्रकृति चित्रण"],
        "answer_hi": "सामाजिक यथार्थ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "नाटक में परिवार के मुखिया कौन हैं?",
        "options_hi": ["कुंवर साहब", "ठाकुर साहब", "बाबू जी", "मुंशी जी"],
        "answer_hi": "ठाकुर साहब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "नाटक में स्त्री पात्रों की क्या भूमिका है?",
        "options_hi": ["नगण्य", "प्रमुख", "सहायक", "विरोधी"],
        "answer_hi": "प्रमुख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "भारतेन्दु का पूरा नाम क्या है?",
        "options_hi": ["हरिश्चंद्र शर्मा", "हरिश्चंद्र वर्मा", "हरिश्चंद्र भट्ट", "हरिश्चंद्र सिंह"],
        "answer_hi": "हरिश्चंद्र सिंह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "नाटक में हास्य का प्रमुख स्रोत कौन है?",
        "options_hi": ["मुंशी जी का व्यवहार", "ठाकुर साहब का क्रोध", "स्त्रियों का झगड़ा", "नौकरों की मूर्खता"],
        "answer_hi": "मुंशी जी का व्यवहार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "नाटक का प्रकाशन वर्ष क्या है?",
        "options_hi": ["1870", "1880", "1890", "1900"],
        "answer_hi": "1880",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "नाटक में किस भावना का प्राधान्य है?",
        "options_hi": ["श्रृंगार", "हास्य", "करुण", "रौद्र"],
        "answer_hi": "हास्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "भारतेन्दु की मृत्यु कब हुई?",
        "options_hi": ["1885", "1890", "1895", "1900"],
        "answer_hi": "1885",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "नाटक में पारिवारिक शांति कैसे स्थापित होती है?",
        "options_hi": ["विवाह से", "संतान से", "समझौते से", "विभाजन से"],
        "answer_hi": "समझौते से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "नाटक का कथानक कैसा है?",
        "options_hi": ["जटिल", "सरल", "रहस्यमय", "ऐतिहासिक"],
        "answer_hi": "सरल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "भारतेन्दु ने किस पत्रिका का संपादन किया?",
        "options_hi": ["सरस्वती", "हरिश्चंद्र चंद्रिका", "कवि वचन सुधा", "मर्यादा"],
        "answer_hi": "कवि वचन सुधा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "नाटक में संपत्ति विवाद किस चीज से संबंधित है?",
        "options_hi": ["जमीन", "मकान", "गहने", "नकदी"],
        "answer_hi": "जमीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "नाटक का नैतिक संदेश क्या है?",
        "options_hi": ["धैर्य रखो", "लड़ो मत", "प्रेम से रहो", "सहनशील बनो"],
        "answer_hi": "प्रेम से रहो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "भारतेन्दु के नाटकों में किस भाषा का प्रभाव है?",
        "options_hi": ["अंग्रेजी", "फारसी", "संस्कृत", "उर्दू"],
        "answer_hi": "संस्कृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "नाटक में मुख्य समस्या का समाधान कौन करता है?",
        "options_hi": ["ठाकुर साहब", "मुंशी जी", "बाबू जी", "कुंवर साहब"],
        "answer_hi": "ठाकुर साहब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "नाटक का स्थान कहाँ है?",
        "options_hi": ["शहर", "गाँव", "कस्बा", "निर्दिष्ट नहीं"],
        "answer_hi": "गाँव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "भारतेन्दु का जन्म स्थान कहाँ है?",
        "options_hi": ["वाराणसी", "इलाहाबाद", "कानपुर", "लखनऊ"],
        "answer_hi": "वाराणसी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "नाटक में पात्रों की संख्या कितनी है?",
        "options_hi": ["5-6", "7-8", "9-10", "10 से अधिक"],
        "answer_hi": "7-8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "नाटक में किस रस की प्रधानता है?",
        "options_hi": ["श्रृंगार", "हास्य", "करुण", "वीर"],
        "answer_hi": "हास्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "भारतेन्दु के समय को क्या कहा जाता है?",
        "options_hi": ["नवजागरण काल", "स्वाधीनता काल", "सुधार काल", "पुनर्जागरण काल"],
        "answer_hi": "नवजागरण काल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "नाटक में गृह कलह का प्रारंभ कैसे होता है?",
        "options_hi": ["झगड़े से", "मनमुटाव से", "अविश्वास से", "ईर्ष्या से"],
        "answer_hi": "ईर्ष्या से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "भारतेन्दु की शिक्षा कहाँ हुई?",
        "options_hi": ["काशी", "कलकत्ता", "दिल्ली", "लखनऊ"],
        "answer_hi": "काशी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "नाटक का शीर्षक क्या सूचित करता है?",
        "options_hi": ["युद्ध", "शांति", "प्रेम", "कलह"],
        "answer_hi": "शांति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "नाटक में नारी चरित्र कैसे हैं?",
        "options_hi": ["आदर्श", "यथार्थ", "कमजोर", "शक्तिशाली"],
        "answer_hi": "यथार्थ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "भारतेन्दु ने कितने नाटक लिखे?",
        "options_hi": ["5", "10", "15", "20"],
        "answer_hi": "10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "नाटक में संवादों की क्या विशेषता है?",
        "options_hi": ["लंबे", "छोटे", "मुहावरेदार", "कठिन"],
        "answer_hi": "मुहावरेदार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "नाटक का मुख्य संघर्ष किस चीज को लेकर है?",
        "options_hi": ["पैसा", "सम्मान", "सत्ता", "प्रेम"],
        "answer_hi": "सम्मान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "भारतेन्दु के नाटकों का उद्देश्य क्या था?",
        "options_hi": ["मनोरंजन", "शिक्षा", "सुधार", "आलोचना"],
        "answer_hi": "सुधार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "नाटक में परिवार के सदस्य किस प्रकार के हैं?",
        "options_hi": ["आधुनिक", "पारंपरिक", "पश्चिमी", "शहरी"],
        "answer_hi": "पारंपरिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "नाटक में किस प्रकार का समाज दिखाया गया है?",
        "options_hi": ["जमींदार", "किसान", "मजदूर", "व्यापारी"],
        "answer_hi": "जमींदार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "भारतेन्दु की रचनाओं में किसका प्रभाव है?",
        "options_hi": ["पश्चिमी", "पूर्वी", "दोनों", "कोई नहीं"],
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "नाटक में मुख्य पुरुष पात्र कितने हैं?",
        "options_hi": ["2", "3", "4", "5"],
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "नाटक में स्त्री शिक्षा पर क्या विचार है?",
        "options_hi": ["विरोध", "समर्थन", "उदासीनता", "आंशिक समर्थन"],
        "answer_hi": "समर्थन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "भारतेन्दु की भाषा कैसी है?",
        "options_hi": ["कठिन", "सरल", "मिश्रित", "संस्कृतनिष्ठ"],
        "answer_hi": "मिश्रित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "नाटक में हास्य किस प्रकार का है?",
        "options_hi": ["व्यंग्यपूर्ण", "सरल", "कटु", "अश्लील"],
        "answer_hi": "व्यंग्यपूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "नाटक का प्रमुख गुण क्या है?",
        "options_hi": ["कथानक", "संवाद", "पात्र", "दृश्य"],
        "answer_hi": "संवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "भारतेन्दु ने हिंदी नाटक को क्या दिया?",
        "options_hi": ["नई दिशा", "नया स्वरूप", "नई भाषा", "नई शैली"],
        "answer_hi": "नई दिशा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "नाटक में परिवार के मूल्य क्या हैं?",
        "options_hi": ["आधुनिक", "पारंपरिक", "पश्चिमी", "मिश्रित"],
        "answer_hi": "पारंपरिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "नाटक में समाधान कैसे आता है?",
        "options_hi": ["आपसी बातचीत", "कानूनी फैसला", "धार्मिक उपदेश", "बाहरी हस्तक्षेप"],
        "answer_hi": "आपसी बातचीत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "भारतेन्दु की मातृभाषा क्या थी?",
        "options_hi": ["हिंदी", "ब्रज", "अवधी", "भोजपुरी"],
        "answer_hi": "ब्रज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "नाटक में कलह का कारण क्या बनता है?",
        "options_hi": ["छोटी-छोटी बातें", "बड़ी समस्याएं", "बाहरी लोग", "आर्थिक समस्या"],
        "answer_hi": "छोटी-छोटी बातें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "नाटक का समय काल क्या है?",
        "options_hi": ["वर्तमान", "अतीत", "भविष्य", "अनिश्चित"],
        "answer_hi": "वर्तमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "भारतेन्दु ने किस विद्या की शिक्षा प्राप्त की?",
        "options_hi": ["संस्कृत", "फारसी", "अंग्रेजी", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "नाटक में पात्रों का चरित्र चित्रण कैसा है?",
        "options_hi": ["गहरा", "सतही", "आदर्श", "अवास्तविक"],
        "answer_hi": "गहरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "नाटक में सामाजिक समस्याएं कैसे दिखाई गई हैं?",
        "options_hi": ["सीधे", "प्रतीकात्मक", "छुपाकर", "आलोचनात्मक"],
        "answer_hi": "सीधे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "भारतेन्दु के नाटकों में किसका समावेश है?",
        "options_hi": ["गीत", "नृत्य", "संगीत", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "नाटक में मध्यस्थ की भूमिका कौन निभाता है?",
        "options_hi": ["मुंशी जी", "ठाकुर साहब", "बाबू जी", "कुंवर साहब"],
        "answer_hi": "ठाकुर साहब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "नाटक की भाषा में किसका प्रभाव है?",
        "options_hi": ["लोकभाषा", "संस्कृत", "फारसी", "उर्दू"],
        "answer_hi": "लोकभाषा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "भारतेन्दु ने किस नाटक शैली को अपनाया?",
        "options_hi": ["पश्चिमी", "पारंपरिक", "मिश्रित", "नवीन"],
        "answer_hi": "मिश्रित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "नाटक में पारिवारिक रिश्तों का कैसा चित्रण है?",
        "options_hi": ["आदर्श", "यथार्थ", "काल्पनिक", "अतिशयोक्तिपूर्ण"],
        "answer_hi": "यथार्थ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "नाटक में शिक्षा का क्या महत्व है?",
        "options_hi": ["प्रमुख", "गौण", "कोई नहीं", "नकारात्मक"],
        "answer_hi": "गौण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "भारतेन्दु की रचनाओं का मुख्य स्वर क्या है?",
        "options_hi": ["राष्ट्रीय", "सामाजिक", "धार्मिक", "व्यक्तिगत"],
        "answer_hi": "सामाजिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "नाटक में पात्रों के नाम किस आधार पर हैं?",
        "options_hi": ["धार्मिक", "सामाजिक स्थिति", "व्यवसाय", "क्षेत्र"],
        "answer_hi": "सामाजिक स्थिति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "नाटक में स्त्री पात्रों की भाषा कैसी है?",
        "options_hi": ["मृदु", "कठोर", "शिष्ट", "अशिष्ट"],
        "answer_hi": "मृदु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "भारतेन्दु के नाटकों की लोकप्रियता का कारण क्या है?",
        "options_hi": ["सरल भाषा", "मनोरंजकता", "सामाजिक विषय", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "नाटक में संघर्ष का अंत कैसे होता है?",
        "options_hi": ["समझौते से", "जीत-हार से", "बिछड़ने से", "मृत्यु से"],
        "answer_hi": "समझौते से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "नाटक में आदर्श और यथार्थ का कैसा समन्वय है?",
        "options_hi": ["अच्छा", "खराब", "कोई नहीं", "आंशिक"],
        "answer_hi": "अच्छा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "भारतेन्दु ने किस विधा में अधिक लिखा?",
        "options_hi": ["कविता", "नाटक", "निबंध", "कहानी"],
        "answer_hi": "नाटक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "नाटक में परिवार के सदस्यों का आपसी व्यवहार कैसा है?",
        "options_hi": ["प्रेमपूर्ण", "औपचारिक", "कलहपूर्ण", "उदासीन"],
        "answer_hi": "कलहपूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "नाटक में मनोवैज्ञानिक पक्ष कैसा है?",
        "options_hi": ["गहरा", "सतही", "अनुपस्थित", "आंशिक"],
        "answer_hi": "सतही",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "भारतेन्दु की रचनाओं में हास्य किस प्रकार का है?",
        "options_hi": ["स्वाभाविक", "कृत्रिम", "अश्लील", "कटु"],
        "answer_hi": "स्वाभाविक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "नाटक में दाम्पत्य जीवन का कैसा चित्रण है?",
        "options_hi": ["आदर्श", "समस्यापूर्ण", "सुखी", "दुखी"],
        "answer_hi": "समस्यापूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "नाटक का सामाजिक महत्व क्या है?",
        "options_hi": ["पारिवारिक एकता", "स्त्री शिक्षा", "सामाजिक सुधार", "धार्मिक एकता"],
        "answer_hi": "पारिवारिक एकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "भारतेन्दु के नाटकों में किसका अभाव है?",
        "options_hi": ["कथानक", "पात्र", "नाटकीयता", "गंभीरता"],
        "answer_hi": "गंभीरता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "नाटक में संवादों की लंबाई कैसी है?",
        "options_hi": ["लंबी", "छोटी", "मध्यम", "असमान"],
        "answer_hi": "मध्यम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "नाटक में समस्या का समाधान किस प्रकार होता है?",
        "options_hi": ["तर्क से", "भावना से", "दबाव से", "समझौते से"],
        "answer_hi": "समझौते से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "भारतेन्दु ने हिंदी साहित्य को क्या दिया?",
        "options_hi": ["नई दिशा", "नई भाषा", "नई विधा", "नई शैली"],
        "answer_hi": "नई दिशा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "नाटक में पारिवारिक मूल्यों का क्या महत्व है?",
        "options_hi": ["प्रमुख", "गौण", "कोई नहीं", "नकारात्मक"],
        "answer_hi": "प्रमुख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "नाटक में स्त्री चरित्र कितने प्रमुख हैं?",
        "options_hi": ["1", "2", "3", "4"],
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "भारतेन्दु के नाटकों का प्रमुख लक्ष्य क्या था?",
        "options_hi": ["मनोरंजन", "शिक्षण", "प्रचार", "आलोचना"],
        "answer_hi": "शिक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "नाटक में पारिवारिक शांति क्यों जरूरी है?",
        "options_hi": ["सामाजिक प्रतिष्ठा", "आर्थिक लाभ", "मानसिक शांति", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "नाटक की भाषा में कौन सा रंग है?",
        "options_hi": ["ब्रज", "अवधी", "खड़ी बोली", "मैथिली"],
        "answer_hi": "ब्रज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "भारतेन्दु के नाटकों में सामाजिक सुधार का क्या स्वर है?",
        "options_hi": ["क्रांतिकारी", "उदार", "रूढ़िवादी", "उग्र"],
        "answer_hi": "उदार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "नाटक में पुरुष पात्रों की क्या भूमिका है?",
        "options_hi": ["निर्णायक", "सहायक", "विरोधी", "तटस्थ"],
        "answer_hi": "निर्णायक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "नाटक का सबसे महत्वपूर्ण पाठ क्या है?",
        "options_hi": ["सहनशीलता", "प्रेम", "समझौता", "क्षमा"],
        "answer_hi": "सहनशीलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "भारतेन्दु की रचनाओं में किसका चित्रण है?",
        "options_hi": ["मध्यवर्ग", "उच्च वर्ग", "निम्न वर्ग", "सभी"],
        "answer_hi": "मध्यवर्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "नाटक 'गृह शांति' का स्थायी महत्व क्या है?",
        "options_hi": ["सामाजिक संदेश", "साहित्यिक मूल्य", "ऐतिहासिक महत्व", "सभी"],
        "answer_hi": "सभी",
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