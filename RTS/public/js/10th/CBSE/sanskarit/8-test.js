const questions = [
    {
        "num": 1,
        "question_hi": "सुभाषितों का प्रमुख कारण क्या होता है?",
        "options_hi": ["जीवन उपदेश", "मनोरंजन", "काव्य प्रदर्शन", "धर्म प्रचार"],
        "answer_hi": "जीवन उपदेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "'विद्याधनं सर्वधनप्रधानम्' में 'प्रधानम्' का क्या अर्थ है?",
        "options_hi": ["श्रेष्ठ", "बहुत", "प्रथम", "मुख्य"],
        "answer_hi": "श्रेष्ठ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "'सत्यमेव जयते' का उल्लेख कहाँ मिलता है?",
        "options_hi": ["मुण्डकोपनिषद में", "भगवद्गीता में", "रामायण में", "मनुस्मृति में"],
        "answer_hi": "मुण्डकोपनिषद में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "'अहिंसा परमो धर्मः' इस सूक्ति का विस्तार क्या है?",
        "options_hi": ["धर्म का मूल अहिंसा है", "अहिंसा ही परम सुख है", "अहिंसा ही सनातन धर्म है", "सभी धर्मों में अहिंसा श्रेष्ठ है"],
        "answer_hi": "धर्म का मूल अहिंसा है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "चाणक्य द्वारा रचित 'अतिसर्वत्र वर्जयेत्' का पूर्ण रूप क्या है?",
        "options_hi": ["अति सर्वत्र वर्जयेत्", "अतिदानात् वर्जयेत्", "अतिभोजनात् वर्जयेत्", "अतिवादात् वर्जयेत्"],
        "answer_hi": "अति सर्वत्र वर्जयेत्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "'वसुधैव कुटुम्बकम्' का भावार्थ क्या है?",
        "options_hi": ["सम्पूर्ण पृथ्वी ही कुटुम्ब है", "पृथ्वी कुटुम्ब का आधार है", "कुटुम्ब पृथ्वी के समान है", "पृथ्वी को कुटुम्ब द्वारा पालना चाहिए"],
        "answer_hi": "सम्पूर्ण पृथ्वी ही कुटुम्ब है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "'यथा राजा तथा प्रजा' का संदर्भ क्या है?",
        "options_hi": ["राजा प्रजा का आदर्श है", "प्रजा राजा के अनुसार चलती है", "राजा के गुण प्रजा में प्रतिबिम्बित होते हैं", "राजा और प्रजा का सम्बन्ध"],
        "answer_hi": "राजा के गुण प्रजा में प्रतिबिम्बित होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "'कर्मण्येवाधिकारस्ते' का पूर्ण श्लोक क्या है?",
        "options_hi": ["कर्मण्येवाधिकारस्ते मा फलेषु कदाचन", "कर्म करोति फलं ददाति", "कर्म ही पुरुष का अधिकार है", "कर्म से ही सिद्धि होती है"],
        "answer_hi": "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "शंकराचार्य द्वारा रचित 'अहं नमामि' स्तोत्र का नाम क्या है?",
        "options_hi": ["शिवमानसपूजा", "दक्षिणामूर्तिस्तोत्र", "भजगोविन्दम्", "सौन्दर्यलहरी"],
        "answer_hi": "शिवमानसपूजा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "'उद्यमेन हि सिद्ध्यन्ति' का पूर्ण वाक्य क्या है?",
        "options_hi": ["उद्यमेन हि सिद्ध्यन्ति कार्याणि न मनोरथैः", "उद्यमेन हि सिद्ध्यन्ति सर्वाणि मनोरथाः", "उद्यमेन हि सिद्ध्यन्ति धनानि यशांसि च", "उद्यमेन हि सिद्ध्यन्ति जीवन के लक्ष्य"],
        "answer_hi": "उद्यमेन हि सिद्ध्यन्ति कार्याणि न मनोरथैः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "'सत्यं ब्रूयात् प्रियं ब्रूयात्' का समापन किससे होता है?",
        "options_hi": ["न ब्रूयात् सत्यमप्रियम्", "प्रियं च नानृतं ब्रूयात्", "सत्यमेव ब्रूयात् सदा", "वाक्यं सत्यं प्रियं च स्यात्"],
        "answer_hi": "न ब्रूयात् सत्यमप्रियम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "'विद्या ददाति विनयं' इस श्लोक के कवि कौन हैं?",
        "options_hi": ["भर्तृहरि", "चाणक्य", "विदुर", "कालिदास"],
        "answer_hi": "भर्तृहरि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "'अन्नदानं परं दानम्' में 'परम्' का क्या भाव है?",
        "options_hi": ["श्रेष्ठ", "अन्तिम", "परलोकगामी", "बड़ा"],
        "answer_hi": "श्रेष्ठ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "'धर्मो रक्षति रक्षितः' की व्याख्या क्या है?",
        "options_hi": ["धर्मरक्षक धर्म से रक्षित होता है", "धर्म उसकी रक्षा करता है जो धर्म की रक्षा करता है", "रक्षित धर्म की रक्षा करता है", "धर्मरक्षा ही जीवनरक्षा है"],
        "answer_hi": "धर्म उसकी रक्षा करता है जो धर्म की रक्षा करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "'त्यज दुर्जनसंसर्गम्' का अगला भाग क्या है?",
        "options_hi": ["भज सद्संगम्", "कुरु सत्कर्म", "धर्मं पालय", "विद्यामधीष्व"],
        "answer_hi": "भज सद्संगम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "'मातृदेवो भव' का संदर्भ क्या है?",
        "options_hi": ["माता को देवता के समान पूजो", "माता ही देवता है", "मातृभक्ति परम पूजा है", "माता देवस्वरूप है"],
        "answer_hi": "माता को देवता के समान पूजो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "'सर्वं परवशं दुःखं' का दूसरा भाग क्या है?",
        "options_hi": ["सर्वमात्मवशं सुखम्", "स्वावलम्बनं सुखम्", "आत्मनः वशे सुखं विद्यते", "स्वाधीनता सुखकारिणी"],
        "answer_hi": "सर्वमात्मवशं सुखम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "'अभिवादनशीलस्य' श्लोक का विषय क्या है?",
        "options_hi": ["वृद्धों की सेवा", "विद्याध्ययन", "धर्माचरण", "कुलसंवर्धन"],
        "answer_hi": "वृद्धों की सेवा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "'जननी जन्मभूमिश्च' श्लोक के कवि कौन हैं?",
        "options_hi": ["वाल्मीकि", "तुलसीदास", "व्यास", "भास"],
        "answer_hi": "वाल्मीकि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "'श्रद्धावान् लभते ज्ञानम्' यह उक्ति किसकी है?",
        "options_hi": ["श्रीकृष्ण की", "राम की", "बुद्ध की", "व्यास की"],
        "answer_hi": "श्रीकृष्ण की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "'अलसस्य कुतो विद्या' का पूर्ण रूप क्या है?",
        "options_hi": ["अलसस्य कुतो विद्या अविद्यस्य कुतो धनम्", "अलसस्य न विद्या न धनं न सुखम्", "अलस विद्या नहीं पाता", "आलस्य विद्या का विरोधी है"],
        "answer_hi": "अलसस्य कुतो विद्या अविद्यस्य कुतो धनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "'यद्भावो तद्भवति' का व्यावहारिक उदाहरण क्या है?",
        "options_hi": ["सद्भाव सत्फल देता है", "मनोबल से कार्यसिद्धि होती है", "ईश्वरभक्ति से मोक्ष मिलता है", "दयाभाव सुख देता है"],
        "answer_hi": "सद्भाव सत्फल देता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "'अन्धं प्रति चक्षुर्वत्' उपमा का प्रयोजन क्या है?",
        "options_hi": ["अंधे के लिए आँख का महत्व दिखाना", "आँख के समान अंधे की सहायता", "अंधे को आँख दान का महत्व", "आँख की अंधे से तुलना"],
        "answer_hi": "अंधे के लिए आँख का महत्व दिखाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "'काकचेष्टा बकोध्यानम्' यह लक्षण किसका होता है?",
        "options_hi": ["मिथ्याचारी का", "साधु का", "योगी का", "पंडित का"],
        "answer_hi": "मिथ्याचारी का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "'विद्याविहीनः पशुः' में 'पशुः' का क्या अर्थ है?",
        "options_hi": ["अविवेकी जीव", "चौपाया प्राणी", "बलवान", "अज्ञानी"],
        "answer_hi": "अविवेकी जीव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "'उद्योगिनं पुरुषसिंहम्' श्लोक का अर्थ क्या है?",
        "options_hi": ["परिश्रमी पुरुष के पास लक्ष्मी स्वयं आती है", "सिंह के समान पुरुष उद्योगी होता है", "उद्योगी ही सिंह के समान होता है", "सिंह उद्योगी की रक्षा करता है"],
        "answer_hi": "परिश्रमी पुरुष के पास लक्ष्मी स्वयं आती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "'सेवाधर्मः परमो धर्मः' का प्रतिपाद्य क्या है?",
        "options_hi": ["सेवा ही श्रेष्ठ धर्म है", "धर्म सेवारूप है", "सेवा सभी धर्मों का सार है", "सेवा से धर्म सिद्ध होता है"],
        "answer_hi": "सेवा ही श्रेष्ठ धर्म है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "'अहं ब्रह्मास्मि' इस महावाक्य की व्याख्या क्या है?",
        "options_hi": ["आत्मा ही ब्रह्म है", "मैं ब्रह्म का अंश हूँ", "ब्रह्म के साथ मैं एक हूँ", "ब्रह्म मैं बन जाता हूँ"],
        "answer_hi": "आत्मा ही ब्रह्म है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "'तत् त्वम् असि' यह महावाक्य किस दर्शन में प्रमुख है?",
        "options_hi": ["अद्वैतवेदान्त", "विशिष्टाद्वैत", "द्वैत", "योगदर्शन"],
        "answer_hi": "अद्वैतवेदान्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "'अयं निजः परो वेति' का भाव क्या है?",
        "options_hi": ["सब एक कुटुम्ब हैं", "अपना-पराया भेद मिथ्या है", "पराया भी अपना ही है", "सबका हित चिंतन करो"],
        "answer_hi": "सब एक कुटुम्ब हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "'परोपकाराय सत्त्वानि' श्लोक के रचयिता कौन हैं?",
        "options_hi": ["भर्तृहरि", "शंकराचार्य", "तुलसीदास", "विदुर"],
        "answer_hi": "भर्तृहरि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "'यत्र नार्यस्तु पूज्यन्ते' का अगला भाग क्या है?",
        "options_hi": ["तत्र रमन्ते देवताः", "तत्र लक्ष्मीः निवसति", "तत्र सुखं वसति", "तत्र धर्मः प्रवर्तते"],
        "answer_hi": "तत्र रमन्ते देवताः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "'दानधर्मः परं यज्ञः' में 'यज्ञः' का क्या अर्थ है?",
        "options_hi": ["परम कर्म", "देवपूजा", "अग्निहोत्र", "स्वर्गप्राप्ति का साधन"],
        "answer_hi": "परम कर्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "'वाचा कृन्तनि शस्त्राणि' उपमा का उद्देश्य क्या है?",
        "options_hi": ["वाणी की तीक्ष्णता दिखाना", "शस्त्रों का निरर्थकत्व दिखाना", "वाक्शक्ति का महिमा बताना", "मौन का महत्व बताना"],
        "answer_hi": "वाणी की तीक्ष्णता दिखाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "'सत्यं शिवं सुन्दरम्' का प्रचारक कौन हैं?",
        "options_hi": ["विवेकानन्द", "रामकृष्ण परमहंस", "शिवानन्द", "स्वामी रामतीर्थ"],
        "answer_hi": "विवेकानन्द",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "'गुरुर्ब्रह्मा गुरुर्विष्णुः' श्लोक का प्रारम्भ क्या है?",
        "options_hi": ["गुरुर्ब्रह्मा गुरुर्विष्णुर्गुरुर्देवो महेश्वरः", "गुरुः साक्षात् परं ब्रह्म", "गुरुः परमकारणम्", "गुरौ सर्वं प्रतिष्ठितम्"],
        "answer_hi": "गुरुर्ब्रह्मा गुरुर्विष्णुर्गुरुर्देवो महेश्वरः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "'मनसा चिन्तितं कार्यं' का संदर्भ क्या है?",
        "options_hi": ["गुप्तकार्य की रक्षा", "मनोनिश्चय का महत्व", "चिंता की आवश्यकता", "कार्यसिद्धि का उपाय"],
        "answer_hi": "गुप्तकार्य की रक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "'सर्वं ज्ञानं मयि विद्यते' यह वचन किसका है?",
        "options_hi": ["श्रीकृष्ण का", "विष्णु का", "ब्रह्मा का", "ईश्वर का"],
        "answer_hi": "श्रीकृष्ण का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "'आत्मनो मोक्षार्थं जगद्धिताय च' का पूर्ण वाक्य क्या है?",
        "options_hi": ["आत्मनो मोक्षार्थं जगद्धिताय च", "सर्वस्य हिताय चिन्तयेत्", "परोपकाराय प्रवृत्तः स्यात्", "स्वार्थं परार्थं च एकत्र कुर्यात्"],
        "answer_hi": "आत्मनो मोक्षार्थं जगद्धिताय च",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "'काले करोति यच्छक्तिः' का भावार्थ क्या है?",
        "options_hi": ["शक्ति के अनुसार समय पर कार्य करो", "समय की प्रतीक्षा करके कार्य करो", "शक्ति काल के अधीन है", "काल शक्ति देता है"],
        "answer_hi": "शक्ति के अनुसार समय पर कार्य करो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "'नास्ति बुद्धिरसम्बन्धा' का विपरीतार्थक वाक्य क्या है?",
        "options_hi": ["बुद्धि सर्वत्र उपयोगी है", "बुद्धि सभी सम्बन्धों में", "बुद्धिरहित कहीं नहीं जाता", "बुद्धि सम्बन्ध के बिना नहीं है"],
        "answer_hi": "बुद्धि सम्बन्ध के बिना नहीं है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "'पृथिव्यां त्रीणि रत्नानि' की व्याख्या क्या है?",
        "options_hi": ["जल, अन्न और सुभाषित", "सोना, चाँदी और मणि", "गाय, भूमि और जल", "धन, धान्य और पुत्र"],
        "answer_hi": "जल, अन्न और सुभाषित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "'सुखार्थिनः कुतो विद्या' का समाधान क्या है?",
        "options_hi": ["विद्यार्थिनः कुतो सुखम्", "सुख विद्या के बिना नहीं है", "विद्या से सुख मिलता है", "विद्यासुख परम सुख है"],
        "answer_hi": "विद्यार्थिनः कुतो सुखम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "'सत्येन धार्यते पृथ्वी' का प्रतिपाद्य क्या है?",
        "options_hi": ["सत्य भूमि का आधार है", "सत्य जगत को धारण करता है", "सत्य से पृथ्वी टिकती है", "सत्य ही जगत का आधार है"],
        "answer_hi": "सत्य जगत को धारण करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "'योगः कर्मसु कौशलम्' में 'कौशलम्' का क्या अर्थ है?",
        "options_hi": ["निपुणता", "सफलता", "प्रवीणता", "दक्षता"],
        "answer_hi": "निपुणता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "'अभ्यासेन विना विद्या' का शेष भाग क्या है?",
        "options_hi": ["न जायते कदाचन", "न सिध्यति कर्हिचित्", "न प्राप्यते मनुष्यैः", "न लभ्यते जन्मनि"],
        "answer_hi": "न जायते कदाचन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "'धनानि जीवितं चैव' का प्रयोजन क्या है?",
        "options_hi": ["परार्थ में त्याग का महत्व", "धन और जीवन का मूल्य", "परोपकार के लिए प्रेरणा", "त्याग की आवश्यकता"],
        "answer_hi": "परार्थ में त्याग का महत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "'मा गमः क्षणमप्यत्र' में 'अत्र' किसकी ओर संकेत है?",
        "options_hi": ["दुर्जनसंग", "पापस्थान", "अधर्म", "विषयसुख"],
        "answer_hi": "दुर्जनसंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "'आरोग्यं परमं भाग्यम्' का विस्तार क्या है?",
        "options_hi": ["आरोग्य से बढ़कर कुछ नहीं", "स्वास्थ्य महाभाग्य है", "निरोगी काया सब कुछ साधती है", "आरोग्य सब कुछ है"],
        "answer_hi": "स्वास्थ्य महाभाग्य है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "'यदृच्छया चोपपन्नं' का संस्कृत भाष्य क्या है?",
        "options_hi": ["अकस्मात् प्राप्त स्वर्गद्वार", "यदृच्छया प्राप्त सुख", "अप्रयत्न से प्राप्त धन", "सहज प्राप्त ज्ञान"],
        "answer_hi": "अकस्मात् प्राप्त स्वर्गद्वार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "'अनुदिनं वर्धते विद्या' की व्याख्या क्या है?",
        "options_hi": ["विद्या प्रतिदिन बढ़ती है", "नित्याध्ययन से विद्या बढ़ती है", "विद्या कालानुसार बढ़ती है", "दिन पर दिन विद्या प्रबल होती है"],
        "answer_hi": "विद्या प्रतिदिन बढ़ती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "'मित्रं प्रीतिरूपं मे' के कवि कौन हैं?",
        "options_hi": ["कालिदास", "भवभूति", "बाणभट्ट", "भारवि"],
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "'जलं बिन्दु बिन्दु पूरयति' उपमा की नीति क्या है?",
        "options_hi": ["सूक्ष्म संचय से बड़ा हो जाता है", "धैर्य से सब कुछ साध्य है", "छोटे कार्यों से बड़ी सिद्धि", "क्रम से सब कुछ सिद्ध होता है"],
        "answer_hi": "सूक्ष्म संचय से बड़ा हो जाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "'विदेशे विद्या पूज्यते' का वास्तविक तात्पर्य क्या है?",
        "options_hi": ["विदेश में विद्यावान आदरणीय होता है", "विद्या सर्वत्र पूज्या है", "विदेशगमन विद्या के लिए", "विद्या से विदेश में यश मिलता है"],
        "answer_hi": "विदेश में विद्यावान आदरणीय होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "'सत्यस्य वचनं श्रेयः' में 'श्रेयः' का क्या अर्थ है?",
        "options_hi": ["कल्याणकर", "उत्तम", "हितकर", "मंगल"],
        "answer_hi": "कल्याणकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "'धैर्यं सफलतायाः मूलम्' का प्रमाण कहाँ है?",
        "options_hi": ["सभी शास्त्रों में", "चाणक्यनीति में", "महाभारत में", "रामायण में"],
        "answer_hi": "सभी शास्त्रों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "'प्रज्वलितो ज्ञानमयः प्रदीपः' यह उपमा किसके लिए है?",
        "options_hi": ["गुरु के लिए", "विद्या के लिए", "बुद्धि के लिए", "तेज के लिए"],
        "answer_hi": "गुरु के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "'अपि स्वर्णमयी लङ्का' यह काव्य किसका है?",
        "options_hi": ["रामचरितमानस", "रघुवंश", "कुमारसम्भव", "मेघदूत"],
        "answer_hi": "रामचरितमानस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "'विद्या विनयेन शोभते' का विपरीतार्थक क्या है?",
        "options_hi": ["अविनया विद्या न शोभती", "विनयरहित विद्या", "विद्या विनय के बिना", "अविनय विद्या को नष्ट करता है"],
        "answer_hi": "अविनया विद्या न शोभती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "'सर्वं ज्ञानं प्रभोरस्ति' का भाव क्या है?",
        "options_hi": ["ईश्वर सर्वज्ञ है", "प्रभु सर्वज्ञानी है", "सब ज्ञान ईश्वर से है", "प्रभु का ज्ञान अनन्त है"],
        "answer_hi": "ईश्वर सर्वज्ञ है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "'मन एव मनुष्याणां' का पूर्ण वाक्य क्या है?",
        "options_hi": ["मन एव मनुष्याणां कारणं बन्धमोक्षयोः", "मनः ही जीव का सार है", "मन से ही सब नियंत्रित होता है", "मन मनुष्य का स्वरूप है"],
        "answer_hi": "मन एव मनुष्याणां कारणं बन्धमोक्षयोः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "'न हि ज्ञानेन सदृशं' की पूर्णता किससे होती है?",
        "options_hi": ["पवित्रमिह विद्यते", "धनं लोके विद्यते", "सुखं संसारे अस्ति", "बलं मानवे अस्ति"],
        "answer_hi": "पवित्रमिह विद्यते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "'धर्म एव हतो हन्ति' की व्याख्या क्या है?",
        "options_hi": ["धर्म को मारकर व्यक्ति नष्ट होता है", "धर्महन्ता स्वयं नष्ट होता है", "धर्म हन्ता को मारता है", "धर्महत्या महापाप है"],
        "answer_hi": "धर्म को मारकर व्यक्ति नष्ट होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "'सर्वभूतेषु चात्मानं' का उपदेश किसे है?",
        "options_hi": ["सभी प्राणियों में आत्मदर्शन के लिए", "सबमें आत्मा देखे", "सर्वभूतात्मभाव के लिए", "आत्मैक्यदर्शन के लिए"],
        "answer_hi": "सभी प्राणियों में आत्मदर्शन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "'यावज्जीवेत् सुखं जीवेत्' का पूर्वार्ध क्या है?",
        "options_hi": ["ऋणं कृत्वा घृतं पिबेत्", "धनं कृत्वा सुखं भुङ्क्ते", "जीवेत्तावत् सुखं लभेत्", "यथाशक्ति सुखं सेवेत"],
        "answer_hi": "ऋणं कृत्वा घृतं पिबेत्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "'अहं नरः नारायणः च' का दार्शनिक तात्पर्य क्या है?",
        "options_hi": ["आत्मा का ईश्वरत्व", "नर-नारायण की एकता", "मानव और देवता", "जीव और ईश्वर का भेदाभाव"],
        "answer_hi": "आत्मा का ईश्वरत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "'न भूतो न भविष्यति' यह उक्ति किसके गुणवर्णन में है?",
        "options_hi": ["राम के", "कृष्ण के", "शिव के", "विष्णु के"],
        "answer_hi": "राम के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "'सुखस्य मूलं धर्मः' में 'मूलम्' का क्या अर्थ है?",
        "options_hi": ["आधार", "कारण", "प्रारम्भ", "उत्पत्ति"],
        "answer_hi": "आधार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "'अल्पस्य हेतोर्महतीं' का समापन क्या है?",
        "options_hi": ["श्रियं त्यजेत्", "विद्यां त्यजेत्", "कीर्तिं त्यजेत्", "प्रीतिं त्यजेत्"],
        "answer_hi": "श्रियं त्यजेत्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "'दानं भोगो नाशस्तिस्रो गतयो भवन्ति' में 'गतयः' का क्या अर्थ है?",
        "options_hi": ["परिणाम", "दिशाएँ", "स्थितियाँ", "अवस्थाएँ"],
        "answer_hi": "परिणाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "'अन्नदाता भयत्राता' यह उक्ति किस प्रसंग में है?",
        "options_hi": ["पिता के गुणवर्णन में", "राजप्रशंसा में", "दाता की स्तुति में", "गुरु महिमा में"],
        "answer_hi": "पिता के गुणवर्णन में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "'यः श्रद्धधानो जुहोति' का समापन क्या है?",
        "options_hi": ["स एव मे प्रियः", "स मुक्तिं लभते", "स यज्ञपूर्णः", "स देवैः पूज्यते"],
        "answer_hi": "स एव मे प्रियः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "'दुर्जनः सज्जनो भवेत्' का साधन क्या है?",
        "options_hi": ["सत्सङ्गति", "दण्ड", "शिक्षण", "प्रेम"],
        "answer_hi": "सत्सङ्गति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "'सर्वं परवशं दुःखं' का संदर्भ क्या है?",
        "options_hi": ["स्वावलम्बन का महत्व", "दुःख कारण निरूपण", "सुख का स्वरूप", "मनःस्वातन्त्र्य की आवश्यकता"],
        "answer_hi": "स्वावलम्बन का महत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "'आत्मवन्तं न विद्यते भयम्' में 'आत्मवन्तम्' का क्या अर्थ है?",
        "options_hi": ["आत्मज्ञानी", "धैर्यवान", "स्वावलम्बी", "आत्मशक्ति सम्पन्न"],
        "answer_hi": "आत्मज्ञानी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "'अभिवादनशीलस्य' श्लोक का चौथा पाद क्या है?",
        "options_hi": ["चत्वारि तस्य वर्धन्ते", "आयुर्विद्या यशो बलम्", "सर्वाण्येतानि वर्धन्ते", "एतानि चत्वारि वर्धन्ते"],
        "answer_hi": "आयुर्विद्या यशो बलम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "'क्षमा वीरस्य भूषणम्' का उदाहरण क्या है?",
        "options_hi": ["राम की क्षमा", "भीष्म का धैर्य", "युधिष्ठिर का सत्य", "अर्जुन का पराक्रम"],
        "answer_hi": "राम की क्षमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "'नास्ति विद्यासमं चक्षुः' का तात्पर्य क्या है?",
        "options_hi": ["विद्या की दर्शन शक्ति", "विद्या नेत्र के समान", "विद्यावान सब कुछ देखता है", "आँख से विद्या श्रेष्ठ है"],
        "answer_hi": "विद्या की दर्शन शक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "'सर्वे भवन्तु सुखिनः' प्रार्थना की प्रसिद्धि कहाँ से है?",
        "options_hi": ["वैदिक मन्त्र से", "बौद्ध प्रार्थना से", "जैन स्तोत्र से", "उपनिषद से"],
        "answer_hi": "वैदिक मन्त्र से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "'धर्मस्य त्वरिता गतिः' पूर्ण श्लोक का भाव क्या है?",
        "options_hi": ["सत्य का शीघ्र फल", "धर्म शीघ्र रक्षा करता है", "सत्य शीघ्र जीतता है", "धर्म की विजय शीघ्र होती है"],
        "answer_hi": "सत्य का शीघ्र फल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "'येन केन प्रकारेण' का संदर्भ क्या है?",
        "options_hi": ["प्रयत्न की आवश्यकता", "उपाय खोजना", "लक्ष्यप्राप्ति", "कार्यसिद्धि"],
        "answer_hi": "प्रयत्न की आवश्यकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "'प्रज्ञा प्रतिष्ठा प्रज्ञाने' का भाव क्या है?",
        "options_hi": ["बुद्धि की बुद्धि में स्थिति", "ज्ञान प्रज्ञा का आधार है", "प्रज्ञा ज्ञान में प्रतिष्ठित है", "बुद्धि ज्ञान में निहित है"],
        "answer_hi": "बुद्धि की बुद्धि में स्थिति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "'अहं सर्वं पापं नाशयामि' के वक्ता कौन हैं?",
        "options_hi": ["गंगा", "गायत्री", "सरस्वती", "लक्ष्मी"],
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "'सन्तोषः परं सुखम्' का विस्तार क्या है?",
        "options_hi": ["सन्तोष ही परम सुख होता है", "सन्तोष से बढ़कर सुख नहीं है", "सन्तुष्ट ही सुखी होता है", "सन्तोष सभी सुखों की जड़ है"],
        "answer_hi": "सन्तोष ही परम सुख होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "'विद्या विहीनः पशुः' का समानार्थक वाक्य क्या है?",
        "options_hi": ["अविद्य पशु के समान है", "विद्यारहित पशुतुल्य है", "विद्याहीन पशुओं के समान है", "अविद्यमान पशु है"],
        "answer_hi": "अविद्य पशु के समान है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "'दानात् को न प्रसीदति' का उत्तर क्या है?",
        "options_hi": ["सब प्रसन्न होते हैं", "देवता प्रसन्न होते हैं", "मनुष्य प्रसन्न होते हैं", "कोई प्रसन्न नहीं होता"],
        "answer_hi": "सब प्रसन्न होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "'अन्धकारात् प्रकाशः' इस सिद्धान्त के प्रतिपादक कौन हैं?",
        "options_hi": ["कपिल मुनि", "पतञ्जलि", "गौतम", "कणाद"],
        "answer_hi": "कपिल मुनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "'सर्वं खल्विदं ब्रह्म' इस महावाक्य के भाष्यकार कौन हैं?",
        "options_hi": ["शंकराचार्य", "रामानुजाचार्य", "मध्वाचार्य", "वल्लभाचार्य"],
        "answer_hi": "शंकराचार्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "'सुखदुःखे समे कृत्वा' श्लोक का संदर्भ क्या है?",
        "options_hi": ["स्थितप्रज्ञ लक्षण", "योगारूढ की अवस्था", "समबुद्धि का वर्णन", "वैराग्य की महिमा"],
        "answer_hi": "स्थितप्रज्ञ लक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "'अहिंसा सत्यमस्तेयं' में कितने यम कहे गए हैं?",
        "options_hi": ["पाँच", "चार", "छः", "आठ"],
        "answer_hi": "पाँच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "'योगः चित्तवृत्तिनिरोधः' इस सूत्र के रचयिता कौन हैं?",
        "options_hi": ["पतञ्जलि", "व्यास", "हिरण्यगर्भ", "वशिष्ठ"],
        "answer_hi": "पतञ्जलि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "'ब्रह्म सत्यं जगन्मिथ्या' इस सिद्धान्त का नाम क्या है?",
        "options_hi": ["अद्वैतवेदान्त", "विशिष्टाद्वैत", "द्वैतवेदान्त", "शुद्धाद्वैत"],
        "answer_hi": "अद्वैतवेदान्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "'ओं नमः शिवाय' मन्त्र की अक्षरसंख्या कितनी है?",
        "options_hi": ["पाँच", "छः", "सात", "आठ"],
        "answer_hi": "पाँच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "'गीतां साङ्गोपाङ्गां' इस स्तोत्र के रचयिता कौन हैं?",
        "options_hi": ["शंकराचार्य", "मध्वाचार्य", "रामानुज", "निम्बार्क"],
        "answer_hi": "शंकराचार्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "'वेदाः स्मृतिः सदाचारः' इस धर्मलक्षण के प्रवक्ता कौन हैं?",
        "options_hi": ["मनु", "याज्ञवल्क्य", "पराशर", "व्यास"],
        "answer_hi": "मनु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "'ज्ञानं शीलं दया शौचम्' ये गुण किनके हैं?",
        "options_hi": ["ब्राह्मणों के", "क्षत्रियों के", "वैश्यों के", "सभी वर्णों के"],
        "answer_hi": "ब्राह्मणों के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "'तमसो मा ज्योतिर्गमय' इस मन्त्र का उद्देश्य क्या है?",
        "options_hi": ["अज्ञान से ज्ञान की ओर", "अंधकार से प्रकाश की ओर", "मृत्यु से अमृत की ओर", "असत् से सत् की ओर"],
        "answer_hi": "अज्ञान से ज्ञान की ओर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "'ओं पूर्णमदः पूर्णमिदम्' इस मन्त्र का भाव क्या है?",
        "options_hi": ["ब्रह्म पूर्ण है, सब कुछ पूर्ण है", "ईश्वर पूर्ण है, जगत पूर्ण है", "परब्रह्म सर्वव्यापी है", "अखण्ड ब्रह्माण्ड है"],
        "answer_hi": "ब्रह्म पूर्ण है, सब कुछ पूर्ण है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "'वसुधैव कुटुम्बकम्' इस विचार की प्राचीनता कितनी है?",
        "options_hi": ["वैदिक कालीन", "उपनिषद कालीन", "पुराण कालीन", "मध्यकालीन"],
        "answer_hi": "उपनिषद कालीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "'कायेन वाचा मनसेन्द्रियैर्वा' इस श्लोक का उद्देश्य क्या है?",
        "options_hi": ["ईश्वरप्रीति के लिए कर्म", "सभी इन्द्रियों से ईश्वर सेवा", "समग्र भक्ति", "सर्वात्मना ईश्वर को अर्पण"],
        "answer_hi": "सर्वात्मना ईश्वर को अर्पण",
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