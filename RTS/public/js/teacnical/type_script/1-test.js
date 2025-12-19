const questions = [
    {
        "num": 1,
        "question_en": "What is TypeScript primarily known for?",
        "question_hi": "TypeScript मुख्य रूप से किसके लिए जाना जाता है?",
        "options_en": ["Static typing", "Dynamic typing", "No typing", "Weak typing"],
        "options_hi": ["स्टैटिक टाइपिंग", "डायनामिक टाइपिंग", "कोई टाइपिंग नहीं", "वीक टाइपिंग"],
        "answer_en": "Static typing",
        "answer_hi": "स्टैटिक टाइपिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which command compiles TypeScript to JavaScript?",
        "question_hi": "कौन सा कमांड TypeScript को JavaScript में कंपाइल करता है?",
        "options_en": ["tsc", "node", "npm", "typescript"],
        "options_hi": ["tsc", "node", "npm", "typescript"],
        "answer_en": "tsc",
        "answer_hi": "tsc",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the file extension for TypeScript files?",
        "question_hi": "TypeScript फाइलों के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".ts", ".js", ".type", ".tsc"],
        "options_hi": [".ts", ".js", ".type", ".tsc"],
        "answer_en": ".ts",
        "answer_hi": ".ts",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which keyword is used to define a type in TypeScript?",
        "question_hi": "TypeScript में टाइप को परिभाषित करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["type", "interface", "Both type and interface", "class"],
        "options_hi": ["type", "interface", "type और interface दोनों", "class"],
        "answer_en": "Both type and interface",
        "answer_hi": "type और interface दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What does the 'any' type represent in TypeScript?",
        "question_hi": "TypeScript में 'any' टाइप क्या दर्शाता है?",
        "options_en": ["Any JavaScript value", "Only numbers", "Only strings", "Only objects"],
        "options_hi": ["कोई भी JavaScript मान", "केवल संख्याएँ", "केवल स्ट्रिंग", "केवल ऑब्जेक्ट"],
        "answer_en": "Any JavaScript value",
        "answer_hi": "कोई भी JavaScript मान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you define an optional property in an interface?",
        "question_hi": "इंटरफेस में ऑप्शनल प्रॉपर्टी को कैसे परिभाषित करते हैं?",
        "options_en": ["property?: type", "property: type?", "optional property: type", "property: optional type"],
        "options_hi": ["property?: type", "property: type?", "optional property: type", "property: optional type"],
        "answer_en": "property?: type",
        "answer_hi": "property?: type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of 'unknown' type in TypeScript?",
        "question_hi": "TypeScript में 'unknown' टाइप का उद्देश्य क्या है?",
        "options_en": ["Type-safe counterpart of any", "To represent numbers", "To represent strings", "To represent null values"],
        "options_hi": ["any का टाइप-सेफ समकक्ष", "संख्याओं को दर्शाने के लिए", "स्ट्रिंग को दर्शाने के लिए", "null मानों को दर्शाने के लिए"],
        "answer_en": "Type-safe counterpart of any",
        "answer_hi": "any का टाइप-सेफ समकक्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which symbol is used for type assertions in TypeScript?",
        "question_hi": "TypeScript में टाइप असर्शन के लिए किस प्रतीक का उपयोग किया जाता है?",
        "options_en": ["as or <>", "::", "->", "=>"],
        "options_hi": ["as या <>", "::", "->", "=>"],
        "answer_en": "as or <>",
        "answer_hi": "as या <>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is a tuple in TypeScript?",
        "question_hi": "TypeScript में tuple क्या है?",
        "options_en": ["Array with fixed number of elements", "Array with same type elements", "Object with key-value pairs", "Function with multiple parameters"],
        "options_hi": ["निश्चित संख्या में एलिमेंट वाली ऐरे", "समान टाइप के एलिमेंट वाली ऐरे", "की-वैल्यू पेयर वाला ऑब्जेक्ट", "एकाधिक पैरामीटर वाला फंक्शन"],
        "answer_en": "Array with fixed number of elements",
        "answer_hi": "निश्चित संख्या में एलिमेंट वाली ऐरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you define an enum in TypeScript?",
        "question_hi": "TypeScript में enum को कैसे परिभाषित करते हैं?",
        "options_en": ["enum Name { }", "enum = { }", "define enum { }", "enum: { }"],
        "options_hi": ["enum Name { }", "enum = { }", "define enum { }", "enum: { }"],
        "answer_en": "enum Name { }",
        "answer_hi": "enum Name { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the 'void' type used for?",
        "question_hi": "'void' टाइप का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Functions that don't return value", "Empty objects", "Null values", "Undefined values"],
        "options_hi": ["ऐसे फंक्शन जो मान वापस नहीं करते", "खाली ऑब्जेक्ट", "null मान", "undefined मान"],
        "answer_en": "Functions that don't return value",
        "answer_hi": "ऐसे फंक्शन जो मान वापस नहीं करते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which operator is used for type guards in TypeScript?",
        "question_hi": "TypeScript में टाइप गार्ड के लिए किस ऑपरेटर का उपयोग किया जाता है?",
        "options_en": ["typeof", "instanceof", "Both typeof and instanceof", "typeguard"],
        "options_hi": ["typeof", "instanceof", "typeof और instanceof दोनों", "typeguard"],
        "answer_en": "Both typeof and instanceof",
        "answer_hi": "typeof और instanceof दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What does 'readonly' modifier do?",
        "question_hi": "'readonly' मॉडिफायर क्या करता है?",
        "options_en": ["Makes property immutable", "Makes property private", "Makes property optional", "Makes property public"],
        "options_hi": ["प्रॉपर्टी को अपरिवर्तनीय बनाता है", "प्रॉपर्टी को प्राइवेट बनाता है", "प्रॉपर्टी को ऑप्शनल बनाता है", "प्रॉपर्टी को पब्लिक बनाता है"],
        "answer_en": "Makes property immutable",
        "answer_hi": "प्रॉपर्टी को अपरिवर्तनीय बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you define a generic function in TypeScript?",
        "question_hi": "TypeScript में जेनेरिक फंक्शन को कैसे परिभाषित करते हैं?",
        "options_en": ["function name<T>()", "function name<generic>()", "function name(type T)", "generic function name()"],
        "options_hi": ["function name<T>()", "function name<generic>()", "function name(type T)", "generic function name()"],
        "answer_en": "function name<T>()",
        "answer_hi": "function name<T>()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the 'keyof' operator used for?",
        "question_hi": "'keyof' ऑपरेटर का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Get keys of an object type", "Get values of an object", "Check if key exists", "Create new keys"],
        "options_hi": ["ऑब्जेक्ट टाइप की कुंजियाँ प्राप्त करना", "ऑब्जेक्ट के मान प्राप्त करना", "जाँच करना कि कुंजी मौजूद है", "नई कुंजियाँ बनाना"],
        "answer_en": "Get keys of an object type",
        "answer_hi": "ऑब्जेक्ट टाइप की कुंजियाँ प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which decorator is used for class properties in TypeScript?",
        "question_hi": "TypeScript में क्लास प्रॉपर्टी के लिए किस डेकोरेटर का उपयोग किया जाता है?",
        "options_en": ["@Decorator", "@Property", "@Component", "All of the above"],
        "options_hi": ["@Decorator", "@Property", "@Component", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the 'never' type used for?",
        "question_hi": "'never' टाइप का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Values that never occur", "Null values", "Undefined values", "All values"],
        "options_hi": ["ऐसे मान जो कभी नहीं आते", "null मान", "undefined मान", "सभी मान"],
        "answer_en": "Values that never occur",
        "answer_hi": "ऐसे मान जो कभी नहीं आते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you make all properties optional in a type?",
        "question_hi": "किसी टाइप में सभी प्रॉपर्टी को ऑप्शनल कैसे बनाते हैं?",
        "options_en": ["Partial<T>", "Optional<T>", "Maybe<T>", "AllOptional<T>"],
        "options_hi": ["Partial<T>", "Optional<T>", "Maybe<T>", "AllOptional<T>"],
        "answer_en": "Partial<T>",
        "answer_hi": "Partial<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What does 'as const' do in TypeScript?",
        "question_hi": "TypeScript में 'as const' क्या करता है?",
        "options_en": ["Makes values readonly literals", "Converts to constant", "Makes variable constant", "All of the above"],
        "options_hi": ["मानों को रीडओनली लिटरल बनाता है", "कॉन्स्टेंट में बदलता है", "वेरिएबल को कॉन्स्टेंट बनाता है", "उपरोक्त सभी"],
        "answer_en": "Makes values readonly literals",
        "answer_hi": "मानों को रीडओनली लिटरल बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which utility type makes all properties required?",
        "question_hi": "कौन सा यूटिलिटी टाइप सभी प्रॉपर्टी को आवश्यक बनाता है?",
        "options_en": ["Required<T>", "AllRequired<T>", "Mandatory<T>", "Must<T>"],
        "options_hi": ["Required<T>", "AllRequired<T>", "Mandatory<T>", "Must<T>"],
        "answer_en": "Required<T>",
        "answer_hi": "Required<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the difference between 'interface' and 'type'?",
        "question_hi": "'interface' और 'type' में क्या अंतर है?",
        "options_en": ["interface can be extended, type can use unions", "No difference", "type can be extended, interface can use unions", "Both are same"],
        "options_hi": ["interface को एक्सटेंड किया जा सकता है, type यूनियन का उपयोग कर सकता है", "कोई अंतर नहीं", "type को एक्सटेंड किया जा सकता है, interface यूनियन का उपयोग कर सकता है", "दोनों समान हैं"],
        "answer_en": "interface can be extended, type can use unions",
        "answer_hi": "interface को एक्सटेंड किया जा सकता है, type यूनियन का उपयोग कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you define function overloading in TypeScript?",
        "question_hi": "TypeScript में फंक्शन ओवरलोडिंग को कैसे परिभाषित करते हैं?",
        "options_en": ["Multiple function signatures", "Using overload keyword", "Using function* syntax", "Cannot be done"],
        "options_hi": ["एकाधिक फंक्शन सिग्नेचर", "overload कीवर्ड का उपयोग करके", "function* सिंटैक्स का उपयोग करके", "नहीं किया जा सकता"],
        "answer_en": "Multiple function signatures",
        "answer_hi": "एकाधिक फंक्शन सिग्नेचर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is 'namespace' in TypeScript?",
        "question_hi": "TypeScript में 'namespace' क्या है?",
        "options_en": ["Logical grouping of code", "Physical file grouping", "Module system", "Package manager"],
        "options_hi": ["कोड का लॉजिकल ग्रुपिंग", "फिजिकल फाइल ग्रुपिंग", "मॉड्यूल सिस्टम", "पैकेज मैनेजर"],
        "answer_en": "Logical grouping of code",
        "answer_hi": "कोड का लॉजिकल ग्रुपिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which compiler option enables strict type checking?",
        "question_hi": "कौन सा कंपाइलर ऑप्शन स्ट्रिक्ट टाइप चेकिंग को सक्षम करता है?",
        "options_en": ["strict", "strictType", "typeCheck", "enableStrict"],
        "options_hi": ["strict", "strictType", "typeCheck", "enableStrict"],
        "answer_en": "strict",
        "answer_hi": "strict",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What does 'declare' keyword do?",
        "question_hi": "'declare' कीवर्ड क्या करता है?",
        "options_en": ["Declares types without implementation", "Implements interface", "Defines variable", "Exports module"],
        "options_hi": ["बिना इम्प्लीमेंटेशन के टाइप घोषित करता है", "इंटरफेस को इम्प्लीमेंट करता है", "वेरिएबल को परिभाषित करता है", "मॉड्यूल को एक्सपोर्ट करता है"],
        "answer_en": "Declares types without implementation",
        "answer_hi": "बिना इम्प्लीमेंटेशन के टाइप घोषित करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How do you import type definitions in TypeScript?",
        "question_hi": "TypeScript में टाइप डेफिनिशन को कैसे इम्पोर्ट करते हैं?",
        "options_en": ["import type { }", "import { type }", "type import { }", "All of the above"],
        "options_hi": ["import type { }", "import { type }", "type import { }", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the 'satisfies' operator used for?",
        "question_hi": "'satisfies' ऑपरेटर का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Check if value satisfies type", "Implement interface", "Extend class", "Create new type"],
        "options_hi": ["जाँच करना कि मान टाइप को संतुष्ट करता है", "इंटरफेस को इम्प्लीमेंट करना", "क्लास को एक्सटेंड करना", "नया टाइप बनाना"],
        "answer_en": "Check if value satisfies type",
        "answer_hi": "जाँच करना कि मान टाइप को संतुष्ट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which utility type excludes properties from a type?",
        "question_hi": "कौन सा यूटिलिटी टाइप किसी टाइप से प्रॉपर्टी को बाहर करता है?",
        "options_en": ["Omit<T, K>", "Exclude<T, U>", "Both Omit and Exclude", "Remove<T>"],
        "options_hi": ["Omit<T, K>", "Exclude<T, U>", "Omit और Exclude दोनों", "Remove<T>"],
        "answer_en": "Both Omit and Exclude",
        "answer_hi": "Omit और Exclude दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is 'mixin' in TypeScript?",
        "question_hi": "TypeScript में 'mixin' क्या है?",
        "options_en": ["Composing classes from multiple sources", "Mixing types", "Combining interfaces", "Merging namespaces"],
        "options_hi": ["एकाधिक स्रोतों से क्लास बनाना", "टाइप को मिलाना", "इंटरफेस को संयोजित करना", "नेमस्पेस को मर्ज करना"],
        "answer_en": "Composing classes from multiple sources",
        "answer_hi": "एकाधिक स्रोतों से क्लास बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you create indexed types in TypeScript?",
        "question_hi": "TypeScript में इंडेक्स्ड टाइप कैसे बनाते हैं?",
        "options_en": ["[key: string]: type", "{key: type}", "index: type", "string: type"],
        "options_hi": ["[key: string]: type", "{key: type}", "index: type", "string: type"],
        "answer_en": "[key: string]: type",
        "answer_hi": "[key: string]: type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is 'conditional types' in TypeScript?",
        "question_hi": "TypeScript में 'कंडीशनल टाइप' क्या है?",
        "options_en": ["Types that depend on conditions", "If-else for types", "Both A and B", "Switch statements for types"],
        "options_hi": ["ऐसे टाइप जो शर्तों पर निर्भर करते हैं", "टाइप के लिए if-else", "A और B दोनों", "टाइप के लिए switch स्टेटमेंट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which utility type extracts return type of a function?",
        "question_hi": "कौन सा यूटिलिटी टाइप फंक्शन के रिटर्न टाइप को निकालता है?",
        "options_en": ["ReturnType<T>", "FunctionReturn<T>", "GetReturn<T>", "ExtractReturn<T>"],
        "options_hi": ["ReturnType<T>", "FunctionReturn<T>", "GetReturn<T>", "ExtractReturn<T>"],
        "answer_en": "ReturnType<T>",
        "answer_hi": "ReturnType<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is 'mapped types' in TypeScript?",
        "question_hi": "TypeScript में 'मैप्ड टाइप' क्या है?",
        "options_en": ["Creating new types by transforming properties", "Mapping objects to arrays", "Converting types to maps", "All of the above"],
        "options_hi": ["प्रॉपर्टी को ट्रांसफॉर्म करके नए टाइप बनाना", "ऑब्जेक्ट को ऐरे में मैप करना", "टाइप को मैप में बदलना", "उपरोक्त सभी"],
        "answer_en": "Creating new types by transforming properties",
        "answer_hi": "प्रॉपर्टी को ट्रांसफॉर्म करके नए टाइप बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you define async functions in TypeScript?",
        "question_hi": "TypeScript में async फंक्शन को कैसे परिभाषित करते हैं?",
        "options_en": ["async function name()", "function async name()", "function name(): async", "async: function name()"],
        "options_hi": ["async function name()", "function async name()", "function name(): async", "async: function name()"],
        "answer_en": "async function name()",
        "answer_hi": "async function name()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the 'infer' keyword used for?",
        "question_hi": "'infer' कीवर्ड का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Infer types in conditional types", "Infer function parameters", "Infer class properties", "All of the above"],
        "options_hi": ["कंडीशनल टाइप में टाइप को इन्फर करना", "फंक्शन पैरामीटर को इन्फर करना", "क्लास प्रॉपर्टी को इन्फर करना", "उपरोक्त सभी"],
        "answer_en": "Infer types in conditional types",
        "answer_hi": "कंडीशनल टाइप में टाइप को इन्फर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which utility type makes all properties readonly?",
        "question_hi": "कौन सा यूटिलिटी टाइप सभी प्रॉपर्टी को रीडओनली बनाता है?",
        "options_en": ["Readonly<T>", "Immutable<T>", "Fixed<T>", "Const<T>"],
        "options_hi": ["Readonly<T>", "Immutable<T>", "Fixed<T>", "Const<T>"],
        "answer_en": "Readonly<T>",
        "answer_hi": "Readonly<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is 'template literal types' in TypeScript?",
        "question_hi": "TypeScript में 'टेम्पलेट लिटरल टाइप' क्या है?",
        "options_en": ["String types with patterns", "HTML templates", "Function templates", "Class templates"],
        "options_hi": ["पैटर्न वाले स्ट्रिंग टाइप", "HTML टेम्पलेट", "फंक्शन टेम्पलेट", "क्लास टेम्पलेट"],
        "answer_en": "String types with patterns",
        "answer_hi": "पैटर्न वाले स्ट्रिंग टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How do you handle errors in TypeScript?",
        "question_hi": "TypeScript में एरर को कैसे हैंडल करते हैं?",
        "options_en": ["try-catch blocks", "Error boundaries", "Both A and B", "None of the above"],
        "options_hi": ["try-catch ब्लॉक", "एरर बाउंडरी", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is 'branded types' in TypeScript?",
        "question_hi": "TypeScript में 'ब्रांडेड टाइप' क्या है?",
        "options_en": ["Types with unique brands for nominal typing", "Types with logos", "Commercial types", "All of the above"],
        "options_hi": ["नॉमिनल टाइपिंग के लिए यूनिक ब्रांड वाले टाइप", "लोगो वाले टाइप", "कमर्शियल टाइप", "उपरोक्त सभी"],
        "answer_en": "Types with unique brands for nominal typing",
        "answer_hi": "नॉमिनल टाइपिंग के लिए यूनिक ब्रांड वाले टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which utility type picks specific properties from a type?",
        "question_hi": "कौन सा यूटिलिटी टाइप किसी टाइप से विशिष्ट प्रॉपर्टी को चुनता है?",
        "options_en": ["Pick<T, K>", "Select<T, K>", "Choose<T, K>", "Extract<T, K>"],
        "options_hi": ["Pick<T, K>", "Select<T, K>", "Choose<T, K>", "Extract<T, K>"],
        "answer_en": "Pick<T, K>",
        "answer_hi": "Pick<T, K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is 'declaration merging' in TypeScript?",
        "question_hi": "TypeScript में 'डिक्लेरेशन मर्जिंग' क्या है?",
        "options_en": ["Merging multiple declarations of same name", "Combining files", "Merging interfaces", "All of the above"],
        "options_hi": ["एक ही नाम के एकाधिक डिक्लेरेशन को मर्ज करना", "फाइलों को संयोजित करना", "इंटरफेस को मर्ज करना", "उपरोक्त सभी"],
        "answer_en": "Merging multiple declarations of same name",
        "answer_hi": "एक ही नाम के एकाधिक डिक्लेरेशन को मर्ज करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How do you define recursive types in TypeScript?",
        "question_hi": "TypeScript में रिकर्सिव टाइप को कैसे परिभाषित करते हैं?",
        "options_en": ["type T = { next: T }", "type T = T[]", "Both A and B", "Cannot define recursive types"],
        "options_hi": ["type T = { next: T }", "type T = T[]", "A और B दोनों", "रिकर्सिव टाइप परिभाषित नहीं कर सकते"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is 'type widening' in TypeScript?",
        "question_hi": "TypeScript में 'टाइप विडेनिंग' क्या है?",
        "options_en": ["Automatic broadening of types", "Manual type expansion", "Type narrowing", "None of the above"],
        "options_hi": ["टाइप का ऑटोमैटिक ब्रॉडनिंग", "मैनुअल टाइप एक्सपेंशन", "टाइप नैरोइंग", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Automatic broadening of types",
        "answer_hi": "टाइप का ऑटोमैटिक ब्रॉडनिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which utility type extracts instance type of a class?",
        "question_hi": "कौन सा यूटिलिटी टाइप क्लास के इंस्टेंस टाइप को निकालता है?",
        "options_en": ["InstanceType<T>", "ClassInstance<T>", "GetInstance<T>", "ExtractInstance<T>"],
        "options_hi": ["InstanceType<T>", "ClassInstance<T>", "GetInstance<T>", "ExtractInstance<T>"],
        "answer_en": "InstanceType<T>",
        "answer_hi": "InstanceType<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is 'type narrowing' in TypeScript?",
        "question_hi": "TypeScript में 'टाइप नैरोइंग' क्या है?",
        "options_en": ["Reducing type to more specific type", "Making type wider", "Changing type completely", "None of the above"],
        "options_hi": ["टाइप को अधिक विशिष्ट टाइप में कम करना", "टाइप को व्यापक बनाना", "टाइप को पूरी तरह बदलना", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Reducing type to more specific type",
        "answer_hi": "टाइप को अधिक विशिष्ट टाइप में कम करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How do you define const assertions in TypeScript?",
        "question_hi": "TypeScript में कॉन्स्ट असर्शन को कैसे परिभाषित करते हैं?",
        "options_en": ["as const", "const assertion", "readonly const", "All of the above"],
        "options_hi": ["as const", "const assertion", "readonly const", "उपरोक्त सभी"],
        "answer_en": "as const",
        "answer_hi": "as const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is 'type predicate' in TypeScript?",
        "question_hi": "TypeScript में 'टाइप प्रेडिकेट' क्या है?",
        "options_en": ["Function that returns type predicate", "Boolean expression", "Type guard", "All of the above"],
        "options_hi": ["ऐसा फंक्शन जो टाइप प्रेडिकेट रिटर्न करता है", "बूलियन एक्सप्रेशन", "टाइप गार्ड", "उपरोक्त सभी"],
        "answer_en": "Function that returns type predicate",
        "answer_hi": "ऐसा फंक्शन जो टाइप प्रेडिकेट रिटर्न करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which utility type constructs type with all properties of T except K?",
        "question_hi": "कौन सा यूटिलिटी टाइप T की सभी प्रॉपर्टी के साथ टाइप बनाता है K को छोड़कर?",
        "options_en": ["Omit<T, K>", "Exclude<T, K>", "Except<T, K>", "Without<T, K>"],
        "options_hi": ["Omit<T, K>", "Exclude<T, K>", "Except<T, K>", "Without<T, K>"],
        "answer_en": "Omit<T, K>",
        "answer_hi": "Omit<T, K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is 'type compatibility' in TypeScript?",
        "question_hi": "TypeScript में 'टाइप कंपैटिबिलिटी' क्या है?",
        "options_en": ["Structural typing system", "Nominal typing system", "Both A and B", "None of the above"],
        "options_hi": ["स्ट्रक्चरल टाइपिंग सिस्टम", "नॉमिनल टाइपिंग सिस्टम", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Structural typing system",
        "answer_hi": "स्ट्रक्चरल टाइपिंग सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you define intersection types in TypeScript?",
        "question_hi": "TypeScript में इंटरसेक्शन टाइप को कैसे परिभाषित करते हैं?",
        "options_en": ["TypeA & TypeB", "TypeA | TypeB", "TypeA + TypeB", "TypeA and TypeB"],
        "options_hi": ["TypeA & TypeB", "TypeA | TypeB", "TypeA + TypeB", "TypeA and TypeB"],
        "answer_en": "TypeA & TypeB",
        "answer_hi": "TypeA & TypeB",
        "attempted": false,
        "selected": ""
    },
    
];


let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60; 
let timerInterval;

// ----------------- Load Question -----------------
function loadQuestion(index) {
    const q = questions[index];
    if (!q) return; //  undefined error fix
   questions[index].visited = true;
    document.getElementById("question").textContent =
       `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
       ` Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach(option => {
        const isSelected = q.selected === option;

        const div = document.createElement("div");
        div.className = "option-box";

        div.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        div.innerHTML = `
            <input type="radio" name="option" value="${option}" 
            ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        div.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(div);
    });

    updateNavigation();
}

// ----------------- Attempt Mark -----------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ----------------- Next / Previous -----------------
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

// ----------------- Final Submit -----------------
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

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted! Do you want to view result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}

// ----------------- Navigation Circles -----------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray"; // default: not visited

        if (i === currentQuestion) {
            color = "blue"; // current question
        } 
        else if (q.attempted) {
            color = "green"; // answered
        } 
        else if (q.visited) {
            color = "white"; // visited but not answered
        }

        nav.innerHTML += `
            <div class="circle" style="background:${color}; border:1px solid black;"
            onclick="jumpToQuestion(${i})">${i + 1}</div>
        `;
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

// ----------------- Timer -----------------
function startTimer() {
    const timerElement = document.getElementById("timer");

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
            const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
            const seconds = String(timeLeft % 60).padStart(2, "0");

            timerElement.textContent = `Time Left: ${hours}:${minutes}:${seconds}`;
            timeLeft--;
        }
    }, 1000);
}

// ----------------- Camera & Movement Detection -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style = `
        position:fixed; top:10px; left:10px; width:130px; height:130px;
        border-radius:50%; overflow:hidden; border:3px solid red; z-index:9999;
    `;

    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsinline = true;
    video.style = "width:100%; height:100%; object-fit:cover;";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(() => alert("Camera access denied!"));
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;

    let lastData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, 160, 160);
        const data = ctx.getImageData(0, 0, 160, 160);

        if (lastData) {
            let diff = 0;
            for (let i = 0; i < data.data.length; i += 4) {
                diff += Math.abs(data.data[i] - lastData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;

                if (movementCount === 1) alert("⚠ Alert 1: No movement detected!");
                if (movementCount === 2) alert("⚠ Alert 2: Head not moving!");
                if (movementCount === 3) {
                    alert("⚠ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastData = data;

    }, 2000);
}

function restartTest() {
    if (videoStream) videoStream.getTracks().forEach(t => t.stop());

    const cam = document.getElementById("camera-container");
    if (cam) cam.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 60 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(0);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};