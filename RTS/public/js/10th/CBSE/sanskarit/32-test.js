const questions = [
    {
        "num": 1,
        "question_hi": "संधि शास्त्र का सबसे प्राचीन ग्रंथ कौन सा है?",
        "options_hi": ["पाणिनीय व्याकरण", "निरुक्त", "प्रातिशाख्य", "वैयाकरण भूषण"],
        "answer_hi": "पाणिनीय व्याकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "संधि की व्युत्पत्ति क्या है?",
        "options_hi": ["सम्यक् धीयते इति संधिः", "सम् + धा धातु", "संहिता में धीयते", "सभी सही हैं"],
        "answer_hi": "सभी सही हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "संधि का मुख्य प्रयोजन क्या है?",
        "options_hi": ["श्रुति माधुर्य, उच्चारण सुविधा", "अर्थ स्पष्टता", "व्याकरण नियम पालन", "छंद के अनुरूपता"],
        "answer_hi": "श्रुति माधुर्य, उच्चारण सुविधा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "स्वर संधि का पहला प्रकार कौन सा है?",
        "options_hi": ["दीर्घ संधि", "गुण संधि", "वृद्धि संधि", "यण संधि"],
        "answer_hi": "दीर्घ संधि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "दीर्घ संधि का सूत्र क्या है?",
        "options_hi": ["अकः सवर्णे दीर्घः", "आद्गुणः", "वृद्धिरेचि", "इको यणचि"],
        "answer_hi": "अकः सवर्णे दीर्घः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "गुण संधि का सूत्र क्या है?",
        "options_hi": ["आद्गुणः", "अकः सवर्णे दीर्घः", "वृद्धिरेचि", "इको यणचि"],
        "answer_hi": "आद्गुणः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "वृद्धि संधि का सूत्र क्या है?",
        "options_hi": ["वृद्धिरेचि", "अकः सवर्णे दीर्घः", "आद्गुणः", "इको यणचि"],
        "answer_hi": "वृद्धिरेचि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "यण संधि का सूत्र क्या है?",
        "options_hi": ["इको यणचि", "अकः सवर्णे दीर्घः", "आद्गुणः", "वृद्धिरेचि"],
        "answer_hi": "इको यणचि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "अयादि संधि का सूत्र क्या है?",
        "options_hi": ["एचोऽयवायावः", "इको यणचि", "आद्गुणः", "वृद्धिरेचि"],
        "answer_hi": "एचोऽयवायावः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "स्वर संधि के कितने उपप्रकार हैं?",
        "options_hi": ["पाँच", "छः", "सात", "आठ"],
        "answer_hi": "पाँच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "दीर्घ संधि का उदाहरण क्या है?",
        "options_hi": ["विद्या + आलय = विद्यालय", "देव + इन्द्र = देवेन्द्र", "महा + ऋषि = महर्षि", "गंगा + उदक = गंगोदक"],
        "answer_hi": "विद्या + आलय = विद्यालय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "गुण संधि का उदाहरण क्या है?",
        "options_hi": ["देव + इन्द्र = देवेन्द्र", "विद्या + आलय = विद्यालय", "महा + ओषधि = महौषधि", "गंगा + उदक = गंगोदक"],
        "answer_hi": "देव + इन्द्र = देवेन्द्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "वृद्धि संधि का उदाहरण क्या है?",
        "options_hi": ["महा + ओषधि = महौषधि", "देव + इन्द्र = देवेन्द्र", "विद्या + आलय = विद्यालय", "गंगा + उदक = गंगोदक"],
        "answer_hi": "महा + ओषधि = महौषधि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "यण संधि का उदाहरण क्या है?",
        "options_hi": ["गंगा + उदक = गंगोदक", "देव + इन्द्र = देवेन्द्र", "विद्या + आलय = विद्यालय", "महा + ओषधि = महौषधि"],
        "answer_hi": "गंगा + उदक = गंगोदक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "अयादि संधि का उदाहरण क्या है?",
        "options_hi": ["नी + अन्त = नयन्त", "गंगा + उदक = गंगोदक", "देव + इन्द्र = देवेन्द्र", "महा + ओषधि = महौषधि"],
        "answer_hi": "नी + अन्त = नयन्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "व्यंजन संधि का पहला प्रकार कौन सा है?",
        "options_hi": ["श्चुत्व संधि", "ष्टुत्व संधि", "ष्ट्व संधि", "जश्त्व संधि"],
        "answer_hi": "श्चुत्व संधि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "श्चुत्व संधि का सूत्र क्या है?",
        "options_hi": ["श्चुत्वं श्चोः शि च", "ष्टुत्वं ष्टुन ष्टुः", "ष्ट्वं ष्टोः ष्ट्वे", "जश्त्वं जशः शि"],
        "answer_hi": "श्चुत्वं श्चोः शि च",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "ष्टुत्व संधि का सूत्र क्या है?",
        "options_hi": ["ष्टुत्वं ष्टुन ष्टुः", "श्चुत्वं श्चोः शि च", "ष्ट्वं ष्टोः ष्ट्वे", "जश्त्वं जशः शि"],
        "answer_hi": "ष्टुत्वं ष्टुन ष्टुः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "ष्ट्व संधि का सूत्र क्या है?",
        "options_hi": ["ष्ट्वं ष्टोः ष्ट्वे", "श्चुत्वं श्चोः शि च", "ष्टुत्वं ष्टुन ष्टुः", "जश्त्वं जशः शि"],
        "answer_hi": "ष्ट्वं ष्टोः ष्ट्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "श्चुत्व संधि का उदाहरण क्या है?",
        "options_hi": ["विद्युत् + आत्मा = विद्युदात्मा", "तत् + ते = तत्ते", "तत् + सुख = तत्सुख", "दिक् + गज = दिग्गज"],
        "answer_hi": "विद्युत् + आत्मा = विद्युदात्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "ष्टुत्व संधि का उदाहरण क्या है?",
        "options_hi": ["तत् + ते = तत्ते", "विद्युत् + आत्मा = विद्युदात्मा", "तत् + सुख = तत्सुख", "दिक् + गज = दिग्गज"],
        "answer_hi": "तत् + ते = तत्ते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "ष्ट्व संधि का उदाहरण क्या है?",
        "options_hi": ["तत् + सुख = तत्सुख", "विद्युत् + आत्मा = विद्युदात्मा", "तत् + ते = तत्ते", "दिक् + गज = दिग्गज"],
        "answer_hi": "तत् + सुख = तत्सुख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "जश्त्व संधि का सूत्र क्या है?",
        "options_hi": ["जश्त्वं जशः शि", "श्चुत्वं श्चोः शि च", "ष्टुत्वं ष्टुन ष्टुः", "ष्ट्वं ष्टोः ष्ट्वे"],
        "answer_hi": "जश्त्वं जशः शि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "जश्त्व संधि का उदाहरण क्या है?",
        "options_hi": ["दिक् + गज = दिग्गज", "विद्युत् + आत्मा = विद्युदात्मा", "तत् + ते = तत्ते", "तत् + सुख = तत्सुख"],
        "answer_hi": "दिक् + गज = दिग्गज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "विसर्ग संधि का पहला प्रकार कौन सा है?",
        "options_hi": ["विसर्ग लोप", "रुँत्व", "शरुँत्व", "अनुनासिक"],
        "answer_hi": "विसर्ग लोप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "विसर्ग लोप का सूत्र क्या है?",
        "options_hi": ["विसर्जनीयस्य सः", "खरि च", "विसर्गस्य रुँः", "अतो रोरप्लुतादप्लुते"],
        "answer_hi": "विसर्जनीयस्य सः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "रुँत्व का सूत्र क्या है?",
        "options_hi": ["विसर्गस्य रुँः", "विसर्जनीयस्य सः", "खरि च", "अतो रोरप्लुतादप्लुते"],
        "answer_hi": "विसर्गस्य रुँः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "शरुँत्व का सूत्र क्या है?",
        "options_hi": ["खरि च", "विसर्जनीयस्य सः", "विसर्गस्य रुँः", "अतो रोरप्लुतादप्लुते"],
        "answer_hi": "खरि च",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "अनुनासिक का सूत्र क्या है?",
        "options_hi": ["अतो रोरप्लुतादप्लुते", "विसर्जनीयस्य सः", "विसर्गस्य रुँः", "खरि च"],
        "answer_hi": "अतो रोरप्लुतादप्लुते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "विसर्ग लोप का उदाहरण क्या है?",
        "options_hi": ["शिवः + आगच्छति = शिव आगच्छति", "मनः + तुष्टि = मनस्तुष्टि", "पुनः + च = पुनश्च", "तपः + अन्ते = तपोऽन्ते"],
        "answer_hi": "शिवः + आगच्छति = शिव आगच्छति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "रुँत्व का उदाहरण क्या है?",
        "options_hi": ["मनः + तुष्टि = मनस्तुष्टि", "शिवः + आगच्छति = शिव आगच्छति", "पुनः + च = पुनश्च", "तपः + अन्ते = तपोऽन्ते"],
        "answer_hi": "मनः + तुष्टि = मनस्तुष्टि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "शरुँत्व का उदाहरण क्या है?",
        "options_hi": ["पुनः + च = पुनश्च", "शिवः + आगच्छति = शिव आगच्छति", "मनः + तुष्टि = मनस्तुष्टि", "तपः + अन्ते = तपोऽन्ते"],
        "answer_hi": "पुनः + च = पुनश्च",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "अनुनासिक का उदाहरण क्या है?",
        "options_hi": ["तपः + अन्ते = तपोऽन्ते", "शिवः + आगच्छति = शिव आगच्छति", "मनः + तुष्टि = मनस्तुष्टि", "पुनः + च = पुनश्च"],
        "answer_hi": "तपः + अन्ते = तपोऽन्ते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "उत्व का सूत्र क्या है?",
        "options_hi": ["उदात्तादनुदात्तस्य स्वरितः", "विसर्गस्य रुँः", "खरि च", "अतो रोरप्लुतादप्लुते"],
        "answer_hi": "उदात्तादनुदात्तस्य स्वरितः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "उत्व का उदाहरण क्या है?",
        "options_hi": ["विधिः + उवाच = विधिरुवाच", "शिवः + आगच्छति = शिव आगच्छति", "मनः + तुष्टि = मनस्तुष्टि", "पुनः + च = पुनश्च"],
        "answer_hi": "विधिः + उवाच = विधिरुवाच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "संधि के अपवाद कितने प्रकार के हैं?",
        "options_hi": ["अनेक", "तीन", "पाँच", "दस"],
        "answer_hi": "अनेक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "पूर्वरूप संधि क्या है?",
        "options_hi": ["अपवाद विशेष", "स्वर संधि का प्रकार", "व्यंजन संधि का भेद", "विसर्ग संधि का रूप"],
        "answer_hi": "अपवाद विशेष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "पररूप संधि क्या है?",
        "options_hi": ["अपवाद विशेष", "स्वर संधि का प्रकार", "व्यंजन संधि का भेद", "विसर्ग संधि का रूप"],
        "answer_hi": "अपवाद विशेष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "संधि के प्रमुख ग्रंथ कौन से हैं?",
        "options_hi": ["अष्टाध्यायी, सिद्धान्तकौमुदी, लघुसिद्धान्तकौमुदी", "महाभाष्य, वाक्यपदीय, कातन्त्र व्याकरण", "रूपावली, धातुपाठ, गणपाठ", "सभी सही हैं"],
        "answer_hi": "सभी सही हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "संधि शिक्षण की प्राचीन विधि क्या है?",
        "options_hi": ["सूत्र पाठ, उदाहरण स्मरण", "अभ्यास पुस्तिका, प्रश्नोत्तर", "कंप्यूटर प्रोग्राम, डिजिटल साधन", "छात्र केंद्रित शिक्षण"],
        "answer_hi": "सूत्र पाठ, उदाहरण स्मरण",
        "attempted": false,
        "selected": ""
    },
        {
        "num": 41,
        "question_hi": "संधि की आधुनिक शिक्षण विधि क्या है?",
        "options_hi": ["कंप्यूटर सहायक, मल्टीमीडिया", "परंपरागत सूत्र पाठ", "मौखिक स्मरण, पुनरावृत्ति", "गुरु-शिष्य परंपरा"],
        "answer_hi": "कंप्यूटर सहायक, मल्टीमीडिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "संधि परीक्षा के लिए कितने प्रकार के प्रश्न होते हैं?",
        "options_hi": ["चार", "पाँच", "छः", "सात"],
        "answer_hi": "चार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "संधि प्रश्न क्या होते हैं?",
        "options_hi": ["पदद्वय का संधि करने के प्रश्न", "संधित पद का विच्छेद करने के प्रश्न", "सूत्र निर्देश प्रश्न", "उदाहरण निर्माण प्रश्न"],
        "answer_hi": "पदद्वय का संधि करने के प्रश्न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "संधि विच्छेद प्रश्न क्या होते हैं?",
        "options_hi": ["संधित पद का विच्छेद करने के प्रश्न", "पदद्वय का संधि करने के प्रश्न", "सूत्र निर्देश प्रश्न", "उदाहरण निर्माण प्रश्न"],
        "answer_hi": "संधित पद का विच्छेद करने के प्रश्न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "सूत्र निर्देश प्रश्न क्या होते हैं?",
        "options_hi": ["संधि का सूत्र पूछते हैं", "पदद्वय का संधि करने के प्रश्न", "संधित पद का विच्छेद करने के प्रश्न", "उदाहरण निर्माण प्रश्न"],
        "answer_hi": "संधि का सूत्र पूछते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "उदाहरण निर्माण प्रश्न क्या होते हैं?",
        "options_hi": ["संधि का उदाहरण देने के प्रश्न", "पदद्वय का संधि करने के प्रश्न", "संधित पद का विच्छेद करने के प्रश्न", "सूत्र निर्देश प्रश्न"],
        "answer_hi": "संधि का उदाहरण देने के प्रश्न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "वेद अध्ययन में संधि का महत्व क्या है?",
        "options_hi": ["अत्यावश्यक", "ऐच्छिक", "गौण", "अनावश्यक"],
        "answer_hi": "अत्यावश्यक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "साहित्य रचना में संधि का महत्व क्या है?",
        "options_hi": ["मूलभूत", "ऐच्छिक", "वैकल्पिक", "नगण्य"],
        "answer_hi": "मूलभूत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "छंद ज्ञान में संधि का महत्व क्या है?",
        "options_hi": ["अपरिहार्य", "ऐच्छिक", "अनावश्यक", "वैकल्पिक"],
        "answer_hi": "अपरिहार्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "संधि के अज्ञान से क्या दोष होता है?",
        "options_hi": ["भाषा दोष, अर्थ विपर्यय", "केवल उच्चारण दोष", "केवल लेखन दोष", "कोई दोष नहीं"],
        "answer_hi": "भाषा दोष, अर्थ विपर्यय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "संधि का प्रयोग किस साहित्य में अधिक है?",
        "options_hi": ["काव्य, नाटक", "व्याकरण, निरुक्त", "ज्योतिष, आयुर्वेद", "सभी जगह समान"],
        "answer_hi": "काव्य, नाटक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "संधि का अभ्यास कैसे करना चाहिए?",
        "options_hi": ["नियमित रूप से, उदाहरण सहित", "केवल सूत्र स्मरण से", "केवल प्रश्नोत्तर से", "स्वयं अध्ययन से"],
        "answer_hi": "नियमित रूप से, उदाहरण सहित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "संधि का सबसे सरल प्रकार कौन सा माना जाता है?",
        "options_hi": ["स्वर संधि", "व्यंजन संधि", "विसर्ग संधि", "उभय संधि"],
        "answer_hi": "स्वर संधि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "संधि का सबसे कठिन प्रकार कौन सा माना जाता है?",
        "options_hi": ["विसर्ग संधि", "स्वर संधि", "व्यंजन संधि", "मिश्र संधि"],
        "answer_hi": "विसर्ग संधि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "संधि का प्रयोग अन्य भाषाओं में भी है क्या?",
        "options_hi": ["हाँ, सभी भाषाओं में", "नहीं, केवल संस्कृत में", "केवल भारतीय भाषाओं में", "केवल प्राचीन भाषाओं में"],
        "answer_hi": "हाँ, सभी भाषाओं में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "अंग्रेजी भाषा में संधि की तुलना कैसे होती है?",
        "options_hi": ["Contraction", "Elision", "Liaison", "सभी सही हैं"],
        "answer_hi": "सभी सही हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "संधि के डिजिटल प्रोग्राम कौन से हैं?",
        "options_hi": ["संस्कृत संधि, व्याकरण सॉफ्टवेयर", "विंडोज, लिनक्स", "माइक्रोसॉफ्ट ऑफिस", "अडोबी रीडर"],
        "answer_hi": "संस्कृत संधि, व्याकरण सॉफ्टवेयर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "संधि के मोबाइल एप्लिकेशन कौन से हैं?",
        "options_hi": ["संस्कृत संधि, व्याकरण", "व्हाट्सएप, फेसबुक", "यूट्यूब, इंस्टाग्राम", "गूगल मैप्स"],
        "answer_hi": "संस्कृत संधि, व्याकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "संधि का ऑनलाइन शिक्षण कहाँ होता है?",
        "options_hi": ["यूट्यूब, वेबसाइट्स, एप्स", "केवल पुस्तकों में", "केवल कक्षा में", "केवल गुरु से"],
        "answer_hi": "यूट्यूब, वेबसाइट्स, एप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "संधि के शोध विषय क्या हैं?",
        "options_hi": ["ऐतिहासिक विकास, भाषिक विश्लेषण", "केवल सूत्र", "केवल उदाहरण", "केवल प्रश्नोत्तर"],
        "answer_hi": "ऐतिहासिक विकास, भाषिक विश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "संधि की भविष्य की संभावनाएँ क्या हैं?",
        "options_hi": ["कृत्रिम बुद्धि सहायक, स्वयं शिक्षण साधन", "परंपरागत शिक्षण", "सूत्र स्मरण, पुनरावृत्ति", "गुरु-शिष्य परंपरा"],
        "answer_hi": "कृत्रिम बुद्धि सहायक, स्वयं शिक्षण साधन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "संधि का अंतर्राष्ट्रीय महत्व क्या है?",
        "options_hi": ["भाषा विज्ञान, तुलनात्मक भाषा शास्त्र", "केवल संस्कृत अध्ययन", "केवल भारतीय विद्यालयों में", "कोई नहीं"],
        "answer_hi": "भाषा विज्ञान, तुलनात्मक भाषा शास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "संधि के प्राचीन टीकाकार कौन हैं?",
        "options_hi": ["पतंजलि, कात्यायन, भर्तृहरि", "शंकराचार्य, रामानुजाचार्य", "चाणक्य, वात्स्यायन", "सुश्रुत, चरक"],
        "answer_hi": "पतंजलि, कात्यायन, भर्तृहरि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "संधि के आधुनिक टीकाकार कौन हैं?",
        "options_hi": ["भट्टोजि दीक्षित, वरदराज, नागेश भट्ट", "रवीन्द्रनाथ टैगोर, महात्मा गांधी", "जवाहरलाल नेहरू, सरदार पटेल", "सुभाषचंद्र बोस, भगत सिंह"],
        "answer_hi": "भट्टोजि दीक्षित, वरदराज, नागेश भट्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "संधि के प्रमुख विश्वविद्यालय कौन से हैं?",
        "options_hi": ["संस्कृत विश्वविद्यालय, भाषा विज्ञान विभाग", "तकनीकी विश्वविद्यालय", "चिकित्सा विद्यालय", "व्यापार विद्यालय"],
        "answer_hi": "संस्कृत विश्वविद्यालय, भाषा विज्ञान विभाग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "संधि से संबंधित पत्रिकाएँ कौन सी हैं?",
        "options_hi": ["संस्कृत संदेश, व्याकरण चर्चा", "विज्ञान पत्रिका, तकनीकी पत्रिका", "चिकित्सा पत्रिका, आरोग्य पत्रिका", "व्यापार पत्रिका, अर्थ पत्रिका"],
        "answer_hi": "संस्कृत संदेश, व्याकरण चर्चा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "संधि की प्रतियोगिताएँ क्या हैं?",
        "options_hi": ["व्याकरण प्रतियोगिता, संधि परीक्षा", "खेल प्रतियोगिता", "गीत प्रतियोगिता", "नृत्य प्रतियोगिता"],
        "answer_hi": "व्याकरण प्रतियोगिता, संधि परीक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "संधि के पुरस्कार क्या हैं?",
        "options_hi": ["व्याकरण पुरस्कार, पाणिनि पुरस्कार", "नोबेल पुरस्कार", "फिल्मफेयर पुरस्कार", "ग्रैमी पुरस्कार"],
        "answer_hi": "व्याकरण पुरस्कार, पाणिनि पुरस्कार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "संग्रहालय में संधि से क्या देखा जाता है?",
        "options_hi": ["प्राचीन पांडुलिपियाँ, टीका ग्रंथ", "पत्थर की मूर्तियाँ", "चित्रकला", "वाद्य यंत्र"],
        "answer_hi": "प्राचीन पांडुलिपियाँ, टीका ग्रंथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "संधि का डिजिटलीकरण कैसे होता है?",
        "options_hi": ["स्कैनिंग, OCR, डेटाबेस", "हस्तलेखन, मुद्रण", "मौखिक पाठ, श्रवण", "चित्रकला, शिल्पकला"],
        "answer_hi": "स्कैनिंग, OCR, डेटाबेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "कृत्रिम बुद्धि से संधि की क्या सहायता है?",
        "options_hi": ["स्वयं संधि करना, शुद्धता परीक्षण", "केवल सूत्र स्मरण", "केवल उदाहरण निर्माण", "केवल प्रश्नोत्तर निर्माण"],
        "answer_hi": "स्वयं संधि करना, शुद्धता परीक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "संधि के खेल कौन से हैं?",
        "options_hi": ["संधि पहेलियाँ, क्विज, पजल्स", "क्रिकेट, फुटबॉल", "शतरंज, लुडो", "वीडियो गेम्स, एक्शन गेम्स"],
        "answer_hi": "संधि पहेलियाँ, क्विज, पजल्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "संधि के एप्स कौन से हैं?",
        "options_hi": ["संस्कृत संधि, व्याकरण शिक्षक", "व्हाट्सएप, इंस्टाग्राम", "यूट्यूब, नेटफ्लिक्स", "अमेज़ॉन, फ्लिपकार्ट"],
        "answer_hi": "संस्कृत संधि, व्याकरण शिक्षक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "संधि के यूट्यूब चैनल कौन से हैं?",
        "options_hi": ["संस्कृत भारती, व्याकरण प्रवेश", "टी-सीरीज, स्टार प्लस", "सोनी एंटरटेनमेंट, जीटीवी", "डिस्कवरी, नेशनल ज्योग्राफिक"],
        "answer_hi": "संस्कृत भारती, व्याकरण प्रवेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "संधि की वेबसाइट्स कौन सी हैं?",
        "options_hi": ["संस्कृत डॉक्यूमेंट्स, व्याकरण.कॉम", "फेसबुक, ट्विटर", "गूगल, याहू", "अमेज़ॉन, फ्लिपकार्ट"],
        "answer_hi": "संस्कृत डॉक्यूमेंट्स, व्याकरण.कॉम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "संधि के ऑनलाइन कोर्स कौन से हैं?",
        "options_hi": ["स्वयंप्रभा, एनपीटेल, कोर्सेरा", "ऑफलाइन कक्षाएँ", "पत्राचार पाठ्यक्रम", "गुरुकुल शिक्षण"],
        "answer_hi": "स्वयंप्रभा, एनपीटेल, कोर्सेरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "संधि की ई-बुक्स कौन सी हैं?",
        "options_hi": ["PDF ग्रंथ, Kindle संस्करण", "केवल मुद्रित ग्रंथ", "केवल हस्तलिखित ग्रंथ", "केवल श्रव्य पुस्तकें"],
        "answer_hi": "PDF ग्रंथ, Kindle संस्करण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "संधि के पॉडकास्ट कौन से हैं?",
        "options_hi": ["व्याकरण संदर्शन, संस्कृत शिक्षण", "संगीत पॉडकास्ट", "व्यापार पॉडकास्ट", "खेल पॉडकास्ट"],
        "answer_hi": "व्याकरण संदर्शन, संस्कृत शिक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "संधि के ब्लॉग्स कौन से हैं?",
        "options_hi": ["व्याकरण ब्लॉग, संस्कृत ब्लॉग", "व्यापार ब्लॉग्स", "तकनीकी ब्लॉग्स", "मनोरंजन ब्लॉग्स"],
        "answer_hi": "व्याकरण ब्लॉग, संस्कृत ब्लॉग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "संधि के सोशल मीडिया ग्रुप्स कौन से हैं?",
        "options_hi": ["संस्कृत शिक्षण, व्याकरण चर्चा", "खेल ग्रुप्स", "मनोरंजन ग्रुप्स", "व्यापार ग्रुप्स"],
        "answer_hi": "संस्कृत शिक्षण, व्याकरण चर्चा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "संधि शिक्षण की नवीनतम तकनीकें क्या हैं?",
        "options_hi": ["VR, AR, इंटरएक्टिव एप्स", "केवल पुस्तकें", "केवल श्यामपट्ट", "केवल मौखिक पाठ"],
        "answer_hi": "VR, AR, इंटरएक्टिव एप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "संधि में AI का प्रयोग कैसे होता है?",
        "options_hi": ["स्वयं शिक्षण, त्रुटि संशोधन", "केवल डेटा संग्रह", "केवल पाठ्यपुस्तक निर्माण", "केवल परीक्षा निर्माण"],
        "answer_hi": "स्वयं शिक्षण, त्रुटि संशोधन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "संधि में मशीन लर्निंग का प्रयोग क्या है?",
        "options_hi": ["संधि नियमों का पूर्वानुमान", "केवल डेटा विश्लेषण", "केवल चित्र संसाधन", "केवल ध्वनि संसाधन"],
        "answer_hi": "संधि नियमों का पूर्वानुमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "संधि में NLP का प्रयोग क्या है?",
        "options_hi": ["प्राकृतिक भाषा प्रक्रमण, संधि स्वतःकरण", "केवल अनुवाद", "केवल वाक्य विश्लेषण", "केवल शब्दकोश निर्माण"],
        "answer_hi": "प्राकृतिक भाषा प्रक्रमण, संधि स्वतःकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "संधि की भविष्य की संभावनाएँ क्या हैं?",
        "options_hi": ["स्वयंशिक्षण, वैयक्तिकृत शिक्षण", "परंपरागत शिक्षण", "गुरुकुल प्रणाली", "मौखिक परंपरा"],
        "answer_hi": "स्वयंशिक्षण, वैयक्तिकृत शिक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "संधि का अंतर्राष्ट्रीय सहयोग कैसा है?",
        "options_hi": ["संयुक्त शोध, डिजिटल प्रोजेक्ट", "केवल राष्ट्रीय स्तर", "केवल स्थानीय स्तर", "केवल विश्वविद्यालय स्तर"],
        "answer_hi": "संयुक्त शोध, डिजिटल प्रोजेक्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "संधि का UNESCO से क्या संबंध है?",
        "options_hi": ["अमूर्त सांस्कृतिक विरासत", "भौतिक विरासत", "प्राकृतिक विरासत", "तकनीकी विरासत"],
        "answer_hi": "अमूर्त सांस्कृतिक विरासत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "संधि का राष्ट्रीय महत्व क्या है?",
        "options_hi": ["सांस्कृतिक पहचान, भाषिक सम्पदा", "केवल शैक्षणिक महत्व", "केवल ऐतिहासिक महत्व", "केवल साहित्यिक महत्व"],
        "answer_hi": "सांस्कृतिक पहचान, भाषिक सम्पदा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "संधि का सामाजिक महत्व क्या है?",
        "options_hi": ["भाषा संरक्षण, सांस्कृतिक अभिमान", "केवल व्यक्तिगत ज्ञान", "केवल शैक्षणिक लाभ", "केवल व्यावसायिक लाभ"],
        "answer_hi": "भाषा संरक्षण, सांस्कृतिक अभिमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "संधि का आर्थिक महत्व क्या है?",
        "options_hi": ["शिक्षण व्यवसाय, प्रकाशन व्यवसाय", "कृषि व्यवसाय", "उद्योग व्यवसाय", "व्यापार व्यवसाय"],
        "answer_hi": "शिक्षण व्यवसाय, प्रकाशन व्यवसाय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "संधि का पर्यटन से संबंधित महत्व क्या है?",
        "options_hi": ["ज्ञान पर्यटन, शैक्षणिक पर्यटन", "धार्मिक पर्यटन", "विराम पर्यटन", "साहसिक पर्यटन"],
        "answer_hi": "ज्ञान पर्यटन, शैक्षणिक पर्यटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "संधि से स्वास्थ्य लाभ क्या है?",
        "options_hi": ["मानसिक व्यायाम, स्मृति वर्धन", "शारीरिक व्यायाम", "आहार लाभ", "निद्रा लाभ"],
        "answer_hi": "मानसिक व्यायाम, स्मृति वर्धन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "वृद्धावस्था में संधि का महत्व क्या है?",
        "options_hi": ["मानसिक सक्रियता, स्मृति संरक्षण", "शारीरिक स्वास्थ्य", "सामाजिक संबंध", "आर्थिक सुरक्षा"],
        "answer_hi": "मानसिक सक्रियता, स्मृति संरक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "बच्चों के लिए संधि का महत्व क्या है?",
        "options_hi": ["मानसिक विकास, भाषा कौशल वर्धन", "खेल विकास", "शारीरिक विकास", "सामाजिक विकास"],
        "answer_hi": "मानसिक विकास, भाषा कौशल वर्धन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "युवाओं के लिए संधि का महत्व क्या है?",
        "options_hi": ["रोजगार संभावनाएँ, शोध क्षेत्र", "खेल संभावनाएँ", "मनोरंजन संभावनाएँ", "व्यापार संभावनाएँ"],
        "answer_hi": "रोजगार संभावनाएँ, शोध क्षेत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "महिलाओं के लिए संधि का महत्व क्या है?",
        "options_hi": ["शैक्षणिक समानता, रोजगार संभावनाएँ", "केवल घरेलू कार्य", "केवल पाक कला", "केवल शिशु पालन"],
        "answer_hi": "शैक्षणिक समानता, रोजगार संभावनाएँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "विकलांगों के लिए संधि का महत्व क्या है?",
        "options_hi": ["समावेशी शिक्षण, विशेष साधन", "केवल सामान्य शिक्षण", "केवल चिकित्सा शिक्षण", "केवल व्यावसायिक शिक्षण"],
        "answer_hi": "समावेशी शिक्षण, विशेष साधन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "ग्रामीण क्षेत्र में संधि का महत्व क्या है?",
        "options_hi": ["डिजिटल शिक्षण, दूर शिक्षण", "केवल परंपरागत शिक्षण", "केवल कृषि शिक्षण", "केवल हस्तकला शिक्षण"],
        "answer_hi": "डिजिटल शिक्षण, दूर शिक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "संधि का वैश्विक महत्व क्या है?",
        "options_hi": ["मानव सांस्कृतिक विरासत, भाषावैज्ञानिक योगदान", "केवल भारतीय महत्व", "केवल एशियाई महत्व", "केवल प्राचीन महत्व"],
        "answer_hi": "मानव सांस्कृतिक विरासत, भाषावैज्ञानिक योगदान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "संधि का सार्वकालिक संदेश क्या है?",
        "options_hi": ["भाषा एकीकरण करती है, संस्कृति संरक्षित होती है", "केवल व्याकरण पढ़ा जाता है", "केवल परीक्षा उत्तीर्ण की जाती है", "केवल ज्ञान बढ़ता है"],
        "answer_hi": "भाषा एकीकरण करती है, संस्कृति संरक्षित होती है",
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