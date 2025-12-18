const questions = [
    {
        "num": 1,
        "question_hi": "वैदिक मंत्रों के मूल रचनाकार कौन हैं?",
        "options_hi": ["ऋषि", "राजा", "देवता", "मुनि"],
        "answer_hi": "ऋषि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "ऋग्वेद में कितने सूक्त हैं?",
        "options_hi": ["एक हज़ार दस से अधिक", "पाँच सौ", "दो हज़ार", "तीन हज़ार"],
        "answer_hi": "एक हज़ार दस से अधिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "गायत्री मंत्र के प्रसिद्ध टीकाकार कौन हैं?",
        "options_hi": ["सायणाचार्य", "शंकराचार्य", "मध्वाचार्य", "रामानुजाचार्य"],
        "answer_hi": "सायणाचार्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "'सत्यमेव जयते' यह उक्ति किस उपनिषद से है?",
        "options_hi": ["मुण्डकोपनिषद", "छान्दोग्योपनिषद", "कठोपनिषद", "तैत्तिरीयोपनिषद"],
        "answer_hi": "मुण्डकोपनिषद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "वेद मंत्रों में 'विश्वामित्र' को क्या कहा जाता है?",
        "options_hi": ["ऋषि", "देवता", "राजा", "योद्धा"],
        "answer_hi": "ऋषि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "यजुर्वेद की कितनी शाखाएँ हैं?",
        "options_hi": ["शुक्ल और कृष्ण भेद से दो", "चार", "आठ", "सोलह"],
        "answer_hi": "शुक्ल और कृष्ण भेद से दो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "'तमसो मा ज्योतिर्गमय' का उल्लेख कहाँ मिलता है?",
        "options_hi": ["बृहदारण्यकोपनिषद", "ऋग्वेद", "यजुर्वेद", "सामवेद"],
        "answer_hi": "बृहदारण्यकोपनिषद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "वेद मंत्रों में 'हविः' शब्द का क्या अर्थ है?",
        "options_hi": ["यज्ञीय द्रव्य", "जल", "अन्न", "घी"],
        "answer_hi": "यज्ञीय द्रव्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "गायत्री मंत्र का पहला पद क्या है?",
        "options_hi": ["ॐ भूर्भुवः स्वः", "तत्सवितुर्वरेण्यम्", "भर्गो देवस्य धीमहि", "धियो यो नः प्रचोदयात्"],
        "answer_hi": "ॐ भूर्भुवः स्वः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "वेद मंत्रों में 'सोम' की देवता कौन है?",
        "options_hi": ["चन्द्र", "सूर्य", "अग्नि", "वरुण"],
        "answer_hi": "चन्द्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "ऋग्वेद के प्रथम सूक्त के ऋषि कौन हैं?",
        "options_hi": ["मधुच्छन्दा", "विश्वामित्र", "वशिष्ठ", "भरद्वाज"],
        "answer_hi": "मधुच्छन्दा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "वेद मंत्रों में 'ऋतु' शब्द का क्या अर्थ है?",
        "options_hi": ["कालभेद", "देवता", "ऋषि", "मंत्र"],
        "answer_hi": "कालभेद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "'ॐ पूर्णमदः पूर्णमिदम्' का पूर्ण मंत्र क्या है?",
        "options_hi": ["ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते", "ॐ पूर्णमदः पूर्णमिदं सर्वं खल्विदं ब्रह्म", "ॐ पूर्णमदः पूर्णमिदं तत्सत्यं ज्ञानमनन्तं ब्रह्म", "ॐ पूर्णमदः पूर्णमिदं अहं ब्रह्मास्मि"],
        "answer_hi": "ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "वेद मंत्रों में 'स्वर' शब्द का क्या अर्थ है?",
        "options_hi": ["उच्चारण स्वर", "प्रकाश", "ध्वनि", "गान"],
        "answer_hi": "उच्चारण स्वर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "सामवेद में कितने मंत्र हैं?",
        "options_hi": ["सहस्राधिक", "पाँच सौ", "दो हज़ार", "पाँच हज़ार"],
        "answer_hi": "सहस्राधिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "'ॐ आप्यायन्तु ममाङ्गानि' इस मंत्र की देवता कौन है?",
        "options_hi": ["सभी देवता", "विष्णु", "शिव", "ब्रह्मा"],
        "answer_hi": "सभी देवता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "अथर्ववेद का प्रसिद्ध सूक्त कौन सा है?",
        "options_hi": ["भूमि सूक्त", "पुरुष सूक्त", "गायत्री सूक्त", "रुद्र सूक्त"],
        "answer_hi": "भूमि सूक्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "वेद मंत्रों में 'छन्द' शब्द का क्या अर्थ है?",
        "options_hi": ["पद्य रचना प्रकार", "मंत्र", "स्तोत्र", "प्रार्थना"],
        "answer_hi": "पद्य रचना प्रकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "गायत्री मंत्र के छन्द में कितने अक्षर हैं?",
        "options_hi": ["चौबीस", "अट्ठाईस", "बत्तीस", "चौबीस"],
        "answer_hi": "चौबीस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "'सर्वे भवन्तु सुखिनः' यह भाव कहाँ दिखता है?",
        "options_hi": ["वैदिक मंत्रों में", "स्मृतियों में", "पुराणों में", "काव्यों में"],
        "answer_hi": "वैदिक मंत्रों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "वेद मंत्रों में 'ऋतम्' और 'सत्यम्' क्या सूचित करते हैं?",
        "options_hi": ["नैतिक मूल्य", "देवता", "मंत्र", "यज्ञ"],
        "answer_hi": "नैतिक मूल्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "पुरुष सूक्त का पहला मंत्र क्या है?",
        "options_hi": ["सहस्रशीर्षा पुरुषः", "पुरुष एवेदं सर्वम्", "यत्पुरुषं व्यदधुः", "तस्माद्विराळजायत"],
        "answer_hi": "सहस्रशीर्षा पुरुषः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "वेद मंत्रों में 'ऋषि' ने क्या देखा?",
        "options_hi": ["मंत्र", "देवता", "ज्ञान", "सत्य"],
        "answer_hi": "मंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "मृत्युंजय मंत्र के ऋषि कौन हैं?",
        "options_hi": ["वशिष्ठ", "विश्वामित्र", "भृगु", "मार्कण्डेय"],
        "answer_hi": "वशिष्ठ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "वेद मंत्रों में 'व्रतम्' क्या सूचित करता है?",
        "options_hi": ["संकल्प", "दान", "यज्ञ", "पूजा"],
        "answer_hi": "संकल्प",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "'ॐ त्र्यम्बकं यजामहे' मंत्र का सम्पूर्ण रूप क्या है?",
        "options_hi": ["ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्", "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनं उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्", "ॐ त्र्यम्बकं यजामहे वरदं मृत्युञ्जयम्", "ॐ त्र्यम्बकं यजामहे भक्तानां वरदं शिवम्"],
        "answer_hi": "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनं उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "वेद मंत्रों में 'यजुः' शब्द का क्या अर्थ है?",
        "options_hi": ["यज्ञ मंत्र", "स्तोत्र", "प्रार्थना", "गान"],
        "answer_hi": "यज्ञ मंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "सामवेद की विशेषता क्या है?",
        "options_hi": ["गेय रूप", "याज्ञिक रूप", "चिकित्सा रूप", "जादू रूप"],
        "answer_hi": "गेय रूप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "वेद मंत्रों में 'स्वधा' किसके लिए प्रयुक्त होती है?",
        "options_hi": ["पितरों के लिए", "देवताओं के लिए", "मनुष्यों के लिए", "ऋषियों के लिए"],
        "answer_hi": "पितरों के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "'असतो मा सद्गमय' इस मंत्र के ऋषि कौन हैं?",
        "options_hi": ["वामदेव", "याज्ञवल्क्य", "विश्वामित्र", "भरद्वाज"],
        "answer_hi": "वामदेव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "वेद मंत्रों में 'स्तोम' शब्द का क्या अर्थ है?",
        "options_hi": ["स्तुति", "मंत्र", "ऋचा", "साम"],
        "answer_hi": "स्तुति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "ऋग्वेद के दशम मण्डल का प्रसिद्ध सूक्त कौन सा है?",
        "options_hi": ["पुरुष सूक्त", "नासदीय सूक्त", "हिरण्यगर्भ सूक्त", "देवी सूक्त"],
        "answer_hi": "पुरुष सूक्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "वेद मंत्रों में 'ऋक्' शब्द का क्या अर्थ है?",
        "options_hi": ["स्तोत्र", "यज्ञ", "गान", "मंत्र"],
        "answer_hi": "स्तोत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "'वेदोऽखिलो धर्ममूलम्' यह उक्ति कहाँ मिलती है?",
        "options_hi": ["मनुस्मृति", "याज्ञवल्क्य स्मृति", "पुराणों में", "उपनिषदों में"],
        "answer_hi": "मनुस्मृति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "वेद मंत्रों में 'होता' क्या करता है?",
        "options_hi": ["यज्ञ में मंत्र पाठ करता है", "गान करता है", "अध्ययन करता है", "पूजा करता है"],
        "answer_hi": "यज्ञ में मंत्र पाठ करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "सामवेद के प्रसिद्ध ऋषि कौन हैं?",
        "options_hi": ["जैमिनि", "वेदव्यास", "पाणिनि", "याज्ञवल्क्य"],
        "answer_hi": "जैमिनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "वेद मंत्रों में 'इडा' शब्द का क्या अर्थ है?",
        "options_hi": ["स्तुति", "आहुति", "देवता", "ऋषि"],
        "answer_hi": "स्तुति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "'ॐ द्यौः शान्तिः' इस शान्तिपाठ के ऋषि कौन हैं?",
        "options_hi": ["अत्रि", "वशिष्ठ", "भरद्वाज", "विश्वामित्र"],
        "answer_hi": "अत्रि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "वेद मंत्रों में 'ऋतु' कितने हैं?",
        "options_hi": ["छः", "बारह", "चार", "आठ"],
        "answer_hi": "छः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "अथर्ववेद में प्रसिद्ध सूक्त 'क्या' है?",
        "options_hi": ["क्षेत्र सूक्त", "विद्या सूक्त", "धन सूक्त", "राज सूक्त"],
        "answer_hi": "क्षेत्र सूक्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "वेद मंत्रों में 'अग्निः' क्या सूचित करता है?",
        "options_hi": ["ज्योति", "वायु", "जल", "पृथिवी"],
        "answer_hi": "ज्योति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "'सा विद्या या विमुक्तये' यह उक्ति कहाँ मिलती है?",
        "options_hi": ["विष्णु पुराण", "भागवत", "मनुस्मृति", "वेदों में"],
        "answer_hi": "विष्णु पुराण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "वेद मंत्रों में 'मन्त्र' शब्द की व्युत्पत्ति क्या है?",
        "options_hi": ["मनन से त्राण", "मन से त्राण", "मन में त्राण", "मननत्राण"],
        "answer_hi": "मनन से त्राण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "ऋग्वेद के प्रथम सूक्त की देवता कौन है?",
        "options_hi": ["अग्नि", "इन्द्र", "वरुण", "सूर्य"],
        "answer_hi": "अग्नि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "वेद मंत्रों में 'सविता' क्या सूचित करता है?",
        "options_hi": ["सूर्य", "चन्द्र", "अग्नि", "वायु"],
        "answer_hi": "सूर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "'येनाक्षरसमाम्नायम्' इस मंत्र का प्रयोजन क्या है?",
        "options_hi": ["वेद रक्षा", "ज्ञान प्राप्ति", "धन लाभ", "आयु वृद्धि"],
        "answer_hi": "वेद रक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "वेद मंत्रों में 'ब्रह्म' शब्द का क्या अर्थ है?",
        "options_hi": ["परमात्मा", "ऋषि", "मंत्र", "यज्ञ"],
        "answer_hi": "परमात्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "सामवेद में कितने उपवेद हैं?",
        "options_hi": ["एक", "दो", "तीन", "चार"],
        "answer_hi": "एक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "वेद मंत्रों में 'इन्द्रः' क्या सूचित करता है?",
        "options_hi": ["वज्रधारी", "जलद", "अग्निधारी", "वायुधारी"],
        "answer_hi": "वज्रधारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "'ॐ शान्तिः शान्तिः शान्तिः' यह किसलिए उच्चारित किया जाता है?",
        "options_hi": ["सर्वत्र शान्ति के लिए", "धन लाभ के लिए", "विद्या प्राप्ति के लिए", "रोग निवारण के लिए"],
        "answer_hi": "सर्वत्र शान्ति के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "वेद मंत्रों में 'वरुणः' क्या सूचित करता है?",
        "options_hi": ["जलाधिपति", "वायुअधिपति", "अग्न्यधिपति", "भूम्यधिपति"],
        "answer_hi": "जलाधिपति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "'अहं राष्ट्री संगमनी वसूनाम्' इस मंत्र की देवता कौन है?",
        "options_hi": ["वाक्", "इन्द्राणी", "सरस्वती", "लक्ष्मी"],
        "answer_hi": "वाक्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "वेद मंत्रों में 'उषा' कौन है?",
        "options_hi": ["प्रभात देवता", "रात्रि देवता", "मध्याह्न देवता", "सायं देवता"],
        "answer_hi": "प्रभात देवता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "'समुद्रव्यचसं गिरम्' में 'समुद्रव्यचसम्' पद का क्या अर्थ है?",
        "options_hi": ["विस्तृत कान्ति", "जलपूर्ण", "गम्भीर", "अपार"],
        "answer_hi": "विस्तृत कान्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "वेद मंत्रों में 'मरुतः' कौन हैं?",
        "options_hi": ["वायु देवता", "जल देवता", "अग्नि देवता", "पर्वत देवता"],
        "answer_hi": "वायु देवता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "'ऋतस्य पथ्या अनु' इसका भाव क्या है?",
        "options_hi": ["सत्य मार्ग का अनुसरण", "धर्म मार्ग का अनुसरण", "ज्ञान मार्ग का अनुसरण", "यज्ञ मार्ग का अनुसरण"],
        "answer_hi": "सत्य मार्ग का अनुसरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "वेद मंत्रों में 'अदितिः' कौन है?",
        "options_hi": ["देव माता", "मानव माता", "पशु माता", "वृक्ष माता"],
        "answer_hi": "देव माता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "'युवं स्यातं पितरा' इस मंत्र का भाव क्या है?",
        "options_hi": ["पिता के समान पालन", "भाई के समान सहायता", "गुरु के समान मार्गदर्शन", "मित्र के समान सहयोग"],
        "answer_hi": "पिता के समान पालन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "वेद मंत्रों में 'अश्विनौ' कौन हैं?",
        "options_hi": ["चिकित्सक देवता", "योद्धा देवता", "ऋषि देवता", "राज देवता"],
        "answer_hi": "चिकित्सक देवता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "'समानी व आकूतिः' इसका भाव क्या है?",
        "options_hi": ["समान प्रयत्न", "समान धन", "समान विद्या", "समान बल"],
        "answer_hi": "समान प्रयत्न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "वेद मंत्रों में 'सूर्यः' क्या सूचित करता है?",
        "options_hi": ["प्रकाशक", "तापक", "जीवनदाता", "सब कुछ बताता है"],
        "answer_hi": "प्रकाशक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "'अग्ने नय सुपथा राये' इस मंत्र के ऋषि कौन हैं?",
        "options_hi": ["वामदेव", "विश्वामित्र", "वशिष्ठ", "भरद्वाज"],
        "answer_hi": "वामदेव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "वेद मंत्रों में 'यमः' कौन है?",
        "options_hi": ["मृत्यु देवता", "धर्म देवता", "काल देवता", "न्याय देवता"],
        "answer_hi": "मृत्यु देवता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "'मित्रस्य चक्षुषा' इसका भाव क्या है?",
        "options_hi": ["मैत्री दृष्टि से", "ज्ञान दृष्टि से", "धर्म दृष्टि से", "कर्म दृष्टि से"],
        "answer_hi": "मैत्री दृष्टि से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "वेद मंत्रों में 'विष्णुः' क्या सूचित करता है?",
        "options_hi": ["व्यापक", "रक्षक", "सृष्टिकर्ता", "प्रलयकर्ता"],
        "answer_hi": "व्यापक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "'तद्विष्णोः परमं पदम्' इसका भाव क्या है?",
        "options_hi": ["विष्णु का उत्तम स्थान", "विष्णु का धन", "विष्णु का यश", "विष्णु का बल"],
        "answer_hi": "विष्णु का उत्तम स्थान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "वेद मंत्रों में 'रुद्रः' कौन है?",
        "options_hi": ["क्रोध देवता", "वायु देवता", "अग्नि देवता", "जल देवता"],
        "answer_hi": "क्रोध देवता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "'स नो बन्धुरित्कृणवद्' इसका भाव क्या है?",
        "options_hi": ["वह हमारा बन्धु हो", "वह धन दे", "वह यश दे", "वह बल दे"],
        "answer_hi": "वह हमारा बन्धु हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "वेद मंत्रों में 'प्रजापतिः' कौन है?",
        "options_hi": ["सृष्टिकर्ता", "पालनकर्ता", "संहारकर्ता", "विद्याकर्ता"],
        "answer_hi": "सृष्टिकर्ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "'प्रजानां पतये नमः' इसका भाव क्या है?",
        "options_hi": ["प्रजापति को नमस्कार", "राजा को नमस्कार", "गुरु को नमस्कार", "पिता को नमस्कार"],
        "answer_hi": "प्रजापति को नमस्कार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "वेद मंत्रों में 'सरस्वती' कौन है?",
        "options_hi": ["विद्या देवी", "धन देवी", "यश देवी", "बल देवी"],
        "answer_hi": "विद्या देवी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "'सरस्वतीं धियावसुम्' इसका भाव क्या है?",
        "options_hi": ["बुद्धिदात्री सरस्वती", "धनदात्री सरस्वती", "यशदात्री सरस्वती", "बलदात्री सरस्वती"],
        "answer_hi": "बुद्धिदात्री सरस्वती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "वेद मंत्रों में 'वायुः' क्या सूचित करता है?",
        "options_hi": ["प्राण", "जीवन", "गति", "शक्ति"],
        "answer_hi": "प्राण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "'वात इव स्तोभते' इसका भाव क्या है?",
        "options_hi": ["वायु के समान कम्पित", "अग्नि के समान जलता", "जल के समान बरसता", "पर्वत के समान खड़ा"],
        "answer_hi": "वायु के समान कम्पित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "वेद मंत्रों में 'द्यौः' क्या है?",
        "options_hi": ["आकाश", "पृथ्वी", "अन्तरिक्ष", "सूर्य"],
        "answer_hi": "आकाश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "'द्यावापृथिवी जनित्री' इसका भाव क्या है?",
        "options_hi": ["आकाश और पृथ्वी जननी हैं", "सूर्य और चन्द्र जनक हैं", "अग्नि और जल जनक हैं", "वायु और आकाश जनक हैं"],
        "answer_hi": "आकाश और पृथ्वी जननी हैं",
        "attempted": false,
        "selected": ""
    },
   {
        "num": 77,
        "question_hi": "वेद मंत्रों में 'अपः' क्या सूचित करता है?",
        "options_hi": ["जल", "अग्नि", "वायु", "आकाश"],
        "answer_hi": "जल",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 78,
        "question_hi": "'आपो हि ष्ठा मयोभुवः' इसका भाव क्या है?",
        "options_hi": ["जल सुखदायक हैं", "अग्नि तापक है", "वायु गति देता है", "आकाश विस्तृत है"],
        "answer_hi": "जल सुखदायक हैं",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 79,
        "question_hi": "वेद मंत्रों में 'ओषधयः' क्या हैं?",
        "options_hi": ["वनस्पतियाँ", "पर्वत", "नदियाँ", "खनिज"],
        "answer_hi": "वनस्पतियाँ",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 80,
        "question_hi": "'ओषधीभ्यः स्वाहा' इसका प्रयोग कहाँ होता है?",
        "options_hi": ["यज्ञ में आहुति के समय", "ध्यान में", "पूजा में", "स्नान के समय"],
        "answer_hi": "यज्ञ में आहुति के समय",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 81,
        "question_hi": "वेद मंत्रों में 'गौः' क्या सूचित करता है?",
        "options_hi": ["पृथ्वी और गाय", "आकाश", "सूर्य", "वृषभ"],
        "answer_hi": "पृथ्वी और गाय",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 82,
        "question_hi": "'गावो मे मातरः' इसका भाव क्या है?",
        "options_hi": ["गायें मेरी माताएँ हैं", "गायें धन हैं", "गायें पूज्य हैं", "गायें देवी हैं"],
        "answer_hi": "गायें मेरी माताएँ हैं",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 83,
        "question_hi": "वेद मंत्रों में 'अश्वः' क्या सूचित करता है?",
        "options_hi": ["शक्ति और गति", "धन", "यश", "बल"],
        "answer_hi": "शक्ति और गति",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 84,
        "question_hi": "'अश्वावतीरिति मा' इसका भाव क्या है?",
        "options_hi": ["अश्व के समान गति देने वाली", "अश्व के समान बलवान", "अश्व के समान सुन्दर", "अश्व के समान वीर"],
        "answer_hi": "अश्व के समान गति देने वाली",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 85,
        "question_hi": "वेद मंत्रों में 'हिरण्य' क्या सूचित करता है?",
        "options_hi": ["स्वर्ण और प्रकाश", "धन", "यश", "ऐश्वर्य"],
        "answer_hi": "स्वर्ण और प्रकाश",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 86,
        "question_hi": "'हिरण्यवर्णां हरिणीम्' इसका भाव क्या है?",
        "options_hi": ["स्वर्णवर्ण वाली", "रजतवर्ण वाली", "ताम्रवर्ण वाली", "नीलवर्ण वाली"],
        "answer_hi": "स्वर्णवर्ण वाली",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 87,
        "question_hi": "वेद मंत्रों में 'अन्नम्' क्या सूचित करता है?",
        "options_hi": ["जीवन और ऊर्जा", "धन", "सुख", "आरोग्य"],
        "answer_hi": "जीवन और ऊर्जा",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 88,
        "question_hi": "'अन्नपतेऽन्नस्य नो देहि' इसका भाव क्या है?",
        "options_hi": ["अन्न के स्वामी, हमें अन्न दो", "धन के स्वामी, धन दो", "विद्या के स्वामी, विद्या दो", "बल के स्वामी, बल दो"],
        "answer_hi": "अन्न के स्वामी, हमें अन्न दो",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 89,
        "question_hi": "वेद मंत्रों में 'वज्रः' क्या सूचित करता है?",
        "options_hi": ["इन्द्र का अस्त्र", "अग्नि का अस्त्र", "वायु का अस्त्र", "वरुण का अस्त्र"],
        "answer_hi": "इन्द्र का अस्त्र",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 90,
        "question_hi": "'वज्रेण शतपर्वणा' इसका भाव क्या है?",
        "options_hi": ["सौ पर्वों वाले वज्र से", "हजार धाराओं वाले वज्र से", "अग्निमय वज्र से", "जलमय वज्र से"],
        "answer_hi": "सौ पर्वों वाले वज्र से",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 91,
        "question_hi": "वेद मंत्रों में 'सोमपीथ' क्या है?",
        "options_hi": ["सोमरस पीने की क्रिया", "जल पीना", "अमृत पीना", "दुग्ध पीना"],
        "answer_hi": "सोमरस पीने की क्रिया",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 92,
        "question_hi": "'सोमं मन्द्रं जुषस्व' इसका भाव क्या है?",
        "options_hi": ["मधुर सोम को ग्रहण करो", "तीक्ष्ण सोम को ग्रहण करो", "शीतल सोम को ग्रहण करो", "उष्ण सोम को ग्रहण करो"],
        "answer_hi": "मधुर सोम को ग्रहण करो",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 93,
        "question_hi": "वेद मंत्रों में 'घृत' क्या सूचित करता है?",
        "options_hi": ["शुद्धता और तेज", "धन", "आरोग्य", "स्नेह"],
        "answer_hi": "शुद्धता और तेज",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 94,
        "question_hi": "'घृतस्य धारा' इसका भाव क्या है?",
        "options_hi": ["घृत की धारा", "जल की धारा", "अग्नि की धारा", "वायु की धारा"],
        "answer_hi": "घृत की धारा",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 95,
        "question_hi": "वेद मंत्रों में 'मधु' क्या सूचित करता है?",
        "options_hi": ["मधुरता और आनन्द", "शक्ति", "ज्ञान", "सौन्दर्य"],
        "answer_hi": "मधुरता और आनन्द",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 96,
        "question_hi": "'मधु वाता ऋतायते' इसका भाव क्या है?",
        "options_hi": ["मधुर वायु बहती है", "मधुर जल बहता है", "मधुर अग्नि जलती है", "मधुर आकाश छाया है"],
        "answer_hi": "मधुर वायु बहती है",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 97,
        "question_hi": "वेद मंत्रों में 'स्वस्ति' क्या सूचित करता है?",
        "options_hi": ["कल्याण और मंगल", "यश", "विजय", "धन"],
        "answer_hi": "कल्याण और मंगल",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 98,
        "question_hi": "'स्वस्ति न इन्द्रो' इसका भाव क्या है?",
        "options_hi": ["इन्द्र हमारा कल्याण करें", "अग्नि हमारा कल्याण करें", "वरुण हमारा कल्याण करें", "सूर्य हमारा कल्याण करें"],
        "answer_hi": "इन्द्र हमारा कल्याण करें",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 99,
        "question_hi": "वेद मंत्रों में 'आयुः' क्या सूचित करता है?",
        "options_hi": ["जीवन और आयु", "धन", "बल", "यश"],
        "answer_hi": "जीवन और आयु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "'आयुष्मान् भव' इसका भाव क्या है?",
        "options_hi": ["दीर्घायु हो", "धनवान हो", "बलवान हो", "विद्यावान हो"],
        "answer_hi": "दीर्घायु हो",
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