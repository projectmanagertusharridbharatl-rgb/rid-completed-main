const questions = [
    {
        "num": 1,
        "question_en": "Which TypeScript type allows representing any value without type checking?",
        "question_hi": "TypeScript में ऐसा type कौन सा है जो किसी भी value को बिना type checking के represent करता है?",
        "options_en": ["any", "unknown", "void", "never"],
        "options_hi": ["any", "unknown", "void", "never"],
        "answer_en": "any",
        "answer_hi": "any",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which TypeScript type represents an unknown value that needs type assertion before use?",
        "question_hi": "TypeScript में ऐसा type कौन सा है जिसे use करने से पहले type assertion की जरूरत होती है?",
        "options_en": ["unknown", "any", "void", "never"],
        "options_hi": ["unknown", "any", "void", "never"],
        "answer_en": "unknown",
        "answer_hi": "unknown",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which TypeScript keyword defines a constant variable?",
        "question_hi": "TypeScript में constant variable define करने के लिए कौन सा keyword उपयोग होता है?",
        "options_en": ["const", "let", "var", "readonly"],
        "options_hi": ["const", "let", "var", "readonly"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which TypeScript keyword defines a block-scoped variable that can be reassigned?",
        "question_hi": "TypeScript में block-scoped variable जो reassigned हो सकता है, define करने के लिए कौन सा keyword है?",
        "options_en": ["let", "var", "const", "readonly"],
        "options_hi": ["let", "var", "const", "readonly"],
        "answer_en": "let",
        "answer_hi": "let",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which TypeScript type is used for a function that does not return a value?",
        "question_hi": "TypeScript में ऐसा function जो कोई value return न करे, उसका type कौन सा है?",
        "options_en": ["void", "any", "never", "unknown"],
        "options_hi": ["void", "any", "never", "unknown"],
        "answer_en": "void",
        "answer_hi": "void",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which TypeScript type represents a function that never returns?",
        "question_hi": "TypeScript में ऐसा function जो कभी return न करे, उसका type कौन सा है?",
        "options_en": ["never", "void", "any", "unknown"],
        "options_hi": ["never", "void", "any", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which TypeScript feature allows creating a custom type for an object shape?",
        "question_hi": "TypeScript में object के shape के लिए custom type बनाने की सुविधा कौन देती है?",
        "options_en": ["interface", "class", "type alias", "enum"],
        "options_hi": ["interface", "class", "type alias", "enum"],
        "answer_en": "interface",
        "answer_hi": "interface",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which TypeScript feature allows creating a new type by combining existing types?",
        "question_hi": "TypeScript में existing types को combine करके नया type बनाने की सुविधा कौन देती है?",
        "options_en": ["intersection types", "union types", "tuple", "any"],
        "options_hi": ["intersection types", "union types", "tuple", "any"],
        "answer_en": "intersection types",
        "answer_hi": "intersection types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which TypeScript feature allows a variable to hold values of multiple types?",
        "question_hi": "TypeScript में variable को multiple types के values रखने की सुविधा कौन देती है?",
        "options_en": ["union types", "intersection types", "tuple", "enum"],
        "options_hi": ["union types", "intersection types", "tuple", "enum"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which TypeScript feature allows defining fixed-length arrays with multiple types?",
        "question_hi": "TypeScript में fixed-length arrays जिसमें multiple types हो, define करने की सुविधा कौन देती है?",
        "options_en": ["tuple", "array", "any", "enum"],
        "options_hi": ["tuple", "array", "any", "enum"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which TypeScript feature allows assigning default values to function parameters?",
        "question_hi": "TypeScript में function parameters को default values assign करने की सुविधा कौन देती है?",
        "options_en": ["default parameters", "optional parameters", "rest parameters", "any"],
        "options_hi": ["default parameters", "optional parameters", "rest parameters", "any"],
        "answer_en": "default parameters",
        "answer_hi": "default parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which TypeScript feature allows a function parameter to be optional?",
        "question_hi": "TypeScript में function parameter optional बनाने की सुविधा कौन देती है?",
        "options_en": ["optional parameters using '?'", "default parameters", "rest parameters", "any"],
        "options_hi": ["optional parameters using '?'", "default parameters", "rest parameters", "any"],
        "answer_en": "optional parameters using '?'",
        "answer_hi": "optional parameters using '?'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which TypeScript feature allows a function to accept any number of arguments as an array?",
        "question_hi": "TypeScript में function को किसी भी number of arguments array के रूप में accept करने की सुविधा कौन देती है?",
        "options_en": ["rest parameters", "default parameters", "optional parameters", "tuple"],
        "options_hi": ["rest parameters", "default parameters", "optional parameters", "tuple"],
        "answer_en": "rest parameters",
        "answer_hi": "rest parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which TypeScript keyword defines a read-only property?",
        "question_hi": "TypeScript में read-only property define करने के लिए कौन सा keyword है?",
        "options_en": ["readonly", "const", "let", "var"],
        "options_hi": ["readonly", "const", "let", "var"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which TypeScript feature infers the type of a variable automatically?",
        "question_hi": "TypeScript में variable का type automatically infer करने की सुविधा कौन देती है?",
        "options_en": ["type inference", "type annotation", "any", "unknown"],
        "options_hi": ["type inference", "type annotation", "any", "unknown"],
        "answer_en": "type inference",
        "answer_hi": "type inference",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which TypeScript feature allows defining a type alias for a union of string literals?",
        "question_hi": "TypeScript में string literals के union के लिए type alias define करने की सुविधा कौन देती है?",
        "options_en": ["type alias", "interface", "enum", "tuple"],
        "options_hi": ["type alias", "interface", "enum", "tuple"],
        "answer_en": "type alias",
        "answer_hi": "type alias",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which TypeScript keyword is used to declare a class that cannot be instantiated?",
        "question_hi": "TypeScript में ऐसा class declare करने के लिए कौन सा keyword है जो instantiate न हो सके?",
        "options_en": ["abstract", "interface", "const", "readonly"],
        "options_hi": ["abstract", "interface", "const", "readonly"],
        "answer_en": "abstract",
        "answer_hi": "abstract",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which TypeScript feature allows a class to implement a contract for property and method types?",
        "question_hi": "TypeScript में class को property और method types के लिए contract implement करने की सुविधा कौन देती है?",
        "options_en": ["interface", "abstract class", "type alias", "enum"],
        "options_hi": ["interface", "abstract class", "type alias", "enum"],
        "answer_en": "interface",
        "answer_hi": "interface",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which TypeScript feature allows combining multiple types into one that must satisfy all?",
        "question_hi": "TypeScript में multiple types को combine करके ऐसा type बनाने की सुविधा जो सभी satisfy करे, कौन देती है?",
        "options_en": ["intersection types", "union types", "tuple", "any"],
        "options_hi": ["intersection types", "union types", "tuple", "any"],
        "answer_en": "intersection types",
        "answer_hi": "intersection types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which TypeScript feature allows a variable to hold one of several types?",
        "question_hi": "TypeScript में variable को कई types में से कोई एक value रखने की सुविधा कौन देती है?",
        "options_en": ["union types", "intersection types", "tuple", "enum"],
        "options_hi": ["union types", "intersection types", "tuple", "enum"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which TypeScript feature allows defining optional properties in an interface?",
        "question_hi": "TypeScript में interface में optional properties define करने की सुविधा कौन देती है?",
        "options_en": ["?", "readonly", "const", "abstract"],
        "options_hi": ["?", "readonly", "const", "abstract"],
        "answer_en": "?",
        "answer_hi": "?",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which TypeScript keyword defines an enumeration of named constants?",
        "question_hi": "TypeScript में नामित constants की enumeration define करने के लिए कौन सा keyword है?",
        "options_en": ["enum", "interface", "type", "const"],
        "options_hi": ["enum", "interface", "type", "const"],
        "answer_en": "enum",
        "answer_hi": "enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which TypeScript utility type constructs a type with all properties required?",
        "question_hi": "TypeScript में सभी properties required बनाने वाला utility type कौन सा है?",
        "options_en": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T,K>"],
        "options_hi": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T,K>"],
        "answer_en": "Required<T>",
        "answer_hi": "Required<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which TypeScript utility type constructs a type with only selected properties?",
        "question_hi": "TypeScript में केवल चयनित properties के साथ type बनाने वाला utility type कौन सा है?",
        "options_en": ["Pick<T,K>", "Partial<T>", "Readonly<T>", "Required<T>"],
        "options_hi": ["Pick<T,K>", "Partial<T>", "Readonly<T>", "Required<T>"],
        "answer_en": "Pick<T,K>",
        "answer_hi": "Pick<T,K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which TypeScript utility type constructs a type with all properties read-only?",
        "question_hi": "TypeScript में सभी properties read-only बनाने वाला utility type कौन सा है?",
        "options_en": ["Readonly<T>", "Partial<T>", "Required<T>", "Pick<T,K>"],
        "options_hi": ["Readonly<T>", "Partial<T>", "Required<T>", "Pick<T,K>"],
        "answer_en": "Readonly<T>",
        "answer_hi": "Readonly<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which TypeScript keyword is used to define a generic type?",
        "question_hi": "TypeScript में generic type define करने के लिए कौन सा keyword उपयोग होता है?",
        "options_en": ["<T>", "interface", "type", "enum"],
        "options_hi": ["<T>", "interface", "type", "enum"],
        "answer_en": "<T>",
        "answer_hi": "<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which TypeScript utility type extracts the return type of a function?",
        "question_hi": "TypeScript में function के return type को extract करने वाला utility type कौन सा है?",
        "options_en": ["ReturnType<T>", "Parameters<T>", "Partial<T>", "Pick<T,K>"],
        "options_hi": ["ReturnType<T>", "Parameters<T>", "Partial<T>", "Pick<T,K>"],
        "answer_en": "ReturnType<T>",
        "answer_hi": "ReturnType<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which TypeScript utility type extracts the types of function parameters as a tuple?",
        "question_hi": "TypeScript में function parameters के types को tuple के रूप में extract करने वाला utility type कौन सा है?",
        "options_en": ["Parameters<T>", "ReturnType<T>", "Partial<T>", "Pick<T,K>"],
        "options_hi": ["Parameters<T>", "ReturnType<T>", "Partial<T>", "Pick<T,K>"],
        "answer_en": "Parameters<T>",
        "answer_hi": "Parameters<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which TypeScript utility type constructs a type by excluding specific properties from another type?",
        "question_hi": "TypeScript में किसी type से specific properties exclude करके नया type बनाने वाला utility type कौन सा है?",
        "options_en": ["Omit<T,K>", "Pick<T,K>", "Partial<T>", "Required<T>"],
        "options_hi": ["Omit<T,K>", "Pick<T,K>", "Partial<T>", "Required<T>"],
        "answer_en": "Omit<T,K>",
        "answer_hi": "Omit<T,K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which TypeScript operator safely accesses properties that may be undefined?",
        "question_hi": "TypeScript में ऐसी properties को safely access करने वाला operator कौन सा है जो undefined हो सकती हैं?",
        "options_en": ["?.", "??", "!", "as"],
        "options_hi": ["?.", "??", "!", "as"],
        "answer_en": "?.",
        "answer_hi": "?.",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which TypeScript operator provides a default value when a variable is null or undefined?",
        "question_hi": "TypeScript में variable null या undefined होने पर default value provide करने वाला operator कौन सा है?",
        "options_en": ["??", "?.", "!", "as"],
        "options_hi": ["??", "?.", "!", "as"],
        "answer_en": "??",
        "answer_hi": "??",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which TypeScript feature allows type assertion to a specific type?",
        "question_hi": "TypeScript में specific type में type assertion करने की सुविधा कौन देती है?",
        "options_en": ["as", "<Type>", "both", "any"],
        "options_hi": ["as", "<Type>", "both", "any"],
        "answer_en": "both",
        "answer_hi": "both",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which TypeScript feature allows narrowing a type using a check like typeof?",
        "question_hi": "TypeScript में typeof जैसे check का उपयोग करके type narrow करने की सुविधा कौन देती है?",
        "options_en": ["type guards", "union types", "tuple", "any"],
        "options_hi": ["type guards", "union types", "tuple", "any"],
        "answer_en": "type guards",
        "answer_hi": "type guards",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which TypeScript feature allows narrowing a type using instanceof for classes?",
        "question_hi": "TypeScript में classes के लिए instanceof का उपयोग करके type narrow करने की सुविधा कौन देती है?",
        "options_en": ["type guards", "union types", "tuple", "any"],
        "options_hi": ["type guards", "union types", "tuple", "any"],
        "answer_en": "type guards",
        "answer_hi": "type guards",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which TypeScript keyword allows implementing inheritance between classes?",
        "question_hi": "TypeScript में classes के बीच inheritance implement करने वाला keyword कौन सा है?",
        "options_en": ["extends", "implements", "abstract", "interface"],
        "options_hi": ["extends", "implements", "abstract", "interface"],
        "answer_en": "extends",
        "answer_hi": "extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which TypeScript keyword allows a class to implement an interface?",
        "question_hi": "TypeScript में class को interface implement करने वाला keyword कौन सा है?",
        "options_en": ["implements", "extends", "abstract", "interface"],
        "options_hi": ["implements", "extends", "abstract", "interface"],
        "answer_en": "implements",
        "answer_hi": "implements",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which TypeScript feature allows mapping over types to create new types?",
        "question_hi": "TypeScript में types पर map करके नए types बनाने की सुविधा कौन देती है?",
        "options_en": ["mapped types", "utility types", "generics", "tuple"],
        "options_hi": ["mapped types", "utility types", "generics", "tuple"],
        "answer_en": "mapped types",
        "answer_hi": "mapped types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which TypeScript feature allows defining a type-safe higher-order function?",
        "question_hi": "TypeScript में type-safe higher-order function define करने की सुविधा कौन देती है?",
        "options_en": ["generics", "any", "tuple", "union types"],
        "options_hi": ["generics", "any", "tuple", "union types"],
        "answer_en": "generics",
        "answer_hi": "generics",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which TypeScript feature allows creating a union of string literal types?",
        "question_hi": "TypeScript में string literal types का union बनाने की सुविधा कौन देती है?",
        "options_en": ["literal types", "enum", "tuple", "any"],
        "options_hi": ["literal types", "enum", "tuple", "any"],
        "answer_en": "literal types",
        "answer_hi": "literal types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which TypeScript feature allows creating an array of objects with fixed properties?",
        "question_hi": "TypeScript में fixed properties वाले objects की array बनाने की सुविधा कौन देती है?",
        "options_en": ["tuple", "array", "enum", "any"],
        "options_hi": ["tuple", "array", "enum", "any"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which TypeScript feature allows creating a type that can accept multiple types using | operator?",
        "question_hi": "TypeScript में ऐसा type बनाने की सुविधा जो multiple types accept कर सके, कौन देती है?",
        "options_en": ["union types", "intersection types", "tuple", "any"],
        "options_hi": ["union types", "intersection types", "tuple", "any"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which TypeScript feature allows combining types such that a value must satisfy all included types?",
        "question_hi": "TypeScript में types को combine करने की सुविधा जो सभी included types को satisfy करे, कौन देती है?",
        "options_en": ["intersection types", "union types", "tuple", "any"],
        "options_hi": ["intersection types", "union types", "tuple", "any"],
        "answer_en": "intersection types",
        "answer_hi": "intersection types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which TypeScript feature allows defining type-safe constants with fixed values?",
        "question_hi": "TypeScript में fixed values के साथ type-safe constants define करने की सुविधा कौन देती है?",
        "options_en": ["enum", "literal types", "tuple", "any"],
        "options_hi": ["enum", "literal types", "tuple", "any"],
        "answer_en": "enum",
        "answer_hi": "enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which TypeScript feature allows defining a variable that cannot be null or undefined after initialization?",
        "question_hi": "TypeScript में ऐसा variable define करने की सुविधा जो initialization के बाद null या undefined न हो, कौन देती है?",
        "options_en": ["non-null assertion operator (!)", "optional chaining (?.)", "any", "unknown"],
        "options_hi": ["non-null assertion operator (!)", "optional chaining (?.)", "any", "unknown"],
        "answer_en": "non-null assertion operator (!)",
        "answer_hi": "non-null assertion operator (!)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which TypeScript feature allows creating a type-safe array of different types in fixed order?",
        "question_hi": "TypeScript में fixed order में different types की type-safe array बनाने की सुविधा कौन देती है?",
        "options_en": ["tuple", "array", "union types", "any"],
        "options_hi": ["tuple", "array", "union types", "any"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which TypeScript utility type constructs a type by making all properties optional?",
        "question_hi": "TypeScript में सभी properties optional बनाने वाला utility type कौन सा है?",
        "options_en": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T,K>"],
        "options_hi": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T,K>"],
        "answer_en": "Partial<T>",
        "answer_hi": "Partial<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which TypeScript utility type constructs a type with only selected properties from another type?",
        "question_hi": "TypeScript में किसी type से केवल selected properties के साथ नया type बनाने वाला utility type कौन सा है?",
        "options_en": ["Pick<T,K>", "Omit<T,K>", "Partial<T>", "Required<T>"],
        "options_hi": ["Pick<T,K>", "Omit<T,K>", "Partial<T>", "Required<T>"],
        "answer_en": "Pick<T,K>",
        "answer_hi": "Pick<T,K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which TypeScript utility type constructs a type by excluding specific properties from another type?",
        "question_hi": "TypeScript में किसी type से specific properties exclude करके नया type बनाने वाला utility type कौन सा है?",
        "options_en": ["Omit<T,K>", "Pick<T,K>", "Partial<T>", "Required<T>"],
        "options_hi": ["Omit<T,K>", "Pick<T,K>", "Partial<T>", "Required<T>"],
        "answer_en": "Omit<T,K>",
        "answer_hi": "Omit<T,K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which TypeScript feature allows creating a type from keys of an existing object type?",
        "question_hi": "TypeScript में existing object type की keys से नया type बनाने की सुविधा कौन देती है?",
        "options_en": ["keyof", "typeof", "instanceof", "in"],
        "options_hi": ["keyof", "typeof", "instanceof", "in"],
        "answer_en": "keyof",
        "answer_hi": "keyof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which TypeScript feature allows accessing the type of an existing variable or object?",
        "question_hi": "TypeScript में existing variable या object का type access करने की सुविधा कौन देती है?",
        "options_en": ["typeof", "keyof", "instanceof", "as"],
        "options_hi": ["typeof", "keyof", "instanceof", "as"],
        "answer_en": "typeof",
        "answer_hi": "typeof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which TypeScript feature allows defining a type-safe function with generic parameters?",
        "question_hi": "TypeScript में generic parameters के साथ type-safe function define करने की सुविधा कौन देती है?",
        "options_en": ["generics", "any", "tuple", "union types"],
        "options_hi": ["generics", "any", "tuple", "union types"],
        "answer_en": "generics",
        "answer_hi": "generics",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which TypeScript feature allows enforcing a property to be readonly in an interface?",
        "question_hi": "TypeScript में interface में property को readonly enforce करने की सुविधा कौन देती है?",
        "options_en": ["readonly", "const", "let", "enum"],
        "options_hi": ["readonly", "const", "let", "enum"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which TypeScript feature allows defining a type that can accept either one type or another?",
        "question_hi": "TypeScript में ऐसा type define करने की सुविधा जो एक type या दूसरे type को accept कर सके, कौन देती है?",
        "options_en": ["union types", "intersection types", "tuple", "any"],
        "options_hi": ["union types", "intersection types", "tuple", "any"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which TypeScript feature allows combining multiple types into one that requires all types to be satisfied?",
        "question_hi": "TypeScript में multiple types combine करके ऐसा type बनाने की सुविधा जो सभी types satisfy करे, कौन देती है?",
        "options_en": ["intersection types", "union types", "tuple", "any"],
        "options_hi": ["intersection types", "union types", "tuple", "any"],
        "answer_en": "intersection types",
        "answer_hi": "intersection types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which TypeScript feature allows creating a function type that takes a variable number of arguments?",
        "question_hi": "TypeScript में function type create करने की सुविधा जो variable number of arguments ले सके, कौन देती है?",
        "options_en": ["rest parameters", "optional parameters", "tuple", "any"],
        "options_hi": ["rest parameters", "optional parameters", "tuple", "any"],
        "answer_en": "rest parameters",
        "answer_hi": "rest parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which TypeScript feature allows assigning default values to function parameters?",
        "question_hi": "TypeScript में function parameters को default values assign करने की सुविधा कौन देती है?",
        "options_en": ["default parameters", "optional parameters", "rest parameters", "any"],
        "options_hi": ["default parameters", "optional parameters", "rest parameters", "any"],
        "answer_en": "default parameters",
        "answer_hi": "default parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which TypeScript feature allows defining a class that cannot be instantiated directly?",
        "question_hi": "TypeScript में ऐसा class define करने की सुविधा जो सीधे instantiate न हो सके, कौन देती है?",
        "options_en": ["abstract", "interface", "const", "readonly"],
        "options_hi": ["abstract", "interface", "const", "readonly"],
        "answer_en": "abstract",
        "answer_hi": "abstract",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which TypeScript feature allows a class to implement a contract for properties and methods?",
        "question_hi": "TypeScript में class को properties और methods के लिए contract implement करने की सुविधा कौन देती है?",
        "options_en": ["interface", "abstract class", "type alias", "enum"],
        "options_hi": ["interface", "abstract class", "type alias", "enum"],
        "answer_en": "interface",
        "answer_hi": "interface",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which TypeScript feature allows defining a variable whose type is inferred from the assigned value?",
        "question_hi": "TypeScript में ऐसा variable define करने की सुविधा जो assigned value से type infer करे, कौन देती है?",
        "options_en": ["type inference", "type annotation", "any", "unknown"],
        "options_hi": ["type inference", "type annotation", "any", "unknown"],
        "answer_en": "type inference",
        "answer_hi": "type inference",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which TypeScript feature allows accessing nested properties safely that might be undefined?",
        "question_hi": "TypeScript में nested properties को safely access करने की सुविधा जो undefined हो सकती हैं, कौन देती है?",
        "options_en": ["optional chaining (?.)", "nullish coalescing (??)", "!", "as"],
        "options_hi": ["optional chaining (?.)", "nullish coalescing (??)", "!", "as"],
        "answer_en": "optional chaining (?.)",
        "answer_hi": "optional chaining (?.)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which TypeScript operator provides a default value when a variable is null or undefined?",
        "question_hi": "TypeScript में variable null या undefined होने पर default value provide करने वाला operator कौन सा है?",
        "options_en": ["??", "?.", "!", "as"],
        "options_hi": ["??", "?.", "!", "as"],
        "answer_en": "??",
        "answer_hi": "??",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which TypeScript feature allows defining a variable with an unknown type until runtime?",
        "question_hi": "TypeScript में ऐसा variable define करने की सुविधा जो runtime तक unknown type रखता हो, कौन देती है?",
        "options_en": ["unknown", "any", "never", "void"],
        "options_hi": ["unknown", "any", "never", "void"],
        "answer_en": "unknown",
        "answer_hi": "unknown",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which TypeScript type represents a function that never returns?",
        "question_hi": "TypeScript में ऐसा function type जो कभी return न करे, कौन सा है?",
        "options_en": ["never", "void", "any", "unknown"],
        "options_hi": ["never", "void", "any", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which TypeScript type represents a function that returns no value?",
        "question_hi": "TypeScript में ऐसा function type जो कोई value return न करे, कौन सा है?",
        "options_en": ["void", "never", "any", "unknown"],
        "options_hi": ["void", "never", "any", "unknown"],
        "answer_en": "void",
        "answer_hi": "void",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which TypeScript feature allows declaring a type alias?",
        "question_hi": "TypeScript में type alias declare करने की सुविधा कौन देती है?",
        "options_en": ["type", "interface", "enum", "class"],
        "options_hi": ["type", "interface", "enum", "class"],
        "answer_en": "type",
        "answer_hi": "type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which TypeScript keyword is used to check if an object is an instance of a class?",
        "question_hi": "TypeScript में किसी object के किसी class का instance होने की जांच करने वाला keyword कौन सा है?",
        "options_en": ["instanceof", "typeof", "keyof", "as"],
        "options_hi": ["instanceof", "typeof", "keyof", "as"],
        "answer_en": "instanceof",
        "answer_hi": "instanceof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which TypeScript feature allows defining a read-only array type?",
        "question_hi": "TypeScript में read-only array type define करने की सुविधा कौन देती है?",
        "options_en": ["readonly", "const", "let", "enum"],
        "options_hi": ["readonly", "const", "let", "enum"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which TypeScript feature allows restricting a type to only certain string values?",
        "question_hi": "TypeScript में type को केवल certain string values तक restrict करने की सुविधा कौन देती है?",
        "options_en": ["literal types", "enum", "tuple", "any"],
        "options_hi": ["literal types", "enum", "tuple", "any"],
        "answer_en": "literal types",
        "answer_hi": "literal types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which TypeScript feature allows defining multiple types in a single variable declaration using |?",
        "question_hi": "TypeScript में single variable declaration में multiple types define करने की सुविधा कौन देती है?",
        "options_en": ["union types", "intersection types", "tuple", "any"],
        "options_hi": ["union types", "intersection types", "tuple", "any"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which TypeScript feature allows combining multiple types into one such that all types must be satisfied?",
        "question_hi": "TypeScript में multiple types combine करने की सुविधा जो सभी types satisfy करे, कौन देती है?",
        "options_en": ["intersection types", "union types", "tuple", "any"],
        "options_hi": ["intersection types", "union types", "tuple", "any"],
        "answer_en": "intersection types",
        "answer_hi": "intersection types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which TypeScript utility type constructs a type by making all properties required?",
        "question_hi": "TypeScript में सभी properties required बनाने वाला utility type कौन सा है?",
        "options_en": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T,K>"],
        "options_hi": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T,K>"],
        "answer_en": "Required<T>",
        "answer_hi": "Required<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which TypeScript feature allows narrowing a type based on a runtime check of the type?",
        "question_hi": "TypeScript में runtime check के आधार पर type narrow करने की सुविधा कौन देती है?",
        "options_en": ["type guards", "union types", "tuple", "any"],
        "options_hi": ["type guards", "union types", "tuple", "any"],
        "answer_en": "type guards",
        "answer_hi": "type guards",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which TypeScript feature allows creating a tuple type with fixed length and types?",
        "question_hi": "TypeScript में fixed length और types के साथ tuple type बनाने की सुविधा कौन देती है?",
        "options_en": ["tuple", "array", "union types", "any"],
        "options_hi": ["tuple", "array", "union types", "any"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which TypeScript feature allows creating a type that represents a set of string literal values?",
        "question_hi": "TypeScript में string literal values के set को represent करने वाला type कौन सा है?",
        "options_en": ["literal types", "enum", "tuple", "any"],
        "options_hi": ["literal types", "enum", "tuple", "any"],
        "answer_en": "literal types",
        "answer_hi": "literal types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which TypeScript feature allows asserting the type of a variable explicitly?",
        "question_hi": "TypeScript में variable के type को explicitly assert करने की सुविधा कौन देती है?",
        "options_en": ["type assertion", "type inference", "any", "unknown"],
        "options_hi": ["type assertion", "type inference", "any", "unknown"],
        "answer_en": "type assertion",
        "answer_hi": "type assertion",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which TypeScript feature allows creating a type from the keys of another type?",
        "question_hi": "TypeScript में किसी type की keys से नया type बनाने की सुविधा कौन देती है?",
        "options_en": ["keyof", "typeof", "in", "instanceof"],
        "options_hi": ["keyof", "typeof", "in", "instanceof"],
        "answer_en": "keyof",
        "answer_hi": "keyof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which TypeScript feature allows iterating over all keys in a type safely?",
        "question_hi": "TypeScript में type में सभी keys पर safely iterate करने की सुविधा कौन देती है?",
        "options_en": ["mapped types", "utility types", "generics", "tuple"],
        "options_hi": ["mapped types", "utility types", "generics", "tuple"],
        "answer_en": "mapped types",
        "answer_hi": "mapped types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which TypeScript feature allows creating a variable whose type is not known at compile time?",
        "question_hi": "TypeScript में ऐसा variable define करने की सुविधा जो compile time में type नहीं जानता हो, कौन देती है?",
        "options_en": ["any", "unknown", "never", "void"],
        "options_hi": ["any", "unknown", "never", "void"],
        "answer_en": "any",
        "answer_hi": "any",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which TypeScript feature allows defining a function that can accept variable number of arguments as an array?",
        "question_hi": "TypeScript में function define करने की सुविधा जो variable number of arguments array के रूप में accept करे, कौन देती है?",
        "options_en": ["rest parameters", "optional parameters", "default parameters", "any"],
        "options_hi": ["rest parameters", "optional parameters", "default parameters", "any"],
        "answer_en": "rest parameters",
        "answer_hi": "rest parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which TypeScript feature allows a function parameter to be optional?",
        "question_hi": "TypeScript में function parameter optional बनाने की सुविधा कौन देती है?",
        "options_en": ["optional parameters", "rest parameters", "default parameters", "any"],
        "options_hi": ["optional parameters", "rest parameters", "default parameters", "any"],
        "answer_en": "optional parameters",
        "answer_hi": "optional parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which TypeScript feature allows defining a class that cannot be instantiated directly?",
        "question_hi": "TypeScript में ऐसा class define करने की सुविधा जो directly instantiate न हो, कौन देती है?",
        "options_en": ["abstract class", "interface", "const class", "readonly class"],
        "options_hi": ["abstract class", "interface", "const class", "readonly class"],
        "answer_en": "abstract class",
        "answer_hi": "abstract class",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which TypeScript feature allows a class to define a contract of methods and properties without implementation?",
        "question_hi": "TypeScript में class को methods और properties के contract define करने की सुविधा बिना implementation के कौन देती है?",
        "options_en": ["interface", "abstract class", "type alias", "enum"],
        "options_hi": ["interface", "abstract class", "type alias", "enum"],
        "answer_en": "interface",
        "answer_hi": "interface",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which TypeScript feature allows inferring the type of a variable from the assigned value?",
        "question_hi": "TypeScript में variable का type assigned value से infer करने की सुविधा कौन देती है?",
        "options_en": ["type inference", "type annotation", "any", "unknown"],
        "options_hi": ["type inference", "type annotation", "any", "unknown"],
        "answer_en": "type inference",
        "answer_hi": "type inference",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which TypeScript feature allows defining a read-only property inside a class or interface?",
        "question_hi": "TypeScript में class या interface के अंदर read-only property define करने की सुविधा कौन देती है?",
        "options_en": ["readonly", "const", "let", "enum"],
        "options_hi": ["readonly", "const", "let", "enum"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which TypeScript feature allows safely accessing deeply nested properties that may not exist?",
        "question_hi": "TypeScript में ऐसे deeply nested properties को safely access करने की सुविधा जो exist न कर सकती हों, कौन देती है?",
        "options_en": ["optional chaining (?.)", "nullish coalescing (??)", "non-null assertion (!)", "as"],
        "options_hi": ["optional chaining (?.)", "nullish coalescing (??)", "non-null assertion (!)", "as"],
        "answer_en": "optional chaining (?.)",
        "answer_hi": "optional chaining (?.)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which TypeScript operator asserts that a variable is not null or undefined?",
        "question_hi": "TypeScript में variable null या undefined नहीं होने का assertion देने वाला operator कौन सा है?",
        "options_en": ["non-null assertion (!)", "optional chaining (?.)", "??", "as"],
        "options_hi": ["non-null assertion (!)", "optional chaining (?.)", "??", "as"],
        "answer_en": "non-null assertion (!)",
        "answer_hi": "non-null assertion (!)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which TypeScript feature allows creating a type from function parameters as a tuple?",
        "question_hi": "TypeScript में function parameters से tuple के रूप में type बनाने की सुविधा कौन देती है?",
        "options_en": ["Parameters<T>", "ReturnType<T>", "Partial<T>", "Pick<T,K>"],
        "options_hi": ["Parameters<T>", "ReturnType<T>", "Partial<T>", "Pick<T,K>"],
        "answer_en": "Parameters<T>",
        "answer_hi": "Parameters<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which TypeScript feature allows extracting the return type of a function?",
        "question_hi": "TypeScript में function के return type को extract करने की सुविधा कौन देती है?",
        "options_en": ["ReturnType<T>", "Parameters<T>", "Partial<T>", "Pick<T,K>"],
        "options_hi": ["ReturnType<T>", "Parameters<T>", "Partial<T>", "Pick<T,K>"],
        "answer_en": "ReturnType<T>",
        "answer_hi": "ReturnType<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which TypeScript feature allows creating a variable that can hold any type but is type-checked?",
        "question_hi": "TypeScript में ऐसा variable create करने की सुविधा जो कोई भी type रख सके लेकिन type-checked हो, कौन देती है?",
        "options_en": ["unknown", "any", "never", "void"],
        "options_hi": ["unknown", "any", "never", "void"],
        "answer_en": "unknown",
        "answer_hi": "unknown",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which TypeScript feature allows creating a type-safe mapping of keys to new types?",
        "question_hi": "TypeScript में keys का type-safe mapping नए types में बनाने की सुविधा कौन देती है?",
        "options_en": ["mapped types", "utility types", "generics", "tuple"],
        "options_hi": ["mapped types", "utility types", "generics", "tuple"],
        "answer_en": "mapped types",
        "answer_hi": "mapped types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which TypeScript keyword is used to declare a constant variable?",
        "question_hi": "TypeScript में constant variable declare करने के लिए कौन सा keyword है?",
        "options_en": ["const", "let", "var", "readonly"],
        "options_hi": ["const", "let", "var", "readonly"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which TypeScript feature allows creating a variable with multiple possible types?",
        "question_hi": "TypeScript में ऐसा variable create करने की सुविधा जो multiple possible types रख सके, कौन देती है?",
        "options_en": ["union types", "intersection types", "tuple", "any"],
        "options_hi": ["union types", "intersection types", "tuple", "any"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which TypeScript feature allows combining types so that all must be satisfied?",
        "question_hi": "TypeScript में types combine करने की सुविधा जो सभी satisfy हो, कौन देती है?",
        "options_en": ["intersection types", "union types", "tuple", "any"],
        "options_hi": ["intersection types", "union types", "tuple", "any"],
        "answer_en": "intersection types",
        "answer_hi": "intersection types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which TypeScript keyword allows extending a class?",
        "question_hi": "TypeScript में class extend करने के लिए कौन सा keyword है?",
        "options_en": ["extends", "implements", "interface", "type"],
        "options_hi": ["extends", "implements", "interface", "type"],
        "answer_en": "extends",
        "answer_hi": "extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which TypeScript keyword allows a class to implement an interface?",
        "question_hi": "TypeScript में class interface implement करने के लिए कौन सा keyword है?",
        "options_en": ["implements", "extends", "interface", "type"],
        "options_hi": ["implements", "extends", "interface", "type"],
        "answer_en": "implements",
        "answer_hi": "implements",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which TypeScript keyword allows defining a type-safe enumeration?",
        "question_hi": "TypeScript में type-safe enumeration define करने के लिए कौन सा keyword है?",
        "options_en": ["enum", "type", "const", "readonly"],
        "options_hi": ["enum", "type", "const", "readonly"],
        "answer_en": "enum",
        "answer_hi": "enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which TypeScript feature allows a class property to be initialized directly in the constructor?",
        "question_hi": "TypeScript में class property को constructor में directly initialize करने की सुविधा कौन देती है?",
        "options_en": ["parameter properties", "readonly", "abstract", "private"],
        "options_hi": ["parameter properties", "readonly", "abstract", "private"],
        "answer_en": "parameter properties",
        "answer_hi": "parameter properties",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which TypeScript feature allows declaring a type alias for a complex object type?",
        "question_hi": "TypeScript में complex object type के लिए type alias declare करने की सुविधा कौन देती है?",
        "options_en": ["type", "interface", "enum", "class"],
        "options_hi": ["type", "interface", "enum", "class"],
        "answer_en": "type",
        "answer_hi": "type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which TypeScript feature allows using a type as a contract without implementation?",
        "question_hi": "TypeScript में implementation के बिना type को contract के रूप में use करने की सुविधा कौन देती है?",
        "options_en": ["interface", "abstract class", "type", "enum"],
        "options_hi": ["interface", "abstract class", "type", "enum"],
        "answer_en": "interface",
        "answer_hi": "interface",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which TypeScript feature allows providing default values for function parameters?",
        "question_hi": "TypeScript में function parameters के लिए default values provide करने की सुविधा कौन देती है?",
        "options_en": ["default parameters", "optional parameters", "rest parameters", "any"],
        "options_hi": ["default parameters", "optional parameters", "rest parameters", "any"],
        "answer_en": "default parameters",
        "answer_hi": "default parameters",
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