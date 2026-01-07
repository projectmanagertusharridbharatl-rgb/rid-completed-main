 
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
    "num": 201,
    "question_en": "What is 'Escape Analysis' in JVM?",
    "question_hi": "JVM में 'Escape Analysis' क्या है?",
    "options_en": ["Determines if object escapes method scope", "Enables stack allocation optimization", "Both A and B", "For escaping characters"],
    "options_hi": ["निर्धारित करता है कि क्या ऑब्जेक्ट मेथड स्कोप से बच जाता है", "स्टैक एलोकेशन ऑप्टिमाइज़ेशन सक्षम करता है", "A और B दोनों", "एस्केपिंग करैक्टर्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 201
  },
  {
    "num": 202,
    "question_en": "What is 'Biased Locking' in JVM?",
    "question_hi": "JVM में 'Biased Locking' क्या है?",
    "options_en": ["Optimization for single-threaded access", "Reduces lock overhead", "Both A and B", "For biased algorithms"],
    "options_hi": ["सिंगल-थ्रेडेड एक्सेस के लिए ऑप्टिमाइज़ेशन", "लॉक ओवरहेड कम करता है", "A और B दोनों", "बायस्ड एल्गोरिदम के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 202
  },
  {
    "num": 203,
    "question_en": "What is 'Adaptive Optimization' in HotSpot JVM?",
    "question_hi": "HotSpot JVM में 'Adaptive Optimization' क्या है?",
    "options_en": ["Dynamically optimizes code at runtime", "Profiling-based optimization", "Both A and B", "Static optimization"],
    "options_hi": ["रनटाइम पर कोड को डायनामिकली ऑप्टिमाइज़ करता है", "प्रोफाइलिंग-बेस्ड ऑप्टिमाइज़ेशन", "A और B दोनों", "स्टेटिक ऑप्टिमाइज़ेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 203
  },
  {
    "num": 204,
    "question_en": "What is 'On-Stack Replacement' (OSR) in JVM?",
    "question_hi": "JVM में 'On-Stack Replacement' (OSR) क्या है?",
    "options_en": ["Replaces running method code with optimized version", "During long-running loops", "Both A and B", "For stack replacement only"],
    "options_hi": ["रनिंग मेथड कोड को ऑप्टिमाइज़्ड वर्जन से बदलता है", "लॉन्ग-रनिंग लूप्स के दौरान", "A और B दोनों", "केवल स्टैक रिप्लेसमेंट के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 204
  },
  {
    "num": 205,
    "question_en": "What is 'Code Cache' in JVM?",
    "question_hi": "JVM में 'Code Cache' क्या है?",
    "options_en": ["Stores compiled native code", "Memory area for JIT compiled methods", "Both A and B", "For caching source code"],
    "options_hi": ["कंपाइल्ड नेटिव कोड स्टोर करता है", "JIT कंपाइल्ड मेथड्स के लिए मेमोरी एरिया", "A और B दोनों", "सोर्स कोड कैशिंग के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 205
  },
  {
    "num": 206,
    "question_en": "What is 'Card Table' in Garbage Collection?",
    "question_hi": "गार्बेज कलेक्शन में 'Card Table' क्या है?",
    "options_en": ["Remembers old-to-young references", "Optimizes minor GC", "Both A and B", "For playing cards"],
    "options_hi": ["ओल्ड-टू-यंग रेफरेंसेस याद रखता है", "माइनर GC ऑप्टिमाइज़ करता है", "A और B दोनों", "प्लेइंग कार्ड्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 206
  },
  {
    "num": 207,
    "question_en": "What is 'Remembered Set' in Garbage Collection?",
    "question_hi": "गार्बेज कलेक्शन में 'Remembered Set' क्या है?",
    "options_en": ["Tracks references between generations", "Used in generational GC", "Both A and B", "For remembering things"],
    "options_hi": ["जनरेशन्स के बीच रेफरेंसेस ट्रैक करता है", "जेनरेशनल GC में उपयोग", "A और B दोनों", "चीजें याद रखने के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 207
  },
  {
    "num": 208,
    "question_en": "What is 'Humongous Allocation' in G1 GC?",
    "question_hi": "G1 GC में 'Humongous Allocation' क्या है?",
    "options_en": ["For very large objects", "Objects larger than region half", "Both A and B", "For small objects"],
    "options_hi": ["बहुत बड़े ऑब्जेक्ट्स के लिए", "ऑब्जेक्ट्स रीजन हाफ से बड़े", "A और B दोनों", "छोटे ऑब्जेक्ट्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 208
  },
  {
    "num": 209,
    "question_en": "What is 'Metaspace' in Java 8+?",
    "question_hi": "Java 8+ में 'Metaspace' क्या है?",
    "options_en": ["Replaces PermGen", "Stores class metadata", "Both A and B", "For metadata only"],
    "options_hi": ["PermGen की जगह लेता है", "क्लास मेटाडेटा स्टोर करता है", "A और B दोनों", "केवल मेटाडेटा के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 209
  },
  {
    "num": 210,
    "question_en": "What is 'Compressed Oops' (Ordinary Object Pointers)?",
    "question_hi": "'Compressed Oops' (Ordinary Object Pointers) क्या है?",
    "options_en": ["Compresses object pointers", "Saves memory on 64-bit JVM", "Both A and B", "For compressed objects"],
    "options_hi": ["ऑब्जेक्ट पॉइंटर्स को कम्प्रेस करता है", "64-bit JVM पर मेमोरी सेव करता है", "A और B दोनों", "कम्प्रेस्ड ऑब्जेक्ट्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 210
  },
  {
    "num": 211,
    "question_en": "What is 'TLAB' (Thread Local Allocation Buffer)?",
    "question_hi": "'TLAB' (Thread Local Allocation Buffer) क्या है?",
    "options_en": ["Per-thread allocation buffer", "Reduces synchronization overhead", "Both A and B", "Global allocation buffer"],
    "options_hi": ["प्रति-थ्रेड एलोकेशन बफर", "सिंक्रोनाइज़ेशन ओवरहेड कम करता है", "A और B दोनों", "ग्लोबल एलोकेशन बफर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 211
  },
  {
    "num": 212,
    "question_en": "What is 'Safepoint' in JVM?",
    "question_hi": "JVM में 'Safepoint' क्या है?",
    "options_en": ["Point where thread state is known", "Required for GC, deoptimization", "Both A and B", "Safe point in code"],
    "options_hi": ["वह पॉइंट जहाँ थ्रेड स्टेट ज्ञात हो", "GC, डीऑप्टिमाइज़ेशन के लिए आवश्यक", "A और B दोनों", "कोड में सेफ पॉइंट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 212
  },
  {
    "num": 213,
    "question_en": "What is 'Stop-The-World' pause in GC?",
    "question_hi": "GC में 'Stop-The-World' पॉज क्या है?",
    "options_en": ["All application threads stopped", "During GC operations", "Both A and B", "World stops literally"],
    "options_hi": ["सभी एप्लीकेशन थ्रेड्स स्टॉप हो जाते हैं", "GC ऑपरेशन्स के दौरान", "A और B दोनों", "दुनिया सचमुच रुक जाती है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 213
  },
  {
    "num": 214,
    "question_en": "What is 'Concurrent Mark Sweep' (CMS) GC?",
    "question_hi": "'Concurrent Mark Sweep' (CMS) GC क्या है?",
    "options_en": ["Mostly concurrent collector", "Aims to reduce pauses", "Both A and B", "Serial collector"],
    "options_hi": ["ज्यादातर कनकरंट कलेक्टर", "पॉजेस कम करने का लक्ष्य", "A और B दोनों", "सीरियल कलेक्टर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 214
  },
  {
    "num": 215,
    "question_en": "What is 'Garbage-First' (G1) GC?",
    "question_hi": "'Garbage-First' (G1) GC क्या है?",
    "options_en": ["Region-based collector", "Predictable pause times", "Both A and B", "Old generation only"],
    "options_hi": ["रीजन-बेस्ड कलेक्टर", "पूर्वानुमेय पॉज टाइम्स", "A और B दोनों", "केवल ओल्ड जेनरेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 215
  },
  {
    "num": 216,
    "question_en": "What is 'Shenandoah' GC?",
    "question_hi": "'Shenandoah' GC क्या है?",
    "options_en": ["Ultra-low pause time GC", "Concurrent compaction", "Both A and B", "High pause GC"],
    "options_hi": ["अल्ट्रा-लो पॉज टाइम GC", "कनकरंट कम्पैक्शन", "A और B दोनों", "हाई पॉज GC"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 216
  },
  {
    "num": 217,
    "question_en": "What is 'ZGC' (Z Garbage Collector)?",
    "question_hi": "'ZGC' (Z गार्बेज कलेक्टर) क्या है?",
    "options_en": ["Scalable low-latency GC", "Pauses < 10ms", "Both A and B", "High latency GC"],
    "options_hi": ["स्केलेबल लो-लेटेंसी GC", "पॉजेस < 10ms", "A और B दोनों", "हाई लेटेंसी GC"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 217
  },
  {
    "num": 218,
    "question_en": "What is 'Epsilon' GC?",
    "question_hi": "'Epsilon' GC क्या है?",
    "options_en": ["No-op garbage collector", "For performance testing", "Both A and B", "Full-featured GC"],
    "options_hi": ["नो-ऑप गार्बेज कलेक्टर", "परफॉर्मेंस टेस्टिंग के लिए", "A और B दोनों", "फुल-फीचर्ड GC"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 218
  },
  {
    "num": 219,
    "question_en": "What is 'Java Platform Module System' (JPMS)?",
    "question_hi": "'Java Platform Module System' (JPMS) क्या है?",
    "options_en": ["Java 9 module system", "Strong encapsulation", "Both A and B", "Package system"],
    "options_hi": ["Java 9 मॉड्यूल सिस्टम", "स्ट्रॉन्ग एनकैप्सुलेशन", "A और B दोनों", "पैकेज सिस्टम"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 219
  },
  {
    "num": 220,
    "question_en": "What is 'ServiceLoader' in module system?",
    "question_hi": "मॉड्यूल सिस्टम में 'ServiceLoader' क्या है?",
    "options_en": ["Loads service providers", "uses clause in module-info", "Both A and B", "For loading classes"],
    "options_hi": ["सर्विस प्रोवाइडर्स लोड करता है", "module-info में uses क्लॉज", "A और B दोनों", "क्लासेस लोड करने के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 220
  },
  {
    "num": 221,
    "question_en": "What is 'Automatic-Module' in JPMS?",
    "question_hi": "JPMS में 'Automatic-Module' क्या है?",
    "options_en": ["JAR without module-info becomes automatic module", "Module name derived from JAR", "Both A and B", "Manual module"],
    "options_hi": ["module-info के बिना JAR ऑटोमेटिक मॉड्यूल बन जाता है", "JAR से मॉड्यूल नाम व्युत्पन्न", "A और B दोनों", "मैनुअल मॉड्यूल"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 221
  },
  {
    "num": 222,
    "question_en": "What is 'Unnamed Module' in JPMS?",
    "question_hi": "JPMS में 'Unnamed Module' क्या है?",
    "options_en": ["All classes on classpath", "Reads all modules", "Both A and B", "Named module"],
    "options_hi": ["क्लासपाथ पर सभी क्लासेज", "सभी मॉड्यूल्स पढ़ता है", "A और B दोनों", "नामित मॉड्यूल"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 222
  },
  {
    "num": 223,
    "question_en": "What is 'Module Resolution' in JPMS?",
    "question_hi": "JPMS में 'Module Resolution' क्या है?",
    "options_en": ["Process of finding required modules", "Creates module graph", "Both A and B", "For resolving conflicts"],
    "options_hi": ["आवश्यक मॉड्यूल्स ढूंढने की प्रक्रिया", "मॉड्यूल ग्राफ बनाता है", "A और B दोनों", "कॉन्फ्लिक्ट्स रिजॉल्व करने के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 223
  },
  {
    "num": 224,
    "question_en": "What is 'Module Layer' in JPMS?",
    "question_hi": "JPMS में 'Module Layer' क्या है?",
    "options_en": ["Hierarchy of module graphs", "For plugins, extensions", "Both A and B", "Single layer only"],
    "options_hi": ["मॉड्यूल ग्राफ्स की हायरार्की", "प्लगइन्स, एक्सटेंशन्स के लिए", "A और B दोनों", "केवल सिंगल लेयर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 224
  },
  {
    "num": 225,
    "question_en": "What is 'Readability' in modules?",
    "question_hi": "मॉड्यूल्स में 'Readability' क्या है?",
    "options_en": ["One module can read another", "Established by requires", "Both A and B", "For reading files"],
    "options_hi": ["एक मॉड्यूल दूसरे को पढ़ सकता है", "requires द्वारा स्थापित", "A और B दोनों", "फाइल्स पढ़ने के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 225
  },
  {
    "num": 226,
    "question_en": "What is 'Accessibility' in modules?",
    "question_hi": "मॉड्यूल्स में 'Accessibility' क्या है?",
    "options_en": ["Combination of readability and exports", "Determines if type is accessible", "Both A and B", "Same as readability"],
    "options_hi": ["रीडेबिलिटी और एक्सपोर्ट्स का संयोजन", "निर्धारित करता है कि क्या टाइप एक्सेसिबल है", "A और B दोनों", "रीडेबिलिटी के समान"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 226
  },
  {
    "num": 227,
    "question_en": "What is 'Class Data Sharing' (CDS)?",
    "question_hi": "'Class Data Sharing' (CDS) क्या है?",
    "options_en": ["Shares class metadata between JVMs", "Improves startup time", "Both A and B", "For data sharing only"],
    "options_hi": ["JVMs के बीच क्लास मेटाडेटा शेयर करता है", "स्टार्टअप टाइम इम्प्रूव करता है", "A और B दोनों", "केवल डेटा शेयरिंग के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 227
  },
  {
    "num": 228,
    "question_en": "What is 'Application Class Data Sharing' (AppCDS)?",
    "question_hi": "'Application Class Data Sharing' (AppCDS) क्या है?",
    "options_en": ["Extends CDS to application classes", "Java 10+ feature", "Both A and B", "Only system classes"],
    "options_hi": ["CDS को एप्लीकेशन क्लासेज तक बढ़ाता है", "Java 10+ फीचर", "A और B दोनों", "केवल सिस्टम क्लासेज"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 228
  },
  {
    "num": 229,
    "question_en": "What is 'Dynamic CDS Archive'?",
    "question_hi": "'Dynamic CDS Archive' क्या है?",
    "options_en": ["Creates CDS archive at runtime", "Java 13+ feature", "Both A and B", "Static archive only"],
    "options_hi": ["रनटाइम पर CDS आर्काइव बनाता है", "Java 13+ फीचर", "A और B दोनों", "केवल स्टेटिक आर्काइव"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 229
  },
  {
    "num": 230,
    "question_en": "What is 'AOT' (Ahead-Of-Time) Compilation?",
    "question_hi": "'AOT' (Ahead-Of-Time) कंपाइलेशन क्या है?",
    "options_en": ["Compiles to native code before runtime", "Improves startup time", "Both A and B", "JIT compilation"],
    "options_hi": ["रनटाइम से पहले नेटिव कोड में कंपाइल करता है", "स्टार्टअप टाइम इम्प्रूव करता है", "A और B दोनों", "JIT कंपाइलेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 230
  },
  {
    "num": 231,
    "question_en": "What is 'jaotc' tool?",
    "question_hi": "'jaotc' टूल क्या है?",
    "options_en": ["AOT compiler in Java 9", "Creates shared libraries", "Both A and B", "JIT compiler"],
    "options_hi": ["Java 9 में AOT कंपाइलर", "शेयर्ड लाइब्रेरीज बनाता है", "A और B दोनों", "JIT कंपाइलर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 231
  },
  {
    "num": 232,
    "question_en": "What is 'JVMCI' (JVM Compiler Interface)?",
    "question_hi": "'JVMCI' (JVM कंपाइलर इंटरफेस) क्या है?",
    "options_en": ["Interface for alternative compilers", "Used by GraalVM", "Both A and B", "For JVM compilation"],
    "options_hi": ["अल्टरनेटिव कंपाइलर्स के लिए इंटरफेस", "GraalVM द्वारा उपयोग", "A और B दोनों", "JVM कंपाइलेशन के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 232
  },
  {
    "num": 233,
    "question_en": "What is 'Truffle' framework?",
    "question_hi": "'Truffle' फ्रेमवर्क क्या है?",
    "options_en": ["Language implementation framework", "Part of GraalVM", "Both A and B", "For chocolate"],
    "options_hi": ["लैंग्वेज इम्प्लीमेंटेशन फ्रेमवर्क", "GraalVM का भाग", "A और B दोनों", "चॉकलेट के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 233
  },
  {
    "num": 234,
    "question_en": "What is 'Substrate VM'?",
    "question_hi": "'Substrate VM' क्या है?",
    "options_en": ["AOT compilation framework", "Part of GraalVM", "Both A and B", "Substitute VM"],
    "options_hi": ["AOT कंपाइलेशन फ्रेमवर्क", "GraalVM का भाग", "A और B दोनों", "सब्स्टिट्यूट VM"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 234
  },
  {
    "num": 235,
    "question_en": "What is 'Java Memory Model' (JMM)?",
    "question_hi": "'Java Memory Model' (JMM) क्या है?",
    "options_en": ["Formal specification of memory behavior", "Guarantees for multithreaded programs", "Both A and B", "Memory allocation model"],
    "options_hi": ["मेमोरी बिहेवियर का फॉर्मल स्पेसिफिकेशन", "मल्टीथ्रेडेड प्रोग्राम्स के लिए गारंटी", "A और B दोनों", "मेमोरी एलोकेशन मॉडल"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 235
  },
  {
    "num": 236,
    "question_en": "What is 'Happens-Before' relationship in JMM?",
    "question_hi": "JMM में 'Happens-Before' रिलेशनशिप क्या है?",
    "options_en": ["Defines memory visibility guarantees", "Synchronization order", "Both A and B", "Time order"],
    "options_hi": ["मेमोरी विजिबिलिटी गारंटी डिफाइन करता है", "सिंक्रोनाइज़ेशन ऑर्डर", "A और B दोनों", "टाइम ऑर्डर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 236
  },
  {
    "num": 237,
    "question_en": "What is 'Memory Barrier' or 'Fence'?",
    "question_hi": "'Memory Barrier' या 'Fence' क्या है?",
    "options_en": ["Enforces ordering of memory operations", "Prevents reordering", "Both A and B", "Physical barrier"],
    "options_hi": ["मेमोरी ऑपरेशन्स के ऑर्डरिंग को लागू करता है", "रीऑर्डरिंग रोकता है", "A और B दोनों", "फिजिकल बैरियर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 237
  },
  {
    "num": 238,
    "question_en": "What is 'False Sharing' in concurrent programming?",
    "question_hi": "कनकरंट प्रोग्रामिंग में 'False Sharing' क्या है?",
    "options_en": ["Performance degradation due to cache lines", "Unrelated variables share cache line", "Both A and B", "True sharing"],
    "options_hi": ["कैश लाइन्स के कारण परफॉर्मेंस डिग्रेडेशन", "असंबंधित वेरिएबल्स कैश लाइन शेयर करते हैं", "A और B दोनों", "ट्रू शेयरिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 238
  },
  {
    "num": 239,
    "question_en": "What is '@Contended' annotation?",
    "question_hi": "'@Contended' एनोटेशन क्या है?",
    "options_en": ["Prevents false sharing", "Adds padding to fields", "Both A and B", "For content alignment"],
    "options_hi": ["फॉल्स शेयरिंग रोकता है", "फील्ड्स में पैडिंग जोड़ता है", "A और B दोनों", "कंटेंट अलाइनमेंट के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 239
  },
  {
    "num": 240,
    "question_en": "What is 'Varargs' (Variable Arguments)?",
    "question_hi": "'Varargs' (Variable Arguments) क्या है?",
    "options_en": ["Variable number of arguments", "Syntax: Type... name", "Both A and B", "Fixed arguments"],
    "options_hi": ["आर्ग्युमेंट्स की वेरिएबल संख्या", "सिंटैक्स: Type... name", "A और B दोनों", "फिक्स्ड आर्ग्युमेंट्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 240
  },
  {
    "num": 241,
    "question_en": "What is 'Bridge Method' in generics?",
    "question_hi": "जेनेरिक्स में 'Bridge Method' क्या है?",
    "options_en": ["Synthetic method generated by compiler", "Maintains polymorphism with generics", "Both A and B", "Real method"],
    "options_hi": ["कंपाइलर द्वारा जेनरेटेड सिंथेटिक मेथड", "जेनेरिक्स के साथ पॉलीमॉर्फिज्म मेंटेन करता है", "A और B दोनों", "रियल मेथड"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 241
  },
  {
    "num": 242,
    "question_en": "What is 'Reifiable Type' in generics?",
    "question_hi": "जेनेरिक्स में 'Reifiable Type' क्या है?",
    "options_en": ["Type information available at runtime", "Non-generic types, raw types", "Both A and B", "Non-reifiable type"],
    "options_hi": ["रनटाइम पर उपलब्ध टाइप इन्फॉर्मेशन", "नॉन-जेनेरिक टाइप्स, रॉ टाइप्स", "A और B दोनों", "नॉन-रेइफाएबल टाइप"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 242
  },
  {
    "num": 243,
    "question_en": "What is 'Heap Dump'?",
    "question_hi": "'Heap Dump' क्या है?",
    "options_en": ["Snapshot of heap memory", "For memory leak analysis", "Both A and B", "Stack dump"],
    "options_hi": ["हीप मेमोरी का स्नैपशॉट", "मेमोरी लीक एनालिसिस के लिए", "A और B दोनों", "स्टैक डंप"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 243
  },
  {
    "num": 244,
    "question_en": "What is 'Thread Dump'?",
    "question_hi": "'Thread Dump' क्या है?",
    "options_en": ["Snapshot of all threads", "For deadlock analysis", "Both A and B", "Heap dump"],
    "options_hi": ["सभी थ्रेड्स का स्नैपशॉट", "डेडलॉक एनालिसिस के लिए", "A और B दोनों", "हीप डंप"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 244
  },
  {
    "num": 245,
    "question_en": "What is 'JVM Heap Histogram'?",
    "question_hi": "'JVM Heap Histogram' क्या है?",
    "options_en": ["Shows object count by class", "jmap -histo command", "Both A and B", "For history only"],
    "options_hi": ["क्लास द्वारा ऑब्जेक्ट काउंट दिखाता है", "jmap -histo कमांड", "A और B दोनों", "केवल हिस्ट्री के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 245
  },
  {
    "num": 246,
    "question_en": "What is 'String Deduplication' in G1 GC?",
    "question_hi": "G1 GC में 'String Deduplication' क्या है?",
    "options_en": ["Removes duplicate strings", "Saves memory", "Both A and B", "Creates duplicates"],
    "options_hi": ["डुप्लिकेट स्ट्रिंग्स को हटाता है", "मेमोरी सेव करता है", "A और B दोनों", "डुप्लिकेट्स बनाता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 246
  },
  {
    "num": 247,
    "question_en": "What is 'Reference Queue'?",
    "question_hi": "'Reference Queue' क्या है?",
    "options_en": ["Queue for cleared references", "Used with WeakReference, etc.", "Both A and B", "For queue operations"],
    "options_hi": ["क्लियर्ड रेफरेंसेस के लिए क्यू", "WeakReference, आदि के साथ उपयोग", "A और B दोनों", "क्यू ऑपरेशन्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 247
  },
  {
    "num": 248,
    "question_en": "What is 'Cleaner' API (Java 9)?",
    "question_hi": "'Cleaner' API (Java 9) क्या है?",
    "options_en": ["Replacement for finalize()", "More predictable cleanup", "Both A and B", "For cleaning objects"],
    "options_hi": ["finalize() का रिप्लेसमेंट", "अधिक पूर्वानुमेय क्लीनअप", "A और B दोनों", "ऑब्जेक्ट्स साफ करने के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 248
  },
  {
    "num": 249,
    "question_en": "What is 'Stack Walking API' (Java 9)?",
    "question_hi": "'Stack Walking API' (Java 9) क्या है?",
    "options_en": ["Efficient stack trace access", "StackWalker class", "Both A and B", "For walking only"],
    "options_hi": ["एफिशिएंट स्टैक ट्रेस एक्सेस", "StackWalker क्लास", "A और B दोनों", "केवल वॉकिंग के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 249
  },
  {
    "num": 250,
    "question_en": "What is 'Process API Updates' (Java 9)?",
    "question_hi": "'Process API Updates' (Java 9) क्या है?",
    "options_en": ["Improved process control", "ProcessHandle class", "Both A and B", "Old Process API"],
    "options_hi": ["इम्प्रूव्ड प्रोसेस कंट्रोल", "ProcessHandle क्लास", "A और B दोनों", "पुराना Process API"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 250
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