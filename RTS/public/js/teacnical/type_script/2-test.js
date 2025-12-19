const questions = [
    {
        "num": 101,
        "question_en": "What is the purpose of 'noImplicitAny' compiler option?",
        "question_hi": "'noImplicitAny' कंपाइलर ऑप्शन का उद्देश्य क्या है?",
        "options_en": ["Disallow implicit 'any' types", "Allow implicit 'any' types", "Remove all 'any' types", "Convert 'any' to 'unknown'"],
        "options_hi": ["इम्प्लिसिट 'any' टाइप को अस्वीकार करना", "इम्प्लिसिट 'any' टाइप को अनुमति देना", "सभी 'any' टाइप को हटाना", "'any' को 'unknown' में बदलना"],
        "answer_en": "Disallow implicit 'any' types",
        "answer_hi": "इम्प्लिसिट 'any' टाइप को अस्वीकार करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 102,
        "question_en": "What does 'strictNullChecks' compiler option do?",
        "question_hi": "'strictNullChecks' कंपाइलर ऑप्शन क्या करता है?",
        "options_en": ["Enforce null and undefined checks", "Allow null and undefined everywhere", "Remove null and undefined", "Convert null to undefined"],
        "options_hi": ["null और undefined चेक को लागू करना", "null और undefined को हर जगह अनुमति देना", "null और undefined को हटाना", "null को undefined में बदलना"],
        "answer_en": "Enforce null and undefined checks",
        "answer_hi": "null और undefined चेक को लागू करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 103,
        "question_en": "How do you define a type that can be either string or number?",
        "question_hi": "एक टाइप को कैसे परिभाषित करें जो स्ट्रिंग या नंबर हो सकता है?",
        "options_en": ["string | number", "string & number", "string or number", "string, number"],
        "options_hi": ["string | number", "string & number", "string or number", "string, number"],
        "answer_en": "string | number",
        "answer_hi": "string | number",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 104,
        "question_en": "What is the 'keyof' operator used for?",
        "question_hi": "'keyof' ऑपरेटर का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Get union of object keys", "Get object values", "Check key existence", "Create new keys"],
        "options_hi": ["ऑब्जेक्ट कीज़ का यूनियन प्राप्त करना", "ऑब्जेक्ट वैल्यू प्राप्त करना", "कुंजी के अस्तित्व की जाँच करना", "नई कुंजियाँ बनाना"],
        "answer_en": "Get union of object keys",
        "answer_hi": "ऑब्जेक्ट कीज़ का यूनियन प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 105,
        "question_en": "What does 'readonly' modifier do for arrays?",
        "question_hi": "ऐरे के लिए 'readonly' मॉडिफायर क्या करता है?",
        "options_en": ["Makes array immutable", "Makes array readable only", "Both A and B", "Makes array writeable"],
        "options_hi": ["ऐरे को अपरिवर्तनीय बनाता है", "ऐरे को केवल पठनीय बनाता है", "A और B दोनों", "ऐरे को लिखने योग्य बनाता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 106,
        "question_en": "How do you define an index signature in TypeScript?",
        "question_hi": "TypeScript में इंडेक्स सिग्नेचर को कैसे परिभाषित करते हैं?",
        "options_en": ["[key: string]: type", "{key: type}", "index: type", "string: type"],
        "options_hi": ["[key: string]: type", "{key: type}", "index: type", "string: type"],
        "answer_en": "[key: string]: type",
        "answer_hi": "[key: string]: type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 107,
        "question_en": "What is the 'in' operator used for in type contexts?",
        "question_hi": "टाइप कॉन्टेक्स्ट में 'in' ऑपरेटर का उपयोग किसके लिए किया जाता है?",
        "options_en": ["Iterate over union types", "Check property existence", "Both A and B", "None of the above"],
        "options_hi": ["यूनियन टाइप पर इटरेट करना", "प्रॉपर्टी के अस्तित्व की जाँच करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 108,
        "question_en": "What is 'type narrowing' with 'typeof'?",
        "question_hi": "'typeof' के साथ 'टाइप नैरोइंग' क्या है?",
        "options_en": ["Narrow type based on typeof check", "Widen type based on typeof", "Change type completely", "Remove type"],
        "options_hi": ["typeof चेक के आधार पर टाइप को नैरो करना", "typeof के आधार पर टाइप को विडेन करना", "टाइप को पूरी तरह बदलना", "टाइप को हटाना"],
        "answer_en": "Narrow type based on typeof check",
        "answer_hi": "typeof चेक के आधार पर टाइप को नैरो करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 109,
        "question_en": "How do you create a type that excludes null and undefined?",
        "question_hi": "एक टाइप कैसे बनाएं जो null और undefined को बाहर करता है?",
        "options_en": ["NonNullable<T>", "NotNull<T>", "T extends {}", "All of the above"],
        "options_hi": ["NonNullable<T>", "NotNull<T>", "T extends {}", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 110,
        "question_en": "What is 'const enum' in TypeScript?",
        "question_hi": "TypeScript में 'const enum' क्या है?",
        "options_en": ["Enum that gets inlined", "Constant enum values", "Both A and B", "None of the above"],
        "options_hi": ["ऐनम जो इनलाइन हो जाता है", "कॉन्स्टेंट ऐनम वैल्यू", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 111,
        "question_en": "How do you define a function type?",
        "question_hi": "फंक्शन टाइप को कैसे परिभाषित करते हैं?",
        "options_en": ["(param: type) => returnType", "function(param: type): returnType", "Both A and B", "None of the above"],
        "options_hi": ["(param: type) => returnType", "function(param: type): returnType", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 112,
        "question_en": "What is 'method overloading' in TypeScript?",
        "question_hi": "TypeScript में 'मेथड ओवरलोडिंग' क्या है?",
        "options_en": ["Multiple function signatures", "Same method name with different parameters", "Both A and B", "Different method names"],
        "options_hi": ["एकाधिक फंक्शन सिग्नेचर", "अलग-अलग पैरामीटर के साथ समान मेथड नाम", "A और B दोनों", "अलग-अलग मेथड नाम"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 113,
        "question_en": "How do you make a class property protected?",
        "question_hi": "क्लास प्रॉपर्टी को प्रोटेक्टेड कैसे बनाते हैं?",
        "options_en": ["protected property: type", "property: protected type", "protected(property): type", "property protected: type"],
        "options_hi": ["protected property: type", "property: protected type", "protected(property): type", "property protected: type"],
        "answer_en": "protected property: type",
        "answer_hi": "protected property: type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 114,
        "question_en": "What is 'abstract method' in TypeScript?",
        "question_hi": "TypeScript में 'एब्स्ट्रैक्ट मेथड' क्या है?",
        "options_en": ["Method without implementation", "Method that must be implemented", "Both A and B", "Concrete method"],
        "options_hi": ["बिना इम्प्लीमेंटेशन के मेथड", "मेथड जिसे इम्प्लीमेंट करना होगा", "A और B दोनों", "कंक्रीट मेथड"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 115,
        "question_en": "How do you define a generic interface?",
        "question_hi": "जेनेरिक इंटरफेस को कैसे परिभाषित करते हैं?",
        "options_en": ["interface Name<T>", "interface<T> Name", "generic interface Name<T>", "interface Name generic<T>"],
        "options_hi": ["interface Name<T>", "interface<T> Name", "generic interface Name<T>", "interface Name generic<T>"],
        "answer_en": "interface Name<T>",
        "answer_hi": "interface Name<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 116,
        "question_en": "What is 'type predicate' with custom guard?",
        "question_hi": "कस्टम गार्ड के साथ 'टाइप प्रेडिकेट' क्या है?",
        "options_en": ["Function returning type predicate", "param is Type syntax", "Both A and B", "Boolean function"],
        "options_hi": ["फंक्शन जो टाइप प्रेडिकेट रिटर्न करता है", "param is Type सिंटैक्स", "A और B दोनों", "बूलियन फंक्शन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 117,
        "question_en": "How do you create a mapped type that makes all properties optional?",
        "question_hi": "एक मैप्ड टाइप कैसे बनाएं जो सभी प्रॉपर्टी को ऑप्शनल बनाता है?",
        "options_en": ["{ [K in keyof T]?: T[K] }", "{ [K in keyof T]: T[K]? }", "{ [K in keyof T]?: T[K]? }", "Partial<T>"],
        "options_hi": ["{ [K in keyof T]?: T[K] }", "{ [K in keyof T]: T[K]? }", "{ [K in keyof T]?: T[K]? }", "Partial<T>"],
        "answer_en": "{ [K in keyof T]?: T[K] }",
        "answer_hi": "{ [K in keyof T]?: T[K] }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 118,
        "question_en": "What is 'conditional type' with infer?",
        "question_hi": "infer के साथ 'कंडीशनल टाइप' क्या है?",
        "options_en": ["Type that infers types in conditions", "T extends infer U ? X : Y", "Both A and B", "Simple if-else for types"],
        "options_hi": ["ऐसा टाइप जो शर्तों में टाइप को इन्फर करता है", "T extends infer U ? X : Y", "A और B दोनों", "टाइप के लिए साधारण if-else"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 119,
        "question_en": "How do you extract the element type of an array?",
        "question_hi": "ऐरे के एलिमेंट टाइप को कैसे निकालते हैं?",
        "options_en": ["T[number]", "T[0]", "ElementType<T>", "All of the above"],
        "options_hi": ["T[number]", "T[0]", "ElementType<T>", "उपरोक्त सभी"],
        "answer_en": "T[number]",
        "answer_hi": "T[number]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 120,
        "question_en": "What is 'template literal type' with unions?",
        "question_hi": "यूनियन के साथ 'टेम्पलेट लिटरल टाइप' क्या है?",
        "options_en": ["Dynamic string types", `\`\${A}-\${B}\``, "Both A and B", "Static string types"],
        "options_hi": ["डायनामिक स्ट्रिंग टाइप", `\`\${A}-\${B}\``, "A और B दोनों", "स्टैटिक स्ट्रिंग टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 121,
        "question_en": "How do you create a type that requires at least one property?",
        "question_hi": "एक टाइप कैसे बनाएं जो कम से कम एक प्रॉपर्टी की आवश्यकता हो?",
        "options_en": ["Partial<T> & { [K in keyof T]: Required<Pick<T, K>> }[keyof T]", "AtLeastOne<T>", "Both A and B", "RequireOne<T>"],
        "options_hi": ["Partial<T> & { [K in keyof T]: Required<Pick<T, K>> }[keyof T]", "AtLeastOne<T>", "A और B दोनों", "RequireOne<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 122,
        "question_en": "What is 'type only import'?",
        "question_hi": "'टाइप ओनली इम्पोर्ट' क्या है?",
        "options_en": ["import type { T }", "Import for type information only", "Both A and B", "Import for runtime"],
        "options_hi": ["import type { T }", "केवल टाइप इन्फॉर्मेशन के लिए इम्पोर्ट", "A और B दोनों", "रनटाइम के लिए इम्पोर्ट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 123,
        "question_en": "How do you define a constructor type?",
        "question_hi": "कंस्ट्रक्टर टाइप को कैसे परिभाषित करते हैं?",
        "options_en": ["new (...args: any[]) => T", "constructor(...args: any[]): T", "Both A and B", "None of the above"],
        "options_hi": ["new (...args: any[]) => T", "constructor(...args: any[]): T", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "new (...args: any[]) => T",
        "answer_hi": "new (...args: any[]) => T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 124,
        "question_en": "What is 'assertion signature' in TypeScript?",
        "question_hi": "TypeScript में 'असर्शन सिग्नेचर' क्या है?",
        "options_en": ["Function that asserts condition", "asserts condition syntax", "Both A and B", "Type assertion"],
        "options_hi": ["फंक्शन जो कंडीशन को असर्ट करता है", "asserts condition सिंटैक्स", "A और B दोनों", "टाइप असर्शन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 125,
        "question_en": "How do you create a recursive type for linked list?",
        "question_hi": "लिंक्ड लिस्ट के लिए रिकर्सिव टाइप कैसे बनाएं?",
        "options_en": ["type List = { value: number; next: List | null }", "interface List { value: number; next: List | null }", "Both A and B", "None of the above"],
        "options_hi": ["type List = { value: number; next: List | null }", "interface List { value: number; next: List | null }", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 126,
        "question_en": "What is 'type spreading' for objects?",
        "question_hi": "ऑब्जेक्ट के लिए 'टाइप स्प्रेडिंग' क्या है?",
        "options_en": ["...T syntax in types", "Merging object types", "Both A and B", "Copying objects"],
        "options_hi": ["टाइप में ...T सिंटैक्स", "ऑब्जेक्ट टाइप को मर्ज करना", "A और B दोनों", "ऑब्जेक्ट को कॉपी करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 127,
        "question_en": "How do you define a type for function that may throw?",
        "question_hi": "ऐसे फंक्शन के लिए टाइप कैसे परिभाषित करें जो throw कर सकता है?",
        "options_en": ["() => T | never", "() => T | Error", "() => T", "() => T | void"],
        "options_hi": ["() => T | never", "() => T | Error", "() => T", "() => T | void"],
        "answer_en": "() => T | never",
        "answer_hi": "() => T | never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 128,
        "question_en": "What is 'branded type' for nominal typing?",
        "question_hi": "नॉमिनल टाइपिंग के लिए 'ब्रांडेड टाइप' क्या है?",
        "options_en": ["type Branded<T, B> = T & { __brand: B }", "Type with unique brand", "Both A and B", "Type with name"],
        "options_hi": ["type Branded<T, B> = T & { __brand: B }", "यूनिक ब्रांड वाला टाइप", "A और B दोनों", "नाम वाला टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 129,
        "question_en": "How do you extract optional properties from a type?",
        "question_hi": "किसी टाइप से ऑप्शनल प्रॉपर्टी को कैसे निकालते हैं?",
        "options_en": ["{ [K in keyof T as undefined extends T[K] ? K : never]: T[K] }", "OptionalProperties<T>", "Both A and B", "PickOptional<T>"],
        "options_hi": ["{ [K in keyof T as undefined extends T[K] ? K : never]: T[K] }", "OptionalProperties<T>", "A और B दोनों", "PickOptional<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 130,
        "question_en": "What is 'type-level programming' in TypeScript?",
        "question_hi": "TypeScript में 'टाइप-लेवल प्रोग्रामिंग' क्या है?",
        "options_en": ["Programming at type level", "Using types for computations", "Both A and B", "Runtime programming"],
        "options_hi": ["टाइप लेवल पर प्रोग्रामिंग", "कंप्यूटेशन के लिए टाइप का उपयोग", "A और B दोनों", "रनटाइम प्रोग्रामिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 131,
        "question_en": "How do you create a type that deep partial?",
        "question_hi": "डीप पार्शियल टाइप कैसे बनाएं?",
        "options_en": ["type DeepPartial<T> = { [K in keyof T]?: DeepPartial<T[K]> }", "Recursive Partial", "Both A and B", "Shallow Partial"],
        "options_hi": ["type DeepPartial<T> = { [K in keyof T]?: DeepPartial<T[K]> }", "रिकर्सिव पार्शियल", "A और B दोनों", "शैलो पार्शियल"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 132,
        "question_en": "What is 'type isomorphism' in TypeScript?",
        "question_hi": "TypeScript में 'टाइप आइसोमॉर्फिज्म' क्या है?",
        "options_en": ["Two types with same structure", "Bi-directional type conversion", "Both A and B", "Different types"],
        "options_hi": ["समान संरचना वाले दो टाइप", "द्वि-दिशात्मक टाइप रूपांतरण", "A और B दोनों", "अलग-अलग टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 133,
        "question_en": "How do you define a type for CSS properties?",
        "question_hi": "CSS प्रॉपर्टी के लिए टाइप कैसे परिभाषित करें?",
        "options_en": ["type CSSProperties = { [K in keyof CSSStyleDeclaration]?: string }", "Record<string, string>", "Both A and B", "None of the above"],
        "options_hi": ["type CSSProperties = { [K in keyof CSSStyleDeclaration]?: string }", "Record<string, string>", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 134,
        "question_en": "What is 'type-safe event emitter'?",
        "question_hi": "'टाइप-सेफ इवेंट एमिटर' क्या है?",
        "options_en": ["Event emitter with typed events", "Generic event emitter", "Both A and B", "Untyped event emitter"],
        "options_hi": ["टाइप्ड इवेंट वाला इवेंट एमिटर", "जेनेरिक इवेंट एमिटर", "A और B दोनों", "अनटाइप्ड इवेंट एमिटर"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 135,
        "question_en": "How do you create a type that excludes methods?",
        "question_hi": "एक टाइप कैसे बनाएं जो मेथड को बाहर करता है?",
        "options_en": ["{ [K in keyof T as T[K] extends Function ? never : K]: T[K] }", "PropertiesOnly<T>", "Both A and B", "MethodsOnly<T>"],
        "options_hi": ["{ [K in keyof T as T[K] extends Function ? never : K]: T[K] }", "PropertiesOnly<T>", "A और B दोनों", "MethodsOnly<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 136,
        "question_en": "What is 'type-level integers' in TypeScript?",
        "question_hi": "TypeScript में 'टाइप-लेवल इंटीजर' क्या है?",
        "options_en": ["Representing numbers at type level", "Using tuples for counting", "Both A and B", "Runtime numbers"],
        "options_hi": ["टाइप लेवल पर नंबर को रिप्रेजेंट करना", "काउंटिंग के लिए टुपल का उपयोग", "A और B दोनों", "रनटाइम नंबर"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 137,
        "question_en": "How do you define a type for API response?",
        "question_hi": "API रिस्पॉन्स के लिए टाइप कैसे परिभाषित करें?",
        "options_en": ["type ApiResponse<T> = { data: T; status: number }", "Generic response type", "Both A and B", "Any response type"],
        "options_hi": ["type ApiResponse<T> = { data: T; status: number }", "जेनेरिक रिस्पॉन्स टाइप", "A और B दोनों", "कोई भी रिस्पॉन्स टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 138,
        "question_en": "What is 'type-safe dictionary'?",
        "question_hi": "'टाइप-सेफ डिक्शनरी' क्या है?",
        "options_en": ["Record<K, V>", "{ [key: K]: V }", "Both A and B", "Map object"],
        "options_hi": ["Record<K, V>", "{ [key: K]: V }", "A और B दोनों", "Map ऑब्जेक्ट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 139,
        "question_en": "How do you create a type that makes all properties mutable?",
        "question_hi": "एक टाइप कैसे बनाएं जो सभी प्रॉपर्टी को mutable बनाता है?",
        "options_en": ["{ -readonly [K in keyof T]: T[K] }", "Mutable<T>", "Both A and B", "Readonly<T>"],
        "options_hi": ["{ -readonly [K in keyof T]: T[K] }", "Mutable<T>", "A और B दोनों", "Readonly<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 140,
        "question_en": "What is 'type-level state machine'?",
        "question_hi": "'टाइप-लेवल स्टेट मशीन' क्या है?",
        "options_en": ["State machine implemented in types", "Using union types for states", "Both A and B", "Runtime state machine"],
        "options_hi": ["टाइप में इम्प्लीमेंटेड स्टेट मशीन", "स्टेट के लिए यूनियन टाइप का उपयोग", "A और B दोनों", "रनटाइम स्टेट मशीन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 141,
        "question_en": "How do you define a type for React component props?",
        "question_hi": "React कंपोनेंट प्रॉप्स के लिए टाइप कैसे परिभाषित करें?",
        "options_en": ["type Props = { children?: ReactNode }", "interface Props { children?: ReactNode }", "Both A and B", "Any props"],
        "options_hi": ["type Props = { children?: ReactNode }", "interface Props { children?: ReactNode }", "A और B दोनों", "कोई भी प्रॉप्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 142,
        "question_en": "What is 'type-level validation'?",
        "question_hi": "'टाइप-लेवल वैलिडेशन' क्या है?",
        "options_en": ["Validation using types", "Compile-time validation", "Both A and B", "Runtime validation"],
        "options_hi": ["टाइप का उपयोग करके वैलिडेशन", "कंपाइल-टाइम वैलिडेशन", "A और B दोनों", "रनटाइम वैलिडेशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 143,
        "question_en": "How do you create a type that requires specific properties?",
        "question_hi": "एक टाइप कैसे बनाएं जो विशिष्ट प्रॉपर्टी की आवश्यकता हो?",
        "options_en": ["T & Required<Pick<T, K>>", "WithRequired<T, K>", "Both A and B", "Partial<T>"],
        "options_hi": ["T & Required<Pick<T, K>>", "WithRequired<T, K>", "A और B दोनों", "Partial<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 144,
        "question_en": "What is 'type-level arithmetic'?",
        "question_hi": "'टाइप-लेवल अरिथमेटिक' क्या है?",
        "options_en": ["Arithmetic operations at type level", "Using tuples for math", "Both A and B", "Runtime arithmetic"],
        "options_hi": ["टाइप लेवल पर अरिथमेटिक ऑपरेशन", "मैथ के लिए टुपल का उपयोग", "A और B दोनों", "रनटाइम अरिथमेटिक"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 145,
        "question_en": "How do you define a type for error boundaries?",
        "question_hi": "एरर बाउंडरी के लिए टाइप कैसे परिभाषित करें?",
        "options_en": ["type ErrorBoundaryState = { hasError: boolean; error?: Error }", "interface ErrorBoundaryState { hasError: boolean; error?: Error }", "Both A and B", "Any state"],
        "options_hi": ["type ErrorBoundaryState = { hasError: boolean; error?: Error }", "interface ErrorBoundaryState { hasError: boolean; error?: Error }", "A और B दोनों", "कोई भी स्टेट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 146,
        "question_en": "What is 'type-level string manipulation'?",
        "question_hi": "'टाइप-लेवल स्ट्रिंग मैनिपुलेशन' क्या है?",
        "options_en": ["String operations at type level", "Template literal types", "Both A and B", "Runtime string operations"],
        "options_hi": ["टाइप लेवल पर स्ट्रिंग ऑपरेशन", "टेम्पलेट लिटरल टाइप", "A और B दोनों", "रनटाइम स्ट्रिंग ऑपरेशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 147,
        "question_en": "How do you create a type that deep required?",
        "question_hi": "डीप रिक्वायर्ड टाइप कैसे बनाएं?",
        "options_en": ["type DeepRequired<T> = { [K in keyof T]-?: DeepRequired<T[K]> }", "Recursive Required", "Both A and B", "Shallow Required"],
        "options_hi": ["type DeepRequired<T> = { [K in keyof T]-?: DeepRequired<T[K]> }", "रिकर्सिव रिक्वायर्ड", "A और B दोनों", "शैलो रिक्वायर्ड"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 148,
        "question_en": "What is 'type-level conditionals' with recursion?",
        "question_hi": "रिकर्शन के साथ 'टाइप-लेवल कंडीशनल' क्या है?",
        "options_en": ["Recursive conditional types", "Types that call themselves", "Both A and B", "Simple conditionals"],
        "options_hi": ["रिकर्सिव कंडीशनल टाइप", "ऐसे टाइप जो स्वयं को कॉल करते हैं", "A और B दोनों", "साधारण कंडीशनल"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 149,
        "question_en": "How do you define a type for paginated data?",
        "question_hi": "पैजिनेटेड डेटा के लिए टाइप कैसे परिभाषित करें?",
        "options_en": ["type Paginated<T> = { data: T[]; total: number; page: number }", "Generic pagination type", "Both A and B", "Array type"],
        "options_hi": ["type Paginated<T> = { data: T[]; total: number; page: number }", "जेनेरिक पैजिनेशन टाइप", "A और B दोनों", "ऐरे टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 150,
        "question_en": "What is 'type-level finite state machine'?",
        "question_hi": "'टाइप-लेवल फाइनाइट स्टेट मशीन' क्या है?",
        "options_en": ["FSM implemented in types", "Using union types for finite states", "Both A and B", "Infinite state machine"],
        "options_hi": ["टाइप में इम्प्लीमेंटेड FSM", "फाइनाइट स्टेट के लिए यूनियन टाइप का उपयोग", "A और B दोनों", "इनफाइनाइट स्टेट मशीन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 151,
        "question_en": "How do you create a type that extracts union from tuple?",
        "question_hi": "एक टाइप कैसे बनाएं जो टुपल से यूनियन निकालता है?",
        "options_en": ["T[number]", "TupleToUnion<T>", "Both A and B", "UnionToTuple<T>"],
        "options_hi": ["T[number]", "TupleToUnion<T>", "A और B दोनों", "UnionToTuple<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 152,
        "question_en": "What is 'type-level object path'?",
        "question_hi": "'टाइप-लेवल ऑब्जेक्ट पाथ' क्या है?",
        "options_en": ["Type-safe object path access", "Using template literals for paths", "Both A and B", "Runtime path access"],
        "options_hi": ["टाइप-सेफ ऑब्जेक्ट पाथ एक्सेस", "पाथ के लिए टेम्पलेट लिटरल का उपयोग", "A और B दोनों", "रनटाइम पाथ एक्सेस"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 153,
        "question_en": "How do you define a type for async action?",
        "question_hi": "एसिंक एक्शन के लिए टाइप कैसे परिभाषित करें?",
        "options_en": ["type AsyncAction = () => Promise<void>", "type AsyncAction<T> = () => Promise<T>", "Both A and B", "Sync action type"],
        "options_hi": ["type AsyncAction = () => Promise<void>", "type AsyncAction<T> = () => Promise<T>", "A और B दोनों", "सिंक एक्शन टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 154,
        "question_en": "What is 'type-level pattern matching'?",
        "question_hi": "'टाइप-लेवल पैटर्न मैचिंग' क्या है?",
        "options_en": ["Pattern matching with conditional types", "Using infer for extraction", "Both A and B", "Runtime pattern matching"],
        "options_hi": ["कंडीशनल टाइप के साथ पैटर्न मैचिंग", "एक्सट्रैक्शन के लिए infer का उपयोग", "A और B दोनों", "रनटाइम पैटर्न मैचिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 155,
        "question_en": "How do you create a type that makes properties readonly recursively?",
        "question_hi": "एक टाइप कैसे बनाएं जो प्रॉपर्टी को रिकर्सिवली रीडओनली बनाता है?",
        "options_en": ["type DeepReadonly<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> }", "Recursive Readonly", "Both A and B", "Shallow Readonly"],
        "options_hi": ["type DeepReadonly<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> }", "रिकर्सिव रीडओनली", "A और B दोनों", "शैलो रीडओनली"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 156,
        "question_en": "What is 'type-level dependency injection'?",
        "question_hi": "'टाइप-लेवल डिपेंडेंसी इंजेक्शन' क्या है?",
        "options_en": ["DI implemented with types", "Using generics for dependencies", "Both A and B", "Runtime DI"],
        "options_hi": ["टाइप के साथ इम्प्लीमेंटेड DI", "डिपेंडेंसी के लिए जेनेरिक का उपयोग", "A और B दोनों", "रनटाइम DI"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 157,
        "question_en": "How do you define a type for form validation?",
        "question_hi": "फॉर्म वैलिडेशन के लिए टाइप कैसे परिभाषित करें?",
        "options_en": ["type ValidationResult = { isValid: boolean; errors: string[] }", "interface ValidationResult { isValid: boolean; errors: string[] }", "Both A and B", "Boolean type"],
        "options_hi": ["type ValidationResult = { isValid: boolean; errors: string[] }", "interface ValidationResult { isValid: boolean; errors: string[] }", "A और B दोनों", "बूलियन टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 158,
        "question_en": "What is 'type-level linked list'?",
        "question_hi": "'टाइप-लेवल लिंक्ड लिस्ट' क्या है?",
        "options_en": ["Linked list implemented in types", "Using recursive types", "Both A and B", "Array type"],
        "options_hi": ["टाइप में इम्प्लीमेंटेड लिंक्ड लिस्ट", "रिकर्सिव टाइप का उपयोग", "A और B दोनों", "ऐरे टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 159,
        "question_en": "How do you create a type that extracts promise type?",
        "question_hi": "एक टाइप कैसे बनाएं जो प्रॉमिस टाइप निकालता है?",
        "options_en": ["type Awaited<T> = T extends Promise<infer U> ? U : T", "UnwrapPromise<T>", "Both A and B", "Promise type"],
        "options_hi": ["type Awaited<T> = T extends Promise<infer U> ? U : T", "UnwrapPromise<T>", "A और B दोनों", "प्रॉमिस टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 160,
        "question_en": "What is 'type-level configuration'?",
        "question_hi": "'टाइप-लेवल कॉन्फिगरेशन' क्या है?",
        "options_en": ["Configuration using types", "Compile-time configuration", "Both A and B", "Runtime configuration"],
        "options_hi": ["टाइप का उपयोग करके कॉन्फिगरेशन", "कंपाइल-टाइम कॉन्फिगरेशन", "A और B दोनों", "रनटाइम कॉन्फिगरेशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 161,
        "question_en": "How do you define a type for middleware chain?",
        "question_hi": "मिडलवेयर चेन के लिए टाइप कैसे परिभाषित करें?",
        "options_en": ["type Middleware<T> = (context: T, next: () => Promise<void>) => Promise<void>", "Generic middleware type", "Both A and B", "Function type"],
        "options_hi": ["type Middleware<T> = (context: T, next: () => Promise<void>) => Promise<void>", "जेनेरिक मिडलवेयर टाइप", "A और B दोनों", "फंक्शन टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 162,
        "question_en": "What is 'type-level parser'?",
        "question_hi": "'टाइप-लेवल पार्सर' क्या है?",
        "options_en": ["Parser implemented in types", "String parsing at type level", "Both A and B", "Runtime parser"],
        "options_hi": ["टाइप में इम्प्लीमेंटेड पार्सर", "टाइप लेवल पर स्ट्रिंग पार्सिंग", "A और B दोनों", "रनटाइम पार्सर"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 163,
        "question_en": "How do you create a type that requires exact properties?",
        "question_hi": "एक टाइप कैसे बनाएं जो एक्सैक्ट प्रॉपर्टी की आवश्यकता हो?",
        "options_en": ["type Exact<T, U extends T> = T & Record<Exclude<keyof U, keyof T>, never>", "Strict type", "Both A and B", "Loose type"],
        "options_hi": ["type Exact<T, U extends T> = T & Record<Exclude<keyof U, keyof T>, never>", "स्ट्रिक्ट टाइप", "A और B दोनों", "लूज़ टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 164,
        "question_en": "What is 'type-level JSON schema'?",
        "question_hi": "'टाइप-लेवल JSON स्कीमा' क्या है?",
        "options_en": ["JSON schema validation with types", "Type-safe JSON parsing", "Both A and B", "Runtime JSON parsing"],
        "options_hi": ["टाइप के साथ JSON स्कीमा वैलिडेशन", "टाइप-सेफ JSON पार्सिंग", "A और B दोनों", "रनटाइम JSON पार्सिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 165,
        "question_en": "How do you define a type for tree structure?",
        "question_hi": "ट्री स्ट्रक्चर के लिए टाइप कैसे परिभाषित करें?",
        "options_en": ["type Tree<T> = { value: T; children: Tree<T>[] }", "Recursive tree type", "Both A and B", "Flat structure"],
        "options_hi": ["type Tree<T> = { value: T; children: Tree<T>[] }", "रिकर्सिव ट्री टाइप", "A और B दोनों", "फ्लैट स्ट्रक्चर"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 166,
        "question_en": "What is 'type-level unit testing'?",
        "question_hi": "'टाइप-लेवल यूनिट टेस्टिंग' क्या है?",
        "options_en": ["Testing types with assertions", "Type-level test cases", "Both A and B", "Runtime testing"],
        "options_hi": ["असर्शन के साथ टाइप का टेस्टिंग", "टाइप-लेवल टेस्ट केस", "A और B दोनों", "रनटाइम टेस्टिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 167,
        "question_en": "How do you create a type that extracts function parameters?",
        "question_hi": "एक टाइप कैसे बनाएं जो फंक्शन पैरामीटर निकालता है?",
        "options_en": ["Parameters<T>", "T extends (...args: infer P) => any ? P : never", "Both A and B", "ReturnType<T>"],
        "options_hi": ["Parameters<T>", "T extends (...args: infer P) => any ? P : never", "A और B दोनों", "ReturnType<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 168,
        "question_en": "What is 'type-level database'?",
        "question_hi": "'टाइप-लेवल डेटाबेस' क्या है?",
        "options_en": ["Database schema in types", "Type-safe database operations", "Both A and B", "Runtime database"],
        "options_hi": ["टाइप में डेटाबेस स्कीमा", "टाइप-सेफ डेटाबेस ऑपरेशन", "A और B दोनों", "रनटाइम डेटाबेस"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 169,
        "question_en": "How do you define a type for state management?",
        "question_hi": "स्टेट मैनेजमेंट के लिए टाइप कैसे परिभाषित करें?",
        "options_en": ["type State = { [key: string]: any }", "Generic state type", "Both A and B", "Any state"],
        "options_hi": ["type State = { [key: string]: any }", "जेनेरिक स्टेट टाइप", "A और B दोनों", "कोई भी स्टेट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 170,
        "question_en": "What is 'type-level compiler'?",
        "question_hi": "'टाइप-लेवल कंपाइलर' क्या है?",
        "options_en": ["Compiler implemented in types", "Type transformation system", "Both A and B", "Runtime compiler"],
        "options_hi": ["टाइप में इम्प्लीमेंटेड कंपाइलर", "टाइप ट्रांसफॉर्मेशन सिस्टम", "A और B दोनों", "रनटाइम कंपाइलर"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 171,
        "question_en": "How do you create a type that requires all or none?",
        "question_hi": "एक टाइप कैसे बनाएं जो सभी या कोई नहीं की आवश्यकता हो?",
        "options_en": ["type AllOrNone<T> = T | { [K in keyof T]?: never }", "Mutually exclusive properties", "Both A and B", "Partial properties"],
        "options_hi": ["type AllOrNone<T> = T | { [K in keyof T]?: never }", "पारस्परिक रूप से अनन्य गुण", "A और B दोनों", "आंशिक गुण"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 172,
        "question_en": "What is 'type-level virtual machine'?",
        "question_hi": "'टाइप-लेवल वर्चुअल मशीन' क्या है?",
        "options_en": ["VM implemented in types", "Type-level execution", "Both A and B", "Runtime VM"],
        "options_hi": ["टाइप में इम्प्लीमेंटेड VM", "टाइप-लेवल एक्सीक्यूशन", "A और B दोनों", "रनटाइम VM"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 173,
        "question_en": "How do you define a type for plugin system?",
        "question_hi": "प्लगइन सिस्टम के लिए टाइप कैसे परिभाषित करें?",
        "options_en": ["type Plugin<T> = (config: T) => void", "Generic plugin type", "Both A and B", "Function type"],
        "options_hi": ["type Plugin<T> = (config: T) => void", "जेनेरिक प्लगइन टाइप", "A और B दोनों", "फंक्शन टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 174,
        "question_en": "What is 'type-level algebra'?",
        "question_hi": "'टाइप-लेवल अलजेब्रा' क्या है?",
        "options_en": ["Algebraic structures in types", "Type-level math operations", "Both A and B", "Runtime algebra"],
        "options_hi": ["टाइप में बीजगणितीय संरचनाएं", "टाइप-लेवल मैथ ऑपरेशन", "A और B दोनों", "रनटाइम अलजेब्रा"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 175,
        "question_en": "How do you create a type that requires mutual exclusion?",
        "question_hi": "एक टाइप कैसे बनाएं जो म्यूचुअल एक्सक्लूजन की आवश्यकता हो?",
        "options_en": ["type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U", "Mutually exclusive types", "Both A and B", "Union types"],
        "options_hi": ["type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U", "पारस्परिक रूप से अनन्य प्रकार", "A और B दोनों", "यूनियन टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 176,
        "question_en": "What is 'type-level cryptography'?",
        "question_hi": "'टाइप-लेवल क्रिप्टोग्राफी' क्या है?",
        "options_en": ["Crypto operations in types", "Type-safe encryption", "Both A and B", "Runtime cryptography"],
        "options_hi": ["टाइप में क्रिप्टो ऑपरेशन", "टाइप-सेफ एन्क्रिप्शन", "A और B दोनों", "रनटाइम क्रिप्टोग्राफी"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 177,
        "question_en": "How do you define a type for event system?",
        "question_hi": "इवेंट सिस्टम के लिए टाइप कैसे परिभाषित करें?",
        "options_en": ["type EventMap = { [event: string]: any[] }", "Generic event map", "Both A and B", "Any events"],
        "options_hi": ["type EventMap = { [event: string]: any[] }", "जेनेरिक इवेंट मैप", "A और B दोनों", "कोई भी इवेंट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 178,
        "question_en": "What is 'type-level game'?",
        "question_hi": "'टाइप-लेवल गेम' क्या है?",
        "options_en": ["Game implemented in types", "Type-level game logic", "Both A and B", "Runtime game"],
        "options_hi": ["टाइप में इम्प्लीमेंटेड गेम", "टाइप-लेवल गेम लॉजिक", "A और B दोनों", "रनटाइम गेम"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 179,
        "question_en": "How do you create a type that requires specific keys?",
        "question_hi": "एक टाइप कैसे बनाएं जो विशिष्ट कुंजियों की आवश्यकता हो?",
        "options_en": ["type RequireKeys<T, K extends keyof T> = T & Required<Pick<T, K>>", "WithRequired<T, K>", "Both A and B", "Partial<T>"],
        "options_hi": ["type RequireKeys<T, K extends keyof T> = T & Required<Pick<T, K>>", "WithRequired<T, K>", "A और B दोनों", "Partial<T>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 180,
        "question_en": "What is 'type-level operating system'?",
        "question_hi": "'टाइप-लेवल ऑपरेटिंग सिस्टम' क्या है?",
        "options_en": ["OS concepts in types", "Type-level process management", "Both A and B", "Runtime OS"],
        "options_hi": ["टाइप में OS अवधारणाएं", "टाइप-लेवल प्रोसेस मैनेजमेंट", "A और B दोनों", "रनटाइम OS"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 181,
        "question_en": "How do you define a type for cache system?",
        "question_hi": "कैश सिस्टम के लिए टाइप कैसे परिभाषित करें?",
        "options_en": ["type Cache<K, V> = Map<K, V>", "Generic cache type", "Both A and B", "Object type"],
        "options_hi": ["type Cache<K, V> = Map<K, V>", "जेनेरिक कैश टाइप", "A और B दोनों", "ऑब्जेक्ट टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 182,
        "question_en": "What is 'type-level neural network'?",
        "question_hi": "'टाइप-लेवल न्यूरल नेटवर्क' क्या है?",
        "options_en": ["Neural network in types", "Type-level machine learning", "Both A and B", "Runtime neural network"],
        "options_hi": ["टाइप में न्यूरल नेटवर्क", "टाइप-लेवल मशीन लर्निंग", "A और B दोनों", "रनटाइम न्यूरल नेटवर्क"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 183,
        "question_en": "How do you create a type that requires at most one?",
        "question_hi": "एक टाइप कैसे बनाएं जो अधिकतम एक की आवश्यकता हो?",
        "options_en": ["type AtMostOne<T> = { [K in keyof T]: Pick<T, K> & Partial<Record<Exclude<keyof T, K>, never>> }[keyof T]", "Mutually exclusive optional", "Both A and B", "All properties"],
        "options_hi": ["type AtMostOne<T> = { [K in keyof T]: Pick<T, K> & Partial<Record<Exclude<keyof T, K>, never>> }[keyof T]", "पारस्परिक रूप से अनन्य वैकल्पिक", "A और B दोनों", "सभी गुण"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 184,
        "question_en": "What is 'type-level quantum computing'?",
        "question_hi": "'टाइप-लेवल क्वांटम कंप्यूटिंग' क्या है?",
        "options_en": ["Quantum concepts in types", "Type-level quantum operations", "Both A and B", "Runtime quantum computing"],
        "options_hi": ["टाइप में क्वांटम अवधारणाएं", "टाइप-लेवल क्वांटम ऑपरेशन", "A और B दोनों", "रनटाइम क्वांटम कंप्यूटिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 185,
        "question_en": "How do you define a type for streaming data?",
        "question_hi": "स्ट्रीमिंग डेटा के लिए टाइप कैसे परिभाषित करें?",
        "options_en": ["type Stream<T> = AsyncIterable<T>", "Generic stream type", "Both A and B", "Array type"],
        "options_hi": ["type Stream<T> = AsyncIterable<T>", "जेनेरिक स्ट्रीम टाइप", "A और B दोनों", "ऐरे टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 186,
        "question_en": "What is 'type-level blockchain'?",
        "question_hi": "'टाइप-लेवल ब्लॉकचेन' क्या है?",
        "options_en": ["Blockchain in types", "Type-level distributed ledger", "Both A and B", "Runtime blockchain"],
        "options_hi": ["टाइप में ब्लॉकचेन", "टाइप-लेवल डिस्ट्रिब्यूटेड लेजर", "A और B दोनों", "रनटाइम ब्लॉकचेन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 187,
        "question_en": "How do you create a type that requires exact shape?",
        "question_hi": "एक टाइप कैसे बनाएं जो एक्सैक्ट शेप की आवश्यकता हो?",
        "options_en": ["type ExactShape<T, U extends T> = T & Record<Exclude<keyof U, keyof T>, never>", "Strict shape type", "Both A and B", "Loose shape"],
        "options_hi": ["type ExactShape<T, U extends T> = T & Record<Exclude<keyof U, keyof T>, never>", "स्ट्रिक्ट शेप टाइप", "A और B दोनों", "लूज़ शेप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 188,
        "question_en": "What is 'type-level artificial intelligence'?",
        "question_hi": "'टाइप-लेवल आर्टिफिशियल इंटेलिजेंस' क्या है?",
        "options_en": ["AI concepts in types", "Type-level AI algorithms", "Both A and B", "Runtime AI"],
        "options_hi": ["टाइप में AI अवधारणाएं", "टाइप-लेवल AI एल्गोरिदम", "A और B दोनों", "रनटाइम AI"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 189,
        "question_en": "How do you define a type for real-time data?",
        "question_hi": "रियल-टाइम डेटा के लिए टाइप कैसे परिभाषित करें?",
        "options_en": ["type RealTimeData<T> = { data: T; timestamp: number }", "Generic real-time type", "Both A and B", "Simple data type"],
        "options_hi": ["type RealTimeData<T> = { data: T; timestamp: number }", "जेनेरिक रियल-टाइम टाइप", "A और B दोनों", "सरल डेटा टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 190,
        "question_en": "What is 'type-level universe'?",
        "question_hi": "'टाइप-लेवल यूनिवर्स' क्या है?",
        "options_en": ["Complete type system", "All possible types", "Both A and B", "Limited types"],
        "options_hi": ["पूर्ण टाइप सिस्टम", "सभी संभावित प्रकार", "A और B दोनों", "सीमित प्रकार"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 191,
        "question_en": "How do you create a type that requires specific pattern?",
        "question_hi": "एक टाइप कैसे बनाएं जो विशिष्ट पैटर्न की आवश्यकता हो?",
        "options_en": ["type Pattern<T extends string> = \`prefix-\${T}-suffix\`", "Template literal pattern", "Both A and B", "String type"],
        "options_hi": ["type Pattern<T extends string> = \`prefix-\${T}-suffix\`", "टेम्पलेट लिटरल पैटर्न", "A और B दोनों", "स्ट्रिंग टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 192,
        "question_en": "What is 'type-level multiverse'?",
        "question_hi": "'टाइप-लेवल मल्टीवर्स' क्या है?",
        "options_en": ["Multiple type universes", "Advanced type systems", "Both A and B", "Single type system"],
        "options_hi": ["एकाधिक टाइप यूनिवर्स", "उन्नत टाइप सिस्टम", "A और B दोनों", "एकल टाइप सिस्टम"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 193,
        "question_en": "How do you define a type for time series data?",
        "question_hi": "टाइम सीरीज डेटा के लिए टाइप कैसे परिभाषित करें?",
        "options_en": ["type TimeSeries<T> = { timestamp: number; value: T }[]", "Generic time series type", "Both A and B", "Array type"],
        "options_hi": ["type TimeSeries<T> = { timestamp: number; value: T }[]", "जेनेरिक टाइम सीरीज टाइप", "A और B दोनों", "ऐरे टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 194,
        "question_en": "What is 'type-level singularity'?",
        "question_hi": "'टाइप-लेवल सिंगुलैरिटी' क्या है?",
        "options_en": ["Ultimate type system", "Type system convergence", "Both A and B", "Basic type system"],
        "options_hi": ["अंतिम टाइप सिस्टम", "टाइप सिस्टम अभिसरण", "A और B दोनों", "बेसिक टाइप सिस्टम"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 195,
        "question_en": "How do you create a type that requires specific format?",
        "question_hi": "एक टाइप कैसे बनाएं जो विशिष्ट फॉर्मेट की आवश्यकता हो?",
        "options_en": ["type Email = \`\${string}@\${string}.\${string}\`", "Template literal format", "Both A and B", "String type"],
        "options_hi": ["type Email = \`\${string}@\${string}.\${string}\`", "टेम्पलेट लिटरल फॉर्मेट", "A और B दोनों", "स्ट्रिंग टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 196,
        "question_en": "What is 'type-level consciousness'?",
        "question_hi": "'टाइप-लेवल कॉन्शसनेस' क्या है?",
        "options_en": ["Self-aware type system", "Intelligent types", "Both A and B", "Basic types"],
        "options_hi": ["स्व-जागरूक टाइप सिस्टम", "बुद्धिमान प्रकार", "A और B दोनों", "बेसिक टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 197,
        "question_en": "How do you define a type for spatial data?",
        "question_hi": "स्पेशियल डेटा के लिए टाइप कैसे परिभाषित करें?",
        "options_en": ["type Point = { x: number; y: number }", "type Rectangle = { x: number; y: number; width: number; height: number }", "Both A and B", "Number type"],
        "options_hi": ["type Point = { x: number; y: number }", "type Rectangle = { x: number; y: number; width: number; height: number }", "A और B दोनों", "नंबर टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 198,
        "question_en": "What is 'type-level eternity'?",
        "question_hi": "'टाइप-लेवल इटरनिटी' क्या है?",
        "options_en": ["Infinite type system", "Never-ending types", "Both A and B", "Finite types"],
        "options_hi": ["अनंत टाइप सिस्टम", "कभी न खत्म होने वाले प्रकार", "A और B दोनों", "सीमित प्रकार"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 199,
        "question_en": "How do you create a type that requires specific constraints?",
        "question_hi": "एक टाइप कैसे बनाएं जो विशिष्ट कंस्ट्रेंट की आवश्यकता हो?",
        "options_en": ["type Constrained<T extends constraint> = T", "Generic with constraints", "Both A and B", "Unconstrained type"],
        "options_hi": ["type Constrained<T extends constraint> = T", "कंस्ट्रेंट के साथ जेनेरिक", "A और B दोनों", "अनकंस्ट्रेंड टाइप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 200,
        "question_en": "What is 'type-level infinity'?",
        "question_hi": "'टाइप-लेवल इनफिनिटी' क्या है?",
        "options_en": ["Unbounded type system", "Limitless types", "Both A and B", "Bounded types"],
        "options_hi": ["असीमित टाइप सिस्टम", "असीमित प्रकार", "A और B दोनों", "सीमित प्रकार"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    }
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