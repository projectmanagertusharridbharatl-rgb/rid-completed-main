const questions = [
    {
        "num": 1,
        "question_hi": "मुहावरे क्या होते हैं?",
        "options_hi": ["विशेष अर्थ वाले वाक्यांश", "साधारण शब्द", "कविता की पंक्तियाँ", "व्याकरण के नियम"],
        "answer_hi": "विशेष अर्थ वाले वाक्यांश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "लोकोक्तियाँ क्या होती हैं?",
        "options_hi": ["जन सामान्य की कहावतें", "व्यक्तिगत विचार", "वैज्ञानिक सिद्धांत", "धार्मिक उपदेश"],
        "answer_hi": "जन सामान्य की कहावतें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "मुहावरों और लोकोक्तियों का क्या उद्देश्य है?",
        "options_hi": ["भाषा को रोचक बनाना", "भाषा को कठिन बनाना", "भाषा को छोटा करना", "भाषा को विदेशी बनाना"],
        "answer_hi": "भाषा को रोचक बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "मुहावरों का प्रयोग किसलिए किया जाता है?",
        "options_hi": ["भावों को प्रभावशाली ढंग से व्यक्त करने", "शब्दों को छिपाने", "भाषा को उबाऊ बनाने", "व्याकरण सिखाने"],
        "answer_hi": "भावों को प्रभावशाली ढंग से व्यक्त करने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "लोकोक्तियाँ किससे संबंधित होती हैं?",
        "options_hi": ["जीवन के अनुभव", "गणित के सूत्र", "विज्ञान के नियम", "इतिहास की घटनाएँ"],
        "answer_hi": "जीवन के अनुभव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "मुहावरों की विशेषता क्या है?",
        "options_hi": ["शाब्दिक अर्थ से भिन्न अर्थ", "सीधा अर्थ", "वैज्ञानिक अर्थ", "धार्मिक अर्थ"],
        "answer_hi": "शाब्दिक अर्थ से भिन्न अर्थ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "लोकोक्तियों में क्या होता है?",
        "options_hi": ["जीवन का सार", "कहानी का आरंभ", "कविता का अंत", "नाटक का संवाद"],
        "answer_hi": "जीवन का सार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "'आँखों का तारा' मुहावरे का क्या अर्थ है?",
        "options_hi": ["बहुत प्रिय", "आँख की रोशनी", "तारे देखना", "रात को जागना"],
        "answer_hi": "बहुत प्रिय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "'अंधों में काना राजा' लोकोक्ति का क्या अर्थ है?",
        "options_hi": ["अयोग्यों में थोड़ा योग्य भी बड़ा", "अंधे का राजा", "काने का शासन", "राजा की अंधता"],
        "answer_hi": "अयोग्यों में थोड़ा योग्य भी बड़ा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "'कान भरना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["चुगली करना", "कान साफ करना", "कान में तेल डालना", "कान ढकना"],
        "answer_hi": "चुगली करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "'अपना उल्लू सीधा करना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["स्वार्थ सिद्ध करना", "उल्लू पालना", "उल्लू को सीधा करना", "रात को जागना"],
        "answer_hi": "स्वार्थ सिद्ध करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "'उलटी गंगा बहाना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["विपरीत बात करना", "नदी का रुख मोड़ना", "पानी उलटना", "गंगा स्नान"],
        "answer_hi": "विपरीत बात करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "'ऊँट के मुँह में जीरा' मुहावरे का क्या अर्थ है?",
        "options_hi": ["नगण्य दान", "ऊँट को खिलाना", "जीरा खरीदना", "मसाला देना"],
        "answer_hi": "नगण्य दान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "'कांटे से कांटा निकालना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["चालाकी से काम निकालना", "कांटा हटाना", "कष्ट दूर करना", "बगीचा साफ करना"],
        "answer_hi": "चालाकी से काम निकालना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "'खून का प्यासा' मुहावरे का क्या अर्थ है?",
        "options_hi": ["बदला लेने की इच्छा", "प्यास लगना", "रक्त पीना", "हिंसक प्रवृत्ति"],
        "answer_hi": "बदला लेने की इच्छा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "'गागर में सागर' मुहावरे का क्या अर्थ है?",
        "options_hi": ["थोड़े में बहुत कुछ", "पानी भरना", "समुद्र देखना", "छोटा बर्तन"],
        "answer_hi": "थोड़े में बहुत कुछ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "'चादर के बाहर पैर पसारना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["सामर्थ्य से अधिक खर्च करना", "सोते समय पैर फैलाना", "आराम करना", "कंबल ओढ़ना"],
        "answer_hi": "सामर्थ्य से अधिक खर्च करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "'जी तोड़ मेहनत करना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["पूरी लगन से काम करना", "थक जाना", "चोट लगना", "निराश होना"],
        "answer_hi": "पूरी लगन से काम करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "'घी के दीये जलाना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["खुशियाँ मनाना", "दीपक जलाना", "घी खरीदना", "रोशनी करना"],
        "answer_hi": "खुशियाँ मनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "'दाल में काला' मुहावरे का क्या अर्थ है?",
        "options_hi": ["कुछ गड़बड़ होना", "दाल पकाना", "काला रंग", "भोजन तैयार करना"],
        "answer_hi": "कुछ गड़बड़ होना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "'नौ दो ग्यारह होना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["भाग जाना", "गिनती करना", "ग्यारह बजना", "समय बताना"],
        "answer_hi": "भाग जाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "'पगड़ी उछलना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["इज्जत जाना", "पगड़ी बाँधना", "सिर ढकना", "उत्सव मनाना"],
        "answer_hi": "इज्जत जाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "'फूटी आँख न सुहाना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["बिल्कुल पसंद न आना", "आँख में दर्द", "सुंदर न लगना", "चिढ़ना"],
        "answer_hi": "बिल्कुल पसंद न आना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "'बाएँ हाथ का खेल' मुहावरे का क्या अर्थ है?",
        "options_hi": ["बहुत आसान काम", "बाएँ हाथ से खेलना", "कठिन कार्य", "खेलना"],
        "answer_hi": "बहुत आसान काम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "'मुँह में पानी आना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["लालच होना", "प्यास लगना", "भोजन देखना", "नींद आना"],
        "answer_hi": "लालच होना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "'लोहे के चने चबाना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["बहुत कठिन काम करना", "चना खाना", "कड़ी मेहनत", "लोहा खाना"],
        "answer_hi": "बहुत कठिन काम करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "'हवा से बातें करना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["बहुत तेज दौड़ना", "हवा में बोलना", "अकेले में बोलना", "तूफान आना"],
        "answer_hi": "बहुत तेज दौड़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "'अकेला चना भाड़ नहीं फोड़ सकता' लोकोक्ति का क्या अर्थ है?",
        "options_hi": ["एक व्यक्ति कुछ नहीं कर सकता", "चना पकाना", "भाड़ फोड़ना", "अकेलेपन का दुख"],
        "answer_hi": "एक व्यक्ति कुछ नहीं कर सकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "'अंधा क्या चाहे दो आँखें' लोकोक्ति का क्या अर्थ है?",
        "options_hi": ["हर किसी को अपनी कमी पूरी करनी चाहिए", "अंधे की इच्छा", "आँखें माँगना", "दृष्टि पाना"],
        "answer_hi": "हर किसी को अपनी कमी पूरी करनी चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "'आब पस्त होना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["इज्जत खोना", "पानी गिरना", "थक जाना", "गिर पड़ना"],
        "answer_hi": "इज्जत खोना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "'आसमान सिर पर उठाना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["बहुत शोर मचाना", "आकाश देखना", "ऊँचा उठना", "गर्जना करना"],
        "answer_hi": "बहुत शोर मचाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "'इज्जत का पुलिंदा बाँधना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["सम्मान सहित विदा होना", "पुलिंदा बाँधना", "सामान बाँधना", "यात्रा पर जाना"],
        "answer_hi": "सम्मान सहित विदा होना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "'उल्लू बनाना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["मूर्ख बनाना", "उल्लू पकड़ना", "रात को जागना", "चालाक बनना"],
        "answer_hi": "मूर्ख बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "'ऊँची दुकान फीका पकवान' लोकोक्ति का क्या अर्थ है?",
        "options_hi": ["दिखावा बहुत काम कम", "ऊँची दुकान", "बेस्वाद भोजन", "महँगा सामान"],
        "answer_hi": "दिखावा बहुत काम कम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "'करामात दिखाना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["अद्भुत कार्य करना", "जादू दिखाना", "चमत्कार करना", "आश्चर्य करना"],
        "answer_hi": "अद्भुत कार्य करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "'कलई खुलना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["भेद खुलना", "रंग उतरना", "सच्चाई सामने आना", "छिपा रहस्य प्रकट होना"],
        "answer_hi": "भेद खुलना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "'खाक छानना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["भटकना", "धूल उड़ाना", "खोजना", "मिट्टी खोदना"],
        "answer_hi": "भटकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "'खेलते खिलाते रहना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["आराम से जीवन बिताना", "खेल खेलना", "भोजन करना", "मौज करना"],
        "answer_hi": "आराम से जीवन बिताना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "'गरदन झुकाना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["हार मान लेना", "सिर नीचा करना", "सम्मान करना", "झुकना"],
        "answer_hi": "हार मान लेना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "'गिरह में हाथ डालना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["मुसीबत में फँसना", "जेब में हाथ डालना", "चोरी करना", "खोजना"],
        "answer_hi": "मुसीबत में फँसना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "'घड़ों पानी पड़ना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["बहुत लज्जित होना", "पानी गिरना", "बारिश होना", "गीला होना"],
        "answer_hi": "बहुत लज्जित होना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "'घोड़े बेचकर सोना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["बेफिक्र होकर सोना", "घोड़ा बेचना", "आराम से सोना", "चिंतामुक्त होना"],
        "answer_hi": "बेफिक्र होकर सोना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "'चक्की चलाना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["गप्पें मारना", "आटा पीसना", "मशीन चलाना", "काम करना"],
        "answer_hi": "गप्पें मारना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "'चिता की आग' मुहावरे का क्या अर्थ है?",
        "options_hi": ["घोर शत्रुता", "चिता जलाना", "मृत्यु की आग", "दाह संस्कार"],
        "answer_hi": "घोर शत्रुता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "'छक्के छुड़ाना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["हरा देना", "छक्का मारना", "खेल में जीतना", "शर्मिंदा करना"],
        "answer_hi": "हरा देना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "'जली कटी सुनाना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["कटु वचन कहना", "आग में जलना", "चोट पहुँचाना", "दर्द देना"],
        "answer_hi": "कटु वचन कहना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "'ठेंगा दिखाना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["अवज्ञा दिखाना", "अंगूठा दिखाना", "मजाक करना", "इनकार करना"],
        "answer_hi": "अवज्ञा दिखाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "'डींग मारना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["शेखी बघारना", "जोर से बोलना", "गर्व करना", "झूठ बोलना"],
        "answer_hi": "शेखी बघारना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "'तिल का ताड़ बनाना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["छोटी बात को बढ़ा-चढ़ाकर कहना", "ताड़ का पेड़", "तिल उगाना", "कल्पना करना"],
        "answer_hi": "छोटी बात को बढ़ा-चढ़ाकर कहना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "'दाँत खट्टे करना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["हरा देना", "खट्टा खाना", "दाँत दर्द", "कठिनाई देना"],
        "answer_hi": "हरा देना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "'दिन रात एक करना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["कठिन परिश्रम करना", "समय बिताना", "जागते रहना", "मेहनत करना"],
        "answer_hi": "कठिन परिश्रम करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "'धोखे में रहना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["भ्रम में रहना", "धोखा देना", "छल करना", "विश्वास करना"],
        "answer_hi": "भ्रम में रहना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "'नाक कटना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["बेइज्जती होना", "नाक कट जाना", "चोट लगना", "शर्मिंदा होना"],
        "answer_hi": "बेइज्जती होना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "'नाक में दम करना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["परेशान करना", "साँस रोकना", "दम घुटना", "तंग करना"],
        "answer_hi": "परेशान करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "'नाच न जाने आँगन टेढ़ा' लोकोक्ति का क्या अर्थ है?",
        "options_hi": ["अयोग्य व्यक्ति दोष दूसरों को देता है", "नाचना सीखना", "आँगन साफ करना", "बहाने बनाना"],
        "answer_hi": "अयोग्य व्यक्ति दोष दूसरों को देता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "'नाम का डंका बजना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["बहुत प्रसिद्ध होना", "डंका बजाना", "नाम लेना", "ख्याति पाना"],
        "answer_hi": "बहुत प्रसिद्ध होना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "'पर निकलना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["प्रगति करना", "उड़ना", "भाग जाना", "विकास करना"],
        "answer_hi": "प्रगति करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "'पत्थर की लकीर' मुहावरे का क्या अर्थ है?",
        "options_hi": ["अटल नियम", "पत्थर पर लकीर", "कठोर व्यक्ति", "दृढ़ संकल्प"],
        "answer_hi": "अटल नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "'पानी पानी होना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["बहुत शर्मिंदा होना", "पानी में गिरना", "गीला होना", "लज्जित होना"],
        "answer_hi": "बहुत शर्मिंदा होना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "'पीठ दिखाना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["भाग जाना", "पीठ पर हाथ रखना", "मुड़कर देखना", "सहारा देना"],
        "answer_hi": "भाग जाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "'फूँक-फूँक कर कदम रखना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["बहुत सावधानी से चलना", "धीरे चलना", "डरते हुए चलना", "सतर्क रहना"],
        "answer_hi": "बहुत सावधानी से चलना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "'बाट जोहना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["प्रतीक्षा करना", "तौलना", "इंतज़ार करना", "देखना"],
        "answer_hi": "प्रतीक्षा करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "'बाल बाँका न होना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["बिल्कुल सही सलामत", "बाल सीधे करना", "कुछ न बिगड़ना", "सुरक्षित रहना"],
        "answer_hi": "बिल्कुल सही सलामत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "'भीगी बिल्ली बनना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["डरपोक बनना", "बिल्ली भीगना", "शर्मिंदा होना", "चुपचाप रहना"],
        "answer_hi": "डरपोक बनना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "'मरते दम तक' मुहावरे का क्या अर्थ है?",
        "options_hi": ["जीवन भर", "मृत्यु तक", "अंतिम साँस तक", "हमेशा के लिए"],
        "answer_hi": "जीवन भर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "'माथा ठनकना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["अचानक ख्याल आना", "सिर दर्द", "चिंता होना", "विचार आना"],
        "answer_hi": "अचानक ख्याल आना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "'मुँह की खाना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["बुरी तरह हारना", "भोजन करना", "शर्मिंदा होना", "लज्जित होना"],
        "answer_hi": "बुरी तरह हारना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "'मुँह में राम बगल में छुरी' लोकोक्ति का क्या अर्थ है?",
        "options_hi": ["मीठी बोली कपटी मन", "धार्मिक होना", "छल करना", "दिखावा करना"],
        "answer_hi": "मीठी बोली कपटी मन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "'रंग में भंग पड़ना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["मजा किरकिरा होना", "रंग बिगड़ना", "बाधा आना", "उत्साह कम होना"],
        "answer_hi": "मजा किरकिरा होना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "'लहू सूखना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["बहुत डर जाना", "रक्त सूखना", "चिंता होना", "भयभीत होना"],
        "answer_hi": "बहुत डर जाना",
        "attempted": false,
        "selected": ""
    },
       {
        "num": 71,
        "question_hi": "'लहू पसीना एक करना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["अत्यधिक परिश्रम करना", "खून बहाना", "पसीना बहाना", "कठिन संघर्ष करना"],
        "answer_hi": "अत्यधिक परिश्रम करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "'लोहा लेना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["शक्ति आज़माना", "लोहा खरीदना", "मुकाबला करना", "शत्रुता करना"],
        "answer_hi": "शक्ति आज़माना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "'वक्त की नब्ज़ पहचानना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["समय की पहचान करना", "नब्ज़ देखना", "हालात समझना", "अवसर जानना"],
        "answer_hi": "समय की पहचान करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "'सपनों के महल बनाना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["कल्पना में खोए रहना", "महल बनाना", "सपने देखना", "अवास्तविक योजना बनाना"],
        "answer_hi": "कल्पना में खोए रहना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "'सिर पर पहाड़ टूटना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["अचानक बड़ी विपत्ति आना", "पहाड़ गिरना", "भारी दुख होना", "आफत आना"],
        "answer_hi": "अचानक बड़ी विपत्ति आना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "'सीना तान के चलना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["गर्व से चलना", "सीधे चलना", "आत्मविश्वास से चलना", "अकड़कर चलना"],
        "answer_hi": "गर्व से चलना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "'सुध-बुध खोना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["होश खोना", "भूल जाना", "चकित रह जाना", "आश्चर्यचकित होना"],
        "answer_hi": "होश खोना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "'सोने पर सुहागा' मुहावरे का क्या अर्थ है?",
        "options_hi": ["अच्छे पर और अच्छा", "सोना जड़ना", "श्रृंगार करना", "बढ़िया काम"],
        "answer_hi": "अच्छे पर और अच्छा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "'हाथ मलना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["पछताना", "हाथ धोना", "चिंता करना", "निराश होना"],
        "answer_hi": "पछताना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "'हाथों में सिंदूर लेना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["युद्ध के लिए तैयार होना", "श्रृंगार करना", "सिंदूर भरना", "ललकारना"],
        "answer_hi": "युद्ध के लिए तैयार होना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "'हाथ साफ करना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["चुरा लेना", "हाथ धोना", "सफाई करना", "काम पूरा करना"],
        "answer_hi": "चुरा लेना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "'हिम्मत हारना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["निराश हो जाना", "डर जाना", "थक जाना", "हार मान लेना"],
        "answer_hi": "निराश हो जाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "'हैंसियों पर चढ़ाना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["बहुत प्रशंसा करना", "ऊँचा उठाना", "महत्व देना", "आदर करना"],
        "answer_hi": "बहुत प्रशंसा करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "'अक्ल पर पत्थर पड़ना' लोकोक्ति का क्या अर्थ है?",
        "options_hi": ["बुद्धि काम न करना", "मूर्ख होना", "समझ न आना", "जिद्दी होना"],
        "answer_hi": "बुद्धि काम न करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "'अपनी-अपनी ढपली अपना-अपना राग' लोकोक्ति का क्या अर्थ है?",
        "options_hi": ["हर कोई अपनी बात चाहता है", "अलग अलग राय", "संगीत बजाना", "मतभेद होना"],
        "answer_hi": "हर कोई अपनी बात चाहता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "'आग के दरिया में पाँव डालना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["खतरा मोल लेना", "आग में कूदना", "साहसिक काम करना", "जोखिम उठाना"],
        "answer_hi": "खतरा मोल लेना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "'ईद का चाँद होना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["बहुत कम दिखाई देना", "चाँद देखना", "दुर्लभ होना", "अवसर मिलना"],
        "answer_hi": "बहुत कम दिखाई देना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "'कमर कसना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["तैयार हो जाना", "कमर बाँधना", "मेहनत के लिए तैयार होना", "संघर्ष के लिए तैयार होना"],
        "answer_hi": "तैयार हो जाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "'कीचड़ उछालना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["बदनाम करना", "गंदगी फेंकना", "अपयश फैलाना", "चरित्र हनन करना"],
        "answer_hi": "बदनाम करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "'गुड़ गोबर करना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["अच्छा काम बिगाड़ना", "गुड़ फेंकना", "बरबाद करना", "मौका गँवाना"],
        "answer_hi": "अच्छा काम बिगाड़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "'घाव पर नमक छिड़कना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["दुख और बढ़ाना", "नमक लगाना", "चोट पहुँचाना", "पीड़ा देना"],
        "answer_hi": "दुख और बढ़ाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "'चाँदी काटना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["बहुत लाभ कमाना", "चाँदी बेचना", "धन कमाना", "मुनाफा कमाना"],
        "answer_hi": "बहुत लाभ कमाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "'जिसकी लाठी उसकी भैंस' लोकोक्ति का क्या अर्थ है?",
        "options_hi": ["ताकतवर की जीत", "लाठी चलाना", "शक्ति का दुरुपयोग", "अधिकार जमाना"],
        "answer_hi": "ताकतवर की जीत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "'टेढ़ी खीर' मुहावरे का क्या अर्थ है?",
        "options_hi": ["कठिन समस्या", "खीर पकाना", "मुश्किल काम", "जटिल मामला"],
        "answer_hi": "कठिन समस्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "'दाल-भात में मूसलचंद' लोकोक्ति का क्या अर्थ है?",
        "options_hi": ["अनुपयुक्त व्यक्ति", "मूसल लाना", "बेमेल चीज़", "अटपटा व्यक्ति"],
        "answer_hi": "अनुपयुक्त व्यक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "'धर्म का ठेकेदार' मुहावरे का क्या अर्थ है?",
        "options_hi": ["धर्म के नाम पर दिखावा करने वाला", "धर्म की रक्षा करने वाला", "पुजारी", "आडंबरी व्यक्ति"],
        "answer_hi": "धर्म के नाम पर दिखावा करने वाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "'न हाथ लगे न पाँव पसारी' लोकोक्ति का क्या अर्थ है?",
        "options_hi": ["बिल्कुल असहाय स्थिति", "हाथ पाँव फैलाना", "कुछ न कर पाना", "लाचार होना"],
        "answer_hi": "बिल्कुल असहाय स्थिति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "'पेट में चूहे कूदना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["बहुत भूख लगना", "पेट में दर्द", "भूखा रहना", "चूहा देखना"],
        "answer_hi": "बहुत भूख लगना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "'मुँह ताकना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["आशा करना", "चेहरा देखना", "इंतज़ार करना", "उम्मीद लगाना"],
        "answer_hi": "आशा करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "'हवाई किले बनाना' मुहावरे का क्या अर्थ है?",
        "options_hi": ["अवास्तविक योजनाएँ बनाना", "किला बनाना", "कल्पना करना", "असंभव सपने देखना"],
        "answer_hi": "अवास्तविक योजनाएँ बनाना",
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