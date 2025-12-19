const questions = [
    {
        "num": 1,
        "question_en": "Which TypeScript utility type makes all properties optional?",
        "question_hi": "TypeScript में कौन सा utility type सभी properties को optional बनाता है?",
        "options_en": ["Partial", "Readonly", "Pick", "Omit"],
        "options_hi": ["Partial", "Readonly", "Pick", "Omit"],
        "answer_en": "Partial",
        "answer_hi": "Partial",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which TypeScript utility type allows picking specific properties from a type?",
        "question_hi": "TypeScript में कौन सा utility type किसी type से specific properties चुनने की अनुमति देता है?",
        "options_en": ["Pick", "Partial", "Omit", "Readonly"],
        "options_hi": ["Pick", "Partial", "Omit", "Readonly"],
        "answer_en": "Pick",
        "answer_hi": "Pick",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which TypeScript utility type removes specific properties from a type?",
        "question_hi": "TypeScript में कौन सा utility type किसी type से specific properties हटाता है?",
        "options_en": ["Omit", "Pick", "Partial", "Readonly"],
        "options_hi": ["Omit", "Pick", "Partial", "Readonly"],
        "answer_en": "Omit",
        "answer_hi": "Omit",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which TypeScript utility type makes all properties read-only?",
        "question_hi": "TypeScript में कौन सा utility type सभी properties को read-only बनाता है?",
        "options_en": ["Readonly", "Partial", "Pick", "Omit"],
        "options_hi": ["Readonly", "Partial", "Pick", "Omit"],
        "answer_en": "Readonly",
        "answer_hi": "Readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the TypeScript type for a function that returns a promise of string?",
        "question_hi": "TypeScript में function का type जो string का promise return करता है क्या है?",
        "options_en": ["Promise<string>", "string", "any", "Observable<string>"],
        "options_hi": ["Promise<string>", "string", "any", "Observable<string>"],
        "answer_en": "Promise<string>",
        "answer_hi": "Promise<string>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which TypeScript type allows you to create a new type by excluding properties from another type?",
        "question_hi": "TypeScript में किस type का उपयोग करके आप किसी type से properties exclude कर नई type बना सकते हैं?",
        "options_en": ["Omit", "Pick", "Partial", "Readonly"],
        "options_hi": ["Omit", "Pick", "Partial", "Readonly"],
        "answer_en": "Omit",
        "answer_hi": "Omit",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the difference between 'unknown' and 'any' in TypeScript?",
        "question_hi": "TypeScript में 'unknown' और 'any' में क्या अंतर है?",
        "options_en": ["unknown is safer than any", "any is safer than unknown", "Both are same", "unknown allows implicit operations"],
        "options_hi": ["unknown अधिक सुरक्षित है", "any अधिक सुरक्षित है", "दोनों समान हैं", "unknown implicit operations की अनुमति देता है"],
        "answer_en": "unknown is safer than any",
        "answer_hi": "unknown अधिक सुरक्षित है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which TypeScript type represents a fixed-length array with different types?",
        "question_hi": "TypeScript में किस type का उपयोग fixed-length array में विभिन्न types के लिए किया जाता है?",
        "options_en": ["tuple", "array", "enum", "interface"],
        "options_hi": ["tuple", "array", "enum", "interface"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which TypeScript feature allows constraining a generic type to extend another type?",
        "question_hi": "TypeScript में कौन सी सुविधा generic type को किसी अन्य type का extension constrain करने की अनुमति देती है?",
        "options_en": ["generic constraints", "utility types", "type guards", "interfaces"],
        "options_hi": ["generic constraints", "utility types", "type guards", "interfaces"],
        "answer_en": "generic constraints",
        "answer_hi": "generic constraints",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which TypeScript feature allows narrowing types in conditional checks?",
        "question_hi": "TypeScript में conditional checks में types narrow करने की सुविधा कौन देती है?",
        "options_en": ["type guards", "type inference", "union types", "generics"],
        "options_hi": ["type guards", "type inference", "union types", "generics"],
        "answer_en": "type guards",
        "answer_hi": "type guards",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which TypeScript keyword is used to define a literal type?",
        "question_hi": "TypeScript में literal type define करने के लिए कौन सा keyword उपयोग होता है?",
        "options_en": ["literal type = value", "type", "interface", "enum"],
        "options_hi": ["literal type = value", "type", "interface", "enum"],
        "answer_en": "type",
        "answer_hi": "type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which TypeScript feature allows the use of optional parameters in functions?",
        "question_hi": "TypeScript में functions में optional parameters use करने की सुविधा कौन देती है?",
        "options_en": ["?", "default value", "union type", "any"],
        "options_hi": ["?", "default value", "union type", "any"],
        "answer_en": "?",
        "answer_hi": "?",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which TypeScript feature allows defining a variable that can hold multiple types?",
        "question_hi": "TypeScript में variable define करने की सुविधा जो multiple types hold कर सके?",
        "options_en": ["union types", "tuple", "enum", "interface"],
        "options_hi": ["union types", "tuple", "enum", "interface"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which TypeScript feature allows ensuring exhaustive checks in switch statements?",
        "question_hi": "TypeScript में switch statements में exhaustive checks सुनिश्चित करने की सुविधा कौन देती है?",
        "options_en": ["never type", "any", "unknown", "void"],
        "options_hi": ["never type", "any", "unknown", "void"],
        "answer_en": "never type",
        "answer_hi": "never type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which TypeScript feature allows combining multiple types into one using '&'?",
        "question_hi": "TypeScript में multiple types को '&' का उपयोग करके एक में combine करने की सुविधा कौन देती है?",
        "options_en": ["intersection types", "union types", "tuple", "enum"],
        "options_hi": ["intersection types", "union types", "tuple", "enum"],
        "answer_en": "intersection types",
        "answer_hi": "intersection types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which TypeScript keyword allows defining a variable with block scope that cannot be reassigned?",
        "question_hi": "TypeScript में block scope वाला variable define करने और उसे reassigned होने से रोकने के लिए कौन सा keyword है?",
        "options_en": ["const", "let", "var", "readonly"],
        "options_hi": ["const", "let", "var", "readonly"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which TypeScript type allows representing a function that never returns?",
        "question_hi": "TypeScript में ऐसा function जो कभी return नहीं करता, किस type से दर्शाया जाता है?",
        "options_en": ["never", "void", "unknown", "any"],
        "options_hi": ["never", "void", "unknown", "any"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which TypeScript utility type converts all properties of a type to required?",
        "question_hi": "TypeScript में कौन सा utility type किसी type की सभी properties को required बनाता है?",
        "options_en": ["Required", "Partial", "Readonly", "Pick"],
        "options_hi": ["Required", "Partial", "Readonly", "Pick"],
        "answer_en": "Required",
        "answer_hi": "Required",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which TypeScript type is used when the type is unknown but safe checks are enforced?",
        "question_hi": "TypeScript में ऐसा type जो unknown हो लेकिन safe checks लागू हों?",
        "options_en": ["unknown", "any", "never", "void"],
        "options_hi": ["unknown", "any", "never", "void"],
        "answer_en": "unknown",
        "answer_hi": "unknown",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which TypeScript feature allows narrowing types using 'typeof'?",
        "question_hi": "TypeScript में 'typeof' का उपयोग करके types narrow करने की सुविधा कौन देती है?",
        "options_en": ["type guards", "type inference", "union types", "intersection types"],
        "options_hi": ["type guards", "type inference", "union types", "intersection types"],
        "answer_en": "type guards",
        "answer_hi": "type guards",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which TypeScript keyword allows defining a module without using external files?",
        "question_hi": "TypeScript में external files का उपयोग किए बिना module define करने के लिए कौन सा keyword है?",
        "options_en": ["namespace", "module", "export", "import"],
        "options_hi": ["namespace", "module", "export", "import"],
        "answer_en": "namespace",
        "answer_hi": "namespace",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which TypeScript feature allows defining a function overload?",
        "question_hi": "TypeScript में function overload define करने की सुविधा कौन देती है?",
        "options_en": ["function overload signatures", "generics", "interfaces", "tuple"],
        "options_hi": ["function overload signatures", "generics", "interfaces", "tuple"],
        "answer_en": "function overload signatures",
        "answer_hi": "function overload signatures",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which TypeScript utility type excludes undefined and null from a type?",
        "question_hi": "TypeScript में कौन सा utility type किसी type से undefined और null को exclude करता है?",
        "options_en": ["NonNullable", "Partial", "Required", "Readonly"],
        "options_hi": ["NonNullable", "Partial", "Required", "Readonly"],
        "answer_en": "NonNullable",
        "answer_hi": "NonNullable",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which TypeScript type allows representing a function with multiple signatures?",
        "question_hi": "TypeScript में ऐसे function को represent करने के लिए type कौन सा है जिसके multiple signatures हों?",
        "options_en": ["overloads", "union types", "tuple", "interface"],
        "options_hi": ["overloads", "union types", "tuple", "interface"],
        "answer_en": "overloads",
        "answer_hi": "overloads",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which TypeScript keyword is used to provide ambient type declarations?",
        "question_hi": "TypeScript में ambient type declarations provide करने के लिए कौन सा keyword है?",
        "options_en": ["declare", "interface", "type", "module"],
        "options_hi": ["declare", "interface", "type", "module"],
        "answer_en": "declare",
        "answer_hi": "declare",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which TypeScript feature allows narrowing types using 'instanceof'?",
        "question_hi": "TypeScript में 'instanceof' का उपयोग करके types narrow करने की सुविधा कौन देती है?",
        "options_en": ["type guards", "type inference", "union types", "intersection types"],
        "options_hi": ["type guards", "type inference", "union types", "intersection types"],
        "answer_en": "type guards",
        "answer_hi": "type guards",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which TypeScript type allows representing a readonly array?",
        "question_hi": "TypeScript में readonly array को represent करने के लिए कौन सा type है?",
        "options_en": ["ReadonlyArray<T>", "Array<T>", "tuple", "any"],
        "options_hi": ["ReadonlyArray<T>", "Array<T>", "tuple", "any"],
        "answer_en": "ReadonlyArray<T>",
        "answer_hi": "ReadonlyArray<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which TypeScript keyword allows extending an interface?",
        "question_hi": "TypeScript में interface extend करने के लिए कौन सा keyword है?",
        "options_en": ["extends", "implements", "interface", "class"],
        "options_hi": ["extends", "implements", "interface", "class"],
        "answer_en": "extends",
        "answer_hi": "extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which TypeScript feature allows type narrowing using custom type predicates?",
        "question_hi": "TypeScript में custom type predicates का उपयोग करके type narrowing करने की सुविधा कौन देती है?",
        "options_en": ["user-defined type guards", "utility types", "generics", "enums"],
        "options_hi": ["user-defined type guards", "utility types", "generics", "enums"],
        "answer_en": "user-defined type guards",
        "answer_hi": "user-defined type guards",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which TypeScript utility type allows constructing a type by picking the return type of a function?",
        "question_hi": "TypeScript में कौन सा utility type function के return type को pick करके नया type बनाता है?",
        "options_en": ["ReturnType<T>", "Parameters<T>", "Partial<T>", "Readonly<T>"],
        "options_hi": ["ReturnType<T>", "Parameters<T>", "Partial<T>", "Readonly<T>"],
        "answer_en": "ReturnType<T>",
        "answer_hi": "ReturnType<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which TypeScript utility type constructs a type consisting of the parameter types of a function?",
        "question_hi": "TypeScript में कौन सा utility type function के parameter types से नया type बनाता है?",
        "options_en": ["Parameters<T>", "ReturnType<T>", "Partial<T>", "Required<T>"],
        "options_hi": ["Parameters<T>", "ReturnType<T>", "Partial<T>", "Required<T>"],
        "answer_en": "Parameters<T>",
        "answer_hi": "Parameters<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which TypeScript feature allows defining a type alias for a union of string literals?",
        "question_hi": "TypeScript में string literals के union के लिए type alias define करने की सुविधा कौन देती है?",
        "options_en": ["literal types", "enum", "tuple", "interface"],
        "options_hi": ["literal types", "enum", "tuple", "interface"],
        "answer_en": "literal types",
        "answer_hi": "literal types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which TypeScript feature allows safely accessing nested object properties that may be undefined?",
        "question_hi": "TypeScript में nested object properties को safely access करने की सुविधा जो undefined हो सकते हैं?",
        "options_en": ["optional chaining (?.)", "nullish coalescing (??)", "type guards", "union types"],
        "options_hi": ["optional chaining (?.)", "nullish coalescing (??)", "type guards", "union types"],
        "answer_en": "optional chaining (?.)",
        "answer_hi": "optional chaining (?.)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which TypeScript operator allows providing a default value when a variable is null or undefined?",
        "question_hi": "TypeScript में कौन सा operator variable null या undefined होने पर default value provide करता है?",
        "options_en": ["nullish coalescing (??)", "optional chaining (?.)", "union types", "any"],
        "options_hi": ["nullish coalescing (??)", "optional chaining (?.)", "union types", "any"],
        "answer_en": "nullish coalescing (??)",
        "answer_hi": "nullish coalescing (??)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which TypeScript feature allows creating mapped types to transform existing types?",
        "question_hi": "TypeScript में existing types को transform करने के लिए mapped types create करने की सुविधा कौन देती है?",
        "options_en": ["mapped types", "utility types", "generics", "interfaces"],
        "options_hi": ["mapped types", "utility types", "generics", "interfaces"],
        "answer_en": "mapped types",
        "answer_hi": "mapped types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which TypeScript feature allows creating discriminated unions for type-safe object variants?",
        "question_hi": "TypeScript में type-safe object variants के लिए discriminated unions create करने की सुविधा कौन देती है?",
        "options_en": ["tagged unions", "intersection types", "tuple", "interface"],
        "options_hi": ["tagged unions", "intersection types", "tuple", "interface"],
        "answer_en": "tagged unions",
        "answer_hi": "tagged unions",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which TypeScript feature allows narrowing union types using 'in' operator?",
        "question_hi": "TypeScript में 'in' operator का उपयोग करके union types narrow करने की सुविधा कौन देती है?",
        "options_en": ["type guards", "type inference", "union types", "intersection types"],
        "options_hi": ["type guards", "type inference", "union types", "intersection types"],
        "answer_en": "type guards",
        "answer_hi": "type guards",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which TypeScript type allows representing all possible keys of an object type?",
        "question_hi": "TypeScript में object type की सभी possible keys represent करने के लिए कौन सा type है?",
        "options_en": ["keyof", "typeof", "any", "unknown"],
        "options_hi": ["keyof", "typeof", "any", "unknown"],
        "answer_en": "keyof",
        "answer_hi": "keyof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which TypeScript feature allows creating an array type from the types of a tuple?",
        "question_hi": "TypeScript में tuple के types से array type create करने की सुविधा कौन देती है?",
        "options_en": ["typeof tuple[number]", "tuple", "array", "union types"],
        "options_hi": ["typeof tuple[number]", "tuple", "array", "union types"],
        "answer_en": "typeof tuple[number]",
        "answer_hi": "typeof tuple[number]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which TypeScript feature allows representing optional properties in a type?",
        "question_hi": "TypeScript में type में optional properties represent करने की सुविधा कौन देती है?",
        "options_en": ["?", "readonly", "default", "any"],
        "options_hi": ["?", "readonly", "default", "any"],
        "answer_en": "?",
        "answer_hi": "?",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which TypeScript keyword allows implementing multiple interfaces in a class?",
        "question_hi": "TypeScript में class में multiple interfaces implement करने के लिए कौन सा keyword है?",
        "options_en": ["implements", "extends", "interface", "super"],
        "options_hi": ["implements", "extends", "interface", "super"],
        "answer_en": "implements",
        "answer_hi": "implements",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which TypeScript utility type constructs a type with all properties of T except those in K?",
        "question_hi": "TypeScript में कौन सा utility type T की सभी properties को construct करता है सिवाय K में मौजूद properties के?",
        "options_en": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
        "options_hi": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
        "answer_en": "Omit<T, K>",
        "answer_hi": "Omit<T, K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which TypeScript feature allows constraining a generic type to a set of string literals?",
        "question_hi": "TypeScript में generic type को string literals के set तक constrain करने की सुविधा कौन देती है?",
        "options_en": ["generic constraints", "union types", "literal types", "enum"],
        "options_hi": ["generic constraints", "union types", "literal types", "enum"],
        "answer_en": "generic constraints",
        "answer_hi": "generic constraints",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which TypeScript feature allows defining a type that represents the type of a variable?",
        "question_hi": "TypeScript में variable के type को represent करने के लिए कौन सी सुविधा है?",
        "options_en": ["typeof", "keyof", "any", "unknown"],
        "options_hi": ["typeof", "keyof", "any", "unknown"],
        "answer_en": "typeof",
        "answer_hi": "typeof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which TypeScript feature allows representing a variable that can hold values of any type safely?",
        "question_hi": "TypeScript में variable जो किसी भी type की value hold कर सकता है, उसे safely represent करने की सुविधा कौन देती है?",
        "options_en": ["unknown", "any", "never", "void"],
        "options_hi": ["unknown", "any", "never", "void"],
        "answer_en": "unknown",
        "answer_hi": "unknown",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which TypeScript utility type constructs a type that makes all properties required?",
        "question_hi": "TypeScript में कौन सा utility type सभी properties को required बनाता है?",
        "options_en": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T, K>"],
        "options_hi": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T, K>"],
        "answer_en": "Required<T>",
        "answer_hi": "Required<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which TypeScript feature allows creating type aliases for complex types?",
        "question_hi": "TypeScript में complex types के लिए type aliases create करने की सुविधा कौन देती है?",
        "options_en": ["type", "interface", "enum", "class"],
        "options_hi": ["type", "interface", "enum", "class"],
        "answer_en": "type",
        "answer_hi": "type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which TypeScript keyword allows creating abstract classes?",
        "question_hi": "TypeScript में abstract classes create करने के लिए कौन सा keyword है?",
        "options_en": ["abstract", "readonly", "final", "const"],
        "options_hi": ["abstract", "readonly", "final", "const"],
        "answer_en": "abstract",
        "answer_hi": "abstract",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which TypeScript feature allows creating a type-safe enum using string values?",
        "question_hi": "TypeScript में string values के साथ type-safe enum create करने की सुविधा कौन देती है?",
        "options_en": ["string enums", "numeric enums", "union types", "literal types"],
        "options_hi": ["string enums", "numeric enums", "union types", "literal types"],
        "answer_en": "string enums",
        "answer_hi": "string enums",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which TypeScript feature allows using generic types with constraints to ensure type safety?",
        "question_hi": "TypeScript में generic types को constraints के साथ use करके type safety सुनिश्चित करने की सुविधा कौन देती है?",
        "options_en": ["constrained generics", "utility types", "mapped types", "intersection types"],
        "options_hi": ["constrained generics", "utility types", "mapped types", "intersection types"],
        "answer_en": "constrained generics",
        "answer_hi": "constrained generics",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which TypeScript keyword is used to create a read-only property in a class?",
        "question_hi": "TypeScript में class में read-only property create करने के लिए कौन सा keyword है?",
        "options_en": ["readonly", "const", "let", "final"],
        "options_hi": ["readonly", "const", "let", "final"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which TypeScript type allows representing multiple possible types using a pipe '|'?",
        "question_hi": "TypeScript में pipe '|' का उपयोग करके multiple possible types represent करने के लिए कौन सा type है?",
        "options_en": ["union types", "intersection types", "tuple", "any"],
        "options_hi": ["union types", "intersection types", "tuple", "any"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which TypeScript feature allows combining multiple types into one using '&'?",
        "question_hi": "TypeScript में '&' का उपयोग करके multiple types को combine करने की सुविधा कौन देती है?",
        "options_en": ["intersection types", "union types", "tuple", "enum"],
        "options_hi": ["intersection types", "union types", "tuple", "enum"],
        "answer_en": "intersection types",
        "answer_hi": "intersection types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which TypeScript type represents functions that return no value?",
        "question_hi": "TypeScript में functions जो कोई value return नहीं करते, किस type से दर्शाए जाते हैं?",
        "options_en": ["void", "never", "any", "unknown"],
        "options_hi": ["void", "never", "any", "unknown"],
        "answer_en": "void",
        "answer_hi": "void",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which TypeScript feature allows creating generic functions?",
        "question_hi": "TypeScript में generic functions create करने की सुविधा कौन देती है?",
        "options_en": ["generics", "utility types", "type guards", "interfaces"],
        "options_hi": ["generics", "utility types", "type guards", "interfaces"],
        "answer_en": "generics",
        "answer_hi": "generics",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which TypeScript type allows representing a variable that can never occur?",
        "question_hi": "TypeScript में variable जो कभी occur नहीं हो सकता, उसे किस type से दर्शाया जाता है?",
        "options_en": ["never", "void", "any", "unknown"],
        "options_hi": ["never", "void", "any", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which TypeScript feature allows defining optional chaining with '?.' operator?",
        "question_hi": "TypeScript में optional chaining define करने के लिए कौन सा operator है?",
        "options_en": ["?.", "??", "|", "&"],
        "options_hi": ["?.", "??", "|", "&"],
        "answer_en": "?.",
        "answer_hi": "?.",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which TypeScript utility type allows making all properties of a type optional?",
        "question_hi": "TypeScript में कौन सा utility type type की सभी properties को optional बनाता है?",
        "options_en": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T, K>"],
        "options_hi": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T, K>"],
        "answer_en": "Partial<T>",
        "answer_hi": "Partial<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which TypeScript utility type constructs a type with all properties required?",
        "question_hi": "TypeScript में कौन सा utility type type की सभी properties को required बनाता है?",
        "options_en": ["Required<T>", "Partial<T>", "Readonly<T>", "Omit<T, K>"],
        "options_hi": ["Required<T>", "Partial<T>", "Readonly<T>", "Omit<T, K>"],
        "answer_en": "Required<T>",
        "answer_hi": "Required<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which TypeScript feature allows representing tuple types?",
        "question_hi": "TypeScript में tuple types represent करने की सुविधा कौन देती है?",
        "options_en": ["tuple", "array", "enum", "union types"],
        "options_hi": ["tuple", "array", "enum", "union types"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which TypeScript feature allows defining enums with numeric values by default?",
        "question_hi": "TypeScript में numeric values के साथ enums define करने की सुविधा कौन देती है?",
        "options_en": ["numeric enums", "string enums", "union types", "literal types"],
        "options_hi": ["numeric enums", "string enums", "union types", "literal types"],
        "answer_en": "numeric enums",
        "answer_hi": "numeric enums",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which TypeScript keyword is used to define a constant value?",
        "question_hi": "TypeScript में constant value define करने के लिए कौन सा keyword है?",
        "options_en": ["const", "let", "var", "readonly"],
        "options_hi": ["const", "let", "var", "readonly"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which TypeScript feature allows defining interface for object structure?",
        "question_hi": "TypeScript में object structure के लिए interface define करने की सुविधा कौन देती है?",
        "options_en": ["interface", "type", "class", "enum"],
        "options_hi": ["interface", "type", "class", "enum"],
        "answer_en": "interface",
        "answer_hi": "interface",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which TypeScript feature allows defining a union of types?",
        "question_hi": "TypeScript में multiple types के union define करने की सुविधा कौन देती है?",
        "options_en": ["union types", "intersection types", "tuple", "any"],
        "options_hi": ["union types", "intersection types", "tuple", "any"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which TypeScript utility type picks specific properties from a type?",
        "question_hi": "TypeScript में कौन सा utility type type से specific properties pick करता है?",
        "options_en": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Required<T>"],
        "options_hi": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Required<T>"],
        "answer_en": "Pick<T, K>",
        "answer_hi": "Pick<T, K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which TypeScript utility type excludes certain properties from a type?",
        "question_hi": "TypeScript में कौन सा utility type type से कुछ properties exclude करता है?",
        "options_en": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
        "options_hi": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
        "answer_en": "Omit<T, K>",
        "answer_hi": "Omit<T, K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which TypeScript feature allows representing the type of a variable?",
        "question_hi": "TypeScript में variable का type represent करने की सुविधा कौन देती है?",
        "options_en": ["typeof", "keyof", "any", "unknown"],
        "options_hi": ["typeof", "keyof", "any", "unknown"],
        "answer_en": "typeof",
        "answer_hi": "typeof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which TypeScript feature allows narrowing types using the 'in' operator?",
        "question_hi": "TypeScript में 'in' operator का उपयोग करके types narrow करने की सुविधा कौन देती है?",
        "options_en": ["type guards", "type inference", "union types", "intersection types"],
        "options_hi": ["type guards", "type inference", "union types", "intersection types"],
        "answer_en": "type guards",
        "answer_hi": "type guards",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which TypeScript feature allows defining a type that represents keys of an object?",
        "question_hi": "TypeScript में object के keys represent करने वाला type कौन सा है?",
        "options_en": ["keyof", "typeof", "any", "unknown"],
        "options_hi": ["keyof", "typeof", "any", "unknown"],
        "answer_en": "keyof",
        "answer_hi": "keyof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which TypeScript feature allows creating abstract classes?",
        "question_hi": "TypeScript में abstract classes create करने की सुविधा कौन देती है?",
        "options_en": ["abstract", "readonly", "const", "final"],
        "options_hi": ["abstract", "readonly", "const", "final"],
        "answer_en": "abstract",
        "answer_hi": "abstract",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which TypeScript feature allows defining a generic type constrained to another type?",
        "question_hi": "TypeScript में generic type को किसी अन्य type तक constrain करने की सुविधा कौन देती है?",
        "options_en": ["generic constraints", "union types", "utility types", "intersection types"],
        "options_hi": ["generic constraints", "union types", "utility types", "intersection types"],
        "answer_en": "generic constraints",
        "answer_hi": "generic constraints",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which TypeScript utility type constructs a type by making all properties readonly?",
        "question_hi": "TypeScript में कौन सा utility type type की सभी properties readonly बनाता है?",
        "options_en": ["Readonly<T>", "Partial<T>", "Required<T>", "Pick<T, K>"],
        "options_hi": ["Readonly<T>", "Partial<T>", "Required<T>", "Pick<T, K>"],
        "answer_en": "Readonly<T>",
        "answer_hi": "Readonly<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which TypeScript feature allows type narrowing using custom functions returning boolean?",
        "question_hi": "TypeScript में custom functions जो boolean return करते हैं, उनके द्वारा type narrowing करने की सुविधा कौन देती है?",
        "options_en": ["user-defined type guards", "utility types", "mapped types", "literal types"],
        "options_hi": ["user-defined type guards", "utility types", "mapped types", "literal types"],
        "answer_en": "user-defined type guards",
        "answer_hi": "user-defined type guards",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which TypeScript operator allows safely accessing nested properties?",
        "question_hi": "TypeScript में nested properties को safely access करने के लिए कौन सा operator है?",
        "options_en": ["?.", "??", "|", "&"],
        "options_hi": ["?.", "??", "|", "&"],
        "answer_en": "?.",
        "answer_hi": "?.",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which TypeScript utility type extracts return type of a function?",
        "question_hi": "TypeScript में function के return type को extract करने वाला utility type कौन सा है?",
        "options_en": ["ReturnType<T>", "Parameters<T>", "Partial<T>", "Readonly<T>"],
        "options_hi": ["ReturnType<T>", "Parameters<T>", "Partial<T>", "Readonly<T>"],
        "answer_en": "ReturnType<T>",
        "answer_hi": "ReturnType<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which TypeScript utility type extracts parameters of a function as a tuple?",
        "question_hi": "TypeScript में function के parameters को tuple के रूप में extract करने वाला utility type कौन सा है?",
        "options_en": ["Parameters<T>", "ReturnType<T>", "Partial<T>", "Required<T>"],
        "options_hi": ["Parameters<T>", "ReturnType<T>", "Partial<T>", "Required<T>"],
        "answer_en": "Parameters<T>",
        "answer_hi": "Parameters<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which TypeScript feature allows representing a variable that can be any type safely?",
        "question_hi": "TypeScript में variable जो किसी भी type की value hold कर सकता है, उसे safely represent करने का feature कौन देता है?",
        "options_en": ["unknown", "any", "never", "void"],
        "options_hi": ["unknown", "any", "never", "void"],
        "answer_en": "unknown",
        "answer_hi": "unknown",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which TypeScript keyword allows extending a class?",
        "question_hi": "TypeScript में class extend करने के लिए कौन सा keyword है?",
        "options_en": ["extends", "implements", "interface", "super"],
        "options_hi": ["extends", "implements", "interface", "super"],
        "answer_en": "extends",
        "answer_hi": "extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which TypeScript utility type constructs a type with all properties optional?",
        "question_hi": "TypeScript में कौन सा utility type type की सभी properties को optional बनाता है?",
        "options_en": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T, K>"],
        "options_hi": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T, K>"],
        "answer_en": "Partial<T>",
        "answer_hi": "Partial<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which TypeScript feature allows creating discriminated unions for safe type checks?",
        "question_hi": "TypeScript में safe type checks के लिए discriminated unions create करने की सुविधा कौन देती है?",
        "options_en": ["tagged unions", "intersection types", "tuple", "literal types"],
        "options_hi": ["tagged unions", "intersection types", "tuple", "literal types"],
        "answer_en": "tagged unions",
        "answer_hi": "tagged unions",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which TypeScript feature allows combining multiple types into one using '&'?",
        "question_hi": "TypeScript में '&' का उपयोग करके multiple types को combine करने की सुविधा कौन देती है?",
        "options_en": ["intersection types", "union types", "tuple", "any"],
        "options_hi": ["intersection types", "union types", "tuple", "any"],
        "answer_en": "intersection types",
        "answer_hi": "intersection types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which TypeScript keyword allows implementing multiple interfaces in a class?",
        "question_hi": "TypeScript में class में multiple interfaces implement करने के लिए कौन सा keyword है?",
        "options_en": ["implements", "extends", "interface", "abstract"],
        "options_hi": ["implements", "extends", "interface", "abstract"],
        "answer_en": "implements",
        "answer_hi": "implements",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which TypeScript type allows representing all keys of a given type?",
        "question_hi": "TypeScript में किसी दिए गए type की सभी keys represent करने के लिए कौन सा type है?",
        "options_en": ["keyof", "typeof", "any", "unknown"],
        "options_hi": ["keyof", "typeof", "any", "unknown"],
        "answer_en": "keyof",
        "answer_hi": "keyof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which TypeScript feature allows creating a type from another type but excluding some properties?",
        "question_hi": "TypeScript में किसी type से नया type create करने की सुविधा जो कुछ properties exclude करता है?",
        "options_en": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
        "options_hi": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
        "answer_en": "Omit<T, K>",
        "answer_hi": "Omit<T, K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which TypeScript feature allows creating tuple types with fixed types and length?",
        "question_hi": "TypeScript में fixed types और length वाले tuple types create करने की सुविधा कौन देती है?",
        "options_en": ["tuple", "array", "union types", "any"],
        "options_hi": ["tuple", "array", "union types", "any"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which TypeScript feature allows representing string literal unions?",
        "question_hi": "TypeScript में string literal unions represent करने की सुविधा कौन देती है?",
        "options_en": ["literal types", "enum", "union types", "intersection types"],
        "options_hi": ["literal types", "enum", "union types", "intersection types"],
        "answer_en": "literal types",
        "answer_hi": "literal types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which TypeScript utility type constructs a type by picking properties from another type?",
        "question_hi": "TypeScript में किसी type से properties pick करके नया type create करने वाला utility type कौन सा है?",
        "options_en": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Required<T>"],
        "options_hi": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Required<T>"],
        "answer_en": "Pick<T, K>",
        "answer_hi": "Pick<T, K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which TypeScript feature allows defining enums with string values?",
        "question_hi": "TypeScript में string values वाले enums define करने की सुविधा कौन देती है?",
        "options_en": ["string enums", "numeric enums", "union types", "literal types"],
        "options_hi": ["string enums", "numeric enums", "union types", "literal types"],
        "answer_en": "string enums",
        "answer_hi": "string enums",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which TypeScript keyword allows creating abstract methods in a class?",
        "question_hi": "TypeScript में class में abstract methods create करने के लिए कौन सा keyword है?",
        "options_en": ["abstract", "readonly", "const", "final"],
        "options_hi": ["abstract", "readonly", "const", "final"],
        "answer_en": "abstract",
        "answer_hi": "abstract",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which TypeScript feature allows safely accessing nested optional properties?",
        "question_hi": "TypeScript में nested optional properties को safely access करने की सुविधा कौन देती है?",
        "options_en": ["optional chaining (?.)", "nullish coalescing (??)", "union types", "type guards"],
        "options_hi": ["optional chaining (?.)", "nullish coalescing (??)", "union types", "type guards"],
        "answer_en": "optional chaining (?.)",
        "answer_hi": "optional chaining (?.)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which TypeScript operator allows providing a default value for null or undefined?",
        "question_hi": "TypeScript में null या undefined के लिए default value provide करने वाला operator कौन सा है?",
        "options_en": ["nullish coalescing (??)", "optional chaining (?.)", "|", "&"],
        "options_hi": ["nullish coalescing (??)", "optional chaining (?.)", "|", "&"],
        "answer_en": "nullish coalescing (??)",
        "answer_hi": "nullish coalescing (??)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which TypeScript feature allows creating mapped types to transform existing types?",
        "question_hi": "TypeScript में existing types को transform करने के लिए mapped types create करने की सुविधा कौन देती है?",
        "options_en": ["mapped types", "utility types", "generics", "interfaces"],
        "options_hi": ["mapped types", "utility types", "generics", "interfaces"],
        "answer_en": "mapped types",
        "answer_hi": "mapped types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which TypeScript keyword allows checking the type of a variable at runtime?",
        "question_hi": "TypeScript में runtime पर variable का type check करने के लिए कौन सा keyword है?",
        "options_en": ["typeof", "keyof", "instanceof", "readonly"],
        "options_hi": ["typeof", "keyof", "instanceof", "readonly"],
        "answer_en": "typeof",
        "answer_hi": "typeof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which TypeScript feature allows creating type-safe object variants using tags?",
        "question_hi": "TypeScript में tags का उपयोग करके type-safe object variants create करने की सुविधा कौन देती है?",
        "options_en": ["tagged unions", "intersection types", "tuple", "literal types"],
        "options_hi": ["tagged unions", "intersection types", "tuple", "literal types"],
        "answer_en": "tagged unions",
        "answer_hi": "tagged unions",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which TypeScript feature allows narrowing union types with 'instanceof'?",
        "question_hi": "TypeScript में 'instanceof' का उपयोग करके union types narrow करने की सुविधा कौन देती है?",
        "options_en": ["type guards", "type inference", "union types", "intersection types"],
        "options_hi": ["type guards", "type inference", "union types", "intersection types"],
        "answer_en": "type guards",
        "answer_hi": "type guards",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which TypeScript feature allows representing functions that never return?",
        "question_hi": "TypeScript में functions जो कभी return नहीं करते, उन्हें represent करने की सुविधा कौन देती है?",
        "options_en": ["never", "void", "any", "unknown"],
        "options_hi": ["never", "void", "any", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which TypeScript feature allows defining a type alias for a union of string literals?",
        "question_hi": "TypeScript में string literals के union के लिए type alias define करने की सुविधा कौन देती है?",
        "options_en": ["literal types", "enum", "tuple", "interface"],
        "options_hi": ["literal types", "enum", "tuple", "interface"],
        "answer_en": "literal types",
        "answer_hi": "literal types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which TypeScript keyword allows creating a generic interface?",
        "question_hi": "TypeScript में generic interface create करने के लिए कौन सा keyword है?",
        "options_en": ["interface<T>", "type<T>", "class<T>", "enum<T>"],
        "options_hi": ["interface<T>", "type<T>", "class<T>", "enum<T>"],
        "answer_en": "interface<T>",
        "answer_hi": "interface<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which TypeScript utility type constructs a type by excluding properties from another type?",
        "question_hi": "TypeScript में किसी type से properties exclude करके नया type create करने वाला utility type कौन सा है?",
        "options_en": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
        "options_hi": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
        "answer_en": "Omit<T, K>",
        "answer_hi": "Omit<T, K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which TypeScript feature allows defining optional properties in a type using '?'?",
        "question_hi": "TypeScript में '?' का उपयोग करके type में optional properties define करने की सुविधा कौन देती है?",
        "options_en": ["optional properties", "readonly properties", "default properties", "any"],
        "options_hi": ["optional properties", "readonly properties", "default properties", "any"],
        "answer_en": "optional properties",
        "answer_hi": "optional properties",
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