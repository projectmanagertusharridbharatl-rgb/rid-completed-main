const questions = [
    {
        "num": 1,
        "question_hi": "पण्डितराजजगन्नाथः कः?",
        "options_hi": ["संस्कृतकविः", "राजा", "योद्धा", "वैज्ञानिकः"],
        "answer_hi": "संस्कृतकविः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "पण्डितराजजगन्नाथस्य जन्म कदा अभवत्?",
        "options_hi": ["१५९० ईसवीये", "१६५० ईसवीये", "१७०० ईसवीये", "१७५० ईसवीये"],
        "answer_hi": "१५९० ईसवीये",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "पण्डितराजजगन्नाथः कुत्र जन्म प्राप्तवान्?",
        "options_hi": ["बंगालप्रान्ते", "महाराष्ट्रे", "गुजराते", "तमिळनाडौ"],
        "answer_hi": "बंगालप्रान्ते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "पण्डितराजजगन्नाथस्य पितुः नाम किम्?",
        "options_hi": ["पेरुभट्टः", "रामभट्टः", "कृष्णभट्टः", "हरिभट्टः"],
        "answer_hi": "पेरुभट्टः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "पण्डितराजजगन्नाथस्य मातुः नाम किम्?",
        "options_hi": ["लक्ष्मीदेवी", "सरस्वतीदेवी", "गङ्गादेवी", "अज्ञातम्"],
        "answer_hi": "लक्ष्मीदेवी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "पण्डितराजजगन्नाथः कस्य राज्ञः सभाकविः आसीत्?",
        "options_hi": ["शाहजहाँ", "औरङ्गजेब", "अकबर", "जहाँगीर"],
        "answer_hi": "शाहजहाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "कर्मवीरकथा इति ग्रन्थः कस्य विषये अस्ति?",
        "options_hi": ["कर्मवीरस्य", "ज्ञानवीरस्य", "धर्मवीरस्य", "युद्धवीरस्य"],
        "answer_hi": "कर्मवीरस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "पण्डितराजजगन्नाथस्य प्रसिद्धः ग्रन्थः कः?",
        "options_hi": ["रसगङ्गाधरः", "अमरकोषः", "कुमारसम्भवः", "मेघदूतः"],
        "answer_hi": "रसगङ्गाधरः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "पण्डितराजजगन्नाथः कति भाषाणां ज्ञाता आसीत्?",
        "options_hi": ["अनेकानाम्", "एकस्याः", "द्वयोः", "त्रयाणाम्"],
        "answer_hi": "अनेकानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "कर्मवीरकथायाः रचनाकालः कः?",
        "options_hi": ["सप्तदशशतकम्", "षोडशशतकम्", "अष्टादशशतकम्", "नवदशशतकम्"],
        "answer_hi": "सप्तदशशतकम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "पण्डितराजजगन्नाथस्य गुरुः कः?",
        "options_hi": ["भट्टोजिदीक्षितः", "पाणिनिः", "पतञ्जलिः", "व्यासः"],
        "answer_hi": "भट्टोजिदीक्षितः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "कर्मवीरकथा कति अध्यायेषु विभक्ता?",
        "options_hi": ["दशसु", "पञ्चसु", "अष्टसु", "द्वादशसु"],
        "answer_hi": "दशसु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "पण्डितराजजगन्नाथस्य मृत्युः कदा अभवत्?",
        "options_hi": ["१६७० ईसवीये", "१७०० ईसवीये", "१६५० ईसवीये", "१६८० ईसवीये"],
        "answer_hi": "१६७० ईसवीये",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "कर्मवीरकथायाः मुख्यं पात्रं कः?",
        "options_hi": ["कर्मवीरः", "ज्ञानवीरः", "धर्मवीरः", "यशोवीरः"],
        "answer_hi": "कर्मवीरः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "पण्डितराजजगन्नाथः कति ग्रन्थानां रचयिता?",
        "options_hi": ["अनेकानाम्", "एकस्य", "द्वयोः", "त्रयाणाम्"],
        "answer_hi": "अनेकानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "कर्मवीरकथा कस्मिन् छन्दसि रचिता?",
        "options_hi": ["विविधेषु", "एकस्मिन्", "द्वयोः", "त्रिषु"],
        "answer_hi": "विविधेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "पण्डितराजजगन्नाथस्य अन्यं नाम किम्?",
        "options_hi": ["जगन्नाथपण्डितः", "जगदीशपण्डितः", "जगन्मोहनपण्डितः", "जगत्प्रकाशपण्डितः"],
        "answer_hi": "जगन्नाथपण्डितः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "कर्मवीरकथायाः प्रथमः अध्यायः किं वर्णयति?",
        "options_hi": ["कर्मवीरस्य जन्म", "कर्मवीरस्य बाल्यम्", "कर्मवीरस्य शिक्षा", "कर्मवीरस्य युद्धम्"],
        "answer_hi": "कर्मवीरस्य जन्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "पण्डितराजजगन्नाथः कति रसानां विवेचनं कृतवान्?",
        "options_hi": ["नव", "अष्ट", "दश", "सप्त"],
        "answer_hi": "नव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "कर्मवीरकथा कति श्लोकानि सन्ति?",
        "options_hi": ["शताधिकानि", "पञ्चशतानि", "सहस्रम्", "द्विशतानि"],
        "answer_hi": "शताधिकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "पण्डितराजजगन्नाथस्य प्रसिद्धः भाष्यकारः कः?",
        "options_hi": ["नेल्लय्यः", "मल्लिनाथः", "वामनः", "रुद्रटः"],
        "answer_hi": "नेल्लय्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "कर्मवीरकथायाः मुख्यं उद्देश्यं किम्?",
        "options_hi": ["कर्मणः महत्त्वं प्रतिपादयितुम्", "ज्ञानस्य महत्त्वं प्रतिपादयितुम्", "धर्मस्य महत्त्वं प्रतिपादयितुम्", "भक्तेः महत्त्वं प्रतिपादयितुम्"],
        "answer_hi": "कर्मणः महत्त्वं प्रतिपादयितुम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "पण्डितराजजगन्नाथस्य काव्यशैली का?",
        "options_hi": ["प्रौढा एवं सुन्दरी", "सरला", "क्लिष्टा", "अस्पष्टा"],
        "answer_hi": "प्रौढा एवं सुन्दरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "कर्मवीरकथायाः अन्तिमः अध्यायः किं वर्णयति?",
        "options_hi": ["कर्मवीरस्य विजयम्", "कर्मवीरस्य मृत्युम्", "कर्मवीरस्य यशः", "कर्मवीरस्य मोक्षम्"],
        "answer_hi": "कर्मवीरस्य विजयम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "पण्डितराजजगन्नाथः कति अलङ्काराणां वर्णनं कृतवान्?",
        "options_hi": ["अनेकानाम्", "दशानाम्", "पञ्चानाम्", "विंशतेः"],
        "answer_hi": "अनेकानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "कर्मवीरकथा केषां कृते उपयोगी?",
        "options_hi": ["सर्वेषां छात्राणाम्", "केवलं ब्राह्मणाणाम्", "केवलं राज्ञाम्", "केवलं सन्यासिनाम्"],
        "answer_hi": "सर्वेषां छात्राणाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "पण्डितराजजगन्नाथस्य मूलग्रामः कः?",
        "options_hi": ["त्रिवेणी", "काशी", "प्रयाग", "हरिद्वार"],
        "answer_hi": "त्रिवेणी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "कर्मवीरकथायां कति पात्राणि सन्ति?",
        "options_hi": ["अनेकानि", "दश", "पञ्च", "विंशतिः"],
        "answer_hi": "अनेकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "पण्डितराजजगन्नाथः कति वेदानां ज्ञाता आसीत्?",
        "options_hi": ["चतुर्णाम्", "त्रयाणाम्", "द्वयोः", "एकस्य"],
        "answer_hi": "चतुर्णाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "कर्मवीरकथा कस्य भाषायां लिखिता?",
        "options_hi": ["संस्कृते", "हिन्द्याम्", "बाङ्ग्लायाम्", "मराठ्याम्"],
        "answer_hi": "संस्कृते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "पण्डितराजजगन्नाथस्य प्रसिद्धः शिष्यः कः?",
        "options_hi": ["मतिरामः", "रामभद्रः", "कृष्णभट्टः", "विश्वनाथः"],
        "answer_hi": "मतिरामः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "कर्मवीरकथायाः प्रसिद्धः श्लोकः कः?",
        "options_hi": ["कर्मण्येवाधिकारस्ते...", "विद्यां ददाति विनयं...", "सत्यमेव जयते...", "धनानि जीवितं चैव..."],
        "answer_hi": "कर्मण्येवाधिकारस्ते...",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "पण्डितराजजगन्नाथस्य अन्यः ग्रन्थः कः?",
        "options_hi": ["गङ्गालहरी", "यमुनालहरी", "नर्मदालहरी", "काव्यालहरी"],
        "answer_hi": "गङ्गालहरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "कर्मवीरकथायां कः रसः प्रधानः?",
        "options_hi": ["वीररसः", "शृङ्गाररसः", "शान्तरसः", "हास्यरसः"],
        "answer_hi": "वीररसः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "पण्डितराजजगन्नाथः कति वर्षाणि जीवितवान्?",
        "options_hi": ["अशीतिवर्षाणि", "षष्टिवर्षाणि", "सप्ततिवर्षाणि", "नवतिवर्षाणि"],
        "answer_hi": "अशीतिवर्षाणि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "कर्मवीरकथायाः मध्यभागे किं वर्णितम्?",
        "options_hi": ["कर्मवीरस्य संघर्षः", "कर्मवीरस्य विवाहः", "कर्मवीरस्य यात्रा", "कर्मवीरस्य शिक्षा"],
        "answer_hi": "कर्मवीरस्य संघर्षः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "पण्डितराजजगन्नाथस्य पत्न्याः नाम किम्?",
        "options_hi": ["अज्ञातम्", "लक्ष्मी", "सरस्वती", "पार्वती"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "कर्मवीरकथायाः शिक्षा का?",
        "options_hi": ["कर्म कर्तव्यम्", "ज्ञानं प्राप्तव्यम्", "धर्मः पालनीयः", "भक्तिः कर्तव्या"],
        "answer_hi": "कर्म कर्तव्यम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "पण्डितराजजगन्नाथः कति दर्शनानां ज्ञाता आसीत्?",
        "options_hi": ["षण्णाम्", "चतुर्णाम्", "अष्टानाम्", "दशानाम्"],
        "answer_hi": "षण्णाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "कर्मवीरकथा कति भाषासु अनूदिता?",
        "options_hi": ["अनेकासु", "एकस्याम्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकासु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "पण्डितराजजगन्नाथस्य जन्मस्थानं किम्?",
        "options_hi": ["बंगालस्य ग्रामः", "दिल्ली", "आगरा", "लाहोर"],
        "answer_hi": "बंगालस्य ग्रामः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "कर्मवीरकथायाः नायकः कीदृशः?",
        "options_hi": ["कर्मठः", "ज्ञानी", "धार्मिकः", "भक्तः"],
        "answer_hi": "कर्मठः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "पण्डितराजजगन्नाथः कति नाटकानां रचयिता?",
        "options_hi": ["अनेकानाम्", "एकस्य", "द्वयोः", "त्रयाणाम्"],
        "answer_hi": "अनेकानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "कर्मवीरकथायाः उपदेशः कः?",
        "options_hi": ["निरन्तरं कुरु कर्म", "ज्ञानं प्राप्नुहि", "धर्मं पालय", "ईश्वरं भज"],
        "answer_hi": "निरन्तरं कुरु कर्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "पण्डितराजजगन्नाथस्य शिक्षा कुत्र अभवत्?",
        "options_hi": ["काश्याम्", "नालन्दायाम्", "विक्रमशिलायाम्", "तक्षशिलायाम्"],
        "answer_hi": "काश्याम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "कर्मवीरकथायाः प्रभावः कः?",
        "options_hi": ["मानवं कर्मणि प्रेरयति", "मानवं ज्ञाने प्रेरयति", "मानवं भक्तौ प्रेरयति", "मानवं धर्मे प्रेरयति"],
        "answer_hi": "मानवं कर्मणि प्रेरयति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "पण्डितराजजगन्नाथस्य भाष्यं कस्मिन् ग्रन्थे प्रसिद्धम्?",
        "options_hi": ["गीतायाम्", "रामायणे", "महाभारते", "भागवते"],
        "answer_hi": "गीतायाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "कर्मवीरकथा कति प्रकारकैः कथां वर्णयति?",
        "options_hi": ["काव्यात्मकैः", "गद्यात्मकैः", "नाटकात्मकैः", "सूत्रात्मकैः"],
        "answer_hi": "काव्यात्मकैः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "पण्डितराजजगन्नाथः कति स्तोत्राणां रचयिता?",
        "options_hi": ["अनेकानाम्", "एकस्य", "द्वयोः", "त्रयाणाम्"],
        "answer_hi": "अनेकानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "कर्मवीरकथायाः सारः कः?",
        "options_hi": ["कर्म एव जीवनम्", "ज्ञानम् एव मोक्षः", "धर्म एव जीवनम्", "भक्तिः एव मोक्षः"],
        "answer_hi": "कर्म एव जीवनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "पण्डितराजजगन्नाथस्य प्रसिद्धः व्याख्यानकारः कः?",
        "options_hi": ["अप्पय्यदीक्षितः", "सायणः", "कुमारिलभट्टः", "शङ्कराचार्यः"],
        "answer_hi": "अप्पय्यदीक्षितः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "कर्मवीरकथायाः नायकः कस्य कुलीनः?",
        "options_hi": ["क्षत्रियकुलस्य", "ब्राह्मणकुलस्य", "वैश्यकुलस्य", "शूद्रकुलस्य"],
        "answer_hi": "क्षत्रियकुलस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "पण्डितराजजगन्नाथः कति उपनिषदां ज्ञाता आसीत्?",
        "options_hi": ["दशानाम्", "पञ्चानाम्", "अष्टानाम्", "द्वादशानाम्"],
        "answer_hi": "दशानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "कर्मवीरकथायाः प्रमुखाः शत्रवः के?",
        "options_hi": ["आलस्यं प्रमादः च", "ज्ञानं विद्या च", "धर्मः अधर्मः च", "भक्तिः अभक्तिः च"],
        "answer_hi": "आलस्यं प्रमादः च",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "पण्डितराजजगन्नाथस्य कति पुत्राः आसन्?",
        "options_hi": ["अज्ञातम्", "द्वौ", "एकः", "त्रयः"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "कर्मवीरकथायाः मुख्यं संघर्षः कः?",
        "options_hi": ["कर्मणः महत्त्वं स्थापयितुम्", "ज्ञानं प्राप्तुम्", "धर्मं स्थापयितुम्", "यशः प्राप्तुम्"],
        "answer_hi": "कर्मणः महत्त्वं स्थापयितुम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "पण्डितराजजगन्नाथः कति पुराणानां ज्ञाता आसीत्?",
        "options_hi": ["अष्टादशानाम्", "दशानाम्", "पञ्चानाम्", "विंशतेः"],
        "answer_hi": "अष्टादशानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "कर्मवीरकथायाः प्रसिद्धः संवादः कः?",
        "options_hi": ["कर्मवीर-गुरोः संवादः", "कर्मवीर-मित्रस्य संवादः", "कर्मवीर-शत्रोः संवादः", "कर्मवीर-पितुः संवादः"],
        "answer_hi": "कर्मवीर-गुरोः संवादः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "पण्डितराजजगन्नाथस्य काव्यस्य विषयः कः?",
        "options_hi": ["विविधाः", "केवलं प्रेम", "केवलं धर्म", "केवलं युद्ध"],
        "answer_hi": "विविधाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "कर्मवीरकथायाः समाप्तिः कथं भवति?",
        "options_hi": ["कर्मवीरस्य विजयेन", "कर्मवीरस्य मृत्युना", "कर्मवीरस्य यशसा", "कर्मवीरस्य मोक्षेण"],
        "answer_hi": "कर्मवीरस्य विजयेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "पण्डितराजजगन्नाथस्य प्रसिद्धः समकालीनः कः?",
        "options_hi": ["केशवदासः", "तुलसीदासः", "सूरदासः", "मीराबाई"],
        "answer_hi": "केशवदासः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "कर्मवीरकथायाः गुरुः कः?",
        "options_hi": ["धर्मगुरुः", "ज्ञानगुरुः", "कर्मगुरुः", "योगगुरुः"],
        "answer_hi": "कर्मगुरुः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "पण्डितराजजगन्नाथस्य कति व्याख्यानानि सन्ति?",
        "options_hi": ["अनेकानि", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "अनेकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "कर्मवीरकथायाः नैतिकं शिक्षणं किम्?",
        "options_hi": ["कर्मणा एव सिद्धिः", "ज्ञानेन एव सिद्धिः", "धर्मेण एव सिद्धिः", "भक्त्या एव सिद्धिः"],
        "answer_hi": "कर्मणा एव सिद्धिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "पण्डितराजजगन्नाथस्य प्रसिद्धः श्लोकः कः?",
        "options_hi": ["काव्येषु नाटकं रम्यं...", "विद्यां ददाति विनयं...", "सत्यमेव जयते...", "धनानि जीवितं चैव..."],
        "answer_hi": "काव्येषु नाटकं रम्यं...",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "कर्मवीरकथायाः भाषाशैली का?",
        "options_hi": ["सरला एवं प्रभावशालिनी", "क्लिष्टा", "वैज्ञानिकी", "अस्पष्टा"],
        "answer_hi": "सरला एवं प्रभावशालिनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "पण्डितराजजगन्नाथस्य कति टीकाः सन्ति?",
        "options_hi": ["अनेकाः", "एका", "द्वे", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "कर्मवीरकथायाः नायिका का?",
        "options_hi": ["कर्मशीला", "ज्ञानशीला", "धर्मशीला", "भक्तिशीला"],
        "answer_hi": "कर्मशीला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "पण्डितराजजगन्नाथस्य प्रसिद्धः प्रशंसकः कः?",
        "options_hi": ["मुगलसम्राट्", "मराठाशासकः", "राजपूतराजा", "विजयनगरसम्राट्"],
        "answer_hi": "मुगलसम्राट्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "कर्मवीरकथायाः मूलस्रोतः कः?",
        "options_hi": ["पौराणिककथा", "ऐतिहासिकघटना", "काल्पनिककथा", "दार्शनिकसिद्धान्तः"],
        "answer_hi": "पौराणिककथा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "पण्डितराजजगन्नाथस्य कति शिष्याः आसन्?",
        "options_hi": ["अनेकाः", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "कर्मवीरकथायाः सन्देशः कः?",
        "options_hi": ["कुरु कर्म त्वं धैर्येण", "प्राप्नुहि ज्ञानं", "पालय धर्मं", "भज ईश्वरम्"],
        "answer_hi": "कुरु कर्म त्वं धैर्येण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "पण्डितराजजगन्नाथस्य कति पद्यानि सन्ति?",
        "options_hi": ["सहस्राधिकानि", "शतानि", "पञ्चशतानि", "द्विशतानि"],
        "answer_hi": "सहस्राधिकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "कर्मवीरकथायाः प्रभावः केषां परं पश्यति?",
        "options_hi": ["युवानाम्", "वृद्धानाम्", "बालानाम्", "स्त्रीणाम्"],
        "answer_hi": "युवानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "पण्डितराजजगन्नाथस्य कति गद्यग्रन्थाः सन्ति?",
        "options_hi": ["अल्पाः", "अनेकाः", "एकः", "द्वौ"],
        "answer_hi": "अल्पाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "कर्मवीरकथायाः महत्त्वं किम्?",
        "options_hi": ["कर्मणः प्रेरणा", "ज्ञानस्य प्रेरणा", "धर्मस्य प्रेरणा", "भक्तेः प्रेरणा"],
        "answer_hi": "कर्मणः प्रेरणा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "पण्डितराजजगन्नाथस्य कति स्मृतिग्रन्थानां ज्ञानम् आसीत्?",
        "options_hi": ["अनेकानाम्", "एकस्य", "द्वयोः", "त्रयाणाम्"],
        "answer_hi": "अनेकानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "कर्मवीरकथायाः रचनाशैली का?",
        "options_hi": ["कथात्मिका", "नाटकात्मिका", "सूत्रात्मिका", "भाष्यात्मिका"],
        "answer_hi": "कथात्मिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "पण्डितराजजगन्नाथस्य कति प्रशस्तयः सन्ति?",
        "options_hi": ["अनेकाः", "एका", "द्वे", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "कर्मवीरकथायाः लेखनप्रेरणा का?",
        "options_hi": ["कर्ममहिमा", "ज्ञानमहिमा", "धर्ममहिमा", "भक्तिमहिमा"],
        "answer_hi": "कर्ममहिमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "पण्डितराजजगन्नाथस्य कति वंशावलीज्ञानम् आसीत्?",
        "options_hi": ["सुविकसितम्", "अल्पम्", "नास्ति", "सम्पूर्णम्"],
        "answer_hi": "सुविकसितम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "कर्मवीरकथायाः प्रकाशनं कदा अभवत्?",
        "options_hi": ["सप्तदशशतके", "अष्टादशशतके", "नवदशशतके", "विंशशतके"],
        "answer_hi": "सप्तदशशतके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "पण्डितराजजगन्नाथस्य कति आख्यायिकाः सन्ति?",
        "options_hi": ["अनेकाः", "एका", "द्वे", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "कर्मवीरकथायाः प्रथमप्रकाशकः कः?",
        "options_hi": ["अज्ञातः", "मुद्रणालयः", "राजाश्रयः", "विद्वत्समाजः"],
        "answer_hi": "अज्ञातः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "पण्डितराजजगन्नाथस्य कति प्रबन्धाः सन्ति?",
        "options_hi": ["अनेकाः", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "कर्मवीरकथायाः शैली कथं वर्णिता?",
        "options_hi": ["प्रवाहपूर्णा", "खण्डिता", "क्लिष्टा", "सरला"],
        "answer_hi": "प्रवाहपूर्णा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "पण्डितराजजगन्नाथस्य कति चम्पूकाव्यानि सन्ति?",
        "options_hi": ["अनेकानि", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "अनेकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "कर्मवीरकथायाः अध्ययनफलं किम्?",
        "options_hi": ["कर्मोत्साहः", "ज्ञानवृद्धिः", "धर्मबोधः", "भक्तिवृद्धिः"],
        "answer_hi": "कर्मोत्साहः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "पण्डितराजजगन्नाथस्य कति स्तुतिकाव्यानि सन्ति?",
        "options_hi": ["अनेकानि", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "अनेकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "कर्मवीरकथायाः प्रसिद्धिः कुत्र अस्ति?",
        "options_hi": ["संस्कृतजगति", "हिन्दीजगति", "अङ्ग्रेजीजगति", "सर्वत्र"],
        "answer_hi": "संस्कृतजगति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "पण्डितराजजगन्नाथस्य कति मुक्तकानि सन्ति?",
        "options_hi": ["सहस्राधिकानि", "शतानि", "पञ्चशतानि", "द्विशतानि"],
        "answer_hi": "सहस्राधिकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "कर्मवीरकथायाः प्रभावः कति देशेषु दृश्यते?",
        "options_hi": ["अनेकेषु", "एकस्मिन्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "पण्डितराजजगन्नाथस्य कति भाष्यकाराः सन्ति?",
        "options_hi": ["अनेकाः", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "कर्मवीरकथायाः मूलाधारः कः?",
        "options_hi": ["गीतोपदेशः", "रामायणम्", "महाभारतम्", "पुराणानि"],
        "answer_hi": "गीतोपदेशः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "पण्डितराजजगन्नाथस्य कति टिप्पण्यः सन्ति?",
        "options_hi": ["अनेकाः", "एका", "द्वे", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "कर्मवीरकथायाः आधुनिकप्रासंगिकता का?",
        "options_hi": ["कर्मणः आवश्यकता", "ज्ञानस्य आवश्यकता", "धर्मस्य आवश्यकता", "भक्तेः आवश्यकता"],
        "answer_hi": "कर्मणः आवश्यकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "पण्डितराजजगन्नाथस्य कति प्रश्नोत्तराणि सन्ति?",
        "options_hi": ["अनेकानि", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "अनेकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "कर्मवीरकथायाः महान् योगदानं किम्?",
        "options_hi": ["कर्मसन्देशः", "ज्ञानसन्देशः", "धर्मसन्देशः", "भक्तिसन्देशः"],
        "answer_hi": "कर्मसन्देशः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "पण्डितराजजगन्नाथस्य कति अनुवादाः सन्ति?",
        "options_hi": ["अनेकाः", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "कर्मवीरकथायाः स्थानं संस्कृतसाहित्ये किम्?",
        "options_hi": ["महत्त्वपूर्णं", "सामान्यं", "अल्पमहत्त्वं", "अज्ञातं"],
        "answer_hi": "महत्त्वपूर्णं",
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