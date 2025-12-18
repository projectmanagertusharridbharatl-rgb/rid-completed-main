const questions = [
    {
        "num": 1,
        "question_hi": "'पार्टनर' कहानी के लेखक कौन हैं?",
        "options_hi": ["प्रेमचंद", "जयशंकर प्रसाद", "महादेवी वर्मा", "निराला"],
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "प्रेमचंद का वास्तविक नाम क्या था?",
        "options_hi": ["धनपत राय श्रीवास्तव", "मुंशी प्रेमचंद", "धनपत राय", "नवाब राय"],
        "answer_hi": "धनपत राय श्रीवास्तव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "'पार्टनर' कहानी का मुख्य विषय क्या है?",
        "options_hi": ["दोस्ती और विश्वासघात", "प्रेम", "सामाजिक समस्या", "राजनीति"],
        "answer_hi": "दोस्ती और विश्वासघात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "कहानी में पार्टनरशिप किसके बीच है?",
        "options_hi": ["दो दोस्तों", "भाइयों", "पिता-पुत्र", "चाचा-भतीजा"],
        "answer_hi": "दो दोस्तों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "पार्टनरशिप किस व्यवसाय में है?",
        "options_hi": ["दुकान", "कपड़ा मिल", "खेती", "होटल"],
        "answer_hi": "दुकान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "दोनों पार्टनरों के नाम क्या हैं?",
        "options_hi": ["गोविंद और घनश्याम", "राम और श्याम", "मोहन और सोहन", "प्रेम और चंद"],
        "answer_hi": "गोविंद और घनश्याम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "दोनों पार्टनरों का व्यवहार कैसा है?",
        "options_hi": ["एक ईमानदार, एक धूर्त", "दोनों ईमानदार", "दोनों धूर्त", "दोनों आलसी"],
        "answer_hi": "एक ईमानदार, एक धूर्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "कौन सा पार्टनर ईमानदार है?",
        "options_hi": ["गोविंद", "घनश्याम", "दोनों", "कोई नहीं"],
        "answer_hi": "गोविंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "कौन सा पार्टनर धूर्त है?",
        "options_hi": ["घनश्याम", "गोविंद", "दोनों", "कोई नहीं"],
        "answer_hi": "घनश्याम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "पार्टनरशिप में धोखाधड़ी कौन करता है?",
        "options_hi": ["घनश्याम", "गोविंद", "दोनों", "बाहरी व्यक्ति"],
        "answer_hi": "घनश्याम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "धोखाधड़ी का तरीका क्या है?",
        "options_hi": ["हिसाब-किताब में गड़बड़ी", "सामान चोरी", "पैसे लेकर भागना", "दुकान बेचना"],
        "answer_hi": "हिसाब-किताब में गड़बड़ी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "गोविंद का चरित्र कैसा है?",
        "options_hi": ["सीधा-सादा", "चालाक", "आलसी", "क्रूर"],
        "answer_hi": "सीधा-सादा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "घनश्याम का चरित्र कैसा है?",
        "options_hi": ["धूर्त", "ईमानदार", "मेहनती", "भोला"],
        "answer_hi": "धूर्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "दुकान का प्रबंध कौन देखता है?",
        "options_hi": ["घनश्याम", "गोविंद", "दोनों", "नौकर"],
        "answer_hi": "घनश्याम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "हिसाब-किताब कौन रखता है?",
        "options_hi": ["घनश्याम", "गोविंद", "दोनों", "मुनीम"],
        "answer_hi": "घनश्याम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "गोविंद को धोखे का पता कैसे चलता है?",
        "options_hi": ["आकस्मिक रूप से", "किसी ने बताया", "स्वयं जाँच की", "सपने में"],
        "answer_hi": "आकस्मिक रूप से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "धोखे का पता चलने पर गोविंद की क्या प्रतिक्रिया है?",
        "options_hi": ["दुख", "क्रोध", "हँसी", "उदासीनता"],
        "answer_hi": "दुख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "घनश्याम अपना बचाव कैसे करता है?",
        "options_hi": ["झूठ बोलकर", "सच बोलकर", "माफी माँगकर", "भागकर"],
        "answer_hi": "झूठ बोलकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "कहानी का अंत कैसा होता है?",
        "options_hi": ["पार्टनरशिप टूटती", "मेल हो जाता", "दोबारा शुरू", "अनिश्चित"],
        "answer_hi": "पार्टनरशिप टूटती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "प्रेमचंद की भाषा शैली कैसी है?",
        "options_hi": ["सरल और व्यावहारिक", "कठिन", "आलंकारिक", "काव्यात्मक"],
        "answer_hi": "सरल और व्यावहारिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "यह कहानी किस काल की है?",
        "options_hi": ["बीसवीं सदी के आरंभ", "उन्नीसवीं सदी", "अठारहवीं सदी", "वर्तमान"],
        "answer_hi": "बीसवीं सदी के आरंभ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "कहानी का मुख्य संदेश क्या है?",
        "options_hi": ["विश्वासघात का दुख", "दोस्ती का महत्व", "ईमानदारी की जीत", "धोखे का परिणाम"],
        "answer_hi": "विश्वासघात का दुख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "गोविंद और घनश्याम की उम्र कैसी है?",
        "options_hi": ["युवा", "मध्यम", "बूढ़े", "अलग-अलग"],
        "answer_hi": "मध्यम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "दोनों पार्टनरों का पारिवारिक पृष्ठभूमि कैसी है?",
        "options_hi": ["मध्यम वर्ग", "गरीब", "अमीर", "अलग-अलग"],
        "answer_hi": "मध्यम वर्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "दुकान किस प्रकार की है?",
        "options_hi": ["सामान्य किराना", "कपड़े", "स्टेशनरी", "दवाई"],
        "answer_hi": "सामान्य किराना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "पार्टनरशिप कितने समय तक चलती है?",
        "options_hi": ["कई साल", "कुछ महीने", "एक साल", "दो साल"],
        "answer_hi": "कई साल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "धोखा कब शुरू होता है?",
        "options_hi": ["धीरे-धीरे", "एकदम से", "शुरू से", "अंत में"],
        "answer_hi": "धीरे-धीरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "गोविंद को संदेह कब होता है?",
        "options_hi": ["दुकान की स्थिति देखकर", "घनश्याम के व्यवहार से", "ग्राहकों से", "परिवार से"],
        "answer_hi": "दुकान की स्थिति देखकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "गोविंद हिसाब क्यों नहीं देखता?",
        "options_hi": ["घनश्याम पर विश्वास", "समझ नहीं", "आलस", "डर"],
        "answer_hi": "घनश्याम पर विश्वास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "घनश्याम पैसे कहाँ लगाता है?",
        "options_hi": ["अपने व्यक्तिगत खर्च", "घर", "दूसरा व्यापार", "शेयर बाजार"],
        "answer_hi": "अपने व्यक्तिगत खर्च",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "दुकान की आर्थिक स्थिति कैसी हो जाती है?",
        "options_hi": ["खराब", "अच्छी", "सामान्य", "बहुत अच्छी"],
        "answer_hi": "खराब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "गोविंद का घनश्याम पर विश्वास क्यों है?",
        "options_hi": ["पुरानी दोस्ती", "रिश्तेदारी", "मजबूरी", "भोलापन"],
        "answer_hi": "पुरानी दोस्ती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "घनश्याम का व्यवहार गोविंद के साथ कैसा है?",
        "options_hi": ["मीठा बोलना", "कठोर", "उदासीन", "डरपोक"],
        "answer_hi": "मीठा बोलना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "गोविंद के परिवार वाले क्या सोचते हैं?",
        "options_hi": ["घनश्याम पर शक", "गोविंद की मूर्खता", "कुछ नहीं", "सही सोचते"],
        "answer_hi": "घनश्याम पर शक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "घनश्याम के परिवार की स्थिति कैसी है?",
        "options_hi": ["अच्छी", "खराब", "सामान्य", "गरीब"],
        "answer_hi": "अच्छी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "गोविंद के परिवार की स्थिति कैसी है?",
        "options_hi": ["खराब होती", "अच्छी", "सामान्य", "अमीर"],
        "answer_hi": "खराब होती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "पार्टनरशिप टूटने का कारण क्या है?",
        "options_hi": ["अविश्वास", "आलस", "बीमारी", "बाहरी दबाव"],
        "answer_hi": "अविश्वास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "कहानी का नैतिक संदेश क्या है?",
        "options_hi": ["ईमानदारी सर्वोत्तम", "दोस्ती निभाना", "विश्वास न करना", "सावधान रहना"],
        "answer_hi": "ईमानदारी सर्वोत्तम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "प्रेमचंद ने इस कहानी में किस समस्या को दिखाया?",
        "options_hi": ["मानवीय स्वभाव", "आर्थिक शोषण", "सामाजिक झूठ", "पारिवारिक कलह"],
        "answer_hi": "मानवीय स्वभाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "गोविंद अंत में क्या करता है?",
        "options_hi": ["दुकान छोड़ता", "मुकदमा करता", "माफ करता", "बदला लेता"],
        "answer_hi": "दुकान छोड़ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "घनश्याम अंत में क्या करता है?",
        "options_hi": ["अकेले दुकान चलाता", "दुकान बेचता", "शहर छोड़ता", "पछताता"],
        "answer_hi": "अकेले दुकान चलाता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "कहानी की भाषा में क्या विशेषता है?",
        "options_hi": ["सामान्य बोलचाल", "संस्कृतनिष्ठ", "उर्दू मिश्रित", "अंग्रेजी मिश्रित"],
        "answer_hi": "सामान्य बोलचाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "पार्टनरशिप का समझौता कैसा था?",
        "options_hi": ["आधा-आधा", "60-40", "70-30", "कोई लिखित नहीं"],
        "answer_hi": "आधा-आधा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "गोविंद की पत्नी की भूमिका क्या है?",
        "options_hi": ["सलाहकार", "विरोधी", "सहयोगी", "उदासीन"],
        "answer_hi": "सलाहकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "घनश्याम की पत्नी कैसी है?",
        "options_hi": ["लालची", "ईमानदार", "साधारण", "शिक्षित"],
        "answer_hi": "लालची",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "दुकान का स्थान कहाँ है?",
        "options_hi": ["शहर में", "गाँव में", "कस्बे में", "मोहल्ले में"],
        "answer_hi": "कस्बे में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "ग्राहकों का व्यवहार कैसा है?",
        "options_hi": ["सामान्य", "शिकायती", "खुश", "कम"],
        "answer_hi": "सामान्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "नौकरों की स्थिति कैसी है?",
        "options_hi": ["वे भी शोषित", "खुश", "असंतुष्ट", "बदलते रहते"],
        "answer_hi": "वे भी शोषित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "प्रेमचंद की दृष्टि इस कहानी में कैसी है?",
        "options_hi": ["मानवीय", "आर्थिक", "सामाजिक", "नैतिक"],
        "answer_hi": "नैतिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "कहानी का शीर्षक क्यों उचित है?",
        "options_hi": ["पार्टनरशिप की कहानी", "दोस्ती की कहानी", "व्यापार की कहानी", "धोखे की कहानी"],
        "answer_hi": "पार्टनरशिप की कहानी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "गोविंद की सबसे बड़ी गलती क्या है?",
        "options_hi": ["अंधविश्वास", "आलस", "भोलापन", "क्रोध"],
        "answer_hi": "अंधविश्वास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "घनश्याम की सबसे बड़ी गलती क्या है?",
        "options_hi": ["लालच", "क्रूरता", "आलस", "मूर्खता"],
        "answer_hi": "लालच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "कहानी में समय का चित्रण कैसा है?",
        "options_hi": ["यथार्थवादी", "काल्पनिक", "ऐतिहासिक", "अतिशयोक्तिपूर्ण"],
        "answer_hi": "यथार्थवादी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "पात्रों का चरित्र-चित्रण कैसा है?",
        "options_hi": ["स्पष्ट और जीवंत", "धुंधला", "अतिशयोक्तिपूर्ण", "कमजोर"],
        "answer_hi": "स्पष्ट और जीवंत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "कहानी का वातावरण कैसा है?",
        "options_hi": ["सामान्य ग्रामीण", "शहरी", "ऐतिहासिक", "काल्पनिक"],
        "answer_hi": "सामान्य ग्रामीण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "प्रेमचंद की भाषा में कौन सी बोली झलकती है?",
        "options_hi": ["खड़ी बोली", "ब्रज भाषा", "अवधी", "भोजपुरी"],
        "answer_hi": "खड़ी बोली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "कहानी में संवादों की क्या भूमिका है?",
        "options_hi": ["चरित्र उजागर", "कहानी आगे बढ़ाना", "रोचकता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "गोविंद और घनश्याम की शिक्षा कैसी है?",
        "options_hi": ["साधारण", "उच्च", "अशिक्षित", "व्यापारिक"],
        "answer_hi": "साधारण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "कहानी में नैतिक मूल्यों पर क्या जोर है?",
        "options_hi": ["ईमानदारी", "वफादारी", "कर्तव्य", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "पार्टनरशिप टूटने का सबसे बड़ा कारण?",
        "options_hi": ["विश्वास की कमी", "पैसे की लालच", "अहंकार", "बाहरी प्रभाव"],
        "answer_hi": "विश्वास की कमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "गोविंद का भविष्य कैसा दिखता है?",
        "options_hi": ["अनिश्चित", "उज्ज्वल", "अंधकारमय", "सामान्य"],
        "answer_hi": "अनिश्चित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "घनश्याम का भविष्य कैसा दिखता है?",
        "options_hi": ["अनैतिक सफलता", "विफलता", "पछतावा", "सामान्य"],
        "answer_hi": "अनैतिक सफलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "कहानी में सामाजिक टिप्पणी क्या है?",
        "options_hi": ["मानवीय स्वभाव", "व्यापारिक नैतिकता", "दोस्ती की सीमा", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "प्रेमचंद की दृष्टि से यह कहानी क्या दर्शाती है?",
        "options_hi": ["मध्यवर्गीय जीवन", "ग्रामीण जीवन", "व्यापारिक जीवन", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "कहानी का कथानक कैसा है?",
        "options_hi": ["सरल और प्रवाहमय", "जटिल", "रहस्यमय", "उबाऊ"],
        "answer_hi": "सरल और प्रवाहमय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "गोविंद की आर्थिक स्थिति पर क्या प्रभाव पड़ता है?",
        "options_hi": ["बिगड़ती", "सुधरती", "सामान्य", "अचानक बेहतर"],
        "answer_hi": "बिगड़ती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "घनश्याम की आर्थिक स्थिति पर क्या प्रभाव पड़ता है?",
        "options_hi": ["सुधरती", "बिगड़ती", "सामान्य", "अस्थिर"],
        "answer_hi": "सुधरती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "कहानी में न्याय का क्या सिद्धांत दिखता है?",
        "options_hi": ["अनैतिक की सफलता", "नैतिक की हानि", "दोनों", "कोई नहीं"],
        "answer_hi": "नैतिक की हानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "प्रेमचंद इस कहानी में क्या संदेश देना चाहते हैं?",
        "options_hi": ["सावधानी", "ईमानदारी", "विश्वास", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "कहानी का सबसे दुखद पल कौन सा है?",
        "options_hi": ["पार्टनरशिप टूटना", "धोखे का पता", "गोविंद का दुख", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "गोविंद के चरित्र का सबसे अच्छा गुण क्या है?",
        "options_hi": ["ईमानदारी", "विश्वास", "सहनशीलता", "मेहनत"],
        "answer_hi": "ईमानदारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "घनश्याम के चरित्र का सबसे बुरा गुण क्या है?",
        "options_hi": ["लालच", "झूठ", "विश्वासघात", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "कहानी में आधुनिकता का क्या प्रभाव दिखता है?",
        "options_hi": ["व्यापारिक बदलाव", "सामाजिक बदलाव", "नैतिक बदलाव", "कम"],
        "answer_hi": "कम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "पार्टनरशिप का विचार किसका था?",
        "options_hi": ["घनश्याम का", "गोविंद का", "दोनों का", "परिवार का"],
        "answer_hi": "दोनों का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "दुकान की शुरुआत कैसे हुई?",
        "options_hi": ["संयुक्त पूंजी", "कर्ज लेकर", "विरासत", "भाग्यवश"],
        "answer_hi": "संयुक्त पूंजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "गोविंद के बच्चों की स्थिति कैसी है?",
        "options_hi": ["पढ़ाई प्रभावित", "सामान्य", "खुश", "दुखी"],
        "answer_hi": "पढ़ाई प्रभावित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "घनश्याम के बच्चों की स्थिति कैसी है?",
        "options_hi": ["अच्छी", "सामान्य", "खराब", "अनिश्चित"],
        "answer_hi": "अच्छी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "कहानी में स्त्री पात्रों की क्या भूमिका है?",
        "options_hi": ["सलाहकार", "प्रेरक", "निष्क्रिय", "सक्रिय"],
        "answer_hi": "सलाहकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "प्रेमचंद की सामाजिक दृष्टि इस कहानी में कैसी है?",
        "options_hi": ["यथार्थवादी", "आदर्शवादी", "व्यंग्यात्मक", "क्रांतिकारी"],
        "answer_hi": "यथार्थवादी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "कहानी का सबसे महत्वपूर्ण पाठ क्या है?",
        "options_hi": ["व्यापार में सावधानी", "दोस्ती में सतर्कता", "ईमानदारी का महत्व", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "गोविंद का घनश्याम से अंतिम संवाद कैसा है?",
        "options_hi": ["दुखभरा", "क्रोधित", "शांत", "व्यंग्यपूर्ण"],
        "answer_hi": "दुखभरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "घनश्याम का गोविंद से अंतिम संवाद कैसा है?",
        "options_hi": ["झूठा और बचावपूर्ण", "सच्चा", "क्रोधित", "उदासीन"],
        "answer_hi": "झूठा और बचावपूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "कहानी में प्रकृति का वर्णन कैसा है?",
        "options_hi": ["कम", "विस्तृत", "प्रतीकात्मक", "अनुपस्थित"],
        "answer_hi": "कम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "पार्टनरशिप टूटने के बाद गोविंद क्या करता है?",
        "options_hi": ["नया काम शुरू", "नौकरी", "खेती", "अनिश्चित"],
        "answer_hi": "अनिश्चित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "घनश्याम की सफलता कैसी है?",
        "options_hi": ["अल्पकालिक", "दीर्घकालिक", "संदिग्ध", "वास्तविक"],
        "answer_hi": "संदिग्ध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "कहानी में धर्म की क्या भूमिका है?",
        "options_hi": ["कम", "महत्वपूर्ण", "प्रतीकात्मक", "अनुपस्थित"],
        "answer_hi": "कम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "प्रेमचंद की भाषा में हास्य का तत्व कैसा है?",
        "options_hi": ["कम", "व्यंग्यपूर्ण", "प्रचुर", "अनुपस्थित"],
        "answer_hi": "व्यंग्यपूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "कहानी का सबसे यादगार दृश्य कौन सा है?",
        "options_hi": ["आखिरी मुलाकात", "धोखे का पता", "दुकान का दृश्य", "पारिवारिक दृश्य"],
        "answer_hi": "आखिरी मुलाकात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "गोविंद की मानसिक स्थिति अंत में कैसी है?",
        "options_hi": ["टूटी हुई", "मजबूत", "क्रोधित", "उदासीन"],
        "answer_hi": "टूटी हुई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "घनश्याम की मानसिक स्थिति अंत में कैसी है?",
        "options_hi": ["संतुष्ट", "अपराधबोध", "डरी हुई", "उदासीन"],
        "answer_hi": "संतुष्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "कहानी में पैसे की क्या भूमिका है?",
        "options_hi": ["केंद्रीय", "गौण", "प्रतीकात्मक", "नगण्य"],
        "answer_hi": "केंद्रीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "प्रेमचंद की कहानियों का विशेष लक्षण क्या है?",
        "options_hi": ["यथार्थवाद", "सामाजिक चित्रण", "मानवीय संवेदना", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "पार्टनर कहानी प्रेमचंद के किस संग्रह में है?",
        "options_hi": ["मानसरोवर", "प्रेम पचीसी", "सप्तसरोज", "कफन"],
        "answer_hi": "मानसरोवर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "कहानी में समय की अवधि कितनी है?",
        "options_hi": ["कई वर्ष", "एक वर्ष", "कुछ महीने", "अनिश्चित"],
        "answer_hi": "कई वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "गोविंद का सबसे बड़ा सहारा कौन है?",
        "options_hi": ["पत्नी", "बच्चे", "दोस्त", "कोई नहीं"],
        "answer_hi": "पत्नी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "घनश्याम का सबसे बड़ा सहारा कौन है?",
        "options_hi": ["धन", "पत्नी", "दोस्त", "चालाकी"],
        "answer_hi": "धन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "कहानी का सबसे दर्दनाक सत्य क्या है?",
        "options_hi": ["दोस्ती का टूटना", "विश्वासघात", "आर्थिक नुकसान", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "प्रेमचंद इस कहानी में किस बात पर जोर देते हैं?",
        "options_hi": ["मानवीय मूल्य", "आर्थिक मूल्य", "सामाजिक मूल्य", "नैतिक मूल्य"],
        "answer_hi": "नैतिक मूल्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "कहानी पाठक को क्या सोचने पर मजबूर करती है?",
        "options_hi": ["विश्वास और धोखा", "दोस्ती और लालच", "ईमानदारी और बेईमानी", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "पार्टनर कहानी का साहित्यिक महत्व क्या है?",
        "options_hi": ["प्रेमचंद के कथा कौशल", "सामाजिक यथार्थ", "मानवीय संवेदना", "सभी"],
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