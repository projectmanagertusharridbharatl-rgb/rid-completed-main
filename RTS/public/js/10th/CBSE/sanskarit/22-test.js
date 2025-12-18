const questions = [
    {
        "num": 1,
        "question_hi": "वीरकुमारस्य कति प्रशंसापत्राणि उपलब्धानि?",
        "options_hi": ["नास्ति", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "वीरकुमारकथायाः प्रमुखं प्रतीकं किम्?",
        "options_hi": ["खड्गः", "धनुः", "गदा", "शक्तिः"],
        "answer_hi": "खड्गः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "वीरकुमारस्य कति वर्षाणि बनारसे निवासः आसीत्?",
        "options_hi": ["नास्ति", "पञ्च", "दश", "पञ्चदश"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "वीरकुमारकथायाः प्रथममुद्रणस्य वर्षं किम्?",
        "options_hi": ["अज्ञातम्", "१९००", "१९१०", "१९२०"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "वीरकुमारस्य कति उपाधयः प्रदत्ताः?",
        "options_hi": ["नास्ति", "एका", "द्वे", "त्रयः"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "वीरकुमारकथायाः प्रमुखं संघर्षः कः?",
        "options_hi": ["अधर्मेण सह युद्धम्", "भौतिकसंघर्षः", "आध्यात्मिकसंघर्षः", "सामाजिकसंघर्षः"],
        "answer_hi": "अधर्मेण सह युद्धम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "वीरकुमारस्य कति भगिन्यः आसन्?",
        "options_hi": ["अज्ञातम्", "एका", "द्वे", "त्रयः"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "वीरकुमारकथायाः प्रभावः कति जनजातिषु दृश्यते?",
        "options_hi": ["सर्वासु", "केवलं विद्वत्सु", "केवलं युवसु", "केवलं वृद्धेषु"],
        "answer_hi": "सर्वासु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "वीरकुमारस्य कति राजाश्रयाः प्राप्तवन्तः?",
        "options_hi": ["नास्ति", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "वीरकुमारकथायाः प्रथमपरिच्छेदः किं नाम?",
        "options_hi": ["जन्मप्रकरणम्", "बाल्यप्रकरणम्", "शिक्षाप्रकरणम्", "युद्धप्रकरणम्"],
        "answer_hi": "जन्मप्रकरणम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "वीरकुमारः कति वर्षाणि वीरकुमारकथां लिखितवान्?",
        "options_hi": ["अज्ञातम्", "पञ्च", "दश", "विंशतिः"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "वीरकुमारकथायाः मध्यभागे के वर्णिताः?",
        "options_hi": ["वीरकुमारस्य संघर्षाः", "वीरकुमारस्य युद्धाणि", "वीरकुमारस्य विजयाः", "वीरकुमारस्य यात्राः"],
        "answer_hi": "वीरकुमारस्य संघर्षाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "वीरकुमारस्य प्रसिद्धं चम्पूकाव्यं किम्?",
        "options_hi": ["नास्ति", "वीरचम्पूः", "कुमारचम्पूः", "वीरकुमारचम्पूः"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "वीरकुमारकथायाः अन्तिमपरिच्छेदः किं नाम?",
        "options_hi": ["समाप्तिः", "सारांशः", "उपसंहारः", "निष्कर्षः"],
        "answer_hi": "उपसंहारः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "वीरकुमारस्य समये संस्कृतस्य कः अवस्था आसीत्?",
        "options_hi": ["सुस्थापिता", "पतनावस्था", "मध्यमावस्था", "नवोत्थानावस्था"],
        "answer_hi": "सुस्थापिता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "वीरकुमारकथायाः प्रमुखविषयाः के?",
        "options_hi": ["वीरत्वं, धैर्यं, साहसम्", "प्रेमं, भक्तिः, करुणा", "ज्ञानं, विज्ञानं, कला", "धर्मः, अर्थः, कामः"],
        "answer_hi": ["वीरत्वं, धैर्यं, साहसम्"],
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "वीरकुमारस्य गुरोः नाम किम्?",
        "options_hi": ["द्रोणाचार्यः", "भार्गवः", "वसिष्ठः", "विश्वामित्रः"],
        "answer_hi": "द्रोणाचार्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "वीरकुमारकथायां कति प्रमुखाः पात्राः वर्णिताः?",
        "options_hi": ["दश", "पञ्च", "अष्ट", "द्वादश"],
        "answer_hi": "दश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "वीरकुमारस्य कति स्तोत्रग्रन्थाः प्रसिद्धाः?",
        "options_hi": ["नास्ति", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "वीरकुमारकथायाः कः मुख्यालङ्कारः?",
        "options_hi": ["अतिशयोक्तिः", "उपमा", "रूपकम्", "उत्प्रेक्षा"],
        "answer_hi": "अतिशयोक्तिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "वीरकुमारस्य मरणस्थानं किम्?",
        "options_hi": ["युद्धक्षेत्रम्", "वीरनगरम्", "वनम्", "पर्वतः"],
        "answer_hi": "युद्धक्षेत्रम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "वीरकुमारकथायाः साहित्यिकमूल्यं किम्?",
        "options_hi": ["वीररसप्रधानं", "कलात्मकं", "वैज्ञानिकं", "ऐतिहासिकं"],
        "answer_hi": "वीररसप्रधानं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "वीरकुमारस्य कति भाष्याणि प्रसिद्धानि?",
        "options_hi": ["नास्ति", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "वीरकुमारकथायाः शैलीगतविशेषता का?",
        "options_hi": ["ओजस्विनी", "मधुरा", "कठिना", "सरला"],
        "answer_hi": "ओजस्विनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "वीरकुमारस्य प्रसिद्धं व्याकरणग्रन्थं किम्?",
        "options_hi": ["नास्ति", "वीरव्याकरणम्", "कुमारव्याकरणम्", "वीरकुमारव्याकरणम्"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "वीरकुमारकथायाः रचनाकाले भारते कः कालः आसीत्?",
        "options_hi": ["अज्ञातः", "गुप्तकालः", "मौर्यकालः", "मुगलकालः"],
        "answer_hi": "अज्ञातः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "वीरकुमारस्य कति टीकाग्रन्थाः सन्ति?",
        "options_hi": ["नास्ति", "एका", "द्वे", "त्रयः"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "वीरकुमारकथायाः प्रभावः कस्मात् ग्रन्थात् दृश्यते?",
        "options_hi": ["महाभारतात्", "रामायणात्", "पुराणेभ्यः", "वेदेभ्यः"],
        "answer_hi": "महाभारतात्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "वीरकुमारस्य प्रसिद्धः श्लोकार्धः 'धर्मेण जयति' कुत्र लिखितः?",
        "options_hi": ["अन्यत्र", "वीरकुमारकथायाम्", "महाभारते", "रामायणे"],
        "answer_hi": "अन्यत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "वीरकुमारकथायाः पठनफलं किम्?",
        "options_hi": ["साहसबोधः", "ज्ञानप्राप्तिः", "धर्मबोधः", "भक्तिप्राप्तिः"],
        "answer_hi": "साहसबोधः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "वीरकुमारस्य काव्ये कस्य भाषायाः प्रभावः दृश्यते?",
        "options_hi": ["संस्कृतभाषायाः", "प्राकृतभाषायाः", "पालिभाषायाः", "अपभ्रंशभाषायाः"],
        "answer_hi": "संस्कृतभाषायाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "वीरकुमारकथायाः प्रमुखं सङ्केतं किम्?",
        "options_hi": ["वीरः सदा धार्मिकः", "वीरः सदा जयति", "वीरः सदा दयालुः", "वीरः सदा ज्ञानी"],
        "answer_hi": "वीरः सदा जयति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "वीरकुमारस्य कति वर्षाणि वीरनगरे निवासः आसीत्?",
        "options_hi": ["सम्पूर्णजीवनम्", "विंशतिवर्षाणि", "त्रिंशतिवर्षाणि", "चत्वारिंशतिवर्षाणि"],
        "answer_hi": "सम्पूर्णजीवनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "वीरकुमारकथायाः समकालीनाः के अन्ये ग्रन्थाः?",
        "options_hi": ["अज्ञातम्", "पञ्चतन्त्रम्", "हितोपदेशः", "कथासरित्सागरः"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "वीरकुमारस्य प्रसिद्धः भक्तिस्तोत्रग्रन्थः कः?",
        "options_hi": ["नास्ति", "वीरस्तोत्रम्", "कुमारस्तोत्रम्", "वीरकुमारस्तोत्रम्"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "वीरकुमारकथायाः शिक्षणं कस्मै विशेषतः उपयोगि?",
        "options_hi": ["युवकानाम्", "विद्यार्थिभ्यः", "राजभ्यः", "सन्यासिभ्यः"],
        "answer_hi": "युवकानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "वीरकुमारस्य प्रसिद्धं सूक्तिसंग्रहं किम्?",
        "options_hi": ["नास्ति", "वीरसूक्तिः", "कुमारसूक्तिः", "वीरकुमारसूक्तिः"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "वीरकुमारकथायाः मूलं दर्शनं किम्?",
        "options_hi": ["क्षत्रियधर्मः", "ज्ञानयोगः", "भक्तियोगः", "कर्मयोगः"],
        "answer_hi": "क्षत्रियधर्मः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "वीरकुमारः कति वर्षाणि शिक्षां दत्तवान्?",
        "options_hi": ["अज्ञातम्", "विंशतिः", "त्रिंशतिः", "चत्वारिंशतिः"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "वीरकुमारकथायाः प्रकाशनं प्रथमवारं कुत्र अभवत्?",
        "options_hi": ["अज्ञातम्", "बम्बैनगरे", "मद्रासनगरे", "कलकत्तानगरे"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "वीरकुमारस्य कति प्रशस्तिलेखाः सुरक्षिताः?",
        "options_hi": ["नास्ति", "एका", "द्वे", "त्रयः"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "वीरकुमारकथायाः प्रभावः कति देशीयभाषासु अनूदितः?",
        "options_hi": ["अनेकासु", "एकस्याम्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकासु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "वीरकुमारस्य कति प्रबन्धनाटकानि सन्ति?",
        "options_hi": ["नास्ति", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "वीरकुमारकथायाः प्रमुखं दार्शनिकं तत्त्वं किम्?",
        "options_hi": ["साहसम्", "ब्रह्मज्ञानम्", "आत्मज्ञानम्", "ईश्वरज्ञानम्"],
        "answer_hi": "साहसम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "वीरकुमारस्य कति वर्षाणि प्रवासः कृतः?",
        "options_hi": ["अज्ञातम्", "दश", "पञ्चदश", "विंशतिः"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "वीरकुमारकथायाः साहित्यिकप्रकारः कः?",
        "options_hi": ["वीरकथा", "प्रेमकथा", "नीतिकथा", "भक्तिकथा"],
        "answer_hi": "वीरकथा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "वीरकुमारस्य प्रसिद्धं वैयाकरणं कार्यं किम्?",
        "options_hi": ["नास्ति", "वीरशब्दमञ्जरी", "कुमारशब्दमञ्जरी", "वीरकुमारशब्दमञ्जरी"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "वीरकुमारकथायाः प्रभावः कति विश्वविद्यालयेषु शोधविषयः अस्ति?",
        "options_hi": ["अनेकेषु", "एकस्मिन्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "वीरकुमारस्य कति समालोचनाग्रन्थाः सन्ति?",
        "options_hi": ["नास्ति", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "वीरकुमारकथायाः समाप्तेः संदेशः कः?",
        "options_hi": ["वीरः सदा अमरः", "ज्ञानं प्राप्नुहि", "धर्मं पालय", "ईश्वरं भज"],
        "answer_hi": "वीरः सदा अमरः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "वीरकुमारस्य पूर्णनाम किम्?",
        "options_hi": ["वीरकुमारः", "वीरकुमारसिंहः", "वीरकुमारवर्मा", "वीरकुमारदेवः"],
        "answer_hi": "वीरकुमारः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "वीरकुमारकथायाः प्रकाशनवर्षं किम्?",
        "options_hi": ["अज्ञातम्", "१९००", "१९२०", "१९५०"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "वीरकुमारस्य समये कः राजा आसीत्?",
        "options_hi": ["वीरसिंहः", "वीरभद्रः", "वीरेन्द्रः", "वीरवर्मा"],
        "answer_hi": "वीरसिंहः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "वीरकुमारकथायां कति प्रकारकाः युद्धाणि वर्णितानि?",
        "options_hi": ["त्रीणि", "द्वे", "चत्वारि", "पञ्च"],
        "answer_hi": "त्रीणि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "वीरकुमारस्य काव्ये कः रसः प्राधान्येन दृश्यते?",
        "options_hi": ["वीररसः", "शृङ्गाररसः", "शान्तरसः", "अद्भुतरसः"],
        "answer_hi": "वीररसः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "वीरकुमारकथायाः प्रमुखसन्देशः कः?",
        "options_hi": ["वीरत्वस्य महत्त्वम्", "प्रेमस्य महत्त्वम्", "धर्मस्य महत्त्वम्", "ज्ञानस्य महत्त्वम्"],
        "answer_hi": "वीरत्वस्य महत्त्वम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "वीरकुमारस्य प्रसिद्धं नाटकं किम्?",
        "options_hi": ["नास्ति", "वीरकुमारनाटकम्", "वीरनाटकम्", "कुमारनाटकम्"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "वीरकुमारकथायाः रचनाविधिः का?",
        "options_hi": ["आख्यानात्मिका", "वर्णनात्मिका", "संवादात्मिका", "सूत्रात्मिका"],
        "answer_hi": "आख्यानात्मिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "वीरकुमारस्य प्रसिद्धः श्लोकः 'वीरः सदा जयति' कुत्र प्राप्यते?",
        "options_hi": ["वीरकुमारकथायाम्", "रामायणे", "महाभारते", "पुराणे"],
        "answer_hi": "वीरकुमारकथायाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "वीरकुमारकथायाः साहित्यमूल्याङ्कने कः दोषः?",
        "options_hi": ["नास्ति", "अतिशयोक्तिः", "अस्पष्टता", "निरर्थकता"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "वीरकुमारस्य कति प्रतियोगिताः आयोजिताः?",
        "options_hi": ["नास्ति", "एका", "द्वे", "त्रयः"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "वीरकुमारकथायाः नायकस्य चरित्रं कथं वर्णितम्?",
        "options_hi": ["आदर्शवीररूपेण", "मानवरूपेण", "देवरूपेण", "पशुरूपेण"],
        "answer_hi": "आदर्शवीररूपेण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "वीरकुमारस्य कति ग्रन्थाणां मूलहस्तलिखितानि सन्ति?",
        "options_hi": ["नास्ति", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "वीरकुमारकथायाः प्रभावः कति आधुनिककविषु दृश्यते?",
        "options_hi": ["अनेकेषु", "एकस्मिन्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "वीरकुमारस्य कति वंशजाः ज्ञाताः?",
        "options_hi": ["अज्ञातम्", "अनेकाः", "एकः", "द्वौ"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "वीरकुमारकथायाः कः मुख्यं प्रयोजनं?",
        "options_hi": ["वीरचरित्रप्रदर्शनम्", "ज्ञानप्रचारः", "धर्मप्रचारः", "भक्तिप्रचारः"],
        "answer_hi": "वीरचरित्रप्रदर्शनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "वीरकुमारस्य कति सभापतित्वानि स्वीकृतानि?",
        "options_hi": ["नास्ति", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "वीरकुमारकथायाः प्रकाशनकालः कः?",
        "options_hi": ["अज्ञातः", "मध्यकालः", "आधुनिककालः", "प्राचीनकालः"],
        "answer_hi": "अज्ञातः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "वीरकुमारस्य कति सम्माननपत्राणि प्रदत्तानि?",
        "options_hi": ["नास्ति", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "वीरकुमारकथायाः प्रमुखं दृष्टान्तं किम्?",
        "options_hi": ["वीरकुमारस्य युद्धकौशलम्", "रामराज्यम्", "कृष्णलीला", "बुद्धजीवनम्"],
        "answer_hi": "वीरकुमारस्य युद्धकौशलम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "वीरकुमारस्य कति निबन्धाः संकलिताः?",
        "options_hi": ["नास्ति", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "वीरकुमारकथायाः प्रभावः कति विदेशीयविश्वविद्यालयेषु दृश्यते?",
        "options_hi": ["अनेकेषु", "एकस्मिन्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "वीरकुमारस्य कति प्रशंसकमण्डलानि सन्ति?",
        "options_hi": ["नास्ति", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "वीरकुमारकथायाः प्रमुखं सिद्धान्तं किम्?",
        "options_hi": ["क्षात्रधर्मः", "ज्ञानवादः", "धर्मवादः", "भक्तिवादः"],
        "answer_hi": "क्षात्रधर्मः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "वीरकुमारस्य कति संस्करणानि प्रचलितानि?",
        "options_hi": ["अनेकानि", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "अनेकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "वीरकुमारकथायाः कः मुख्यं प्रतिपाद्यविषयः?",
        "options_hi": ["वीरकुमारस्य वीरचरित्रम्", "ज्ञानमहिमा", "धर्ममहिमा", "भक्तिमहिमा"],
        "answer_hi": "वीरकुमारस्य वीरचरित्रम्",
        "attempted": false,
        "selected": ""
    },
        {
        "num": 77,
        "question_hi": "वीरकुमारस्य कति शिष्याः प्रसिद्धाः?",
        "options_hi": ["अज्ञातम्", "दश", "पञ्च", "विंशतिः"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "वीरकुमारकथायाः प्रमुखं मूलमन्त्रं किम्?",
        "options_hi": ["सत्यं वद, धर्मं चर", "वीरं भव, शूरं भव", "ज्ञानं प्राप्नुहि, मुक्तिं प्राप्नुहि", "ईश्वरं भज, भक्तिं कुरु"],
        "answer_hi": "वीरं भव, शूरं भव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "वीरकुमारस्य कति पुरस्काराः प्राप्ताः?",
        "options_hi": ["नास्ति", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "वीरकुमारकथायाः कति अनुवादाः सन्ति?",
        "options_hi": ["अनेकाः", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "वीरकुमारस्य कति विदेशयात्राः कृताः?",
        "options_hi": ["अज्ञातम्", "एका", "द्वे", "त्रयः"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "वीरकुमारकथायाः प्रमुखं संवादं कः?",
        "options_hi": ["वीरकुमारस्य गुरुणा सह संवादः", "वीरकुमारस्य राज्ञा सह संवादः", "वीरकुमारस्य मित्रेण सह संवादः", "वीरकुमारस्य शत्रुणा सह संवादः"],
        "answer_hi": "वीरकुमारस्य गुरुणा सह संवादः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "वीरकुमारस्य कति प्राचीनभाण्डानि संग्रहालये सन्ति?",
        "options_hi": ["नास्ति", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "वीरकुमारकथायाः प्रमुखं प्रभावः कस्मिन् वर्गे?",
        "options_hi": ["युवकेषु", "वृद्धेषु", "स्त्रीषु", "बालकेषु"],
        "answer_hi": "युवकेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "वीरकुमारस्य कति संस्कृतश्लोकाणि कथायां सन्ति?",
        "options_hi": ["शताधिकानि", "पञ्चाशत्", "विंशतिः", "दश"],
        "answer_hi": "शताधिकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "वीरकुमारकथायाः प्रमुखं नैतिकं सन्देशं किम्?",
        "options_hi": ["धैर्यं धारय, सत्यं वद", "प्रेमं कुरु, दया दर्शय", "ज्ञानं प्राप्नुहि, विज्ञानं शिक्ष", "ईश्वरं भज, प्रार्थनां कुरु"],
        "answer_hi": "धैर्यं धारय, सत्यं वद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "वीरकुमारस्य कति प्रतिमाः प्रतिष्ठिताः?",
        "options_hi": ["नास्ति", "एका", "द्वे", "त्रयः"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "वीरकुमारकथायाः प्रमुखं भाषागतं सौन्दर्यं किम्?",
        "options_hi": ["ओजस्विनी भाषा", "मधुरा भाषा", "सरला भाषा", "क्लिष्टा भाषा"],
        "answer_hi": "ओजस्विनी भाषा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "वीरकुमारस्य कति कथासंग्रहाः प्रसिद्धाः?",
        "options_hi": ["नास्ति", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "वीरकुमारकथायाः प्रमुखं दार्शनिकं वक्तव्यं किम्?",
        "options_hi": ["मृत्योर्मुखेऽपि न भयं", "ज्ञानादेव मुक्तिः", "भक्त्या सर्वं साध्यम्", "कर्मणा मोक्षः"],
        "answer_hi": "मृत्योर्मुखेऽपि न भयं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "वीरकुमारस्य कति व्याख्यानानि दत्तानि?",
        "options_hi": ["नास्ति", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "वीरकुमारकथायाः प्रमुखं कथासूत्रं किम्?",
        "options_hi": ["वीरकुमारस्य जीवनसंघर्षः", "प्रेमकथा", "राजकथा", "देवकथा"],
        "answer_hi": "वीरकुमारस्य जीवनसंघर्षः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "वीरकुमारस्य कति शताब्दीसमारोहाः आयोजिताः?",
        "options_hi": ["नास्ति", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "वीरकुमारकथायाः प्रमुखं काव्यलक्षणं किम्?",
        "options_hi": ["ओजोगुणप्रधानता", "माधुर्यगुणप्रधानता", "प्रसादगुणप्रधानता", "कान्तिगुणप्रधानता"],
        "answer_hi": "ओजोगुणप्रधानता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "वीरकुमारस्य कति वंशावल्यः उपलब्धाः?",
        "options_hi": ["नास्ति", "एका", "द्वे", "त्रयः"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "वीरकुमारकथायाः प्रमुखं शैक्षणिकं मूल्यं किम्?",
        "options_hi": ["चारित्रनिर्माणम्", "ज्ञानप्राप्तिः", "विज्ञानशिक्षा", "कलाशिक्षा"],
        "answer_hi": "चारित्रनिर्माणम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "वीरकुमारस्य कति प्रासङ्गिककथाः सन्ति?",
        "options_hi": ["अनेकाः", "एका", "द्वे", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "वीरकुमारकथायाः प्रमुखं आधुनिकप्रासङ्गिकता का?",
        "options_hi": ["युवकानां प्रेरणास्रोतः", "विद्यार्थिनां ज्ञानस्रोतः", "वृद्धानां मनोरञ्जनम्", "बालकानां कथास्रोतः"],
        "answer_hi": "युवकानां प्रेरणास्रोतः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "वीरकुमारस्य कति शोधप्रबन्धाः लिखिताः?",
        "options_hi": ["अनेकाः", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "वीरकुमारकथायाः सार्वकालिकं सन्देशः कः?",
        "options_hi": ["वीरः सदा अमरः, सत्यं सदा विजयते", "ज्ञानं सर्वोत्तमं, विज्ञानं महत्त्वपूर्णम्", "धर्मः सर्वोत्तमः, अधर्मः निन्द्यः", "ईश्वरः सर्वत्र, भक्तिः सर्वसाधनम्"],
        "answer_hi": "वीरः सदा अमरः, सत्यं सदा विजयते",
        "attempted": false,
        "selected": ""
    }
];
// All the JavaScript functions remain exactly the same as previous
// Just replace the questions array with this new one
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