const questions = [
    {
        "num": 1,
        "question_hi": "समास पद का क्या अर्थ है?",
        "options_hi": ["संक्षेप", "विस्तार", "विभाग", "परिवर्तन"],
        "answer_hi": "संक्षेप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "समास के मुख्य प्रकार कितने हैं?",
        "options_hi": ["चार", "तीन", "पाँच", "छह"],
        "answer_hi": "चार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "अव्ययीभाव समास का नियम क्या है?",
        "options_hi": ["पूर्वपद प्रधान", "उत्तरपद प्रधान", "दोनों प्रधान", "अन्य पद प्रधान"],
        "answer_hi": "पूर्वपद प्रधान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "तत्पुरुष समास का नियम क्या है?",
        "options_hi": ["उत्तरपद प्रधान", "पूर्वपद प्रधान", "दोनों प्रधान", "अन्य पद प्रधान"],
        "answer_hi": "उत्तरपद प्रधान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "द्वंद्व समास का नियम क्या है?",
        "options_hi": ["दोनों प्रधान", "पूर्वपद प्रधान", "उत्तरपद प्रधान", "अन्य पद प्रधान"],
        "answer_hi": "दोनों प्रधान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "बहुव्रीहि समास का नियम क्या है?",
        "options_hi": ["अन्य पद प्रधान", "पूर्वपद प्रधान", "उत्तरपद प्रधान", "दोनों प्रधान"],
        "answer_hi": "अन्य पद प्रधान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "अव्ययीभाव समास का उदाहरण क्या है?",
        "options_hi": ["यथाशक्ति", "राजपुरुष", "पितापुत्रौ", "चक्रपाणि"],
        "answer_hi": "यथाशक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "तत्पुरुष समास का उदाहरण क्या है?",
        "options_hi": ["राजपुरुष", "यथाशक्ति", "पितापुत्रौ", "चक्रपाणि"],
        "answer_hi": "राजपुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "द्वंद्व समास का उदाहरण क्या है?",
        "options_hi": ["पितापुत्रौ", "यथाशक्ति", "राजपुरुष", "चक्रपाणि"],
        "answer_hi": "पितापुत्रौ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "बहुव्रीहि समास का उदाहरण क्या है?",
        "options_hi": ["चक्रपाणि", "यथाशक्ति", "राजपुरुष", "पितापुत्रौ"],
        "answer_hi": "चक्रपाणि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "अव्ययीभाव समास में क्या होता है?",
        "options_hi": ["अव्यय पूर्वक", "नाम पूर्वक", "सर्वनाम पूर्वक", "विशेषण पूर्वक"],
        "answer_hi": "अव्यय पूर्वक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "तत्पुरुष समास के कितने भेद हैं?",
        "options_hi": ["छह", "दो", "तीन", "आठ"],
        "answer_hi": "छह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "कर्मधारय किसका भेद है?",
        "options_hi": ["तत्पुरुष का", "अव्ययीभाव का", "द्वंद्व का", "बहुव्रीहि का"],
        "answer_hi": "तत्पुरुष का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "द्विगु किसका भेद है?",
        "options_hi": ["तत्पुरुष का", "अव्ययीभाव का", "द्वंद्व का", "बहुव्रीहि का"],
        "answer_hi": "तत्पुरुष का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "कर्मधारय समास की पहचान क्या है?",
        "options_hi": ["विशेषण-विशेष्य भाव", "संख्या पूर्वक", "कर्म पूर्वक", "करण पूर्वक"],
        "answer_hi": "विशेषण-विशेष्य भाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "द्विगु समास की पहचान क्या है?",
        "options_hi": ["संख्या पूर्वक", "विशेषण-विशेष्य भाव", "कर्म पूर्वक", "करण पूर्वक"],
        "answer_hi": "संख्या पूर्वक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "कर्मधारय समास का उदाहरण क्या है?",
        "options_hi": ["नीलोत्पल", "त्रिभुवन", "यथाशक्ति", "पितापुत्रौ"],
        "answer_hi": "नीलोत्पल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "द्विगु समास का उदाहरण क्या है?",
        "options_hi": ["त्रिभुवन", "नीलोत्पल", "यथाशक्ति", "पितापुत्रौ"],
        "answer_hi": "त्रिभुवन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "बहुव्रीहि समास में क्या विशेष है?",
        "options_hi": ["तीसरे पद का अर्थ प्रधान", "पूर्वपद प्रधान", "उत्तरपद प्रधान", "दोनों प्रधान"],
        "answer_hi": "तीसरे पद का अर्थ प्रधान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "द्वंद्व समास में क्या विशेष है?",
        "options_hi": ["इतरेतर योग", "व्यधिकरण योग", "एकशेष योग", "समाहार योग"],
        "answer_hi": "इतरेतर योग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "अव्ययीभाव समास का विग्रह कैसे होता है?",
        "options_hi": ["तत्पुरुष की तरह", "बहुव्रीहि की तरह", "द्वंद्व की तरह", "स्वतंत्र रूप से"],
        "answer_hi": "तत्पुरुष की तरह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "समासान्त प्रत्यय किन समासों के होते हैं?",
        "options_hi": ["कुछ के", "सभी के", "किसी के नहीं", "अव्ययीभाव के"],
        "answer_hi": "कुछ के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "प्रादि समास किसका भेद है?",
        "options_hi": ["अव्ययीभाव का", "तत्पुरुष का", "द्वंद्व का", "बहुव्रीहि का"],
        "answer_hi": "अव्ययीभाव का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "नञ्तत्पुरुष किसका भेद है?",
        "options_hi": ["तत्पुरुष का", "अव्ययीभाव का", "द्वंद्व का", "बहुव्रीहि का"],
        "answer_hi": "तत्पुरुष का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "उपपद तत्पुरुष किसका भेद है?",
        "options_hi": ["तत्पुरुष का", "अव्ययीभाव का", "द्वंद्व का", "बहुव्रीहि का"],
        "answer_hi": "तत्पुरुष का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "सप्तमी तत्पुरुष किसका भेद है?",
        "options_hi": ["तत्पुरुष का", "अव्ययीभाव का", "द्वंद्व का", "बहुव्रीहि का"],
        "answer_hi": "तत्पुरुष का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "षष्ठी तत्पुरुष किसका भेद है?",
        "options_hi": ["तत्पुरुष का", "अव्ययीभाव का", "द्वंद्व का", "बहुव्रीहि का"],
        "answer_hi": "तत्पुरुष का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "द्वितीया तत्पुरुष किसका भेद है?",
        "options_hi": ["तत्पुरुष का", "अव्ययीभाव का", "द्वंद्व का", "बहुव्रीहि का"],
        "answer_hi": "तत्पुरुष का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "तृतीया तत्पुरुष किसका भेद है?",
        "options_hi": ["तत्पुरुष का", "अव्ययीभाव का", "द्वंद्व का", "बहुव्रीहि का"],
        "answer_hi": "तत्पुरुष का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "चतुर्थी तत्पुरुष किसका भेद है?",
        "options_hi": ["तत्पुरुष का", "अव्ययीभाव का", "द्वंद्व का", "बहुव्रीहि का"],
        "answer_hi": "तत्पुरुष का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "पञ्चमी तत्पुरुष किसका भेद है?",
        "options_hi": ["तत्पुरुष का", "अव्ययीभाव का", "द्वंद्व का", "बहुव्रीहि का"],
        "answer_hi": "तत्पुरुष का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "समास में क्या लुप्त होता है?",
        "options_hi": ["विभक्ति", "प्रत्यय", "उपसर्ग", "धातु"],
        "answer_hi": "विभक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "समास का विपरीत क्या है?",
        "options_hi": ["विग्रह", "विस्तार", "विभाग", "विराम"],
        "answer_hi": "विग्रह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "विग्रह में क्या होता है?",
        "options_hi": ["विभक्ति युक्त पद", "समासित पद", "प्रत्यय युक्त पद", "उपसर्ग युक्त पद"],
        "answer_hi": "विभक्ति युक्त पद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "'प्रतिदिनम्' यह पद कौन सा समास है?",
        "options_hi": ["अव्ययीभाव", "तत्पुरुष", "द्वंद्व", "बहुव्रीहि"],
        "answer_hi": "अव्ययीभाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "'राजपुरुषः' यह पद कौन सा समास है?",
        "options_hi": ["तत्पुरुष", "अव्ययीभाव", "द्वंद्व", "बहुव्रीहि"],
        "answer_hi": "तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "'रामलक्ष्मणौ' यह पद कौन सा समास है?",
        "options_hi": ["द्वंद्व", "अव्ययीभाव", "तत्पुरुष", "बहुव्रीहि"],
        "answer_hi": "द्वंद्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "'दीर्घबाहुः' यह पद कौन सा समास है?",
        "options_hi": ["बहुव्रीहि", "अव्ययीभाव", "तत्पुरुष", "द्वंद्व"],
        "answer_hi": "बहुव्रीहि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "'यथाशक्ति' इसका विग्रह क्या है?",
        "options_hi": ["यथा शक्तिः", "यस्य शक्तिः", "येन शक्तिः", "यस्मै शक्तिः"],
        "answer_hi": "यथा शक्तिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "'राजपुरुषः' इसका विग्रह क्या है?",
        "options_hi": ["राज्ञः पुरुषः", "राजा च पुरुषः", "राजार्थं पुरुषः", "राजेन पुरुषः"],
        "answer_hi": "राज्ञः पुरुषः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "'पितापुत्रौ' इसका विग्रह क्या है?",
        "options_hi": ["पिता च पुत्रः च", "पितुः पुत्रः", "पित्रर्थं पुत्रः", "पितृभ्यां पुत्रः"],
        "answer_hi": "पिता च पुत्रः च",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "'चक्रपाणिः' इसका विग्रह क्या है?",
        "options_hi": ["चक्रं पाणौ यस्य सः", "चक्रस्य पाणिः", "चक्राय पाणिः", "चक्रेण पाणिः"],
        "answer_hi": "चक्रं पाणौ यस्य सः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "'उपगङ्गम्' इसका विग्रह क्या है?",
        "options_hi": ["गङ्गायाः समीपम्", "गङ्गायै", "गङ्गायाः", "गङ्गया सह"],
        "answer_hi": "गङ्गायाः समीपम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "'नीलोत्पलम्' इसका विग्रह क्या है?",
        "options_hi": ["नीलं च तत् उत्पलं च", "नीलस्य उत्पलम्", "नीलाय उत्पलम्", "नीलेन उत्पलम्"],
        "answer_hi": "नीलं च तत् उत्पलं च",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "'त्रिभुवनम्' इसका विग्रह क्या है?",
        "options_hi": ["त्रीणि भुवनानि", "त्रयाणां भुवनम्", "त्रिषु भुवनेषु", "त्रिभिः भुवनैः"],
        "answer_hi": "त्रीणि भुवनानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "समासान्त शब्द कौन से हैं?",
        "options_hi": ["त, डच्, टच्", "ति, सि, मि", "त्वा, य, तुम्", "क, टा, ङे"],
        "answer_hi": "त, डच्, टच्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "'पुरुषश्रेष्ठः' यह कौन सा समास है?",
        "options_hi": ["कर्मधारय", "द्विगु", "नञ्तत्पुरुष", "उपपद तत्पुरुष"],
        "answer_hi": "कर्मधारय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "'अब्राह्मणः' यह कौन सा समास है?",
        "options_hi": ["नञ्तत्पुरुष", "कर्मधारय", "द्विगु", "बहुव्रीहि"],
        "answer_hi": "नञ्तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "'ग्रामगतः' यह कौन सा समास है?",
        "options_hi": ["सप्तमी तत्पुरुष", "षष्ठी तत्पुरुष", "द्वितीया तत्पुरुष", "तृतीया तत्पुरुष"],
        "answer_hi": "सप्तमी तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "'राज्ञः पुरुषः' यह विग्रह किस समास के लिए है?",
        "options_hi": ["षष्ठी तत्पुरुष", "सप्तमी तत्पुरुष", "द्वितीया तत्पुरुष", "तृतीया तत्पुरुष"],
        "answer_hi": "षष्ठी तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "'फलं ददाति' यह विग्रह किस समास के लिए है?",
        "options_hi": ["चतुर्थी तत्पुरुष", "षष्ठी तत्पुरुष", "सप्तमी तत्पुरुष", "द्वितीया तत्पुरुष"],
        "answer_hi": "चतुर्थी तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "'यूपाय दारु' यह विग्रह किस समास के लिए है?",
        "options_hi": ["चतुर्थी तत्पुरुष", "षष्ठी तत्पुरुष", "सप्तमी तत्पुरुष", "द्वितीया तत्पुरुष"],
        "answer_hi": "चतुर्थी तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "'वृक्षात् पतति' यह विग्रह किस समास के लिए है?",
        "options_hi": ["पञ्चमी तत्पुरुष", "षष्ठी तत्पुरुष", "सप्तमी तत्पुरुष", "द्वितीया तत्पुरुष"],
        "answer_hi": "पञ्चमी तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "'अन्नं भुङ्क्ते' यह विग्रह किस समास के लिए है?",
        "options_hi": ["द्वितीया तत्पुरुष", "षष्ठी तत्पुरुष", "सप्तमी तत्पुरुष", "तृतीया तत्पुरुष"],
        "answer_hi": "द्वितीया तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "'हस्तेन क्रीडति' यह विग्रह किस समास के लिए है?",
        "options_hi": ["तृतीया तत्पुरुष", "षष्ठी तत्पुरुष", "सप्तमी तत्पुरुष", "द्वितीया तत्पुरुष"],
        "answer_hi": "तृतीया तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "द्वंद्व समास के कितने भेद हैं?",
        "options_hi": ["दो", "तीन", "चार", "पाँच"],
        "answer_hi": "दो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "द्वंद्व समास के भेद कौन से हैं?",
        "options_hi": ["इतरेतर द्वंद्व, समाहार द्वंद्व", "कर्मधारय, द्विगु", "नञ्तत्पुरुष, उपपद तत्पुरुष", "प्रादि, यथादि"],
        "answer_hi": "इतरेतर द्वंद्व, समाहार द्वंद्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "इतरेतर द्वंद्व का उदाहरण क्या है?",
        "options_hi": ["पितापुत्रौ", "पानकम्", "त्रिभुवनम्", "यथाशक्ति"],
        "answer_hi": "पितापुत्रौ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "समाहार द्वंद्व का उदाहरण क्या है?",
        "options_hi": ["पानकम्", "पितापुत्रौ", "त्रि�भुवनम्", "यथाशक्ति"],
        "answer_hi": "पानकम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "बहुव्रीहि समास में क्या विशेष्य होता है?",
        "options_hi": ["तीसरे पद का अर्थ", "पूर्वपद का अर्थ", "उत्तरपद का अर्थ", "दोनों पदों का अर्थ"],
        "answer_hi": "तीसरे पद का अर्थ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "समास का प्रयोजन क्या है?",
        "options_hi": ["भाषा लाघव, सौंदर्य", "अर्थ विस्तार", "वाक्य विस्तार", "शब्द विस्तार"],
        "answer_hi": "भाषा लाघव, सौंदर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "समास में क्या नहीं लुप्त होता?",
        "options_hi": ["स्वर", "विभक्ति", "प्रत्यय", "उपसर्ग"],
        "answer_hi": "स्वर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "समासान्त प्रत्ययों के स्थान पर क्या होता है?",
        "options_hi": ["दूसरा प्रत्यय", "विभक्ति", "उपसर्ग", "धातु"],
        "answer_hi": "दूसरा प्रत्यय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "'महान् राजा' यह विग्रह किस समास के लिए है?",
        "options_hi": ["कर्मधारय", "द्विगु", "नञ्तत्पुरुष", "उपपद तत्पुरुष"],
        "answer_hi": "कर्मधारय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "'त्रीणि पुराणि' यह विग्रह किस समास के लिए है?",
        "options_hi": ["द्विगु", "कर्मधारय", "नञ्तत्पुरुष", "उपपद तत्पुरुष"],
        "answer_hi": "द्विगु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "समास किस शास्त्र में पढ़ा जाता है?",
        "options_hi": ["व्याकरण में", "ज्योतिष में", "आयुर्वेद में", "साहित्य में"],
        "answer_hi": "व्याकरण में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "समास का ज्ञान किसके लिए आवश्यक है?",
        "options_hi": ["संस्कृत अध्ययन के लिए", "अंग्रेजी अध्ययन के लिए", "गणित अध्ययन के लिए", "विज्ञान अध्ययन के लिए"],
        "answer_hi": "संस्कृत अध्ययन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "समासों के प्राचीन आचार्य कौन हैं?",
        "options_hi": ["पाणिनि", "पतंजलि", "भर्तृहरि", "भामह"],
        "answer_hi": "पाणिनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "समासों का वर्णन कहाँ मिलता है?",
        "options_hi": ["अष्टाध्यायी में", "महाभाष्य में", "वाक्यपदीय में", "सिद्धान्तकौमुदी में"],
        "answer_hi": "अष्टाध्यायी में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "समास के अभाव में क्या दोष है?",
        "options_hi": ["भाषा कर्कशता", "अर्थ विस्तार", "शब्द विस्तार", "वाक्य विस्तार"],
        "answer_hi": "भाषा कर्कशता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "समास कैसे पढ़ना चाहिए?",
        "options_hi": ["उदाहरण सहित", "केवल सूत्र से", "केवल परिभाषा से", "केवल टीका से"],
        "answer_hi": "उदाहरण सहित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "समास की परीक्षा कैसे होती है?",
        "options_hi": ["समास-विग्रह से", "निबंध लेखन से", "प्रश्नोत्तर से", "मौखिक परीक्षा से"],
        "answer_hi": "समास-विग्रह से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "समास का सबसे सरल प्रकार कौन सा है?",
        "options_hi": ["तत्पुरुष", "अव्ययीभाव", "द्वंद्व", "बहुव्रीहि"],
        "answer_hi": "तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "समास का सबसे कठिन प्रकार कौन सा है?",
        "options_hi": ["बहुव्रीहि", "अव्ययीभाव", "तत्पुरुष", "द्वंद्व"],
        "answer_hi": "बहुव्रीहि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "समास का प्रयोग कहाँ अधिक होता है?",
        "options_hi": ["काव्य, नाटक में", "व्याकरण में", "निरुक्त में", "ज्योतिष में"],
        "answer_hi": "काव्य, नाटक में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "समास का महत्व क्या है?",
        "options_hi": ["भाषा सौष्ठव", "व्याकरण ज्ञान", "साहित्य ज्ञान", "छंद ज्ञान"],
        "answer_hi": "भाषा सौष्ठव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "समास के अज्ञान में क्या हानि है?",
        "options_hi": ["विग्रह ज्ञान का अभाव", "शब्द ज्ञान का अभाव", "व्याकरण ज्ञान का अभाव", "साहित्य ज्ञान का अभाव"],
        "answer_hi": "विग्रह ज्ञान का अभाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "समास के अध्ययन में क्या साधन है?",
        "options_hi": ["समास कोश", "शब्द कोश", "व्याकरण ग्रंथ", "साहित्य ग्रंथ"],
        "answer_hi": "समास कोश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "समास का प्रचार कैसे होता है?",
        "options_hi": ["शिक्षण से", "लेखन से", "पठन से", "श्रवण से"],
        "answer_hi": "शिक्षण से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "समास का भविष्य क्या है?",
        "options_hi": ["शाश्वत", "नष्ट", "परिवर्तित", "अज्ञात"],
        "answer_hi": "शाश्वत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "समास की अन्य भाषाओं से तुलना कैसे है?",
        "options_hi": ["सभी भाषाओं में है", "केवल संस्कृत में", "केवल भारतीय भाषाओं में", "केवल प्राचीन भाषाओं में"],
        "answer_hi": "सभी भाषाओं में है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "समास का डिजिटल शिक्षण कैसे है?",
        "options_hi": ["ऐप्स, वेबसाइट्स", "केवल पुस्तकों से", "केवल गुरु से", "केवल लेखन से"],
        "answer_hi": "ऐप्स, वेबसाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "समास का ऑनलाइन शिक्षण कहाँ है?",
        "options_hi": ["यूट्यूब, वेबसाइट्स", "केवल पुस्तकों में", "केवल कक्षा में", "केवल गुरुकुल में"],
        "answer_hi": "यूट्यूब, वेबसाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "समास की प्रतियोगिताएँ कौन सी हैं?",
        "options_hi": ["समास प्रतियोगिताएँ", "काव्य प्रतियोगिताएँ", "निबंध प्रतियोगिताएँ", "व्याकरण प्रतियोगिताएँ"],
        "answer_hi": "समास प्रतियोगिताएँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "समास के पुरस्कार कौन से हैं?",
        "options_hi": ["व्याकरण पुरस्कार", "साहित्य पुरस्कार", "काव्य पुरस्कार", "नाटक पुरस्कार"],
        "answer_hi": "व्याकरण पुरस्कार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "समास के संग्रहालय में क्या देखा जाता है?",
        "options_hi": ["प्राचीन पांडुलिपियाँ", "आधुनिक पुस्तकें", "चित्रकला", "शिल्पकला"],
        "answer_hi": "प्राचीन पांडुलिपियाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "समास का ऐतिहासिक महत्व क्या है?",
        "options_hi": ["प्राचीन भाषा विकास", "आधुनिक भाषा विकास", "विदेशी भाषा विकास", "लौकिक भाषा विकास"],
        "answer_hi": "प्राचीन भाषा विकास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "समास का सांस्कृतिक महत्व क्या है?",
        "options_hi": ["भाषिक संपदा", "साहित्यिक संपदा", "ऐतिहासिक संपदा", "कलात्मक संपदा"],
        "answer_hi": "भाषिक संपदा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "समास का शैक्षणिक महत्व क्या है?",
        "options_hi": ["भाषा कौशल वर्धन", "स्मृति वर्धन", "तार्किकता वर्धन", "कल्पना शक्ति वर्धन"],
        "answer_hi": "भाषा कौशल वर्धन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "समास का व्यावहारिक महत्व क्या है?",
        "options_hi": ["दैनिक व्यवहार में", "केवल शिक्षा में", "केवल साहित्य में", "केवल व्याकरण में"],
        "answer_hi": "दैनिक व्यवहार में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "समास का अध्ययन कब प्रारंभ किया जाता है?",
        "options_hi": ["मध्यम कक्षा में", "प्रारंभिक कक्षा में", "उच्च कक्षा में", "स्नातकोत्तर कक्षा में"],
        "answer_hi": "मध्यम कक्षा में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "समास के अध्ययन का काल क्या है?",
        "options_hi": ["दो वर्ष", "दो महीने", "दो सप्ताह", "दो दिन"],
        "answer_hi": "दो वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "समास के अध्ययन में क्या कठिन हैं?",
        "options_hi": ["बहुव्रीहि समास", "तत्पुरुष समास", "अव्ययीभाव समास", "द्वंद्व समास"],
        "answer_hi": "बहुव्रीहि समास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "समास के अध्ययन में क्या सरल हैं?",
        "options_hi": ["तत्पुरुष समास", "बहुव्रीहि समास", "अव्ययीभाव समास", "द्वंद्व समास"],
        "answer_hi": "तत्पुरुष समास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "समास के अध्ययन का फल क्या है?",
        "options_hi": ["संस्कृत पठन क्षमता", "अंग्रेजी पठन क्षमता", "हिंदी पठन क्षमता", "गणित क्षमता"],
        "answer_hi": "संस्कृत पठन क्षमता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "समास के अध्ययन में कौन सहायक है?",
        "options_hi": ["समास कोश", "शब्द कोश", "व्याकरण ग्रंथ", "साहित्य ग्रंथ"],
        "answer_hi": "समास कोश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "समास का अध्ययन किन शिक्षकों से होता है?",
        "options_hi": ["व्याकरण विशेषज्ञों से", "साहित्य विशेषज्ञों से", "इतिहास विशेषज्ञों से", "गणित विशेषज्ञों से"],
        "answer_hi": "व्याकरण विशेषज्ञों से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "समास के अध्ययन का भविष्य क्या है?",
        "options_hi": ["डिजिटल युग में भी आवश्यक", "नष्ट हो जाएगा", "परिवर्तित हो जाएगा", "अज्ञात होगा"],
        "answer_hi": "डिजिटल युग में भी आवश्यक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "समास के अध्ययन का अंतिम उद्देश्य क्या है?",
        "options_hi": ["स्वतंत्र संस्कृत प्रयोग", "परीक्षा उत्तीर्णता", "प्रमाणपत्र प्राप्ति", "गुरु का प्रसाद"],
        "answer_hi": "स्वतंत्र संस्कृत प्रयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "समास का सार्वकालिक महत्व क्या है?",
        "options_hi": ["भाषा संरक्षण", "व्याकरण संरक्षण", "साहित्य संरक्षण", "संस्कृति संरक्षण"],
        "answer_hi": "भाषा संरक्षण",
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