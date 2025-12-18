const questions = [
    {
        "num": 1,
        "question_hi": "दिनकर की कविता 'हमारी नींद' में किस ऐतिहासिक नगर का उल्लेख हुआ है?",
        "options_hi": ["दिल्ली", "लाहौर", "अमृतसर", "कलकत्ता"],
        "answer_hi": "अमृतसर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "'हमारी नींद' कविता में 'लहू के छींटे' किस घटना की याद दिलाते हैं?",
        "options_hi": ["भगत सिंह की फाँसी", "जलियाँवाला बाग हत्याकांड", "काकोरी कांड", "चौरी चौरा कांड"],
        "answer_hi": "जलियाँवाला बाग हत्याकांड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "कविता में 'अमर शहीद' किसे कहा गया है?",
        "options_hi": ["उधम सिंह", "भगत सिंह", "सुखदेव", "राजगुरु"],
        "answer_hi": "उधम सिंह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "दिनकर ने इस कविता में किस वर्ष की ऐतिहासिक घटना का जिक्र किया है?",
        "options_hi": ["1919", "1929", "1942", "1947"],
        "answer_hi": "1919",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "'हमारी नींद' कविता किस साहित्यिक विधा का उदाहरण है?",
        "options_hi": ["गीत", "ग़ज़ल", "प्रबंध काव्य", "मुक्तक"],
        "answer_hi": "प्रबंध काव्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "कविता में 'नया इतिहास' किस रंग में लिखा जा रहा है?",
        "options_hi": ["लाल रंग", "हरा रंग", "काला रंग", "सफेद रंग"],
        "answer_hi": "लाल रंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "दिनकर ने कविता में किस विदेशी नगर का नाम लिया है?",
        "options_hi": ["लंदन", "पेरिस", "वाशिंगटन", "मॉस्को"],
        "answer_hi": "लंदन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "'हमारी नींद' कविता में प्रयुक्त 'चिता' शब्द किसका प्रतीक है?",
        "options_hi": ["मृत्यु", "बलिदान", "शोक", "अंत"],
        "answer_hi": "बलिदान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "कविता में 'गोली का छर्रा' किस भावना को जगाता है?",
        "options_hi": ["डर", "प्रतिशोध", "शोक", "उदासी"],
        "answer_hi": "प्रतिशोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "दिनकर की इस कविता का मुख्य स्वर क्या है?",
        "options_hi": ["शोक", "क्रांति", "प्रेम", "भक्ति"],
        "answer_hi": "क्रांति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "'हमारी नींद' कविता किस काव्य संग्रह में संकलित है?",
        "options_hi": ["द्वन्द्वगीत", "रेणुका", "हुंकार", "रसवंती"],
        "answer_hi": "हुंकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "कविता में 'सोये हुए' शब्द से कवि का क्या आशय है?",
        "options_hi": ["आलसी लोग", "उदासीन देशवासी", "बूढ़े लोग", "अशिक्षित लोग"],
        "answer_hi": "उदासीन देशवासी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "दिनकर ने कविता में किस प्रकार के बिम्बों का सर्वाधिक प्रयोग किया है?",
        "options_hi": ["प्रकृति बिम्ब", "युद्ध बिम्ब", "ऐतिहासिक बिम्ब", "धार्मिक बिम्ब"],
        "answer_hi": "युद्ध बिम्ब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "'लहू के अक्षर' किस प्रकार के इतिहास की ओर संकेत करते हैं?",
        "options_hi": ["लिखित इतिहास", "मौखिक इतिहास", "रक्तिम इतिहास", "वीरगाथात्मक इतिहास"],
        "answer_hi": "रक्तिम इतिहास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "कविता में 'शहीदों की चिताएँ' किस भावना को प्रकट करती हैं?",
        "options_hi": ["शोक", "गर्व", "क्रोध", "विद्रोह"],
        "answer_hi": "विद्रोह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "दिनकर ने इस कविता में किस रस की प्रधानता है?",
        "options_hi": ["श्रृंगार रस", "वीर रस", "करुण रस", "रौद्र रस"],
        "answer_hi": "वीर रस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "'हमारी नींद' कविता की भाषा कैसी है?",
        "options_hi": ["कोमल", "उग्र", "मधुर", "व्यंग्यपूर्ण"],
        "answer_hi": "उग्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "कविता में 'नया सवेरा' किस घटना का प्रतीक है?",
        "options_hi": ["स्वतंत्रता", "क्रांति", "जनजागरण", "सुधार"],
        "answer_hi": "स्वतंत्रता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "दिनकर ने कविता में किस प्रकार के अलंकार का प्रयोग किया है?",
        "options_hi": ["उपमा", "रूपक", "उत्प्रेक्षा", "यमक"],
        "answer_hi": "रूपक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "'चिर निद्रा' से कवि का क्या तात्पर्य है?",
        "options_hi": ["मृत्यु", "अज्ञान", "गुलामी", "आलस्य"],
        "answer_hi": "गुलामी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "कविता में 'जागरण' का आह्वान किसके लिए है?",
        "options_hi": ["युवाओं के लिए", "किसानों के लिए", "सभी भारतीयों के लिए", "मजदूरों के लिए"],
        "answer_hi": "सभी भारतीयों के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "दिनकर की इस कविता का प्रकाशन वर्ष क्या है?",
        "options_hi": ["1938", "1942", "1947", "1950"],
        "answer_hi": "1938",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "'हमारी नींद' कविता में किस प्रकार की शैली है?",
        "options_hi": ["वर्णनात्मक", "आह्वानात्मक", "व्यंग्यात्मक", "भावात्मक"],
        "answer_hi": "आह्वानात्मक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "कविता में 'इतिहास की किताब' किस प्रकार लिखी जा रही है?",
        "options_hi": ["कलम से", "रक्त से", "स्याही से", "अश्रु से"],
        "answer_hi": "रक्त से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "दिनकर ने कविता में किस प्रकार के प्रतीकों का प्रयोग किया है?",
        "options_hi": ["धार्मिक प्रतीक", "राष्ट्रीय प्रतीक", "प्राकृतिक प्रतीक", "सांस्कृतिक प्रतीक"],
        "answer_hi": "राष्ट्रीय प्रतीक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "'लहू का रंग' कविता में किसका प्रतीक है?",
        "options_hi": ["प्रेम", "बलिदान", "क्रोध", "शौर्य"],
        "answer_hi": "बलिदान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "कविता में 'स्वप्न' शब्द किस ओर संकेत करता है?",
        "options_hi": ["कल्पना", "आशा", "स्वतंत्रता", "भविष्य"],
        "answer_hi": "स्वतंत्रता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "दिनकर ने इस कविता में किस महान नेता का संदर्भ दिया है?",
        "options_hi": ["महात्मा गांधी", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू", "बाल गंगाधर तिलक"],
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "'हमारी नींद' कविता का केंद्रीय विचार क्या है?",
        "options_hi": ["राष्ट्रीय जागरण", "सामाजिक सुधार", "धार्मिक एकता", "आर्थिक विकास"],
        "answer_hi": "राष्ट्रीय जागरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "कविता में 'अंधेरा' किस स्थिति का प्रतीक है?",
        "options_hi": ["अज्ञान", "गुलामी", "दुःख", "भय"],
        "answer_hi": "गुलामी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "दिनकर ने कविता में किस प्रकार की छंद योजना का प्रयोग किया है?",
        "options_hi": ["दोहा", "चौपाई", "मुक्त छंद", "सोरठा"],
        "answer_hi": "मुक्त छंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "'शहीदों की आत्माएँ' किससे प्रश्न कर रही हैं?",
        "options_hi": ["जीवितों से", "भविष्य से", "इतिहास से", "कवि से"],
        "answer_hi": "जीवितों से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "कविता में 'गुलामी की जंजीरें' किसे कहा गया है?",
        "options_hi": ["ब्रिटिश शासन", "सामाजिक बंधन", "आर्थिक शोषण", "मानसिक गुलामी"],
        "answer_hi": "ब्रिटिश शासन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "दिनकर ने इस कविता में किस ऋतु का वर्णन किया है?",
        "options_hi": ["वसंत", "ग्रीष्म", "शरद", "हेमंत"],
        "answer_hi": "वसंत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "'हमारी नींद' कविता की मूल भावना क्या है?",
        "options_hi": ["देशप्रेम", "विद्रोह", "शोक", "आशा"],
        "answer_hi": "विद्रोह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "कविता में 'अमर गाथा' किसकी कहानी है?",
        "options_hi": ["शहीदों की", "भारत की", "कवि की", "क्रांति की"],
        "answer_hi": "शहीदों की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "दिनकर ने कविता में किस प्रकार के संवाद का प्रयोग किया है?",
        "options_hi": ["प्रत्यक्ष संवाद", "अप्रत्यक्ष संवाद", "आत्मसंवाद", "कथोपकथन"],
        "answer_hi": "आत्मसंवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "'हमारी नींद' कविता शीर्षक की सार्थकता क्यों है?",
        "options_hi": ["प्रतीकात्मक अर्थ", "शाब्दिक अर्थ", "व्यंग्यात्मक अर्थ", "रूपकात्मक अर्थ"],
        "answer_hi": "प्रतीकात्मक अर्थ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "कविता में 'लहू के छींटे' किस भावना को जगाते हैं?",
        "options_hi": ["क्रांति", "शोक", "प्रतिशोध", "गर्व"],
        "answer_hi": "प्रतिशोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "दिनकर ने इस कविता में किस प्रकार की छवियाँ बनाई हैं?",
        "options_hi": ["सुंदर छवियाँ", "भयानक छवियाँ", "ऐतिहासिक छवियाँ", "काल्पनिक छवियाँ"],
        "answer_hi": "ऐतिहासिक छवियाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "'जागो' का नारा किस उद्देश्य से दिया गया है?",
        "options_hi": ["धार्मिक जागरण", "राजनीतिक जागरण", "सामाजिक जागरण", "राष्ट्रीय जागरण"],
        "answer_hi": "राष्ट्रीय जागरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "कविता में 'स्वर्णिम भविष्य' किसकी कल्पना है?",
        "options_hi": ["स्वतंत्र भारत", "समृद्ध भारत", "शक्तिशाली भारत", "विकसित भारत"],
        "answer_hi": "स्वतंत्र भारत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "दिनकर ने कविता में किस प्रकार की शब्दावली का प्रयोग किया है?",
        "options_hi": ["तत्सम प्रधान", "तद्भव प्रधान", "उर्दू मिश्रित", "अंग्रेजी मिश्रित"],
        "answer_hi": "तत्सम प्रधान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "'हमारी नींद' कविता की संरचना कैसी है?",
        "options_hi": ["गीतात्मक", "कथात्मक", "नाटकीय", "भावात्मक"],
        "answer_hi": "भावात्मक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "कविता में 'अतीत की यादें' किससे जुड़ी हैं?",
        "options_hi": ["शहीदों से", "पूर्वजों से", "संस्कृति से", "परंपराओं से"],
        "answer_hi": "शहीदों से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "दिनकर ने कविता में किस प्रकार के प्रश्न उठाए हैं?",
        "options_hi": ["दार्शनिक", "सामाजिक", "राजनीतिक", "नैतिक"],
        "answer_hi": "नैतिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "'नया इतिहास' किस भाव से लिखा जा रहा है?",
        "options_hi": ["प्रेम", "बलिदान", "क्रोध", "गर्व"],
        "answer_hi": "बलिदान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "कविता में 'सपनों का संसार' किसका है?",
        "options_hi": ["कवि का", "युवाओं का", "शहीदों का", "भारत का"],
        "answer_hi": "शहीदों का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "दिनकर ने कविता में किस प्रकार के मुहावरों का प्रयोग किया है?",
        "options_hi": ["लोकप्रिय", "साहित्यिक", "क्षेत्रीय", "नवीन"],
        "answer_hi": "साहित्यिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "'हमारी नींद' कविता की भाषा शैली क्या है?",
        "options_hi": ["वर्णनात्मक", "आह्वानात्मक", "व्यंग्यात्मक", "विधानात्मक"],
        "answer_hi": "आह्वानात्मक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "कविता में 'रक्त के फूल' किसे कहा गया है?",
        "options_hi": ["शहीदों", "क्रांतिकारियों", "स्वतंत्रता सेनानियों", "देशभक्तों"],
        "answer_hi": "शहीदों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "दिनकर ने कविता में किस प्रकार के प्रतीकों का प्रयोग किया है?",
        "options_hi": ["प्राकृतिक", "सांस्कृतिक", "ऐतिहासिक", "धार्मिक"],
        "answer_hi": "ऐतिहासिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "'जागरण का गीत' किसे कहा गया है?",
        "options_hi": ["इस कविता को", "क्रांति को", "स्वतंत्रता को", "जनजागरण को"],
        "answer_hi": "इस कविता को",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "कविता में 'अंधकार मिटाना' किसका दायित्व है?",
        "options_hi": ["कवि का", "युवाओं का", "सभी का", "नेताओं का"],
        "answer_hi": "सभी का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "दिनकर ने कविता में किस प्रकार की तुलना की है?",
        "options_hi": ["अतीत-वर्तमान", "स्वप्न-यथार्थ", "नींद-जागरण", "गुलामी-स्वतंत्रता"],
        "answer_hi": "नींद-जागरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "'हमारी नींद' कविता का काव्य संगीत कैसा है?",
        "options_hi": ["मधुर", "प्रभावशाली", "कठोर", "गंभीर"],
        "answer_hi": "गंभीर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "कविता में 'स्मृति के दीप' किसे कहा गया है?",
        "options_hi": ["शहीदों की याद", "संस्कृति की विरासत", "धर्म की शिक्षा", "इतिहास की घटनाएँ"],
        "answer_hi": "शहीदों की याद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "दिनकर ने कविता में किस प्रकार के विशेषणों का प्रयोग किया है?",
        "options_hi": ["वर्णनात्मक", "भावात्मक", "तुलनात्मक", "निश्चयवाचक"],
        "answer_hi": "भावात्मक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "'नया युग' किसके आगमन का सूचक है?",
        "options_hi": ["स्वतंत्रता", "क्रांति", "प्रगति", "परिवर्तन"],
        "answer_hi": "स्वतंत्रता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "कविता में 'अमर कहानी' किसकी है?",
        "options_hi": ["शहीदों की", "भारत की", "कवि की", "मानवता की"],
        "answer_hi": "शहीदों की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "दिनकर ने कविता में किस प्रकार के वातावरण का निर्माण किया है?",
        "options_hi": ["रोमांचक", "उदास", "गंभीर", "आशावादी"],
        "answer_hi": "गंभीर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "'हमारी नींद' कविता में अनुप्रास योजना कैसी है?",
        "options_hi": ["छंदोबद्ध", "मुक्त", "नियमित", "अनियमित"],
        "answer_hi": "मुक्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "कविता में 'स्वप्निल संसार' किसका है?",
        "options_hi": ["कवि का", "युवाओं का", "शहीदों का", "स्वतंत्र भारत का"],
        "answer_hi": "स्वतंत्र भारत का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "दिनकर ने कविता में किस प्रकार की उक्तियाँ प्रयुक्त की हैं?",
        "options_hi": ["लोकोक्तियाँ", "साहित्यिक उक्तियाँ", "ऐतिहासिक उक्तियाँ", "दार्शनिक उक्तियाँ"],
        "answer_hi": "साहित्यिक उक्तियाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "'जीवन की राह' किस ओर ले जाती है?",
        "options_hi": ["स्वतंत्रता", "सफलता", "मोक्ष", "समृद्धि"],
        "answer_hi": "स्वतंत्रता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "कविता में 'अमर बलिदान' किसे कहा गया है?",
        "options_hi": ["शहीदों का त्याग", "कवि की रचना", "देशभक्ति", "स्वतंत्रता संग्राम"],
        "answer_hi": "शहीदों का त्याग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "दिनकर ने कविता में किस प्रकार के दृष्टांत दिए हैं?",
        "options_hi": ["ऐतिहासिक", "पौराणिक", "सामाजिक", "प्राकृतिक"],
        "answer_hi": "ऐतिहासिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "'हमारी नींद' कविता का काव्य स्वर क्या है?",
        "options_hi": ["कोमल", "कठोर", "प्रखर", "मधुर"],
        "answer_hi": "प्रखर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "कविता में 'स्वर्णिम किरणें' किसकी हैं?",
        "options_hi": ["सूर्य की", "आशा की", "स्वतंत्रता की", "भविष्य की"],
        "answer_hi": "स्वतंत्रता की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "दिनकर ने कविता में किस प्रकार के संबोधनों का प्रयोग किया है?",
        "options_hi": ["सीधे", "परोक्ष", "सामूहिक", "व्यक्तिगत"],
        "answer_hi": "सामूहिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "'अतीत का बोझ' किसे कहा गया है?",
        "options_hi": ["गुलामी", "परंपराएँ", "दुःख", "यादें"],
        "answer_hi": "गुलामी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "कविता में 'नव जीवन' किससे मिलेगा?",
        "options_hi": ["संघर्ष", "त्याग", "बलिदान", "जागरण"],
        "answer_hi": "जागरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "दिनकर ने कविता में किस प्रकार के विरोधाभास दर्शाए हैं?",
        "options_hi": ["वैचारिक", "भावात्मक", "सामाजिक", "राजनीतिक"],
        "answer_hi": "भावात्मक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "'हमारी नींद' कविता की आधुनिक प्रासंगिकता क्या है?",
        "options_hi": ["राष्ट्रभक्ति", "सामाजिक जागरण", "ऐतिहासिक स्मृति", "सांस्कृतिक पहचान"],
        "answer_hi": "राष्ट्रभक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "कविता में 'अमर गीत' किसे कहा गया है?",
        "options_hi": ["शहीदों की गाथा", "कवि की रचना", "देशभक्ति गीत", "लोकगीत"],
        "answer_hi": "शहीदों की गाथा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "दिनकर ने कविता में किस प्रकार की भाव योजना की है?",
        "options_hi": ["सरल", "जटिल", "बहुस्तरीय", "एकांगी"],
        "answer_hi": "बहुस्तरीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "'स्वतंत्रता का स्वप्न' किसने देखा?",
        "options_hi": ["शहीदों", "कवि", "सभी भारतीयों", "युवाओं"],
        "answer_hi": "शहीदों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "कविता में 'रक्त की लकीर' किसे कहा गया है?",
        "options_hi": ["शहीदों का मार्ग", "इतिहास", "क्रांति का पथ", "स्वतंत्रता संग्राम"],
        "answer_hi": "शहीदों का मार्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "दिनकर ने कविता में किस प्रकार के उदाहरण दिए हैं?",
        "options_hi": ["ऐतिहासिक", "पौराणिक", "सांस्कृतिक", "सामाजिक"],
        "answer_hi": "ऐतिहासिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "'हमारी नींद' कविता का सामाजिक महत्व क्या है?",
        "options_hi": ["राष्ट्रीय चेतना", "सामाजिक एकता", "सांस्कृतिक पहचान", "आर्थिक विकास"],
        "answer_hi": "राष्ट्रीय चेतना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "कविता में 'अमर यश' किसका है?",
        "options_hi": ["शहीदों", "कवि", "देश", "युग"],
        "answer_hi": "शहीदों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "दिनकर ने कविता में किस प्रकार की ताल दी है?",
        "options_hi": ["नियमित", "अनियमित", "मंद", "तेज"],
        "answer_hi": "तेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "'जीवन का लक्ष्य' क्या बताया गया है?",
        "options_hi": ["स्वतंत्रता", "सेवा", "त्याग", "संघर्ष"],
        "answer_hi": "स्वतंत्रता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "कविता में 'अमर संदेश' किसका है?",
        "options_hi": ["शहीदों", "कवि", "देश", "इतिहास"],
        "answer_hi": "शहीदों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "दिनकर ने कविता में किस प्रकार के बिंब बनाए हैं?",
        "options_hi": ["दृश्य", "श्रव्य", "स्पर्श", "गंध"],
        "answer_hi": "दृश्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "'हमारी नींद' कविता की ऐतिहासिक पृष्ठभूमि क्या है?",
        "options_hi": ["स्वतंत्रता संग्राम", "सामाजिक सुधार", "सांस्कृतिक पुनर्जागरण", "आर्थिक मंदी"],
        "answer_hi": "स्वतंत्रता संग्राम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "कविता में 'स्वर्णिम सपना' किसका है?",
        "options_hi": ["स्वतंत्र भारत", "समृद्ध भारत", "शक्तिशाली भारत", "विकसित भारत"],
        "answer_hi": "स्वतंत्र भारत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "दिनकर ने कविता में किस प्रकार की वाक्य संरचना का प्रयोग किया है?",
        "options_hi": ["सरल", "मिश्रित", "संयुक्त", "जटिल"],
        "answer_hi": "सरल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "'जीवन का अर्थ' क्या बताया गया है?",
        "options_hi": ["देशसेवा", "स्वतंत्रता", "बलिदान", "संघर्ष"],
        "answer_hi": "देशसेवा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "कविता में 'अमर विरासत' किसे कहा गया है?",
        "options_hi": ["शहीदों का बलिदान", "भारत की संस्कृति", "स्वतंत्रता", "देशभक्ति"],
        "answer_hi": "शहीदों का बलिदान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "दिनकर ने कविता में किस प्रकार के अलंकारों का प्रयोग किया है?",
        "options_hi": ["अनुप्रास", "यमक", "श्लेष", "उपमा"],
        "answer_hi": "अनुप्रास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "'हमारी नींद' कविता का सांस्कृतिक महत्व क्या है?",
        "options_hi": ["राष्ट्रीय गौरव", "सांस्कृतिक एकता", "ऐतिहासिक स्मृति", "सामाजिक मूल्य"],
        "answer_hi": "ऐतिहासिक स्मृति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "कविता में 'स्वतंत्रता का पथ' किसने बनाया?",
        "options_hi": ["शहीदों", "नेताओं", "जनता", "युवाओं"],
        "answer_hi": "शहीदों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "दिनकर ने कविता में किस प्रकार के मानवीय मूल्यों को स्थापित किया है?",
        "options_hi": ["देशभक्ति", "सहनशीलता", "न्याय", "समानता"],
        "answer_hi": "देशभक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "'जीवन की दिशा' क्या निर्धारित करती है?",
        "options_hi": ["देशभक्ति", "शिक्षा", "धर्म", "परंपरा"],
        "answer_hi": "देशभक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "कविता में 'अमर स्मृति' किसकी है?",
        "options_hi": ["शहीदों", "कवि", "राष्ट्र", "युग"],
        "answer_hi": "शहीदों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "दिनकर की 'हमारी नींद' कविता का मूल संदेश क्या है?",
        "options_hi": ["जागो और स्वतंत्र हो जाओ", "शांति से रहो", "परंपरा निभाओ", "शिक्षा प्राप्त करो"],
        "answer_hi": "जागो और स्वतंत्र हो जाओ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "कविता में 'नींद' शब्द का क्या प्रतीकार्थ है?",
        "options_hi": ["आलस्य", "उदासीनता", "शांति", "थकान"],
        "answer_hi": "उदासीनता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "दिनकर ने कविता में किस प्रकार की छंद रचना का प्रयोग किया है?",
        "options_hi": ["नियमित छंद", "अनियमित छंद", "मुक्त छंद", "गीतिका छंद"],
        "answer_hi": "मुक्त छंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "'हमारी नींद' कविता किस कालखंड की रचना है?",
        "options_hi": ["छायावाद युग", "रहस्यवाद युग", "प्रगतिवाद युग", "प्रयोगवाद युग"],
        "answer_hi": "प्रगतिवाद युग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "दिनकर की इस कविता में किस प्रकार की दृष्टि मिलती है?",
        "options_hi": ["राष्ट्रवादी दृष्टि", "सामाजिक दृष्टि", "धार्मिक दृष्टि", "आर्थिक दृष्टि"],
        "answer_hi": "राष्ट्रवादी दृष्टि",
        "attempted": false,
        "selected": ""
    }
];

// All the JavaScript functions remain exactly the same as previous
// Just replace the questions array with this new one
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