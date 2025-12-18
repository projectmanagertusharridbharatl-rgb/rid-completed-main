const questions = [
    {
        "num": 1,
        "question_hi": "सुभाषितों का प्रमुख लक्षण क्या है?",
        "options_hi": ["सारगर्भित वाणी", "लंबे वाक्य", "कठिन शब्द", "विलंबित छंद"],
        "answer_hi": "सारगर्भित वाणी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "'अहिंसा परमो धर्मः' यह सुभाषित किसके दर्शन को प्रतिबिंबित करता है?",
        "options_hi": ["सनातन धर्म का", "बौद्ध धर्म का", "जैन धर्म का", "सभी धर्मों का"],
        "answer_hi": "सभी धर्मों का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "'विद्याधनं सर्वधनप्रधानम्' यह उक्ति किस ग्रंथ से ली गई है?",
        "options_hi": ["भर्तृहरि के नीतिशतक से", "चाणक्यनीति से", "हितोपदेश से", "पंचतंत्र से"],
        "answer_hi": "भर्तृहरि के नीतिशतक से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "'सत्यमेव जयते' यह सुभाषित किस ग्रंथ में मिलता है?",
        "options_hi": ["मुंडकोपनिषद में", "भगवद्गीता में", "रामायण में", "महाभारत में"],
        "answer_hi": "मुंडकोपनिषद में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "'अति सर्वत्र वर्जयेत्' यह सूक्ति किसकी रचना है?",
        "options_hi": ["चाणक्य की", "भर्तृहरि की", "वाल्मीकि की", "वेदव्यास की"],
        "answer_hi": "चाणक्य की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "'वसुधैव कुटुम्बकम्' इस सुभाषित का स्रोत क्या है?",
        "options_hi": ["महोपनिषद", "हितोपदेश", "पंचतंत्र", "रामायण"],
        "answer_hi": "महोपनिषद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "'यथा राजा तथा प्रजा' यह उक्ति किसमें प्रसिद्ध है?",
        "options_hi": ["चाणक्यनीति में", "मनुस्मृति में", "महाभारत में", "रामायण में"],
        "answer_hi": "चाणक्यनीति में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "'कर्मण्येवाधिकारस्ते' यह सुभाषित कहाँ प्राप्त होता है?",
        "options_hi": ["भगवद्गीता में", "याज्ञवल्क्य स्मृति में", "रामचरितमानस में", "अथर्ववेद में"],
        "answer_hi": "भगवद्गीता में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "'अहं नमामि देवेशं' इस प्रार्थना के रचयिता कौन हैं?",
        "options_hi": ["शंकराचार्य", "तुलसीदास", "मीराबाई", "सूरदास"],
        "answer_hi": "शंकराचार्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "'उद्यमेन हि सिद्ध्यन्ति कार्याणि' इस उक्ति के कवि कौन हैं?",
        "options_hi": ["विदुर", "चाणक्य", "भर्तृहरि", "वाल्मीकि"],
        "answer_hi": "विदुर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "'सत्यं ब्रूयात् प्रियं ब्रूयात्' यह उपदेश किस स्मृति ग्रंथ से है?",
        "options_hi": ["मनुस्मृति से", "याज्ञवल्क्य स्मृति से", "पराशर स्मृति से", "नारद स्मृति से"],
        "answer_hi": "मनुस्मृति से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "'विद्या ददाति विनयं' इस पूर्ण सुभाषित का क्या है?",
        "options_hi": ["विद्या ददाति विनयं विनयाद्याति पात्रताम्", "विद्या ददाति धनं विनयं", "विद्या ददाति बलं विनयं", "विद्या ददाति यशो विनयं"],
        "answer_hi": "विद्या ददाति विनयं विनयाद्याति पात्रताम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "'अन्नदानं परं दानम्' यह सूक्ति किनका मत है?",
        "options_hi": ["सभी धर्मशास्त्रों का", "केवल हिंदुओं का", "केवल बौद्धों का", "केवल जैनों का"],
        "answer_hi": "सभी धर्मशास्त्रों का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "'धर्मो रक्षति रक्षितः' इस सुभाषित का अर्थ क्या है?",
        "options_hi": ["धर्म की रक्षा करने वाला उसी द्वारा रक्षित होता है", "धर्म सबकी रक्षा करता है", "रक्षक धर्म की रक्षा करता है", "धर्म से रक्षित होता है"],
        "answer_hi": "धर्म की रक्षा करने वाला उसी द्वारा रक्षित होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "'त्यज दुर्जनसंसर्गम्' यह उपदेश कहाँ दिखाई देता है?",
        "options_hi": ["हितोपदेश में", "पंचतंत्र में", "चाणक्यनीति में", "सब जगह"],
        "answer_hi": "सब जगह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "'मातृदेवो भव' यह उक्ति किसमें प्रसिद्ध है?",
        "options_hi": ["तैत्तिरीयोपनिषद में", "मनुस्मृति में", "रामायण में", "महाभारत में"],
        "answer_hi": "तैत्तिरीयोपनिषद में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "'सर्वं परवशं दुःखं' यह सुभाषित किसकी कृति है?",
        "options_hi": ["चाणक्य की", "भर्तृहरि की", "विदुर की", "शुक्राचार्य की"],
        "answer_hi": "चाणक्य की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "'अभिवादनशीलस्य' इस श्लोक के रचयिता कौन हैं?",
        "options_hi": ["वाल्मीकि", "व्यास", "तुलसीदास", "चाणक्य"],
        "answer_hi": "वाल्मीकि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "'जननी जन्मभूमिश्च स्वर्गादपि गरीयसी' यह उक्ति किस ग्रंथ से है?",
        "options_hi": ["रामायण से", "महाभारत से", "चाणक्यनीति से", "भर्तृहरिशतक से"],
        "answer_hi": "रामायण से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "'श्रद्धावान् लभते ज्ञानम्' यह सुभाषित कहाँ प्राप्त होता है?",
        "options_hi": ["भगवद्गीता में", "छान्दोग्योपनिषद में", "मनुस्मृति में", "योगवासिष्ठ में"],
        "answer_hi": "भगवद्गीता में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "'अलसस्य कुतो विद्या' इस श्लोकांश की पूर्णता क्या है?",
        "options_hi": ["अलसस्य कुतो विद्या अविद्यस्य कुतो धनम्", "अलसस्य कुतो सुखम् अविद्यस्य कुतो यशः", "अलसस्य कुतो बलम् अविद्यस्य कुतो धर्मः", "अलसस्य कुतो ज्ञानम् अविद्यस्य कुतो मोक्षः"],
        "answer_hi": "अलसस्य कुतो विद्या अविद्यस्य कुतो धनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "'यद्भावो तद्भवति' इस उक्ति का भाव क्या है?",
        "options_hi": ["मन के भाव के अनुसार फल होता है", "भाव सब कुछ नियंत्रित करता है", "भाव से सब सिद्ध होता है", "भाव ही जीवन है"],
        "answer_hi": "मन के भाव के अनुसार फल होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "'अन्धं प्रति चक्षुर्वत्' यह उपमा किसके लिए है?",
        "options_hi": ["धन के प्रति दरिद्र के लिए", "ज्ञान के प्रति मूर्ख के लिए", "जल के प्रति प्यासे के लिए", "सबके ऊपर"],
        "answer_hi": "ज्ञान के प्रति मूर्ख के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "'काकचेष्टा बकोध्यानम्' यह लक्षण किसका होता है?",
        "options_hi": ["कपटी धार्मिक का", "सच्चे धार्मिक का", "मूर्ख का", "चतुर का"],
        "answer_hi": "कपटी धार्मिक का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "'विद्याविहीनः पशुः' यह उक्ति किसकी कृति है?",
        "options_hi": ["भर्तृहरि की", "चाणक्य की", "विदुर की", "भास की"],
        "answer_hi": "भर्तृहरि की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "'उद्योगिनं पुरुषसिंहम्' इस पूर्ण सुभाषित का क्या है?",
        "options_hi": ["उद्योगिनं पुरुषसिंहं उपैति लक्ष्मीः", "उद्योगिनं पुरुषसिंहं प्रशंसन्ति सर्वे", "उद्योगिनं पुरुषसिंहं न मारयन्ति शत्रवः", "उद्योगिनं पुरुषसिंहं देवाः रक्षन्ति"],
        "answer_hi": "उद्योगिनं पुरुषसिंहं उपैति लक्ष्मीः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "'सेवाधर्मः परमो धर्मः' यह मत किसका है?",
        "options_hi": ["संतों का", "योगियों का", "संन्यासियों का", "गृहस्थों का"],
        "answer_hi": "संतों का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "'अहं ब्रह्मास्मि' यह महावाक्य किस उपनिषद से है?",
        "options_hi": ["बृहदारण्यक उपनिषद से", "छान्दोग्य उपनिषद से", "माण्डूक्य उपनिषद से", "ऐतरेय उपनिषद से"],
        "answer_hi": "बृहदारण्यक उपनिषद से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "'तत् त्वम् असि' इस महावाक्य का अर्थ क्या है?",
        "options_hi": ["तुम परमात्मा के अंश हो", "तुम ब्रह्म हो", "वही तुम हो", "सब कुछ ब्रह्ममय है"],
        "answer_hi": "तुम ब्रह्म हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "'अयं निजः परो वेति' इस सुभाषित के रचयिता कौन हैं?",
        "options_hi": ["भर्तृहरि", "चाणक्य", "संत कबीर", "नानकदेव"],
        "answer_hi": "भर्तृहरि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "'परोपकाराय सत्त्वानि' इस श्लोकांश की पूर्णता क्या है?",
        "options_hi": ["परोपकाराय सत्त्वानि परदुःखोपशान्तये", "परोपकाराय सत्त्वानि धर्माय च कलौ युगे", "परोपकाराय सत्त्वानि संसारे मुक्तये अपि", "परोपकाराय सत्त्वानि यजन्ते मुनयः सदा"],
        "answer_hi": "परोपकाराय सत्त्वानि परदुःखोपशान्तये",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "'यत्र नार्यस्तु पूज्यन्ते' इस श्लोक के कवि कौन हैं?",
        "options_hi": ["मनु", "याज्ञवल्क्य", "वशिष्ठ", "व्यास"],
        "answer_hi": "मनु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "'दानधर्मः परं यज्ञः' यह मत किसका है?",
        "options_hi": ["मनु का", "पराशर का", "व्यास का", "देवल का"],
        "answer_hi": "मनु का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "'वाचा कृन्तनि शस्त्राणि' इस उपमा का अर्थ क्या है?",
        "options_hi": ["वाणी शस्त्र से अधिक तीक्ष्ण होती है", "वाणी से शस्त्र काटा जाता है", "वाणी ही शस्त्र बन जाती है", "वाणी से शस्त्र बनाए जाते हैं"],
        "answer_hi": "वाणी शस्त्र से अधिक तीक्ष्ण होती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "'सत्यं शिवं सुन्दरम्' यह प्रसिद्ध वाक्य किसका है?",
        "options_hi": ["शंकराचार्य का", "रामकृष्ण परमहंस का", "विवेकानंद का", "सभी संतों का"],
        "answer_hi": "सभी संतों का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "'गुरुर्ब्रह्मा गुरुर्विष्णुः' इस श्लोक की समाप्ति कैसे होती है?",
        "options_hi": ["गुरुर्देवो महेश्वरः", "गुरुः साक्षात् परं ब्रह्म", "गुरुरेव हरिः प्रोक्तः", "तस्मै श्रीगुरवे नमः"],
        "answer_hi": "तस्मै श्रीगुरवे नमः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "'मनसा चिन्तितं कार्यं' इस सुभाषित की पूर्णता क्या है?",
        "options_hi": ["मनसा चिन्तितं कार्यं वाचा न प्रतिभाष्यते", "मनसा चिन्तितं कार्यं सिद्ध्यति यत्नेन", "मनसा चिन्तितं कार्यं गुप्तं रक्षेत् बुधः सदा", "मनसा चिन्तितं कार्यं कर्मणा साधयेत् धिया"],
        "answer_hi": "मनसा चिन्तितं कार्यं वाचा न प्रतिभाष्यते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "'सर्वं ज्ञानं मयि विद्यते' यह उक्ति किसकी है?",
        "options_hi": ["श्रीकृष्ण की", "राम की", "बुद्ध की", "महावीर की"],
        "answer_hi": "श्रीकृष्ण की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "'आत्मनो मोक्षार्थं जगद्धिताय च' यह उद्देश्य किसका है?",
        "options_hi": ["मानव जीवन का", "संन्यासी का", "गृहस्थ का", "योगी का"],
        "answer_hi": "मानव जीवन का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "'काले करोति यच्छक्तिः' इस उक्ति का भाव क्या है?",
        "options_hi": ["शक्ति के अनुसार कार्य करो", "काल सब कुछ करता है", "शक्ति काल के अधीन है", "काल की प्रतीक्षा करके कार्य करो"],
        "answer_hi": "शक्ति के अनुसार कार्य करो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "'नास्ति बुद्धिरसम्बन्धा' यह सुभाषित किससे है?",
        "options_hi": ["चाणक्यनीति से", "भर्तृहरिशतक से", "हितोपदेश से", "पंचतंत्र से"],
        "answer_hi": "चाणक्यनीति से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "'पृथिव्यां त्रीणि रत्नानि' इस सुभाषित की पूर्णता क्या है?",
        "options_hi": ["पृथिव्यां त्रीणि रत्नानि जलमन्नं सुभाषितम्", "पृथिव्यां त्रीणि रत्नानि जलं सुवर्णं मणयः", "पृथिव्यां त्रीणि रत्नानि धनं धान्यं सुताः", "पृथिव्यां त्रीणि रत्नानि गावः विप्राः सुरद्रुमाः"],
        "answer_hi": "पृथिव्यां त्रीणि रत्नानि जलमन्नं सुभाषितम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "'सुखार्थिनः कुतो विद्या' इस श्लोक का अगला भाग क्या है?",
        "options_hi": ["सुखार्थिनः कुतो विद्या विद्यार्थिनः कुतो सुखम्", "सुखार्थिनः कुतो विद्या विद्यार्थिनः कुतो धनम्", "सुखार्थिनः कुतो विद्या विद्यार्थिनः कुतो यशः", "सुखार्थिनः कुतो विद्या विद्यार्थिनः कुतो मोक्षः"],
        "answer_hi": "सुखार्थिनः कुतो विद्या विद्यार्थिनः कुतो सुखम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "'सत्येन धार्यते पृथ्वी' यह सूक्ति कहाँ प्राप्त होती है?",
        "options_hi": ["महाभारत में", "मनुस्मृति में", "ऋग्वेद में", "अथर्ववेद में"],
        "answer_hi": "महाभारत में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "'योगः कर्मसु कौशलम्' यह सुभाषित कहाँ वर्तमान है?",
        "options_hi": ["भगवद्गीता में", "योगसूत्र में", "हठयोगप्रदीपिका में", "शिवसूत्र में"],
        "answer_hi": "भगवद्गीता में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "'अभ्यासेन विना विद्या' इस उक्ति की पूर्णता क्या है?",
        "options_hi": ["अभ्यासेन विना विद्या न जायते कदाचन", "अभ्यासेन विना विद्या न सिध्यति", "अभ्यासेन विना विद्या नश्यति", "अभ्यासेन विना विद्या लभ्यते न"],
        "answer_hi": "अभ्यासेन विना विद्या न जायते कदाचन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "'धनानि जीवितं चैव' इस उक्ति की समाप्ति कैसे होती है?",
        "options_hi": ["धनानि जीवितं चैव परार्थे प्राज्ञ उत्सृजेत्", "धनानि जीवितं चैव विद्यार्थे त्यज्यते बुधैः", "धनानि जीवितं चैव धर्मार्थे त्यज्यते सदा", "धनानि जीवितं चैव त्यजेत् धीरः सदा बुधः"],
        "answer_hi": "परार्थे प्राज्ञ उत्सृजेत्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "'मा गमः क्षणमप्यत्र' यह उपदेश किसके लिए है?",
        "options_hi": ["सत्संग त्याग के लिए", "दुर्जन संग के लिए", "धर्म मार्ग के लिए", "गुरु सेवा के लिए"],
        "answer_hi": "दुर्जन संग के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "'आरोग्यं परमं भाग्यम्' इस सुभाषित का स्रोत क्या है?",
        "options_hi": ["चरक संहिता", "सुश्रुत संहिता", "वैद्यक ग्रंथ", "लोकोक्ति"],
        "answer_hi": "लोकोक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "'यदृच्छया चोपपन्नं' इस सुभाषित का अर्थ क्या है?",
        "options_hi": ["यदृच्छा से प्राप्त स्वर्ग का द्वार", "यदृच्छा से प्राप्त सुख", "यदृच्छा से प्राप्त धन", "यदृच्छा से प्राप्त सत्संग"],
        "answer_hi": "यदृच्छा से प्राप्त स्वर्ग का द्वार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "'अनुदिनं वर्धते विद्या' इस श्लोकांश की पूर्णता क्या है?",
        "options_hi": ["अनुदिनं वर्धते विद्या विद्या धनं परं स्मृतम्", "अनुदिनं वर्धते विद्या दानेन च विनयेन", "अनुदिनं वर्धते विद्या अभ्यासेन प्रवर्धते", "अनुदिनं वर्धते विद्या यः पठति स पण्डितः"],
        "answer_hi": "विद्या धनं परं स्मृतम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "'मित्रं प्रीतिरूपं मे' यह भाव किसके सुभाषित में है?",
        "options_hi": ["कालिदास के", "भर्तृहरि के", "बिल्हण के", "भवभूति के"],
        "answer_hi": "कालिदास के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "'जलं बिन्दु बिन्दु पूरयति' इस उक्ति का तात्पर्य क्या है?",
        "options_hi": ["सूक्ष्म और निरंतर प्रयास बड़ा फल देता है", "जल सूक्ष्म होता है", "बिंदु बड़ा होता है", "पात्र में जल होता है"],
        "answer_hi": "सूक्ष्म और निरंतर प्रयास बड़ा फल देता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "'विदेशे विद्या पूज्यते' इस सुभाषित का भाव क्या है?",
        "options_hi": ["विदेश में विद्यावान को सम्मान मिलता है", "विद्या विदेश में ही सीखी जाती है", "विदेश में विद्या महत्वपूर्ण है", "विद्या सब जगह पूजी जाती है"],
        "answer_hi": "विदेश में विद्यावान को सम्मान मिलता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "'सत्यस्य वचनं श्रेयः' यह उक्ति किससे है?",
        "options_hi": ["ऋग्वेद से", "यजुर्वेद से", "अथर्ववेद से", "महाभारत से"],
        "answer_hi": "ऋग्वेद से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "'धैर्यं सफलतायाः मूलम्' यह सुभाषित किसका है?",
        "options_hi": ["चाणक्य का", "विदुर का", "भीष्म का", "सभी का मत"],
        "answer_hi": "सभी का मत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "'प्रज्वलितो ज्ञानमयः प्रदीपः' यह उपमा किसकी है?",
        "options_hi": ["गुरु की", "विद्या की", "बुद्धि की", "तेज की"],
        "answer_hi": "गुरु की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "'अपि स्वर्णमयी लङ्का' इस सुभाषित के रचयिता कौन हैं?",
        "options_hi": ["तुलसीदास", "वाल्मीकि", "भवभूति", "कालिदास"],
        "answer_hi": "तुलसीदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "'विद्या विनयेन शोभते' इस उक्ति के कवि कौन हैं?",
        "options_hi": ["चाणक्य", "भर्तृहरि", "विदुर", "लोकोक्ति"],
        "answer_hi": "भर्तृहरि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "'सर्वं ज्ञानं प्रभोरस्ति' यह भाव किसके सुभाषित में है?",
        "options_hi": ["विष्णुसहस्रनाम में", "शिवस्तोत्र में", "देवीस्तुति में", "सभी स्तोत्रों में"],
        "answer_hi": "विष्णुसहस्रनाम में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "'मन एव मनुष्याणां' इस सुभाषित की पूर्णता क्या है?",
        "options_hi": ["मन एव मनुष्याणां कारणं बन्धमोक्षयोः", "मन एव मनुष्याणां बन्धः मोक्षः च", "मन एव मनुष्याणां सुखदुःखयोः कारणम्", "मन एव मनुष्याणां जीवनं मरणं च"],
        "answer_hi": "मन एव मनुष्याणां कारणं बन्धमोक्षयोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "'न हि ज्ञानेन सदृशं' इस उक्ति की समाप्ति कैसे होती है?",
        "options_hi": ["न हि ज्ञानेन सदृशं पवित्रमिह विद्यते", "न हि ज्ञानेन सदृशं धनं किञ्चिद् विद्यते", "न हि ज्ञानेन सदृशं बलं लोके विद्यते", "न हि ज्ञानेन सदृशं सुखं कुत्रापि विद्यते"],
        "answer_hi": "पवित्रमिह विद्यते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "'धर्म एव हतो हन्ति' इस सुभाषित का अर्थ क्या है?",
        "options_hi": ["धर्म को मारने वाला व्यक्ति नष्ट हो जाता है", "धर्म पापी को मारता है", "धर्म की रक्षा ही रक्षा करती है", "धर्म से मारा गया शत्रु नष्ट होता है"],
        "answer_hi": "धर्म को मारने वाला व्यक्ति नष्ट हो जाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "'सर्वभूतेषु चात्मानं' यह उपदेश किसमें है?",
        "options_hi": ["ईशावास्योपनिषद में", "कठोपनिषद में", "माण्डूक्योपनिषद में", "प्रश्नोपनिषद में"],
        "answer_hi": "ईशावास्योपनिषद में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "'यावज्जीवेत् सुखं जीवेत्' इस उक्ति का पूर्वार्ध क्या है?",
        "options_hi": ["स्वल्पमप्यस्य धर्मस्य", "ऋणं कृत्वा घृतं पिबेत्", "यदि जीवनं भवेत्", "कदाचित् सुखं लभ्यते"],
        "answer_hi": "ऋणं कृत्वा घृतं पिबेत्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "'अहं नरः नारायणः च' यह भाव किस स्तोत्र में है?",
        "options_hi": ["दक्षिणामूर्ति स्तोत्र में", "शिवमानसपूजा में", "विष्णुसहस्रनाम में", "ललितासहस्रनाम में"],
        "answer_hi": "दक्षिणामूर्ति स्तोत्र में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "'न भूतो न भविष्यति' यह उक्ति किसके विषय में है?",
        "options_hi": ["राम के", "कृष्ण के", "बुद्ध के", "महावीर के"],
        "answer_hi": "राम के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "'सुखस्य मूलं धर्मः' यह सुभाषित कहाँ प्राप्त होता है?",
        "options_hi": ["मनुस्मृति में", "याज्ञवल्क्य स्मृति में", "महाभारत में", "रामायण में"],
        "answer_hi": "मनुस्मृति में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "'अल्पस्य हेतोर्महतीं' इस सुभाषित की पूर्णता क्या है?",
        "options_hi": ["अल्पस्य हेतोर्महतीं श्रियं त्यजेत्", "अल्पस्य हेतोर्महतीं प्रीतिं मा त्यजेत्", "अल्पस्य हेतोर्महतीं कथां मा श्रृणोतु", "अल्पस्य हेतोर्महतीं लक्ष्मीं त्यजन्ति मूर्खाः"],
        "answer_hi": "श्रियं त्यजेत्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "'दानं भोगो नाशस्तिस्रो गतयो भवन्ति' इस सुभाषित के कवि कौन हैं?",
        "options_hi": ["चाणक्य", "भर्तृहरि", "विदुर", "कालिदास"],
        "answer_hi": "भर्तृहरि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "'अन्नदाता भयत्राता' यह उक्ति किसकी प्रशंसा में है?",
        "options_hi": ["पिता की", "माता की", "गुरु की", "राजा की"],
        "answer_hi": "पिता की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "'यः श्रद्धधानो जुहोति' इस उक्ति का स्रोत क्या है?",
        "options_hi": ["भगवद्गीता", "ऋग्वेद", "यजुर्वेद", "उपनिषद"],
        "answer_hi": "भगवद्गीता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "'दुर्जनः सज्जनो भवेत्' इसका उपाय क्या है?",
        "options_hi": ["सत्संगति", "दंड", "शिक्षा", "प्रेम"],
        "answer_hi": "सत्संगति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "'सर्वं परवशं दुःखं' इस उक्ति की पूर्णता क्या है?",
        "options_hi": ["सर्वं परवशं दुःखं सर्वमात्मवशं सुखम्", "सर्वं परवशं दुःखं तस्माद् आत्मानं रक्षेत्", "सर्वं परवशं दुःखं मा कुरु पराधीनताम्", "सर्वं परवशं दुःखं स्वावलम्बनं सुखम्"],
        "answer_hi": "सर्वमात्मवशं सुखम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "'आत्मवन्तं न विद्यते भयम्' यह उक्ति कहाँ है?",
        "options_hi": ["चाणक्यनीति में", "भर्तृहरिशतक में", "हितोपदेश में", "भगवद्गीता में"],
        "answer_hi": "भगवद्गीता में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "'अभिवादनशीलस्य' इस श्लोक का अगला भाग क्या है?",
        "options_hi": ["नित्यं वृद्धोपसेविनः", "चत्वारि तस्य वर्धन्ते", "आयुर्विद्या यशो बलम्", "सर्वाण्येतानि वर्धन्ते"],
        "answer_hi": "नित्यं वृद्धोपसेविनः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "'क्षमा वीरस्य भूषणम्' इस सुभाषित का स्रोत क्या है?",
        "options_hi": ["रामायण", "महाभारत", "हितोपदेश", "पंचतंत्र"],
        "answer_hi": "रामायण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "'नास्ति विद्यासमं चक्षुः' इस उक्ति का तात्पर्य क्या है?",
        "options_hi": ["विद्या के समान नेत्र नहीं है", "विद्या ही नेत्र बन जाती है", "विद्या से चक्षु के समान दृष्टि होती है", "चक्षु से विद्या नहीं मिलती"],
        "answer_hi": "विद्या के समान नेत्र नहीं है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "'सर्वे भवन्तु सुखिनः' इस प्रार्थना की समाप्ति कैसे होती है?",
        "options_hi": ["सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः", "सर्वे भवन्तु सुखिनः सर्वे भद्राणि पश्यन्तु", "सर्वे भवन्तु सुखिनः सर्वे तुष्यन्तु जीविते", "सर्वे भवन्तु सुखिनः सर्वे मोदन्तु सर्वदा"],
        "answer_hi": "सर्वे सन्तु निरामयाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "'धर्मस्य त्वरिता गतिः' इस उक्ति का पूर्वार्ध क्या है?",
        "options_hi": ["सत्यस्य नास्ति पातकम्", "सत्यमेव जयते नानृतम्", "सत्यं ब्रूयात् प्रियं ब्रूयात्", "सत्यं मा स्म प्रमादितम्"],
        "answer_hi": "सत्यस्य नास्ति पातकम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "'येन केन प्रकारेण' इस उक्ति का प्रयोग कहाँ होता है?",
        "options_hi": ["प्रयत्न के विषय में", "धनार्जन के विषय में", "मोक्ष के विषय में", "युद्ध के विषय में"],
        "answer_hi": "प्रयत्न के विषय में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "'प्रज्ञा प्रतिष्ठा प्रज्ञाने' यह उक्ति किसकी है?",
        "options_hi": ["बुद्ध की", "महावीर की", "शंकराचार्य की", "विवेकानंद की"],
        "answer_hi": "बुद्ध की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "'अहं सर्वं पापं नाशयामि' यह शक्ति किसकी है?",
        "options_hi": ["गंगा की", "गायत्री की", "तुलसी की", "गुरु की"],
        "answer_hi": "गंगा की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "'सन्तोषः परं सुखम्' इस सुभाषित का स्रोत क्या है?",
        "options_hi": ["वाल्मीकि रामायण", "महाभारत", "हितोपदेश", "लोकोक्ति"],
        "answer_hi": "लोकोक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "'विद्या विहीनः पशुः' इसका अगला भाग क्या है?",
        "options_hi": ["अविद्यः पशुः समः", "अविद्यः पशुरेव हि", "अविद्यः पशुतुल्यः", "अविद्यः पशुभिः समः"],
        "answer_hi": "अविद्यः पशुरेव हि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "'दानात् को न प्रसीदति' इस प्रश्न का उत्तर क्या है?",
        "options_hi": ["सभी प्रसन्न होते हैं", "कोई नहीं प्रसन्न होता", "देवता प्रसन्न होते हैं", "मनुष्य प्रसन्न होते हैं"],
        "answer_hi": "सभी प्रसन्न होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "'अन्धकारात् प्रकाशः' यह सिद्धांत किसका है?",
        "options_hi": ["सांख्य दर्शन का", "वेदांत दर्शन का", "न्याय दर्शन का", "योग दर्शन का"],
        "answer_hi": "सांख्य दर्शन का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "'सर्वं खल्विदं ब्रह्म' यह महावाक्य किससे है?",
        "options_hi": ["छान्दोग्य उपनिषद से", "माण्डूक्य उपनिषद से", "बृहदारण्यक उपनिषद से", "तैत्तिरीय उपनिषद से"],
        "answer_hi": "छान्दोग्य उपनिषद से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "'सुखदुःखे समे कृत्वा' यह उपदेश किसमें है?",
        "options_hi": ["भगवद्गीता में", "योगसूत्र में", "मनुस्मृति में", "हितोपदेश में"],
        "answer_hi": "भगवद्गीता में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "'अहिंसा सत्यमस्तेयं' ये यम कितने हैं?",
        "options_hi": ["पाँच", "चार", "छह", "आठ"],
        "answer_hi": "पाँच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "'योगः चित्तवृत्तिनिरोधः' यह परिभाषा किसकी है?",
        "options_hi": ["पतंजलि की", "व्यास की", "शंकराचार्य की", "हठयोगियों की"],
        "answer_hi": "पतंजलि की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "'ब्रह्म सत्यं जगन्मिथ्या' यह सिद्धांत किसका है?",
        "options_hi": ["अद्वैत वेदांत का", "विशिष्टाद्वैत का", "द्वैत वेदांत का", "शैव दर्शन का"],
        "answer_hi": "अद्वैत वेदांत का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "'ओं नमः शिवाय' इस मंत्र का नाम क्या है?",
        "options_hi": ["पंचाक्षर मंत्र", "षडक्षर मंत्र", "अष्टाक्षर मंत्र", "द्वादशाक्षर मंत्र"],
        "answer_hi": "पंचाक्षर मंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "'गीतां साङ्गोपाङ्गां' यह स्तुति किसकी है?",
        "options_hi": ["भगवद्गीता की", "रामगीता की", "अष्टावक्र गीता की", "अवधूत गीता की"],
        "answer_hi": "भगवद्गीता की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "'वेदाः स्मृतिः सदाचारः' यह धर्मलक्षण किसका है?",
        "options_hi": ["मनु का", "याज्ञवल्क्य का", "पराशर का", "व्यास का"],
        "answer_hi": "मनु का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "'ज्ञानं शीलं दया शौचम्' ये गुण किसके हैं?",
        "options_hi": ["ब्राह्मण के", "क्षत्रिय के", "वैश्य के", "शूद्र के"],
        "answer_hi": "ब्राह्मण के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "'तमसो मा ज्योतिर्गमय' यह मंत्र किससे है?",
        "options_hi": ["बृहदारण्यक उपनिषद से", "छान्दोग्य उपनिषद से", "मुंडक उपनिषद से", "कठ उपनिषद से"],
        "answer_hi": "बृहदारण्यक उपनिषद से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "'ओं पूर्णमदः पूर्णमिदम्' यह मंत्र कहाँ है?",
        "options_hi": ["ईशावास्योपनिषद में", "बृहदारण्यक उपनिषद में", "माण्डूक्योपनिषद में", "श्वेताश्वतरोपनिषद में"],
        "answer_hi": "ईशावास्योपनिषद में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "'वसुधैव कुटुम्बकम्' इसके रचयिता कौन हैं?",
        "options_hi": ["महोपनिषद के ऋषि", "वाल्मीकि", "व्यास", "अज्ञात"],
        "answer_hi": "महोपनिषद के ऋषि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "'कायेन वाचा मनसेन्द्रियैर्वा' इस श्लोक का विषय क्या है?",
        "options_hi": ["भगवत्पूजा", "गुरुसेवा", "सदाचार", "यज्ञकर्म"],
        "answer_hi": "भगवत्पूजा",
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