const questions = [
    {
        "num": 1,
        "question_hi": "अकारान्त पुंल्लिङ्ग शब्द का उदाहरण क्या है?",
        "options_hi": ["राम", "लता", "फल", "वन"],
        "answer_hi": "राम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "आकारान्त स्त्रीलिङ्ग शब्द का उदाहरण क्या है?",
        "options_hi": ["लता", "राम", "पुष्प", "माला"],
        "answer_hi": "लता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "इकारान्त पुंल्लिङ्ग शब्द का उदाहरण क्या है?",
        "options_hi": ["मुनि", "नदी", "वारि", "कवि"],
        "answer_hi": "मुनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "ईकारान्त स्त्रीलिङ्ग शब्द का उदाहरण क्या है?",
        "options_hi": ["नदी", "मुनि", "लता", "धेनु"],
        "answer_hi": "नदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "उकारान्त पुंल्लिङ्ग शब्द का उदाहरण क्या है?",
        "options_hi": ["गुरु", "धेनु", "मधु", "वायु"],
        "answer_hi": "गुरु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "ऊकारान्त स्त्रीलिङ्ग शब्द का उदाहरण क्या है?",
        "options_hi": ["धेनु", "गुरु", "वधू", "तनू"],
        "answer_hi": "धेनु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "ऋकारान्त पुंल्लिङ्ग शब्द का उदाहरण क्या है?",
        "options_hi": ["पितृ", "मातृ", "कर्तृ", "दातृ"],
        "answer_hi": "पितृ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "राम शब्द की द्वितीया विभक्ति एकवचन में क्या होती है?",
        "options_hi": ["रामम्", "रामः", "रामेण", "रामाय"],
        "answer_hi": "रामम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "लता शब्द की तृतीया विभक्ति एकवचन में क्या होती है?",
        "options_hi": ["लतया", "लता", "लतायै", "लतायाः"],
        "answer_hi": "लतया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "मुनि शब्द की चतुर्थी विभक्ति एकवचन में क्या होती है?",
        "options_hi": ["मुनये", "मुनिम्", "मुनिना", "मुनेः"],
        "answer_hi": "मुनये",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "नदी शब्द की पञ्चमी विभक्ति एकवचन में क्या होती है?",
        "options_hi": ["नद्याः", "नदीम्", "नद्या", "नद्याम्"],
        "answer_hi": "नद्याः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "गुरु शब्द की षष्ठी विभक्ति एकवचन में क्या होती है?",
        "options_hi": ["गुरोः", "गुरुम्", "गुरुणा", "गुरौ"],
        "answer_hi": "गुरोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "धेनु शब्द की सप्तमी विभक्ति एकवचन में क्या होती है?",
        "options_hi": ["धेन्वाम्", "धेनुम्", "धेन्वा", "धेनोः"],
        "answer_hi": "धेन्वाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "पितृ शब्द की प्रथमा विभक्ति एकवचन में क्या होती है?",
        "options_hi": ["पिता", "पितरम्", "पित्रा", "पित्रे"],
        "answer_hi": "पिता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "एक शब्द की पुंल्लिङ्ग में प्रथमा विभक्ति एकवचन में क्या है?",
        "options_hi": ["एकः", "एकम्", "एकेन", "एकस्मै"],
        "answer_hi": "एकः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "द्वि शब्द की स्त्रीलिङ्ग में द्वितीया विभक्ति द्विवचन में क्या है?",
        "options_hi": ["द्वे", "द्वाभ्याम्", "द्वयोः", "द्वयोः"],
        "answer_hi": "द्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "त्रि शब्द की नपुंसकलिङ्ग में प्रथमा विभक्ति बहुवचन में क्या है?",
        "options_hi": ["त्रीणि", "त्रीन्", "त्रिभिः", "त्रयाणाम्"],
        "answer_hi": "त्रीणि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "राम शब्द की प्रथमा विभक्ति द्विवचन में क्या होती है?",
        "options_hi": ["रामौ", "रामाभ्याम्", "रामयोः", "रामान्"],
        "answer_hi": "रामौ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "लता शब्द की द्वितीया विभक्ति द्विवचन में क्या होती है?",
        "options_hi": ["लते", "लताभ्याम्", "लतयोः", "लताः"],
        "answer_hi": "लते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "मुनि शब्द की तृतीया विभक्ति द्विवचन में क्या होती है?",
        "options_hi": ["मुनिभ्याम्", "मुनी", "मुन्योः", "मुनयः"],
        "answer_hi": "मुनिभ्याम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "नदी शब्द की चतुर्थी विभक्ति द्विवचन में क्या होती है?",
        "options_hi": ["नदीभ्याम्", "नद्यौ", "नद्योः", "नद्यः"],
        "answer_hi": "नदीभ्याम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "गुरु शब्द की पञ्चमी विभक्ति द्विवचन में क्या होती है?",
        "options_hi": ["गुरुभ्याम्", "गुरू", "गुर्वोः", "गुरवः"],
        "answer_hi": "गुरुभ्याम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "धेनु शब्द की षष्ठी विभक्ति द्विवचन में क्या होती है?",
        "options_hi": ["धेन्वोः", "धेनू", "धेनुभ्याम्", "धेनवः"],
        "answer_hi": "धेन्वोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "पितृ शब्द की सप्तमी विभक्ति द्विवचन में क्या होती है?",
        "options_hi": ["पित्रोः", "पितरौ", "पितृभ्याम्", "पितरः"],
        "answer_hi": "पित्रोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "राम शब्द की प्रथमा विभक्ति बहुवचन में क्या होती है?",
        "options_hi": ["रामाः", "रामैः", "रामाणाम्", "रामेषु"],
        "answer_hi": "रामाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "लता शब्द की द्वितीया विभक्ति बहुवचन में क्या होती है?",
        "options_hi": ["लताः", "लताभिः", "लतानाम्", "लतासु"],
        "answer_hi": "लताः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "मुनि शब्द की तृतीया विभक्ति बहुवचन में क्या होती है?",
        "options_hi": ["मुनिभिः", "मुनयः", "मुनीनाम्", "मुनिषु"],
        "answer_hi": "मुनिभिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "नदी शब्द की चतुर्थी विभक्ति बहुवचन में क्या होती है?",
        "options_hi": ["नदीभ्यः", "नद्यः", "नदीनाम्", "नदीषु"],
        "answer_hi": "नदीभ्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "गुरु शब्द की पञ्चमी विभक्ति बहुवचन में क्या होती है?",
        "options_hi": ["गुरुभ्यः", "गुरवः", "गुरूणाम्", "गुरुषु"],
        "answer_hi": "गुरुभ्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "धेनु शब्द की षष्ठी विभक्ति बहुवचन में क्या होती है?",
        "options_hi": ["धेनूनाम्", "धेनवः", "धेनुभिः", "धेनुषु"],
        "answer_hi": "धेनूनाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "पितृ शब्द की सप्तमी विभक्ति बहुवचन में क्या होती है?",
        "options_hi": ["पितृषु", "पितरः", "पितृभिः", "पितॄणाम्"],
        "answer_hi": "पितृषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "एक शब्द की स्त्रीलिङ्ग में तृतीया विभक्ति एकवचन में क्या है?",
        "options_hi": ["एकया", "एकाम्", "एकस्यै", "एकस्याः"],
        "answer_hi": "एकया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "द्वि शब्द की पुंल्लिङ्ग में चतुर्थी विभक्ति द्विवचन में क्या है?",
        "options_hi": ["द्वाभ्याम्", "द्वौ", "द्वयोः", "द्वयोः"],
        "answer_hi": "द्वाभ्याम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "त्रि शब्द की स्त्रीलिङ्ग में पञ्चमी विभक्ति बहुवचन में क्या है?",
        "options_hi": ["त्रिभ्यः", "त्रीः", "त्रयाणाम्", "त्रिषु"],
        "answer_hi": "त्रिभ्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "राम शब्द की सप्तमी विभक्ति एकवचन में क्या है?",
        "options_hi": ["रामे", "रामस्य", "रामात्", "रामम्"],
        "answer_hi": "रामे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "लता शब्द की षष्ठी विभक्ति एकवचन में क्या है?",
        "options_hi": ["लतायाः", "लतायाम्", "लतायै", "लतया"],
        "answer_hi": "लतायाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "मुनि शब्द की सप्तमी विभक्ति एकवचन में क्या है?",
        "options_hi": ["मुनौ", "मुनेः", "मुनये", "मुनिम्"],
        "answer_hi": "मुनौ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "नदी शब्द की प्रथमा विभक्ति एकवचन में क्या है?",
        "options_hi": ["नदी", "नदीम्", "नद्या", "नद्याः"],
        "answer_hi": "नदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "गुरु शब्द की द्वितीया विभक्ति एकवचन में क्या है?",
        "options_hi": ["गुरुम्", "गुरुः", "गुरुणा", "गुरवे"],
        "answer_hi": "गुरुम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "धेनु शब्द की तृतीया विभक्ति एकवचन में क्या है?",
        "options_hi": ["धेन्वा", "धेनुः", "धेनवे", "धेनोः"],
        "answer_hi": "धेन्वा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "पितृ शब्द की द्वितीया विभक्ति एकवचन में क्या है?",
        "options_hi": ["पितरम्", "पिता", "पित्रा", "पित्रे"],
        "answer_hi": "पितरम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "एक शब्द की नपुंसकलिङ्ग में द्वितीया विभक्ति एकवचन में क्या है?",
        "options_hi": ["एकम्", "एकः", "एकेन", "एकस्मै"],
        "answer_hi": "एकम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "द्वि शब्द की स्त्रीलिङ्ग में तृतीया विभक्ति द्विवचन में क्या है?",
        "options_hi": ["द्वाभ्याम्", "द्वे", "द्वयोः", "द्वयोः"],
        "answer_hi": "द्वाभ्याम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "त्रि शब्द की पुंल्लिङ्ग में षष्ठी विभक्ति बहुवचन में क्या है?",
        "options_hi": ["त्रयाणाम्", "त्रीन्", "त्रिभिः", "त्रिषु"],
        "answer_hi": "त्रयाणाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "राम शब्द की षष्ठी विभक्ति द्विवचन में क्या है?",
        "options_hi": ["रामयोः", "रामाभ्याम्", "रामौ", "रामान्"],
        "answer_hi": "रामयोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "लता शब्द की सप्तमी विभक्ति द्विवचन में क्या है?",
        "options_hi": ["लतयोः", "लताभ्याम्", "लते", "लतासु"],
        "answer_hi": "लतयोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "मुनि शब्द की पञ्चमी विभक्ति द्विवचन में क्या है?",
        "options_hi": ["मुनिभ्याम्", "मुनी", "मुन्योः", "मुनयः"],
        "answer_hi": "मुनिभ्याम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "नदी शब्द की षष्ठी विभक्ति द्विवचन में क्या है?",
        "options_hi": ["नद्योः", "नदीभ्याम्", "नद्यौ", "नद्यः"],
        "answer_hi": "नद्योः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "गुरु शब्द की सप्तमी विभक्ति द्विवचन में क्या है?",
        "options_hi": ["गुर्वोः", "गुरुभ्याम्", "गुरू", "गुरवः"],
        "answer_hi": "गुर्वोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "धेनु शब्द की प्रथमा विभक्ति द्विवचन में क्या है?",
        "options_hi": ["धेनू", "धेनुभ्याम्", "धेन्वोः", "धेनवः"],
        "answer_hi": "धेनू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "पितृ शब्द की तृतीया विभक्ति द्विवचन में क्या है?",
        "options_hi": ["पितृभ्याम्", "पितरौ", "पित्रोः", "पितरः"],
        "answer_hi": "पितृभ्याम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "एक शब्द की पुंल्लिङ्ग में चतुर्थी विभक्ति एकवचन में क्या है?",
        "options_hi": ["एकस्मै", "एकेन", "एकस्मात्", "एकस्मिन्"],
        "answer_hi": "एकस्मै",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "द्वि शब्द की पुंल्लिङ्ग में पञ्चमी विभक्ति द्विवचन में क्या है?",
        "options_hi": ["द्वाभ्याम्", "द्वौ", "द्वयोः", "द्वयोः"],
        "answer_hi": "द्वाभ्याम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "त्रि शब्द की स्त्रीलिङ्ग में षष्ठी विभक्ति बहुवचन में क्या है?",
        "options_hi": ["त्रयाणाम्", "त्रीः", "त्रिभिः", "त्रिषु"],
        "answer_hi": "त्रयाणाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "राम शब्द की पञ्चमी विभक्ति बहुवचन में क्या है?",
        "options_hi": ["रामेभ्यः", "रामैः", "रामाणाम्", "रामेषु"],
        "answer_hi": "रामेभ्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "लता शब्द की चतुर्थी विभक्ति बहुवचन में क्या है?",
        "options_hi": ["लताभ्यः", "लताभिः", "लतानाम्", "लतासु"],
        "answer_hi": "लताभ्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "मुनि शब्द की द्वितीया विभक्ति बहुवचन में क्या है?",
        "options_hi": ["मुनीन्", "मुनिभिः", "मुनीनाम्", "मुनिषु"],
        "answer_hi": "मुनीन्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "नदी शब्द की तृतीया विभक्ति बहुवचन में क्या है?",
        "options_hi": ["नदीभिः", "नद्यः", "नदीनाम्", "नदीषु"],
        "answer_hi": "नदीभिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "गुरु शब्द की चतुर्थी विभक्ति बहुवचन में क्या है?",
        "options_hi": ["गुरुभ्यः", "गुरुभिः", "गुरूणाम्", "गुरुषु"],
        "answer_hi": "गुरुभ्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "धेनु शब्द की द्वितीया विभक्ति बहुवचन में क्या है?",
        "options_hi": ["धेनूः", "धेनुभिः", "धेनूनाम्", "धेनुषु"],
        "answer_hi": "धेनूः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "पितृ शब्द की चतुर्थी विभक्ति बहुवचन में क्या है?",
        "options_hi": ["पितृभ्यः", "पितृभिः", "पितॄणाम्", "पितृषु"],
        "answer_hi": "पितृभ्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "एक शब्द की स्त्रीलिङ्ग में षष्ठी विभक्ति एकवचन में क्या है?",
        "options_hi": ["एकस्याः", "एकया", "एकस्यै", "एकस्याम्"],
        "answer_hi": "एकस्याः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "द्वि शब्द की पुंल्लिङ्ग में षष्ठी विभक्ति द्विवचन में क्या है?",
        "options_hi": ["द्वयोः", "द्वाभ्याम्", "द्वौ", "द्वयोः"],
        "answer_hi": "द्वयोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "त्रि शब्द की नपुंसकलिङ्ग में सप्तमी विभक्ति बहुवचन में क्या है?",
        "options_hi": ["त्रिषु", "त्रिभिः", "त्रीणि", "त्रयाणाम्"],
        "answer_hi": "त्रिषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "राम शब्द की तृतीया विभक्ति बहुवचन में क्या है?",
        "options_hi": ["रामैः", "रामेभ्यः", "रामाणाम्", "रामेषु"],
        "answer_hi": "रामैः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "लता शब्द की पञ्चमी विभक्ति बहुवचन में क्या है?",
        "options_hi": ["लताभ्यः", "लताभिः", "लतानाम्", "लतासु"],
        "answer_hi": "लताभ्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "मुनि शब्द की चतुर्थी विभक्ति बहुवचन में क्या है?",
        "options_hi": ["मुनिभ्यः", "मुनिभिः", "मुनीनाम्", "मुनिषु"],
        "answer_hi": "मुनिभ्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "नदी शब्द की द्वितीया विभक्ति बहुवचन में क्या है?",
        "options_hi": ["नदीः", "नदीभिः", "नदीनाम्", "नदीषु"],
        "answer_hi": "नदीः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "गुरु शब्द की तृतीया विभक्ति बहुवचन में क्या है?",
        "options_hi": ["गुरुभिः", "गुरुभ्यः", "गुरूणाम्", "गुरुषु"],
        "answer_hi": "गुरुभिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "धेनु शब्द की चतुर्थी विभक्ति बहुवचन में क्या है?",
        "options_hi": ["धेनुभ्यः", "धेनुभिः", "धेनूनाम्", "धेनुषु"],
        "answer_hi": "धेनुभ्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "पितृ शब्द की द्वितीया विभक्ति बहुवचन में क्या है?",
        "options_hi": ["पितॄन्", "पितृभिः", "पितॄणाम्", "पितृषु"],
        "answer_hi": "पितॄन्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "एक शब्द की नपुंसकलिङ्ग में सप्तमी विभक्ति एकवचन में क्या है?",
        "options_hi": ["एकस्मिन्", "एकस्य", "एकेन", "एकस्मै"],
        "answer_hi": "एकस्मिन्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "द्वि शब्द की स्त्रीलिङ्ग में सप्तमी विभक्ति द्विवचन में क्या है?",
        "options_hi": ["द्वयोः", "द्वाभ्याम्", "द्वे", "द्वयोः"],
        "answer_hi": "द्वयोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "त्रि शब्द की पुंल्लिङ्ग में सप्तमी विभक्ति बहुवचन में क्या है?",
        "options_hi": ["त्रिषु", "त्रिभिः", "त्रीन्", "त्रयाणाम्"],
        "answer_hi": "त्रिषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "अकारान्त शब्दों का लिंग क्या होता है?",
        "options_hi": ["पुंल्लिङ्ग", "स्त्रीलिङ्ग", "नपुंसकलिङ्ग", "सर्वलिङ्ग"],
        "answer_hi": "पुंल्लिङ्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "आकारान्त शब्दों का लिंग क्या होता है?",
        "options_hi": ["स्त्रीलिङ्ग", "पुंल्लिङ्ग", "नपुंसकलिङ्ग", "सर्वलिङ्ग"],
        "answer_hi": "स्त्रीलिङ्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "इकारान्त शब्दों का लिंग क्या होता है?",
        "options_hi": ["पुंल्लिङ्ग", "स्त्रीलिङ्ग", "नपुंसकलिङ्ग", "सर्वलिङ्ग"],
        "answer_hi": "पुंल्लिङ्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "ईकारान्त शब्दों का लिंग क्या होता है?",
        "options_hi": ["स्त्रीलिङ्ग", "पुंल्लिङ्ग", "नपुंसकलिङ्ग", "सर्वलिङ्ग"],
        "answer_hi": "स्त्रीलिङ्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "उकारान्त शब्दों का लिंग क्या होता है?",
        "options_hi": ["पुंल्लिङ्ग", "स्त्रीलिङ्ग", "नपुंसकलिङ्ग", "सर्वलिङ्ग"],
        "answer_hi": "पुंल्लिङ्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "ऊकारान्त शब्दों का लिंग क्या होता है?",
        "options_hi": ["स्त्रीलिङ्ग", "पुंल्लिङ्ग", "नपुंसकलिङ्ग", "सर्वलिङ्ग"],
        "answer_hi": "स्त्रीलिङ्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "ऋकारान्त शब्दों का लिंग क्या होता है?",
        "options_hi": ["पुंल्लिङ्ग", "स्त्रीलिङ्ग", "नपुंसकलिङ्ग", "सर्वलिङ्ग"],
        "answer_hi": "पुंल्लिङ्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "संख्यावाचक शब्दों का लिंग क्या होता है?",
        "options_hi": ["सर्वलिङ्ग", "केवल पुंल्लिङ्ग", "केवल स्त्रीलिङ्ग", "केवल नपुंसकलिङ्ग"],
        "answer_hi": "सर्वलिङ्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "राम शब्द के विभक्ति रूप कितने हैं?",
        "options_hi": ["इक्कीस", "चौबीस", "सात", "इक्कीस"],
        "answer_hi": "इक्कीस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "लता शब्द के विभक्ति रूप कितने हैं?",
        "options_hi": ["इक्कीस", "चौबीस", "सात", "इक्कीस"],
        "answer_hi": "इक्कीस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "मुनि शब्द के विभक्ति रूप कितने हैं?",
        "options_hi": ["इक्कीस", "चौबीस", "सात", "इक्कीस"],
        "answer_hi": "इक्कीस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "नदी शब्द के विभक्ति रूप कितने हैं?",
        "options_hi": ["इक्कीस", "चौबीस", "सात", "इक्कीस"],
        "answer_hi": "इक्कीस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "गुरु शब्द के विभक्ति रूप कितने हैं?",
        "options_hi": ["इक्कीस", "चौबीस", "सात", "इक्कीस"],
        "answer_hi": "इक्कीस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "धेनु शब्द के विभक्ति रूप कितने हैं?",
        "options_hi": ["इक्कीस", "चौबीस", "सात", "इक्कीस"],
        "answer_hi": "इक्कीस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "पितृ शब्द के विभक्ति रूप कितने हैं?",
        "options_hi": ["इक्कीस", "चौबीस", "सात", "इक्कीस"],
        "answer_hi": "इक्कीस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "एक शब्द के विभक्ति रूप कितने हैं?",
        "options_hi": ["इक्कीस", "चौबीस", "सात", "इक्कीस"],
        "answer_hi": "इक्कीस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "विभक्तियों की संख्या कितनी है?",
        "options_hi": ["सात", "आठ", "छह", "पाँच"],
        "answer_hi": "सात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "वचनों की संख्या कितनी है?",
        "options_hi": ["तीन", "दो", "चार", "पाँच"],
        "answer_hi": "तीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "लिंगों की संख्या कितनी है?",
        "options_hi": ["तीन", "दो", "चार", "पाँच"],
        "answer_hi": "तीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "प्रथमा विभक्ति का दूसरा नाम क्या है?",
        "options_hi": ["कर्ता", "कर्म", "करण", "सम्प्रदान"],
        "answer_hi": "कर्ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "द्वितीया विभक्ति का दूसरा नाम क्या है?",
        "options_hi": ["कर्म", "कर्ता", "करण", "अपादान"],
        "answer_hi": "कर्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "तृतीया विभक्ति का दूसरा नाम क्या है?",
        "options_hi": ["करण", "कर्ता", "कर्म", "सम्प्रदान"],
        "answer_hi": "करण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "चतुर्थी विभक्ति का दूसरा नाम क्या है?",
        "options_hi": ["सम्प्रदान", "कर्ता", "कर्म", "अपादान"],
        "answer_hi": "सम्प्रदान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "पञ्चमी विभक्ति का दूसरा नाम क्या है?",
        "options_hi": ["अपादान", "कर्ता", "कर्म", "करण"],
        "answer_hi": "अपादान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "षष्ठी विभक्ति का दूसरा नाम क्या है?",
        "options_hi": ["सम्बन्ध", "कर्ता", "कर्म", "करण"],
        "answer_hi": "सम्बन्ध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "सप्तमी विभक्ति का दूसरा नाम क्या है?",
        "options_hi": ["अधिकरण", "कर्ता", "कर्म", "सम्प्रदान"],
        "answer_hi": "अधिकरण",
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