const questions = [
    {
        "num": 1,
        "question_hi": "वेद मंत्रों का प्रमुख उद्देश्य क्या होता है?",
        "options_hi": ["प्रार्थना", "युद्ध संदेश", "व्यापार", "मनोरंजन"],
        "answer_hi": "प्रार्थना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "वेद कितने प्रकार के हैं?",
        "options_hi": ["चार", "दो", "तीन", "पांच"],
        "answer_hi": "चार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "प्रसिद्ध गायत्री मंत्र किस वेद से लिया गया है?",
        "options_hi": ["ऋग्वेद से", "यजुर्वेद से", "सामवेद से", "अथर्ववेद से"],
        "answer_hi": "ऋग्वेद से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "गायत्री मंत्र के ऋषि कौन हैं?",
        "options_hi": ["विश्वामित्र", "वशिष्ठ", "भरद्वाज", "गौतम"],
        "answer_hi": "विश्वामित्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "गायत्री मंत्र की देवता कौन है?",
        "options_hi": ["सविता", "अग्नि", "वरुण", "इंद्र"],
        "answer_hi": "सविता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "गायत्री मंत्र में कितने अक्षर होते हैं?",
        "options_hi": ["चौबीस", "चौंसठ", "आठ", "बारह"],
        "answer_hi": "चौबीस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "गायत्री मंत्र का प्रथम पद क्या है?",
        "options_hi": ["तत्सवितुर्वरेण्यं", "भर्गो देवस्य धीमहि", "धियो यो नः प्रचोदयात्", "ॐ भूर्भुवः स्वः"],
        "answer_hi": "ॐ भूर्भुवः स्वः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "गायत्री मंत्र का छंद क्या है?",
        "options_hi": ["गायत्री", "अनुष्टुप", "त्रिष्टुप", "जगती"],
        "answer_hi": "गायत्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "'तत्सवितुर्वरेण्यं' इसका अर्थ क्या है?",
        "options_hi": ["उस सूर्य का वरण करने योग्य", "वह सुंदर है", "वह महत्वपूर्ण है", "वह दिव्य है"],
        "answer_hi": "उस सूर्य का वरण करने योग्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "'भर्गो देवस्य धीमहि' में 'भर्गः' का क्या अर्थ है?",
        "options_hi": ["तेज", "धन", "यश", "बल"],
        "answer_hi": "तेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "'धियो यो नः प्रचोदयात्' इसका भाव क्या है?",
        "options_hi": ["जो हमारी बुद्धि को प्रेरित करे", "जो धन दे", "जो रक्षा करे", "जो पालन करे"],
        "answer_hi": "जो हमारी बुद्धि को प्रेरित करे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "शांति मंत्र 'ॐ द्यौः शान्तिः' किस वेद में प्राप्त होता है?",
        "options_hi": ["यजुर्वेद में", "ऋग्वेद में", "सामवेद में", "अथर्ववेद में"],
        "answer_hi": "यजुर्वेद में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "पुरुष सूक्त कहाँ प्राप्त होता है?",
        "options_hi": ["ऋग्वेद में", "यजुर्वेद में", "सामवेद में", "अथर्ववेद में"],
        "answer_hi": "ऋग्वेद में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "पुरुष सूक्त का प्रथम मंत्र क्या है?",
        "options_hi": ["सहस्रशीर्षा पुरुषः", "पादोऽस्य विश्वा भूतानि", "यत्पुरुषेण हविषा", "ब्रह्मणोऽस्य मुखमासीत्"],
        "answer_hi": "सहस्रशीर्षा पुरुषः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "'सहस्रशीर्षा पुरुषः' इसका अर्थ क्या है?",
        "options_hi": ["सहस्र शीर्ष वाला पुरुष", "बहुत सिर वाला पुरुष", "अनेक सिर वाला पुरुष", "सबका सिर पुरुष"],
        "answer_hi": "सहस्र शीर्ष वाला पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "मृत्युंजय मंत्र किस देवता को समर्पित है?",
        "options_hi": ["शिव को", "विष्णु को", "ब्रह्मा को", "सूर्य को"],
        "answer_hi": "शिव को",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "मृत्युंजय मंत्र की शुरुआत किससे होती है?",
        "options_hi": ["ॐ त्र्यम्बकं यजामहे", "ॐ नमः शिवाय", "ॐ रुद्राय नमः", "ॐ हौं जूं सः"],
        "answer_hi": "ॐ त्र्यम्बकं यजामहे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "रुद्राष्टाध्यायी किस वेद में है?",
        "options_hi": ["यजुर्वेद में", "ऋग्वेद में", "सामवेद में", "अथर्ववेद में"],
        "answer_hi": "यजुर्वेद में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "'ॐ पूर्णमदः पूर्णमिदम्' यह मंत्र कहाँ प्राप्त होता है?",
        "options_hi": ["ईशावास्योपनिषद में", "गायत्री मंत्र में", "पुरुष सूक्त में", "शांति पाठ में"],
        "answer_hi": "ईशावास्योपनिषद में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "'असतो मा सद्गमय' इस मंत्र का स्रोत क्या है?",
        "options_hi": ["बृहदारण्यक उपनिषद", "छान्दोग्य उपनिषद", "कठोपनिषद", "माण्डूक्य उपनिषद"],
        "answer_hi": "बृहदारण्यक उपनिषद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "'तमसो मा ज्योतिर्गमय' इसका भावार्थ क्या है?",
        "options_hi": ["अंधकार से प्रकाश की ओर", "अज्ञान से ज्ञान की ओर", "मृत्यु से अमृत की ओर", "दुःख से सुख की ओर"],
        "answer_hi": "अंधकार से प्रकाश की ओर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "'सत्यमेव जयते' यह उक्ति कहाँ प्राप्त होती है?",
        "options_hi": ["मुण्डक उपनिषद में", "ऋग्वेद में", "यजुर्वेद में", "अथर्ववेद में"],
        "answer_hi": "मुण्डक उपनिषद में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "वेद मंत्रों में 'स्वाहा' शब्द किसलिए प्रयुक्त होता है?",
        "options_hi": ["हवि दान के लिए", "प्रणाम के लिए", "आशीर्वाद के लिए", "स्तुति के लिए"],
        "answer_hi": "हवि दान के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "वेद मंत्रों में 'स्वधा' शब्द किसके लिए प्रयुक्त होता है?",
        "options_hi": ["पितरों के लिए", "देवताओं के लिए", "मनुष्यों के लिए", "प्राणियों के लिए"],
        "answer_hi": "पितरों के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "'ॐ सह नाववतु' इस मंत्र की समाप्ति कैसे होती है?",
        "options_hi": ["ॐ शान्तिः शान्तिः शान्तिः", "ॐ तत्सत्", "ॐ नमः", "ॐ पूर्णमदः"],
        "answer_hi": "ॐ शान्तिः शान्तिः शान्तिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "वेद मंत्रों में 'ॐ' प्रणव का क्या महत्व है?",
        "options_hi": ["सभी मंत्रों के आरंभ में", "मध्य में", "अंत में", "कभी-कभी"],
        "answer_hi": "सभी मंत्रों के आरंभ में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "वेद मंत्रों की भाषा क्या है?",
        "options_hi": ["वैदिक संस्कृत", "लौकिक संस्कृत", "प्राकृत", "पालि भाषा"],
        "answer_hi": "वैदिक संस्कृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "ऋग्वेद का प्रथम मंत्र क्या है?",
        "options_hi": ["अग्निमीळे पुरोहितं", "इन्द्रं मित्रं वरुणमग्निमाहुः", "स नो देवः शिवः करत्", "सूर्य आत्मा जगतः"],
        "answer_hi": "अग्निमीळे पुरोहितं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "सामवेद का मुख्य विषय क्या है?",
        "options_hi": ["साम गान", "यज्ञ कर्म", "आयुर्वेद", "राजनीति"],
        "answer_hi": "साम गान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "अथर्ववेद में किस विषय का प्राधान्य है?",
        "options_hi": ["आयुर्वेद और जादू-टोना", "यज्ञ", "दर्शन", "इतिहास"],
        "answer_hi": "आयुर्वेद और जादू-टोना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "वेद मंत्रों के संरक्षक कौन थे?",
        "options_hi": ["ऋषि", "राजा", "वणिक", "कृषक"],
        "answer_hi": "ऋषि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "वेद मंत्रों के शुद्ध पाठ को क्या कहते हैं?",
        "options_hi": ["श्रुति पाठ", "स्मृति पाठ", "पुराण पाठ", "इतिहास पाठ"],
        "answer_hi": "श्रुति पाठ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "संहिता पाठ क्या होता है?",
        "options_hi": ["मूल मंत्र पाठ", "अर्थ पाठ", "टीका पाठ", "व्याख्या पाठ"],
        "answer_hi": "मूल मंत्र पाठ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "पद पाठ कैसे होता है?",
        "options_hi": ["पद च्छेद सहित पाठ", "अर्थ सहित पाठ", "स्वर सहित पाठ", "व्याख्या सहित पाठ"],
        "answer_hi": "पद च्छेद सहित पाठ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "जटा पाठ कैसे होता है?",
        "options_hi": ["मंत्रों का गुंफित रूप", "सरल रूप", "व्याख्या सहित", "अर्थ सहित"],
        "answer_hi": "मंत्रों का गुंफित रूप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "घन पाठ क्या होता है?",
        "options_hi": ["सर्वाधिक कठिन पाठ", "सरल पाठ", "व्याख्या सहित", "अर्थ सहित"],
        "answer_hi": "सर्वाधिक कठिन पाठ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "वेद मंत्रों के टीकाकार कौन प्रसिद्ध हैं?",
        "options_hi": ["सायणाचार्य", "शंकराचार्य", "रामानुजाचार्य", "मध्वाचार्य"],
        "answer_hi": "सायणाचार्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "'ॐ शान्तिः शान्तिः शान्तिः' यह क्यों बोला जाता है?",
        "options_hi": ["सर्वत्र शांति के लिए", "धन लाभ के लिए", "विद्या प्राप्ति के लिए", "आरोग्य के लिए"],
        "answer_hi": "सर्वत्र शांति के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "'ॐ आप्यायन्तु ममाङ्गानि' इस मंत्र का उद्देश्य क्या है?",
        "options_hi": ["शरीर पुष्टि के लिए", "धन लाभ के लिए", "विद्या प्राप्ति के लिए", "यश प्राप्ति के लिए"],
        "answer_hi": "शरीर पुष्टि के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "श्री सूक्त किस वेद में प्राप्त होता है?",
        "options_hi": ["ऋग्वेद में", "यजुर्वेद में", "सामवेद में", "अथर्ववेद में"],
        "answer_hi": "ऋग्वेद में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "देवी सूक्त कहाँ है?",
        "options_hi": ["अथर्ववेद में", "ऋग्वेद में", "यजुर्वेद में", "सामवेद में"],
        "answer_hi": "अथर्ववेद में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "भूमि सूक्त किस वेद में है?",
        "options_hi": ["अथर्ववेद में", "ऋग्वेद में", "यजुर्वेद में", "सामवेद में"],
        "answer_hi": "अथर्ववेद में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "नासदीय सूक्त कहाँ प्राप्त होता है?",
        "options_hi": ["ऋग्वेद में", "यजुर्वेद में", "सामवेद में", "अथर्ववेद में"],
        "answer_hi": "ऋग्वेद में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "हिरण्यगर्भ सूक्त किस वेद में है?",
        "options_hi": ["ऋग्वेद में", "यजुर्वेद में", "सामवेद में", "अथर्ववेद में"],
        "answer_hi": "ऋग्वेद में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "'वसुधैव कुटुम्बकम्' यह भाव कहाँ दिखाई देता है?",
        "options_hi": ["वेद मंत्रों में", "पुराणों में", "इतिहासों में", "काव्यों में"],
        "answer_hi": "वेद मंत्रों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "वेद मंत्रों में 'ऋतम्' शब्द का क्या अर्थ है?",
        "options_hi": ["सत्य", "धन", "यश", "बल"],
        "answer_hi": "सत्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "वेद मंत्रों में 'व्रतम्' शब्द का क्या अर्थ है?",
        "options_hi": ["नियम", "दान", "यज्ञ", "पूजा"],
        "answer_hi": "नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "'सम् गच्छध्वं सं वदध्वं' इस मंत्र का भाव क्या है?",
        "options_hi": ["एकता का आह्वान", "धन संग्रह", "युद्ध की तैयारी", "विद्या अध्ययन"],
        "answer_hi": "एकता का आह्वान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "'अग्ने नय सुपथा राये' इस मंत्र का उद्देश्य क्या है?",
        "options_hi": ["शुभ मार्ग से धन की ओर", "युद्ध की ओर", "विद्या की ओर", "स्वर्ग की ओर"],
        "answer_hi": "शुभ मार्ग से धन की ओर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "वेद मंत्रों में 'यज्ञः' शब्द का क्या अर्थ है?",
        "options_hi": ["देवों के लिए कर्म", "दान", "पूजा", "सेवा"],
        "answer_hi": "देवों के लिए कर्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "वेद मंत्रों में 'होता' शब्द का क्या अर्थ है?",
        "options_hi": ["यज्ञ करने वाला", "योद्धा", "ऋषि", "शिष्य"],
        "answer_hi": "यज्ञ करने वाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "वेद मंत्रों में 'ऋत्विक्' शब्द का क्या अर्थ है?",
        "options_hi": ["यज्ञ कर्म करने वाला", "विद्वान", "राजा", "सेनापति"],
        "answer_hi": "यज्ञ कर्म करने वाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "'इन्द्रं मित्रं वरुणमग्निमाहुः' इस मंत्र का भाव क्या है?",
        "options_hi": ["एक देवता अनेक रूपों में", "अनेक देवता हैं", "देवताओं की महिमा", "देवताओं की पूजा"],
        "answer_hi": "एक देवता अनेक रूपों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "वेद मंत्रों में 'सोमः' शब्द का क्या अर्थ है?",
        "options_hi": ["पवित्र पेय", "चंद्रमा", "सूर्य", "तारा"],
        "answer_hi": "पवित्र पेय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "'ॐ वाङ् मे मनसि' इस मंत्र का उद्देश्य क्या है?",
        "options_hi": ["वाणी मन में स्थिर हो", "धन प्राप्त हो", "बल बढ़े", "आयु बढ़े"],
        "answer_hi": "वाणी मन में स्थिर हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "वेद मंत्रों में 'ऋषिः' शब्द का क्या अर्थ है?",
        "options_hi": ["मंत्र द्रष्टा", "योद्धा", "वणिक", "कृषक"],
        "answer_hi": "मंत्र द्रष्टा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "वेद मंत्रों में 'देवः' शब्द का मूल क्या है?",
        "options_hi": ["दिव् धातु", "दा धातु", "दृश् धातु", "द्युत् धातु"],
        "answer_hi": "दिव् धातु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "वेद मंत्रों में 'कविः' शब्द का क्या अर्थ है?",
        "options_hi": ["द्रष्टा", "योद्धा", "वणिक", "कृषक"],
        "answer_hi": "द्रष्टा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "'यत्र विश्वं भवति एकनीडम्' इस मंत्र का भाव क्या है?",
        "options_hi": ["सारा विश्व एक परिवार", "सारा धन एक जगह", "सारा यश एक जगह", "सारा बल एक जगह"],
        "answer_hi": "सारा विश्व एक परिवार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "वेद मंत्रों में 'ऋणम्' शब्द का क्या अर्थ है?",
        "options_hi": ["दायित्व", "धन", "यश", "बल"],
        "answer_hi": "दायित्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "त्रि-ऋण कितने होते हैं?",
        "options_hi": ["तीन", "चार", "पांच", "छह"],
        "answer_hi": "तीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "देव ऋण कैसे शुध्द होता है?",
        "options_hi": ["यज्ञ से", "धन से", "यश से", "बल से"],
        "answer_hi": "यज्ञ से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "ऋषि ऋण कैसे शुध्द होता है?",
        "options_hi": ["अध्ययन-अध्यापन से", "धन से", "यश से", "बल से"],
        "answer_hi": "अध्ययन-अध्यापन से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "पितृ ऋण कैसे शुध्द होता है?",
        "options_hi": ["संतान उत्पादन से", "धन से", "यश से", "बल से"],
        "answer_hi": "संतान उत्पादन से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "'अयं निजः परो वेति' यह भाव कहाँ दिखाई देता है?",
        "options_hi": ["वेद मंत्रों में", "पुराणों में", "इतिहासों में", "काव्यों में"],
        "answer_hi": "वेद मंत्रों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "'सत्यमेव जयते नानृतम्' इसका स्रोत क्या है?",
        "options_hi": ["मुण्डक उपनिषद", "ऋग्वेद", "यजुर्वेद", "अथर्ववेद"],
        "answer_hi": "मुण्डक उपनिषद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "'ईशावास्यम्' इस शब्द का क्या अर्थ है?",
        "options_hi": ["ईश्वर से आवृत", "मनुष्यों द्वारा निर्मित", "प्रकृति द्वारा दिया गया", "यज्ञ से प्राप्त"],
        "answer_hi": "ईश्वर से आवृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "वेद मंत्रों में 'योगः' शब्द का क्या अर्थ है?",
        "options_hi": ["युजिर् योजने", "धन संग्रह", "युद्ध", "पूजा"],
        "answer_hi": "युजिर् योजने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "वेद मंत्रों में 'क्षेमः' शब्द का क्या अर्थ है?",
        "options_hi": ["कल्याण", "धन", "यश", "बल"],
        "answer_hi": "कल्याण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "'अहं राष्ट्री संगमनी वसूनाम्' इस मंत्र का भाव क्या है?",
        "options_hi": ["मैं राष्ट्र को एक करती हूँ", "मैं धन देती हूँ", "मैं यश देती हूँ", "मैं बल देती हूँ"],
        "answer_hi": "मैं राष्ट्र को एक करती हूँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "वेद मंत्रों के अध्ययन से क्या प्राप्त होता है?",
        "options_hi": ["आध्यात्मिक ज्ञान", "धन", "यश", "बल"],
        "answer_hi": "आध्यात्मिक ज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "'ॐ आ नो भद्राः क्रतवो यन्तु विश्वतः' इस मंत्र का भाव क्या है?",
        "options_hi": ["सब ओर से शुभ कर्म आएं", "धन आए", "यश आए", "बल आए"],
        "answer_hi": "सब ओर से शुभ कर्म आएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "वेद मंत्रों में 'मधु' शब्द का क्या अर्थ है?",
        "options_hi": ["शहद", "दूध", "घी", "जल"],
        "answer_hi": "शहद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "वेद मंत्रों में 'घृतम्' शब्द का क्या अर्थ है?",
        "options_hi": ["घी", "जल", "दही", "शहद"],
        "answer_hi": "घी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "'मा गाम अनागामिनीं कृधि' इस मंत्र का भाव क्या है?",
        "options_hi": ["मार्ग को न रोके", "धन दे", "रक्षा करे", "ज्ञान दे"],
        "answer_hi": "मार्ग को न रोके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "वेद मंत्रों में 'अन्नम्' शब्द का क्या अर्थ है?",
        "options_hi": ["भोजन", "धन", "जल", "वस्त्र"],
        "answer_hi": "भोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "वेद मंत्रों में 'विद्या' शब्द का क्या अर्थ है?",
        "options_hi": ["ज्ञान", "धन", "बल", "यश"],
        "answer_hi": "ज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "वेद मंत्रों में 'बलम्' शब्द का क्या अर्थ है?",
        "options_hi": ["शक्ति", "धन", "यश", "सुख"],
        "answer_hi": "शक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "'ॐ स्वस्ति न इन्द्रो' इस मंत्र का भाव क्या है?",
        "options_hi": ["इंद्र हमारा कल्याण करे", "धन दे", "रक्षा करे", "ज्ञान दे"],
        "answer_hi": "इंद्र हमारा कल्याण करे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "वेद मंत्रों में 'स्वस्ति' शब्द का क्या अर्थ है?",
        "options_hi": ["कल्याण", "धन", "यश", "बल"],
        "answer_hi": "कल्याण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "वेद मंत्रों में 'धर्मः' शब्द का क्या अर्थ है?",
        "options_hi": ["धारण करने योग्य नियम", "दान", "यज्ञ", "पूजा"],
        "answer_hi": "धारण करने योग्य नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "वेद मंत्रों में 'ऋतम्' और 'सत्यम्' क्या सूचित करते हैं?",
        "options_hi": ["नैतिक मूल्य", "धन", "यश", "बल"],
        "answer_hi": "नैतिक मूल्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "वेद मंत्रों में 'मनुः' शब्द का क्या अर्थ है?",
        "options_hi": ["मनन करने वाला", "योद्धा", "ऋषि", "राजा"],
        "answer_hi": "मनन करने वाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "वेद मंत्रों में 'दिव्' शब्द का क्या अर्थ है?",
        "options_hi": ["आकाश या प्रकाश", "पृथ्वी", "जल", "अग्नि"],
        "answer_hi": "आकाश या प्रकाश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "वेद मंत्रों में 'पृथिवी' शब्द का क्या अर्थ है?",
        "options_hi": ["भूमि", "आकाश", "जल", "वायु"],
        "answer_hi": "भूमि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "वेद मंत्रों में 'अपः' शब्द का क्या अर्थ है?",
        "options_hi": ["जल", "अग्नि", "वायु", "भूमि"],
        "answer_hi": "जल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "वेद मंत्रों में 'मरुतः' शब्द का क्या अर्थ है?",
        "options_hi": ["वायु", "जल", "अग्नि", "भूमि"],
        "answer_hi": "वायु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "'इदं न मम' यह भाव किस मंत्र में दिखाई देता है?",
        "options_hi": ["त्याग मंत्र में", "धन मंत्र में", "बल मंत्र में", "आरोग्य मंत्र में"],
        "answer_hi": "त्याग मंत्र में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "वेद मंत्रों में 'अग्निः' शब्द का क्या अर्थ है?",
        "options_hi": ["अग्नि", "सूर्य", "चंद्रमा", "वायु"],
        "answer_hi": "अग्नि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "'उषा' देवी कौन है?",
        "options_hi": ["प्रभात देवी", "रात्रि देवी", "धन देवी", "विद्या देवी"],
        "answer_hi": "प्रभात देवी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "वेदों में किस देवता की सबसे अधिक स्तुति है?",
        "options_hi": ["इंद्र की", "अग्नि की", "वरुण की", "सूर्य की"],
        "answer_hi": "इंद्र की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "वेद मंत्रों में 'वाक्' शब्द का क्या अर्थ है?",
        "options_hi": ["वाणी", "मन", "नेत्र", "कान"],
        "answer_hi": "वाणी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "'सूर्य आत्मा जगतः' इस मंत्र का भाव क्या है?",
        "options_hi": ["सूर्य जगत का आत्मा है", "सूर्य प्रकाशक है", "सूर्य ऊष्ण है", "सूर्य देवता है"],
        "answer_hi": "सूर्य जगत का आत्मा है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "वेद मंत्रों में 'ऋतुः' शब्द का क्या अर्थ है?",
        "options_hi": ["काल विभाग", "धन", "यज्ञ", "पूजा"],
        "answer_hi": "काल विभाग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "'येनाक्षरसमाम्नायम्' इस मंत्र का विषय क्या है?",
        "options_hi": ["वेद रक्षा", "धन रक्षा", "देह रक्षा", "राज्य रक्षा"],
        "answer_hi": "वेद रक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "वेद मंत्रों में 'छन्दः' शब्द का क्या अर्थ है?",
        "options_hi": ["वैदिक पद्य रचना", "मंत्र", "स्तोत्र", "प्रार्थना"],
        "answer_hi": "वैदिक पद्य रचना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "'अग्निः पूर्वेभिर्ऋषिभिः' इस मंत्र का भाव क्या है?",
        "options_hi": ["अग्नि पूर्व ऋषियों द्वारा स्तुत है", "अग्नि प्राचीन है", "अग्नि पूर्व दिशा में है", "अग्नि की महिमा"],
        "answer_hi": "अग्नि पूर्व ऋषियों द्वारा स्तुत है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "वेद मंत्रों में 'सविता' शब्द का क्या अर्थ है?",
        "options_hi": ["प्रेरक सूर्य", "चंद्रमा", "अग्नि", "वायु"],
        "answer_hi": "प्रेरक सूर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "'तमसो मा ज्योतिर्गमय' इस मंत्र के ऋषि कौन हैं?",
        "options_hi": ["वामदेव", "विश्वामित्र", "वशिष्ठ", "भरद्वाज"],
        "answer_hi": "वामदेव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "वेद मंत्रों के पाठक कौन कहलाते हैं?",
        "options_hi": ["ब्राह्मण", "क्षत्रिय", "वैश्य", "शूद्र"],
        "answer_hi": "ब्राह्मण",
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