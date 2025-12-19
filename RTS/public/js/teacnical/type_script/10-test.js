const questions = [
    {
        "num": 1,
        "question_en": "What is TypeScript primarily used for?",
        "question_hi": "TypeScript मुख्य रूप से किसके लिए उपयोग किया जाता है?",
        "options_en": ["Adding styles to web pages", "Static type checking", "Database management", "Server configuration"],
        "options_hi": ["वेब पेज पर स्टाइल जोड़ना", "स्टैटिक टाइप चेकिंग", "डेटाबेस प्रबंधन", "सर्वर कॉन्फ़िगरेशन"],
        "answer_en": "Static type checking",
        "answer_hi": "स्टैटिक टाइप चेकिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which of these is a valid TypeScript data type?",
        "question_hi": "इनमें से कौन सा TypeScript डेटा टाइप मान्य है?",
        "options_en": ["number", "decimal", "char", "float32"],
        "options_hi": ["number", "decimal", "char", "float32"],
        "answer_en": "number",
        "answer_hi": "number",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which keyword is used to define a variable in TypeScript?",
        "question_hi": "TypeScript में वेरिएबल को परिभाषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["var", "let", "const", "All of the above"],
        "options_hi": ["var", "let", "const", "सभी"],
        "answer_en": "All of the above",
        "answer_hi": "सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which TypeScript type is used to represent true/false values?",
        "question_hi": "TypeScript में true/false मानों को प्रदर्शित करने के लिए कौन सा टाइप उपयोग किया जाता है?",
        "options_en": ["boolean", "string", "number", "any"],
        "options_hi": ["boolean", "string", "number", "any"],
        "answer_en": "boolean",
        "answer_hi": "boolean",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which of the following is a TypeScript feature not present in JavaScript?",
        "question_hi": "निम्न में से कौन सा TypeScript की विशेषता है जो JavaScript में नहीं है?",
        "options_en": ["Static typing", "Loops", "Functions", "Variables"],
        "options_hi": ["स्टैटिक टाइपिंग", "लूप", "फंक्शन", "वेरिएबल"],
        "answer_en": "Static typing",
        "answer_hi": "स्टैटिक टाइपिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you declare a function in TypeScript?",
        "question_hi": "TypeScript में फंक्शन कैसे घोषित किया जाता है?",
        "options_en": ["function myFunc() {}", "func myFunc() {}", "def myFunc() {}", "function: myFunc() {}"],
        "options_hi": ["function myFunc() {}", "func myFunc() {}", "def myFunc() {}", "function: myFunc() {}"],
        "answer_en": "function myFunc() {}",
        "answer_hi": "function myFunc() {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which of the following is a TypeScript primitive type?",
        "question_hi": "निम्न में से कौन सा TypeScript प्रिमिटिव टाइप है?",
        "options_en": ["string", "array", "object", "class"],
        "options_hi": ["string", "array", "object", "class"],
        "answer_en": "string",
        "answer_hi": "string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which keyword is used for constants in TypeScript?",
        "question_hi": "TypeScript में कॉन्स्टेंट्स के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["var", "let", "const", "final"],
        "options_hi": ["var", "let", "const", "final"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What does the 'any' type signify in TypeScript?",
        "question_hi": "TypeScript में 'any' टाइप का क्या मतलब है?",
        "options_en": ["Can be any type", "Only numbers", "Only strings", "Only objects"],
        "options_hi": ["किसी भी टाइप हो सकता है", "केवल नंबर", "केवल स्ट्रिंग", "केवल ऑब्जेक्ट"],
        "answer_en": "Can be any type",
        "answer_hi": "किसी भी टाइप हो सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which operator is used for optional chaining in TypeScript?",
        "question_hi": "TypeScript में ऑप्शनल चेनिंग के लिए कौन सा ऑपरेटर उपयोग किया जाता है?",
        "options_en": ["?.", "??", "||", "&&"],
        "options_hi": ["?.", "??", "||", "&&"],
        "answer_en": "?.",
        "answer_hi": "?.",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which TypeScript type represents textual data?",
        "question_hi": "कौन सा TypeScript टाइप टेक्स्ट डेटा का प्रतिनिधित्व करता है?",
        "options_en": ["string", "boolean", "number", "any"],
        "options_hi": ["string", "boolean", "number", "any"],
        "answer_en": "string",
        "answer_hi": "string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which of the following is used to declare an array in TypeScript?",
        "question_hi": "TypeScript में array घोषित करने के लिए निम्न में से कौन सा उपयोग किया जाता है?",
        "options_en": ["let arr: number[];", "let arr: number;", "let arr: array;", "let arr: object;"],
        "options_hi": ["let arr: number[];", "let arr: number;", "let arr: array;", "let arr: object;"],
        "answer_en": "let arr: number[];",
        "answer_hi": "let arr: number[];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which of the following is used to define a class in TypeScript?",
        "question_hi": "TypeScript में class को परिभाषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["class", "object", "interface", "struct"],
        "options_hi": ["class", "object", "interface", "struct"],
        "answer_en": "class",
        "answer_hi": "class",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you define a TypeScript interface?",
        "question_hi": "TypeScript में interface कैसे परिभाषित किया जाता है?",
        "options_en": ["interface Person { name: string; }", "class Person { name: string; }", "type Person = {}", "object Person {}"],
        "options_hi": ["interface Person { name: string; }", "class Person { name: string; }", "type Person = {}", "object Person {}"],
        "answer_en": "interface Person { name: string; }",
        "answer_hi": "interface Person { name: string; }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which keyword is used to inherit a class in TypeScript?",
        "question_hi": "TypeScript में class को इनहेरिट करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["extends", "implements", "inherits", "super"],
        "options_hi": ["extends", "implements", "inherits", "super"],
        "answer_en": "extends",
        "answer_hi": "extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which keyword is used to implement an interface in TypeScript?",
        "question_hi": "TypeScript में interface को लागू करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["implements", "extends", "inherits", "interface"],
        "options_hi": ["implements", "extends", "inherits", "interface"],
        "answer_en": "implements",
        "answer_hi": "implements",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which TypeScript type represents numeric values?",
        "question_hi": "TypeScript में कौन सा टाइप संख्यात्मक मानों का प्रतिनिधित्व करता है?",
        "options_en": ["number", "string", "boolean", "any"],
        "options_hi": ["number", "string", "boolean", "any"],
        "answer_en": "number",
        "answer_hi": "number",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which symbol is used for type assertion in TypeScript?",
        "question_hi": "TypeScript में type assertion के लिए कौन सा प्रतीक उपयोग किया जाता है?",
        "options_en": ["as", "<Type>", "#", "$"],
        "options_hi": ["as", "<Type>", "#", "$"],
        "answer_en": "as",
        "answer_hi": "as",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which of the following is a valid TypeScript boolean value?",
        "question_hi": "TypeScript में निम्न में से कौन सा boolean मान मान्य है?",
        "options_en": ["true", "yes", "1", "0"],
        "options_hi": ["true", "yes", "1", "0"],
        "answer_en": "true",
        "answer_hi": "true",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which of these is used to declare an enum in TypeScript?",
        "question_hi": "TypeScript में enum घोषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["enum", "object", "class", "type"],
        "options_hi": ["enum", "object", "class", "type"],
        "answer_en": "enum",
        "answer_hi": "enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which of the following types allows any value in TypeScript?",
        "question_hi": "TypeScript में कौन सा टाइप किसी भी मान की अनुमति देता है?",
        "options_en": ["any", "string", "number", "boolean"],
        "options_hi": ["any", "string", "number", "boolean"],
        "answer_en": "any",
        "answer_hi": "any",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which of the following is used to define a tuple in TypeScript?",
        "question_hi": "TypeScript में tuple को परिभाषित करने के लिए कौन सा उपयोग किया जाता है?",
        "options_en": ["let x: [string, number];", "let x: string[];", "let x: number[];", "let x: any[];"],
        "options_hi": ["let x: [string, number];", "let x: string[];", "let x: number[];", "let x: any[];"],
        "answer_en": "let x: [string, number];",
        "answer_hi": "let x: [string, number];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the default type of a variable if no type is specified in TypeScript?",
        "question_hi": "TypeScript में यदि कोई टाइप निर्दिष्ट नहीं है तो वेरिएबल का डिफ़ॉल्ट टाइप क्या होता है?",
        "options_en": ["any", "number", "string", "undefined"],
        "options_hi": ["any", "number", "string", "undefined"],
        "answer_en": "any",
        "answer_hi": "any",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which of the following is used for optional parameters in TypeScript?",
        "question_hi": "TypeScript में वैकल्पिक पैरामीटर के लिए कौन सा प्रतीक उपयोग किया जाता है?",
        "options_en": ["?", "*", "!", "$"],
        "options_hi": ["?", "*", "!", "$"],
        "answer_en": "?",
        "answer_hi": "?",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which of the following is used to define a type alias in TypeScript?",
        "question_hi": "TypeScript में type alias को परिभाषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["type", "interface", "class", "enum"],
        "options_hi": ["type", "interface", "class", "enum"],
        "answer_en": "type",
        "answer_hi": "type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which keyword is used to declare a constant array in TypeScript?",
        "question_hi": "TypeScript में स्थिर array घोषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["const", "let", "var", "final"],
        "options_hi": ["const", "let", "var", "final"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which of the following is used to create a module in TypeScript?",
        "question_hi": "TypeScript में module बनाने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["export", "import", "module", "namespace"],
        "options_hi": ["export", "import", "module", "namespace"],
        "answer_en": "export",
        "answer_hi": "export",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which of the following is used to import a module in TypeScript?",
        "question_hi": "TypeScript में module को import करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["import", "export", "require", "module"],
        "options_hi": ["import", "export", "require", "module"],
        "answer_en": "import",
        "answer_hi": "import",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which keyword is used to define a private property in TypeScript?",
        "question_hi": "TypeScript में private property परिभाषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["private", "public", "protected", "hidden"],
        "options_hi": ["private", "public", "protected", "hidden"],
        "answer_en": "private",
        "answer_hi": "private",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which TypeScript feature allows checking types at compile time?",
        "question_hi": "कौन सी TypeScript सुविधा compile time पर types की जाँच करने की अनुमति देती है?",
        "options_en": ["Static typing", "Dynamic typing", "Runtime typing", "Any typing"],
        "options_hi": ["Static typing", "Dynamic typing", "Runtime typing", "Any typing"],
        "answer_en": "Static typing",
        "answer_hi": "Static typing",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which of the following is used to define a read-only property in TypeScript?",
        "question_hi": "TypeScript में read-only property को परिभाषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["readonly", "const", "final", "immutable"],
        "options_hi": ["readonly", "const", "final", "immutable"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which of the following is used to specify union types in TypeScript?",
        "question_hi": "TypeScript में union types को निर्दिष्ट करने के लिए कौन सा प्रतीक उपयोग किया जाता है?",
        "options_en": ["|", "&", "+", ","],
        "options_hi": ["|", "&", "+", ","],
        "answer_en": "|",
        "answer_hi": "|",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which of the following is used for intersection types in TypeScript?",
        "question_hi": "TypeScript में intersection types के लिए कौन सा प्रतीक उपयोग किया जाता है?",
        "options_en": ["&", "|", "+", ","],
        "options_hi": ["&", "|", "+", ","],
        "answer_en": "&",
        "answer_hi": "&",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which of the following is the correct way to declare a generic in TypeScript?",
        "question_hi": "TypeScript में generic घोषित करने का सही तरीका कौन सा है?",
        "options_en": ["function identity<T>(arg: T): T { return arg; }", "function identity(arg) { return arg; }", "function identity(arg: any) { return arg; }", "function identity<T> { return T; }"],
        "options_hi": ["function identity<T>(arg: T): T { return arg; }", "function identity(arg) { return arg; }", "function identity(arg: any) { return arg; }", "function identity<T> { return T; }"],
        "answer_en": "function identity<T>(arg: T): T { return arg; }",
        "answer_hi": "function identity<T>(arg: T): T { return arg; }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which TypeScript feature helps avoid null or undefined errors?",
        "question_hi": "कौन सी TypeScript सुविधा null या undefined errors से बचने में मदद करती है?",
        "options_en": ["Strict null checks", "Any type", "Union type", "Readonly type"],
        "options_hi": ["Strict null checks", "Any type", "Union type", "Readonly type"],
        "answer_en": "Strict null checks",
        "answer_hi": "Strict null checks",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which of the following is used for default parameters in TypeScript?",
        "question_hi": "TypeScript में default parameters के लिए कौन सा सिंटैक्स उपयोग किया जाता है?",
        "options_en": ["function greet(name: string = 'Guest') {}", "function greet(name?: string) {}", "function greet(name: string) {}", "function greet(?name) {}"],
        "options_hi": ["function greet(name: string = 'Guest') {}", "function greet(name?: string) {}", "function greet(name: string) {}", "function greet(?name) {}"],
        "answer_en": "function greet(name: string = 'Guest') {}",
        "answer_hi": "function greet(name: string = 'Guest') {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which of the following is used for rest parameters in TypeScript?",
        "question_hi": "TypeScript में rest parameters के लिए कौन सा सिंटैक्स उपयोग किया जाता है?",
        "options_en": ["function sum(...numbers: number[]) {}", "function sum(numbers: number[]) {}", "function sum(*numbers) {}", "function sum(numbers) {}"],
        "options_hi": ["function sum(...numbers: number[]) {}", "function sum(numbers: number[]) {}", "function sum(*numbers) {}", "function sum(numbers) {}"],
        "answer_en": "function sum(...numbers: number[]) {}",
        "answer_hi": "function sum(...numbers: number[]) {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which of the following is used to define a namespace in TypeScript?",
        "question_hi": "TypeScript में namespace को परिभाषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["namespace", "module", "package", "export"],
        "options_hi": ["namespace", "module", "package", "export"],
        "answer_en": "namespace",
        "answer_hi": "namespace",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which TypeScript type represents an object with unknown properties?",
        "question_hi": "TypeScript में कौन सा टाइप अज्ञात properties वाले object का प्रतिनिधित्व करता है?",
        "options_en": ["object", "any", "unknown", "Record<string, any>"],
        "options_hi": ["object", "any", "unknown", "Record<string, any>"],
        "answer_en": "unknown",
        "answer_hi": "unknown",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which of the following is used to assert a type in TypeScript using angle brackets?",
        "question_hi": "TypeScript में angle brackets का उपयोग करके type assertion के लिए कौन सा सिंटैक्स है?",
        "options_en": ["<string>value", "value as string", "(string)value", "#string value"],
        "options_hi": ["<string>value", "value as string", "(string)value", "#string value"],
        "answer_en": "<string>value",
        "answer_hi": "<string>value",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which of the following types can hold multiple types of values in TypeScript?",
        "question_hi": "TypeScript में कौन सा टाइप कई प्रकार के मान रख सकता है?",
        "options_en": ["Union type", "String type", "Number type", "Boolean type"],
        "options_hi": ["Union type", "String type", "Number type", "Boolean type"],
        "answer_en": "Union type",
        "answer_hi": "Union type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which of the following is used to prevent modification of an array in TypeScript?",
        "question_hi": "TypeScript में array को संशोधित होने से रोकने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["readonly", "const", "immutable", "private"],
        "options_hi": ["readonly", "const", "immutable", "private"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which TypeScript type allows a variable to be null or undefined?",
        "question_hi": "TypeScript में कौन सा टाइप वेरिएबल को null या undefined होने की अनुमति देता है?",
        "options_en": ["null | undefined", "string", "number", "boolean"],
        "options_hi": ["null | undefined", "string", "number", "boolean"],
        "answer_en": "null | undefined",
        "answer_hi": "null | undefined",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which of the following is used to define a literal type in TypeScript?",
        "question_hi": "TypeScript में literal type परिभाषित करने के लिए कौन सा सिंटैक्स उपयोग किया जाता है?",
        "options_en": ["let x: 'yes' | 'no';", "let x: string;", "let x: number;", "let x: boolean;"],
        "options_hi": ["let x: 'yes' | 'no';", "let x: string;", "let x: number;", "let x: boolean;"],
        "answer_en": "let x: 'yes' | 'no';",
        "answer_hi": "let x: 'yes' | 'no';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which of the following is used to define a function type in TypeScript?",
        "question_hi": "TypeScript में function type परिभाषित करने के लिए कौन सा सिंटैक्स उपयोग किया जाता है?",
        "options_en": ["let myFunc: (x: number) => number;", "let myFunc: number;", "let myFunc: string;", "let myFunc: object;"],
        "options_hi": ["let myFunc: (x: number) => number;", "let myFunc: number;", "let myFunc: string;", "let myFunc: object;"],
        "answer_en": "let myFunc: (x: number) => number;",
        "answer_hi": "let myFunc: (x: number) => number;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which of the following is used to create a type that combines multiple types in TypeScript?",
        "question_hi": "TypeScript में कई टाइप्स को जोड़ने वाला टाइप बनाने के लिए कौन सा उपयोग किया जाता है?",
        "options_en": ["Intersection type", "Union type", "Literal type", "Any type"],
        "options_hi": ["Intersection type", "Union type", "Literal type", "Any type"],
        "answer_en": "Intersection type",
        "answer_hi": "Intersection type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which of the following is used to specify an optional property in an interface?",
        "question_hi": "Interface में optional property निर्दिष्ट करने के लिए कौन सा सिंटैक्स उपयोग किया जाता है?",
        "options_en": ["propertyName?", "propertyName!", "propertyName:", "propertyName*"],
        "options_hi": ["propertyName?", "propertyName!", "propertyName:", "propertyName*"],
        "answer_en": "propertyName?",
        "answer_hi": "propertyName?",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which of the following is a valid tuple declaration in TypeScript?",
        "question_hi": "TypeScript में कौन सा tuple घोषणा मान्य है?",
        "options_en": ["let t: [string, number] = ['hello', 10];", "let t: [string, number] = [10, 'hello'];", "let t: string[] = ['hello', 10];", "let t: any = ['hello', 10];"],
        "options_hi": ["let t: [string, number] = ['hello', 10];", "let t: [string, number] = [10, 'hello'];", "let t: string[] = ['hello', 10];", "let t: any = ['hello', 10];"],
        "answer_en": "let t: [string, number] = ['hello', 10];",
        "answer_hi": "let t: [string, number] = ['hello', 10];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which of the following is used for type narrowing in TypeScript?",
        "question_hi": "TypeScript में type narrowing के लिए कौन सा उपयोग किया जाता है?",
        "options_en": ["typeof", "instanceof", "both", "none"],
        "options_hi": ["typeof", "instanceof", "दोनों", "कोई नहीं"],
        "answer_en": "both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which of the following is used to define a readonly array in TypeScript?",
        "question_hi": "TypeScript में readonly array को परिभाषित करने के लिए कौन सा सिंटैक्स उपयोग किया जाता है?",
        "options_en": ["let arr: readonly number[] = [1,2,3];", "let arr: number[] = [1,2,3];", "const arr: number[] = [1,2,3];", "readonly arr: number[] = [1,2,3];"],
        "options_hi": ["let arr: readonly number[] = [1,2,3];", "let arr: number[] = [1,2,3];", "const arr: number[] = [1,2,3];", "readonly arr: number[] = [1,2,3];"],
        "answer_en": "let arr: readonly number[] = [1,2,3];",
        "answer_hi": "let arr: readonly number[] = [1,2,3];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which TypeScript type represents any object that is not known?",
        "question_hi": "TypeScript में कौन सा टाइप किसी भी अज्ञात object का प्रतिनिधित्व करता है?",
        "options_en": ["unknown", "any", "object", "never"],
        "options_hi": ["unknown", "any", "object", "never"],
        "answer_en": "unknown",
        "answer_hi": "unknown",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which of the following types represents no value in TypeScript?",
        "question_hi": "TypeScript में कौन सा टाइप कोई मान नहीं दर्शाता?",
        "options_en": ["void", "any", "null", "undefined"],
        "options_hi": ["void", "any", "null", "undefined"],
        "answer_en": "void",
        "answer_hi": "void",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which TypeScript type represents a value that never occurs?",
        "question_hi": "TypeScript में कौन सा टाइप ऐसा मान दर्शाता है जो कभी नहीं होता?",
        "options_en": ["never", "void", "any", "unknown"],
        "options_hi": ["never", "void", "any", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which keyword is used to declare a static property in TypeScript?",
        "question_hi": "TypeScript में static property घोषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["static", "const", "readonly", "public"],
        "options_hi": ["static", "const", "readonly", "public"],
        "answer_en": "static",
        "answer_hi": "static",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which of the following is the correct way to write a type assertion?",
        "question_hi": "TypeScript में type assertion लिखने का सही तरीका कौन सा है?",
        "options_en": ["value as string", "<string>value", "both", "none"],
        "options_hi": ["value as string", "<string>value", "दोनों", "कोई नहीं"],
        "answer_en": "both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which of the following is a valid way to declare a tuple in TypeScript?",
        "question_hi": "TypeScript में tuple घोषित करने का मान्य तरीका कौन सा है?",
        "options_en": ["let t: [string, number];", "let t: [number, string];", "let t: string[];", "let t: any[];"],
        "options_hi": ["let t: [string, number];", "let t: [number, string];", "let t: string[];", "let t: any[];"],
        "answer_en": "let t: [string, number];",
        "answer_hi": "let t: [string, number];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which operator is used for nullish coalescing in TypeScript?",
        "question_hi": "TypeScript में nullish coalescing के लिए कौन सा ऑपरेटर उपयोग किया जाता है?",
        "options_en": ["??", "||", "&&", "?."],
        "options_hi": ["??", "||", "&&", "?."],
        "answer_en": "??",
        "answer_hi": "??",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which of the following is used to combine multiple interfaces in TypeScript?",
        "question_hi": "TypeScript में कई interfaces को जोड़ने के लिए कौन सा उपयोग किया जाता है?",
        "options_en": ["extends", "implements", "interface", "class"],
        "options_hi": ["extends", "implements", "interface", "class"],
        "answer_en": "extends",
        "answer_hi": "extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which of the following allows defining optional parameters in a function?",
        "question_hi": "कौन सा सिंटैक्स function में optional parameters को परिभाषित करने की अनुमति देता है?",
        "options_en": ["param?: type", "param!: type", "param: type", "param* : type"],
        "options_hi": ["param?: type", "param!: type", "param: type", "param* : type"],
        "answer_en": "param?: type",
        "answer_hi": "param?: type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which of the following keywords is used to create a readonly property in a class?",
        "question_hi": "क्लास में readonly property बनाने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["readonly", "const", "static", "private"],
        "options_hi": ["readonly", "const", "static", "private"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which TypeScript type represents a set of specific string values?",
        "question_hi": "TypeScript में कौन सा टाइप विशेष string मानों के सेट का प्रतिनिधित्व करता है?",
        "options_en": ["Literal type", "Union type", "Enum", "Any type"],
        "options_hi": ["Literal type", "Union type", "Enum", "Any type"],
        "answer_en": "Literal type",
        "answer_hi": "Literal type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which of the following is used to create a type alias in TypeScript?",
        "question_hi": "TypeScript में type alias बनाने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["type", "interface", "class", "enum"],
        "options_hi": ["type", "interface", "class", "enum"],
        "answer_en": "type",
        "answer_hi": "type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which TypeScript feature ensures variables are not null unless specified?",
        "question_hi": "TypeScript में कौन सी सुविधा सुनिश्चित करती है कि variables तब तक null नहीं होंगे जब तक निर्दिष्ट न हो?",
        "options_en": ["strictNullChecks", "any", "unknown", "void"],
        "options_hi": ["strictNullChecks", "any", "unknown", "void"],
        "answer_en": "strictNullChecks",
        "answer_hi": "strictNullChecks",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which keyword is used to inherit a class in TypeScript?",
        "question_hi": "TypeScript में class को inherit करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["extends", "implements", "inherits", "super"],
        "options_hi": ["extends", "implements", "inherits", "super"],
        "answer_en": "extends",
        "answer_hi": "extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which TypeScript type is used for arrays that can contain multiple types?",
        "question_hi": "TypeScript में कौन सा टाइप ऐसे arrays के लिए उपयोग किया जाता है जो कई प्रकार के मान रख सकते हैं?",
        "options_en": ["any[]", "number[]", "string[]", "boolean[]"],
        "options_hi": ["any[]", "number[]", "string[]", "boolean[]"],
        "answer_en": "any[]",
        "answer_hi": "any[]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which of the following is used to define a readonly array?",
        "question_hi": "TypeScript में readonly array परिभाषित करने के लिए कौन सा उपयोग किया जाता है?",
        "options_en": ["readonly number[]", "const number[]", "let readonly[]", "number[] readonly"],
        "options_hi": ["readonly number[]", "const number[]", "let readonly[]", "number[] readonly"],
        "answer_en": "readonly number[]",
        "answer_hi": "readonly number[]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which of the following is used for intersection types in TypeScript?",
        "question_hi": "TypeScript में intersection types के लिए कौन सा प्रतीक उपयोग किया जाता है?",
        "options_en": ["&", "|", "+", ","],
        "options_hi": ["&", "|", "+", ","],
        "answer_en": "&",
        "answer_hi": "&",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which keyword is used to implement an interface in TypeScript?",
        "question_hi": "TypeScript में interface को लागू करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["implements", "extends", "inherits", "interface"],
        "options_hi": ["implements", "extends", "inherits", "interface"],
        "answer_en": "implements",
        "answer_hi": "implements",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which TypeScript type is used for textual data?",
        "question_hi": "TypeScript में कौन सा टाइप textual data के लिए उपयोग किया जाता है?",
        "options_en": ["string", "number", "boolean", "any"],
        "options_hi": ["string", "number", "boolean", "any"],
        "answer_en": "string",
        "answer_hi": "string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which TypeScript type represents true/false values?",
        "question_hi": "TypeScript में true/false मानों को कौन सा टाइप दर्शाता है?",
        "options_en": ["boolean", "number", "string", "any"],
        "options_hi": ["boolean", "number", "string", "any"],
        "answer_en": "boolean",
        "answer_hi": "boolean",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which keyword is used to define a class in TypeScript?",
        "question_hi": "TypeScript में class को परिभाषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["class", "interface", "type", "enum"],
        "options_hi": ["class", "interface", "type", "enum"],
        "answer_en": "class",
        "answer_hi": "class",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which keyword is used to define an interface in TypeScript?",
        "question_hi": "TypeScript में interface को परिभाषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["interface", "class", "type", "enum"],
        "options_hi": ["interface", "class", "type", "enum"],
        "answer_en": "interface",
        "answer_hi": "interface",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which of the following is used to create an enum in TypeScript?",
        "question_hi": "TypeScript में enum बनाने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["enum", "type", "interface", "class"],
        "options_hi": ["enum", "type", "interface", "class"],
        "answer_en": "enum",
        "answer_hi": "enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which of the following types represents a function that does not return a value?",
        "question_hi": "कौन सा टाइप ऐसा function दर्शाता है जो कोई मान return नहीं करता?",
        "options_en": ["void", "any", "number", "boolean"],
        "options_hi": ["void", "any", "number", "boolean"],
        "answer_en": "void",
        "answer_hi": "void",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which TypeScript keyword is used to declare a variable that cannot be reassigned?",
        "question_hi": "TypeScript में ऐसा variable घोषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है जिसे दोबारा assign नहीं किया जा सकता?",
        "options_en": ["const", "let", "var", "readonly"],
        "options_hi": ["const", "let", "var", "readonly"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which TypeScript feature allows for type checking during compilation?",
        "question_hi": "TypeScript में कौन सी सुविधा compile समय पर type checking की अनुमति देती है?",
        "options_en": ["Static typing", "Dynamic typing", "Weak typing", "Any typing"],
        "options_hi": ["Static typing", "Dynamic typing", "Weak typing", "Any typing"],
        "answer_en": "Static typing",
        "answer_hi": "Static typing",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which keyword is used to declare a variable with block scope in TypeScript?",
        "question_hi": "TypeScript में block scope वाले variable को घोषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["let", "var", "const", "readonly"],
        "options_hi": ["let", "var", "const", "readonly"],
        "answer_en": "let",
        "answer_hi": "let",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which TypeScript type is used to represent a union of multiple types?",
        "question_hi": "TypeScript में कई प्रकारों के union का प्रतिनिधित्व करने के लिए कौन सा टाइप उपयोग किया जाता है?",
        "options_en": ["Union type", "Intersection type", "Literal type", "Any type"],
        "options_hi": ["Union type", "Intersection type", "Literal type", "Any type"],
        "answer_en": "Union type",
        "answer_hi": "Union type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which TypeScript keyword allows a subclass to call a parent class method?",
        "question_hi": "TypeScript में कौन सा कीवर्ड subclass को parent class के method को call करने की अनुमति देता है?",
        "options_en": ["super", "this", "extends", "implements"],
        "options_hi": ["super", "this", "extends", "implements"],
        "answer_en": "super",
        "answer_hi": "super",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which of the following is used for dynamic type casting in TypeScript?",
        "question_hi": "TypeScript में dynamic type casting के लिए कौन सा उपयोग किया जाता है?",
        "options_en": ["as", "<Type>", "both", "none"],
        "options_hi": ["as", "<Type>", "दोनों", "कोई नहीं"],
        "answer_en": "both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which keyword is used to prevent inheritance of a class in TypeScript?",
        "question_hi": "TypeScript में class को inherit होने से रोकने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["final", "private", "sealed", "none"],
        "options_hi": ["final", "private", "sealed", "कोई नहीं"],
        "answer_en": "none",
        "answer_hi": "कोई नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which of the following types is used for objects with known properties?",
        "question_hi": "TypeScript में किस टाइप का उपयोग ज्ञात properties वाले objects के लिए किया जाता है?",
        "options_en": ["object", "any", "unknown", "never"],
        "options_hi": ["object", "any", "unknown", "never"],
        "answer_en": "object",
        "answer_hi": "object",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which TypeScript type represents a function signature?",
        "question_hi": "TypeScript में function signature का प्रतिनिधित्व कौन सा टाइप करता है?",
        "options_en": ["function type", "any", "object", "tuple"],
        "options_hi": ["function type", "any", "object", "tuple"],
        "answer_en": "function type",
        "answer_hi": "function type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which of the following is used to import a module in TypeScript?",
        "question_hi": "TypeScript में module import करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["import", "export", "require", "module"],
        "options_hi": ["import", "export", "require", "module"],
        "answer_en": "import",
        "answer_hi": "import",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which of the following is used to export a module in TypeScript?",
        "question_hi": "TypeScript में module export करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["export", "import", "require", "module"],
        "options_hi": ["export", "import", "require", "module"],
        "answer_en": "export",
        "answer_hi": "export",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which TypeScript feature helps avoid runtime errors for null and undefined values?",
        "question_hi": "TypeScript में कौन सी सुविधा null और undefined मानों के लिए runtime errors से बचने में मदद करती है?",
        "options_en": ["strictNullChecks", "any", "unknown", "void"],
        "options_hi": ["strictNullChecks", "any", "unknown", "void"],
        "answer_en": "strictNullChecks",
        "answer_hi": "strictNullChecks",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which keyword is used to declare a variable that can be reassigned?",
        "question_hi": "TypeScript में ऐसा variable घोषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है जिसे दोबारा assign किया जा सकता है?",
        "options_en": ["let", "const", "readonly", "var"],
        "options_hi": ["let", "const", "readonly", "var"],
        "answer_en": "let",
        "answer_hi": "let",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which TypeScript feature allows you to define optional object properties?",
        "question_hi": "TypeScript में optional object properties परिभाषित करने की अनुमति कौन सी सुविधा देती है?",
        "options_en": ["?", "!", "*", "$"],
        "options_hi": ["?", "!", "*", "$"],
        "answer_en": "?",
        "answer_hi": "?",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which keyword is used to define a generic type in TypeScript?",
        "question_hi": "TypeScript में generic type परिभाषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["<T>", "type", "interface", "enum"],
        "options_hi": ["<T>", "type", "interface", "enum"],
        "answer_en": "<T>",
        "answer_hi": "<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which TypeScript type represents an array of values of the same type?",
        "question_hi": "TypeScript में किस टाइप का उपयोग समान प्रकार के मानों वाली array के लिए किया जाता है?",
        "options_en": ["number[]", "any[]", "object", "tuple"],
        "options_hi": ["number[]", "any[]", "object", "tuple"],
        "answer_en": "number[]",
        "answer_hi": "number[]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which of the following allows defining a tuple with different types in TypeScript?",
        "question_hi": "TypeScript में विभिन्न प्रकार के मानों के साथ tuple परिभाषित करने के लिए कौन सा सिंटैक्स उपयोग किया जाता है?",
        "options_en": ["[string, number]", "[number, number]", "[string]", "[any[]]"],
        "options_hi": ["[string, number]", "[number, number]", "[string]", "[any[]]"],
        "answer_en": "[string, number]",
        "answer_hi": "[string, number]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which keyword is used to declare a type for function parameters in TypeScript?",
        "question_hi": "TypeScript में function parameters के लिए type घोषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": [":", "as", "=", "->"],
        "options_hi": [":", "as", "=", "->"],
        "answer_en": ":",
        "answer_hi": ":",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which TypeScript type represents a value that can be one of several literal values?",
        "question_hi": "TypeScript में कौन सा टाइप एक मान का प्रतिनिधित्व करता है जो कई literal मानों में से एक हो सकता है?",
        "options_en": ["Union type", "Intersection type", "Literal type", "Any type"],
        "options_hi": ["Union type", "Intersection type", "Literal type", "Any type"],
        "answer_en": "Union type",
        "answer_hi": "Union type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which keyword is used to prevent modifying an object property in TypeScript?",
        "question_hi": "TypeScript में object property को modify होने से रोकने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["readonly", "const", "final", "immutable"],
        "options_hi": ["readonly", "const", "final", "immutable"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which TypeScript feature allows for specifying multiple types for a variable?",
        "question_hi": "TypeScript में variable के लिए कई प्रकार निर्दिष्ट करने की अनुमति कौन सी सुविधा देती है?",
        "options_en": ["Union types", "Intersection types", "Literal types", "Any type"],
        "options_hi": ["Union types", "Intersection types", "Literal types", "Any type"],
        "answer_en": "Union types",
        "answer_hi": "Union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which keyword is used to define a property accessible only within a class?",
        "question_hi": "TypeScript में केवल class के भीतर पहुंच योग्य property को परिभाषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["private", "protected", "public", "readonly"],
        "options_hi": ["private", "protected", "public", "readonly"],
        "answer_en": "private",
        "answer_hi": "private",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which keyword allows a subclass to access properties and methods of a parent class?",
        "question_hi": "कौन सा कीवर्ड subclass को parent class की properties और methods तक पहुंचने की अनुमति देता है?",
        "options_en": ["super", "this", "extends", "implements"],
        "options_hi": ["super", "this", "extends", "implements"],
        "answer_en": "super",
        "answer_hi": "super",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which TypeScript feature allows a function to accept a variable number of arguments?",
        "question_hi": "TypeScript में कौन सी सुविधा function को variable number of arguments स्वीकार करने की अनुमति देती है?",
        "options_en": ["Rest parameters", "Optional parameters", "Default parameters", "Tuple parameters"],
        "options_hi": ["Rest parameters", "Optional parameters", "Default parameters", "Tuple parameters"],
        "answer_en": "Rest parameters",
        "answer_hi": "Rest parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which of the following is used to define a module namespace in TypeScript?",
        "question_hi": "TypeScript में module namespace परिभाषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["namespace", "module", "package", "export"],
        "options_hi": ["namespace", "module", "package", "export"],
        "answer_en": "namespace",
        "answer_hi": "namespace",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which of the following is used for type inference in TypeScript?",
        "question_hi": "TypeScript में type inference के लिए कौन सा उपयोग किया जाता है?",
        "options_en": ["Compiler infers type automatically", "Explicit type declaration", "Interface", "Enum"],
        "options_hi": ["Compiler अपने आप type का अनुमान लगाता है", "Explicit type declaration", "Interface", "Enum"],
        "answer_en": "Compiler infers type automatically",
        "answer_hi": "Compiler अपने आप type का अनुमान लगाता है",
        "attempted": false,
        "selected": ""
    }
]



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