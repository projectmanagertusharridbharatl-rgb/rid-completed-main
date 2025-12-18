const questions = [
    {
        "num": 1,
        "question_hi": "'मित्रलाभः' यह पाठ किस ग्रंथ से उद्धृत है?",
        "options_hi": ["पंचतंत्र से", "हितोपदेश से", "चाणक्यनीति से", "भर्तृहरिशतक से"],
        "answer_hi": "पंचतंत्र से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "पंचतंत्र के रचयिता कौन हैं?",
        "options_hi": ["विष्णु शर्मा", "नारायण पंडित", "चाणक्य", "वाल्मीकि"],
        "answer_hi": "विष्णु शर्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "पंचतंत्र किसके लिए रचित है?",
        "options_hi": ["राजपुत्रों के लिए", "विद्यार्थियों के लिए", "व्यापारियों के लिए", "किसानों के लिए"],
        "answer_hi": "राजपुत्रों के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "मित्रलाभ का क्या अर्थ है?",
        "options_hi": ["मित्र की प्राप्ति", "धन की प्राप्ति", "ज्ञान की प्राप्ति", "यश की प्राप्ति"],
        "answer_hi": "मित्र की प्राप्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "मित्रलाभ कितने तंत्रों में से एक है?",
        "options_hi": ["प्रथम तंत्र", "द्वितीय तंत्र", "तृतीय तंत्र", "चतुर्थ तंत्र"],
        "answer_hi": "प्रथम तंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "मित्रलाभ में कितनी कथाएं हैं?",
        "options_hi": ["बत्तीस", "चौबीस", "अठारह", "बारह"],
        "answer_hi": "बत्तीस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "प्रथम कथा कौन सी है?",
        "options_hi": ["पिंगलक-संजीवक कथा", "काकोलूकीय कथा", "मित्रभेद कथा", "लब्धप्रणाश कथा"],
        "answer_hi": "पिंगलक-संजीवक कथा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "पिंगलक कौन है?",
        "options_hi": ["सिंह", "बैल", "कौआ", "चूहा"],
        "answer_hi": "सिंह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "संजीवक कौन है?",
        "options_hi": ["बैल", "सिंह", "कौआ", "हिरण"],
        "answer_hi": "बैल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "दमनक कौन है?",
        "options_hi": ["गीदड़", "कौआ", "सिंह", "चूहा"],
        "answer_hi": "गीदड़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "करटक कौन है?",
        "options_hi": ["गीदड़", "कौआ", "सिंह", "बैल"],
        "answer_hi": "गीदड़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "दमनक और करटक कौन हैं?",
        "options_hi": ["मंत्री", "योद्धा", "व्यापारी", "किसान"],
        "answer_hi": "मंत्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "वन का क्या नाम है?",
        "options_hi": ["चंपकवन", "कदंबवन", "आम्रवन", "नंदनवन"],
        "answer_hi": "चंपकवन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "संजीवक कहाँ से आया था?",
        "options_hi": ["मथुरा नगर से", "वाराणसी से", "पाटलिपुत्र से", "अयोध्या से"],
        "answer_hi": "मथुरा नगर से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "संजीवक का स्वामी कौन था?",
        "options_hi": ["व्यापारी का पुत्र", "राजा", "ब्राह्मण", "योद्धा"],
        "answer_hi": "व्यापारी का पुत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "संजीवक वन में कैसे गिरा?",
        "options_hi": ["गाड़ी टूटने से", "रोग से", "युद्ध से", "शिकार से"],
        "answer_hi": "गाड़ी टूटने से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "दमनक किस काम में नियुक्त था?",
        "options_hi": ["प्रधानमंत्री के रूप में", "सेनापति के रूप में", "द्वारपाल के रूप में", "अन्न रक्षक के रूप में"],
        "answer_hi": "प्रधानमंत्री के रूप में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "पिंगलक ने दमनक को क्यों त्याग दिया?",
        "options_hi": ["संदेह से", "क्रोध से", "लोभ से", "भय से"],
        "answer_hi": "संदेह से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "दमनक क्या देखकर प्रसन्न हुआ?",
        "options_hi": ["संजीवक को", "पिंगलक को", "वन को", "नदी को"],
        "answer_hi": "संजीवक को",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "दमनक ने संजीवक को कहाँ ले गया?",
        "options_hi": ["पिंगलक के पास", "वन के अंदर", "नगर में", "गाँव में"],
        "answer_hi": "पिंगलक के पास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "पिंगलक ने संजीवक को देखकर क्या सोचा?",
        "options_hi": ["खा जाऊँ", "बचा लूँ", "पीट दूँ", "दूर कर दूँ"],
        "answer_hi": "खा जाऊँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "दमनक ने पिंगलक से क्या कहा?",
        "options_hi": ["यह सेवक बने", "यह शत्रु है", "यह भक्ष्य है", "यह दूत है"],
        "answer_hi": "यह सेवक बने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "संजीवक ने पिंगलक को क्या दिया?",
        "options_hi": ["शरण", "धन", "भोजन", "वस्त्र"],
        "answer_hi": "शरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "पिंगलक ने संजीवक को क्यों बचाया?",
        "options_hi": ["बल प्राप्ति के लिए", "धन प्राप्ति के लिए", "ज्ञान प्राप्ति के लिए", "यश प्राप्ति के लिए"],
        "answer_hi": "बल प्राप्ति के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "संजीवक पिंगलक का क्या बना?",
        "options_hi": ["प्रधानमंत्री", "सेनापति", "सेवक", "मित्र"],
        "answer_hi": "प्रधानमंत्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "दमनक ने संजीवक में क्या दोष देखा?",
        "options_hi": ["अहंकार", "लोभ", "क्रोध", "मोह"],
        "answer_hi": "अहंकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "दमनक ने करटक से क्या कहा?",
        "options_hi": ["संजीवक अहंकारी है", "संजीवक साधु है", "संजीवक दानी है", "संजीवक वीर है"],
        "answer_hi": "संजीवक अहंकारी है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "दमनक ने संजीवक को पिंगलक के सामने कैसे पेश किया?",
        "options_hi": ["शत्रु के रूप में", "मित्र के रूप में", "भाई के रूप में", "सेवक के रूप में"],
        "answer_hi": "शत्रु के रूप में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "पिंगलक ने संजीवक को कैसे मारा?",
        "options_hi": ["छल से", "युद्ध से", "विष से", "शस्त्र से"],
        "answer_hi": "छल से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "मित्रलाभ का मुख्य संदेश क्या है?",
        "options_hi": ["सत्संग लाभप्रद है", "धन लाभप्रद है", "यश लाभप्रद है", "विद्या लाभप्रद है"],
        "answer_hi": "सत्संग लाभप्रद है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "काकोलूकीय में कौआ कौन है?",
        "options_hi": ["मेघवर्ण", "पिंगलक", "दमनक", "संजीवक"],
        "answer_hi": "मेघवर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "काकोलूकीय में उल्लू कौन है?",
        "options_hi": ["अरिमर्दन", "मेघवर्ण", "पिंगलक", "दमनक"],
        "answer_hi": "अरिमर्दन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "उल्लुओं की राजधानी क्या थी?",
        "options_hi": ["शिलागृह", "वृक्षगृह", "गुहागृह", "जलगृह"],
        "answer_hi": "शिलागृह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "मेघवर्ण क्या निर्णय करता है?",
        "options_hi": ["उल्लुओं के नाश के लिए", "उल्लुओं से मित्रता के लिए", "उल्लुओं की सेवा के लिए", "उल्लुओं की शरण के लिए"],
        "answer_hi": "उल्लुओं के नाश के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "कौओं का मंत्री कौन है?",
        "options_hi": ["चित्रग्रीव", "मेघवर्ण", "सुहृद", "विकट"],
        "answer_hi": "चित्रग्रीव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "कौए उल्लुओं को कैसे जीतते हैं?",
        "options_hi": ["बुद्धि से", "बल से", "धन से", "संख्या से"],
        "answer_hi": "बुद्धि से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "कौए क्या लेकर उल्लू के घर में प्रवेश करते हैं?",
        "options_hi": ["जलती लकड़ी", "शस्त्र", "विष", "मणि"],
        "answer_hi": "जलती लकड़ी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "उल्लू कैसे नष्ट होते हैं?",
        "options_hi": ["आग से जलकर", "युद्ध से", "विष से", "जल से"],
        "answer_hi": "आग से जलकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "मेघवर्ण कैसा था?",
        "options_hi": ["चतुर", "मूर्ख", "भीरु", "क्रोधी"],
        "answer_hi": "चतुर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "अरिमर्दन कैसा था?",
        "options_hi": ["अविवेकी", "विवेकी", "दयालु", "न्यायी"],
        "answer_hi": "अविवेकी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "मित्रलाभ में क्या उपदेश दिया गया है?",
        "options_hi": ["मित्र-विचार", "धन-संचय", "युद्ध-कला", "राज्य-शासन"],
        "answer_hi": "मित्र-विचार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "दुर्मित्र का क्या फल है?",
        "options_hi": ["विनाश", "लाभ", "सुख", "यश"],
        "answer_hi": "विनाश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "सुमित्र का क्या फल है?",
        "options_hi": ["कल्याण", "दुःख", "नाश", "क्लेश"],
        "answer_hi": "कल्याण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "विष्णु शर्मा किस राजा के दरबारी थे?",
        "options_hi": ["अमरशक्ति", "भोज", "विक्रम", "चंद्रगुप्त"],
        "answer_hi": "अमरशक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "अमरशक्ति के पुत्र कैसे थे?",
        "options_hi": ["मूर्ख", "विद्वान", "वीर", "शांत"],
        "answer_hi": "मूर्ख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "विष्णु शर्मा ने कितने महीनों में राजपुत्रों को शिक्षित किया?",
        "options_hi": ["छह महीनों में", "बारह महीनों में", "तीन महीनों में", "एक महीने में"],
        "answer_hi": "छह महीनों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "पंचतंत्र क्या हैं?",
        "options_hi": ["मित्रलाभ, मित्रभेद, काकोलूकीय, लब्धप्रणाश, अपरीक्षितकारक", "राजनीति, अर्थशास्त्र, कामशास्त्र, धर्मशास्त्र, मोक्षशास्त्र", "विद्या, धन, यश, सुख, स्वर्ग", "सत्य, धर्म, अहिंसा, दया, शांति"],
        "answer_hi": "मित्रलाभ, मित्रभेद, काकोलूकीय, लब्धप्रणाश, अपरीक्षितकारक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "मित्रलाभ में कौन सा श्लोक प्रसिद्ध है?",
        "options_hi": ["उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः", "अति सर्वत्र वर्जयेत्", "विद्या ददाति विनयं", "यथा चित्तं तथा वाचः"],
        "answer_hi": "उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "दमनक का चरित्र कैसा है?",
        "options_hi": ["कपटपूर्ण", "सरल", "दयालु", "निर्मल"],
        "answer_hi": "कपटपूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "करटक का चरित्र कैसा है?",
        "options_hi": ["सावधान", "लोभी", "क्रोधी", "अविवेकी"],
        "answer_hi": "सावधान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "संजीवक की मृत्यु किसके दोष से हुई?",
        "options_hi": ["स्वाभिमान से", "दमनक से", "पिंगलक से", "करटक से"],
        "answer_hi": "स्वाभिमान से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "पिंगलक किसका राजा है?",
        "options_hi": ["वन का", "नगर का", "देश का", "पर्वत का"],
        "answer_hi": "वन का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "विष्णु शर्मा का उद्देश्य क्या था?",
        "options_hi": ["राजपुत्रों की नीति शिक्षा", "धर्मोपदेश", "कथा कहना", "ग्रंथ रचना"],
        "answer_hi": "राजपुत्रों की नीति शिक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "पंचतंत्र किनके लिए उपयोगी है?",
        "options_hi": ["सभी के लिए", "बच्चों के लिए ही", "बूढ़ों के लिए ही", "राजा के लिए ही"],
        "answer_hi": "सभी के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "काकोलूकीय कौन सा तंत्र है?",
        "options_hi": ["तृतीय", "प्रथम", "द्वितीय", "चतुर्थ"],
        "answer_hi": "तृतीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "मित्रभेद कौन सा तंत्र है?",
        "options_hi": ["द्वितीय", "प्रथम", "तृतीय", "चतुर्थ"],
        "answer_hi": "द्वितीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "लब्धप्रणाश कौन सा तंत्र है?",
        "options_hi": ["चतुर्थ", "प्रथम", "द्वितीय", "तृतीय"],
        "answer_hi": "चतुर्थ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "अपरीक्षितकारक कौन सा तंत्र है?",
        "options_hi": ["पंचम", "प्रथम", "द्वितीय", "तृतीय"],
        "answer_hi": "पंचम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "मित्रलाभ किस प्रकार को दर्शाता है?",
        "options_hi": ["मित्र प्राप्ति का", "शत्रु नाश का", "धन अर्जन का", "यश प्राप्ति का"],
        "answer_hi": "मित्र प्राप्ति का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "संजीवक क्या बजाता था?",
        "options_hi": ["भेरी", "वीणा", "मृदंग", "शंख"],
        "answer_hi": "भेरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "पिंगलक ने संजीवक की आवाज सुनकर क्या सोचा?",
        "options_hi": ["दूसरा सिंह", "मृग", "मनुष्य", "देवता"],
        "answer_hi": "दूसरा सिंह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "दमनक ने पिंगलक को कहाँ ले गया?",
        "options_hi": ["संजीवक के पास", "वन के अंदर", "नगर में", "गुफा में"],
        "answer_hi": "संजीवक के पास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "संजीवक ने पिंगलक को देखकर क्या किया?",
        "options_hi": ["नमन किया", "भागा", "रोया", "हँसा"],
        "answer_hi": "नमन किया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "पिंगलक ने संजीवक का नमस्कार देखकर क्या सोचा?",
        "options_hi": ["यह मित्र हो सकता है", "यह शत्रु है", "यह भक्ष्य है", "यह दास है"],
        "answer_hi": "यह मित्र हो सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "दमनक ने पिंगलक को क्या सूचित किया?",
        "options_hi": ["संजीवक उपयोगी है", "संजीवक हानिकारक है", "संजीवक मूर्ख है", "संजीवक शत्रु है"],
        "answer_hi": "संजीवक उपयोगी है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "संजीवक ने क्या करके पिंगलक को प्रसन्न किया?",
        "options_hi": ["स्तुति करके", "धन देकर", "युद्ध करके", "सेवा करके"],
        "answer_hi": "स्तुति करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "पिंगलक ने संजीवक से क्या पूछा?",
        "options_hi": ["तुम कौन हो", "तुम कहाँ से हो", "तुम क्यों", "तुम कब"],
        "answer_hi": "तुम कौन हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "संजीवक ने अपना वृत्तांत किसे सुनाया?",
        "options_hi": ["पिंगलक को", "दमनक को", "करटक को", "वन्य पशुओं को"],
        "answer_hi": "पिंगलक को",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "पिंगलक ने संजीवक की कथा सुनकर क्या किया?",
        "options_hi": ["उसे बचाने का निश्चय किया", "उसे खाने का निश्चय किया", "उसे दूर करने का निश्चय किया", "उसे दंड देने का निश्चय किया"],
        "answer_hi": "उसे बचाने का निश्चय किया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "दमनक ने पिंगलक को क्यों विश्वास दिलाया?",
        "options_hi": ["अपने लाभ के लिए", "संजीवक के हित के लिए", "वन के कल्याण के लिए", "राज्य वर्धन के लिए"],
        "answer_hi": "अपने लाभ के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "करटक ने दमनक से क्या कहा?",
        "options_hi": ["कपट मत करो", "कपट श्रेष्ठ है", "सब कपट से", "कपट निंद्य है"],
        "answer_hi": "कपट मत करो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "दमनक ने करटक को क्या जवाब दिया?",
        "options_hi": ["मैं अपना स्वार्थ साधता हूँ", "मैं परार्थ साधता हूँ", "मैं धर्म पालता हूँ", "मैं सत्य बोलता हूँ"],
        "answer_hi": "मैं अपना स्वार्थ साधता हूँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "संजीवक ने पिंगलक की कृपा से क्या प्राप्त किया?",
        "options_hi": ["सुरक्षित स्थान", "धन", "यश", "बल"],
        "answer_hi": "सुरक्षित स्थान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "वन्य पशु संजीवक को कैसे देखते थे?",
        "options_hi": ["संदेह से", "प्रेम से", "भय से", "क्रोध से"],
        "answer_hi": "संदेह से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "संजीवक कैसे बढ़ता है?",
        "options_hi": ["पिंगलक के अन्न से", "स्वयं फसल से", "पशुओं की सहायता से", "दमनक की योजना से"],
        "answer_hi": "पिंगलक के अन्न से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "दमनक ने संजीवक को कब दोषी ठहराया?",
        "options_hi": ["जब वह बलवान हुआ", "जब वह कमजोर हुआ", "जब वह चला गया", "जब वह बीमार हुआ"],
        "answer_hi": "जब वह बलवान हुआ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "पिंगलक ने कब संजीवक को मारने का निश्चय किया?",
        "options_hi": ["दमनक के वचन से", "स्वयं", "करटक के वचन से", "पशुओं के वचन से"],
        "answer_hi": "दमनक के वचन से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "संजीवक पिंगलक को मारना चाहता था?",
        "options_hi": ["नहीं", "हाँ", "कभी-कभी", "नहीं जानता"],
        "answer_hi": "नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "पिंगलक ने संजीवक को कैसे मारा?",
        "options_hi": ["आक्रमण करके", "विष देकर", "शस्त्र से", "जल में डुबोकर"],
        "answer_hi": "आक्रमण करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "संजीवक की मृत्यु के बाद पिंगलक क्या अनुभव करता है?",
        "options_hi": ["पश्चाताप", "आनंद", "शांति", "विजय का घमंड"],
        "answer_hi": "पश्चाताप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "दमनक ने पिंगलक का पश्चाताप देखकर क्या किया?",
        "options_hi": ["सांत्वना दी", "उपहास किया", "निंदा की", "त्याग दिया"],
        "answer_hi": "सांत्वना दी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "पिंगलक ने दमनक को क्या पुनः नियुक्त किया?",
        "options_hi": ["मंत्री पद पर", "सेनापति पद पर", "द्वारपाल पद पर", "अन्न रक्षक पद पर"],
        "answer_hi": "मंत्री पद पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "करटक ने दमनक की सफलता देखकर क्या सोचा?",
        "options_hi": ["कपट जीतता है", "सत्य जीतता है", "धर्म जीतता है", "दया जीतता है"],
        "answer_hi": "कपट जीतता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "मित्रलाभ से क्या सीख मिलती है?",
        "options_hi": ["मित्रों की परीक्षा करनी चाहिए", "सभी मित्र बन जाएँ", "मित्र नहीं करने चाहिए", "मित्र धन से मिलते हैं"],
        "answer_hi": "मित्रों की परीक्षा करनी चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "दमनक कैसा मित्र है?",
        "options_hi": ["कपटी मित्र", "सच्चा मित्र", "सहायक मित्र", "धर्म मित्र"],
        "answer_hi": "कपटी मित्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "करटक कैसा मित्र है?",
        "options_hi": ["सचेतन मित्र", "कपटी मित्र", "लोभी मित्र", "भीरु मित्र"],
        "answer_hi": "सचेतन मित्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "संजीवक कैसा था?",
        "options_hi": ["सरल हृदय", "कपटी", "चतुर", "क्रूर"],
        "answer_hi": "सरल हृदय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "पिंगलक कैसा था?",
        "options_hi": ["विश्वासप्रिय", "संदेही", "निर्दय", "मूर्ख"],
        "answer_hi": "विश्वासप्रिय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "काकोलूकीय में मेघवर्ण क्या दर्शाता है?",
        "options_hi": ["बुद्धि का महत्व", "बल का महत्व", "धन का महत्व", "संख्या का महत्व"],
        "answer_hi": "बुद्धि का महत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "अरिमर्दन क्या दर्शाता है?",
        "options_hi": ["अविवेक का दोष", "बल का घमंड", "धन का मद", "सत्त्व का अभाव"],
        "answer_hi": "अविवेक का दोष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "विष्णु शर्मा कथा कहकर क्या दर्शाते हैं?",
        "options_hi": ["नीतिशास्त्र", "इतिहास", "पुराण", "विज्ञान"],
        "answer_hi": "नीतिशास्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "पंचतंत्र कैसा ग्रंथ है?",
        "options_hi": ["नीति कथा संग्रह", "काव्य ग्रंथ", "नाटक ग्रंथ", "वैज्ञानिक ग्रंथ"],
        "answer_hi": "नीति कथा संग्रह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "मित्रलाभ में कौन सी नीति उपदेशित है?",
        "options_hi": ["मित्रों की परीक्षा करनी चाहिए", "सब मित्र बनें", "मित्र न बनें", "मित्र धन से मिलते हैं"],
        "answer_hi": "मित्रों की परीक्षा करनी चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "दमनक के कपट से क्या लाभ हुआ?",
        "options_hi": ["मंत्री पद की प्राप्ति", "धन प्राप्ति", "यश प्राप्ति", "बल प्राप्ति"],
        "answer_hi": "मंत्री पद की प्राप्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "संजीवक की सरलता से क्या हानि हुई?",
        "options_hi": ["प्राण हानि", "धन हानि", "यश हानि", "मित्र हानि"],
        "answer_hi": "प्राण हानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "पिंगलक के विश्वास से क्या दोष हुआ?",
        "options_hi": ["शक्तिशाली मित्र का नाश", "धन नाश", "राज्य नाश", "यश नाश"],
        "answer_hi": "शक्तिशाली मित्र का नाश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "करटक की सावधानता से क्या हुआ?",
        "options_hi": ["अपनी रक्षा", "राज्य वर्धन", "धन लाभ", "यश लाभ"],
        "answer_hi": "अपनी रक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "मेघवर्ण की युक्ति से क्या सिद्ध हुआ?",
        "options_hi": ["शत्रु नाश", "धन लाभ", "मित्र लाभ", "राज्य लाभ"],
        "answer_hi": "शत्रु नाश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "अरिमर्दन के अविवेक से क्या हुआ?",
        "options_hi": ["स्वयं का नाश", "विजय", "धन लाभ", "यश लाभ"],
        "answer_hi": "स्वयं का नाश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "मित्रलाभ का अंतिम संदेश क्या है?",
        "options_hi": ["सत्संगति और असत्संगति दोनों पर विचार करना चाहिए", "धन सब कुछ है", "बल सर्वश्रेष्ठ है", "कपट जीतता है"],
        "answer_hi": "सत्संगति और असत्संगति दोनों पर विचार करना चाहिए",
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