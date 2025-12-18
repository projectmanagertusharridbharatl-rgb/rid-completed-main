const questions = [
    {
        "num": 1,
        "question_hi": "चाणक्यस्य पूर्णनाम किम्?",
        "options_hi": ["चाणक्यविष्णुगुप्तः", "चाणक्यचन्द्रगुप्तः", "चाणक्यचणकः", "चाणक्यकौटिल्यः"],
        "answer_hi": "चाणक्यविष्णुगुप्तः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "विद्यया सम्पद्यते इति पाठः कस्य ग्रन्थस्य भागः?",
        "options_hi": ["चाणक्यनीतेः", "अर्थशास्त्रस्य", "मनुस्मृतेः", "याज्ञवल्क्यस्मृतेः"],
        "answer_hi": "चाणक्यनीतेः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपनाम किम्?",
        "options_hi": ["कौटिल्यः", "वात्स्यायनः", "पाणिनिः", "पतञ्जलिः"],
        "answer_hi": "कौटिल्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "विद्यया सम्पद्यते इति श्लोकस्य कति पादाः?",
        "options_hi": ["द्वौ", "चत्वारः", "एकः", "त्रयः"],
        "answer_hi": "द्वौ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "चाणक्यः कस्य विश्वविद्यालयस्य आचार्यः आसीत्?",
        "options_hi": ["तक्षशिलायाः", "नालन्दायाः", "विक्रमशिलायाः", "वल्लभीस्य"],
        "answer_hi": "तक्षशिलायाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "विद्यया सम्पद्यते इति श्लोकस्य प्रथमः पादः कः?",
        "options_hi": ["विद्यया सम्पद्यते विद्या", "विद्या विहीनेन न सम्पदः", "विद्यया धनं प्राप्यते", "विद्यया यशः लभ्यते"],
        "answer_hi": "विद्यया सम्पद्यते विद्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "चाणक्यस्य मुख्यं कार्यं किम् आसीत्?",
        "options_hi": ["मन्त्रित्वम्", "राजत्वम्", "युद्धनायकत्वम्", "धर्मगुरुत्वम्"],
        "answer_hi": "मन्त्रित्वम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "विद्यया सम्पद्यते इति श्लोकस्य द्वितीयः पादः कः?",
        "options_hi": ["विद्या विहीनेन न सम्पदः", "विद्यया सम्पद्यते विद्या", "विद्यया सर्वं लभ्यते", "विद्या सर्वत्र पूज्यते"],
        "answer_hi": "विद्या विहीनेन न सम्पदः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "चाणक्येन स्थापितः वंशः कः?",
        "options_hi": ["मौर्यवंशः", "गुप्तवंशः", "शुङ्गवंशः", "कण्ववंशः"],
        "answer_hi": "मौर्यवंशः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य विपरीतार्थकं किम्?",
        "options_hi": ["अविद्यया नष्यति", "विद्यया नष्यति", "धनेन सम्पद्यते", "बलेन सम्पद्यते"],
        "answer_hi": "अविद्यया नष्यति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "चाणक्यस्य प्रसिद्धं सिद्धान्तत्रयं किम्?",
        "options_hi": ["साम-दाम-दण्ड-भेद", "धर्म-अर्थ-काम-मोक्ष", "सत्य-अहिंसा-अस्तेय", "ज्ञान-भक्ति-कर्म"],
        "answer_hi": "साम-दाम-दण्ड-भेद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "विद्यया सम्पद्यते इत्यत्र 'विद्यया' इति कस्मात् विभक्तेः?",
        "options_hi": ["तृतीया", "प्रथमा", "द्वितीया", "चतुर्थी"],
        "answer_hi": "तृतीया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "चाणक्यस्य अर्थशास्त्रं कति अधिकरणेषु विभक्तम्?",
        "options_hi": ["पञ्चदश", "दश", "अष्ट", "विंशतिः"],
        "answer_hi": "पञ्चदश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "विद्यया सम्पद्यते इत्यत्र 'सम्पद्यते' इति कः धातुः?",
        "options_hi": ["सम् + पद्", "सम्पद्", "सम् + पाद्", "सम्पाद्"],
        "answer_hi": "सम् + पद्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "चाणक्यस्य समये प्रधानशत्रुः कः आसीत्?",
        "options_hi": ["नन्दवंशः", "शिशुनागवंशः", "हर्यकवंशः", "गुप्तवंशः"],
        "answer_hi": "नन्दवंशः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "विद्यया सम्पद्यते इत्यत्र 'विद्या' इति किं पदम्?",
        "options_hi": ["कर्तृपदम्", "कर्मपदम्", "क्रियापदम्", "विशेषणपदम्"],
        "answer_hi": "कर्तृपदम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "चाणक्यस्य प्रसिद्धः उपदेशः 'अर्थस्य मूलं राज्यम्' कस्मिन् ग्रन्थे?",
        "options_hi": ["अर्थशास्त्रे", "चाणक्यनीतौ", "महाभारते", "रामायणे"],
        "answer_hi": "अर्थशास्त्रे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य भावार्थः कः?",
        "options_hi": ["विद्यायैव सर्वसम्पत्तिः", "विद्यायै धनम्", "विद्यायै यशः", "विद्यायै बलम्"],
        "answer_hi": "विद्यायैव सर्वसम्पत्तिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "चाणक्यस्य शिक्षादर्शः कः?",
        "options_hi": ["व्यावहारिकशिक्षा", "आध्यात्मिकशिक्षा", "केवलं राजनीतिशिक्षा", "केवलं युद्धशिक्षा"],
        "answer_hi": "व्यावहारिकशिक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य समानार्थकं किम्?",
        "options_hi": ["विद्याधनं सर्वधनप्रधानम्", "विद्या महत्त्वपूर्णा", "विद्या आवश्यकी", "विद्या उपयोगिनी"],
        "answer_hi": "विद्याधनं सर्वधनप्रधानम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "चाणक्यस्य राजनीतिदर्शनं किम्?",
        "options_hi": ["यथार्थवादी", "आदर्शवादी", "साम्यवादी", "उदारवादी"],
        "answer_hi": "यथार्थवादी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "विद्यया सम्पद्यते इत्यत्र कः समासः?",
        "options_hi": ["तृतीयातत्पुरुषः", "द्वितीयातत्पुरुषः", "बहुव्रीहिः", "कर्मधारयः"],
        "answer_hi": "तृतीयातत्पुरुषः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "चाणक्यस्य प्रसिद्धं वाक्यं 'सुखस्य मूलं धर्मः' कुत्र प्राप्यते?",
        "options_hi": ["चाणक्यनीतौ", "अर्थशास्त्रे", "महाभारते", "मनुस्मृतेः"],
        "answer_hi": "चाणक्यनीतौ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य व्याकरणं कथम्?",
        "options_hi": ["विद्यया (तृतीया) सम्पद्यते (लट् लकारः)", "विद्यायाः (षष्ठी) सम्पद्यते", "विद्याम् (द्वितीया) सम्पद्यते", "विद्यायै (चतुर्थी) सम्पद्यते"],
        "answer_hi": "विद्यया (तृतीया) सम्पद्यते (लट् लकारः)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "चाणक्यस्य अर्थनीतिः किं प्रतिपादयति?",
        "options_hi": ["अर्थस्य महत्त्वं", "धर्मस्य महत्त्वं", "कामस्य महत्त्वं", "मोक्षस्य महत्त्वं"],
        "answer_hi": "अर्थस्य महत्त्वं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य विलोमश्लोकः कः?",
        "options_hi": ["न विद्यया विनश्यति", "अविद्यया नश्यति", "विद्याहीनेन न सम्पदः", "विद्यारहितः क्षीयते"],
        "answer_hi": "विद्याहीनेन न सम्पदः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "चाणक्यस्य प्रजापालनसिद्धान्तः कः?",
        "options_hi": ["प्रजासुखे राजसुखम्", "राजसुखे प्रजासुखम्", "राज्ञः प्रधानता", "प्रजानां प्रधानता"],
        "answer_hi": "प्रजासुखे राजसुखम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य उपयोगः कुत्र भवति?",
        "options_hi": ["शिक्षणप्रेरणायाम्", "युद्धप्रेरणायाम्", "धर्मप्रचारे", "राजनीतौ"],
        "answer_hi": "शिक्षणप्रेरणायाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "चाणक्यस्य विदेशनीतिः का?",
        "options_hi": ["मण्डलसिद्धान्तः", "सहअस्तित्वसिद्धान्तः", "युद्धसिद्धान्तः", "शान्तिसिद्धान्तः"],
        "answer_hi": "मण्डलसिद्धान्तः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य टीकाकारः कः?",
        "options_hi": ["अनेके", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "अनेके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "चाणक्यस्य करनीतिः किम्?",
        "options_hi": ["यथाशक्ति करग्रहणम्", "अधिककरग्रहणम्", "न्यूनकरग्रहणम्", "करमुक्तिः"],
        "answer_hi": "यथाशक्ति करग्रहणम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य रचनाकालः कः?",
        "options_hi": ["चतुर्थशतकं ईसापूर्वम्", "तृतीयशतकं ईसापूर्वम्", "द्वितीयशतकं ईसापूर्वम्", "प्रथमशतकं ईसापूर्वम्"],
        "answer_hi": "चतुर्थशतकं ईसापूर्वम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "चाणक्यस्य सैन्यनीतिः किम्?",
        "options_hi": ["चतुरङ्गबलम्", "द्व्यङ्गबलम्", "त्र्यङ्गबलम्", "पञ्चाङ्गबलम्"],
        "answer_hi": "चतुरङ्गबलम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य प्रभावः कः?",
        "options_hi": ["विद्यार्थिप्रेरणा", "धनिकप्रेरणा", "योद्धाप्रेरणा", "सन्यासिप्रेरणा"],
        "answer_hi": "विद्यार्थिप्रेरणा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "चाणक्यस्य न्यायव्यवस्था का?",
        "options_hi": ["स्वतन्त्रन्यायपालिका", "राजनियन्त्रिता", "धर्माधिकरणम्", "लोकन्यायः"],
        "answer_hi": "स्वतन्त्रन्यायपालिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य अनुवादः कति भाषासु?",
        "options_hi": ["अनेकासु", "एकस्याम्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकासु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "चाणक्यस्य गुप्तचरव्यवस्था का?",
        "options_hi": ["सुव्यवस्थिता", "अव्यवस्थिता", "सीमिता", "विस्तृता"],
        "answer_hi": "सुव्यवस्थिता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य स्थानं चाणक्यनीतौ किम्?",
        "options_hi": ["प्रथमाध्याये", "द्वितीयाध्याये", "तृतीयाध्याये", "चतुर्थाध्याये"],
        "answer_hi": "प्रथमाध्याये",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "चाणक्यस्य कृषिनीतिः किम्?",
        "options_hi": ["कृषेः संरक्षणम्", "कृषेः उपेक्षा", "कृषेः नियन्त्रणम्", "कृषेः विकासः"],
        "answer_hi": "कृषेः संरक्षणम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य व्याख्यानं कैः कृतम्?",
        "options_hi": ["अनेकैः विद्वद्भिः", "एकेन विद्वता", "द्वाभ्यां विद्वद्भ्याम्", "त्रिभिः विद्वद्भिः"],
        "answer_hi": "अनेकैः विद्वद्भिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "चाणक्यस्य व्यापारनीतिः किम्?",
        "options_hi": ["स्वतन्त्रव्यापारः", "नियन्त्रितव्यापारः", "राजकीयव्यापारः", "निषिद्धव्यापारः"],
        "answer_hi": "स्वतन्त्रव्यापारः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य प्रयोगः कुत्र दृश्यते?",
        "options_hi": ["शिक्षणसंस्थासु", "युद्धक्षेत्रेषु", "धार्मिकस्थानेषु", "राजसभासु"],
        "answer_hi": "शिक्षणसंस्थासु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "चाणक्यस्य दुर्गनिर्माणनीतिः किम्?",
        "options_hi": ["सप्तप्रकारदुर्गाणि", "चतुःप्रकारदुर्गाणि", "द्विप्रकारदुर्गाणि", "एकप्रकारदुर्गाणि"],
        "answer_hi": "सप्तप्रकारदुर्गाणि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य शैली का?",
        "options_hi": ["सरला", "क्लिष्टा", "वैज्ञानिकी", "काव्यात्मिका"],
        "answer_hi": "सरला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "चाणक्यस्य जलनीतिः किम्?",
        "options_hi": ["जलसंरक्षणम्", "जलवितरणम्", "जलशोधनम्", "जलव्यवस्थापनम्"],
        "answer_hi": "जलसंरक्षणम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य महत्त्वं किम्?",
        "options_hi": ["शैक्षणिकं", "राजनैतिकं", "सामाजिकं", "आर्थिकं"],
        "answer_hi": "शैक्षणिकं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "चाणक्यस्य स्वास्थ्यनीतिः किम्?",
        "options_hi": ["आरोग्यरक्षणम्", "चिकित्साव्यवस्था", "आहारनियमः", "व्यायामप्रोत्साहनम्"],
        "answer_hi": "आरोग्यरक्षणम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य वाक्यं कथं समाप्यते?",
        "options_hi": ["विद्या विहीनेन न सम्पदः", "विद्यया सर्वं लभ्यते", "विद्या सर्वत्र पूज्यते", "विद्याधनं सर्वधनप्रधानम्"],
        "answer_hi": "विद्या विहीनेन न सम्पदः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "चाणक्यस्य शिक्षणसंस्थानीतिः किम्?",
        "options_hi": ["सर्ववर्णानां शिक्षा", "केवलं उच्चवर्णानाम्", "केवलं राजपुत्राणाम्", "केवलं ब्राह्मणानाम्"],
        "answer_hi": "सर्ववर्णानां शिक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य संस्कृतभाषायां महत्त्वं किम्?",
        "options_hi": ["प्रमुखं", "गौणं", "नगण्यं", "विवादास्पदं"],
        "answer_hi": "प्रमुखं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "चाणक्यस्य स्त्रीशिक्षाविषये मतं किम्?",
        "options_hi": ["स्त्रीणां शिक्षा", "स्त्रीणां अशिक्षा", "सीमितशिक्षा", "गृहशिक्षा"],
        "answer_hi": "स्त्रीणां शिक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य प्राचीनतमं भाष्यं कस्य?",
        "options_hi": ["अज्ञातम्", "मल्लिनाथस्य", "हलायुधस्य", "वामनस्य"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "चाणक्यस्य दण्डनीतिः किम्?",
        "options_hi": ["यथापराधं दण्डः", "कठोरदण्डः", "सौम्यदण्डः", "दण्डरहितः"],
        "answer_hi": "यथापराधं दण्डः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य आधुनिकप्रासंगिकता का?",
        "options_hi": ["अत्यधिका", "मध्यमा", "अल्पा", "नास्ति"],
        "answer_hi": "अत्यधिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "चाणक्यस्य विवाहनीतिः किम्?",
        "options_hi": ["सवर्णविवाहः", "अन्तर्विवाहः", "बहिर्विवाहः", "स्वतन्त्रविवाहः"],
        "answer_hi": "सवर्णविवाहः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य प्रसिद्धिः कुत्र अस्ति?",
        "options_hi": ["सर्वत्र", "केवलं भारते", "केवलं संस्कृतजगति", "केवलं पाश्चात्यदेशेषु"],
        "answer_hi": "सर्वत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "चाणक्यस्य वैदेशिकसम्बन्धनीतिः किम्?",
        "options_hi": ["सन्तुलिता", "आक्रामका", "शान्तिपूर्णा", "उदासीनता"],
        "answer_hi": "सन्तुलिता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य प्रभावः कति देशेषु दृश्यते?",
        "options_hi": ["अनेकेषु", "एकस्मिन्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "चाणक्यस्य संस्कृतिसंरक्षणनीतिः किम्?",
        "options_hi": ["देशीयसंस्कृतेः पोषणम्", "विदेशीयसंस्कृतेः स्वीकारः", "मिश्रसंस्कृतिः", "नवीनसंस्कृतिः"],
        "answer_hi": "देशीयसंस्कृतेः पोषणम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य शिक्षणं कस्मिन् वर्गे?",
        "options_hi": ["प्राथमिकस्तरे", "माध्यमिकस्तरे", "उच्चस्तरे", "सर्वस्तरेषु"],
        "answer_hi": "सर्वस्तरेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "चाणक्यस्य युद्धनीतिः किम्?",
        "options_hi": ["अपरिहार्ये युद्धे विजयः", "सर्वदा युद्धं वर्जयेत्", "आक्रामकयुद्धम्", "रक्षात्मकयुद्धम्"],
        "answer_hi": "अपरिहार्ये युद्धे विजयः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य व्युत्पत्तिः किम्?",
        "options_hi": ["वि + इ + क्यप्", "विद् + यत्", "विद्या + यत्", "वि + द्या"],
        "answer_hi": "वि + इ + क्यप्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "चाणक्यस्य धर्मनीतिः किम्?",
        "options_hi": ["धर्मस्य राज्यसंरक्षणम्", "धर्मस्य उपेक्षा", "धर्मस्य प्रचारः", "धर्मस्य नियन्त्रणम्"],
        "answer_hi": "धर्मस्य राज्यसंरक्षणम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य मूलग्रन्थः कः?",
        "options_hi": ["चाणक्यनीतिः", "अर्थशास्त्रम्", "मनुस्मृतिः", "महाभारतम्"],
        "answer_hi": "चाणक्यनीतिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "चाणक्यस्य सामाजिकनीतिः किम्?",
        "options_hi": ["वर्णाश्रमव्यवस्था", "समतावादः", "वर्गसंघर्षः", "सामाजिकक्रान्तिः"],
        "answer_hi": "वर्णाश्रमव्यवस्था",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य संस्करणानि कति?",
        "options_hi": ["अनेकानि", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "अनेकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "चाणक्यस्य आपत्कालीननीतिः किम्?",
        "options_hi": ["आपत्काले सर्वोपायाः", "आपत्काले धर्मत्यागः", "आपत्काले पलायनम्", "आपत्काले समर्पणम्"],
        "answer_hi": "आपत्काले सर्वोपायाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य हस्तलिखितानि कति?",
        "options_hi": ["अनेकानि", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "अनेकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "चाणक्यस्य प्रशासनिकनीतिः किम्?",
        "options_hi": ["केन्द्रीकृतप्रशासनम्", "विकेन्द्रीकृतप्रशासनम्", "स्वायत्तप्रशासनम्", "लोकप्रशासनम्"],
        "answer_hi": "केन्द्रीकृतप्रशासनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य शोधप्रबन्धाः कति?",
        "options_hi": ["अनेकाः", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "चाणक्यस्य नैतिकनीतिः किम्?",
        "options_hi": ["सदाचारपालनम्", "यथास्थितिवादः", "उपयोगितावादः", "सापेक्षतावादः"],
        "answer_hi": "सदाचारपालनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य विदेशीयानुवादाः कति?",
        "options_hi": ["अनेकाः", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "चाणक्यस्य कूटनीतिः किम्?",
        "options_hi": ["चतुराई", "सरलता", "कठोरता", "निष्कपटता"],
        "answer_hi": "चतुराई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य डिजिटलरूपाणि कति?",
        "options_hi": ["अनेकानि", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "अनेकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "चाणक्यस्य साहित्यिकयोगदानं किम्?",
        "options_hi": ["नीतिशास्त्रविकासः", "काव्यविकासः", "नाटकविकासः", "गद्यविकासः"],
        "answer_hi": "नीतिशास्त्रविकासः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य राष्ट्रियपाठ्यक्रमे स्थानं किम्?",
        "options_hi": ["उच्चस्थानम्", "मध्यमस्थानम्", "निम्नस्थानम्", "नास्ति"],
        "answer_hi": "उच्चस्थानम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "चाणक्यस्य आर्थिकसिद्धान्तः कः?",
        "options_hi": ["कृषिप्रधानः", "व्यापारप्रधानः", "उद्योगप्रधानः", "सेवाप्रधानः"],
        "answer_hi": "कृषिप्रधानः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य अन्तर्राष्ट्रियप्रसिद्धिः किम्?",
        "options_hi": ["उच्चा", "मध्यमा", "निम्ना", "नास्ति"],
        "answer_hi": "उच्चा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "चाणक्यस्य वैज्ञानिकदृष्टिः का?",
        "options_hi": ["यथार्थवादी", "आदर्शवादी", "अध्यात्मवादी", "भौतिकवादी"],
        "answer_hi": "यथार्थवादी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य सांस्कृतिकमहत्त्वं किम्?",
        "options_hi": ["अत्यधिकं", "मध्यमं", "अल्पं", "नगण्यं"],
        "answer_hi": "अत्यधिकं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "चाणक्यस्य मानवस्वभावविषयकं मतं किम्?",
        "options_hi": ["मानवः स्वार्थी", "मानवः परोपकारी", "मानवः दयालुः", "मानवः निस्वार्थः"],
        "answer_hi": "मानवः स्वार्थी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य ऐतिहासिकमहत्त्वं किम्?",
        "options_hi": ["प्रमुखं", "गौणं", "नगण्यं", "विवादास्पदं"],
        "answer_hi": "प्रमुखं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "चाणक्यस्य सुखसिद्धान्तः कः?",
        "options_hi": ["धार्मिकसुखम्", "भौतिकसुखम्", "आध्यात्मिकसुखम्", "मिश्रितसुखम्"],
        "answer_hi": "भौतिकसुखम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य दार्शनिकमहत्त्वं किम्?",
        "options_hi": ["विशिष्टं", "सामान्यं", "अल्पं", "नास्ति"],
        "answer_hi": "विशिष्टं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "चाणक्यस्य राजधर्मः कः?",
        "options_hi": ["प्रजापालनम्", "स्वसुखम्", "युद्धविजयः", "धर्मप्रचारः"],
        "answer_hi": "प्रजापालनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य शैक्षणिकमहत्त्वं किम्?",
        "options_hi": ["मौलिकं", "गौणं", "नगण्यं", "अनावश्यकं"],
        "answer_hi": "मौलिकं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "चाणक्यस्य व्यक्तित्वं कथं वर्णितम्?",
        "options_hi": ["तीक्ष्णबुद्धिः", "मन्दबुद्धिः", "भावुकः", "आलसी"],
        "answer_hi": "तीक्ष्णबुद्धिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य सामाजिकमहत्त्वं किम्?",
        "options_hi": ["उच्चं", "मध्यमं", "निम्नं", "नास्ति"],
        "answer_hi": "उच्चं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "चाणक्यस्य कालजयिता किम्?",
        "options_hi": ["सिद्धान्ताः कालातीताः", "सिद्धान्ताः कालसापेक्षाः", "सिद्धान्ताः अप्रासंगिकाः", "सिद्धान्ताः प्राचीनाः"],
        "answer_hi": "सिद्धान्ताः कालातीताः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य आर्थिकमहत्त्वं किम्?",
        "options_hi": ["प्रत्यक्षं", "अप्रत्यक्षं", "नगण्यं", "नास्ति"],
        "answer_hi": "प्रत्यक्षं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "चाणक्यस्य विरासतः का?",
        "options_hi": ["नीतिशास्त्रविरासत्", "काव्यविरासत्", "नाटकविरासत्", "दर्शनविरासत्"],
        "answer_hi": "नीतिशास्त्रविरासत्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य राजनैतिकमहत्त्वं किम्?",
        "options_hi": ["परोक्षं", "प्रत्यक्षं", "नगण्यं", "नास्ति"],
        "answer_hi": "परोक्षं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "चाणक्यस्य प्रासंगिकता आधुनिकयुगे किम्?",
        "options_hi": ["अत्यधिका", "मध्यमा", "अल्पा", "नास्ति"],
        "answer_hi": "अत्यधिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य मनोवैज्ञानिकमहत्त्वं किम्?",
        "options_hi": ["प्रेरणादायकं", "निराशाजनकं", "तटस्थं", "नगण्यं"],
        "answer_hi": "प्रेरणादायकं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "चाणक्यस्य ग्रन्थानां भाषा का?",
        "options_hi": ["संस्कृतम्", "प्राकृतम्", "पालि", "अपभ्रंशः"],
        "answer_hi": "संस्कृतम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य नैतिकमहत्त्वं किम्?",
        "options_hi": ["उच्चं", "मध्यमं", "निम्नं", "नास्ति"],
        "answer_hi": "उच्चं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "चाणक्यस्य प्रभावः कति देशेषु दृश्यते?",
        "options_hi": ["अनेकेषु", "एकस्मिन्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य आध्यात्मिकमहत्त्वं किम्?",
        "options_hi": ["परोक्षं", "प्रत्यक्षं", "नगण्यं", "नास्ति"],
        "answer_hi": "परोक्षं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "चाणक्यस्य योगदानं भारतीयसभ्यतायां किम्?",
        "options_hi": ["अमूल्यं", "मध्यमं", "अल्पं", "नगण्यं"],
        "answer_hi": "अमूल्यं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "विद्यया सम्पद्यते इत्यस्य भविष्यं किम्?",
        "options_hi": ["उज्ज्वलं", "मन्दं", "अनिश्चितं", "अस्तंगतं"],
        "answer_hi": "उज्ज्वलं",
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