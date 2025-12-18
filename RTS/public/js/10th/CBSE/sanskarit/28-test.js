const questions = [
    {
        "num": 1,
        "question_hi": "विचित्र संख्याओं का प्राचीनतम उल्लेख कहाँ मिलता है?",
        "options_hi": ["यूनानी ग्रंथों में", "भारतीय ग्रंथों में", "मिस्री पेपाइरस में", "बेबीलोनियाई फलकों में"],
        "answer_hi": "यूनानी ग्रंथों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "विचित्र संख्याओं के बारे में प्रथम प्रमाणित ग्रंथ कौन सा है?",
        "options_hi": ["यूक्लिड की 'तत्व'", "पाइथागोरस की 'संख्या'", "आर्किमिडीज की 'परिधि'", "प्लेटो की 'गणित'"],
        "answer_hi": "यूक्लिड की 'तत्व'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "विचित्र संख्याओं का त्रिविध वर्गीकरण किसने प्रतिपादित किया?",
        "options_hi": ["यूनानी गणितज्ञों ने", "भारतीय गणितज्ञों ने", "अरबी गणितज्ञों ने", "यूरोपीय गणितज्ञों ने"],
        "answer_hi": "यूनानी गणितज्ञों ने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "पूर्ण विचित्र संख्याओं का यूनानी भाषा में नाम क्या है?",
        "options_hi": ["τέλειος ἀριθμός", "πλήρης ἀριθμός", "ἄρτιος ἀριθμός", "περιττός ἀριθμός"],
        "answer_hi": "τέλειος ἀριθμός",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "अति विचित्र संख्याओं का यूनानी नाम क्या है?",
        "options_hi": ["ὑπερτελής ἀριθμός", "ὑπερβολικός ἀριθμός", "μεγαλύτερος ἀριθμός", "πλεονάζων ἀριθμός"],
        "answer_hi": "ὑπερτελής ἀριθμός",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "न्यून विचित्र संख्याओं का यूनानी नाम क्या है?",
        "options_hi": ["ἐλλιπής ἀριθμός", "ὀλίγος ἀριθμός", "μικρός ἀριθμός", "ἀτελής ἀριθμός"],
        "answer_hi": "ἐλλιπής ἀριθμός",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "मैत्री संख्याओं का यूनानी नाम क्या है?",
        "options_hi": ["φιλικοί ἀριθμοί", "ἀδελφοὶ ἀριθμοί", "σύντροφοι ἀριθμοί", "ζεύγη ἀριθμῶν"],
        "answer_hi": "φιλικοί ἀριθμοί",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "यूक्लिड ने पूर्ण संख्याओं के बारे में क्या सिद्धांत प्रतिपादित किया?",
        "options_hi": ["2^(p-1)×(2^p - 1) सूत्र", "भाजक योग सिद्धांत", "मैत्री युगल सिद्धांत", "अभाज्य गुणन सिद्धांत"],
        "answer_hi": "2^(p-1)×(2^p - 1) सूत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "विचित्र संख्याओं का भारतीय साहित्य में प्रथम उल्लेख कहाँ है?",
        "options_hi": ["लीलावती में", "बीजगणित में", "सिद्धांतशिरोमणि में", "आर्यभटीय में"],
        "answer_hi": "लीलावती में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "भास्कराचार्य ने विचित्र संख्याओं के बारे में क्या कहा?",
        "options_hi": ["पूर्ण संख्याएँ जो स्वभाजकों से पूर्ण हैं", "विषम संख्याएँ विचित्र हैं", "मैत्री युगल दुर्लभ हैं", "अतिरिक्त संख्याएँ अधिक हैं"],
        "answer_hi": "पूर्ण संख्याएँ जो स्वभाजकों से पूर्ण हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "अरबी गणितज्ञों द्वारा विचित्र संख्याएँ कैसे प्रचलित हुईं?",
        "options_hi": ["यूनानी ग्रंथों के अनुवादों से", "स्वतंत्र शोध से", "भारतीय ग्रंथों से", "चीनी स्रोतों से"],
        "answer_hi": "यूनानी ग्रंथों के अनुवादों से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "अल-ख्वारिज्मी ने विचित्र संख्याओं के बारे में क्या लिखा?",
        "options_hi": ["'अल-जबर' ग्रंथ में", "'हिसाब अल-जबर' में", "'किताब अल-जबर' में", "स्वतंत्र ग्रंथ में"],
        "answer_hi": "'किताब अल-जबर' में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "मध्ययुग में यूरोप में विचित्र संख्याओं का ज्ञान कैसे प्राप्त हुआ?",
        "options_hi": ["अरबी ग्रंथों के अनुवादों से", "यूनानी ग्रंथों के प्रत्यक्ष पाठ से", "भारतीय गणितज्ञों से", "स्वतंत्र अन्वेषण से"],
        "answer_hi": "अरबी ग्रंथों के अनुवादों से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "फिबोनाची ने विचित्र संख्याओं के बारे में कहाँ उल्लेख किया?",
        "options_hi": ["'लिबर अबाची' में", "'सिक्वेंस' ग्रंथ में", "'गणित की पुस्तक' में", "पत्रों में"],
        "answer_hi": "'लिबर अबाची' में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "निकोमाकस गेरासेनस द्वारा विचित्र संख्याओं के बारे में क्या प्रसिद्ध है?",
        "options_hi": ["'अरिथ्मेटिकेस इंट्रोडक्टियो'", "'न्यूमेरोरम थेओरिया'", "'मैथेमेटिका सिंथेसिस'", "'गणित संग्रह'"],
        "answer_hi": "'अरिथ्मेटिकेस इंट्रोडक्टियो'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "मैत्री संख्याओं का ऐतिहासिक महत्व क्या है?",
        "options_hi": ["मित्रत्व का प्रतीक", "गणितीय सौंदर्य", "सांख्यिक समानता", "सभी उपर्युक्त"],
        "answer_hi": "सभी उपर्युक्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "प्राचीन काल में मैत्री संख्याओं का क्या प्रयोग था?",
        "options_hi": ["ज्योतिष में", "कूटलेखन में", "मैत्री प्रतीक के रूप में", "व्यापार में"],
        "answer_hi": "मैत्री प्रतीक के रूप में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "पूर्ण संख्याओं का धार्मिक महत्व क्या था?",
        "options_hi": ["ईश्वरीय सृष्टि के प्रतीक", "पाप-पुण्य गणना में", "यज्ञ कर्मों में", "मंत्र जप में"],
        "answer_hi": "ईश्वरीय सृष्टि के प्रतीक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "विचित्र संख्याओं के अध्ययन का प्रारंभिक उद्देश्य क्या था?",
        "options_hi": ["संख्याओं की प्रकृति का ज्ञान", "प्रायोगिक उपयोग", "धार्मिक विश्वास", "कूटलेखन विकास"],
        "answer_hi": "संख्याओं की प्रकृति का ज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "यूक्लिड के पूर्ण संख्या सूत्र का गणितीय महत्व क्या है?",
        "options_hi": ["अभाज्य मेर्सेन संख्याओं से संबंध", "सम संख्याओं का वर्गीकरण", "भाजक योग का नियम", "मैत्री युगलों का आधार"],
        "answer_hi": "अभाज्य मेर्सेन संख्याओं से संबंध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "मेर्सेन अभाज्य संख्याएँ क्या हैं?",
        "options_hi": ["2^p - 1 रूप की अभाज्य संख्याएँ", "2^p + 1 रूप की अभाज्य संख्याएँ", "पूर्ण विचित्र संख्याएँ", "विषम अभाज्य संख्याएँ"],
        "answer_hi": "2^p - 1 रूप की अभाज्य संख्याएँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "मेर्सेन अभाज्य संख्याओं का पूर्ण संख्याओं से संबंध किसने स्थापित किया?",
        "options_hi": ["यूक्लिड ने", "यूलर ने", "यूलर-यूक्लिड प्रमेय द्वारा", "मेर्सेन ने स्वयं"],
        "answer_hi": "यूलर-यूक्लिड प्रमेय द्वारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "यूलर ने पूर्ण संख्याओं के बारे में क्या सिद्धांत प्रतिपादित किया?",
        "options_hi": ["प्रत्येक सम पूर्ण संख्या मेर्सेन अभाज्य से उत्पन्न होती है", "विषम पूर्ण संख्याओं का अस्तित्व", "मैत्री युगलों की अनंतता", "अति विचित्र संख्याओं का वर्गीकरण"],
        "answer_hi": "प्रत्येक सम पूर्ण संख्या मेर्सेन अभाज्य से उत्पन्न होती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "विचित्र संख्याओं में यूलर का योगदान क्या है?",
        "options_hi": ["पूर्ण संख्याओं का पूर्ण सिद्धांत", "मैत्री युगलों का व्यापक अन्वेषण", "अति विचित्र संख्याओं का वर्गीकरण", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "आधुनिक युग में विचित्र संख्याओं का अध्ययन कैसे परिवर्तित हुआ?",
        "options_hi": ["कंप्यूटर सहायता से", "नए सिद्धांतों से", "अंतर्राष्ट्रीय सहयोग से", "सभी से"],
        "answer_hi": "सभी से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "कंप्यूटरों द्वारा विचित्र संख्याओं के अन्वेषण में क्या परिवर्तन आया?",
        "options_hi": ["बड़ी संख्याओं की गणना", "नए मैत्री युगलों की खोज", "पूर्ण संख्याओं का अन्वेषण", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "वर्तमान में ज्ञात पूर्ण संख्याओं की संख्या कितनी है?",
        "options_hi": ["51", "100", "150", "200"],
        "answer_hi": "51",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "सबसे बड़ी ज्ञात पूर्ण संख्या कितने अंकों की है?",
        "options_hi": ["49724095 अंकों की", "100000 अंकों की", "50000 अंकों की", "25000 अंकों की"],
        "answer_hi": "49724095 अंकों की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "विचित्र संख्याओं के अन्वेषण में प्रयुक्त कंप्यूटर प्रोजेक्ट कौन से हैं?",
        "options_hi": ["GIMPS, PrimeGrid", "SETI, Folding@home", "BOINC, Einstein@Home", "World Community Grid"],
        "answer_hi": "GIMPS, PrimeGrid",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "GIMPS प्रोजेक्ट का पूर्ण रूप क्या है?",
        "options_hi": ["Great Internet Mersenne Prime Search", "Global Internet Mathematical Prime Search", "Grand International Mersenne Prime System", "General Internet Mersenne Prime Study"],
        "answer_hi": "Great Internet Mersenne Prime Search",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "विचित्र संख्याओं के अन्वेषण में सबसे कठिन पक्ष क्या है?",
        "options_hi": ["बड़ी संख्याओं के भाजक योग की गणना", "नए मेर्सेन अभाज्यों की खोज", "मैत्री युगलों का प्रमाणीकरण", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "विचित्र संख्याओं के कूटलेखन में प्रयोग का आधार क्या है?",
        "options_hi": ["उनकी दुर्लभता और अप्रत्याशितता", "उनकी सुलभ गणना", "उनका स्मरण सुलभ होना", "उनका ऐतिहासिक महत्व"],
        "answer_hi": "उनकी दुर्लभता और अप्रत्याशितता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "विचित्र संख्याएँ कूटलेखन में कैसे प्रयुक्त होती हैं?",
        "options_hi": ["कूटकरण प्रक्रिया में", "कूटकी जनन में", "कूटविस्तारण में", "सभी जगह"],
        "answer_hi": "सभी जगह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "RSA कूटकरण में विचित्र संख्याओं की भूमिका क्या है?",
        "options_hi": ["अभाज्य संख्याओं का प्रयोग", "मैत्री युगलों का उपयोग", "पूर्ण संख्याओं का आधार", "अति विचित्र संख्याओं का चयन"],
        "answer_hi": "अभाज्य संख्याओं का प्रयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "विचित्र संख्याओं के अध्ययन का सैद्धांतिक महत्व क्या है?",
        "options_hi": ["संख्या सिद्धांत का विकास", "गणितीय तर्क का परिष्कार", "नए प्रमेयों की उत्पत्ति", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "विचित्र संख्याओं के अध्ययन में प्रयुक्त गणितीय साधन कौन से हैं?",
        "options_hi": ["विभाज्यता सिद्धांत, सांख्यिकी", "बीजगणित, ज्यामिति", "विश्लेषण, समूह सिद्धांत", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "विचित्र संख्याओं के भविष्य के शोध क्षेत्र कौन से हैं?",
        "options_hi": ["विषम पूर्ण संख्याओं का अन्वेषण", "असीम मैत्री युगलों का सिद्धांत", "अति विचित्र संख्याओं का वितरण", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "विषम पूर्ण संख्या की संभावना क्या है?",
        "options_hi": ["अभी तक अज्ञात", "है ही नहीं", "अवश्य ही विद्यमान है", "सिद्धांततः असंभव"],
        "answer_hi": "अभी तक अज्ञात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "विषम पूर्ण संख्या के अन्वेषण की कठिनता क्या है?",
        "options_hi": ["गणितीय साधनों का अभाव", "कंप्यूटर शक्ति की सीमा", "सैद्धांतिक मार्गदर्शन का अभाव", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "अति विचित्र संख्याओं का वितरण कैसा होता है?",
        "options_hi": ["अनियमित रूप से", "नियमित क्रम से", "समान अंतरालों में", "सभी जगह समान रूप से"],
        "answer_hi": "अनियमित रूप से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "न्यून विचित्र संख्याओं का प्रतिशत कैसा होता है?",
        "options_hi": ["अधिक होता है", "कम होता है", "समान होता है", "अनिश्चित होता है"],
        "answer_hi": "अधिक होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "विचित्र संख्याओं के अध्ययन का सांस्कृतिक महत्व क्या है?",
        "options_hi": ["मानव बुद्धि का कौतुक प्रदर्शन", "सांस्कृतिक विरासत का अंश", "शैक्षणिक परंपरा का प्रतीक", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "विचित्र संख्याओं के संस्कृत गद्य में वर्णन की विशेषता क्या है?",
        "options_hi": ["वैज्ञानिक शैली, स्पष्टता", "काव्यात्मकता, अलंकार", "पौराणिक कथानक", "दार्शनिक विवेचन"],
        "answer_hi": "वैज्ञानिक शैली, स्पष्टता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "संस्कृत वैज्ञानिक गद्य में विचित्र संख्याओं के वर्णन में प्रयुक्त शब्द कौन से हैं?",
        "options_hi": ["तकनीकी शब्द, गणितीय पारिभाषिक शब्द", "काव्य शब्द, अलंकार", "पौराणिक शब्द, देवता नाम", "लौकिक शब्द, प्रचलित शब्द"],
        "answer_hi": "तकनीकी शब्द, गणितीय पारिभाषिक शब्द",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "विचित्र संख्याओं का संस्कृत वर्णन का लाभ क्या है?",
        "options_hi": ["संस्कृत भाषा के वैज्ञानिक रूप का प्रदर्शन", "प्राचीन ज्ञान का संरक्षण", "आधुनिक विद्यार्थियों की उपयोगिता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "विचित्र संख्याओं का अध्ययन शैक्षणिक पाठ्यक्रमों में कब समाविष्ट किया गया?",
        "options_hi": ["उच्च माध्यमिक स्तर से", "प्राथमिक स्तर पर", "स्नातकोत्तर स्तर पर", "सभी स्तर पर"],
        "answer_hi": "उच्च माध्यमिक स्तर से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "विचित्र संख्याओं के शिक्षण का उद्देश्य क्या है?",
        "options_hi": ["गणितीय चिंतन विकास", "ऐतिहासिक ज्ञान प्राप्ति", "वैज्ञानिक शैली का अभ्यास", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "विचित्र संख्याओं के अध्ययन में प्रयुक्त शैक्षणिक साधन कौन से हैं?",
        "options_hi": ["कंप्यूटर प्रोग्राम, ऐतिहासिक ग्रंथ", "गणितीय सारणियाँ, दृश्य सामग्री", "प्रयोगशालाएँ, कंप्यूटर", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "विचित्र संख्याओं के अध्ययन की भविष्य की संभावनाएँ क्या हैं?",
        "options_hi": ["नए प्रमेयों की खोज", "व्यावहारिक उपयोगों का विकास", "अंतर्विषयक शोध", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "विचित्र संख्याओं के शोध में भारतीय विद्वानों का क्या योगदान है?",
        "options_hi": ["प्राचीन ग्रंथों में वर्णन", "नए शोध", "आधुनिक सिद्धांतों का विकास", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "वर्तमान में विचित्र संख्याओं के अध्ययन के प्रमुख केंद्र कौन से हैं?",
        "options_hi": ["विश्वविद्यालय, शोध संस्थाएँ", "कंप्यूटर प्रोजेक्ट", "अंतर्राष्ट्रीय सम्मेलन", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "विचित्र संख्याओं के बारे में अंतर्राष्ट्रीय सम्मेलन कब होते हैं?",
        "options_hi": ["नियमित रूप से", "कभी-कभी", "वर्ष में एक बार", "अनियमित रूप से"],
        "answer_hi": "नियमित रूप से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "विचित्र संख्याओं के अध्ययन की प्रमुख चुनौतियाँ क्या हैं?",
        "options_hi": ["बड़ी संख्याओं का विश्लेषण", "नए सिद्धांतों का विकास", "शैक्षणिक सामग्री निर्माण", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "विचित्र संख्याओं के वैज्ञानिक गद्य में उदाहरण कौन से हैं?",
        "options_hi": ["संख्याओं की गणना प्रक्रिया", "सूत्रों की व्याख्या", "ऐतिहासिक उल्लेख", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "संस्कृत भाषा में विचित्र संख्याओं के वर्णन का क्या प्रकार है?",
        "options_hi": ["वैज्ञानिक और तथ्यात्मक", "काव्यात्मक और रमणीय", "पौराणिक और कथात्मक", "दार्शनिक और विवेचनात्मक"],
        "answer_hi": "वैज्ञानिक और तथ्यात्मक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "विचित्र संख्याओं के अध्ययन का सामाजिक महत्व क्या है?",
        "options_hi": ["वैज्ञानिक चेतना वर्धन", "गणितीय शिक्षण प्रोत्साहन", "सांस्कृतिक गौरव जागरण", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "विचित्र संख्याओं के प्रचार में संचार माध्यमों की भूमिका क्या है?",
        "options_hi": ["जनजागरण, शैक्षणिक प्रसार", "मनोरंजन, खेल के रूप में", "विज्ञापन, व्यापारिक उपयोग", "राजनीतिक प्रचार"],
        "answer_hi": "जनजागरण, शैक्षणिक प्रसार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "विचित्र संख्याओं का अध्ययन कैसे प्रारंभ किया जाए?",
        "options_hi": ["सरल संख्याओं से, उदाहरणों से", "जटिल सिद्धांतों से", "ऐतिहासिक पृष्ठभूमि से", "कंप्यूटर प्रोग्रामों से"],
        "answer_hi": "सरल संख्याओं से, उदाहरणों से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "विचित्र संख्याओं के बारे में प्रारंभिक पाठ्य पुस्तकें कौन सी हैं?",
        "options_hi": ["'संख्या सिद्धांत का आरंभ'", "'विचित्र संख्याएँ'", "'गणित के आश्चर्य'", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "विचित्र संख्याओं के अध्ययन की प्रेरणा क्या है?",
        "options_hi": ["जिज्ञासा, आश्चर्य", "प्रायोगिक आवश्यकता", "शैक्षणिक बाध्यता", "आर्थिक लाभ"],
        "answer_hi": "जिज्ञासा, आश्चर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "विचित्र संख्याओं के बारे में इंटरनेट की भूमिका क्या है?",
        "options_hi": ["ज्ञान प्रसार, सहयोग", "व्यापार, विज्ञापन", "मनोरंजन, खेल", "राजनीति, प्रचार"],
        "answer_hi": "ज्ञान प्रसार, सहयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "विचित्र संख्याओं के अध्ययन में प्रयुक्त कंप्यूटर भाषाएँ कौन सी हैं?",
        "options_hi": ["Python, C++, Java", "HTML, CSS, JavaScript", "SQL, PHP", "COBOL, FORTRAN"],
        "answer_hi": "Python, C++, Java",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "विचित्र संख्याओं के अन्वेषण में कृत्रिम बुद्धि की भूमिका क्या है?",
        "options_hi": ["पद्धति अनुकूलन, विश्लेषण", "सिद्धांत निर्माण, प्रमाणीकरण", "शिक्षण, प्रशिक्षण", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "विचित्र संख्याओं के अध्ययन के नैतिक पक्ष क्या हैं?",
        "options_hi": ["ज्ञान का साझाकरण, प्रामाणिकता", "आर्थिक लाभ, स्वामित्व", "राजनीतिक प्रभाव, नियंत्रण", "धार्मिक विश्वास, मर्यादाएँ"],
        "answer_hi": "ज्ञान का साझाकरण, प्रामाणिकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "विचित्र संख्याओं के अध्ययन का पर्यावरणीय प्रभाव क्या है?",
        "options_hi": ["कंप्यूटर शक्ति का उपयोग", "कागज की बचत, डिजिटल सामग्री", "प्रदूषण नियंत्रण", "ऊर्जा संरक्षण"],
        "answer_hi": "कंप्यूटर शक्ति का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "विचित्र संख्याओं के बारे में लोकप्रिय साहित्य की भूमिका क्या है?",
        "options_hi": ["जनजागरण, रुचि जनन", "शैक्षणिक स्तर की उन्नति", "व्यावसायिक लाभ", "राजनीतिक प्रभाव"],
        "answer_hi": "जनजागरण, रुचि जनन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "विचित्र संख्याओं का अध्ययन कैसे मनोरंजन के रूप में प्रस्तुत किया जा सकता है?",
        "options_hi": ["पहेलियाँ, प्रश्नोत्तरी", "खेल, प्रतियोगिताएँ", "चलचित्र, धारावाहिक", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "विचित्र संख्याओं के बारे में बालोपयोगी साहित्य कैसा होना चाहिए?",
        "options_hi": ["सरल भाषा में, चित्रों सहित", "कथा रूप में, नाट्य रूप में", "खेल रूप में, प्रश्नोत्तरी से", "सभी से"],
        "answer_hi": "सभी से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "विचित्र संख्याओं के अध्ययन का आर्थिक पक्ष क्या है?",
        "options_hi": ["शोध निधि, पुरस्कार", "पाठ्यपुस्तक विक्रय", "कंप्यूटर उपकरण", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "विचित्र संख्याओं के अन्वेषण में प्राप्त प्रमुख पुरस्कार कौन से हैं?",
        "options_hi": ["EFF पुरस्कार", "नोबेल पुरस्कार", "फील्ड्स पदक", "गणित के राष्ट्रीय पुरस्कार"],
        "answer_hi": "EFF पुरस्कार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "विचित्र संख्याओं के अध्ययन में सहयोग का महत्व क्या है?",
        "options_hi": ["ज्ञान विनिमय, संसाधन साझाकरण", "प्रतिस्पर्धा, एकांत शोध", "आर्थिक लाभ, बौद्धिक संपदा", "राजनीतिक प्रभाव, अंतर्राष्ट्रीय संबंध"],
        "answer_hi": "ज्ञान विनिमय, संसाधन साझाकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "विचित्र संख्याओं के बारे में अंतर्राष्ट्रीय सहयोग का उदाहरण क्या है?",
        "options_hi": ["GIMPS प्रोजेक्ट", "यूनेस्को सहयोग", "विश्वविद्यालयों के समझौते", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "विचित्र संख्याओं के अध्ययन का दार्शनिक महत्व क्या है?",
        "options_hi": ["ज्ञान की प्रकृति, सत्यान्वेषण", "मानव बुद्धि की सीमाएँ, संभावनाएँ", "सृष्टि का रहस्य, नियमितता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "विचित्र संख्याएँ कैसे सौंदर्य की अनुभूति जन्माती हैं?",
        "options_hi": ["समानता से, सुव्यवस्थितता से", "आश्चर्य से, अनपेक्षितता से", "सरलता से, स्पष्टता से", "जटिलता से, गहनता से"],
        "answer_hi": "आश्चर्य से, अनपेक्षितता से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "विचित्र संख्याओं के अध्ययन का मनोवैज्ञानिक लाभ क्या है?",
        "options_hi": ["चिंतन क्षमता वर्धन", "धैर्य, सहनशक्ति का विकास", "संतोष, आनंद की अनुभूति", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "विचित्र संख्याओं का अध्ययन कैसे जीवन कौशल बढ़ाता है?",
        "options_hi": ["विश्लेषण क्षमता, समस्या समाधान", "सहनशक्ति, धैर्य", "सृजनात्मकता, कल्पना शक्ति", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "विचित्र संख्याओं के अध्ययन में प्रयुक्त नई तकनीकें कौन सी हैं?",
        "options_hi": ["क्वांटम कंप्यूटर", "क्लाउड कंप्यूटिंग", "बिग डेटा विश्लेषण", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "क्वांटम कंप्यूटरों से विचित्र संख्याओं के अन्वेषण में क्या लाभ है?",
        "options_hi": ["तेज गणना", "नए सिद्धांतों का विकास", "जटिल समस्याओं का समाधान", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "विचित्र संख्याओं के अध्ययन में भविष्य में कृत्रिम बुद्धि की भूमिका क्या होगी?",
        "options_hi": ["स्वयं शोध, नए सिद्धांत निर्माण", "शिक्षण सामग्री निर्माण", "जन प्रचार, रुचि जनन", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "विचित्र संख्याओं के अध्ययन में प्रयुक्त दृश्य सामग्री के प्रकार कौन से हैं?",
        "options_hi": ["आलेख, चित्र", "सारणियाँ, प्रवाह चित्र", "त्रिविम चित्र, एनिमेशन", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "विचित्र संख्याओं के अध्ययन में प्रयुक्त श्रव्य सामग्री कौन सी हैं?",
        "options_hi": ["पॉडकास्ट, ऑडियो पुस्तकें", "व्याख्यान, साक्षात्कार", "संगीत, ध्वनि प्रभाव", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "विचित्र संख्याओं का अध्ययन कैसे सोशल मीडिया में प्रचलित हुआ है?",
        "options_hi": ["समूह चर्चा, प्रश्नोत्तर", "वीडियो, लघु चलचित्र", "पोस्ट, ट्वीट, ब्लॉग", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "विचित्र संख्याओं के अध्ययन की व्यावसायिक संभावनाएँ क्या हैं?",
        "options_hi": ["शिक्षण, शोध", "तकनीकी लेखन, सलाहकार", "कूटलेखन विशेषज्ञ", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "विचित्र संख्याओं का अध्ययन कैसे कलात्मक रूप में प्रस्तुत किया जा सकता है?",
        "options_hi": ["चित्रकला, शिल्पकला में", "संगीत, नृत्य में", "साहित्य, काव्य में", "सभी में"],
        "answer_hi": "सभी में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "विचित्र संख्याओं के बारे में संग्रहालय प्रदर्शनी क्या है?",
        "options_hi": ["ऐतिहासिक ग्रंथ, यंत्र", "कंप्यूटर प्रदर्शन, साहित्यिक खेल", "कलाकृतियाँ, दृश्य सामग्री", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "विचित्र संख्याओं के अध्ययन का पर्यटन संबंधी पक्ष क्या है?",
        "options_hi": ["गणितीय पर्यटन, ऐतिहासिक स्थान", "संग्रहालय दर्शन, विश्वविद्यालय भ्रमण", "सम्मेलन, कार्यशालाएँ", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "विचित्र संख्याओं का अध्ययन कैसे स्वास्थ्य लाभ के लिए उपयोग किया जाता है?",
        "options_hi": ["मानसिक व्यायाम, स्मृति वर्धन", "तनाव निवारण, मनोरंजन", "वृद्धावस्था में मानसिक सक्रियता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "विचित्र संख्याओं के अध्ययन का सामुदायिक पक्ष क्या है?",
        "options_hi": ["क्लब, समूह चर्चा", "प्रतियोगिताएँ, उत्सव", "स्वयंसेवक प्रोजेक्ट", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "विचित्र संख्याओं का अध्ययन कैसे पारिवारिक गतिविधि के रूप में हो सकता है?",
        "options_hi": ["पहेलियाँ, खेल", "सामूहिक अध्ययन", "घरेलू प्रयोग", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "विचित्र संख्याओं के अध्ययन का वैश्विक महत्व क्या है?",
        "options_hi": ["सार्वत्रिक ज्ञान का प्रतीक", "सांस्कृतिक समृद्धि का दर्शन", "मानव जाति की एकता का प्रतीक", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "विचित्र संख्याओं के अध्ययन में प्रयुक्त प्राचीन यंत्र कौन से हैं?",
        "options_hi": ["अबेकस, स्लाइड रूल", "यांत्रिक गणक, यांत्रिक साधन", "गणना पट्टिकाएँ, लेखनीय फलक", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "विचित्र संख्याओं के अध्ययन का ऐतिहासिक कालक्रम क्या है?",
        "options_hi": ["प्राचीन काल → मध्य काल → आधुनिक काल", "मध्य काल → प्राचीन काल → आधुनिक काल", "आधुनिक काल → मध्य काल → प्राचीन काल", "एक ही काल में"],
        "answer_hi": "प्राचीन काल → मध्य काल → आधुनिक काल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "विचित्र संख्याओं के अध्ययन का सबसे रोचक पक्ष क्या है?",
        "options_hi": ["आश्चर्यजनक समानताएँ", "ऐतिहासिक कथाएँ", "आधुनिक तकनीकी", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "विचित्र संख्याओं का अध्ययन कैसे नैतिक मूल्य सिखाता है?",
        "options_hi": ["सत्यान्वेषण का महत्व", "धैर्य, सहनशक्ति की आवश्यकता", "सहयोग, साझाकरण का फल", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "विचित्र संख्याओं के अध्ययन का सार्वकालिक संदेश क्या है?",
        "options_hi": ["ज्ञान की अनंतता, मानव बुद्धि की अद्भुत शक्ति", "सहयोग का महत्व", "ऐतिहासिक विरासत का संरक्षण", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "विचित्र संख्याओं का अध्ययन कैसे राष्ट्रीय गौरव बढ़ाता है?",
        "options_hi": ["ऐतिहासिक योगदान की स्मृति", "वर्तमान शोध की उत्कृष्टता", "भविष्य की संभावनाओं का दर्शन", "सभी से"],
        "answer_hi": "सभी से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "विचित्र संख्याओं के अध्ययन का अंतिम उद्देश्य क्या है?",
        "options_hi": ["ज्ञान का विस्तार, मानव कल्याण", "व्यक्तिगत प्रसिद्धि, आर्थिक लाभ", "राष्ट्रीय प्रतिष्ठा, अंतर्राष्ट्रीय प्रभाव", "धार्मिक विश्वासों का प्रमाणन"],
        "answer_hi": "ज्ञान का विस्तार, मानव कल्याण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "विचित्र संख्याओं का अध्ययन कैसे सभी के लिए सुलभ हो सकता है?",
        "options_hi": ["सरल भाषा में, निःशुल्क सामग्री से", "सर्वत्र उपलब्धता, बहुभाषिक व्यवस्था से", "शैक्षणिक सुविधाओं, तकनीकी सहायता से", "सभी से"],
        "answer_hi": "सभी से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "विचित्र संख्याओं के अध्ययन में भविष्य का सबसे संभावनापूर्ण क्षेत्र क्या है?",
        "options_hi": ["क्वांटम कंप्यूटरों के साथ संयोग", "कृत्रिम बुद्धि की सहायता से नए सिद्धांत", "वैश्विक सहयोग से बड़ी संख्याओं का विश्लेषण", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "विचित्र संख्याओं के अध्ययन के समापन पर क्या कहा जा सकता है?",
        "options_hi": ["अन्वेषण सदैव चलता रहता है, ज्ञान सदैव बढ़ता है", "सब कुछ ज्ञात हो गया, अधिक आवश्यक नहीं", "गणित पूर्ण हो गया", "मानव बुद्धि की सीमा प्राप्त हो गई"],
        "answer_hi": "अन्वेषण सदैव चलता रहता है, ज्ञान सदैव बढ़ता है",
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