const questions = [
    {
        "num": 1,
        "question_hi": "सौहार्द किस भाव का द्योतक है?",
        "options_hi": ["मित्रता भाव", "क्रोध भाव", "लोभ भाव", "द्वेष भाव"],
        "answer_hi": "मित्रता भाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "सौहार्द का विपरीत शब्द क्या है?",
        "options_hi": ["कलह", "प्रेम", "सहयोग", "मैत्री"],
        "answer_hi": "कलह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "सौहार्द किसका मूल होता है?",
        "options_hi": ["सहृदयता", "स्वार्थ", "दंभ", "कपट"],
        "answer_hi": "सहृदयता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "सौहार्द से क्या प्राप्त होता है?",
        "options_hi": ["सुख और शांति", "धन और यश", "बल और सामर्थ्य", "रूप और यौवन"],
        "answer_hi": "सुख और शांति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "सौहार्द किस पर आधारित होता है?",
        "options_hi": ["परस्पर विश्वास", "परस्पर संदेह", "परस्पर लोभ", "परस्पर द्वेष"],
        "answer_hi": "परस्पर विश्वास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "सौहार्द का क्या लक्षण है?",
        "options_hi": ["परस्पर सहायता", "परस्पर विरोध", "परस्पर ईर्ष्या", "परस्पर अवज्ञा"],
        "answer_hi": "परस्पर सहायता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "सौहार्द के बिना जीवन कैसा होता है?",
        "options_hi": ["निरर्थक", "सार्थक", "सुखद", "रमणीय"],
        "answer_hi": "निरर्थक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "सौहार्द का भाव कहाँ दिखाई देता है?",
        "options_hi": ["सत्संग में", "दुःसंग में", "एकांत में", "विवाद में"],
        "answer_hi": "सत्संग में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "सौहार्द कैसे बढ़ता है?",
        "options_hi": ["समभाव से", "भेदभाव से", "ऊर्ध्वभाव से", "अधोभाव से"],
        "answer_hi": "समभाव से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "सौहार्द का दूसरा नाम क्या है?",
        "options_hi": ["मैत्री", "शत्रुता", "वैरभाव", "विरोध"],
        "answer_hi": "मैत्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "सौहार्द किस आधार पर टिकता है?",
        "options_hi": ["सत्य", "असत्य", "कपट", "छल"],
        "answer_hi": "सत्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "सौहार्द से कौन प्रभावित होते हैं?",
        "options_hi": ["सभी", "केवल मित्र", "केवल बंधु", "केवल परिवार"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "सौहार्द का क्या फल है?",
        "options_hi": ["सामाजिक समरसता", "सामाजिक विभाजन", "सामाजिक कलह", "सामाजिक अशांति"],
        "answer_hi": "सामाजिक समरसता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "सौहार्द किसका प्रतीक है?",
        "options_hi": ["मानवीयता", "पाशवीयता", "दैवीयता", "असुरीयता"],
        "answer_hi": "मानवीयता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "सौहार्द कैसे नष्ट होता है?",
        "options_hi": ["अविश्वास से", "विश्वास से", "सहयोग से", "सहानुभूति से"],
        "answer_hi": "अविश्वास से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "सौहार्द की रक्षा कैसे होती है?",
        "options_hi": ["सहनशीलता से", "असहनशीलता से", "क्रोध से", "प्रतिशोध से"],
        "answer_hi": "सहनशीलता से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "सौहार्द किसके लिए आवश्यक है?",
        "options_hi": ["समाज के", "अपने", "शत्रु के", "प्रतिस्पर्धी के"],
        "answer_hi": "समाज के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "सौहार्द से क्या निवारित होता है?",
        "options_hi": ["कलह", "सुख", "शांति", "प्रगति"],
        "answer_hi": "कलह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "सौहार्द का प्रमुख शत्रु कौन है?",
        "options_hi": ["अहंकार", "विनय", "सरलता", "सत्यता"],
        "answer_hi": "अहंकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "सौहार्द क्या बढ़ाता है?",
        "options_hi": ["परोपकार", "परपीड़न", "स्वार्थ", "दंभ"],
        "answer_hi": "परोपकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "सौहार्द की स्थापना कैसे होती है?",
        "options_hi": ["सद्व्यवहार से", "दुर्व्यवहार से", "कपट व्यवहार से", "छल व्यवहार से"],
        "answer_hi": "सद्व्यवहार से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "सौहार्द किसका पहला सोपान है?",
        "options_hi": ["मैत्री", "शत्रुता", "प्रतिस्पर्धा", "विरोध"],
        "answer_hi": "मैत्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "सौहार्द से क्या उत्पन्न होता है?",
        "options_hi": ["सौंदर्य", "कुरूपता", "विभेद", "वैषम्य"],
        "answer_hi": "सौंदर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "सौहार्द का प्रतीक क्या है?",
        "options_hi": ["हस्तमिलन", "हस्तयुद्ध", "वाक्युद्ध", "मनोयुद्ध"],
        "answer_hi": "हस्तमिलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "सौहार्द किसका मापदंड है?",
        "options_hi": ["सभ्यता", "असभ्यता", "पाशवता", "क्रूरता"],
        "answer_hi": "सभ्यता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "सौहार्द के बिना समाज कैसा है?",
        "options_hi": ["विघटित", "संगठित", "प्रबुद्ध", "विकसित"],
        "answer_hi": "विघटित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "सौहार्द का प्रमुख लक्षण क्या है?",
        "options_hi": ["दूसरों के सुख-दुःख की अनुभूति", "दूसरों के दुःख से संतोष", "दूसरों के सुख का विरोध", "दूसरों के दुःख पर अनुकंपा"],
        "answer_hi": "दूसरों के सुख-दुःख की अनुभूति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "सौहार्द कैसे प्रकट किया जाता है?",
        "options_hi": ["सहयोग से", "प्रतियोगिता से", "विरोध से", "वैमनस्य से"],
        "answer_hi": "सहयोग से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "सौहार्द का महत्व कहाँ दिखाई देता है?",
        "options_hi": ["राष्ट्र निर्माण में", "राष्ट्र विघटन में", "राष्ट्र विरोध में", "राष्ट्र युद्ध में"],
        "answer_hi": "राष्ट्र निर्माण में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "सौहार्द की कौन सी कथा प्रसिद्ध है?",
        "options_hi": ["कृष्ण-सुदामा", "राम-रावण", "दुर्योधन-भीम", "कर्ण-दुर्योधन"],
        "answer_hi": "कृष्ण-सुदामा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "कृष्ण-सुदामा की कथा में क्या प्रधान है?",
        "options_hi": ["सौहार्द", "वैरभाव", "प्रतिस्पर्धा", "ईर्ष्या"],
        "answer_hi": "सौहार्द",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "सुदामा कौन थे?",
        "options_hi": ["ब्राह्मण", "क्षत्रिय", "वैश्य", "शूद्र"],
        "answer_hi": "ब्राह्मण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "कृष्ण कौन थे?",
        "options_hi": ["यदुवंशीय राजा", "ब्राह्मण", "व्यापारी", "किसान"],
        "answer_hi": "यदुवंशीय राजा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "कृष्ण-सुदामा की मित्रता कब आरंभ हुई?",
        "options_hi": ["बचपन में", "यौवन में", "प्रौढ़ावस्था में", "बुढ़ापे में"],
        "answer_hi": "बचपन में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "दोनों ने कहाँ साथ पढ़ाई की?",
        "options_hi": ["सांदीपनि के आश्रम में", "द्वारका में", "मथुरा में", "वृंदावन में"],
        "answer_hi": "सांदीपनि के आश्रम में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "सुदामा गरीब होते हुए भी क्या नहीं छोड़ा?",
        "options_hi": ["स्वाभिमान", "लोभ", "क्रोध", "मोह"],
        "answer_hi": "स्वाभिमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "सुदामा कृष्ण को देखने कहाँ जाते हैं?",
        "options_hi": ["द्वारका", "मथुरा", "हस्तिनापुर", "अयोध्या"],
        "answer_hi": "द्वारका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "सुदामा कृष्ण को क्या उपहार ले जाते हैं?",
        "options_hi": ["चावल के दाने", "सोना", "रत्न", "वस्त्र"],
        "answer_hi": "चावल के दाने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "कृष्ण सुदामा के आगमन की सूचना पाकर क्या करते हैं?",
        "options_hi": ["स्वयं मिलने जाते हैं", "सेवक भेजते हैं", "उपेक्षा करते हैं", "रोक देते हैं"],
        "answer_hi": "स्वयं मिलने जाते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "कृष्ण सुदामा के पैर क्यों धोते हैं?",
        "options_hi": ["आदर के लिए", "दया के लिए", "करुणा के लिए", "भय के लिए"],
        "answer_hi": "आदर के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "सुदामा की पत्नी कौन थी?",
        "options_hi": ["सुशीला", "रुक्मिणी", "सत्यभामा", "द्रौपदी"],
        "answer_hi": "सुशीला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "कृष्ण सुदामा को क्या देते हैं?",
        "options_hi": ["संपूर्ण राज्य", "अपरिमित धन", "विद्या", "बल"],
        "answer_hi": "अपरिमित धन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "इस कथा का मुख्य संदेश क्या है?",
        "options_hi": ["सौहार्द शाश्वत", "धन शाश्वत", "यश शाश्वत", "बल शाश्वत"],
        "answer_hi": "सौहार्द शाश्वत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "सौहार्द का दूसरा उदाहरण क्या है?",
        "options_hi": ["राम-सुग्रीव", "राम-रावण", "दुर्योधन-भीम", "कर्ण-शल्य"],
        "answer_hi": "राम-सुग्रीव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "राम सुग्रीव की कैसे सहायता करते हैं?",
        "options_hi": ["वाली वध", "धन दान", "राज्य दान", "विद्या दान"],
        "answer_hi": "वाली वध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "सुग्रीव राम की कैसे सहायता करते हैं?",
        "options_hi": ["सीता की खोज", "राज्य प्राप्ति", "युद्ध", "धन संचय"],
        "answer_hi": "सीता की खोज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "यह सौहार्द क्या प्रदर्शित करता है?",
        "options_hi": ["परस्पर सहयोग", "परस्पर विरोध", "परस्पर स्पर्धा", "परस्पर द्वेष"],
        "answer_hi": "परस्पर सहयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "द्रौपदी-कृष्ण का सौहार्द कहाँ दिखता है?",
        "options_hi": ["वस्त्रहरण प्रसंग", "राजसूय यज्ञ", "जुआ खेल", "वनवास"],
        "answer_hi": "वस्त्रहरण प्रसंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "कृष्ण द्रौपदी को क्या देते हैं?",
        "options_hi": ["अक्षय वस्त्र", "अक्षय धन", "अक्षय बल", "अक्षय यश"],
        "answer_hi": "अक्षय वस्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "अर्जुन-कृष्ण का सौहार्द कहाँ दिखता है?",
        "options_hi": ["महाभारत युद्ध", "जुआ खेल", "वनवास", "राजसूय यज्ञ"],
        "answer_hi": "महाभारत युद्ध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "कृष्ण अर्जुन को क्या देते हैं?",
        "options_hi": ["गीता उपदेश", "रथ", "धनुष", "विद्या"],
        "answer_hi": "गीता उपदेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "पांडवों का परस्पर सौहार्द कैसा था?",
        "options_hi": ["अविभाज्य", "विभाज्य", "क्षणिक", "अस्थिर"],
        "answer_hi": "अविभाज्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "कौरवों में सौहार्द का अभाव क्या कारण बना?",
        "options_hi": ["दुर्योधन की ईर्ष्या", "धृतराष्ट्र की दया", "भीष्म की नीति", "द्रोण की शिक्षा"],
        "answer_hi": "दुर्योधन की ईर्ष्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "लक्ष्मण-राम का सौहार्द कैसा था?",
        "options_hi": ["आदर्श", "सामान्य", "क्षणिक", "छलपूर्ण"],
        "answer_hi": "आदर्श",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "लक्ष्मण राम के लिए क्या त्यागते हैं?",
        "options_hi": ["सभी सुख", "धन", "राज्य", "यश"],
        "answer_hi": "सभी सुख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "भरत-राम का सौहार्द कहाँ प्रकट हुआ?",
        "options_hi": ["पादुका पूजन", "युद्ध", "राज्याभिषेक", "वनगमन"],
        "answer_hi": "पादुका पूजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "भरत राम को क्या दर्शाते हैं?",
        "options_hi": ["आदर भक्ति", "विरोध", "स्पर्धा", "द्वेष"],
        "answer_hi": "आदर भक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "हनुमान-राम का सौहार्द कहाँ दिखता है?",
        "options_hi": ["सीता की खोज", "युद्ध", "राज्य", "विद्या"],
        "answer_hi": "सीता की खोज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "हनुमान राम के लिए क्या करते हैं?",
        "options_hi": ["समुद्र लांघना", "राज्य रक्षण", "धन संचय", "यज्ञ करना"],
        "answer_hi": "समुद्र लांघना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "सौहार्द का दूसरा उदाहरण क्या है?",
        "options_hi": ["अभिमन्यु-बृहन्नडा", "अर्जुन-कर्ण", "दुर्योधन-भीम", "द्रोण-द्रुपद"],
        "answer_hi": "अभिमन्यु-बृहन्नडा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "बृहन्नडा कौन थे?",
        "options_hi": ["अर्जुन", "उत्तर", "अभिमन्यु", "नकुल"],
        "answer_hi": "अर्जुन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "अभिमन्यु कौन थे?",
        "options_hi": ["उत्तरा के पुत्र", "द्रौपदी के पुत्र", "सुभद्रा के पुत्र", "उत्तरा के भाई"],
        "answer_hi": "उत्तरा के पुत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "बृहन्नडा अभिमन्यु को क्या सिखाते हैं?",
        "options_hi": ["नृत्य-गायन", "युद्धकला", "विद्या", "धर्म"],
        "answer_hi": "नृत्य-गायन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "यह सौहार्द क्या दर्शाता है?",
        "options_hi": ["गुरु-शिष्य संबंध", "शत्रु संबंध", "स्पर्धा संबंध", "व्यापार संबंध"],
        "answer_hi": "गुरु-शिष्य संबंध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "सौहार्द की दूसरी कथा क्या है?",
        "options_hi": ["मित्र प्राप्ति", "शत्रु नाश", "धन लाभ", "राज्य प्राप्ति"],
        "answer_hi": "मित्र प्राप्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "सौहार्द के बिना मनुष्य कैसा है?",
        "options_hi": ["अधूरा", "पूर्ण", "सुखी", "समृद्ध"],
        "answer_hi": "अधूरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "सौहार्द किसके विकास में सहायक है?",
        "options_hi": ["व्यक्तित्व", "देह", "वस्त्र", "भवन"],
        "answer_hi": "व्यक्तित्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "सौहार्द से क्या संभव होता है?",
        "options_hi": ["असंभव कार्य", "साधारण कार्य", "लघु कार्य", "नगण्य कार्य"],
        "answer_hi": "असंभव कार्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "सौहार्द के आधार पर क्या निर्मित होता है?",
        "options_hi": ["पृथ्वी पर स्वर्ग", "पृथ्वी पर नरक", "युद्धक्षेत्र", "विवाद स्थल"],
        "answer_hi": "पृथ्वी पर स्वर्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "सौहार्द किसकी प्रेरणा है?",
        "options_hi": ["सहकार", "प्रतियोगिता", "विरोध", "वैमनस्य"],
        "answer_hi": "सहकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "सौहार्द से क्या शांत होता है?",
        "options_hi": ["मन", "शरीर", "वस्त्र", "भवन"],
        "answer_hi": "मन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "सौहार्द का वर्णन कहाँ मिलता है?",
        "options_hi": ["सभी शास्त्रों में", "केवल धर्मशास्त्र", "केवल अर्थशास्त्र", "केवल कामशास्त्र"],
        "answer_hi": "सभी शास्त्रों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "सौहार्द किसका प्रतीक है?",
        "options_hi": ["एकता", "विभक्तता", "विरोध", "वैषम्य"],
        "answer_hi": "एकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "सौहार्द कैसे मापा जाता है?",
        "options_hi": ["त्याग से", "लाभ से", "स्वार्थ से", "दंभ से"],
        "answer_hi": "त्याग से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "सौहार्द का भाव किसके हृदय में नहीं होता?",
        "options_hi": ["क्रूर", "दयालु", "सरल", "सत्यवादी"],
        "answer_hi": "क्रूर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "सौहार्द कैसे नष्ट होता है?",
        "options_hi": ["कलह से", "सहयोग से", "सहानुभूति से", "समभाव से"],
        "answer_hi": "कलह से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "सौहार्द की रक्षा कैसे करनी चाहिए?",
        "options_hi": ["सहनशीलता से", "क्रोध से", "प्रतिशोध से", "उपेक्षा से"],
        "answer_hi": "सहनशीलता से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "सौहार्द का प्रमुख शत्रु कौन होता है?",
        "options_hi": ["मिथ्या अभिमान", "विनय", "सत्य", "नम्रता"],
        "answer_hi": "मिथ्या अभिमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "सौहार्द का विकास कहाँ होता है?",
        "options_hi": ["सत्संग", "दुःसंग", "विवाद", "कलह"],
        "answer_hi": "सत्संग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "सौहार्द किसकी आवश्यकता है?",
        "options_hi": ["विश्व शांति", "विश्व युद्ध", "विश्व विभाजन", "विश्व वैमनस्य"],
        "answer_hi": "विश्व शांति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "सौहार्द का स्थायित्व कैसे होता है?",
        "options_hi": ["निःस्वार्थ भाव", "स्वार्थ भाव", "कपट भाव", "छल भाव"],
        "answer_hi": "निःस्वार्थ भाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "सौहार्द से क्या प्राप्त होता है?",
        "options_hi": ["आंतरिक सुख", "बाह्य सुख", "धन सुख", "वैभव सुख"],
        "answer_hi": "आंतरिक सुख",
        "attempted": false,
        "selected": ""
    },
        {
        "num": 83,
        "question_hi": "सौहार्द का मूल्य कब समझ आता है?",
        "options_hi": ["संकट में", "सुख में", "धन में", "वैभव में"],
        "answer_hi": "संकट में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "सौहार्द किसका पर्याय है?",
        "options_hi": ["मेलजोल", "झगड़ा", "विरोध", "द्वेष"],
        "answer_hi": "मेलजोल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "सौहार्द की भावना किससे बढ़ती है?",
        "options_hi": ["परोपकार से", "परपीड़न से", "स्वार्थ से", "लोभ से"],
        "answer_hi": "परोपकार से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "सौहार्द कैसे प्रगाढ़ होता है?",
        "options_hi": ["सद्भाव से", "दुर्भाव से", "छल से", "कपट से"],
        "answer_hi": "सद्भाव से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "सौहार्द का प्रतीक कौन सा पक्षी है?",
        "options_hi": ["हंस", "कौआ", "चील", "उल्लू"],
        "answer_hi": "हंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "सौहार्द किस पर्व का संदेश है?",
        "options_hi": ["दीवाली", "रक्षाबंधन", "होली", "ईद"],
        "answer_hi": "रक्षाबंधन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "सौहार्द का भाव किस रिश्ते में अनिवार्य है?",
        "options_hi": ["सभी रिश्तों में", "केवल मित्रता में", "केवल परिवार में", "केवल समाज में"],
        "answer_hi": "सभी रिश्तों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "सौहार्द किस भाषा का शब्द है?",
        "options_hi": ["संस्कृत", "अरबी", "फारसी", "अंग्रेजी"],
        "answer_hi": "संस्कृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "सौहार्द का अंग्रेजी पर्याय क्या है?",
        "options_hi": ["Harmony", "Conflict", "Enmity", "Competition"],
        "answer_hi": "Harmony",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "सौहार्द किस गुण को जन्म देता है?",
        "options_hi": ["सहिष्णुता", "असहिष्णुता", "क्रोध", "अहंकार"],
        "answer_hi": "सहिष्णुता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "सौहार्द किसका मार्ग प्रशस्त करता है?",
        "options_hi": ["प्रगति", "पतन", "विनाश", "झगड़ा"],
        "answer_hi": "प्रगति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "सौहार्द किसके लिए आधार है?",
        "options_hi": ["सहयोग", "प्रतियोगिता", "विरोध", "वैमनस्य"],
        "answer_hi": "सहयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "सौहार्द की कमी से क्या होता है?",
        "options_hi": ["अवनति", "उन्नति", "विकास", "समृद्धि"],
        "answer_hi": "अवनति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "सौहार्द कैसी भावना है?",
        "options_hi": ["सकारात्मक", "नकारात्मक", "तटस्थ", "विध्वंसक"],
        "answer_hi": "सकारात्मक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "सौहार्द का विस्तार कैसे होता है?",
        "options_hi": ["प्रेम से", "घृणा से", "डर से", "लालच से"],
        "answer_hi": "प्रेम से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "सौहार्द किस युग की आवश्यकता है?",
        "options_hi": ["वर्तमान", "भूतकाल", "भविष्य", "सभी युग"],
        "answer_hi": "सभी युग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "सौहार्द का अंत कब होता है?",
        "options_hi": ["विश्वास टूटने पर", "विश्वास बढ़ने पर", "सहयोग से", "प्रेम से"],
        "answer_hi": "विश्वास टूटने पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "सौहार्द की सबसे बड़ी पहचान क्या है?",
        "options_hi": ["निःस्वार्थ सेवा", "स्वार्थ सेवा", "छल", "कपट"],
        "answer_hi": "निःस्वार्थ सेवा",
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