const questions = [
    {
        "num": 1,
        "question_hi": "विद्वान् किसका आदर्श होता है?",
        "options_hi": ["समाज का", "अपना", "परिवार का", "मित्रों का"],
        "answer_hi": "समाज का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "मूर्ख किसका उदाहरण होता है?",
        "options_hi": ["अनुकरणीय का नहीं", "अनुकरणीय का", "सेवनीय का", "पूजनीय का"],
        "answer_hi": "अनुकरणीय का नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "विद्वान् क्या संरक्षित करता है?",
        "options_hi": ["संस्कृति", "धन", "भवन", "वाहन"],
        "answer_hi": "संस्कृति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "मूर्ख क्या नष्ट करता है?",
        "options_hi": ["संस्कृति", "धन", "भवन", "वाहन"],
        "answer_hi": "संस्कृति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "विद्वान् किसके लिए जीता है?",
        "options_hi": ["दूसरों के लिए", "अपने लिए", "परिवार के लिए", "मित्रों के लिए"],
        "answer_hi": "दूसरों के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "मूर्ख किसके लिए जीता है?",
        "options_hi": ["अपने लिए", "दूसरों के लिए", "परिवार के लिए", "समाज के लिए"],
        "answer_hi": "अपने लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "विद्वान् क्या करने में समर्थ होता है?",
        "options_hi": ["कठिन कार्य", "सरल कार्य", "धनार्जन", "यश प्राप्ति"],
        "answer_hi": "कठिन कार्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "मूर्ख क्या करने में असमर्थ होता है?",
        "options_hi": ["कठिन कार्य", "सरल कार्य", "भोजन पकाना", "सोना"],
        "answer_hi": "कठिन कार्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "विद्वान् कहाँ दृष्टि रखता है?",
        "options_hi": ["दूरदृष्टि", "समीपदृष्टि", "अपनी दृष्टि", "दूसरे की दृष्टि"],
        "answer_hi": "दूरदृष्टि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "मूर्ख किसका हित चिंतन करता है?",
        "options_hi": ["अपना", "दूसरे का", "सबका", "किसी का नहीं"],
        "answer_hi": "अपना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "'अपने हित में रत' यह किसका लक्षण है?",
        "options_hi": ["मूर्ख का", "विद्वान् का", "धनिक का", "राजा का"],
        "answer_hi": "मूर्ख का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "विद्वान् क्या नहीं करना चाहिए?",
        "options_hi": ["अपने प्रतिकूल कार्य", "अपने अनुकूल कार्य", "दूसरे के प्रतिकूल कार्य", "दूसरे के अनुकूल कार्य"],
        "answer_hi": "अपने प्रतिकूल कार्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "'प्रतिकूल' का विपरीतार्थक शब्द क्या है?",
        "options_hi": ["अनुकूल", "विपरीत", "विरुद्ध", "प्रतिकूलक"],
        "answer_hi": "अनुकूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "विद्वान् किसके सुख-दुःख से सुखी-दुःखी होता है?",
        "options_hi": ["दूसरों के", "अपने", "मित्रों के", "शत्रुओं के"],
        "answer_hi": "दूसरों के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "'सुखदुःखभाक्' का क्या अर्थ है?",
        "options_hi": ["सुख-दुःख का अनुभवी", "सुखी", "दुःखी", "उदासीन"],
        "answer_hi": "सुख-दुःख का अनुभवी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "विद्वान् कैसा कहा जाता है?",
        "options_hi": ["महात्मा", "अल्पात्मा", "दरिद्र", "कृपण"],
        "answer_hi": "महात्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "मूर्ख कैसा कहा जाता है?",
        "options_hi": ["अल्पात्मा", "महात्मा", "उदार", "दयालु"],
        "answer_hi": "अल्पात्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "'महात्मा' शब्द का क्या अर्थ है?",
        "options_hi": ["उदारचरित", "बड़ा शरीर", "प्रभावशाली", "धनवान"],
        "answer_hi": "उदारचरित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "'अल्पात्मा' शब्द का क्या अर्थ है?",
        "options_hi": ["संकुचितचित्त", "छोटा शरीर", "दरिद्र", "निर्बल"],
        "answer_hi": "संकुचितचित्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "विद्वान् कहाँ सुख देखता है?",
        "options_hi": ["दूसरे के सुख में", "अपने सुख में", "धन में", "यश में"],
        "answer_hi": "दूसरे के सुख में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "मूर्ख कहाँ सुख देखता है?",
        "options_hi": ["अपने सुख में", "दूसरे के सुख में", "सबके सुख में", "कहीं नहीं"],
        "answer_hi": "अपने सुख में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "विद्वान् कहाँ दुःख देखता है?",
        "options_hi": ["दूसरे के दुःख में", "अपने दुःख में", "सबके दुःख में", "कहीं नहीं"],
        "answer_hi": "दूसरे के दुःख में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "हितोपदेश में कितने भाग हैं?",
        "options_hi": ["चार", "दो", "तीन", "पाँच"],
        "answer_hi": "चार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "हितोपदेश का पहला भाग क्या है?",
        "options_hi": ["मित्रलाभ", "सुहृद्भेद", "विग्रह", "संधि"],
        "answer_hi": "मित्रलाभ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "हितोपदेश की रचना कब हुई?",
        "options_hi": ["बारहवीं शताब्दी", "आठवीं शताब्दी", "सोलहवीं शताब्दी", "बीसवीं शताब्दी"],
        "answer_hi": "बारहवीं शताब्दी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "विद्वान् का पर्यायवाची शब्द क्या है?",
        "options_hi": ["पंडित", "मूर्ख", "बालक", "अज्ञ"],
        "answer_hi": "पंडित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "मूर्ख का पर्यायवाची शब्द क्या है?",
        "options_hi": ["अज्ञ", "पंडित", "विद्वान्", "बुद्धिमान"],
        "answer_hi": "अज्ञ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "'सभी प्राणियों के हित में रत' का विपरीतार्थक वाक्य क्या है?",
        "options_hi": ["अपने हित में रत", "दूसरे के हित में रत", "धन में रत", "यश में रत"],
        "answer_hi": "अपने हित में रत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "विद्वान् किससे भिन्न होता है?",
        "options_hi": ["मूर्ख से", "धनिक से", "राजा से", "साधु से"],
        "answer_hi": "मूर्ख से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "विद्वान् क्या देखकर प्रसन्न होता है?",
        "options_hi": ["दूसरे का सुख", "अपना सुख", "दूसरे का धन", "अपना धन"],
        "answer_hi": "दूसरे का सुख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "विद्वान् क्या देखकर दुःखी होता है?",
        "options_hi": ["दूसरे का दुःख", "अपना दुःख", "दूसरे का नाश", "अपना नाश"],
        "answer_hi": "दूसरे का दुःख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "'अपने लिए जो प्रतिकूल है वह दूसरों के लिए न करे' का भावार्थ क्या है?",
        "options_hi": ["जो स्वयं को अप्रिय है वह दूसरों को न दें", "स्वार्थ का सदा पालन करें", "परार्थ छोड़ दें", "सब कुछ स्वार्थ के लिए"],
        "answer_hi": "जो स्वयं को अप्रिय है वह दूसरों को न दें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "विद्वान् का प्रमुख गुण क्या है?",
        "options_hi": ["परहित चिंतन", "स्वहित चिंतन", "धन संचय", "यश प्राप्ति"],
        "answer_hi": "परहित चिंतन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "मूर्ख का प्रमुख दोष क्या है?",
        "options_hi": ["स्वार्थपरता", "परार्थपरता", "दयालुता", "उदारता"],
        "answer_hi": "स्वार्थपरता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "'सच्चा मनुष्य वही है' यह किसके लिए कहा जाता है?",
        "options_hi": ["जो परोपकारी है", "जो स्वार्थी है", "जो धनवान है", "जो बलवान है"],
        "answer_hi": "जो परोपकारी है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "विद्वान् क्या प्राप्त करता है?",
        "options_hi": ["यश", "धन", "बल", "सुख"],
        "answer_hi": "यश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "मूर्ख क्या प्राप्त करता है?",
        "options_hi": ["अपयश", "धन", "बल", "सुख"],
        "answer_hi": "अपयश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "'परोपकार' पद का क्या अर्थ है?",
        "options_hi": ["दूसरों का हित करना", "अपना हित करना", "धन दान", "यज्ञ करना"],
        "answer_hi": "दूसरों का हित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "'स्वार्थ' पद का क्या अर्थ है?",
        "options_hi": ["अपना हित", "दूसरे का हित", "सबका हित", "किसी का हित"],
        "answer_hi": "अपना हित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "विद्वान् कैसे व्यवहार करता है?",
        "options_hi": ["न्याय से", "अन्याय से", "कपट से", "छल से"],
        "answer_hi": "न्याय से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "मूर्ख कैसे व्यवहार करता है?",
        "options_hi": ["अन्याय से", "न्याय से", "सत्य से", "धर्म से"],
        "answer_hi": "अन्याय से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "विद्वान् कैसा वचन बोलता है?",
        "options_hi": ["मधुर और हितकर", "कटु और हितकर", "मधुर और अहितकर", "कटु और अहितकर"],
        "answer_hi": "मधुर और हितकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "मूर्ख कैसा वचन बोलता है?",
        "options_hi": ["कटु और अहितकर", "मधुर और हितकर", "मधुर और अहितकर", "कटु और हितकर"],
        "answer_hi": "कटु और अहितकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "विद्वान् किस क्षेत्र में उपयोगी होता है?",
        "options_hi": ["सभी क्षेत्रों में", "केवल विद्या क्षेत्र में", "केवल धन क्षेत्र में", "केवल राज्य क्षेत्र में"],
        "answer_hi": "सभी क्षेत्रों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "मूर्ख कहाँ हानि करता है?",
        "options_hi": ["सब जगह", "केवल घर में", "केवल समाज में", "केवल राज्य में"],
        "answer_hi": "सब जगह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "विद्वान् क्या छोड़ता है?",
        "options_hi": ["दुराचार", "सदाचार", "धर्म", "कर्म"],
        "answer_hi": "दुराचार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "मूर्ख क्या ग्रहण करता है?",
        "options_hi": ["दुराचार", "सदाचार", "धर्म", "ज्ञान"],
        "answer_hi": "दुराचार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "विद्वान् किसकी सेवा करता है?",
        "options_hi": ["समाज की", "अपनी", "राजा की", "धनिक की"],
        "answer_hi": "समाज की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "मूर्ख किसकी सेवा करता है?",
        "options_hi": ["अपनी", "समाज की", "राजा की", "देश की"],
        "answer_hi": "अपनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "विद्वान् क्या बढ़ाता है?",
        "options_hi": ["समाज कल्याण", "अपना कल्याण", "धन संचय", "बल संचय"],
        "answer_hi": "समाज कल्याण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "मूर्ख क्या बढ़ाता है?",
        "options_hi": ["अपना कल्याण", "समाज कल्याण", "देश कल्याण", "विश्व कल्याण"],
        "answer_hi": "अपना कल्याण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "विद्वान् कहाँ स्थित होकर भी क्या होता है?",
        "options_hi": ["सब जगह पूज्य", "सब जगह तिरस्कृत", "एकांत में", "वन में"],
        "answer_hi": "सब जगह पूज्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "मूर्ख कहाँ स्थित होकर भी क्या होता है?",
        "options_hi": ["सब जगह तिरस्कृत", "सब जगह पूज्य", "राजधानी में", "नगर में"],
        "answer_hi": "सब जगह तिरस्कृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "विद्वान् कैसा होता है?",
        "options_hi": ["लोकहितैषी", "लोकविरोधी", "लोकोपेक्षी", "लोकभीरु"],
        "answer_hi": "लोकहितैषी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "मूर्ख कैसा होता है?",
        "options_hi": ["लोकविरोधी", "लोकहितैषी", "लोकप्रिय", "लोकसेवी"],
        "answer_hi": "लोकविरोधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "'स एव विद्वान्' पाठ का मुख्य संदेश क्या है?",
        "options_hi": ["परोपकार ही विद्वत्ता है", "धन संचय ही विद्वत्ता है", "यश प्राप्ति ही विद्वत्ता है", "सुखभोग ही विद्वत्ता है"],
        "answer_hi": "परोपकार ही विद्वत्ता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "विद्वान् किससे भय अनुभव करता है?",
        "options_hi": ["पाप से", "दरिद्रता से", "मृत्यु से", "रोग से"],
        "answer_hi": "पाप से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "मूर्ख किससे भय अनुभव करता है?",
        "options_hi": ["दरिद्रता से", "पाप से", "मृत्यु से", "अज्ञान से"],
        "answer_hi": "दरिद्रता से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "विद्वान् क्या पाकर संतुष्ट होता है?",
        "options_hi": ["ज्ञान", "धन", "पद", "यश"],
        "answer_hi": "ज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "मूर्ख क्या पाकर संतुष्ट होता है?",
        "options_hi": ["धन", "ज्ञान", "यश", "बल"],
        "answer_hi": "धन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "विद्वान् किसके मार्ग का अनुसरण करता है?",
        "options_hi": ["धर्म का", "अधर्म का", "काम का", "क्रोध का"],
        "answer_hi": "धर्म का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "मूर्ख किसके मार्ग का अनुसरण करता है?",
        "options_hi": ["अधर्म का", "धर्म का", "सत्य का", "न्याय का"],
        "answer_hi": "अधर्म का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "विद्वान् क्या मानता है?",
        "options_hi": ["सभी एक कुटुंब हैं", "अपने-पराये अलग हैं", "सभी शत्रु हैं", "सभी अज्ञानी हैं"],
        "answer_hi": "सभी एक कुटुंब हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "मूर्ख क्या मानता है?",
        "options_hi": ["अपने-पराये अलग हैं", "सभी एक कुटुंब हैं", "सभी मित्र हैं", "सभी बंधु हैं"],
        "answer_hi": "अपने-पराये अलग हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "विद्वान् क्या देता है?",
        "options_hi": ["उपदेश", "धन", "भोजन", "वस्त्र"],
        "answer_hi": "उपदेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "मूर्ख क्या देता है?",
        "options_hi": ["क्लेश", "सुख", "शांति", "आनंद"],
        "answer_hi": "क्लेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "विद्वान् मरकर भी क्या होता है?",
        "options_hi": ["अमर", "नष्ट", "विस्मृत", "तिरस्कृत"],
        "answer_hi": "अमर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "मूर्ख जीते जी भी क्या होता है?",
        "options_hi": ["मृततुल्य", "अमर", "यशस्वी", "कीर्तिमान"],
        "answer_hi": "मृततुल्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "विद्वान् कहाँ जाता है वहाँ क्या पाता है?",
        "options_hi": ["सब जगह सम्मान", "सब जगह धन", "सब जगह भोजन", "सब जगह वस्त्र"],
        "answer_hi": "सब जगह सम्मान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "मूर्ख कहाँ जाता है वहाँ क्या पाता है?",
        "options_hi": ["सब जगह तिरस्कार", "सब जगह धन", "सब जगह भोजन", "सब जगह वस्त्र"],
        "answer_hi": "सब जगह तिरस्कार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "'स एव विद्वान्' पाठ किस ग्रंथ से लिया गया है?",
        "options_hi": ["हितोपदेश से", "पंचतंत्र से", "चाणक्यनीति से", "भर्तृहरिशतक से"],
        "answer_hi": "हितोपदेश से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "हितोपदेश के रचयिता कौन हैं?",
        "options_hi": ["नारायणपंडित", "विष्णुशर्मा", "चाणक्य", "वाल्मीकि"],
        "answer_hi": "नारायणपंडित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "विद्वान् पद का क्या अर्थ है?",
        "options_hi": ["ज्ञानवान", "धनवान", "बलवान", "यशस्वी"],
        "answer_hi": "ज्ञानवान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "'स एव विद्वान्' में 'सः' सर्वनाम किसके प्रति है?",
        "options_hi": ["जो हित कहता है", "जो धन देता है", "जो युद्ध करता है", "जो पढ़ता है"],
        "answer_hi": "जो हित कहता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "'हित कहता है' का विपरीतार्थक वाक्य क्या है?",
        "options_hi": ["अहित कहता है", "सत्य कहता है", "मिथ्या कहता है", "मौन धारण करता है"],
        "answer_hi": "अहित कहता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "विद्वान् किसका हित चिंतन करता है?",
        "options_hi": ["सभी प्राणियों का", "अपना", "मित्रों का", "बंधुओं का"],
        "answer_hi": "सभी प्राणियों का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "'सर्वभूतानाम्' में 'भूतानि' पद का क्या अर्थ है?",
        "options_hi": ["प्राणी", "वस्तुएँ", "धन", "पदार्थ"],
        "answer_hi": "प्राणी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "'हिते रतः' में 'रतः' का क्या अर्थ है?",
        "options_hi": ["तत्पर", "विरत", "दूरस्थ", "अनासक्त"],
        "answer_hi": "तत्पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "मूर्ख क्या कहता है?",
        "options_hi": ["अहित", "हित", "सत्य", "मधुर"],
        "answer_hi": "अहित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "मूर्ख कहाँ दृष्टि रखता है?",
        "options_hi": ["समीपदृष्टि", "दूरदृष्टि", "अपनी दृष्टि", "दूसरे की दृष्टि"],
        "answer_hi": "समीपदृष्टि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "विद्वान् क्या जानता है?",
        "options_hi": ["सब कुछ", "कुछ", "थोड़ा", "कुछ नहीं"],
        "answer_hi": "सब कुछ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "मूर्ख क्या नहीं जानता?",
        "options_hi": ["अपना हित", "दूसरे का हित", "अपना दोष", "सब जगह हानि-लाभ"],
        "answer_hi": "सब जगह हानि-लाभ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "विद्वान् किसका भार वहन करता है?",
        "options_hi": ["समाज का", "अपना", "परिवार का", "मित्रों का"],
        "answer_hi": "समाज का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "मूर्ख किसका भार वहन करता है?",
        "options_hi": ["अपना", "समाज का", "देश का", "राजा का"],
        "answer_hi": "अपना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "विद्वान् कैसे वाणी बोलता है?",
        "options_hi": ["विचारपूर्वक", "बिना विचारे", "मनोभाव से", "क्रोधपूर्वक"],
        "answer_hi": "विचारपूर्वक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "मूर्ख कैसे वाणी बोलता है?",
        "options_hi": ["बिना विचारे", "विचारपूर्वक", "सूक्ष्मतापूर्वक", "सावधानीपूर्वक"],
        "answer_hi": "बिना विचारे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "विद्वान् क्या सुनता है?",
        "options_hi": ["सबके वचन", "अपने वचन", "स्तुति", "निंदा"],
        "answer_hi": "सबके वचन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "मूर्ख क्या सुनता है?",
        "options_hi": ["अपनी स्तुति", "अपनी निंदा", "दूसरे के वचन", "सबके वचन"],
        "answer_hi": "अपनी स्तुति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "विद्वान् कैसे निर्णय करता है?",
        "options_hi": ["तर्क से", "भाव से", "क्रोध से", "लोभ से"],
        "answer_hi": "तर्क से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "मूर्ख कैसे निर्णय करता है?",
        "options_hi": ["अंधविश्वास से", "तर्क से", "ज्ञान से", "अनुभव से"],
        "answer_hi": "अंधविश्वास से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "विद्वान् किसके लिए तप करता है?",
        "options_hi": ["लोककल्याण के लिए", "स्वर्ग प्राप्ति के लिए", "धन लाभ के लिए", "यश प्राप्ति के लिए"],
        "answer_hi": "लोककल्याण के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "मूर्ख किसके लिए तप करता है?",
        "options_hi": ["स्वार्थ के लिए", "परार्थ के लिए", "लोकार्थ के लिए", "देशार्थ के लिए"],
        "answer_hi": "स्वार्थ के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "विद्वान् क्या पालन करता है?",
        "options_hi": ["सत्य और धर्म", "असत्य और अधर्म", "धन और वस्त्र", "भवन और वाहन"],
        "answer_hi": "सत्य और धर्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "मूर्ख क्या पालन करता है?",
        "options_hi": ["असत्य और अधर्म", "सत्य और धर्म", "दया और दान", "सत्य और प्रेम"],
        "answer_hi": "असत्य और अधर्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "विद्वान् क्या प्राप्त करता है?",
        "options_hi": ["मोक्ष", "स्वर्ग", "नरक", "पुनर्जन्म"],
        "answer_hi": "मोक्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "मूर्ख क्या प्राप्त करता है?",
        "options_hi": ["नरक", "स्वर्ग", "मोक्ष", "पुनर्जन्म"],
        "answer_hi": "नरक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "विद्वान् कहाँ निवास करता है?",
        "options_hi": ["सब जगह सुख से", "सब जगह दुःख से", "एकांत में", "वन में"],
        "answer_hi": "सब जगह सुख से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "मूर्ख कहाँ निवास करता है?",
        "options_hi": ["सब जगह दुःख से", "सब जगह सुख से", "नगर में", "गाँव में"],
        "answer_hi": "सब जगह दुःख से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "विद्वान् कैसे आचरण करता है?",
        "options_hi": ["विनयपूर्वक", "अहंकारपूर्वक", "क्रोधपूर्वक", "लोभपूर्वक"],
        "answer_hi": "विनयपूर्वक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "मूर्ख कैसे आचरण करता है?",
        "options_hi": ["अहंकारपूर्वक", "विनयपूर्वक", "सरलतापूर्वक", "सरल भाव से"],
        "answer_hi": "अहंकारपूर्वक",
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