const questions = [
    {
        "num": 1,
        "question_hi": "पिंगलक दमनक को फिर कहाँ नियुक्त करता है?",
        "options_hi": ["मंत्री पद पर", "सेनापति पद पर", "द्वारपाल पद पर", "अन्नाध्यक्ष पद पर"],
        "answer_hi": "मंत्री पद पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "करटक दमनक की सफलता देखकर क्या सोचता है?",
        "options_hi": ["कपट की विजय", "सत्य की विजय", "धर्म की विजय", "दया की विजय"],
        "answer_hi": "कपट की विजय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "मित्रलाभ से क्या शिक्षा प्राप्त होती है?",
        "options_hi": ["मित्रों की परीक्षा आवश्यक है", "सभी मित्रभूत हैं", "मित्र नहीं करने चाहिए", "मित्र धन से आते हैं"],
        "answer_hi": "मित्रों की परीक्षा आवश्यक है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "मित्रलाभ में प्रधान कथा कौन सी है?",
        "options_hi": ["सिंह और वृषभ की मैत्री", "कौवे और उल्लू की कथा", "चूहे और हंस की कथा", "गीदड़ और हिरण की कथा"],
        "answer_hi": "सिंह और वृषभ की मैत्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "सिंह का नाम क्या था?",
        "options_hi": ["पिंगलक", "संजीवक", "दमनक", "करटक"],
        "answer_hi": "पिंगलक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "वृषभ का नाम क्या था?",
        "options_hi": ["संजीवक", "पिंगलक", "दमनक", "करटक"],
        "answer_hi": "संजीवक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "दो गीदड़ों के नाम क्या थे?",
        "options_hi": ["दमनक और करटक", "पिंगलक और संजीवक", "मेघवर्ण और चित्रग्रीव", "अरिमर्दन और सुमर्दन"],
        "answer_hi": "दमनक और करटक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "विष्णु शर्मा किस राजा के आस्तिक थे?",
        "options_hi": ["अमरशक्ति", "भोज", "विक्रमादित्य", "चंद्रगुप्त"],
        "answer_hi": "अमरशक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "पंचतंत्र कितने हैं?",
        "options_hi": ["पाँच", "चार", "छह", "सात"],
        "answer_hi": "पाँच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "मित्रलाभ कौन सा तंत्र है?",
        "options_hi": ["प्रथम तंत्र", "द्वितीय तंत्र", "तृतीय तंत्र", "चतुर्थ तंत्र"],
        "answer_hi": "प्रथम तंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "पिंगलक कहाँ राज्य करता था?",
        "options_hi": ["चंपकवन", "नंदनवन", "दंडकारण्य", "हिमवत्"],
        "answer_hi": "चंपकवन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "संजीवक कहाँ से आया?",
        "options_hi": ["मथुरा नगर से", "वाराणसी से", "कश्मीर देश से", "मगध देश से"],
        "answer_hi": "मथुरा नगर से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "संजीवक का स्वामी कौन था?",
        "options_hi": ["वणिकपुत्र", "ब्राह्मण", "क्षत्रिय", "राजा"],
        "answer_hi": "वणिकपुत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "संजीवक वन में कैसे गिरा?",
        "options_hi": ["गाड़ी टूटने से", "युद्ध से", "रोग से", "शिकार के समय"],
        "answer_hi": "गाड़ी टूटने से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "दमनक पहले क्या कार्य करता था?",
        "options_hi": ["प्रधानमंत्री का", "सेनापति का", "कोशाध्यक्ष का", "द्वारपाल का"],
        "answer_hi": "प्रधानमंत्री का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "पिंगलक दमनक को क्यों दूर करता है?",
        "options_hi": ["संदेह से", "क्रोध से", "लोभ से", "भय से"],
        "answer_hi": "संदेह से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "दमनक संजीवक को देखकर क्या निश्चय करता है?",
        "options_hi": ["इसकी सहायता से फिर पद प्राप्त करूंगा", "यह मेरा भक्ष्य है", "यह शत्रु है", "यह मूर्ख है"],
        "answer_hi": "इसकी सहायता से फिर पद प्राप्त करूंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "दमनक संजीवक को कहाँ ले जाता है?",
        "options_hi": ["पिंगलक के पास", "वनांतर में", "नदी तट पर", "पहाड़ की गुफा में"],
        "answer_hi": "पिंगलक के पास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "पिंगलक संजीवक को देखकर पहले क्या चाहता है?",
        "options_hi": ["उसे खाने का", "उसे बचाने का", "उसे दूर करने का", "उसे दंड देने का"],
        "answer_hi": "उसे खाने का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "दमनक पिंगलक को किससे रोकता है?",
        "options_hi": ["संजीवक को खाने से", "संजीवक की सेवा से", "संजीवक को दंड देने से", "संजीवक को त्यागने से"],
        "answer_hi": "संजीवक को खाने से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "दमनक के मंत्र से पिंगलक क्या करता है?",
        "options_hi": ["संजीवक को मित्र बनाता है", "संजीवक को भृत्य बनाता है", "संजीवक को सेवक बनाता है", "संजीवक को शत्रु बनाता है"],
        "answer_hi": "संजीवक को मित्र बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "संजीवक पिंगलक को क्या देता है?",
        "options_hi": ["शरण", "धन", "भोजन", "वस्त्र"],
        "answer_hi": "शरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "पिंगलक संजीवक को किसलिए बचाता है?",
        "options_hi": ["बल वृद्धि के लिए", "धन लाभ के लिए", "प्रजा प्रसन्नता के लिए", "यश लाभ के लिए"],
        "answer_hi": "बल वृद्धि के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "संजीवक क्या बनकर बढ़ता है?",
        "options_hi": ["प्रधानमंत्री", "सेनापति", "कोशाध्यक्ष", "मंत्रीपुत्र"],
        "answer_hi": "प्रधानमंत्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "दमनक संजीवक में क्या दोष देखकर क्रुद्ध होता है?",
        "options_hi": ["अहंकार", "लोभ", "क्रोध", "मोह"],
        "answer_hi": "अहंकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "दमनक करटक को क्या कहता है?",
        "options_hi": ["संजीवक हमारा अपमान करता है", "संजीवक साधु है", "संजीवक दानी है", "संजीवक विद्वान है"],
        "answer_hi": "संजीवक हमारा अपमान करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "दमनक पिंगलक से संजीवक के बारे में क्या कहता है?",
        "options_hi": ["वह आपका राज्य छीनना चाहता है", "वह आपका सेवक है", "वह आपका मित्र है", "वह आपका भक्त है"],
        "answer_hi": "वह आपका राज्य छीनना चाहता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "पिंगलक संजीवक को कैसे मारता है?",
        "options_hi": ["छल से", "प्रत्यक्ष युद्ध से", "विष से", "शस्त्र से"],
        "answer_hi": "छल से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "मित्रलाभ का प्रमुख संदेश क्या है?",
        "options_hi": ["मित्र विवेक से करने चाहिए", "मित्र नहीं करने चाहिए", "सभी मित्र श्रेष्ठ हैं", "मित्रों के साथ सदा रहना चाहिए"],
        "answer_hi": "मित्र विवेक से करने चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "काकोलूकीय में कौवे राजा का नाम क्या है?",
        "options_hi": ["मेघवर्ण", "पिंगलक", "दमनक", "संजीवक"],
        "answer_hi": "मेघवर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "काकोलूकीय में उल्लू राजा का नाम क्या है?",
        "options_hi": ["अरिमर्दन", "मेघवर्ण", "पिंगलक", "दमनक"],
        "answer_hi": "अरिमर्दन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "उल्लुओं का निवास स्थान क्या था?",
        "options_hi": ["पत्थर का घर", "वृक्ष की कोटर", "घोंसला", "गुफा"],
        "answer_hi": "पत्थर का घर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "मेघवर्ण क्या निश्चय करता है?",
        "options_hi": ["उल्लुओं के विनाश के लिए", "उल्लुओं से संधि करने के लिए", "उल्लुओं की सेवा के लिए", "उल्लुओं की शरण जाने के लिए"],
        "answer_hi": "उल्लुओं के विनाश के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "कौवों का मंत्री कौन था?",
        "options_hi": ["चित्रग्रीव", "मेघवर्ण", "सुहृद", "विकट"],
        "answer_hi": "चित्रग्रीव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "कौवे उल्लुओं को कैसे जीतते हैं?",
        "options_hi": ["जलती लकड़ियों से", "शस्त्रों से", "बल से", "संख्या से"],
        "answer_hi": "जलती लकड़ियों से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "कौवे क्या लेकर उल्लुओं के घर में प्रवेश करते हैं?",
        "options_hi": ["जलती हुई लकड़ी", "शस्त्र", "विष", "अन्न"],
        "answer_hi": "जलती हुई लकड़ी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "उल्लू कैसे नष्ट होते हैं?",
        "options_hi": ["अग्नि दाह से", "युद्ध से", "विष पीने से", "जल में डूबने से"],
        "answer_hi": "अग्नि दाह से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "मेघवर्ण कैसा राजा था?",
        "options_hi": ["चतुर बुद्धि", "मूर्ख", "भीरु", "क्रोधी"],
        "answer_hi": "चतुर बुद्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "अरिमर्दन कैसा था?",
        "options_hi": ["अविवेकी", "विवेकी", "दयालु", "वीर"],
        "answer_hi": "अविवेकी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "मित्रलाभ में क्या उपदेश दिया गया है?",
        "options_hi": ["सुहृद विचार", "धन संचय", "युद्ध कला", "राजनीति"],
        "answer_hi": "सुहृद विचार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "कुमित्र का फल क्या है?",
        "options_hi": ["विपत्ति", "सुख", "लाभ", "यश"],
        "answer_hi": "विपत्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "सुमित्र का फल क्या है?",
        "options_hi": ["समृद्धि", "दुःख", "हानि", "क्लेश"],
        "answer_hi": "समृद्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "विष्णु शर्मा ने किसके पुत्रों को शिक्षित किया?",
        "options_hi": ["अमरशक्ति के", "भोज के", "विक्रम के", "शालिवाहन के"],
        "answer_hi": "अमरशक्ति के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "अमरशक्ति के पुत्र कैसे थे?",
        "options_hi": ["निर्बुद्धि", "प्रतिभावान", "वीर", "धार्मिक"],
        "answer_hi": "निर्बुद्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "विष्णु शर्मा ने कितने महीनों में राजपुत्रों को पंडित बनाया?",
        "options_hi": ["छह महीनों में", "बारह महीनों में", "अठारह महीनों में", "चार महीनों में"],
        "answer_hi": "छह महीनों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "पंचतंत्रों के नाम क्या हैं?",
        "options_hi": ["मित्रलाभ, मित्रभेद, काकोलूकीय, लब्धप्रणाश, अपरीक्षितकारक", "राजतंत्र, अर्थतंत्र, कामतंत्र, मोक्षतंत्र, धर्मतंत्र", "विद्यातंत्र, धनतंत्र, यशस्तंत्र, सुखतंत्र, स्वर्गतंत्र", "सत्यतंत्र, अहिंसातंत्र, दयातंत्र, शांतितंत्र, प्रेमतंत्र"],
        "answer_hi": "मित्रलाभ, मित्रभेद, काकोलूकीय, लब्धप्रणाश, अपरीक्षितकारक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "मित्रलाभ में प्रसिद्ध श्लोक कौन सा है?",
        "options_hi": ["उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः", "अति सर्वत्र वर्जयेत्", "विद्या ददाति विनयं", "सत्यं ब्रूयात् प्रियं ब्रूयात्"],
        "answer_hi": "उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "दमनक का चरित्र कैसा है?",
        "options_hi": ["कूटचरित्र", "सरल चरित्र", "दयाचरित्र", "धर्मचरित्र"],
        "answer_hi": "कूटचरित्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "करटक का चरित्र कैसा है?",
        "options_hi": ["सतर्कचरित्र", "लोभीचरित्र", "क्रोधीचरित्र", "मोहीचरित्र"],
        "answer_hi": "सतर्कचरित्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "संजीवक का विनाश किसके कारण हुआ?",
        "options_hi": ["स्वाभिमान से", "दमनक के कारण", "पिंगलक के कारण", "करटक के कारण"],
        "answer_hi": "स्वाभिमान से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "पिंगलक कैसा राजा था?",
        "options_hi": ["वनराज", "नगरराज", "देशराज", "पर्वतराज"],
        "answer_hi": "वनराज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "विष्णु शर्मा का उद्देश्य क्या था?",
        "options_hi": ["नीति शिक्षण", "धर्मोपदेश", "कथा कथन", "ग्रंथ रचना"],
        "answer_hi": "नीति शिक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "पंचतंत्र किसके हित के लिए?",
        "options_hi": ["सबके", "बालकों के", "वृद्धों के", "राजाओं के"],
        "answer_hi": "सबके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "काकोलूकीय कौन सा तंत्र है?",
        "options_hi": ["तृतीय", "प्रथम", "द्वितीय", "चतुर्थ"],
        "answer_hi": "तृतीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "मित्रभेद कौन सा तंत्र है?",
        "options_hi": ["द्वितीय", "प्रथम", "तृतीय", "चतुर्थ"],
        "answer_hi": "द्वितीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "लब्धप्रणाश कौन सा तंत्र है?",
        "options_hi": ["चतुर्थ", "प्रथम", "द्वितीय", "तृतीय"],
        "answer_hi": "चतुर्थ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "अपरीक्षितकारक कौन सा तंत्र है?",
        "options_hi": ["पंचम", "प्रथम", "द्वितीय", "तृतीय"],
        "answer_hi": "पंचम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "मित्रलाभ क्या दर्शाता है?",
        "options_hi": ["मित्र प्राप्ति का विधान", "शत्रु नाश का उपाय", "धनार्जन का मार्ग", "यश प्राप्ति का साधन"],
        "answer_hi": "मित्र प्राप्ति का विधान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "संजीवक क्या बजाता था?",
        "options_hi": ["भेरी", "वीणा", "मृदंग", "बांसुरी"],
        "answer_hi": "भेरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "पिंगलक संजीवक की ध्वनि सुनकर क्या सोचता है?",
        "options_hi": ["दूसरा सिंह", "मृग", "मनुष्य", "देव"],
        "answer_hi": "दूसरा सिंह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "दमनक पिंगलक को कहाँ ले गया?",
        "options_hi": ["संजीवक के स्थान पर", "वनांतर में", "नगर में", "नदी तट पर"],
        "answer_hi": "संजीवक के स्थान पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "संजीवक पिंगलक को देखकर क्या करता है?",
        "options_hi": ["प्रणाम करता है", "दौड़ता है", "रोता है", "हंसता है"],
        "answer_hi": "प्रणाम करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "पिंगलक संजीवक का नमस्कार देखकर क्या सोचता है?",
        "options_hi": ["यह मित्र हो सकता है", "यह शत्रु है", "यह भक्ष्य है", "यह दास है"],
        "answer_hi": "यह मित्र हो सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "दमनक पिंगलक को क्या सूचित करता है?",
        "options_hi": ["संजीवक उपयुक्त है", "संजीवक हानिकर है", "संजीवक मूर्ख है", "संजीवक शत्रु है"],
        "answer_hi": "संजीवक उपयुक्त है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "संजीवक पिंगलक को कैसे प्रसन्न करता है?",
        "options_hi": ["स्तुति से", "दान से", "युद्ध से", "सेवा से"],
        "answer_hi": "स्तुति से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "पिंगलक संजीवक से क्या पूछता है?",
        "options_hi": ["तुम कौन हो", "तुम कहाँ से आए", "तुम क्यों आए", "तुम कब आए"],
        "answer_hi": "तुम कौन हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "संजीवक अपना वृत्तांत किसे सुनाता है?",
        "options_hi": ["पिंगलक को", "दमनक को", "करटक को", "अन्यों को"],
        "answer_hi": "पिंगलक को",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "पिंगलक संजीवक की कथा सुनकर क्या निश्चय करता है?",
        "options_hi": ["उसे बचाने का", "उसे खाने का", "उसे दूर करने का", "उसे दंड देने का"],
        "answer_hi": "उसे बचाने का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "दमनक पिंगलक को किसलिए प्रवंचित करता है?",
        "options_hi": ["अपने पदलाभ के लिए", "संजीवक के हित के लिए", "वन कल्याण के लिए", "राज्य विस्तार के लिए"],
        "answer_hi": "अपने पदलाभ के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "करटक दमनक से क्या कहता है?",
        "options_hi": ["कपट मत करो", "कपट शोभन है", "सब कुछ कपट से", "कपट पाप है"],
        "answer_hi": "कपट मत करो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "दमनक करटक को क्या उत्तर देता है?",
        "options_hi": ["मैं स्वार्थसाधक हूँ", "मैं परार्थसाधक हूँ", "मैं धर्मपालक हूँ", "मैं सत्यवादी हूँ"],
        "answer_hi": "मैं स्वार्थसाधक हूँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "संजीवक पिंगलक की कृपा से क्या पाता है?",
        "options_hi": ["सुरक्षित आवास", "धन", "यश", "बल"],
        "answer_hi": "सुरक्षित आवास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "वन्य प्राणी संजीवक को कैसे देखते हैं?",
        "options_hi": ["संशयपूर्वक", "प्रेमपूर्वक", "भयपूर्वक", "क्रोधपूर्वक"],
        "answer_hi": "संशयपूर्वक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "संजीवक कैसे पुष्ट होता है?",
        "options_hi": ["पिंगलक के भोजन से", "स्वयं घास से", "मृग की सहायता से", "दमनक की योजना से"],
        "answer_hi": "पिंगलक के भोजन से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "दमनक संजीवक को कब दूषित करता है?",
        "options_hi": ["जब वह शक्तिमान होता है", "जब वह दुर्बल होता है", "जब वह जाता है", "जब वह रोगी होता है"],
        "answer_hi": "जब वह शक्तिमान होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "पिंगलक संजीवक के वध का निश्चय कब करता है?",
        "options_hi": ["दमनक के वचन से", "स्वयं", "करटक के वचन से", "प्राणी समूह के वचन से"],
        "answer_hi": "दमनक के वचन से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "संजीवक पिंगलक को मारना क्या चाहता है?",
        "options_hi": ["कभी नहीं", "सदा", "कभी-कभी", "नहीं जानता"],
        "answer_hi": "कभी नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "पिंगलक संजीवक को कैसे मारता है?",
        "options_hi": ["आक्रमण से", "विष देने से", "शस्त्र प्रहार से", "जलमग्न करने से"],
        "answer_hi": "आक्रमण से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "संजीवक वध के बाद पिंगलक क्या अनुभव करता है?",
        "options_hi": ["पश्चाताप", "हर्ष", "शांति", "विजय का गर्व"],
        "answer_hi": "पश्चाताप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "दमनक पिंगलक का पश्चाताप देखकर क्या करता है?",
        "options_hi": ["समाधान देता है", "उपहास करता है", "निंदा करता है", "त्याग देता है"],
        "answer_hi": "समाधान देता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "मित्रलाभ तंत्र किस ग्रंथ में है?",
        "options_hi": ["पंचतंत्र में", "हितोपदेश में", "कथासरित्सागर में", "बृहत्कथा में"],
        "answer_hi": "पंचतंत्र में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "मित्रलाभ का रचयिता कौन है?",
        "options_hi": ["विष्णु शर्मा", "नारायण पंडित", "भर्तृहरि", "वाल्मीकि"],
        "answer_hi": "विष्णु शर्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "पंचतंत्र किसके उपदेश के लिए रचा गया?",
        "options_hi": ["राजपुत्रों के लिए", "विद्यार्थियों के लिए", "वणिकों के लिए", "किसानों के लिए"],
        "answer_hi": "राजपुत्रों के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "दमनक कैसा मित्र है?",
        "options_hi": ["कपटी मित्र", "सच्चा मित्र", "सहायक मित्र", "धार्मिक मित्र"],
        "answer_hi": "कपटी मित्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "करटक कैसा मित्र है?",
        "options_hi": ["सज्जन मित्र", "कपटी मित्र", "लुब्ध मित्र", "भीरु मित्र"],
        "answer_hi": "सज्जन मित्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "संजीवक कैसा है?",
        "options_hi": ["सरलात्मा", "कपटी", "चतुर", "क्रूर"],
        "answer_hi": "सरलात्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "पिंगलक कैसा है?",
        "options_hi": ["विश्वासशील", "संदेहशील", "निर्दय", "मूर्ख"],
        "answer_hi": "विश्वासशील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "काकोलूकीय में मेघवर्ण क्या प्रदर्शित करता है?",
        "options_hi": ["बुद्धि की प्राबल्य", "बल की प्राबल्य", "धन की प्राबल्य", "संख्या की प्राबल्य"],
        "answer_hi": "बुद्धि की प्राबल्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "अरिमर्दन क्या प्रदर्शित करता है?",
        "options_hi": ["अविवेक का परिणाम", "बलगर्व का परिणाम", "धनमद का परिणाम", "सत्वाभाव का परिणाम"],
        "answer_hi": "अविवेक का परिणाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "विष्णु शर्मा कथा कहकर क्या दिखाते हैं?",
        "options_hi": ["नीतिशास्त्र", "इतिहास", "पुराण", "विज्ञान"],
        "answer_hi": "नीतिशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "पंचतंत्र कैसा साहित्य है?",
        "options_hi": ["नीतिकथा समूह", "काव्य समूह", "नाटक समूह", "वैज्ञानिक समूह"],
        "answer_hi": "नीतिकथा समूह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "मित्रलाभ में क्या नीति कही गई है?",
        "options_hi": ["मित्र परीक्षा करनी चाहिए", "सब मित्रभूत हैं", "मित्र नहीं होने चाहिए", "मित्र धन से मिलते हैं"],
        "answer_hi": "मित्र परीक्षा करनी चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "दमनक के कपट से क्या लाभ हुआ?",
        "options_hi": ["मंत्रीपद प्राप्ति", "धन प्राप्ति", "यश प्राप्ति", "बल प्राप्ति"],
        "answer_hi": "मंत्रीपद प्राप्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "संजीवक की सरलता से क्या हानि हुई?",
        "options_hi": ["प्राण हानि", "धन हानि", "यश हानि", "मित्र हानि"],
        "answer_hi": "प्राण हानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "पिंगलक के विश्वास से क्या दोष हुआ?",
        "options_hi": ["शक्तिमान मित्र का नाश", "धन नाश", "राज्य नाश", "यश नाश"],
        "answer_hi": "शक्तिमान मित्र का नाश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "करटक की सावधानी से क्या हुआ?",
        "options_hi": ["आत्मरक्षा", "राज्य वृद्धि", "धन लाभ", "यश लाभ"],
        "answer_hi": "आत्मरक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "मेघवर्ण की युक्ति से क्या साधित हुआ?",
        "options_hi": ["शत्रु विजय", "धन लाभ", "मित्र लाभ", "राज्य लाभ"],
        "answer_hi": "शत्रु विजय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "अरिमर्दन के अविवेक से क्या हुआ?",
        "options_hi": ["आत्मविनाश", "विजय", "धन लाभ", "यश लाभ"],
        "answer_hi": "आत्मविनाश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "पंचतंत्र की प्रसिद्धि कहाँ-कहाँ है?",
        "options_hi": ["सभी देशों में", "केवल भारत में", "केवल एशिया में", "केवल यूरोप में"],
        "answer_hi": "सभी देशों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "मित्रलाभ का अंतिम संदेश क्या है?",
        "options_hi": ["सत्संग और असत्संग दोनों विचारणीय हैं", "धन ही सर्वसाधन है", "बल ही परम साधन है", "कपट सफल है"],
        "answer_hi": "सत्संग और असत्संग दोनों विचारणीय हैं",
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