const questions = [
    {
        "num": 1,
        "question_hi": "स्वयं प्रकाश की यह कहानी किस वर्ष प्रकाशित हुई?",
        "options_hi": ["1985", "1990", "1995", "2000"],
        "answer_hi": "1990",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "कहानी में नेताजी की मूर्ति किस पार्क में स्थित है?",
        "options_hi": ["गांधी पार्क", "नेताजी पार्क", "सुभाष पार्क", "आजाद पार्क"],
        "answer_hi": "नेताजी पार्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "बच्चे ने पहली बार चश्मा लगाने की योजना कब बनाई?",
        "options_hi": ["जनवरी", "मार्च", "जुलाई", "दिसंबर"],
        "answer_hi": "जुलाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "बच्चे ने चश्मे के पैसे कितने महीनों में जमा किए?",
        "options_hi": ["2", "3", "4", "6"],
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "बच्चा प्रतिदिन कितने घंटे काम करता है?",
        "options_hi": ["6", "8", "10", "12"],
        "answer_hi": "10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "बच्चे के पिता किस कारखाने में काम करते हैं?",
        "options_hi": ["कपड़ा मिल", "इंजीनियरिंग", "रसायन", "चमड़ा"],
        "answer_hi": "कपड़ा मिल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "बच्चे की माँ कितने घरों में काम करती है?",
        "options_hi": ["2", "3", "4", "5"],
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "बच्चे का सबसे छोटा भाई कितने साल का है?",
        "options_hi": ["2", "3", "4", "5"],
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "बच्चे का परिवार किस राज्य से आया है?",
        "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "राजस्थान"],
        "answer_hi": "उत्तर प्रदेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "बच्चे के परिवार का गाँव कहाँ है?",
        "options_hi": ["बलिया", "आजमगढ़", "गोरखपुर", "वाराणसी"],
        "answer_hi": "बलिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "बच्चे का परिवार शहर में कितने साल से रह रहा है?",
        "options_hi": ["5", "8", "10", "12"],
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "बच्चे के घर की छत किससे बनी है?",
        "options_hi": ["स्लेट", "टीन", "खपरैल", "कंक्रीट"],
        "answer_hi": "टीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "बच्चे के घर का फर्श किससे बना है?",
        "options_hi": ["सीमेंट", "मिट्टी", "ईंट", "पत्थर"],
        "answer_hi": "मिट्टी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "बच्चा सर्दियों में क्या ओढ़कर सोता है?",
        "options_hi": ["रजाई", "कंबल", "पुराने कपड़े", "बोरियाँ"],
        "answer_hi": "पुराने कपड़े",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "बच्चा प्रतिदिन कितने किलोमीटर पैदल चलता है?",
        "options_hi": ["5", "8", "10", "12"],
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "बच्चे का पसंदीदा अखबार कौन सा है?",
        "options_hi": ["नवभारत", "जनसत्ता", "अमर उजाला", "हिंदुस्तान"],
        "answer_hi": "जनसत्ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "बच्चा अखबार बेचने के लिए किस इलाके में जाता है?",
        "options_hi": ["कैंट", "कोर्ट", "कॉलेज", "मार्केट"],
        "answer_hi": "कैंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "बच्चे का सबसे अच्छा ग्राहक कौन है?",
        "options_hi": ["एक रिटायर्ड मेजर", "एक अध्यापक", "एक दुकानदार", "एक वकील"],
        "answer_hi": "एक रिटायर्ड मेजर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "मेजर साहब बच्चे को क्या देते हैं?",
        "options_hi": ["पुराने कपड़े", "किताबें", "मिठाई", "अतिरिक्त पैसे"],
        "answer_hi": "अतिरिक्त पैसे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "बच्चे ने पहली बार मूर्ति देखकर क्या सोचा?",
        "options_hi": ["बहुत बड़ी है", "चश्मा क्यों नहीं", "डरावनी है", "सुंदर है"],
        "answer_hi": "चश्मा क्यों नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "बच्चे ने मूर्ति को चश्मा लगाने का विचार कहाँ से लिया?",
        "options_hi": ["एक तस्वीर से", "एक फिल्म से", "एक सपने से", "एक कहानी से"],
        "answer_hi": "एक तस्वीर से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "वह तस्वीर बच्चे ने कहाँ देखी थी?",
        "options_hi": ["स्कूल में", "दुकान में", "अखबार में", "किताब में"],
        "answer_hi": "अखबार में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "बच्चे ने चश्मा खरीदने से पहले क्या किया?",
        "options_hi": ["माप लिया", "चित्र बनाया", "पूछताछ की", "बचत की"],
        "answer_hi": "माप लिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "बच्चे ने मूर्ति की आँखों का माप कैसे लिया?",
        "options_hi": ["धागे से", "पैमाने से", "अनुमान से", "फोटो से"],
        "answer_hi": "धागे से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "बच्चे ने चश्मा खरीदने के लिए किस दुकान पर पूछताछ की?",
        "options_hi": ["3", "5", "7", "10"],
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "पहला चश्मा किस प्रकार का था?",
        "options_hi": ["गोल", "चौकोर", "आयताकार", "ओवल"],
        "answer_hi": "गोल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "पहले चश्मे का फ्रेम किस रंग का था?",
        "options_hi": ["सुनहरा", "काला", "भूरा", "सिल्वर"],
        "answer_hi": "सिल्वर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "बच्चे ने चश्मा किस दिन खरीदा?",
        "options_hi": ["शनिवार", "रविवार", "सोमवार", "मंगलवार"],
        "answer_hi": "शनिवार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "चश्मा खरीदने के बाद बच्चे ने क्या किया?",
        "options_hi": ["छुपाया", "दिखाया", "लगाया", "तोड़ा"],
        "answer_hi": "छुपाया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "बच्चे ने चश्मा कहाँ छुपाया?",
        "options_hi": ["तकिए के नीचे", "टीन की पेटी में", "कपड़ों में", "दीवार के पीछे"],
        "answer_hi": "टीन की पेटी में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "बच्चे ने चश्मा लगाने के लिए किसकी मदद ली?",
        "options_hi": ["भाई की", "दोस्त की", "सीढ़ी की", "रस्सी की"],
        "answer_hi": "सीढ़ी की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "सीढ़ी बच्चे ने कहाँ से ली?",
        "options_hi": ["घर से", "पड़ोस से", "दुकान से", "पार्क से"],
        "answer_hi": "पड़ोस से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "सीढ़ी ले जाते समय किसने देखा?",
        "options_hi": ["पुलिस", "चौकीदार", "पड़ोसी", "कोई नहीं"],
        "answer_hi": "पड़ोसी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "पड़ोसी ने क्या पूछा?",
        "options_hi": ["क्या कर रहे हो", "कहाँ ले जा रहे हो", "क्यों ले जा रहे हो", "किसके लिए ले जा रहे हो"],
        "answer_hi": "कहाँ ले जा रहे हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "बच्चे ने क्या जवाब दिया?",
        "options_hi": ["झूठ बोला", "सच बोला", "चुप रहा", "हँस दिया"],
        "answer_hi": "झूठ बोला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "बच्चे ने क्या झूठ बोला?",
        "options_hi": ["मरम्मत के लिए", "सफाई के लिए", "काम के लिए", "खेल के लिए"],
        "answer_hi": "मरम्मत के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "चश्मा लगाने में सबसे मुश्किल क्या थी?",
        "options_hi": ["ऊँचाई", "अंधेरा", "डर", "भार"],
        "answer_hi": "अंधेरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "बच्चे ने अंधेरे में कैसे देखा?",
        "options_hi": ["टॉर्च से", "माचिस से", "स्ट्रीट लाइट से", "चाँदनी से"],
        "answer_hi": "स्ट्रीट लाइट से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "चश्मा लगाते समय बच्चे का हाथ क्यों काँप रहा था?",
        "options_hi": ["थकान", "डर", "ठंड", "उत्साह"],
        "answer_hi": "डर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "चश्मा लगाने के बाद बच्चे ने क्या महसूस किया?",
        "options_hi": ["गर्व", "डर", "खुशी", "संतोष"],
        "answer_hi": "संतोष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "अगले दिन सुबह पहला किसने चश्मा देखा?",
        "options_hi": ["व्यायाम करने वाले", "सफाई कर्मचारी", "पुलिस", "दुकानदार"],
        "answer_hi": "व्यायाम करने वाले",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "लोगों की प्रतिक्रिया कैसी थी?",
        "options_hi": ["हँसे", "गुस्सा हुए", "आश्चर्यचकित हुए", "उदासीन रहे"],
        "answer_hi": "आश्चर्यचकित हुए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "कितने लोग इकट्ठा हुए?",
        "options_hi": ["10-15", "20-25", "30-40", "50-60"],
        "answer_hi": "20-25",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "लोगों ने क्या अटकलें लगाईं?",
        "options_hi": ["नेता ने लगाया", "बच्चे ने लगाया", "अधिकारी ने लगाया", "अज्ञात"],
        "answer_hi": "नेता ने लगाया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "पुलिस किसने बुलाई?",
        "options_hi": ["पार्क कर्मचारी", "स्थानीय नेता", "सफाई विभाग", "नगर निगम"],
        "answer_hi": "पार्क कर्मचारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "पुलिस ने चश्मा कैसे हटाया?",
        "options_hi": ["हाथ से", "छड़ी से", "सीढ़ी से", "रस्सी से"],
        "answer_hi": "सीढ़ी से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "चश्मा हटाते समय क्या हुआ?",
        "options_hi": ["टूट गया", "खराब हुआ", "सुरक्षित हटा", "गिर गया"],
        "answer_hi": "टूट गया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "टूटा चश्मा पुलिस ने क्या किया?",
        "options_hi": ["फेंक दिया", "रख लिया", "बच्चे को दिया", "कचरे में डाला"],
        "answer_hi": "कचरे में डाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "बच्चे ने टूटा चश्मा कब देखा?",
        "options_hi": ["तुरंत", "शाम को", "अगले दिन", "तीन दिन बाद"],
        "answer_hi": "शाम को",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "बच्चे ने टूटा चश्मा देखकर क्या किया?",
        "options_hi": ["उठा लिया", "रोया", "चुप रहा", "गुस्सा हुआ"],
        "answer_hi": "चुप रहा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "दूसरा चश्मा खरीदने का निर्णय बच्चे ने कब लिया?",
        "options_hi": ["तुरंत", "एक सप्ताह बाद", "दो सप्ताह बाद", "एक महीने बाद"],
        "answer_hi": "एक सप्ताह बाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "दूसरे चश्मे के लिए बच्चे ने कितने पैसे जमा किए?",
        "options_hi": ["5 रुपये", "8 रुपये", "10 रुपये", "12 रुपये"],
        "answer_hi": "8 रुपये",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "दूसरा चश्मा बच्चे ने किससे खरीदा?",
        "options_hi": ["एक बूढ़े से", "एक युवक से", "एक औरत से", "एक दुकानदार से"],
        "answer_hi": "एक बूढ़े से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "बूढ़ा कहाँ बैठा था?",
        "options_hi": ["फुटपाथ पर", "दुकान में", "पार्क में", "मंदिर में"],
        "answer_hi": "फुटपाथ पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "बूढ़े ने चश्मे की कीमत कितनी बताई?",
        "options_hi": ["5 रुपये", "8 रुपये", "10 रुपये", "15 रुपये"],
        "answer_hi": "10 रुपये",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "बच्चे ने कितने पैसे दिए?",
        "options_hi": ["5 रुपये", "7 रुपये", "8 रुपये", "10 रुपये"],
        "answer_hi": "7 रुपये",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "बूढ़े ने बाकी पैसे क्यों माफ किए?",
        "options_hi": ["दया आई", "समझ गया", "खुश हुआ", "बच्चा पसंद आया"],
        "answer_hi": "समझ गया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "दूसरा चश्मा किस समय लगाया गया?",
        "options_hi": ["अर्धरात्रि", "प्रातः", "दोपहर", "संध्या"],
        "answer_hi": "अर्धरात्रि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "इस बार सीढ़ी कहाँ से ली गई?",
        "options_hi": ["वही पड़ोस से", "दूसरे पड़ोस से", "पार्क से", "घर से"],
        "answer_hi": "दूसरे पड़ोस से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "दूसरी बार चश्मा लगाते समय कौन देख रहा था?",
        "options_hi": ["चौकीदार", "पुलिस", "पार्क कर्मचारी", "रात का पहरेदार"],
        "answer_hi": "रात का पहरेदार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "पहरेदार ने क्या किया?",
        "options_hi": ["रोका", "मदद की", "नजरअंदाज किया", "पुलिस बुलाई"],
        "answer_hi": "नजरअंदाज किया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "दूसरा चश्मा कितने दिन तक रहा?",
        "options_hi": ["2", "3", "4", "5"],
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "दूसरा चश्मा किसने हटाया?",
        "options_hi": ["नगर आयुक्त", "पार्क अधिकारी", "पुलिस कमिश्नर", "मेयर"],
        "answer_hi": "नगर आयुक्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "दूसरा चश्मा हटाने का कारण क्या बताया गया?",
        "options_hi": ["अनधिकृत", "बदसूरत", "खतरनाक", "गलत आकार"],
        "answer_hi": "अनधिकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "दूसरा चश्मा हटाने के बाद क्या हुआ?",
        "options_hi": ["अखबार में छपा", "चर्चा हुई", "जाँच हुई", "कुछ नहीं"],
        "answer_hi": "अखबार में छपा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "अखबार में क्या छपा?",
        "options_hi": ["छोटी खबर", "बड़ी खबर", "संपादकीय", "चित्र सहित"],
        "answer_hi": "छोटी खबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "बच्चे ने अखबार की खबर कब देखी?",
        "options_hi": ["अगले दिन", "दो दिन बाद", "सप्ताह बाद", "कभी नहीं"],
        "answer_hi": "अगले दिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "खबर पढ़कर बच्चे ने क्या किया?",
        "options_hi": ["रोया", "हँसा", "चुप रहा", "गुस्सा हुआ"],
        "answer_hi": "चुप रहा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "तीसरा चश्मा लगाने के बारे में बच्चे ने क्या सोचा?",
        "options_hi": ["लगाऊँगा", "नहीं लगाऊँगा", "सोचूँगा", "बाद में देखूँगा"],
        "answer_hi": "नहीं लगाऊँगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "बच्चे ने अंतिम बार मूर्ति को कब देखा?",
        "options_hi": ["एक सप्ताह बाद", "दो सप्ताह बाद", "एक महीने बाद", "कभी नहीं"],
        "answer_hi": "दो सप्ताह बाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "अंतिम बार देखने पर बच्चे ने क्या महसूस किया?",
        "options_hi": ["दुख", "क्रोध", "स्वीकार", "उदासी"],
        "answer_hi": "स्वीकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "कहानी के अंत में बच्चा क्या कर रहा है?",
        "options_hi": ["अखबार बेच रहा", "स्कूल जा रहा", "नया काम कर रहा", "बीमार है"],
        "answer_hi": "अखबार बेच रहा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "बच्चे का जीवन कैसा चल रहा है?",
        "options_hi": ["वैसा ही", "बेहतर", "बदतर", "अलग"],
        "answer_hi": "वैसा ही",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "बच्चे की उम्र अब क्या है?",
        "options_hi": ["11", "12", "13", "14"],
        "answer_hi": "11",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "बच्चे का भविष्य कैसा दिखता है?",
        "options_hi": ["उज्ज्वल", "अंधकारमय", "अनिश्चित", "सामान्य"],
        "answer_hi": "अनिश्चित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "मूर्ति का भविष्य कैसा है?",
        "options_hi": ["वैसी ही रहेगी", "सुधरेगी", "खराब होगी", "हटाई जाएगी"],
        "answer_hi": "वैसी ही रहेगी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "समाज की प्रतिक्रिया कैसी रही?",
        "options_hi": ["उदासीन", "सक्रिय", "विरोधी", "सहानुभूतिपूर्ण"],
        "answer_hi": "उदासीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "प्रशासन की भूमिका कैसी थी?",
        "options_hi": ["कठोर", "लचीली", "अनुपस्थित", "सहायक"],
        "answer_hi": "कठोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "मीडिया की भूमिका कैसी थी?",
        "options_hi": ["सकारात्मक", "नकारात्मक", "तटस्थ", "अनुपस्थित"],
        "answer_hi": "तटस्थ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "कहानी का सबसे महत्वपूर्ण पात्र कौन है?",
        "options_hi": ["बच्चा", "नेताजी", "पुलिस", "समाज"],
        "answer_hi": "बच्चा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "कहानी का सबसे महत्वपूर्ण प्रतीक क्या है?",
        "options_hi": ["चश्मा", "मूर्ति", "बच्चा", "पार्क"],
        "answer_hi": "चश्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "चश्मा किसका प्रतीक है?",
        "options_hi": ["दृष्टि", "संवेदना", "सम्मान", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "मूर्ति किसका प्रतीक है?",
        "options_hi": ["शासन", "परंपरा", "राष्ट्र", "सत्ता"],
        "answer_hi": "सत्ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "बच्चा किसका प्रतीक है?",
        "options_hi": ["आम आदमी", "गरीब", "बाल मजदूर", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "पार्क किसका प्रतीक है?",
        "options_hi": ["समाज", "सार्वजनिक स्थल", "सुविधा", "उपेक्षा"],
        "answer_hi": "समाज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "कहानी की शैली कैसी है?",
        "options_hi": ["यथार्थवादी", "प्रतीकात्मक", "व्यंग्यात्मक", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "कहानी का मुख्य संघर्ष क्या है?",
        "options_hi": ["व्यक्ति बनाम व्यवस्था", "गरीब बनाम अमीर", "बच्चा बनाम समाज", "भावना बनाम नियम"],
        "answer_hi": "व्यक्ति बनाम व्यवस्था",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "कहानी का केंद्रीय भाव क्या है?",
        "options_hi": ["करुणा", "विद्रोह", "आशा", "निराशा"],
        "answer_hi": "करुणा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "कहानी की भाषा की विशेषता क्या है?",
        "options_hi": ["सरल", "बोधगम्य", "मार्मिक", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "कहानी का सामाजिक संदेश क्या है?",
        "options_hi": ["संवेदनहीनता", "बाल श्रम", "गरीबी", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "कहानी का राजनीतिक संदेश क्या है?",
        "options_hi": ["व्यवस्था की कठोरता", "जनता की उपेक्षा", "प्रशासनिक उदासीनता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "कहानी का मनोवैज्ञानिक पक्ष क्या है?",
        "options_hi": ["बच्चे की मनोदशा", "समाज की प्रतिक्रिया", "अधिकारियों का रवैया", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "कहानी की सफलता का कारण क्या है?",
        "options_hi": ["विषय", "शैली", "संवेदना", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "कहानी किस पाठ्यक्रम में शामिल है?",
        "options_hi": ["हिंदी साहित्य", "समाजशास्त्र", "बाल साहित्य", "सभी"],
        "answer_hi": "हिंदी साहित्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "कहानी पर आधारित नाटक कहाँ मंचित हुआ?",
        "options_hi": ["दिल्ली", "मुंबई", "कानपुर", "इलाहाबाद"],
        "answer_hi": "दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "कहानी पर किसने समीक्षा लिखी?",
        "options_hi": ["नामवर सिंह", "रामविलास शर्मा", "मैनेजर पाण्डेय", "विश्वनाथ त्रिपाठी"],
        "answer_hi": "नामवर सिंह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "कहानी को किस पुरस्कार से सम्मानित किया गया?",
        "options_hi": ["साहित्य अकादमी", "व्यास सम्मान", "पद्मश्री", "कोई नहीं"],
        "answer_hi": "कोई नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "कहानी का अनुवाद किन भाषाओं में हुआ?",
        "options_hi": ["अंग्रेजी", "उर्दू", "बांग्ला", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "कहानी के आधार पर फिल्म बनी या नहीं?",
        "options_hi": ["हाँ", "नहीं", "बन रही", "योजना है"],
        "answer_hi": "नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "कहानी का स्थायी महत्व क्या है?",
        "options_hi": ["सामाजिक यथार्थ", "साहित्यिक मूल्य", "मानवीय संवेदना", "सभी"],
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