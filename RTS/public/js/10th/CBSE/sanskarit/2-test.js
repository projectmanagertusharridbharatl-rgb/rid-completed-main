const questions = [
    {
        "num": 1,
        "question_hi": "मङ्गलम् श्लोकः कस्मिन् वेदे उल्लिखितः?",
        "options_hi": ["न कस्मिन् अपि", "ऋग्वेदे", "यजुर्वेदे", "सामवेदे"],
        "answer_hi": "न कस्मिन् अपि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "एषः श्लोकः कति शब्दैः निर्मितः?",
        "options_hi": ["चतुर्भिः", "अष्टभिः", "द्वादशभिः", "षोडशभिः"],
        "answer_hi": "चतुर्भिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "मङ्गलम् इति शब्दस्य व्युत्पत्तिः कुत्र प्राप्यते?",
        "options_hi": ["अमरकोषे", "निरुक्ते", "धातुपाठे", "व्याकरणे"],
        "answer_hi": "निरुक्ते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "विष्णुः मङ्गलम् इति कथ्यते, कस्मात् कारणात्?",
        "options_hi": ["सर्वकल्याणहेतुत्वात्", "सृष्टिकर्तृत्वात्", "संहर्तृत्वात्", "रक्षकत्वात्"],
        "answer_hi": "सर्वकल्याणहेतुत्वात्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "मङ्गलम् श्लोकस्य रचयितुः नाम किम्?",
        "options_hi": ["अद्यापि अज्ञातम्", "व्यासः", "वाल्मीकिः", "पाणिनिः"],
        "answer_hi": "अद्यापि अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "मङ्गलाष्टकं कति भिन्नानि मङ्गलानि वर्णयति?",
        "options_hi": ["अष्ट", "चत्वारि", "दश", "द्वादश"],
        "answer_hi": "अष्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "गरुडध्वजः इति विशेषणं विष्णोः किं गुणं प्रकटयति?",
        "options_hi": ["विजयशीलत्वम्", "गमनशीलत्वम्", "रक्षणशीलत्वम्", "सृष्टिशीलत्वम्"],
        "answer_hi": "विजयशीलत्वम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "पुण्डरीकाक्षः विष्णोः किं सूचयति?",
        "options_hi": ["दिव्यं सौन्दर्यम्", "भौतिकं सौन्दर्यम्", "कठोरत्वम्", "कोमलत्वम्"],
        "answer_hi": "दिव्यं सौन्दर्यम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "देवकीनन्दनः इति विशेषणेन कः भावः व्यक्तः?",
        "options_hi": ["मातृस्नेहः", "पितृस्नेहः", "भ्रातृस्नेहः", "गुरुस्नेहः"],
        "answer_hi": "मातृस्नेहः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "मङ्गलम् श्लोकः प्रायः कदा पठ्यते?",
        "options_hi": ["प्रातःकाले", "मध्याह्ने", "सायंकाले", "यदा कदापि"],
        "answer_hi": "प्रातःकाले",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "अस्मिन् श्लोके कति पदानि मङ्गलम् इति पदेन आरभन्ते?",
        "options_hi": ["चत्वारि", "द्वे", "त्रीणि", "पञ्च"],
        "answer_hi": "चत्वारि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "भगवान् विष्णुः कति भुजैः प्रसिद्धः?",
        "options_hi": ["चतुर्भिः", "द्वाभ्याम्", "अष्टाभिः", "दशभिः"],
        "answer_hi": "चतुर्भिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "मङ्गलम् श्लोकः कस्मिन् प्रसङ्गे विशेषतः उपयुज्यते?",
        "options_hi": ["मङ्गलकार्यारम्भे", "शोकार्ते", "विद्यारम्भे", "विवाहे"],
        "answer_hi": "मङ्गलकार्यारम्भे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "विष्णोः गरुडध्वजः किं प्रतीकं वहति?",
        "options_hi": ["सत्यं ज्ञानम् अनन्तं", "शक्तिं बलं विजयम्", "प्रेमं करुणां शान्तिम्", "धर्मं अर्थं कामं"],
        "answer_hi": "सत्यं ज्ञानम् अनन्तं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "पुण्डरीकस्य उपमा कस्मै दीयते?",
        "options_hi": ["विष्णोः नेत्राभ्याम्", "विष्णोः हस्ताभ्याम्", "विष्णोः पादाभ्याम्", "विष्णोः मुखाय"],
        "answer_hi": "विष्णोः नेत्राभ्याम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "देवकीनन्दनः कस्यां यादवकुले जातः?",
        "options_hi": ["चन्द्रवंशे", "सूर्यवंशे", "अग्निवंशे", "वायुवंशे"],
        "answer_hi": "चन्द्रवंशे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "मङ्गलम् श्लोकस्य भावानुवादः कस्मिन् ग्रन्थे लभ्यते?",
        "options_hi": ["विविधस्तोत्रसंग्रहेषु", "रामायणे", "महाभारते", "पुराणेषु"],
        "answer_hi": "विविधस्तोत्रसंग्रहेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "विष्णुः कति प्रमुखावतारेषु प्रसिद्धः?",
        "options_hi": ["दशसु", "अष्टसु", "बहुषु", "चतुर्दशसु"],
        "answer_hi": "दशसु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "मङ्गलम् श्लोकस्य अन्तिमं पदं किम्?",
        "options_hi": ["देवकीनन्दनः", "पुण्डरीकाक्षः", "गरुडध्वजः", "भगवान् विष्णुः"],
        "answer_hi": "देवकीनन्दनः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "विष्णोः मुख्यं आयुधं किम्?",
        "options_hi": ["सुदर्शनचक्रम्", "पिनाकधनुः", "त्रिशूलम्", "वज्रम्"],
        "answer_hi": "सुदर्शनचक्रम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "मङ्गलम् श्लोकस्य पाठेन कः लाभः भवति?",
        "options_hi": ["मानसिका शान्तिः", "भौतिकं धनम्", "राज्यप्राप्तिः", "दीर्घायुष्यम्"],
        "answer_hi": "मानसिका शान्तिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "कः देवः मङ्गलस्य मूलं मन्यते?",
        "options_hi": ["विष्णुः", "शिवः", "ब्रह्मा", "गणेशः"],
        "answer_hi": "विष्णुः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "गरुडः कस्य पुत्रः?",
        "options_hi": ["विनतायाः", "कद्रूः", "सुरसायाः", "मेनकायाः"],
        "answer_hi": "विनतायाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "पुण्डरीकम् इति पदस्य अर्थः कः?",
        "options_hi": ["श्वेतं कमलम्", "रक्तं कमलम्", "नीलं कमलम्", "पीतं कमलम्"],
        "answer_hi": "श्वेतं कमलम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "देवकी कस्य भगिनी आसीत्?",
        "options_hi": ["कंसस्य", "वसुदेवस्य", "उग्रसेनस्य", "नन्दस्य"],
        "answer_hi": "कंसस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "मङ्गलम् श्लोकस्य रचनाकालः कः?",
        "options_hi": ["अज्ञातः", "वैदिककालः", "पौराणिककालः", "मध्यकालः"],
        "answer_hi": "अज्ञातः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "विष्णुः कति प्रहरणानि धारयति?",
        "options_hi": ["चत्वारि", "द्वे", "अष्ट", "षट्"],
        "answer_hi": "चत्वारि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "मङ्गलम् इति पदं कति स्थानेषु प्रयुक्तम्?",
        "options_hi": ["चतुर्षु", "द्वयोः", "त्रिषु", "पञ्चसु"],
        "answer_hi": "चतुर्षु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "गरुडध्वजः विष्णोः किं सूचयति?",
        "options_hi": ["वेगं शक्तिं च", "मन्दत्वं दुर्बलत्वं च", "स्थिरत्वं गुरुत्वं च", "लघुत्वं क्षिप्रत्वं च"],
        "answer_hi": "वेगं शक्तिं च",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "पुण्डरीकाक्षः इति विशेषणस्य विपरीतार्थकं किम्?",
        "options_hi": ["कुण्डलीभूतनेत्रः", "विकृतनेत्रः", "सूक्ष्मनेत्रः", "विशालनेत्रः"],
        "answer_hi": "विकृतनेत्रः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "देवकीनन्दनः कस्य पुत्रः आसीत्?",
        "options_hi": ["वसुदेवस्य", "नन्दस्य", "उग्रसेनस्य", "कंसस्य"],
        "answer_hi": "वसुदेवस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "मङ्गलम् श्लोकः कैः जनैः पठ्यते?",
        "options_hi": ["सर्वैः धार्मिकैः", "केवलं ब्राह्मणैः", "केवलं स्त्रीभिः", "केवलं बालकैः"],
        "answer_hi": "सर्वैः धार्मिकैः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "विष्णुः कति भार्याः प्रसिद्धाः?",
        "options_hi": ["द्वे", "चतस्रः", "अष्टौ", "एका"],
        "answer_hi": "द्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "मङ्गलम् श्लोकस्य प्रथमं पदं किम्?",
        "options_hi": ["मङ्गलम्", "भगवान्", "विष्णुः", "गरुडः"],
        "answer_hi": "मङ्गलम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "गरुडः कीदृशः पक्षी?",
        "options_hi": ["दिव्यः", "साधारणः", "भौमः", "जलचरः"],
        "answer_hi": "दिव्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "पुण्डरीकाक्षः विष्णोः किं दर्शयति?",
        "options_hi": ["करुणां दयां च", "क्रोधं भयं च", "लोभं मोहं च", "मदं मात्सर्यं च"],
        "answer_hi": "करुणां दयां च",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "देवकीनन्दनः कुत्र प्रसिद्धः?",
        "options_hi": ["मथुरायां", "अयोध्यायाम्", "काश्याम्", "द्वारकायाम्"],
        "answer_hi": "मथुरायां",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "मङ्गलम् श्लोकस्य अध्ययनेन किं प्राप्यते?",
        "options_hi": ["आध्यात्मिकं शान्तिः", "भौतिकं सुखम्", "राजनैतिकं बलम्", "सामाजिकं प्रतिष्ठा"],
        "answer_hi": "आध्यात्मिकं शान्तिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "विष्णोः मुख्यं निवासस्थानं किम्?",
        "options_hi": ["वैकुण्ठम्", "कैलासम्", "ब्रह्मलोकः", "स्वर्गलोकः"],
        "answer_hi": "वैकुण्ठम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "मङ्गलम् श्लोकः कति छन्दोभिः युक्तः?",
        "options_hi": ["एकेन", "द्वाभ्याम्", "त्रिभिः", "चतुर्भिः"],
        "answer_hi": "एकेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "गरुडः कस्य शत्रुः?",
        "options_hi": ["नागानाम्", "दैत्यानाम्", "दानवानाम्", "राक्षसानाम्"],
        "answer_hi": "नागानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "पुण्डरीकाक्षः विष्णोः किं प्रतीकम्?",
        "options_hi": ["ज्ञानस्य", "बलस्य", "शक्तेः", "वेगस्य"],
        "answer_hi": "ज्ञानस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "देवकीनन्दनः किं प्रसिद्धं कर्म अकरोत्?",
        "options_hi": ["कंसवधम्", "रावणवधम्", "हिरण्यकशिपुवधम्", "महिषासुरवधम्"],
        "answer_hi": "कंसवधम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "मङ्गलम् श्लोकः कति भावान् व्यक्तिं करोति?",
        "options_hi": ["एकम्", "द्वौ", "त्रीन्", "चतुरः"],
        "answer_hi": "एकम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "विष्णोः प्रमुखा शक्तिः का?",
        "options_hi": ["लक्ष्मीः", "सरस्वती", "पार्वती", "दुर्गा"],
        "answer_hi": "लक्ष्मीः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "मङ्गलम् श्लोकस्य मूलं कुत्र प्राप्यते?",
        "options_hi": ["स्तोत्रसङ्ग्रहेषु", "वेदेषु", "उपनिषत्सु", "सूत्रग्रन्थेषु"],
        "answer_hi": "स्तोत्रसङ्ग्रहेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "गरुडध्वजः कस्यां दिशि गच्छति?",
        "options_hi": ["सर्वासु दिक्षु", "पूर्वदिशि", "उत्तरदिशि", "पश्चिमदिशि"],
        "answer_hi": "सर्वासु दिक्षु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "पुण्डरीकाक्षः कस्य देवस्य विशेषणम्?",
        "options_hi": ["विष्णोः", "ब्रह्मणः", "रुद्रस्य", "इन्द्रस्य"],
        "answer_hi": "विष्णोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "देवकीनन्दनः कति भार्याः आसन्?",
        "options_hi": ["अष्टाविंशतिः", "षोडश", "अष्ट", "एका"],
        "answer_hi": "अष्टाविंशतिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "मङ्गलम् श्लोकस्य उच्चारणेन किं भवति?",
        "options_hi": ["वातावरणं पवित्रं", "वातावरणं दूषितं", "वातावरणं उग्रं", "वातावरणं नीरसं"],
        "answer_hi": "वातावरणं पवित्रं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "विष्णोः धाम किम् उच्यते?",
        "options_hi": ["वैकुण्ठम्", "गोलोकम्", "सत्यलोकः", "भूलोकः"],
        "answer_hi": "वैकुण्ठम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "मङ्गलम् श्लोकस्य भावार्थः कः?",
        "options_hi": ["विष्णुः एव परमं मङ्गलम्", "विष्णुः मङ्गलं ददाति", "विष्णोः स्तवनं मङ्गलम्", "मङ्गलं विष्णोः नाम"],
        "answer_hi": "विष्णुः एव परमं मङ्गलम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "गरुडः कस्य वाहनं प्रसिद्धम्?",
        "options_hi": ["विष्णोः", "इन्द्रस्य", "ब्रह्मणः", "यमस्य"],
        "answer_hi": "विष्णोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "पुण्डरीकाक्षः कस्याः उपमा?",
        "options_hi": ["नेत्रयोः", "हस्तयोः", "पादयोः", "कर्णयोः"],
        "answer_hi": "नेत्रयोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "देवकीनन्दनः कस्य पालकः?",
        "options_hi": ["नन्दगोपस्य", "वसुदेवस्य", "उग्रसेनस्य", "कंसस्य"],
        "answer_hi": "नन्दगोपस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "मङ्गलम् श्लोकः कति प्रकारैः उच्चारितुं शक्यते?",
        "options_hi": ["एकप्रकारेण", "द्विप्रकारैः", "बहुप्रकारैः", "न कथञ्चिदपि"],
        "answer_hi": "बहुप्रकारैः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "विष्णुः कति अवताराणां प्रतिनिधिः?",
        "options_hi": ["दशानाम्", "अष्टानाम्", "बहूनाम्", "चतुर्णाम्"],
        "answer_hi": "बहूनाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "मङ्गलम् श्लोकस्य प्रतिपाद्यं किम्?",
        "options_hi": ["विष्णोः मङ्गलस्वरूपम्", "विष्णोः जन्म", "विष्णोः लीलाः", "विष्णोः आयुधानि"],
        "answer_hi": "विष्णोः मङ्गलस्वरूपम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "गरुडध्वजः किं प्रदर्शयति?",
        "options_hi": ["विष्णोः गतिशीलताम्", "विष्णोः स्थिरताम्", "विष्णोः लघुताम्", "विष्णोः गुरुताम्"],
        "answer_hi": "विष्णोः गतिशीलताम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "पुण्डरीकाक्षः कथं विष्णुं दर्शयति?",
        "options_hi": ["सुन्दराकारम्", "विकृताकारम्", "भयानकाकारम्", "साधारणाकारम्"],
        "answer_hi": "सुन्दराकारम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "देवकीनन्दनः कस्य प्रियः?",
        "options_hi": ["गोपालानाम्", "ब्राह्मणानाम्", "क्षत्रियाणाम्", "वैश्यानाम्"],
        "answer_hi": "गोपालानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "मङ्गलम् श्लोकस्य पठनेन कः भावः जागरितः भवति?",
        "options_hi": ["श्रद्धाभावः", "क्रोधभावः", "लोभभावः", "मोहभावः"],
        "answer_hi": "श्रद्धाभावः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "विष्णोः सहस्रनामसु कति नामानि सन्ति?",
        "options_hi": ["सहस्रम्", "शतम्", "अष्टौ", "दश"],
        "answer_hi": "सहस्रम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "मङ्गलम् श्लोकः कति मात्राभिः युक्तः?",
        "options_hi": ["अष्टभिः", "दशभिः", "द्वादशभिः", "षोडशभिः"],
        "answer_hi": "अष्टभिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "गरुडः कस्य पक्षिराजः?",
        "options_hi": ["सर्वेषां पक्षिणाम्", "केवलं दिव्यानाम्", "केवलं भौमानाम्", "केवलं रात्रिचराणाम्"],
        "answer_hi": "सर्वेषां पक्षिणाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "पुण्डरीकाक्षः किं वर्णयति?",
        "options_hi": ["विष्णोः नेत्रयोः सौन्दर्यम्", "विष्णोः हस्तयोः बलम्", "विष्णोः पादयोः गतिम्", "विष्णोः मुखस्य तेजः"],
        "answer_hi": "विष्णोः नेत्रयोः सौन्दर्यम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "देवकीनन्दनः कति वर्षाणि वृन्दावने अवसत्?",
        "options_hi": ["बाल्यकालम्", "यौवनकालम्", "वृद्धकालम्", "सर्वकालम्"],
        "answer_hi": "बाल्यकालम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "मङ्गलम् श्लोकः कति भाषाणां अनुवादेषु उपलब्धः?",
        "options_hi": ["अनेकासु", "एकस्याम्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकासु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "विष्णोः प्रमुखं शयनं किम्?",
        "options_hi": ["शेषशायी", "सिंहशायी", "भूशायी", "जलशायी"],
        "answer_hi": "शेषशायी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "मङ्गलम् श्लोकस्य उपयोगः कुत्र भवति?",
        "options_hi": ["पूजाविधौ", "युद्धे", "व्यापारे", "कृषौ"],
        "answer_hi": "पूजाविधौ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "गरुडध्वजः कस्य प्रतीकः?",
        "options_hi": ["विष्णोः विजयस्य", "विष्णोः शान्तेः", "विष्णोः ज्ञानस्य", "विष्णोः धनस्य"],
        "answer_hi": "विष्णोः विजयस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "पुण्डरीकाक्षः कथं विष्णुं सूचयति?",
        "options_hi": ["दिव्यदृष्ट्या", "मानवदृष्ट्या", "पशुदृष्ट्या", "पक्षिदृष्ट्या"],
        "answer_hi": "दिव्यदृष्ट्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "देवकीनन्दनः कस्य मित्रं प्रसिद्धम्?",
        "options_hi": ["सुदाम्नः", "दुर्योधनस्य", "रावणस्य", "बलिः"],
        "answer_hi": "सुदाम्नः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "मङ्गलम् श्लोकस्य प्रभावः कः?",
        "options_hi": ["मनःशान्तिदायकः", "मनःक्षोभकारकः", "मनोमोहकारकः", "मनोविभ्रमकारकः"],
        "answer_hi": "मनःशान्तिदायकः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "विष्णुः कति युगेषु अवतरति?",
        "options_hi": ["सर्वेषु", "केवलं सत्ययुगे", "केवलं त्रेतायाम्", "केवलं कलियुगे"],
        "answer_hi": "सर्वेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "मङ्गलम् श्लोकः कति सप्तकेषु गीयते?",
        "options_hi": ["सर्वेषु", "केवलं एकस्मिन्", "केवलं द्वयोः", "केवलं त्रिषु"],
        "answer_hi": "सर्वेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "गरुडः कस्य आज्ञाकारी?",
        "options_hi": ["विष्णोः", "इन्द्रस्य", "ब्रह्मणः", "यमस्य"],
        "answer_hi": "विष्णोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "पुण्डरीकाक्षः कस्य समानः?",
        "options_hi": ["कमलस्य", "सूर्यस्य", "चन्द्रस्य", "अग्नेः"],
        "answer_hi": "कमलस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "देवकीनन्दनः कति गोपिकानां प्रियः?",
        "options_hi": ["असंख्यानाम्", "एकस्याः", "द्वयोः", "अष्टानाम्"],
        "answer_hi": "असंख्यानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "मङ्गलम् श्लोकस्य श्रवणेन किं फलम्?",
        "options_hi": ["चित्तप्रसादः", "धनलाभः", "रोगनिवारणम्", "विद्याप्राप्तिः"],
        "answer_hi": "चित्तप्रसादः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "विष्णोः अवतारेषु प्रसिद्धः कः?",
        "options_hi": ["रामः कृष्णः च", "बुद्धः", "कल्किः", "वामनः"],
        "answer_hi": "रामः कृष्णः च",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "मङ्गलम् श्लोकः कति स्तोत्रेषु समाविष्टः?",
        "options_hi": ["अनेकेषु", "एकस्मिन्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "गरुडध्वजः किं प्रकटयति?",
        "options_hi": ["विष्णोः आकाशगमनशक्तिम्", "विष्णोः जलगमनशक्तिम्", "विष्णोः भूगमनशक्तिम्", "विष्णोः अग्निगमनशक्तिम्"],
        "answer_hi": "विष्णोः आकाशगमनशक्तिम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "पुण्डरीकाक्षः कस्य रूपं धारयति?",
        "options_hi": ["दिव्यसौन्दर्यस्य", "मानवसौन्दर्यस्य", "पशुसौन्दर्यस्य", "वनस्पतिसौन्दर्यस्य"],
        "answer_hi": "दिव्यसौन्दर्यस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "देवकीनन्दनः कति परिवारजनानां रक्षकः?",
        "options_hi": ["सर्वेषाम्", "केवलं स्वस्य", "केवलं मातुः", "केवलं पितुः"],
        "answer_hi": "सर्वेषाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "मङ्गलम् श्लोकस्य महत्त्वं किम्?",
        "options_hi": ["आध्यात्मिकम्", "भौतिकम्", "राजनैतिकम्", "सामाजिकम्"],
        "answer_hi": "आध्यात्मिकम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "विष्णुः कति लोकपालानां मध्ये?",
        "options_hi": ["न भवति", "प्रथमः", "द्वितीयः", "तृतीयः"],
        "answer_hi": "न भवति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "मङ्गलम् श्लोकः कति तालैः गीयते?",
        "options_hi": ["यथेच्छम्", "नियततालैः", "द्रुततालैः", "विलम्बिततालैः"],
        "answer_hi": "यथेच्छम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "गरुडः कति पक्षाणां स्वामी?",
        "options_hi": ["सर्वेषाम्", "केवलं गरुडानाम्", "केवलं हंसानाम्", "केवलं काकानाम्"],
        "answer_hi": "सर्वेषाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "पुण्डरीकाक्षः कस्य दृष्टिं ददाति?",
        "options_hi": ["सर्वज्ञदृष्टिम्", "सामान्यदृष्टिम्", "अर्धदृष्टिम्", "अन्धदृष्टिम्"],
        "answer_hi": "सर्वज्ञदृष्टिम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "देवकीनन्दनः कति वंशानां कुलदेवता?",
        "options_hi": ["यदुवंशस्य", "इक्ष्वाकुवंशस्य", "रघुवंशस्य", "सूर्यवंशस्य"],
        "answer_hi": "यदुवंशस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "मङ्गलम् श्लोकस्य पाठः कस्मै हितकरः?",
        "options_hi": ["सर्वेभ्यः", "केवलं ब्राह्मणेभ्यः", "केवलं पुरुषेभ्यः", "केवलं स्त्रीभ्यः"],
        "answer_hi": "सर्वेभ्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "विष्णोः प्रमुखं आभूषणं किम्?",
        "options_hi": ["कौस्तुभमणिः", "हारः", "कुण्डलम्", "मुकुटः"],
        "answer_hi": "कौस्तुभमणिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "मङ्गलम् श्लोकः कति स्थलेषु प्रचलितः?",
        "options_hi": ["सर्वत्र", "केवलं उत्तरभारते", "केवलं दक्षिणभारते", "केवलं पूर्वभारते"],
        "answer_hi": "सर्वत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "गरुडध्वजः कस्य प्रतिकृति?",
        "options_hi": ["विष्णोः", "इन्द्रस्य", "ब्रह्मणः", "सूर्यस्य"],
        "answer_hi": "विष्णोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "पुण्डरीकाक्षः कस्य आश्रयः?",
        "options_hi": ["भक्तानाम्", "अभक्तानाम्", "शत्रूणाम्", "पापिनाम्"],
        "answer_hi": "भक्तानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "देवकीनन्दनः कति ग्रन्थानां विषयः?",
        "options_hi": ["अनेकानाम्", "एकस्य", "द्वयोः", "त्रयाणाम्"],
        "answer_hi": "अनेकानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "मङ्गलम् श्लोकस्य सारः कः?",
        "options_hi": ["विष्णुः एव मङ्गलम्", "विष्णुः मङ्गलं यच्छति", "विष्णोः नाम मङ्गलम्", "विष्णुभक्तिः मङ्गलम्"],
        "answer_hi": "विष्णुः एव मङ्गलम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "विष्णोः प्रियं वाद्यं किम्?",
        "options_hi": ["शङ्खः", "वीणा", "मृदङ्गः", "वेणुः"],
        "answer_hi": "शङ्खः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "मङ्गलम् श्लोकः कति देवतानां स्तुतौ प्रयुक्तः?",
        "options_hi": ["विष्णोः", "सर्वेषाम्", "शिवस्य", "दुर्गायाः"],
        "answer_hi": "विष्णोः",
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