const questions = [
    {
        "num": 1,
        "question_hi": "चाणक्यनीतिः कस्य विषये अस्ति?",
        "options_hi": ["नीतिशिक्षायाः", "प्रेमकथायाः", "युद्धविद्यायाः", "आध्यात्मस्य"],
        "answer_hi": "नीतिशिक्षायाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "चाणक्यः कः?",
        "options_hi": ["प्राचीनभारतीयनीतिज्ञः", "राजा", "योद्धा", "वैज्ञानिकः"],
        "answer_hi": "प्राचीनभारतीयनीतिज्ञः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "चाणक्यस्य अन्यं नाम किम्?",
        "options_hi": ["विष्णुगुप्तः", "वासुदेवः", "कृष्णः", "रामः"],
        "answer_hi": "विष्णुगुप्तः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "चाणक्यनीतिः कति अध्यायेषु विभक्ता?",
        "options_hi": ["सप्तदश", "दश", "अष्ट", "विंशतिः"],
        "answer_hi": "सप्तदश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "चाणक्यः कस्य राज्ञः मन्त्री आसीत्?",
        "options_hi": ["चन्द्रगुप्तमौर्यस्य", "अशोकस्य", "समुद्रगुप्तस्य", "हर्षस्य"],
        "answer_hi": "चन्द्रगुप्तमौर्यस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "विद्यया सम्पद्यते इति श्लोकः कस्य ग्रन्थस्य भागः?",
        "options_hi": ["चाणक्यनीतेः", "महाभारतस्य", "रामायणस्य", "मनुस्मृतेः"],
        "answer_hi": "चाणक्यनीतेः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "चाणक्यस्य प्रसिद्धः ग्रन्थः कः?",
        "options_hi": ["अर्थशास्त्रम्", "रामायणम्", "महाभारतम्", "पुराणम्"],
        "answer_hi": "अर्थशास्त्रम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "चाणक्यनीतिः कति श्लोकानि सन्ति?",
        "options_hi": ["सप्तशतानि", "शतम्", "पञ्चशतानि", "सहस्रम्"],
        "answer_hi": "सप्तशतानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "चाणक्यस्य जन्म कदा अभवत्?",
        "options_hi": ["३७० ईसापूर्वे", "५०० ईसापूर्वे", "२५० ईसापूर्वे", "१०० ईसापूर्वे"],
        "answer_hi": "३७० ईसापूर्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "विद्यया सम्पद्यते इति श्लोकस्य अर्थः कः?",
        "options_hi": ["विद्यया धनं प्राप्यते", "विद्यया यशः प्राप्यते", "विद्यया बलं प्राप्यते", "विद्यया मोक्षः प्राप्यते"],
        "answer_hi": "विद्यया धनं प्राप्यते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "चाणक्यस्य गुरुः कः?",
        "options_hi": ["चाणक्यः स्वयमेव", "विष्णुशर्मा", "पाणिनिः", "चाणक्यनामा"],
        "answer_hi": "चाणक्यः स्वयमेव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "चाणक्यनीतेः प्रथमः अध्यायः किं वर्णयति?",
        "options_hi": ["विद्यायाः महत्त्वम्", "धनस्य महत्त्वम्", "मित्रस्य महत्त्वम्", "शत्रोः महत्त्वम्"],
        "answer_hi": "विद्यायाः महत्त्वम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "चाणक्यस्य मृत्युः कदा अभवत्?",
        "options_hi": ["२८३ ईसापूर्वे", "३०० ईसापूर्वे", "२५० ईसापूर्वे", "२०० ईसापूर्वे"],
        "answer_hi": "२८३ ईसापूर्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "विद्यया सम्पद्यते इति श्लोकस्य पूर्णरूपं किम्?",
        "options_hi": ["विद्यया सम्पद्यते विद्या विहीनेन न सम्पदः", "विद्यया सम्पद्यते धनं विद्यया यशः", "विद्यया सम्पद्यते सर्वं विद्या सर्वत्र पूज्यते", "विद्यया सम्पद्यते लक्ष्मीः विद्यया सर्वं लभ्यते"],
        "answer_hi": "विद्यया सम्पद्यते विद्या विहीनेन न सम्पदः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "चाणक्यः कुत्र जन्म प्राप्तवान्?",
        "options_hi": ["तक्षशिलायाम्", "पाटलिपुत्रे", "काश्याम्", "प्रयागे"],
        "answer_hi": "तक्षशिलायाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "चाणक्यनीतिः कति भाषासु अनूदिता?",
        "options_hi": ["अनेकासु", "एकस्याम्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकासु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "चाणक्यस्य पितुः नाम किम्?",
        "options_hi": ["चणकः", "विष्णुः", "शिवः", "ब्रह्मा"],
        "answer_hi": "चणकः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "विद्यायाः कति गुणाः चाणक्येन वर्णिताः?",
        "options_hi": ["षट्", "चत्वारः", "अष्टौ", "दश"],
        "answer_hi": "षट्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "चाणक्यस्य मातुः नाम किम्?",
        "options_hi": ["चनेश्वरी", "सुनन्दा", "जयन्ती", "अज्ञातम्"],
        "answer_hi": "चनेश्वरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "चाणक्यनीतेः द्वितीयः अध्यायः किं वर्णयति?",
        "options_hi": ["मित्रलाभः", "शत्रुनाशः", "धनलाभः", "यशोलाभः"],
        "answer_hi": "मित्रलाभः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "चाणक्यः कति वर्षाणि जीवितवान्?",
        "options_hi": ["अशीतिवर्षाणि", "षष्टिवर्षाणि", "सप्ततिवर्षाणि", "नवतिवर्षाणि"],
        "answer_hi": "अशीतिवर्षाणि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "विद्यया सम्पद्यते इति श्लोकः कति अक्षराणि सन्ति?",
        "options_hi": ["द्वादश", "अष्ट", "दश", "षोडश"],
        "answer_hi": "द्वादश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "चाणक्यस्य प्रसिद्धः शिष्यः कः?",
        "options_hi": ["चन्द्रगुप्तमौर्यः", "बिन्दुसारः", "अशोकः", "समुद्रगुप्तः"],
        "answer_hi": "चन्द्रगुप्तमौर्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "चाणक्यनीतेः तृतीयः अध्यायः किं वर्णयति?",
        "options_hi": ["शत्रुनाशः", "धनसंचयः", "राजनीतिः", "गृहस्थधर्मः"],
        "answer_hi": "शत्रुनाशः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "चाणक्यस्य काव्यशैली का?",
        "options_hi": ["सूत्रात्मिका", "वर्णनात्मिका", "आख्यानात्मिका", "नाट्यात्मिका"],
        "answer_hi": "सूत्रात्मिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "विद्यया सम्पद्यते इति श्लोकस्य कः छन्दः?",
        "options_hi": ["अनुष्टुप्", "इन्द्रवज्रा", "उपेन्द्रवज्रा", "मालिनी"],
        "answer_hi": "अनुष्टुप्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "चाणक्यस्य पत्न्याः नाम किम्?",
        "options_hi": ["अज्ञातम्", "लक्ष्मी", "सरस्वती", "पार्वती"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "चाणक्यनीतेः चतुर्थः अध्यायः किं वर्णयति?",
        "options_hi": ["धनसंचयः", "व्यवहारनीतिः", "राजधर्मः", "प्रजापालनम्"],
        "answer_hi": "धनसंचयः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "चाणक्यः कति भाषाणां ज्ञाता आसीत्?",
        "options_hi": ["अनेकानाम्", "एकस्याः", "द्वयोः", "त्रयाणाम्"],
        "answer_hi": "अनेकानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "विद्यायाः प्रथमः गुणः कः?",
        "options_hi": ["विनयः", "यशः", "बुद्धिः", "कीर्तिः"],
        "answer_hi": "विनयः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "चाणक्यस्य शिक्षा कुत्र अभवत्?",
        "options_hi": ["तक्षशिलायाम्", "नालन्दायाम्", "विक्रमशिलायाम्", "काश्याम्"],
        "answer_hi": "तक्षशिलायाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "चाणक्यनीतेः पञ्चमः अध्यायः किं वर्णयति?",
        "options_hi": ["व्यवहारनीतिः", "राजनीतिः", "अर्थनीतिः", "कामनीतिः"],
        "answer_hi": "व्यवहारनीतिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "चाणक्यस्य मृत्युस्थानं किम्?",
        "options_hi": ["पाटलिपुत्रम्", "तक्षशिला", "काशी", "प्रयागः"],
        "answer_hi": "पाटलिपुत्रम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "विद्यायाः द्वितीयः गुणः कः?",
        "options_hi": ["यशः", "विनयः", "बुद्धिः", "सुखम्"],
        "answer_hi": "यशः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "चाणक्यः कति ग्रन्थानां रचयिता?",
        "options_hi": ["द्वयोः", "एकस्य", "त्रयाणाम्", "चतुर्णाम्"],
        "answer_hi": "द्वयोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "चाणक्यनीतेः षष्ठः अध्यायः किं वर्णयति?",
        "options_hi": ["राजनीतिः", "अर्थनीतिः", "धर्मनीतिः", "कामनीतिः"],
        "answer_hi": "राजनीतिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः कः?",
        "options_hi": ["अर्थस्य मूलं राज्यम्", "धर्मस्य मूलं अर्थः", "कामस्य मूलं धर्मः", "मोक्षस्य मूलं कामः"],
        "answer_hi": "अर्थस्य मूलं राज्यम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "विद्यायाः तृतीयः गुणः कः?",
        "options_hi": ["बुद्धिः", "यशः", "विनयः", "सुखम्"],
        "answer_hi": "बुद्धिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "चाणक्यस्य समये भारते कः कालः आसीत्?",
        "options_hi": ["मौर्यकालः", "गुप्तकालः", "मध्यकालः", "आधुनिककालः"],
        "answer_hi": "मौर्यकालः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "चाणक्यनीतेः सप्तमः अध्यायः किं वर्णयति?",
        "options_hi": ["अर्थनीतिः", "धर्मनीतिः", "कामनीतिः", "मोक्षनीतिः"],
        "answer_hi": "अर्थनीतिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "चाणक्यस्य प्रसिद्धः श्लोकः 'यस्य नास्ति स्वयं प्रज्ञा...' किं वदति?",
        "options_hi": ["मूर्खस्य निन्दाम्", "विदुषः प्रशंसाम्", "धनिकस्य निन्दाम्", "दरिद्रस्य प्रशंसाम्"],
        "answer_hi": "मूर्खस्य निन्दाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "विद्यायाः चतुर्थः गुणः कः?",
        "options_hi": ["सुखम्", "बुद्धिः", "यशः", "विनयः"],
        "answer_hi": "सुखम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "चाणक्यस्य जन्मस्थानस्य वर्तमाननाम किम्?",
        "options_hi": ["पाकिस्तानस्य भागः", "भारतस्य भागः", "अफगानिस्तानस्य भागः", "नेपालस्य भागः"],
        "answer_hi": "पाकिस्तानस्य भागः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "चाणक्यनीतेः अष्टमः अध्यायः किं वर्णयति?",
        "options_hi": ["धर्मनीतिः", "कामनीतिः", "मोक्षनीतिः", "राजनीतिः"],
        "answer_hi": "धर्मनीतिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "चाणक्यस्य अन्यः प्रसिद्धः ग्रन्थः कः?",
        "options_hi": ["चाणक्यसूत्राणि", "राजनीतिः", "धर्मशास्त्रम्", "कामसूत्रम्"],
        "answer_hi": "चाणक्यसूत्राणि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "विद्यायाः पञ्चमः गुणः कः?",
        "options_hi": ["कीर्तिः", "सुखम्", "बुद्धिः", "यशः"],
        "answer_hi": "कीर्तिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'अलसस्य कुतो विद्या...' किं पूर्णं वाक्यं?",
        "options_hi": ["अलसस्य कुतो विद्या अलसस्य कुतो धनम्", "अलसस्य कुतो विद्या अविदुषः कुतो धनम्", "अलसस्य कुतो विद्या अनध्यायिनः कुतो धनम्", "अलसस्य कुतो विद्या अकर्मणः कुतो धनम्"],
        "answer_hi": "अलसस्य कुतो विद्या अलसस्य कुतो धनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "चाणक्यनीतेः नवमः अध्यायः किं वर्णयति?",
        "options_hi": ["कामनीतिः", "मोक्षनीतिः", "राजनीतिः", "अर्थनीतिः"],
        "answer_hi": "कामनीतिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "चाणक्यस्य प्रसिद्धः सिद्धान्तः कः?",
        "options_hi": ["साम दाम दण्ड भेद", "अहिंसा परमोधर्मः", "सत्यमेव जयते", "वसुधैव कुटुम्बकम्"],
        "answer_hi": "साम दाम दण्ड भेद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "विद्यायाः षष्ठः गुणः कः?",
        "options_hi": ["परमं सुखम्", "कीर्तिः", "सुखम्", "बुद्धिः"],
        "answer_hi": "परमं सुखम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "चाणक्यस्य कति पुत्राः आसन्?",
        "options_hi": ["अज्ञातम्", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "चाणक्यनीतेः दशमः अध्यायः किं वर्णयति?",
        "options_hi": ["मोक्षनीतिः", "राजनीतिः", "अर्थनीतिः", "धर्मनीतिः"],
        "answer_hi": "मोक्षनीतिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'सत्यं ब्रूयात् प्रियं ब्रूयात्...' किं पूर्णं वाक्यं?",
        "options_hi": ["सत्यं ब्रूयात् प्रियं ब्रूयात् न ब्रूयात् सत्यमप्रियम्", "सत्यं ब्रूयात् प्रियं ब्रूयात् सर्वदा सत्यं वदेत्", "सत्यं ब्रूयात् प्रियं ब्रूयात् मिथ्या न वदेत्", "सत्यं ब्रूयात् प्रियं ब्रूयात् अप्रियं न वदेत्"],
        "answer_hi": "सत्यं ब्रूयात् प्रियं ब्रूयात् न ब्रूयात् सत्यमप्रियम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "चाणक्यनीतेः एकादशः अध्यायः किं वर्णयति?",
        "options_hi": ["सदाचारः", "दुर्जनचरितम्", "सज्जनचरितम्", "व्यवहारः"],
        "answer_hi": "सदाचारः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "चाणक्यस्य प्रसिद्धः वाक्यं 'अर्थस्य मूलं राज्यम्' कुत्र प्राप्यते?",
        "options_hi": ["अर्थशास्त्रे", "चाणक्यनीतौ", "महाभारते", "रामायणे"],
        "answer_hi": "अर्थशास्त्रे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "चाणक्यनीतेः द्वादशः अध्यायः किं वर्णयति?",
        "options_hi": ["दुर्जनचरितम्", "सज्जनचरितम्", "व्यवहारः", "सदाचारः"],
        "answer_hi": "दुर्जनचरितम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "चाणक्यस्य मृत्युकारणं किम्?",
        "options_hi": ["अज्ञातम्", "विषप्रयोगः", "वृद्धावस्था", "रोगः"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "चाणक्यनीतेः त्रयोदशः अध्यायः किं वर्णयति?",
        "options_hi": ["सज्जनचरितम्", "व्यवहारः", "सदाचारः", "दुर्जनचरितम्"],
        "answer_hi": "सज्जनचरितम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'कः कालः?' कति प्रश्नान् पृच्छति?",
        "options_hi": ["चतुरः", "द्वौ", "षट्", "अष्टौ"],
        "answer_hi": "चतुरः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "चाणक्यनीतेः चतुर्दशः अध्यायः किं वर्णयति?",
        "options_hi": ["व्यवहारः", "सदाचारः", "दुर्जनचरितम्", "सज्जनचरितम्"],
        "answer_hi": "व्यवहारः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "चाणक्यस्य समाधिस्थानं किम्?",
        "options_hi": ["अज्ञातम्", "पाटलिपुत्रम्", "तक्षशिला", "काशी"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "चाणक्यनीतेः पञ्चदशः अध्यायः किं वर्णयति?",
        "options_hi": ["स्त्रीचरितम्", "पुरुषचरितम्", "बालचरितम्", "वृद्धचरितम्"],
        "answer_hi": "स्त्रीचरितम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'धनानि जीवितं चैव...' किं पूर्णं वाक्यं?",
        "options_hi": ["धनानि जीवितं चैव परार्थे प्राणाः सर्वे", "धनानि जीवितं चैव स्वार्थे प्राणाः सर्वे", "धनानि जीवितं चैव धर्मार्थे प्राणाः सर्वे", "धनानि जीवितं चैव यशःप्राप्त्यै प्राणाः सर्वे"],
        "answer_hi": "धनानि जीवितं चैव परार्थे प्राणाः सर्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "चाणक्यनीतेः षोडशः अध्यायः किं वर्णयति?",
        "options_hi": ["पुरुषचरितम्", "बालचरितम्", "वृद्धचरितम्", "स्त्रीचरितम्"],
        "answer_hi": "पुरुषचरितम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'मित्रं प्राप्तं यदि...' किं पूर्णं वाक्यं?",
        "options_hi": ["मित्रं प्राप्तं यदि सत्पुरुषेण सह", "मित्रं प्राप्तं यदि विदुषा सह", "मित्रं प्राप्तं यदि धनीभिः सह", "मित्रं प्राप्तं यदि बलवता सह"],
        "answer_hi": "मित्रं प्राप्तं यदि सत्पुरुषेण सह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "चाणक्यनीतेः सप्तदशः अध्यायः किं वर्णयति?",
        "options_hi": ["विविधोपदेशाः", "राजनीतिः", "अर्थनीतिः", "धर्मनीतिः"],
        "answer_hi": "विविधोपदेशाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'कालः करोति...' किं पूर्णं वाक्यं?",
        "options_hi": ["कालः करोति सर्वाणि", "कालः करोति कार्याणि", "कालः करोति वैराणि", "कालः करोति मित्राणि"],
        "answer_hi": "कालः करोति सर्वाणि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "चाणक्यनीतेः सर्वाधिकं प्रसिद्धः श्लोकः कः?",
        "options_hi": ["विद्यया सम्पद्यते", "अलसस्य कुतो विद्या", "सत्यं ब्रूयात् प्रियं ब्रूयात्", "धनानि जीवितं चैव"],
        "answer_hi": "विद्यया सम्पद्यते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'सुखार्थी त्यजते विद्याम्...' किं पूर्णं वाक्यं?",
        "options_hi": ["सुखार्थी त्यजते विद्यां विद्यार्थी त्यजते सुखम्", "सुखार्थी त्यजते विद्यां धनार्थी त्यजते सुखम्", "सुखार्थी त्यजते विद्यां यशःप्राप्त्यै त्यजते सुखम्", "सुखार्थी त्यजते विद्यां मोक्षार्थी त्यजते सुखम्"],
        "answer_hi": "सुखार्थी त्यजते विद्यां विद्यार्थी त्यजते सुखम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "चाणक्यनीतेः प्रभावः कः?",
        "options_hi": ["जीवनमार्गदर्शनम्", "धर्मप्रचारः", "राज्यविस्तारः", "युद्धविद्या"],
        "answer_hi": "जीवनमार्गदर्शनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'यस्य नास्ति स्वयं प्रज्ञा...' किं पूर्णं वाक्यं?",
        "options_hi": ["यस्य नास्ति स्वयं प्रज्ञा शास्त्रं तस्य करोति किम्", "यस्य नास्ति स्वयं प्रज्ञा धनं तस्य करोति किम्", "यस्य नास्ति स्वयं प्रज्ञा बलं तस्य करोति किम्", "यस्य नास्ति स्वयं प्रज्ञा यशः तस्य करोति किम्"],
        "answer_hi": "यस्य नास्ति स्वयं प्रज्ञा शास्त्रं तस्य करोति किम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "चाणक्यनीतेः शिक्षणं कस्मै विशेषतः उपयोगि?",
        "options_hi": ["सर्वेभ्यः", "केवलं राजभ्यः", "केवलं ब्राह्मणेभ्यः", "केवलं युवभ्यः"],
        "answer_hi": "सर्वेभ्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'अलसस्य कुतो विद्या...' कति अक्षराणि सन्ति?",
        "options_hi": ["अष्ट", "दश", "द्वादश", "षोडश"],
        "answer_hi": "अष्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "चाणक्यनीतेः साहित्यिकमूल्यं किम्?",
        "options_hi": ["नीतिशिक्षाप्रधानं", "कलात्मकं", "वैज्ञानिकं", "ऐतिहासिकं"],
        "answer_hi": "नीतिशिक्षाप्रधानं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'सत्यं ब्रूयात् प्रियं ब्रूयात्...' कति अक्षराणि सन्ति?",
        "options_hi": ["द्वादश", "अष्ट", "षोडश", "विंशतिः"],
        "answer_hi": "द्वादश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "चाणक्यनीतेः रचनाकालः कः?",
        "options_hi": ["तृतीयशतकं ईसापूर्वम्", "प्रथमशतकं ईसापूर्वम्", "द्वितीयशतकं ईसापूर्वम्", "चतुर्थशतकं ईसापूर्वम्"],
        "answer_hi": "तृतीयशतकं ईसापूर्वम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'धनानि जीवितं चैव...' कति अक्षराणि सन्ति?",
        "options_hi": ["द्वात्रिंशत्", "चतुर्विंशतिः", "अष्टाविंशतिः", "षोडश"],
        "answer_hi": "द्वात्रिंशत्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "चाणक्यनीतेः प्रमुखालङ्कारः कः?",
        "options_hi": ["दृष्टान्तः", "उपमा", "रूपकम्", "उत्प्रेक्षा"],
        "answer_hi": "दृष्टान्तः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'मित्रं प्राप्तं यदि...' कति अक्षराणि सन्ति?",
        "options_hi": ["द्वादश", "अष्ट", "षोडश", "विंशतिः"],
        "answer_hi": "द्वादश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "चाणक्यनीतेः शैलीगतविशेषता का?",
        "options_hi": ["सरला सुबोधा", "क्लिष्टा", "वैज्ञानिकी", "गूढार्था"],
        "answer_hi": "सरला सुबोधा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'कालः करोति...' कति अक्षराणि सन्ति?",
        "options_hi": ["षोडश", "अष्ट", "द्वादश", "विंशतिः"],
        "answer_hi": "षोडश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "चाणक्यनीतेः प्रकाशनं प्रथमवारं कदा अभवत्?",
        "options_hi": ["१९विंशतके", "१८विंशतके", "२०विंशतके", "२१विंशतके"],
        "answer_hi": "१९विंशतके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'सुखार्थी त्यजते विद्याम्...' कति अक्षराणि सन्ति?",
        "options_hi": ["अष्ट", "द्वादश", "षोडश", "विंशतिः"],
        "answer_hi": "अष्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "चाणक्यनीतेः प्रभावः कति देशेषु दृश्यते?",
        "options_hi": ["अनेकेषु", "एकस्मिन्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'यस्य नास्ति स्वयं प्रज्ञा...' कति अक्षराणि सन्ति?",
        "options_hi": ["द्वादश", "अष्ट", "षोडश", "विंशतिः"],
        "answer_hi": "द्वादश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "चाणक्यनीतेः स्थानं संस्कृतसाहित्ये किम्?",
        "options_hi": ["विशिष्टं", "सामान्यं", "अल्पमहत्त्वं", "अज्ञातं"],
        "answer_hi": "विशिष्टं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'अर्थस्य मूलं राज्यम्' कति अक्षराणि सन्ति?",
        "options_hi": ["अष्ट", "दश", "द्वादश", "षोडश"],
        "answer_hi": "अष्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "चाणक्यनीतेः प्रमुखं योगदानं किम्?",
        "options_hi": ["नीतिशिक्षा", "धर्मशिक्षा", "अर्थशिक्षा", "कामशिक्षा"],
        "answer_hi": "नीतिशिक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'साम दाम दण्ड भेद' कति पदानि सन्ति?",
        "options_hi": ["चत्वारि", "द्वे", "त्रीणि", "पञ्च"],
        "answer_hi": "चत्वारि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "चाणक्यनीतेः आधुनिकप्रासंगिकता का?",
        "options_hi": ["अत्यधिका", "मध्यमा", "अल्पा", "नास्ति"],
        "answer_hi": "अत्यधिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'विद्यया सम्पद्यते' कति पदानि सन्ति?",
        "options_hi": ["त्रीणि", "द्वे", "चत्वारि", "पञ्च"],
        "answer_hi": "त्रीणि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "चाणक्यनीतेः प्रभावः कति व्यवसायक्षेत्रेषु दृश्यते?",
        "options_hi": ["अनेकेषु", "एकस्मिन्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'अलसस्य कुतो विद्या' कति पदानि सन्ति?",
        "options_hi": ["चत्वारि", "द्वे", "त्रीणि", "पञ्च"],
        "answer_hi": "चत्वारि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "चाणक्यनीतेः प्रमुखं सिद्धान्तं किम्?",
        "options_hi": ["चतुर्विधनीतिः", "द्विविधनीतिः", "त्रिविधनीतिः", "पञ्चविधनीतिः"],
        "answer_hi": "चतुर्विधनीतिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'सत्यं ब्रूयात्' कति पदानि सन्ति?",
        "options_hi": ["द्वे", "त्रीणि", "चत्वारि", "पञ्च"],
        "answer_hi": "द्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "चाणक्यनीतेः प्रमुखं लक्ष्यं किम्?",
        "options_hi": ["सुव्यवस्थितजीवनम्", "धनप्राप्तिः", "यशःप्राप्तिः", "मोक्षप्राप्तिः"],
        "answer_hi": "सुव्यवस्थितजीवनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'धनानि जीवितं चैव' कति पदानि सन्ति?",
        "options_hi": ["चत्वारि", "द्वे", "त्रीणि", "पञ्च"],
        "answer_hi": "चत्वारि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "चाणक्यनीतेः साहित्यिकप्रकारः कः?",
        "options_hi": ["नीतिकाव्यम्", "प्रबन्धकाव्यम्", "खण्डकाव्यम्", "महाकाव्यम्"],
        "answer_hi": "नीतिकाव्यम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'मित्रं प्राप्तं' कति पदानि सन्ति?",
        "options_hi": ["द्वे", "त्रीणि", "चत्वारि", "पञ्च"],
        "answer_hi": "द्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "चाणक्यनीतेः स्थायी महत्त्वं किम्?",
        "options_hi": ["कालातीतनीतिशिक्षा", "ऐतिहासिकमहत्त्वम्", "सांस्कृतिकमहत्त्वम्", "धार्मिकमहत्त्वम्"],
        "answer_hi": "कालातीतनीतिशिक्षा",
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