const questions = [
    {
        "num": 1,
        "question_hi": "विचित्र संख्याओं का मूल ग्रंथ कौन सा है?",
        "options_hi": ["विचित्र संख्यावली", "गणितसार संग्रह", "लीलावती", "ब्रह्मस्फुट सिद्धांत"],
        "answer_hi": "विचित्र संख्यावली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "विचित्र संख्याओं का प्रणेता कौन है?",
        "options_hi": ["भास्कराचार्य", "आर्यभट्ट", "वराहमिहिर", "ब्रह्मगुप्त"],
        "answer_hi": "भास्कराचार्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "विचित्र संख्याएँ कितने प्रकार की होती हैं?",
        "options_hi": ["चार", "तीन", "पाँच", "छह"],
        "answer_hi": "चार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "पूर्ण विचित्र संख्या क्या होती है?",
        "options_hi": ["जिसके भाजकों का योग स्वयं संख्या के बराबर हो", "जिसके भाजकों का योग अधिक हो", "जिसके भाजकों का योग कम हो", "जिसका कोई भाजक न हो"],
        "answer_hi": "जिसके भाजकों का योग स्वयं संख्या के बराबर हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "अति विचित्र संख्या क्या होती है?",
        "options_hi": ["जिसके भाजकों का योग स्वयं संख्या से अधिक हो", "जिसके भाजकों का योग स्वयं संख्या से कम हो", "जिसके भाजकों का योग स्वयं संख्या के बराबर हो", "जिसका कोई भाजक न हो"],
        "answer_hi": "जिसके भाजकों का योग स्वयं संख्या से अधिक हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "न्यून विचित्र संख्या क्या होती है?",
        "options_hi": ["जिसके भाजकों का योग स्वयं संख्या से कम हो", "जिसके भाजकों का योग स्वयं संख्या से अधिक हो", "जिसके भाजकों का योग स्वयं संख्या के बराबर हो", "जिसके भाजक अनगिनत हों"],
        "answer_hi": "जिसके भाजकों का योग स्वयं संख्या से कम हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "पहली पूर्ण विचित्र संख्या कौन सी है?",
        "options_hi": ["6", "28", "496", "8128"],
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "दूसरी पूर्ण विचित्र संख्या कौन सी है?",
        "options_hi": ["28", "6", "496", "8128"],
        "answer_hi": "28",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "तीसरी पूर्ण विचित्र संख्या कौन सी है?",
        "options_hi": ["496", "6", "28", "8128"],
        "answer_hi": "496",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "चौथी पूर्ण विचित्र संख्या कौन सी है?",
        "options_hi": ["8128", "6", "28", "496"],
        "answer_hi": "8128",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "पूर्ण विचित्र संख्याओं का सूत्र क्या है?",
        "options_hi": ["2^(p-1) × (2^p - 1)", "2^p × (2^p - 1)", "2^(p+1) × (2^p - 1)", "2^p × (2^p + 1)"],
        "answer_hi": "2^(p-1) × (2^p - 1)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "मैत्री संख्याएँ क्या होती हैं?",
        "options_hi": ["ऐसी संख्या युगल जिसमें एक संख्या के भाजकों का योग दूसरी संख्या होती है", "समान संख्याएँ", "विषम संख्याएँ", "अभाज्य संख्याएँ"],
        "answer_hi": "ऐसी संख्या युगल जिसमें एक संख्या के भाजकों का योग दूसरी संख्या होती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "पहला मैत्री युगल क्या है?",
        "options_hi": ["(220, 284)", "(1184, 1210)", "(6, 28)", "(496, 8128)"],
        "answer_hi": "(220, 284)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "मैत्री संख्याओं का आविष्कारक कौन है?",
        "options_hi": ["पाइथागोरस", "यूक्लिड", "आर्किमिडीज", "न्यूटन"],
        "answer_hi": "पाइथागोरस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "अभाज्य संख्याएँ विचित्र संख्याओं में कैसे वर्गीकृत हैं?",
        "options_hi": ["न्यून विचित्र संख्याएँ", "पूर्ण विचित्र संख्याएँ", "अति विचित्र संख्याएँ", "मिश्र विचित्र संख्याएँ"],
        "answer_hi": "न्यून विचित्र संख्याएँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "सम संख्याएँ विचित्र संख्याओं में किस वर्ग में होती हैं?",
        "options_hi": ["सभी तीनों वर्गों में", "केवल पूर्ण विचित्र में", "केवल न्यून विचित्र में", "केवल अति विचित्र में"],
        "answer_hi": "सभी तीनों वर्गों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "विषम संख्याएँ विचित्र संख्याओं में किस वर्ग में हैं?",
        "options_hi": ["केवल न्यून विचित्र में", "सभी वर्गों में", "केवल पूर्ण विचित्र में", "केवल अति विचित्र में"],
        "answer_hi": "केवल न्यून विचित्र में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "विचित्र संख्याओं का गणितीय महत्व क्या है?",
        "options_hi": ["संख्या सिद्धांत में", "बीजगणित में", "रेखागणित में", "त्रिकोणमिति में"],
        "answer_hi": "संख्या सिद्धांत में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "विचित्र संख्याओं का प्रयोग कहाँ होता है?",
        "options_hi": ["कूटलेखन (एन्क्रिप्शन) में", "वास्तुशास्त्र में", "ज्योतिष में", "वैद्यकशास्त्र में"],
        "answer_hi": "कूटलेखन (एन्क्रिप्शन) में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "विचित्र संख्याओं का ऐतिहासिक महत्व क्या है?",
        "options_hi": ["प्राचीन भारतीय गणित में", "आधुनिक गणित में", "यूनानी गणित में", "चीनी गणित में"],
        "answer_hi": "प्राचीन भारतीय गणित में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "विचित्र संख्याओं का सिद्धांत किस ग्रंथ में वर्णित है?",
        "options_hi": ["लीलावती में", "सिद्धांतशिरोमणि में", "आर्यभटीय में", "पंचसिद्धांतिका में"],
        "answer_hi": "लीलावती में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "किसी संख्या के भाजकों के योग की गणना का सूत्र क्या है?",
        "options_hi": ["σ(n)", "π(n)", "τ(n)", "φ(n)"],
        "answer_hi": "σ(n)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "पूर्ण विचित्र संख्या की पहचान क्या है?",
        "options_hi": ["σ(n) = 2n", "σ(n) > 2n", "σ(n) < 2n", "σ(n) = n"],
        "answer_hi": "σ(n) = 2n",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "अति विचित्र संख्या की पहचान क्या है?",
        "options_hi": ["σ(n) > 2n", "σ(n) = 2n", "σ(n) < 2n", "σ(n) = n"],
        "answer_hi": "σ(n) > 2n",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "न्यून विचित्र संख्या की पहचान क्या है?",
        "options_hi": ["σ(n) < 2n", "σ(n) = 2n", "σ(n) > 2n", "σ(n) = 0"],
        "answer_hi": "σ(n) < 2n",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "पहली अति विचित्र संख्या कौन सी है?",
        "options_hi": ["12", "6", "28", "496"],
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "पहली न्यून विचित्र संख्या कौन सी है?",
        "options_hi": ["1", "2", "3", "4"],
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "मैत्री युगल का गणितीय सूत्र क्या है?",
        "options_hi": ["σ(m) = σ(n) = m + n", "σ(m) = n, σ(n) = m", "m × n = σ(m) + σ(n)", "m + n = σ(m) × σ(n)"],
        "answer_hi": "σ(m) = n, σ(n) = m",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "विचित्र संख्याओं का अध्ययन गणित की किस शाखा में आता है?",
        "options_hi": ["संख्या सिद्धांत", "विश्लेषण गणित", "व्यावहारिक गणित", "सांख्यिकी"],
        "answer_hi": "संख्या सिद्धांत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "विचित्र संख्याओं का संबंध किन गणितज्ञों ने स्थापित किया?",
        "options_hi": ["यूनानी गणितज्ञों ने", "भारतीय गणितज्ञों ने", "अरब गणितज्ञों ने", "यूरोपीय गणितज्ञों ने"],
        "answer_hi": "यूनानी गणितज्ञों ने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "विचित्र संख्याओं का प्राचीनतम उल्लेख कहाँ मिलता है?",
        "options_hi": ["यूनानी ग्रंथों में", "भारतीय ग्रंथों में", "चीनी ग्रंथों में", "मिस्र के ग्रंथों में"],
        "answer_hi": "यूनानी ग्रंथों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "पूर्ण विचित्र संख्या का दार्शनिक महत्व क्या है?",
        "options_hi": ["पूर्णता का प्रतीक", "शून्य का प्रतीक", "अनंत का प्रतीक", "सृष्टि का प्रतीक"],
        "answer_hi": "पूर्णता का प्रतीक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "विचित्र संख्याओं की खोज कब शुरू हुई?",
        "options_hi": ["प्राचीन काल में", "मध्य काल में", "आधुनिक काल में", "समकालीन काल में"],
        "answer_hi": "प्राचीन काल में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "विचित्र संख्याओं पर शोध किन गणितज्ञों ने किया?",
        "options_hi": ["यूक्लिड, यूलर, डेकार्ट", "न्यूटन, लाइबनिज, गॉस", "पाइथागोरस, आर्किमिडीज, यूक्लिड", "रामानुजन, हार्डी, रीमान"],
        "answer_hi": "यूक्लिड, यूलर, डेकार्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "विचित्र संख्याओं का कूटलेखन में प्रयोग क्यों होता है?",
        "options_hi": ["उनकी दुर्लभता के कारण", "उनकी सुलभता के कारण", "उनकी साधारणता के कारण", "उनकी कम संख्या के कारण"],
        "answer_hi": "उनकी दुर्लभता के कारण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "विचित्र संख्याओं के संस्कृत नाम क्या हैं?",
        "options_hi": ["पूर्णा, अतिरिक्ता, न्यूना", "समा, विषमा, मिश्रा", "अभाज्या, साज्या, भाज्या", "बृहत्, मध्यम, लघु"],
        "answer_hi": "पूर्णा, अतिरिक्ता, न्यूना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "मैत्री संख्याओं का संस्कृत नाम क्या है?",
        "options_hi": ["मित्र संख्याएँ", "युगल संख्याएँ", "सखी संख्याएँ", "सहचर संख्याएँ"],
        "answer_hi": "मित्र संख्याएँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "विचित्र संख्याओं का व्यावहारिक उपयोग कहाँ है?",
        "options_hi": ["कंप्यूटर विज्ञान में", "भौतिक विज्ञान में", "रसायन विज्ञान में", "जीव विज्ञान में"],
        "answer_hi": "कंप्यूटर विज्ञान में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "विचित्र संख्याओं का वर्तमान शोध विषय क्या है?",
        "options_hi": ["विषम पूर्ण संख्याओं की खोज", "नए मैत्री युगलों की खोज", "बड़ी विचित्र संख्याओं की गणना", "उपरोक्त सभी"],
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "ज्ञात विचित्र संख्याओं की संख्या कितनी है?",
        "options_hi": ["अनंत", "सीमित", "थोड़ी", "बहुत सारी"],
        "answer_hi": "सीमित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "ज्ञात पूर्ण विचित्र संख्याओं की संख्या कितनी है?",
        "options_hi": ["51", "100", "असंख्य", "अनंत"],
        "answer_hi": "51",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "ज्ञात मैत्री युगलों की संख्या कितनी है?",
        "options_hi": ["1000", "5000", "10000", "बहुत सारे"],
        "answer_hi": "बहुत सारे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "विचित्र संख्याओं की गणना में कठिनाई क्या है?",
        "options_hi": ["बड़ी संख्याओं के भाजकों के योग की गणना", "सूत्र की जटिलता", "प्रमेयों का अभाव", "कंप्यूटर की अक्षमता"],
        "answer_hi": "बड़ी संख्याओं के भाजकों के योग की गणना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "विचित्र संख्याओं के अध्ययन का महत्व क्या है?",
        "options_hi": ["गणितीय सिद्धांतों का विकास", "व्यावहारिक उपयोग", "शैक्षणिक महत्व", "उपरोक्त सभी"],
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "विचित्र संख्याओं का संस्कृत साहित्य में उल्लेख कहाँ मिलता है?",
        "options_hi": ["गणित ग्रंथों में", "काव्यों में", "नाटकों में", "पुराणों में"],
        "answer_hi": "गणित ग्रंथों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "विचित्र संख्याओं का शिक्षण किस कक्षा में होता है?",
        "options_hi": ["उच्च माध्यमिक कक्षा", "प्राथमिक कक्षा", "माध्यमिक कक्षा", "स्नातकोत्तर कक्षा"],
        "answer_hi": "उच्च माध्यमिक कक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "विचित्र संख्याओं का अंतर्राष्ट्रीय महत्व क्या है?",
        "options_hi": ["गणितीय शोध में", "तकनीकी विकास में", "शिक्षण प्रणाली में", "व्यापार में"],
        "answer_hi": "गणितीय शोध में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "विचित्र संख्याओं का भविष्य का शोध क्या है?",
        "options_hi": ["नए प्रकारों की खोज", "अधिक मैत्री युगलों की खोज", "व्यावहारिक उपयोगों का विकास", "उपरोक्त सभी"],
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "विचित्र संख्याओं का संबंध किन गणितीय सिद्धांतों से है?",
        "options_hi": ["अभाज्य संख्या सिद्धांतों से", "बीजगणितीय सिद्धांतों से", "ज्यामितीय सिद्धांतों से", "सांख्यिकीय सिद्धांतों से"],
        "answer_hi": "अभाज्य संख्या सिद्धांतों से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "विचित्र संख्याओं के अध्ययन का सबसे कठिन पक्ष क्या है?",
        "options_hi": ["बड़ी संख्याओं का विश्लेषण", "सिद्धांतों का प्रमाणीकरण", "उपयोगों की खोज", "शिक्षण विधि का निर्माण"],
        "answer_hi": "बड़ी संख्याओं का विश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "विचित्र संख्याएँ क्या होती हैं?",
        "options_hi": ["जो सामान्य संख्याओं से विशिष्ट गुणों में भिन्न होती हैं", "जो केवल सम होती हैं", "जो केवल विषम होती हैं", "जो केवल अभाज्य होती हैं"],
        "answer_hi": "जो सामान्य संख्याओं से विशिष्ट गुणों में भिन्न होती हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "किस संख्या के भाजक 1, 2, 3, 6 हैं?",
        "options_hi": ["6", "12", "28", "496"],
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "6 के भाजकों का योग क्या है?",
        "options_hi": ["12", "6", "18", "24"],
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "28 के भाजक कौन से हैं?",
        "options_hi": ["1, 2, 4, 7, 14, 28", "1, 2, 3, 4, 7, 14, 28", "1, 2, 4, 8, 14, 28", "1, 2, 7, 14, 28"],
        "answer_hi": "1, 2, 4, 7, 14, 28",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "28 के भाजकों का योग क्या है?",
        "options_hi": ["56", "28", "84", "112"],
        "answer_hi": "56",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "कितनी संख्याएँ पूर्ण विचित्र संख्याएँ हैं?",
        "options_hi": ["अनंत", "सीमित", "असंख्य", "असीम"],
        "answer_hi": "सीमित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "सभी पूर्ण विचित्र संख्याएँ क्या होती हैं?",
        "options_hi": ["सम संख्याएँ", "विषम संख्याएँ", "अभाज्य संख्याएँ", "मिश्र संख्याएँ"],
        "answer_hi": "सम संख्याएँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "विषम पूर्ण विचित्र संख्या क्या है?",
        "options_hi": ["अब तक नहीं मिली", "1", "3", "5"],
        "answer_hi": "अब तक नहीं मिली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "मैत्री युगल का उदाहरण क्या है?",
        "options_hi": ["220 और 284", "6 और 28", "496 और 8128", "12 और 18"],
        "answer_hi": "220 और 284",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "220 के भाजकों का योग क्या है?",
        "options_hi": ["284", "220", "440", "504"],
        "answer_hi": "284",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "284 के भाजकों का योग क्या है?",
        "options_hi": ["220", "284", "568", "852"],
        "answer_hi": "220",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "अति विचित्र संख्याओं की संख्या कितनी है?",
        "options_hi": ["अनंत", "सीमित", "थोड़ी", "बहुत सारी"],
        "answer_hi": "अनंत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "न्यून विचित्र संख्याओं की संख्या कितनी है?",
        "options_hi": ["अनंत", "सीमित", "थोड़ी", "बहुत सारी"],
        "answer_hi": "अनंत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "कौन सी अभाज्य संख्या न्यून विचित्र संख्या होती है?",
        "options_hi": ["सभी अभाज्य संख्याएँ", "केवल 2", "केवल विषम अभाज्य संख्याएँ", "कोई नहीं"],
        "answer_hi": "सभी अभाज्य संख्याएँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "पूर्ण विचित्र संख्याओं की अंतिम ज्ञात संख्या कौन सी है?",
        "options_hi": ["2^82589933 × (2^82589934 - 1)", "2^77232917 × (2^77232918 - 1)", "2^43112609 × (2^43112610 - 1)", "2^57885161 × (2^57885162 - 1)"],
        "answer_hi": "2^82589933 × (2^82589934 - 1)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "मैत्री युगलों की खोज कब शुरू हुई?",
        "options_hi": ["प्राचीन काल में", "मध्य काल में", "आधुनिक काल में", "20वीं शताब्दी में"],
        "answer_hi": "प्राचीन काल में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "विचित्र संख्याओं के अध्ययन में कंप्यूटर की भूमिका क्या है?",
        "options_hi": ["बड़ी संख्याओं का विश्लेषण", "नई संख्याओं की खोज", "सिद्धांतों का प्रमाणीकरण", "उपरोक्त सभी"],
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "विचित्र संख्याओं का संस्कृत ग्रंथों में वर्णन कैसा है?",
        "options_hi": ["विस्तृत", "संक्षिप्त", "अपूर्ण", "नहीं है"],
        "answer_hi": "संक्षिप्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "विचित्र संख्याओं के अध्ययन का शैक्षणिक लाभ क्या है?",
        "options_hi": ["तार्किक चिंतन का विकास", "गणितीय कौशल की वृद्धि", "शोध क्षमता का विकास", "उपरोक्त सभी"],
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "विचित्र संख्याओं का प्रसिद्ध आधुनिक गणितज्ञ कौन है?",
        "options_hi": ["लियोनार्ड यूलर", "कार्ल फ्रेडरिक गॉस", "पियरे डे फर्मा", "अल्बर्ट आइंस्टीन"],
        "answer_hi": "लियोनार्ड यूलर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "यूलर का विचित्र संख्याओं में योगदान क्या है?",
        "options_hi": ["पूर्ण संख्याओं का सिद्धांत", "मैत्री युगलों का शोध", "अति विचित्र संख्याओं का वर्गीकरण", "उपरोक्त सभी"],
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "विचित्र संख्याओं के अध्ययन का भविष्य क्या है?",
        "options_hi": ["शोध के नए क्षेत्र", "व्यावहारिक उपयोग का विस्तार", "शिक्षण विधियों में समावेश", "उपरोक्त सभी"],
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "विचित्र संख्याओं के संदर्भ में 'σ' चिन्ह का अर्थ क्या है?",
        "options_hi": ["भाजकों का योगफल", "भाजकों का गुणनफल", "भाजकों की संख्या", "भाजकों का माध्य"],
        "answer_hi": "भाजकों का योगफल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "विचित्र संख्याओं के लिए 'परफेक्ट नंबर' शब्द किस भाषा का है?",
        "options_hi": ["अंग्रेजी भाषा का", "लैटिन भाषा का", "ग्रीक भाषा का", "संस्कृत भाषा का"],
        "answer_hi": "अंग्रेजी भाषा का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "ग्रीक भाषा में पूर्ण विचित्र संख्या का नाम क्या है?",
        "options_hi": ["τέλειος ἀριθμός", "perfectus numerus", "pūrṇa saṅkhyā", "kāmil ʿadad"],
        "answer_hi": "τέλειος ἀριθμός",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "अरबी भाषा में विचित्र संख्या का नाम क्या है?",
        "options_hi": ["أعداد مثالية", "nombres parfaits", "vollkommene Zahlen", "numeri perfetti"],
        "answer_hi": "أعداد مثالية",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "विचित्र संख्याओं के अध्ययन का प्राचीन केंद्र क्या था?",
        "options_hi": ["अलेक्जेंड्रिया", "अयोध्या", "एथेंस", "रोम"],
        "answer_hi": "अलेक्जेंड्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "विचित्र संख्याओं का संबंध किन प्राचीन सभ्यताओं से है?",
        "options_hi": ["यूनानी, भारतीय, अरबी", "चीनी, जापानी, कोरियाई", "मिस्र, मेसोपोटेमिया, सिंधु", "यूरोपीय, अमेरिकी, अफ्रीकी"],
        "answer_hi": "यूनानी, भारतीय, अरबी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "विचित्र संख्याओं के वैज्ञानिक गद्य में वर्णन की शैली कैसी है?",
        "options_hi": ["वैज्ञानिक शैली", "काव्यात्मक शैली", "नाटकीय शैली", "पौराणिक शैली"],
        "answer_hi": "वैज्ञानिक शैली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "विचित्र संख्याओं के ग्रंथ में प्रयुक्त संस्कृत का प्रकार क्या है?",
        "options_hi": ["वैज्ञानिक संस्कृत", "काव्यात्मक संस्कृत", "लौकिक संस्कृत", "वैदिक संस्कृत"],
        "answer_hi": "वैज्ञानिक संस्कृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "विचित्र संख्यावली ग्रंथ किस विषय पर है?",
        "options_hi": ["विचित्र संख्याओं का संग्रह", "गणित सिद्धांतों की व्याख्या", "वैज्ञानिक लेखन", "उपरोक्त सभी"],
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "विचित्र संख्याओं के अध्ययन में कौन से गणितीय साधन उपयोग किए जाते हैं?",
        "options_hi": ["विभाज्यता सिद्धांत", "योग गणित", "गुणन सारणी", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "विचित्र संख्याओं के शोध में भारतीय गणितज्ञों का योगदान क्या है?",
        "options_hi": ["महत्वपूर्ण", "अल्प", "नगण्य", "नहीं है"],
        "answer_hi": "महत्वपूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "विचित्र संख्याओं के अध्ययन की वर्तमान स्थिति क्या है?",
        "options_hi": ["सक्रिय शोध", "स्थगित", "पूर्ण", "प्रारंभिक अवस्था"],
        "answer_hi": "सक्रिय शोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "विचित्र संख्याओं के लिए अंतर्राष्ट्रीय सम्मेलन कब होता है?",
        "options_hi": ["नियमित रूप से", "कभी-कभी", "एक बार", "कभी नहीं"],
        "answer_hi": "नियमित रूप से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "विचित्र संख्याओं के अध्ययन की प्रमुख समस्याएँ क्या हैं?",
        "options_hi": ["बड़ी संख्याओं की प्रकृति", "नए प्रमेयों की खोज", "व्यावहारिक उपयोग की सीमाएँ", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "विचित्र संख्याओं के शिक्षण में प्रयुक्त साधन कौन से हैं?",
        "options_hi": ["कंप्यूटर प्रोग्राम", "गणितीय सारणियाँ", "शैक्षणिक साहित्य", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "विचित्र संख्याओं का संस्कृत साहित्य में स्थान क्या है?",
        "options_hi": ["विशिष्ट", "सामान्य", "नगण्य", "अप्रासंगिक"],
        "answer_hi": "विशिष्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "विचित्र संख्याओं के वैज्ञानिक गद्य की लेखन शैली की विशेषता क्या है?",
        "options_hi": ["स्पष्टता, संक्षिप्तता, तार्किकता", "अलंकार प्रधानता", "काव्यात्मकता", "पौराणिकता"],
        "answer_hi": "स्पष्टता, संक्षिप्तता, तार्किकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "विचित्र संख्याओं के अध्ययन का सांस्कृतिक महत्व क्या है?",
        "options_hi": ["प्राचीन ज्ञान का संरक्षण", "आधुनिक शिक्षा में समावेश", "सांस्कृतिक विरासत का प्रदर्शन", "उपरोक्त सभी"],
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "विचित्र संख्याओं के संदर्भ में 'मेरसेन प्राइम' क्या दर्शाता है?",
        "options_hi": ["2^p - 1 रूप की अभाज्य संख्या", "पूर्ण विचित्र संख्या", "मैत्री युगल", "अति विचित्र संख्या"],
        "answer_hi": "2^p - 1 रूप की अभाज्य संख्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "विचित्र संख्याओं के अध्ययन का प्रमुख उद्देश्य क्या है?",
        "options_hi": ["गणितीय सत्यों की खोज", "व्यावहारिक उपयोगों का विकास", "शैक्षणिक पाठ्यक्रम की समृद्धि", "उपरोक्त सभी"],
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "विचित्र संख्याओं की संस्कृत व्याख्या की आवश्यकता क्यों है?",
        "options_hi": ["संस्कृत भाषा में ज्ञान का विस्तार", "प्राचीन ग्रंथों का अध्ययन", "संस्कृत को वैज्ञानिक भाषा के रूप में प्रोत्साहन", "उपरोक्त सभी"],
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "विचित्र संख्याओं के अध्ययन में भविष्य की संभावनाएँ क्या हैं?",
        "options_hi": ["नए प्रमेयों की खोज", "बड़ी संख्याओं का विश्लेषण", "अंतर्विषयक शोध", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "विचित्र संख्याओं के संस्कृत गद्य में प्रयुक्त विशेषण कौन से हैं?",
        "options_hi": ["पूर्णा, अतिरिक्ता, न्यूना", "सुन्दरा, आकर्षका, मनोहरा", "दुर्लभा, विरला, असामान्या", "वैज्ञानिका, तार्किका, गणितीया"],
        "answer_hi": "पूर्णा, अतिरिक्ता, न्यूना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "विचित्र संख्याओं के अध्ययन का छात्रों को लाभ क्या है?",
        "options_hi": ["गणितीय चिंतन का विकास", "तार्किक क्षमता की वृद्धि", "शोध में रुचि उत्पन्न करना", "उपरोक्त सभी"],
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "विचित्र संख्याओं के वैज्ञानिक गद्य का मुख्य उद्देश्य क्या है?",
        "options_hi": ["ज्ञान का प्रसार", "शैक्षणिक उपयोगिता", "संस्कृत भाषा का प्रचार", "उपरोक्त सभी"],
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "विचित्र संख्याओं का अध्ययन कैसे शुरू किया जाता है?",
        "options_hi": ["भाजकों के योग की गणना से", "संख्या प्रकारों के ज्ञान से", "ऐतिहासिक पृष्ठभूमि से", "उपरोक्त सभी से"],
        "answer_hi": "उपरोक्त सभी से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "विचित्र संख्याओं का संस्कृत साहित्य में योगदान क्या है?",
        "options_hi": ["वैज्ञानिक साहित्य की समृद्धि", "संस्कृत को वैज्ञानिक भाषा के रूप में स्थापित करना", "प्राचीन ज्ञान का संरक्षण", "उपरोक्त सभी"],
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "विचित्र संख्याओं के अध्ययन का सार क्या है?",
        "options_hi": ["गणित के मौलिक सत्यों की खोज", "मानव बुद्धि की आश्चर्यजनक क्षमता का प्रदर्शन", "प्राचीन और आधुनिक ज्ञान का समन्वय", "उपरोक्त सभी"],
        "answer_hi": "उपरोक्त सभी",
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