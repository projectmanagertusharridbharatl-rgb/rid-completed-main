const questions = [
    {
        "num": 1,
        "question_hi": "क्रियाविशेषण की पहचान क्या है?",
        "options_hi": ["क्रिया की विशेषता बताता है", "नाम में विशेषण देता है", "सम्बन्ध दर्शाता है", "उपसर्ग होता है"],
        "answer_hi": "क्रिया की विशेषता बताता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "सम्बन्धसूचक की पहचान क्या है?",
        "options_hi": ["दो पदों के बीच सम्बन्ध दर्शाता है", "क्रिया की विशेषता बताता है", "नाम विशेषित करता है", "धातु से जोड़ता है"],
        "answer_hi": "दो पदों के बीच सम्बन्ध दर्शाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "उपसर्ग की पहचान क्या है?",
        "options_hi": ["धातु के अर्थ को बदल देता है", "क्रिया की विशेषता बताता है", "सम्बन्ध दर्शाता है", "नाम पर लगता है"],
        "answer_hi": "धातु के अर्थ को बदल देता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "क्रियाविशेषण कितने प्रकार के होते हैं?",
        "options_hi": ["चार", "दो", "तीन", "पाँच"],
        "answer_hi": "चार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "कालसूचक क्रियाविशेषण क्या है?",
        "options_hi": ["आज", "शीघ्र", "यहाँ", "सुन्दर"],
        "answer_hi": "आज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "स्थानसूचक क्रियाविशेषण क्या है?",
        "options_hi": ["यहाँ", "आज", "शीघ्र", "बहुत"],
        "answer_hi": "यहाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "परिमाणसूचक क्रियाविशेषण क्या है?",
        "options_hi": ["बहुत", "यहाँ", "आज", "शीघ्र"],
        "answer_hi": "बहुत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "रीतिसूचक क्रियाविशेषण क्या है?",
        "options_hi": ["शीघ्र", "यहाँ", "आज", "बहुत"],
        "answer_hi": "शीघ्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "कालसूचक क्रियाविशेषण कौन से हैं?",
        "options_hi": ["आज, कल, परसों", "यहाँ, वहाँ, कहाँ", "बहुत, थोड़ा, सब", "शीघ्र, धीरे, सुन्दर"],
        "answer_hi": "आज, कल, परसों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "स्थानसूचक क्रियाविशेषण कौन से हैं?",
        "options_hi": ["यहाँ, वहाँ, कहाँ", "आज, कल, परसों", "बहुत, थोड़ा, सब", "शीघ्र, धीरे, सुन्दर"],
        "answer_hi": "यहाँ, वहाँ, कहाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "परिमाणसूचक क्रियाविशेषण कौन से हैं?",
        "options_hi": ["बहुत, थोड़ा, सब", "यहाँ, वहाँ, कहाँ", "आज, कल, परसों", "शीघ्र, धीरे, सुन्दर"],
        "answer_hi": "बहुत, थोड़ा, सब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "रीतिसूचक क्रियाविशेषण कौन से हैं?",
        "options_hi": ["शीघ्र, धीरे, सुन्दर", "यहाँ, वहाँ, कहाँ", "आज, कल, परसों", "बहुत, थोड़ा, सब"],
        "answer_hi": "शीघ्र, धीरे, सुन्दर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "सम्बन्धसूचक कितने प्रकार के होते हैं?",
        "options_hi": ["चार", "दो", "तीन", "पाँच"],
        "answer_hi": "चार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "समुच्चयबोधक क्या है?",
        "options_hi": ["और", "भी", "लेकिन", "या"],
        "answer_hi": "और",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "विकल्पबोधक क्या है?",
        "options_hi": ["या", "और", "भी", "लेकिन"],
        "answer_hi": "या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "विरोधबोधक क्या है?",
        "options_hi": ["लेकिन", "और", "या", "भी"],
        "answer_hi": "लेकिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "निश्चयबोधक क्या है?",
        "options_hi": ["ही", "और", "या", "लेकिन"],
        "answer_hi": "ही",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "अवधारणबोधक क्या है?",
        "options_hi": ["भी", "और", "या", "लेकिन"],
        "answer_hi": "भी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "उपसर्ग कितने होते हैं?",
        "options_hi": ["बीस", "बाईस", "चौबीस", "अठारह"],
        "answer_hi": "बीस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "उपसर्गों का प्रयोग कहाँ होता है?",
        "options_hi": ["धातु के पहले", "नाम के पहले", "विशेषण के पहले", "सब जगह"],
        "answer_hi": "धातु के पहले",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "प्र उपसर्ग का अर्थ क्या है?",
        "options_hi": ["प्रकर्ष", "निन्दा", "विरोध", "अपकर्ष"],
        "answer_hi": "प्रकर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "परा उपसर्ग का अर्थ क्या है?",
        "options_hi": ["अपकर्ष", "प्रकर्ष", "निन्दा", "विरोध"],
        "answer_hi": "अपकर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "अप उपसर्ग का अर्थ क्या है?",
        "options_hi": ["निन्दा", "प्रकर्ष", "अपकर्ष", "विरोध"],
        "answer_hi": "निन्दा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "अव उपसर्ग का अर्थ क्या है?",
        "options_hi": ["अपकर्ष", "प्रकर्ष", "निन्दा", "विरोध"],
        "answer_hi": "अपकर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "सम् उपसर्ग का अर्थ क्या है?",
        "options_hi": ["सम्यक्त्व", "विरोध", "निन्दा", "अपकर्ष"],
        "answer_hi": "सम्यक्त्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "अनु उपसर्ग का अर्थ क्या है?",
        "options_hi": ["पीछे", "पहले", "सम्यक्त्व", "विरोध"],
        "answer_hi": "पीछे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "अपि उपसर्ग का अर्थ क्या है?",
        "options_hi": ["संग", "विरोध", "निन्दा", "अपकर्ष"],
        "answer_hi": "संग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "नि उपसर्ग का अर्थ क्या है?",
        "options_hi": ["नियम", "विरोध", "निन्दा", "नीचे"],
        "answer_hi": "नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "धा उपसर्ग का अर्थ क्या है?",
        "options_hi": ["विधान", "नियम", "निन्दा", "नीचे"],
        "answer_hi": "विधान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "वि उपसर्ग का अर्थ क्या है?",
        "options_hi": ["विशेष", "विरोध", "निन्दा", "अपकर्ष"],
        "answer_hi": "विशेष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "आङ् उपसर्ग का अर्थ क्या है?",
        "options_hi": ["सब ओर से", "विशेष", "विरोध", "निन्दा"],
        "answer_hi": "सब ओर से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "निर् उपसर्ग का अर्थ क्या है?",
        "options_hi": ["बाहर", "सब ओर से", "विशेष", "विरोध"],
        "answer_hi": "बाहर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "दुर् उपसर्ग का अर्थ क्या है?",
        "options_hi": ["कुत्सित", "बाहर", "सब ओर से", "विशेष"],
        "answer_hi": "कुत्सित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "सु उपसर्ग का अर्थ क्या है?",
        "options_hi": ["शोभन", "कुत्सित", "बाहर", "सब ओर से"],
        "answer_hi": "शोभन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "उत् उपसर्ग का अर्थ क्या है?",
        "options_hi": ["ऊपर", "शोभन", "कुत्सित", "बाहर"],
        "answer_hi": "ऊपर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "अधि उपसर्ग का अर्थ क्या है?",
        "options_hi": ["ऊपर", "ऊपर (ऊर्ध्व)", "शोभन", "कुत्सित"],
        "answer_hi": "ऊपर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "अभि उपसर्ग का अर्थ क्या है?",
        "options_hi": ["आभिमुख्य", "ऊपर", "ऊपर (ऊर्ध्व)", "शोभन"],
        "answer_hi": "आभिमुख्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "प्रति उपसर्ग का अर्थ क्या है?",
        "options_hi": ["प्रतिकूल", "आभिमुख्य", "ऊपर", "ऊपर (ऊर्ध्व)"],
        "answer_hi": "प्रतिकूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "परि उपसर्ग का अर्थ क्या है?",
        "options_hi": ["सब ओर से", "प्रतिकूल", "आभिमुख्य", "ऊपर"],
        "answer_hi": "सब ओर से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "उप उपसर्ग का अर्थ क्या है?",
        "options_hi": ["समीप", "सब ओर से", "प्रतिकूल", "आभिमुख्य"],
        "answer_hi": "समीप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "क्रियाविशेषण की विशेषता क्या है?",
        "options_hi": ["बदलता नहीं", "बदलता है", "विभक्ति लेता है", "लिंग रखता है"],
        "answer_hi": "बदलता नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "सम्बन्धसूचक की विशेषता क्या है?",
        "options_hi": ["बदलता नहीं", "बदलता है", "विभक्ति लेता है", "लिंग रखता है"],
        "answer_hi": "बदलता नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "उपसर्ग की विशेषता क्या है?",
        "options_hi": ["धातु के साथ जुड़ता है", "स्वतंत्र होता है", "विभक्ति लेता है", "लिंग रखता है"],
        "answer_hi": "धातु के साथ जुड़ता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "क्रियाविशेषण किसके विशेषण हैं?",
        "options_hi": ["क्रिया के", "नाम के", "विशेषण के", "सम्बन्ध के"],
        "answer_hi": "क्रिया के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "सम्बन्धसूचक किसके सूचक हैं?",
        "options_hi": ["दो पदों के सम्बन्ध के", "क्रिया के", "नाम के", "विशेषण के"],
        "answer_hi": "दो पदों के सम्बन्ध के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "उपसर्ग किसके अर्थ बदलने वाले हैं?",
        "options_hi": ["धातुओं के", "नामों के", "विशेषणों के", "क्रियाओं के"],
        "answer_hi": "धातुओं के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "आज शब्द किस भेद का है?",
        "options_hi": ["कालसूचक", "स्थानसूचक", "परिमाणसूचक", "रीतिसूचक"],
        "answer_hi": "कालसूचक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "यहाँ शब्द किस भेद का है?",
        "options_hi": ["स्थानसूचक", "कालसूचक", "परिमाणसूचक", "रीतिसूचक"],
        "answer_hi": "स्थानसूचक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "बहुत शब्द किस भेद का है?",
        "options_hi": ["परिमाणसूचक", "स्थानसूचक", "कालसूचक", "रीतिसूचक"],
        "answer_hi": "परिमाणसूचक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "शीघ्र शब्द किस भेद का है?",
        "options_hi": ["रीतिसूचक", "स्थानसूचक", "कालसूचक", "परिमाणसूचक"],
        "answer_hi": "रीतिसूचक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "और शब्द किस भेद का है?",
        "options_hi": ["समुच्चयबोधक", "विकल्पबोधक", "विरोधबोधक", "निश्चयबोधक"],
        "answer_hi": "समुच्चयबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "या शब्द किस भेद का है?",
        "options_hi": ["विकल्पबोधक", "समुच्चयबोधक", "विरोधबोधक", "निश्चयबोधक"],
        "answer_hi": "विकल्पबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "लेकिन शब्द किस भेद का है?",
        "options_hi": ["विरोधबोधक", "समुच्चयबोधक", "विकल्पबोधक", "निश्चयबोधक"],
        "answer_hi": "विरोधबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "ही शब्द किस भेद का है?",
        "options_hi": ["निश्चयबोधक", "समुच्चयबोधक", "विकल्पबोधक", "विरोधबोधक"],
        "answer_hi": "निश्चयबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "भी शब्द किस भेद का है?",
        "options_hi": ["अवधारणबोधक", "समुच्चयबोधक", "विकल्पबोधक", "विरोधबोधक"],
        "answer_hi": "अवधारणबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "प्र उपसर्ग किस भेद का है?",
        "options_hi": ["गतिसूचक", "अवधारणसूचक", "निश्चयसूचक", "विरोधसूचक"],
        "answer_hi": "गतिसूचक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "सम् उपसर्ग किस भेद का है?",
        "options_hi": ["गुणसूचक", "गतिसूचक", "अवधारणसूचक", "निश्चयसूचक"],
        "answer_hi": "गुणसूचक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "अव उपसर्ग किस भेद का है?",
        "options_hi": ["दोषसूचक", "गतिसूचक", "गुणसूचक", "अवधारणसूचक"],
        "answer_hi": "दोषसूचक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "नि उपसर्ग किस भेद का है?",
        "options_hi": ["नियमसूचक", "गतिसूचक", "गुणसूचक", "दोषसूचक"],
        "answer_hi": "नियमसूचक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "परि उपसर्ग किस भेद का है?",
        "options_hi": ["विस्तारसूचक", "नियमसूचक", "गतिसूचक", "गुणसूचक"],
        "answer_hi": "विस्तारसूचक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "क्रियाविशेषण का उदाहरण क्या है?",
        "options_hi": ["कल", "और", "प्र", "जहाँ"],
        "answer_hi": "कल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "सम्बन्धसूचक का उदाहरण क्या है?",
        "options_hi": ["जब", "आज", "सम्", "बहुत"],
        "answer_hi": "जब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "उपसर्ग का उदाहरण क्या है?",
        "options_hi": ["अनु", "शीघ्र", "लेकिन", "यहाँ"],
        "answer_hi": "अनु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "कालसूचक का दूसरा उदाहरण क्या है?",
        "options_hi": ["सदा", "यहाँ", "बहुत", "शीघ्र"],
        "answer_hi": "सदा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "स्थानसूचक का दूसरा उदाहरण क्या है?",
        "options_hi": ["जहाँ", "आज", "बहुत", "शीघ्र"],
        "answer_hi": "जहाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "परिमाणसूचक का दूसरा उदाहरण क्या है?",
        "options_hi": ["सब", "यहाँ", "आज", "शीघ्र"],
        "answer_hi": "सब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "रीतिसूचक का दूसरा उदाहरण क्या है?",
        "options_hi": ["धीरे", "यहाँ", "आज", "बहुत"],
        "answer_hi": "धीरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "समुच्चयबोधक का दूसरा उदाहरण क्या है?",
        "options_hi": ["तथा", "या", "लेकिन", "ही"],
        "answer_hi": "तथा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "विकल्पबोधक का दूसरा उदाहरण क्या है?",
        "options_hi": ["अथवा", "और", "लेकिन", "ही"],
        "answer_hi": "अथवा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "विरोधबोधक का दूसरा उदाहरण क्या है?",
        "options_hi": ["किन्तु", "और", "या", "ही"],
        "answer_hi": "किन्तु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "निश्चयबोधक का दूसरा उदाहरण क्या है?",
        "options_hi": ["निश्चय ही", "और", "या", "लेकिन"],
        "answer_hi": "निश्चय ही",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "अवधारणबोधक का दूसरा उदाहरण क्या है?",
        "options_hi": ["निश्चित रूप से", "और", "या", "लेकिन"],
        "answer_hi": "निश्चित रूप से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "उपसर्ग का दूसरा उदाहरण क्या है?",
        "options_hi": ["अभि", "और", "आज", "बहुत"],
        "answer_hi": "अभि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "क्रियाविशेषण का प्रयोजन क्या है?",
        "options_hi": ["क्रिया की विशेषता बताना", "सम्बन्ध बताना", "अर्थ बदलना", "नाम की विशेषता बताना"],
        "answer_hi": "क्रिया की विशेषता बताना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "सम्बन्धसूचक का प्रयोजन क्या है?",
        "options_hi": ["वाक्यों को जोड़ना", "क्रिया की विशेषता बताना", "अर्थ बदलना", "नाम की विशेषता बताना"],
        "answer_hi": "वाक्यों को जोड़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "उपसर्ग का प्रयोजन क्या है?",
        "options_hi": ["धातु के अर्थ को बदलना", "वाक्य जोड़ना", "क्रिया की विशेषता बताना", "नाम की विशेषता बताना"],
        "answer_hi": "धातु के अर्थ को बदलना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "क्रियाविशेषण कहाँ प्रयुक्त होते हैं?",
        "options_hi": ["क्रिया से पहले", "नाम से पहले", "धातु से पहले", "विशेषण से पहले"],
        "answer_hi": "क्रिया से पहले",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "सम्बन्धसूचक कहाँ प्रयुक्त होते हैं?",
        "options_hi": ["दो पदों के बीच", "क्रिया से पहले", "धातु से पहले", "वाक्य के शुरू में"],
        "answer_hi": "दो पदों के बीच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "उपसर्ग कहाँ प्रयुक्त होते हैं?",
        "options_hi": ["धातु से पहले", "क्रिया से पहले", "नाम से पहले", "विशेषण से पहले"],
        "answer_hi": "धातु से पहले",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "क्रियाविशेषण का पर्यायवाची शब्द क्या है?",
        "options_hi": ["क्रियाविशेषण", "सम्बन्धसूचक", "उपसर्ग", "अव्यय"],
        "answer_hi": "क्रियाविशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "सम्बन्धसूचक का पर्यायवाची शब्द क्या है?",
        "options_hi": ["समुच्चयबोधक", "क्रियाविशेषण", "उपसर्ग", "अव्यय"],
        "answer_hi": "समुच्चयबोधक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "उपसर्ग का पर्यायवाची शब्द क्या है?",
        "options_hi": ["उपसर्ग", "क्रियाविशेषण", "सम्बन्धसूचक", "अव्यय"],
        "answer_hi": "उपसर्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "अव्यय पद कितने प्रकार के होते हैं?",
        "options_hi": ["तीन", "चार", "पाँच", "दो"],
        "answer_hi": "तीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "अव्यय पदों की सामान्य पहचान क्या है?",
        "options_hi": ["विभक्ति रहित, लिंग-वचन आदि से अपरिवर्तनशील", "लिंग के अनुसार बदलता है", "विभक्ति लेता है", "धातु के साथ जोड़ा जाता है"],
        "answer_hi": "विभक्ति रहित, लिंग-वचन आदि से अपरिवर्तनशील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "'जहाँ' इस वाक्य में कौन सा अव्यय पद है? 'जहाँ सत्य वहाँ विजय'",
        "options_hi": ["स्थानसूचक क्रियाविशेषण", "कालसूचक क्रियाविशेषण", "सम्बन्धसूचक", "उपसर्ग"],
        "answer_hi": "स्थानसूचक क्रियाविशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "'सदा' इस वाक्य में कौन सा अव्यय पद है? 'सदा सत्य बोलो'",
        "options_hi": ["कालसूचक क्रियाविशेषण", "स्थानसूचक क्रियाविशेषण", "सम्बन्धसूचक", "उपसर्ग"],
        "answer_hi": "कालसूचक क्रियाविशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "'किन्तु' इस वाक्य में कौन सा अव्यय पद है? 'मैं जाऊँगा किन्तु तुम ठहरो'",
        "options_hi": ["विरोधबोधक सम्बन्धसूचक", "समुच्चयबोधक", "निश्चयबोधक", "उपसर्ग"],
        "answer_hi": "विरोधबोधक सम्बन्धसूचक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "'प्रति' इस वाक्य में कौन सा अव्यय पद है? 'वह घर की ओर गया'",
        "options_hi": ["उपसर्ग / गतिसूचक क्रियाविशेषण", "कालसूचक", "सम्बन्धसूचक", "निश्चयबोधक"],
        "answer_hi": "उपसर्ग / गतिसूचक क्रियाविशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "निपात क्या होते हैं?",
        "options_hi": ["ये भी अव्यय ही हैं, जो विशिष्ट अर्थ बताते हैं", "केवल क्रियाविशेषण", "केवल उपसर्ग", "विभक्ति सूचक"],
        "answer_hi": "ये भी अव्यय ही हैं, जो विशिष्ट अर्थ बताते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "निपात का उदाहरण क्या है?",
        "options_hi": ["ही, तो, निश्चय ही, निश्चित रूप से", "आज, कल, सदा", "यहाँ, वहाँ, जहाँ", "और, या, भी, लेकिन"],
        "answer_hi": "ही, तो, निश्चय ही, निश्चित रूप से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "'ऊँचा' यह शब्द किस भेद का उदाहरण है?",
        "options_hi": ["रीतिसूचक क्रियाविशेषण", "कालसूचक", "स्थानसूचक", "सम्बन्धसूचक"],
        "answer_hi": "रीतिसूचक क्रियाविशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "'अब' यह शब्द किस भेद का उदाहरण है?",
        "options_hi": ["कालसूचक क्रियाविशेषण", "रीतिसूचक", "स्थानसूचक", "परिमाणसूचक"],
        "answer_hi": "कालसूचक क्रियाविशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "'सीधा' यह शब्द किस भेद का उदाहरण है?",
        "options_hi": ["रीतिसूचक क्रियाविशेषण", "कालसूचक", "स्थानसूचक", "सम्बन्धसूचक"],
        "answer_hi": "रीतिसूचक क्रियाविशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "'यदि' शब्द क्या सूचित करता है?",
        "options_hi": ["सम्भावना / शर्त", "निश्चय", "विरोध", "समुच्चय"],
        "answer_hi": "सम्भावना / शर्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "'मत' शब्द का प्रयोग कहाँ होता है?",
        "options_hi": ["निषेध के लिए (मत जाओ)", "समुच्चय के लिए", "निश्चय के लिए", "विरोध के लिए"],
        "answer_hi": "निषेध के लिए (मत जाओ)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "'कहाँ से, कैसे, कितने' आदि शब्द कैसे पद हैं?",
        "options_hi": ["प्रश्नबोधक अव्यय", "कालसूचक", "स्थानसूचक", "निपात"],
        "answer_hi": "प्रश्नबोधक अव्यय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "उपसर्ग से युक्त धातु क्या कहलाती है?",
        "options_hi": ["उपसृष्ट धातु", "प्रत्यय", "कृदंत", "समास"],
        "answer_hi": "उपसृष्ट धातु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "'सम्' उपसर्ग से युक्त 'गम्' धातु क्या बनता है?",
        "options_hi": ["संगच्छते (मेल)", "अपगच्छति (अपगमन)", "प्रगच्छति (अग्रसर)", "अनुगच्छति (पीछे जाना)"],
        "answer_hi": "संगच्छते (मेल)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "किस प्रकार उपसर्ग धातु के अर्थ को बलपूर्वक बदल देते हैं?",
        "options_hi": ["'अप'+'गम्' = अपगच्छति (निन्दित गमन)", "'प्र'+'वद्' = प्रवदति (प्रशंसा)", "'सम्'+'ज्ञा' = संजानाति (सम्यक् ज्ञान)", "उपरोक्त सभी"],
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "अव्यय पदों के अध्ययन का क्या महत्व है?",
        "options_hi": ["वाक्यार्थ स्पष्टता, भाव सूक्ष्मता, और संयोजन शक्ति बढ़ती है", "केवल व्याकरण ज्ञान होता है", "केवल धातुओं का ज्ञान होता है", "केवल नामों का ज्ञान होता है"],
        "answer_hi": "वाक्यार्थ स्पष्टता, भाव सूक्ष्मता, और संयोजन शक्ति बढ़ती है",
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