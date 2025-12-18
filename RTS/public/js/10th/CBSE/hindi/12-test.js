const questions = [
    {
        "num": 1,
        "question_hi": "बहादुर कहानी के लेखक अमरकांत का पूरा नाम क्या है?",
        "options_hi": ["अमरकांत श्रीवास्तव", "अमरकांत सिंह", "अमरकांत वर्मा", "अमरकांत तिवारी"],
        "answer_hi": "अमरकांत श्रीवास्तव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "बहादुर कहानी में नौकर के रूप में काम करने वाला लड़का किस प्रदेश से आता है?",
        "options_hi": ["नेपाल", "उत्तराखंड", "हिमाचल", "बिहार"],
        "answer_hi": "नेपाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "बहादुर किस प्रकार के परिवार में काम करता है?",
        "options_hi": ["सामान्य मध्यवर्गीय", "धनी व्यापारी", "सरकारी अधिकारी", "शिक्षक"],
        "answer_hi": "सामान्य मध्यवर्गीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "बहादुर की मासिक तनख्वाह कितनी है?",
        "options_hi": ["8 रुपये", "10 रुपये", "12 रुपये", "15 रुपये"],
        "answer_hi": "10 रुपये",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "बहादुर की शारीरिक बनावट कैसी है?",
        "options_hi": ["दुबला-पतला", "मोटा-तगड़ा", "छोटा और दुबला", "लंबा और पतला"],
        "answer_hi": "दुबला-पतला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "बहादुर घर के किस हिस्से में सोता है?",
        "options_hi": ["बरामदे में", "रसोई में", "बाथरूम के पास", "छत पर"],
        "answer_hi": "बरामदे में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "बहादुर का पसंदीदा भोजन क्या है?",
        "options_hi": ["पूड़ी", "समोसा", "जलेबी", "चावल"],
        "answer_hi": "पूड़ी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "बहादुर के मालिक के कितने बच्चे हैं?",
        "options_hi": ["एक", "दो", "तीन", "चार"],
        "answer_hi": "दो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "बहादुर किस बात से सबसे ज्यादा डरता है?",
        "options_hi": ["मालकिन की डाँट", "कुत्तों से", "अंधेरे से", "पुलिस से"],
        "answer_hi": "मालकिन की डाँट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "बहादुर ने कितने पैसे बचाए थे?",
        "options_hi": ["25 रुपये", "30 रुपये", "35 रुपये", "40 रुपये"],
        "answer_hi": "30 रुपये",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "बहादुर के पैसे कहाँ छिपे हुए थे?",
        "options_hi": ["तकिए के नीचे", "दीवार की दरार में", "कपड़ों में", "जूते में"],
        "answer_hi": "तकिए के नीचे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "पैसे चोरी होने का आरोप किस पर लगता है?",
        "options_hi": ["बहादुर पर", "पड़ोसी पर", "बच्चों पर", "चोर पर"],
        "answer_hi": "बहादुर पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "बहादुर पर लगे आरोप का क्या प्रभाव पड़ता है?",
        "options_hi": ["वह रोने लगता", "वह चुप हो जाता", "वह विद्रोह करता", "वह माफी माँगता"],
        "answer_hi": "वह रोने लगता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "बहादुर के पैसे वास्तव में किसने लिए थे?",
        "options_hi": ["मालिक के बच्चों ने", "मालकिन ने", "पड़ोसी ने", "कोई चोर"],
        "answer_hi": "मालिक के बच्चों ने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "पैसे वापस मिलने पर बहादुर की क्या प्रतिक्रिया होती है?",
        "options_hi": ["वह खुश होता", "वह रोता है", "वह चुप रहता", "वह शक करता"],
        "answer_hi": "वह रोता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "बहादुर अंततः क्या करता है?",
        "options_hi": ["वह भाग जाता", "वह रुक जाता", "वह बदला लेता", "वह नौकरी छोड़ता"],
        "answer_hi": "वह भाग जाता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "बहादुर के भागने का मुख्य कारण क्या है?",
        "options_hi": ["अपमान", "डर", "थकान", "बीमारी"],
        "answer_hi": "अपमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "बहादुर कहानी का मुख्य संदेश क्या है?",
        "options_hi": ["बाल मजदूरी का शोषण", "गरीबी की समस्या", "सामाजिक असमानता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "बहादुर के चरित्र की प्रमुख विशेषता क्या है?",
        "options_hi": ["ईमानदारी", "मेहनत", "सहनशीलता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "कहानी की भाषा शैली कैसी है?",
        "options_hi": ["सरल और व्यावहारिक", "कठिन और साहित्यिक", "आलंकारिक", "काव्यात्मक"],
        "answer_hi": "सरल और व्यावहारिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "बहादुर की उम्र कितनी बताई गई है?",
        "options_hi": ["10-12 वर्ष", "13-14 वर्ष", "15-16 वर्ष", "17-18 वर्ष"],
        "answer_hi": "10-12 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "बहादुर के पिता का क्या हुआ है?",
        "options_hi": ["वे मर चुके", "वे काम करते", "वे बीमार", "अनजान"],
        "answer_hi": "वे मर चुके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "बहादुर की माँ क्या काम करती है?",
        "options_hi": ["मजदूरी", "खेती", "नौकरी", "घरेलू काम"],
        "answer_hi": "मजदूरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "बहादुर किस प्रकार के गीत गाता है?",
        "options_hi": ["नेपाली लोकगीत", "हिंदी फिल्मी गीत", "भजन", "कोई नहीं"],
        "answer_hi": "नेपाली लोकगीत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "बहादुर कहानी की सबसे प्रभावशाली विशेषता क्या है?",
        "options_hi": ["मानवीय संवेदना", "यथार्थ चित्रण", "सामाजिक आलोचना", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "मालकिन बहादुर के साथ कैसा व्यवहार करती है?",
        "options_hi": ["कठोर", "दयालु", "उदासीन", "न्यायसंगत"],
        "answer_hi": "कठोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "बहादुर को किस चीज की सबसे ज्यादा चाहत है?",
        "options_hi": ["प्यार और सम्मान", "पैसे", "घर वापसी", "शिक्षा"],
        "answer_hi": "प्यार और सम्मान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "बहादुर के भाग जाने के बाद परिवार की क्या प्रतिक्रिया है?",
        "options_hi": ["पछतावा", "राहत", "गुस्सा", "उदासीनता"],
        "answer_hi": "पछतावा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "बहादुर कहानी किस साहित्यिक आंदोलन से संबंधित है?",
        "options_hi": ["नई कहानी आंदोलन", "प्रगतिशील आंदोलन", "प्रयोगवाद", "छायावाद"],
        "answer_hi": "नई कहानी आंदोलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "बहादुर का नाम किसका प्रतीक है?",
        "options_hi": ["विरोधाभास", "साहस", "मजबूरी", "आशा"],
        "answer_hi": "विरोधाभास",
        "attempted": false,
        "selected": ""
    },
        {
        "num": 31,
        "question_hi": "बहादुर कहानी के आरंभ में मालिक का परिवार किस मौसम में रह रहा है?",
        "options_hi": ["सर्दी", "गर्मी", "बरसात", "वसंत"],
        "answer_hi": "सर्दी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "बहादुर के आने से पहले घर में नौकर का क्या हाल था?",
        "options_hi": ["कोई नौकर नहीं था", "पुराना नौकर था", "कभी-कभी नौकर आता", "महिला नौकर थी"],
        "answer_hi": "कोई नौकर नहीं था",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "बहादुर को नौकरी पर रखने का मुख्य कारण क्या था?",
        "options_hi": ["घर के काम में मदद", "बच्चों की देखभाल", "मालकिन की सहायता", "सस्ता श्रम"],
        "answer_hi": "घर के काम में मदद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "बहादुर को सबसे पहले कौन लेकर आया?",
        "options_hi": ["एक दोस्त", "एक रिश्तेदार", "एक दलाल", "मालिक स्वयं"],
        "answer_hi": "एक दलाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "बहादुर की पहली तनख्वाह कब मिली?",
        "options_hi": ["एक महीने बाद", "दो महीने बाद", "तुरंत", "15 दिन बाद"],
        "answer_hi": "एक महीने बाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "बहादुर ने पहली तनख्वाह से क्या खरीदा?",
        "options_hi": ["कुछ नहीं", "कपड़े", "जूते", "मिठाई"],
        "answer_hi": "कुछ नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "बहादुर के कपड़े किस स्थिति में हैं?",
        "options_hi": ["फटे हुए", "नए", "साफ", "रंगीन"],
        "answer_hi": "फटे हुए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "सर्दियों में बहादुर के पास गर्म कपड़े हैं?",
        "options_hi": ["नहीं", "हाँ", "कुछ", "मालिक देते हैं"],
        "answer_hi": "नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "बहादुर को खाना कब मिलता है?",
        "options_hi": ["सबके बाद", "सबके साथ", "अलग समय", "जब चाहे"],
        "answer_hi": "सबके बाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "बहादुर कितने बजे उठता है?",
        "options_hi": ["सुबह 5 बजे", "सुबह 6 बजे", "सुबह 7 बजे", "जब उठा दिया जाए"],
        "answer_hi": "सुबह 5 बजे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "बहादुर का पहला काम क्या होता है?",
        "options_hi": ["चाय बनाना", "झाड़ू लगाना", "कपड़े धोना", "बिस्तर लगाना"],
        "answer_hi": "चाय बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "बहादुर को दोपहर में कब आराम मिलता है?",
        "options_hi": ["2-3 बजे", "1-2 बजे", "3-4 बजे", "कोई आराम नहीं"],
        "answer_hi": "2-3 बजे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "बहादुर शाम को कितने बजे तक काम करता है?",
        "options_hi": ["8 बजे", "9 बजे", "10 बजे", "रात तक"],
        "answer_hi": "9 बजे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "बहादुर बच्चों के साथ क्या खेल खेलता है?",
        "options_hi": ["लुका-छिपी", "गिल्ली-डंडा", "क्रिकेट", "ताश"],
        "answer_hi": "लुका-छिपी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "बहादुर को पढ़ना-लिखना आता है?",
        "options_hi": ["नहीं", "थोड़ा", "हाँ", "केवल नाम लिखना"],
        "answer_hi": "नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "बहादुर के पास किस प्रकार का बिस्तर है?",
        "options_hi": ["चटाई", "गद्दा", "कंबल", "फर्श पर सोता"],
        "answer_hi": "चटाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "बहादुर का व्यक्तित्व कैसा है?",
        "options_hi": ["भोला-भाला", "चालाक", "उदास", "चिड़चिड़ा"],
        "answer_hi": "भोला-भाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "बहादुर किस बात पर सबसे ज्यादा खुश होता है?",
        "options_hi": ["बच्चों का साथ", "माँ का पत्र", "तनख्वाह", "छुट्टी"],
        "answer_hi": "बच्चों का साथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "बहादुर के पैसे चोरी होने का पता कैसे चलता है?",
        "options_hi": ["वह खुद बताता", "मालकिन को पता चलता", "बच्चे बताते", "गलती से पता चलता"],
        "answer_hi": "वह खुद बताता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "पैसे गायब होने पर मालकिन की क्या प्रतिक्रिया होती है?",
        "options_hi": ["बहादुर पर शक", "पुलिस बुलाना", "ढूँढना", "नज़रअंदाज़"],
        "answer_hi": "बहादुर पर शक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "बहादुर पर चोरी का आरोप लगने पर मालिक क्या करते हैं?",
        "options_hi": ["चुप रहते", "बहादुर का पक्ष लेते", "डाँटते", "निकाल देते"],
        "answer_hi": "चुप रहते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "बच्चे पैसे क्यों लौटाते हैं?",
        "options_hi": ["पछतावा", "डर", "मजाक समझते", "माँ के कहने पर"],
        "answer_hi": "पछतावा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "पैसे लौटाने पर बहादुर कैसा महसूस करता है?",
        "options_hi": ["राहत", "दुख", "गुस्सा", "खुशी"],
        "answer_hi": "दुख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "बहादुर रात को क्यों भागता है?",
        "options_hi": ["अपमान सहन नहीं", "डर", "घर जाना", "नौकरी छोड़ना"],
        "answer_hi": "अपमान सहन नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "बहादुर भागते समय क्या साथ ले जाता है?",
        "options_hi": ["कुछ नहीं", "पैसे", "कपड़े", "खाना"],
        "answer_hi": "कुछ नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "बहादुर के भागने का सबसे बड़ा कारण क्या है?",
        "options_hi": ["गरिमा भंग", "कम तनख्वाह", "कड़ी मेहनत", "भूख"],
        "answer_hi": "गरिमा भंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "बहादुर के जाने के बाद घर का माहौल कैसा हो जाता है?",
        "options_hi": ["सूनापन", "शांति", "तनावमुक्त", "सामान्य"],
        "answer_hi": "सूनापन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "मालिक बहादुर के जाने पर क्या सोचते हैं?",
        "options_hi": ["पछतावा", "राहत", "चिंता", "गुस्सा"],
        "answer_hi": "पछतावा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "बहादुर की कहानी किस वर्ग की कहानी है?",
        "options_hi": ["शोषित वर्ग", "मध्य वर्ग", "उच्च वर्ग", "सभी वर्ग"],
        "answer_hi": "शोषित वर्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "बहादुर कहानी का मुख्य उद्देश्य क्या है?",
        "options_hi": ["सामाजिक शोषण दिखाना", "मानवीय संवेदना जगाना", "बाल श्रम रोकना", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "बहादुर के चरित्र की सबसे बड़ी विशेषता क्या है?",
        "options_hi": ["सहनशीलता", "मेहनत", "ईमानदारी", "वफादारी"],
        "answer_hi": "सहनशीलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "बहादुर किस प्रकार का प्रतीक है?",
        "options_hi": ["बाल मजदूरों का", "गरीबी का", "शोषण का", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "बहादुर के भागने के बाद परिवार को क्या एहसास होता है?",
        "options_hi": ["बहादुर की उपयोगिता", "अपनी गलती", "बच्चों का दोष", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "बहादुर कहानी की भाषा कैसी है?",
        "options_hi": ["सरल हिंदी", "कठिन हिंदी", "मिश्रित भाषा", "उर्दू मिश्रित"],
        "answer_hi": "सरल हिंदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "बहादुर के नाम का क्या महत्व है?",
        "options_hi": ["विरोधाभास", "आशा", "साहस", "मजाक"],
        "answer_hi": "विरोधाभास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "बहादुर किस युग की कहानी है?",
        "options_hi": ["आधुनिक युग", "औपनिवेशिक युग", "स्वतंत्रता के बाद", "वर्तमान युग"],
        "answer_hi": "स्वतंत्रता के बाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "बहादुर के माध्यम से लेखक क्या संदेश देना चाहता है?",
        "options_hi": ["सामाजिक न्याय", "मानवीयता", "शोषण के विरुद्ध", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "बहादुर की कहानी किस प्रकार की कहानी है?",
        "options_hi": ["मनोवैज्ञानिक", "सामाजिक", "यथार्थवादी", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "बहादुर के भागने का सबसे दुखद पहलू क्या है?",
        "options_hi": ["अनिश्चित भविष्य", "माँ की चिंता", "बच्चों का दुख", "मालिक का पछतावा"],
        "answer_hi": "अनिश्चित भविष्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "बहादुर कहानी का अंत कैसा है?",
        "options_hi": ["खुला अंत", "दुखद अंत", "सुखद अंत", "नाटकीय अंत"],
        "answer_hi": "खुला अंत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "बहादुर के चरित्र का सबसे मार्मिक पहलू क्या है?",
        "options_hi": ["अकेलापन", "भोलापन", "सहनशीलता", "मेहनत"],
        "answer_hi": "अकेलापन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "बहादुर की कहानी में किस प्रकार का यथार्थ दिखता है?",
        "options_hi": ["कठोर यथार्थ", "सामाजिक यथार्थ", "मनोवैज्ञानिक यथार्थ", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "बहादुर के जीवन का सबसे बड़ा दुख क्या है?",
        "options_hi": ["प्यार की कमी", "गरीबी", "अशिक्षा", "शोषण"],
        "answer_hi": "प्यार की कमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "बहादुर किस प्रकार से शोषण का शिकार है?",
        "options_hi": ["आर्थिक", "मानसिक", "शारीरिक", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "बहादुर की कहानी पाठकों में क्या भावना जगाती है?",
        "options_hi": ["करुणा", "क्रोध", "प्रतिक्रिया", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "बहादुर के मालिक का परिवार किस वर्ग का प्रतिनिधित्व करता है?",
        "options_hi": ["मध्यवर्ग", "निम्न मध्यवर्ग", "उच्च मध्यवर्ग", "निम्न वर्ग"],
        "answer_hi": "मध्यवर्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "बहादुर की कहानी में किस प्रकार का संघर्ष दिखता है?",
        "options_hi": ["वर्ग संघर्ष", "आर्थिक संघर्ष", "मनोवैज्ञानिक संघर्ष", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "बहादुर किस प्रकार की समस्या का प्रतीक है?",
        "options_hi": ["बाल श्रम", "गरीबी", "शोषण", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "बहादुर के भागने के बाद बच्चों की क्या स्थिति होती है?",
        "options_hi": ["दुखी", "खुश", "उदासीन", "राहत महसूस"],
        "answer_hi": "दुखी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "बहादुर की कहानी का सबसे महत्वपूर्ण पाठ क्या है?",
        "options_hi": ["मानवीय गरिमा", "सामाजिक न्याय", "दया और करुणा", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "बहादुर को किस प्रकार की स्वतंत्रता चाहिए?",
        "options_hi": ["मानसिक", "आर्थिक", "शारीरिक", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "बहादुर के जीवन में सबसे बड़ी कमी क्या है?",
        "options_hi": ["शिक्षा", "प्यार", "सुरक्षा", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "बहादुर कहानी किस प्रकार के साहित्य का उदाहरण है?",
        "options_hi": ["प्रगतिशील साहित्य", "यथार्थवादी साहित्य", "प्रतिबद्ध साहित्य", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "बहादुर की सबसे बड़ी ताकत क्या है?",
        "options_hi": ["सहनशीलता", "ईमानदारी", "मेहनत", "वफादारी"],
        "answer_hi": "सहनशीलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "बहादुर की सबसे बड़ी कमजोरी क्या है?",
        "options_hi": ["भोलापन", "गरीबी", "अशिक्षा", "अकेलापन"],
        "answer_hi": "भोलापन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "बहादुर कहानी का मुख्य संघर्ष किसके बीच है?",
        "options_hi": ["शोषक और शोषित", "अमीर और गरीब", "शिक्षित और अशिक्षित", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "बहादुर के चरित्र का विकास कैसे होता है?",
        "options_hi": ["संघर्षों के माध्यम से", "अनुभवों के माध्यम से", "दुखों के माध्यम से", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "बहादुर की कहानी में किस प्रकार की विडंबना है?",
        "options_hi": ["नाम और व्यक्तित्व", "आशा और यथार्थ", "सपने और हकीकत", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "बहादुर किस प्रकार से समाज का शिकार है?",
        "options_hi": ["आर्थिक रूप से", "सामाजिक रूप से", "मानसिक रूप से", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "बहादुर की कहानी का सबसे प्रभावशाली हिस्सा कौन सा है?",
        "options_hi": ["चोरी का आरोप", "भागना", "रोना", "बच्चों का पछतावा"],
        "answer_hi": "चोरी का आरोप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "बहादुर के जीवन का सबसे बड़ा सच क्या है?",
        "options_hi": ["शोषण", "गरीबी", "अकेलापन", "निराशा"],
        "answer_hi": "शोषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "बहादुर की कहानी किस प्रकार की मानवीय भावना दर्शाती है?",
        "options_hi": ["करुणा", "निराशा", "आशा", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "बहादुर के भागने का निर्णय कितना सही है?",
        "options_hi": ["आवश्यक", "गलत", "जल्दबाजी", "अनिश्चित"],
        "answer_hi": "आवश्यक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "बहादुर की कहानी में किस प्रकार का सामाजिक दृष्टिकोण है?",
        "options_hi": ["आलोचनात्मक", "व्यंग्यात्मक", "यथार्थवादी", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "बहादुर के चरित्र की सबसे बड़ी विडंबना क्या है?",
        "options_hi": ["नाम और हकीकत", "सपने और यथार्थ", "आशा और निराशा", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "बहादुर की कहानी का सबसे महत्वपूर्ण संदेश क्या है?",
        "options_hi": ["मानवीय गरिमा", "सामाजिक न्याय", "बाल अधिकार", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "बहादुर के जीवन का सबसे कठिन पल कौन सा है?",
        "options_hi": ["चोरी का आरोप", "भागना", "माँ से बिछड़ना", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "बहादुर की कहानी किस प्रकार की सामाजिक चेतना जगाती है?",
        "options_hi": ["वर्ग चेतना", "मानवीय चेतना", "नैतिक चेतना", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "बहादुर के चरित्र का सबसे मार्मिक पक्ष क्या है?",
        "options_hi": ["अकेलापन", "भोलापन", "सहनशीलता", "आशा"],
        "answer_hi": "आशा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "बहादुर की कहानी का सबसे बड़ा योगदान क्या है?",
        "options_hi": ["सामाजिक जागरूकता", "साहित्यिक मूल्य", "मानवीय संवेदना", "सभी"],
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