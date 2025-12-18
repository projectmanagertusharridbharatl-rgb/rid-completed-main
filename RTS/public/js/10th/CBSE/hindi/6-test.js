const questions = [
    {
        "num": 1,
        "question_hi": "जवाहरलाल नेहरू ने 'जनतंत्र का जन्म' निबंध में किस सभ्यता को जनतंत्र की जननी कहा?",
        "options_hi": ["मिस्र", "यूनान", "रोम", "भारत"],
        "answer_hi": "यूनान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का सबसे पहला स्वरूप कहाँ विकसित हुआ?",
        "options_hi": ["एथेंस", "स्पार्टा", "थीब्स", "कोरिंथ"],
        "answer_hi": "एथेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_hi": "निबंध में नेहरू ने यूनानी जनतंत्र को किस शताब्दी में फलता-फूलता बताया?",
        "options_hi": ["5वीं ईसा पूर्व", "4वीं ईसा पूर्व", "6वीं ईसा पूर्व", "3वीं ईसा पूर्व"],
        "answer_hi": "5वीं ईसा पूर्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_hi": "नेहरू ने जनतंत्र के विकास में किस यूनानी नेता को महत्वपूर्ण बताया?",
        "options_hi": ["पेरिक्लीज", "सिकंदर", "सुकरात", "होमर"],
        "answer_hi": "पेरिक्लीज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_hi": "यूनानी जनतंत्र में 'एक्लीसिया' किसे कहते थे?",
        "options_hi": ["सेना सभा", "जनसभा", "न्याय सभा", "शिक्षक सभा"],
        "answer_hi": "जनसभा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_hi": "नेहरू के अनुसार, प्राचीन जनतंत्र की सबसे बड़ी कमी क्या थी?",
        "options_hi": ["दास प्रथा", "नारी अधिकारों का अभाव", "शिक्षा का अभाव", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_hi": "निबंध में नेहरू ने किस यूनानी युद्ध का उल्लेख किया?",
        "options_hi": ["पेलोपोनेशियन युद्ध", "ट्रॉजन युद्ध", "मैराथन युद्ध", "थर्मोपाइले युद्ध"],
        "answer_hi": "पेलोपोनेशियन युद्ध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_hi": "नेहरू ने जनतंत्र के आधुनिक रूप के विकास में किस देश को अग्रणी बताया?",
        "options_hi": ["इंग्लैंड", "फ्रांस", "अमेरिका", "स्विट्जरलैंड"],
        "answer_hi": "इंग्लैंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_hi": "यूनानी जनतंत्र में 'ओस्ट्रेसिज्म' क्या था?",
        "options_hi": ["मतदान प्रणाली", "निर्वासन प्रथा", "शिक्षा प्रणाली", "सैन्य व्यवस्था"],
        "answer_hi": "निर्वासन प्रथा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का सबसे महत्वपूर्ण तत्व क्या है?",
        "options_hi": ["स्वतंत्रता", "समानता", "न्याय", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_hi": "निबंध में नेहरू ने किस फ्रांसीसी क्रांति का उल्लेख किया?",
        "options_hi": ["1789", "1830", "1848", "1871"],
        "answer_hi": "1789",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_hi": "नेहरू ने जनतंत्र के विकास में किस दार्शनिक के विचारों को महत्व दिया?",
        "options_hi": ["जॉन लॉक", "रूसो", "मॉन्टेस्क्यू", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_hi": "यूनानी जनतंत्र में 'बोले' क्या था?",
        "options_hi": ["कार्यकारी परिषद", "विधायी सभा", "न्यायालय", "सेना परिषद"],
        "answer_hi": "कार्यकारी परिषद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_hi": "नेहरू के अनुसार, जनतंत्र की सफलता के लिए क्या आवश्यक है?",
        "options_hi": ["शिक्षित नागरिक", "सहनशील समाज", "निष्पक्ष संस्थाएं", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_hi": "निबंध में नेहरू ने अमेरिकी स्वतंत्रता संग्राम का उल्लेख किस वर्ष किया?",
        "options_hi": ["1776", "1789", "1812", "1865"],
        "answer_hi": "1776",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_hi": "नेहरू ने जनतंत्र को किसका प्रतीक बताया?",
        "options_hi": ["मानव प्रगति", "सामाजिक न्याय", "राष्ट्रीय एकता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_hi": "यूनानी जनतंत्र में 'हेलिआया' क्या था?",
        "options_hi": ["न्यायालय", "सेना", "शिक्षा बोर्ड", "व्यापार संघ"],
        "answer_hi": "न्यायालय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_hi": "नेहरू के अनुसार, भारत के लिए जनतंत्र का क्या महत्व है?",
        "options_hi": ["सामाजिक एकता", "आर्थिक विकास", "राजनीतिक स्थिरता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_hi": "निबंध में नेहरू ने 'मैग्ना कार्टा' का उल्लेख किस वर्ष किया?",
        "options_hi": ["1215", "1295", "1415", "1515"],
        "answer_hi": "1215",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_hi": "नेहरू ने जनतंत्र के लिए किस बात को सबसे खतरनाक बताया?",
        "options_hi": ["अज्ञानता", "गरीबी", "भ्रष्टाचार", "साम्प्रदायिकता"],
        "answer_hi": "अज्ञानता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_hi": "यूनानी जनतंत्र में 'एरोपेगस' क्या था?",
        "options_hi": ["उच्च न्यायालय", "सैन्य परिषद", "शासक वर्ग", "धार्मिक संस्था"],
        "answer_hi": "उच्च न्यायालय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का मूल आधार क्या है?",
        "options_hi": ["मानवीय गरिमा", "सामाजिक न्याय", "आर्थिक समानता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_hi": "निबंध में नेहरू ने किस दार्शनिक को 'प्रश्न करने वाला' कहा?",
        "options_hi": ["सुकरात", "प्लेटो", "अरस्तू", "पाइथागोरस"],
        "answer_hi": "सुकरात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_hi": "नेहरू ने जनतंत्र की रक्षा के लिए क्या आवश्यक बताया?",
        "options_hi": ["शिक्षा", "सतर्कता", "सहभागिता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_hi": "यूनानी जनतंत्र में 'ड्रेको' किसके लिए प्रसिद्ध था?",
        "options_hi": ["कठोर कानून", "सैन्य सफलता", "शैक्षिक सुधार", "आर्थिक नीति"],
        "answer_hi": "कठोर कानून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_hi": "नेहरू के अनुसार, सच्चा जनतंत्र क्या है?",
        "options_hi": ["राजनीतिक", "आर्थिक", "सामाजिक", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_hi": "निबंध में नेहरू ने 'रूसो' की किस पुस्तक का उल्लेख किया?",
        "options_hi": ["सामाजिक संविदा", "एमिल", "कन्फेशंस", "डिस्कोर्स"],
        "answer_hi": "सामाजिक संविदा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_hi": "नेहरू ने जनतंत्र के विकास में किस आंदोलन को महत्व दिया?",
        "options_hi": ["पुनर्जागरण", "धर्मसुधार", "औद्योगिक क्रांति", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_hi": "यूनानी जनतंत्र में 'पेरिक्लीज' किस युग से जुड़े हैं?",
        "options_hi": ["स्वर्ण युग", "लौह युग", "कांस्य युग", "पुनर्जागरण"],
        "answer_hi": "स्वर्ण युग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का उद्देश्य क्या होना चाहिए?",
        "options_hi": ["सर्वकल्याण", "सर्वोदय", "सर्वसमावेश", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_hi": "निबंध में नेहरू ने 'वाल्टेयर' को किसके लिए याद किया?",
        "options_hi": ["बौद्धिक स्वतंत्रता", "धार्मिक सहिष्णुता", "सामाजिक समानता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_hi": "नेहरू ने जनतंत्र को किसका माध्यम बताया?",
        "options_hi": ["सामाजिक परिवर्तन", "आर्थिक न्याय", "राजनीतिक भागीदारी", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_hi": "यूनानी जनतंत्र में 'सोलन' किस सुधार के लिए प्रसिद्ध हैं?",
        "options_hi": ["आर्थिक", "सामाजिक", "राजनीतिक", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का सबसे बड़ा गुण क्या है?",
        "options_hi": ["लचीलापन", "सुधार क्षमता", "सहनशीलता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_hi": "निबंध में नेहरू ने 'जॉन लॉक' के किस सिद्धांत का उल्लेख किया?",
        "options_hi": ["प्राकृतिक अधिकार", "सामाजिक संविदा", "शक्ति पृथक्करण", "जन इच्छा"],
        "answer_hi": "प्राकृतिक अधिकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_hi": "नेहरू ने जनतंत्र की सफलता का मापदंड क्या बताया?",
        "options_hi": ["जनकल्याण", "सामाजिक समरसता", "राष्ट्रीय प्रगति", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_hi": "यूनानी जनतंत्र में 'क्लिस्थनीज' किस सुधार के लिए प्रसिद्ध हैं?",
        "options_hi": ["प्रशासनिक", "सैन्य", "आर्थिक", "शैक्षिक"],
        "answer_hi": "प्रशासनिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का सबसे बड़ा दुश्मन क्या है?",
        "options_hi": ["अज्ञानता", "गरीबी", "भ्रष्टाचार", "साम्प्रदायिकता"],
        "answer_hi": "अज्ञानता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_hi": "निबंध में नेहरू ने 'थॉमस पेन' का उल्लेख किस संदर्भ में किया?",
        "options_hi": ["अमेरिकी क्रांति", "फ्रांसीसी क्रांति", "मानव अधिकार", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_hi": "नेहरू ने जनतंत्र को किसका प्रतिबिंब बताया?",
        "options_hi": ["सामाजिक चेतना", "राष्ट्रीय आकांक्षा", "मानवीय मूल्य", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_hi": "यूनानी जनतंत्र में 'एथेंस' की जनसंख्या कितनी थी?",
        "options_hi": ["लगभग 3 लाख", "लगभग 5 लाख", "लगभग 7 लाख", "लगभग 10 लाख"],
        "answer_hi": "लगभग 3 लाख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का वास्तविक अर्थ क्या है?",
        "options_hi": ["जनता का शासन", "जनता के लिए शासन", "जनता द्वारा शासन", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_hi": "निबंध में नेहरू ने 'मॉन्टेस्क्यू' के किस सिद्धांत का उल्लेख किया?",
        "options_hi": ["शक्ति पृथक्करण", "सामाजिक संविदा", "जन इच्छा", "प्राकृतिक अधिकार"],
        "answer_hi": "शक्ति पृथक्करण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_hi": "नेहरू ने जनतंत्र के विकास में किस संस्था का योगदान बताया?",
        "options_hi": ["संसद", "न्यायपालिका", "मीडिया", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_hi": "यूनानी जनतंत्र में 'डेमोस' क्या था?",
        "options_hi": ["जनता", "शासक वर्ग", "सेना", "धार्मिक नेता"],
        "answer_hi": "जनता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का लक्ष्य क्या होना चाहिए?",
        "options_hi": ["सामाजिक कल्याण", "आर्थिक विकास", "सांस्कृतिक प्रगति", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_hi": "निबंध में नेहरू ने 'एडम स्मिथ' का उल्लेख किस संदर्भ में किया?",
        "options_hi": ["आर्थिक स्वतंत्रता", "पूंजीवाद", "मुक्त व्यापार", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_hi": "नेहरू ने जनतंत्र को किसका गारंटर बताया?",
        "options_hi": ["मौलिक अधिकार", "सामाजिक न्याय", "राष्ट्रीय एकता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_hi": "यूनानी जनतंत्र में 'पोलिस' क्या था?",
        "options_hi": ["नगर राज्य", "सेना", "न्यायालय", "शिक्षा केंद्र"],
        "answer_hi": "नगर राज्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का भविष्य किस पर निर्भर है?",
        "options_hi": ["युवा पीढ़ी", "शिक्षा प्रणाली", "सामाजिक मूल्य", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_hi": "निबंध में नेहरू ने 'थॉमस जेफरसन' का उल्लेख किस संदर्भ में किया?",
        "options_hi": ["अमेरिकी स्वतंत्रता", "मानव अधिकार", "जनतंत्र का दर्शन", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_hi": "नेहरू ने जनतंत्र की सबसे बड़ी चुनौती क्या बताई?",
        "options_hi": ["आर्थिक असमानता", "सामाजिक विषमता", "राजनीतिक भ्रष्टाचार", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_hi": "यूनानी जनतंत्र में 'एथेंस' का शासन कैसा था?",
        "options_hi": ["प्रत्यक्ष जनतंत्र", "प्रतिनिधि जनतंत्र", "राजतंत्र", "अधिनायकतंत्र"],
        "answer_hi": "प्रत्यक्ष जनतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का सबसे बड़ा परीक्षण कब होता है?",
        "options_hi": ["संकट के समय", "विपरीत परिस्थितियों में", "संघर्ष की स्थिति में", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_hi": "निबंध में नेहरू ने 'एडमंड बर्क' का उल्लेख किस संदर्भ में किया?",
        "options_hi": ["रूढ़िवाद", "सुधारवाद", "क्रांतिकारी विचार", "उदारवाद"],
        "answer_hi": "रूढ़िवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_hi": "नेहरू ने जनतंत्र को किसकी प्रक्रिया बताया?",
        "options_hi": ["सतत विकास", "निरंतर सुधार", "लगातार परिवर्तन", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_hi": "यूनानी जनतंत्र में 'स्पार्टा' किस प्रकार का राज्य था?",
        "options_hi": ["सैन्य राज्य", "जनतांत्रिक", "राजतांत्रिक", "अधिनायकवादी"],
        "answer_hi": "सैन्य राज्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का अंतिम लक्ष्य क्या है?",
        "options_hi": ["मानव कल्याण", "सामाजिक न्याय", "विश्व शांति", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_hi": "निबंध में नेहरू ने 'बेंथम' के किस सिद्धांत का उल्लेख किया?",
        "options_hi": ["उपयोगितावाद", "सामाजिक संविदा", "प्राकृतिक अधिकार", "शक्ति पृथक्करण"],
        "answer_hi": "उपयोगितावाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_hi": "नेहरू ने जनतंत्र के विकास में किस क्रांति का योगदान बताया?",
        "options_hi": ["वैज्ञानिक क्रांति", "तकनीकी क्रांति", "शैक्षिक क्रांति", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_hi": "यूनानी जनतंत्र में 'एथेंस' की सभा में सदस्यों की संख्या कितनी थी?",
        "options_hi": ["500", "1000", "1500", "2000"],
        "answer_hi": "500",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का मूल उद्देश्य क्या है?",
        "options_hi": ["मानवीय गरिमा", "सामाजिक न्याय", "आर्थिक समानता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_hi": "निबंध में नेहरू ने 'मिल' के किस सिद्धांत का उल्लेख किया?",
        "options_hi": ["स्वतंत्रता", "उपयोगितावाद", "प्रतिनिधि जनतंत्र", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_hi": "नेहरू ने जनतंत्र को किसका मंच बताया?",
        "options_hi": ["विचारों की अभिव्यक्ति", "आकांक्षाओं की पूर्ति", "समस्याओं का समाधान", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_hi": "यूनानी जनतंत्र में 'एथेंस' का स्वर्ण युग किसके शासन में था?",
        "options_hi": ["पेरिक्लीज", "सोलन", "क्लिस्थनीज", "ड्रेको"],
        "answer_hi": "पेरिक्लीज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का सबसे महत्वपूर्ण पाठ क्या है?",
        "options_hi": ["सहनशीलता", "सहयोग", "सहभागिता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_hi": "निबंध में नेहरू ने 'टॉकविल' का उल्लेख किस संदर्भ में किया?",
        "options_hi": ["अमेरिकी जनतंत्र", "फ्रांसीसी क्रांति", "सामाजिक समानता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_hi": "नेहरू ने जनतंत्र की सबसे बड़ी जिम्मेदारी किस पर बताई?",
        "options_hi": ["नागरिक", "नेता", "अधिकारी", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_hi": "यूनानी जनतंत्र में 'ओस्ट्रेका' क्या था?",
        "options_hi": ["मतपत्र", "सिक्का", "कानून की पुस्तक", "सैन्य पदक"],
        "answer_hi": "मतपत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का वास्तविक रूप क्या है?",
        "options_hi": ["लोक कल्याण", "सामाजिक न्याय", "आर्थिक समानता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_hi": "निबंध में नेहरू ने 'हेगेल' का उल्लेख किस संदर्भ में किया?",
        "options_hi": ["द्वंद्वात्मक भौतिकवाद", "राज्य का दर्शन", "इतिहास की व्याख्या", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_hi": "नेहरू ने जनतंत्र के विकास में किस आवश्यकता पर जोर दिया?",
        "options_hi": ["नैतिक शिक्षा", "सामाजिक चेतना", "राजनीतिक साक्षरता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_hi": "यूनानी जनतंत्र में 'एथेंस' की सभा कहाँ होती थी?",
        "options_hi": ["एक्रोपोलिस", "एगोरा", "पार्थेनन", "थियेटर"],
        "answer_hi": "एगोरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का सबसे बड़ा गुण क्या है?",
        "options_hi": ["स्वतंत्रता", "समानता", "बंधुत्व", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_hi": "निबंध में नेहरू ने 'मार्क्स' का उल्लेख किस संदर्भ में किया?",
        "options_hi": ["वर्ग संघर्ष", "आर्थिक निर्धारणवाद", "साम्यवाद", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_hi": "नेहरू ने जनतंत्र को किसका प्रतीक बताया?",
        "options_hi": ["मानव प्रगति", "सामाजिक न्याय", "राष्ट्रीय एकता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_hi": "यूनानी जनतंत्र में 'एथेंस' के नागरिक कौन थे?",
        "options_hi": ["स्वतंत्र पुरुष", "सभी पुरुष", "सभी वयस्क", "सभी निवासी"],
        "answer_hi": "स्वतंत्र पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का सबसे बड़ा परीक्षण क्या है?",
        "options_hi": ["नैतिक मूल्यों का पालन", "आर्थिक संकट", "सामाजिक असमानता", "राष्ट्रीय सुरक्षा"],
        "answer_hi": "नैतिक मूल्यों का पालन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_hi": "निबंध में नेहरू ने 'वेबर' का उल्लेख किस संदर्भ में किया?",
        "options_hi": ["ब्यूरोक्रेसी", "राजनीतिक समाजशास्त्र", "आर्थिक नैतिकता", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_hi": "नेहरू ने जनतंत्र को किसकी अभिव्यक्ति बताया?",
        "options_hi": ["सामूहिक इच्छा", "राष्ट्रीय चेतना", "सामाजिक संवेदना", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_hi": "यूनानी जनतंत्र में 'एथेंस' का शासन कितने वर्षों तक रहा?",
        "options_hi": ["लगभग 200", "लगभग 300", "लगभग 400", "लगभग 500"],
        "answer_hi": "लगभग 200",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का आदर्श क्या होना चाहिए?",
        "options_hi": ["सर्वोदय", "सर्वकल्याण", "सर्वसमावेश", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_hi": "निबंध में नेहरू ने 'प्लेटो' की किस पुस्तक का उल्लेख किया?",
        "options_hi": ["रिपब्लिक", "लॉज", "सिम्पोजियम", "फीडो"],
        "answer_hi": "रिपब्लिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_hi": "नेहरू ने जनतंत्र के लिए किस बात को खतरा बताया?",
        "options_hi": ["साम्प्रदायिकता", "प्रांतीयता", "जातिवाद", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_hi": "यूनानी जनतंत्र में 'एथेंस' की जनता कैसे निर्णय लेती थी?",
        "options_hi": ["हाथ उठाकर", "मतपत्र द्वारा", "ध्वनिमत द्वारा", "चिट द्वारा"],
        "answer_hi": "हाथ उठाकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का मूल आधार क्या है?",
        "options_hi": ["शिक्षा", "संविधान", "मताधिकार", "आर्थिक समानता"],
        "answer_hi": "शिक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_hi": "निबंध में नेहरू ने 'अरस्तू' को किस रूप में याद किया?",
        "options_hi": ["वैज्ञानिक", "दार्शनिक", "राजनीतिक चिंतक", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_hi": "नेहरू ने जनतंत्र की सफलता के लिए क्या आवश्यक बताया?",
        "options_hi": ["जागरूक नागरिक", "सक्षम नेतृत्व", "मजबूत संस्थाएं", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_hi": "यूनानी जनतंत्र में 'एथेंस' का पतन किस युद्ध के बाद हुआ?",
        "options_hi": ["पेलोपोनेशियन युद्ध", "ट्रॉजन युद्ध", "मैराथन युद्ध", "थर्मोपाइले युद्ध"],
        "answer_hi": "पेलोपोनेशियन युद्ध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का सबसे बड़ा शत्रु क्या है?",
        "options_hi": ["अधिनायकवाद", "साम्राज्यवाद", "पूंजीवाद", "साम्यवाद"],
        "answer_hi": "अधिनायकवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_hi": "निबंध में नेहरू ने 'मैरी वॉलस्टोनक्राफ्ट' का उल्लेख किस संदर्भ में किया?",
        "options_hi": ["स्त्री अधिकार", "शिक्षा सुधार", "सामाजिक न्याय", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_hi": "नेहरू ने जनतंत्र के विकास में किस आंदोलन का महत्व बताया?",
        "options_hi": ["श्रमिक आंदोलन", "नारी आंदोलन", "नागरिक अधिकार आंदोलन", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_hi": "यूनानी जनतंत्र में 'थेमिस्टोक्लीज' कौन थे?",
        "options_hi": ["सेनापति", "दार्शनिक", "न्यायाधीश", "राजनेता"],
        "answer_hi": "सेनापति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का वास्तविक स्वरूप क्या है?",
        "options_hi": ["सरकार का एक रूप", "जीवन दर्शन", "राजनीतिक व्यवस्था", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_hi": "निबंध में नेहरू ने 'सिसरो' का उल्लेख किस संदर्भ में किया?",
        "options_hi": ["रोमन गणराज्य", "वकालत", "दर्शन", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_hi": "नेहरू ने जनतंत्र को किसका साधन बताया?",
        "options_hi": ["सामाजिक नियंत्रण", "आर्थिक शोषण", "राजनीतिक वर्चस्व", "मानव विकास"],
        "answer_hi": "मानव विकास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_hi": "यूनानी जनतंत्र में 'स्ट्रैटेजोई' कौन थे?",
        "options_hi": ["सेनापति", "न्यायाधीश", "व्यापारी", "दास"],
        "answer_hi": "सेनापति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का सबसे बड़ा दोष क्या है?",
        "options_hi": ["मंद गति", "अस्थिरता", "अयोग्य नेतृत्व", "सभी"],
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_hi": "निबंध में नेहरू ने किस रोमन नेता का उल्लेख किया?",
        "options_hi": ["सिसरो", "जूलियस सीजर", "ऑगस्टस", "नेरो"],
        "answer_hi": "सिसरो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_hi": "नेहरू के अनुसार, जनतंत्र का सबसे बड़ा योगदान क्या है?",
        "options_hi": ["मानव अधिकार", "सामाजिक न्याय", "राजनीतिक स्वतंत्रता", "सभी"],
        "answer_hi": "सभी",
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