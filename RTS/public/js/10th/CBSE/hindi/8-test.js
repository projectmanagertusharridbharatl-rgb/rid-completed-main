const questions = [
    {
        "num": 1,
        "question_hi": "यशपाल ने 'मंत्र' कहानी किस वर्ष लिखी?",
        "options_hi": ["1930", "1935", "1940", "1945"],
        "answer_hi": "1940",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "कहानी में दीवान साहब किस शहर में रहते हैं?",
        "options_hi": ["दिल्ली", "लखनऊ", "कलकत्ता", "शहर का नाम नहीं"],
        "answer_hi": "शहर का नाम नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "दीवान साहब की नौकरी कहाँ है?",
        "options_hi": ["सरकारी दफ्तर", "प्राइवेट कंपनी", "बैंक", "स्कूल"],
        "answer_hi": "सरकारी दफ्तर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "दीवान साहब की पत्नी मंत्र के बारे में क्या सोचती है?",
        "options_hi": ["विश्वास करती है", "संदेह करती है", "विरोध करती है", "उदासीन है"],
        "answer_hi": "संदेह करती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "गुरुदेव ने मंत्र किस भाषा में दिया?",
        "options_hi": ["संस्कृत", "हिंदी", "पालि", "अपभ्रंश"],
        "answer_hi": "संस्कृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "दीवान साहब को मंत्र का जाप कब करना था?",
        "options_hi": ["प्रातःकाल", "मध्यरात्रि", "संध्या समय", "निरंतर"],
        "answer_hi": "प्रातःकाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "मंत्र प्राप्त करने के लिए दीवान साहब ने कितना पैसा दिया?",
        "options_hi": ["पाँच रुपये", "दस रुपये", "बीस रुपये", "पचास रुपये"],
        "answer_hi": "दस रुपये",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "दीवान साहब की बीमारी का कारण क्या बताया गया है?",
        "options_hi": ["कुपोषण", "अत्यधिक काम", "आनुवांशिक", "अनिश्चित"],
        "answer_hi": "कुपोषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "गुरुदेव का आश्रम किस प्रकार की जगह पर है?",
        "options_hi": ["शहर के बीच", "शहर के बाहर", "पहाड़ी पर", "नदी किनारे"],
        "answer_hi": "शहर के बीच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "दीवान साहब के डॉक्टर ने क्या सलाह दी?",
        "options_hi": ["आराम", "दवाएं", "संतुलित आहार", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "कहानी में 'मंत्र' किसका प्रतीक है?",
        "options_hi": ["अंधविश्वास", "आस्था", "ढोंग", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "दीवान साहब की आयु कहानी के आरंभ में क्या है?",
        "options_hi": ["35", "38", "40", "42"],
        "answer_hi": "38",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "गुरुदेव के आश्रम में किस प्रकार का वातावरण है?",
        "options_hi": ["शांत", "भीड़भाड़", "व्यवस्थित", "अव्यवस्थित"],
        "answer_hi": "भीड़भाड़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "दीवान साहब मंत्र जाप के समय क्या करते हैं?",
        "options_hi": ["बैठकर", "खड़े होकर", "लेटकर", "चलते हुए"],
        "answer_hi": "बैठकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "दीवान साहब की पत्नी किस प्रकार की महिला है?",
        "options_hi": ["अनपढ़", "साक्षर", "स्नातक", "स्नातकोत्तर"],
        "answer_hi": "साक्षर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "गुरुदेव ने मंत्र देते समय क्या शर्त रखी?",
        "options_hi": ["गोपनीयता", "नियमित जाप", "दान", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "दीवान साहब का वेतन कितना है?",
        "options_hi": ["30 रुपये", "40 रुपये", "50 रुपये", "60 रुपये"],
        "answer_hi": "40 रुपये",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "दीवान साहब के घर में कितने कमरे हैं?",
        "options_hi": ["एक", "दो", "तीन", "चार"],
        "answer_hi": "एक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "गुरुदेव के पास किस प्रकार के लोग आते हैं?",
        "options_hi": ["गरीब", "अमीर", "सभी वर्ग", "मध्यवर्ग"],
        "answer_hi": "सभी वर्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "दीवान साहब की बीमारी कितने साल पुरानी है?",
        "options_hi": ["2", "3", "4", "5"],
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "मंत्र जाप के लिए किस दिशा की ओर मुख करना था?",
        "options_hi": ["पूर्व", "पश्चिम", "उत्तर", "दक्षिण"],
        "answer_hi": "पूर्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "दीवान साहब की पत्नी क्या काम करती है?",
        "options_hi": ["सिलाई", "बुनाई", "घरेलू नौकरी", "कोई काम नहीं"],
        "answer_hi": "सिलाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "गुरुदेव की उम्र क्या है?",
        "options_hi": ["50", "55", "60", "65"],
        "answer_hi": "55",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "दीवान साहब किस मौसम में बीमार पड़े?",
        "options_hi": ["सर्दी", "गर्मी", "बरसात", "वसंत"],
        "answer_hi": "सर्दी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "मंत्र कितने शब्दों का है?",
        "options_hi": ["5", "7", "9", "11"],
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "दीवान साहब का घर किस मोहल्ले में है?",
        "options_hi": ["अमीरों का", "गरीबों का", "मध्यवर्ग का", "मिला-जुला"],
        "answer_hi": "गरीबों का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "गुरुदेव ने मंत्र किस पुस्तक से लिया?",
        "options_hi": ["वेद", "पुराण", "तंत्र ग्रंथ", "अपनी रचना"],
        "answer_hi": "तंत्र ग्रंथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "दीवान साहब दवा के लिए कितना खर्च करते हैं?",
        "options_hi": ["5 रुपये", "10 रुपये", "15 रुपये", "20 रुपये"],
        "answer_hi": "15 रुपये",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "गुरुदेव के आश्रम का नाम क्या है?",
        "options_hi": ["शांति आश्रम", "प्रेम आश्रम", "कल्याण आश्रम", "नाम नहीं बताया"],
        "answer_hi": "नाम नहीं बताया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "दीवान साहब के पिता का क्या व्यवसाय था?",
        "options_hi": ["किसान", "दुकानदार", "क्लर्क", "शिक्षक"],
        "answer_hi": "किसान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "कहानी में किस प्रकार का वातावरण है?",
        "options_hi": ["उदास", "आशावादी", "रहस्यमय", "यथार्थपूर्ण"],
        "answer_hi": "उदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "दीवान साहब की पत्नी की उम्र क्या है?",
        "options_hi": ["30", "32", "34", "36"],
        "answer_hi": "32",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "गुरुदेव ने दीवान साहब को कितने दिन में ठीक होने का वादा किया?",
        "options_hi": ["21", "40", "90", "108"],
        "answer_hi": "40",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "दीवान साहब किस प्रकार के भोजन पर निर्भर हैं?",
        "options_hi": ["सादा", "पौष्टिक", "अपर्याप्त", "संतुलित"],
        "answer_hi": "अपर्याप्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "गुरुदेव के शिष्य किस प्रकार के हैं?",
        "options_hi": ["श्रद्धालु", "संदेही", "लालची", "भोले"],
        "answer_hi": "श्रद्धालु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "दीवान साहब के घर में किस प्रकार का प्रकाश है?",
        "options_hi": ["बिजली", "लालटेन", "मोमबत्ती", "दीया"],
        "answer_hi": "दीया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "मंत्र का अर्थ क्या था?",
        "options_hi": ["स्वास्थ्य प्राप्ति", "धन प्राप्ति", "मोक्ष प्राप्ति", "रहस्यमय"],
        "answer_hi": "स्वास्थ्य प्राप्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "दीवान साहब किस दिन गुरुदेव के पास गए?",
        "options_hi": ["सोमवार", "बुधवार", "शुक्रवार", "रविवार"],
        "answer_hi": "रविवार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "गुरुदेव ने मंत्र किस समय दिया?",
        "options_hi": ["प्रातः", "दोपहर", "संध्या", "रात"],
        "answer_hi": "संध्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "दीवान साहब के मित्र कौन हैं?",
        "options_hi": ["कोई नहीं", "दो-तीन", "अनेक", "सहकर्मी"],
        "answer_hi": "कोई नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "कहानी में किस प्रकार का वातावरण है?",
        "options_hi": ["उदास", "आशावादी", "रहस्यमय", "यथार्थपूर्ण"],
        "answer_hi": "उदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "दीवान साहब की बीमारी का लक्षण क्या है?",
        "options_hi": ["खाँसी", "बुखार", "कमजोरी", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "गुरुदेव का जन्म स्थान कहाँ है?",
        "options_hi": ["बनारस", "हरिद्वार", "पंजाब", "अज्ञात"],
        "answer_hi": "अज्ञात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "दीवान साहब कितनी बार डॉक्टर के पास गए?",
        "options_hi": ["एक", "दो", "तीन", "अनेक"],
        "answer_hi": "अनेक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "मंत्र जाप के लिए कौन सा समय निर्धारित था?",
        "options_hi": ["ब्रह्म मुहूर्त", "सूर्योदय", "सुबह 6 बजे", "जब भी समय मिले"],
        "answer_hi": "ब्रह्म मुहूर्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "दीवान साहब की पत्नी कहाँ से आती है?",
        "options_hi": ["गाँव", "शहर", "कस्बा", "अज्ञात"],
        "answer_hi": "गाँव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "गुरुदेव के पास किस प्रकार की सुविधाएँ हैं?",
        "options_hi": ["साधारण", "वैभवपूर्ण", "आधुनिक", "पुरानी"],
        "answer_hi": "वैभवपूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "दीवान साहब कितने साल से नौकरी कर रहे हैं?",
        "options_hi": ["10", "12", "15", "18"],
        "answer_hi": "15",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "मंत्र का प्रभाव कब दिखना था?",
        "options_hi": ["तुरंत", "एक सप्ताह", "एक महीने", "तीन महीने"],
        "answer_hi": "तीन महीने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "दीवान साहब के घर में किस प्रकार का फर्नीचर है?",
        "options_hi": ["आधुनिक", "पुराना", "न्यूनतम", "कोई नहीं"],
        "answer_hi": "न्यूनतम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "गुरुदेव ने किस देवता का मंत्र दिया?",
        "options_hi": ["शिव", "विष्णु", "दुर्गा", "हनुमान"],
        "answer_hi": "दुर्गा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "दीवान साहब की दिनचर्या क्या है?",
        "options_hi": ["घर-दफ्तर", "घर-दफ्तर-डॉक्टर", "घर-दफ्तर-आश्रम", "घर-दफ्तर-दवा"],
        "answer_hi": "घर-दफ्तर-डॉक्टर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "गुरुदेव के शिष्य उन्हें क्या कहते हैं?",
        "options_hi": ["बाबा", "महाराज", "स्वामी", "गुरुजी"],
        "answer_hi": "महाराज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "दीवान साहब का कद कैसा है?",
        "options_hi": ["लंबा", "मध्यम", "छोटा", "दुबला-पतला"],
        "answer_hi": "दुबला-पतला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "मंत्र जाप के लिए किस आसन का प्रयोग करना था?",
        "options_hi": ["पद्मासन", "सुखासन", "वज्रासन", "कोई नहीं"],
        "answer_hi": "पद्मासन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "दीवान साहब की पत्नी किस भाषा में बोलती है?",
        "options_hi": ["हिंदी", "पंजाबी", "हिंदुस्तानी", "संस्कृत"],
        "answer_hi": "हिंदुस्तानी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "गुरुदेव की दिनचर्या क्या है?",
        "options_hi": ["ध्यान-भजन", "शिष्यों से मिलना", "धन संग्रह", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "दीवान साहब के घर का किराया कितना है?",
        "options_hi": ["5 रुपये", "8 रुपये", "10 रुपये", "12 रुपये"],
        "answer_hi": "8 रुपये",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "मंत्र किस राग में जपना था?",
        "options_hi": ["गंभीर", "मधुर", "तेज", "कोई नहीं"],
        "answer_hi": "गंभीर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "दीवान साहब के ससुराल वाले कहाँ हैं?",
        "options_hi": ["गाँव में", "शहर में", "दूसरे शहर", "मर चुके"],
        "answer_hi": "गाँव में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "गुरुदेव ने किस पुष्प का प्रयोग बताया?",
        "options_hi": ["गुलाब", "कमल", "गेंदा", "चमेली"],
        "answer_hi": "कमल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "दीवान साहब का वजन कितना है?",
        "options_hi": ["40 किलो", "45 किलो", "50 किलो", "55 किलो"],
        "answer_hi": "45 किलो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "गुरुदेव के पास किस प्रकार का वाहन है?",
        "options_hi": ["बैलगाड़ी", "तांगा", "कार", "कोई नहीं"],
        "answer_hi": "कार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "दीवान साहब किस महीने बीमार पड़े?",
        "options_hi": ["जनवरी", "मार्च", "नवंबर", "दिसंबर"],
        "answer_hi": "नवंबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "मंत्र जाप की संख्या कितनी थी?",
        "options_hi": ["108", "1008", "10000", "100000"],
        "answer_hi": "108",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "दीवान साहब की पत्नी कितना कमाती है?",
        "options_hi": ["5 रुपये", "10 रुपये", "15 रुपये", "20 रुपये"],
        "answer_hi": "10 रुपये",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "गुरुदेव ने किस धातु की अंगूठी पहन रखी है?",
        "options_hi": ["सोना", "चाँदी", "ताँबा", "पीतल"],
        "answer_hi": "सोना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "दीवान साहब का डॉक्टर कहाँ से है?",
        "options_hi": ["इंग्लैंड", "कलकत्ता", "लखनऊ", "दिल्ली"],
        "answer_hi": "कलकत्ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "मंत्र जाप के लिए किस रंग के वस्त्र पहनने थे?",
        "options_hi": ["सफेद", "पीला", "केसरिया", "कोई नहीं"],
        "answer_hi": "सफेद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "दीवान साहब के पड़ोसी किस प्रकार के हैं?",
        "options_hi": ["सहायक", "उपेक्षापूर्ण", "शत्रुतापूर्ण", "मित्रवत"],
        "answer_hi": "उपेक्षापूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "गुरुदेव का मुख्य भोजन क्या है?",
        "options_hi": ["फल", "दूध", "खिचड़ी", "व्यंजन"],
        "answer_hi": "फल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "दीवान साहब किस प्रकार की खाँसी से पीड़ित हैं?",
        "options_hi": ["सूखी", "बलगम वाली", "रक्तयुक्त", "अस्थमा"],
        "answer_hi": "रक्तयुक्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "गुरुदेव के आश्रम में कितने शिष्य हैं?",
        "options_hi": ["10-15", "20-25", "30-35", "40-50"],
        "answer_hi": "20-25",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "दीवान साहब की पत्नी कितनी पढ़ी-लिखी है?",
        "options_hi": ["अनपढ़", "पाँचवीं", "आठवीं", "दसवीं"],
        "answer_hi": "आठवीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "मंत्र जाप के लिए किस द्रव्य का प्रयोग करना था?",
        "options_hi": ["गंगाजल", "दूध", "शहद", "घी"],
        "answer_hi": "गंगाजल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "दीवान साहब का बॉस कैसा है?",
        "options_hi": ["दयालु", "कठोर", "उदासीन", "सहायक"],
        "answer_hi": "कठोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "गुरुदेव ने किस ग्रंथ का ज्ञान दिखाया?",
        "options_hi": ["वेद", "उपनिषद", "तंत्र", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "दीवान साहब के घर में किस प्रकार की रोशनी है?",
        "options_hi": ["कम", "पर्याप्त", "अधिक", "अंधकार"],
        "answer_hi": "कम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "मंत्र किस स्वर में जपना था?",
        "options_hi": ["मध्यम", "उच्च", "मंद", "गुंजन"],
        "answer_hi": "मध्यम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "दीवान साहब के माता-पिता कहाँ हैं?",
        "options_hi": ["गाँव", "मर चुके", "शहर", "अन्यत्र"],
        "answer_hi": "मर चुके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "गुरुदेव ने किस प्रकार का तिलक लगाया?",
        "options_hi": ["चंदन", "भस्म", "कुमकुम", "केसर"],
        "answer_hi": "भस्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "दीवान साहब का बुखार कितना है?",
        "options_hi": ["99°F", "100°F", "101°F", "102°F"],
        "answer_hi": "101°F",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "गुरुदेव के आश्रम का आकार कैसा है?",
        "options_hi": ["छोटा", "मध्यम", "बड़ा", "विशाल"],
        "answer_hi": "बड़ा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "दीवान साहब की पत्नी कितने घंटे काम करती है?",
        "options_hi": ["4", "6", "8", "10"],
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "मंत्र जाप के बाद क्या करना था?",
        "options_hi": ["प्रसाद खाना", "दान देना", "ध्यान करना", "सो जाना"],
        "answer_hi": "प्रसाद खाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "दीवान साहब का टिफिन क्या होता है?",
        "options_hi": ["रोटी-सब्जी", "दाल-रोटी", "भात-दाल", "पूड़ी-सब्जी"],
        "answer_hi": "रोटी-सब्जी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "गुरुदेव ने किस नदी का जल प्रयोग बताया?",
        "options_hi": ["गंगा", "यमुना", "सरस्वती", "गोदावरी"],
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "दीवान साहब कितने बजे उठते हैं?",
        "options_hi": ["4", "5", "6", "7"],
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "मंत्र जाप के लिए किस मुद्रा में बैठना था?",
        "options_hi": ["ध्यान मुद्रा", "ज्ञान मुद्रा", "शांति मुद्रा", "कोई नहीं"],
        "answer_hi": "ध्यान मुद्रा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "दीवान साहब के घर में कितने बर्तन हैं?",
        "options_hi": ["कम", "पर्याप्त", "अधिक", "बहुत कम"],
        "answer_hi": "बहुत कम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "गुरुदेव ने किस पक्षी का उदाहरण दिया?",
        "options_hi": ["कोयल", "मोर", "गरुड़", "हंस"],
        "answer_hi": "हंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "दीवान साहब का खून किस रंग का है?",
        "options_hi": ["लाल", "गाढ़ा लाल", "काला", "पीला"],
        "answer_hi": "गाढ़ा लाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "गुरुदेव के आश्रम में किस प्रकार की सफाई है?",
        "options_hi": ["उत्तम", "सामान्य", "खराब", "बहुत खराब"],
        "answer_hi": "उत्तम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "दीवान साहब की पत्नी किस रंग की साड़ी पहनती है?",
        "options_hi": ["सफेद", "लाल", "नीला", "पीला"],
        "answer_hi": "सफेद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "मंत्र जाप के लिए किस प्रकार की शांति चाहिए?",
        "options_hi": ["पूर्ण", "आंशिक", "मानसिक", "वातावरण"],
        "answer_hi": "पूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "दीवान साहब का दफ्तर कहाँ है?",
        "options_hi": ["शहर के बीच", "शहर के बाहर", "कचहरी में", "कोतवाली"],
        "answer_hi": "शहर के बीच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "गुरुदेव ने किस प्रकार का योग सिखाया?",
        "options_hi": ["प्राणायाम", "आसन", "ध्यान", "कुछ नहीं"],
        "answer_hi": "प्राणायाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "दीवान साहब के घर में कौन सा पशु है?",
        "options_hi": ["बिल्ली", "कुत्ता", "गाय", "कोई नहीं"],
        "answer_hi": "कोई नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "मंत्र जाप के दौरान क्या सोचना था?",
        "options_hi": ["देवता", "स्वास्थ्य", "शून्य", "गुरुदेव"],
        "answer_hi": "देवता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "दीवान साहब के अंतिम शब्द क्या थे?",
        "options_hi": ["मंत्र", "पत्नी", "भगवान", "कुछ नहीं"],
        "answer_hi": "मंत्र",
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