const questions = [
    {
        "num": 1,
        "question_hi": "धातुरूपों का व्याकरण में क्या महत्व है?",
        "options_hi": ["क्रिया पद निर्माण", "नाम पद निर्माण", "सर्वनाम निर्माण", "विशेषण निर्माण"],
        "answer_hi": "क्रिया पद निर्माण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "लकारों के समूह को क्या कहते हैं?",
        "options_hi": ["कालवाचक", "कर्तावाचक", "कर्मवाचक", "सर्ववाचक"],
        "answer_hi": "कालवाचक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "वर्तमान काल में कौन सा लकार प्रयुक्त होता है?",
        "options_hi": ["लट्", "लङ्", "लोट्", "लृट्"],
        "answer_hi": "लट्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "भूत काल में कौन सा लकार प्रयुक्त होता है?",
        "options_hi": ["लङ्", "लट्", "लोट्", "लृट्"],
        "answer_hi": "लङ्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "भविष्यत काल में कौन सा लकार प्रयुक्त होता है?",
        "options_hi": ["लृट्", "लट्", "लङ्", "लोट्"],
        "answer_hi": "लृट्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "आज्ञा के लिए कौन सा लकार प्रयुक्त होता है?",
        "options_hi": ["लोट्", "लट्", "लङ्", "लृट्"],
        "answer_hi": "लोट्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "चाहिए अर्थ में कौन सा लकार प्रयुक्त होता है?",
        "options_hi": ["विधिलिङ्", "लट्", "लङ्", "लृट्"],
        "answer_hi": "विधिलिङ्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "लट् लकार के कितने पुरुष हैं?",
        "options_hi": ["तीन", "दो", "चार", "छह"],
        "answer_hi": "तीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "प्रथम पुरुष किसे सूचित करता है?",
        "options_hi": ["दूसरे को", "स्वयं को", "संबोधित को", "वक्ता को"],
        "answer_hi": "दूसरे को",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "मध्यम पुरुष किसे सूचित करता है?",
        "options_hi": ["श्रोता को", "वक्ता को", "दूसरे को", "स्वयं को"],
        "answer_hi": "श्रोता को",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "उत्तम पुरुष किसे सूचित करता है?",
        "options_hi": ["वक्ता को", "श्रोता को", "दूसरे को", "संबोधित को"],
        "answer_hi": "वक्ता को",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "लट् लकार में 'पठ्' धातु का प्रथम पुरुष एकवचन क्या है?",
        "options_hi": ["पठति", "पठसि", "पठामि", "पठन्ति"],
        "answer_hi": "पठति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "लट् लकार में 'गम्' धातु का मध्यम पुरुष एकवचन क्या है?",
        "options_hi": ["गच्छसि", "गच्छति", "गच्छामि", "गच्छथः"],
        "answer_hi": "गच्छसि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "लट् लकार में 'कृ' धातु का उत्तम पुरुष एकवचन क्या है?",
        "options_hi": ["करोमि", "करोषि", "करोति", "कुर्वः"],
        "answer_hi": "करोमि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "लट् लकार में 'भू' धातु का प्रथम पुरुष बहुवचन क्या है?",
        "options_hi": ["भवन्ति", "भवथ", "भवामः", "भव"],
        "answer_hi": "भवन्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "लट् लकार में 'दा' धातु का मध्यम पुरुष बहुवचन क्या है?",
        "options_hi": ["ददथ", "ददति", "ददामि", "ददन्ति"],
        "answer_hi": "ददथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "लट् लकार में 'लिख्' धातु का उत्तम पुरुष बहुवचन क्या है?",
        "options_hi": ["लिखामः", "लिखथ", "लिखन्ति", "लिखावः"],
        "answer_hi": "लिखामः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "लट् लकार में 'हस्' धातु का प्रथम पुरुष द्विवचन क्या है?",
        "options_hi": ["हसतः", "हसथः", "हसावः", "हसन्ति"],
        "answer_hi": "हसतः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "लट् लकार में 'पा' धातु का मध्यम पुरुष द्विवचन क्या है?",
        "options_hi": ["पिबथः", "पिबतः", "पिबावः", "पिबन्ति"],
        "answer_hi": "पिबथः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "लट् लकार में 'वद्' धातु का उत्तम पुरुष द्विवचन क्या है?",
        "options_hi": ["वदावः", "वदथः", "वदतः", "वदामः"],
        "answer_hi": "वदावः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "लङ् लकार का क्या प्रयोजन है?",
        "options_hi": ["भूतकाल का कथन", "वर्तमान काल का कथन", "भविष्यत काल का कथन", "आज्ञा का कथन"],
        "answer_hi": "भूतकाल का कथन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "लङ् लकार में 'पठ्' धातु का प्रथम पुरुष एकवचन क्या है?",
        "options_hi": ["अपठत्", "अपठः", "अपठम्", "अपठन्"],
        "answer_hi": "अपठत्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "लङ् लकार में 'गम्' धातु का मध्यम पुरुष एकवचन क्या है?",
        "options_hi": ["अगच्छः", "अगच्छत्", "अगच्छम्", "अगच्छतम्"],
        "answer_hi": "अगच्छः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "लङ् लकार में 'कृ' धातु का उत्तम पुरुष एकवचन क्या है?",
        "options_hi": ["अकरवम्", "अकरोः", "अकरोत्", "अकुर्वन्"],
        "answer_hi": "अकरवम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "लङ् लकार में 'भू' धातु का प्रथम पुरुष बहुवचन क्या है?",
        "options_hi": ["अभवन्", "अभवत", "अभवाम", "अभूवन्"],
        "answer_hi": "अभवन्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "लङ् लकार में 'दा' धातु का मध्यम पुरुष बहुवचन क्या है?",
        "options_hi": ["अददत", "अददन्", "अददाम", "अददुः"],
        "answer_hi": "अददत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "लङ् लकार में 'लिख्' धातु का उत्तम पुरुष बहुवचन क्या है?",
        "options_hi": ["अलिखाम", "अलिखत", "अलिखन्", "अलिखाव"],
        "answer_hi": "अलिखाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "लङ् लकार में 'हस्' धातु का प्रथम पुरुष द्विवचन क्या है?",
        "options_hi": ["अहसताम्", "अहसतम्", "अहसाव", "अहसन्"],
        "answer_hi": "अहसताम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "लङ् लकार में 'पा' धातु का मध्यम पुरुष द्विवचन क्या है?",
        "options_hi": ["अपिबतम्", "अपिबताम्", "अपिबाव", "अपिबत"],
        "answer_hi": "अपिबतम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "लङ् लकार में 'वद्' धातु का उत्तम पुरुष द्विवचन क्या है?",
        "options_hi": ["अवदाव", "अवदतम्", "अवदताम्", "अवदाम"],
        "answer_hi": "अवदाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "लोट् लकार का क्या प्रयोजन है?",
        "options_hi": ["आज्ञा देना", "वर्णन करना", "विधान करना", "प्रश्न करना"],
        "answer_hi": "आज्ञा देना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "लोट् लकार में 'पठ्' धातु का प्रथम पुरुष एकवचन क्या है?",
        "options_hi": ["पठतु", "पठ", "पठानि", "पठन्तु"],
        "answer_hi": "पठतु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "लोट् लकार में 'गम्' धातु का मध्यम पुरुष एकवचन क्या है?",
        "options_hi": ["गच्छ", "गच्छतु", "गच्छानि", "गच्छन्तु"],
        "answer_hi": "गच्छ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "लोट् लकार में 'कृ' धातु का उत्तम पुरुष एकवचन क्या है?",
        "options_hi": ["करवाणि", "कुरु", "करोतु", "कुर्वन्तु"],
        "answer_hi": "करवाणि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "लोट् लकार में 'भू' धातु का प्रथम पुरुष बहुवचन क्या है?",
        "options_hi": ["भवन्तु", "भवत", "भवाम", "भवानि"],
        "answer_hi": "भवन्तु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "लोट् लकार में 'दा' धातु का मध्यम पुरुष बहुवचन क्या है?",
        "options_hi": ["ददत", "ददन्तु", "ददाम", "ददतु"],
        "answer_hi": "ददत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "लोट् लकार में 'लिख्' धातु का उत्तम पुरुष बहुवचन क्या है?",
        "options_hi": ["लिखाम", "लिखत", "लिखन्तु", "लिखाव"],
        "answer_hi": "लिखाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "लोट् लकार में 'हस्' धातु का प्रथम पुरुष द्विवचन क्या है?",
        "options_hi": ["हसताम्", "हसतम्", "हसाव", "हसन्तु"],
        "answer_hi": "हसताम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "लोट् लकार में 'पा' धातु का मध्यम पुरुष द्विवचन क्या है?",
        "options_hi": ["पिबतम्", "पिबताम्", "पिबाव", "पिबत"],
        "answer_hi": "पिबतम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "लोट् लकार में 'वद्' धातु का उत्तम पुरुष द्विवचन क्या है?",
        "options_hi": ["वदाव", "वदतम्", "वदताम्", "वदाम"],
        "answer_hi": "वदाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "लृट् लकार का क्या प्रयोजन है?",
        "options_hi": ["भविष्यत काल का कथन", "वर्तमान काल का कथन", "भूत काल का कथन", "आज्ञा का कथन"],
        "answer_hi": "भविष्यत काल का कथन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "लृट् लकार में 'पठ्' धातु का प्रथम पुरुष एकवचन क्या है?",
        "options_hi": ["पठिष्यति", "पठिष्यसि", "पठिष्यामि", "पठिष्यन्ति"],
        "answer_hi": "पठिष्यति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "लृट् लकार में 'गम्' धातु का मध्यम पुरुष एकवचन क्या है?",
        "options_hi": ["गमिष्यसि", "गमिष्यति", "गमिष्यामि", "गमिष्यथः"],
        "answer_hi": "गमिष्यसि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "लृट् लकार में 'कृ' धातु का उत्तम पुरुष एकवचन क्या है?",
        "options_hi": ["करिष्यामि", "करिष्यसि", "करिष्यति", "करिष्यावः"],
        "answer_hi": "करिष्यामि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "लृट् लकार में 'भू' धातु का प्रथम पुरुष बहुवचन क्या है?",
        "options_hi": ["भविष्यन्ति", "भविष्यथ", "भविष्यामः", "भविष्यन्तु"],
        "answer_hi": "भविष्यन्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "लृट् लकार में 'दा' धातु का मध्यम पुरुष बहुवचन क्या है?",
        "options_hi": ["दास्यथ", "दास्यन्ति", "दास्यामः", "दास्यत"],
        "answer_hi": "दास्यथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "लृट् लकार में 'लिख्' धातु का उत्तम पुरुष बहुवचन क्या है?",
        "options_hi": ["लेखिष्यामः", "लेखिष्यथ", "लेखिष्यन्ति", "लेखिष्याव"],
        "answer_hi": "लेखिष्यामः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "लृट् लकार में 'हस्' धातु का प्रथम पुरुष द्विवचन क्या है?",
        "options_hi": ["हसिष्यतः", "हसिष्यथः", "हसिष्यावः", "हसिष्यन्ति"],
        "answer_hi": "हसिष्यतः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "लृट् लकार में 'पा' धातु का मध्यम पुरुष द्विवचन क्या है?",
        "options_hi": ["पास्यथः", "पास्यतः", "पास्यावः", "पास्यथ"],
        "answer_hi": "पास्यथः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "लृट् लकार में 'वद्' धातु का उत्तम पुरुष द्विवचन क्या है?",
        "options_hi": ["वत्स्यावः", "वत्स्यथः", "वत्स्यतः", "वत्स्यामः"],
        "answer_hi": "वत्स्यावः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "विधिलिङ् लकार का क्या प्रयोजन है?",
        "options_hi": ["इच्छा वाचक", "काल वाचक", "आज्ञा वाचक", "निश्चय वाचक"],
        "answer_hi": "इच्छा वाचक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "विधिलिङ् लकार में 'पठ्' धातु का प्रथम पुरुष एकवचन क्या है?",
        "options_hi": ["पठेत्", "पठेः", "पठेयम्", "पठेयुः"],
        "answer_hi": "पठेत्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "विधिलिङ् लकार में 'गम्' धातु का मध्यम पुरुष एकवचन क्या है?",
        "options_hi": ["गच्छेः", "गच्छेत्", "गच्छेयम्", "गच्छेतम्"],
        "answer_hi": "गच्छेः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "विधिलिङ् लकार में 'कृ' धातु का उत्तम पुरुष एकवचन क्या है?",
        "options_hi": ["कुर्याम्", "कुर्याः", "कुर्यात्", "कुर्युः"],
        "answer_hi": "कुर्याम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "विधिलिङ् लकार में 'भू' धातु का प्रथम पुरुष बहुवचन क्या है?",
        "options_hi": ["भवेयुः", "भवेत", "भवेम", "भवेयन्"],
        "answer_hi": "भवेयुः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "विधिलिङ् लकार में 'दा' धातु का मध्यम पुरुष बहुवचन क्या है?",
        "options_hi": ["दद्यात्", "दद्युः", "दद्याम", "दद्याः"],
        "answer_hi": "दद्यात्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "विधिलिङ् लकार में 'लिख्' धातु का उत्तम पुरुष बहुवचन क्या है?",
        "options_hi": ["लेखेम", "लेखेत", "लेखेयुः", "लेखेव"],
        "answer_hi": "लेखेम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "विधिलिङ् लकार में 'हस्' धातु का प्रथम पुरुष द्विवचन क्या है?",
        "options_hi": ["हसेताम्", "हसेतम्", "हसेव", "हसेयुः"],
        "answer_hi": "हसेताम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "विधिलिङ् लकार में 'पा' धातु का मध्यम पुरुष द्विवचन क्या है?",
        "options_hi": ["पिबेतम्", "पिबेताम्", "पिबेव", "पिबेत"],
        "answer_hi": "पिबेतम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "विधिलिङ् लकार में 'वद्' धातु का उत्तम पुरुष द्विवचन क्या है?",
        "options_hi": ["वदेव", "वदेतम्", "वदेताम्", "वदेम"],
        "answer_hi": "वदेव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "धातु के रूप निर्माण में क्या आवश्यक है?",
        "options_hi": ["लकार प्रत्यय", "विभक्ति प्रत्यय", "तद्धित प्रत्यय", "कृत् प्रत्यय"],
        "answer_hi": "लकार प्रत्यय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "लट् लकार के प्रत्यय क्या होते हैं?",
        "options_hi": ["ति, सि, मि", "त्, स्, म्", "तु, हि, नि", "स्यति, स्यसि, स्यामि"],
        "answer_hi": "ति, सि, मि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "लङ् लकार के प्रत्यय क्या होते हैं?",
        "options_hi": ["त्, स्, म्", "ति, सि, मि", "तु, हि, नि", "स्यति, स्यसि, स्यामि"],
        "answer_hi": "त्, स्, म्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "लोट् लकार के प्रत्यय क्या होते हैं?",
        "options_hi": ["तु, हि, नि", "ति, सि, मि", "त्, स्, म्", "स्यति, स्यसि, स्यामि"],
        "answer_hi": "तु, हि, नि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "लृट् लकार के प्रत्यय क्या होते हैं?",
        "options_hi": ["स्यति, स्यसि, स्यामि", "ति, सि, मि", "त्, स्, म्", "तु, हि, नि"],
        "answer_hi": "स्यति, स्यसि, स्यामि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "विधिलिङ् लकार के प्रत्यय क्या होते हैं?",
        "options_hi": ["ेत्, एः, एयम्", "ति, सि, मि", "त्, स्, म्", "स्यति, स्यसि, स्यामि"],
        "answer_hi": "ेत्, एः, एयम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "धातुओं के कितने पद होते हैं?",
        "options_hi": ["दो", "तीन", "चार", "पाँच"],
        "answer_hi": "दो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "परस्मैपद की क्या पहचान है?",
        "options_hi": ["कर्म में प्रयोग", "कर्ता में प्रयोग", "करण में प्रयोग", "सम्प्रदान में प्रयोग"],
        "answer_hi": "कर्ता में प्रयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "आत्मनेपद की क्या पहचान है?",
        "options_hi": ["कर्म में प्रयोग", "कर्ता में प्रयोग", "स्वार्थ में प्रयोग", "दूसरे के लिए प्रयोग"],
        "answer_hi": "स्वार्थ में प्रयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "उभयपद की क्या पहचान है?",
        "options_hi": ["दोनों पदों में प्रयोग", "एक पद में प्रयोग", "केवल परस्मैपद", "केवल आत्मनेपद"],
        "answer_hi": "दोनों पदों में प्रयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "धातुरूपों के अध्ययन का क्या महत्व है?",
        "options_hi": ["वाक्य निर्माण क्षमता", "शब्दकोश ज्ञान", "व्याकरण स्मरण", "साहित्य पाठन"],
        "answer_hi": "वाक्य निर्माण क्षमता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "कौन सा धातु उभयपदी होता है?",
        "options_hi": ["कृ", "पठ्", "गम्", "लिख्"],
        "answer_hi": "कृ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "कौन सा धातु केवल परस्मैपदी होता है?",
        "options_hi": ["पठ्", "भू", "आस्", "शी"],
        "answer_hi": "पठ्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "कौन सा धातु केवल आत्मनेपदी होता है?",
        "options_hi": ["आस्", "पठ्", "गम्", "लिख्"],
        "answer_hi": "आस्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "धातुरूप किस ग्रंथ में विस्तार से वर्णित हैं?",
        "options_hi": ["धातुपाठ में", "गणपाठ में", "सूत्रपाठ में", "टीकापाठ में"],
        "answer_hi": "धातुपाठ में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "पाणिनि ने धातुओं का वर्गीकरण कैसे किया?",
        "options_hi": ["दस गणों में", "पाँच गणों में", "आठ गणों में", "छह गणों में"],
        "answer_hi": "दस गणों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "भ्वादिगण में कितने धातु हैं?",
        "options_hi": ["अनेक", "एक", "दस", "सौ"],
        "answer_hi": "अनेक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "धातु का मूल रूप क्या कहलाता है?",
        "options_hi": ["धातुरूप", "धातुमूल", "धातुसूत्र", "धातुपाठ"],
        "answer_hi": "धातुमूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "धातुरूपों का शिक्षण कब प्रारम्भ किया जाता है?",
        "options_hi": ["प्रारम्भिक स्तर पर", "मध्यम स्तर पर", "उच्च स्तर पर", "स्नातकोत्तर स्तर पर"],
        "answer_hi": "प्रारम्भिक स्तर पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "धातुरूप कितने प्रकार के होते हैं?",
        "options_hi": ["दस लकार", "पाँच लकार", "आठ लकार", "छह लकार"],
        "answer_hi": "दस लकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "लृङ् लकार किस काल में प्रयुक्त होता है?",
        "options_hi": ["हेतुहेतुमद्भूत काल", "वर्तमान काल", "भविष्यत काल", "भूत काल"],
        "answer_hi": "हेतुहेतुमद्भूत काल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "लुङ् लकार किस काल में प्रयुक्त होता है?",
        "options_hi": ["सामान्य भूत काल", "वर्तमान काल", "भविष्यत काल", "आज्ञा में"],
        "answer_hi": "सामान्य भूत काल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "लिट् लकार किस काल में प्रयुक्त होता है?",
        "options_hi": ["परोक्ष भूत काल", "वर्तमान काल", "भविष्यत काल", "आज्ञा में"],
        "answer_hi": "परोक्ष भूत काल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "आशीर्लिङ् लकार किस अर्थ में प्रयुक्त होता है?",
        "options_hi": ["आशीर्वाद में", "आज्ञा में", "इच्छा में", "प्रश्न में"],
        "answer_hi": "आशीर्वाद में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "धातुरूपों का ज्ञान किसके लिए उपयोगी है?",
        "options_hi": ["संस्कृत भाषा के प्रयोग के लिए", "अंग्रेजी भाषा के प्रयोग के लिए", "हिंदी भाषा के प्रयोग के लिए", "गणित के प्रयोग के लिए"],
        "answer_hi": "संस्कृत भाषा के प्रयोग के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "धातुरूप कैसे याद किए जाने चाहिए?",
        "options_hi": ["नियमित अभ्यास से", "एक बार पढ़ने से", "सुनने मात्र से", "लिखने मात्र से"],
        "answer_hi": "नियमित अभ्यास से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "धातुरूपों का प्रयोग कहाँ देखा जाता है?",
        "options_hi": ["सभी संस्कृत ग्रंथों में", "केवल व्याकरण में", "केवल काव्यों में", "केवल नाटकों में"],
        "answer_hi": "सभी संस्कृत ग्रंथों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "धातुरूप किस कक्षा में अधिक पढ़ाए जाते हैं?",
        "options_hi": ["मध्यम कक्षा में", "प्रारम्भिक कक्षा में", "स्नातकोत्तर कक्षा में", "शोध कक्षा में"],
        "answer_hi": "मध्यम कक्षा में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "धातुरूपों की परीक्षा कैसे होती है?",
        "options_hi": ["रूप पूर्ति से", "प्रश्नोत्तर से", "निबंध लेखन से", "मौखिक परीक्षा से"],
        "answer_hi": "रूप पूर्ति से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "धातुरूपों की सहायता के लिए कौन से साधन हैं?",
        "options_hi": ["धातुरूप कोश, सारणी", "शब्दकोश", "व्याकरण ग्रंथ", "साहित्य ग्रंथ"],
        "answer_hi": "धातुरूप कोश, सारणी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "आधुनिक समय में धातुरूपों का शिक्षण कैसे होता है?",
        "options_hi": ["डिजिटल साधनों से", "केवल पुस्तकों से", "केवल गुरु से", "केवल लेखन से"],
        "answer_hi": "डिजिटल साधनों से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "धातुरूपों के ज्ञान से क्या लाभ है?",
        "options_hi": ["स्वयं वाक्य निर्माण क्षमता", "शब्द ज्ञान", "व्याकरण स्मरण", "साहित्य पाठन"],
        "answer_hi": "स्वयं वाक्य निर्माण क्षमता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "धातुरूप कितने वर्षों तक पढ़ने चाहिए?",
        "options_hi": ["बहुत से वर्ष", "एक वर्ष", "दो वर्ष", "तीन वर्ष"],
        "answer_hi": "बहुत से वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "धातुरूपों का सबसे अधिक उपयोग कहाँ है?",
        "options_hi": ["संस्कृत लेखन में", "अंग्रेजी लेखन में", "हिंदी लेखन में", "गणित में"],
        "answer_hi": "संस्कृत लेखन में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "धातुरूपों का सबसे कठिन भाग कौन सा है?",
        "options_hi": ["विधिलिङ्", "लट्", "लङ्", "लोट्"],
        "answer_hi": "विधिलिङ्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "धातुरूपों का सबसे सरल भाग कौन सा है?",
        "options_hi": ["लट्", "लङ्", "लृट्", "विधिलिङ्"],
        "answer_hi": "लट्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "धातुरूपों का अभ्यास कैसे करना चाहिए?",
        "options_hi": ["प्रतिदिन थोड़ा", "सप्ताह में एक बार", "महीने में एक बार", "वर्ष में एक बार"],
        "answer_hi": "प्रतिदिन थोड़ा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "धातुरूप किन शिक्षकों द्वारा सिखाए जाते हैं?",
        "options_hi": ["व्याकरण विशेषज्ञों द्वारा", "साहित्य विशेषज्ञों द्वारा", "इतिहास विशेषज्ञों द्वारा", "गणित विशेषज्ञों द्वारा"],
        "answer_hi": "व्याकरण विशेषज्ञों द्वारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "धातुरूपों का ज्ञान किस भाषा के शिक्षण में सहायक होता है?",
        "options_hi": ["अन्य भाषाओं के", "केवल संस्कृत के", "केवल हिंदी के", "केवल अंग्रेजी के"],
        "answer_hi": "अन्य भाषाओं के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "धातुरूपों के अध्ययन का अंतिम उद्देश्य क्या है?",
        "options_hi": ["स्वतंत्र संस्कृत प्रयोग", "परीक्षा उत्तीर्णता", "प्रमाणपत्र प्राप्ति", "गुरु का प्रसाद"],
        "answer_hi": "स्वतंत्र संस्कृत प्रयोग",
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