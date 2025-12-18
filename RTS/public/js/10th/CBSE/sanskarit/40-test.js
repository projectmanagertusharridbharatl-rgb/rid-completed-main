const questions = [
    {
        "num": 1,
        "question_hi": "समास पद की व्युत्पत्ति क्या है?",
        "options_hi": ["सम् + अस्", "सम् + आस्", "समा + अस्", "समः + अस्"],
        "answer_hi": "सम् + अस्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "समास में कितने पद होते हैं?",
        "options_hi": ["दो", "तीन", "चार", "पाँच"],
        "answer_hi": "दो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "समास रूप में क्या नष्ट होता है?",
        "options_hi": ["विभक्ति", "प्रत्यय", "उपसर्ग", "धातु"],
        "answer_hi": "विभक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "समास का विपरीत क्या है?",
        "options_hi": ["विग्रह", "विस्तार", "विभाग", "विराम"],
        "answer_hi": "विग्रह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "विग्रह में क्या जोड़ा जाता है?",
        "options_hi": ["विभक्ति", "समास", "प्रत्यय", "उपसर्ग"],
        "answer_hi": "विभक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "अव्ययीभाव समास में क्या प्रधान है?",
        "options_hi": ["पूर्वपद", "उत्तरपद", "अन्य पद", "मध्यपद"],
        "answer_hi": "पूर्वपद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "तत्पुरुष समास में क्या प्रधान है?",
        "options_hi": ["उत्तरपद", "पूर्वपद", "अन्य पद", "मध्यपद"],
        "answer_hi": "उत्तरपद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "द्वंद्व समास में क्या प्रधान है?",
        "options_hi": ["दोनों पद", "पूर्वपद", "उत्तरपद", "अन्य पद"],
        "answer_hi": "दोनों पद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "बहुव्रीहि समास में क्या प्रधान है?",
        "options_hi": ["अन्य पद का अर्थ", "पूर्वपद", "उत्तरपद", "मध्यपद"],
        "answer_hi": "अन्य पद का अर्थ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "अव्ययीभाव समास की विशेषता क्या है?",
        "options_hi": ["अव्यय पूर्वकत्व", "नाम पूर्वकत्व", "सर्वनाम पूर्वकत्व", "विशेषण पूर्वकत्व"],
        "answer_hi": "अव्यय पूर्वकत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "अव्ययीभाव समास का उदाहरण 'यथाशक्ति' का विग्रह क्या है?",
        "options_hi": ["यथा शक्तिः", "यस्य शक्तिः", "येन शक्तिः", "यस्मै शक्तिः"],
        "answer_hi": "यथा शक्तिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "अव्ययीभाव समास का उदाहरण 'उपकूलम्' का विग्रह क्या है?",
        "options_hi": ["कूल के समीप", "कूल के लिए", "कूल से", "कूल का"],
        "answer_hi": "कूल के समीप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "तत्पुरुष समास के मुख्य भेद कितने हैं?",
        "options_hi": ["छह", "दो", "तीन", "आठ"],
        "answer_hi": "छह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "कर्मधारय समास की परिभाषा क्या है?",
        "options_hi": ["विशेषण-विशेष्य भाव", "कर्म-कर्ता भाव", "संख्या पूर्वकत्व", "नञ् पूर्वकत्व"],
        "answer_hi": "विशेषण-विशेष्य भाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "द्विगु समास की परिभाषा क्या है?",
        "options_hi": ["संख्या पूर्वकत्व", "विशेषण-विशेष्य भाव", "नञ् पूर्वकत्व", "कर्म पूर्वकत्व"],
        "answer_hi": "संख्या पूर्वकत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "कर्मधारय समास का उदाहरण 'महापुरुषः' का विग्रह क्या है?",
        "options_hi": ["महान् पुरुषः", "महतः पुरुषः", "महते पुरुषः", "महता पुरुषः"],
        "answer_hi": "महान् पुरुषः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "द्विगु समास का उदाहरण 'त्रिलोकी' का विग्रह क्या है?",
        "options_hi": ["तीन लोक", "तीनों का लोक", "तीन लोकों में", "तीन लोकों से"],
        "answer_hi": "तीन लोक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "नञ्तत्पुरुष समास का उदाहरण क्या है?",
        "options_hi": ["अब्राह्मण", "राजपुरुष", "यथाशक्ति", "पितापुत्रौ"],
        "answer_hi": "अब्राह्मण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "उपपद तत्पुरुष समास का उदाहरण क्या है?",
        "options_hi": ["वनगतः", "राजपुरुष", "यथाशक्ति", "पितापुत्रौ"],
        "answer_hi": "वनगतः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "बहुव्रीहि समास की विशेषता क्या है?",
        "options_hi": ["तीसरे पद के अर्थ की प्रधानता", "पूर्वपद की प्रधानता", "उत्तरपद की प्रधानता", "दोनों की प्रधानता"],
        "answer_hi": "तीसरे पद के अर्थ की प्रधानता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "बहुव्रीहि समास का उदाहरण 'चक्रपाणिः' का विग्रह क्या है?",
        "options_hi": ["चक्र जिसके हाथ में है वह", "चक्र का हाथ", "चक्र के लिए हाथ", "चक्र से हाथ"],
        "answer_hi": "चक्र जिसके हाथ में है वह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "द्वंद्व समास के भेद कौन से हैं?",
        "options_hi": ["इतरेतर, समाहार", "कर्मधारय, द्विगु", "नञ्तत्पुरुष, उपपद तत्पुरुष", "प्रादि, यथादि"],
        "answer_hi": "इतरेतर, समाहार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "इतरेतर द्वंद्व का उदाहरण क्या है?",
        "options_hi": ["देवदत्त-यज्ञदत्त", "पानक", "त्रिभुवन", "यथाशक्ति"],
        "answer_hi": "देवदत्त-यज्ञदत्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "समाहार द्वंद्व का उदाहरण क्या है?",
        "options_hi": ["दधिसर्पिः", "देवदत्तयज्ञदत्तौ", "त्रिभुवन", "यथाशक्ति"],
        "answer_hi": "दधिसर्पिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "'प्रतिदिनम्' इस पद का समास नाम क्या है?",
        "options_hi": ["अव्ययीभाव", "तत्पुरुष", "द्वंद्व", "बहुव्रीहि"],
        "answer_hi": "अव्ययीभाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "'महाराजः' इस पद का समास नाम क्या है?",
        "options_hi": ["कर्मधारय", "द्विगु", "नञ्तत्पुरुष", "उपपद तत्पुरुष"],
        "answer_hi": "कर्मधारय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "'दशमुखः' इस पद का समास नाम क्या है?",
        "options_hi": ["बहुव्रीहि", "कर्मधारय", "द्विगु", "अव्ययीभाव"],
        "answer_hi": "बहुव्रीहि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "'इक्षुगुडम्' इस पद का समास नाम क्या है?",
        "options_hi": ["समाहार द्वंद्व", "इतरेतर द्वंद्व", "कर्मधारय", "बहुव्रीहि"],
        "answer_hi": "समाहार द्वंद्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "'पञ्चवटी' इस पद का समास नाम क्या है?",
        "options_hi": ["द्विगु", "कर्मधारय", "बहुव्रीहि", "अव्ययीभाव"],
        "answer_hi": "द्विगु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "'अधिपति' इस पद का समास नाम क्या है?",
        "options_hi": ["अव्ययीभाव", "तत्पुरुष", "द्वंद्व", "बहुव्रीहि"],
        "answer_hi": "अव्ययीभाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "'निर्जलम्' इस पद का समास नाम क्या है?",
        "options_hi": ["नञ्तत्पुरुष", "कर्मधारय", "द्विगु", "बहुव्रीहि"],
        "answer_hi": "नञ्तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "'ग्रामगतः' इस पद का समास नाम क्या है?",
        "options_hi": ["सप्तमी तत्पुरुष", "षष्ठी तत्पुरुष", "द्वितीया तत्पुरुष", "तृतीया तत्पुरुष"],
        "answer_hi": "सप्तमी तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "'राजपुरुषः' इस पद का समास नाम क्या है?",
        "options_hi": ["षष्ठी तत्पुरुष", "सप्तमी तत्पुरुष", "द्वितीया तत्पुरुष", "तृतीया तत्पुरुष"],
        "answer_hi": "षष्ठी तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "'भूमिदानम्' इस पद का समास नाम क्या है?",
        "options_hi": ["चतुर्थी तत्पुरुष", "षष्ठी तत्पुरुष", "सप्तमी तत्पुरुष", "द्वितीया तत्पुरुष"],
        "answer_hi": "चतुर्थी तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "'वनवासः' इस पद का समास नाम क्या है?",
        "options_hi": ["पंचमी तत्पुरुष", "षष्ठी तत्पुरुष", "सप्तमी तत्पुरुष", "द्वितीया तत्पुरुष"],
        "answer_hi": "पंचमी तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "'अन्नभोजनम्' इस पद का समास नाम क्या है?",
        "options_hi": ["द्वितीया तत्पुरुष", "षष्ठी तत्पुरुष", "सप्तमी तत्पुरुष", "तृतीया तत्पुरुष"],
        "answer_hi": "द्वितीया तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "'हस्तकम्पः' इस पद का समास नाम क्या है?",
        "options_hi": ["तृतीया तत्पुरुष", "षष्ठी तत्पुरुष", "सप्तमी तत्पुरुष", "द्वितीया तत्पुरुष"],
        "answer_hi": "तृतीया तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "समासान्त प्रत्यय किन समासों में होते हैं?",
        "options_hi": ["कुछ में", "सभी में", "किसी में नहीं", "केवल अव्ययीभाव में"],
        "answer_hi": "कुछ में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "समासान्त प्रत्यय का उदाहरण क्या है?",
        "options_hi": ["मातुलचरः", "राजपुरुषः", "यथाशक्ति", "पितापुत्रौ"],
        "answer_hi": "मातुलचरः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "समास का मुख्य प्रयोजन क्या है?",
        "options_hi": ["भाषा लाघव के लिए", "अर्थ विस्तार के लिए", "शब्द विस्तार के लिए", "वाक्य विस्तार के लिए"],
        "answer_hi": "भाषा लाघव के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "समास किस शास्त्र में मुख्य रूप से वर्णित है?",
        "options_hi": ["पाणिनीय व्याकरण में", "निरुक्त में", "प्रातिशाख्य में", "छंद में"],
        "answer_hi": "पाणिनीय व्याकरण में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "समास का प्राचीन आचार्य कौन है?",
        "options_hi": ["पाणिनि", "पतंजलि", "कात्यायन", "वररुचि"],
        "answer_hi": "पाणिनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "पाणिनि ने समासों के कितने प्रकार बताए हैं?",
        "options_hi": ["चार", "पाँच", "छह", "सात"],
        "answer_hi": "चार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "समास कहाँ अधिक प्रयुक्त होता है?",
        "options_hi": ["काव्य-नाटक आदि में", "व्याकरण में", "निरुक्त में", "ज्योतिष में"],
        "answer_hi": "काव्य-नाटक आदि में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "समास के अभाव में क्या दोष है?",
        "options_hi": ["वाक्य दीर्घता", "अर्थ हानि", "शब्द हानि", "भाव हानि"],
        "answer_hi": "वाक्य दीर्घता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "समास का ज्ञान किसके लिए आवश्यक है?",
        "options_hi": ["संस्कृत अध्ययन के लिए", "अंग्रेजी अध्ययन के लिए", "गणित अध्ययन के लिए", "विज्ञान अध्ययन के लिए"],
        "answer_hi": "संस्कृत अध्ययन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "समास की परीक्षा कैसे होती है?",
        "options_hi": ["समास-विग्रह से", "निबंध लेखन से", "प्रश्नोत्तर से", "मौखिक परीक्षा से"],
        "answer_hi": "समास-विग्रह से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "समास का सबसे सरल प्रकार कौन सा है?",
        "options_hi": ["तत्पुरुष", "अव्ययीभाव", "द्वंद्व", "बहुव्रीहि"],
        "answer_hi": "तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "समास का सबसे कठिन प्रकार कौन सा है?",
        "options_hi": ["बहुव्रीहि", "अव्ययीभाव", "तत्पुरुष", "द्वंद्व"],
        "answer_hi": "बहुव्रीहि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "समास का अध्ययन कब प्रारंभ किया जाता है?",
        "options_hi": ["मध्यम कक्षा में", "प्रारंभिक कक्षा में", "उच्च कक्षा में", "स्नातकोत्तर कक्षा में"],
        "answer_hi": "मध्यम कक्षा में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "समास के अध्ययन का काल क्या है?",
        "options_hi": ["दो वर्ष", "दो महीने", "दो सप्ताह", "दो दिन"],
        "answer_hi": "दो वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "समास के अध्ययन में क्या साधन है?",
        "options_hi": ["समास कोश", "शब्द कोश", "व्याकरण ग्रंथ", "साहित्य ग्रंथ"],
        "answer_hi": "समास कोश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "समास के अध्ययन में कौन सहायक है?",
        "options_hi": ["गुरु", "सहपाठी", "पुस्तक", "कंप्यूटर"],
        "answer_hi": "गुरु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "समास के अध्ययन का फल क्या है?",
        "options_hi": ["संस्कृत पठन क्षमता", "अंग्रेजी पठन क्षमता", "हिंदी पठन क्षमता", "गणित क्षमता"],
        "answer_hi": "संस्कृत पठन क्षमता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "समास के अध्ययन में क्या कठिन है?",
        "options_hi": ["बहुव्रीहि समास", "तत्पुरुष समास", "अव्ययीभाव समास", "द्वंद्व समास"],
        "answer_hi": "बहुव्रीहि समास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "समास के अध्ययन में क्या सरल है?",
        "options_hi": ["तत्पुरुष समास", "बहुव्रीहि समास", "अव्ययीभाव समास", "द्वंद्व समास"],
        "answer_hi": "तत्पुरुष समास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "समास का अध्ययन किन शिक्षकों से होता है?",
        "options_hi": ["व्याकरण विशेषज्ञों से", "साहित्य विशेषज्ञों से", "इतिहास विशेषज्ञों से", "गणित विशेषज्ञों से"],
        "answer_hi": "व्याकरण विशेषज्ञों से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "समास के अध्ययन का भविष्य क्या है?",
        "options_hi": ["शाश्वत", "नष्ट", "परिवर्तित", "अज्ञात"],
        "answer_hi": "शाश्वत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "समास के अध्ययन का अंतिम उद्देश्य क्या है?",
        "options_hi": ["स्वतंत्र संस्कृत प्रयोग", "परीक्षा उत्तीर्णता", "प्रमाणपत्र प्राप्ति", "गुरु का प्रसाद"],
        "answer_hi": "स्वतंत्र संस्कृत प्रयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "समास का सार्वकालिक महत्व क्या है?",
        "options_hi": ["भाषा संरक्षण", "व्याकरण संरक्षण", "साहित्य संरक्षण", "संस्कृति संरक्षण"],
        "answer_hi": "भाषा संरक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "समास का ऐतिहासिक महत्व क्या है?",
        "options_hi": ["प्राचीन भाषा विकास", "आधुनिक भाषा विकास", "विदेशी भाषा विकास", "लौकिक भाषा विकास"],
        "answer_hi": "प्राचीन भाषा विकास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "समास का सांस्कृतिक महत्व क्या है?",
        "options_hi": ["भाषिक संपदा", "साहित्यिक संपदा", "ऐतिहासिक संपदा", "कलात्मक संपदा"],
        "answer_hi": "भाषिक संपदा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "समास का शैक्षणिक महत्व क्या है?",
        "options_hi": ["भाषा कौशल वर्धन", "स्मृति वर्धन", "तार्किकता वर्धन", "कल्पना शक्ति वर्धन"],
        "answer_hi": "भाषा कौशल वर्धन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "समास का व्यावहारिक महत्व क्या है?",
        "options_hi": ["दैनिक व्यवहार में", "केवल शिक्षा में", "केवल साहित्य में", "केवल व्याकरण में"],
        "answer_hi": "दैनिक व्यवहार में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "समास की अन्य भाषाओं से तुलना कैसे है?",
        "options_hi": ["सभी भाषाओं में है", "केवल संस्कृत में", "केवल भारतीय भाषाओं में", "केवल प्राचीन भाषाओं में"],
        "answer_hi": "सभी भाषाओं में है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "समास का डिजिटल शिक्षण कैसे है?",
        "options_hi": ["ऐप्स, वेबसाइट्स", "केवल पुस्तकों से", "केवल गुरु से", "केवल लेखन से"],
        "answer_hi": "ऐप्स, वेबसाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "समास का ऑनलाइन शिक्षण कहाँ है?",
        "options_hi": ["यूट्यूब, वेबसाइट्स", "केवल पुस्तकों में", "केवल कक्षा में", "केवल गुरुकुल में"],
        "answer_hi": "यूट्यूब, वेबसाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "समास की प्रतियोगिताएँ कौन सी हैं?",
        "options_hi": ["समास प्रतियोगिताएँ", "काव्य प्रतियोगिताएँ", "निबंध प्रतियोगिताएँ", "व्याकरण प्रतियोगिताएँ"],
        "answer_hi": "समास प्रतियोगिताएँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "समास के पुरस्कार कौन से हैं?",
        "options_hi": ["व्याकरण पुरस्कार", "साहित्य पुरस्कार", "काव्य पुरस्कार", "नाटक पुरस्कार"],
        "answer_hi": "व्याकरण पुरस्कार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "समास के संग्रहालय में क्या देखा जाता है?",
        "options_hi": ["प्राचीन पांडुलिपियाँ", "आधुनिक पुस्तकें", "चित्रकला", "शिल्पकला"],
        "answer_hi": "प्राचीन पांडुलिपियाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "समास का प्रयोग किस साहित्य में अधिक है?",
        "options_hi": ["काव्य-नाटक आदि में", "व्याकरण में", "निरुक्त में", "ज्योतिष में"],
        "answer_hi": "काव्य-नाटक आदि में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "समास का महत्व क्या है?",
        "options_hi": ["भाषा सौष्ठव", "व्याकरण ज्ञान", "साहित्य ज्ञान", "छंद ज्ञान"],
        "answer_hi": "भाषा सौष्ठव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "समास के अज्ञान में क्या हानि है?",
        "options_hi": ["विग्रह ज्ञान का अभाव", "शब्द ज्ञान का अभाव", "व्याकरण ज्ञान का अभाव", "साहित्य ज्ञान का अभाव"],
        "answer_hi": "विग्रह ज्ञान का अभाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "समास का प्रचार कैसे होता है?",
        "options_hi": ["शिक्षण से", "लेखन से", "पठन से", "श्रवण से"],
        "answer_hi": "शिक्षण से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "समास का प्रसार किससे होता है?",
        "options_hi": ["संस्कृत शिक्षकों से", "साहित्यकारों से", "इतिहासकारों से", "वैज्ञानिकों से"],
        "answer_hi": "संस्कृत शिक्षकों से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "समास का सरलीकरण कैसे होता है?",
        "options_hi": ["सूत्रों के प्रयोग से", "उदाहरणों के प्रयोग से", "प्रश्नों के प्रयोग से", "निबंधों के प्रयोग से"],
        "answer_hi": "सूत्रों के प्रयोग से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "समास की प्रक्रिया कैसे प्रारंभ होती है?",
        "options_hi": ["अव्ययीभाव समास से", "तत्पुरुष समास से", "द्वंद्व समास से", "बहुव्रीहि समास से"],
        "answer_hi": "अव्ययीभाव समास से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "समास में पदों का क्या संधि होता है?",
        "options_hi": ["संधि भी होती है", "कभी नहीं होती", "केवल स्वर संधि", "केवल व्यंजन संधि"],
        "answer_hi": "संधि भी होती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "'सच्छास्त्रम्' इस पद का समास नाम क्या है?",
        "options_hi": ["सुबन्त तत्पुरुष", "नञ्तत्पुरुष", "कर्मधारय", "द्विगु"],
        "answer_hi": "सुबन्त तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "'देवदत्तयज्ञदत्तौ' यह उदाहरण किस समास का है?",
        "options_hi": ["इतरेतर द्वंद्व", "समाहार द्वंद्व", "कर्मधारय", "बहुव्रीहि"],
        "answer_hi": "इतरेतर द्वंद्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "'कृष्णसर्पः' इस पद का समास नाम क्या है?",
        "options_hi": ["कर्मधारय", "द्विगु", "बहुव्रीहि", "अव्ययीभाव"],
        "answer_hi": "कर्मधारय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "तत्पुरुष समास में विभक्ति नाश किस विभक्ति में नहीं होता?",
        "options_hi": ["प्रथमा में", "द्वितीया में", "षष्ठी में", "सप्तमी में"],
        "answer_hi": "प्रथमा में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "'आजीवनम्' इस पद का विग्रह क्या है?",
        "options_hi": ["जीवनपर्यंत", "जीवन का", "जीवन से", "जीवन के लिए"],
        "answer_hi": "जीवनपर्यंत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "समास में क्या होता है?",
        "options_hi": ["अनेक पदों का एक पदत्व", "एक पद का अनेक पदत्व", "पदों का विभक्ति विधान", "विभक्तियों का पदीकरण"],
        "answer_hi": "अनेक पदों का एक पदत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "'तत्पुरुष' यह नाम कैसे प्राप्त हुआ?",
        "options_hi": ["उसके पुरुष के समान", "तत् पुरुष और", "उसमें पुरुष", "उस पुरुष में"],
        "answer_hi": "उसके पुरुष के समान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "'द्वन्द्व' यह नाम कैसे प्राप्त हुआ?",
        "options_hi": ["दो अवयव", "दोनों अवयवों का", "दो अवयवों से", "दो अवयवों का समाहार"],
        "answer_hi": "दो अवयव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "'बहुव्रीहि' यह नाम कैसे प्राप्त हुआ?",
        "options_hi": ["बहुत से व्रीहि जिसमें हों वह", "बहुतों व्रीहियों का समाहार", "बहुतों व्रीहियों से युक्त", "बहुत व्रीहियों में होने वाला"],
        "answer_hi": "बहुत से व्रीहि जिसमें हों वह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "'अल्पहरितः' इस पद का समास नाम क्या है?",
        "options_hi": ["कर्मधारय", "द्विगु", "बहुव्रीहि", "नञ्तत्पुरुष"],
        "answer_hi": "कर्मधारय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "'नरसिंहः' इस पद का समास नाम क्या है?",
        "options_hi": ["बहुव्रीहि", "कर्मधारय", "द्विगु", "अव्ययीभाव"],
        "answer_hi": "बहुव्रीहि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "'ऋतुपर्णः' इस पद का समास नाम क्या है?",
        "options_hi": ["बहुव्रीहि", "कर्मधारय", "द्विगु", "अव्ययीभाव"],
        "answer_hi": "बहुव्रीहि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "बहुव्रीहि समास में विशेषण कैसे होता है?",
        "options_hi": ["समस्त पद विशेषण होता है", "पूर्वपद विशेषण होता है", "उत्तरपद विशेषण होता है", "विभक्ति विशेषण होती है"],
        "answer_hi": "समस्त पद विशेषण होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "कर्मधारय समास में क्या सामान्य है?",
        "options_hi": ["विशेषण-विशेष्य भाव", "कर्म-कर्ता भाव", "कर्ता-कर्म भाव", "संख्या वाचकत्व"],
        "answer_hi": "विशेषण-विशेष्य भाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "द्विगु समास में संख्यापद का क्या होता है?",
        "options_hi": ["विशेषणता को प्राप्त होता है", "विशेष्यता को प्राप्त होता है", "क्रियापदता को प्राप्त होता है", "अव्ययता को प्राप्त होता है"],
        "answer_hi": "विशेषणता को प्राप्त होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "समासान्त 'तत्' प्रत्यय कहाँ मिलता है?",
        "options_hi": ["द्विगु में तद्धित अर्थ में", "तत्पुरुष में", "अव्ययीभाव में", "द्वंद्व में"],
        "answer_hi": "द्विगु में तद्धित अर्थ में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "'परमेश्वरः' इस पद का समास नाम क्या है?",
        "options_hi": ["उपपद तत्पुरुष", "कर्मधारय", "नञ्तत्पुरुष", "बहुव्रीहि"],
        "answer_hi": "उपपद तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "'पुरुषसिंहः' इस पद का समास नाम क्या है?",
        "options_hi": ["कर्मधारय", "बहुव्रीहि", "द्विगु", "अव्ययीभाव"],
        "answer_hi": "कर्मधारय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "'सप्तर्षयः' इस पद का समास नाम क्या है?",
        "options_hi": ["द्विगु", "कर्मधारय", "बहुव्रीहि", "अव्ययीभाव"],
        "answer_hi": "द्विगु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "अव्ययीभाव समास का पूर्वपद क्या होता है?",
        "options_hi": ["अव्यय होता है", "नाम होता है", "सर्वनाम होता है", "विशेषण होता है"],
        "answer_hi": "अव्यय होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "'प्रतिमुखम्' इस पद का विग्रह क्या है?",
        "options_hi": ["मुख के सामने", "मुख की ओर", "मुख के साथ", "मुख से"],
        "answer_hi": "मुख के सामने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "समास का सर्वोत्तम उदाहरण क्या माना जाता है?",
        "options_hi": ["राम-रावण युद्ध", "महाभारत", "रघुवंश", "सभी संस्कृत काव्य"],
        "answer_hi": "सभी संस्कृत काव्य",
        "attempted": false,
        "selected": ""
    }
];
    // ----------- GLOBAL VARS -----------------------------
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