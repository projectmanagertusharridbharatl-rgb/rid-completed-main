const questions = [
    {
        "num": 1,
        "question_hi": "सन्धि शब्द का क्या अर्थ है?",
        "options_hi": ["मेलन", "विभाजन", "विराम", "भेद"],
        "answer_hi": "मेलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "सन्धि के प्रमुख प्रकार कितने हैं?",
        "options_hi": ["तीन", "दो", "चार", "पाँच"],
        "answer_hi": "तीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "स्वरसन्धि की परिभाषा क्या है?",
        "options_hi": ["स्वरों का सन्धि", "व्यंजनों का सन्धि", "विसर्ग का सन्धि", "वर्णों का सन्धि"],
        "answer_hi": "स्वरों का सन्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "व्यंजनसन्धि की परिभाषा क्या है?",
        "options_hi": ["व्यंजनों का सन्धि", "स्वरों का सन्धि", "विसर्ग का सन्धि", "अनुस्वार का सन्धि"],
        "answer_hi": "व्यंजनों का सन्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "विसर्गसन्धि की परिभाषा क्या है?",
        "options_hi": ["विसर्ग का सन्धि", "स्वरों का सन्धि", "व्यंजनों का सन्धि", "अनुस्वार का सन्धि"],
        "answer_hi": "विसर्ग का सन्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "सन्धि-विच्छेद क्या है?",
        "options_hi": ["सन्धि युक्त पद का पृथक्करण", "सन्धि का निर्माण", "सन्धि का प्रकार", "सन्धि का नाम"],
        "answer_hi": "सन्धि युक्त पद का पृथक्करण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "स्वरसन्धि के प्रकार कितने हैं?",
        "options_hi": ["पाँच", "चार", "तीन", "दस"],
        "answer_hi": "पाँच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "व्यंजनसन्धि के प्रकार कितने हैं?",
        "options_hi": ["तीन", "दो", "चार", "पाँच"],
        "answer_hi": "तीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "विसर्गसन्धि के प्रकार कितने हैं?",
        "options_hi": ["छह", "पाँच", "चार", "तीन"],
        "answer_hi": "छह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "सन्धि का लक्षण क्या है?",
        "options_hi": ["दो पदों का एकीकरण", "पदों का विभाजन", "वर्णों का परिवर्तन", "अर्थ का परिवर्तन"],
        "answer_hi": "दो पदों का एकीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "अच् सन्धि किसका प्रकार है?",
        "options_hi": ["स्वरसन्धि का", "व्यंजनसन्धि का", "विसर्गसन्धि का", "उभय सन्धि का"],
        "answer_hi": "स्वरसन्धि का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "हल् सन्धि किसका प्रकार है?",
        "options_hi": ["व्यंजनसन्धि का", "स्वरसन्धि का", "विसर्गसन्धि का", "मिश्र सन्धि का"],
        "answer_hi": "व्यंजनसन्धि का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "विसर्गसन्धि किस पर आधारित है?",
        "options_hi": ["विसर्ग पर", "स्वर पर", "व्यंजन पर", "अनुस्वार पर"],
        "answer_hi": "विसर्ग पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "स्वरसन्धि के पाँच प्रकार कौन से हैं?",
        "options_hi": ["दीर्घ, गुण, वृद्धि, यण, अय्", "सवर्ण, विसर्ग, अनुस्वार, विसर्जनीय, उपध्मानीय", "श्चुत्व, ष्टुत्व, ष्ट्व, जश्त्व, अनुनासिक", "पूर्वरूप, पररूप, विसर्गलोप, अनुनासिक, उत्व"],
        "answer_hi": "दीर्घ, गुण, वृद्धि, यण, अय्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "दीर्घ सन्धि क्या है?",
        "options_hi": ["समान स्वरों के संयोग में दीर्घ होता है", "विभिन्न स्वरों के संयोग में गुण होता है", "व्यंजनों के संयोग में सवर्ण होता है", "विसर्ग का लोप होता है"],
        "answer_hi": "समान स्वरों के संयोग में दीर्घ होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "गुण सन्धि किसमें होता है?",
        "options_hi": ["अ/आ + इ/ई/उ/ऊ/ऋ/ॠ/लृ = गुण", "इ/ई/उ/ऊ + अ/आ = गुण", "ऋ/ॠ/लृ + अ/आ = गुण", "सभी स्वरों में"],
        "answer_hi": "अ/आ + इ/ई/उ/ऊ/ऋ/ॠ/लृ = गुण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "वृद्धि सन्धि किसमें होता है?",
        "options_hi": ["अ/आ + ए/ऐ/ओ/औ = वृद्धि", "इ/ई + ए/ऐ = वृद्धि", "उ/ऊ + ओ/औ = वृद्धि", "सभी स्वरों में"],
        "answer_hi": "अ/आ + ए/ऐ/ओ/औ = वृद्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "यण् सन्धि किसमें होता है?",
        "options_hi": ["इ/ई/उ/ऊ/ऋ/ॠ/लृ + भिन्न स्वर = यण्", "अ/आ + भिन्न स्वर = यण्", "ए/ऐ/ओ/औ + भिन्न स्वर = यण्", "सभी स्वरों में"],
        "answer_hi": "इ/ई/उ/ऊ/ऋ/ॠ/लृ + भिन्न स्वर = यण्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "अयादि सन्धि किसमें होता है?",
        "options_hi": ["ए/ऐ/ओ/औ + भिन्न स्वर = अयादि", "इ/ई/उ/ऊ + भिन्न स्वर = अयादि", "अ/आ + भिन्न स्वर = अयादि", "ऋ/ॠ/लृ + भिन्न स्वर = अयादि"],
        "answer_hi": "ए/ऐ/ओ/औ + भिन्न स्वर = अयादि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "व्यंजनसन्धि के तीन प्रकार कौन से हैं?",
        "options_hi": ["स्चुत्व, ष्टुत्व, अनुनासिक", "श्चुत्व, ष्टुत्व, ष्ट्व", "सवर्ण दीर्घ, गुण, वृद्धि", "यण्, अयादि, दीर्घ"],
        "answer_hi": "श्चुत्व, ष्टुत्व, ष्ट्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "श्चुत्व किसमें होता है?",
        "options_hi": ["श्/ष्/स् + च्/छ्/ज्/झ्/ञ् = श्चुत्व", "ट्/ठ्/ड्/ढ्/ण् + त्/थ्/द्/ध्/न् = ष्टुत्व", "ष्/स् + ट्/ठ् = ष्ट्व", "क्/ख्/ग्/घ्/ङ् + च्/छ् = श्चुत्व"],
        "answer_hi": "श्/ष्/स् + च्/छ्/ज्/झ्/ञ् = श्चुत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "ष्टुत्व किसमें होता है?",
        "options_hi": ["ट्/ठ्/ड्/ढ्/ण् + त्/थ्/द्/ध्/न् = ष्टुत्व", "श्/ष्/स् + च्/छ्/ज्/झ्/ञ् = श्चुत्व", "ष्/स् + ट्/ठ् = ष्ट्व", "क्/ख्/ग्/घ्/ङ् + ट्/ठ् = ष्टुत्व"],
        "answer_hi": "ट्/ठ्/ड्/ढ्/ण् + त्/थ्/द्/ध्/न् = ष्टुत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "ष्ट्व किसमें होता है?",
        "options_hi": ["ष्/स् + ट्/ठ् = ष्ट्व", "श्/ष्/स् + च्/छ् = श्चुत्व", "ट्/ठ् + त्/थ् = ष्टुत्व", "क्/ख् + ट्/ठ् = ष्ट्व"],
        "answer_hi": "ष्/स् + ट्/ठ् = ष्ट्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "विसर्गसन्धि के छह प्रकार कौन से हैं?",
        "options_hi": ["विसर्गलोप, रुँत्व, शरुँत्व, अनुनासिक, उत्व, विसर्ग", "सवर्ण दीर्घ, गुण, वृद्धि, यण्, अयादि, विसर्ग", "श्चुत्व, ष्टुत्व, ष्ट्व, जश्त्व, अनुनासिक, उत्व", "पूर्वरूप, पररूप, विसर्गलोप, अनुनासिक, उत्व, ओत्व"],
        "answer_hi": "विसर्गलोप, रुँत्व, शरुँत्व, अनुनासिक, उत्व, विसर्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "विसर्गलोप किसमें होता है?",
        "options_hi": ["विसर्ग + क्/ख्/प्/फ्/श्/ष्/स्/ह् = विसर्गलोप", "विसर्ग + च्/छ्/ट्/ठ्/त्/थ् = रुँत्व", "विसर्ग + श्/ष्/स् = शरुँत्व", "विसर्ग + स्वर = अनुनासिक"],
        "answer_hi": "विसर्ग + क्/ख्/प्/फ्/श्/ष्/स्/ह् = विसर्गलोप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "रुँत्व किसमें होता है?",
        "options_hi": ["विसर्ग + च्/छ्/ट्/ठ्/त्/थ् = रुँत्व", "विसर्ग + क्/ख्/प्/फ् = विसर्गलोप", "विसर्ग + श्/ष्/स् = शरुँत्व", "विसर्ग + स्वर = उत्व"],
        "answer_hi": "विसर्ग + च्/छ्/ट्/ठ्/त्/थ् = रुँत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "शरुँत्व किसमें होता है?",
        "options_hi": ["विसर्ग + श्/ष्/स् = शरुँत्व", "विसर्ग + च्/छ्/ट्/ठ् = रुँत्व", "विसर्ग + क्/ख्/प्/फ् = विसर्गलोप", "विसर्ग + ह् = उत्व"],
        "answer_hi": "विसर्ग + श्/ष्/स् = शरुँत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "अनुनासिक किसमें होता है?",
        "options_hi": ["विसर्ग + स्वर = अनुनासिक", "विसर्ग + व्यंजन = उत्व", "विसर्ग + अ/आ = उत्व", "विसर्ग + ह् = विसर्गलोप"],
        "answer_hi": "विसर्ग + स्वर = अनुनासिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "उत्व किसमें होता है?",
        "options_hi": ["विसर्ग + उ/ऊ = उत्व", "विसर्ग + अ/आ = अनुनासिक", "विसर्ग + इ/ई = यण्", "विसर्ग + ऋ/ॠ = रुँत्व"],
        "answer_hi": "विसर्ग + उ/ऊ = उत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "सन्धि का उदाहरण 'वाक् + ईशः' कौन सी सन्धि है?",
        "options_hi": ["ष्टुत्व", "श्चुत्व", "ष्ट्व", "रुँत्व"],
        "answer_hi": "ष्टुत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "सन्धि का उदाहरण 'तत् + ते' कौन सी सन्धि है?",
        "options_hi": ["ष्टुत्व", "श्चुत्व", "विसर्गलोप", "रुँत्व"],
        "answer_hi": "ष्टुत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "सन्धि का उदाहरण 'विद्या + अर्थी' कौन सी सन्धि है?",
        "options_hi": ["दीर्घ सन्धि", "गुण सन्धि", "वृद्धि सन्धि", "यण् सन्धि"],
        "answer_hi": "दीर्घ सन्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "सन्धि का उदाहरण 'देव + ईशः' कौन सी सन्धि है?",
        "options_hi": ["गुण सन्धि", "दीर्घ सन्धि", "वृद्धि सन्धि", "यण् सन्धि"],
        "answer_hi": "गुण सन्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "सन्धि का उदाहरण 'महा + ऋषिः' कौन सी सन्धि है?",
        "options_hi": ["गुण सन्धि", "दीर्घ सन्धि", "वृद्धि सन्धि", "यण् सन्धि"],
        "answer_hi": "गुण सन्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "सन्धि का उदाहरण 'महा + औषधम्' कौन सी सन्धि है?",
        "options_hi": ["वृद्धि सन्धि", "दीर्घ सन्धि", "गुण सन्धि", "यण् सन्धि"],
        "answer_hi": "वृद्धि सन्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "सन्धि का उदाहरण 'नदी + ईशः' कौन सी सन्धि है?",
        "options_hi": ["दीर्घ सन्धि", "गुण सन्धि", "वृद्धि सन्धि", "यण् सन्धि"],
        "answer_hi": "दीर्घ सन्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "सन्धि का उदाहरण 'विद्युत् + आत्मा' कौन सी सन्धि है?",
        "options_hi": ["श्चुत्व", "ष्टुत्व", "ष्ट्व", "विसर्गलोप"],
        "answer_hi": "श्चुत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "सन्धि का उदाहरण 'तत् + सुखम्' कौन सी सन्धि है?",
        "options_hi": ["ष्टुत्व", "श्चुत्व", "ष्ट्व", "रुँत्व"],
        "answer_hi": "ष्टुत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "सन्धि का उदाहरण 'शिवः + आगच्छति' कौन सी सन्धि है?",
        "options_hi": ["विसर्गलोप", "रुँत्व", "शरुँत्व", "अनुनासिक"],
        "answer_hi": "विसर्गलोप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "सन्धि का उदाहरण 'तेजः + मयम्' कौन सी सन्धि है?",
        "options_hi": ["विसर्गलोप", "रुँत्व", "शरुँत्व", "अनुनासिक"],
        "answer_hi": "विसर्गलोप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "सन्धि का उदाहरण 'मनः + तुष्टिः' कौन सी सन्धि है?",
        "options_hi": ["रुँत्व", "विसर्गलोप", "शरुँत्व", "अनुनासिक"],
        "answer_hi": "रुँत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "सन्धि का उदाहरण 'पुनः + च' कौन सी सन्धि है?",
        "options_hi": ["शरुँत्व", "विसर्गलोप", "रुँत्व", "अनुनासिक"],
        "answer_hi": "शरुँत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "सन्धि का उदाहरण 'तपः + अन्ते' कौन सी सन्धि है?",
        "options_hi": ["अनुनासिक", "विसर्गलोप", "रुँत्व", "शरुँत्व"],
        "answer_hi": "अनुनासिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "सन्धि का उदाहरण 'विधिः + उवाच' कौन सी सन्धि है?",
        "options_hi": ["उत्व", "अनुनासिक", "विसर्गलोप", "रुँत्व"],
        "answer_hi": "उत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "सन्धि-विच्छेद में 'सत्याग्रहः' पद का विच्छेद क्या है?",
        "options_hi": ["सत्य + अग्रहः", "सत्या + ग्रहः", "सत्य + आग्रहः", "सत्य + ग्रहः"],
        "answer_hi": "सत्य + आग्रहः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "सन्धि-विच्छेद में 'सूर्योदयः' पद का विच्छेद क्या है?",
        "options_hi": ["सूर्य + उदयः", "सूर्य + ओदयः", "सूर्या + उदयः", "सूर्यः + उदयः"],
        "answer_hi": "सूर्य + उदयः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "सन्धि-विच्छेद में 'चन्द्रोदयः' पद का विच्छेद क्या है?",
        "options_hi": ["चन्द्र + उदयः", "चन्द्र + ओदयः", "चन्द्रा + उदयः", "चन्द्रः + उदयः"],
        "answer_hi": "चन्द्र + उदयः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "सन्धि-विच्छेद में 'जगदीशः' पद का विच्छेद क्या है?",
        "options_hi": ["जगत् + ईशः", "जगद् + ईशः", "जगत् + ईश", "जगद् + ईश"],
        "answer_hi": "जगत् + ईशः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "सन्धि-विच्छेद में 'सदैव' पद का विच्छेद क्या है?",
        "options_hi": ["सदा + एव", "सद् + एव", "सदा + एवं", "सद् + ऐव"],
        "answer_hi": "सदा + एव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "सन्धि-विच्छेद में 'तथापि' पद का विच्छेद क्या है?",
        "options_hi": ["तथा + अपि", "तथ् + अपि", "तथा + पि", "तथ् + आपि"],
        "answer_hi": "तथा + अपि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "सन्धि-विच्छेद में 'यथाशक्ति' पद का विच्छेद क्या है?",
        "options_hi": ["यथा + शक्ति", "यथ् + आशक्ति", "यथा + शक्तिः", "यथ् + शक्ति"],
        "answer_hi": "यथा + शक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "सन्धि-विच्छेद में 'परोपकारः' पद का विच्छेद क्या है?",
        "options_hi": ["पर + उपकारः", "परः + उपकारः", "परा + उपकारः", "पर + ओपकारः"],
        "answer_hi": "पर + उपकारः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "सन्धि-विच्छेद में 'नमस्ते' पद का विच्छेद क्या है?",
        "options_hi": ["नमः + ते", "नमस् + ते", "नमः + तेऽ", "नमस् + तेऽ"],
        "answer_hi": "नमः + ते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "सन्धि-विच्छेद में 'स्वागतम्' पद का विच्छेद क्या है?",
        "options_hi": ["सु + आगतम्", "स्व् + आगतम्", "सु + अगतम्", "स्व् + अगतम्"],
        "answer_hi": "सु + आगतम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "सन्धि का प्रयोजन क्या है?",
        "options_hi": ["शब्द सौष्ठव, उच्चारण सुकरता", "अर्थ विस्तार, रचना विविधता", "छन्द के अनुरूपता, साहित्य सौंदर्य", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "सन्धि के अभाव में क्या दोष है?",
        "options_hi": ["उच्चारण कष्ट, शब्द कर्कशता", "अर्थ हानि, भाव विच्छेद", "छन्द भंग, साहित्य दोष", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "सन्धि किस शास्त्र में अध्ययनीय है?",
        "options_hi": ["व्याकरण में", "ज्योतिष में", "आयुर्वेद में", "साहित्य में"],
        "answer_hi": "व्याकरण में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "सन्धि का ज्ञान किसके लिए आवश्यक है?",
        "options_hi": ["संस्कृत अध्ययन के लिए", "साहित्य रचना के लिए", "छन्द ज्ञान के लिए", "सभी के लिए"],
        "answer_hi": "सभी के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "सन्धि का आविष्कारक कौन है?",
        "options_hi": ["पाणिनि", "पतंजलि", "कात्यायन", "वररुचि"],
        "answer_hi": "पाणिनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "सन्धि का वर्णन किस ग्रंथ में प्राप्त होता है?",
        "options_hi": ["अष्टाध्यायी में", "महाभाष्य में", "वाक्यपदीय में", "सिद्धान्तकौमुदी में"],
        "answer_hi": "अष्टाध्यायी में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "सन्धि का शिक्षण किस कक्षा में प्रारम्भ होता है?",
        "options_hi": ["प्रारम्भिक कक्षा में", "मध्यम कक्षा में", "उच्च कक्षा में", "स्नातकोत्तर कक्षा में"],
        "answer_hi": "प्रारम्भिक कक्षा में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "सन्धि का प्रयोग कहाँ होता है?",
        "options_hi": ["संस्कृत साहित्य में", "वैदिक मंत्रों में", "लौकिक व्यवहार में", "सर्वत्र"],
        "answer_hi": "सर्वत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "सन्धि का महत्व क्या है?",
        "options_hi": ["भाषा सौष्ठव, साहित्य सौंदर्य", "व्याकरण ज्ञान, छन्द अनुरूपता", "उच्चारण सुकरता, शब्द प्रवाह", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "सन्धि का अभ्यास कैसे किया जाना चाहिए?",
        "options_hi": ["उदाहरणों से, अभ्यास पुस्तिका से", "स्मरण से, पुनरावृत्ति से", "प्रयोगों से, व्यवहार से", "सभी से"],
        "answer_hi": "सभी से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "सन्धि का सबसे जटिल प्रकार कौन सा है?",
        "options_hi": ["विसर्गसन्धि", "स्वरसन्धि", "व्यंजनसन्धि", "मिश्र सन्धि"],
        "answer_hi": "विसर्गसन्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "सन्धि का सबसे सरल प्रकार कौन सा है?",
        "options_hi": ["स्वरसन्धि", "व्यंजनसन्धि", "विसर्गसन्धि", "उभय सन्धि"],
        "answer_hi": "स्वरसन्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "सन्धि के प्रयोग से क्या प्राप्त होता है?",
        "options_hi": ["भाषा कौशल, साहित्य ज्ञान", "व्याकरण निपुणता, छन्द ज्ञान", "उच्चारण सौष्ठव, शब्द प्रवाह", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "सन्धि के अज्ञान में क्या हानि है?",
        "options_hi": ["भाषा दोष, अर्थ विपर्यय", "छन्द भंग, साहित्य दोष", "उच्चारण कष्ट, श्रवण कटुता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "सन्धि के अध्ययन के सोपान कौन से हैं?",
        "options_hi": ["स्वरसन्धि, व्यंजनसन्धि, विसर्गसन्धि", "सरल, मध्यम, कठिन", "प्रारम्भिक, मध्यम, उन्नत", "वर्णसन्धि, पदसन्धि, वाक्यसन्धि"],
        "answer_hi": "स्वरसन्धि, व्यंजनसन्धि, विसर्गसन्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "सन्धि की परीक्षा में कितने प्रश्न होते हैं?",
        "options_hi": ["विविध", "निश्चित", "अनिश्चित", "सीमित"],
        "answer_hi": "विविध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "सन्धि के सूत्र कितने हैं?",
        "options_hi": ["अनेक", "सीमित", "निश्चित", "अपरिमित"],
        "answer_hi": "अनेक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "सन्धि का ज्ञान किस ग्रंथ से प्राप्त होता है?",
        "options_hi": ["सिद्धान्तकौमुदी से", "लघुसिद्धान्तकौमुदी से", "महाभाष्य से", "सभी से"],
        "answer_hi": "सभी से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "सन्धि के अभ्यास के लिए कौन से साधन हैं?",
        "options_hi": ["अभ्यास पुस्तिका, उदाहरण संग्रह", "शिक्षक, सहपाठी", "कंप्यूटर प्रोग्राम, मोबाइल एप", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "सन्धि की शिक्षण विधि क्या है?",
        "options_hi": ["सूत्र पाठ, उदाहरण दर्शन", "अभ्यास, पुनरावृत्ति", "प्रयोग, व्यवहार", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "सन्धि की परीक्षण प्रकार कौन से हैं?",
        "options_hi": ["सन्धि, सन्धि-विच्छेद", "सूत्र पाठ, उदाहरण निर्माण", "प्रश्नोत्तर, पूर्ति प्रश्न", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "सन्धि का महत्वपूर्ण नियम क्या है?",
        "options_hi": ["पूर्व स्वर का पर स्वर से सन्धि", "पूर्व व्यंजन का पर व्यंजन से सन्धि", "पूर्व विसर्ग का पर वर्ण से सन्धि", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "सन्धि के अपवाद क्या हैं?",
        "options_hi": ["नियम विरुद्ध प्रयोग", "विशेष स्थलों में नियम", "नियम के अपवाद", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "सन्धि के सामान्य दोष क्या हैं?",
        "options_hi": ["नियम अज्ञान, अशुद्ध प्रयोग", "सन्धि अज्ञान, विच्छेद दोष", "उच्चारण दोष, लेखन दोष", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "सन्धि की सुधार के उपाय क्या हैं?",
        "options_hi": ["अभ्यास, पुनरावृत्ति", "शिक्षक मार्गदर्शन", "साधनों का प्रयोग", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "सन्धि ज्ञान की उपयोगिता क्या है?",
        "options_hi": ["संस्कृत पढ़ने, लिखने, बोलने में", "साहित्य अध्ययन, रचना में", "छन्द ज्ञान, व्याकरण में", "सर्वत्र"],
        "answer_hi": "सर्वत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "सन्धि का इतिहास क्या है?",
        "options_hi": ["प्राचीन काल से प्रचलित", "मध्यकाल में प्रसिद्ध", "आधुनिक काल में निर्मित", "नवीन काल में आविष्कृत"],
        "answer_hi": "प्राचीन काल से प्रचलित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "सन्धि के विद्वान कौन हैं?",
        "options_hi": ["पाणिनि, पतंजलि, कात्यायन", "भट्टोजिदीक्षित, वरदराज", "भर्तृहरि, जयादित्य", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "सन्धि का प्रचार कैसे होता है?",
        "options_hi": ["शिक्षण से, प्रसार से", "साहित्य से, व्यवहार से", "कंप्यूटर से, तकनीक से", "सभी से"],
        "answer_hi": "सभी से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "सन्धि का भविष्य क्या है?",
        "options_hi": ["शाश्वत, नित्य प्रचलित", "नूतन स्वरूप, तकनीकी संयोग", "परम्परागत, शास्त्रीय", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "सन्धि की सार्वभौमिकता क्या है?",
        "options_hi": ["सभी भाषाओं में सन्धि का अस्तित्व", "संस्कृत की विशेषता", "भारतीय भाषाओं का समान धर्म", "सर्वत्र भिन्न रूप"],
        "answer_hi": "सभी भाषाओं में सन्धि का अस्तित्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "सन्धि की तुलना अन्य भाषाओं से कैसे है?",
        "options_hi": ["सभी भाषाओं में सन्धि है", "संस्कृत की सन्धि विशिष्ट है", "अन्य भाषाओं में सरल सन्धि है", "भाषा के अनुसार भिन्न है"],
        "answer_hi": "सभी भाषाओं में सन्धि है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "सन्धि के शिक्षण की नवीन विधि क्या है?",
        "options_hi": ["डिजिटल साधनों से, एप्स से", "परम्परागत शिक्षण", "मिश्रित शिक्षण विधि", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "सन्धि के अध्ययन का फल क्या है?",
        "options_hi": ["भाषा कौशल, व्याकरण ज्ञान", "साहित्य रुचि, काव्यानुभूति", "मानसिक व्यायाम, तार्किक क्षमता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "सन्धि की आवश्यकता किसमें है?",
        "options_hi": ["संस्कृत अध्ययन में, साहित्य रचना में", "व्याकरण परीक्षा में, छन्द ज्ञान में", "भाषा शुद्धि में, उच्चारण सौष्ठव में", "सर्वत्र"],
        "answer_hi": "सर्वत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "सन्धि का सामान्य ज्ञान क्या है?",
        "options_hi": ["सभी संस्कृत अध्येताओं के लिए", "केवल विद्वानों के लिए", "केवल छात्रों के लिए", "केवल शिक्षकों के लिए"],
        "answer_hi": "सभी संस्कृत अध्येताओं के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "सन्धि का गहन ज्ञान किसके लिए है?",
        "options_hi": ["व्याकरण विशेषज्ञों के लिए", "सामान्य छात्रों के लिए", "सभी के लिए", "केवल शोधकर्ताओं के लिए"],
        "answer_hi": "व्याकरण विशेषज्ञों के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "सन्धि के प्रयोग की दृष्टि से महत्वपूर्ण प्रकार कौन सा है?",
        "options_hi": ["स्वरसन्धि", "व्यंजनसन्धि", "विसर्गसन्धि", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "सन्धि के शोध विषय क्या हैं?",
        "options_hi": ["ऐतिहासिक विकास, भाषिक विश्लेषण", "शिक्षण विधियाँ, तकनीकी प्रयोग", "अपवादों का अध्ययन, नवीन सूत्र", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "सन्धि का आधुनिक प्रयोग कहाँ है?",
        "options_hi": ["कम्प्यूटरीय भाषाओं की प्रोसेसिंग में", "प्राकृतिक भाषा प्रक्रमण में", "कृत्रिम बुद्धि, मशीन अनुवाद में", "सर्वत्र"],
        "answer_hi": "सर्वत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "सन्धि के भविष्य की सम्भावनाएँ क्या हैं?",
        "options_hi": ["नवीन शिक्षण साधन", "अन्तर्राष्ट्रीय प्रसार", "तकनीकी संयोग, शोध विस्तार", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "सन्धि के अध्ययन में प्रमुख आव्हान क्या हैं?",
        "options_hi": ["सूत्र स्मरण, अपवाद ज्ञान", "प्रयोग कौशल, तार्किक चिन्तन", "शिक्षण सामग्री, समयाभाव", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "सन्धि के सफल अध्ययन के लिए मार्गदर्शन क्या है?",
        "options_hi": ["क्रमशः अध्ययन, नियमित अभ्यास", "उदाहरण सहित सूत्र पाठ", "प्रयोग आधारित शिक्षण", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "संस्कृत साहित्य में सन्धि का महत्व क्या है?",
        "options_hi": ["मूलभूत, आवश्यक", "ऐच्छिक, सहायक", "गौण, अप्रासंगिक", "केवल शास्त्रीय"],
        "answer_hi": "मूलभूत, आवश्यक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "सन्धि का ज्ञान कैसे परीक्षित होता है?",
        "options_hi": ["सन्धि प्रश्नों से, विच्छेद प्रश्नों से", "सूत्र पाठ से, उदाहरण निर्माण से", "प्रयोग परीक्षा से, व्यवहार दर्शन से", "सभी से"],
        "answer_hi": "सभी से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "सन्धि का सार्वकालिक महत्व क्या है?",
        "options_hi": ["भाषा सौष्ठव का मूलाधार", "संस्कृत का प्राणस्वरूप", "साहित्य सौंदर्य का आधार", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    }
];
// --------------------------- GLOBAL VARS -----------------------------
// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "hindi";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;
let videoStream; // <--- ग्लोबल वेरिएबल यहाँ डिक्लेअर करें

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
    if (videoStream) { // <--- अब यह ग्लोबल वेरिएबल को एक्सेस कर पाएगा
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
// let videoStream; // <--- यहाँ से हटा दें (पहले ही ग्लोबल में डिक्लेअर किया गया है)

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
            videoStream = stream; // <--- अब यह ग्लोबल वेरिएबल को असाइन कर रहा है
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};