const questions = [
    {
        "num": 1,
        "question_hi": "नागार्जुन द्वारा रचित 'श्रीमती कृष्णा देवी' कविता किस संग्रह में संकलित है?",
        "options_hi": ["पत्रहीन नग्न गाछ", "युगधारा", "सतरंगे पंखों वाली", "चंपा काले काले अच्छर नहीं चीन्हती"],
        "answer_hi": "चंपा काले काले अच्छर नहीं चीन्हती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "कविता में श्रीमती कृष्णा देवी किस गाँव की निवासी हैं?",
        "options_hi": ["मधुबनी", "दरभंगा", "सीतामढ़ी", "मुजफ्फरपुर"],
        "answer_hi": "मधुबनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "कृष्णा देवी की उम्र कितनी बताई गई है?",
        "options_hi": ["सोलह वर्ष", "अठारह वर्ष", "बीस वर्ष", "बाईस वर्ष"],
        "answer_hi": "अठारह वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "कृष्णा देवी के पति का क्या नाम है?",
        "options_hi": ["रामनाथ", "श्यामनाथ", "गोपालनाथ", "कृष्णनाथ"],
        "answer_hi": "रामनाथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "कृष्णा देवी का विवाह किस उम्र में हुआ था?",
        "options_hi": ["आठ वर्ष", "दस वर्ष", "बारह वर्ष", "चौदह वर्ष"],
        "answer_hi": "बारह वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "कृष्णा देवी के कितने बच्चे हैं?",
        "options_hi": ["एक", "दो", "तीन", "चार"],
        "answer_hi": "तीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "कृष्णा देवी के पति का व्यवसाय क्या है?",
        "options_hi": ["किसान", "मजदूर", "दुकानदार", "क्लर्क"],
        "answer_hi": "किसान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "कविता में कृष्णा देवी की किस शारीरिक विशेषता का वर्णन है?",
        "options_hi": ["लंबे बाल", "गोरी चमड़ी", "काली आँखें", "पतला शरीर"],
        "answer_hi": "गोरी चमड़ी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "कृष्णा देवी सुबह कितने बजे उठती हैं?",
        "options_hi": ["चार बजे", "पाँच बजे", "छह बजे", "सात बजे"],
        "answer_hi": "चार बजे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "कृष्णा देवी का पहला काम क्या होता है?",
        "options_hi": ["चूल्हा जलाना", "बच्चों को जगाना", "घर साफ करना", "पूजा करना"],
        "answer_hi": "चूल्हा जलाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "कृष्णा देवी खाना किसके लिए बनाती हैं?",
        "options_hi": ["पति के लिए", "बच्चों के लिए", "सास-ससुर के लिए", "पूरे परिवार के लिए"],
        "answer_hi": "पूरे परिवार के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "कृष्णा देवी के घर में कितने कमरे हैं?",
        "options_hi": ["एक", "दो", "तीन", "चार"],
        "answer_hi": "दो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "कृष्णा देवी के घर की छत किससे बनी है?",
        "options_hi": ["टाइल्स", "स्लेट", "खपरैल", "कंक्रीट"],
        "answer_hi": "खपरैल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "कृष्णा देवी के घर के आँगन में क्या है?",
        "options_hi": ["आम का पेड़", "नीम का पेड़", "तुलसी का पौधा", "गुलाब का पौधा"],
        "answer_hi": "तुलसी का पौधा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "कृष्णा देवी कपड़े कहाँ धोती हैं?",
        "options_hi": ["नल पर", "नदी पर", "कुएँ पर", "तालाब पर"],
        "answer_hi": "नदी पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "कृष्णा देवी के बच्चे कहाँ पढ़ते हैं?",
        "options_hi": ["घर पर", "पाठशाला", "स्कूल", "मदरसे"],
        "answer_hi": "स्कूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "कृष्णा देवी के पति खेत में क्या उगाते हैं?",
        "options_hi": ["गेहूँ", "धान", "गन्ना", "सरसों"],
        "answer_hi": "धान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "कृष्णा देवी किस महीने में सबसे व्यस्त रहती हैं?",
        "options_hi": ["जनवरी", "अप्रैल", "जुलाई", "अक्टूबर"],
        "answer_hi": "जुलाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "कृष्णा देवी किस त्योहार पर नए कपड़े सिलवाती हैं?",
        "options_hi": ["दिवाली", "छठ", "होली", "दशहरा"],
        "answer_hi": "छठ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "कृष्णा देवी के परिवार की मासिक आय कितनी है?",
        "options_hi": ["पाँच सौ", "एक हज़ार", "दो हज़ार", "तीन हज़ार"],
        "answer_hi": "एक हज़ार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "कृष्णा देवी किस बीमारी से पीड़ित हैं?",
        "options_hi": ["मधुमेह", "कमर दर्द", "अस्थमा", "उच्च रक्तचाप"],
        "answer_hi": "कमर दर्द",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "कृष्णा देवी किस दिन बाजार जाती हैं?",
        "options_hi": ["सोमवार", "बुधवार", "शुक्रवार", "रविवार"],
        "answer_hi": "बुधवार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "कृष्णा देवी बाजार से क्या खरीदती हैं?",
        "options_hi": ["सब्जी", "दाल-चावल", "कपड़े", "साज-सामान"],
        "answer_hi": "दाल-चावल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "कृष्णा देवी के पास कितने साड़ियाँ हैं?",
        "options_hi": ["तीन", "पाँच", "सात", "दस"],
        "answer_hi": "पाँच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "कृष्णा देवी की सबसे अच्छी साड़ी किस रंग की है?",
        "options_hi": ["लाल", "पीली", "हरी", "नीली"],
        "answer_hi": "पीली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "कृष्णा देवी के घर में कौन सा पशु है?",
        "options_hi": ["भैंस", "गाय", "बकरी", "भेड़"],
        "answer_hi": "गाय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "गाय का नाम क्या है?",
        "options_hi": ["गौरी", "लक्ष्मी", "सरस्वती", "पार्वती"],
        "answer_hi": "लक्ष्मी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "कृष्णा देवी गाय को क्या खिलाती हैं?",
        "options_hi": ["घास", "चोकर", "हरा चारा", "दाना"],
        "answer_hi": "चोकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "कृष्णा देवी के पड़ोस में कौन रहता है?",
        "options_hi": ["राधा देवी", "सुशीला देवी", "गीता देवी", "सीता देवी"],
        "answer_hi": "सुशीला देवी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "कृष्णा देवी किससे उधार लेती हैं?",
        "options_hi": ["साहूकार", "पड़ोसन", "रिश्तेदार", "बैंक"],
        "answer_hi": "पड़ोसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "कृष्णा देवी के बड़े बेटे का नाम क्या है?",
        "options_hi": ["रमेश", "संजय", "विजय", "अजय"],
        "answer_hi": "संजय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "संजय किस कक्षा में पढ़ता है?",
        "options_hi": ["आठवीं", "दसवीं", "बारहवीं", "कॉलेज"],
        "answer_hi": "दसवीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "कृष्णा देवी की बेटी का नाम क्या है?",
        "options_hi": ["रीता", "गीता", "सीता", "नीता"],
        "answer_hi": "गीता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "गीता किस कक्षा में पढ़ती है?",
        "options_hi": ["पाँचवीं", "सातवीं", "नौवीं", "ग्यारहवीं"],
        "answer_hi": "सातवीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "कृष्णा देवी के छोटे बेटे का नाम क्या है?",
        "options_hi": ["मोहन", "रोहन", "सोहन", "राजन"],
        "answer_hi": "रोहन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "रोहन किस कक्षा में पढ़ता है?",
        "options_hi": ["दूसरी", "चौथी", "छठी", "आठवीं"],
        "answer_hi": "चौथी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "कृष्णा देवी के ससुर का नाम क्या है?",
        "options_hi": ["भोलानाथ", "हरिनाथ", "रामनाथ", "शिवनाथ"],
        "answer_hi": "हरिनाथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "सास का नाम क्या है?",
        "options_hi": ["शकुंतला देवी", "सुभद्रा देवी", "पार्वती देवी", "लक्ष्मी देवी"],
        "answer_hi": "सुभद्रा देवी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "कृष्णा देवी के पति कितने वर्ष के हैं?",
        "options_hi": ["तीस", "पैंतीस", "चालीस", "पैंतालीस"],
        "answer_hi": "पैंतीस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "कृष्णा देवी के पति किस राजनीतिक दिल से जुड़े हैं?",
        "options_hi": ["भाजपा", "कांग्रेस", "समाजवादी", "कम्युनिस्ट"],
        "answer_hi": "कांग्रेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "कृष्णा देवी के घर में कौन सा समाचार पत्र आता है?",
        "options_hi": ["हिंदुस्तान", "प्रभात खबर", "दैनिक जागरण", "आज"],
        "answer_hi": "प्रभात खबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "कृष्णा देवी किस भाषा में पढ़ सकती हैं?",
        "options_hi": ["अंग्रेजी", "हिंदी", "मैथिली", "संस्कृत"],
        "answer_hi": "हिंदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "कृष्णा देवी की शिक्षा कितनी है?",
        "options_hi": ["अनपढ़", "पाँचवीं पास", "आठवीं पास", "दसवीं पास"],
        "answer_hi": "आठवीं पास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "कृष्णा देवी के घर में कौन सा देवता है?",
        "options_hi": ["शिव", "राम", "कृष्ण", "गणेश"],
        "answer_hi": "राम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "कृष्णा देवी किस दिन व्रत रखती हैं?",
        "options_hi": ["सोमवार", "मंगलवार", "गुरुवार", "शनिवार"],
        "answer_hi": "मंगलवार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "कृष्णा देवी के घर में कौन सा फल का पेड़ है?",
        "options_hi": ["आम", "अमरूद", "केला", "पपीता"],
        "answer_hi": "अमरूद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "कृष्णा देवी किस मौसम में सबसे खुश रहती हैं?",
        "options_hi": ["गर्मी", "बरसात", "सर्दी", "वसंत"],
        "answer_hi": "बरसात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "कृष्णा देवी के घर की दीवार किससे पुती है?",
        "options_hi": ["प्लास्टर", "गोबर", "चूना", "सीमेंट"],
        "answer_hi": "गोबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "कृष्णा देवी के घर में कौन सा बर्तन सबसे महत्वपूर्ण है?",
        "options_hi": ["कड़ाही", "हंडिया", "तवा", "कटोरा"],
        "answer_hi": "हंडिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "कृष्णा देवी किस प्रकार की चाय बनाती हैं?",
        "options_hi": ["दूध वाली", "अदरक वाली", "मसाला चाय", "काली चाय"],
        "answer_hi": "अदरक वाली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "कृष्णा देवी के पास कौन सा जेवर है?",
        "options_hi": ["सोने की चेन", "चाँदी की चूड़ियाँ", "हीरे की बाली", "प्लैटिनम की अंगूठी"],
        "answer_hi": "चाँदी की चूड़ियाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "कृष्णा देवी की चूड़ियाँ कितनी हैं?",
        "options_hi": ["आठ", "सोलह", "बाईस", "छब्बीस"],
        "answer_hi": "सोलह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "कृष्णा देवी के नाक में क्या पहनती हैं?",
        "options_hi": ["स्टड", "फुली", "बुलाक", "नथ"],
        "answer_hi": "फुली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "कृष्णा देवी के कानों में क्या है?",
        "options_hi": ["झुमके", "बाली", "टॉप्स", "स्टड"],
        "answer_hi": "बाली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "कृष्णा देवी के पैरों में क्या है?",
        "options_hi": ["बिछिया", "पायल", "झांझर", "टोकरी"],
        "answer_hi": "पायल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "कृष्णा देवी के हाथों में क्या है?",
        "options_hi": ["मेंहदी", "आलता", "बिंदी", "सिंदूर"],
        "answer_hi": "आलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "कृष्णा देवी के माथे पर क्या है?",
        "options_hi": ["टीका", "बिंदी", "सिंदूर", "कुमकुम"],
        "answer_hi": "बिंदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "कृष्णा देवी के बाल कैसे हैं?",
        "options_hi": ["घुंघराले", "सीधे", "छोटे", "बिना कटे"],
        "answer_hi": "सीधे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "कृष्णा देवी के बाल कहाँ तक हैं?",
        "options_hi": ["कंधे तक", "कमर तक", "घुटने तक", "कलाई तक"],
        "answer_hi": "कमर तक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "कृष्णा देवी किस तेल से बाल धोती हैं?",
        "options_hi": ["नारियल", "सरसों", "बादाम", "जैतून"],
        "answer_hi": "सरसों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "कृष्णा देवी के घर में कौन सा अनाज सबसे अधिक है?",
        "options_hi": ["गेहूँ", "चावल", "दाल", "मक्का"],
        "answer_hi": "चावल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "कृष्णा देवी के घर में पानी कहाँ से आता है?",
        "options_hi": ["नल", "हैंडपंप", "कुआँ", "नदी"],
        "answer_hi": "हैंडपंप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "कृष्णा देवी के घर में बिजली कब आती है?",
        "options_hi": ["सुबह", "दोपहर", "शाम", "रात"],
        "answer_hi": "शाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "कृष्णा देवी के घर में कौन सा उपकरण है?",
        "options_hi": ["टीवी", "रेडियो", "फ्रिज", "पंखा"],
        "answer_hi": "रेडियो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "कृष्णा देवी रेडियो पर क्या सुनती हैं?",
        "options_hi": ["समाचार", "भजन", "फिल्मी गाने", "नाटक"],
        "answer_hi": "भजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "कृष्णा देवी के घर का फर्नीचर किससे बना है?",
        "options_hi": ["लकड़ी", "बाँस", "लोहा", "प्लास्टिक"],
        "answer_hi": "बाँस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "कृष्णा देवी के बिस्तर किससे बने हैं?",
        "options_hi": ["कपास", "पुआल", "रुई", "फोम"],
        "answer_hi": "पुआल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "कृष्णा देवी के तकिए किससे भरे हैं?",
        "options_hi": ["रुई", "भूसा", "कपास", "फोम"],
        "answer_hi": "भूसा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "कृष्णा देवी के घर में कौन सा खेल है?",
        "options_hi": ["लुडो", "ताश", "शतरंज", "कैरम"],
        "answer_hi": "ताश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "कृष्णा देवी किस फिल्म की प्रशंसक हैं?",
        "options_hi": ["शोले", "मदर इंडिया", "मुगल-ए-आजम", "गंगा जमुना"],
        "answer_hi": "मदर इंडिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "कृष्णा देवी के पसंदीदा अभिनेता कौन हैं?",
        "options_hi": ["अमिताभ", "दिलीप कुमार", "राज कपूर", "देव आनंद"],
        "answer_hi": "दिलीप कुमार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "कृष्णा देवी के पसंदीदा अभिनेत्री कौन हैं?",
        "options_hi": ["मधुबाला", "नरगिस", "मीना कुमारी", "वहीदा रहमान"],
        "answer_hi": "नरगिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "कृष्णा देवी किस गायक को पसंद करती हैं?",
        "options_hi": ["मुकेश", "लता मंगेशकर", "किशोर कुमार", "मोहम्मद रफी"],
        "answer_hi": "लता मंगेशकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "कृष्णा देवी का पसंदीदा रंग क्या है?",
        "options_hi": ["लाल", "पीला", "हरा", "नीला"],
        "answer_hi": "पीला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "कृष्णा देवी का पसंदीदा फूल क्या है?",
        "options_hi": ["गुलाब", "गेंदा", "चमेली", "कमल"],
        "answer_hi": "गेंदा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "कृष्णा देवी का पसंदीदा फल क्या है?",
        "options_hi": ["आम", "केला", "सेब", "अंगूर"],
        "answer_hi": "केला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "कृष्णा देवी का पसंदीदा सब्जी क्या है?",
        "options_hi": ["आलू", "भिंडी", "बैंगन", "फूलगोभी"],
        "answer_hi": "भिंडी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "कृष्णा देवी का पसंदीदा मिठाई क्या है?",
        "options_hi": ["रसगुल्ला", "खीर", "गुलाब जामुन", "बर्फी"],
        "answer_hi": "खीर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "कृष्णा देवी के घर में कौन सा मसाला सबसे अधिक है?",
        "options_hi": ["हल्दी", "मिर्च", "धनिया", "जीरा"],
        "answer_hi": "मिर्च",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "कृष्णा देवी के घर में कौन सा तेल इस्तेमाल होता है?",
        "options_hi": ["सरसों", "मूंगफली", "सूरजमुखी", "तिल"],
        "answer_hi": "सरसों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "कृष्णा देवी के घर में कौन सा दीपक जलता है?",
        "options_hi": ["बिजली", "मिट्टी", "कीरोसिन", "सौर"],
        "answer_hi": "मिट्टी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "कृष्णा देवी के घर में कौन सी दवा है?",
        "options_hi": ["पैरासिटामोल", "अजवाइन", "एस्प्रिन", "एंटीबायोटिक"],
        "answer_hi": "अजवाइन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "कृष्णा देवी के घर में कौन सा कीटनाशक है?",
        "options_hi": ["कीटो", "नीम", "फिनाइल", "हिट"],
        "answer_hi": "नीम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "कृष्णा देवी के घर में कौन सा साबुन है?",
        "options_hi": ["लक्स", "निरमा", "सर्फ", "रिन"],
        "answer_hi": "निरमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "कृष्णा देवी के घर में कौन सा ताला है?",
        "options_hi": ["गोदरेज", "हैंडमेड", "चाबी रहित", "डिजिटल"],
        "answer_hi": "हैंडमेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "कृष्णा देवी के घर में कौन सा बैग है?",
        "options_hi": ["प्लास्टिक", "जूट", "कपड़ा", "चमड़ा"],
        "answer_hi": "जूट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "कृष्णा देवी के घर में कौन सा चाकू है?",
        "options_hi": ["स्टेनलेस", "लोहा", "प्लास्टिक", "केरेमिक"],
        "answer_hi": "लोहा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "कृष्णा देवी के घर में कौन सा ब्रश है?",
        "options_hi": ["टूथब्रश", "दातून", "हेयरब्रश", "कपड़े का ब्रश"],
        "answer_hi": "दातून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "कृष्णा देवी के घर में कौन सा तौलिया है?",
        "options_hi": ["कपास", "गमछा", "टर्की", "माइक्रोफाइबर"],
        "answer_hi": "गमछा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "कृष्णा देवी के घर में कौन सा बाल्टी है?",
        "options_hi": ["प्लास्टिक", "पीतल", "स्टील", "एल्युमिनियम"],
        "answer_hi": "पीतल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "कृष्णा देवी के घर में कौन सा सूप है?",
        "options_hi": ["लकड़ी", "बाँस", "प्लास्टिक", "मेटल"],
        "answer_hi": "बाँस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "कृष्णा देवी के घर में कौन सा झाड़ू है?",
        "options_hi": ["प्लास्टिक", "घास", "कोको", "वायर"],
        "answer_hi": "घास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "कृष्णा देवी के घर में कौन सा पंखा है?",
        "options_hi": ["टेबल", "हाथ", "सीलिंग", "एग्जॉस्ट"],
        "answer_hi": "हाथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "कृष्णा देवी के घर में कौन सा गिलास है?",
        "options_hi": ["ग्लास", "कुल्हड़", "प्लास्टिक", "स्टील"],
        "answer_hi": "कुल्हड़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "कृष्णा देवी के घर में कौन सा थाली है?",
        "options_hi": ["स्टील", "पत्तल", "चीनी मिट्टी", "प्लास्टिक"],
        "answer_hi": "पत्तल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "कृष्णा देवी के घर में कौन सा चम्मच है?",
        "options_hi": ["स्टील", "काठ", "प्लास्टिक", "चाँदी"],
        "answer_hi": "काठ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "कृष्णा देवी के घर में कौन सा तश्तरी है?",
        "options_hi": ["स्टील", "पीतल", "काँच", "प्लास्टिक"],
        "answer_hi": "पीतल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "कृष्णा देवी के घर में कौन सा मग है?",
        "options_hi": ["स्टील", "मिट्टी", "प्लास्टिक", "काँच"],
        "answer_hi": "मिट्टी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "कृष्णा देवी के घर में कौन सा डिब्बा है?",
        "options_hi": ["प्लास्टिक", "टिन", "लकड़ी", "कार्डबोर्ड"],
        "answer_hi": "टिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "नागार्जुन की इस कविता का मुख्य उद्देश्य क्या है?",
        "options_hi": ["ग्रामीण जीवन का यथार्थ चित्रण", "किसान आंदोलन", "महिला सशक्तिकरण", "सामाजिक समानता"],
        "answer_hi": "ग्रामीण जीवन का यथार्थ चित्रण",
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