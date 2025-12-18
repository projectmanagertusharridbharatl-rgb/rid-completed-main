const questions = [
    {
        "num": 1,
        "question_hi": "श्रीधरभट्टः कः?",
        "options_hi": ["संस्कृतकविः", "राजा", "योद्धा", "वैज्ञानिकः"],
        "answer_hi": "संस्कृतकविः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "भारतमहिमा इति ग्रन्थः कस्य विषये अस्ति?",
        "options_hi": ["भारतदेशस्य महिम्नः", "हिमालयस्य", "नदीनाम्", "पर्वतानाम्"],
        "answer_hi": "भारतदेशस्य महिम्नः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "श्रीधरभट्टस्य जन्म कदा अभवत्?",
        "options_hi": ["अज्ञातम्", "१०विंशतके", "१२विंशतके", "८विंशतके"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "भारतमहिमा कति अध्यायेषु विभक्ता?",
        "options_hi": ["दश", "अष्ट", "द्वादश", "षोडश"],
        "answer_hi": "दश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "श्रीधरभट्टः कुत्र जन्म प्राप्तवान्?",
        "options_hi": ["काश्मीरे", "बंगाले", "महाराष्ट्रे", "गुजराते"],
        "answer_hi": "काश्मीरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "भारतमहिमायाः प्रथमः अध्यायः किं वर्णयति?",
        "options_hi": ["भारतस्य भूगोलम्", "भारतस्य संस्कृतिम्", "भारतस्य नदीः", "भारतस्य पर्वतान्"],
        "answer_hi": "भारतस्य भूगोलम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "श्रीधरभट्टस्य पितुः नाम किम्?",
        "options_hi": ["अज्ञातम्", "रामभट्टः", "कृष्णभट्टः", "हरिभट्टः"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "भारतमहिमा कति श्लोकानि सन्ति?",
        "options_hi": ["शताधिकानि", "पञ्चशतानि", "सहस्रम्", "द्विशतानि"],
        "answer_hi": "शताधिकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "श्रीधरभट्टस्य मातुः नाम किम्?",
        "options_hi": ["अज्ञातम्", "लक्ष्मीदेवी", "सरस्वतीदेवी", "गङ्गादेवी"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "भारतमहिमायाः द्वितीयः अध्यायः किं वर्णयति?",
        "options_hi": ["भारतस्य नदीः", "भारतस्य पर्वतान्", "भारतस्य वनानि", "भारतस्य सागरान्"],
        "answer_hi": "भारतस्य नदीः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "श्रीधरभट्टः कस्य राज्ञः सभाकविः आसीत्?",
        "options_hi": ["अज्ञातम्", "विक्रमादित्यस्य", "हर्षस्य", "चन्द्रगुप्तस्य"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "भारतमहिमायाः तृतीयः अध्यायः किं वर्णयति?",
        "options_hi": ["भारतस्य पर्वतान्", "भारतस्य नगराणि", "भारतस्य खनिजानि", "भारतस्य ऋतून्"],
        "answer_hi": "भारतस्य पर्वतान्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "श्रीधरभट्टस्य गुरुः कः?",
        "options_hi": ["अज्ञातः", "पाणिनिः", "पतञ्जलिः", "व्यासः"],
        "answer_hi": "अज्ञातः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "भारतमहिमायाः चतुर्थः अध्यायः किं वर्णयति?",
        "options_hi": ["भारतस्य वनानि", "भारतस्य पशुपक्षिणः", "भारतस्य कृषिम्", "भारतस्य उद्यानानि"],
        "answer_hi": "भारतस्य वनानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "श्रीधरभट्टस्य मृत्युः कदा अभवत्?",
        "options_hi": ["अज्ञातम्", "१०विंशतके", "१२विंशतके", "१४विंशतके"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "भारतमहिमायाः पञ्चमः अध्यायः किं वर्णयति?",
        "options_hi": ["भारतस्य ऋतून्", "भारतस्य वायुमण्डलम्", "भारतस्य जलवायुम्", "भारतस्य तापमानम्"],
        "answer_hi": "भारतस्य ऋतून्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "श्रीधरभट्टः कति भाषाणां ज्ञाता आसीत्?",
        "options_hi": ["अनेकानाम्", "एकस्याः", "द्वयोः", "त्रयाणाम्"],
        "answer_hi": "अनेकानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "भारतमहिमायाः षष्ठः अध्यायः किं वर्णयति?",
        "options_hi": ["भारतस्य संस्कृतिम्", "भारतस्य भाषाः", "भारतस्य धर्मान्", "भारतस्य परम्पराः"],
        "answer_hi": "भारतस्य संस्कृतिम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "श्रीधरभट्टस्य प्रसिद्धः अन्यः ग्रन्थः कः?",
        "options_hi": ["नीतिकल्पतरुः", "रामायणम्", "महाभारतम्", "भागवतम्"],
        "answer_hi": "नीतिकल्पतरुः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "भारतमहिमायाः सप्तमः अध्यायः किं वर्णयति?",
        "options_hi": ["भारतस्य विद्यां कलाश्च", "भारतस्य युद्धकलाम्", "भारतस्य व्यापारम्", "भारतस्य कृषिम्"],
        "answer_hi": "भारतस्य विद्यां कलाश्च",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "श्रीधरभट्टः कति ग्रन्थानां रचयिता?",
        "options_hi": ["अनेकानाम्", "एकस्य", "द्वयोः", "त्रयाणाम्"],
        "answer_hi": "अनेकानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "भारतमहिमायाः अष्टमः अध्यायः किं वर्णयति?",
        "options_hi": ["भारतस्य महापुरुषान्", "भारतस्य राज्ञः", "भारतस्य योद्धान्", "भारतस्य ऋषीन्"],
        "answer_hi": "भारतस्य महापुरुषान्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "श्रीधरभट्टस्य काव्यशैली का?",
        "options_hi": ["वर्णनात्मिका", "आख्यानात्मिका", "नाटकात्मिका", "सूत्रात्मिका"],
        "answer_hi": "वर्णनात्मिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "भारतमहिमायाः नवमः अध्यायः किं वर्णयति?",
        "options_hi": ["भारतस्य धार्मिकस्थानानि", "भारतस्य मन्दिराणि", "भारतस्य तीर्थानि", "भारतस्य मठान्"],
        "answer_hi": "भारतस्य धार्मिकस्थानानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "श्रीधरभट्टस्य कति वर्षाणि जीवितवान्?",
        "options_hi": ["अज्ञातम्", "षष्टिवर्षाणि", "सप्ततिवर्षाणि", "अशीतिवर्षाणि"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "भारतमहिमायाः दशमः अध्यायः किं वर्णयति?",
        "options_hi": ["भारतस्य समग्रमहिम्नः सारांशम्", "भारतस्य भविष्यम्", "भारतस्य अतीतम्", "भारतस्य वर्तमानम्"],
        "answer_hi": "भारतस्य समग्रमहिम्नः सारांशम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "श्रीधरभट्टस्य पत्न्याः नाम किम्?",
        "options_hi": ["अज्ञातम्", "लक्ष्मी", "सरस्वती", "पार्वती"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "भारतमहिमा कस्मिन् छन्दसि रचिता?",
        "options_hi": ["विविधेषु", "एकस्मिन्", "द्वयोः", "त्रिषु"],
        "answer_hi": "विविधेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "श्रीधरभट्टः कति वेदानां ज्ञाता आसीत्?",
        "options_hi": ["चतुर्णाम्", "त्रयाणाम्", "द्वयोः", "एकस्य"],
        "answer_hi": "चतुर्णाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "भारतमहिमायाः मुख्यं उद्देश्यं किम्?",
        "options_hi": ["भारतस्य महिम्नः प्रतिपादनम्", "भारतस्य निन्दनम्", "भारतस्य इतिहासवर्णनम्", "भारतस्य भविष्यकथनम्"],
        "answer_hi": "भारतस्य महिम्नः प्रतिपादनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "श्रीधरभट्टस्य शिष्यः कः?",
        "options_hi": ["अज्ञातः", "रामभट्टः", "कृष्णभट्टः", "हरिभट्टः"],
        "answer_hi": "अज्ञातः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "भारतमहिमा कति भाषासु अनूदिता?",
        "options_hi": ["अनेकासु", "एकस्याम्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकासु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "श्रीधरभट्टः कति दर्शनानां ज्ञाता आसीत्?",
        "options_hi": ["षण्णाम्", "चतुर्णाम्", "अष्टानाम्", "दशानाम्"],
        "answer_hi": "षण्णाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "भारतमहिमायाः प्रसिद्धः श्लोकः कः?",
        "options_hi": ["उत्तरं यत्समुद्रस्य...", "विद्यां ददाति विनयं...", "सत्यमेव जयते...", "धनानि जीवितं चैव..."],
        "answer_hi": "उत्तरं यत्समुद्रस्य...",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "श्रीधरभट्टस्य जन्मस्थानं किम्?",
        "options_hi": ["काश्मीरस्य ग्रामः", "दिल्ली", "आगरा", "लाहोर"],
        "answer_hi": "काश्मीरस्य ग्रामः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "भारतमहिमायाः रचनाकालः कः?",
        "options_hi": ["अज्ञातः", "दशमशतकम्", "एकादशशतकम्", "द्वादशशतकम्"],
        "answer_hi": "अज्ञातः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "श्रीधरभट्टः कति पुराणानां ज्ञाता आसीत्?",
        "options_hi": ["अष्टादशानाम्", "दशानाम्", "पञ्चानाम्", "विंशतेः"],
        "answer_hi": "अष्टादशानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "भारतमहिमायाः प्रभावः कः?",
        "options_hi": ["राष्ट्रप्रेमजागरणम्", "धर्मप्रचारः", "ज्ञानविस्तारः", "कलाविकासः"],
        "answer_hi": "राष्ट्रप्रेमजागरणम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "श्रीधरभट्टस्य शिक्षा कुत्र अभवत्?",
        "options_hi": ["काश्मीरे", "नालन्दायाम्", "विक्रमशिलायाम्", "तक्षशिलायाम्"],
        "answer_hi": "काश्मीरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "भारतमहिमायाः प्रमुखालङ्कारः कः?",
        "options_hi": ["उत्प्रेक्षा", "उपमा", "रूपकम्", "अतिशयोक्तिः"],
        "answer_hi": "उत्प्रेक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "श्रीधरभट्टः कति नाटकानां रचयिता?",
        "options_hi": ["न कस्यापि", "एकस्य", "द्वयोः", "त्रयाणाम्"],
        "answer_hi": "न कस्यापि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "भारतमहिमायाः प्रसिद्धः उपदेशः कः?",
        "options_hi": ["भारतं वन्दे", "ज्ञानं प्राप्नुहि", "धर्मं पालय", "ईश्वरं भज"],
        "answer_hi": "भारतं वन्दे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "श्रीधरभट्टस्य प्रसिद्धः व्याख्यानकारः कः?",
        "options_hi": ["अज्ञातः", "सायणः", "कुमारिलभट्टः", "शङ्कराचार्यः"],
        "answer_hi": "अज्ञातः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "भारतमहिमायाः मूलाधारः कः?",
        "options_hi": ["पुराणानि", "वेदाः", "उपनिषदः", "स्मृतयः"],
        "answer_hi": "पुराणानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "श्रीधरभट्टः कति स्तोत्राणां रचयिता?",
        "options_hi": ["अनेकानाम्", "एकस्य", "द्वयोः", "त्रयाणाम्"],
        "answer_hi": "अनेकानाम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "भारतमहिमायाः शैलीगतविशेषता का?",
        "options_hi": ["वर्णनप्रधाना", "आख्यानप्रधाना", "संवादप्रधाना", "तर्कप्रधाना"],
        "answer_hi": "वर्णनप्रधाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "श्रीधरभट्टस्य प्रसिद्धं सूक्तिसंग्रहं किम्?",
        "options_hi": ["नीतिकल्पतरुः", "सुभाषितरत्नकोषः", "चाणक्यनीतिः", "हितोपदेशः"],
        "answer_hi": "नीतिकल्पतरुः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "भारतमहिमायाः साहित्यिकप्रकारः कः?",
        "options_hi": ["महाकाव्यम्", "खण्डकाव्यम्", "प्रबन्धकाव्यम्", "गीतिकाव्यम्"],
        "answer_hi": "प्रबन्धकाव्यम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "श्रीधरभट्टस्य कति भाष्याणि सन्ति?",
        "options_hi": ["अनेकानि", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "अनेकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "भारतमहिमायाः पठनफलं किम्?",
        "options_hi": ["राष्ट्रगौरवबोधः", "ज्ञानवृद्धिः", "धर्मबोधः", "भक्तिवृद्धिः"],
        "answer_hi": "राष्ट्रगौरवबोधः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "श्रीधरभट्टस्य प्रसिद्धः समकालीनः कः?",
        "options_hi": ["अज्ञातः", "कालिदासः", "भवभूतिः", "बाणभट्टः"],
        "answer_hi": "अज्ञातः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "भारतमहिमायाः प्रमुखं सङ्केतं किम्?",
        "options_hi": ["भारतं मम मातृभूमिः", "ज्ञानं मम लक्ष्यम्", "धर्मं मम मार्गः", "ईश्वरः मम आश्रयः"],
        "answer_hi": "भारतं मम मातृभूमिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "श्रीधरभट्टः कति वर्षाणि काश्मीरे निवासः आसीत्?",
        "options_hi": ["सम्पूर्णजीवनम्", "विंशतिवर्षाणि", "त्रिंशतिवर्षाणि", "चत्वारिंशतिवर्षाणि"],
        "answer_hi": "सम्पूर्णजीवनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "भारतमहिमायाः समकालीनाः के अन्ये ग्रन्थाः?",
        "options_hi": ["नीतिकल्पतरुः", "रामायणम्", "महाभारतम्", "पुराणानि"],
        "answer_hi": "नीतिकल्पतरुः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "श्रीधरभट्टस्य प्रसिद्धः भक्तिस्तोत्रग्रन्थः कः?",
        "options_hi": ["विष्णुस्तोत्रम्", "शिवस्तोत्रम्", "दुर्गास्तोत्रम्", "गणेशस्तोत्रम्"],
        "answer_hi": "विष्णुस्तोत्रम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "भारतमहिमायाः शिक्षणं कस्मै विशेषतः उपयोगि?",
        "options_hi": ["सर्वेभ्यः भारतीयेभ्यः", "केवलं विद्यार्थिभ्यः", "केवलं राजभ्यः", "केवलं सन्यासिभ्यः"],
        "answer_hi": "सर्वेभ्यः भारतीयेभ्यः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "श्रीधरभट्टस्य कति टीकाग्रन्थाः सन्ति?",
        "options_hi": ["अनेकाः", "एका", "द्वे", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "भारतमहिमायाः मूलं दर्शनं किम्?",
        "options_hi": ["राष्ट्रभक्तिः", "ज्ञानयोगः", "भक्तियोगः", "कर्मयोगः"],
        "answer_hi": "राष्ट्रभक्तिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "श्रीधरभट्टः कति वर्षाणि लेखनकार्यं कृतवान्?",
        "options_hi": ["अज्ञातम्", "त्रिंशतिवर्षाणि", "चत्वारिंशतिवर्षाणि", "पञ्चाशद्वर्षाणि"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "भारतमहिमायाः प्रकाशनं प्रथमवारं कदा अभवत्?",
        "options_hi": ["अज्ञातम्", "१९विंशतके", "२०विंशतके", "२१विंशतके"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "श्रीधरभट्टस्य कति प्रशस्तिलेखाः सन्ति?",
        "options_hi": ["अनेकाः", "एका", "द्वे", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "भारतमहिमायाः प्रभावः कति देशीयभाषासु दृश्यते?",
        "options_hi": ["अनेकासु", "एकस्याम्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकासु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "श्रीधरभट्टस्य कति प्रबन्धनाटकानि सन्ति?",
        "options_hi": ["न कानिचित्", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "न कानिचित्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "भारतमहिमायाः प्रमुखं दार्शनिकं तत्त्वं किम्?",
        "options_hi": ["राष्ट्रगौरवम्", "ज्ञानम्", "धर्मः", "भक्तिः"],
        "answer_hi": "राष्ट्रगौरवम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "श्रीधरभट्टस्य कति वर्षाणि दिल्ल्यां निवासः आसीत्?",
        "options_hi": ["अज्ञातम्", "दश", "पञ्चदश", "विंशतिः"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "भारतमहिमायाः साहित्यिकप्रकारः कः?",
        "options_hi": ["देशवर्णनकाव्यम्", "प्रेमकाव्यम्", "नीतिकाव्यम्", "भक्तिकाव्यम्"],
        "answer_hi": "देशवर्णनकाव्यम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "श्रीधरभट्टस्य प्रसिद्धं वैयाकरणं कार्यं किम्?",
        "options_hi": ["व्याकरणसूत्रवृत्तिः", "धातुपाठव्याख्या", "पाणिनिसूत्रभाष्यम्", "अमरकोषटीका"],
        "answer_hi": "व्याकरणसूत्रवृत्तिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "भारतमहिमायाः प्रभावः कति विश्वविद्यालयेषु अध्ययनविषयः अस्ति?",
        "options_hi": ["अनेकेषु", "एकस्मिन्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "श्रीधरभट्टस्य कति समालोचनाग्रन्थाः सन्ति?",
        "options_hi": ["अनेकाः", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "भारतमहिमायाः समाप्तेः संदेशः कः?",
        "options_hi": ["भारतं वन्दे सदा", "ज्ञानं प्राप्नुहि", "धर्मं पालय", "ईश्वरं भज"],
        "answer_hi": "भारतं वन्दे सदा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "श्रीधरभट्टस्य कति प्रशंसापत्राणि प्राप्तानि?",
        "options_hi": ["अनेकानि", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "अनेकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "भारतमहिमायाः प्रमुखं प्रतीकं किम्?",
        "options_hi": ["भारतमाता", "हिमालयः", "गङ्गा", "सूर्यः"],
        "answer_hi": "भारतमाता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "श्रीधरभट्टस्य कति वर्षाणि आग्रायां निवासः आसीत्?",
        "options_hi": ["अज्ञातम्", "पञ्च", "दश", "पञ्चदश"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "भारतमहिमायाः प्रथममुद्रणं कुत्र अभवत्?",
        "options_hi": ["अज्ञातम्", "कोलकातानगरे", "दिल्लीनगरे", "मुम्बैनगरे"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "श्रीधरभट्टस्य कति उपाधयः प्राप्ताः?",
        "options_hi": ["अनेकाः", "एका", "द्वे", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "भारतमहिमायाः प्रमुखं युद्धं कस्मिन् क्षेत्रे भवति?",
        "options_hi": ["राष्ट्रगौरवक्षेत्रे", "भौतिकक्षेत्रे", "आध्यात्मिकक्षेत्रे", "सामाजिकक्षेत्रे"],
        "answer_hi": "राष्ट्रगौरवक्षेत्रे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "श्रीधरभट्टस्य कति भ्रातरः आसन्?",
        "options_hi": ["अज्ञातम्", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "भारतमहिमायाः प्रभावः कति जनसमुदायेषु दृश्यते?",
        "options_hi": ["सर्वेषु", "केवलं विद्वत्सु", "केवलं युवसु", "केवलं वृद्धेषु"],
        "answer_hi": "सर्वेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "श्रीधरभट्टस्य कति राजाश्रयाः प्राप्ताः?",
        "options_hi": ["अनेकाः", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "भारतमहिमायाः साहित्यमूल्याङ्कनं कथं भवति?",
        "options_hi": ["उत्तमम्", "मध्यमम्", "निम्नम्", "अज्ञातम्"],
        "answer_hi": "उत्तमम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "श्रीधरभट्टस्य कति प्रतियोगिताः जिताः?",
        "options_hi": ["अनेकाः", "एका", "द्वे", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "भारतमहिमायाः नायकः कः?",
        "options_hi": ["भारतदेशः", "रामः", "कृष्णः", "शिवः"],
        "answer_hi": "भारतदेशः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "श्रीधरभट्टस्य कति ग्रन्थाणां हस्तलिखितानि सन्ति?",
        "options_hi": ["अनेकानि", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "अनेकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "भारतमहिमायाः प्रभावः कति आधुनिकलेखकेषु दृश्यते?",
        "options_hi": ["अनेकेषु", "एकस्मिन्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "श्रीधरभट्टस्य कति वंशजाः सन्ति?",
        "options_hi": ["अज्ञातम्", "अनेकाः", "एकः", "द्वौ"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "भारतमहिमायाः कः मुख्यं प्रयोजनं?",
        "options_hi": ["राष्ट्रगौरवप्रतिष्ठापनम्", "ज्ञानप्रचारः", "धर्मप्रचारः", "भक्तिप्रचारः"],
        "answer_hi": "राष्ट्रगौरवप्रतिष्ठापनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "श्रीधरभट्टस्य कति सभापतित्वानि आसन्?",
        "options_hi": ["अनेकानि", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "अनेकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "भारतमहिमायाः प्रकाशनवर्षं किम्?",
        "options_hi": ["अज्ञातम्", "१००० ईसवीये", "१२०० ईसवीये", "१४०० ईसवीये"],
        "answer_hi": "अज्ञातम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "श्रीधरभट्टस्य कति सम्माननपत्राणि प्राप्तानि?",
        "options_hi": ["अनेकानि", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "अनेकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "भारतमहिमायाः प्रमुखं दृष्टान्तं किम्?",
        "options_hi": ["भारतस्य प्राकृतिकसौन्दर्यम्", "रामस्य जीवनम्", "कृष्णस्य जीवनम्", "बुद्धस्य जीवनम्"],
        "answer_hi": "भारतस्य प्राकृतिकसौन्दर्यम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "श्रीधरभट्टस्य कति निबन्धाः प्रकाशिताः?",
        "options_hi": ["अनेकाः", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "भारतमहिमायाः प्रभावः कति विदेशीयभाषासु दृश्यते?",
        "options_hi": ["अनेकासु", "एकस्याम्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकासु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "श्रीधरभट्टस्य कति प्रशंसकसमाजाः सन्ति?",
        "options_hi": ["अनेकाः", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "भारतमहिमायाः प्रमुखं सिद्धान्तं किम्?",
        "options_hi": ["राष्ट्रगौरवसिद्धान्तः", "ज्ञानसिद्धान्तः", "धर्मसिद्धान्तः", "भक्तिसिद्धान्तः"],
        "answer_hi": "राष्ट्रगौरवसिद्धान्तः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "श्रीधरभट्टस्य कति संस्करणानि प्रकाशितानि?",
        "options_hi": ["अनेकानि", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "अनेकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "भारतमहिमायाः कः मुख्यं प्रतिपाद्यविषयः?",
        "options_hi": ["भारतमहिमा", "ज्ञानमहिमा", "धर्ममहिमा", "भक्तिमहिमा"],
        "answer_hi": "भारतमहिमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "श्रीधरभट्टस्य कति शोधप्रबन्धाः लिखिताः?",
        "options_hi": ["अनेकाः", "एकः", "द्वौ", "त्रयः"],
        "answer_hi": "अनेकाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "भारतमहिमायाः प्रभावः कति विद्यालयेषु पाठ्यक्रमे अस्ति?",
        "options_hi": ["अनेकेषु", "एकस्मिन्", "द्वयोः", "त्रिषु"],
        "answer_hi": "अनेकेषु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "श्रीधरभट्टस्य कति स्मारकाणि सन्ति?",
        "options_hi": ["अनेकानि", "एकम्", "द्वे", "त्रीणि"],
        "answer_hi": "अनेकानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "भारतमहिमायाः स्थानं संस्कृतसाहित्ये किम्?",
        "options_hi": ["विशिष्टं", "सामान्यं", "अल्पमहत्त्वं", "अज्ञातं"],
        "answer_hi": "विशिष्टं",
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