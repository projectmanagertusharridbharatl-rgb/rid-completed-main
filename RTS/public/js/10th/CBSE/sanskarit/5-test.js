const questions = [
    {
        "num": 1,
        "question_hi": "भर्तृहरिः कः?",
        "options_hi": ["संस्कृतकविः", "राजा", "योद्धा", "वैज्ञानिकः"],
        "answer_hi": "संस्कृतकविः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "भर्तृहरेः नीतिशतकं कति श्लोकानि सन्ति?",
        "options_hi": ["शतम्", "पञ्चाशत्", "सप्तति", "अशीतिः"],
        "answer_hi": "शतम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "नीतिशतकस्य रचनाकालः कः?",
        "options_hi": ["सप्तमशतकम्", "द्वितीयशतकम्", "दशमशतकम्", "पञ्चदशशतकम्"],
        "answer_hi": "सप्तमशतकम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "भर्तृहरिः कस्य राज्यस्य मन्त्री आसीत्?",
        "options_hi": ["विक्रमादित्यस्य", "हर्षस्य", "चन्द्रगुप्तस्य", "अशोकस्य"],
        "answer_hi": "विक्रमादित्यस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "भर्तृहरेः त्रयः शतकाः के सन्ति?",
        "options_hi": ["नीतिशतकं, शृङ्गारशतकं, वैराग्यशतकं च", "रामायणं, महाभारतं, पुराणं च", "ऋग्वेदः, यजुर्वेदः, सामवेदः च", "अर्थशास्त्रं, कामसूत्रं, धर्मशास्त्रं च"],
        "answer_hi": "नीतिशतकं, शृङ्गारशतकं, वैराग्यशतकं च",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "नीतिशतकं कस्य विषये अस्ति?",
        "options_hi": ["जीवननीतेः", "प्रेम्णः", "वैराग्यस्य", "युद्धकलायाः"],
        "answer_hi": "जीवननीतेः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "भर्तृहरिः कस्यां भाषायां लिखितवान्?",
        "options_hi": ["संस्कृते", "प्राकृते", "पालौ", "हिन्द्याम्"],
        "answer_hi": "संस्कृते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "नीतिशतकस्य प्रथमः श्लोकः किम् आरभते?",
        "options_hi": ["अलसस्य कुतो विद्या...", "विद्यां ददाति विनयं...", "धनानि जीवितं चैव...", "सुखार्थी त्यजते विद्याम्..."],
        "answer_hi": "अलसस्य कुतो विद्या...",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "भर्तृहरेः मूलनाम किम् आसीत्?",
        "options_hi": ["भर्तृहरिः एव", "हरिभद्रः", "भर्तृदत्तः", "हरिश्चन्द्रः"],
        "answer_hi": "भर्तृहरिः एव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "नीतिशतकं कति प्रकरणेषु विभक्तम्?",
        "options_hi": ["एकस्मिन्", "द्वयोः", "त्रिषु", "चतुर्षु"],
        "answer_hi": "एकस्मिन्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "भर्तृहरिः कुत्र जन्म लब्धवान्?",
        "options_hi": ["उज्जयिन्याम्", "काश्याम्", "प्रयागे", "द्वारकायाम्"],
        "answer_hi": "उज्जयिन्याम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "नीतिशतकं कति छन्दोभिः रचितम्?",
        "options_hi": ["अनेकैः", "एकेन", "द्वाभ्याम्", "त्रिभिः"],
        "answer_hi": "अनेकैः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "भर्तृहरेः गुरुः कः?",
        "options_hi": ["वसुगुप्तः", "पतञ्जलिः", "पाणिनिः", "व्यासः"],
        "answer_hi": "वसुगुप्तः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "नीतिशतकस्य समाप्तिः कैः भवति?",
        "options_hi": ["इत्येषा सुमती भर्तृहरेः...", "इति श्रीभर्तृहरिविरचितं नीतिशतकं समाप्तम्", "शुभं भूयात्", "हरिः ॐ"],
        "answer_hi": "इत्येषा सुमती भर्तृहरेः...",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "भर्तृहरिः केषां त्रयाणां रचयिता?",
        "options_hi": ["शतकत्रयस्य", "पुराणत्रयस्य", "नाटकत्रयस्य", "काव्यत्रयस्य"],
        "answer_hi": "शतकत्रयस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "नीतिशतके कति प्रकाराः नीतेः वर्णिताः?",
        "options_hi": ["अनेकाः", "दश", "पञ्च", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "भर्तृहरेः पितुः नाम किम्?",
        "options_hi": ["वीरसेनः", "धनञ्जयः", "भानुगुप्तः", "जयदेवः"],
        "answer_hi": "वीरसेनः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "नीतिशतकं कस्मै उपदिशति?",
        "options_hi": ["सर्वेभ्यः मानवेभ्यः", "केवलं राजभ्यः", "केवलं ब्राह्मणेभ्यः", "केवलं युवभ्यः"],
        "answer_hi": "सर्वेभ्यः मानवेभ्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "भर्तृहरिः कस्य समकालीनः?",
        "options_hi": ["कालिदासस्य", "तुलसीदासस्य", "वेदव्यासस्य", "वाल्मीकेः"],
        "answer_hi": "कालिदासस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "नीतिशतकस्य मुख्यं उद्देश्यं किम्?",
        "options_hi": ["मानवं सदाचारे प्रेरयितुम्", "धनं प्रापयितुम्", "राज्यं प्रापयितुम्", "यशः प्रापयितुम्"],
        "answer_hi": "मानवं सदाचारे प्रेरयितुम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "भर्तृहरिः कति भाषाणां ज्ञाता आसीत्?",
        "options_hi": ["अनेकानाम्", "एकस्याः", "द्वयोः", "त्रयाणाम्"],
        "answer_hi": "अनेकानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "नीतिशतकस्य प्रसिद्धः श्लोकः 'विद्यां ददाति विनयं...' किं वदति?",
        "options_hi": ["विद्यायाः गुणान्", "धनस्य गुणान्", "यशस्य गुणान्", "बलस्य गुणान्"],
        "answer_hi": "विद्यायाः गुणान्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "भर्तृहरेः भ्रातुः नाम किम्?",
        "options_hi": ["विक्रमादित्यः", "भानुगुप्तः", "चन्द्रगुप्तः", "समुद्रगुप्तः"],
        "answer_hi": "विक्रमादित्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "नीतिशतकं केषां विषये उपदेशं ददाति?",
        "options_hi": ["धर्मस्य, अर्थस्य, कामस्य, मोक्षस्य च", "युद्धस्य, शान्तेः, समृद्धेः, दरिद्रस्य च", "राज्ञः, प्रजानां, सेनायाः, मन्त्रिणां च", "ब्राह्मणस्य, क्षत्रियस्य, वैश्यस्य, शूद्रस्य च"],
        "answer_hi": "धर्मस्य, अर्थस्य, कामस्य, मोक्षस्य च",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "भर्तृहरिः कति वर्षाणि जीवितवान्?",
        "options_hi": ["अज्ञातम्", "शतवर्षाणि", "अष्टाविंशतिः", "पञ्चाशत्"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "नीतिशतकस्य कः प्रमुखः विषयः?",
        "options_hi": ["सदाचारः", "प्रेम", "वैराग्यम्", "युद्धम्"],
        "answer_hi": "सदाचारः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "भर्तृहरिः कस्य पुत्रः?",
        "options_hi": ["वीरसेनस्य", "भानुगुप्तस्य", "जयसेनस्य", "देवसेनस्य"],
        "answer_hi": "वीरसेनस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "नीतिशतकं कति अध्यायेषु विभक्तम्?",
        "options_hi": ["न विभक्तम्", "दशसु", "पञ्चसु", "विंशतौ"],
        "answer_hi": "न विभक्तम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "भर्तृहरेः पत्न्याः नाम किम्?",
        "options_hi": ["चन्द्रप्रभा", "लक्ष्मी", "पार्वती", "अज्ञातम्"],
        "answer_hi": "चन्द्रप्रभा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "नीतिशतकस्य प्रसिद्धः उपदेशः 'कः कालः?' किं प्रश्नं करोति?",
        "options_hi": ["जीवनस्य मूल्यं", "धनस्य मूल्यं", "समयस्य मूल्यं", "विद्यायाः मूल्यं"],
        "answer_hi": "समयस्य मूल्यं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "भर्तृहरिः कति ग्रन्थानां रचयिता?",
        "options_hi": ["त्रयाणाम्", "एकस्य", "द्वयोः", "चतुर्णाम्"],
        "answer_hi": "त्रयाणाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "नीतिशतकं कैः पठ्यते?",
        "options_hi": ["विद्यार्थिभिः", "राजभिः", "वैज्ञानिकैः", "योगिभिः"],
        "answer_hi": "विद्यार्थिभिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "भर्तृहरेः मृत्युः कदा अभवत्?",
        "options_hi": ["अज्ञातम्", "७५० ईसवीये", "६५० ईसवीये", "८५० ईसवीये"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "नीतिशतकस्य प्रारम्भिकः श्लोकः किं वदति?",
        "options_hi": ["अलस्य निन्दां करोति", "विद्यायाः महत्त्वं वदति", "धनस्य निन्दां करोति", "यशस्य प्रशंसां करोति"],
        "answer_hi": "अलस्य निन्दां करोति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "भर्तृहरिः कस्यां विद्यायां निपुणः आसीत्?",
        "options_hi": ["सर्वासु", "केवलं काव्ये", "केवलं नाटके", "केवलं व्याकरणे"],
        "answer_hi": "सर्वासु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "नीतिशतकं कति भाषासु अनूदितम्?",
        "options_hi": ["अनेकासु", "एकस्याम्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकासु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "भर्तृहरिः कति शास्त्राणां ज्ञाता आसीत्?",
        "options_hi": ["चतुर्दश", "षट्", "अष्टौ", "दश"],
        "answer_hi": "चतुर्दश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "नीतिशतकस्य श्लोकाः कति अक्षराणि सन्ति?",
        "options_hi": ["विविधानि", "सर्वे अष्टाक्षराणि", "सर्वे दशाक्षराणि", "सर्वे द्वादशाक्षराणि"],
        "answer_hi": "विविधानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "भर्तृहरेः प्रसिद्धः श्लोकः 'धनानि जीवितं चैव...' किं वदति?",
        "options_hi": ["परार्थं प्राणाः...", "स्वार्थं प्राणाः...", "धनं प्राणाः...", "यशः प्राणाः..."],
        "answer_hi": "परार्थं प्राणाः...",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "नीतिशतकं कस्मिन् परिवेशे लिखितम्?",
        "options_hi": ["राजसभायाम्", "वनम्", "ग्रामे", "मठे"],
        "answer_hi": "राजसभायाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "भर्तृहरिः केषां नीतिं वर्णयति?",
        "options_hi": ["सामान्यजनानाम्", "केवलं राज्ञाम्", "केवलं ब्राह्मणानाम्", "केवलं सन्यासिनाम्"],
        "answer_hi": "सामान्यजनानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "नीतिशतकस्य प्रसिद्धः उपदेशः 'सुखार्थी त्यजते विद्याम्...' किं सूचयति?",
        "options_hi": ["विद्यालाभाय तपः कर्तव्यम्", "सुखं प्रधानम्", "विद्या निष्फला", "धनं प्रधानम्"],
        "answer_hi": "विद्यालाभाय तपः कर्तव्यम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "भर्तृहरेः शिक्षा कुत्र अभवत्?",
        "options_hi": ["उज्जयिन्याम्", "तक्षशिलायाम्", "नालन्दायाम्", "वाराणस्याम्"],
        "answer_hi": "उज्जयिन्याम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "नीतिशतकं कति प्रकारकैः छन्दोभिः रचितम्?",
        "options_hi": ["विविधैः", "एकप्रकारेण", "द्विप्रकारैः", "त्रिप्रकारैः"],
        "answer_hi": "विविधैः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "भर्तृहरिः कस्य राज्ञः सभाकविः आसीत्?",
        "options_hi": ["विक्रमादित्यस्य", "हर्षवर्धनस्य", "समुद्रगुप्तस्य", "चन्द्रगुप्तस्य"],
        "answer_hi": "विक्रमादित्यस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "नीतिशतकस्य मध्यभागे किं वर्णितम्?",
        "options_hi": ["मित्रस्य लक्षणम्", "शत्रोः लक्षणम्", "धनस्य लक्षणम्", "यशस्य लक्षणम्"],
        "answer_hi": ["मित्रस्य लक्षणम्", "शत्रोः लक्षणम्"],
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "भर्तृहरेः काव्यशैली का?",
        "options_hi": ["सरला एवं प्रभावशालिनी", "क्लिष्टा", "वैज्ञानिकी", "अस्पष्टा"],
        "answer_hi": "सरला एवं प्रभावशालिनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "नीतिशतकं कति सन्धिषु विभक्तम्?",
        "options_hi": ["न विभक्तम्", "दशसु", "पञ्चसु", "अष्टसु"],
        "answer_hi": "न विभक्तम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "भर्तृहरिः कति वेदानां ज्ञाता आसीत्?",
        "options_hi": ["चतुर्णाम्", "त्रयाणाम्", "द्वयोः", "एकस्य"],
        "answer_hi": "चतुर्णाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "नीतिशतकस्य अन्तिमः श्लोकः किं वदति?",
        "options_hi": ["भर्तृहरेः नीतेः सारांशम्", "विद्यायाः महिमा", "धनस्य निन्दा", "जीवनस्य सारम्"],
        "answer_hi": "भर्तृहरेः नीतेः सारांशम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "भर्तृहरेः शतकत्रयं कति श्लोकानि सन्ति?",
        "options_hi": ["त्रिशतानि", "शतं मात्रम्", "पञ्चशतानि", "सप्तशतानि"],
        "answer_hi": "त्रिशतानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "नीतिशतके विद्यायाः कति गुणाः वर्णिताः?",
        "options_hi": ["षट्", "चत्वारः", "अष्टौ", "दश"],
        "answer_hi": "षट्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "भर्तृहरिः कस्य दर्शनस्य अनुयायी आसीत्?",
        "options_hi": ["सांख्यदर्शनस्य", "योगदर्शनस्य", "वेदान्तदर्शनस्य", "मीमांसादर्शनस्य"],
        "answer_hi": "सांख्यदर्शनस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "नीतिशतकस्य प्रसिद्धः श्लोकः 'यस्य नास्ति स्वयं प्रज्ञा...' किं वदति?",
        "options_hi": ["मूर्खस्य निन्दां करोति", "विदुषः प्रशंसां करोति", "धनिकस्य निन्दां करोति", "दरिद्रस्य प्रशंसां करोति"],
        "answer_hi": "मूर्खस्य निन्दां करोति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "भर्तृहरेः प्रसिद्धः उपदेशः 'कालः करोति...' किं पूर्णं वाक्यं?",
        "options_hi": ["कालः करोति कार्याणि", "कालः करोति वैराणि", "कालः करोति मित्राणि", "कालः करोति सर्वाणि"],
        "answer_hi": "कालः करोति सर्वाणि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "नीतिशतकं कति प्रकारकैः नीतिबोधं ददाति?",
        "options_hi": ["दृष्टान्तैः सह", "केवलं सिद्धान्तैः", "केवलं नियमैः", "केवलं आज्ञाभिः"],
        "answer_hi": "दृष्टान्तैः सह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "भर्तृहरेः मातुः नाम किम्?",
        "options_hi": ["सुमति", "लक्ष्मी", "सावित्री", "अज्ञातम्"],
        "answer_hi": "सुमति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "नीतिशतकस्य प्रसिद्धः उपदेशः 'धनानि जीवितं चैव...' किं शिक्षां ददाति?",
        "options_hi": ["परोपकाराय जीवितं धनं च", "स्वार्थाय जीवितं धनं च", "यशःप्राप्त्यै जीवितं धनं च", "सुखाय जीवितं धनं च"],
        "answer_hi": "परोपकाराय जीवितं धनं च",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "भर्तृहरिः कति उपनिषदां ज्ञाता आसीत्?",
        "options_hi": ["दशानाम्", "पञ्चानाम्", "अष्टानाम्", "द्वादशानाम्"],
        "answer_hi": "दशानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "नीतिशतकं केभ्यः विशेषतः उपयोगी?",
        "options_hi": ["विद्यार्थिभ्यः", "व्यापारिभ्यः", "कृषकेभ्यः", "योद्धृभ्यः"],
        "answer_hi": "विद्यार्थिभ्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "भर्तृहरेः प्रसिद्धः श्लोकः 'अलसस्य कुतो विद्या...' किं पूर्णं वाक्यं?",
        "options_hi": ["अलसस्य कुतो विद्या अलसस्य कुतो धनम्", "अलसस्य कुतो विद्या अविदुषः कुतो धनम्", "अलसस्य कुतो विद्या अनध्यायिनः कुतो धनम्", "अलसस्य कुतो विद्या अकर्मणः कुतो धनम्"],
        "answer_hi": "अलसस्य कुतो विद्या अलसस्य कुतो धनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "नीतिशतकस्य श्लोकाः कति पङ्क्तिषु लिखिताः?",
        "options_hi": ["द्विपङ्क्तिषु", "चतुष्पङ्क्तिषु", "एकपङ्क्तौ", "त्रिपङ्क्तिषु"],
        "answer_hi": "द्विपङ्क्तिषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "भर्तृहरिः कति व्याकरणग्रन्थानां ज्ञाता आसीत्?",
        "options_hi": ["अष्टाध्याय्याः", "सिद्धान्तकौमुद्याः", "पाणिनीयस्य", "सर्वेषाम्"],
        "answer_hi": "सर्वेषाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "नीतिशतकस्य प्रसिद्धः उपदेशः 'सत्यं ब्रूयात् प्रियं ब्रूयात्...' किं वदति?",
        "options_hi": ["वाक्पटुत्वस्य महत्त्वम्", "मौनस्य महत्त्वम्", "सत्यभाषणस्य महत्त्वम्", "प्रियवचनस्य महत्त्वम्"],
        "answer_hi": "वाक्पटुत्वस्य महत्त्वम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "भर्तृहरेः काव्ये कः रसः प्रधानः?",
        "options_hi": ["शान्तरसः", "शृङ्गाररसः", "वीररसः", "हास्यरसः"],
        "answer_hi": "शान्तरसः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "नीतिशतकं कति प्रकारकं ज्ञानं ददाति?",
        "options_hi": ["व्यावहारिकं ज्ञानम्", "वैज्ञानिकं ज्ञानम्", "आध्यात्मिकं ज्ञानम्", "कलात्मकं ज्ञानम्"],
        "answer_hi": "व्यावहारिकं ज्ञानम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "भर्तृहरेः प्रसिद्धः श्लोकः 'विद्यां ददाति विनयं...' कति गुणान् वर्णयति?",
        "options_hi": ["षट्", "चत्वारः", "अष्टौ", "दश"],
        "answer_hi": "षट्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "नीतिशतकस्य प्रसिद्धः उपदेशः 'मित्रं प्राप्तं यदि...' किं पूर्णं वाक्यं?",
        "options_hi": ["मित्रं प्राप्तं यदि सत्पुरुषेण सह", "मित्रं प्राप्तं यदि विदुषा सह", "मित्रं प्राप्तं यदि धनीभिः सह", "मित्रं प्राप्तं यदि बलवता सह"],
        "answer_hi": "मित्रं प्राप्तं यदि सत्पुरुषेण सह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "भर्तृहरिः कति पुराणानां ज्ञाता आसीत्?",
        "options_hi": ["अष्टादशानाम्", "दशानाम्", "पञ्चानाम्", "विंशतेः"],
        "answer_hi": "अष्टादशानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "नीतिशतकं कति वर्षेभ्यः प्राचीनम्?",
        "options_hi": ["सहस्रवर्षेभ्यः", "शतवर्षेभ्यः", "पञ्चशतवर्षेभ्यः", "द्विशतवर्षेभ्यः"],
        "answer_hi": "सहस्रवर्षेभ्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "भर्तृहरेः प्रसिद्धः उपदेशः 'सुखार्थी त्यजते विद्याम्...' कति पङ्क्तिषु अस्ति?",
        "options_hi": ["द्वयोः", "चतुर्षु", "एकस्याम्", "षट्सु"],
        "answer_hi": "द्वयोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "नीतिशतकस्य प्रसिद्धः श्लोकः 'धनानि जीवितं चैव...' कति अक्षराणि सन्ति?",
        "options_hi": ["द्वात्रिंशत्", "चतुर्विंशतिः", "अष्टाविंशतिः", "षोडश"],
        "answer_hi": "द्वात्रिंशत्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "भर्तृहरिः कति नाटकानां रचयिता?",
        "options_hi": ["न कस्यापि", "एकस्य", "द्वयोः", "त्रयाणाम्"],
        "answer_hi": "न कस्यापि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "नीतिशतकस्य प्रसिद्धः उपदेशः 'कः कालः?' कति प्रश्नान् पृच्छति?",
        "options_hi": ["चतुरः", "द्वौ", "षट्", "अष्टौ"],
        "answer_hi": "चतुरः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "भर्तृहरेः प्रसिद्धः श्लोकः 'विद्यां ददाति विनयं...' कस्य ग्रन्थस्य भागः?",
        "options_hi": ["नीतिशतकस्य", "शृङ्गारशतकस्य", "वैराग्यशतकस्य", "सर्वेषाम्"],
        "answer_hi": "नीतिशतकस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "नीतिशतकं कति प्रकारकाणि उदाहरणानि ददाति?",
        "options_hi": ["प्रकृतिवर्णनानि", "पशुवर्णनानि", "नदीवर्णनानि", "पर्वतवर्णनानि"],
        "answer_hi": "प्रकृतिवर्णनानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "भर्तृहरेः प्रसिद्धः उपदेशः 'अलसस्य कुतो विद्या...' कति पादेषु विभक्तः?",
        "options_hi": ["चतुर्षु", "द्वयोः", "त्रिषु", "षट्सु"],
        "answer_hi": "चतुर्षु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "नीतिशतकस्य प्रसिद्धः श्लोकः 'यस्य नास्ति स्वयं प्रज्ञा...' किं शिक्षां ददाति?",
        "options_hi": ["स्वप्रज्ञायाः महत्त्वम्", "परप्रज्ञायाः निन्दाम्", "गुरुप्रज्ञायाः महत्त्वम्", "शास्त्रप्रज्ञायाः महत्त्वम्"],
        "answer_hi": "स्वप्रज्ञायाः महत्त्वम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "भर्तृहरिः कति छन्दशास्त्राणां ज्ञाता आसीत्?",
        "options_hi": ["सर्वेषाम्", "केवलं वैदिकानाम्", "केवलं लौकिकानाम्", "केवलं प्राकृतानाम्"],
        "answer_hi": "सर्वेषाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "नीतिशतकस्य प्रसिद्धः उपदेशः 'कालः करोति...' कति अक्षराणि सन्ति?",
        "options_hi": ["षोडश", "अष्ट", "द्वादश", "विंशतिः"],
        "answer_hi": "षोडश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "भर्तृहरेः प्रसिद्धः श्लोकः 'सत्यं ब्रूयात् प्रियं ब्रूयात्...' कति गुणान् वर्णयति?",
        "options_hi": ["द्वौ", "चत्वारः", "षट्", "अष्टौ"],
        "answer_hi": "द्वौ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "नीतिशतकं कति प्रकारकैः मानवचरित्रं वर्णयति?",
        "options_hi": ["विविधैः उदाहरणैः", "केवलं सिद्धान्तैः", "केवलं नियमैः", "केवलं आख्यानैः"],
        "answer_hi": "विविधैः उदाहरणैः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "भर्तृहरेः प्रसिद्धः उपदेशः 'मित्रं प्राप्तं यदि...' कति पङ्क्तिषु अस्ति?",
        "options_hi": ["द्वयोः", "चतुर्षु", "एकस्याम्", "षट्सु"],
        "answer_hi": "द्वयोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "नीतिशतकस्य प्रसिद्धः श्लोकः 'धनानि जीवितं चैव...' कति पादेषु विभक्तः?",
        "options_hi": ["चतुर्षु", "द्वयोः", "त्रिषु", "षट्सु"],
        "answer_hi": "चतुर्षु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "भर्तृहरिः कति ज्योतिषग्रन्थानां ज्ञाता आसीत्?",
        "options_hi": ["बृहत्संहितायाः", "सूर्यसिद्धान्तस्य", "वराहमिहिरस्य", "सर्वेषाम्"],
        "answer_hi": "सर्वेषाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "नीतिशतकस्य प्रसिद्धः उपदेशः 'कः कालः?' कति उत्तराणि ददाति?",
        "options_hi": ["चत्वारि", "द्वे", "षट्", "अष्टौ"],
        "answer_hi": "चत्वारि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "भर्तृहरेः प्रसिद्धः श्लोकः 'विद्यां ददाति विनयं...' कति गुणानां नामानि ददाति?",
        "options_hi": ["षण्णाम्", "चतुर्णाम्", "अष्टानाम्", "दशानाम्"],
        "answer_hi": "षण्णाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "नीतिशतकं कति प्रकारकैः सामाजिकं व्यवहारं शिक्षयति?",
        "options_hi": ["सूक्तिभिः", "कथा-कथनेन", "नाटकैः", "गीतैः"],
        "answer_hi": "सूक्तिभिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "भर्तृहरेः प्रसिद्धः उपदेशः 'सुखार्थी त्यजते विद्याम्...' कति अक्षराणि सन्ति?",
        "options_hi": ["अष्ट", "द्वादश", "षोडश", "विंशतिः"],
        "answer_hi": "अष्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "नीतिशतकस्य प्रसिद्धः श्लोकः 'यस्य नास्ति स्वयं प्रज्ञा...' कति पङ्क्तिषु अस्ति?",
        "options_hi": ["द्वयोः", "चतुर्षु", "एकस्याम्", "षट्सु"],
        "answer_hi": "द्वयोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "भर्तृहरिः कति आयुर्वेदग्रन्थानां ज्ञाता आसीत्?",
        "options_hi": ["चरकसंहितायाः", "सुश्रुतसंहितायाः", "अष्टाङ्गहृदयस्य", "सर्वेषाम्"],
        "answer_hi": "सर्वेषाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "नीतिशतकस्य प्रसिद्धः उपदेशः 'कालः करोति...' कति पादेषु विभक्तः?",
        "options_hi": ["द्वयोः", "चतुर्षु", "एकस्मिन्", "षट्सु"],
        "answer_hi": "द्वयोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "भर्तृहरेः प्रसिद्धः श्लोकः 'सत्यं ब्रूयात् प्रियं ब्रूयात्...' कति अक्षराणि सन्ति?",
        "options_hi": ["द्वादश", "अष्ट", "षोडश", "विंशतिः"],
        "answer_hi": "द्वादश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "नीतिशतकं कति प्रकारकैः राजनीतिं शिक्षयति?",
        "options_hi": ["राजधर्मवर्णनेन", "युद्धवर्णनेन", "संधिवर्णनेन", "दण्डवर्णनेन"],
        "answer_hi": "राजधर्मवर्णनेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "भर्तृहरेः प्रसिद्धः उपदेशः 'मित्रं प्राप्तं यदि...' कति अक्षराणि सन्ति?",
        "options_hi": ["द्वादश", "अष्ट", "षोडश", "विंशतिः"],
        "answer_hi": "द्वादश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "नीतिशतकस्य प्रसिद्धः श्लोकः 'धनानि जीवितं चैव...' कति पङ्क्तिषु अस्ति?",
        "options_hi": ["द्वयोः", "चतुर्षु", "एकस्याम्", "षट्सु"],
        "answer_hi": "द्वयोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "भर्तृहरिः कति धर्मशास्त्राणां ज्ञाता आसीत्?",
        "options_hi": ["मनुस्मृतेः", "याज्ञवल्क्यस्मृतेः", "पराशरस्मृतेः", "सर्वेषाम्"],
        "answer_hi": "सर्वेषाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "नीतिशतकस्य प्रसिद्धः उपदेशः 'कः कालः?' कति पङ्क्तिषु अस्ति?",
        "options_hi": ["द्वयोः", "चतुर्षु", "एकस्याम्", "षट्सु"],
        "answer_hi": "द्वयोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "भर्तृहरेः प्रसिद्धः श्लोकः 'विद्यां ददाति विनयं...' कति पादेषु विभक्तः?",
        "options_hi": ["चतुर्षु", "द्वयोः", "त्रिषु", "षट्सु"],
        "answer_hi": "चतुर्षु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "नीतिशतकं कति प्रकारकैः आध्यात्मिकं ज्ञानं ददाति?",
        "options_hi": ["वैराग्यवर्णनेन", "योगवर्णनेन", "ध्यानवर्णनेन", "सर्वैः उपर्युक्तैः"],
        "answer_hi": "वैराग्यवर्णनेन",
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