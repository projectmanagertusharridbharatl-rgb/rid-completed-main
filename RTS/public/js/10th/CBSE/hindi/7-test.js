const questions = [
    {
        "num": 1,
        "question_hi": "'मंत्र' कहानी के लेखक कौन हैं?",
        "options_hi": ["प्रेमचंद", "यशपाल", "जैनेन्द्र", "अज्ञेय"],
        "answer_hi": "यशपाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "यशपाल किस साहित्यिक आंदोलन से जुड़े थे?",
        "options_hi": ["छायावाद", "प्रगतिवाद", "प्रयोगवाद", "नई कविता"],
        "answer_hi": "प्रगतिवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "'मंत्र' कहानी किस संग्रह में संकलित है?",
        "options_hi": ["ज्ञानदान", "धर्मयुद्ध", "उत्तराधिकार", "सच बोलने की भूल"],
        "answer_hi": "ज्ञानदान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "कहानी का मुख्य पात्र कौन है?",
        "options_hi": ["दीवान साहब", "सोहन सिंह", "जग्गा", "गुरुदेव"],
        "answer_hi": "दीवान साहब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "दीवान साहब का पेशा क्या है?",
        "options_hi": ["डॉक्टर", "वकील", "शिक्षक", "क्लर्क"],
        "answer_hi": "क्लर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "दीवान साहब को किस बीमारी से पीड़ित बताया गया है?",
        "options_hi": ["टीबी", "मलेरिया", "कैंसर", "दमा"],
        "answer_hi": "टीबी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "दीवान साहब किसके पास इलाज के लिए जाते हैं?",
        "options_hi": ["डॉक्टर के पास", "वैद्य के पास", "गुरुदेव के पास", "साधु के पास"],
        "answer_hi": "गुरुदेव के पास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "गुरुदेव दीवान साहब को क्या देते हैं?",
        "options_hi": ["दवा", "मंत्र", "ताबीज", "जड़ी-बूटी"],
        "answer_hi": "मंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "मंत्र का उद्देश्य क्या था?",
        "options_hi": ["बीमारी ठीक करना", "धन प्राप्त करना", "शत्रु का नाश", "सफलता पाना"],
        "answer_hi": "बीमारी ठीक करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "दीवान साहब के साथ कौन रहता है?",
        "options_hi": ["पत्नी", "बेटा", "भाई", "माँ"],
        "answer_hi": "पत्नी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "कहानी में किस सामाजिक बुराई पर प्रहार किया गया है?",
        "options_hi": ["अंधविश्वास", "गरीबी", "भ्रष्टाचार", "जातिवाद"],
        "answer_hi": "अंधविश्वास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "दीवान साहब की आर्थिक स्थिति कैसी है?",
        "options_hi": ["संपन्न", "मध्यम", "गरीब", "अति गरीब"],
        "answer_hi": "गरीब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "गुरुदेव किस प्रकार के व्यक्ति हैं?",
        "options_hi": ["सच्चे संत", "ठग", "वैद्य", "पुजारी"],
        "answer_hi": "ठग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "दीवान साहब का व्यवहार कैसा है?",
        "options_hi": ["विवेकशील", "अंधविश्वासी", "क्रोधी", "उदासीन"],
        "answer_hi": "अंधविश्वासी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "कहानी का संदेश क्या है?",
        "options_hi": ["विज्ञान पर विश्वास", "अंधविश्वास से बचें", "डॉक्टर से इलाज कराएं", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "दीवान साहब की पत्नी का नाम क्या है?",
        "options_hi": ["सुशीला", "रमा", "गौरी", "नाम नहीं बताया"],
        "answer_hi": "नाम नहीं बताया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "गुरुदेव कहाँ रहते हैं?",
        "options_hi": ["मंदिर में", "आश्रम में", "झोंपड़ी में", "हवेली में"],
        "answer_hi": "आश्रम में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "दीवान साहब को मंत्र के लिए क्या देना पड़ता है?",
        "options_hi": ["पैसा", "अनाज", "सोना", "भेंट"],
        "answer_hi": "पैसा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "कहानी में किस यथार्थ का चित्रण है?",
        "options_hi": ["ग्रामीण जीवन", "शहरी जीवन", "मध्यवर्गीय जीवन", "उच्चवर्गीय जीवन"],
        "answer_hi": "मध्यवर्गीय जीवन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "दीवान साहब का अंत कैसा होता है?",
        "options_hi": ["सुखद", "दुखद", "अनिश्चित", "रहस्यमय"],
        "answer_hi": "दुखद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "यशपाल का जन्म कब हुआ?",
        "options_hi": ["1900", "1903", "1906", "1909"],
        "answer_hi": "1903",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "दीवान साहब की उम्र क्या है?",
        "options_hi": ["30-35", "35-40", "40-45", "45-50"],
        "answer_hi": "35-40",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "गुरुदेव का असली उद्देश्य क्या है?",
        "options_hi": ["लोगों की मदद", "पैसा कमाना", "धर्म प्रचार", "समाज सुधार"],
        "answer_hi": "पैसा कमाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "कहानी की भाषा शैली कैसी है?",
        "options_hi": ["सरल", "जटिल", "आलंकारिक", "संस्कृतनिष्ठ"],
        "answer_hi": "सरल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "दीवान साहब का चरित्र कैसा है?",
        "options_hi": ["मजबूत", "कमजोर", "विवेकशील", "क्रांतिकारी"],
        "answer_hi": "कमजोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "यशपाल की मृत्यु कब हुई?",
        "options_hi": ["1965", "1970", "1975", "1976"],
        "answer_hi": "1976",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "दीवान साहब के कितने बच्चे हैं?",
        "options_hi": ["एक", "दो", "तीन", "कोई नहीं"],
        "answer_hi": "कोई नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "गुरुदेव का रूप-रंग कैसा है?",
        "options_hi": ["साधारण", "आकर्षक", "डरावना", "भव्य"],
        "answer_hi": "भव्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "दीवान साहब की पत्नी का व्यवहार कैसा है?",
        "options_hi": ["समझदार", "अंधविश्वासी", "उदासीन", "क्रोधी"],
        "answer_hi": "समझदार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "कहानी का मुख्य विषय क्या है?",
        "options_hi": ["प्रेम", "धर्म", "अंधविश्वास", "सामाजिक असमानता"],
        "answer_hi": "अंधविश्वास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "यशपाल का जन्म स्थान कहाँ है?",
        "options_hi": ["फिरोजपुर", "लाहौर", "दिल्ली", "इलाहाबाद"],
        "answer_hi": "फिरोजपुर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "दीवान साहब का निवास स्थान कहाँ है?",
        "options_hi": ["गाँव", "शहर", "कस्बा", "निर्धारित नहीं"],
        "answer_hi": "शहर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "गुरुदेव किस प्रकार का जीवन जीते हैं?",
        "options_hi": ["सादा", "भोगविलास", "तपस्या", "गरीब"],
        "answer_hi": "भोगविलास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "दीवान साहब किस प्रकार के कपड़े पहनते हैं?",
        "options_hi": ["सफेद", "काले", "फटे-पुराने", "नए"],
        "answer_hi": "फटे-पुराने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "कहानी में किस मनोवैज्ञानिक पक्ष पर प्रकाश डाला गया है?",
        "options_hi": ["भय", "लालच", "आशा", "निराशा"],
        "answer_hi": "आशा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "यशपाल की शिक्षा कहाँ हुई?",
        "options_hi": ["लाहौर", "दिल्ली", "इलाहाबाद", "कलकत्ता"],
        "answer_hi": "लाहौर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "दीवान साहब का स्वभाव कैसा है?",
        "options_hi": ["चंचल", "गंभीर", "हंसमुख", "उदास"],
        "answer_hi": "उदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "गुरुदेव के अनुयायी कैसे हैं?",
        "options_hi": ["कम", "अधिक", "मध्यम", "कोई नहीं"],
        "answer_hi": "अधिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "दीवान साहब की बीमारी कितने समय से है?",
        "options_hi": ["कुछ दिन", "कुछ महीने", "कुछ वर्ष", "निर्धारित नहीं"],
        "answer_hi": "कुछ वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "कहानी का अंत क्या दर्शाता है?",
        "options_hi": ["अंधविश्वास का परिणाम", "विज्ञान की जीत", "मानवीय मूर्खता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "यशपाल किस राजनीतिक विचारधारा से जुड़े थे?",
        "options_hi": ["समाजवाद", "कम्युनिज्म", "उदारवाद", "राष्ट्रवाद"],
        "answer_hi": "समाजवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "दीवान साहब के पड़ोसी कैसे हैं?",
        "options_hi": ["सहानुभूतिशील", "उदासीन", "शत्रुतापूर्ण", "मददगार"],
        "answer_hi": "उदासीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "गुरुदेव की आयु क्या है?",
        "options_hi": ["40-45", "45-50", "50-55", "55-60"],
        "answer_hi": "50-55",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "दीवान साहब का वेतन कितना है?",
        "options_hi": ["बहुत कम", "पर्याप्त", "अधिक", "निर्धारित नहीं"],
        "answer_hi": "बहुत कम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "कहानी में किस प्रकार का समाज दिखाया गया है?",
        "options_hi": ["प्रगतिशील", "पिछड़ा", "आधुनिक", "मिश्रित"],
        "answer_hi": "पिछड़ा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "यशपाल का मूल नाम क्या था?",
        "options_hi": ["यशपाल सिंह", "यशपाल शर्मा", "यशपाल जैन", "यशपाल वर्मा"],
        "answer_hi": "यशपाल सिंह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "दीवान साहब का शारीरिक रूप कैसा है?",
        "options_hi": ["मजबूत", "कमजोर", "सामान्य", "मोटा"],
        "answer_hi": "कमजोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "गुरुदेव का व्यवसाय क्या है?",
        "options_hi": ["संताई", "व्यापार", "कृषि", "नौकरी"],
        "answer_hi": "संताई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "दीवान साहब की दिनचर्या कैसी है?",
        "options_hi": ["व्यस्त", "निराश", "आशावान", "उदासीन"],
        "answer_hi": "निराश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "कहानी का नैतिक संदेश क्या है?",
        "options_hi": ["विज्ञान पर भरोसा", "अंधविश्वास से दूर", "डॉक्टर से इलाज", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "यशपाल ने किस पत्रिका का संपादन किया?",
        "options_hi": ["विप्लव", "हंस", "सरस्वती", "माधुरी"],
        "answer_hi": "विप्लव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "दीवान साहब का घर कैसा है?",
        "options_hi": ["बड़ा", "छोटा", "झोंपड़ी", "मकान"],
        "answer_hi": "छोटा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "गुरुदेव का आश्रम कहाँ है?",
        "options_hi": ["शहर में", "गाँव में", "जंगल में", "पहाड़ पर"],
        "answer_hi": "शहर में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "दीवान साहब का खान-पान कैसा है?",
        "options_hi": ["सादा", "वैभवपूर्ण", "अपर्याप्त", "संतुलित"],
        "answer_hi": "अपर्याप्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "कहानी में किसका प्रतीकात्मक उपयोग हुआ है?",
        "options_hi": ["मंत्र", "बीमारी", "गुरुदेव", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "यशपाल की प्रसिद्ध रचना कौन सी है?",
        "options_hi": ["झूठा सच", "दिव्या", "अप्सरा", "मनुष्य के रूप"],
        "answer_hi": "झूठा सच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "दीवान साहब का परिवार कैसा है?",
        "options_hi": ["बड़ा", "छोटा", "टूटा हुआ", "सुखी"],
        "answer_hi": "छोटा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "गुरुदेव की पोशाक कैसी है?",
        "options_hi": ["सफेद", "केसरिया", "काली", "रंगीन"],
        "answer_hi": "केसरिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "दीवान साहब का मानसिक स्तर कैसा है?",
        "options_hi": ["स्थिर", "अस्थिर", "प्रगतिशील", "रूढ़िवादी"],
        "answer_hi": "रूढ़िवादी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "कहानी का शीर्षक 'मंत्र' क्यों उचित है?",
        "options_hi": ["केंद्रीय विषय", "प्रतीकात्मक", "आकर्षक", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "यशपाल को किस पुरस्कार से सम्मानित किया गया?",
        "options_hi": ["साहित्य अकादमी", "ज्ञानपीठ", "पद्मश्री", "सोवियत लैंड"],
        "answer_hi": "साहित्य अकादमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "दीवान साहब का सपना क्या है?",
        "options_hi": ["स्वस्थ होना", "धनवान बनना", "पदोन्नति", "संतान प्राप्ति"],
        "answer_hi": "स्वस्थ होना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "गुरुदेव का वास्तविक चरित्र क्या है?",
        "options_hi": ["धोखेबाज", "सच्चा संत", "समाजसेवी", "वैद्य"],
        "answer_hi": "धोखेबाज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "दीवान साहब की पत्नी का व्यवसाय क्या है?",
        "options_hi": ["गृहिणी", "शिक्षिका", "दाई", "कामवाली"],
        "answer_hi": "गृहिणी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "कहानी में किस प्रकार का यथार्थवाद है?",
        "options_hi": ["सामाजिक", "मनोवैज्ञानिक", "आलोचनात्मक", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "यशपाल की भाषा शैली कैसी है?",
        "options_hi": ["सरल", "जटिल", "व्यंग्यपूर्ण", "आलंकारिक"],
        "answer_hi": "सरल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "दीवान साहब का जीवन कैसा है?",
        "options_hi": ["सुखी", "दुखी", "संघर्षपूर्ण", "शांतिपूर्ण"],
        "answer_hi": "दुखी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "गुरुदेव की शिक्षा कैसी है?",
        "options_hi": ["उच्च", "मध्यम", "निम्न", "अनपढ़"],
        "answer_hi": "मध्यम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "दीवान साहब का रहन-सहन कैसा है?",
        "options_hi": ["साधारण", "वैभवपूर्ण", "गरीबाना", "मध्यम"],
        "answer_hi": "गरीबाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "कहानी का सामाजिक महत्व क्या है?",
        "options_hi": ["अंधविश्वास उन्मूलन", "वैज्ञानिक दृष्टि", "सामाजिक जागरण", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "यशपाल ने किस आंदोलन में भाग लिया?",
        "options_hi": ["भारत छोड़ो", "सविनय अवज्ञा", "बंग-भंग", "स्वदेशी"],
        "answer_hi": "भारत छोड़ो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "दीवान साहब का धर्म क्या है?",
        "options_hi": ["हिंदू", "मुस्लिम", "सिख", "निर्धारित नहीं"],
        "answer_hi": "हिंदू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "गुरुदेव की आवाज कैसी है?",
        "options_hi": ["मधुर", "कर्कश", "गंभीर", "पतली"],
        "answer_hi": "मधुर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "दीवान साहब का स्वास्थ्य कैसा है?",
        "options_hi": ["अच्छा", "बिगड़ता", "स्थिर", "नाजुक"],
        "answer_hi": "बिगड़ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "कहानी में किस प्रकार का व्यंग्य है?",
        "options_hi": ["तीखा", "हल्का", "कटु", "मर्मस्पर्शी"],
        "answer_hi": "तीखा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "यशपाल की रचनाओं का मुख्य स्वर क्या है?",
        "options_hi": ["क्रांतिकारी", "रोमांटिक", "आध्यात्मिक", "रहस्यमय"],
        "answer_hi": "क्रांतिकारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "दीवान साहब का चेहरा कैसा है?",
        "options_hi": ["तेजस्वी", "उदास", "हँसमुख", "क्रोधित"],
        "answer_hi": "उदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "गुरुदेव का नाम क्या है?",
        "options_hi": ["स्वामी जी", "बाबा जी", "गुरुदेव", "नाम नहीं बताया"],
        "answer_hi": "नाम नहीं बताया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "दीवान साहब की दशा कैसी है?",
        "options_hi": ["दयनीय", "सामान्य", "अच्छी", "उत्साहपूर्ण"],
        "answer_hi": "दयनीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "कहानी का सांस्कृतिक महत्व क्या है?",
        "options_hi": ["परंपरा और आधुनिकता", "धर्म और विज्ञान", "गुरु और शिष्य", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "यशपाल की मृत्यु का कारण क्या था?",
        "options_hi": ["हृदयाघात", "कैंसर", "दुर्घटना", "बीमारी"],
        "answer_hi": "हृदयाघात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "दीवान साहब का वंश कैसा है?",
        "options_hi": ["उच्च", "मध्यम", "निम्न", "निर्धारित नहीं"],
        "answer_hi": "मध्यम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "गुरुदेव का प्रभाव किस पर है?",
        "options_hi": ["गरीब", "अमीर", "सभी", "मध्यवर्ग"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "दीवान साहब का बचपन कैसा था?",
        "options_hi": ["सुखी", "दुखी", "साधारण", "निर्धारित नहीं"],
        "answer_hi": "निर्धारित नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "कहानी में किस प्रकार का द्वंद्व है?",
        "options_hi": ["विज्ञान और अंधविश्वास", "गरीबी और अमीरी", "शिक्षा और अज्ञान", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "यशपाल की शैली पर किसका प्रभाव है?",
        "options_hi": ["प्रेमचंद", "चेखव", "गोर्की", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "दीवान साहब का भविष्य कैसा है?",
        "options_hi": ["उज्ज्वल", "अंधकारमय", "अनिश्चित", "सामान्य"],
        "answer_hi": "अंधकारमय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "गुरुदेव का जीवन दर्शन क्या है?",
        "options_hi": ["सादगी", "भोग", "त्याग", "धोखा"],
        "answer_hi": "धोखा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "दीवान साहब की आशा किस पर है?",
        "options_hi": ["डॉक्टर", "गुरुदेव", "भगवान", "स्वयं"],
        "answer_hi": "गुरुदेव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "कहानी का ऐतिहासिक महत्व क्या है?",
        "options_hi": ["सामाजिक परिवर्तन", "सांस्कृतिक संघर्ष", "वैचारिक संघर्ष", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "यशपाल का साहित्यिक उद्देश्य क्या था?",
        "options_hi": ["सामाजिक क्रांति", "साहित्यिक प्रयोग", "मनोरंजन", "आध्यात्मिकता"],
        "answer_hi": "सामाजिक क्रांति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "दीवान साहब का समाज में स्थान क्या है?",
        "options_hi": ["सम्मानित", "उपेक्षित", "साधारण", "नीचा"],
        "answer_hi": "उपेक्षित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "गुरुदेव का लक्ष्य क्या है?",
        "options_hi": ["समाज सेवा", "धन संग्रह", "मोक्ष प्राप्ति", "शिष्य बनाना"],
        "answer_hi": "धन संग्रह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "दीवान साहब का विवेक कैसा है?",
        "options_hi": ["तीक्ष्ण", "मंद", "अनुपस्थित", "विकसित"],
        "answer_hi": "मंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "कहानी में किस प्रकार की शैली है?",
        "options_hi": ["वर्णनात्मक", "संवादात्मक", "आत्मकथात्मक", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "यशपाल की रचनाओं में किसका चित्रण है?",
        "options_hi": ["मध्यवर्ग", "श्रमिक वर्ग", "किसान वर्ग", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "दीवान साहब का नाम क्या है?",
        "options_hi": ["दीवान चंद", "दीवान सिंह", "दीवान साहब", "नाम नहीं बताया"],
        "answer_hi": "दीवान साहब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "गुरुदेव का वास्तविक ज्ञान कैसा है?",
        "options_hi": ["गहरा", "सतही", "असली", "नकली"],
        "answer_hi": "नकली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "दीवान साहब की मृत्यु कैसे होती है?",
        "options_hi": ["बीमारी से", "दुर्घटना से", "आत्महत्या से", "हत्या से"],
        "answer_hi": "बीमारी से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "कहानी 'मंत्र' का स्थायी महत्व क्या है?",
        "options_hi": ["सामाजिक संदेश", "साहित्यिक मूल्य", "मनोवैज्ञानिक अंतर्दृष्टि", "सभी"],
        "answer_hi": "सभी",
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