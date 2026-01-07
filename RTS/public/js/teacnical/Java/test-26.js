 
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
    "num": 151,
    "question_en": "What is 'module-info.java' file in Java 9?",
    "question_hi": "Java 9 में 'module-info.java' फाइल क्या है?",
    "options_en": ["Module declaration file", "Defines module dependencies", "Both A and B", "Regular Java file"],
    "options_hi": ["मॉड्यूल डिक्लेरेशन फाइल", "मॉड्यूल डिपेंडेंसीज डिफाइन करती है", "A और B दोनों", "रेगुलर Java फाइल"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 151
  },
  {
    "num": 152,
    "question_en": "What is 'requires' directive in Java modules?",
    "question_hi": "Java modules में 'requires' डायरेक्टिव क्या है?",
    "options_en": ["Specifies module dependency", "Makes module available", "Both A and B", "For optional requirements"],
    "options_hi": ["मॉड्यूल डिपेंडेंसी स्पेसिफाई करता है", "मॉड्यूल को उपलब्ध कराता है", "A और B दोनों", "ऑप्शनल रिक्वायरमेंट्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 152
  },
  {
    "num": 153,
    "question_en": "What is 'exports' directive in Java modules?",
    "question_hi": "Java modules में 'exports' डायरेक्टिव क्या है?",
    "options_en": ["Makes package available to other modules", "Controls package visibility", "Both A and B", "Hides packages"],
    "options_hi": ["पैकेज को अन्य मॉड्यूल्स के लिए उपलब्ध कराता है", "पैकेज विजिबिलिटी कंट्रोल करता है", "A और B दोनों", "पैकेज्स को हाइड करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 153
  },
  {
    "num": 154,
    "question_en": "What is 'jlink' tool in Java 9?",
    "question_hi": "Java 9 में 'jlink' टूल क्या है?",
    "options_en": ["Creates custom runtime images", "Includes only required modules", "Both A and B", "For linking libraries"],
    "options_hi": ["कस्टम रनटाइम इमेजेस बनाता है", "केवल रिक्वायर्ड मॉड्यूल्स इन्क्लूड करता है", "A और B दोनों", "लाइब्रेरीज लिंक करने के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 154
  },
  {
    "num": 155,
    "question_en": "What is 'jshell' in Java 9?",
    "question_hi": "Java 9 में 'jshell' क्या है?",
    "options_en": ["REPL tool for Java", "Interactive coding environment", "Both A and B", "JavaScript shell"],
    "options_hi": ["Java के लिए REPL टूल", "इंटरएक्टिव कोडिंग एन्वायरनमेंट", "A और B दोनों", "JavaScript शेल"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 155
  },
  {
    "num": 156,
    "question_en": "What is 'private methods in interfaces' introduced in Java 9?",
    "question_hi": "Java 9 में पेश किए गए 'इंटरफेस में प्राइवेट मेथड्स' क्या हैं?",
    "options_en": ["Helper methods in interfaces", "Reduce code duplication in default methods", "Both A and B", "Public methods"],
    "options_hi": ["इंटरफेस में हेल्पर मेथड्स", "डिफ़ॉल्ट मेथड्स में कोड डुप्लिकेशन कम करते हैं", "A और B दोनों", "पब्लिक मेथड्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 156
  },
  {
    "num": 157,
    "question_en": "What is 'immutable collections' introduced in Java 9?",
    "question_hi": "Java 9 में पेश किए गए 'इम्यूटेबल कलेक्शन्स' क्या हैं?",
    "options_en": ["List.of(), Set.of(), Map.of()", "Guaranteed immutable collections", "Both A and B", "Mutable collections"],
    "options_hi": ["List.of(), Set.of(), Map.of()", "गारंटीड इम्यूटेबल कलेक्शन्स", "A और B दोनों", "म्यूटेबल कलेक्शन्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 157
  },
  {
    "num": 158,
    "question_en": "What is 'HTTP/2 Client' in Java 11?",
    "question_hi": "Java 11 में 'HTTP/2 क्लाइंट' क्या है?",
    "options_en": ["New HTTP client API", "Supports HTTP/2 and WebSocket", "Both A and B", "Old HTTP client"],
    "options_hi": ["नया HTTP क्लाइंट API", "HTTP/2 और WebSocket को सपोर्ट करता है", "A और B दोनों", "पुराना HTTP क्लाइंट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 158
  },
  {
    "num": 159,
    "question_en": "What is 'local variable syntax for lambda parameters' in Java 11?",
    "question_hi": "Java 11 में 'लैम्बडा पैरामीटर्स के लिए लोकल वेरिएबल सिंटैक्स' क्या है?",
    "options_en": ["var can be used in lambda parameters", "Type inference for lambda", "Both A and B", "Only explicit types"],
    "options_hi": ["लैम्बडा पैरामीटर्स में var का उपयोग किया जा सकता है", "लैम्बडा के लिए टाइप इन्फेरेंस", "A और B दोनों", "केवल एक्सप्लिसिट टाइप्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 159
  },
  {
    "num": 160,
    "question_en": "What is 'switch expressions' introduced in Java 14?",
    "question_hi": "Java 14 में पेश किए गए 'स्विच एक्सप्रेशन्स' क्या हैं?",
    "options_en": ["Switch can return value", "Arrow syntax (->) introduced", "Both A and B", "Traditional switch"],
    "options_hi": ["स्विच वैल्यू रिटर्न कर सकता है", "एरो सिंटैक्स (->) पेश किया गया", "A और B दोनों", "ट्रेडिशनल स्विच"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 160
  },
  {
    "num": 161,
    "question_en": "What is 'text blocks' introduced in Java 15?",
    "question_hi": "Java 15 में पेश किए गए 'टेक्स्ट ब्लॉक्स' क्या हैं?",
    "options_en": ["Multi-line string literals", "Triple-quote syntax (\"\"\")", "Both A and B", "Single line strings"],
    "options_hi": ["मल्टी-लाइन स्ट्रिंग लिटरल्स", "ट्रिपल-कोट सिंटैक्स (\"\"\")", "A और B दोनों", "सिंगल लाइन स्ट्रिंग्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 161
  },
  {
    "num": 162,
    "question_en": "What is 'pattern matching for instanceof' introduced in Java 16?",
    "question_hi": "Java 16 में पेश किए गए 'instanceof के लिए पैटर्न मैचिंग' क्या है?",
    "options_en": ["Simplifies type checking and casting", "Variable declared in instanceof", "Both A and B", "Traditional instanceof"],
    "options_hi": ["टाइप चेकिंग और कास्टिंग सरल करता है", "instanceof में वेरिएबल डिक्लेयर किया जाता है", "A और B दोनों", "ट्रेडिशनल instanceof"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 162
  },
  {
    "num": 163,
    "question_en": "What is 'sealed classes' introduced in Java 17?",
    "question_hi": "Java 17 में पेश किए गए 'सील्ड क्लासेज' क्या हैं?",
    "options_en": ["Restricts which classes can extend", "permits keyword", "Both A and B", "Open classes"],
    "options_hi": ["सीमित करता है कि कौन सी क्लासेज एक्सटेंड कर सकती हैं", "permits कीवर्ड", "A और B दोनों", "ओपन क्लासेज"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 163
  },
  {
    "num": 164,
    "question_en": "What is 'foreign function & memory API' introduced in Java 19?",
    "question_hi": "Java 19 में पेश किए गए 'फॉरेन फंक्शन & मेमोरी API' क्या है?",
    "options_en": ["Interact with native code and memory", "Project Panama feature", "Both A and B", "For foreign exchange"],
    "options_hi": ["नेटिव कोड और मेमोरी के साथ इंटरैक्ट करता है", "प्रोजेक्ट पनामा फीचर", "A और B दोनों", "फॉरेन एक्सचेंज के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 164
  },
  {
    "num": 165,
    "question_en": "What is 'virtual threads' introduced in Java 21?",
    "question_hi": "Java 21 में पेश किए गए 'वर्चुअल थ्रेड्स' क्या हैं?",
    "options_en": ["Lightweight threads managed by JVM", "Project Loom feature", "Both A and B", "Platform threads"],
    "options_hi": ["JVM द्वारा मैनेज की गई लाइटवेट थ्रेड्स", "प्रोजेक्ट लूम फीचर", "A और B दोनों", "प्लेटफॉर्म थ्रेड्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 165
  },
  {
    "num": 166,
    "question_en": "What is 'pattern matching for switch' introduced in Java 21?",
    "question_hi": "Java 21 में पेश किए गए 'स्विच के लिए पैटर्न मैचिंग' क्या है?",
    "options_en": ["Pattern matching in switch statements", "Type patterns, record patterns", "Both A and B", "Traditional switch"],
    "options_hi": ["स्विच स्टेटमेंट्स में पैटर्न मैचिंग", "टाइप पैटर्न्स, रिकॉर्ड पैटर्न्स", "A और B दोनों", "ट्रेडिशनल स्विच"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 166
  },
  {
    "num": 167,
    "question_en": "What is 'record patterns' introduced in Java 21?",
    "question_hi": "Java 21 में पेश किए गए 'रिकॉर्ड पैटर्न्स' क्या हैं?",
    "options_en": ["Deconstruct record values", "Pattern matching for records", "Both A and B", "For audio records"],
    "options_hi": ["रिकॉर्ड वैल्यूज को डिकंस्ट्रक्ट करता है", "रिकॉर्ड्स के लिए पैटर्न मैचिंग", "A और B दोनों", "ऑडियो रिकॉर्ड्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 167
  },
  {
    "num": 168,
    "question_en": "What is 'string templates' introduced in Java 21?",
    "question_hi": "Java 21 में पेश किए गए 'स्ट्रिंग टेम्प्लेट्स' क्या हैं?",
    "options_en": ["Template expressions for strings", "STR processor", "Both A and B", "String concatenation"],
    "options_hi": ["स्ट्रिंग्स के लिए टेम्प्लेट एक्सप्रेशन्स", "STR प्रोसेसर", "A और B दोनों", "स्ट्रिंग कंकैटिनेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 168
  },
  {
    "num": 169,
    "question_en": "What is 'scoped values' introduced in Java 21?",
    "question_hi": "Java 21 में पेश किए गए 'स्कोप्ड वैल्यूज' क्या हैं?",
    "options_en": ["Immutable data sharing within threads", "Alternative to ThreadLocal", "Both A and B", "Mutable shared data"],
    "options_hi": ["थ्रेड्स के भीतर इम्यूटेबल डेटा शेयरिंग", "ThreadLocal का विकल्प", "A और B दोनों", "म्यूटेबल शेयर्ड डेटा"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 169
  },
  {
    "num": 170,
    "question_en": "What is 'structured concurrency' introduced in Java 21?",
    "question_hi": "Java 21 में पेश किए गए 'स्ट्रक्चर्ड कनकरेंसी' क्या है?",
    "options_en": ["StructuredTaskScope API", "Treats related tasks as single unit", "Both A and B", "Unstructured concurrency"],
    "options_hi": ["StructuredTaskScope API", "संबंधित टास्क्स को सिंगल यूनिट के रूप में ट्रीट करता है", "A और B दोनों", "अनस्ट्रक्चर्ड कनकरेंसी"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 170
  },
  {
    "num": 171,
    "question_en": "What is 'Project Valhalla'?",
    "question_hi": "'प्रोजेक्ट वल्हाला' क्या है?",
    "options_en": ["Value objects and generic specialization", "Improves performance", "Both A and B", "For Norse mythology"],
    "options_hi": ["वैल्यू ऑब्जेक्ट्स और जेनेरिक स्पेशलाइज़ेशन", "परफॉर्मेंस इम्प्रूव करता है", "A और B दोनों", "नॉर्स माइथोलॉजी के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 171
  },
  {
    "num": 172,
    "question_en": "What is 'Project Leyden'?",
    "question_hi": "'प्रोजेक्ट लेडेन' क्या है?",
    "options_en": ["Static images and improved startup", "AOT compilation", "Both A and B", "For improving density"],
    "options_hi": ["स्टेटिक इमेजेस और इम्प्रूव्ड स्टार्टअप", "AOT कंपाइलेशन", "A और B दोनों", "डेंसिटी इम्प्रूव करने के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 172
  },
  {
    "num": 173,
    "question_en": "What is 'Project Amber'?",
    "question_hi": "'प्रोजेक्ट एम्बर' क्या है?",
    "options_en": ["Language productivity features", "Records, pattern matching, etc.", "Both A and B", "For amber preservation"],
    "options_hi": ["लैंग्वेज प्रोडक्टिविटी फीचर्स", "रिकॉर्ड्स, पैटर्न मैचिंग, आदि", "A और B दोनों", "एम्बर प्रिजर्वेशन के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 173
  },
  {
    "num": 174,
    "question_en": "What is 'Project Panama'?",
    "question_hi": "'प्रोजेक्ट पनामा' क्या है?",
    "options_en": ["Interconnect JVM and native code", "Foreign function interface", "Both A and B", "For Panama canal"],
    "options_hi": ["JVM और नेटिव कोड को इंटरकनेक्ट करता है", "फॉरेन फंक्शन इंटरफेस", "A और B दोनों", "पनामा नहर के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 174
  },
  {
    "num": 175,
    "question_en": "What is 'Project Loom'?",
    "question_hi": "'प्रोजेक्ट लूम' क्या है?",
    "options_en": ["Virtual threads and structured concurrency", "Improves thread scalability", "Both A and B", "For weaving"],
    "options_hi": ["वर्चुअल थ्रेड्स और स्ट्रक्चर्ड कनकरेंसी", "थ्रेड स्केलेबिलिटी इम्प्रूव करता है", "A और B दोनों", "वीविंग के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 175
  },
  {
    "num": 176,
    "question_en": "What is 'GraalVM'?",
    "question_hi": "'GraalVM' क्या है?",
    "options_en": ["High-performance JDK distribution", "AOT compilation, polyglot", "Both A and B", "Regular JVM"],
    "options_hi": ["हाई-परफॉर्मेंस JDK डिस्ट्रीब्यूशन", "AOT कंपाइलेशन, पॉलीग्लॉट", "A और B दोनों", "रेगुलर JVM"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 176
  },
  {
    "num": 177,
    "question_en": "What is 'Java Mission Control' (JMC)?",
    "question_hi": "'Java Mission Control' (JMC) क्या है?",
    "options_en": ["Monitoring and diagnostics tool", "Flight recorder analyzer", "Both A and B", "For space missions"],
    "options_hi": ["मॉनिटरिंग और डायग्नोस्टिक्स टूल", "फ्लाइट रिकॉर्डर एनालाइज़र", "A और B दोनों", "स्पेस मिशन्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 177
  },
  {
    "num": 178,
    "question_en": "What is 'Java VisualVM'?",
    "question_hi": "'Java VisualVM' क्या है?",
    "options_en": ["Visual tool for JVM monitoring", "Profiling, heap dump analysis", "Both A and B", "For visual programming"],
    "options_hi": ["JVM मॉनिटरिंग के लिए विजुअल टूल", "प्रोफाइलिंग, हीप डंप एनालिसिस", "A और B दोनों", "विजुअल प्रोग्रामिंग के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 178
  },
  {
    "num": 179,
    "question_en": "What is 'JFR' (Java Flight Recorder)?",
    "question_hi": "'JFR' (Java Flight Recorder) क्या है?",
    "options_en": ["Low-overhead event recorder", "For performance analysis", "Both A and B", "For recording flights"],
    "options_hi": ["लो-ओवरहेड इवेंट रिकॉर्डर", "परफॉर्मेंस एनालिसिस के लिए", "A और B दोनों", "फ्लाइट्स रिकॉर्ड करने के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 179
  },
  {
    "num": 180,
    "question_en": "What is 'JMX' (Java Management Extensions)?",
    "question_hi": "'JMX' (Java Management Extensions) क्या है?",
    "options_en": ["Manages and monitors applications", "MBeans, connectors", "Both A and B", "For XML management"],
    "options_hi": ["एप्लीकेशन्स को मैनेज और मॉनिटर करता है", "MBeans, कनेक्टर्स", "A और B दोनों", "XML मैनेजमेंट के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 180
  },
  {
    "num": 181,
    "question_en": "What is 'JNI' (Java Native Interface)?",
    "question_hi": "'JNI' (Java Native Interface) क्या है?",
    "options_en": ["Interface for native code", "Call C/C++ from Java", "Both A and B", "For Java interfaces"],
    "options_hi": ["नेटिव कोड के लिए इंटरफेस", "Java से C/C++ कॉल करना", "A और B दोनों", "Java इंटरफेस के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 181
  },
  {
    "num": 182,
    "question_en": "What is 'JNA' (Java Native Access)?",
    "question_hi": "'JNA' (Java Native Access) क्या है?",
    "options_en": ["Simpler alternative to JNI", "No native code needed", "Both A and B", "Same as JNI"],
    "options_hi": ["JNI का सरल विकल्प", "कोई नेटिव कोड की जरूरत नहीं", "A और B दोनों", "JNI के समान"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 182
  },
  {
    "num": 183,
    "question_en": "What is 'JVM TI' (JVM Tool Interface)?",
    "question_hi": "'JVM TI' (JVM Tool Interface) क्या है?",
    "options_en": ["Native programming interface", "For tools and profilers", "Both A and B", "For Java tools"],
    "options_hi": ["नेटिव प्रोग्रामिंग इंटरफेस", "टूल्स और प्रोफाइलर्स के लिए", "A और B दोनों", "Java टूल्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 183
  },
  {
    "num": 184,
    "question_en": "What is 'ASM' framework?",
    "question_hi": "'ASM' फ्रेमवर्क क्या है?",
    "options_en": ["Java bytecode manipulation framework", "For code generation, transformation", "Both A and B", "For assembly language"],
    "options_hi": ["Java बाइटकोड मैनिपुलेशन फ्रेमवर्क", "कोड जेनरेशन, ट्रांसफॉर्मेशन के लिए", "A और B दोनों", "असेम्बली लैंग्वेज के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 184
  },
  {
    "num": 185,
    "question_en": "What is 'Byte Buddy'?",
    "question_hi": "'Byte Buddy' क्या है?",
    "options_en": ["Runtime code generation library", "Simpler than ASM", "Both A and B", "For buddy systems"],
    "options_hi": ["रनटाइम कोड जेनरेशन लाइब्रेरी", "ASM से सरल", "A और B दोनों", "बडी सिस्टम्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 185
  },
  {
    "num": 186,
    "question_en": "What is 'Java Agents'?",
    "question_hi": "'Java Agents' क्या है?",
    "options_en": ["Modify bytecode at runtime", "Instrumentation API", "Both A and B", "For secret agents"],
    "options_hi": ["रनटाइम पर बाइटकोड मॉडिफाई करता है", "इंस्ट्रुमेंटेशन API", "A और B दोनों", "सीक्रेट एजेंट्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 186
  },
  {
    "num": 187,
    "question_en": "What is 'javac' compiler?",
    "question_hi": "'javac' कंपाइलर क्या है?",
    "options_en": ["Java compiler", "Converts .java to .class", "Both A and B", "Java interpreter"],
    "options_hi": ["Java कंपाइलर", ".java को .class में कन्वर्ट करता है", "A और B दोनों", "Java इंटरप्रेटर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 187
  },
  {
    "num": 188,
    "question_en": "What is 'javap' tool?",
    "question_hi": "'javap' टूल क्या है?",
    "options_en": ["Class file disassembler", "Shows bytecode, methods, fields", "Both A and B", "Java packager"],
    "options_hi": ["क्लास फाइल डिसअसेम्बलर", "बाइटकोड, मेथड्स, फील्ड्स दिखाता है", "A और B दोनों", "Java पैकेजर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 188
  },
  {
    "num": 189,
    "question_en": "What is 'jdb' debugger?",
    "question_hi": "'jdb' डीबगर क्या है?",
    "options_en": ["Java debugger", "Command-line debugger", "Both A and B", "Java database"],
    "options_hi": ["Java डीबगर", "कमांड-लाइन डीबगर", "A और B दोनों", "Java डेटाबेस"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 189
  },
  {
    "num": 190,
    "question_en": "What is 'jmod' tool?",
    "question_hi": "'jmod' टूल क्या है?",
    "options_en": ["Creates JMOD files", "Java 9 module packaging", "Both A and B", "For JAR files"],
    "options_hi": ["JMOD फाइल्स बनाता है", "Java 9 मॉड्यूल पैकेजिंग", "A और B दोनों", "JAR फाइल्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 190
  },
  {
    "num": 191,
    "question_en": "What is 'jpackage' tool?",
    "question_hi": "'jpackage' टूल क्या है?",
    "options_en": ["Creates native installers", "Java 14 packaging tool", "Both A and B", "For packaging only"],
    "options_hi": ["नेटिव इंस्टॉलर्स बनाता है", "Java 14 पैकेजिंग टूल", "A और B दोनों", "केवल पैकेजिंग के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 191
  },
  {
    "num": 192,
    "question_en": "What is 'jdeprscan' tool?",
    "question_hi": "'jdeprscan' टूल क्या है?",
    "options_en": ["Scans for deprecated API usage", "Java 9 tool", "Both A and B", "For dependency scanning"],
    "options_hi": ["डिप्रिकेटेड API यूसेज के लिए स्कैन करता है", "Java 9 टूल", "A और B दोनों", "डिपेंडेंसी स्कैनिंग के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 192
  },
  {
    "num": 193,
    "question_en": "What is 'jhsdb' tool?",
    "question_hi": "'jhsdb' टूल क्या है?",
    "options_en": ["HotSpot Debugger", "Post-mortem analysis", "Both A and B", "For database debugging"],
    "options_hi": ["हॉटस्पॉट डीबगर", "पोस्ट-मॉर्टम एनालिसिस", "A और B दोनों", "डेटाबेस डिबगिंग के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 193
  },
  {
    "num": 194,
    "question_en": "What is 'Java EE' vs 'Jakarta EE'?",
    "question_hi": "'Java EE' और 'Jakarta EE' में क्या अंतर है?",
    "options_en": ["Java EE renamed to Jakarta EE", "Now managed by Eclipse Foundation", "Both A and B", "Same thing"],
    "options_hi": ["Java EE का नाम बदलकर Jakarta EE कर दिया गया", "अब Eclipse Foundation द्वारा मैनेज किया जाता है", "A और B दोनों", "एक ही चीज़"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 194
  },
  {
    "num": 195,
    "question_en": "What is 'MicroProfile'?",
    "question_hi": "'MicroProfile' क्या है?",
    "options_en": ["Optimizes Enterprise Java for microservices", "Fault tolerance, metrics, etc.", "Both A and B", "For small profiles"],
    "options_hi": ["माइक्रोसर्विसेज के लिए एंटरप्राइज Java को ऑप्टिमाइज़ करता है", "फॉल्ट टोलरेंस, मेट्रिक्स, आदि", "A और B दोनों", "छोटे प्रोफाइल्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 195
  },
  {
    "num": 196,
    "question_en": "What is 'Quarkus'?",
    "question_hi": "'Quarkus' क्या है?",
    "options_en": ["Kubernetes-native Java framework", "Supersonic Subatomic Java", "Both A and B", "Physics framework"],
    "options_hi": ["Kubernetes-नेटिव Java फ्रेमवर्क", "सुपरसोनिक सबएटोमिक Java", "A और B दोनों", "फिजिक्स फ्रेमवर्क"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 196
  },
  {
    "num": 197,
    "question_en": "What is 'Micronaut'?",
    "question_hi": "'Micronaut' क्या है?",
    "options_en": ["Modern microservices framework", "AOT compilation, low memory", "Both A and B", "For micronavigation"],
    "options_hi": ["मॉडर्न माइक्रोसर्विसेज फ्रेमवर्क", "AOT कंपाइलेशन, लो मेमोरी", "A और B दोनों", "माइक्रोनेविगेशन के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 197
  },
  {
    "num": 198,
    "question_en": "What is 'Helidon'?",
    "question_hi": "'Helidon' क्या है?",
    "options_en": ["Microservices framework from Oracle", "Two flavors: SE and MP", "Both A and B", "For heliocentric orbits"],
    "options_hi": ["Oracle का माइक्रोसर्विसेज फ्रेमवर्क", "दो फ्लेवर्स: SE और MP", "A और B दोनों", "हेलियोसेंट्रिक ऑर्बिट्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 198
  },
  {
    "num": 199,
    "question_en": "What is 'JavaFX'?",
    "question_hi": "'JavaFX' क्या है?",
    "options_en": ["GUI toolkit for Java", "Successor to Swing", "Both A and B", "For effects only"],
    "options_hi": ["Java के लिए GUI टूलकिट", "Swing का उत्तराधिकारी", "A और B दोनों", "केवल इफेक्ट्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 199
  },
  {
    "num": 200,
    "question_en": "What is 'Java Card'?",
    "question_hi": "'Java Card' क्या है?",
    "options_en": ["Java for smart cards", "Subset of Java for embedded", "Both A and B", "Regular Java cards"],
    "options_hi": ["स्मार्ट कार्ड्स के लिए Java", "एम्बेडेड के लिए Java का सबसेट", "A और B दोनों", "रेगुलर Java कार्ड्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 200
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