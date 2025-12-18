const questions = [
    {
        "num": 1,
        "question_hi": "'नेताजी का चश्मा' कहानी के लेखक कौन हैं?",
        "options_hi": ["मोहन राकेश", "स्वयं प्रकाश", "कमलेश्वर", "राही मासूम रजा"],
        "answer_hi": "स्वयं प्रकाश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "स्वयं प्रकाश का जन्म कब हुआ था?",
        "options_hi": ["1930", "1935", "1940", "1945"],
        "answer_hi": "1940",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "कहानी में नेताजी की मूर्ति किस शहर में है?",
        "options_hi": ["दिल्ली", "लखनऊ", "इलाहाबाद", "कानपुर"],
        "answer_hi": "कानपुर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "नेताजी की मूर्ति पर क्या नहीं था?",
        "options_hi": ["चश्मा", "टोपी", "बूट", "दस्ताने"],
        "answer_hi": "चश्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "मूर्ति पर चश्मा कौन लगाता है?",
        "options_hi": ["नेता", "अधिकारी", "गरीब बच्चे", "व्यापारी"],
        "answer_hi": "गरीब बच्चे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "चश्मा लगाने वाले बच्चे का नाम क्या है?",
        "options_hi": ["रामू", "श्यामू", "कैलाश", "नाम नहीं बताया"],
        "answer_hi": "नाम नहीं बताया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "बच्चे का पेशा क्या है?",
        "options_hi": ["फेरीवाला", "भिखारी", "चपरासी", "मजदूर"],
        "answer_hi": "फेरीवाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "बच्चा क्या बेचता है?",
        "options_hi": ["अखबार", "चने", "खिलौने", "फल"],
        "answer_hi": "अखबार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "नेताजी की मूर्ति किस चौराहे पर है?",
        "options_hi": ["गाँधी चौक", "नेताजी चौक", "अम्बेडकर चौक", "सुभाष चौक"],
        "answer_hi": "नेताजी चौक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "बच्चे ने चश्मा कहाँ से खरीदा?",
        "options_hi": ["दुकान से", "फुटपाथ से", "बाजार से", "ऑप्टिकल से"],
        "answer_hi": "फुटपाथ से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "चश्मे की कीमत कितनी थी?",
        "options_hi": ["5 रुपये", "10 रुपये", "15 रुपये", "20 रुपये"],
        "answer_hi": "10 रुपये",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "बच्चे ने चश्मे के लिए पैसे कैसे जमा किए?",
        "options_hi": ["बचत करके", "भीख मांगकर", "उधार लेकर", "चोरी करके"],
        "answer_hi": "बचत करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "मूर्ति पर चश्मा लगाने के बाद क्या हुआ?",
        "options_hi": ["पुलिस ने हटा दिया", "लोगों ने सराहना की", "अखबार में छपा", "बच्चे को पुरस्कार मिला"],
        "answer_hi": "पुलिस ने हटा दिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "पुलिस ने चश्मा क्यों हटाया?",
        "options_hi": ["बदसूरत था", "गलत जगह था", "अनुमति नहीं थी", "मूर्ति खराब हो रही थी"],
        "answer_hi": "अनुमति नहीं थी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "बच्चे ने दूसरा चश्मा कब लगाया?",
        "options_hi": ["अगले दिन", "एक सप्ताह बाद", "एक महीने बाद", "दोबारा नहीं लगाया"],
        "answer_hi": "अगले दिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "दूसरे चश्मे की कीमत कितनी थी?",
        "options_hi": ["5 रुपये", "8 रुपये", "12 रुपये", "15 रुपये"],
        "answer_hi": "8 रुपये",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "बच्चे का परिवार कैसा है?",
        "options_hi": ["अमीर", "मध्यम", "गरीब", "अति गरीब"],
        "answer_hi": "अति गरीब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "बच्चे के पिता क्या करते हैं?",
        "options_hi": ["रिक्शा चालक", "मजदूर", "बीमार", "मर चुके"],
        "answer_hi": "मजदूर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "बच्चे की माँ क्या करती है?",
        "options_hi": ["घरेलू नौकर", "बीमार", "मर चुकी", "घर संभालती है"],
        "answer_hi": "घरेलू नौकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "बच्चे के कितने भाई-बहन हैं?",
        "options_hi": ["एक", "दो", "तीन", "चार"],
        "answer_hi": "तीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "बच्चा किस स्कूल में पढ़ता है?",
        "options_hi": ["सरकारी स्कूल", "प्राइवेट स्कूल", "नहीं पढ़ता", "नाइट स्कूल"],
        "answer_hi": "नहीं पढ़ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "बच्चे की दिनचर्या क्या है?",
        "options_hi": ["स्कूल-काम", "काम-स्कूल", "केवल काम", "केवल स्कूल"],
        "answer_hi": "केवल काम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "बच्चा कितने बजे उठता है?",
        "options_hi": ["4 बजे", "5 बजे", "6 बजे", "7 बजे"],
        "answer_hi": "5 बजे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "बच्चा अखबार कहाँ से लाता है?",
        "options_hi": ["प्रेस से", "एजेंट से", "दुकान से", "अखबार ऑफिस"],
        "answer_hi": "प्रेस से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "बच्चा एक दिन में कितने अखबार बेचता है?",
        "options_hi": ["20-30", "30-40", "40-50", "50-60"],
        "answer_hi": "30-40",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "प्रति अखबार बच्चे को कितना कमीशन मिलता है?",
        "options_hi": ["25 पैसे", "50 पैसे", "75 पैसे", "1 रुपया"],
        "answer_hi": "50 पैसे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "बच्चा दिन भर में कितना कमाता है?",
        "options_hi": ["10-15 रुपये", "15-20 रुपये", "20-25 रुपये", "25-30 रुपये"],
        "answer_hi": "15-20 रुपये",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "बच्चे का घर कैसा है?",
        "options_hi": ["पक्का मकान", "कच्चा मकान", "झोंपड़ी", "स्लम"],
        "answer_hi": "झोंपड़ी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "बच्चे के घर में कितने कमरे हैं?",
        "options_hi": ["एक", "दो", "तीन", "चार"],
        "answer_hi": "एक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "बच्चे का परिवार कहाँ रहता है?",
        "options_hi": ["शहर के बीच", "शहर के बाहर", "रेलवे लाइन के पास", "नदी किनारे"],
        "answer_hi": "रेलवे लाइन के पास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "बच्चे ने नेताजी को चश्मा क्यों लगाया?",
        "options_hi": ["भक्ति", "दया", "आदर", "सुंदरता"],
        "answer_hi": "आदर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "नेताजी के बारे में बच्चे ने कहाँ सुना?",
        "options_hi": ["स्कूल में", "अखबार में", "लोगों से", "टीवी पर"],
        "answer_hi": "लोगों से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "बच्चे को नेताजी के बारे में क्या पता था?",
        "options_hi": ["स्वतंत्रता सेनानी", "नेता", "सेनापति", "देशभक्त"],
        "answer_hi": "देशभक्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "बच्चे ने पहली बार चश्मा कब लगाया?",
        "options_hi": ["सुबह", "दोपहर", "शाम", "रात"],
        "answer_hi": "शाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "चश्मा लगाते समय कितने लोग मौजूद थे?",
        "options_hi": ["कोई नहीं", "कुछ", "बहुत", "भीड़"],
        "answer_hi": "कोई नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "बच्चे ने चश्मा कैसे लगाया?",
        "options_hi": ["सीढ़ी पर चढ़कर", "किसी की मदद से", "कूदकर", "रस्सी से"],
        "answer_hi": "सीढ़ी पर चढ़कर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "चश्मा लगाने में कितना समय लगा?",
        "options_hi": ["5 मिनट", "10 मिनट", "15 मिनट", "20 मिनट"],
        "answer_hi": "10 मिनट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "चश्मा लगाने के बाद बच्चे ने क्या किया?",
        "options_hi": ["प्रार्थना की", "मुस्कुराया", "रोया", "चला गया"],
        "answer_hi": "मुस्कुराया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "पुलिस ने चश्मा कब हटाया?",
        "options_hi": ["तुरंत", "अगले दिन", "एक सप्ताह बाद", "एक महीने बाद"],
        "answer_hi": "अगले दिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "पुलिस किसने बुलाई?",
        "options_hi": ["नेता", "अधिकारी", "दुकानदार", "सफाई कर्मचारी"],
        "answer_hi": "सफाई कर्मचारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "बच्चे ने दूसरा चश्मा कैसे चुना?",
        "options_hi": ["सस्ता", "मजबूत", "सुंदर", "बड़ा"],
        "answer_hi": "मजबूत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "दूसरा चश्मा किस रंग का था?",
        "options_hi": ["काला", "भूरा", "सुनहरा", "चांदी"],
        "answer_hi": "काला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "बच्चे ने दूसरा चश्मा किस दुकान से खरीदा?",
        "options_hi": ["पुरानी दुकान", "नई दुकान", "फुटपाथ", "बाजार"],
        "answer_hi": "फुटपाथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "दुकानदार ने बच्चे से क्या पूछा?",
        "options_hi": ["पैसे कहाँ से", "किसके लिए", "क्यों खरीदना", "कितने का चाहिए"],
        "answer_hi": "किसके लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "बच्चे ने दुकानदार को क्या बताया?",
        "options_hi": ["सच बताया", "झूठ बोला", "कुछ नहीं बताया", "मजाक किया"],
        "answer_hi": "सच बताया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "दुकानदार ने क्या प्रतिक्रिया दी?",
        "options_hi": ["हँसा", "गुस्सा हुआ", "दया आई", "सस्ता दिया"],
        "answer_hi": "दया आई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "दुकानदार ने चश्मे की कीमत कितनी रखी?",
        "options_hi": ["10 रुपये", "12 रुपये", "15 रुपये", "20 रुपये"],
        "answer_hi": "12 रुपये",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "बच्चे ने कितने पैसे दिए?",
        "options_hi": ["8 रुपये", "10 रुपये", "12 रुपये", "15 रुपये"],
        "answer_hi": "8 रुपये",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "दुकानदार ने बाकी पैसे क्या किए?",
        "options_hi": ["माफ किए", "बाद में लेने को कहा", "लिए", "छूट दी"],
        "answer_hi": "माफ किए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "बच्चे ने दूसरा चश्मा कब लगाया?",
        "options_hi": ["सुबह", "दोपहर", "शाम", "रात"],
        "answer_hi": "रात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "रात को चश्मा लगाते समय कौन देख रहा था?",
        "options_hi": ["पुलिस", "चौकीदार", "कोई नहीं", "कुछ लोग"],
        "answer_hi": "चौकीदार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "चौकीदार ने क्या किया?",
        "options_hi": ["रोका", "मदद की", "नजरअंदाज किया", "पुलिस को बुलाया"],
        "answer_hi": "नजरअंदाज किया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "दूसरा चश्मा कितने दिन तक रहा?",
        "options_hi": ["एक दिन", "दो दिन", "तीन दिन", "एक सप्ताह"],
        "answer_hi": "तीन दिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "दूसरा चश्मा क्यों हटाया गया?",
        "options_hi": ["पुलिस ने", "अधिकारी ने", "नेता ने", "स्वयं हट गया"],
        "answer_hi": "अधिकारी ने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "बच्चे ने तीसरा चश्मा लगाया या नहीं?",
        "options_hi": ["हाँ", "नहीं", "सोच रहा है", "पैसे नहीं हैं"],
        "answer_hi": "नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "कहानी का अंत कैसा है?",
        "options_hi": ["सुखद", "दुखद", "उदास", "आशावादी"],
        "answer_hi": "उदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "कहानी का मुख्य विषय क्या है?",
        "options_hi": ["गरीबी", "बाल मजदूरी", "देशभक्ति", "सामाजिक उदासीनता"],
        "answer_hi": "सामाजिक उदासीनता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "बच्चे की उम्र क्या है?",
        "options_hi": ["8", "10", "12", "14"],
        "answer_hi": "10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "बच्चे का कद कैसा है?",
        "options_hi": ["छोटा", "मध्यम", "लंबा", "दुबला-पतला"],
        "answer_hi": "छोटा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "बच्चे के कपड़े कैसे हैं?",
        "options_hi": ["साफ", "गंदे", "फटे", "नए"],
        "answer_hi": "फटे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "बच्चे के जूते कैसे हैं?",
        "options_hi": ["नए", "पुराने", "फटे", "नहीं हैं"],
        "answer_hi": "नहीं हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "बच्चे का चेहरा कैसा है?",
        "options_hi": ["गोरा", "सांवला", "काला", "गंदा"],
        "answer_hi": "सांवला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "बच्चे के बाल कैसे हैं?",
        "options_hi": ["घने", "पतले", "गंदे", "घुंघराले"],
        "answer_hi": "गंदे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "बच्चा किस मौसम में अखबार बेचता है?",
        "options_hi": ["सर्दी", "गर्मी", "बरसात", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "सर्दी में बच्चा क्या पहनता है?",
        "options_hi": ["स्वेटर", "जैकेट", "कंबल", "कपड़े के टुकड़े"],
        "answer_hi": "कपड़े के टुकड़े",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "बच्चे का खाना कैसा है?",
        "options_hi": ["पौष्टिक", "सादा", "अपर्याप्त", "विविध"],
        "answer_hi": "अपर्याप्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "बच्चा दिन में क्या खाता है?",
        "options_hi": ["रोटी-सब्जी", "दाल-रोटी", "चना", "बिस्कुट"],
        "answer_hi": "चना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "बच्चे के घर में बिजली है या नहीं?",
        "options_hi": ["हाँ", "नहीं", "कभी-कभी", "बिजली नहीं आती"],
        "answer_hi": "नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "बच्चे के घर में पानी कहाँ से आता है?",
        "options_hi": ["नल", "हैंडपंप", "नदी", "टैंकर"],
        "answer_hi": "हैंडपंप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "बच्चे का सपना क्या है?",
        "options_hi": ["पढ़ना", "अमीर बनना", "नेता बनना", "कोई सपना नहीं"],
        "answer_hi": "पढ़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "बच्चा किस भाषा में बोलता है?",
        "options_hi": ["हिंदी", "उर्दू", "हिंदुस्तानी", "स्थानीय भाषा"],
        "answer_hi": "हिंदुस्तानी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "बच्चे का स्वभाव कैसा है?",
        "options_hi": ["शर्मीला", "बातूनी", "चुपचाप", "मिलनसार"],
        "answer_hi": "शर्मीला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "बच्चा किससे डरता है?",
        "options_hi": ["पुलिस", "अध्यापक", "पिता", "अंधेरे"],
        "answer_hi": "पुलिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "बच्चे का पसंदीदा समय कौन सा है?",
        "options_hi": ["सुबह", "दोपहर", "शाम", "रात"],
        "answer_hi": "शाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "बच्चा कहाँ सोता है?",
        "options_hi": ["बिस्तर पर", "फर्श पर", "चारपाई पर", "बोरियों पर"],
        "answer_hi": "बोरियों पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "बच्चे के खिलौने क्या हैं?",
        "options_hi": ["गुड़िया", "गाड़ी", "पत्थर", "कोई नहीं"],
        "answer_hi": "पत्थर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "बच्चा किसके साथ खेलता है?",
        "options_hi": ["भाई-बहन", "दोस्त", "अकेला", "कोई नहीं"],
        "answer_hi": "अकेला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "बच्चे की पसंदीदा जगह कौन सी है?",
        "options_hi": ["मूर्ति वाला चौक", "घर", "स्कूल", "खेत"],
        "answer_hi": "मूर्ति वाला चौक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "बच्चा मूर्ति को क्या कहता है?",
        "options_hi": ["नेताजी", "बाबू", "साहब", "दादा"],
        "answer_hi": "नेताजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "मूर्ति की ऊँचाई कितनी है?",
        "options_hi": ["5 फीट", "6 फीट", "7 फीट", "8 फीट"],
        "answer_hi": "7 फीट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "मूर्ति किस धातु की है?",
        "options_hi": ["पत्थर", "कांस्य", "सीमेंट", "संगमरमर"],
        "answer_hi": "कांस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "मूर्ति का रंग कैसा है?",
        "options_hi": ["सुनहरा", "हरा", "काला", "भूरा"],
        "answer_hi": "काला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "मूर्ति पर नेताजी किस पोशाक में हैं?",
        "options_hi": ["सेना वर्दी", "धोती-कुर्ता", "सूट", "कोट-पैंट"],
        "answer_hi": "सेना वर्दी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "मूर्ति के हाथ में क्या है?",
        "options_hi": ["तलवार", "झंडा", "कुछ नहीं", "किताब"],
        "answer_hi": "तलवार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "मूर्ति के पैरों में क्या है?",
        "options_hi": ["जूते", "बूट", "चप्पल", "नंगे पैर"],
        "answer_hi": "बूट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "मूर्ति का चेहरा किस ओर है?",
        "options_hi": ["पूर्व", "पश्चिम", "उत्तर", "दक्षिण"],
        "answer_hi": "पूर्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "मूर्ति के चारों ओर क्या है?",
        "options_hi": ["बाग", "रोड", "इमारतें", "खाली जगह"],
        "answer_hi": "बाग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "मूर्ति के पास क्या है?",
        "options_hi": ["बेंच", "फव्वारा", "पार्क", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "मूर्ति पर कब चश्मा नहीं था?",
        "options_hi": ["हमेशा", "कभी-कभी", "शुरू से", "बाद में"],
        "answer_hi": "शुरू से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "मूर्ति कब बनी?",
        "options_hi": ["1947", "1950", "1960", "1970"],
        "answer_hi": "1960",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "मूर्ति किसने बनवाई?",
        "options_hi": ["सरकार", "जनता", "नेता", "अनजान"],
        "answer_hi": "सरकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "मूर्ति का अनावरण किसने किया?",
        "options_hi": ["मुख्यमंत्री", "प्रधानमंत्री", "राष्ट्रपति", "गवर्नर"],
        "answer_hi": "मुख्यमंत्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "मूर्ति की सफाई कौन करता है?",
        "options_hi": ["नगर निगम", "पुलिस", "जनता", "कोई नहीं"],
        "answer_hi": "नगर निगम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "मूर्ति पर कब फूल चढ़ते हैं?",
        "options_hi": ["रोज", "सप्ताह में", "त्योहारों पर", "कभी नहीं"],
        "answer_hi": "त्योहारों पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "कहानी का समय क्या है?",
        "options_hi": ["1970", "1980", "1990", "2000"],
        "answer_hi": "1990",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "कहानी का मौसम कौन सा है?",
        "options_hi": ["गर्मी", "सर्दी", "बरसात", "वसंत"],
        "answer_hi": "सर्दी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "कहानी की भाषा शैली कैसी है?",
        "options_hi": ["सरल", "जटिल", "आलंकारिक", "काव्यात्मक"],
        "answer_hi": "सरल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "कहानी का संदेश क्या है?",
        "options_hi": ["देशभक्ति", "गरीबी", "सामाजिक जागरूकता", "बाल अधिकार"],
        "answer_hi": "सामाजिक जागरूकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "कहानी का शीर्षक क्यों उचित है?",
        "options_hi": ["प्रतीकात्मक", "आकर्षक", "केंद्रीय विषय", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "कहानी का सबसे मार्मिक प्रसंग कौन सा है?",
        "options_hi": ["चश्मा लगाना", "चश्मा हटाना", "दूसरा चश्मा", "बच्चे की गरीबी"],
        "answer_hi": "चश्मा हटाना",
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