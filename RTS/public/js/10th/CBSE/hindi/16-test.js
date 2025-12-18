const questions = [
    {
        "num": 1,
        "question_hi": "'मछली' कहानी में मुख्य पात्र का नाम क्या है?",
        "options_hi": ["नाम नहीं दिया गया", "मीना", "सीमा", "कविता"],
        "answer_hi": "नाम नहीं दिया गया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "कहानी का कथावाचक कौन है?",
        "options_hi": ["पत्नी स्वयं", "पति", "निर्वाचक", "लेखिका"],
        "answer_hi": "पत्नी स्वयं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "कहानी में मछली किस प्रकार की है?",
        "options_hi": ["सुनहरी मछली", "काली मछली", "लाल मछली", "रंग-बिरंगी"],
        "answer_hi": "सुनहरी मछली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "मछली कहाँ रखी गई है?",
        "options_hi": ["कांच के एक्वेरियम में", "मिट्टी के बर्तन में", "तालाब में", "बाल्टी में"],
        "answer_hi": "कांच के एक्वेरियम में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "पति का पेशा क्या है?",
        "options_hi": ["डॉक्टर", "इंजीनियर", "शिक्षक", "वकील"],
        "answer_hi": "डॉक्टर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "पत्नी दिन भर क्या करती है?",
        "options_hi": ["घर के काम", "सिलाई-कढ़ाई", "पढ़ना", "टीवी देखना"],
        "answer_hi": "घर के काम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "पति मछली के साथ कितना समय बिताता है?",
        "options_hi": ["काफी समय", "थोड़ा समय", "बिल्कुल नहीं", "केवल सप्ताहांत"],
        "answer_hi": "काफी समय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "पति मछली को क्या खिलाता है?",
        "options_hi": ["विशेष मछली भोजन", "रोटी के टुकड़े", "चावल", "कीड़े-मकोड़े"],
        "answer_hi": "विशेष मछली भोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "पत्नी को मछली से ईर्ष्या क्यों होती है?",
        "options_hi": ["पति उसे अधिक ध्यान देता", "मछली सुंदर है", "मछली आजाद है", "वह मछली से डरती"],
        "answer_hi": "पति उसे अधिक ध्यान देता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "पत्नी मछली को कैसे मारती है?",
        "options_hi": ["जहर देकर", "पानी से बाहर निकाल", "मार-पीट कर", "भूखा रख"],
        "answer_hi": "जहर देकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "जहर कहाँ से लाया जाता है?",
        "options_hi": ["बाजार से", "घर में पहले से", "पड़ोसी से", "अनजान"],
        "answer_hi": "बाजार से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "मछली मरने के बाद पति क्या करता है?",
        "options_hi": ["चुपचाप दफनाता", "रोता", "चिल्लाता", "पत्नी से पूछता"],
        "answer_hi": "चुपचाप दफनाता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "पति मछली को कहाँ दफनाता है?",
        "options_hi": ["बगीचे में", "कचरे में", "नदी में", "घर में"],
        "answer_hi": "बगीचे में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "पत्नी मछली की मौत पर क्या महसूस करती है?",
        "options_hi": ["विजय की अनुभूति", "दुख", "डर", "पछतावा"],
        "answer_hi": "विजय की अनुभूति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "कहानी में संवाद कितने हैं?",
        "options_hi": ["बहुत कम", "अधिक", "मध्यम", "कोई नहीं"],
        "answer_hi": "बहुत कम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "पति-पत्नी के बीच किस प्रकार का संबंध है?",
        "options_hi": ["औपचारिक और दूर", "गहरा प्यार", "झगड़ालू", "सामान्य"],
        "answer_hi": "औपचारिक और दूर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "मछली किसका प्रतीक है?",
        "options_hi": ["पत्नी की स्थिति", "पति का शौक", "प्रकृति", "सुंदरता"],
        "answer_hi": "पत्नी की स्थिति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "एक्वेरियम किसका प्रतीक है?",
        "options_hi": ["घर की चारदीवारी", "स्वतंत्रता", "समुद्र", "कैद"],
        "answer_hi": "घर की चारदीवारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "कहानी का मुख्य विषय क्या है?",
        "options_hi": ["स्त्री की मनोवैज्ञानिक पीड़ा", "पति-पत्नी संबंध", "अकेलापन", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "मन्नू भंडारी ने इस कहानी में क्या दर्शाया है?",
        "options_hi": ["मध्यवर्गीय स्त्री की दशा", "वैवाहिक जीवन", "मानवीय संबंध", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "पत्नी की उम्र कितनी है?",
        "options_hi": ["युवा", "मध्यम आयु", "वृद्ध", "अनिश्चित"],
        "answer_hi": "युवा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "पति की उम्र कितनी है?",
        "options_hi": ["मध्यम आयु", "युवा", "वृद्ध", "अनिश्चित"],
        "answer_hi": "मध्यम आयु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "घर कहाँ स्थित है?",
        "options_hi": ["शहर में", "गाँव में", "कस्बे में", "अनिश्चित"],
        "answer_hi": "शहर में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "घर का वातावरण कैसा है?",
        "options_hi": ["शांत और नीरस", "हँसी-खुशी", "तनावपूर्ण", "कोलाहलपूर्ण"],
        "answer_hi": "शांत और नीरस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "पति कब तक घर पर रहता है?",
        "options_hi": ["रात को", "दिन भर", "कभी-कभी", "अनियमित"],
        "answer_hi": "रात को",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "पत्नी का सबसे बड़ा दुख क्या है?",
        "options_hi": ["अकेलापन", "गरीबी", "बीमारी", "बच्चे न होना"],
        "answer_hi": "अकेलापन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "पति का सबसे बड़ा शौक क्या है?",
        "options_hi": ["मछली पालन", "पढ़ना", "टीवी देखना", "बागवानी"],
        "answer_hi": "मछली पालन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "कहानी में किस प्रकार का यथार्थ दिखता है?",
        "options_hi": ["मनोवैज्ञानिक यथार्थ", "सामाजिक यथार्थ", "पारिवारिक यथार्थ", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "मछली मारने का विचार पत्नी के मन में कब आता है?",
        "options_hi": ["पति की उपेक्षा से", "अचानक", "दोस्तों से", "पढ़कर"],
        "answer_hi": "पति की उपेक्षा से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "जहर देने के बाद पत्नी क्या करती है?",
        "options_hi": ["सामान्य काम", "घबराती", "भाग जाती", "पति को बताती"],
        "answer_hi": "सामान्य काम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "पति मछली की मौत का कारण क्या समझता है?",
        "options_hi": ["बीमारी", "दुर्घटना", "प्राकृतिक मौत", "अनजान"],
        "answer_hi": "बीमारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "कहानी में किस प्रकार की भाषा का प्रयोग है?",
        "options_hi": ["सरल खड़ी बोली", "कठिन हिंदी", "उर्दू मिश्रित", "संस्कृतनिष्ठ"],
        "answer_hi": "सरल खड़ी बोली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "पत्नी का पारिवारिक पृष्ठभूमि कैसी है?",
        "options_hi": ["मध्यम वर्ग", "उच्च वर्ग", "निम्न वर्ग", "अनजान"],
        "answer_hi": "मध्यम वर्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "पति का पारिवारिक पृष्ठभूमि कैसी है?",
        "options_hi": ["सुविधापूर्ण", "गरीब", "मध्यम", "अनजान"],
        "answer_hi": "सुविधापूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "कहानी में नौकर-चाकर का उल्लेख है?",
        "options_hi": ["हाँ", "नहीं", "कभी-कभी", "अनिश्चित"],
        "answer_hi": "हाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "नौकर क्या काम करता है?",
        "options_hi": ["घर के काम", "बगीचे का काम", "खाना बनाना", "सफाई"],
        "answer_hi": "घर के काम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "नौकर मछली की मौत के बारे में क्या जानता है?",
        "options_hi": ["कुछ नहीं", "सब कुछ", "शक करता", "अनजान"],
        "answer_hi": "कुछ नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "पत्नी की शिक्षा कैसी है?",
        "options_hi": ["स्नातक", "स्कूल तक", "उच्च शिक्षित", "अशिक्षित"],
        "answer_hi": "स्नातक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "पति की शिक्षा कैसी है?",
        "options_hi": ["उच्च शिक्षित", "स्नातक", "स्कूल तक", "अशिक्षित"],
        "answer_hi": "उच्च शिक्षित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "कहानी का समय क्या है?",
        "options_hi": ["आधुनिक समय", "ऐतिहासिक", "भविष्य", "अनिश्चित"],
        "answer_hi": "आधुनिक समय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "मछली को जहर किस समय दिया जाता है?",
        "options_hi": ["दोपहर में", "रात में", "सुबह", "शाम"],
        "answer_hi": "दोपहर में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "पत्नी जहर कहाँ रखती है?",
        "options_hi": ["रसोई में", "बेडरूम में", "बाथरूम में", "अलमारी में"],
        "answer_hi": "रसोई में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "पति मछली को कितनी बार देखता है?",
        "options_hi": ["दिन में कई बार", "केवल एक बार", "सप्ताह में", "कभी-कभार"],
        "answer_hi": "दिन में कई बार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "पत्नी मछली को कितनी बार देखती है?",
        "options_hi": ["लगातार", "कभी-कभी", "बिल्कुल नहीं", "केवल सफाई के समय"],
        "answer_hi": "लगातार",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 45,
        "question_hi": "पत्नी का पहनावा कैसा है?",
        "options_hi": ["सादा", "आकर्षक", "पुराना", "रंगीन"],
        "answer_hi": "सादा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "पत्नी का मनोविज्ञान कैसा है?",
        "options_hi": ["कुंठित और हिंसक", "स्वस्थ", "उदास", "खुशमिजाज"],
        "answer_hi": "कुंठित और हिंसक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "पति का मनोविज्ञान कैसा है?",
        "options_hi": ["भावनात्मक रूप से दूर", "संवेदनशील", "क्रूर", "प्यारा"],
        "answer_hi": "भावनात्मक रूप से दूर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "कहानी में हिंसा का तत्व कहाँ है?",
        "options_hi": ["मनोवैज्ञानिक", "शारीरिक", "शाब्दिक", "अनुपस्थित"],
        "answer_hi": "मनोवैज्ञानिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "मछली की मौत का तरीका क्या है?",
        "options_hi": ["जहर से", "मारकर", "दम घुटने से", "बीमारी से"],
        "answer_hi": "जहर से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "पत्नी का अपराध बोध कैसा है?",
        "options_hi": ["नहीं है", "है", "थोड़ा", "बहुत"],
        "answer_hi": "नहीं है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "पति का दुख कैसा है?",
        "options_hi": ["गहरा लेकिन शांत", "प्रकट", "उग्र", "अस्थायी"],
        "answer_hi": "गहरा लेकिन शांत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "कहानी में प्रतीकों का क्या उपयोग है?",
        "options_hi": ["व्यापक", "सीमित", "अनुपस्थित", "अतिरंजित"],
        "answer_hi": "व्यापक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "मछली किसका प्रतीक है?",
        "options_hi": ["पत्नी का", "पति का", "दोनों का", "वैवाहिक संबंध"],
        "answer_hi": "पत्नी का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "एक्वेरियम किसका प्रतीक है?",
        "options_hi": ["घर का", "समाज का", "वैवाहिक जीवन", "कैद"],
        "answer_hi": "घर का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "जहर किसका प्रतीक है?",
        "options_hi": ["घृणा और ईर्ष्या", "प्यार", "मुक्ति", "मौत"],
        "answer_hi": "घृणा और ईर्ष्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "पति का मछली से लगाव किसका प्रतीक है?",
        "options_hi": ["पत्नी से विमुखता", "प्रकृति प्रेम", "शौक", "अकेलापन"],
        "answer_hi": "पत्नी से विमुखता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "कहानी में निर्ममता का तत्व कहाँ है?",
        "options_hi": ["पत्नी के कार्य में", "पति के व्यवहार", "दोनों", "कहीं नहीं"],
        "answer_hi": "पत्नी के कार्य में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "मन्नू भंडारी ने इस कहानी में क्या संदेश दिया है?",
        "options_hi": ["स्त्री मनोविज्ञान", "वैवाहिक समस्याएँ", "संवाद की कमी", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "कहानी का सबसे मार्मिक बिंदु क्या है?",
        "options_hi": ["मछली की मौत", "पति का दुख", "पत्नी की ईर्ष्या", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "पत्नी का सबसे बड़ा दोष क्या है?",
        "options_hi": ["संवादहीनता", "हिंसा", "ईर्ष्या", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "पति का सबसे बड़ा दोष क्या है?",
        "options_hi": ["उपेक्षा", "संवादहीनता", "आत्मकेंद्रित", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "कहानी में किस प्रकार का यथार्थ है?",
        "options_hi": ["मनोवैज्ञानिक यथार्थ", "सामाजिक यथार्थ", "पारिवारिक यथार्थ", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "मछली मारने का निर्णय पत्नी क्यों लेती है?",
        "options_hi": ["पति का ध्यान पाने", "ईर्ष्या", "बदला", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "कहानी में कौन सा रंग प्रमुख है?",
        "options_hi": ["सुनहरा", "लाल", "नीला", "हरा"],
        "answer_hi": "सुनहरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "पत्नी का पहनावा कैसा है?",
        "options_hi": ["सादा", "आकर्षक", "पुराना", "रंगीन"],
        "answer_hi": "सादा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "पति का पहनावा कैसा है?",
        "options_hi": ["औपचारिक", "आरामदायक", "फैशनेबल", "पुराना"],
        "answer_hi": "औपचारिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "घर का वातावरण कैसा है?",
        "options_hi": ["साफ-सुथरा", "गंदा", "अव्यवस्थित", "रंगीन"],
        "answer_hi": "साफ-सुथरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "कहानी में आवाजों का वर्णन कैसा है?",
        "options_hi": ["शांत", "कोलाहलपूर्ण", "मधुर", "कर्कश"],
        "answer_hi": "शांत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "पत्नी की दिनचर्या में क्या शामिल है?",
        "options_hi": ["घर के काम", "बाहर जाना", "पढ़ना", "टीवी देखना"],
        "answer_hi": "घर के काम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "पति की दिनचर्या में क्या शामिल है?",
        "options_hi": ["काम और मछली", "पत्नी के साथ", "मित्रों के साथ", "अकेले"],
        "answer_hi": "काम और मछली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "कहानी में मौसम का वर्णन कैसा है?",
        "options_hi": ["सामान्य", "गर्मी", "सर्दी", "बरसात"],
        "answer_hi": "सामान्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "पत्नी का स्वभाव कैसा है?",
        "options_hi": ["चिड़चिड़ा", "शांत", "मिलनसार", "उदास"],
        "answer_hi": "चिड़चिड़ा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "पति का स्वभाव कैसा है?",
        "options_hi": ["शांत", "क्रोधी", "बातूनी", "उदास"],
        "answer_hi": "शांत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "कहानी में पशु-पक्षियों का उल्लेख क्या है?",
        "options_hi": ["केवल मछली", "कुत्ता", "बिल्ली", "चिड़िया"],
        "answer_hi": "केवल मछली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "पत्नी की आर्थिक स्थिति कैसी है?",
        "options_hi": ["पति पर निर्भर", "स्वतंत्र", "गरीब", "अमीर"],
        "answer_hi": "पति पर निर्भर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "पति की आर्थिक स्थिति कैसी है?",
        "options_hi": ["सुविधापूर्ण", "गरीब", "मध्यम", "अनिश्चित"],
        "answer_hi": "सुविधापूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "कहानी में धर्म का उल्लेख क्या है?",
        "options_hi": ["नहीं", "हाँ", "थोड़ा", "बहुत"],
        "answer_hi": "नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "पत्नी का सपना क्या है?",
        "options_hi": ["पति का प्यार", "स्वतंत्रता", "बच्चे", "धन"],
        "answer_hi": "पति का प्यार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "पति का सपना क्या है?",
        "options_hi": ["शांतिपूर्ण जीवन", "धन", "पदोन्नति", "अनिश्चित"],
        "answer_hi": "शांतिपूर्ण जीवन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "कहानी का सबसे दुखद पहलू क्या है?",
        "options_hi": ["संवादहीनता", "हिंसा", "अकेलापन", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "मन्नू भंडारी की इस कहानी का साहित्यिक महत्व क्या है?",
        "options_hi": ["स्त्री मनोविज्ञान का चित्रण", "कहानी कला", "भाषा शैली", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "कहानी पाठक को क्या सोचने पर मजबूर करती है?",
        "options_hi": ["वैवाहिक संबंध", "स्त्री की स्थिति", "मनोविज्ञान", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "'मछली' कहानी का कथानक कैसा है?",
        "options_hi": ["सरल लेकिन गहरा", "जटिल", "रोमांचक", "उबाऊ"],
        "answer_hi": "सरल लेकिन गहरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "मछली के मरने के बाद पति-पत्नी के बीच क्या होता है?",
        "options_hi": ["और दूरी", "सुलह", "झगड़ा", "सामान्य"],
        "answer_hi": "और दूरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "कहानी में समय का बोध कैसा है?",
        "options_hi": ["धीमा", "तेज", "रुक-रुक", "अनिश्चित"],
        "answer_hi": "धीमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "पत्नी की सबसे बड़ी इच्छा क्या है?",
        "options_hi": ["पति का ध्यान", "स्वतंत्रता", "बच्चा", "नौकरी"],
        "answer_hi": "पति का ध्यान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "पति की सबसे बड़ी इच्छा क्या है?",
        "options_hi": ["शांति", "धन", "पदोन्नति", "अनिश्चित"],
        "answer_hi": "शांति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "कहानी में वर्णन शैली कैसी है?",
        "options_hi": ["आत्मकथात्मक", "वर्णनात्मक", "संवादात्मक", "सभी"],
        "answer_hi": "आत्मकथात्मक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "मछली का आकार कैसा है?",
        "options_hi": ["छोटा", "बड़ा", "मध्यम", "अनिश्चित"],
        "answer_hi": "छोटा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "एक्वेरियम का आकार कैसा है?",
        "options_hi": ["मध्यम", "बड़ा", "छोटा", "विशाल"],
        "answer_hi": "मध्यम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "पति मछली के साथ क्या-क्या करता है?",
        "options_hi": ["देखना, खिलाना, बातें करना", "केवल देखना", "खिलाना", "साफ करना"],
        "answer_hi": "देखना, खिलाना, बातें करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "पत्नी का मछली के प्रति कैसा रवैया है?",
        "options_hi": ["घृणापूर्ण", "उदासीन", "प्यार", "डर"],
        "answer_hi": "घृणापूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "कहानी का स्थान कहाँ है?",
        "options_hi": ["शहरी घर", "ग्रामीण घर", "बंगला", "फ्लैट"],
        "answer_hi": "शहरी घर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "पति का कार्यालय कहाँ है?",
        "options_hi": ["शहर में", "घर के पास", "दूर", "अनिश्चित"],
        "answer_hi": "शहर में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "पत्नी का सामाजिक जीवन कैसा है?",
        "options_hi": ["सीमित", "व्यापक", "कोई नहीं", "सक्रिय"],
        "answer_hi": "सीमित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "पति का सामाजिक जीवन कैसा है?",
        "options_hi": ["सीमित", "व्यापक", "कोई नहीं", "सक्रिय"],
        "answer_hi": "सीमित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "कहानी में किस प्रकार का दबाव दिखता है?",
        "options_hi": ["मनोवैज्ञानिक", "सामाजिक", "आर्थिक", "पारिवारिक"],
        "answer_hi": "मनोवैज्ञानिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "मछली की मौत के बाद पत्नी का भविष्य कैसा दिखता है?",
        "options_hi": ["अनिश्चित", "सुधरा", "बदतर", "सामान्य"],
        "answer_hi": "अनिश्चित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "कहानी का मूल संदेश क्या है?",
        "options_hi": ["संवाद का महत्व", "स्त्री की स्थिति", "मानवीय संबंध", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "'मछली' कहानी किस प्रकार की कहानी है?",
        "options_hi": ["मनोवैज्ञानिक कहानी", "सामाजिक कहानी", "प्रतीकात्मक कहानी", "सभी"],
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