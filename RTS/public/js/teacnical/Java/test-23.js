 
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
    "num": 1,
    "question_en": "Which of the following is not a Java keyword?",
    "question_hi": "निम्नलिखित में से कौन सा Java कीवर्ड नहीं है?",
    "options_en": ["main", "class", "public", "static"],
    "options_hi": ["मेन", "क्लास", "पब्लिक", "स्टेटिक"],
    "answer_en": "main",
    "answer_hi": "मेन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 1
  },
  {
    "num": 2,
    "question_en": "What is the default value of a boolean variable in Java?",
    "question_hi": "Java में boolean वेरिएबल का डिफ़ॉल्ट मान क्या है?",
    "options_en": ["true", "false", "null", "0"],
    "options_hi": ["ट्रू", "फॉल्स", "नल", "0"],
    "answer_en": "false",
    "answer_hi": "फॉल्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 2
  },
  {
    "num": 3,
    "question_en": "Which method is the entry point for Java applications?",
    "question_hi": "Java एप्लिकेशन के लिए एंट्री पॉइंट कौन सी मेथड है?",
    "options_en": ["start()", "init()", "main()", "run()"],
    "options_hi": ["स्टार्ट()", "इनिट()", "मेन()", "रन()"],
    "answer_en": "main()",
    "answer_hi": "मेन()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 3
  },
  {
    "num": 4,
    "question_en": "What does JVM stand for?",
    "question_hi": "JVM का पूरा नाम क्या है?",
    "options_en": ["Java Virtual Machine", "Java Variable Machine", "Java Verified Machine", "Java Visual Machine"],
    "options_hi": ["जावा वर्चुअल मशीन", "जावा वेरिएबल मशीन", "जावा वेरिफाइड मशीन", "जावा विजुअल मशीन"],
    "answer_en": "Java Virtual Machine",
    "answer_hi": "जावा वर्चुअल मशीन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 4
  },
  {
    "num": 5,
    "question_en": "Which of these is not a primitive data type in Java?",
    "question_hi": "निम्नलिखित में से कौन सा Java में प्रिमिटिव डेटा टाइप नहीं है?",
    "options_en": ["int", "String", "boolean", "float"],
    "options_hi": ["इंट", "स्ट्रिंग", "बूलियन", "फ्लोट"],
    "answer_en": "String",
    "answer_hi": "स्ट्रिंग",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 5
  },
  {
    "num": 6,
    "question_en": "Which keyword is used to create a class in Java?",
    "question_hi": "Java में क्लास बनाने के लिए किस कीवर्ड का उपयोग किया जाता है?",
    "options_en": ["class", "struct", "object", "new"],
    "options_hi": ["क्लास", "स्ट्रक्ट", "ऑब्जेक्ट", "न्यू"],
    "answer_en": "class",
    "answer_hi": "क्लास",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 6
  },
  {
    "num": 7,
    "question_en": "What is the size of int data type in Java?",
    "question_hi": "Java में int डेटा टाइप का साइज कितना होता है?",
    "options_en": ["2 bytes", "4 bytes", "8 bytes", "Depends on platform"],
    "options_hi": ["2 बाइट्स", "4 बाइट्स", "8 बाइट्स", "प्लेटफॉर्म पर निर्भर करता है"],
    "answer_en": "4 bytes",
    "answer_hi": "4 बाइट्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 7
  },
  {
    "num": 8,
    "question_en": "Which of these is used to create an object?",
    "question_hi": "ऑब्जेक्ट बनाने के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["new", "create", "allocate", "object"],
    "options_hi": ["न्यू", "क्रिएट", "एलोकेट", "ऑब्जेक्ट"],
    "answer_en": "new",
    "answer_hi": "न्यू",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 8
  },
  {
    "num": 9,
    "question_en": "Which method is used to compare two strings in Java?",
    "question_hi": "Java में दो स्ट्रिंग्स की तुलना करने के लिए किस मेथड का उपयोग किया जाता है?",
    "options_en": ["compare()", "equals()", "==", "same()"],
    "options_hi": ["कम्पेयर()", "इक्वल्स()", "==", "सेम()"],
    "answer_en": "equals()",
    "answer_hi": "इक्वल्स()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 9
  },
  {
    "num": 10,
    "question_en": "What does File.length() method return?",
    "question_hi": "File.length() मेथड क्या रिटर्न करता है?",
    "options_en": ["File size in bytes", "File name", "File path", "File count"],
    "options_hi": ["फाइल साइज बाइट्स में", "फाइल नाम", "फाइल पथ", "फाइल काउंट"],
    "answer_en": "File size in bytes",
    "answer_hi": "फाइल साइज बाइट्स में",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 10
  },
  {
    "num": 11,
    "question_en": "What is the parent class of all classes in Java?",
    "question_hi": "Java में सभी क्लासेज की पैरेंट क्लास कौन सी है?",
    "options_en": ["Object", "Main", "Class", "Super"],
    "options_hi": ["ऑब्जेक्ट", "मेन", "क्लास", "सुपर"],
    "answer_en": "Object",
    "answer_hi": "ऑब्जेक्ट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 11
  },
  {
    "num": 12,
    "question_en": "Which keyword is used for inheritance in Java?",
    "question_hi": "Java में इन्हेरिटेंस के लिए किस कीवर्ड का उपयोग किया जाता है?",
    "options_en": ["inherits", "extends", "implements", "super"],
    "options_hi": ["इनहेरिट्स", "एक्सटेंड्स", "इम्प्लीमेंट्स", "सुपर"],
    "answer_en": "extends",
    "answer_hi": "एक्सटेंड्स",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 12
  },
  {
    "num": 13,
    "question_en": "What is the return type of constructor?",
    "question_hi": "कंस्ट्रक्टर का रिटर्न टाइप क्या होता है?",
    "options_en": ["void", "int", "No return type", "Object"],
    "options_hi": ["वोइड", "इंट", "कोई रिटर्न टाइप नहीं", "ऑब्जेक्ट"],
    "answer_en": "No return type",
    "answer_hi": "कोई रिटर्न टाइप नहीं",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 13
  },
  {
    "num": 14,
    "question_en": "Which keyword is used to prevent method overriding?",
    "question_hi": "मेथड ओवरराइडिंग को रोकने के लिए किस कीवर्ड का उपयोग किया जाता है?",
    "options_en": ["static", "final", "private", "protected"],
    "options_hi": ["स्टेटिक", "फाइनल", "प्राइवेट", "प्रोटेक्टेड"],
    "answer_en": "final",
    "answer_hi": "फाइनल",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 14
  },
  {
    "num": 15,
    "question_en": "Which of these is used to access a member of superclass?",
    "question_hi": "सुपरक्लास के मेंबर को एक्सेस करने के लिए निम्नलिखित में से किसका उपयोग किया जाता है?",
    "options_en": ["this", "super", "extends", "parent"],
    "options_hi": ["दिस", "सुपर", "एक्सटेंड्स", "पेरेंट"],
    "answer_en": "super",
    "answer_hi": "सुपर",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 15
  },
  {
    "num": 16,
    "question_en": "What is an interface in Java?",
    "question_hi": "Java में इंटरफेस क्या है?",
    "options_en": ["A class with only abstract methods", "A blueprint of class", "A type of class", "All of the above"],
    "options_hi": ["केवल एब्स्ट्रैक्ट मेथड्स वाली क्लास", "क्लास का ब्लूप्रिंट", "एक प्रकार की क्लास", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 16
  },
  {
    "num": 17,
    "question_en": "Which package contains the Scanner class?",
    "question_hi": "स्कैनर क्लास किस पैकेज में होती है?",
    "options_en": ["java.util", "java.io", "java.lang", "java.scanner"],
    "options_hi": ["java.util", "java.io", "java.lang", "java.scanner"],
    "answer_en": "java.util",
    "answer_hi": "java.util",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 17
  },
  {
    "num": 18,
    "question_en": "What is method overloading?",
    "question_hi": "मेथड ओवरलोडिंग क्या है?",
    "options_en": ["Same method name with different parameters", "Different method name with same parameters", "Same method in different classes", "Changing return type only"],
    "options_hi": ["अलग-अलग पैरामीटर्स वाला समान मेथड नाम", "समान पैरामीटर्स वाला अलग मेथड नाम", "अलग-अलग क्लासेज में समान मेथड", "केवल रिटर्न टाइप बदलना"],
    "answer_en": "Same method name with different parameters",
    "answer_hi": "अलग-अलग पैरामीटर्स वाला समान मेथड नाम",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 18
  },
  {
    "num": 19,
    "question_en": "Which keyword is used to handle exceptions?",
    "question_hi": "एक्सेप्शन हैंडल करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
    "options_en": ["try-catch", "throw", "throws", "All of these"],
    "options_hi": ["ट्राई-कैच", "थ्रो", "थ्रोस", "उपरोक्त सभी"],
    "answer_en": "All of these",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 19
  },
  {
    "num": 20,
    "question_en": "What is a constructor?",
    "question_hi": "कंस्ट्रक्टर क्या है?",
    "options_en": ["A method with same name as class", "Used to initialize objects", "Called automatically when object is created", "All of the above"],
    "options_hi": ["क्लास के समान नाम वाली मेथड", "ऑब्जेक्ट्स को इनिशियलाइज़ करने के लिए उपयोग", "ऑब्जेक्ट बनाते समय ऑटोमेटिकली कॉल होती है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 20
  },
  {
    "num": 21,
    "question_en": "What is an array?",
    "question_hi": "ऐरे क्या है?",
    "options_en": ["Collection of similar data types", "Collection of objects", "A class in Java", "A data structure"],
    "options_hi": ["समान डेटा टाइप्स का कलेक्शन", "ऑब्जेक्ट्स का कलेक्शन", "Java में एक क्लास", "एक डेटा स्ट्रक्चर"],
    "answer_en": "Collection of similar data types",
    "answer_hi": "समान डेटा टाइप्स का कलेक्शन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 21
  },
  {
    "num": 22,
    "question_en": "What is encapsulation?",
    "question_hi": "एनकैप्सुलेशन क्या है?",
    "options_en": ["Binding data and methods together", "Hiding implementation details", "Wrapping data in a single unit", "All of the above"],
    "options_hi": ["डेटा और मेथड्स को एक साथ बाँधना", "इम्प्लीमेंटेशन डिटेल्स छिपाना", "डेटा को एक यूनिट में रैप करना", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 22
  },
  {
    "num": 23,
    "question_en": "What is polymorphism?",
    "question_hi": "पॉलीमॉर्फिज्म क्या है?",
    "options_en": ["One name many forms", "Ability to take many forms", "Both A and B", "None of the above"],
    "options_hi": ["एक नाम कई रूप", "कई रूप लेने की क्षमता", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 23
  },
  {
    "num": 24,
    "question_en": "Which loop is guaranteed to execute at least once?",
    "question_hi": "कौन सा लूप कम से कम एक बार एक्सेक्यूट होने की गारंटी देता है?",
    "options_en": ["for", "while", "do-while", "foreach"],
    "options_hi": ["फॉर", "व्हाइल", "डू-व्हाइल", "फोरइच"],
    "answer_en": "do-while",
    "answer_hi": "डू-व्हाइल",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 24
  },
  {
    "num": 25,
    "question_en": "What is the default value of an object reference?",
    "question_hi": "ऑब्जेक्ट रेफरेंस का डिफ़ॉल्ट मान क्या होता है?",
    "options_en": ["null", "0", "false", "undefined"],
    "options_hi": ["नल", "0", "फॉल्स", "अनडिफाइंड"],
    "answer_en": "null",
    "answer_hi": "नल",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 25
  },
  {
    "num": 26,
    "question_en": "Which method is used to read input from user?",
    "question_hi": "यूजर से इनपुट पढ़ने के लिए किस मेथड का उपयोग किया जाता है?",
    "options_en": ["System.out.println()", "Scanner.next()", "BufferedReader.readLine()", "Both B and C"],
    "options_hi": ["System.out.println()", "Scanner.next()", "BufferedReader.readLine()", "B और C दोनों"],
    "answer_en": "Both B and C",
    "answer_hi": "B और C दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 26
  },
  {
    "num": 27,
    "question_en": "What is a static method?",
    "question_hi": "स्टेटिक मेथड क्या है?",
    "options_en": ["Method that belongs to class, not object", "Can be called without creating object", "Both A and B", "None of the above"],
    "options_hi": ["ऐसी मेथड जो क्लास की होती है, ऑब्जेक्ट की नहीं", "बिना ऑब्जेक्ट बनाए कॉल की जा सकती है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 27
  },
  {
    "num": 28,
    "question_en": "What is the purpose of garbage collection in Java?",
    "question_hi": "Java में गार्बेज कलेक्शन का उद्देश्य क्या है?",
    "options_en": ["Memory management", "File management", "Network management", "Database management"],
    "options_hi": ["मेमोरी मैनेजमेंट", "फाइल मैनेजमेंट", "नेटवर्क मैनेजमेंट", "डेटाबेस मैनेजमेंट"],
    "answer_en": "Memory management",
    "answer_hi": "मेमोरी मैनेजमेंट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 28
  },
  {
    "num": 29,
    "question_en": "Which keyword is used to define a constant?",
    "question_hi": "कॉन्स्टेंट डिफाइन करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
    "options_en": ["const", "final", "static", "constant"],
    "options_hi": ["कॉन्स्ट", "फाइनल", "स्टेटिक", "कॉन्स्टेंट"],
    "answer_en": "final",
    "answer_hi": "फाइनल",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 29
  },
  {
    "num": 30,
    "question_en": "What is an abstract class?",
    "question_hi": "एब्स्ट्रैक्ट क्लास क्या है?",
    "options_en": ["Class that cannot be instantiated", "Class with at least one abstract method", "Both A and B", "None of the above"],
    "options_hi": ["ऐसी क्लास जिसका ऑब्जेक्ट नहीं बनाया जा सकता", "कम से कम एक एब्स्ट्रैक्ट मेथड वाली क्लास", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 30
  },
  {
    "num": 31,
    "question_en": "What is the use of 'this' keyword?",
    "question_hi": "'this' कीवर्ड का उपयोग क्या है?",
    "options_en": ["Refers to current object", "Refers to current class", "Both A and B", "None of the above"],
    "options_hi": ["करंट ऑब्जेक्ट को रेफर करता है", "करंट क्लास को रेफर करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 31
  },
  {
    "num": 32,
    "question_en": "What is method overriding?",
    "question_hi": "मेथड ओवरराइडिंग क्या है?",
    "options_en": ["Same method in parent and child class", "Different implementation in child class", "Both A and B", "None of the above"],
    "options_hi": ["पैरेंट और चाइल्ड क्लास में समान मेथड", "चाइल्ड क्लास में अलग इम्प्लीमेंटेशन", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 32
  },
  {
    "num": 33,
    "question_en": "What is a package in Java?",
    "question_hi": "Java में पैकेज क्या है?",
    "options_en": ["Collection of classes", "Namespace for organizing classes", "Both A and B", "None of the above"],
    "options_hi": ["क्लासेज का कलेक्शन", "क्लासेज को ऑर्गनाइज़ करने के लिए नेमस्पेस", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 33
  },
  {
    "num": 34,
    "question_en": "Which access modifier provides the widest accessibility?",
    "question_hi": "कौन सा एक्सेस मॉडिफायर सबसे ज्यादा एक्सेसिबिलिटी प्रदान करता है?",
    "options_en": ["private", "protected", "public", "default"],
    "options_hi": ["प्राइवेट", "प्रोटेक्टेड", "पब्लिक", "डिफॉल्ट"],
    "answer_en": "public",
    "answer_hi": "पब्लिक",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 34
  },
  {
    "num": 35,
    "question_en": "What is the purpose of finally block?",
    "question_hi": "फाइनली ब्लॉक का उद्देश्य क्या है?",
    "options_en": ["Always executes", "Cleanup code", "Both A and B", "None of the above"],
    "options_hi": ["हमेशा एक्सेक्यूट होता है", "क्लीनअप कोड", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 35
  },
  {
    "num": 36,
    "question_en": "What is a thread?",
    "question_hi": "थ्रेड क्या है?",
    "options_en": ["Lightweight process", "Independent path of execution", "Both A and B", "None of the above"],
    "options_hi": ["लाइटवेट प्रोसेस", "एग्जीक्यूशन का इंडिपेंडेंट पाथ", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 36
  },
  {
    "num": 37,
    "question_en": "Which method is used to start a thread?",
    "question_hi": "थ्रेड स्टार्ट करने के लिए किस मेथड का उपयोग किया जाता है?",
    "options_en": ["run()", "start()", "execute()", "begin()"],
    "options_hi": ["रन()", "स्टार्ट()", "एग्जीक्यूट()", "बिगिन()"],
    "answer_en": "start()",
    "answer_hi": "स्टार्ट()",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 37
  },
  {
    "num": 38,
    "question_en": "What is synchronization?",
    "question_hi": "सिंक्रोनाइज़ेशन क्या है?",
    "options_en": ["Controlling access to shared resources", "Preventing thread interference", "Both A and B", "None of the above"],
    "options_hi": ["शेयर्ड रिसोर्सेस तक एक्सेस कंट्रोल करना", "थ्रेड इंटरफेरेंस रोकना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 38
  },
  {
    "num": 39,
    "question_en": "What is JDBC?",
    "question_hi": "JDBC क्या है?",
    "options_en": ["Java Database Connectivity", "Java Data Binding Class", "Java Driver Base Class", "None of the above"],
    "options_hi": ["जावा डेटाबेस कनेक्टिविटी", "जावा डेटा बाइंडिंग क्लास", "जावा ड्राइवर बेस क्लास", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Java Database Connectivity",
    "answer_hi": "जावा डेटाबेस कनेक्टिविटी",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 39
  },
  {
    "num": 40,
    "question_en": "What is a collection in Java?",
    "question_hi": "Java में कलेक्शन क्या है?",
    "options_en": ["Framework for storing and manipulating groups of objects", "Single object container", "Array alternative", "All of the above"],
    "options_hi": ["ऑब्जेक्ट्स के ग्रुप स्टोर और मैनिपुलेट करने का फ्रेमवर्क", "सिंगल ऑब्जेक्ट कंटेनर", "ऐरे का विकल्प", "उपरोक्त सभी"],
    "answer_en": "Framework for storing and manipulating groups of objects",
    "answer_hi": "ऑब्जेक्ट्स के ग्रुप स्टोर और मैनिपुलेट करने का फ्रेमवर्क",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 40
  },
  {
    "num": 41,
    "question_en": "What is ArrayList?",
    "question_hi": "ArrayList क्या है?",
    "options_en": ["Resizable array", "Implements List interface", "Both A and B", "None of the above"],
    "options_hi": ["रीसाइज़ेबल ऐरे", "लिस्ट इंटरफेस को इम्प्लीमेंट करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 41
  },
  {
    "num": 42,
    "question_en": "What is HashMap?",
    "question_hi": "HashMap क्या है?",
    "options_en": ["Key-value pairs", "Implements Map interface", "Both A and B", "None of the above"],
    "options_hi": ["की-वैल्यू पेयर्स", "मैप इंटरफेस को इम्प्लीमेंट करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 42
  },
  {
    "num": 43,
    "question_en": "What is the purpose of toString() method?",
    "question_hi": "toString() मेथड का उद्देश्य क्या है?",
    "options_en": ["Returns string representation of object", "Converts object to string", "Both A and B", "None of the above"],
    "options_hi": ["ऑब्जेक्ट का स्ट्रिंग रिप्रेजेंटेशन रिटर्न करता है", "ऑब्जेक्ट को स्ट्रिंग में कन्वर्ट करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 43
  },
  {
    "num": 44,
    "question_en": "What is autoboxing?",
    "question_hi": "ऑटोबॉक्सिंग क्या है?",
    "options_en": ["Automatic conversion from primitive to wrapper", "Automatic conversion from wrapper to primitive", "Both A and B", "None of the above"],
    "options_hi": ["प्रिमिटिव से रैपर में ऑटोमेटिक कन्वर्जन", "रैपर से प्रिमिटिव में ऑटोमेटिक कन्वर्जन", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Automatic conversion from primitive to wrapper",
    "answer_hi": "प्रिमिटिव से रैपर में ऑटोमेटिक कन्वर्जन",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 44
  },
  {
    "num": 45,
    "question_en": "What is JRE?",
    "question_hi": "JRE क्या है?",
    "options_en": ["Java Runtime Environment", "Java Runtime Engine", "Java Run Engine", "Java Runtime Extension"],
    "options_hi": ["जावा रनटाइम एन्वायरनमेंट", "जावा रनटाइम इंजन", "जावा रन इंजन", "जावा रनटाइम एक्सटेंशन"],
    "answer_en": "Java Runtime Environment",
    "answer_hi": "जावा रनटाइम एन्वायरनमेंट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 45
  },
  {
    "num": 46,
    "question_en": "What is JDK?",
    "question_hi": "JDK क्या है?",
    "options_en": ["Java Development Kit", "Java Deployment Kit", "Java Design Kit", "Java Debugging Kit"],
    "options_hi": ["जावा डेवलपमेंट किट", "जावा डिप्लॉयमेंट किट", "जावा डिजाइन किट", "जावा डिबगिंग किट"],
    "answer_en": "Java Development Kit",
    "answer_hi": "जावा डेवलपमेंट किट",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 46
  },
  {
    "num": 47,
    "question_en": "What is a lambda expression?",
    "question_hi": "लैम्बडा एक्सप्रेशन क्या है?",
    "options_en": ["Anonymous function", "Short block of code", "Both A and B", "None of the above"],
    "options_hi": ["अनॉनिमस फंक्शन", "कोड का शॉर्ट ब्लॉक", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 47
  },
  {
    "num": 48,
    "question_en": "What is a stream in Java 8?",
    "question_hi": "Java 8 में स्ट्रीम क्या है?",
    "options_en": ["Sequence of elements", "Supports functional-style operations", "Both A and B", "None of the above"],
    "options_hi": ["एलिमेंट्स का सीक्वेंस", "फंक्शनल-स्टाइल ऑपरेशन्स सपोर्ट करता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 48
  },
  {
    "num": 49,
    "question_en": "What is the purpose of Optional class?",
    "question_hi": "ऑप्शनल क्लास का उद्देश्य क्या है?",
    "options_en": ["To avoid null pointer exceptions", "To represent optional values", "Both A and B", "None of the above"],
    "options_hi": ["नल पॉइंटर एक्सेप्शन से बचने के लिए", "ऑप्शनल वैल्यूज को रिप्रेजेंट करने के लिए", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 49
  },
  {
    "num": 50,
    "question_en": "What is the difference between == and .equals()?",
    "question_hi": "== और .equals() में क्या अंतर है?",
    "options_en": ["== compares references, .equals() compares content", "== compares content, .equals() compares references", "Both are same", "None of the above"],
    "options_hi": ["== रेफरेंस की तुलना करता है, .equals() कंटेंट की तुलना करता है", "== कंटेंट की तुलना करता है, .equals() रेफरेंस की तुलना करता है", "दोनों समान हैं", "उपरोक्त में से कोई नहीं"],
    "answer_en": "== compares references, .equals() compares content",
    "answer_hi": "== रेफरेंस की तुलना करता है, .equals() कंटेंट की तुलना करता है",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 50
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