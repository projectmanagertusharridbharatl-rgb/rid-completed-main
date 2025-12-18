const questions = [
    {
        "num": 1,
        "question_hi": "विश्पला कौन थी?",
        "options_hi": ["एक वीरांगना", "एक रानी", "एक देवी", "एक मुनिपत्नी"],
        "answer_hi": "एक वीरांगना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "विश्पला किस युग में जीवित थी?",
        "options_hi": ["ऋग्वेद काल", "महाभारत काल", "रामायण काल", "मध्ययुग"],
        "answer_hi": "ऋग्वेद काल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "विश्पला का उल्लेख कहाँ मिलता है?",
        "options_hi": ["ऋग्वेद में", "यजुर्वेद में", "सामवेद में", "अथर्ववेद में"],
        "answer_hi": "ऋग्वेद में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "विश्पला के पति कौन थे?",
        "options_hi": ["कवष ऐलूष", "वसिष्ठ", "विश्वामित्र", "अगस्त्य"],
        "answer_hi": "कवष ऐलूष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "विश्पला किसकी पुत्री थी?",
        "options_hi": ["वृषागिरि की", "इन्द्र की", "वरुण की", "सोम की"],
        "answer_hi": "वृषागिरि की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "विश्पला का प्रमुख गुण क्या था?",
        "options_hi": ["वीरता", "सुन्दरता", "धनवत्ता", "विद्वत्ता"],
        "answer_hi": "वीरता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "विश्पला किस लिए प्रसिद्ध थी?",
        "options_hi": ["रणक्षेत्र में", "गृहकार्य में", "काव्य रचना में", "यज्ञकर्म में"],
        "answer_hi": "रणक्षेत्र में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "विश्पला का युद्ध में क्या नष्ट हुआ?",
        "options_hi": ["पैर", "हाथ", "आँख", "कान"],
        "answer_hi": "पैर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "विश्पला के पैर नष्ट होने के बाद क्या प्राप्त हुआ?",
        "options_hi": ["लोहे का पैर", "दिव्य पैर", "लकड़ी का पैर", "सोने का पैर"],
        "answer_hi": "लोहे का पैर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "विश्पला को लोहे का पैर किसने दिया?",
        "options_hi": ["अश्विनी कुमारों ने", "इन्द्र ने", "वरुण ने", "रुद्र ने"],
        "answer_hi": "अश्विनी कुमारों ने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "अश्विनी कुमार कौन थे?",
        "options_hi": ["देव वैद्य", "देव सेनापति", "देव गायक", "देव ऋषि"],
        "answer_hi": "देव वैद्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "विश्पला लोहे के पैर से क्या करने में सक्षम हुई?",
        "options_hi": ["फिर से युद्ध करने", "नृत्य करने", "दौड़ने", "उड़ने"],
        "answer_hi": "फिर से युद्ध करने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "विश्पला किसके साथ युद्ध करती थी?",
        "options_hi": ["शत्रुओं के साथ", "डाकुओं के साथ", "राक्षसों के साथ", "पशुओं के साथ"],
        "answer_hi": "शत्रुओं के साथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "विश्पला की कथा क्या सिद्ध करती है?",
        "options_hi": ["प्राचीन भारत में स्त्री शक्ति", "प्राचीन भारत में धन", "प्राचीन भारत में यज्ञ", "प्राचीन भारत में विद्या"],
        "answer_hi": "प्राचीन भारत में स्त्री शक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "विश्पला का उल्लेख किस मंडल में है?",
        "options_hi": ["प्रथम मंडल", "दशम मंडल", "अष्टम मंडल", "नवम मंडल"],
        "answer_hi": "प्रथम मंडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "विश्पला किसकी कुलीन थी?",
        "options_hi": ["पृथु वैन्य की", "मनु की", "इक्ष्वाकु की", "ययाति की"],
        "answer_hi": "पृथु वैन्य की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "विश्पला के युद्ध का वर्णन किसने किया?",
        "options_hi": ["ऋषियों ने", "इतिहासकारों ने", "कवियों ने", "वैद्यों ने"],
        "answer_hi": "ऋषियों ने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "विश्पला क्या धारण करती थी?",
        "options_hi": ["अस्त्र-शस्त्र", "पुस्तकें", "यज्ञ सामग्री", "गृहोपकरण"],
        "answer_hi": "अस्त्र-शस्त्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "विश्पला के समय में स्त्रियों की स्थिति कैसी थी?",
        "options_hi": ["स्वतंत्र", "परतंत्र", "गृहबद्ध", "अशिक्षित"],
        "answer_hi": "स्वतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "विश्पला किस राजा की पुत्री थी?",
        "options_hi": ["वृषागिरि की", "पृथु की", "नहुष की", "ययाति की"],
        "answer_hi": "वृषागिरि की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "विश्पला के पति कवष कौन थे?",
        "options_hi": ["ऋषि", "राजा", "योद्धा", "वैद्य"],
        "answer_hi": "ऋषि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "विश्पला किस देवता की उपासिका थी?",
        "options_hi": ["इन्द्र की", "अश्विनी कुमारों की", "अग्नि की", "वरुण की"],
        "answer_hi": "अश्विनी कुमारों की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "अश्विनी कुमारों ने विश्पला की क्यों सहायता की?",
        "options_hi": ["उसकी वीरता देखकर", "उसका सौंदर्य देखकर", "उसका धन देखकर", "उसका ज्ञान देखकर"],
        "answer_hi": "उसकी वीरता देखकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "लोहे का पैर क्या क्षमता प्रदान करता था?",
        "options_hi": ["चलने की क्षमता", "उड़ने की क्षमता", "देखने की क्षमता", "सुनने की क्षमता"],
        "answer_hi": "चलने की क्षमता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "विश्पला ने फिर से युद्ध करके क्या प्राप्त किया?",
        "options_hi": ["विजय", "धन", "यश", "राज्य"],
        "answer_hi": "विजय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "विश्पला की कथा किसकी प्रतीक है?",
        "options_hi": ["अपंगता पर विजय की", "धन की विजय की", "रूप के प्रभाव की", "विद्या के महत्व की"],
        "answer_hi": "अपंगता पर विजय की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "विश्पला के सूक्त का दर्शन किसने किया?",
        "options_hi": ["ऋषि ने", "राजा ने", "वैद्य ने", "योद्धा ने"],
        "answer_hi": "ऋषि ने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "विश्पला कितनी ऋचाओं में वर्णित है?",
        "options_hi": ["चार", "आठ", "बारह", "सोलह"],
        "answer_hi": "चार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "विश्पला की कथा का उद्देश्य क्या है?",
        "options_hi": ["स्त्री शक्ति का प्रदर्शन", "इतिहास वर्णन", "देव स्तुति", "युद्ध वर्णन"],
        "answer_hi": "स्त्री शक्ति का प्रदर्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "विश्पला नाम का अर्थ क्या है?",
        "options_hi": ["रक्षिका", "योद्ध्री", "सुन्दरी", "विदुषी"],
        "answer_hi": "रक्षिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "विश्पला किसका पहला उदाहरण है?",
        "options_hi": ["विकलांग होते हुए भी वीरता का", "सुन्दरता का", "धनिक होने का", "राजपत्नी होने का"],
        "answer_hi": "विकलांग होते हुए भी वीरता का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "विश्पला की यश कहाँ फैली?",
        "options_hi": ["सर्वत्र", "केवल घर में", "केवल राज्य में", "केवल सेना में"],
        "answer_hi": "सर्वत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "विश्पला की समकालीन कौन थीं?",
        "options_hi": ["अन्य वीरांगनाएँ", "केवल पुरुष", "केवल ऋषि", "केवल राजा"],
        "answer_hi": "अन्य वीरांगनाएँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "विश्पला किसको प्रेरणा देती है?",
        "options_hi": ["विकलांगों को", "धनिकों को", "राजाओं को", "विद्वानों को"],
        "answer_hi": "विकलांगों को",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "विश्पला का चरित्र किस विषय में ज्ञान देता है?",
        "options_hi": ["प्राचीन स्त्री स्वतंत्रता", "प्राचीन यज्ञ विधि", "प्राचीन राजनीति", "प्राचीन कृषि"],
        "answer_hi": "प्राचीन स्त्री स्वतंत्रता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "विश्पला कैसे युद्ध में जाती थी?",
        "options_hi": ["रथ से", "घोड़े से", "पैदल", "हाथी से"],
        "answer_hi": "रथ से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "विश्पला के युद्ध कौशल का वर्णन कैसा है?",
        "options_hi": ["अतुलनीय", "सामान्य", "न्यून", "अविकसित"],
        "answer_hi": "अतुलनीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "विश्पला किसका दृष्टांत है?",
        "options_hi": ["लोकोत्तर साहस का", "सामान्य वीरता का", "गृहिणी धर्म का", "सेवा भाव का"],
        "answer_hi": "लोकोत्तर साहस का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "विश्पला का उपचार किसने किया?",
        "options_hi": ["दिव्य वैद्यों ने", "मानव वैद्यों ने", "ऋषियों ने", "स्वयं"],
        "answer_hi": "दिव्य वैद्यों ने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "विश्पला किसका प्रतीक है?",
        "options_hi": ["अदम्य साहस का", "दुर्बलता का", "भीरुता का", "निराशा का"],
        "answer_hi": "अदम्य साहस का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "विश्पला की कथा में क्या नैतिक है?",
        "options_hi": ["कठिन परिस्थिति में भी धैर्य", "धन का महत्व", "सुन्दरता की आवश्यकता", "राज्य की प्राप्ति"],
        "answer_hi": "कठिन परिस्थिति में भी धैर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "विश्पला कैसे याद की जाती है?",
        "options_hi": ["वीरांगना के रूप में", "सुन्दरी के रूप में", "देवी के रूप में", "ऋषिपत्नी के रूप में"],
        "answer_hi": "वीरांगना के रूप में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "विश्पला के पैर कब नष्ट हुए?",
        "options_hi": ["युद्ध के समय", "घर में", "यात्रा के समय", "वनवास में"],
        "answer_hi": "युद्ध के समय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "विश्पला ने पैर नष्ट होने के बाद क्या नहीं सोचा?",
        "options_hi": ["पराजय", "धन का नाश", "यश की हानि", "सौंदर्य की हानि"],
        "answer_hi": "पराजय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "विश्पला की प्रार्थना किससे थी?",
        "options_hi": ["अश्विनी कुमारों से", "इन्द्र से", "अग्नि से", "वरुण से"],
        "answer_hi": "अश्विनी कुमारों से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "अश्विनी कुमारों ने विश्पला को क्या वरदान दिया?",
        "options_hi": ["लोहे का पैर", "दिव्य रथ", "अमरत्व", "अजेयत्व"],
        "answer_hi": "लोहे का पैर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "विश्पला ने लोहे के पैर से क्या प्राप्त किया?",
        "options_hi": ["पूर्ण चलन क्षमता", "अतिरिक्त बल", "दिव्य दृष्टि", "अमरत्व"],
        "answer_hi": "पूर्ण चलन क्षमता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "विश्पला की कथा किनकी प्रेरणा है?",
        "options_hi": ["आधुनिक युवतियों की", "केवल पुरुषों की", "केवल बच्चों की", "केवल वृद्धों की"],
        "answer_hi": "आधुनिक युवतियों की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "विश्पला किसका प्रमाण है?",
        "options_hi": ["वैदिक काल में स्त्री स्वतंत्रता का", "वैदिक काल में युद्ध का", "वैदिक काल में धर्म का", "वैदिक काल में कृषि का"],
        "answer_hi": "वैदिक काल में स्त्री स्वतंत्रता का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "विश्पला का चरित्र क्या सिखाता है?",
        "options_hi": ["बाधा में भी आगे बढ़ना", "धन से सुख", "रूप से यश", "बल से विजय"],
        "answer_hi": "बाधा में भी आगे बढ़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "विश्पला कैसी थी?",
        "options_hi": ["निर्भय", "भीरु", "लज्जालु", "निराश"],
        "answer_hi": "निर्भय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "विश्पला क्या पाकर प्रसन्न हुई?",
        "options_hi": ["लोहे का पैर", "स्वर्ण आभूषण", "नए वस्त्र", "दिव्य रथ"],
        "answer_hi": "लोहे का पैर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "विश्पला कैसे युद्ध करती थी?",
        "options_hi": ["पुरुषों के साथ", "अकेली", "स्त्रियों के साथ", "बच्चों के साथ"],
        "answer_hi": "पुरुषों के साथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "विश्पला की कथा का महत्व क्या है?",
        "options_hi": ["ऐतिहासिक", "काल्पनिक", "पौराणिक", "आधुनिक"],
        "answer_hi": "ऐतिहासिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "विश्पला किनकी मातृका है?",
        "options_hi": ["भारतीय वीरांगनाओं की", "भारतीय राज्ञियों की", "भारतीय देवियों की", "भारतीय ऋषिपत्नियों की"],
        "answer_hi": "भारतीय वीरांगनाओं की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "विश्पला की स्मृति कैसे रक्षित है?",
        "options_hi": ["वेद मन्त्रों से", "इतिहास ग्रंथों से", "काव्यों से", "नाटकों से"],
        "answer_hi": "वेद मन्त्रों से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "विश्पला का उल्लेख कितने सूक्तों में है?",
        "options_hi": ["एक में", "दो में", "तीन में", "चार में"],
        "answer_hi": "एक में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "विश्पला किस वंश की थी?",
        "options_hi": ["भार्गव वंश की", "इक्ष्वाकु वंश की", "यदु वंश की", "कुरु वंश की"],
        "answer_hi": "भार्गव वंश की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "विश्पला के पिता वृषागिरि कौन थे?",
        "options_hi": ["राजर्षि", "सामान्य जन", "वणिक", "कृषक"],
        "answer_hi": "राजर्षि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "विश्पला का आदर्श क्या था?",
        "options_hi": ["देश रक्षा", "धन अर्जन", "गृहकार्य", "यज्ञकर्म"],
        "answer_hi": "देश रक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "विश्पला किस प्रेरणा का स्रोत है?",
        "options_hi": ["नारी शक्ति की", "पुरुष शक्ति की", "बाल शक्ति की", "वृद्ध शक्ति की"],
        "answer_hi": "नारी शक्ति की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "विश्पला का वर्णन कैसा है?",
        "options_hi": ["शौर्य सम्पन्न", "रूप सम्पन्न", "धन सम्पन्न", "विद्या सम्पन्न"],
        "answer_hi": "शौर्य सम्पन्न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "विश्पला की कथा का प्रभाव क्या है?",
        "options_hi": ["सामाजिक परिवर्तन", "आर्थिक विकास", "राजनीतिक परिवर्तन", "धार्मिक परिवर्तन"],
        "answer_hi": "सामाजिक परिवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "विश्पला किस रूप में पूजित हैं?",
        "options_hi": ["वीरांगना के रूप में", "देवी के रूप में", "मातृ रूप में", "ऋषिपत्नी के रूप में"],
        "answer_hi": "वीरांगना के रूप में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "विश्पला का लोहे का पैर क्या सूचित करता है?",
        "options_hi": ["तकनीकी उन्नति", "युद्ध कला का विकास", "चिकित्सा विज्ञान की उन्नति", "कृषि विज्ञान का विकास"],
        "answer_hi": "चिकित्सा विज्ञान की उन्नति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "विश्पला ने कैसे इतिहास में स्थान पाया?",
        "options_hi": ["वीर कर्म से", "सौन्दर्य से", "धन से", "विद्या से"],
        "answer_hi": "वीर कर्म से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "विश्पला की कथा किस ग्रंथ में संरक्षित है?",
        "options_hi": ["वेद में", "पुराण में", "इतिहास में", "काव्य में"],
        "answer_hi": "वेद में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "विश्पला की यश कब प्रसिद्ध हुई?",
        "options_hi": ["वैदिक काल में", "मध्ययुग में", "आधुनिक युग में", "प्रागैतिहासिक काल में"],
        "answer_hi": "वैदिक काल में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "विश्पला किसकी पूर्वगामी हैं?",
        "options_hi": ["झाँसी की रानी की", "रानी लक्ष्मीबाई की", "कित्तूर चेन्नम्मा की", "सभी वीरांगनाओं की"],
        "answer_hi": "सभी वीरांगनाओं की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "विश्पला के समय स्त्रियों की शिक्षा कैसी थी?",
        "options_hi": ["उन्नत", "अविकसित", "निषिद्ध", "सीमित"],
        "answer_hi": "उन्नत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "विश्पला किसका उदाहरण है?",
        "options_hi": ["स्त्री सशक्तीकरण का", "स्त्री दमन का", "पुरुष प्रधानता का", "बाल श्रम का"],
        "answer_hi": "स्त्री सशक्तीकरण का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "विश्पला का पुनरुद्धार कैसे हृदयस्पर्शी है?",
        "options_hi": ["दिव्य सहायता से", "स्वप्रयास से", "पति की सहायता से", "पिता की सहायता से"],
        "answer_hi": "दिव्य सहायता से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "विश्पला किनके लिए प्रेरणादायी उदाहरण है?",
        "options_hi": ["विकलांग जनों के लिए", "स्वस्थ जनों के लिए", "धनिक जनों के लिए", "राजपरिवारों के लिए"],
        "answer_hi": "विकलांग जनों के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "विश्पला की कथा की शिक्षा क्या है?",
        "options_hi": ["कभी हार न मानो", "धन ही बल है", "रूप ही साधन है", "सौभाग्य ही सब कुछ है"],
        "answer_hi": "कभी हार न मानो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "विश्पला कैसे युद्धभूमि पर लौटी?",
        "options_hi": ["नवोत्साह से", "भय से", "निराशा से", "बलात्कार से"],
        "answer_hi": "नवोत्साह से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "विश्पला का संकल्प क्या था?",
        "options_hi": ["शत्रुओं को पराजित करना", "धन संचय करना", "सुन्दर बनना", "गृह निर्माण करना"],
        "answer_hi": "शत्रुओं को पराजित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "विश्पला किस दृष्टान्त से प्रसिद्ध है?",
        "options_hi": ["दिव्य चिकित्सा का", "दिव्य युद्धकला का", "दिव्य सौन्दर्य का", "दिव्य विद्या का"],
        "answer_hi": "दिव्य चिकित्सा का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "विश्पला क्या संदेश देती है?",
        "options_hi": ["बाधाओं को पार कर आगे बढ़ो", "धन इकट्ठा करो", "सुख भोगो", "युद्ध से विरमो"],
        "answer_hi": "बाधाओं को पार कर आगे बढ़ो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "विश्पला की कथा किसकी प्रमाणिकता है?",
        "options_hi": ["वैदिक साहित्य की", "पौराणिक कथाओं की", "लोक कथाओं की", "आधुनिक कथाओं की"],
        "answer_hi": "वैदिक साहित्य की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "विश्पला किसकी प्रतिनिधि हैं?",
        "options_hi": ["प्राचीन भारतीय संस्कृति की", "प्राचीन युद्धनीति की", "प्राचीन कृषि विधि की", "प्राचीन वाणिज्य की"],
        "answer_hi": "प्राचीन भारतीय संस्कृति की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "विश्पला का आख्यान क्या स्पष्ट करता है?",
        "options_hi": ["वैदिक कालीन स्त्री स्वतंत्रता", "वैदिक कालीन यज्ञ विधि", "वैदिक कालीन राज्य व्यवस्था", "वैदिक कालीन शिक्षा व्यवस्था"],
        "answer_hi": "वैदिक कालीन स्त्री स्वतंत्रता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "विश्पला किसमें निपुण थी?",
        "options_hi": ["अस्त्र-शस्त्र प्रयोग में", "यज्ञकर्म में", "गायन में", "नृत्य में"],
        "answer_hi": "अस्त्र-शस्त्र प्रयोग में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "विश्पला की विशेषता क्या थी?",
        "options_hi": ["अदम्य साहस", "अतुल्य सौन्दर्य", "अपार धन", "असीम विद्या"],
        "answer_hi": "अदम्य साहस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "विश्पला किसकी प्रतीक के रूप में वर्णित है?",
        "options_hi": ["विजय की", "पराजय की", "शान्ति की", "विराम की"],
        "answer_hi": "विजय की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "विश्पला की कथा कैसे प्रचलित है?",
        "options_hi": ["मौखिक परम्परा से", "लिखित ग्रंथों से", "चित्रकला से", "नाटकों से"],
        "answer_hi": "मौखिक परम्परा से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "विश्पला को किस प्रकार का अंग प्राप्त हुआ?",
        "options_hi": ["कृत्रिम", "दिव्य", "स्वाभाविक", "अदृश्य"],
        "answer_hi": "कृत्रिम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "विश्पला की सफलता का रहस्य क्या था?",
        "options_hi": ["दृढ़ संकल्प", "दैवी कृपा", "पति की सहायता", "पिता की सहायता"],
        "answer_hi": "दृढ़ संकल्प",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "विश्पला ने समाज पर कैसे प्रभाव डाला?",
        "options_hi": ["वीर कर्म से", "धन दान से", "सौन्दर्य से", "विद्या प्रचार से"],
        "answer_hi": "वीर कर्म से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "विश्पला की कथा की आधुनिक प्रासंगिकता क्या है?",
        "options_hi": ["नारी शक्ति जागरण", "युद्धनीति", "चिकित्सा विज्ञान", "कृषि विज्ञान"],
        "answer_hi": "नारी शक्ति जागरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "विश्पला किस विषय में प्रेरणा देती है?",
        "options_hi": ["समस्या समाधान में", "धनोपार्जन में", "सौन्दर्य वर्धन में", "विद्या प्राप्ति में"],
        "answer_hi": "समस्या समाधान में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "विश्पला का चरित्र क्या प्रतिबिम्बित करता है?",
        "options_hi": ["वैदिक स्त्रियों की स्वतंत्रता", "वैदिक स्त्रियों की गृहबद्धता", "वैदिक स्त्रियों की अशिक्षितता", "वैदिक स्त्रियों की दरिद्रता"],
        "answer_hi": "वैदिक स्त्रियों की स्वतंत्रता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "विश्पला कैसे युद्धभूमि पर फिर खड़ी हुई?",
        "options_hi": ["अदम्य इच्छा से", "बलात्कार से", "अनिच्छा से", "भय से"],
        "answer_hi": "अदम्य इच्छा से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "विश्पला की कथा किसका उदाहरण है?",
        "options_hi": ["दिव्य अनुग्रह का", "मानव प्रयत्न का", "दैवयोग का", "भाग्यवशता का"],
        "answer_hi": "दिव्य अनुग्रह का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "विश्पला किसका साक्षात् प्रतिरूप है?",
        "options_hi": ["शौर्य का", "सौन्दर्य का", "धैर्य का", "विद्या का"],
        "answer_hi": "शौर्य का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "विश्पला की कथा का सांस्कृतिक महत्व क्या है?",
        "options_hi": ["भारतीय स्त्रियों का गौरव", "भारतीय युद्धकला का विकास", "भारतीय धर्म का प्रसार", "भारतीय कला की उन्नति"],
        "answer_hi": "भारतीय स्त्रियों का गौरव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "विश्पला कैसे ऐतिहासिक महत्व रखती है?",
        "options_hi": ["पहली दत्तचरित्रा", "पहली राज्ञी", "पहली ऋषिपत्नी", "पहली कवयित्री"],
        "answer_hi": "पहली दत्तचरित्रा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "विश्पला का उपचार क्या सूचित करता है?",
        "options_hi": ["प्राचीन चिकित्सा विज्ञान", "प्राचीन युद्ध विज्ञान", "प्राचीन ज्योतिष विज्ञान", "प्राचीन वास्तु विज्ञान"],
        "answer_hi": "प्राचीन चिकित्सा विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "विश्पला किसकी प्रतिमूर्ति है?",
        "options_hi": ["अविचल धैर्य की", "अपार सौन्दर्य की", "असीम धन की", "अनन्त विद्या की"],
        "answer_hi": "अविचल धैर्य की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "विश्पला की कथा की नैतिक शिक्षा क्या है?",
        "options_hi": ["विपत्ति में भी धैर्य न छोड़ो", "धन ही सब कुछ है", "सौभाग्य ही जीवन है", "दैव ही सब कुछ करता है"],
        "answer_hi": "विपत्ति में भी धैर्य न छोड़ो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "विश्पला की कथा किस प्रकरण में समाविष्ट है?",
        "options_hi": ["ऐतिहासिक गद्य में", "काव्य में", "नाटक में", "उपन्यास में"],
        "answer_hi": "ऐतिहासिक गद्य में",
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