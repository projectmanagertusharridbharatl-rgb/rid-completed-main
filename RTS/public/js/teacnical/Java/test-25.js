 
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
    "num": 101,
    "question_en": "What is the difference between 'fail-fast' and 'fail-safe' iterators?",
    "question_hi": "'fail-fast' और 'fail-safe' इटरेटर्स में क्या अंतर है?",
    "options_en": ["Fail-fast throws ConcurrentModificationException", "Fail-safe works on copy of collection", "Both A and B", "No difference"],
    "options_hi": ["Fail-fast ConcurrentModificationException फेंकता है", "Fail-safe कलेक्शन की कॉपी पर काम करता है", "A और B दोनों", "कोई अंतर नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 101
  },
  {
    "num": 102,
    "question_en": "What is 'type erasure' in Java generics?",
    "question_hi": "Java जेनेरिक्स में 'type erasure' क्या है?",
    "options_en": ["Removes type information at runtime", "Ensures backward compatibility", "Both A and B", "Adds type information"],
    "options_hi": ["रनटाइम पर टाइप इन्फॉर्मेशन हटाता है", "बैकवर्ड कम्पैटिबिलिटी सुनिश्चित करता है", "A और B दोनों", "टाइप इन्फॉर्मेशन जोड़ता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 102
  },
  {
    "num": 103,
    "question_en": "What is the purpose of 'java.util.ServiceLoader'?",
    "question_hi": "'java.util.ServiceLoader' का उद्देश्य क्या है?",
    "options_en": ["To load service providers", "For plugin architecture", "Both A and B", "For loading classes"],
    "options_hi": ["सर्विस प्रोवाइडर्स लोड करने के लिए", "प्लगइन आर्किटेक्चर के लिए", "A और B दोनों", "क्लासेस लोड करने के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 103
  },
  {
    "num": 104,
    "question_en": "What is 'soft reference' in Java?",
    "question_hi": "Java में 'soft reference' क्या है?",
    "options_en": ["Cleared only when memory is low", "For memory-sensitive caching", "Both A and B", "Strong reference"],
    "options_hi": ["केवल तब क्लियर होती है जब मेमोरी कम हो", "मेमोरी-सेंसिटिव कैशिंग के लिए", "A और B दोनों", "स्ट्रॉन्ग रेफरेंस"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 104
  },
  {
    "num": 105,
    "question_en": "What is 'weak reference' in Java?",
    "question_hi": "Java में 'weak reference' क्या है?",
    "options_en": ["Cleared on next GC cycle", "For canonicalizing mappings", "Both A and B", "Never cleared"],
    "options_hi": ["अगले GC साइकल पर क्लियर होती है", "कैनोनिकलाइज़िंग मैपिंग्स के लिए", "A और B दोनों", "कभी क्लियर नहीं होती"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 105
  },
  {
    "num": 106,
    "question_en": "What is 'invokedynamic' bytecode instruction?",
    "question_hi": "'invokedynamic' बाइटकोड इंस्ट्रक्शन क्या है?",
    "options_en": ["For dynamic language support", "Used by lambda expressions", "Both A and B", "For static calls"],
    "options_hi": ["डायनामिक लैंग्वेज सपोर्ट के लिए", "लैम्बडा एक्सप्रेशन्स द्वारा उपयोग", "A और B दोनों", "स्टेटिक कॉल्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 106
  },
  {
    "num": 107,
    "question_en": "What is 'method handles' in Java?",
    "question_hi": "Java में 'method handles' क्या है?",
    "options_en": ["Type-safe reference to method", "For reflective operations", "Both A and B", "For handling exceptions"],
    "options_hi": ["मेथड का टाइप-सेफ रेफरेंस", "रिफ्लेक्टिव ऑपरेशन्स के लिए", "A और B दोनों", "एक्सेप्शन हैंडलिंग के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 107
  },
  {
    "num": 108,
    "question_en": "What is 'VarHandle' in Java?",
    "question_hi": "Java में 'VarHandle' क्या है?",
    "options_en": ["Type-safe reference to variable", "For atomic operations", "Both A and B", "For variable declaration"],
    "options_hi": ["वेरिएबल का टाइप-सेफ रेफरेंस", "एटॉमिक ऑपरेशन्स के लिए", "A और B दोनों", "वेरिएबल डिक्लेरेशन के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 108
  },
  {
    "num": 109,
    "question_en": "What is 'flight recorder' in Java?",
    "question_hi": "Java में 'flight recorder' क्या है?",
    "options_en": ["For diagnostic profiling", "Low-overhead event collection", "Both A and B", "For airplane simulation"],
    "options_hi": ["डायग्नोस्टिक प्रोफाइलिंग के लिए", "लो-ओवरहेड इवेंट कलेक्शन", "A और B दोनों", "एयरप्लेन सिमुलेशन के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 109
  },
  {
    "num": 110,
    "question_en": "What is 'unmodifiable collection' vs 'immutable collection'?",
    "question_hi": "'unmodifiable collection' और 'immutable collection' में क्या अंतर है?",
    "options_en": ["Unmodifiable is view, immutable is copy", "Immutable guarantees no changes", "Both A and B", "No difference"],
    "options_hi": ["Unmodifiable व्यू है, immutable कॉपी है", "Immutable कोई बदलाव न होने की गारंटी देता है", "A और B दोनों", "कोई अंतर नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 110
  },
  {
    "num": 111,
    "question_en": "What is 'executor framework' in Java?",
    "question_hi": "Java में 'executor framework' क्या है?",
    "options_en": ["For thread management", "Decouples task submission from execution", "Both A and B", "For executing commands"],
    "options_hi": ["थ्रेड मैनेजमेंट के लिए", "टास्क सबमिशन को एक्जीक्यूशन से अलग करता है", "A और B दोनों", "कमांड्स एक्जीक्यूट करने के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 111
  },
  {
    "num": 112,
    "question_en": "What is 'callable' vs 'runnable'?",
    "question_hi": "'callable' और 'runnable' में क्या अंतर है?",
    "options_en": ["Callable returns value, Runnable doesn't", "Callable can throw checked exception", "Both A and B", "No difference"],
    "options_hi": ["Callable वैल्यू रिटर्न करता है, Runnable नहीं", "Callable चेक्ड एक्सेप्शन फेंक सकता है", "A और B दोनों", "कोई अंतर नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 112
  },
  {
    "num": 113,
    "question_en": "What is 'scheduled executor service'?",
    "question_hi": "'scheduled executor service' क्या है?",
    "options_en": ["For scheduled task execution", "Can schedule with delay or periodically", "Both A and B", "For immediate execution"],
    "options_hi": ["शेड्यूल्ड टास्क एक्जीक्यूशन के लिए", "डिले या पीरियोडिकली शेड्यूल कर सकता है", "A और B दोनों", "इमीडिएट एक्जीक्यूशन के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 113
  },
  {
    "num": 114,
    "question_en": "What is 'thread pool'?",
    "question_hi": "'thread pool' क्या है?",
    "options_en": ["Reuses existing threads", "Reduces thread creation overhead", "Both A and B", "Creates new thread each time"],
    "options_hi": ["मौजूदा थ्रेड्स को रीयूज़ करता है", "थ्रेड क्रिएशन ओवरहेड कम करता है", "A और B दोनों", "हर बार नया थ्रेड बनाता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 114
  },
  {
    "num": 115,
    "question_en": "What is 'java.util.concurrent.locks' package?",
    "question_hi": "'java.util.concurrent.locks' पैकेज क्या है?",
    "options_en": ["Advanced locking framework", "Provides ReentrantLock, ReadWriteLock", "Both A and B", "For traditional synchronized"],
    "options_hi": ["एडवांस्ड लॉकिंग फ्रेमवर्क", "ReentrantLock, ReadWriteLock प्रदान करता है", "A और B दोनों", "ट्रेडिशनल synchronized के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 115
  },
  {
    "num": 116,
    "question_en": "What is 'ReentrantLock'?",
    "question_hi": "'ReentrantLock' क्या है?",
    "options_en": ["Alternative to synchronized", "More flexible locking", "Both A and B", "Non-reentrant lock"],
    "options_hi": ["synchronized का विकल्प", "अधिक फ्लेक्सिबल लॉकिंग", "A और B दोनों", "नॉन-रीएंट्रेंट लॉक"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 116
  },
  {
    "num": 117,
    "question_en": "What is 'ReadWriteLock'?",
    "question_hi": "'ReadWriteLock' क्या है?",
    "options_en": ["Allows multiple readers, single writer", "Improves performance for read-heavy scenarios", "Both A and B", "Only allows one thread"],
    "options_hi": ["मल्टीपल रीडर्स, सिंगल राइटर की अनुमति देता है", "रीड-हैवी सिनेरियो के लिए परफॉर्मेंस इम्प्रूव करता है", "A और B दोनों", "केवल एक थ्रेड की अनुमति देता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 117
  },
  {
    "num": 118,
    "question_en": "What is 'CountDownLatch'?",
    "question_hi": "'CountDownLatch' क्या है?",
    "options_en": ["Waits for set of operations to complete", "One-time synchronization", "Both A and B", "For counting down"],
    "options_hi": ["ऑपरेशन्स के सेट के कंप्लीट होने का इंतज़ार करता है", "वन-टाइम सिंक्रोनाइज़ेशन", "A और B दोनों", "काउंट डाउन के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 118
  },
  {
    "num": 119,
    "question_en": "What is 'CyclicBarrier'?",
    "question_hi": "'CyclicBarrier' क्या है?",
    "options_en": ["Waits for set of threads to reach barrier", "Can be reused", "Both A and B", "One-time use only"],
    "options_hi": ["थ्रेड्स के सेट के बैरियर तक पहुँचने का इंतज़ार करता है", "रीयूज़ किया जा सकता है", "A और B दोनों", "केवल वन-टाइम यूज"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 119
  },
  {
    "num": 120,
    "question_en": "What is 'Semaphore'?",
    "question_hi": "'Semaphore' क्या है?",
    "options_en": ["Controls access to shared resource", "Maintains set of permits", "Both A and B", "For signaling only"],
    "options_hi": ["शेयर्ड रिसोर्स तक एक्सेस को कंट्रोल करता है", "परमिट्स का सेट मेंटेन करता है", "A और B दोनों", "केवल सिग्नलिंग के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 120
  },
  {
    "num": 121,
    "question_en": "What is 'Phaser'?",
    "question_hi": "'Phaser' क्या है?",
    "options_en": ["Reusable synchronization barrier", "Supports dynamic parties", "Both A and B", "Single use barrier"],
    "options_hi": ["रीयूज़ेबल सिंक्रोनाइज़ेशन बैरियर", "डायनामिक पार्टीज को सपोर्ट करता है", "A और B दोनों", "सिंगल यूज बैरियर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 121
  },
  {
    "num": 122,
    "question_en": "What is 'Exchanger'?",
    "question_hi": "'Exchanger' क्या है?",
    "options_en": ["Exchanges data between two threads", "Synchronization point", "Both A and B", "For thread communication"],
    "options_hi": ["दो थ्रेड्स के बीच डेटा एक्सचेंज करता है", "सिंक्रोनाइज़ेशन पॉइंट", "A और B दोनों", "थ्रेड कम्युनिकेशन के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 122
  },
  {
    "num": 123,
    "question_en": "What is 'CompletableFuture' composition?",
    "question_hi": "'CompletableFuture' कंपोज़िशन क्या है?",
    "options_en": ["Chaining multiple async operations", "thenApply, thenCompose methods", "Both A and B", "Single operation only"],
    "options_hi": ["मल्टीपल async ऑपरेशन्स को चेन करना", "thenApply, thenCompose मेथड्स", "A और B दोनों", "केवल सिंगल ऑपरेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 123
  },
  {
    "num": 124,
    "question_en": "What is 'parallel stream'?",
    "question_hi": "'parallel stream' क्या है?",
    "options_en": ["Uses ForkJoinPool for parallel processing", "Can improve performance for large datasets", "Both A and B", "Always sequential"],
    "options_hi": ["पैरेलल प्रोसेसिंग के लिए ForkJoinPool का उपयोग करता है", "बड़े डेटासेट के लिए परफॉर्मेंस इम्प्रूव कर सकता है", "A और B दोनों", "हमेशा सीक्वेंशियल"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 124
  },
  {
    "num": 125,
    "question_en": "What is 'Collectors.groupingBy'?",
    "question_hi": "'Collectors.groupingBy' क्या है?",
    "options_en": ["Groups elements by classifier", "Returns Map<K, List<T>>", "Both A and B", "For sorting elements"],
    "options_hi": ["एलिमेंट्स को क्लासिफायर द्वारा ग्रुप करता है", "Map<K, List<T>> रिटर्न करता है", "A और B दोनों", "एलिमेंट्स को सॉर्ट करने के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 125
  },
  {
    "num": 126,
    "question_en": "What is 'Collectors.partitioningBy'?",
    "question_hi": "'Collectors.partitioningBy' क्या है?",
    "options_en": ["Partitions elements by predicate", "Returns Map<Boolean, List<T>>", "Both A and B", "For partitioning disks"],
    "options_hi": ["एलिमेंट्स को प्रिडिकेट द्वारा पार्टिशन करता है", "Map<Boolean, List<T>> रिटर्न करता है", "A और B दोनों", "डिस्क्स पार्टिशन करने के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 126
  },
  {
    "num": 127,
    "question_en": "What is 'stream reduction'?",
    "question_hi": "'stream reduction' क्या है?",
    "options_en": ["Combines elements to produce single result", "reduce() method", "Both A and B", "For reducing size"],
    "options_hi": ["एलिमेंट्स को कंबाइन करके सिंगल रिजल्ट प्रोड्यूस करता है", "reduce() मेथड", "A और B दोनों", "साइज कम करने के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 127
  },
  {
    "num": 128,
    "question_en": "What is 'flatMap' operation?",
    "question_hi": "'flatMap' ऑपरेशन क्या है?",
    "options_en": ["Flattens nested streams", "Maps then flattens", "Both A and B", "Only maps"],
    "options_hi": ["नेस्टेड स्ट्रीम्स को फ्लैटन करता है", "मैप करता है फिर फ्लैटन करता है", "A और B दोनों", "केवल मैप करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 128
  },
  {
    "num": 129,
    "question_en": "What is 'peek' operation?",
    "question_hi": "'peek' ऑपरेशन क्या है?",
    "options_en": ["Intermediate operation for debugging", "Performs action without modifying stream", "Both A and B", "Terminal operation"],
    "options_hi": ["डिबगिंग के लिए इंटरमीडिएट ऑपरेशन", "स्ट्रीम को मॉडिफाई किए बिना एक्शन परफॉर्म करता है", "A और B दोनों", "टर्मिनल ऑपरेशन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 129
  },
  {
    "num": 130,
    "question_en": "What is 'primitive stream' (IntStream, LongStream, DoubleStream)?",
    "question_hi": "'primitive stream' (IntStream, LongStream, DoubleStream) क्या है?",
    "options_en": ["Avoids boxing overhead", "Specialized operations like sum(), average()", "Both A and B", "Same as Stream<Integer>"],
    "options_hi": ["बॉक्सिंग ओवरहेड से बचाता है", "विशेष ऑपरेशन्स जैसे sum(), average()", "A और B दोनों", "Stream<Integer> के समान"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 130
  },
  {
    "num": 131,
    "question_en": "What is 'spliterator'?",
    "question_hi": "'spliterator' क्या है?",
    "options_en": ["Splittable Iterator", "For parallel stream processing", "Both A and B", "Simple iterator"],
    "options_hi": ["स्प्लिटेबल इटरेटर", "पैरेलल स्ट्रीम प्रोसेसिंग के लिए", "A और B दोनों", "सिंपल इटरेटर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 131
  },
  {
    "num": 132,
    "question_en": "What is 'java.time' package?",
    "question_hi": "'java.time' पैकेज क्या है?",
    "options_en": ["Date-Time API introduced in Java 8", "Immutable and thread-safe", "Both A and B", "Old Date API"],
    "options_hi": ["Java 8 में पेश किया गया Date-Time API", "इम्यूटेबल और थ्रेड-सेफ", "A और B दोनों", "पुराना Date API"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 132
  },
  {
    "num": 133,
    "question_en": "What is 'LocalDate' vs 'LocalDateTime'?",
    "question_hi": "'LocalDate' और 'LocalDateTime' में क्या अंतर है?",
    "options_en": ["LocalDate has date only", "LocalDateTime has date and time", "Both A and B", "No difference"],
    "options_hi": ["LocalDate में केवल डेट होता है", "LocalDateTime में डेट और टाइम होता है", "A और B दोनों", "कोई अंतर नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 133
  },
  {
    "num": 134,
    "question_en": "What is 'ZonedDateTime'?",
    "question_hi": "'ZonedDateTime' क्या है?",
    "options_en": ["Date-time with timezone", "For timezone-aware applications", "Both A and B", "Without timezone"],
    "options_hi": ["टाइमज़ोन के साथ डेट-टाइम", "टाइमज़ोन-अवेयर एप्लीकेशन्स के लिए", "A और B दोनों", "बिना टाइमज़ोन के"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 134
  },
  {
    "num": 135,
    "question_en": "What is 'Duration' vs 'Period'?",
    "question_hi": "'Duration' और 'Period' में क्या अंतर है?",
    "options_en": ["Duration for time-based amount", "Period for date-based amount", "Both A and B", "No difference"],
    "options_hi": ["टाइम-बेस्ड अमाउंट के लिए Duration", "डेट-बेस्ड अमाउंट के लिए Period", "A और B दोनों", "कोई अंतर नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 135
  },
  {
    "num": 136,
    "question_en": "What is 'DateTimeFormatter'?",
    "question_hi": "'DateTimeFormatter' क्या है?",
    "options_en": ["Thread-safe formatter", "For parsing and formatting", "Both A and B", "Not thread-safe"],
    "options_hi": ["थ्रेड-सेफ फॉर्मेटर", "पार्सिंग और फॉर्मेटिंग के लिए", "A और B दोनों", "थ्रेड-सेफ नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 136
  },
  {
    "num": 137,
    "question_en": "What is 'java.nio' package?",
    "question_hi": "'java.nio' पैकेज क्या है?",
    "options_en": ["New I/O API", "Non-blocking I/O", "Both A and B", "Old I/O API"],
    "options_hi": ["नया I/O API", "नॉन-ब्लॉकिंग I/O", "A और B दोनों", "पुराना I/O API"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 137
  },
  {
    "num": 138,
    "question_en": "What is 'ByteBuffer'?",
    "question_hi": "'ByteBuffer' क्या है?",
    "options_en": ["Container for bytes", "Used in NIO channels", "Both A and B", "For character data"],
    "options_hi": ["बाइट्स के लिए कंटेनर", "NIO चैनल्स में उपयोग", "A और B दोनों", "कैरेक्टर डेटा के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 138
  },
  {
    "num": 139,
    "question_en": "What is 'Channel' in NIO?",
    "question_hi": "NIO में 'Channel' क्या है?",
    "options_en": ["Represents connection to I/O source", "Can perform both reading and writing", "Both A and B", "Only for reading"],
    "options_hi": ["I/O सोर्स से कनेक्शन रिप्रेजेंट करता है", "रीडिंग और राइटिंग दोनों कर सकता है", "A और B दोनों", "केवल रीडिंग के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 139
  },
  {
    "num": 140,
    "question_en": "What is 'Selector' in NIO?",
    "question_hi": "NIO में 'Selector' क्या है?",
    "options_en": ["Monitors multiple channels", "For multiplexed I/O", "Both A and B", "For single channel"],
    "options_hi": ["मल्टीपल चैनल्स को मॉनिटर करता है", "मल्टीप्लेक्स्ड I/O के लिए", "A और B दोनों", "सिंगल चैनल के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 140
  },
  {
    "num": 141,
    "question_en": "What is 'Files' utility class?",
    "question_hi": "'Files' यूटिलिटी क्लास क्या है?",
    "options_en": ["Utility methods for file operations", "Read/write files easily", "Both A and B", "For file objects only"],
    "options_hi": ["फाइल ऑपरेशन्स के लिए यूटिलिटी मेथड्स", "फाइल्स को आसानी से पढ़ना/लिखना", "A और B दोनों", "केवल फाइल ऑब्जेक्ट्स के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 141
  },
  {
    "num": 142,
    "question_en": "What is 'java.util.concurrent.atomic' package?",
    "question_hi": "'java.util.concurrent.atomic' पैकेज क्या है?",
    "options_en": ["For lock-free thread-safe programming", "Atomic variables classes", "Both A and B", "For atomic bombs"],
    "options_hi": ["लॉक-फ्री थ्रेड-सेफ प्रोग्रामिंग के लिए", "एटॉमिक वेरिएबल्स क्लासेज", "A और B दोनों", "एटॉमिक बमों के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 142
  },
  {
    "num": 143,
    "question_en": "What is 'AtomicReference'?",
    "question_hi": "'AtomicReference' क्या है?",
    "options_en": ["Atomic reference to object", "Compare-and-swap operations", "Both A and B", "Non-atomic reference"],
    "options_hi": ["ऑब्जेक्ट का एटॉमिक रेफरेंस", "कम्पेयर-एंड-स्वैप ऑपरेशन्स", "A और B दोनों", "नॉन-एटॉमिक रेफरेंस"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 143
  },
  {
    "num": 144,
    "question_en": "What is 'AtomicStampedReference'?",
    "question_hi": "'AtomicStampedReference' क्या है?",
    "options_en": ["Avoids ABA problem", "Reference with stamp", "Both A and B", "Simple atomic reference"],
    "options_hi": ["ABA प्रॉब्लम से बचाता है", "स्टैम्प के साथ रेफरेंस", "A और B दोनों", "सिंपल एटॉमिक रेफरेंस"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 144
  },
  {
    "num": 145,
    "question_en": "What is 'ABA problem' in concurrent programming?",
    "question_hi": "कनकरंट प्रोग्रामिंग में 'ABA problem' क्या है?",
    "options_en": ["Value changes from A to B back to A", "Causes issues in CAS operations", "Both A and B", "Not a real problem"],
    "options_hi": ["वैल्यू A से B और फिर वापस A में बदलती है", "CAS ऑपरेशन्स में इश्यूज पैदा करता है", "A और B दोनों", "कोई रियल प्रॉब्लम नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 145
  },
  {
    "num": 146,
    "question_en": "What is 'thread-local variable'?",
    "question_hi": "'thread-local variable' क्या है?",
    "options_en": ["Variable specific to each thread", "ThreadLocal class", "Both A and B", "Shared across threads"],
    "options_hi": ["प्रत्येक थ्रेड के लिए स्पेसिफिक वेरिएबल", "ThreadLocal क्लास", "A और B दोनों", "सभी थ्रेड्स में शेयर्ड"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 146
  },
  {
    "num": 147,
    "question_en": "What is 'inheritable thread-local'?",
    "question_hi": "'inheritable thread-local' क्या है?",
    "options_en": ["ThreadLocal inherited by child threads", "InheritableThreadLocal class", "Both A and B", "Not inherited"],
    "options_hi": ["चाइल्ड थ्रेड्स द्वारा इनहेरिट किया गया ThreadLocal", "InheritableThreadLocal क्लास", "A और B दोनों", "इनहेरिट नहीं होता"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 147
  },
  {
    "num": 148,
    "question_en": "What is 'stack' vs 'heap' memory?",
    "question_hi": "'stack' और 'heap' मेमोरी में क्या अंतर है?",
    "options_en": ["Stack for method calls and local variables", "Heap for objects", "Both A and B", "No difference"],
    "options_hi": ["मेथड कॉल्स और लोकल वेरिएबल्स के लिए स्टैक", "ऑब्जेक्ट्स के लिए हीप", "A और B दोनों", "कोई अंतर नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 148
  },
  {
    "num": 149,
    "question_en": "What is 'classloader hierarchy'?",
    "question_hi": "'classloader hierarchy' क्या है?",
    "options_en": ["Bootstrap -> Extension -> Application", "Parent-delegation model", "Both A and B", "No hierarchy"],
    "options_hi": ["बूटस्ट्रैप -> एक्सटेंशन -> एप्लीकेशन", "पैरेंट-डेलिगेशन मॉडल", "A और B दोनों", "कोई हायरार्की नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 149
  },
  {
    "num": 150,
    "question_en": "What is 'custom classloader'?",
    "question_hi": "'custom classloader' क्या है?",
    "options_en": ["User-defined classloader", "For loading classes from custom sources", "Both A and B", "Built-in classloader"],
    "options_hi": ["यूजर-डिफाइंड क्लासलोडर", "कस्टम सोर्सेज से क्लासेस लोड करने के लिए", "A और B दोनों", "बिल्ट-इन क्लासलोडर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": "",
    "marked": false,
    "visited": false,
    "originalNum": 150
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