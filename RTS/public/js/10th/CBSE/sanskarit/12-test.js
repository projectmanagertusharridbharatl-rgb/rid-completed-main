const questions = [
    {
        "num": 1,
        "question_hi": "लेखिका ने क्या निष्कर्ष प्रस्तुत किया है?",
        "options_hi": ["सब मिलकर रक्षा करें", "सब स्वार्थ पूरा करें", "सब धन कमाएँ", "सब विद्या प्राप्त करें"],
        "answer_hi": "सब मिलकर रक्षा करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "शुचि पर्यावरण के अभाव में क्या होगा?",
        "options_hi": ["जीवन दुष्कर होगा", "धन नष्ट होगा", "यश नष्ट होगा", "सुख नष्ट होगा"],
        "answer_hi": "जीवन दुष्कर होगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "प्रकृति कब क्रुद्ध होती है?",
        "options_hi": ["अत्याचार से", "सेवा से", "पूजा से", "दर्शन से"],
        "answer_hi": "अत्याचार से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "लेखिका ने कौन सा प्रतीक प्रयुक्त किया है?",
        "options_hi": ["हरित ध्वज", "रक्त ध्वज", "श्वेत ध्वज", "नील ध्वज"],
        "answer_hi": "हरित ध्वज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "शुचि पर्यावरण की रक्षा किसका कर्तव्य है?",
        "options_hi": ["प्रत्येक मनुष्य का", "केवल सरकार का", "वैज्ञानिकों का", "शिक्षकों का"],
        "answer_hi": "प्रत्येक मनुष्य का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "प्रदूषण का मुख्य कारण क्या वर्णित है?",
        "options_hi": ["मनुष्य का स्वार्थ", "प्राकृतिक आपदाएँ", "जनसंख्या वृद्धि", "औद्योगिकीकरण"],
        "answer_hi": "मनुष्य का स्वार्थ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "वृक्ष हमें क्या देते हैं?",
        "options_hi": ["प्राणवायु (ऑक्सीजन)", "फल", "लकड़ी", "छाया"],
        "answer_hi": "प्राणवायु (ऑक्सीजन)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "जल की शुद्धता के लिए लेखिका क्या सुझाती हैं?",
        "options_hi": ["जल को प्रदूषित न करें", "जल संरक्षित करें", "जलशोधन करें", "वर्षाजल संग्रह करें"],
        "answer_hi": "जल को प्रदूषित न करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "वायु प्रदूषण का प्रमुख परिणाम क्या है?",
        "options_hi": ["श्वास रोग", "जल रोग", "चर्म रोग", "नेत्र रोग"],
        "answer_hi": "श्वास रोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "ध्वनि प्रदूषण से क्या होता है?",
        "options_hi": ["श्रवण समस्याएँ", "मानसिक तनाव", "निद्रा में विघ्न", "सभी उपरोक्त"],
        "answer_hi": "सभी उपरोक्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "लेखिका ने पर्यावरण के लिए किसकी उपमा दी है?",
        "options_hi": ["माता", "पिता", "गुरु", "मित्र"],
        "answer_hi": "माता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "प्लास्टिक प्रदूषण के निवारण के लिए क्या करना चाहिए?",
        "options_hi": ["प्लास्टिक का उपयोग न करें", "पुनर्चक्रण करें", "जैविक पदार्थों का उपयोग करें", "सभी उपरोक्त"],
        "answer_hi": "सभी उपरोक्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "वृक्षारोपण का प्रमुख महत्व क्या है?",
        "options_hi": ["पर्यावरण संतुलन", "फल प्राप्ति", "भूषण", "छाया प्राप्ति"],
        "answer_hi": "पर्यावरण संतुलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "लेखिका ने किस नदी का उदाहरण दिया है?",
        "options_hi": ["गंगा", "यमुना", "गोदावरी", "कावेरी"],
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "प्राचीन काल में पर्यावरण की कैसी स्थिति थी?",
        "options_hi": ["अति शुद्ध", "प्रदूषित", "सामान्य", "अज्ञात"],
        "answer_hi": "अति शुद्ध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "आधुनिक युग में पर्यावरण की क्या स्थिति है?",
        "options_hi": ["चिंताजनक", "समाधान योग्य", "उत्तम", "सामान्य"],
        "answer_hi": "चिंताजनक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "युवाओं की पर्यावरण रक्षा में क्या भूमिका है?",
        "options_hi": ["प्रमुख", "गौण", "सहायक", "अनुपस्थित"],
        "answer_hi": "प्रमुख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "शिक्षा के माध्यम से क्या संभव है?",
        "options_hi": ["पर्यावरण चेतना जागृत करना", "विज्ञान सिखाना", "कला विकसित करना", "धर्म प्रचार करना"],
        "answer_hi": "पर्यावरण चेतना जागृत करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "लेखिका ने प्रमुख कर्तव्य क्या बताया है?",
        "options_hi": ["पर्यावरण रक्षण", "धन अर्जन", "विद्याध्ययन", "समाज सेवा"],
        "answer_hi": "पर्यावरण रक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "पर्यावरण का संरक्षण किसके लिए आवश्यक है?",
        "options_hi": ["भावी पीढ़ी के लिए", "वर्तमान पीढ़ी के लिए", "पूर्व पीढ़ी के लिए", "किसी के लिए नहीं"],
        "answer_hi": "भावी पीढ़ी के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "प्रकृति मनुष्य को क्या देती है?",
        "options_hi": ["सभी आवश्यक चीजें", "केवल धन", "केवल सुख", "केवल यश"],
        "answer_hi": "सभी आवश्यक चीजें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "मनुष्य प्रकृति का प्रत्युपकार कैसे करता है?",
        "options_hi": ["प्रदूषण से", "संरक्षण से", "उपेक्षा से", "पूजा से"],
        "answer_hi": "प्रदूषण से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "औद्योगिकीकरण का प्रमुख दोष क्या है?",
        "options_hi": ["प्रदूषण वृद्धि", "रोजगार वृद्धि", "धन वृद्धि", "प्रगति"],
        "answer_hi": "प्रदूषण वृद्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "नगरों में प्रमुख समस्या क्या है?",
        "options_hi": ["वायु प्रदूषण", "जल अभाव", "वासस्थान अभाव", "रोजगार अभाव"],
        "answer_hi": "वायु प्रदूषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "गाँवों में प्रमुख समस्या क्या है?",
        "options_hi": ["जल प्रदूषण", "वन क्षय", "कृषि विघ्न", "शिक्षा अभाव"],
        "answer_hi": "जल प्रदूषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "लेखिका ने क्या सूत्र दिया है?",
        "options_hi": ["सब मिलकर पर्यावरण रक्षा करें", "धन कमाएँ", "पढ़ें", "यज्ञ करें"],
        "answer_hi": "सब मिलकर पर्यावरण रक्षा करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "विश्व पर्यावरण दिवस कब मनाया जाता है?",
        "options_hi": ["५ जून", "२२ अप्रैल", "२१ मार्च", "१ जुलाई"],
        "answer_hi": "५ जून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "लेखिका ने किसके विस्तार का महत्व बताया है?",
        "options_hi": ["हरित आच्छादन का", "भवन निर्माण का", "मार्ग निर्माण का", "कारखानों का"],
        "answer_hi": "हरित आच्छादन का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "प्राणी वर्ग की प्रमुख समस्या क्या है?",
        "options_hi": ["आवास क्षय", "आहार अभाव", "जल अभाव", "वायु प्रदूषण"],
        "answer_hi": "आवास क्षय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "जैव विविधता का रक्षण क्यों आवश्यक है?",
        "options_hi": ["पारिस्थितिक संतुलन के लिए", "मांस प्राप्ति के लिए", "चर्म प्राप्ति के लिए", "मनोरंजन के लिए"],
        "answer_hi": "पारिस्थितिक संतुलन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "लेखिका ने क्या प्रार्थना की है?",
        "options_hi": ["सभी पर्यावरण रक्षा करें", "सभी धनवान बनें", "सभी विद्वान बनें", "सभी सुखी बनें"],
        "answer_hi": "सभी पर्यावरण रक्षा करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "प्रकृति हमारी क्या बनती है?",
        "options_hi": ["पोषक", "शिक्षिका", "रक्षिका", "मार्गदर्शिका"],
        "answer_hi": "पोषक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "मृदा प्रदूषण का परिणाम क्या है?",
        "options_hi": ["कृषि हानि", "जल हानि", "वायु हानि", "स्वास्थ्य हानि"],
        "answer_hi": "कृषि हानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "रेडियोधर्मी प्रदूषण का प्रभाव क्या है?",
        "options_hi": ["दीर्घकालिक रोग", "तत्काल मृत्यु", "वनस्पति नाश", "जल दूषण"],
        "answer_hi": "दीर्घकालिक रोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "सौर शक्ति के उपयोग से क्या लाभ मिलता है?",
        "options_hi": ["प्रदूषण में कमी", "धन लाभ", "शक्ति वृद्धि", "प्रगति गति"],
        "answer_hi": "प्रदूषण में कमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "लेखिका ने क्या सुझाव दिया है?",
        "options_hi": ["पर्यावरणमित्र बनो", "धनवान बनो", "विद्यावान बनो", "शक्तिमान बनो"],
        "answer_hi": "पर्यावरणमित्र बनो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "जल का संरक्षण कैसे संभव है?",
        "options_hi": ["वर्षाजल संचयन से", "नदी खनन से", "कूप निर्माण से", "ट्यूबवेल निर्माण से"],
        "answer_hi": "वर्षाजल संचयन से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "वन महोत्सव का उद्देश्य क्या है?",
        "options_hi": ["वृक्षारोपण प्रोत्साहन", "वन विहार", "काष्ठ संग्रह", "प्राणी दर्शन"],
        "answer_hi": "वृक्षारोपण प्रोत्साहन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "लेखिका किस प्रकार समाप्ति करती है?",
        "options_hi": ["प्रार्थना से", "आश्वासन से", "भय प्रदर्शन से", "आज्ञा से"],
        "answer_hi": "प्रार्थना से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "शुचि पर्यावरण का लक्षण क्या है?",
        "options_hi": ["निर्मल जल और वायु", "धन और समृद्धि", "विद्या और बुद्धि", "यश और कीर्ति"],
        "answer_hi": "निर्मल जल और वायु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "प्रदूषण निवारण में सरकार की क्या भूमिका है?",
        "options_hi": ["नियम निर्माण", "धन दान", "शिक्षण", "प्रचार"],
        "answer_hi": "नियम निर्माण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "विद्यालयों में कौन सी शिक्षा आवश्यक है?",
        "options_hi": ["पर्यावरण शिक्षा", "विज्ञान शिक्षा", "कला शिक्षा", "संगीत शिक्षा"],
        "answer_hi": "पर्यावरण शिक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "गृहिणियों का क्या कर्तव्य है?",
        "options_hi": ["कचरा विभाजन", "भोजन पाक", "गृह शोभन", "बाल पालन"],
        "answer_hi": "कचरा विभाजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "वाहन चालकों का क्या कर्तव्य है?",
        "options_hi": ["प्रदूषण नियंत्रण", "वेग नियंत्रण", "मार्ग नियंत्रण", "यात्री नियंत्रण"],
        "answer_hi": "प्रदूषण नियंत्रण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "उद्योगपतियों का क्या कर्तव्य है?",
        "options_hi": ["शोधन यंत्र स्थापन", "धन दान", "रोजगार दान", "उत्पादन वृद्धि"],
        "answer_hi": "शोधन यंत्र स्थापन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "कृषकों का क्या कर्तव्य है?",
        "options_hi": ["जैविक कृषि", "रासायनिक कृषि", "सिंचन व्यवस्था", "फल संग्रह"],
        "answer_hi": "जैविक कृषि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "छात्रों का क्या कर्तव्य है?",
        "options_hi": ["वृक्षारोपण", "पठन", "लेखन", "खेल"],
        "answer_hi": "वृक्षारोपण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "सामान्य जन का क्या कर्तव्य है?",
        "options_hi": ["सार्वजनिक स्थान शुद्धि", "क्रय", "विक्रय", "भ्रमण"],
        "answer_hi": "सार्वजनिक स्थान शुद्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "लेखिका ने कौन सा दृष्टांत प्रयुक्त किया है?",
        "options_hi": ["वृक्ष की छाया", "नदी का प्रवाह", "पर्वत की ऊँचाई", "सूर्य का प्रकाश"],
        "answer_hi": "वृक्ष की छाया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "शुचि पर्यावरण का प्रमुख लाभ क्या है?",
        "options_hi": ["निरोगी जीवन", "धन", "यश", "सुख"],
        "answer_hi": "निरोगी जीवन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "प्रदूषित पर्यावरण की हानि क्या है?",
        "options_hi": ["रोग वृद्धि", "धन हानि", "यश हानि", "सुख हानि"],
        "answer_hi": "रोग वृद्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "लेखिका क्या भविष्यवाणी करती है?",
        "options_hi": ["प्रदूषण वृद्धि से विनाश", "धन वृद्धि से सुख", "जन वृद्धि से समृद्धि", "विद्या वृद्धि से यश"],
        "answer_hi": "प्रदूषण वृद्धि से विनाश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "पर्यावरण संतुलन कब भंग होता है?",
        "options_hi": ["प्रकृति शोषण से", "प्रकृति पूजन से", "प्रकृति सेवा से", "प्रकृति दर्शन से"],
        "answer_hi": "प्रकृति शोषण से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "लेखिका ने कौन सा उद्धरण प्रयुक्त किया है?",
        "options_hi": ["वृक्ष जीवन हैं", "नदियाँ आयु हैं", "पर्वत शक्ति हैं", "वायु प्राण है"],
        "answer_hi": "वृक्ष जीवन हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "आधुनिक सभ्यता का प्रमुख दोष क्या है?",
        "options_hi": ["प्रदूषण उत्पादन", "सुख साधन निर्माण", "धन उत्पादन", "यंत्र निर्माण"],
        "answer_hi": "प्रदूषण उत्पादन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "प्राचीन भारत में पर्यावरण कैसा था?",
        "options_hi": ["अति निर्मल", "अति प्रदूषित", "सामान्य", "अज्ञात"],
        "answer_hi": "अति निर्मल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "लेखिका ने कृतज्ञतापूर्वक किसका स्मरण किया है?",
        "options_hi": ["प्रकृति के दान का", "पूर्वजों की परंपरा का", "ऋषियों के वचनों का", "देवताओं की कृपा का"],
        "answer_hi": "प्रकृति के दान का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "प्रकृति हमें क्या नहीं देती?",
        "options_hi": ["प्रदूषण", "प्राणवायु", "जल", "अन्न"],
        "answer_hi": "प्रदूषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "मनुष्य प्रकृति को क्यों हिन्सता है?",
        "options_hi": ["स्वार्थ के लिए", "परार्थ के लिए", "देश के लिए", "धर्म के लिए"],
        "answer_hi": "स्वार्थ के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "लेखिका किसके भविष्य की चिंता करती है?",
        "options_hi": ["बच्चों का", "वृद्धों का", "युवाओं का", "स्त्रियों का"],
        "answer_hi": "बच्चों का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "पर्यावरण रक्षा किसका धर्म है?",
        "options_hi": ["प्रत्येक का", "सरकार का", "वैज्ञानिकों का", "धनिकों का"],
        "answer_hi": "प्रत्येक का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "लेखिका ने कौन सी प्रतिज्ञा करने को कहा है?",
        "options_hi": ["पर्यावरण रक्षा की", "धन अर्जन की", "यश प्राप्ति की", "सुख प्राप्ति की"],
        "answer_hi": "पर्यावरण रक्षा की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "प्रकृति हमें क्या सिखाती है?",
        "options_hi": ["सहअस्तित्व", "प्रतिस्पर्धा", "शोषण", "विनाश"],
        "answer_hi": "सहअस्तित्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "वन्य जीवों का संरक्षण क्यों आवश्यक है?",
        "options_hi": ["जैव विविधता के लिए", "मांस के लिए", "चर्म के लिए", "मनोरंजन के लिए"],
        "answer_hi": "जैव विविधता के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "लेखिका ने क्या आह्वान किया है?",
        "options_hi": ["पर्यावरण रक्षा के लिए", "धन दान के लिए", "रक्त दान के लिए", "विद्या दान के लिए"],
        "answer_hi": "पर्यावरण रक्षा के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "प्रदूषण निवारण में कौन सी तकनीक उपयुक्त है?",
        "options_hi": ["सौर शक्ति", "परमाणु शक्ति", "जल शक्ति", "वायु शक्ति"],
        "answer_hi": "सौर शक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "लेखिका ने कौन सी उपमा दी है?",
        "options_hi": ["पर्यावरण कुटुम्ब है", "पर्यावरण विद्यालय है", "पर्यावरण देवालय है", "पर्यावरण रंगभूमि है"],
        "answer_hi": "पर्यावरण कुटुम्ब है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "प्रकृति सौंदर्य का रक्षण क्यों आवश्यक है?",
        "options_hi": ["मानसिक स्वास्थ्य के लिए", "दृश्य सुख के लिए", "पर्यटन विकास के लिए", "कला प्रेरणा के लिए"],
        "answer_hi": "मानसिक स्वास्थ्य के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "लेखिका किसके भाषण का उल्लेख करती है?",
        "options_hi": ["महात्मा गांधी का", "सुभाष चंद्र बोस का", "जवाहरलाल नेहरू का", "इंदिरा गांधी का"],
        "answer_hi": "महात्मा गांधी का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "गांधी जी क्या कहते थे?",
        "options_hi": ["प्रकृति सबकी पूर्ति करती है", "धन सर्वस्व है", "सत्य परम धर्म है", "अहिंसा परम धर्म है"],
        "answer_hi": "प्रकृति सबकी पूर्ति करती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "शुचिपर्यावरणम् निबंध की रचयित्री कौन हैं?",
        "options_hi": ["श्रीमती सरोजिनी सीतारामन", "महादेवी वर्मा", "सुभद्रा कुमारी चौहान", "प्रतिभा राय"],
        "answer_hi": "श्रीमती सरोजिनी सीतारामन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "शुचिपर्यावरणम् निबंध में किस विषय का वर्णन किया गया है?",
        "options_hi": ["पर्यावरण की शुद्धता", "राजनीति", "काव्य", "इतिहास"],
        "answer_hi": "पर्यावरण की शुद्धता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "'शुचि' शब्द का क्या अर्थ है?",
        "options_hi": ["शुद्ध", "हरा", "सुन्दर", "महत्वपूर्ण"],
        "answer_hi": "शुद्ध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "लेखिका ने पर्यावरण को क्या कहा है?",
        "options_hi": ["जीवन का आधार", "मनोरंजन का साधन", "धन का स्रोत", "यश का मार्ग"],
        "answer_hi": "जीवन का आधार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "पर्यावरणमित्रों की संख्या कैसी होनी चाहिए?",
        "options_hi": ["असीमित", "सीमित", "निश्चित", "अल्प"],
        "answer_hi": "असीमित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "लेखिका कौन सा दृष्टिकोण प्रस्तुत करती है?",
        "options_hi": ["सकारात्मक", "नकारात्मक", "उदासीन", "आशावादी"],
        "answer_hi": "सकारात्मक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "प्रकृति सेवा किसकी सेवा है?",
        "options_hi": ["ईश्वर की", "मानव की", "देश की", "धर्म की"],
        "answer_hi": "ईश्वर की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "लेखिका ने क्या भावनापूर्ण कहा है?",
        "options_hi": ["प्रकृति हमारी माता है", "प्रकृति हमारा पिता है", "प्रकृति हमारा गुरु है", "प्रकृति हमारा देवता है"],
        "answer_hi": "प्रकृति हमारी माता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "प्रकृति हमें क्या न्याय देती है?",
        "options_hi": ["कर्म के अनुसार फल", "इच्छा के अनुसार फल", "भाग्य के अनुसार फल", "प्रार्थना के अनुसार फल"],
        "answer_hi": "कर्म के अनुसार फल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "लेखिका ने कौन सा आदर्श प्रस्तुत किया है?",
        "options_hi": ["सरल जीवन उच्च चिंतन", "वैभवपूर्ण जीवन", "भोगपूर्ण जीवन", "त्यागपूर्ण जीवन"],
        "answer_hi": "सरल जीवन उच्च चिंतन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "प्रकृति कब प्रसन्न होती है?",
        "options_hi": ["संरक्षण से", "शोषण से", "उपेक्षा से", "विनाश से"],
        "answer_hi": "संरक्षण से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "लेखिका कौन सा सप्ताह सुझाती है?",
        "options_hi": ["पर्यावरण सप्ताह", "स्वास्थ्य सप्ताह", "शिक्षा सप्ताह", "सेवा सप्ताह"],
        "answer_hi": "पर्यावरण सप्ताह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "विद्यालयों में कौन सी प्रतियोगिता आयोजित की जानी चाहिए?",
        "options_hi": ["पर्यावरण ज्ञान प्रतियोगिता", "विद्या प्रतियोगिता", "खेल प्रतियोगिता", "संगीत प्रतियोगिता"],
        "answer_hi": "पर्यावरण ज्ञान प्रतियोगिता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "लेखिका ने कौन सा मंत्र दिया है?",
        "options_hi": ["रक्षेम पर्यावरणम्", "कुर्याम धनम्", "पठेम विद्याम्", "यजेम देवान्"],
        "answer_hi": "रक्षेम पर्यावरणम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "प्रकृति हमारी कौन सी सम्पत्ति है?",
        "options_hi": ["अमूल्य", "सामान्य", "क्षणिक", "विलासी"],
        "answer_hi": "अमूल्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "लेखिका किसके लिए समर्पण करती है?",
        "options_hi": ["पर्यावरण रक्षा के लिए", "देश रक्षा के लिए", "धर्म रक्षा के लिए", "संस्कृति रक्षा के लिए"],
        "answer_hi": "पर्यावरण रक्षा के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "प्रकृति हमें क्या याद दिलाती है?",
        "options_hi": ["सादगी", "वैभव", "शक्ति", "बुद्धि"],
        "answer_hi": "सादगी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "लेखिका ने कौन सा प्रतिबिंब दिखाया है?",
        "options_hi": ["स्वच्छ जल, स्वच्छ मन", "स्वच्छ वस्त्र, स्वच्छ शरीर", "स्वच्छ गृह, स्वच्छ परिवेश", "स्वच्छ भोजन, स्वच्छ स्वास्थ्य"],
        "answer_hi": "स्वच्छ जल, स्वच्छ मन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "प्रकृति किसकी कल्पना है?",
        "options_hi": ["ईश्वर की", "मानव की", "वैज्ञानिक की", "कवि की"],
        "answer_hi": "ईश्वर की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "लेखिका क्या निवेदन करती है?",
        "options_hi": ["प्रकृति की रक्षा करो", "धन संचय करो", "विद्या ग्रहण करो", "यश अर्जित करो"],
        "answer_hi": "प्रकृति की रक्षा करो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "प्रकृति सेवा किसकी सेवा है?",
        "options_hi": ["परमेश्वर की", "मानव की", "देश की", "धर्म की"],
        "answer_hi": "परमेश्वर की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "लेखिका ने कौन सा आशीर्वाद दिया है?",
        "options_hi": ["स्वस्थ पर्यावरण हो", "धन हो", "यश हो", "सुख हो"],
        "answer_hi": "स्वस्थ पर्यावरण हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "प्रकृति हमारी कौन सी शिक्षिका है?",
        "options_hi": ["सर्वोत्तम", "सामान्य", "कठोर", "मृदुल"],
        "answer_hi": "सर्वोत्तम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "लेखिका कौन सा विश्वास दिखाती है?",
        "options_hi": ["पर्यावरण शुद्ध होगा", "धन वृद्धि होगी", "यश फैलेगा", "सुख होगा"],
        "answer_hi": "पर्यावरण शुद्ध होगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "प्रकृति कब रुष्ट होती है?",
        "options_hi": ["अन्याय से", "न्याय से", "सेवा से", "पूजा से"],
        "answer_hi": "अन्याय से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "लेखिका ने कौन सा प्रेरणास्रोत दिखाया है?",
        "options_hi": ["प्राचीन भारतीय संस्कृति", "पाश्चात्य संस्कृति", "आधुनिक विज्ञान", "आर्थिक विकास"],
        "answer_hi": "प्राचीन भारतीय संस्कृति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "प्रकृति हमारा कौन सा दर्पण है?",
        "options_hi": ["कर्मों का", "भावनाओं का", "विचारों का", "आचरणों का"],
        "answer_hi": "कर्मों का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "लेखिका कौन सा प्रतिज्ञा पत्र सुझाती है?",
        "options_hi": ["पर्यावरण रक्षा पत्र", "शिक्षा पत्र", "स्वास्थ्य पत्र", "नैतिकता पत्र"],
        "answer_hi": "पर्यावरण रक्षा पत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "प्रकृति हमारा कौन सा अनुभव है?",
        "options_hi": ["सर्वोत्तम", "सामान्य", "कष्टदायक", "मनोरंजक"],
        "answer_hi": "सर्वोत्तम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "लेखिका ने कौन सा उपसंहार प्रस्तुत किया है?",
        "options_hi": ["पर्यावरण रक्षा ही जीवन रक्षा है", "धन रक्षा ही सुख रक्षा है", "विद्या रक्षा ही यशोरक्षा है", "स्वास्थ्य रक्षा ही बल रक्षा है"],
        "answer_hi": "पर्यावरण रक्षा ही जीवन रक्षा है",
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