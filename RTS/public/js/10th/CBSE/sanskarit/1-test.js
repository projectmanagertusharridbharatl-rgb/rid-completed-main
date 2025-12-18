const questions = [
    {
        "num": 1,
        "question_hi": "मङ्गलम् श्लोके केन रचितः?",
        "options_hi": ["अज्ञातेन", "वाल्मीकिना", "वेदव्यासेन", "कालिदासेन"],
        "answer_hi": "अज्ञातेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "मङ्गलम् श्लोकः कस्मात् ग्रन्थात् स्वीकृतः?",
        "options_hi": ["मङ्गलाष्टकम्", "रामायणात्", "महाभारतात्", "भगवद्गीतात्"],
        "answer_hi": "मङ्गलाष्टकम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "मङ्गलम् श्लोके कति पादाः सन्ति?",
        "options_hi": ["चत्वारः", "द्वौ", "षट्", "अष्टौ"],
        "answer_hi": "चत्वारः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "मङ्गलम् श्लोकस्य प्रथमः पादः कः?",
        "options_hi": ["मङ्गलं भगवान् विष्णुः", "मङ्गलं गरुडध्वजः", "मङ्गलं पुण्डरीकाक्षः", "मङ्गलं देवकीनन्दनः"],
        "answer_hi": "मङ्गलं भगवान् विष्णुः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "द्वितीयः पादः कः?",
        "options_hi": ["मङ्गलं गरुडध्वजः", "मङ्गलं भगवान् विष्णुः", "मङ्गलं पुण्डरीकाक्षः", "मङ्गलं देवकीनन्दनः"],
        "answer_hi": "मङ्गलं गरुडध्वजः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "तृतीयः पादः कः?",
        "options_hi": ["मङ्गलं पुण्डरीकाक्षः", "मङ्गलं भगवान् विष्णुः", "मङ्गलं गरुडध्वजः", "मङ्गलं देवकीनन्दनः"],
        "answer_hi": "मङ्गलं पुण्डरीकाक्षः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "चतुर्थः पादः कः?",
        "options_hi": ["मङ्गलं देवकीनन्दनः", "मङ्गलं भगवान् विष्णुः", "मङ्गलं गरुडध्वजः", "मङ्गलं पुण्डरीकाक्षः"],
        "answer_hi": "मङ्गलं देवकीनन्दनः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "मङ्गलम् श्लोके कस्य देवतायाः वर्णनम् अस्ति?",
        "options_hi": ["विष्णोः", "शिवस्य", "ब्रह्मणः", "दुर्गायाः"],
        "answer_hi": "विष्णोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "भगवान् विष्णुः कस्य ध्वजः अस्ति?",
        "options_hi": ["गरुडस्य", "हंसस्य", "नन्दिनः", "वृषभस्य"],
        "answer_hi": "गरुडस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "पुण्डरीकाक्षः इति विष्णोः किम् नाम?",
        "options_hi": ["कमलनेत्रः", "गरुडवाहनः", "देवकीपुत्रः", "वैकुण्ठवासी"],
        "answer_hi": "कमलनेत्रः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "देवकीनन्दनः इति कः?",
        "options_hi": ["कृष्णः", "रामः", "बलरामः", "नारायणः"],
        "answer_hi": "कृष्णः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "मङ्गलम् श्लोकस्य रचनाविधिः का?",
        "options_hi": ["अनुष्टुप् छन्दः", "इन्द्रवज्रा", "उपेन्द्रवज्रा", "मालिनी"],
        "answer_hi": "अनुष्टुप् छन्दः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "अनुष्टुप् छन्दसि कति अक्षराणि भवन्ति?",
        "options_hi": ["अष्ट", "दश", "द्वादश", "षोडश"],
        "answer_hi": "अष्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "मङ्गलम् इति पदस्य कः अर्थः?",
        "options_hi": ["कल्याणकारी", "दुःखकारी", "भयानक", "विचित्र"],
        "answer_hi": "कल्याणकारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "भगवान् इति पदस्य कः अर्थः?",
        "options_hi": ["ईश्वरः", "मनुष्यः", "राक्षसः", "पशुः"],
        "answer_hi": "ईश्वरः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "विष्णुः इति पदस्य कः अर्थः?",
        "options_hi": ["सर्वव्यापी", "संहारकर्ता", "स्रष्टा", "विद्याधरः"],
        "answer_hi": "सर्वव्यापी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "गरुडध्वजः इति कस्य विशेषणम्?",
        "options_hi": ["विष्णोः", "इन्द्रस्य", "ब्रह्मणः", "यमस्य"],
        "answer_hi": "विष्णोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "पुण्डरीकम् इति किम्?",
        "options_hi": ["कमलम्", "सूर्यः", "चन्द्रः", "तारका"],
        "answer_hi": "कमलम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "अक्षिणी इति पदस्य कः अर्थः?",
        "options_hi": ["नेत्रे", "कर्णे", "हस्ते", "पादे"],
        "answer_hi": "नेत्रे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "देवकी इति का?",
        "options_hi": ["कृष्णमाता", "राममाता", "सीता", "रुक्मिणी"],
        "answer_hi": "कृष्णमाता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "नन्दनः इति पदस्य कः अर्थः?",
        "options_hi": ["पुत्रः", "पिता", "मित्रम्", "शत्रुः"],
        "answer_hi": "पुत्रः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "मङ्गलम् श्लोकः कस्याः भाषायाः अस्ति?",
        "options_hi": ["संस्कृत", "हिन्दी", "प्राकृत", "पालि"],
        "answer_hi": "संस्कृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "श्लोके कति देवतानां नामानि सन्ति?",
        "options_hi": ["एकस्य", "द्वयोः", "त्रयाणाम्", "चतुर्णाम्"],
        "answer_hi": "एकस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "विष्णुः कस्य वाहनम्?",
        "options_hi": ["गरुडस्य", "हंसस्य", "वृषभस्य", "सिंहस्य"],
        "answer_hi": "गरुडस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "पुण्डरीकाक्षः विष्णोः कति नेत्रे?",
        "options_hi": ["द्वे", "चत्वारि", "एकम्", "अनेकानि"],
        "answer_hi": "द्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "देवकी कस्य पत्नी?",
        "options_hi": ["वसुदेवस्य", "दशरथस्य", "पाण्डोः", "हिरण्यकशिपोः"],
        "answer_hi": "वसुदेवस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "श्लोकस्य समाप्तिः कैः भवति?",
        "options_hi": ["मङ्गलं देवकीनन्दनः", "मङ्गलं भगवान् विष्णुः", "मङ्गलं गरुडध्वजः", "मङ्गलं पुण्डरीकाक्षः"],
        "answer_hi": "मङ्गलं देवकीनन्दनः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "श्लोके कति विशेषणानि सन्ति?",
        "options_hi": ["चत्वारि", "द्वे", "त्रीणि", "पञ्च"],
        "answer_hi": "चत्वारि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "मङ्गलम् इति पदं कति वारं आवर्तते?",
        "options_hi": ["चतुर्वारं", "द्विवारं", "त्रिवारं", "पञ्चवारं"],
        "answer_hi": "चतुर्वारं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "गरुडः कः?",
        "options_hi": ["पक्षिराजः", "नागराजः", "वानरराजः", "मृगराजः"],
        "answer_hi": "पक्षिराजः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "ध्वजः इति किम्?",
        "options_hi": ["पताका", "शस्त्रम्", "वाद्यम्", "आभूषणम्"],
        "answer_hi": "पताका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "श्लोकस्य उद्देश्यं किम्?",
        "options_hi": ["मङ्गलकामना", "विद्याप्राप्तिः", "धनलाभः", "रोगनिवारणम्"],
        "answer_hi": "मङ्गलकामना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "कः देवः सर्वमङ्गलकारी मन्यते?",
        "options_hi": ["विष्णुः", "रुद्रः", "ब्रह्मा", "इन्द्रः"],
        "answer_hi": "विष्णुः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "मङ्गलाष्टकं कति श्लोकाः सन्ति?",
        "options_hi": ["अष्ट", "दश", "द्वादश", "षोडश"],
        "answer_hi": "अष्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "श्लोके विष्णोः कति नामानि सन्ति?",
        "options_hi": ["चत्वारि", "त्रीणि", "द्वे", "पञ्च"],
        "answer_hi": "चत्वारि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "भगवान् विष्णुः कुत्र वसति?",
        "options_hi": ["वैकुण्ठे", "कैलासे", "स्वर्गे", "पाताले"],
        "answer_hi": "वैकुण्ठे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "पुण्डरीकाक्षः इत्यत्र कः समासः?",
        "options_hi": ["बहुव्रीहिः", "तत्पुरुषः", "द्वन्द्वः", "कर्मधारयः"],
        "answer_hi": "बहुव्रीहिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "देवकीनन्दनः इत्यत्र कः समासः?",
        "options_hi": ["षष्ठी तत्पुरुषः", "बहुव्रीहिः", "द्वन्द्वः", "कर्मधारयः"],
        "answer_hi": "षष्ठी तत्पुरुषः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "गरुडध्वजः इत्यत्र कः समासः?",
        "options_hi": ["चतुर्थी तत्पुरुषः", "बहुव्रीहिः", "द्वन्द्वः", "कर्मधारयः"],
        "answer_hi": "चतुर्थी तत्पुरुषः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "मङ्गलं भगवान् विष्णुः इत्यत्र कः विभक्तिः?",
        "options_hi": ["प्रथमा", "द्वितीया", "तृतीया", "चतुर्थी"],
        "answer_hi": "प्रथमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "विष्णुः इति पदं कस्मात् धातोः निष्पन्नम्?",
        "options_hi": ["विश्", "विष्", "विज्", "विद्"],
        "answer_hi": "विश्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "भगवान् इति पदं कस्मात् धातोः निष्पन्नम्?",
        "options_hi": ["भज्", "भण्", "भाष्", "भ्रम्"],
        "answer_hi": "भज्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "गरुडः कस्य माता?",
        "options_hi": ["विनतायाः", "कद्रूः", "अदितेः", "दितेः"],
        "answer_hi": "विनतायाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "पुण्डरीकाक्षः विष्णोः किं सूचयति?",
        "options_hi": ["सौन्दर्यम्", "बलम्", "ज्ञानम्", "वैराग्यम्"],
        "answer_hi": "सौन्दर्यम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "देवकीनन्दनः किं सूचयति?",
        "options_hi": ["मातृभक्तिम्", "पितृभक्तिम्", "गुरुभक्तिम्", "देवभक्तिम्"],
        "answer_hi": "मातृभक्तिम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "श्लोकः कस्मिन् काले पठ्यते?",
        "options_hi": ["प्रातःकाले", "मध्याह्ने", "सायंकाले", "रात्रौ"],
        "answer_hi": "प्रातःकाले",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "श्लोकस्य पठनेन किं फलं प्राप्यते?",
        "options_hi": ["मङ्गलम्", "धनम्", "विद्या", "आरोग्यम्"],
        "answer_hi": "मङ्गलम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "विष्णुः कति अवताराः धृत्वा?",
        "options_hi": ["दश", "अष्ट", "बहवः", "चतुर्विंशतिः"],
        "answer_hi": "दश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "देवकीनन्दनः कः अवतारः?",
        "options_hi": ["अष्टमः", "प्रथमः", "दशमः", "चतुर्थः"],
        "answer_hi": "अष्टमः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "मङ्गलम् श्लोकः कैः पठ्यते?",
        "options_hi": ["सर्वैः", "ब्राह्मणैः", "बालकैः", "स्त्रीभिः"],
        "answer_hi": "सर्वैः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "श्लोके कति सन्धयः सन्ति?",
        "options_hi": ["नास्ति", "एका", "द्वे", "त्रयः"],
        "answer_hi": "नास्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "मङ्गलम् इत्यस्य विलोमपदं किम्?",
        "options_hi": ["अमङ्गलम्", "सुमङ्गलम्", "दुर्मङ्गलम्", "पापम्"],
        "answer_hi": "अमङ्गलम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "भगवान् इत्यस्य पर्यायपदं किम्?",
        "options_hi": ["ईश्वरः", "मनुष्यः", "दैत्यः", "पशुः"],
        "answer_hi": "ईश्वरः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "विष्णुः इत्यस्य पर्यायपदं किम्?",
        "options_hi": ["नारायणः", "रुद्रः", "ब्रह्मा", "इन्द्रः"],
        "answer_hi": "नारायणः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "गरुडः इत्यस्य पर्यायपदं किम्?",
        "options_hi": ["खगेश्वरः", "हंसः", "श्येनः", "काकः"],
        "answer_hi": "खगेश्वरः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "पुण्डरीकम् इत्यस्य पर्यायपदं किम्?",
        "options_hi": ["कमलम्", "पद्मम्", "उत्पलम्", "कुमुदम्"],
        "answer_hi": "पद्मम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "अक्षिणी इत्यस्य पर्यायपदं किम्?",
        "options_hi": ["नेत्रे", "लोचने", "चक्षुषी", "सर्वाणि"],
        "answer_hi": "लोचने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "देवकी इत्यस्य पर्यायपदं किम्?",
        "options_hi": ["यशोदा", "रोहिणी", "सुभद्रा", "रुक्मिणी"],
        "answer_hi": "यशोदा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "नन्दनः इत्यस्य पर्यायपदं किम्?",
        "options_hi": ["सुतः", "पुत्रः", "आत्मजः", "सर्वाणि"],
        "answer_hi": "सर्वाणि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "ध्वजः इत्यस्य पर्यायपदं किम्?",
        "options_hi": ["पताका", "केतुः", "ध्वजा", "सर्वाणि"],
        "answer_hi": "सर्वाणि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "श्लोकस्य प्रथमे पादे कति अक्षराणि?",
        "options_hi": ["अष्ट", "सप्त", "नव", "दश"],
        "answer_hi": "अष्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "द्वितीये पादे कति अक्षराणि?",
        "options_hi": ["अष्ट", "सप्त", "नव", "दश"],
        "answer_hi": "अष्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "तृतीये पादे कति अक्षराणि?",
        "options_hi": ["अष्ट", "सप्त", "नव", "दश"],
        "answer_hi": "अष्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "चतुर्थे पादे कति अक्षराणि?",
        "options_hi": ["अष्ट", "सप्त", "नव", "दश"],
        "answer_hi": "अष्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "मङ्गलम् इति पदस्य लिंगं किम्?",
        "options_hi": ["नपुंसकलिङ्गम्", "पुल्लिङ्गम्", "स्त्रीलिङ्गम्", "उभयलिङ्गम्"],
        "answer_hi": "नपुंसकलिङ्गम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "भगवान् इति पदस्य लिंगं किम्?",
        "options_hi": ["पुल्लिङ्गम्", "स्त्रीलिङ्गम्", "नपुंसकलिङ्गम्", "उभयलिङ्गम्"],
        "answer_hi": "पुल्लिङ्गम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "विष्णुः इति पदस्य लिंगं किम्?",
        "options_hi": ["पुल्लिङ्गम्", "स्त्रीलिङ्गम्", "नपुंसकलिङ्गम्", "उभयलिङ्गम्"],
        "answer_hi": "पुल्लिङ्गम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "गरुडध्वजः इति पदस्य लिंगं किम्?",
        "options_hi": ["पुल्लिङ्गम्", "स्त्रीलिङ्गम्", "नपुंसकलिङ्गम्", "उभयलिङ्गम्"],
        "answer_hi": "पुल्लिङ्गम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "पुण्डरीकाक्षः इति पदस्य लिंगं किम्?",
        "options_hi": ["पुल्लिङ्गम्", "स्त्रीलिङ्गम्", "नपुंसकलिङ्गम्", "उभयलिङ्गम्"],
        "answer_hi": "पुल्लिङ्गम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "देवकीनन्दनः इति पदस्य लिंगं किम्?",
        "options_hi": ["पुल्लिङ्गम्", "स्त्रीलिङ्गम्", "नपुंसकलिङ्गम्", "उभयलिङ्गम्"],
        "answer_hi": "पुल्लिङ्गम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "मङ्गलम् इति पदस्य विभक्तिः किम्?",
        "options_hi": ["प्रथमा", "द्वितीया", "तृतीया", "चतुर्थी"],
        "answer_hi": "प्रथमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "भगवान् इति पदस्य विभक्तिः किम्?",
        "options_hi": ["प्रथमा", "द्वितीया", "तृतीया", "चतुर्थी"],
        "answer_hi": "प्रथमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "विष्णुः इति पदस्य विभक्तिः किम्?",
        "options_hi": ["प्रथमा", "द्वितीया", "तृतीया", "चतुर्थी"],
        "answer_hi": "प्रथमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "गरुडध्वजः इति पदस्य विभक्तिः किम्?",
        "options_hi": ["प्रथमा", "द्वितीया", "तृतीया", "चतुर्थी"],
        "answer_hi": "प्रथमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "पुण्डरीकाक्षः इति पदस्य विभक्तिः किम्?",
        "options_hi": ["प्रथमा", "द्वितीया", "तृतीया", "चतुर्थी"],
        "answer_hi": "प्रथमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "देवकीनन्दनः इति पदस्य विभक्तिः किम्?",
        "options_hi": ["प्रथमा", "द्वितीया", "तृतीया", "चतुर्थी"],
        "answer_hi": "प्रथमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "मङ्गलम् इति पदस्य वचनं किम्?",
        "options_hi": ["एकवचनम्", "द्विवचनम्", "बहुवचनम्", "सर्ववचनम्"],
        "answer_hi": "एकवचनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "भगवान् इति पदस्य वचनं किम्?",
        "options_hi": ["एकवचनम्", "द्विवचनम्", "बहुवचनम्", "सर्ववचनम्"],
        "answer_hi": "एकवचनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "विष्णुः इति पदस्य वचनं किम्?",
        "options_hi": ["एकवचनम्", "द्विवचनम्", "बहुवचनम्", "सर्ववचनम्"],
        "answer_hi": "एकवचनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "गरुडध्वजः इति पदस्य वचनं किम्?",
        "options_hi": ["एकवचनम्", "द्विवचनम्", "बहुवचनम्", "सर्ववचनम्"],
        "answer_hi": "एकवचनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "पुण्डरीकाक्षः इति पदस्य वचनं किम्?",
        "options_hi": ["एकवचनम्", "द्विवचनम्", "बहुवचनम्", "सर्ववचनम्"],
        "answer_hi": "एकवचनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "देवकीनन्दनः इति पदस्य वचनं किम्?",
        "options_hi": ["एकवचनम्", "द्विवचनम्", "बहुवचनम्", "सर्ववचनम्"],
        "answer_hi": "एकवचनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "मङ्गलं भगवान् विष्णुः इत्यत्र 'मङ्गलम्' इति किं पदम्?",
        "options_hi": ["क्रियाविशेषणम्", "संबोधनम्", "विशेषणम्", "क्रियापदम्"],
        "answer_hi": "विशेषणम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "मङ्गलम् श्लोकस्य प्रयोजनं किम्?",
        "options_hi": ["शुभारम्भः", "ज्ञानप्राप्तिः", "कथावाचनम्", "नृत्यगीतम्"],
        "answer_hi": "शुभारम्भः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "विष्णोः ध्वजे कस्य चित्रं भवति?",
        "options_hi": ["गरुडस्य", "सिंहस्य", "वृषभस्य", "मकरस्य"],
        "answer_hi": "गरुडस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "पुण्डरीकाक्षः इति कथं उच्यते?",
        "options_hi": ["यस्य अक्षिणी पुण्डरीकम् इव", "यः पुण्डरीकं धारयति", "यः पुण्डरीकं रचयति", "यः पुण्डरीके वसति"],
        "answer_hi": "यस्य अक्षिणी पुण्डरीकम् इव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "कीदृशं विष्णुं मङ्गलं वदति?",
        "options_hi": ["सर्वमङ्गलकारिणं", "रोगनाशकं", "धनदातारं", "विद्यादातारं"],
        "answer_hi": "सर्वमङ्गलकारिणं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "मङ्गलाष्टकं कुत्र प्राप्यते?",
        "options_hi": ["स्कन्दपुराणे", "रामायणे", "महाभारते", "मनुस्मृतौ"],
        "answer_hi": "स्कन्दपुराणे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "मङ्गलम् श्लोके विष्णोः कानि रूपाणि वर्ण्यन्ते?",
        "options_hi": ["चत्वारि", "त्रीणि", "द्वे", "पञ्च"],
        "answer_hi": "चत्वारि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "गरुडध्वजः इति विष्णुं किं सूचयति?",
        "options_hi": ["शक्तिम्", "गतिम्", "रक्षणम्", "विजयम्"],
        "answer_hi": "विजयम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "मङ्गलं भगवान् विष्णुः इत्यस्य भावार्थः कः?",
        "options_hi": ["भगवान् विष्णुः मङ्गलस्वरूपः", "विष्णुः मङ्गलं ददाति", "विष्णोः मङ्गलं वदामि", "विष्णुं मङ्गलं प्रार्थये"],
        "answer_hi": "भगवान् विष्णुः मङ्गलस्वरूपः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "श्लोकस्य पाठेन किं भवति?",
        "options_hi": ["दिनस्य शुभारम्भः", "धनलाभः", "रोगनिवारणम्", "शत्रुनाशः"],
        "answer_hi": "दिनस्य शुभारम्भः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "मङ्गलम् श्लोकः कस्यै देवतायै समर्पितः?",
        "options_hi": ["विष्णवे", "शिवाय", "दुर्गायै", "सरस्वत्यै"],
        "answer_hi": "विष्णवे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "देवकीनन्दनः इति नाम्ना विष्णुः किं प्रकटयति?",
        "options_hi": ["मातृवात्सल्यम्", "पितृभक्तिम्", "ब्रह्मज्ञानम्", "योगशक्तिम्"],
        "answer_hi": "मातृवात्सल्यम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "पुण्डरीकाक्षः विष्णोः किं सूचयति?",
        "options_hi": ["दिव्यदृष्टिम्", "भौतिकदृष्टिम्", "अञ्जनयुक्तनेत्रम्", "सूर्यचन्द्रनेत्रम्"],
        "answer_hi": "दिव्यदृष्टिम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "मङ्गलम् श्लोकः कैः छन्दोभिः रचितः?",
        "options_hi": ["अनुष्टुप्", "इन्द्रवज्रा", "वंशस्थम्", "मालिनी"],
        "answer_hi": "अनुष्टुप्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "श्लोकस्य चतुर्णां पादानां कः सम्बन्धः?",
        "options_hi": ["सर्वे विष्णुं वर्णयन्ति", "सर्वे भिन्नान् देवान् वर्णयन्ति", "सर्वे मङ्गलस्य भिन्नानि रूपाणि", "सर्वे स्वतन्त्राः श्लोकाः"],
        "answer_hi": "सर्वे विष्णुं वर्णयन्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "मङ्गलम् श्लोकस्य पाठः किं सिद्धिं ददाति?",
        "options_hi": ["मानसिकशान्तिम्", "भौतिकसम्पत्तिम्", "राज्यप्राप्तिम्", "दीर्घायुष्यम्"],
        "answer_hi": "मानसिकशान्तिम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "कस्मिन् उत्सवे एष श्लोकः विशेषतः पठ्यते?",
        "options_hi": ["विष्णुपूजायाम्", "शिवरात्रौ", "दुर्गापूजायाम्", "गणेशोत्सवे"],
        "answer_hi": "विष्णुपूजायाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "मङ्गलम् श्लोकः कस्य भावस्य प्रतीकः?",
        "options_hi": ["शान्तेः भावस्य", "क्रोधस्य", "लोभस्य", "मोहस्य"],
        "answer_hi": "शान्तेः भावस्य",
        "attempted": false,
        "selected": ""
    }
];
// --------------------------- GLOBAL VARS -----------------------------
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