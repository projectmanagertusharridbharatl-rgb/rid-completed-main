 
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
        let questions =[
  {
    "num": 251,
    "question_en": "What is 'JVM Bytecode Verification'?",
    "question_hi": "'JVM Bytecode Verification' क्या है?",
    "options_en": ["Ensures bytecode follows JVM spec", "Security check before execution", "Both A and B", "For verifying code only"],
    "options_hi": ["यह सुनिश्चित करता है कि बाइटकोड JVM स्पेक का पालन करता है", "एग्जीक्यूशन से पहले सिक्योरिटी चेक", "A और B दोनों", "केवल कोड वेरिफाई करने के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 251
  },
  {
    "num": 252,
    "question_en": "What is 'Bytecode Instrumentation'?",
    "question_hi": "'Bytecode Instrumentation' क्या है?",
    "options_en": ["Modifying bytecode at runtime", "For profiling, monitoring", "Both A and B", "For instrument making"],
    "options_hi": ["रनटाइम पर बाइटकोड मॉडिफाई करना", "प्रोफाइलिंग, मॉनिटरिंग के लिए", "A और B दोनों", "इंस्ट्रूमेंट बनाने के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 252
  },
  {
    "num": 253,
    "question_en": "What is 'Constant Pool' in .class file?",
    "question_hi": ".class फाइल में 'Constant Pool' क्या है?",
    "options_en": ["Stores constants, strings, class names", "Part of class file structure", "Both A and B", "For constants only"],
    "options_hi": ["कॉन्स्टेंट्स, स्ट्रिंग्स, क्लास नेम्स स्टोर करता है", "क्लास फाइल स्ट्रक्चर का भाग", "A और B दोनों", "केवल कॉन्स्टेंट्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 253
  },
  {
    "num": 254,
    "question_en": "What is 'Bootstrap Classloader'?",
    "question_hi": "'Bootstrap Classloader' क्या है?",
    "options_en": ["Loads core Java classes", "Written in native code", "Both A and B", "Loads application classes"],
    "options_hi": ["कोर Java क्लासेज लोड करता है", "नेटिव कोड में लिखा गया", "A और B दोनों", "एप्लीकेशन क्लासेज लोड करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 254
  },
  {
    "num": 255,
    "question_en": "What is 'Extension Classloader'?",
    "question_hi": "'Extension Classloader' क्या है?",
    "options_en": ["Loads classes from jre/lib/ext", "Child of Bootstrap classloader", "Both A and B", "Loads user classes"],
    "options_hi": ["jre/lib/ext से क्लासेज लोड करता है", "Bootstrap क्लासलोडर का चाइल्ड", "A और B दोनों", "यूजर क्लासेज लोड करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 255
  },
  {
    "num": 256,
    "question_en": "What is 'System/Application Classloader'?",
    "question_hi": "'System/Application Classloader' क्या है?",
    "options_en": ["Loads classes from classpath", "Also called AppClassLoader", "Both A and B", "Loads system classes"],
    "options_hi": ["क्लासपाथ से क्लासेज लोड करता है", "AppClassLoader भी कहा जाता है", "A और B दोनों", "सिस्टम क्लासेज लोड करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 256
  },
  {
    "num": 257,
    "question_en": "What is 'ClassLoader Deadlock'?",
    "question_hi": "'ClassLoader Deadlock' क्या है?",
    "options_en": ["Deadlock during class loading", "Circular dependency in class loaders", "Both A and B", "Thread deadlock"],
    "options_hi": ["क्लास लोडिंग के दौरान डेडलॉक", "क्लास लोडर्स में सर्कुलर डिपेंडेंसी", "A और B दोनों", "थ्रेड डेडलॉक"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 257
  },
  {
    "num": 258,
    "question_en": "What is 'Class Initialization' vs 'Class Loading'?",
    "question_hi": "'Class Initialization' और 'Class Loading' में क्या अंतर है?",
    "options_en": ["Loading: reads .class file", "Initialization: executes <clinit>", "Both A and B", "Same thing"],
    "options_hi": ["लोडिंग: .class फाइल पढ़ता है", "इनिशियलाइज़ेशन: <clinit> एक्जीक्यूट करता है", "A और B दोनों", "एक ही चीज़"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 258
  },
  {
    "num": 259,
    "question_en": "What is '<clinit>' method?",
    "question_hi": "'<clinit>' मेथड क्या है?",
    "options_en": ["Class initialization method", "Generated for static initializers", "Both A and B", "Instance initializer"],
    "options_hi": ["क्लास इनिशियलाइज़ेशन मेथड", "स्टेटिक इनिशियलाइज़र्स के लिए जेनरेटेड", "A और B दोनों", "इंस्टेंस इनिशियलाइज़र"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 259
  },
  {
    "num": 260,
    "question_en": "What is '<init>' method?",
    "question_hi": "'<init>' मेथड क्या है?",
    "options_en": ["Constructor method", "Instance initialization", "Both A and B", "Static method"],
    "options_hi": ["कंस्ट्रक्टर मेथड", "इंस्टेंस इनिशियलाइज़ेशन", "A और B दोनों", "स्टेटिक मेथड"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 260
  },
  {
    "num": 261,
    "question_en": "What is 'Bytecode Obfuscation'?",
    "question_hi": "'Bytecode Obfuscation' क्या है?",
    "options_en": ["Making bytecode hard to reverse engineer", "For code protection", "Both A and B", "For code clarity"],
    "options_hi": ["बाइटकोड को रिवर्स इंजीनियर करना कठिन बनाना", "कोड प्रोटेक्शन के लिए", "A और B दोनों", "कोड क्लैरिटी के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 261
  },
  {
    "num": 262,
    "question_en": "What is 'ProGuard' tool?",
    "question_hi": "'ProGuard' टूल क्या है?",
    "options_en": ["Java bytecode optimizer and obfuscator", "Shrinks, optimizes, obfuscates", "Both A and B", "Only obfuscates"],
    "options_hi": ["Java बाइटकोड ऑप्टिमाइज़र और ओबफस्केटर", "श्रिंक, ऑप्टिमाइज़, ओबफस्केट करता है", "A और B दोनों", "केवल ओबफस्केट करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 262
  },
  {
    "num": 263,
    "question_en": "What is 'JVM Profiling Interface' (JVMPI)?",
    "question_hi": "'JVM Profiling Interface' (JVMPI) क्या है?",
    "options_en": ["Deprecated profiling interface", "Predecessor to JVMTI", "Both A and B", "Current profiling interface"],
    "options_hi": ["डिप्रिकेटेड प्रोफाइलिंग इंटरफेस", "JVMTI का पूर्ववर्ती", "A और B दोनों", "करंट प्रोफाइलिंग इंटरफेस"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 263
  },
  {
    "num": 264,
    "question_en": "What is 'JVM Debug Interface' (JVMDI)?",
    "question_hi": "'JVM Debug Interface' (JVMDI) क्या है?",
    "options_en": ["Deprecated debug interface", "Predecessor to JVMTI", "Both A and B", "Current debug interface"],
    "options_hi": ["डिप्रिकेटेड डीबग इंटरफेस", "JVMTI का पूर्ववर्ती", "A और B दोनों", "करंट डीबग इंटरफेस"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 264
  },
  {
    "num": 265,
    "question_en": "What is 'HotSpot Serviceability Agent' (SA)?",
    "question_hi": "'HotSpot Serviceability Agent' (SA) क्या है?",
    "options_en": ["Debugging out-of-process JVM", "Post-mortem analysis", "Both A and B", "For service only"],
    "options_hi": ["आउट-ऑफ-प्रोसेस JVM डिबगिंग", "पोस्ट-मॉर्टम एनालिसिस", "A और B दोनों", "केवल सर्विस के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 265
  },
  {
    "num": 266,
    "question_en": "What is 'JVM WhiteBox API'?",
    "question_hi": "'JVM WhiteBox API' क्या है?",
    "options_en": ["Internal testing API", "Access to JVM internals", "Both A and B", "Public API"],
    "options_hi": ["इंटरनल टेस्टिंग API", "JVM इंटर्नल्स तक एक्सेस", "A और B दोनों", "पब्लिक API"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 266
  },
  {
    "num": 267,
    "question_en": "What is 'JVM Compiler Blackhole'?",
    "question_hi": "'JVM Compiler Blackhole' क्या है?",
    "options_en": ["Prevents dead code elimination", "For microbenchmarking", "Both A and B", "For black holes"],
    "options_hi": ["डेड कोड एलिमिनेशन रोकता है", "माइक्रोबेंचमार्किंग के लिए", "A और B दोनों", "ब्लैक होल्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 267
  },
  {
    "num": 268,
    "question_en": "What is 'JMH' (Java Microbenchmark Harness)?",
    "question_hi": "'JMH' (Java Microbenchmark Harness) क्या है?",
    "options_en": ["Framework for microbenchmarks", "From OpenJDK", "Both A and B", "For macros only"],
    "options_hi": ["माइक्रोबेंचमार्क्स के लिए फ्रेमवर्क", "OpenJDK से", "A और B दोनों", "केवल मैक्रोस के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 268
  },
  {
    "num": 269,
    "question_en": "What is 'JOL' (Java Object Layout)?",
    "question_hi": "'JOL' (Java Object Layout) क्या है?",
    "options_en": ["Analyzes object memory layout", "Shows object header, fields", "Both A and B", "For layout design"],
    "options_hi": ["ऑब्जेक्ट मेमोरी लेआउट एनालाइज़ करता है", "ऑब्जेक्ट हेडर, फील्ड्स दिखाता है", "A और B दोनों", "लेआउट डिजाइन के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 269
  },
  {
    "num": 270,
    "question_en": "What is 'Object Header' in JVM?",
    "question_hi": "JVM में 'Object Header' क्या है?",
    "options_en": ["Metadata at start of object", "Contains mark word, klass pointer", "Both A and B", "Object body"],
    "options_hi": ["ऑब्जेक्ट की शुरुआत में मेटाडेटा", "मार्क वर्ड, क्लास पॉइंटर शामिल करता है", "A और B दोनों", "ऑब्जेक्ट बॉडी"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 270
  },
  {
    "num": 271,
    "question_en": "What is 'Mark Word' in object header?",
    "question_hi": "ऑब्जेक्ट हेडर में 'Mark Word' क्या है?",
    "options_en": ["Contains hashcode, GC age, lock info", "First part of object header", "Both A and B", "For marking only"],
    "options_hi": ["हैशकोड, GC एज, लॉक इन्फो शामिल करता है", "ऑब्जेक्ट हेडर का पहला भाग", "A और B दोनों", "केवल मार्किंग के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 271
  },
  {
    "num": 272,
    "question_en": "What is 'Klass Pointer' in object header?",
    "question_hi": "ऑब्जेक्ट हेडर में 'Klass Pointer' क्या है?",
    "options_en": ["Pointer to class metadata", "Second part of object header", "Both A and B", "For class only"],
    "options_hi": ["क्लास मेटाडेटा का पॉइंटर", "ऑब्जेक्ट हेडर का दूसरा भाग", "A और B दोनों", "केवल क्लास के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 272
  },
  {
    "num": 273,
    "question_en": "What is 'Array Length' in array object header?",
    "question_hi": "ऐरे ऑब्जेक्ट हेडर में 'Array Length' क्या है?",
    "options_en": ["Additional field in array header", "Stores array length", "Both A and B", "Not in header"],
    "options_hi": ["ऐरे हेडर में अतिरिक्त फील्ड", "ऐरे लेंथ स्टोर करता है", "A और B दोनों", "हेडर में नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 273
  },
  {
    "num": 274,
    "question_en": "What is 'Object Alignment' in JVM?",
    "question_hi": "JVM में 'Object Alignment' क्या है?",
    "options_en": ["Objects aligned to 8-byte boundaries", "Improves memory access", "Both A and B", "No alignment"],
    "options_hi": ["ऑब्जेक्ट्स 8-बाइट बाउंड्रीज़ से अलाइन होते हैं", "मेमोरी एक्सेस इम्प्रूव करता है", "A और B दोनों", "कोई अलाइनमेंट नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 274
  },
  {
    "num": 275,
    "question_en": "What is 'Object Padding'?",
    "question_hi": "'Object Padding' क्या है?",
    "options_en": ["Extra bytes for alignment", "Waste memory but improves performance", "Both A and B", "No padding"],
    "options_hi": ["अलाइनमेंट के लिए एक्स्ट्रा बाइट्स", "मेमोरी वेस्ट करता है लेकिन परफॉर्मेंस इम्प्रूव करता है", "A और B दोनों", "कोई पैडिंग नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 275
  },
  {
    "num": 276,
    "question_en": "What is 'Field Reordering' in JVM?",
    "question_hi": "JVM में 'Field Reordering' क्या है?",
    "options_en": ["JVM may reorder fields", "For memory optimization", "Both A and B", "Fields stay in order"],
    "options_hi": ["JVM फील्ड्स को रीऑर्डर कर सकता है", "मेमोरी ऑप्टिमाइज़ेशन के लिए", "A और B दोनों", "फील्ड्स ऑर्डर में रहते हैं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 276
  },
  {
    "num": 277,
    "question_en": "What is 'Intrinsic Functions' in JVM?",
    "question_hi": "JVM में 'Intrinsic Functions' क्या है?",
    "options_en": ["Methods implemented in assembly", "For performance critical operations", "Both A and B", "Regular Java methods"],
    "options_hi": ["असेम्बली में इम्प्लीमेंटेड मेथड्स", "परफॉर्मेंस क्रिटिकल ऑपरेशन्स के लिए", "A और B दोनों", "रेगुलर Java मेथड्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 277
  },
  {
    "num": 278,
    "question_en": "What is 'Unsafe' class?",
    "question_hi": "'Unsafe' क्लास क्या है?",
    "options_en": ["Internal sun.misc.Unsafe", "Direct memory access, CAS", "Both A and B", "Safe operations"],
    "options_hi": ["इंटरनल sun.misc.Unsafe", "डायरेक्ट मेमोरी एक्सेस, CAS", "A और B दोनों", "सेफ ऑपरेशन्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 278
  },
  {
    "num": 279,
    "question_en": "What is 'VarHandle' vs 'Unsafe'?",
    "question_hi": "'VarHandle' और 'Unsafe' में क्या अंतर है?",
    "options_en": ["VarHandle is safe alternative", "Standard API in Java 9+", "Both A and B", "Same as Unsafe"],
    "options_hi": ["VarHandle सेफ विकल्प है", "Java 9+ में स्टैंडर्ड API", "A और B दोनों", "Unsafe के समान"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 279
  },
  {
    "num": 280,
    "question_en": "What is 'Method Inlining' in JIT?",
    "question_hi": "JIT में 'Method Inlining' क्या है?",
    "options_en": ["Replaces method call with method body", "Performance optimization", "Both A and B", "Method outlining"],
    "options_hi": ["मेथड कॉल को मेथड बॉडी से बदलता है", "परफॉर्मेंस ऑप्टिमाइज़ेशन", "A और B दोनों", "मेथड आउटलाइनिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 280
  },
  {
    "num": 281,
    "question_en": "What is 'Loop Unrolling' in JIT?",
    "question_hi": "JIT में 'Loop Unrolling' क्या है?",
    "options_en": ["Replicates loop body", "Reduces loop overhead", "Both A and B", "Loop rolling"],
    "options_hi": ["लूप बॉडी को रेप्लिकेट करता है", "लूप ओवरहेड कम करता है", "A और B दोनों", "लूप रोलिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 281
  },
  {
    "num": 282,
    "question_en": "What is 'Dead Code Elimination' in JIT?",
    "question_hi": "JIT में 'Dead Code Elimination' क्या है?",
    "options_en": ["Removes unreachable code", "Performance optimization", "Both A and B", "Adds dead code"],
    "options_hi": ["अनरीचेबल कोड हटाता है", "परफॉर्मेंस ऑप्टिमाइज़ेशन", "A और B दोनों", "डेड कोड जोड़ता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 282
  },
  {
    "num": 283,
    "question_en": "What is 'Common Subexpression Elimination' (CSE)?",
    "question_hi": "'Common Subexpression Elimination' (CSE) क्या है?",
    "options_en": ["Optimization to reuse computed values", "Reduces redundant calculations", "Both A and B", "Creates redundancy"],
    "options_hi": ["कम्प्यूटेड वैल्यूज को रीयूज़ करने के लिए ऑप्टिमाइज़ेशन", "रिडंडेंट कैलकुलेशन्स कम करता है", "A और B दोनों", "रिडंडेंसी बनाता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 283
  },
  {
    "num": 284,
    "question_en": "What is 'Constant Folding' in compiler?",
    "question_hi": "कंपाइलर में 'Constant Folding' क्या है?",
    "options_en": ["Evaluates constant expressions at compile time", "Performance optimization", "Both A and B", "Runtime evaluation"],
    "options_hi": ["कंपाइल टाइम पर कॉन्स्टेंट एक्सप्रेशन्स का मूल्यांकन करता है", "परफॉर्मेंस ऑप्टिमाइज़ेशन", "A और B दोनों", "रनटाइम एवैल्यूएशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 284
  },
  {
    "num": 285,
    "question_en": "What is 'Constant Propagation' in compiler?",
    "question_hi": "कंपाइलर में 'Constant Propagation' क्या है?",
    "options_en": ["Replaces variables with constants", "When values are known at compile time", "Both A and B", "Variable propagation"],
    "options_hi": ["वेरिएबल्स को कॉन्स्टेंट्स से बदलता है", "जब वैल्यूज कंपाइल टाइम पर ज्ञात होते हैं", "A और B दोनों", "वेरिएबल प्रोपेगेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 285
  },
  {
    "num": 286,
    "question_en": "What is 'Register Allocation' in JIT?",
    "question_hi": "JIT में 'Register Allocation' क्या है?",
    "options_en": ["Assigns variables to CPU registers", "Performance optimization", "Both A and B", "Memory allocation"],
    "options_hi": ["वेरिएबल्स को CPU रजिस्टर्स असाइन करता है", "परफॉर्मेंस ऑप्टिमाइज़ेशन", "A और B दोनों", "मेमोरी एलोकेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 286
  },
  {
    "num": 287,
    "question_en": "What is 'Inlining Heuristics' in JIT?",
    "question_hi": "JIT में 'Inlining Heuristics' क्या है?",
    "options_en": ["Rules for deciding what to inline", "Based on method size, call frequency", "Both A and B", "Always inline"],
    "options_hi": ["यह तय करने के नियम कि क्या इनलाइन करना है", "मेथड साइज, कॉल फ्रीक्वेंसी पर आधारित", "A और B दोनों", "हमेशा इनलाइन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 287
  },
  {
    "num": 288,
    "question_en": "What is 'Tiered Compilation' in HotSpot?",
    "question_hi": "HotSpot में 'Tiered Compilation' क्या है?",
    "options_en": ["Multiple compilation levels", "C1 (client), C2 (server)", "Both A and B", "Single level"],
    "options_hi": ["मल्टीपल कंपाइलेशन लेवल्स", "C1 (क्लाइंट), C2 (सर्वर)", "A और B दोनों", "सिंगल लेवल"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 288
  },
  {
    "num": 289,
    "question_en": "What is 'C1 Compiler' (Client Compiler)?",
    "question_hi": "'C1 Compiler' (क्लाइंट कंपाइलर) क्या है?",
    "options_en": ["Fast compilation, less optimization", "Good for startup", "Both A and B", "Slow compilation"],
    "options_hi": ["फास्ट कंपाइलेशन, कम ऑप्टिमाइज़ेशन", "स्टार्टअप के लिए अच्छा", "A और B दोनों", "स्लो कंपाइलेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 289
  },
  {
    "num": 290,
    "question_en": "What is 'C2 Compiler' (Server Compiler)?",
    "question_hi": "'C2 Compiler' (सर्वर कंपाइलर) क्या है?",
    "options_en": ["Slow compilation, aggressive optimization", "Good for long-running", "Both A and B", "Fast compilation"],
    "options_hi": ["स्लो कंपाइलेशन, एग्रेसिव ऑप्टिमाइज़ेशन", "लॉन्ग-रनिंग के लिए अच्छा", "A और B दोनों", "फास्ट कंपाइलेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 290
  },
  {
    "num": 291,
    "question_en": "What is 'Graal Compiler'?",
    "question_hi": "'Graal Compiler' क्या है?",
    "options_en": ["Modern JIT compiler in Java", "Written in Java", "Both A and B", "Written in C++"],
    "options_hi": ["Java में मॉडर्न JIT कंपाइलर", "Java में लिखा गया", "A और B दोनों", "C++ में लिखा गया"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 291
  },
  {
    "num": 292,
    "question_en": "What is 'Escape Analysis Limitations'?",
    "question_hi": "'Escape Analysis Limitations' क्या है?",
    "options_en": ["Cannot analyze complex patterns", "Conservative approach", "Both A and B", "No limitations"],
    "options_hi": ["कॉम्प्लेक्स पैटर्न्स एनालाइज़ नहीं कर सकता", "कंजर्वेटिव अप्रोच", "A और B दोनों", "कोई लिमिटेशन नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 292
  },
  {
    "num": 293,
    "question_en": "What is 'Biased Locking Revocation'?",
    "question_hi": "'Biased Locking Revocation' क्या है?",
    "options_en": ["When multiple threads contend", "Biased lock converted to normal", "Both A and B", "Never happens"],
    "options_hi": ["जब मल्टीपल थ्रेड्स कंटेंड करते हैं", "बायस्ड लॉक नॉर्मल में कन्वर्ट होता है", "A और B दोनों", "कभी नहीं होता"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 293
  },
  {
    "num": 294,
    "question_en": "What is 'Lock Coarsening'?",
    "question_hi": "'Lock Coarsening' क्या है?",
    "options_en": ["Combines adjacent synchronized blocks", "Reduces lock/unlock overhead", "Both A and B", "Splits locks"],
    "options_hi": ["एडजेसेंट synchronized ब्लॉक्स को कंबाइन करता है", "लॉक/अनलॉक ओवरहेड कम करता है", "A और B दोनों", "लॉक्स स्प्लिट करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 294
  },
  {
    "num": 295,
    "question_en": "What is 'Lock Elision'?",
    "question_hi": "'Lock Elision' क्या है?",
    "options_en": ["Removes unnecessary locks", "When object doesn't escape", "Both A and B", "Adds locks"],
    "options_hi": ["अननेसेसरी लॉक्स हटाता है", "जब ऑब्जेक्ट एस्केप नहीं करता", "A और B दोनों", "लॉक्स जोड़ता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 295
  },
  {
    "num": 296,
    "question_en": "What is 'Adaptive Spinning' in locks?",
    "question_hi": "लॉक्स में 'Adaptive Spinning' क्या है?",
    "options_en": ["Dynamically adjusts spin count", "Based on previous success", "Both A and B", "Fixed spinning"],
    "options_hi": ["डायनामिकली स्पिन काउंट एडजस्ट करता है", "पिछली सफलता पर आधारित", "A और B दोनों", "फिक्स्ड स्पिनिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 296
  },
  {
    "num": 297,
    "question_en": "What is 'Spin Lock' vs 'Blocking Lock'?",
    "question_hi": "'Spin Lock' और 'Blocking Lock' में क्या अंतर है?",
    "options_en": ["Spin: busy wait, Blocking: OS wait", "Different contention strategies", "Both A and B", "Same thing"],
    "options_hi": ["स्पिन: बिज़ी वेट, ब्लॉकिंग: OS वेट", "अलग कंटेंशन स्ट्रैटेजीज", "A और B दोनों", "एक ही चीज़"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 297
  },
  {
    "num": 298,
    "question_en": "What is 'Lock Inflation'?",
    "question_hi": "'Lock Inflation' क्या है?",
    "options_en": ["Thin lock to heavyweight lock", "When contention increases", "Both A and B", "Lock deflation"],
    "options_hi": ["थिन लॉक से हेवीवेट लॉक", "जब कंटेंशन बढ़ता है", "A और B दोनों", "लॉक डिफ्लेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 298
  },
  {
    "num": 299,
    "question_en": "What is 'Thin Lock' in JVM?",
    "question_hi": "JVM में 'Thin Lock' क्या है?",
    "options_en": ["Lightweight lock implementation", "Uses CAS in mark word", "Both A and B", "Heavy lock"],
    "options_hi": ["लाइटवेट लॉक इम्प्लीमेंटेशन", "मार्क वर्ड में CAS उपयोग करता है", "A और B दोनों", "हेवी लॉक"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 299
  },
  {
    "num": 300,
    "question_en": "What is 'Heavyweight Lock' in JVM?",
    "question_hi": "JVM में 'Heavyweight Lock' क्या है?",
    "options_en": ["Uses OS mutex", "For high contention", "Both A and B", "Light lock"],
    "options_hi": ["OS म्यूटेक्स उपयोग करता है", "हाई कंटेंशन के लिए", "A और B दोनों", "लाइट लॉक"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 300
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