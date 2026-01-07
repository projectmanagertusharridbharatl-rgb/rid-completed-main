 
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
    "num": 351,
    "question_en": "What is 'Java Native Memory Tracking' (NMT)?",
    "question_hi": "'Java Native Memory Tracking' (NMT) क्या है?",
    "options_en": ["Tracks JVM native memory usage", "Helps diagnose native memory leaks", "Both A and B", "Tracks Java heap only"],
    "options_hi": ["JVM नेटिव मेमोरी यूसेज ट्रैक करता है", "नेटिव मेमोरी लीक्स डायग्नोस करने में मदद करता है", "A और B दोनों", "केवल Java हीप ट्रैक करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 351
  },
  {
    "num": 352,
    "question_en": "What is 'JVM Native Memory Categories'?",
    "question_hi": "'JVM Native Memory Categories' क्या है?",
    "options_en": ["Java Heap, Class, Thread, Code, GC, etc.", "Detailed memory breakdown", "Both A and B", "Only total memory"],
    "options_hi": ["Java हीप, क्लास, थ्रेड, कोड, GC, आदि", "डिटेल्ड मेमोरी ब्रेकडाउन", "A और B दोनों", "केवल टोटल मेमोरी"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 352
  },
  {
    "num": 353,
    "question_en": "What is 'JVM String Table' (String Pool)?",
    "question_hi": "'JVM String Table' (String Pool) क्या है?",
    "options_en": ["Interned strings storage", "Native memory area", "Both A and B", "Heap memory area"],
    "options_hi": ["इंटर्न्ड स्ट्रिंग्स स्टोरेज", "नेटिव मेमोरी एरिया", "A और B दोनों", "हीप मेमोरी एरिया"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 353
  },
  {
    "num": 354,
    "question_en": "What is 'JVM Symbol Table'?",
    "question_hi": "'JVM Symbol Table' क्या है?",
    "options_en": ["Stores symbols, signatures", "Native memory for metadata", "Both A and B", "Heap memory"],
    "options_hi": ["सिंबल्स, सिग्नेचर्स स्टोर करता है", "मेटाडेटा के लिए नेटिव मेमोरी", "A और B दोनों", "हीप मेमोरी"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 354
  },
  {
    "num": 355,
    "question_en": "What is 'JIT Code Cache Fragmentation'?",
    "question_hi": "'JIT Code Cache Fragmentation' क्या है?",
    "options_en": ["Code cache becomes fragmented", "Reduces available space", "Both A and B", "No fragmentation"],
    "options_hi": ["कोड कैश fragmented हो जाता है", "उपलब्ध स्पेस कम करता है", "A और B दोनों", "कोई fragmentation नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 355
  },
  {
    "num": 356,
    "question_en": "What is 'JVM PerfData' (Performance Data)?",
    "question_hi": "'JVM PerfData' (Performance Data) क्या है?",
    "options_en": ["Shared memory for performance counters", "Used by monitoring tools", "Both A and B", "Not shared"],
    "options_hi": ["परफॉर्मेंस काउंटर्स के लिए शेयर्ड मेमोरी", "मॉनिटरिंग टूल्स द्वारा उपयोग", "A और B दोनों", "शेयर्ड नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 356
  },
  {
    "num": 357,
    "question_en": "What is 'Java Attach API'?",
    "question_hi": "'Java Attach API' क्या है?",
    "options_en": ["Attach to running JVM", "Load agents dynamically", "Both A and B", "Static attachment"],
    "options_hi": ["रनिंग JVM से अटैच करें", "एजेंट्स डायनामिकली लोड करें", "A और B दोनों", "स्टेटिक अटैचमेंट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 357
  },
  {
    "num": 358,
    "question_en": "What is 'JVM Tool Interface (JVMTI) Capabilities'?",
    "question_hi": "'JVM Tool Interface (JVMTI) Capabilities' क्या है?",
    "options_en": ["Can_* capabilities flags", "Enable/disable features", "Both A and B", "No capabilities"],
    "options_hi": ["Can_* कैपेबिलिटीज फ्लैग्स", "फीचर्स enable/disable करें", "A और B दोनों", "कोई कैपेबिलिटीज नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 358
  },
  {
    "num": 359,
    "question_en": "What is 'JVM Start-Up Time Optimization'?",
    "question_hi": "'JVM Start-Up Time Optimization' क्या है?",
    "options_en": ["CDS, AOT, Class pre-loading", "Reduce startup latency", "Both A and B", "No optimization"],
    "options_hi": ["CDS, AOT, क्लास प्री-लोडिंग", "स्टार्टअप लेटेंसी कम करें", "A और B दोनों", "कोई ऑप्टिमाइज़ेशन नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 359
  },
  {
    "num": 360,
    "question_en": "What is 'Java Class File Format Version'?",
    "question_hi": "'Java Class File Format Version' क्या है?",
    "options_en": ["Major.minor version in class file", "Java version compatibility", "Both A and B", "No version"],
    "options_hi": ["क्लास फाइल में मेजर.माइनर वर्जन", "Java वर्जन कंपैटिबिलिटी", "A और B दोनों", "कोई वर्जन नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 360
  },
  {
    "num": 361,
    "question_en": "What is 'Java Bytecode Max Locals'?",
    "question_hi": "'Java Bytecode Max Locals' क्या है?",
    "options_en": ["Maximum local variables in method", "Part of method metadata", "Both A and B", "Not limited"],
    "options_hi": ["मेथड में मैक्सिमम लोकल वेरिएबल्स", "मेथड मेटाडेटा का भाग", "A और B दोनों", "लिमिटेड नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 361
  },
  {
    "num": 362,
    "question_en": "What is 'Java Bytecode Max Stack'?",
    "question_hi": "'Java Bytecode Max Stack' क्या है?",
    "options_en": ["Maximum operand stack depth", "Part of method metadata", "Both A and B", "Unlimited stack"],
    "options_hi": ["मैक्सिमम ऑपरेंड स्टैक डेप्थ", "मेथड मेटाडेटा का भाग", "A और B दोनों", "अनलिमिटेड स्टैक"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 362
  },
  {
    "num": 363,
    "question_en": "What is 'Java Verifier Type Inference'?",
    "question_hi": "'Java Verifier Type Inference' क्या है?",
    "options_en": ["Verifier infers types from bytecode", "Ensures type safety", "Both A and B", "No type inference"],
    "options_hi": ["वेरिफायर बाइटकोड से टाइप्स इन्फर करता है", "टाइप सेफ्टी सुनिश्चित करता है", "A और B दोनों", "कोई टाइप इन्फरेंस नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 363
  },
  {
    "num": 364,
    "question_en": "What is 'Java Stack Map Frames'?",
    "question_hi": "'Java Stack Map Frames' क्या है?",
    "options_en": ["Type verification metadata", "Java 6+ for faster verification", "Both A and B", "No stack maps"],
    "options_hi": ["टाइप वेरिफिकेशन मेटाडेटा", "तेज वेरिफिकेशन के लिए Java 6+", "A और B दोनों", "कोई स्टैक मैप्स नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 364
  },
  {
    "num": 365,
    "question_en": "What is 'Java Bytecode Exception Table'?",
    "question_hi": "'Java Bytecode Exception Table' क्या है?",
    "options_en": ["Defines exception handlers", "try-catch ranges in bytecode", "Both A and B", "No exception table"],
    "options_hi": ["एक्सेप्शन हैंडलर्स डिफाइन करता है", "बाइटकोड में try-catch रेंजेस", "A और B दोनों", "कोई एक्सेप्शन टेबल नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 365
  },
  {
    "num": 366,
    "question_en": "What is 'Java LineNumberTable Attribute'?",
    "question_hi": "'Java LineNumberTable Attribute' क्या है?",
    "options_en": ["Maps bytecode to source lines", "Debugging information", "Both A and B", "No line mapping"],
    "options_hi": ["बाइटकोड को सोर्स लाइन्स से मैप करता है", "डिबगिंग इन्फॉर्मेशन", "A और B दोनों", "कोई लाइन मैपिंग नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 366
  },
  {
    "num": 367,
    "question_en": "What is 'Java LocalVariableTable Attribute'?",
    "question_hi": "'Java LocalVariableTable Attribute' क्या है?",
    "options_en": ["Debug info for local variables", "Names, types, scopes", "Both A and B", "No variable info"],
    "options_hi": ["लोकल वेरिएबल्स के लिए डिबग इन्फो", "नेम्स, टाइप्स, स्कोप्स", "A और B दोनों", "कोई वेरिएबल इन्फो नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 367
  },
  {
    "num": 368,
    "question_en": "What is 'Java Synthetic Attributes/Methods'?",
    "question_hi": "'Java Synthetic Attributes/Methods' क्या है?",
    "options_en": ["Compiler-generated members", "Bridges, accessors", "Both A and B", "User-written members"],
    "options_hi": ["कंपाइलर-जेनरेटेड मेंबर्स", "ब्रिजेस, एक्सेसर्स", "A और B दोनों", "यूजर-रिटेन मेंबर्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 368
  },
  {
    "num": 369,
    "question_en": "What is 'Java Deprecated Attribute'?",
    "question_hi": "'Java Deprecated Attribute' क्या है?",
    "options_en": ["Marks deprecated elements", "@Deprecated annotation in bytecode", "Both A and B", "No deprecation"],
    "options_hi": ["डिप्रिकेटेड एलिमेंट्स मार्क करता है", "बाइटकोड में @Deprecated एनोटेशन", "A और B दोनों", "कोई डिप्रिकेशन नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 369
  },
  {
    "num": 370,
    "question_en": "What is 'Java Signature Attribute'?",
    "question_hi": "'Java Signature Attribute' क्या है?",
    "options_en": ["Generic signatures in bytecode", "Preserves generic type info", "Both A and B", "No generic info"],
    "options_hi": ["बाइटकोड में जेनेरिक सिग्नेचर्स", "जेनेरिक टाइप इन्फो प्रिजर्व करता है", "A और B दोनों", "कोई जेनेरिक इन्फो नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 370
  },
  {
    "num": 371,
    "question_en": "What is 'Java Annotation Default Attribute'?",
    "question_hi": "'Java Annotation Default Attribute' क्या है?",
    "options_en": ["Default values for annotation elements", "Stored in bytecode", "Both A and B", "No defaults"],
    "options_hi": ["एनोटेशन एलिमेंट्स के लिए डिफ़ॉल्ट वैल्यूज", "बाइटकोड में स्टोर्ड", "A और B दोनों", "कोई डिफ़ॉल्ट्स नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 371
  },
  {
    "num": 372,
    "question_en": "What is 'Java RuntimeVisibleAnnotations Attribute'?",
    "question_hi": "'Java RuntimeVisibleAnnotations Attribute' क्या है?",
    "options_en": ["Annotations visible at runtime", "@Retention(RUNTIME)", "Both A and B", "Compile-time only"],
    "options_hi": ["रनटाइम पर विजिबल एनोटेशन्स", "@Retention(RUNTIME)", "A और B दोनों", "केवल कंपाइल-टाइम"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 372
  },
  {
    "num": 373,
    "question_en": "What is 'Java BootstrapMethods Attribute'?",
    "question_hi": "'Java BootstrapMethods Attribute' क्या है?",
    "options_en": ["invokedynamic bootstrap methods", "Lambda/metafactory related", "Both A and B", "Not related"],
    "options_hi": ["invokedynamic बूटस्ट्रैप मेथड्स", "लैम्बडा/मेटाफैक्टरी संबंधित", "A और B दोनों", "संबंधित नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 373
  },
  {
    "num": 374,
    "question_en": "What is 'Java MethodParameters Attribute'?",
    "question_hi": "'Java MethodParameters Attribute' क्या है?",
    "options_en": ["Method parameter names in bytecode", "Java 8+ feature", "Both A and B", "No parameter names"],
    "options_hi": ["बाइटकोड में मेथड पैरामीटर नेम्स", "Java 8+ फीचर", "A और B दोनों", "कोई पैरामीटर नेम्स नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 374
  },
  {
    "num": 375,
    "question_en": "What is 'Java Module, ModulePackages, ModuleMainClass Attributes'?",
    "question_hi": "'Java Module, ModulePackages, ModuleMainClass Attributes' क्या है?",
    "options_en": ["Module information in class files", "Java 9+ module support", "Both A and B", "No module info"],
    "options_hi": ["क्लास फाइल्स में मॉड्यूल इन्फॉर्मेशन", "Java 9+ मॉड्यूल सपोर्ट", "A और B दोनों", "कोई मॉड्यूल इन्फो नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 375
  },
  {
    "num": 376,
    "question_en": "What is 'Java NestHost, NestMembers Attributes'?",
    "question_hi": "'Java NestHost, NestMembers Attributes' क्या है?",
    "options_en": ["Nested class access control", "Java 11+ nest-based access", "Both A and B", "No nest control"],
    "options_hi": ["नेस्टेड क्लास एक्सेस कंट्रोल", "Java 11+ नेस्ट-बेस्ड एक्सेस", "A और B दोनों", "कोई नेस्ट कंट्रोल नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 376
  },
  {
    "num": 377,
    "question_en": "What is 'Java Record Attribute'?",
    "question_hi": "'Java Record Attribute' क्या है?",
    "options_en": ["Record class information", "Java 16+ records support", "Both A and B", "No record info"],
    "options_hi": ["रिकॉर्ड क्लास इन्फॉर्मेशन", "Java 16+ रिकॉर्ड्स सपोर्ट", "A और B दोनों", "कोई रिकॉर्ड इन्फो नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 377
  },
  {
    "num": 378,
    "question_en": "What is 'Java PermittedSubclasses Attribute'?",
    "question_hi": "'Java PermittedSubclasses Attribute' क्या है?",
    "options_en": ["Sealed class permitted subclasses", "Java 17+ sealed classes", "Both A and B", "No sealing"],
    "options_hi": ["सील्ड क्लास परमिटेड सबक्लासेज", "Java 17+ सील्ड क्लासेज", "A और B दोनों", "कोई सीलिंग नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 378
  },
  {
    "num": 379,
    "question_en": "What is 'Java Preview Features in Class Files'?",
    "question_hi": "'Java Preview Features in Class Files' क्या है?",
    "options_en": ["Preview feature markers", "Requires --enable-preview", "Both A and B", "No preview markers"],
    "options_hi": ["प्रीव्यू फीचर मार्कर्स", "--enable-preview की आवश्यकता", "A और B दोनों", "कोई प्रीव्यू मार्कर्स नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 379
  },
  {
    "num": 380,
    "question_en": "What is 'Java Class File Constant Pool Tags'?",
    "question_hi": "'Java Class File Constant Pool Tags' क्या है?",
    "options_en": ["CONSTANT_Class, CONSTANT_Fieldref, etc.", "Type identifiers in constant pool", "Both A and B", "No tags"],
    "options_hi": ["CONSTANT_Class, CONSTANT_Fieldref, आदि", "कॉन्स्टेंट पूल में टाइप आइडेंटिफायर्स", "A और B दोनों", "कोई टैग्स नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 380
  },
  {
    "num": 381,
    "question_en": "What is 'Java Bytecode Instruction Types'?",
    "question_hi": "'Java Bytecode Instruction Types' क्या है?",
    "options_en": ["Load/store, arithmetic, control, etc.", "Categories of bytecode instructions", "Both A and B", "Single type"],
    "options_hi": ["लोड/स्टोर, अरिथमेटिक, कंट्रोल, आदि", "बाइटकोड इंस्ट्रक्शन्स की श्रेणियाँ", "A और B दोनों", "सिंगल टाइप"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 381
  },
  {
    "num": 382,
    "question_en": "What is 'Java Wide Instruction'?",
    "question_hi": "'Java Wide Instruction' क्या है?",
    "options_en": ["Extends local variable index range", "Opcode 0xC4", "Both A and B", "Not an instruction"],
    "options_hi": ["लोकल वेरिएबल इंडेक्स रेंज बढ़ाता है", "ऑपकोड 0xC4", "A और B दोनों", "कोई इंस्ट्रक्शन नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 382
  },
  {
    "num": 383,
    "question_en": "What is 'Java Lookupswitch vs Tableswitch'?",
    "question_hi": "'Java Lookupswitch vs Tableswitch' में क्या अंतर है?",
    "options_en": ["Lookupswitch: sparse, Tableswitch: dense", "Different switch implementations", "Both A and B", "Same instruction"],
    "options_hi": ["Lookupswitch: स्पार्स, Tableswitch: डेंस", "अलग-अलग स्विच इम्प्लीमेंटेशन", "A और B दोनों", "एक ही इंस्ट्रक्शन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 383
  },
  {
    "num": 384,
    "question_en": "What is 'Java Multianewarray Instruction'?",
    "question_hi": "'Java Multianewarray Instruction' क्या है?",
    "options_en": ["Creates multidimensional arrays", "Single instruction for N-dim arrays", "Both A and B", "Creates 1D arrays"],
    "options_hi": ["मल्टीडायमेंशनल ऐरेज बनाता है", "N-डिम ऐरेज के लिए सिंगल इंस्ट्रक्शन", "A और B दोनों", "1D ऐरेज बनाता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 384
  },
  {
    "num": 385,
    "question_en": "What is 'Java invokedynamic Instruction Structure'?",
    "question_hi": "'Java invokedynamic Instruction Structure' क्या है?",
    "options_en": ["bootstrap method, name, descriptor", "Dynamic invocation details", "Both A and B", "Simple invocation"],
    "options_hi": ["बूटस्ट्रैप मेथड, नाम, डिस्क्रिप्टर", "डायनामिक इनवोकेशन डिटेल्स", "A और B दोनों", "सिंपल इनवोकेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 385
  },
  {
    "num": 386,
    "question_en": "What is 'Java Stack Manipulation Instructions'?",
    "question_hi": "'Java Stack Manipulation Instructions' क्या है?",
    "options_en": ["dup, swap, pop, etc.", "Manipulate operand stack", "Both A and B", "No stack manipulation"],
    "options_hi": ["dup, swap, pop, आदि", "ऑपरेंड स्टैक मैनिपुलेट करें", "A और B दोनों", "कोई स्टैक मैनिपुलेशन नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 386
  },
  {
    "num": 387,
    "question_en": "What is 'Java Type Conversion Instructions'?",
    "question_hi": "'Java Type Conversion Instructions' क्या है?",
    "options_en": ["i2l, f2d, checkcast, etc.", "Convert between types", "Both A and B", "No conversion"],
    "options_hi": ["i2l, f2d, checkcast, आदि", "टाइप्स के बीच कन्वर्ट करें", "A और B दोनों", "कोई कन्वर्जन नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 387
  },
  {
    "num": 388,
    "question_en": "What is 'Java Monitor Instructions'?",
    "question_hi": "'Java Monitor Instructions' क्या है?",
    "options_en": ["monitorenter, monitorexit", "Synchronized block implementation", "Both A and B", "No monitor instructions"],
    "options_hi": ["monitorenter, monitorexit", "Synchronized ब्लॉक इम्प्लीमेंटेशन", "A और B दोनों", "कोई मॉनिटर इंस्ट्रक्शन नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 388
  },
  {
    "num": 389,
    "question_en": "What is 'Java athrow Instruction'?",
    "question_hi": "'Java athrow Instruction' क्या है?",
    "options_en": ["Throws exception/throwable", "Exception throwing in bytecode", "Both A and B", "Not for exceptions"],
    "options_hi": ["एक्सेप्शन/थ्रोएबल फेंकता है", "बाइटकोड में एक्सेप्शन थ्रोइंग", "A और B दोनों", "एक्सेप्शन्स के लिए नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 389
  },
  {
    "num": 390,
    "question_en": "What is 'Java jsr/ret Instructions (Deprecated)'?",
    "question_hi": "'Java jsr/ret Instructions (Deprecated)' क्या है?",
    "options_en": ["Jump subroutine/return", "Deprecated in Java 6+", "Both A and B", "Still used"],
    "options_hi": ["जम्प सबरूटीन/रिटर्न", "Java 6+ में डिप्रिकेटेड", "A और B दोनों", "अभी भी उपयोग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 390
  },
  {
    "num": 391,
    "question_en": "What is 'Java breakpoint Instruction (Reserved)'?",
    "question_hi": "'Java breakpoint Instruction (Reserved)' क्या है?",
    "options_en": ["Reserved for debuggers", "Opcode 0xCA", "Both A and B", "Regular instruction"],
    "options_hi": ["डीबगर्स के लिए रिजर्व्ड", "ऑपकोड 0xCA", "A और B दोनों", "रेगुलर इंस्ट्रक्शन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 391
  },
  {
    "num": 392,
    "question_en": "What is 'Java impdep1/impdep2 Instructions'?",
    "question_hi": "'Java impdep1/impdep2 Instructions' क्या है?",
    "options_en": ["Implementation dependent", "For JVM implementation use", "Both A and B", "Standard instructions"],
    "options_hi": ["इम्प्लीमेंटेशन डिपेंडेंट", "JVM इम्प्लीमेंटेशन उपयोग के लिए", "A और B दोनों", "स्टैंडर्ड इंस्ट्रक्शन्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 392
  },
  {
    "num": 393,
    "question_en": "What is 'Java Bytecode Verification Process'?",
    "question_hi": "'Java Bytecode Verification Process' क्या है?",
    "options_en": ["Structural, type, constraint checks", "Multi-step verification", "Both A and B", "Single step"],
    "options_hi": ["स्ट्रक्चरल, टाइप, कंस्ट्रेंट चेक्स", "मल्टी-स्टेप वेरिफिकेशन", "A और B दोनों", "सिंगल स्टेप"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 393
  },
  {
    "num": 394,
    "question_en": "What is 'Java Verifier Type States'?",
    "question_hi": "'Java Verifier Type States' क्या है?",
    "options_en": ["Types of values on stack/locals", "Tracked during verification", "Both A and B", "Not tracked"],
    "options_hi": ["स्टैक/लोकल्स पर वैल्यूज के टाइप्स", "वेरिफिकेशन के दौरान ट्रैक किया गया", "A और B दोनों", "ट्रैक नहीं किया गया"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 394
  },
  {
    "num": 395,
    "question_en": "What is 'Java Bytecode Subroutines (Deprecated)'?",
    "question_hi": "'Java Bytecode Subroutines (Deprecated)' क्या है?",
    "options_en": ["Code reuse via jsr/ret", "Deprecated, complicated verification", "Both A and B", "Still recommended"],
    "options_hi": ["jsr/ret के माध्यम से कोड रीयूज़", "डिप्रिकेटेड, जटिल वेरिफिकेशन", "A और B दोनों", "अभी भी अनुशंसित"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 395
  },
  {
    "num": 396,
    "question_en": "What is 'Java Class File Checksum'?",
    "question_hi": "'Java Class File Checksum' क्या है?",
    "options_en": ["Integrity verification", "Optional attribute", "Both A and B", "Mandatory"],
    "options_hi": ["इंटीग्रिटी वेरिफिकेशन", "ऑप्शनल एट्रीब्यूट", "A और B दोनों", "अनिवार्य"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 396
  },
  {
    "num": 397,
    "question_en": "What is 'Java SourceFile Attribute'?",
    "question_hi": "'Java SourceFile Attribute' क्या है?",
    "options_en": ["Source file name", "Debugging information", "Both A and B", "Not for debugging"],
    "options_hi": ["सोर्स फाइल नाम", "डिबगिंग इन्फॉर्मेशन", "A और B दोनों", "डिबगिंग के लिए नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 397
  },
  {
    "num": 398,
    "question_en": "What is 'Java InnerClasses Attribute'?",
    "question_hi": "'Java InnerClasses Attribute' क्या है?",
    "options_en": ["Inner class relationships", "Reflection information", "Both A and B", "No inner class info"],
    "options_hi": ["इनर क्लास रिलेशनशिप्स", "रिफ्लेक्शन इन्फॉर्मेशन", "A और B दोनों", "कोई इनर क्लास इन्फो नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 398
  },
  {
    "num": 399,
    "question_en": "What is 'Java EnclosingMethod Attribute'?",
    "question_hi": "'Java EnclosingMethod Attribute' क्या है?",
    "options_en": ["For local/anonymous classes", "Enclosing method information", "Both A and B", "Not for local classes"],
    "options_hi": ["लोकल/अनॉनिमस क्लासेज के लिए", "एनक्लोजिंग मेथड इन्फॉर्मेशन", "A और B दोनों", "लोकल क्लासेज के लिए नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 399
  },
  {
    "num": 400,
    "question_en": "What is 'Java SourceDebugExtension Attribute'?",
    "question_hi": "'Java SourceDebugExtension Attribute' क्या है?",
    "options_en": ["Extended debugging information", "Arbitrary data for debuggers", "Both A and B", "Standard debug info"],
    "options_hi": ["एक्सटेंडेड डिबगिंग इन्फॉर्मेशन", "डीबगर्स के लिए मनमाना डेटा", "A और B दोनों", "स्टैंडर्ड डिबग इन्फो"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 400
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