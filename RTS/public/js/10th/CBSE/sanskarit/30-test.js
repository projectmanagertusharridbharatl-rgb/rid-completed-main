const questions = [
    {
        "num": 1,
        "question_hi": "विश्पला नाम की व्युत्पत्ति कैसे हुई?",
        "options_hi": ["वि + श्पल", "विश् + पाल", "विश् + पला", "वि + श्वला"],
        "answer_hi": "वि + श्पल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "विश्पला का वर्णन किस वेद में मिलता है?",
        "options_hi": ["ऋग्वेद में", "यजुर्वेद में", "सामवेद में", "अथर्ववेद में"],
        "answer_hi": "ऋग्वेद में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "विश्पला के पिता का नाम क्या था?",
        "options_hi": ["वृषागि", "कवष", "इलूष", "भार्गव"],
        "answer_hi": "वृषागि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "विश्पला के पति का नाम क्या था?",
        "options_hi": ["कवष ऐलूष", "वृषागि", "भार्गव", "वसिष्ठ"],
        "answer_hi": "कवष ऐलूष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "विश्पला ने किस कुल में जन्म लिया?",
        "options_hi": ["भार्गव कुल", "इक्ष्वाकु कुल", "यदु कुल", "कुरु कुल"],
        "answer_hi": "भार्गव कुल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "विश्पला का युद्ध में क्या नष्ट हुआ?",
        "options_hi": ["घुटना", "पैर", "बाजू", "आँख"],
        "answer_hi": "पैर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "विश्पला को कृत्रिम पैर किसने दिया?",
        "options_hi": ["अश्विनी कुमार", "इंद्र", "वरुण", "मरुत"],
        "answer_hi": "अश्विनी कुमार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "अश्विनी कुमार कौन थे?",
        "options_hi": ["देव वैद्य", "देव योद्धा", "देव ऋषि", "देवराज के पुत्र"],
        "answer_hi": "देव वैद्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "विश्पला का पैर किससे बना था?",
        "options_hi": ["लोहे से", "लकड़ी से", "सोने से", "चाँदी से"],
        "answer_hi": "लोहे से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "विश्पला कैसी थी?",
        "options_hi": ["वीरांगना", "शांत स्त्री", "कवयित्री", "नर्तकी"],
        "answer_hi": "वीरांगना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "विश्पला की कथा किस मंडल में वर्णित है?",
        "options_hi": ["प्रथम मंडल", "दशम मंडल", "अष्टम मंडल", "नवम मंडल"],
        "answer_hi": "प्रथम मंडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "विश्पला किसकी उपासिका थी?",
        "options_hi": ["अश्विनी कुमारों की", "इंद्र की", "अग्नि की", "सोम की"],
        "answer_hi": "अश्विनी कुमारों की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "विश्पला के सूक्त के ऋषि कौन हैं?",
        "options_hi": ["कवष ऐलूष", "वृषागि", "विश्वामित्र", "वामदेव"],
        "answer_hi": "कवष ऐलूष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "विश्पला की कथा कितनी ऋचाओं में वर्णित है?",
        "options_hi": ["चार", "आठ", "बारह", "सोलह"],
        "answer_hi": "चार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "विश्पला किसकी पौत्री थी?",
        "options_hi": ["पृथु की", "मनु की", "इक्ष्वाकु की", "ययाति की"],
        "answer_hi": "पृथु की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "विश्पला के युद्ध वर्णन की किसने स्तुति की?",
        "options_hi": ["ऋषियों ने", "देवताओं ने", "मनुष्यों ने", "गंधर्वों ने"],
        "answer_hi": "ऋषियों ने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "विश्पला कैसे युद्ध करती थी?",
        "options_hi": ["रथ से", "घोड़े से", "हाथी से", "पैदल"],
        "answer_hi": "रथ से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "विश्पला का शौर्य क्या प्रमाणित करता है?",
        "options_hi": ["वैदिक कालीन स्त्री शक्ति", "वैदिक कालीन युद्ध कला", "वैदिक कालीन चिकित्सा", "वैदिक कालीन कृषि"],
        "answer_hi": "वैदिक कालीन स्त्री शक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "विश्पला किस राजा की सभा में उपस्थित हुई?",
        "options_hi": ["वृषागि की", "पृथु की", "मनु की", "इक्ष्वाकु की"],
        "answer_hi": "वृषागि की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "विश्पला की प्रसिद्धि कहाँ तक फैली?",
        "options_hi": ["सभी देशों में", "केवल भारत में", "केवल आर्यावर्त में", "केवल वैदिक काल में"],
        "answer_hi": "सभी देशों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "विश्पला कृत्रिम पैर से क्या करने में सक्षम हुई?",
        "options_hi": ["युद्ध करना", "नृत्य करना", "दौड़ना", "उछलना"],
        "answer_hi": "युद्ध करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "विश्पला किसका प्रथम उदाहरण है?",
        "options_hi": ["यांत्रिक अंग का", "दिव्य चिकित्सा का", "स्त्री योद्धा का", "ऋषि पत्नी का"],
        "answer_hi": "यांत्रिक अंग का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "विश्पला के आख्यान की रचना काल क्या है?",
        "options_hi": ["सामवेद काल", "ऋग्वेद काल", "ब्राह्मण काल", "उपनिषद् काल"],
        "answer_hi": "ऋग्वेद काल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "विश्पला किस वंश में उत्पन्न हुई?",
        "options_hi": ["भृगु वंश", "सूर्य वंश", "चंद्र वंश", "यदु वंश"],
        "answer_hi": "भृगु वंश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "विश्पला का पति कवष कौन था?",
        "options_hi": ["मंत्र द्रष्टा", "राजा", "योद्धा", "वैद्य"],
        "answer_hi": "मंत्र द्रष्टा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "विश्पला का युद्ध किसके साथ था?",
        "options_hi": ["डाकुओं के साथ", "राक्षसों के साथ", "अन्य जनपदों के साथ", "वन्य पशुओं के साथ"],
        "answer_hi": "डाकुओं के साथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "विश्पला की कथा क्या सूचित करती है?",
        "options_hi": ["प्राचीन काल में स्त्रियों की स्वतंत्रता", "प्राचीन काल में युद्ध नीति", "प्राचीन काल में धर्म", "प्राचीन काल में कला"],
        "answer_hi": "प्राचीन काल में स्त्रियों की स्वतंत्रता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "विश्पला ने कैसा धैर्य प्रदर्शित किया?",
        "options_hi": ["अपूर्व", "सामान्य", "क्षणिक", "दिग्भ्रमित"],
        "answer_hi": "अपूर्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "विश्पला का उपचार कैसे हृदयस्पर्शी था?",
        "options_hi": ["दैवीय सहायता से", "मानवीय प्रयत्न से", "ओषधि प्रयोग से", "मंत्र प्रभाव से"],
        "answer_hi": "दैवीय सहायता से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "विश्पला किसकी प्रतिमूर्ति है?",
        "options_hi": ["अदम्य साहस की", "अनुपम सौंदर्य की", "अपार विद्या की", "असीम धन की"],
        "answer_hi": "अदम्य साहस की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "विश्पला का कृत्रिम अंग क्या सूचित करता है?",
        "options_hi": ["प्राचीन चिकित्सा विज्ञान", "प्राचीन युद्ध तंत्र", "प्राचीन शिल्प कला", "प्राचीन यंत्र विज्ञान"],
        "answer_hi": "प्राचीन चिकित्सा विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "विश्पला ने कैसे यश प्राप्त किया?",
        "options_hi": ["वीर कर्म से", "सौंदर्य से", "धन दान से", "विद्या से"],
        "answer_hi": "वीर कर्म से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "विश्पला का चरित्र किसका उदाहरण है?",
        "options_hi": ["नारी शक्ति का", "पुरुष बल का", "बाल साहस का", "वृद्ध धैर्य का"],
        "answer_hi": "नारी शक्ति का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "विश्पला किसकी प्रेरणादायी आख्यान है?",
        "options_hi": ["विकलांग जनों की", "स्वस्थ जनों की", "युवतियों की", "वृद्धों की"],
        "answer_hi": "विकलांग जनों की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "विश्पला का पुनरुत्थान कैसे संभव हुआ?",
        "options_hi": ["अश्विनी कुमारों की कृपा से", "स्वप्रयत्न से", "पति की सहायता से", "पिता की सहायता से"],
        "answer_hi": "अश्विनी कुमारों की कृपा से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "विश्पला कैसे युद्धभूमि में लौटी?",
        "options_hi": ["नए उत्साह से", "भय से", "बलात्कार से", "अनिच्छा से"],
        "answer_hi": "नए उत्साह से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "विश्पला की कथा क्या प्रतिपादित करती है?",
        "options_hi": ["अवरोध से उद्धार की शक्ति", "धन का महत्व", "रूप की आवश्यकता", "बल की प्रधानता"],
        "answer_hi": "अवरोध से उद्धार की शक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "विश्पला की ऐतिहासिकता किसकी है?",
        "options_hi": ["वैदिक युग की", "महाभारत युग की", "रामायण युग की", "मध्य युग की"],
        "answer_hi": "वैदिक युग की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "विश्पला का वर्णन कैसे प्राप्त होता है?",
        "options_hi": ["ऋग्वेदीय मंत्रों में", "पुराणों में", "इतिहास में", "काव्यों में"],
        "answer_hi": "ऋग्वेदीय मंत्रों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "विश्पला कैसी स्त्री थी?",
        "options_hi": ["स्वतंत्र चेता", "परतंत्र चित्ता", "भीरु हृदया", "लज्जाशीला"],
        "answer_hi": "स्वतंत्र चेता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "विश्पला की युद्धकला कैसे वर्णित है?",
        "options_hi": ["अतुलनीय", "सामान्य", "अल्प", "अविकसित"],
        "answer_hi": "अतुलनीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "विश्पला किसका प्रतीक है?",
        "options_hi": ["विजय का", "पराजय का", "समर्पण का", "निवृत्ति का"],
        "answer_hi": "विजय का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "विश्पला की कथा कैसे प्रचारित हुई?",
        "options_hi": ["मौखिक परंपरा से", "लिखित ग्रंथों से", "चित्रकला से", "नाटकों से"],
        "answer_hi": "मौखिक परंपरा से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "विश्पला किसका प्रथम दृष्टांत है?",
        "options_hi": ["यांत्रिक चिकित्सा का", "दिव्य चमत्कार का", "स्वाभाविक उपचार का", "मानवीय साहस का"],
        "answer_hi": "यांत्रिक चिकित्सा का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "विश्पला की कथा का सांस्कृतिक मूल्य क्या है?",
        "options_hi": ["भारतीय स्त्रियों का गौरव", "भारतीय युद्धकला", "भारतीय धर्म", "भारतीय कला"],
        "answer_hi": "भारतीय स्त्रियों का गौरव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "विश्पला ने समाज पर कैसे प्रभाव डाला?",
        "options_hi": ["आदर्श स्थापना से", "धन दान से", "राज्य शासन से", "विद्या प्रचार से"],
        "answer_hi": "आदर्श स्थापना से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "विश्पला की कथा किस विषय में ज्ञान देती है?",
        "options_hi": ["वैदिक समाज के", "वैदिक यज्ञ के", "वैदिक कृषि के", "वैदिक वाणिज्य के"],
        "answer_hi": "वैदिक समाज के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "विश्पला किसकी मातृका हैं?",
        "options_hi": ["भारतीय वीरांगनाओं की", "भारतीय रानियों की", "भारतीय देवियों की", "भारतीय ऋषि पत्नियों की"],
        "answer_hi": "भारतीय वीरांगनाओं की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "विश्पला के नाम का अर्थ क्या है?",
        "options_hi": ["विशेष रक्षिका", "विशाल नेत्रा", "विशिष्ट गामिनी", "विश्रांत चित्ता"],
        "answer_hi": "विशेष रक्षिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "विश्पला कैसे युद्ध में भाग लेती थी?",
        "options_hi": ["स्वेच्छा से", "बलात्कार से", "पति प्रेरणा से", "पिता आदेश से"],
        "answer_hi": "स्वेच्छा से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "विश्पला की कथा क्या शिक्षा देती है?",
        "options_hi": ["अवरोधों को पार कर आगे बढ़ो", "धन संचित करो", "सुख भोगो", "शांति करो"],
        "answer_hi": "अवरोधों को पार कर आगे बढ़ो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "विश्पला किसका प्रमाण है?",
        "options_hi": ["वैदिक स्त्री स्वतंत्रता का", "वैदिक स्त्री शिक्षा का", "वैदिक स्त्री धन का", "वैदिक स्त्री सौंदर्य का"],
        "answer_hi": "वैदिक स्त्री स्वतंत्रता का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "विश्पला का अवरोध क्या था?",
        "options_hi": ["शारीरिक अंग हानि", "धनाभाव", "सामाजिक बंधन", "राजनीतिक विरोध"],
        "answer_hi": "शारीरिक अंग हानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "विश्पला ने अपने अवरोध को कैसे पार किया?",
        "options_hi": ["दैवीय सहायता से", "स्वप्रयत्न से", "पर सहायता से", "यंत्र सहायता से"],
        "answer_hi": "दैवीय सहायता से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "विश्पला की कथा की आधुनिक प्रासंगिकता क्या है?",
        "options_hi": ["नारी सशक्तीकरण", "युद्ध विरोध", "चिकित्सा विकास", "समाज सुधार"],
        "answer_hi": "नारी सशक्तीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "विश्पला किसका प्रतिरूप है?",
        "options_hi": ["अदम्य इच्छा शक्ति का", "अपार सौंदर्य का", "असीम बल का", "अनंत धन का"],
        "answer_hi": "अदम्य इच्छा शक्ति का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "विश्पला की कथा कैसे ऐतिहासिक है?",
        "options_hi": ["वैदिक ग्रंथ में उल्लेख से", "पुराण में वर्णन से", "इतिहास में प्रमाण से", "काव्य में अभिव्यक्ति से"],
        "answer_hi": "वैदिक ग्रंथ में उल्लेख से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "विश्पला ने कैसा साहस प्रदर्शित किया?",
        "options_hi": ["लोकोत्तर", "सामान्य", "कृत्रिम", "अस्थिर"],
        "answer_hi": "लोकोत्तर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "विश्पला का पुनरुद्धार क्या सिद्ध करता है?",
        "options_hi": ["दैवी कृपा की शक्ति", "मानव प्रयत्न की सीमा", "यंत्र विज्ञान का विकास", "सामाजिक सहयोग का महत्व"],
        "answer_hi": "दैवी कृपा की शक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "विश्पला किसकी प्रेरणा है?",
        "options_hi": ["युवतियों की", "पुरुषों की", "बालकों की", "वृद्धों की"],
        "answer_hi": "युवतियों की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "विश्पला की कथा क्या प्रतिपादिका है?",
        "options_hi": ["नारी शक्ति की", "पुरुष बल की", "दैवी कृपा की", "भाग्यवशता की"],
        "answer_hi": "नारी शक्ति की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "विश्पला युद्ध कर्म में कैसे निपुण हुई?",
        "options_hi": ["अभ्यास से", "जन्म से", "दैव से", "योग बल से"],
        "answer_hi": "अभ्यास से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "विश्पला के आख्यान का वक्ता कौन है?",
        "options_hi": ["उसका पति", "उसका पिता", "स्वयं", "ऋषि"],
        "answer_hi": "उसका पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "विश्पला ने किसकी सभा में गौरव प्राप्त किया?",
        "options_hi": ["वृषागि की", "पृथु की", "इंद्र की", "अश्विनी कुमारों की"],
        "answer_hi": "वृषागि की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "विश्पला की कथा की मूल भावना क्या है?",
        "options_hi": ["विजयश्री", "धनलाभ", "यश प्राप्ति", "सौंदर्य वर्धन"],
        "answer_hi": "विजयश्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "विश्पला कैसे युद्ध में प्रविष्ट हुई?",
        "options_hi": ["सेनापति रूप में", "साधारण योद्धा रूप में", "रथ चालक रूप में", "धनुर्धर रूप में"],
        "answer_hi": "सेनापति रूप में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "विश्पला की कथा किसका प्रभाव दर्शाती है?",
        "options_hi": ["वैदिक शिक्षा का", "वैदिक संस्कृति का", "वैदिक अर्थव्यवस्था का", "वैदिक राजनीति का"],
        "answer_hi": "वैदिक संस्कृति का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "विश्पला कैसी सेनानी थी?",
        "options_hi": ["निपुण", "अनुभवहीन", "भीरु", "असावधान"],
        "answer_hi": "निपुण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "विश्पला की कथा कैसे सुरक्षित रही?",
        "options_hi": ["वेद मंत्रों में", "पुराणों में", "इतिहास ग्रंथों में", "लोक कथाओं में"],
        "answer_hi": "वेद मंत्रों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "विश्पला किसका आदर्श है?",
        "options_hi": ["वीरांगनाओं का", "गृहिणियों का", "विदुषियों का", "नर्तकियों का"],
        "answer_hi": "वीरांगनाओं का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "विश्पला का युद्ध किसके हित के लिए था?",
        "options_hi": ["जनपद के", "स्वकुटुंब के", "स्वयं के", "मित्रों के"],
        "answer_hi": "जनपद के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "विश्पला कैसे प्रसिद्ध हुई?",
        "options_hi": ["वीर कर्म से", "सौंदर्य से", "विद्या से", "धन से"],
        "answer_hi": "वीर कर्म से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "विश्पला का कृत्रिम अंग क्या प्रदर्शित करता है?",
        "options_hi": ["प्राचीन प्रत्यारोपण कला", "प्राचीन अलंकार कला", "प्राचीन वास्तु कला", "प्राचीन चित्र कला"],
        "answer_hi": "प्राचीन प्रत्यारोपण कला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "विश्पला की प्रमुख विशेषता क्या है?",
        "options_hi": ["अविचल धैर्य", "अपार सौंदर्य", "असीम धन", "अनंत ज्ञान"],
        "answer_hi": "अविचल धैर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "विश्पला की कथा क्या उद्घोषित करती है?",
        "options_hi": ["नारी शक्ति की विजय", "पुरुष बल की प्राबल्य", "दैवी कृपा का महत्व", "भाग्य की प्रधानता"],
        "answer_hi": "नारी शक्ति की विजय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "विश्पला कैसे युद्धभूमि से निवृत्त हुई?",
        "options_hi": ["अपांगत्य से", "वय से", "भय से", "आज्ञा से"],
        "answer_hi": "अपांगत्य से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "विश्पला कैसे पुनः युद्ध के लिए प्रेरित हुई?",
        "options_hi": ["कृत्रिम पैर प्राप्ति से", "धन प्राप्ति से", "यश प्राप्ति से", "बल प्राप्ति से"],
        "answer_hi": "कृत्रिम पैर प्राप्ति से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "विश्पला की कथा क्या संदेश वहन करती है?",
        "options_hi": ["विपत्ति में धैर्य मत त्यागो", "धन ही सब कुछ है", "सौंदर्य ही बल है", "दैव ही गति है"],
        "answer_hi": "विपत्ति में धैर्य मत त्यागो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "विश्पला किसकी प्रतिनिधि है?",
        "options_hi": ["वैदिक स्त्रियों की", "वैदिक पुरुषों की", "वैदिक ऋषियों की", "वैदिक देवताओं की"],
        "answer_hi": "वैदिक स्त्रियों की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "विश्पला की कथा कैसे आधुनिक है?",
        "options_hi": ["विकलांग सशक्तीकरण में", "युद्ध विरोध में", "धर्म प्रचार में", "राजनीति में"],
        "answer_hi": "विकलांग सशक्तीकरण में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "विश्पला ने कैसा पराक्रम किया?",
        "options_hi": ["अद्भुत", "साधारण", "लघु", "असफल"],
        "answer_hi": "अद्भुत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "विश्पला के आख्यान का प्रमुख तत्व क्या है?",
        "options_hi": ["आशावाद", "निराशावाद", "भाग्यवाद", "दैववाद"],
        "answer_hi": "आशावाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "विश्पला किसका उत्कृष्ट उदाहरण है?",
        "options_hi": ["नारी साहस का", "पुरुष वीरता का", "बाल प्रतिभा का", "वृद्ध ज्ञान का"],
        "answer_hi": "नारी साहस का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "विश्पला की कथा कैसे प्रभावशालिनी है?",
        "options_hi": ["मानवीय संवेदना से", "युद्ध वर्णन से", "दैवीय चमत्कार से", "ऐतिहासिक तथ्य से"],
        "answer_hi": "मानवीय संवेदना से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "विश्पला कैसे स्मरणीय है?",
        "options_hi": ["वीरांगना रूप में", "देवी रूप में", "मातृ रूप में", "ऋषि पत्नी रूप में"],
        "answer_hi": "वीरांगना रूप में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "विश्पला की कथा क्या प्रतिपादित करती है?",
        "options_hi": ["शारीरिक अंगहानि से भी विजय", "धन का महत्व", "रूप की आवश्यकता", "बल की प्राबल्य"],
        "answer_hi": "शारीरिक अंगहानि से भी विजय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "विश्पला किसकी प्रतीकात्मकता है?",
        "options_hi": ["अजेय मनोबल की", "अपरिमित धन की", "असीम सौंदर्य की", "अनंत विद्या की"],
        "answer_hi": "अजेय मनोबल की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "विश्पला की कथा कैसे शिक्षाप्रद है?",
        "options_hi": ["अवसाद त्याग कर संघर्ष करना", "धन संचित करना", "सुख भोगना", "शांति प्राप्त करना"],
        "answer_hi": "अवसाद त्याग कर संघर्ष करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "विश्पला किसके द्वारा पुरस्कृत हुई?",
        "options_hi": ["देवताओं द्वारा", "मनुष्यों द्वारा", "ऋषियों द्वारा", "सभी द्वारा"],
        "answer_hi": "सभी द्वारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "विश्पला की कथा क्या प्रेरित करती है?",
        "options_hi": ["असंभव को संभव करना", "धन प्राप्त करना", "सौंदर्य बढ़ाना", "यश प्राप्त करना"],
        "answer_hi": "असंभव को संभव करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "विश्पला कैसी नायिका है?",
        "options_hi": ["ऐतिहासिक", "पौराणिक", "काल्पनिक", "लौकिक"],
        "answer_hi": "ऐतिहासिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "विश्पला की कथा का उज्ज्वल पक्ष क्या है?",
        "options_hi": ["नारी शक्ति का प्रदर्शन", "युद्धकला का वर्णन", "दैवी कृपा की महिमा", "मानवीय दुर्बलता का प्रदर्शन"],
        "answer_hi": "नारी शक्ति का प्रदर्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "विश्पला कैसे वैदिक साहित्य में स्थान पाती है?",
        "options_hi": ["वीर रस प्रधान कथा रूप में", "शृंगार रस कथा रूप में", "करुण रस कथा रूप में", "हास्य रस कथा रूप में"],
        "answer_hi": "वीर रस प्रधान कथा रूप में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "विश्पला की कथा का मुख्य उद्देश्य क्या है?",
        "options_hi": ["स्त्री शक्ति की महिमा प्रकट करना", "युद्ध की निंदा करना", "धर्म प्रचार करना", "राज्य विस्तार करना"],
        "answer_hi": "स्त्री शक्ति की महिमा प्रकट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "विश्पला किसका आदर्श चरित्र है?",
        "options_hi": ["सभी भारतीयों का", "केवल स्त्रियों का", "केवल पुरुषों का", "केवल बालकों का"],
        "answer_hi": "सभी भारतीयों का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "विश्पला का कृत्रिम पैर क्या प्रमाणित करता है?",
        "options_hi": ["प्राचीन चिकित्सा शास्त्र की उन्नति", "प्राचीन लौह शिल्प का विकास", "प्राचीन यंत्र विज्ञान की प्रगति", "प्राचीन वास्तु कला की समृद्धि"],
        "answer_hi": "प्राचीन चिकित्सा शास्त्र की उन्नति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "विश्पला ने कैसे धर्मयुद्ध में भाग लिया?",
        "options_hi": ["धर्म रक्षा के लिए", "धन लाभ के लिए", "यश प्राप्ति के लिए", "राज्य लिप्सा के लिए"],
        "answer_hi": "धर्म रक्षा के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "विश्पला की कथा किसकी सांस्कृतिक धरोहर है?",
        "options_hi": ["भारतीय वीर परंपरा की", "भारतीय युद्ध परंपरा की", "भारतीय धर्म परंपरा की", "भारतीय कला परंपरा की"],
        "answer_hi": "भारतीय वीर परंपरा की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "विश्पला ने कैसा सामर्थ्य प्रदर्शित किया?",
        "options_hi": ["शारीरिक अंगहानि से भी अपराजेयता", "धनाभाव में सुख", "अज्ञान में ज्ञान", "दुर्बलता में बल"],
        "answer_hi": "शारीरिक अंगहानि से भी अपराजेयता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "विश्पला का आख्यान किस विषय पर प्रकाश डालता है?",
        "options_hi": ["ऐतिहासिक गद्य विषय पर", "काव्य विषय पर", "नाटक विषय पर", "उपन्यास विषय पर"],
        "answer_hi": "ऐतिहासिक गद्य विषय पर",
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