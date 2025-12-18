const questions = [
    {
        "num": 1,
        "question_hi": "विद्याधनम् के कवि कौन हैं?",
        "question_sanskrit": "विद्याधनस्य कविः कः अस्ति?",
        "options_hi": ["भर्तृहरिः", "कालिदासः", "भासः", "बाणभट्टः"],
        "options_sanskrit": ["भर्तृहरिः", "कालिदासः", "भासः", "बाणभट्टः"],
        "answer_hi": "भर्तृहरिः",
        "answer_sanskrit": "भर्तृहरिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "विद्याधनम् किस ग्रन्थ का भाग है?",
        "question_sanskrit": "विद्याधनं कस्य ग्रन्थस्य भागः अस्ति?",
        "options_hi": ["शतकत्रयम्", "रघुवंशम्", "कुमारसम्भवम्", "मेघदूतम्"],
        "options_sanskrit": ["शतकत्रयम्", "रघुवंशम्", "कुमारसम्भवम्", "मेघदूतम्"],
        "answer_hi": "शतकत्रयम्",
        "answer_sanskrit": "शतकत्रयम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "शतकत्रय में कितने शतक हैं?",
        "question_sanskrit": "शतकत्रये कति शतकानि सन्ति?",
        "options_hi": ["तीन", "चार", "पाँच", "सात"],
        "options_sanskrit": ["त्रीणि", "चत्वारि", "पञ्च", "सप्त"],
        "answer_hi": "तीन",
        "answer_sanskrit": "त्रीणि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "विद्याधनम् किस शतक में आता है?",
        "question_sanskrit": "विद्याधनं कस्मिन् शतके अन्तर्भवति?",
        "options_hi": ["नीतिशतकम्", "शृङ्गारशतकम्", "वैराग्यशतकम्", "सर्वशतकम्"],
        "options_sanskrit": ["नीतिशतकम्", "शृङ्गारशतकम्", "वैराग्यशतकम्", "सर्वशतकम्"],
        "answer_hi": "नीतिशतकम्",
        "answer_sanskrit": "नीतिशतकम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "'विद्या नाम नरस्य रूपमधिकम्' इसका क्या अर्थ है?",
        "question_sanskrit": "'विद्या नाम नरस्य रूपमधिकम्' इत्यस्य कः अर्थः?",
        "options_hi": ["विद्या मनुष्य का सबसे सुन्दर रूप है", "विद्या से धन मिलता है", "विद्या कठिन है", "विद्या सीखनी चाहिए"],
        "options_sanskrit": ["विद्या मनुष्यस्य सुन्दरतमं रूपम् अस्ति", "विद्यया धनं प्राप्यते", "विद्या कठिना अस्ति", "विद्या अधीतव्या"],
        "answer_hi": "विद्या मनुष्य का सबसे सुन्दर रूप है",
        "answer_sanskrit": "विद्या मनुष्यस्य सुन्दरतमं रूपम् अस्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "'विद्याविहीनः पशुः' इस पंक्ति का क्या अर्थ है?",
        "question_sanskrit": "'विद्याविहीनः पशुः' इत्यस्य पंक्तेः कः अर्थः?",
        "options_hi": ["विद्याहीन व्यक्ति पशु के समान है", "विद्या पशुओं के लिए नहीं है", "पशु विद्याहीन होते हैं", "विद्या से पशु दूर रहते हैं"],
        "options_sanskrit": ["विद्याहीनः जनः पशुतुल्यः अस्ति", "विद्या पशुभ्यः न अस्ति", "पशवः विद्याहीनाः भवन्ति", "विद्यया पशवः दूरं तिष्ठन्ति"],
        "answer_hi": "विद्याहीन व्यक्ति पशु के समान है",
        "answer_sanskrit": "विद्याहीनः जनः पशुतुल्यः अस्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "विद्या की क्या विशेषता बताई गई है?",
        "question_sanskrit": "विद्यायाः का विशेषता उक्ता अस्ति?",
        "options_hi": ["अजरामरा", "सस्ता", "भारी", "दुर्लभ"],
        "options_sanskrit": ["अजरामरा", "सुलभा", "गुरुः", "दुर्लभा"],
        "answer_hi": "अजरामरा",
        "answer_sanskrit": "अजरामरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "'विद्याधनं सर्वधनप्रधानम्' का अर्थ है?",
        "question_sanskrit": "'विद्याधनं सर्वधनप्रधानम्' इत्यस्य कः अर्थः?",
        "options_hi": ["विद्यारूपी धन सभी धनों में श्रेष्ठ है", "विद्या से धन आता है", "सभी धन विद्या से मिलते हैं", "विद्या महँगी है"],
        "options_sanskrit": ["विद्यारूपं धनं सर्वेषां धनानां श्रेष्ठम् अस्ति", "विद्यया धनं आगच्छति", "सर्वाणि धनानि विद्यया प्राप्यन्ते", "विद्या महार्घा अस्ति"],
        "answer_hi": "विद्यारूपी धन सभी धनों में श्रेष्ठ है",
        "answer_sanskrit": "विद्यारूपं धनं सर्वेषां धनानां श्रेष्ठम् अस्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "विद्या किसके समान उज्ज्वल है?",
        "question_sanskrit": "विद्या कस्य इव उज्ज्वला अस्ति?",
        "options_hi": ["सूर्य के समान", "चन्द्रमा के समान", "अग्नि के समान", "विद्युत के समान"],
        "options_sanskrit": ["सूर्यस्य इव", "चन्द्रस्य इव", "अग्नेः इव", "विद्युतः इव"],
        "answer_hi": "सूर्य के समान",
        "answer_sanskrit": "सूर्यस्य इव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "विद्या की उपमा किससे दी गई है?",
        "question_sanskrit": "विद्यायाः उपमा केन सह दत्ता अस्ति?",
        "options_hi": ["गुप्तधन", "खुला खजाना", "आभूषण", "वस्त्र"],
        "options_sanskrit": ["गुप्तधन", "विवृतनिधि", "आभरण", "वस्त्र"],
        "answer_hi": "गुप्तधन",
        "answer_sanskrit": "गुप्तधन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "'विद्या ददाति विनयम्' के अनुसार विद्या क्या देती है?",
        "question_sanskrit": "'विद्या ददाति विनयम्' इति अनुसारं विद्या किं ददाति?",
        "options_hi": ["विनय", "धन", "यश", "बल"],
        "options_sanskrit": ["विनयम्", "धनम्", "यशः", "बलम्"],
        "answer_hi": "विनय",
        "answer_sanskrit": "विनयम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "विद्या से क्या प्राप्त होता है?",
        "question_sanskrit": "विद्यया किं प्राप्यते?",
        "options_hi": ["विनय", "क्रोध", "अहंकार", "आलस्य"],
        "options_sanskrit": ["विनयम्", "क्रोधः", "अहंकारः", "आलस्यम्"],
        "answer_hi": "विनय",
        "answer_sanskrit": "विनयम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "विद्यावान व्यक्ति की क्या पहचान है?",
        "question_sanskrit": "विद्यावतः व्यक्तेः का पहचान अस्ति?",
        "options_hi": ["विनयशीलता", "धन", "शक्ति", "सुन्दरता"],
        "options_sanskrit": ["विनयशीलता", "धनम्", "शक्तिः", "सुन्दरता"],
        "answer_hi": "विनयशीलता",
        "answer_sanskrit": "विनयशीलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "विद्या कहाँ शोभा देती है?",
        "question_sanskrit": "विद्या कुत्र शोभां ददाति?",
        "options_hi": ["कुल में", "जंगल में", "समुद्र में", "पर्वत में"],
        "options_sanskrit": ["कुले", "वने", "समुद्रे", "पर्वते"],
        "answer_hi": "कुल में",
        "answer_sanskrit": "कुले",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "'कुलं विद्याधनैर्विना' का क्या अर्थ है?",
        "question_sanskrit": "'कुलं विद्याधनैर्विना' इत्यस्य कः अर्थः?",
        "options_hi": ["विद्या के बिना कुल व्यर्थ है", "कुल बड़ा होना चाहिए", "विद्या कुल में होती है", "धन से कुल बनता है"],
        "options_sanskrit": ["विद्यां विना कुलं निष्फलम् अस्ति", "कुलं बृहत् भवेत्", "विद्या कुले भवति", "धनेन कुलं निर्मीयते"],
        "answer_hi": "विद्या के बिना कुल व्यर्थ है",
        "answer_sanskrit": "विद्यां विना कुलं निष्फलम् अस्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "विद्या की क्या प्रकृति है?",
        "question_sanskrit": "विद्यायाः का प्रकृतिः अस्ति?",
        "options_hi": ["अक्षय", "क्षयशील", "भारी", "हल्की"],
        "options_sanskrit": ["अक्षया", "क्षयशीला", "गुरुः", "लघुः"],
        "answer_hi": "अक्षय",
        "answer_sanskrit": "अक्षया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "विद्या कब बढ़ती है?",
        "question_sanskrit": "विद्या कदा वर्धते?",
        "options_hi": ["वितरण से", "संग्रह से", "छिपाने से", "भूलने से"],
        "options_sanskrit": ["वितरणेन", "संग्रहेण", "गोपनेन", "विस्मरणेन"],
        "answer_hi": "वितरण से",
        "answer_sanskrit": "वितरणेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "विद्या का उपभोग करने से क्या होता है?",
        "question_sanskrit": "विद्यायाः उपभोगं कृत्वा किं भवति?",
        "options_hi": ["बढ़ती है", "घटती है", "समाप्त हो जाती है", "व्यर्थ हो जाती है"],
        "options_sanskrit": ["वर्धते", "ह्रसते", "समाप्यते", "व्यर्थं भवति"],
        "answer_hi": "बढ़ती है",
        "answer_sanskrit": "वर्धते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "विद्या किस प्रकार का धन है?",
        "question_sanskrit": "विद्या कथं प्रकारस्य धनम् अस्ति?",
        "options_hi": ["विशेष", "साधारण", "अनुपयोगी", "अस्थायी"],
        "options_sanskrit": ["विशेषम्", "सामान्यम्", "अनुपयोगि", "अस्थायि"],
        "answer_hi": "विशेष",
        "answer_sanskrit": "विशेषम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "विद्या से कौन-सा गुण आता है?",
        "question_sanskrit": "विद्यया कः गुणः आगच्छति?",
        "options_hi": ["विनय", "क्रूरता", "लोभ", "मोह"],
        "options_sanskrit": ["विनयः", "क्रूरता", "लोभः", "मोहः"],
        "answer_hi": "विनय",
        "answer_sanskrit": "विनयः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "विद्या किसे सुशोभित करती है?",
        "question_sanskrit": "विद्या कं सुशोभयति?",
        "options_hi": ["नीच को भी", "केवल राजा को", "केवल ब्राह्मण को", "केवल धनी को"],
        "options_sanskrit": ["नीचं अपि", "केवलं राजानम्", "केवलं ब्राह्मणम्", "केवलं धनिकम्"],
        "answer_hi": "नीच को भी",
        "answer_sanskrit": "नीचं अपि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "विद्याहीन व्यक्ति किसके समान है?",
        "question_sanskrit": "विद्याहीनः व्यक्तिः कस्य समानः अस्ति?",
        "options_hi": ["पशु के", "देवता के", "पक्षी के", "वृक्ष के"],
        "options_sanskrit": ["पशोः", "देवस्य", "पक्षिणः", "वृक्षस्य"],
        "answer_hi": "पशु के",
        "answer_sanskrit": "पशोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "विद्या क्या प्रदान करती है?",
        "question_sanskrit": "विद्या किं प्रयच्छति?",
        "options_hi": ["यश", "अपयश", "दुःख", "कष्ट"],
        "options_sanskrit": ["यशः", "अपयशः", "दुःखम्", "कष्टम्"],
        "answer_hi": "यश",
        "answer_sanskrit": "यशः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "विद्या से क्या मिलता है?",
        "question_sanskrit": "विद्यया किं लभ्यते?",
        "options_hi": ["सुख", "दुःख", "रोग", "शोक"],
        "options_sanskrit": ["सुखम्", "दुःखम्", "रोगः", "शोकः"],
        "answer_hi": "सुख",
        "answer_sanskrit": "सुखम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "'विद्या विहीनस्य देहिनः' के अनुसार विद्याहीन का क्या होता है?",
        "question_sanskrit": "'विद्या विहीनस्य देहिनः' इति अनुसारं विद्याहीनस्य किं भवति?",
        "options_hi": ["जीवन व्यर्थ", "जीवन सफल", "धनवान", "सुखी"],
        "options_sanskrit": ["जीवनं व्यर्थम्", "जीवनं सफलम्", "धनवान्", "सुखी"],
        "answer_hi": "जीवन व्यर्थ",
        "answer_sanskrit": "जीवनं व्यर्थम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "विद्या किसकी शोभा है?",
        "question_sanskrit": "विद्या कस्य शोभा अस्ति?",
        "options_hi": ["मनुष्य की", "पशु की", "पक्षी की", "वृक्ष की"],
        "options_sanskrit": ["मनुष्यस्य", "पशोः", "पक्षिणः", "वृक्षस्य"],
        "answer_hi": "मनुष्य की",
        "answer_sanskrit": "मनुष्यस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "विद्या की तुलना किससे की गई है?",
        "question_sanskrit": "विद्यायाः तुलना केन सह कृता अस्ति?",
        "options_hi": ["अमृत", "विष", "जल", "अग्नि"],
        "options_sanskrit": ["अमृतेन", "विषेण", "जलेन", "अग्निना"],
        "answer_hi": "अमृत",
        "answer_sanskrit": "अमृतेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "विद्या क्या नहीं करती?",
        "question_sanskrit": "विद्या किं न करोति?",
        "options_hi": ["क्षय", "वृद्धि", "दान", "लाभ"],
        "options_sanskrit": ["क्षयम्", "वृद्धिम्", "दानम्", "लाभम्"],
        "answer_hi": "क्षय",
        "answer_sanskrit": "क्षयम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "विद्या का स्वभाव कैसा है?",
        "question_sanskrit": "विद्यायाः स्वभावः कीदृशः अस्ति?",
        "options_hi": ["अक्षय", "क्षयशील", "भारी", "हल्का"],
        "options_sanskrit": ["अक्षयः", "क्षयशीलः", "गुरुः", "लघुः"],
        "answer_hi": "अक्षय",
        "answer_sanskrit": "अक्षयः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "विद्या किसे महान बनाती है?",
        "question_sanskrit": "विद्या कं महान्तं करोति?",
        "options_hi": ["निर्धन को भी", "केवल राजा को", "केवल ब्राह्मण को", "केवल योद्धा को"],
        "options_sanskrit": ["निर्धनं अपि", "केवलं राजानम्", "केवलं ब्राह्मणम्", "केवलं योद्धारम्"],
        "answer_hi": "निर्धन को भी",
        "answer_sanskrit": "निर्धनं अपि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "विद्या कहाँ चमकती है?",
        "question_sanskrit": "विद्या कुत्र दीप्यते?",
        "options_hi": ["विदेश में भी", "केवल घर में", "केवल गाँव में", "केवल नगर में"],
        "options_sanskrit": ["विदेशे अपि", "केवलं गृहे", "केवलं ग्रामे", "केवलं नगरे"],
        "answer_hi": "विदेश में भी",
        "answer_sanskrit": "विदेशे अपि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "विद्या का महत्व कब पता चलता है?",
        "question_sanskrit": "विद्यायाः महत्त्वं कदा ज्ञायते?",
        "options_hi": ["विदेश में", "घर में", "जंगल में", "पर्वत पर"],
        "options_sanskrit": ["विदेशे", "गृहे", "वने", "पर्वते"],
        "answer_hi": "विदेश में",
        "answer_sanskrit": "विदेशे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "विद्या किसकी साथी है?",
        "question_sanskrit": "विद्या कस्य सखी अस्ति?",
        "options_hi": ["मनुष्य की", "पशु की", "देवता की", "राक्षस की"],
        "options_sanskrit": ["मनुष्यस्य", "पशोः", "देवस्य", "राक्षसस्य"],
        "answer_hi": "मनुष्य की",
        "answer_sanskrit": "मनुष्यस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "विद्या कब काम आती है?",
        "question_sanskrit": "विद्या कदा उपयुज्यते?",
        "options_hi": ["संकट में", "सुख में", "निद्रा में", "भोजन में"],
        "options_sanskrit": ["संकटे", "सुखे", "निद्रायाम्", "भोजने"],
        "answer_hi": "संकट में",
        "answer_sanskrit": "संकटे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "विद्या से क्या नष्ट होता है?",
        "question_sanskrit": "विद्यया किं नश्यति?",
        "options_hi": ["अज्ञान", "ज्ञान", "धन", "यश"],
        "options_sanskrit": ["अज्ञानम्", "ज्ञानम्", "धनम्", "यशः"],
        "answer_hi": "अज्ञान",
        "answer_sanskrit": "अज्ञानम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "विद्या किस प्रकार की सम्पत्ति है?",
        "question_sanskrit": "विद्या कथं प्रकारस्य सम्पत्तिः अस्ति?",
        "options_hi": ["चोरी न जाने वाली", "चोरी जाने वाली", "भारी", "हल्की"],
        "options_sanskrit": ["अपहार्य", "पहार्य", "गुरुः", "लघुः"],
        "answer_hi": "चोरी न जाने वाली",
        "answer_sanskrit": "अपहार्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "विद्या का वितरण करने से क्या होता है?",
        "question_sanskrit": "विद्यायाः वितरणं कृत्वा किं भवति?",
        "options_hi": ["बढ़ती है", "घटती है", "समाप्त हो जाती है", "व्यर्थ हो जाती है"],
        "options_sanskrit": ["वर्धते", "ह्रसते", "समाप्यते", "व्यर्थं भवति"],
        "answer_hi": "बढ़ती है",
        "answer_sanskrit": "वर्धते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "विद्या किसे नहीं छोड़ती?",
        "question_sanskrit": "विद्या कं न त्यजति?",
        "options_hi": ["सेवक को", "राजा को", "धनी को", "योद्धा को"],
        "options_sanskrit": ["सेवकम्", "राजानम्", "धनिकम्", "योद्धारम्"],
        "answer_hi": "सेवक को",
        "answer_sanskrit": "सेवकम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "विद्या क्या दूर करती है?",
        "question_sanskrit": "विद्या किं दूरीकरोति?",
        "options_hi": ["दरिद्रता", "धन", "यश", "सुख"],
        "options_sanskrit": ["दरिद्रताम्", "धनम्", "यशः", "सुखम्"],
        "answer_hi": "दरिद्रता",
        "answer_sanskrit": "दरिद्रताम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "विद्या से क्या प्रकट होता है?",
        "question_sanskrit": "विद्यया किं प्रकटीभवति?",
        "options_hi": ["गुण", "दोष", "क्रोध", "लोभ"],
        "options_sanskrit": ["गुणः", "दोषः", "क्रोधः", "लोभः"],
        "answer_hi": "गुण",
        "answer_sanskrit": "गुणः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "'विद्या विनयेन शोभते' का क्या अर्थ है?",
        "question_sanskrit": "'विद्या विनयेन शोभते' इत्यस्य कः अर्थः?",
        "options_hi": ["विद्या विनय से शोभा पाती है", "विद्या बिना विनय के शोभित होती है", "विद्या और विनय अलग हैं", "विनय बिना विद्या शोभित होती है"],
        "options_sanskrit": ["विद्या विनयेन शोभां प्राप्नोति", "विद्या विनयं विना शोभते", "विद्या विनयः च पृथक् स्तः", "विनयः विद्यां विना शोभते"],
        "answer_hi": "विद्या विनय से शोभा पाती है",
        "answer_sanskrit": "विद्या विनयेन शोभां प्राप्नोति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "विद्या किसका आभूषण है?",
        "question_sanskrit": "विद्या कस्य आभरणम् अस्ति?",
        "options_hi": ["मनुष्य का", "पशु का", "पक्षी का", "देवता का"],
        "options_sanskrit": ["मनुष्यस्य", "पशोः", "पक्षिणः", "देवस्य"],
        "answer_hi": "मनुष्य का",
        "answer_sanskrit": "मनुष्यस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "विद्या से क्या प्राप्त किया जा सकता है?",
        "question_sanskrit": "विद्यया किं प्राप्तुं शक्यते?",
        "options_hi": ["सब कुछ", "कुछ नहीं", "केवल धन", "केवल यश"],
        "options_sanskrit": ["सर्वम्", "किमपि न", "केवलं धनम्", "केवलं यशः"],
        "answer_hi": "सब कुछ",
        "answer_sanskrit": "सर्वम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "विद्या किस प्रकार की है?",
        "question_sanskrit": "विद्या कीदृशी अस्ति?",
        "options_hi": ["अमूल्य", "मूल्यहीन", "सस्ती", "महँगी"],
        "options_sanskrit": ["अमूल्या", "मूल्यहीना", "सुलभा", "महार्घा"],
        "answer_hi": "अमूल्य",
        "answer_sanskrit": "अमूल्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "विद्या का संग्रह कैसे करना चाहिए?",
        "question_sanskrit": "विद्यायाः संग्रहः कथं कर्तव्यः?",
        "options_hi": ["लगन से", "आलस्य से", "क्रोध से", "लोभ से"],
        "options_sanskrit": ["लग्नया", "आलस्येन", "क्रोधेन", "लोभेन"],
        "answer_hi": "लगन से",
        "answer_sanskrit": "लग्नया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "विद्या कब फल देती है?",
        "question_sanskrit": "विद्या कदा फलं ददाति?",
        "options_hi": ["समय आने पर", "तुरंत", "कभी नहीं", "हमेशा"],
        "options_sanskrit": ["समये आगते", "तत्क्षणम्", "कदापि न", "सदैव"],
        "answer_hi": "समय आने पर",
        "answer_sanskrit": "समये आगते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "विद्या से क्या बढ़ता है?",
        "question_sanskrit": "विद्यया किं वर्धते?",
        "options_hi": ["ज्ञान", "अज्ञान", "क्रोध", "लोभ"],
        "options_sanskrit": ["ज्ञानम्", "अज्ञानम्", "क्रोधः", "लोभः"],
        "answer_hi": "ज्ञान",
        "answer_sanskrit": "ज्ञानम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "विद्या किसका सहारा है?",
        "question_sanskrit": "विद्या कस्य सहारः अस्ति?",
        "options_hi": ["निर्धन का", "धनी का", "राजा का", "सभी का"],
        "options_sanskrit": ["निर्धनस्य", "धनिकस्य", "राज्ञः", "सर्वेषाम्"],
        "answer_hi": "निर्धन का",
        "answer_sanskrit": "निर्धनस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "विद्या क्या लाती है?",
        "question_sanskrit": "विद्या किं आनयति?",
        "options_hi": ["मान-सम्मान", "अपमान", "दुःख", "कष्ट"],
        "options_sanskrit": ["मान-सम्मानम्", "अपमानम्", "दुःखम्", "कष्टम्"],
        "answer_hi": "मान-सम्मान",
        "answer_sanskrit": "मान-सम्मानम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "विद्या किसे उज्ज्वल करती है?",
        "question_sanskrit": "विद्या कं उज्ज्वलं करोति?",
        "options_hi": ["कुल को", "व्यक्ति को", "देश को", "सभी को"],
        "options_sanskrit": ["कुलम्", "व्यक्तिम्", "देशम्", "सर्वान्"],
        "answer_hi": "कुल को",
        "answer_sanskrit": "कुलम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "'विद्या सर्वत्र पूज्यते' का क्या अर्थ है?",
        "question_sanskrit": "'विद्या सर्वत्र पूज्यते' इत्यस्य कः अर्थः?",
        "options_hi": ["विद्या सब जगह पूजी जाती है", "विद्या कहीं नहीं पूजी जाती", "विद्या केवल भारत में पूजी जाती है", "विद्या पूजा योग्य नहीं है"],
        "options_sanskrit": ["विद्या सर्वत्र पूजां प्राप्नोति", "विद्या कुत्रापि न पूज्यते", "विद्या केवलं भारते पूज्यते", "विद्या पूजार्हा न अस्ति"],
        "answer_hi": "विद्या सब जगह पूजी जाती है",
        "answer_sanskrit": "विद्या सर्वत्र पूजां प्राप्नोति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "विद्या किसकी कुंजी है?",
        "question_sanskrit": "विद्या कस्य कुञ्जिका अस्ति?",
        "options_hi": ["सफलता की", "असफलता की", "धन की", "यश की"],
        "options_sanskrit": ["सफलतायाः", "असफलतायाः", "धनस्य", "यशः"],
        "answer_hi": "सफलता की",
        "answer_sanskrit": "सफलतायाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "विद्या से क्या समाप्त होता है?",
        "question_sanskrit": "विद्यया किं समाप्यते?",
        "options_hi": ["अंधकार", "प्रकाश", "धन", "यश"],
        "options_sanskrit": ["अन्धकारः", "प्रकाशः", "धनम्", "यशः"],
        "answer_hi": "अंधकार",
        "answer_sanskrit": "अन्धकारः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "विद्या किसका मार्गदर्शन करती है?",
        "question_sanskrit": "विद्या कस्य मार्गदर्शनं करोति?",
        "options_hi": ["मनुष्य का", "पशु का", "पक्षी का", "सभी का"],
        "options_sanskrit": ["मनुष्यस्य", "पशोः", "पक्षिणः", "सर्वेषाम्"],
        "answer_hi": "मनुष्य का",
        "answer_sanskrit": "मनुष्यस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "विद्या किस प्रकार की संपत्ति है?",
        "question_sanskrit": "विद्या कथं प्रकारस्य सम्पत्तिः अस्ति?",
        "options_hi": ["दिव्य", "सांसारिक", "क्षणिक", "अस्थायी"],
        "options_sanskrit": ["दिव्या", "सांसारिकी", "क्षणिका", "अस्थायिनी"],
        "answer_hi": "दिव्य",
        "answer_sanskrit": "दिव्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "विद्या कब व्यर्थ होती है?",
        "question_sanskrit": "विद्या कदा व्यर्था भवति?",
        "options_hi": ["अविनय होने पर", "विनय होने पर", "धन होने पर", "यश होने पर"],
        "options_sanskrit": ["अविनये सति", "विनये सति", "धने सति", "यशः सति"],
        "answer_hi": "अविनय होने पर",
        "answer_sanskrit": "अविनये सति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "विद्या से क्या प्रकाशित होता है?",
        "question_sanskrit": "विद्यया किं प्रकाशितं भवति?",
        "options_hi": ["मन", "शरीर", "घर", "देश"],
        "options_sanskrit": ["मनः", "शरीरम्", "गृहम्", "देशम्"],
        "answer_hi": "मन",
        "answer_sanskrit": "मनः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "विद्या किसका गुरु है?",
        "question_sanskrit": "विद्या कस्य गुरुः अस्ति?",
        "options_hi": ["मनुष्य का", "पशु का", "पक्षी का", "देवता का"],
        "options_sanskrit": ["मनुष्यस्य", "पशोः", "पक्षिणः", "देवस्य"],
        "answer_hi": "मनुष्य का",
        "answer_sanskrit": "मनुष्यस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "विद्या से क्या सुरक्षित रहता है?",
        "question_sanskrit": "विद्यया किं सुरक्षितं तिष्ठति?",
        "options_hi": ["मान-सम्मान", "धन", "घर", "देश"],
        "options_sanskrit": ["मान-सम्मानम्", "धनम्", "गृहम्", "देशम्"],
        "answer_hi": "मान-सम्मान",
        "answer_sanskrit": "मान-सम्मानम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "विद्या किसका आधार है?",
        "question_sanskrit": "विद्या कस्य आधारः अस्ति?",
        "options_hi": ["जीवन का", "मृत्यु का", "धन का", "यश का"],
        "options_sanskrit": ["जीवनस्य", "मृत्योः", "धनस्य", "यशः"],
        "answer_hi": "जीवन का",
        "answer_sanskrit": "जीवनस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "विद्या से क्या मिलता है?",
        "question_sanskrit": "विद्यया किं प्राप्यते?",
        "options_hi": ["आत्मविश्वास", "आत्मसंदेह", "भय", "चिंता"],
        "options_sanskrit": ["आत्मविश्वासः", "आत्मसंदेहः", "भयम्", "चिन्ता"],
        "answer_hi": "आत्मविश्वास",
        "answer_sanskrit": "आत्मविश्वासः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "विद्या किस प्रकार की शक्ति है?",
        "question_sanskrit": "विद्या कथं प्रकारस्य शक्तिः अस्ति?",
        "options_hi": ["सर्वश्रेष्ठ", "साधारण", "कमजोर", "अस्थायी"],
        "options_sanskrit": ["सर्वश्रेष्ठा", "सामान्या", "दुर्बला", "अस्थायिनी"],
        "answer_hi": "सर्वश्रेष्ठ",
        "answer_sanskrit": "सर्वश्रेष्ठा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "विद्या किसे समान बनाती है?",
        "question_sanskrit": "विद्या कं समानं करोति?",
        "options_hi": ["सभी को", "केवल ब्राह्मण को", "केवल क्षत्रिय को", "केवल वैश्य को"],
        "options_sanskrit": ["सर्वान्", "केवलं ब्राह्मणम्", "केवलं क्षत्रियम्", "केवलं वैश्यम्"],
        "answer_hi": "सभी को",
        "answer_sanskrit": "सर्वान्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "विद्या से क्या दूर भागता है?",
        "question_sanskrit": "विद्यया किं दूरं धावति?",
        "options_hi": ["दरिद्रता", "धन", "यश", "सुख"],
        "options_sanskrit": ["दरिद्रता", "धनम्", "यशः", "सुखम्"],
        "answer_hi": "दरिद्रता",
        "answer_sanskrit": "दरिद्रता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "विद्या किसका मित्र है?",
        "question_sanskrit": "विद्या कस्य मित्रम् अस्ति?",
        "options_hi": ["मनुष्य का", "पशु का", "पक्षी का", "वृक्ष का"],
        "options_sanskrit": ["मनुष्यस्य", "पशोः", "पक्षिणः", "वृक्षस्य"],
        "answer_hi": "मनुष्य का",
        "answer_sanskrit": "मनुष्यस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "विद्या से क्या प्राप्त होता है?",
        "question_sanskrit": "विद्यया किं प्राप्यते?",
        "options_hi": ["शांति", "अशांति", "क्रोध", "लोभ"],
        "options_sanskrit": ["शान्तिः", "अशान्तिः", "क्रोधः", "लोभः"],
        "answer_hi": "शांति",
        "answer_sanskrit": "शान्तिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "विद्या किसका सहज गुण है?",
        "question_sanskrit": "विद्या कस्य सहजः गुणः अस्ति?",
        "options_hi": ["मनुष्य का", "पशु का", "पक्षी का", "देवता का"],
        "options_sanskrit": ["मनुष्यस्य", "पशोः", "पक्षिणः", "देवस्य"],
        "answer_hi": "मनुष्य का",
        "answer_sanskrit": "मनुष्यस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "विद्या से क्या होता है?",
        "question_sanskrit": "विद्यया किं भवति?",
        "options_hi": ["उन्नति", "अवनति", "स्थिरता", "पतन"],
        "options_sanskrit": ["उन्नतिः", "अवनतिः", "स्थिरता", "पतनम्"],
        "answer_hi": "उन्नति",
        "answer_sanskrit": "उन्नतिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "विद्या किस प्रकार की वस्तु है?",
        "question_sanskrit": "विद्या कथं प्रकारस्य वस्तु अस्ति?",
        "options_hi": ["अनुपम", "साधारण", "घटिया", "मामूली"],
        "options_sanskrit": ["अनुपमा", "सामान्या", "निकृष्टा", "साधारणा"],
        "answer_hi": "अनुपम",
        "answer_sanskrit": "अनुपमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "विद्या से क्या मिटता है?",
        "question_sanskrit": "विद्यया किं म्लायति?",
        "options_hi": ["अज्ञान", "ज्ञान", "धन", "यश"],
        "options_sanskrit": ["अज्ञानम्", "ज्ञानम्", "धनम्", "यशः"],
        "answer_hi": "अज्ञान",
        "answer_sanskrit": "अज्ञानम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "विद्या किसका प्रकाश है?",
        "question_sanskrit": "विद्या कस्य प्रकाशः अस्ति?",
        "options_hi": ["जीवन का", "मृत्यु का", "अंधकार का", "रात का"],
        "options_sanskrit": ["जीवनस्य", "मृत्योः", "अन्धकारस्य", "रात्रेः"],
        "answer_hi": "जीवन का",
        "answer_sanskrit": "जीवनस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "विद्या से क्या प्रगट होता है?",
        "question_sanskrit": "विद्यया किं प्रगटीभवति?",
        "options_hi": ["बुद्धि", "मूर्खता", "क्रोध", "लोभ"],
        "options_sanskrit": ["बुद्धिः", "मूर्खता", "क्रोधः", "लोभः"],
        "answer_hi": "बुद्धि",
        "answer_sanskrit": "बुद्धिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "विद्या किसका भूषण है?",
        "question_sanskrit": "विद्या कस्य भूषणम् अस्ति?",
        "options_hi": ["मनुष्य का", "पशु का", "पक्षी का", "देवता का"],
        "options_sanskrit": ["मनुष्यस्य", "पशोः", "पक्षिणः", "देवस्य"],
        "answer_hi": "मनुष्य का",
        "answer_sanskrit": "मनुष्यस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "विद्या से क्या होता है?",
        "question_sanskrit": "विद्यया किं भवति?",
        "options_hi": ["समृद्धि", "दरिद्रता", "कंगाली", "निर्धनता"],
        "options_sanskrit": ["समृद्धिः", "दरिद्रता", "कंगाली", "निर्धनता"],
        "answer_hi": "समृद्धि",
        "answer_sanskrit": "समृद्धिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "विद्या किस प्रकार की है?",
        "question_sanskrit": "विद्या कीदृशी अस्ति?",
        "options_hi": ["अनन्त", "सीमित", "छोटी", "थोड़ी"],
        "options_sanskrit": ["अनन्ता", "सीमिता", "लघुः", "अल्पा"],
        "answer_hi": "अनन्त",
        "answer_sanskrit": "अनन्ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "विद्या से क्या बनता है?",
        "question_sanskrit": "विद्यया किं भवति?",
        "options_hi": ["महान", "नीच", "साधारण", "अज्ञ"],
        "options_sanskrit": ["महान्", "नीचः", "साधारणः", "अज्ञः"],
        "answer_hi": "महान",
        "answer_sanskrit": "महान्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "विद्या किसका साथ नहीं छोड़ती?",
        "question_sanskrit": "विद्या कस्य साहचर्यं न त्यजति?",
        "options_hi": ["मनुष्य का", "पशु का", "पक्षी का", "वृक्ष का"],
        "options_sanskrit": ["मनुष्यस्य", "पशोः", "पक्षिणः", "वृक्षस्य"],
        "answer_hi": "मनुष्य का",
        "answer_sanskrit": "मनुष्यस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "विद्या से क्या प्राप्त होता है?",
        "question_sanskrit": "विद्यया किं प्राप्यते?",
        "options_hi": ["आदर", "अपमान", "तिरस्कार", "उपेक्षा"],
        "options_sanskrit": ["आदरः", "अपमानः", "तिरस्कारः", "उपेक्षा"],
        "answer_hi": "आदर",
        "answer_sanskrit": "आदरः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "विद्या किस प्रकार की है?",
        "question_sanskrit": "विद्या कीदृशी अस्ति?",
        "options_hi": ["सर्वगुणसम्पन्न", "गुणहीन", "अपूर्ण", "अधूरी"],
        "options_sanskrit": ["सर्वगुणसम्पन्ना", "गुणहीना", "अपूर्णा", "अधूरा"],
        "answer_hi": "सर्वगुणसम्पन्न",
        "answer_sanskrit": "सर्वगुणसम्पन्ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "विद्या से क्या होता है?",
        "question_sanskrit": "विद्यया किं भवति?",
        "options_hi": ["कीर्ति", "अपकीर्ति", "बदनामी", "अपयश"],
        "options_sanskrit": ["कीर्तिः", "अपकीर्तिः", "बदनामी", "अपयशः"],
        "answer_hi": "कीर्ति",
        "answer_sanskrit": "कीर्तिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "विद्या किसका धन है?",
        "question_sanskrit": "विद्या कस्य धनम् अस्ति?",
        "options_hi": ["मनुष्य का", "पशु का", "पक्षी का", "देवता का"],
        "options_sanskrit": ["मनुष्यस्य", "पशोः", "पक्षिणः", "देवस्य"],
        "answer_hi": "मनुष्य का",
        "answer_sanskrit": "मनुष्यस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "विद्या से क्या मिलता है?",
        "question_sanskrit": "विद्यया किं लभ्यते?",
        "options_hi": ["समाधान", "असमाधान", "चिंता", "भय"],
        "options_sanskrit": ["समाधानम्", "असमाधानम्", "चिन्ता", "भयम्"],
        "answer_hi": "समाधान",
        "answer_sanskrit": "समाधानम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "विद्या किस प्रकार की है?",
        "question_sanskrit": "विद्या कीदृशी अस्ति?",
        "options_hi": ["अमर", "नश्वर", "क्षणभंगुर", "अस्थायी"],
        "options_sanskrit": ["अमरा", "नश्वरा", "क्षणभंगुरा", "अस्थायिनी"],
        "answer_hi": "अमर",
        "answer_sanskrit": "अमरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "विद्या से क्या प्रकाशित होता है?",
        "question_sanskrit": "विद्यया किं प्रकाशितं भवति?",
        "options_hi": ["चरित्र", "दोष", "अवगुण", "कमजोरी"],
        "options_sanskrit": ["चरित्रम्", "दोषः", "अवगुणः", "दौर्बल्यम्"],
        "answer_hi": "चरित्र",
        "answer_sanskrit": "चरित्रम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "विद्या किसका मूल है?",
        "question_sanskrit": "विद्या कस्य मूलम् अस्ति?",
        "options_hi": ["सफलता का", "असफलता का", "दरिद्रता का", "अज्ञान का"],
        "options_sanskrit": ["सफलतायाः", "असफलतायाः", "दरिद्रतायाः", "अज्ञानस्य"],
        "answer_hi": "सफलता का",
        "answer_sanskrit": "सफलतायाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "विद्या से क्या होता है?",
        "question_sanskrit": "विद्यया किं भवति?",
        "options_hi": ["उत्कर्ष", "अपकर्ष", "पतन", "विनाश"],
        "options_sanskrit": ["उत्कर्षः", "अपकर्षः", "पतनम्", "विनाशः"],
        "answer_hi": "उत्कर्ष",
        "answer_sanskrit": "उत्कर्षः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "विद्या किस प्रकार की है?",
        "question_sanskrit": "विद्या कीदृशी अस्ति?",
        "options_hi": ["सर्वोत्तम", "निम्न", "मध्यम", "अधम"],
        "options_sanskrit": ["सर्वोत्तमा", "निम्ना", "मध्यमा", "अधमा"],
        "answer_hi": "सर्वोत्तम",
        "answer_sanskrit": "सर्वोत्तमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "विद्या से क्या मिलता है?",
        "question_sanskrit": "विद्यया किं प्राप्यते?",
        "options_hi": ["सद्बुद्धि", "कुबुद्धि", "मूर्खता", "अज्ञान"],
        "options_sanskrit": ["सद्बुद्धिः", "कुबुद्धिः", "मूर्खता", "अज्ञानम्"],
        "answer_hi": "सद्बुद्धि",
        "answer_sanskrit": "सद्बुद्धिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "विद्या किसका आधार है?",
        "question_sanskrit": "विद्या कस्य आधारः अस्ति?",
        "options_hi": ["संस्कृति का", "असंस्कृति का", "बर्बरता का", "अज्ञान का"],
        "options_sanskrit": ["संस्कृतेः", "असंस्कृतेः", "बर्बरतायाः", "अज्ञानस्य"],
        "answer_hi": "संस्कृति का",
        "answer_sanskrit": "संस्कृतेः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "विद्या से क्या होता है?",
        "question_sanskrit": "विद्यया किं भवति?",
        "options_hi": ["विकास", "अवनति", "स्तब्धता", "गिरावट"],
        "options_sanskrit": ["विकासः", "अवनतिः", "स्तब्धता", "गिरावट"],
        "answer_hi": "विकास",
        "answer_sanskrit": "विकासः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "विद्या किस प्रकार की है?",
        "question_sanskrit": "विद्या कीदृशी अस्ति?",
        "options_hi": ["सर्वकालिक", "कालसापेक्ष", "अस्थायी", "क्षणिक"],
        "options_sanskrit": ["सर्वकालिका", "कालसापेक्षा", "अस्थायिनी", "क्षणिका"],
        "answer_hi": "सर्वकालिक",
        "answer_sanskrit": "सर्वकालिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "विद्या से क्या मिलता है?",
        "question_sanskrit": "विद्यया किं लभ्यते?",
        "options_hi": ["आत्मसंतुष्टि", "आत्मअसंतुष्टि", "निराशा", "हताशा"],
        "options_sanskrit": ["आत्मसंतुष्टिः", "आत्मअसंतुष्टिः", "निराशा", "हताशा"],
        "answer_hi": "आत्मसंतुष्टि",
        "answer_sanskrit": "आत्मसंतुष्टिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "विद्या किसका प्रतीक है?",
        "question_sanskrit": "विद्या कस्य प्रतीकः अस्ति?",
        "options_hi": ["ज्ञान का", "अज्ञान का", "अंधकार का", "मोह का"],
        "options_sanskrit": ["ज्ञानस्य", "अज्ञानस्य", "अन्धकारस्य", "मोहस्य"],
        "answer_hi": "ज्ञान का",
        "answer_sanskrit": "ज्ञानस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "विद्या से क्या होता है?",
        "question_sanskrit": "विद्यया किं भवति?",
        "options_hi": ["प्रतिष्ठा", "अपप्रतिष्ठा", "बेइज्जती", "अपमान"],
        "options_sanskrit": ["प्रतिष्ठा", "अपप्रतिष्ठा", "बेइज्जती", "अपमानः"],
        "answer_hi": "प्रतिष्ठा",
        "answer_sanskrit": "प्रतिष्ठा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "विद्या किस प्रकार की है?",
        "question_sanskrit": "विद्या कीदृशी अस्ति?",
        "options_hi": ["सर्वव्यापी", "सीमित", "संकुचित", "थोड़ी"],
        "options_sanskrit": ["सर्वव्यापिनी", "सीमिता", "संकुचिता", "अल्पा"],
        "answer_hi": "सर्वव्यापी",
        "answer_sanskrit": "सर्वव्यापिनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "विद्या से क्या मिलता है?",
        "question_sanskrit": "विद्यया किं प्राप्यते?",
        "options_hi": ["सामर्थ्य", "दुर्बलता", "असमर्थता", "निर्बलता"],
        "options_sanskrit": ["सामर्थ्यम्", "दुर्बलता", "असमर्थता", "निर्बलता"],
        "answer_hi": "सामर्थ्य",
        "answer_sanskrit": "सामर्थ्यम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "विद्या किसका स्रोत है?",
        "question_sanskrit": "विद्या कस्य स्रोतः अस्ति?",
        "options_hi": ["सभी सुखों का", "दुःखों का", "कष्टों का", "समस्याओं का"],
        "options_sanskrit": ["सर्वेषां सुखानां", "दुःखानां", "कष्टानां", "समस्यानां"],
        "answer_hi": "सभी सुखों का",
        "answer_sanskrit": "सर्वेषां सुखानां",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "विद्या से क्या होता है?",
        "question_sanskrit": "विद्यया किं भवति?",
        "options_hi": ["उज्ज्वल भविष्य", "अंधकारमय भविष्य", "दुःखद भविष्य", "असफल भविष्य"],
        "options_sanskrit": ["उज्ज्वलं भविष्यम्", "अन्धकारमयं भविष्यम्", "दुःखदं भविष्यम्", "असफलं भविष्यम्"],
        "answer_hi": "उज्ज्वल भविष्य",
        "answer_sanskrit": "उज्ज्वलं भविष्यम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "विद्या किस प्रकार की है?",
        "question_sanskrit": "विद्या कीदृशी अस्ति?",
        "options_hi": ["सर्वोपयोगी", "अनुपयोगी", "आंशिक उपयोगी", "सीमित उपयोगी"],
        "options_sanskrit": ["सर्वोपयोगिनी", "अनुपयोगिनी", "आंशिकोपयोगिनी", "सीमितोपयोगिनी"],
        "answer_hi": "सर्वोपयोगी",
        "answer_sanskrit": "सर्वोपयोगिनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "विद्या से क्या मिलता है?",
        "question_sanskrit": "विद्यया किं लभ्यते?",
        "options_hi": ["पूर्णता", "अपूर्णता", "अभाव", "कमी"],
        "options_sanskrit": ["पूर्णता", "अपूर्णता", "अभावः", "कमी"],
        "answer_hi": "पूर्णता",
        "answer_sanskrit": "पूर्णता",
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