const questions = [
    {
        "num": 1,
        "question_hi": "वीरकुमारः कथायाः मुख्यपात्रं कः?",
        "options_hi": ["वीरकुमारः", "वीरराजः", "वीरसेनः", "वीरभद्रः"],
        "answer_hi": "वीरकुमारः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "वीरकुमारकथायाः रचयिता कः?",
        "options_hi": ["अज्ञातः", "भासः", "कालिदासः", "भवभूतिः"],
        "answer_hi": "अज्ञातः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "वीरकुमारः कस्य पुत्रः आसीत्?",
        "options_hi": ["वीरसिंहस्य", "वीरभद्रस्य", "वीरेन्द्रस्य", "वीरवर्मणः"],
        "answer_hi": "वीरसिंहस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "वीरकुमारकथा कति अध्यायेषु विभक्ता?",
        "options_hi": ["दश", "अष्ट", "द्वादश", "षोडश"],
        "answer_hi": "दश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "वीरकुमारस्य मातुः नाम किम्?",
        "options_hi": ["सुभद्रा", "लक्ष्मी", "सरस्वती", "पार्वती"],
        "answer_hi": "सुभद्रा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "वीरकुमारकथायाः प्रथमः अध्यायः किं वर्णयति?",
        "options_hi": ["वीरकुमारस्य जन्म", "वीरकुमारस्य बाल्यम्", "वीरकुमारस्य शिक्षा", "वीरकुमारस्य युद्धम्"],
        "answer_hi": "वीरकुमारस्य जन्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "वीरकुमारः कुत्र जन्म प्राप्तवान्?",
        "options_hi": ["वीरनगरे", "अयोध्यायाम्", "मथुरायाम्", "हस्तिनापुरे"],
        "answer_hi": "वीरनगरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "वीरकुमारकथा कति श्लोकानि सन्ति?",
        "options_hi": ["शताधिकानि", "पञ्चशतानि", "सहस्रम्", "द्विशतानि"],
        "answer_hi": "शताधिकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "वीरकुमारस्य गुरुः कः?",
        "options_hi": ["द्रोणाचार्यः", "कृपाचार्यः", "भार्गवः", "वसिष्ठः"],
        "answer_hi": "द्रोणाचार्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "वीरकुमारकथायाः द्वितीयः अध्यायः किं वर्णयति?",
        "options_hi": ["वीरकुमारस्य बाल्यम्", "वीरकुमारस्य शिक्षा", "वीरकुमारस्य युद्धम्", "वीरकुमारस्य विवाहः"],
        "answer_hi": "वीरकुमारस्य बाल्यम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "वीरकुमारः कति वर्षाणि जीवितवान्?",
        "options_hi": ["पञ्चविंशतिः", "त्रिंशत्", "चत्वारिंशत्", "पञ्चाशत्"],
        "answer_hi": "पञ्चविंशतिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "वीरकुमारकथायाः तृतीयः अध्यायः किं वर्णयति?",
        "options_hi": ["वीरकुमारस्य शिक्षा", "वीरकुमारस्य युद्धम्", "वीरकुमारस्य विवाहः", "वीरकुमारस्य राज्याभिषेकः"],
        "answer_hi": "वीरकुमारस्य शिक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "वीरकुमारस्य प्रियः मित्रं कः?",
        "options_hi": ["सुधीरः", "विजयः", "रमेशः", "हरिः"],
        "answer_hi": "सुधीरः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "वीरकुमारकथायाः चतुर्थः अध्यायः किं वर्णयति?",
        "options_hi": ["वीरकुमारस्य युद्धम्", "वीरकुमारस्य विवाहः", "वीरकुमारस्य राज्याभिषेकः", "वीरकुमारस्य प्रवासः"],
        "answer_hi": "वीरकुमारस्य युद्धम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "वीरकुमारस्य शत्रुः कः?",
        "options_hi": ["दुर्विनीतः", "दुर्मुखः", "दुर्योधनः", "दुःशासनः"],
        "answer_hi": "दुर्विनीतः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "वीरकुमारकथायाः पञ्चमः अध्यायः किं वर्णयति?",
        "options_hi": ["वीरकुमारस्य विवाहः", "वीरकुमारस्य राज्याभिषेकः", "वीरकुमारस्य प्रवासः", "वीरकुमारस्य संघर्षः"],
        "answer_hi": "वीरकुमारस्य विवाहः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "वीरकुमारस्य पत्न्याः नाम किम्?",
        "options_hi": ["सुनयना", "चन्द्रिका", "मालती", "कमला"],
        "answer_hi": "सुनयना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "वीरकुमारकथायाः षष्ठः अध्यायः किं वर्णयति?",
        "options_hi": ["वीरकुमारस्य राज्याभिषेकः", "वीरकुमारस्य प्रवासः", "वीरकुमारस्य संघर्षः", "वीरकुमारस्य विजयः"],
        "answer_hi": "वीरकुमारस्य राज्याभिषेकः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "वीरकुमारः कति भाषाणां ज्ञाता आसीत्?",
        "options_hi": ["अनेकानाम्", "एकस्याः", "द्वयोः", "त्रयाणाम्"],
        "answer_hi": "अनेकानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "वीरकुमारकथायाः सप्तमः अध्यायः किं वर्णयति?",
        "options_hi": ["वीरकुमारस्य प्रवासः", "वीरकुमारस्य संघर्षः", "वीरकुमारस्य विजयः", "वीरकुमारस्य यशः"],
        "answer_hi": "वीरकुमारस्य प्रवासः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "वीरकुमारस्य प्रियं अस्त्रं किम्?",
        "options_hi": ["धनुः", "खड्गः", "गदा", "शक्तिः"],
        "answer_hi": "धनुः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "वीरकुमारकथायाः अष्टमः अध्यायः किं वर्णयति?",
        "options_hi": ["वीरकुमारस्य संघर्षः", "वीरकुमारस्य विजयः", "वीरकुमारस्य यशः", "वीरकुमारस्य मृत्युः"],
        "answer_hi": "वीरकुमारस्य संघर्षः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "वीरकुमारस्य वाहनं किम्?",
        "options_hi": ["अश्वः", "गजः", "रथः", "सिंहः"],
        "answer_hi": "अश्वः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "वीरकुमारकथायाः नवमः अध्यायः किं वर्णयति?",
        "options_hi": ["वीरकुमारस्य विजयः", "वीरकुमारस्य यशः", "वीरकुमारस्य मृत्युः", "वीरकुमारस्य सन्देशः"],
        "answer_hi": "वीरकुमारस्य विजयः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "वीरकुमारस्य प्रसिद्धः युद्धः कः?",
        "options_hi": ["वीरपुरयुद्धम्", "धर्मयुद्धम्", "सत्ययुद्धम्", "न्याययुद्धम्"],
        "answer_hi": "वीरपुरयुद्धम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "वीरकुमारकथायाः दशमः अध्यायः किं वर्णयति?",
        "options_hi": ["वीरकुमारस्य यशः", "वीरकुमारस्य मृत्युः", "वीरकुमारस्य सन्देशः", "कथायाः सारांशः"],
        "answer_hi": "कथायाः सारांशः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "वीरकुमारस्य मृत्युः कथं अभवत्?",
        "options_hi": ["युद्धे", "रोगेण", "दुर्घटनया", "वृद्धावस्थया"],
        "answer_hi": "युद्धे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "वीरकुमारकथा कस्मिन् छन्दसि रचिता?",
        "options_hi": ["विविधेषु", "एकस्मिन्", "द्वयोः", "त्रिषु"],
        "answer_hi": "विविधेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "वीरकुमारस्य पुत्रः कः?",
        "options_hi": ["वीरेन्द्रः", "वीरभानुः", "वीरचन्द्रः", "वीरप्रतापः"],
        "answer_hi": "वीरेन्द्रः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "वीरकुमारकथायाः मुख्यं उद्देश्यं किम्?",
        "options_hi": ["वीरत्वप्रशंसा", "प्रेमकथा", "युद्धवर्णनम्", "आध्यात्मिकशिक्षा"],
        "answer_hi": "वीरत्वप्रशंसा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "वीरकुमारस्य भ्राता कः?",
        "options_hi": ["साहसकुमारः", "धैर्यकुमारः", "तेजस्कुमारः", "बलकुमारः"],
        "answer_hi": "साहसकुमारः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "वीरकुमारकथा कति भाषासु अनूदिता?",
        "options_hi": ["अनेकासु", "एकस्याम्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकासु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "वीरकुमारस्य प्रियं पशुः किम्?",
        "options_hi": ["सिंहः", "हस्ती", "अश्वः", "वृषभः"],
        "answer_hi": "सिंहः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "वीरकुमारकथायाः प्रसिद्धः श्लोकः कः?",
        "options_hi": ["वीरः सदा जयति", "धर्मेण जयति", "सत्येन जयति", "कर्मणा जयति"],
        "answer_hi": "वीरः सदा जयति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "वीरकुमारस्य जन्मस्थानं किम्?",
        "options_hi": ["वीरनगरस्य राजप्रासादः", "वनम्", "ग्रामः", "पर्वतदुर्गम्"],
        "answer_hi": "वीरनगरस्य राजप्रासादः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "वीरकुमारकथायाः रचनाकालः कः?",
        "options_hi": ["अज्ञातः", "दशमशतकम्", "एकादशशतकम्", "द्वादशशतकम्"],
        "answer_hi": "अज्ञातः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "वीरकुमारस्य प्रियं वृक्षः कः?",
        "options_hi": ["वटवृक्षः", "आम्रवृक्षः", "अशोकवृक्षः", "कदम्बवृक्षः"],
        "answer_hi": "वटवृक्षः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "वीरकुमारकथायाः प्रभावः कः?",
        "options_hi": ["युवकानां प्रेरणा", "वृद्धानां मनोरञ्जनम्", "बालानां शिक्षा", "स्त्रीणां मनोरञ्जनम्"],
        "answer_hi": "युवकानां प्रेरणा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "वीरकुमारस्य शिक्षा कुत्र अभवत्?",
        "options_hi": ["गुरुकुले", "नगरे", "वने", "पर्वते"],
        "answer_hi": "गुरुकुले",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "वीरकुमारकथायाः प्रमुखालङ्कारः कः?",
        "options_hi": ["उपमा", "रूपकम्", "उत्प्रेक्षा", "अतिशयोक्तिः"],
        "answer_hi": "उपमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "वीरकुमारस्य प्रियं खेलं किम्?",
        "options_hi": ["धनुर्विद्या", "गदायुद्धम्", "अश्वारोहणम्", "मल्लयुद्धम्"],
        "answer_hi": "धनुर्विद्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "वीरकुमारकथायाः प्रसिद्धः उपदेशः कः?",
        "options_hi": ["सदा वीरः भव", "सदा धार्मिकः भव", "सदा ज्ञानी भव", "सदा दयालुः भव"],
        "answer_hi": "सदा वीरः भव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "वीरकुमारस्य प्रसिद्धः व्याख्यानकारः कः?",
        "options_hi": ["अज्ञातः", "सायणः", "कुमारिलभट्टः", "शङ्कराचार्यः"],
        "answer_hi": "अज्ञातः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "वीरकुमारकथायाः मूलाधारः कः?",
        "options_hi": ["लोककथा", "ऐतिहासिकघटना", "काल्पनिककथा", "दार्शनिकसिद्धान्तः"],
        "answer_hi": "लोककथा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "वीरकुमारस्य प्रियं गीतं किम्?",
        "options_hi": ["वीररसगीतम्", "शृङ्गारगीतम्", "शान्तरसगीतम्", "हास्यरसगीतम्"],
        "answer_hi": "वीररसगीतम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "वीरकुमारकथायाः शैलीगतविशेषता का?",
        "options_hi": ["वर्णनप्रधाना", "आख्यानप्रधाना", "संवादप्रधाना", "तर्कप्रधाना"],
        "answer_hi": "वर्णनप्रधाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "वीरकुमारस्य प्रियं पुस्तकं किम्?",
        "options_hi": ["रामायणम्", "महाभारतम्", "भगवद्गीता", "पुराणम्"],
        "answer_hi": "रामायणम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "वीरकुमारकथायाः साहित्यिकप्रकारः कः?",
        "options_hi": ["कथा", "महाकाव्यम्", "खण्डकाव्यम्", "नाटकम्"],
        "answer_hi": "कथा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "वीरकुमारस्य प्रियं ऋतुः कः?",
        "options_hi": ["वसन्तः", "ग्रीष्मः", "वर्षा", "शरद्"],
        "answer_hi": "वसन्तः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "वीरकुमारकथायाः पठनफलं किम्?",
        "options_hi": ["वीरत्वबोधः", "ज्ञानवृद्धिः", "धर्मबोधः", "भक्तिवृद्धिः"],
        "answer_hi": "वीरत्वबोधः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "वीरकुमारस्य प्रियं फलं किम्?",
        "options_hi": ["आम्रम्", "केला", "सेवफलम्", "दाडिमम्"],
        "answer_hi": "आम्रम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "वीरकुमारकथायाः प्रमुखं सङ्केतं किम्?",
        "options_hi": ["वीरः सदा जयति", "धर्मः सदा जयति", "सत्यं सदा जयति", "अहिंसा सदा जयति"],
        "answer_hi": "वीरः सदा जयति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "वीरकुमारस्य प्रियं पुष्पं किम्?",
        "options_hi": ["कमलम्", "गुलाबः", "चम्पकम्", "मल्लिका"],
        "answer_hi": "कमलम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "वीरकुमारकथायाः समकालीनाः के अन्ये ग्रन्थाः?",
        "options_hi": ["अज्ञातम्", "पञ्चतन्त्रम्", "हितोपदेशः", "कथासरित्सागरः"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "वीरकुमारस्य प्रियं रत्नं किम्?",
        "options_hi": ["माणिक्यम्", "हीरकम्", "मोती", "पन्ना"],
        "answer_hi": "माणिक्यम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "वीरकुमारकथायाः शिक्षणं कस्मै विशेषतः उपयोगि?",
        "options_hi": ["युवकानाम्", "विद्यार्थिभ्यः", "राजभ्यः", "सन्यासिभ्यः"],
        "answer_hi": "युवकानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "वीरकुमारस्य प्रियं वस्त्रं किम्?",
        "options_hi": ["कवचम्", "वस्त्रम्", "उत्तरीयम्", "पगड़ी"],
        "answer_hi": "कवचम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "वीरकुमारकथायाः मूलं दर्शनं किम्?",
        "options_hi": ["वीररसः", "शान्तरसः", "शृङ्गाररसः", "करुणरसः"],
        "answer_hi": "वीररसः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "वीरकुमारस्य प्रियं स्थानं किम्?",
        "options_hi": ["युद्धक्षेत्रम्", "वनम्", "नदीतटः", "पर्वतशिखरम्"],
        "answer_hi": "युद्धक्षेत्रम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "वीरकुमारकथायाः प्रकाशनं प्रथमवारं कदा अभवत्?",
        "options_hi": ["अज्ञातम्", "१९विंशतके", "२०विंशतके", "२१विंशतके"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "वीरकुमारस्य प्रियं पेयं किम्?",
        "options_hi": ["जलम्", "दुग्धम्", "मधु", "रसः"],
        "answer_hi": "जलम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "वीरकुमारकथायाः प्रभावः कति देशीयभाषासु दृश्यते?",
        "options_hi": ["अनेकासु", "एकस्याम्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकासु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "वीरकुमारस्य प्रियं व्यायामं किम्?",
        "options_hi": ["धनुर्विद्या", "गदायुद्धम्", "अश्वारोहणम्", "मल्लयुद्धम्"],
        "answer_hi": "धनुर्विद्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "वीरकुमारकथायाः प्रमुखं दार्शनिकं तत्त्वं किम्?",
        "options_hi": ["वीरत्वम्", "ज्ञानम्", "धर्मः", "भक्तिः"],
        "answer_hi": "वीरत्वम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "वीरकुमारस्य प्रियं समयः कः?",
        "options_hi": ["प्रातःकालः", "मध्याह्नः", "सायंकालः", "रात्रिः"],
        "answer_hi": "प्रातःकालः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "वीरकुमारकथायाः साहित्यिकप्रकारः कः?",
        "options_hi": ["वीरकथा", "प्रेमकथा", "नीतिकथा", "भक्तिकथा"],
        "answer_hi": "वीरकथा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "वीरकुमारस्य प्रियं वाद्यं किम्?",
        "options_hi": ["शङ्खः", "भेरी", "वीणा", "मृदङ्गः"],
        "answer_hi": "शङ्खः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "वीरकुमारकथायाः प्रभावः कति विश्वविद्यालयेषु अध्ययनविषयः अस्ति?",
        "options_hi": ["अनेकेषु", "एकस्मिन्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "वीरकुमारस्य प्रियं नृत्यं किम्?",
        "options_hi": ["युद्धनृत्यम्", "शान्तनृत्यम्", "लोकनृत्यम्", "देवनृत्यम्"],
        "answer_hi": "युद्धनृत्यम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "वीरकुमारकथायाः समाप्तेः संदेशः कः?",
        "options_hi": ["वीरः सदा जयति", "धर्मः सदा जयति", "सत्यं सदा जयति", "अहिंसा सदा जयति"],
        "answer_hi": "वीरः सदा जयति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "वीरकुमारस्य प्रियं रंगः कः?",
        "options_hi": ["रक्तवर्णः", "नीलवर्णः", "हरितवर्णः", "पीतवर्णः"],
        "answer_hi": "रक्तवर्णः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "वीरकुमारकथायाः प्रमुखं प्रतीकं किम्?",
        "options_hi": ["सिंहः", "गजः", "अश्वः", "वृषभः"],
        "answer_hi": "सिंहः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "वीरकुमारस्य प्रियं मित्रं कः?",
        "options_hi": ["सुधीरः", "विजयः", "रमेशः", "हरिः"],
        "answer_hi": "सुधीरः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "वीरकुमारकथायाः प्रथममुद्रणं कुत्र अभवत्?",
        "options_hi": ["अज्ञातम्", "कोलकातानगरे", "दिल्लीनगरे", "मुम्बैनगरे"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "वीरकुमारस्य प्रियं शस्त्रं किम्?",
        "options_hi": ["खड्गः", "गदा", "शक्तिः", "परशुः"],
        "answer_hi": "खड्गः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "वीरकुमारकथायाः प्रमुखं युद्धं कस्मिन् क्षेत्रे भवति?",
        "options_hi": ["वीरपुरे", "धर्मपुरे", "सत्यपुरे", "न्यायपुरे"],
        "answer_hi": "वीरपुरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "वीरकुमारस्य प्रियं पक्षी कः?",
        "options_hi": ["गरुडः", "हंसः", "मयूरः", "चक्रवाकः"],
        "answer_hi": "गरुडः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "वीरकुमारकथायाः प्रभावः कति जनसमुदायेषु दृश्यते?",
        "options_hi": ["सर्वेषु", "केवलं विद्वत्सु", "केवलं युवसु", "केवलं वृद्धेषु"],
        "answer_hi": "सर्वेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "वीरकुमारस्य प्रियं देवता कः?",
        "options_hi": ["विष्णुः", "शिवः", "दुर्गा", "सूर्यः"],
        "answer_hi": "विष्णुः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "वीरकुमारकथायाः साहित्यमूल्याङ्कनं कथं भवति?",
        "options_hi": ["उत्तमम्", "मध्यमम्", "निम्नम्", "अज्ञातम्"],
        "answer_hi": "उत्तमम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "वीरकुमारस्य प्रियं तीर्थं किम्?",
        "options_hi": ["काशी", "प्रयागः", "हरिद्वार", "वैकुण्ठम्"],
        "answer_hi": "काशी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "वीरकुमारकथायाः नायकस्य चरित्रं कथं वर्णितम्?",
        "options_hi": ["आदर्शरूपेण", "साधारणरूपेण", "दोषपूर्णरूपेण", "मिश्रितरूपेण"],
        "answer_hi": "आदर्शरूपेण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "वीरकुमारस्य प्रियं मन्त्रं किम्?",
        "options_hi": ["ॐ नमो नारायणाय", "ॐ नमः शिवाय", "ॐ श्री गणेशाय नमः", "ॐ श्री दुर्गायै नमः"],
        "answer_hi": "ॐ नमो नारायणाय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "वीरकुमारकथायाः प्रभावः कति आधुनिकलेखकेषु दृश्यते?",
        "options_hi": ["अनेकेषु", "एकस्मिन्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "वीरकुमारस्य प्रियं उत्सवः कः?",
        "options_hi": ["विजयदशमी", "दीपावली", "होली", "रक्षाबन्धनम्"],
        "answer_hi": "विजयदशमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "वीरकुमारकथायाः कः मुख्यं प्रयोजनं?",
        "options_hi": ["वीरत्वप्रेरणा", "ज्ञानप्रचारः", "धर्मप्रचारः", "भक्तिप्रचारः"],
        "answer_hi": "वीरत्वप्रेरणा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "वीरकुमारस्य प्रियं ग्रहः कः?",
        "options_hi": ["सूर्यः", "चन्द्रः", "मङ्गलः", "बृहस्पतिः"],
        "answer_hi": "मङ्गलः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "वीरकुमारकथायाः प्रकाशनवर्षं किम्?",
        "options_hi": ["अज्ञातम्", "१००० ईसवीये", "१२०० ईसवीये", "१४०० ईसवीये"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "वीरकुमारस्य प्रियं वर्णः कः?",
        "options_hi": ["क्षत्रियः", "ब्राह्मणः", "वैश्यः", "शूद्रः"],
        "answer_hi": "क्षत्रियः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "वीरकुमारकथायाः प्रमुखं दृष्टान्तं किम्?",
        "options_hi": ["वीरकुमारस्य जीवनम्", "रामस्य जीवनम्", "कृष्णस्य जीवनम्", "अर्जुनस्य जीवनम्"],
        "answer_hi": "वीरकुमारस्य जीवनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "वीरकुमारस्य प्रियं आसनं किम्?",
        "options_hi": ["सिंहासनम्", "पद्मासनम्", "सुखासनम्", "वज्रासनम्"],
        "answer_hi": "सिंहासनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "वीरकुमारकथायाः प्रभावः कति विदेशीयभाषासु दृश्यते?",
        "options_hi": ["अनेकासु", "एकस्याम्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकासु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "वीरकुमारस्य प्रियं दिनं किम्?",
        "options_hi": ["सोमवारः", "मङ्गलवारः", "बुधवारः", "शुक्रवारः"],
        "answer_hi": "मङ्गलवारः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "वीरकुमारकथायाः प्रमुखं सिद्धान्तं किम्?",
        "options_hi": ["वीरत्वसिद्धान्तः", "ज्ञानसिद्धान्तः", "धर्मसिद्धान्तः", "भक्तिसिद्धान्तः"],
        "answer_hi": "वीरत्वसिद्धान्तः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "वीरकुमारस्य प्रियं संकल्पं किम्?",
        "options_hi": ["देशरक्षणम्", "धर्मरक्षणम्", "ज्ञानप्राप्तिः", "मोक्षप्राप्तिः"],
        "answer_hi": "देशरक्षणम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "वीरकुमारकथायाः कः मुख्यं प्रतिपाद्यविषयः?",
        "options_hi": ["वीरकुमारस्य वीरता", "ज्ञानमहिमा", "धर्ममहिमा", "भक्तिमहिमा"],
        "answer_hi": "वीरकुमारस्य वीरता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "वीरकुमारस्य प्रियं स्वप्नं किम्?",
        "options_hi": ["विश्वशान्तिः", "राज्यविस्तारः", "धनप्राप्तिः", "यशःप्राप्तिः"],
        "answer_hi": "विश्वशान्तिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "वीरकुमारकथायाः प्रभावः कति विद्यालयेषु पाठ्यक्रमे अस्ति?",
        "options_hi": ["अनेकेषु", "एकस्मिन्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "वीरकुमारस्य प्रियं वाक्यं किम्?",
        "options_hi": ["सत्यमेव जयते", "धर्मो रक्षति रक्षितः", "युद्धे क्षत्रियस्य धर्मः", "अहिंसा परमोधर्मः"],
        "answer_hi": "युद्धे क्षत्रियस्य धर्मः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "वीरकुमारकथायाः स्थानं संस्कृतसाहित्ये किम्?",
        "options_hi": ["विशिष्टं", "सामान्यं", "अल्पमहत्त्वं", "अज्ञातं"],
        "answer_hi": "विशिष्टं",
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