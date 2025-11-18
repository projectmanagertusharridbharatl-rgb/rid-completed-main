const questions = [
  {
    "num": 1,
    "question_en": "What does HTML stand for?",
    "question_hi": "HTML का पूरा नाम क्या है?",
    "options_en": ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
    "options_hi": ["हाइपर टेक्स्ट मार्कअप लैंग्वेज", "हाई टेक मॉडर्न लैंग्वेज", "हाइपर ट्रांसफर मार्कअप लैंग्वेज", "होम टूल मार्कअप लैंग्वेज"],
    "answer_en": "Hyper Text Markup Language",
    "answer_hi": "हाइपर टेक्स्ट मार्कअप लैंग्वेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which tag is the root element of an HTML document?",
    "question_hi": "HTML डॉक्यूमेंट का रूट एलिमेंट कौन सा टैग है?",
    "options_en": ["html", "head", "body", "root"],
    "options_hi": ["html", "head", "body", "root"],
    "answer_en": "html",
    "answer_hi": "html",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which tag contains meta information about the HTML document?",
    "question_hi": "HTML डॉक्यूमेंट के बारे में मेटा इनफॉर्मेशन किस टैग में होती है?",
    "options_en": ["head", "meta", "body", "header"],
    "options_hi": ["head", "meta", "body", "header"],
    "answer_en": "head",
    "answer_hi": "head",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which tag is used to define the title of the document?",
    "question_hi": "डॉक्यूमेंट का टाइटल डिफाइन करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["title", "head", "h1", "header"],
    "options_hi": ["title", "head", "h1", "header"],
    "answer_en": "title",
    "answer_hi": "title",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which character encoding is recommended for HTML5?",
    "question_hi": "HTML5 के लिए कौन सी कैरेक्टर एन्कोडिंग रिकमेंडेड है?",
    "options_en": ["UTF-8", "ASCII", "ISO-8859-1", "UTF-16"],
    "options_hi": ["UTF-8", "ASCII", "ISO-8859-1", "UTF-16"],
    "answer_en": "UTF-8",
    "answer_hi": "UTF-8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which tag is used to create a clickable button?",
    "question_hi": "क्लिक करने योग्य बटन बनाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["button", "input", "click", "btn"],
    "options_hi": ["button", "input", "click", "btn"],
    "answer_en": "button",
    "answer_hi": "button",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which input type creates a checkbox?",
    "question_hi": "कौन सा इनपुट टाइप चेकबॉक्स बनाता है?",
    "options_en": ["checkbox", "check", "radio", "select"],
    "options_hi": ["checkbox", "check", "radio", "select"],
    "answer_en": "checkbox",
    "answer_hi": "checkbox",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which input type creates a radio button?",
    "question_hi": "कौन सा इनपुट टाइप रेडियो बटन बनाता है?",
    "options_en": ["radio", "button", "checkbox", "select"],
    "options_hi": ["radio", "button", "checkbox", "select"],
    "answer_en": "radio",
    "answer_hi": "radio",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which attribute is used to specify that an input field must be filled out?",
    "question_hi": "कौन सा एट्रिब्यूट यह निर्दिष्ट करने के लिए उपयोग होता है कि इनपुट फील्ड भरना आवश्यक है?",
    "options_en": ["required", "must", "necessary", "validate"],
    "options_hi": ["required", "must", "necessary", "validate"],
    "answer_en": "required",
    "answer_hi": "required",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which tag is used to create a dropdown list?",
    "question_hi": "ड्रॉपडाउन लिस्ट बनाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["select", "option", "list", "dropdown"],
    "options_hi": ["select", "option", "list", "dropdown"],
    "answer_en": "select",
    "answer_hi": "select",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which tag defines an option in a dropdown list?",
    "question_hi": "ड्रॉपडाउन लिस्ट में ऑप्शन को डिफाइन करने वाला टैग कौन सा है?",
    "options_en": ["option", "select", "item", "choice"],
    "options_hi": ["option", "select", "item", "choice"],
    "answer_en": "option",
    "answer_hi": "option",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which tag is used to create a multi-line text input?",
    "question_hi": "मल्टी-लाइन टेक्स्ट इनपुट बनाने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["textarea", "input", "text", "multiline"],
    "options_hi": ["textarea", "input", "text", "multiline"],
    "answer_en": "textarea",
    "answer_hi": "textarea",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which attribute specifies the visible width of a text area?",
    "question_hi": "टेक्स्ट एरिया की विजिबल चौड़ाई कौन सा एट्रिब्यूट निर्दिष्ट करता है?",
    "options_en": ["cols", "rows", "width", "size"],
    "options_hi": ["cols", "rows", "width", "size"],
    "answer_en": "cols",
    "answer_hi": "cols",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which attribute specifies the visible number of lines in a text area?",
    "question_hi": "टेक्स्ट एरिया में विजिबल लाइन्स की संख्या कौन सा एट्रिब्यूट निर्दिष्ट करता है?",
    "options_en": ["rows", "cols", "lines", "height"],
    "options_hi": ["rows", "cols", "lines", "height"],
    "answer_en": "rows",
    "answer_hi": "rows",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which tag is used to draw graphics on the fly?",
    "question_hi": "ग्राफिक्स ड्रा करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["canvas", "svg", "graphics", "draw"],
    "options_hi": ["canvas", "svg", "graphics", "draw"],
    "answer_en": "canvas",
    "answer_hi": "canvas",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which tag is used to define vector graphics?",
    "question_hi": "वेक्टर ग्राफिक्स डिफाइन करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["svg", "canvas", "vector", "graphic"],
    "options_hi": ["svg", "canvas", "vector", "graphic"],
    "answer_en": "svg",
    "answer_hi": "svg",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which tag is used to play audio files?",
    "question_hi": "ऑडियो फाइल्स प्ले करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["audio", "sound", "music", "mp3"],
    "options_hi": ["audio", "sound", "music", "mp3"],
    "answer_en": "audio",
    "answer_hi": "audio",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which tag is used to play video files?",
    "question_hi": "वीडियो फाइल्स प्ले करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["video", "movie", "media", "mp4"],
    "options_hi": ["video", "movie", "media", "mp4"],
    "answer_en": "video",
    "answer_hi": "video",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which attribute specifies that the audio/video should start playing automatically?",
    "question_hi": "कौन सा एट्रिब्यूट निर्दिष्ट करता है कि ऑडियो/वीडियो ऑटोमेटिकली प्ले होना चाहिए?",
    "options_en": ["autoplay", "auto", "play", "start"],
    "options_hi": ["autoplay", "auto", "play", "start"],
    "answer_en": "autoplay",
    "answer_hi": "autoplay",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which attribute specifies that audio/video controls should be displayed?",
    "question_hi": "कौन सा एट्रिब्यूट निर्दिष्ट करता है कि ऑडियो/वीडियो कंट्रोल्स डिस्प्ले होने चाहिए?",
    "options_en": ["controls", "display", "show", "player"],
    "options_hi": ["controls", "display", "show", "player"],
    "answer_en": "controls",
    "answer_hi": "controls",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which tag is used to group related elements in a form?",
    "question_hi": "फॉर्म में संबंधित एलिमेंट्स को ग्रुप करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["fieldset", "group", "div", "section"],
    "options_hi": ["fieldset", "group", "div", "section"],
    "answer_en": "fieldset",
    "answer_hi": "fieldset",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which tag defines a caption for a fieldset element?",
    "question_hi": "फील्डसेट एलिमेंट के लिए कैप्शन डिफाइन करने वाला टैग कौन सा है?",
    "options_en": ["legend", "caption", "label", "title"],
    "options_hi": ["legend", "caption", "label", "title"],
    "answer_en": "legend",
    "answer_hi": "legend",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which input type creates a file upload field?",
    "question_hi": "फाइल अपलोड फील्ड बनाने के लिए कौन सा इनपुट टाइप उपयोग होता है?",
    "options_en": ["file", "upload", "document", "image"],
    "options_hi": ["file", "upload", "document", "image"],
    "answer_en": "file",
    "answer_hi": "file",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which input type creates a hidden input field?",
    "question_hi": "हिडन इनपुट फील्ड बनाने के लिए कौन सा इनपुट टाइप उपयोग होता है?",
    "options_en": ["hidden", "none", "invisible", "secret"],
    "options_hi": ["hidden", "none", "invisible", "secret"],
    "answer_en": "hidden",
    "answer_hi": "hidden",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which input type creates a submit button?",
    "question_hi": "सबमिट बटन बनाने के लिए कौन सा इनपुट टाइप उपयोग होता है?",
    "options_en": ["submit", "button", "send", "post"],
    "options_hi": ["submit", "button", "send", "post"],
    "answer_en": "submit",
    "answer_hi": "submit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which input type creates a reset button?",
    "question_hi": "रिसेट बटन बनाने के लिए कौन सा इनपुट टाइप उपयोग होता है?",
    "options_en": ["reset", "clear", "refresh", "default"],
    "options_hi": ["reset", "clear", "refresh", "default"],
    "answer_en": "reset",
    "answer_hi": "reset",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which attribute specifies the maximum value for an input field?",
    "question_hi": "इनपुट फील्ड के लिए मैक्सिमम वैल्यू कौन सा एट्रिब्यूट निर्दिष्ट करता है?",
    "options_en": ["max", "maximum", "top", "limit"],
    "options_hi": ["max", "maximum", "top", "limit"],
    "answer_en": "max",
    "answer_hi": "max",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which attribute specifies the minimum value for an input field?",
    "question_hi": "इनपुट फील्ड के लिए मिनिमम वैल्यू कौन सा एट्रिब्यूट निर्दिष्ट करता है?",
    "options_en": ["min", "minimum", "bottom", "least"],
    "options_hi": ["min", "minimum", "bottom", "least"],
    "answer_en": "min",
    "answer_hi": "min",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which attribute specifies the legal number of intervals for an input field?",
    "question_hi": "इनपुट फील्ड के लिए लीगल इंटरवल्स की संख्या कौन सा एट्रिब्यूट निर्दिष्ट करता है?",
    "options_en": ["step", "interval", "increment", "value"],
    "options_hi": ["step", "interval", "increment", "value"],
    "answer_en": "step",
    "answer_hi": "step",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which tag is used to define a header for a document or section?",
    "question_hi": "डॉक्यूमेंट या सेक्शन के लिए हेडर डिफाइन करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["header", "head", "h1", "top"],
    "options_hi": ["header", "head", "h1", "top"],
    "answer_en": "header",
    "answer_hi": "header",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which tag is used to define a footer for a document or section?",
    "question_hi": "डॉक्यूमेंट या सेक्शन के लिए फूटर डिफाइन करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["footer", "bottom", "end", "close"],
    "options_hi": ["footer", "bottom", "end", "close"],
    "answer_en": "footer",
    "answer_hi": "footer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which tag defines a section in a document?",
    "question_hi": "डॉक्यूमेंट में सेक्शन डिफाइन करने वाला टैग कौन सा है?",
    "options_en": ["section", "div", "article", "part"],
    "options_hi": ["section", "div", "article", "part"],
    "answer_en": "section",
    "answer_hi": "section",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which tag defines an article?",
    "question_hi": "आर्टिकल डिफाइन करने वाला टैग कौन सा है?",
    "options_en": ["article", "section", "div", "content"],
    "options_hi": ["article", "section", "div", "content"],
    "answer_en": "article",
    "answer_hi": "article",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which tag defines content aside from the page content?",
    "question_hi": "पेज कंटेंट के अलावा कंटेंट डिफाइन करने वाला टैग कौन सा है?",
    "options_en": ["aside", "sidebar", "nav", "extra"],
    "options_hi": ["aside", "sidebar", "nav", "extra"],
    "answer_en": "aside",
    "answer_hi": "aside",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which tag defines navigation links?",
    "question_hi": "नेविगेशन लिंक्स डिफाइन करने वाला टैग कौन सा है?",
    "options_en": ["nav", "navigation", "menu", "links"],
    "options_hi": ["nav", "navigation", "menu", "links"],
    "answer_en": "nav",
    "answer_hi": "nav",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which tag defines a figure?",
    "question_hi": "फिगर डिफाइन करने वाला टैग कौन सा है?",
    "options_en": ["figure", "img", "picture", "illustration"],
    "options_hi": ["figure", "img", "picture", "illustration"],
    "answer_en": "figure",
    "answer_hi": "figure",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which tag defines a caption for a figure?",
    "question_hi": "फिगर के लिए कैप्शन डिफाइन करने वाला टैग कौन सा है?",
    "options_en": ["figcaption", "caption", "description", "title"],
    "options_hi": ["figcaption", "caption", "description", "title"],
    "answer_en": "figcaption",
    "answer_hi": "figcaption",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which tag defines marked/highlighted text?",
    "question_hi": "मार्क्ड/हाइलाइटेड टेक्स्ट डिफाइन करने वाला टैग कौन सा है?",
    "options_en": ["mark", "highlight", "strong", "em"],
    "options_hi": ["mark", "highlight", "strong", "em"],
    "answer_en": "mark",
    "answer_hi": "mark",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which tag defines a progress bar?",
    "question_hi": "प्रोग्रेस बार डिफाइन करने वाला टैग कौन सा है?",
    "options_en": ["progress", "meter", "bar", "load"],
    "options_hi": ["progress", "meter", "bar", "load"],
    "answer_en": "progress",
    "answer_hi": "progress",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which tag defines a scalar measurement?",
    "question_hi": "स्केलर माप डिफाइन करने वाला टैग कौन सा है?",
    "options_en": ["meter", "progress", "range", "measure"],
    "options_hi": ["meter", "progress", "range", "measure"],
    "answer_en": "meter",
    "answer_hi": "meter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which tag defines a dialog box?",
    "question_hi": "डायलॉग बॉक्स डिफाइन करने वाला टैग कौन सा है?",
    "options_en": ["dialog", "modal", "popup", "window"],
    "options_hi": ["dialog", "modal", "popup", "window"],
    "answer_en": "dialog",
    "answer_hi": "dialog",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which tag defines a details widget?",
    "question_hi": "डिटेल्स विजेट डिफाइन करने वाला टैग कौन सा है?",
    "options_en": ["details", "summary", "accordion", "expand"],
    "options_hi": ["details", "summary", "accordion", "expand"],
    "answer_en": "details",
    "answer_hi": "details",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which tag defines a summary for details?",
    "question_hi": "डिटेल्स के लिए सारांश डिफाइन करने वाला टैग कौन सा है?",
    "options_en": ["summary", "details", "heading", "title"],
    "options_hi": ["summary", "details", "heading", "title"],
    "answer_en": "summary",
    "answer_hi": "summary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which tag defines a template?",
    "question_hi": "टेम्पलेट डिफाइन करने वाला टैग कौन सा है?",
    "options_en": ["template", "script", "div", "pattern"],
    "options_hi": ["template", "script", "div", "pattern"],
    "answer_en": "template",
    "answer_hi": "template",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which tag defines a slot?",
    "question_hi": "स्लॉट डिफाइन करने वाला टैग कौन सा है?",
    "options_en": ["slot", "placeholder", "gap", "space"],
    "options_hi": ["slot", "placeholder", "gap", "space"],
    "answer_en": "slot",
    "answer_hi": "slot",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which tag defines a data list?",
    "question_hi": "डेटा लिस्ट डिफाइन करने वाला टैग कौन सा है?",
    "options_en": ["datalist", "list", "options", "select"],
    "options_hi": ["datalist", "list", "options", "select"],
    "answer_en": "datalist",
    "answer_hi": "datalist",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which tag defines an output element?",
    "question_hi": "आउटपुट एलिमेंट डिफाइन करने वाला टैग कौन सा है?",
    "options_en": ["output", "result", "display", "span"],
    "options_hi": ["output", "result", "display", "span"],
    "answer_en": "output",
    "answer_hi": "output",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which tag defines a time/date?",
    "question_hi": "टाइम/डेट डिफाइन करने वाला टैग कौन सा है?",
    "options_en": ["time", "datetime", "date", "calendar"],
    "options_hi": ["time", "datetime", "date", "calendar"],
    "answer_en": "time",
    "answer_hi": "time",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which tag defines a word break opportunity?",
    "question_hi": "वर्ड ब्रेक ऑपरच्यूनिटी डिफाइन करने वाला टैग कौन सा है?",
    "options_en": ["wbr", "br", "break", "wordbreak"],
    "options_hi": ["wbr", "br", "break", "wordbreak"],
    "answer_en": "wbr",
    "answer_hi": "wbr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which tag defines a bidirectional isolation?",
    "question_hi": "बायडायरेक्शनल आइसोलेशन डिफाइन करने वाला टैग कौन सा है?",
    "options_en": ["bdi", "bdo", "dir", "span"],
    "options_hi": ["bdi", "bdo", "dir", "span"],
    "answer_en": "bdi",
    "answer_hi": "bdi",
    "attempted": false,
    "selected": ""
  }
<<<<<<< HEAD
]
=======

 ];

>>>>>>> 4d76c012fd57c68a884bfe00dbd8092d4157397b



let currentQuestion = 0; 
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes
let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

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
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

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

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}



function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}



////////////////////////////////////////////////////////////////////////////////////////////

// submit 
function jumpToQuestion(index) {
            currentQuestion = index;
            loadQuestion(index);
        }

      function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;

            // check correct answer
            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }

        } else {
            notAttempted++;
        }

        // push result
        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    // store in localStorage
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // ask for result page
    let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}



function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};


///////////////////////////////////////