const questions = [
    {
        "num": 1,
        "question_hi": "यतीन्द्र मिश्र की पुस्तक 'नौबतखाने में इबादत' किस विधा में लिखी गई है?",
        "options_hi": ["संस्मरण", "आत्मकथा", "उपन्यास", "कविता संग्रह"],
        "answer_hi": "संस्मरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "पुस्तक का मुख्य विषय क्या है?",
        "options_hi": ["बिस्मिल्लाह खाँ का जीवन और संगीत", "यतीन्द्र मिश्र का जीवन", "बनारस का इतिहास", "हिंदुस्तानी संगीत का इतिहास"],
        "answer_hi": "बिस्मिल्लाह खाँ का जीवन और संगीत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "नौबतखाने में इबादत पुस्तक किस वर्ष प्रकाशित हुई?",
        "options_hi": ["2009", "2005", "2012", "2015"],
        "answer_hi": "2009",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "यतीन्द्र मिश्र ने इस पुस्तक के लिए कौन सा प्रतिष्ठित पुरस्कार प्राप्त किया?",
        "options_hi": ["व्यास सम्मान", "साहित्य अकादमी पुरस्कार", "ज्ञानपीठ पुरस्कार", "मूर्तिदेवी पुरस्कार"],
        "answer_hi": "व्यास सम्मान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "पुस्तक में वर्णित 'नौबतखाना' क्या है?",
        "options_hi": ["ढोल-नगाड़े बजाने का स्थान", "मंदिर", "मकबरा", "संगीत विद्यालय"],
        "answer_hi": "ढोल-नगाड़े बजाने का स्थान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "पुस्तक में बिस्मिल्लाह खाँ के अलावा किस अन्य कलाकार का वर्णन है?",
        "options_hi": ["सिद्धेश्वरी देवी", "लता मंगेशकर", "रवि शंकर", "भीमसेन जोशी"],
        "answer_hi": "सिद्धेश्वरी देवी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "बिस्मिल्लाह खाँ किस वाद्ययंत्र के विश्वविख्यात वादक थे?",
        "options_hi": ["शहनाई", "सितार", "तबला", "सरोद"],
        "answer_hi": "शहनाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "पुस्तक के अनुसार बिस्मिल्लाह खाँ का जन्म कहाँ हुआ था?",
        "options_hi": ["डुमराँव, बिहार", "बनारस", "लखनऊ", "दिल्ली"],
        "answer_hi": "डुमराँव, बिहार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "बिस्मिल्लाह खाँ बचपन में कहाँ आकर बस गए?",
        "options_hi": ["बनारस", "लखनऊ", "दिल्ली", "पटना"],
        "answer_hi": "बनारस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "पुस्तक में बिस्मिल्लाह खाँ के जीवन का कौन सा पक्ष प्रमुखता से उभरा है?",
        "options_hi": ["उनकी सादगी और समर्पण", "उनकी धन-दौलत", "उनकी विदेश यात्राएँ", "उनके राजनीतिक विचार"],
        "answer_hi": "उनकी सादगी और समर्पण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "यतीन्द्र मिश्र के अनुसार बिस्मिल्लाह खाँ की शहनाई किसकी आराधना थी?",
        "options_hi": ["ईश्वर की", "धन की", "प्रसिद्धि की", "शक्ति की"],
        "answer_hi": "ईश्वर की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "पुस्तक में बिस्मिल्लाह खाँ का संगीत किसका प्रतीक है?",
        "options_hi": ["सांप्रदायिक सद्भाव का", "धार्मिक कट्टरता का", "राजनीतिक विचारधारा का", "आर्थिक समृद्धि का"],
        "answer_hi": "सांप्रदायिक सद्भाव का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "बिस्मिल्लाह खाँ किस मंदिर में नियमित रूप से शहनाई बजाते थे?",
        "options_hi": ["बालाजी मंदिर", "काशी विश्वनाथ मंदिर", "संकटमोचन मंदिर", "दुर्गा मंदिर"],
        "answer_hi": "बालाजी मंदिर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "पुस्तक में वर्णित 'गंगा' किसका प्रतीक है?",
        "options_hi": ["अविरल प्रवाह और पवित्रता", "मोक्ष", "आर्थिक समृद्धि", "राजनीतिक शक्ति"],
        "answer_hi": "अविरल प्रवाह और पवित्रता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "यतीन्द्र मिश्र ने बिस्मिल्लाह खाँ की शहनाई को किससे तुलना की है?",
        "options_hi": ["गंगा की धारा", "हिमालय", "मंदिर की घंटियों", "प्रकृति की आवाज"],
        "answer_hi": "गंगा की धारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "पुस्तक के अनुसार बिस्मिल्लाह खाँ का दैनिक जीवन कैसा था?",
        "options_hi": ["अत्यंत सादा और अनुशासित", "विलासितापूर्ण", "अव्यवस्थित", "एकांतप्रिय"],
        "answer_hi": "अत्यंत सादा और अनुशासित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "बिस्मिल्लाह खाँ किस धर्म के थे?",
        "options_hi": ["इस्लाम", "हिंदू", "सिख", "ईसाई"],
        "answer_hi": "इस्लाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "पुस्तक में बिस्मिल्लाह खाँ का संगीत किन दो त्योहारों में बजता था?",
        "options_hi": ["शिवरात्रि और मुहर्रम", "दिवाली और ईद", "होली और बकरीद", "दशहरा और ईद"],
        "answer_hi": "शिवरात्रि और मुहर्रम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "यतीन्द्र मिश्र की भाषा-शैली की क्या विशेषता है?",
        "options_hi": ["काव्यात्मक और चित्रात्मक", "वैज्ञानिक", "आलंकारिक", "सरल और सपाट"],
        "answer_hi": "काव्यात्मक और चित्रात्मक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "पुस्तक में 'बनारस' किसका प्रतीक है?",
        "options_hi": ["सनातन संस्कृति और गंगा-जमुनी तहजीब", "आधुनिकता", "औद्योगिक विकास", "राजनीतिक केंद्र"],
        "answer_hi": "सनातन संस्कृति और गंगा-जमुनी तहजीब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "बिस्मिल्लाह खाँ को भारत रत्न किस वर्ष मिला?",
        "options_hi": ["2001", "1995", "1980", "2005"],
        "answer_hi": "2001",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "पुस्तक के अनुसार बिस्मिल्लाह खाँ का मूल नाम क्या था?",
        "options_hi": ["कमरुद्दीन", "अमीरुद्दीन", "क़मरुद्दीन", "शम्सुद्दीन"],
        "answer_hi": "क़मरुद्दीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "बिस्मिल्लाह खाँ किस घराने से संबंधित थे?",
        "options_hi": ["सेनिया घराना", "ग्वालियर घराना", "किराना घराना", "पटियाला घराना"],
        "answer_hi": "सेनिया घराना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "पुस्तक में वर्णित 'दशाश्वमेध घाट' क्या है?",
        "options_hi": ["बनारस का प्रसिद्ध घाट", "दिल्ली का मंदिर", "लखनऊ का बाजार", "आगरा का किला"],
        "answer_hi": "बनारस का प्रसिद्ध घाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "यतीन्द्र मिश्र ने बिस्मिल्लाह खाँ को किस रूप में देखा?",
        "options_hi": ["एक सूफी संत के रूप", "एक व्यापारी", "एक राजनेता", "एक शिक्षक"],
        "answer_hi": "एक सूफी संत के रूप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "पुस्तक में 'इबादत' शब्द का क्या अर्थ बताया गया है?",
        "options_hi": ["आराधना या उपासना", "संगीत", "नृत्य", "कला"],
        "answer_hi": "आराधना या उपासना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "बिस्मिल्लाह खाँ की शहनाई सुनने के लिए कौन-कौन आता था?",
        "options_hi": ["सभी धर्म और वर्ग के लोग", "केवल मुस्लिम", "केवल हिंदू", "केवल संगीतकार"],
        "answer_hi": "सभी धर्म और वर्ग के लोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "यतीन्द्र मिश्र ने इस पुस्तक में किस भाषा का प्रयोग किया है?",
        "options_hi": ["साहित्यिक हिंदी", "अंग्रेजी", "उर्दू", "संस्कृत"],
        "answer_hi": "साहित्यिक हिंदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "पुस्तक में बिस्मिल्लाह खाँ की किस आदत का वर्णन है?",
        "options_hi": ["प्रतिदिन गंगा स्नान", "दिन में तीन बार खाना", "रात को देर तक जागना", "प्रतिदिन अखबार पढ़ना"],
        "answer_hi": "प्रतिदिन गंगा स्नान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "बिस्मिल्लाह खाँ का निधन कब हुआ?",
        "options_hi": ["21 अगस्त 2006", "15 जून 2005", "10 सितंबर 2007", "5 मार्च 2004"],
        "answer_hi": "21 अगस्त 2006",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "पुस्तक में 'नौबतखाने' का क्या महत्व बताया गया है?",
        "options_hi": ["यह संगीत और भक्ति का संगम स्थल", "यह राजदरबार", "यह सैन्य केंद्र", "यह शैक्षणिक संस्थान"],
        "answer_hi": "यह संगीत और भक्ति का संगम स्थल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "यतीन्द्र मिश्र की दृष्टि में बिस्मिल्लाह खाँ की सबसे बड़ी विशेषता क्या थी?",
        "options_hi": ["धर्मनिरपेक्षता और सादगी", "धन-दौलत", "विदेश यात्राएँ", "राजनीतिक प्रभाव"],
        "answer_hi": "धर्मनिरपेक्षता और सादगी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "पुस्तक में बिस्मिल्लाह खाँ के बचपन का कौन सा किस्सा वर्णित है?",
        "options_hi": ["गंगा किनारे शहनाई का अभ्यास", "दिल्ली में प्रदर्शन", "विद्यालय में पढ़ाई", "खेलकूद"],
        "answer_hi": "गंगा किनारे शहनाई का अभ्यास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "बिस्मिल्लाह खाँ को शहनाई की शिक्षा किससे मिली?",
        "options_hi": ["अपने चाचा अली बख्श 'विलायतु' से", "पिता से", "गुरु से", "स्वयं सीखा"],
        "answer_hi": "अपने चाचा अली बख्श 'विलायतु' से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "पुस्तक के अनुसार बिस्मिल्लाह खाँ किसे अपना आदर्श मानते थे?",
        "options_hi": ["हजरत मोहम्मद", "भगवान शिव", "गुरु नानक", "ईसा मसीह"],
        "answer_hi": "भगवान शिव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "यतीन्द्र मिश्र ने पुस्तक में किस ऋतु का विशेष वर्णन किया है?",
        "options_hi": ["वसंत ऋतु", "ग्रीष्म ऋतु", "शरद ऋतु", "वर्षा ऋतु"],
        "answer_hi": "वसंत ऋतु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "बिस्मिल्लाह खाँ की शहनाई किस राग में प्रसिद्ध थी?",
        "options_hi": ["राग भैरव", "राग काफी", "राग यमन", "राग मल्हार"],
        "answer_hi": "राग भैरव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "पुस्तक में 'काशी' किसका पर्याय है?",
        "options_hi": ["ज्ञान और संस्कृति", "धन", "शक्ति", "आधुनिकता"],
        "answer_hi": "ज्ञान और संस्कृति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "यतीन्द्र मिश्र ने बिस्मिल्लाह खाँ के संगीत को क्या माना है?",
        "options_hi": ["आध्यात्मिक साधना", "मनोरंजन", "पेशा", "शौक"],
        "answer_hi": "आध्यात्मिक साधना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "पुस्तक में बिस्मिल्लाह खाँ की मृत्यु पर क्या प्रतिक्रिया वर्णित है?",
        "options_hi": ["संपूर्ण देश शोकाकुल", "केवल बनारस शोकाकुल", "कोई प्रतिक्रिया नहीं", "केवल संगीत जगत शोकाकुल"],
        "answer_hi": "संपूर्ण देश शोकाकुल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "बिस्मिल्लाह खाँ को पद्म भूषण कब मिला?",
        "options_hi": ["1968", "1975", "1980", "1990"],
        "answer_hi": "1968",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "पुस्तक में यतीन्द्र मिश्र ने बिस्मिल्लाह खाँ की तुलना किससे की है?",
        "options_hi": ["गंगा नदी", "हिमालय पर्वत", "सूर्य", "चंद्रमा"],
        "answer_hi": "गंगा नदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "बिस्मिल्लाह खाँ का पसंदीदा समय क्या था?",
        "options_hi": ["सुबह का समय", "दोपहर", "शाम", "रात"],
        "answer_hi": "सुबह का समय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "पुस्तक में 'शहनाई' किसका प्रतीक है?",
        "options_hi": ["शांति और सौहार्द", "युद्ध", "विद्रोह", "शोक"],
        "answer_hi": "शांति और सौहार्द",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "यतीन्द्र मिश्र ने पुस्तक में किस फूल का उल्लेख किया है?",
        "options_hi": ["गुलाब", "कमल", "चमेली", "गेंदा"],
        "answer_hi": "गुलाब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "बिस्मिल्लाह खाँ का जन्मदिन कब मनाया जाता है?",
        "options_hi": ["21 मार्च", "15 अगस्त", "26 जनवरी", "2 अक्टूबर"],
        "answer_hi": "21 मार्च",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "पुस्तक में वर्णित 'बालाजी मंदिर' कहाँ स्थित है?",
        "options_hi": ["बनारस", "दिल्ली", "लखनऊ", "आगरा"],
        "answer_hi": "बनारस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "यतीन्द्र मिश्र के अनुसार बिस्मिल्लाह खाँ का संगीत किस भावना को दर्शाता है?",
        "options_hi": ["विश्व बंधुत्व", "राष्ट्रवाद", "धार्मिक कट्टरता", "व्यक्तिवाद"],
        "answer_hi": "विश्व बंधुत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "पुस्तक में बिस्मिल्लाह खाँ के किस शिष्य का उल्लेख है?",
        "options_hi": ["उस्ताद सिकंदर खाँ", "उस्ताद जाकिर हुसैन", "पंडित हरिप्रसाद", "उस्ताद विलायत खाँ"],
        "answer_hi": "उस्ताद सिकंदर खाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "यतीन्द्र मिश्र ने इस पुस्तक में किस शैली का प्रयोग किया है?",
        "options_hi": ["वर्णनात्मक और आत्मीय", "वैज्ञानिक", "व्यंग्यात्मक", "नाटकीय"],
        "answer_hi": "वर्णनात्मक और आत्मीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "बिस्मिल्लाह खाँ की प्रसिद्ध फिल्म कौन सी है?",
        "options_hi": ["गूंज उठी शहनाई", "मुगल-ए-आज़म", "मदर इंडिया", "प्यासा"],
        "answer_hi": "गूंज उठी शहनाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "पुस्तक में 'गंगा-जमुनी तहजीब' से क्या अभिप्राय है?",
        "options_hi": ["हिंदू-मुस्लिम सद्भाव", "नदियों का संगम", "सांस्कृतिक विविधता", "भौगोलिक विविधता"],
        "answer_hi": "हिंदू-मुस्लिम सद्भाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "यतीन्द्र मिश्र ने बिस्मिल्लाह खाँ के जीवन से क्या सीखा?",
        "options_hi": ["सादगी और समर्पण", "धन कमाना", "प्रसिद्धि पाना", "राजनीति करना"],
        "answer_hi": "सादगी और समर्पण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "पुस्तक में बिस्मिल्लाह खाँ का पसंदीदा भोजन क्या था?",
        "options_hi": ["दाल-चावल", "मांसाहार", "मिठाई", "फल"],
        "answer_hi": "दाल-चावल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "बिस्मिल्लाह खाँ को किसने 'शहनाई सम्राट' की उपाधि दी?",
        "options_hi": ["जवाहरलाल नेहरू", "इंदिरा गांधी", "राजीव गांधी", "अटल बिहारी वाजपेयी"],
        "answer_hi": "जवाहरलाल नेहरू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "पुस्तक में यतीन्द्र मिश्र ने किस पक्षी का उल्लेख किया है?",
        "options_hi": ["कोयल", "मोर", "गौरैया", "तोता"],
        "answer_hi": "कोयल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "बिस्मिल्लाह खाँ का पहला बड़ा कार्यक्रम कहाँ हुआ था?",
        "options_hi": ["इलाहाबाद संगीत सम्मेलन", "दिल्ली दरबार", "लखनऊ महोत्सव", "बनारस उत्सव"],
        "answer_hi": "इलाहाबाद संगीत सम्मेलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "यतीन्द्र मिश्र की भाषा में किसका प्रभाव है?",
        "options_hi": ["अवधी और ब्रज भाषा", "अंग्रेजी", "फ्रेंच", "जर्मन"],
        "answer_hi": "अवधी और ब्रज भाषा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "पुस्तक में बिस्मिल्लाह खाँ की दिनचर्या क्या थी?",
        "options_hi": ["सुबह गंगा स्नान, फिर शहनाई अभ्यास", "दिन भर आराम", "रात को अभ्यास", "अनियमित"],
        "answer_hi": "सुबह गंगा स्नान, फिर शहनाई अभ्यास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "बिस्मिल्लाह खाँ को किस वर्ष पद्म विभूषण मिला?",
        "options_hi": ["1980", "1975", "1990", "2001"],
        "answer_hi": "1980",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "यतीन्द्र मिश्र ने पुस्तक में किस नदी के किनारे के दृश्य वर्णित किए हैं?",
        "options_hi": ["गंगा", "यमुना", "सरस्वती", "गोदावरी"],
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "पुस्तक में 'सिद्धेश्वरी देवी' कौन थीं?",
        "options_hi": ["थुमरी गायिका", "शास्त्रीय नृत्यांगना", "चित्रकार", "लेखिका"],
        "answer_hi": "थुमरी गायिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "बिस्मिल्लाह खाँ की शहनाई किस अवसर पर विशेष रूप से बजती थी?",
        "options_hi": ["मंदिर की आरती और मुहर्रम", "शादी-विवाह", "राज्याभिषेक", "सैन्य परेड"],
        "answer_hi": "मंदिर की आरती और मुहर्रम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "यतीन्द्र मिश्र ने बिस्मिल्लाह खाँ को किसकी संज्ञा दी?",
        "options_hi": ["सूफी फकीर", "राजा", "योद्धा", "व्यापारी"],
        "answer_hi": "सूफी फकीर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "पुस्तक में बिस्मिल्लाह खाँ का जन्म किस स्थान पर हुआ?",
        "options_hi": ["डुमराँव गाँव", "बनारस शहर", "लखनऊ", "दिल्ली"],
        "answer_hi": "डुमराँव गाँव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "बिस्मिल्लाह खाँ को संगीत का पहला पाठ किससे मिला?",
        "options_hi": ["अपने मामा से", "पिता से", "गुरु से", "स्वयं सीखा"],
        "answer_hi": "अपने मामा से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "यतीन्द्र मिश्र ने पुस्तक में किस रंग का उल्लेख किया है?",
        "options_hi": ["गेरुआ रंग", "नीला रंग", "लाल रंग", "हरा रंग"],
        "answer_hi": "गेरुआ रंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "पुस्तक में बिस्मिल्लाह खाँ की शहनाई की आवाज कैसी वर्णित है?",
        "options_hi": ["मधुर और भावपूर्ण", "तीखी", "कर्कश", "धीमी"],
        "answer_hi": "मधुर और भावपूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "बिस्मिल्लाह खाँ का प्रिय राग कौन सा था?",
        "options_hi": ["राग काफी", "राग भैरव", "राग यमन", "राग मल्हार"],
        "answer_hi": "राग काफी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "यतीन्द्र मिश्र ने पुस्तक में किस पेड़ का उल्लेख किया है?",
        "options_hi": ["पीपल", "बरगद", "आम", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "बिस्मिल्लाह खाँ की शहनाई किस धातु की थी?",
        "options_hi": ["पीतल", "लोहा", "सोना", "चांदी"],
        "answer_hi": "पीतल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "पुस्तक में यतीन्द्र मिश्र ने बिस्मिल्लाह खाँ के जीवन का कौन सा संदेश दिया?",
        "options_hi": ["सादा जीवन उच्च विचार", "धन कमाओ", "प्रसिद्धि पाओ", "सत्ता पाओ"],
        "answer_hi": "सादा जीवन उच्च विचार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "बिस्मिल्लाह खाँ का विवाह किससे हुआ?",
        "options_hi": ["नजमुन्निसा से", "फातिमा से", "जेबुन्निसा से", "अमीना से"],
        "answer_hi": "नजमुन्निसा से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "यतीन्द्र मिश्र ने पुस्तक में किस गंध का उल्लेख किया है?",
        "options_hi": ["अगरबत्ती की खुशबू", "गुलाब की खुशबू", "गंगा की गंध", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "बिस्मिल्लाह खाँ की मृत्यु कहाँ हुई?",
        "options_hi": ["बनारस", "दिल्ली", "मुंबई", "लखनऊ"],
        "answer_hi": "बनारस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "पुस्तक में यतीन्द्र मिश्र ने बिस्मिल्लाह खाँ को किसका अवतार कहा?",
        "options_hi": ["संगीत का", "धर्म का", "राजनीति का", "कला का"],
        "answer_hi": "संगीत का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "बिस्मिल्लाह खाँ के कितने बच्चे थे?",
        "options_hi": ["पाँच", "तीन", "सात", "नौ"],
        "answer_hi": "पाँच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "यतीन्द्र मिश्र ने पुस्तक में किस फल का उल्लेख किया?",
        "options_hi": ["आम", "सेब", "अंगूर", "केला"],
        "answer_hi": "आम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "बिस्मिल्लाह खाँ को संगीत में किसने प्रेरित किया?",
        "options_hi": ["उनके चाचा", "पिता", "माता", "गुरु"],
        "answer_hi": "उनके चाचा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "पुस्तक में यतीन्द्र मिश्र ने किस प्रकाश का वर्णन किया?",
        "options_hi": ["दीपक की रोशनी", "बिजली की रोशनी", "सूर्य का प्रकाश", "चंद्रमा का प्रकाश"],
        "answer_hi": "दीपक की रोशनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "बिस्मिल्लाह खाँ की शहनाई किस महीने में विशेष रूप से बजती थी?",
        "options_hi": ["सावन", "चैत्र", "कार्तिक", "फाल्गुन"],
        "answer_hi": "सावन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "यतीन्द्र मिश्र ने बिस्मिल्लाह खाँ के संगीत को किससे जोड़ा?",
        "options_hi": ["प्रकृति", "यंत्र", "तंत्र", "राजनीति"],
        "answer_hi": "प्रकृति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "पुस्तक में बिस्मिल्लाह खाँ का पसंदीदा वस्त्र क्या था?",
        "options_hi": ["धोती-कुर्ता", "सूट", "शेरवानी", "जींस"],
        "answer_hi": "धोती-कुर्ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "बिस्मिल्लाह खाँ को किस वाद्ययंत्र पर भी महारत थी?",
        "options_hi": ["शहनाई के अलावा कोई नहीं", "तबला", "सितार", "सरोद"],
        "answer_hi": "शहनाई के अलावा कोई नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "यतीन्द्र मिश्र ने पुस्तक में किस आवाज का उल्लेख किया?",
        "options_hi": ["घंटियों की आवाज", "कार के हॉर्न", "लाउडस्पीकर", "रेडियो"],
        "answer_hi": "घंटियों की आवाज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "बिस्मिल्लाह खाँ का अंतिम सार्वजनिक कार्यक्रम कहाँ हुआ?",
        "options_hi": ["बनारस", "दिल्ली", "मुंबई", "लखनऊ"],
        "answer_hi": "बनारस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "पुस्तक में यतीन्द्र मिश्र ने बिस्मिल्लाह खाँ के घर का क्या वर्णन किया?",
        "options_hi": ["साधारण और छोटा", "विशाल और भव्य", "आधुनिक", "पुराना और टूटा"],
        "answer_hi": "साधारण और छोटा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "बिस्मिल्लाह खाँ की शहनाई का स्वर कितने सुरों का था?",
        "options_hi": ["तीन", "पाँच", "सात", "नौ"],
        "answer_hi": "तीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "यतीन्द्र मिश्र ने पुस्तक में किस मौसम का वर्णन किया?",
        "options_hi": ["बसंत", "ग्रीष्म", "शरद", "हेमंत"],
        "answer_hi": "बसंत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "बिस्मिल्लाह खाँ की शहनाई किस उम्र तक बजती रही?",
        "options_hi": ["90 वर्ष तक", "70 वर्ष तक", "80 वर्ष तक", "60 वर्ष तक"],
        "answer_hi": "90 वर्ष तक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "पुस्तक में यतीन्द्र मिश्र ने बिस्मिल्लाह खाँ के व्यक्तित्व को क्या बताया?",
        "options_hi": ["विनम्र और सहज", "अभिमानी", "चालाक", "क्रोधी"],
        "answer_hi": "विनम्र और सहज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "बिस्मिल्लाह खाँ का पसंदीदा समय किसे सुनने का था?",
        "options_hi": ["गंगा की आवाज", "पक्षियों की आवाज", "मंदिर की घंटियाँ", "लोगों की बातें"],
        "answer_hi": "गंगा की आवाज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "यतीन्द्र मिश्र ने पुस्तक में किस पशु का उल्लेख किया?",
        "options_hi": ["गाय", "बंदर", "हाथी", "ऊँट"],
        "answer_hi": "गाय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "बिस्मिल्लाह खाँ को किस भाषा में गीत गाना पसंद था?",
        "options_hi": ["भोजपुरी", "हिंदी", "उर्दू", "संस्कृत"],
        "answer_hi": "भोजपुरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "पुस्तक में यतीन्द्र मिश्र ने बिस्मिल्लाह खाँ की आँखों का क्या वर्णन किया?",
        "options_hi": ["चमकदार और जीवंत", "मंद", "उदास", "क्रोधित"],
        "answer_hi": "चमकदार और जीवंत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "बिस्मिल्लाह खाँ की मृत्यु के बाद उनका अंतिम संस्कार कहाँ हुआ?",
        "options_hi": ["फातमान कब्रिस्तान", "हिंदू श्मशान", "गंगा नदी", "उनके घर"],
        "answer_hi": "फातमान कब्रिस्तान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "यतीन्द्र मिश्र ने पुस्तक में किस तारीख का उल्लेख किया?",
        "options_hi": ["21 अगस्त", "15 अगस्त", "26 जनवरी", "2 अक्टूबर"],
        "answer_hi": "21 अगस्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "बिस्मिल्लाह खाँ की शहनाई किस प्रकार की लकड़ी से बनी थी?",
        "options_hi": ["शीशम", "आम", "बबूल", "देवदार"],
        "answer_hi": "शीशम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "पुस्तक में यतीन्द्र मिश्र ने बिस्मिल्लाह खाँ के हाथों का क्या वर्णन किया?",
        "options_hi": ["शहनाई पकड़े हुए", "काँपते हुए", "मजबूत", "कोमल"],
        "answer_hi": "शहनाई पकड़े हुए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "यतीन्द्र मिश्र की इस पुस्तक का मूल उद्देश्य क्या है?",
        "options_hi": ["बिस्मिल्लाह खाँ के जीवन और संगीत को याद करना", "बनारस का इतिहास", "संगीत का तकनीकी ज्ञान", "राजनीतिक विचार"],
        "answer_hi": "बिस्मिल्लाह खाँ के जीवन और संगीत को याद करना",
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