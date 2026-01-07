 
 /* ---------- STRICT FULLSCREEN ENFORCEMENT ---------- */
    let fullscreenExitAttempts = 0;
    let exitTimeout;

    function enterFullScreen() {
        const el = document.documentElement;
        if (el.requestFullscreen) {
            el.requestFullscreen().catch(e => {
                console.log("Fullscreen error:", e);
                forceFullscreen();
            });
        } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
        } else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
        }
    }

    function forceFullscreen() {
        // Try alternative methods
        const el = document.documentElement;
        if (el.mozRequestFullScreen) {
            el.mozRequestFullScreen();
        } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    }

    // Auto fullscreen on load
    window.onload = () => {
        setTimeout(() => {
            enterFullScreen();
            // Start monitoring
            startFullscreenMonitoring();
        }, 500);
    };

    // Prevent all exit methods
    document.addEventListener("keydown", function (e) {
        // Block Escape, F11, Ctrl+W, Ctrl+T, Alt+Tab, etc.
        if (
            e.key === "Escape" ||
            e.key === "F11" ||
            (e.ctrlKey && e.key === "w") ||
            (e.ctrlKey && e.key === "t") ||
            (e.altKey && e.key === "Tab") ||
            (e.metaKey && e.key === "q") // Cmd+Q for Mac
        ) {
            e.preventDefault();
            e.stopPropagation();
            handleFullscreenExit();
            return false;
        }
    });

    // Block right click
    document.addEventListener("contextmenu", e => {
        e.preventDefault();
        handleFullscreenExit();
    });

    // Detect fullscreen exit
    function startFullscreenMonitoring() {
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    }

    function handleFullscreenChange() {
        if (!document.fullscreenElement &&
            !document.webkitFullscreenElement &&
            !document.mozFullScreenElement &&
            !document.msFullscreenElement) {
            handleFullscreenExit();
        }
    }

    function handleFullscreenExit() {
        fullscreenExitAttempts++;
        
        // Show warning modal
        document.getElementById('exitWarning').style.display = 'block';
        
        let countdown = 5;
        document.getElementById('countdown').textContent = countdown;
        
        // Countdown timer
        exitTimeout = setInterval(() => {
            countdown--;
            document.getElementById('countdown').textContent = countdown;
            
            if (countdown <= 0) {
                clearInterval(exitTimeout);
                autoSubmitOnExit();
            }
        }, 1000);
        
        // Immediately try to go back to fullscreen
        enterFullScreen();
    }

    function autoSubmitOnExit() {
        alert("❌ TEST SUBMITTED!\nYou exited fullscreen mode. Test has been automatically submitted.");
        
        // Stop camera if active
        if (window.videoStream) {
            window.videoStream.getTracks().forEach(track => track.stop());
        }
        
        // Submit the test
        submitQuiz();
    }

    // Disable back button
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.pushState(null, null, location.href);
        handleFullscreenExit();
    };

    // Prevent window/tab close
    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        e.returnValue = '';
        handleFullscreenExit();
    });

    // Monitor visibility change (tab switching)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            handleFullscreenExit();
        }
    });

    // Monitor resize (might indicate windowed mode)
    window.addEventListener('resize', function() {
        if (!document.fullscreenElement && 
            !document.webkitFullscreenElement && 
            !document.mozFullScreenElement && 
            !document.msFullscreenElement) {
            handleFullscreenExit();
        }
    });

    // Try to maintain fullscreen every 30 seconds
    setInterval(() => {
        if (!document.fullscreenElement && 
            !document.webkitFullscreenElement && 
            !document.mozFullScreenElement && 
            !document.msFullscreenElement) {
            enterFullScreen();
        }
    }, 30000);
 
 // Original questions array
        let questions = [
  {
    "num": 51,
    "question_en": "What is the purpose of the 'volatile' keyword in Java?",
    "question_hi": "Java में 'volatile' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["Ensures variable is always read from main memory", "Makes variable thread-safe", "Prevents variable caching", "All of the above"],
    "options_hi": ["यह सुनिश्चित करता है कि वेरिएबल हमेशा मुख्य मेमोरी से पढ़ा जाए", "वेरिएबल को थ्रेड-सेफ बनाता है", "वेरिएबल कैशिंग को रोकता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 51
  },
  {
    "num": 52,
    "question_en": "What is the diamond operator (<>) in Java?",
    "question_hi": "Java में डायमंड ऑपरेटर (<>) क्या है?",
    "options_en": ["Type inference for generics", "Mathematical operator", "Comparison operator", "Bitwise operator"],
    "options_hi": ["जेनेरिक्स के लिए टाइप इन्फेरेंस", "गणितीय ऑपरेटर", "तुलना ऑपरेटर", "बिटवाइज ऑपरेटर"],
    "answer_en": "Type inference for generics",
    "answer_hi": "जेनेरिक्स के लिए टाइप इन्फेरेंस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 52
  },
  {
    "num": 53,
    "question_en": "Which method is used to clone an object in Java?",
    "question_hi": "Java में ऑब्जेक्ट को क्लोन करने के लिए किस मेथड का उपयोग किया जाता है?",
    "options_en": ["clone()", "copy()", "duplicate()", "replicate()"],
    "options_hi": ["clone()", "copy()", "duplicate()", "replicate()"],
    "answer_en": "clone()",
    "answer_hi": "clone()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 53
  },
  {
    "num": 54,
    "question_en": "What is a marker interface?",
    "question_hi": "मार्कर इंटरफेस क्या है?",
    "options_en": ["Interface with no methods", "Used to mark classes for special treatment", "Both A and B", "Interface with only one method"],
    "options_hi": ["बिना मेथड्स वाला इंटरफेस", "विशेष ट्रीटमेंट के लिए क्लासेज को मार्क करने के लिए उपयोग", "A और B दोनों", "केवल एक मेथड वाला इंटरफेस"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 54
  },
  {
    "num": 55,
    "question_en": "What is the purpose of the 'transient' keyword?",
    "question_hi": "'transient' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["Prevents variable from being serialized", "Makes variable temporary", "Makes variable volatile", "None of the above"],
    "options_hi": ["वेरिएबल को सीरियलाइज़ होने से रोकता है", "वेरिएबल को टेम्पररी बनाता है", "वेरिएबल को वोलेटाइल बनाता है", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Prevents variable from being serialized",
    "answer_hi": "वेरिएबल को सीरियलाइज़ होने से रोकता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 55
  },
  {
    "num": 56,
    "question_en": "What is method reference in Java 8?",
    "question_hi": "Java 8 में मेथड रेफरेंस क्या है?",
    "options_en": ["Shorter syntax for lambda expressions", "Reference to an existing method", "Both A and B", "Reference to a variable"],
    "options_hi": ["लैम्बडा एक्सप्रेशन के लिए छोटा सिंटैक्स", "मौजूदा मेथड का रेफरेंस", "A और B दोनों", "वेरिएबल का रेफरेंस"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 56
  },
  {
    "num": 57,
    "question_en": "What is the purpose of the 'assert' keyword?",
    "question_hi": "'assert' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["For debugging purposes", "To test assumptions in code", "Both A and B", "For exception handling"],
    "options_hi": ["डिबगिंग उद्देश्यों के लिए", "कोड में धारणाओं को टेस्ट करने के लिए", "A और B दोनों", "एक्सेप्शन हैंडलिंग के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 57
  },
  {
    "num": 58,
    "question_en": "What is a functional interface?",
    "question_hi": "फंक्शनल इंटरफेस क्या है?",
    "options_en": ["Interface with exactly one abstract method", "Can have multiple default methods", "Both A and B", "Interface with no methods"],
    "options_hi": ["बिल्कुल एक एब्स्ट्रैक्ट मेथड वाला इंटरफेस", "मल्टीपल डिफ़ॉल्ट मेथड्स हो सकते हैं", "A और B दोनों", "बिना मेथड्स वाला इंटरफेस"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 58
  },
  {
    "num": 59,
    "question_en": "What is the 'var' keyword introduced in Java 10?",
    "question_hi": "Java 10 में पेश किया गया 'var' कीवर्ड क्या है?",
    "options_en": ["Local variable type inference", "Global variable declaration", "Constant declaration", "Method parameter type"],
    "options_hi": ["लोकल वेरिएबल टाइप इन्फेरेंस", "ग्लोबल वेरिएबल डिक्लेरेशन", "कॉन्स्टेंट डिक्लेरेशन", "मेथड पैरामीटर टाइप"],
    "answer_en": "Local variable type inference",
    "answer_hi": "लोकल वेरिएबल टाइप इन्फेरेंस",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 59
  },
  {
    "num": 60,
    "question_en": "What is the purpose of the 'yield' keyword in Java 14?",
    "question_hi": "Java 14 में 'yield' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["Returns value from switch expression", "Pauses thread execution", "Throws exception", "Breaks from loop"],
    "options_hi": ["स्विच एक्सप्रेशन से वैल्यू रिटर्न करता है", "थ्रेड एक्जीक्यूशन को पॉज करता है", "एक्सेप्शन थ्रो करता है", "लूप से ब्रेक करता है"],
    "answer_en": "Returns value from switch expression",
    "answer_hi": "स्विच एक्सप्रेशन से वैल्यू रिटर्न करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 60
  },
  {
    "num": 61,
    "question_en": "What is a sealed class in Java 17?",
    "question_hi": "Java 17 में सील्ड क्लास क्या है?",
    "options_en": ["Class that restricts which classes can extend it", "Completely sealed class", "Immutable class", "Abstract class"],
    "options_hi": ["ऐसी क्लास जो सीमित करती है कि कौन सी क्लासेज इसे एक्सटेंड कर सकती हैं", "पूरी तरह सील्ड क्लास", "इम्यूटेबल क्लास", "एब्स्ट्रैक्ट क्लास"],
    "answer_en": "Class that restricts which classes can extend it",
    "answer_hi": "ऐसी क्लास जो सीमित करती है कि कौन सी क्लासेज इसे एक्सटेंड कर सकती हैं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 61
  },
  {
    "num": 62,
    "question_en": "What is the difference between Iterator and ListIterator?",
    "question_hi": "Iterator और ListIterator में क्या अंतर है?",
    "options_en": ["ListIterator can traverse in both directions", "ListIterator can modify list during iteration", "Both A and B", "No difference"],
    "options_hi": ["ListIterator दोनों दिशाओं में ट्रैवर्स कर सकता है", "ListIterator इटरेशन के दौरान लिस्ट मॉडिफाई कर सकता है", "A और B दोनों", "कोई अंतर नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 62
  },
  {
    "num": 63,
    "question_en": "What is the purpose of the 'record' keyword in Java 16?",
    "question_hi": "Java 16 में 'record' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["To create immutable data classes", "To record method calls", "For logging purposes", "To create audio records"],
    "options_hi": ["इम्यूटेबल डेटा क्लासेज बनाने के लिए", "मेथड कॉल्स रिकॉर्ड करने के लिए", "लॉगिंग उद्देश्यों के लिए", "ऑडियो रिकॉर्ड्स बनाने के लिए"],
    "answer_en": "To create immutable data classes",
    "answer_hi": "इम्यूटेबल डेटा क्लासेज बनाने के लिए",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 63
  },
  {
    "num": 64,
    "question_en": "What is double colon (::) operator in Java?",
    "question_hi": "Java में डबल कोलन (::) ऑपरेटर क्या है?",
    "options_en": ["Method reference operator", "Scope resolution operator", "Both A and B", "Mathematical operator"],
    "options_hi": ["मेथड रेफरेंस ऑपरेटर", "स्कोप रेजोल्यूशन ऑपरेटर", "A और B दोनों", "गणितीय ऑपरेटर"],
    "answer_en": "Method reference operator",
    "answer_hi": "मेथड रेफरेंस ऑपरेटर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 64
  },
  {
    "num": 65,
    "question_en": "What is the difference between ConcurrentHashMap and HashMap?",
    "question_hi": "ConcurrentHashMap और HashMap में क्या अंतर है?",
    "options_en": ["ConcurrentHashMap is thread-safe", "HashMap is not thread-safe", "Both A and B", "No difference"],
    "options_hi": ["ConcurrentHashMap थ्रेड-सेफ है", "HashMap थ्रेड-सेफ नहीं है", "A और B दोनों", "कोई अंतर नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 65
  },
  {
    "num": 66,
    "question_en": "What is the purpose of the 'default' method in interfaces?",
    "question_hi": "इंटरफेस में 'default' मेथड का उद्देश्य क्या है?",
    "options_en": ["To provide default implementation", "To avoid breaking existing implementations", "Both A and B", "To make method optional"],
    "options_hi": ["डिफ़ॉल्ट इम्प्लीमेंटेशन प्रदान करने के लिए", "मौजूदा इम्प्लीमेंटेशन को ब्रेक होने से बचाने के लिए", "A और B दोनों", "मेथड को ऑप्शनल बनाने के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 66
  },
  {
    "num": 67,
    "question_en": "What is a phantom reference?",
    "question_hi": "फैंटम रेफरेंस क्या है?",
    "options_en": ["Weakest type of reference", "Used for pre-mortem cleanup", "Both A and B", "Strongest type of reference"],
    "options_hi": ["रेफरेंस का सबसे कमजोर प्रकार", "प्री-मॉर्टम क्लीनअप के लिए उपयोग", "A और B दोनों", "रेफरेंस का सबसे मजबूत प्रकार"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 67
  },
  {
    "num": 68,
    "question_en": "What is the difference between '>>' and '>>>' operators?",
    "question_hi": "'>>' और '>>>' ऑपरेटर्स में क्या अंतर है?",
    "options_en": ["'>>' preserves sign bit, '>>>' doesn't", "'>>>' is unsigned right shift", "Both A and B", "No difference"],
    "options_hi": ["'>>' साइन बिट प्रिजर्व करता है, '>>>' नहीं", "'>>>' अनसाइन्ड राइट शिफ्ट है", "A और B दोनों", "कोई अंतर नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 68
  },
  {
    "num": 69,
    "question_en": "What is the purpose of the 'strictfp' keyword?",
    "question_hi": "'strictfp' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["Ensures consistent floating-point calculations across platforms", "Makes floating-point operations faster", "Restricts floating-point precision", "None of the above"],
    "options_hi": ["प्लेटफॉर्म्स के बीच संगत फ्लोटिंग-पॉइंट गणना सुनिश्चित करता है", "फ्लोटिंग-पॉइंट ऑपरेशन्स को तेज बनाता है", "फ्लोटिंग-पॉइंट प्रिसिजन को प्रतिबंधित करता है", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Ensures consistent floating-point calculations across platforms",
    "answer_hi": "प्लेटफॉर्म्स के बीच संगत फ्लोटिंग-पॉइंट गणना सुनिश्चित करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 69
  },
  {
    "num": 70,
    "question_en": "What is the difference between 'StringBuffer' and 'StringBuilder'?",
    "question_hi": "'StringBuffer' और 'StringBuilder' में क्या अंतर है?",
    "options_en": ["StringBuffer is thread-safe, StringBuilder is not", "StringBuilder is faster", "Both A and B", "No difference"],
    "options_hi": ["StringBuffer थ्रेड-सेफ है, StringBuilder नहीं", "StringBuilder तेज है", "A और B दोनों", "कोई अंतर नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 70
  },
  {
    "num": 71,
    "question_en": "What is the purpose of the 'native' keyword?",
    "question_hi": "'native' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["Indicates method implemented in native code", "For platform-specific operations", "Both A and B", "For natural language methods"],
    "options_hi": ["इंगित करता है कि मेथड नेटिव कोड में इम्प्लीमेंटेड है", "प्लेटफॉर्म-स्पेसिफिक ऑपरेशन्स के लिए", "A और B दोनों", "नेचुरल लैंग्वेज मेथड्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 71
  },
  {
    "num": 72,
    "question_en": "What is a Predicate in Java 8?",
    "question_hi": "Java 8 में Predicate क्या है?",
    "options_en": ["Functional interface that returns boolean", "Used for filtering", "Both A and B", "Mathematical predicate"],
    "options_hi": ["फंक्शनल इंटरफेस जो बूलियन रिटर्न करता है", "फिल्टरिंग के लिए उपयोग", "A और B दोनों", "गणितीय प्रिडिकेट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 72
  },
  {
    "num": 73,
    "question_en": "What is a Consumer in Java 8?",
    "question_hi": "Java 8 में Consumer क्या है?",
    "options_en": ["Functional interface that accepts input and returns nothing", "Used for performing operations", "Both A and B", "Economic consumer"],
    "options_hi": ["फंक्शनल इंटरफेस जो इनपुट स्वीकार करता है और कुछ नहीं रिटर्न करता", "ऑपरेशन्स परफॉर्म करने के लिए उपयोग", "A और B दोनों", "आर्थिक उपभोक्ता"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 73
  },
  {
    "num": 74,
    "question_en": "What is the purpose of 'CompletableFuture'?",
    "question_hi": "'CompletableFuture' का उद्देश्य क्या है?",
    "options_en": ["For asynchronous programming", "To handle future results", "Both A and B", "For complete futures"],
    "options_hi": ["असिंक्रोनस प्रोग्रामिंग के लिए", "फ्यूचर रिजल्ट्स को हैंडल करने के लिए", "A और B दोनों", "कंप्लीट फ्यूचर्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 74
  },
  {
    "num": 75,
    "question_en": "What is a 'try-with-resources' statement?",
    "question_hi": "'try-with-resources' स्टेटमेंट क्या है?",
    "options_en": ["Automatically closes resources", "Introduced in Java 7", "Both A and B", "For trying different resources"],
    "options_hi": ["ऑटोमेटिकली रिसोर्सेज को क्लोज करता है", "Java 7 में पेश किया गया", "A और B दोनों", "अलग-अलग रिसोर्सेज ट्राई करने के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 75
  },
  {
    "num": 76,
    "question_en": "What is the difference between '==' and '===' in Java?",
    "question_hi": "Java में '==' और '===' में क्या अंतर है?",
    "options_en": ["'===' doesn't exist in Java", "'==' is for comparison", "Both A and B", "'===' is for strict equality"],
    "options_hi": ["'===' Java में मौजूद नहीं है", "'==' तुलना के लिए है", "A और B दोनों", "'===' सख्त समानता के लिए है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 76
  },
  {
    "num": 77,
    "question_en": "What is the purpose of 'Pattern' and 'Matcher' classes?",
    "question_hi": "'Pattern' और 'Matcher' क्लासेज का उद्देश्य क्या है?",
    "options_en": ["For regular expression operations", "Pattern compilation and matching", "Both A and B", "For design patterns"],
    "options_hi": ["रेगुलर एक्सप्रेशन ऑपरेशन्स के लिए", "पैटर्न कंपाइलेशन और मैचिंग", "A और B दोनों", "डिज़ाइन पैटर्न्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 77
  },
  {
    "num": 78,
    "question_en": "What is a 'static block'?",
    "question_hi": "'static block' क्या है?",
    "options_en": ["Executes when class is loaded", "For static initialization", "Both A and B", "Static method block"],
    "options_hi": ["क्लास लोड होने पर एक्सेक्यूट होता है", "स्टेटिक इनिशियलाइज़ेशन के लिए", "A और B दोनों", "स्टेटिक मेथड ब्लॉक"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 78
  },
  {
    "num": 79,
    "question_en": "What is the purpose of 'Enum' in Java?",
    "question_hi": "Java में 'Enum' का उद्देश्य क्या है?",
    "options_en": ["To define a collection of constants", "Type-safe enumeration", "Both A and B", "For enumeration loops"],
    "options_hi": ["कॉन्स्टेंट्स के कलेक्शन को डिफाइन करने के लिए", "टाइप-सेफ एन्यूमरेशन", "A और B दोनों", "एन्यूमरेशन लूप्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 79
  },
  {
    "num": 80,
    "question_en": "What is 'instance initializer block'?",
    "question_hi": "'instance initializer block' क्या है?",
    "options_en": ["Executes before constructor", "For instance initialization", "Both A and B", "For static instances"],
    "options_hi": ["कंस्ट्रक्टर से पहले एक्सेक्यूट होता है", "इंस्टेंस इनिशियलाइज़ेशन के लिए", "A और B दोनों", "स्टेटिक इंस्टेंसेस के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 80
  },
  {
    "num": 81,
    "question_en": "What is the difference between 'File' and 'Path'?",
    "question_hi": "'File' और 'Path' में क्या अंतर है?",
    "options_en": ["'Path' is from NIO.2 API", "'File' is from older IO API", "Both A and B", "No difference"],
    "options_hi": ["'Path' NIO.2 API से है", "'File' पुराने IO API से है", "A और B दोनों", "कोई अंतर नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 81
  },
  {
    "num": 82,
    "question_en": "What is 'java.util.concurrent' package used for?",
    "question_hi": "'java.util.concurrent' पैकेज किस लिए उपयोग किया जाता है?",
    "options_en": ["Concurrent programming utilities", "Thread-safe collections", "Both A and B", "For concurrent files"],
    "options_hi": ["कनकरंट प्रोग्रामिंग यूटिलिटीज", "थ्रेड-सेफ कलेक्शन्स", "A और B दोनों", "कनकरंट फाइल्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 82
  },
  {
    "num": 83,
    "question_en": "What is the purpose of 'AtomicInteger'?",
    "question_hi": "'AtomicInteger' का उद्देश्य क्या है?",
    "options_en": ["Thread-safe integer operations", "Atomic operations without synchronization", "Both A and B", "For atomic bombs"],
    "options_hi": ["थ्रेड-सेफ इंटीजर ऑपरेशन्स", "सिंक्रोनाइज़ेशन के बिना एटॉमिक ऑपरेशन्स", "A और B दोनों", "एटॉमिक बमों के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 83
  },
  {
    "num": 84,
    "question_en": "What is 'ForkJoinPool'?",
    "question_hi": "'ForkJoinPool' क्या है?",
    "options_en": ["For divide-and-conquer tasks", "Work-stealing thread pool", "Both A and B", "For kitchen tasks"],
    "options_hi": ["डिवाइड-एंड-कॉन्कर टास्क्स के लिए", "वर्क-स्टीलिंग थ्रेड पूल", "A और B दोनों", "किचन टास्क्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 84
  },
  {
    "num": 85,
    "question_en": "What is 'Collectors' class in Java 8?",
    "question_hi": "Java 8 में 'Collectors' क्लास क्या है?",
    "options_en": ["Utility class for stream operations", "For collecting stream elements", "Both A and B", "For collecting items"],
    "options_hi": ["स्ट्रीम ऑपरेशन्स के लिए यूटिलिटी क्लास", "स्ट्रीम एलिमेंट्स को कलेक्ट करने के लिए", "A और B दोनों", "आइटम्स कलेक्ट करने के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 85
  },
  {
    "num": 86,
    "question_en": "What is 'Optional' class used for?",
    "question_hi": "'Optional' क्लास किस लिए उपयोग की जाती है?",
    "options_en": ["To avoid null checks", "To represent optional values", "Both A and B", "For optional parameters"],
    "options_hi": ["नल चेक्स से बचने के लिए", "ऑप्शनल वैल्यूज को रिप्रेजेंट करने के लिए", "A और B दोनों", "ऑप्शनल पैरामीटर्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 86
  },
  {
    "num": 87,
    "question_en": "What is the purpose of 'Comparator' interface?",
    "question_hi": "'Comparator' इंटरफेस का उद्देश्य क्या है?",
    "options_en": ["For custom object comparison", "To define sorting order", "Both A and B", "For comparing primitives"],
    "options_hi": ["कस्टम ऑब्जेक्ट कम्पेरिजन के लिए", "सॉर्टिंग ऑर्डर डिफाइन करने के लिए", "A और B दोनों", "प्रिमिटिव्स की तुलना के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 87
  },
  {
    "num": 88,
    "question_en": "What is 'method chaining'?",
    "question_hi": "'method chaining' क्या है?",
    "options_en": ["Calling multiple methods in a single statement", "Each method returns same object", "Both A and B", "Chaining different objects"],
    "options_hi": ["एक स्टेटमेंट में मल्टीपल मेथड्स को कॉल करना", "हर मेथड समान ऑब्जेक्ट रिटर्न करती है", "A और B दोनों", "अलग-अलग ऑब्जेक्ट्स को चेन करना"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 88
  },
  {
    "num": 89,
    "question_en": "What is 'covariant return type'?",
    "question_hi": "'covariant return type' क्या है?",
    "options_en": ["Overriding method can return subclass", "Introduced in Java 5", "Both A and B", "For covariance in math"],
    "options_hi": ["ओवरराइडिंग मेथड सबक्लास रिटर्न कर सकती है", "Java 5 में पेश किया गया", "A और B दोनों", "गणित में कोवेरिएंस के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 89
  },
  {
    "num": 90,
    "question_en": "What is the difference between 'Comparable' and 'Comparator'?",
    "question_hi": "'Comparable' और 'Comparator' में क्या अंतर है?",
    "options_en": ["Comparable defines natural ordering", "Comparator defines custom ordering", "Both A and B", "No difference"],
    "options_hi": ["Comparable नेचुरल ऑर्डरिंग डिफाइन करता है", "Comparator कस्टम ऑर्डरिंग डिफाइन करता है", "A और B दोनों", "कोई अंतर नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 90
  },
  {
    "num": 91,
    "question_en": "What is 'instanceof' operator used for?",
    "question_hi": "'instanceof' ऑपरेटर किस लिए उपयोग किया जाता है?",
    "options_en": ["To check object type", "For type casting safety", "Both A and B", "For instance creation"],
    "options_hi": ["ऑब्जेक्ट टाइप चेक करने के लिए", "टाइप कास्टिंग सेफ्टी के लिए", "A और B दोनों", "इंस्टेंस क्रिएशन के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 91
  },
  {
    "num": 92,
    "question_en": "What is 'dynamic method dispatch'?",
    "question_hi": "'dynamic method dispatch' क्या है?",
    "options_en": ["Runtime polymorphism", "Method call resolved at runtime", "Both A and B", "Dynamic loading"],
    "options_hi": ["रनटाइम पॉलीमॉर्फिज्म", "रनटाइम पर मेथड कॉल रिजॉल्व होती है", "A और B दोनों", "डायनामिक लोडिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 92
  },
  {
    "num": 93,
    "question_en": "What is 'anonymous inner class'?",
    "question_hi": "'anonymous inner class' क्या है?",
    "options_en": ["Class without name", "Defined and instantiated in one statement", "Both A and B", "For anonymous users"],
    "options_hi": ["बिना नाम की क्लास", "एक स्टेटमेंट में डिफाइन और इंस्टेंटिएटेड", "A और B दोनों", "अनॉनिमस यूजर्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 93
  },
  {
    "num": 94,
    "question_en": "What is 'local inner class'?",
    "question_hi": "'local inner class' क्या है?",
    "options_en": ["Class defined inside a method", "Only accessible within that method", "Both A and B", "For local variables"],
    "options_hi": ["मेथड के अंदर डिफाइन की गई क्लास", "केवल उसी मेथड के अंदर एक्सेसिबल", "A और B दोनों", "लोकल वेरिएबल्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 94
  },
  {
    "num": 95,
    "question_en": "What is 'static nested class'?",
    "question_hi": "'static nested class' क्या है?",
    "options_en": ["Static class inside another class", "Doesn't need outer class instance", "Both A and B", "Static methods only"],
    "options_hi": ["दूसरी क्लास के अंदर स्टेटिक क्लास", "आउटर क्लास इंस्टेंस की जरूरत नहीं", "A और B दोनों", "केवल स्टेटिक मेथड्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 95
  },
  {
    "num": 96,
    "question_en": "What is 'reflection' in Java?",
    "question_hi": "Java में 'reflection' क्या है?",
    "options_en": ["Examining class at runtime", "Dynamic class loading", "Both A and B", "For mirror images"],
    "options_hi": ["रनटाइम पर क्लास की जांच", "डायनामिक क्लास लोडिंग", "A और B दोनों", "मिरर इमेजेस के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 96
  },
  {
    "num": 97,
    "question_en": "What is 'annotation' in Java?",
    "question_hi": "Java में 'annotation' क्या है?",
    "options_en": ["Metadata about code", "Provides additional information", "Both A and B", "For comments"],
    "options_hi": ["कोड के बारे में मेटाडेटा", "अतिरिक्त जानकारी प्रदान करता है", "A और B दोनों", "कमेंट्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 97
  },
  {
    "num": 98,
    "question_en": "What is 'serialVersionUID'?",
    "question_hi": "'serialVersionUID' क्या है?",
    "options_en": ["Version control for serialization", "Ensures class compatibility", "Both A and B", "For serial numbers"],
    "options_hi": ["सीरियलाइज़ेशन के लिए वर्जन कंट्रोल", "क्लास कंपैटिबिलिटी सुनिश्चित करता है", "A और B दोनों", "सीरियल नंबर्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 98
  },
  {
    "num": 99,
    "question_en": "What is 'Java Modules' (Project Jigsaw)?",
    "question_hi": "'Java Modules' (Project Jigsaw) क्या है?",
    "options_en": ["Modular system in Java 9", "Better encapsulation", "Both A and B", "For jigsaw puzzles"],
    "options_hi": ["Java 9 में मॉड्यूलर सिस्टम", "बेहतर एनकैप्सुलेशन", "A और B दोनों", "जिगसॉ पज़ल्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 99
  },
  {
    "num": 100,
    "question_en": "What is 'Z Garbage Collector' (ZGC)?",
    "question_hi": "'Z Garbage Collector' (ZGC) क्या है?",
    "options_en": ["Low-latency garbage collector", "Scalable to large heaps", "Both A and B", "For Z-shaped memory"],
    "options_hi": ["लो-लेटेंसी गार्बेज कलेक्टर", "बड़े हीप्स के लिए स्केलेबल", "A और B दोनों", "Z-शेप्ड मेमोरी के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 100
  }
]

        // --------------------------- GLOBAL VARS -----------------------------
        let currentQuestion = 0;
        let language = "en";
        let timeLeft = 60 * 60;   // 60 minutes timer
        let timerInterval;
        let videoStream = null;

        // --------------------------- SHUFFLE QUESTIONS -------------------------
        function shuffleQuestions(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            shuffled.forEach((q, index) => {
                q.num = index + 1;
            });
            return shuffled;
        }

        // --------------------------- LOAD QUESTION ----------------------------
        function loadQuestion(index) {
            const q = questions[index];
            
            q.visited = true;
            
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

        // --------------------------- MARK FOR REVIEW -------------------------
        function markForReview(index) {
            questions[index].marked = !questions[index].marked;
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

            const savedTime = localStorage.getItem("quizTimeLeft");
            if (savedTime) {
                timeLeft = parseInt(savedTime);
            }

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

                if (timeLeft % 10 === 0) {
                    localStorage.setItem("quizTimeLeft", timeLeft);
                }

                timeLeft--;
            }, 1000);
        }

        // --------------------------- SUBMIT QUIZ ---------------------
        function submitQuiz() {
            // Clear any exit warnings
            if (exitTimeout) clearInterval(exitTimeout);
            document.getElementById('exitWarning').style.display = 'none';
            
            let confirmation = confirm("Are you sure you want to submit the test?");
            if (!confirmation) return;

            clearInterval(timerInterval);
            localStorage.removeItem("quizTimeLeft");

            const totalTimeSpent = (60 * 60) - timeLeft;
            const mins = Math.floor(totalTimeSpent / 60);
            const secs = totalTimeSpent % 60;

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
                    correct: language === "en" ? q.answer_en : q.answer_hi,
                    originalNum: q.originalNum
                });
            });

            localStorage.setItem("attempted", attempted);
            localStorage.setItem("notAttempted", notAttempted);
            localStorage.setItem("score", score);
            localStorage.setItem("results", JSON.stringify(results));
            localStorage.setItem("totalQuestions", questions.length);

            if (videoStream) {
                videoStream.getTracks().forEach(track => track.stop());
            }

            window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
        }

        // --------------------------- NAVIGATION ------------------------------
        function updateNavigation() {
            const nav = document.getElementById("circleContainer");
            nav.innerHTML = "";

            questions.forEach((q, i) => {
                let color = "gray";
                
                if (i === currentQuestion) {
                    color = "blue";
                } else if (q.marked) {
                    color = "orange";
                } else if (q.attempted) {
                    color = "green";
                } else if (q.visited) {
                    color = "#f0f0f0";
                } else {
                    color = "gray";
                }

                const circle = document.createElement("div");
                circle.className = "circle";
                circle.style.background = color;
                circle.style.cursor = "pointer";
                circle.style.width = "30px";
                circle.style.height = "30px";
                circle.style.borderRadius = "50%";
                circle.style.display = "inline-flex";
                circle.style.alignItems = "center";
                circle.style.justifyContent = "center";
                circle.style.margin = "5px";
                circle.style.color = "black";
                circle.style.fontWeight = "bold";
                circle.textContent = i + 1;
                
                circle.ondblclick = () => {
                    q.marked = !q.marked;
                    updateNavigation();
                };
                
                circle.onclick = () => jumpToQuestion(i);
                nav.appendChild(circle);
            });
        }

        function jumpToQuestion(i) {
            currentQuestion = i;
            loadQuestion(i);
        }

        // --------------------------- CAMERA ----------------------
        function startCamera() {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                console.warn("Camera not supported");
                return;
            }

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

            navigator.mediaDevices.getUserMedia({ 
                video: { 
                    facingMode: "user",
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                } 
            })
                .then(stream => {
                    video.srcObject = stream;
                    videoStream = stream;
                    window.videoStream = stream; // Make global for exit handling
                })
                .catch(err => {
                    console.error("Camera access error:", err);
                    container.remove();
                });
        }

        // --------------------------- PAGE LOAD --------------------------
        window.addEventListener('load', function () {
            // Shuffle questions
            questions = shuffleQuestions(questions);
            localStorage.setItem('shuffledQuestions', JSON.stringify(questions.map(q => q.originalNum)));
            
            // Load first question
            loadQuestion(currentQuestion);
            
            // Start timer
            startTimer();
            
            // Start camera with delay
            setTimeout(() => {
                startCamera();
            }, 1000);
        });

        // Clean up
        window.addEventListener('beforeunload', function() {
            if (videoStream) {
                videoStream.getTracks().forEach(track => track.stop());
            }
            if (exitTimeout) clearInterval(exitTimeout);
        });