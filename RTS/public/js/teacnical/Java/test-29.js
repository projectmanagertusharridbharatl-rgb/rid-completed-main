 
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
    "num": 301,
    "question_en": "What is 'JVM Checkpoint/Restore' (CRaC)?",
    "question_hi": "'JVM Checkpoint/Restore' (CRaC) क्या है?",
    "options_en": ["Checkpoint and restore Java applications", "Fast startup from snapshot", "Both A and B", "For crash recovery only"],
    "options_hi": ["Java एप्लिकेशन्स का चेकपॉइंट और रिस्टोर", "स्नैपशॉट से फास्ट स्टार्टअप", "A और B दोनों", "केवल क्रैश रिकवरी के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 301
  },
  {
    "num": 302,
    "question_en": "What is 'Java Inline Types' (Project Valhalla)?",
    "question_hi": "'Java Inline Types' (Project Valhalla) क्या है?",
    "options_en": ["Value-based classes without object overhead", "Similar to primitive types", "Both A and B", "Regular classes"],
    "options_hi": ["ऑब्जेक्ट ओवरहेड के बिना वैल्यू-बेस्ड क्लासेज", "प्रिमिटिव टाइप्स के समान", "A और B दोनों", "रेगुलर क्लासेज"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 302
  },
  {
    "num": 303,
    "question_en": "What is 'Generic Specialization' (Project Valhalla)?",
    "question_hi": "'Generic Specialization' (Project Valhalla) क्या है?",
    "options_en": ["Specialized generics for primitive types", "Eliminates boxing in generics", "Both A and B", "Generic erasure"],
    "options_hi": ["प्रिमिटिव टाइप्स के लिए स्पेशलाइज़्ड जेनेरिक्स", "जेनेरिक्स में बॉक्सिंग खत्म करता है", "A और B दोनों", "जेनेरिक इरेज़र"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 303
  },
  {
    "num": 304,
    "question_en": "What is 'Vector API' (Project Panama)?",
    "question_hi": "'Vector API' (Project Panama) क्या है?",
    "options_en": ["SIMD operations in Java", "For CPU vector instructions", "Both A and B", "For vectors only"],
    "options_hi": ["Java में SIMD ऑपरेशन्स", "CPU वेक्टर इंस्ट्रक्शन्स के लिए", "A और B दोनों", "केवल वेक्टर्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 304
  },
  {
    "num": 305,
    "question_en": "What is 'MemorySegment' and 'MemoryAddress'?",
    "question_hi": "'MemorySegment' और 'MemoryAddress' क्या है?",
    "options_en": ["Foreign memory access API", "Safe alternative to Unsafe", "Both A and B", "Regular memory"],
    "options_hi": ["फॉरेन मेमोरी एक्सेस API", "Unsafe का सेफ विकल्प", "A और B दोनों", "रेगुलर मेमोरी"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 305
  },
  {
    "num": 306,
    "question_en": "What is 'Structured Access' in Foreign Function API?",
    "question_hi": "फॉरेन फंक्शन API में 'Structured Access' क्या है?",
    "options_en": ["Type-safe foreign memory access", "Using VarHandle with layouts", "Both A and B", "Unstructured access"],
    "options_hi": ["टाइप-सेफ फॉरेन मेमोरी एक्सेस", "लेआउट्स के साथ VarHandle उपयोग", "A और B दोनों", "अनस्ट्रक्चर्ड एक्सेस"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 306
  },
  {
    "num": 307,
    "question_en": "What is 'Java Dynamic Proxy' limitations?",
    "question_hi": "'Java Dynamic Proxy' की सीमाएँ क्या हैं?",
    "options_en": ["Only interfaces, not classes", "Performance overhead", "Both A and B", "No limitations"],
    "options_hi": ["केवल इंटरफेस, क्लासेज नहीं", "परफॉर्मेंस ओवरहेड", "A और B दोनों", "कोई सीमा नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 307
  },
  {
    "num": 308,
    "question_en": "What is 'ByteBuddy' vs 'CGLIB' vs 'Javassist'?",
    "question_hi": "'ByteBuddy', 'CGLIB' और 'Javassist' में क्या अंतर है?",
    "options_en": ["Different bytecode manipulation libraries", "Different abstraction levels", "Both A and B", "Same library"],
    "options_hi": ["अलग-अलग बाइटकोड मैनिपुलेशन लाइब्रेरीज", "अलग-अलग एब्स्ट्रैक्शन लेवल्स", "A और B दोनों", "एक ही लाइब्रेरी"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 308
  },
  {
    "num": 309,
    "question_en": "What is 'Runtime Code Generation' trade-offs?",
    "question_hi": "'Runtime Code Generation' के ट्रेड-ऑफ क्या हैं?",
    "options_en": ["Flexibility vs Performance", "Memory vs Speed", "Both A and B", "No trade-offs"],
    "options_hi": ["फ्लेक्सिबिलिटी vs परफॉर्मेंस", "मेमोरी vs स्पीड", "A और B दोनों", "कोई ट्रेड-ऑफ नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 309
  },
  {
    "num": 310,
    "question_en": "What is 'ClassValue' class?",
    "question_hi": "'ClassValue' क्लास क्या है?",
    "options_en": ["Cache values per class", "Thread-local for classes", "Both A and B", "For class values only"],
    "options_hi": ["प्रति क्लास वैल्यूज कैश करता है", "क्लासेज के लिए थ्रेड-लोकल", "A और B दोनों", "केवल क्लास वैल्यूज के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 310
  },
  {
    "num": 311,
    "question_en": "What is 'MethodHandle' combinators?",
    "question_hi": "'MethodHandle' कॉम्बिनेटर्स क्या हैं?",
    "options_en": ["Methods to combine MethodHandles", "foldArguments, filterArguments", "Both A and B", "Simple handles"],
    "options_hi": ["MethodHandles को कंबाइन करने की मेथड्स", "foldArguments, filterArguments", "A और B दोनों", "सिंपल हैंडल्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 311
  },
  {
    "num": 312,
    "question_en": "What is 'Lambda Metafactory'?",
    "question_hi": "'Lambda Metafactory' क्या है?",
    "options_en": ["Runtime lambda creation mechanism", "Uses invokedynamic", "Both A and B", "Compile-time lambdas"],
    "options_hi": ["रनटाइम लैम्बडा क्रिएशन मेकनिज्म", "invokedynamic उपयोग करता है", "A और B दोनों", "कंपाइल-टाइम लैम्बडास"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 312
  },
  {
    "num": 313,
    "question_en": "What is 'Serialization Filtering' (JEP 290)?",
    "question_hi": "'Serialization Filtering' (JEP 290) क्या है?",
    "options_en": ["Security feature for serialization", "Filters incoming streams", "Both A and B", "No filtering"],
    "options_hi": ["सीरियलाइज़ेशन के लिए सिक्योरिटी फीचर", "इनकमिंग स्ट्रीम्स फिल्टर करता है", "A और B दोनों", "कोई फिल्टरिंग नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 313
  },
  {
    "num": 314,
    "question_en": "What is 'ObjectInputFilter'?",
    "question_hi": "'ObjectInputFilter' क्या है?",
    "options_en": ["Interface for serialization filtering", "Allows/denies classes", "Both A and B", "Output filter"],
    "options_hi": ["सीरियलाइज़ेशन फिल्टरिंग के लिए इंटरफेस", "क्लासेज की अनुमति/अस्वीकृति", "A और B दोनों", "आउटपुट फिल्टर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 314
  },
  {
    "num": 315,
    "question_en": "What is 'Records Serialization'?",
    "question_hi": "'Records Serialization' क्या है?",
    "options_en": ["Special serialization for records", "Based on components", "Both A and B", "Same as classes"],
    "options_hi": ["रिकॉर्ड्स के लिए स्पेशल सीरियलाइज़ेशन", "कंपोनेंट्स पर आधारित", "A और B दोनों", "क्लासेज के समान"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 315
  },
  {
    "num": 316,
    "question_en": "What is 'Sealed Serialization'?",
    "question_hi": "'Sealed Serialization' क्या है?",
    "options_en": ["Serialization with sealed hierarchies", "Additional security", "Both A and B", "Open serialization"],
    "options_hi": ["सील्ड हायरार्कीज के साथ सीरियलाइज़ेशन", "अतिरिक्त सुरक्षा", "A और B दोनों", "ओपन सीरियलाइज़ेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 316
  },
  {
    "num": 317,
    "question_en": "What is 'Deserialization Bombs'?",
    "question_hi": "'Deserialization Bombs' क्या है?",
    "options_en": ["Malicious serialized objects", "Cause resource exhaustion", "Both A and B", "Safe objects"],
    "options_hi": ["मैलिशियस सीरियलाइज़्ड ऑब्जेक्ट्स", "रिसोर्स एक्जॉशन का कारण", "A और B दोनों", "सेफ ऑब्जेक्ट्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 317
  },
  {
    "num": 318,
    "question_en": "What is 'Java Serialization Alternatives'?",
    "question_hi": "'Java Serialization Alternatives' क्या है?",
    "options_en": ["JSON, Protobuf, Avro, etc.", "External serialization formats", "Both A and B", "Only Java serialization"],
    "options_hi": ["JSON, Protobuf, Avro, आदि", "एक्सटर्नल सीरियलाइज़ेशन फॉर्मेट्स", "A और B दोनों", "केवल Java सीरियलाइज़ेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 318
  },
  {
    "num": 319,
    "question_en": "What is 'Java Serialization Performance Issues'?",
    "question_hi": "'Java Serialization Performance Issues' क्या है?",
    "options_en": ["Slow, large payloads", "Reflection overhead", "Both A and B", "Fast and compact"],
    "options_hi": ["स्लो, बड़े पेलोड्स", "रिफ्लेक्शन ओवरहेड", "A और B दोनों", "फास्ट और कॉम्पैक्ट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 319
  },
  {
    "num": 320,
    "question_en": "What is 'Externalizable' vs 'Serializable'?",
    "question_hi": "'Externalizable' और 'Serializable' में क्या अंतर है?",
    "options_en": ["Externalizable: custom serialization", "More control, more code", "Both A and B", "Same interface"],
    "options_hi": ["Externalizable: कस्टम सीरियलाइज़ेशन", "अधिक कंट्रोल, अधिक कोड", "A और B दोनों", "एक ही इंटरफेस"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 320
  },
  {
    "num": 321,
    "question_en": "What is 'Java Serialization Whitelist/Blacklist'?",
    "question_hi": "'Java Serialization Whitelist/Blacklist' क्या है?",
    "options_en": ["Security patterns for serialization", "Allow/deny specific classes", "Both A and B", "No patterns"],
    "options_hi": ["सीरियलाइज़ेशन के लिए सिक्योरिटी पैटर्न्स", "विशिष्ट क्लासेज की अनुमति/अस्वीकृति", "A और B दोनों", "कोई पैटर्न नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 321
  },
  {
    "num": 322,
    "question_en": "What is 'Java Serialization Proxy Pattern'?",
    "question_hi": "'Java Serialization Proxy Pattern' क्या है?",
    "options_en": ["Design pattern for serialization", "writeReplace/readResolve methods", "Both A and B", "No pattern"],
    "options_hi": ["सीरियलाइज़ेशन के लिए डिजाइन पैटर्न", "writeReplace/readResolve मेथड्स", "A और B दोनों", "कोई पैटर्न नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 322
  },
  {
    "num": 323,
    "question_en": "What is 'Java Serialization Version UID' importance?",
    "question_hi": "'Java Serialization Version UID' का क्या महत्व है?",
    "options_en": ["Ensures compatibility", "Prevents InvalidClassException", "Both A and B", "No importance"],
    "options_hi": ["कंपैटिबिलिटी सुनिश्चित करता है", "InvalidClassException रोकता है", "A और B दोनों", "कोई महत्व नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 323
  },
  {
    "num": 324,
    "question_en": "What is 'Java Serialization Performance Optimization'?",
    "question_hi": "'Java Serialization Performance Optimization' क्या है?",
    "options_en": ["Custom serialization", "Reducing payload size", "Both A and B", "No optimization"],
    "options_hi": ["कस्टम सीरियलाइज़ेशन", "पेलोड साइज कम करना", "A और B दोनों", "कोई ऑप्टिमाइज़ेशन नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 324
  },
  {
    "num": 325,
    "question_en": "What is 'Java Serialization Security Best Practices'?",
    "question_hi": "'Java Serialization Security Best Practices' क्या है?",
    "options_en": ["Validate input, use filtering", "Avoid default serialization", "Both A and B", "No security needed"],
    "options_hi": ["इनपुट वैलिडेट करें, फिल्टरिंग उपयोग करें", "डिफ़ॉल्ट सीरियलाइज़ेशन से बचें", "A और B दोनों", "कोई सुरक्षा जरूरी नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 325
  },
  {
    "num": 326,
    "question_en": "What is 'Java Flight Recorder Continuous'?",
    "question_hi": "'Java Flight Recorder Continuous' क्या है?",
    "options_en": ["Always-on recording", "Low overhead profiling", "Both A and B", "On-demand only"],
    "options_hi": ["हमेशा-चालू रिकॉर्डिंग", "लो ओवरहेड प्रोफाइलिंग", "A और B दोनों", "केवल ऑन-डिमांड"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 326
  },
  {
    "num": 327,
    "question_en": "What is 'JFR Event Streaming'?",
    "question_hi": "'JFR Event Streaming' क्या है?",
    "options_en": ["Real-time event consumption", "jdk.jfr.consumer package", "Both A and B", "Batch processing"],
    "options_hi": ["रियल-टाइम इवेंट कंजम्पशन", "jdk.jfr.consumer पैकेज", "A और B दोनों", "बैच प्रोसेसिंग"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 327
  },
  {
    "num": 328,
    "question_en": "What is 'Custom JFR Events'?",
    "question_hi": "'Custom JFR Events' क्या है?",
    "options_en": ["User-defined JFR events", "@jdk.jfr.Event annotation", "Both A and B", "Only built-in events"],
    "options_hi": ["यूजर-डिफाइंड JFR इवेंट्स", "@jdk.jfr.Event एनोटेशन", "A और B दोनों", "केवल बिल्ट-इन इवेंट्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 328
  },
  {
    "num": 329,
    "question_en": "What is 'JMC (Java Mission Control) Agent'?",
    "question_hi": "'JMC (Java Mission Control) Agent' क्या है?",
    "options_en": ["Lightweight agent for production", "JFR without JMC UI", "Both A and B", "Only with JMC UI"],
    "options_hi": ["प्रोडक्शन के लिए लाइटवेट एजेंट", "JMC UI के बिना JFR", "A और B दोनों", "केवल JMC UI के साथ"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 329
  },
  {
    "num": 330,
    "question_en": "What is 'JFR in Containers' challenges?",
    "question_hi": "'JFR in Containers' की चुनौतियाँ क्या हैं?",
    "options_en": ["Resource limits, permissions", "Container-specific configuration", "Both A and B", "No challenges"],
    "options_hi": ["रिसोर्स लिमिट्स, परमिशन्स", "कंटेनर-स्पेसिफिक कॉन्फ़िगरेशन", "A और B दोनों", "कोई चुनौती नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 330
  },
  {
    "num": 331,
    "question_en": "What is 'Async Profiler'?",
    "question_hi": "'Async Profiler' क्या है?",
    "options_en": ["Low-overhead profiler", "CPU, allocation, lock profiling", "Both A and B", "High overhead"],
    "options_hi": ["लो-ओवरहेड प्रोफाइलर", "CPU, एलोकेशन, लॉक प्रोफाइलिंग", "A और B दोनों", "हाई ओवरहेड"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 331
  },
  {
    "num": 332,
    "question_en": "What is 'Java Microbenchmarking Pitfalls'?",
    "question_en": "जावा माइक्रोबेंचमार्किंग के खतरे क्या हैं?",
    "question_hi": "जावा माइक्रोबेंचमार्किंग के खतरे क्या हैं?",
    "options_en": ["Dead code elimination, JIT warmup", "Measurement errors", "Both A and B", "No pitfalls"],
    "options_hi": ["डेड कोड एलिमिनेशन, JIT वार्मअप", "माप त्रुटियाँ", "A और B दोनों", "कोई खतरा नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 332
  },
  {
    "num": 333,
    "question_en": "What is 'JMH State Objects'?",
    "question_hi": "'JMH State Objects' क्या है?",
    "options_en": ["Shared state in benchmarks", "@State annotation", "Both A and B", "No state"],
    "options_hi": ["बेंचमार्क्स में शेयर्ड स्टेट", "@State एनोटेशन", "A और B दोनों", "कोई स्टेट नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 333
  },
  {
    "num": 334,
    "question_en": "What is 'JMH Forking'?",
    "question_hi": "'JMH Forking' क्या है?",
    "options_en": ["Runs benchmarks in separate JVMs", "Isolates measurements", "Both A and B", "Single JVM"],
    "options_hi": ["अलग-अलग JVMs में बेंचमार्क चलाता है", "माप को आइसोलेट करता है", "A और B दोनों", "सिंगल JVM"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 334
  },
  {
    "num": 335,
    "question_en": "What is 'JMH Warmup Iterations'?",
    "question_hi": "'JMH Warmup Iterations' क्या है?",
    "options_en": ["Prepares JIT before measurement", "@Warmup annotation", "Both A and B", "No warmup"],
    "options_hi": ["माप से पहले JIT तैयार करता है", "@Warmup एनोटेशन", "A और B दोनों", "कोई वार्मअप नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 335
  },
  {
    "num": 336,
    "question_en": "What is 'Java Hidden Classes' (JEP 371)?",
    "question_hi": "'Java Hidden Classes' (JEP 371) क्या है?",
    "options_en": ["Non-discoverable classes", "For frameworks, dynamic proxies", "Both A and B", "Regular classes"],
    "options_hi": ["नॉन-डिस्कवरेबल क्लासेज", "फ्रेमवर्क्स, डायनामिक प्रॉक्सीज के लिए", "A और B दोनों", "रेगुलर क्लासेज"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 336
  },
  {
    "num": 337,
    "question_en": "What is 'Lookup.defineHiddenClass'?",
    "question_hi": "'Lookup.defineHiddenClass' क्या है?",
    "options_en": ["API for hidden classes", "Method in MethodHandles.Lookup", "Both A and B", "For regular classes"],
    "options_hi": ["हिडन क्लासेज के लिए API", "MethodHandles.Lookup में मेथड", "A और B दोनों", "रेगुलर क्लासेज के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 337
  },
  {
    "num": 338,
    "question_en": "What is 'ConstantDynamic' (Condy)?",
    "question_hi": "'ConstantDynamic' (Condy) क्या है?",
    "options_en": ["Dynamic constants", "invokedynamic for constants", "Both A and B", "Static constants"],
    "options_hi": ["डायनामिक कॉन्स्टेंट्स", "कॉन्स्टेंट्स के लिए invokedynamic", "A और B दोनों", "स्टेटिक कॉन्स्टेंट्स"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 338
  },
  {
    "num": 339,
    "question_en": "What is 'Java Static Analysis Tools'?",
    "question_hi": "'Java Static Analysis Tools' क्या है?",
    "options_en": ["FindBugs, SpotBugs, PMD, Checkstyle", "Code quality analysis", "Both A and B", "No tools"],
    "options_hi": ["FindBugs, SpotBugs, PMD, Checkstyle", "कोड क्वालिटी एनालिसिस", "A और B दोनों", "कोई टूल्स नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 339
  },
  {
    "num": 340,
    "question_en": "What is 'Bytecode Analysis Tools'?",
    "question_hi": "'Bytecode Analysis Tools' क्या है?",
    "options_en": ["ASM, BCEL, Javassist", "Analyze/manipulate bytecode", "Both A and B", "Source analysis only"],
    "options_hi": ["ASM, BCEL, Javassist", "बाइटकोड एनालाइज़/मैनिपुलेट करें", "A और B दोनों", "केवल सोर्स एनालिसिस"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 340
  },
  {
    "num": 341,
    "question_en": "What is 'Java Code Coverage Tools'?",
    "question_hi": "'Java Code Coverage Tools' क्या है?",
    "options_en": ["JaCoCo, Cobertura, Clover", "Measure test coverage", "Both A and B", "No coverage tools"],
    "options_hi": ["JaCoCo, Cobertura, Clover", "टेस्ट कवरेज मापें", "A और B दोनों", "कोई कवरेज टूल्स नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 341
  },
  {
    "num": 342,
    "question_en": "What is 'Java Dependency Analysis Tools'?",
    "question_hi": "'Java Dependency Analysis Tools' क्या है?",
    "options_en": ["JDepend, DepClean, JArchitect", "Analyze dependencies", "Both A and B", "No dependency tools"],
    "options_hi": ["JDepend, DepClean, JArchitect", "डिपेंडेंसीज एनालाइज़ करें", "A और B दोनों", "कोई डिपेंडेंसी टूल्स नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 342
  },
  {
    "num": 343,
    "question_en": "What is 'Java Security Tools'?",
    "question_hi": "'Java Security Tools' क्या है?",
    "options_en": ["OWASP Dependency Check, Snyk", "Vulnerability scanning", "Both A and B", "No security tools"],
    "options_hi": ["OWASP डिपेंडेंसी चेक, Snyk", "वल्नरेबिलिटी स्कैनिंग", "A और B दोनों", "कोई सिक्योरिटी टूल्स नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 343
  },
  {
    "num": 344,
    "question_en": "What is 'Java Build Tools Evolution'?",
    "question_hi": "'Java Build Tools Evolution' क्या है?",
    "options_en": ["Ant → Maven → Gradle", "Increasing functionality", "Both A and B", "Only Maven"],
    "options_hi": ["Ant → Maven → Gradle", "फंक्शनैलिटी बढ़ रही है", "A और B दोनों", "केवल Maven"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 344
  },
  {
    "num": 345,
    "question_en": "What is 'Gradle vs Maven' differences?",
    "question_hi": "'Gradle vs Maven' में क्या अंतर है?",
    "options_en": ["Gradle: Groovy/Kotlin DSL", "Maven: XML, Gradle: more flexible", "Both A and B", "Same tool"],
    "options_hi": ["Gradle: Groovy/Kotlin DSL", "Maven: XML, Gradle: अधिक लचीला", "A और B दोनों", "एक ही टूल"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 345
  },
  {
    "num": 346,
    "question_en": "What is 'Java Module System vs OSGi'?",
    "question_hi": "'Java Module System vs OSGi' में क्या अंतर है?",
    "options_en": ["JPMS: built-in, OSGi: framework", "Different dependency models", "Both A and B", "Same thing"],
    "options_hi": ["JPMS: बिल्ट-इन, OSGi: फ्रेमवर्क", "अलग-अलग डिपेंडेंसी मॉडल्स", "A और B दोनों", "एक ही चीज़"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 346
  },
  {
    "num": 347,
    "question_en": "What is 'Java Containerization Best Practices'?",
    "question_hi": "'Java Containerization Best Practices' क्या है?",
    "options_en": ["Use small base images", "Set memory limits", "Both A and B", "No best practices"],
    "options_hi": ["छोटी बेस इमेजेस उपयोग करें", "मेमोरी लिमिट्स सेट करें", "A और B दोनों", "कोई बेस्ट प्रैक्टिसेस नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 347
  },
  {
    "num": 348,
    "question_en": "What is 'Java in Serverless Environments'?",
    "question_hi": "'Java in Serverless Environments' क्या है?",
    "options_en": ["Cold start challenges", "Memory footprint optimization", "Both A and B", "No challenges"],
    "options_hi": ["कोल्ड स्टार्ट चैलेंजेज", "मेमोरी फुटप्रिंट ऑप्टिमाइज़ेशन", "A और B दोनों", "कोई चैलेंज नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 348
  },
  {
    "num": 349,
    "question_en": "What is 'Java GraalVM Native Image Limitations'?",
    "question_hi": "'Java GraalVM Native Image Limitations' क्या है?",
    "options_en": ["Reflection, dynamic proxies", "Runtime class loading", "Both A and B", "No limitations"],
    "options_hi": ["रिफ्लेक्शन, डायनामिक प्रॉक्सीज", "रनटाइम क्लास लोडिंग", "A और B दोनों", "कोई सीमाएँ नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 349
  },
  {
    "num": 350,
    "question_en": "What is 'Java Future Trends'?",
    "question_hi": "'Java Future Trends' क्या है?",
    "options_en": ["More performance, less boilerplate", "Better native integration", "Both A and B", "No future trends"],
    "options_hi": ["अधिक परफॉर्मेंस, कम बॉयलरप्लेट", "बेहतर नेटिव इंटीग्रेशन", "A और B दोनों", "कोई भविष्य के रुझान नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 350
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