const questions = [
    {
        "num": 1,
        "question_hi": "'स एव विद्वान्' इस पाठ का स्रोत क्या है?",
        "options_hi": ["हितोपदेश", "पंचतंत्र", "चाणक्यनीति", "भर्तृहरिशतक"],
        "answer_hi": "हितोपदेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "हितोपदेश के रचयिता कौन हैं?",
        "options_hi": ["नारायण पंडित", "विष्णु शर्मा", "चाणक्य", "भर्तृहरि"],
        "answer_hi": "नारायण पंडित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "'स एव विद्वान्' पाठ में किसके गुण वर्णित हैं?",
        "options_hi": ["विद्वान के", "मूर्ख के", "धनिक के", "राजा के"],
        "answer_hi": "विद्वान के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "विद्वान क्या करता है?",
        "options_hi": ["हित की बात कहता है", "अहित की बात कहता है", "मौन रहता है", "वाद करता है"],
        "answer_hi": "हित की बात कहता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "'हितं वदति' इस वाक्य में 'हितं' का क्या अर्थ है?",
        "options_hi": ["कल्याणकारी", "धन देने वाला", "यश देने वाला", "बल देने वाला"],
        "answer_hi": "कल्याणकारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "विद्वान किसका हित चिंतित करता है?",
        "options_hi": ["सबका", "अपना", "मित्रों का", "संबंधियों का"],
        "answer_hi": "सबका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "'अहितं वदति' यह किसका लक्षण है?",
        "options_hi": ["मूर्ख का", "विद्वान का", "धनिक का", "राजा का"],
        "answer_hi": "मूर्ख का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "मूर्ख किसका हित चिंतित करता है?",
        "options_hi": ["अपना", "दूसरों का", "सबका", "किसी का नहीं"],
        "answer_hi": "अपना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "'सर्वदा सर्वभूतानाम्' के बाद क्या पढ़ा जाता है?",
        "options_hi": ["हिते रतः", "अहिते रतः", "सुखे रतः", "दुःखे रतः"],
        "answer_hi": "हिते रतः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "'सर्वभूतानाम्' में 'भूतानि' शब्द का क्या अर्थ है?",
        "options_hi": ["प्राणी", "वस्तुएं", "धन", "रत्न"],
        "answer_hi": "प्राणी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "'हिते रतः' में 'रतः' शब्द का क्या अर्थ है?",
        "options_hi": ["तत्पर", "विरत", "दूर", "निकट"],
        "answer_hi": "तत्पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "विद्वान कहाँ आनंद प्राप्त करता है?",
        "options_hi": ["परहित में", "स्वहित में", "धन में", "यश में"],
        "answer_hi": "परहित में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "'आत्मनः प्रतिकूलानि' यह कौन नहीं करता?",
        "options_hi": ["विद्वान", "मूर्ख", "धनिक", "राजा"],
        "answer_hi": "विद्वान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "'प्रतिकूलानि' का विपरीतार्थक शब्द क्या है?",
        "options_hi": ["अनुकूलानि", "विपरीतानि", "विरुद्धानि", "विरोधीनि"],
        "answer_hi": "अनुकूलानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "विद्वान किनका हित चिंतित करता है?",
        "options_hi": ["दूसरों का", "अपना", "मित्रों का", "शत्रुओं का"],
        "answer_hi": "दूसरों का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "मूर्ख किनका हित चिंतित करता है?",
        "options_hi": ["अपना", "दूसरों का", "सबका", "किसी का नहीं"],
        "answer_hi": "अपना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "'परेषां सुखदुःखाभ्याम्' यह पाठांश किसके गुण का वर्णन करता है?",
        "options_hi": ["विद्वान के", "मूर्ख के", "गरीब के", "राजा के"],
        "answer_hi": "विद्वान के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "विद्वान दूसरों के सुख-दुःख से क्या होता है?",
        "options_hi": ["सुख-दुःख भोगता है", "उदासीन रहता है", "प्रसन्न होता है", "दुखी होता है"],
        "answer_hi": "सुख-दुःख भोगता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "सुखदुःखभाक् का क्या अर्थ है?",
        "options_hi": ["सुख-दुःख अनुभव करने वाला", "सुखी", "दुखी", "मूक"],
        "answer_hi": "सुख-दुःख अनुभव करने वाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "मूर्ख कैसा व्यवहार करता है?",
        "options_hi": ["स्वार्थपर", "परार्थपर", "दयालु", "उदार"],
        "answer_hi": "स्वार्थपर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "'स्वार्थपरः' का विपरीतार्थक शब्द क्या है?",
        "options_hi": ["परार्थपरः", "स्वहितपरः", "दयापरः", "क्रोधपरः"],
        "answer_hi": "परार्थपरः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "विद्वान कैसा कहलाता है?",
        "options_hi": ["महात्मा", "कंजूस", "लोभी", "क्रूर"],
        "answer_hi": "महात्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "'महात्मा' शब्द का क्या अर्थ है?",
        "options_hi": ["उदार चरित्र वाला", "बड़ा शरीर वाला", "धनवान", "बलवान"],
        "answer_hi": "उदार चरित्र वाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "मूर्ख कैसा कहलाता है?",
        "options_hi": ["अल्पात्मा", "बुद्धिमान", "दयालु", "उदार"],
        "answer_hi": "अल्पात्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "'अल्पात्मा' शब्द का क्या अर्थ है?",
        "options_hi": ["संकुचित मन वाला", "छोटा शरीर वाला", "गरीब", "बुद्धिहीन"],
        "answer_hi": "संकुचित मन वाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "विद्वान किसमें सुख देखता है?",
        "options_hi": ["दूसरों के सुख में", "अपने सुख में", "धन में", "यश में"],
        "answer_hi": "दूसरों के सुख में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "मूर्ख किसमें सुख देखता है?",
        "options_hi": ["अपने सुख में", "दूसरों के सुख में", "सभी के सुख में", "किसी में नहीं"],
        "answer_hi": "अपने सुख में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "विद्वान किसमें दुःख देखता है?",
        "options_hi": ["दूसरों के दुःख में", "अपने दुःख में", "सभी के दुःख में", "किसी में नहीं"],
        "answer_hi": "दूसरों के दुःख में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "'स एव विद्वान्' वाक्य का पूर्ण रूप क्या है?",
        "options_hi": ["स एव विद्वान् यो हितं वदति", "स एव विद्वान् यो धनं ददाति", "स एव विद्वान् यो पठति", "स एव विद्वान् यो लिखति"],
        "answer_hi": "स एव विद्वान् यो हितं वदति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "हितोपदेश में कितने भाग हैं?",
        "options_hi": ["चार", "दो", "तीन", "पांच"],
        "answer_hi": "चार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "हितोपदेश का पहला भाग क्या है?",
        "options_hi": ["मित्रलाभ", "सुहृद्भेद", "विग्रह", "संधि"],
        "answer_hi": "मित्रलाभ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "हितोपदेश का दूसरा भाग क्या है?",
        "options_hi": ["सुहृद्भेद", "मित्रलाभ", "विग्रह", "संधि"],
        "answer_hi": "सुहृद्भेद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "हितोपदेश का तीसरा भाग क्या है?",
        "options_hi": ["विग्रह", "मित्रलाभ", "सुहृद्भेद", "संधि"],
        "answer_hi": "विग्रह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "हितोपदेश का चौथा भाग क्या है?",
        "options_hi": ["संधि", "मित्रलाभ", "सुहृद्भेद", "विग्रह"],
        "answer_hi": "संधि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "हितोपदेश किनके लिए रचा गया है?",
        "options_hi": ["राजपुत्रों के लिए", "विद्यार्थियों के लिए", "व्यापारियों के लिए", "किसानों के लिए"],
        "answer_hi": "राजपुत्रों के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "हितोपदेश की रचना काल क्या है?",
        "options_hi": ["बारहवीं शताब्दी", "आठवीं शताब्दी", "सोलहवीं शताब्दी", "बीसवीं शताब्दी"],
        "answer_hi": "बारहवीं शताब्दी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "विद्वान का पर्यायवाची शब्द क्या है?",
        "options_hi": ["पंडित", "मूर्ख", "अज्ञ", "बालक"],
        "answer_hi": "पंडित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "मूर्ख का पर्यायवाची शब्द क्या है?",
        "options_hi": ["अज्ञ", "पंडित", "विद्वान", "बुद्धिमान"],
        "answer_hi": "अज्ञ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "'सर्वभूतहिते रतः' का विपरीतार्थक वाक्य क्या है?",
        "options_hi": ["स्वहिते रतः", "परहिते रतः", "धने रतः", "यशसि रतः"],
        "answer_hi": "स्वहिते रतः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "विद्वान किससे भिन्न होता है?",
        "options_hi": ["मूर्ख से", "धनिक से", "राजा से", "योगी से"],
        "answer_hi": "मूर्ख से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "विद्वान क्या देखकर प्रसन्न होता है?",
        "options_hi": ["दूसरों का सुख", "अपना सुख", "दूसरों का धन", "अपना धन"],
        "answer_hi": "दूसरों का सुख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "विद्वान क्या देखकर दुखी होता है?",
        "options_hi": ["दूसरों का दुःख", "अपना दुःख", "दूसरों का नाश", "अपना नाश"],
        "answer_hi": "दूसरों का दुःख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "'आत्मनः प्रतिकूलानि परेषां न समाचरेत्' इसका भाव क्या है?",
        "options_hi": ["जो अपने को अप्रिय है, वह दूसरों को न करें", "स्वार्थ हमेशा पालें", "परार्थ त्याग दें", "सब कुछ स्वार्थ के लिए"],
        "answer_hi": "जो अपने को अप्रिय है, वह दूसरों को न करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "विद्वान का मुख्य गुण क्या है?",
        "options_hi": ["परहित चिंतन", "स्वहित चिंतन", "धन संचय", "यश प्राप्ति"],
        "answer_hi": "परहित चिंतन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "मूर्ख का मुख्य दोष क्या है?",
        "options_hi": ["स्वार्थपरता", "परार्थपरता", "दयालुता", "उदारता"],
        "answer_hi": "स्वार्थपरता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "'स एव पुरुषः' कौन कहलाता है?",
        "options_hi": ["जो परोपकारी है", "जो स्वार्थी है", "जो धनिक है", "जो बलवान है"],
        "answer_hi": "जो परोपकारी है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "विद्वान क्या प्राप्त करता है?",
        "options_hi": ["यश", "धन", "बल", "सुख"],
        "answer_hi": "यश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "मूर्ख क्या प्राप्त करता है?",
        "options_hi": ["अपयश", "धन", "बल", "सुख"],
        "answer_hi": "अपयश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "'परोपकारः' शब्द का क्या अर्थ है?",
        "options_hi": ["दूसरों का हित करना", "अपना हित करना", "धन दान करना", "यज्ञ करना"],
        "answer_hi": "दूसरों का हित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "'स्वार्थः' शब्द का क्या अर्थ है?",
        "options_hi": ["अपना हित", "दूसरों का हित", "सबका हित", "किसी का हित"],
        "answer_hi": "अपना हित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "विद्वान कैसे व्यवहार करता है?",
        "options_hi": ["न्याय से", "अन्याय से", "कपट से", "छल से"],
        "answer_hi": "न्याय से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "मूर्ख कैसे व्यवहार करता है?",
        "options_hi": ["अन्याय से", "न्याय से", "सत्य से", "धर्म से"],
        "answer_hi": "अन्याय से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "विद्वान कैसा वचन बोलता है?",
        "options_hi": ["मधुर और हितकारी", "कटु और हितकारी", "मधुर और अहितकारी", "कटु और अहितकारी"],
        "answer_hi": "मधुर और हितकारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "मूर्ख कैसा वचन बोलता है?",
        "options_hi": ["कटु और अहितकारी", "मधुर और हितकारी", "मधुर और अहितकारी", "कटु और हितकारी"],
        "answer_hi": "कटु और अहितकारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "विद्वान किस क्षेत्र में उपयोगी होता है?",
        "options_hi": ["सभी क्षेत्रों में", "केवल विद्या के क्षेत्र में", "केवल धन के क्षेत्र में", "केवल राज्य के क्षेत्र में"],
        "answer_hi": "सभी क्षेत्रों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "मूर्ख कहाँ हानि करता है?",
        "options_hi": ["सब जगह", "केवल घर में", "केवल समाज में", "केवल राज्य में"],
        "answer_hi": "सब जगह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "विद्वान क्या त्यागता है?",
        "options_hi": ["दुराचार", "सदाचार", "धर्म", "कर्म"],
        "answer_hi": "दुराचार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "मूर्ख क्या ग्रहण करता है?",
        "options_hi": ["दुराचार", "सदाचार", "धर्म", "ज्ञान"],
        "answer_hi": "दुराचार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "विद्वान किसकी सेवा करता है?",
        "options_hi": ["समाज की", "अपनी", "राजा की", "धनिक की"],
        "answer_hi": "समाज की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "मूर्ख किसकी सेवा करता है?",
        "options_hi": ["अपनी", "समाज की", "राजा की", "देश की"],
        "answer_hi": "अपनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "विद्वान क्या बढ़ाता है?",
        "options_hi": ["समाज कल्याण", "स्वकल्याण", "धन संचय", "बल संचय"],
        "answer_hi": "समाज कल्याण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "मूर्ख क्या बढ़ाता है?",
        "options_hi": ["स्वकल्याण", "समाज कल्याण", "देश कल्याण", "विश्व कल्याण"],
        "answer_hi": "स्वकल्याण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "विद्वान कहाँ रहता है?",
        "options_hi": ["सब जगह पूजा जाता है", "एकांत में", "वन में", "पर्वत पर"],
        "answer_hi": "सब जगह पूजा जाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "मूर्ख कहाँ रहता है?",
        "options_hi": ["सब जगह तिरस्कृत होता है", "राजधानी में", "शहर में", "गाँव में"],
        "answer_hi": "सब जगह तिरस्कृत होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "विद्वान क्या होता है?",
        "options_hi": ["लोकहितैषी", "लोकविरोधी", "लोकोपेक्षी", "लोकभीरु"],
        "answer_hi": "लोकहितैषी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "मूर्ख क्या होता है?",
        "options_hi": ["लोकविरोधी", "लोकहितैषी", "लोकप्रिय", "लोकसेवी"],
        "answer_hi": "लोकविरोधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "'स एव विद्वान्' पाठ में क्या शिक्षा दी गई है?",
        "options_hi": ["परोपकार का महत्व", "धन का महत्व", "बल का महत्व", "सुख का महत्व"],
        "answer_hi": "परोपकार का महत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "विद्वान किससे भय अनुभव करता है?",
        "options_hi": ["पाप से", "गरीबी से", "मृत्यु से", "रोग से"],
        "answer_hi": "पाप से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "मूर्ख किससे भय अनुभव करता है?",
        "options_hi": ["गरीबी से", "पाप से", "मृत्यु से", "अज्ञान से"],
        "answer_hi": "गरीबी से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "विद्वान क्या प्राप्त करके संतुष्ट होता है?",
        "options_hi": ["ज्ञान", "धन", "पद", "यश"],
        "answer_hi": "ज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "मूर्ख क्या प्राप्त करके संतुष्ट होता है?",
        "options_hi": ["धन", "ज्ञान", "यश", "बल"],
        "answer_hi": "धन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "विद्वान किसके मार्ग का अनुसरण करता है?",
        "options_hi": ["धर्म के", "अधर्म के", "काम के", "क्रोध के"],
        "answer_hi": "धर्म के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "मूर्ख किसके मार्ग का अनुसरण करता है?",
        "options_hi": ["अधर्म के", "धर्म के", "सत्य के", "न्याय के"],
        "answer_hi": "अधर्म के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "विद्वान क्या मानता है?",
        "options_hi": ["सब एक परिवार हैं", "अपना-पराया अलग है", "सब शत्रु हैं", "सब अज्ञानी हैं"],
        "answer_hi": "सब एक परिवार हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "मूर्ख क्या मानता है?",
        "options_hi": ["अपना-पराया अलग है", "सब एक परिवार हैं", "सब मित्र हैं", "सब संबंधी हैं"],
        "answer_hi": "अपना-पराया अलग है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "विद्वान क्या देता है?",
        "options_hi": ["उपदेश", "धन", "भोजन", "वस्त्र"],
        "answer_hi": "उपदेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "मूर्ख क्या देता है?",
        "options_hi": ["क्लेश", "सुख", "शांति", "आनंद"],
        "answer_hi": "क्लेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "विद्वान कैसे मरने पर भी क्या होता है?",
        "options_hi": ["अमर", "नष्ट", "विस्मृत", "तिरस्कृत"],
        "answer_hi": "अमर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "मूर्ख कैसे जीते हुए भी क्या होता है?",
        "options_hi": ["मृततुल्य", "अमर", "यशस्वी", "कीर्तिमान"],
        "answer_hi": "मृततुल्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "विद्वान कहाँ जाता है वहाँ क्या प्राप्त करता है?",
        "options_hi": ["सब जगह सम्मान", "सब जगह धन", "सब जगह भोजन", "सब जगह वस्त्र"],
        "answer_hi": "सब जगह सम्मान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "मूर्ख कहाँ जाता है वहाँ क्या प्राप्त करता है?",
        "options_hi": ["सब जगह तिरस्कार", "सब जगह धन", "सब जगह भोजन", "सब जगह वस्त्र"],
        "answer_hi": "सब जगह तिरस्कार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "विद्वान किसका आदर्श होता है?",
        "options_hi": ["समाज का", "अपना", "परिवार का", "मित्रों का"],
        "answer_hi": "समाज का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "मूर्ख किसका उदाहरण होता है?",
        "options_hi": ["अनुकरणीय नहीं", "अनुकरणीय", "सेवनीय", "पूजनीय"],
        "answer_hi": "अनुकरणीय नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "विद्वान किसकी रक्षा करता है?",
        "options_hi": ["संस्कृति की", "धन की", "भवन की", "वाहन की"],
        "answer_hi": "संस्कृति की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "मूर्ख किसका नाश करता है?",
        "options_hi": ["संस्कृति का", "धन का", "भवन का", "वाहन का"],
        "answer_hi": "संस्कृति का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "विद्वान किसके लिए जीता है?",
        "options_hi": ["दूसरों के लिए", "अपने लिए", "परिवार के लिए", "मित्रों के लिए"],
        "answer_hi": "दूसरों के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "मूर्ख किसके लिए जीता है?",
        "options_hi": ["अपने लिए", "दूसरों के लिए", "परिवार के लिए", "समाज के लिए"],
        "answer_hi": "अपने लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "विद्वान क्या करने में समर्थ होता है?",
        "options_hi": ["कठिन कार्य", "सरल कार्य", "धन अर्जन", "यश प्राप्ति"],
        "answer_hi": "कठिन कार्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "मूर्ख क्या करने में असमर्थ होता है?",
        "options_hi": ["कठिन कार्य", "सरल कार्य", "भोजन पकाना", "सोना"],
        "answer_hi": "कठिन कार्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "विद्वान कहाँ दृष्टि रखता है?",
        "options_hi": ["दूरदृष्टि", "निकटदृष्टि", "स्वदृष्टि", "परदृष्टि"],
        "answer_hi": "दूरदृष्टि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "मूर्ख कहाँ दृष्टि रखता है?",
        "options_hi": ["निकटदृष्टि", "दूरदृष्टि", "स्वदृष्टि", "परदृष्टि"],
        "answer_hi": "निकटदृष्टि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "विद्वान क्या जानता है?",
        "options_hi": ["सब कुछ", "कुछ", "थोड़ा", "कुछ नहीं"],
        "answer_hi": "सब कुछ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "मूर्ख क्या जानता है?",
        "options_hi": ["थोड़ा", "सब कुछ", "बहुत", "कुछ नहीं"],
        "answer_hi": "थोड़ा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "विद्वान कैसे बोलता है?",
        "options_hi": ["विवेकपूर्वक", "अविवेकपूर्वक", "क्रोधपूर्वक", "लोभपूर्वक"],
        "answer_hi": "विवेकपूर्वक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "मूर्ख कैसे बोलता है?",
        "options_hi": ["अविवेकपूर्वक", "विवेकपूर्वक", "सत्यपूर्वक", "धर्मपूर्वक"],
        "answer_hi": "अविवेकपूर्वक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "विद्वान किसके हित के लिए प्रयत्न करता है?",
        "options_hi": ["समाज के", "अपने", "परिवार के", "मित्रों के"],
        "answer_hi": "समाज के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "मूर्ख किसके हित के लिए प्रयत्न करता है?",
        "options_hi": ["अपने", "समाज के", "देश के", "विश्व के"],
        "answer_hi": "अपने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "विद्वान क्या प्राप्त करके संतुष्ट होता है?",
        "options_hi": ["ज्ञान", "धन", "पद", "यश"],
        "answer_hi": "ज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "मूर्ख क्या प्राप्त करके संतुष्ट होता है?",
        "options_hi": ["धन", "ज्ञान", "यश", "बल"],
        "answer_hi": "धन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "'स एव विद्वान्' पाठ का मुख्य संदेश क्या है?",
        "options_hi": ["परोपकार ही विद्वत्ता है", "धन संचय ही विद्वत्ता है", "यश प्राप्ति ही विद्वत्ता है", "सुख भोग ही विद्वत्ता है"],
        "answer_hi": "परोपकार ही विद्वत्ता है",
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