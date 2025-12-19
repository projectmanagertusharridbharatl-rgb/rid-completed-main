const questions = [
    {
        "num": 1,
        "question_en": "Which TypeScript feature allows enforcing type checking at compile time?",
        "question_hi": "TypeScript में compile time पर type checking enforce करने की सुविधा कौन देती है?",
        "options_en": ["static typing", "dynamic typing", "weak typing", "any typing"],
        "options_hi": ["static typing", "dynamic typing", "weak typing", "any typing"],
        "answer_en": "static typing",
        "answer_hi": "static typing",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which TypeScript type represents a value that can never occur?",
        "question_hi": "TypeScript में ऐसा type जो कभी occur न हो, कौन सा है?",
        "options_en": ["never", "void", "any", "unknown"],
        "options_hi": ["never", "void", "any", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which TypeScript feature allows defining default values for parameters?",
        "question_hi": "TypeScript में parameters के लिए default value define करने की सुविधा कौन देती है?",
        "options_en": ["default parameters", "optional parameters", "rest parameters", "any"],
        "options_hi": ["default parameters", "optional parameters", "rest parameters", "any"],
        "answer_en": "default parameters",
        "answer_hi": "default parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which TypeScript feature allows combining multiple types so that any one type is valid?",
        "question_hi": "TypeScript में multiple types combine करने की सुविधा जो किसी एक type को valid बनाए, कौन देती है?",
        "options_en": ["union types", "intersection types", "tuple", "any"],
        "options_hi": ["union types", "intersection types", "tuple", "any"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which TypeScript feature allows combining multiple types so that all types must be satisfied?",
        "question_hi": "TypeScript में multiple types combine करने की सुविधा जो सभी satisfy हों, कौन देती है?",
        "options_en": ["intersection types", "union types", "tuple", "any"],
        "options_hi": ["intersection types", "union types", "tuple", "any"],
        "answer_en": "intersection types",
        "answer_hi": "intersection types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which TypeScript feature allows defining a class property as read-only?",
        "question_hi": "TypeScript में class property को read-only define करने की सुविधा कौन देती है?",
        "options_en": ["readonly", "const", "private", "protected"],
        "options_hi": ["readonly", "const", "private", "protected"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which TypeScript feature allows optional properties in an interface?",
        "question_hi": "TypeScript में interface में optional properties define करने की सुविधा कौन देती है?",
        "options_en": ["?", "!", "as", "readonly"],
        "options_hi": ["?", "!", "as", "readonly"],
        "answer_en": "?",
        "answer_hi": "?",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which TypeScript keyword is used to define a constant variable?",
        "question_hi": "TypeScript में constant variable define करने के लिए कौन सा keyword है?",
        "options_en": ["const", "let", "var", "readonly"],
        "options_hi": ["const", "let", "var", "readonly"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which TypeScript keyword allows creating a subclass from a base class?",
        "question_hi": "TypeScript में base class से subclass create करने के लिए कौन सा keyword है?",
        "options_en": ["extends", "implements", "interface", "type"],
        "options_hi": ["extends", "implements", "interface", "type"],
        "answer_en": "extends",
        "answer_hi": "extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which TypeScript keyword allows a class to follow an interface contract?",
        "question_hi": "TypeScript में class interface contract follow करने के लिए कौन सा keyword है?",
        "options_en": ["implements", "extends", "type", "enum"],
        "options_hi": ["implements", "extends", "type", "enum"],
        "answer_en": "implements",
        "answer_hi": "implements",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which TypeScript type allows a variable to hold any value without type checking?",
        "question_hi": "TypeScript में ऐसा type जो variable किसी भी value रख सके बिना type checking के, कौन सा है?",
        "options_en": ["any", "unknown", "never", "void"],
        "options_hi": ["any", "unknown", "never", "void"],
        "answer_en": "any",
        "answer_hi": "any",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which TypeScript type represents values that are either null or undefined?",
        "question_hi": "TypeScript में ऐसा type जो null या undefined हो सकता है, कौन सा है?",
        "options_en": ["null | undefined", "never", "any", "unknown"],
        "options_hi": ["null | undefined", "never", "any", "unknown"],
        "answer_en": "null | undefined",
        "answer_hi": "null | undefined",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which TypeScript feature allows creating a fixed-length array with specific types?",
        "question_hi": "TypeScript में fixed-length array और specific types वाली array बनाने की सुविधा कौन देती है?",
        "options_en": ["tuple", "array", "union types", "any"],
        "options_hi": ["tuple", "array", "union types", "any"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which TypeScript operator provides a default value if the variable is null or undefined?",
        "question_hi": "TypeScript में variable null या undefined होने पर default value देने वाला operator कौन सा है?",
        "options_en": ["??", "?.", "!", "as"],
        "options_hi": ["??", "?.", "!", "as"],
        "answer_en": "??",
        "answer_hi": "??",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which TypeScript operator safely accesses a property that may not exist?",
        "question_hi": "TypeScript में ऐसा operator जो property exist न करने पर safely access करे, कौन सा है?",
        "options_en": ["?.", "??", "!", "as"],
        "options_hi": ["?.", "??", "!", "as"],
        "answer_en": "?.",
        "answer_hi": "?.",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which TypeScript feature allows asserting the type of a variable?",
        "question_hi": "TypeScript में variable का type assert करने की सुविधा कौन देती है?",
        "options_en": ["type assertion", "type inference", "any", "unknown"],
        "options_hi": ["type assertion", "type inference", "any", "unknown"],
        "answer_en": "type assertion",
        "answer_hi": "type assertion",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which TypeScript feature allows inferring the type automatically from assigned value?",
        "question_hi": "TypeScript में assigned value से automatic type infer करने की सुविधा कौन देती है?",
        "options_en": ["type inference", "type annotation", "any", "unknown"],
        "options_hi": ["type inference", "type annotation", "any", "unknown"],
        "answer_en": "type inference",
        "answer_hi": "type inference",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which TypeScript keyword declares a type alias?",
        "question_hi": "TypeScript में type alias declare करने के लिए कौन सा keyword है?",
        "options_en": ["type", "interface", "enum", "class"],
        "options_hi": ["type", "interface", "enum", "class"],
        "answer_en": "type",
        "answer_hi": "type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
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
        "num": 20,
        "question_en": "Which TypeScript feature allows defining multiple types a variable can accept using |?",
        "question_hi": "TypeScript में variable multiple types accept करने के लिए | operator का उपयोग कौन करता है?",
        "options_en": ["union types", "intersection types", "tuple", "any"],
        "options_hi": ["union types", "intersection types", "tuple", "any"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which TypeScript feature allows combining multiple types so all must be satisfied?",
        "question_hi": "TypeScript में multiple types combine करने की सुविधा जो सभी satisfy हों, कौन देती है?",
        "options_en": ["intersection types", "union types", "tuple", "any"],
        "options_hi": ["intersection types", "union types", "tuple", "any"],
        "answer_en": "intersection types",
        "answer_hi": "intersection types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which TypeScript feature allows creating a class that cannot be instantiated directly?",
        "question_hi": "TypeScript में ऐसा class create करने की सुविधा जो directly instantiate न हो, कौन देती है?",
        "options_en": ["abstract class", "interface", "const class", "readonly class"],
        "options_hi": ["abstract class", "interface", "const class", "readonly class"],
        "answer_en": "abstract class",
        "answer_hi": "abstract class",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which TypeScript feature allows a class to define a contract of methods without implementation?",
        "question_hi": "TypeScript में class methods के contract बिना implementation define करने की सुविधा कौन देती है?",
        "options_en": ["interface", "abstract class", "type alias", "enum"],
        "options_hi": ["interface", "abstract class", "type alias", "enum"],
        "answer_en": "interface",
        "answer_hi": "interface",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which TypeScript feature allows safely accessing nested properties that may not exist?",
        "question_hi": "TypeScript में ऐसे nested properties को safely access करने की सुविधा जो exist न कर सकती हों, कौन देती है?",
        "options_en": ["optional chaining (?.)", "nullish coalescing (??)", "non-null assertion (!)", "as"],
        "options_hi": ["optional chaining (?.)", "nullish coalescing (??)", "non-null assertion (!)", "as"],
        "answer_en": "optional chaining (?.)",
        "answer_hi": "optional chaining (?.)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which TypeScript operator asserts a variable is not null or undefined?",
        "question_hi": "TypeScript में operator जो variable null या undefined न होने का assertion करे, कौन सा है?",
        "options_en": ["non-null assertion (!)", "optional chaining (?.)", "??", "as"],
        "options_hi": ["non-null assertion (!)", "optional chaining (?.)", "??", "as"],
        "answer_en": "non-null assertion (!)",
        "answer_hi": "non-null assertion (!)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which TypeScript feature allows defining a tuple with fixed length and types?",
        "question_hi": "TypeScript में fixed length और types वाली tuple define करने की सुविधा कौन देती है?",
        "options_en": ["tuple", "array", "union types", "any"],
        "options_hi": ["tuple", "array", "union types", "any"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which TypeScript feature allows creating a variable whose type is unknown until runtime?",
        "question_hi": "TypeScript में ऐसा variable create करने की सुविधा जो runtime तक unknown type रखता हो, कौन देती है?",
        "options_en": ["unknown", "any", "never", "void"],
        "options_hi": ["unknown", "any", "never", "void"],
        "answer_en": "unknown",
        "answer_hi": "unknown",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which TypeScript feature allows restricting a type to certain string values?",
        "question_hi": "TypeScript में type को केवल certain string values तक restrict करने की सुविधा कौन देती है?",
        "options_en": ["literal types", "enum", "tuple", "any"],
        "options_hi": ["literal types", "enum", "tuple", "any"],
        "answer_en": "literal types",
        "answer_hi": "literal types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which TypeScript keyword allows extracting the keys of a type?",
        "question_hi": "TypeScript में type की keys extract करने की सुविधा कौन देता है?",
        "options_en": ["keyof", "typeof", "in", "instanceof"],
        "options_hi": ["keyof", "typeof", "in", "instanceof"],
        "answer_en": "keyof",
        "answer_hi": "keyof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which TypeScript utility type makes all properties of a type optional?",
        "question_hi": "TypeScript में किसी type की सभी properties optional बनाने वाला utility type कौन सा है?",
        "options_en": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T,K>"],
        "options_hi": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T,K>"],
        "answer_en": "Partial<T>",
        "answer_hi": "Partial<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which TypeScript utility type makes all properties of a type required?",
        "question_hi": "TypeScript में किसी type की सभी properties required बनाने वाला utility type कौन सा है?",
        "options_en": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T,K>"],
        "options_hi": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T,K>"],
        "answer_en": "Required<T>",
        "answer_hi": "Required<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which TypeScript utility type makes all properties of a type readonly?",
        "question_hi": "TypeScript में किसी type की सभी properties readonly बनाने वाला utility type कौन सा है?",
        "options_en": ["Readonly<T>", "Partial<T>", "Required<T>", "Pick<T,K>"],
        "options_hi": ["Readonly<T>", "Partial<T>", "Required<T>", "Pick<T,K>"],
        "answer_en": "Readonly<T>",
        "answer_hi": "Readonly<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which TypeScript utility type allows selecting specific keys from a type?",
        "question_hi": "TypeScript में type से specific keys select करने वाला utility type कौन सा है?",
        "options_en": ["Pick<T,K>", "Omit<T,K>", "Partial<T>", "Readonly<T>"],
        "options_hi": ["Pick<T,K>", "Omit<T,K>", "Partial<T>", "Readonly<T>"],
        "answer_en": "Pick<T,K>",
        "answer_hi": "Pick<T,K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which TypeScript utility type allows excluding specific keys from a type?",
        "question_hi": "TypeScript में type से specific keys exclude करने वाला utility type कौन सा है?",
        "options_en": ["Omit<T,K>", "Pick<T,K>", "Partial<T>", "Readonly<T>"],
        "options_hi": ["Omit<T,K>", "Pick<T,K>", "Partial<T>", "Readonly<T>"],
        "answer_en": "Omit<T,K>",
        "answer_hi": "Omit<T,K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which TypeScript utility type returns a type with properties common to two types?",
        "question_hi": "TypeScript में दो types में common properties वाला type return करने वाला utility type कौन सा है?",
        "options_en": ["Extract<T,U>", "Exclude<T,U>", "Partial<T>", "Pick<T,K>"],
        "options_hi": ["Extract<T,U>", "Exclude<T,U>", "Partial<T>", "Pick<T,K>"],
        "answer_en": "Extract<T,U>",
        "answer_hi": "Extract<T,U>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which TypeScript utility type returns a type excluding properties of another type?",
        "question_hi": "TypeScript में किसी type से दूसरी type की properties exclude करने वाला utility type कौन सा है?",
        "options_en": ["Exclude<T,U>", "Extract<T,U>", "Pick<T,K>", "Partial<T>"],
        "options_hi": ["Exclude<T,U>", "Extract<T,U>", "Pick<T,K>", "Partial<T>"],
        "answer_en": "Exclude<T,U>",
        "answer_hi": "Exclude<T,U>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which TypeScript utility type constructs a type with all properties of T except K?",
        "question_hi": "TypeScript में ऐसा utility type जो T की सभी properties से K को exclude करे, कौन सा है?",
        "options_en": ["Omit<T,K>", "Pick<T,K>", "Partial<T>", "Readonly<T>"],
        "options_hi": ["Omit<T,K>", "Pick<T,K>", "Partial<T>", "Readonly<T>"],
        "answer_en": "Omit<T,K>",
        "answer_hi": "Omit<T,K>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which TypeScript utility type constructs a type with only the required properties of T?",
        "question_hi": "TypeScript में ऐसा utility type जो केवल T की required properties वाला type बनाए, कौन सा है?",
        "options_en": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T,K>"],
        "options_hi": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T,K>"],
        "answer_en": "Required<T>",
        "answer_hi": "Required<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which TypeScript type is used for a function that does not return a value?",
        "question_hi": "TypeScript में ऐसा function type जो कोई value return न करे, कौन सा है?",
        "options_en": ["void", "never", "any", "unknown"],
        "options_hi": ["void", "never", "any", "unknown"],
        "answer_en": "void",
        "answer_hi": "void",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which TypeScript type represents a function that never returns (throws an error)?",
        "question_hi": "TypeScript में ऐसा function type जो कभी return न करे (error throw करे), कौन सा है?",
        "options_en": ["never", "void", "any", "unknown"],
        "options_hi": ["never", "void", "any", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which TypeScript keyword defines a variable whose type is inferred from the assigned value?",
        "question_hi": "TypeScript में ऐसा keyword जो variable का type assigned value से infer करे, कौन सा है?",
        "options_en": ["let", "const", "var", "readonly"],
        "options_hi": ["let", "const", "var", "readonly"],
        "answer_en": "let",
        "answer_hi": "let",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which TypeScript keyword defines a block-scoped constant variable?",
        "question_hi": "TypeScript में block-scoped constant variable define करने के लिए कौन सा keyword है?",
        "options_en": ["const", "let", "var", "readonly"],
        "options_hi": ["const", "let", "var", "readonly"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which TypeScript keyword allows extending an abstract class?",
        "question_hi": "TypeScript में abstract class extend करने के लिए कौन सा keyword है?",
        "options_en": ["extends", "implements", "interface", "type"],
        "options_hi": ["extends", "implements", "interface", "type"],
        "answer_en": "extends",
        "answer_hi": "extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which TypeScript feature allows defining a property accessible only inside the class?",
        "question_hi": "TypeScript में class के अंदर ही accessible property define करने की सुविधा कौन देती है?",
        "options_en": ["private", "protected", "public", "readonly"],
        "options_hi": ["private", "protected", "public", "readonly"],
        "answer_en": "private",
        "answer_hi": "private",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which TypeScript feature allows defining a property accessible inside class and subclasses?",
        "question_hi": "TypeScript में class और subclasses में accessible property define करने की सुविधा कौन देती है?",
        "options_en": ["protected", "private", "public", "readonly"],
        "options_hi": ["protected", "private", "public", "readonly"],
        "answer_en": "protected",
        "answer_hi": "protected",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which TypeScript feature allows defining a property accessible everywhere?",
        "question_hi": "TypeScript में property को हर जगह access करने की सुविधा कौन देती है?",
        "options_en": ["public", "private", "protected", "readonly"],
        "options_hi": ["public", "private", "protected", "readonly"],
        "answer_en": "public",
        "answer_hi": "public",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which TypeScript feature allows creating a class property initialized via constructor parameters?",
        "question_hi": "TypeScript में class property को constructor parameters से initialize करने की सुविधा कौन देती है?",
        "options_en": ["parameter properties", "readonly", "private", "protected"],
        "options_hi": ["parameter properties", "readonly", "private", "protected"],
        "answer_en": "parameter properties",
        "answer_hi": "parameter properties",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which TypeScript feature allows creating a namespace for grouping related code?",
        "question_hi": "TypeScript में related code group करने के लिए namespace create करने की सुविधा कौन देती है?",
        "options_en": ["namespace", "module", "package", "interface"],
        "options_hi": ["namespace", "module", "package", "interface"],
        "answer_en": "namespace",
        "answer_hi": "namespace",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which TypeScript feature allows importing code from other files?",
        "question_hi": "TypeScript में अन्य files से code import करने की सुविधा कौन देती है?",
        "options_en": ["import", "export", "require", "include"],
        "options_hi": ["import", "export", "require", "include"],
        "answer_en": "import",
        "answer_hi": "import",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which TypeScript feature allows making code available for use in other files?",
        "question_hi": "TypeScript में code को अन्य files में use करने के लिए उपलब्ध कराने की सुविधा कौन देती है?",
        "options_en": ["export", "import", "require", "include"],
        "options_hi": ["export", "import", "require", "include"],
        "answer_en": "export",
        "answer_hi": "export",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which TypeScript feature allows importing all exported members of a module as a single object?",
        "question_hi": "TypeScript में module के सभी exported members को एक object के रूप में import करने की सुविधा कौन देती है?",
        "options_en": ["import * as", "import default", "export * as", "require"],
        "options_hi": ["import * as", "import default", "export * as", "require"],
        "answer_en": "import * as",
        "answer_hi": "import * as",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which TypeScript feature allows providing a default export from a module?",
        "question_hi": "TypeScript में module से default export provide करने की सुविधा कौन देती है?",
        "options_en": ["export default", "export", "import default", "require"],
        "options_hi": ["export default", "export", "import default", "require"],
        "answer_en": "export default",
        "answer_hi": "export default",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which TypeScript feature allows combining multiple modules into a single module?",
        "question_hi": "TypeScript में multiple modules को एक module में combine करने की सुविधा कौन देती है?",
        "options_en": ["module augmentation", "namespace", "interface", "class"],
        "options_hi": ["module augmentation", "namespace", "interface", "class"],
        "answer_en": "module augmentation",
        "answer_hi": "module augmentation",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which TypeScript feature allows defining type-safe events and callbacks?",
        "question_hi": "TypeScript में type-safe events और callbacks define करने की सुविधा कौन देती है?",
        "options_en": ["generics", "interfaces", "enums", "tuples"],
        "options_hi": ["generics", "interfaces", "enums", "tuples"],
        "answer_en": "generics",
        "answer_hi": "generics",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which TypeScript feature allows creating reusable components with type parameters?",
        "question_hi": "TypeScript में type parameters के साथ reusable components बनाने की सुविधा कौन देती है?",
        "options_en": ["generics", "interfaces", "abstract classes", "enums"],
        "options_hi": ["generics", "interfaces", "abstract classes", "enums"],
        "answer_en": "generics",
        "answer_hi": "generics",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which TypeScript feature allows constraining generics to a specific type?",
        "question_hi": "TypeScript में generics को specific type तक constrain करने की सुविधा कौन देती है?",
        "options_en": ["generic constraints", "interfaces", "abstract classes", "enums"],
        "options_hi": ["generic constraints", "interfaces", "abstract classes", "enums"],
        "answer_en": "generic constraints",
        "answer_hi": "generic constraints",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which TypeScript feature allows mapping one type to another using generics?",
        "question_hi": "TypeScript में generics का उपयोग करके एक type को दूसरे type में map करने की सुविधा कौन देती है?",
        "options_en": ["mapped types", "interfaces", "abstract classes", "enums"],
        "options_hi": ["mapped types", "interfaces", "abstract classes", "enums"],
        "answer_en": "mapped types",
        "answer_hi": "mapped types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which TypeScript feature allows defining conditional types based on other types?",
        "question_hi": "TypeScript में conditional types को अन्य types के आधार पर define करने की सुविधा कौन देती है?",
        "options_en": ["conditional types", "mapped types", "generics", "interfaces"],
        "options_hi": ["conditional types", "mapped types", "generics", "interfaces"],
        "answer_en": "conditional types",
        "answer_hi": "conditional types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which TypeScript type can represent a value that is either a string or number?",
        "question_hi": "TypeScript में ऐसा type जो string या number हो सकता है, कौन सा है?",
        "options_en": ["union type", "intersection type", "tuple", "enum"],
        "options_hi": ["union type", "intersection type", "tuple", "enum"],
        "answer_en": "union type",
        "answer_hi": "union type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which TypeScript type combines multiple types so that all must be satisfied?",
        "question_hi": "TypeScript में multiple types combine करने वाला type जो सभी satisfy हों, कौन सा है?",
        "options_en": ["intersection type", "union type", "tuple", "enum"],
        "options_hi": ["intersection type", "union type", "tuple", "enum"],
        "answer_en": "intersection type",
        "answer_hi": "intersection type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which TypeScript feature allows defining a function parameter that accepts any number of arguments?",
        "question_hi": "TypeScript में ऐसा function parameter define करने की सुविधा जो किसी भी number के arguments accept करे, कौन देती है?",
        "options_en": ["rest parameters", "default parameters", "optional parameters", "any"],
        "options_hi": ["rest parameters", "default parameters", "optional parameters", "any"],
        "answer_en": "rest parameters",
        "answer_hi": "rest parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which TypeScript feature allows a function parameter to be optional?",
        "question_hi": "TypeScript में function parameter optional बनाने की सुविधा कौन देती है?",
        "options_en": ["optional parameters", "default parameters", "rest parameters", "any"],
        "options_hi": ["optional parameters", "default parameters", "rest parameters", "any"],
        "answer_en": "optional parameters",
        "answer_hi": "optional parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which TypeScript feature allows providing a default value to a function parameter?",
        "question_hi": "TypeScript में function parameter को default value देने की सुविधा कौन देती है?",
        "options_en": ["default parameters", "optional parameters", "rest parameters", "any"],
        "options_hi": ["default parameters", "optional parameters", "rest parameters", "any"],
        "answer_en": "default parameters",
        "answer_hi": "default parameters",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which TypeScript keyword checks the type of a variable at runtime?",
        "question_hi": "TypeScript में variable का type runtime पर check करने वाला keyword कौन सा है?",
        "options_en": ["typeof", "instanceof", "keyof", "in"],
        "options_hi": ["typeof", "instanceof", "keyof", "in"],
        "answer_en": "typeof",
        "answer_hi": "typeof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which TypeScript keyword checks if an object is an instance of a class?",
        "question_hi": "TypeScript में object किसी class का instance है या नहीं check करने वाला keyword कौन सा है?",
        "options_en": ["instanceof", "typeof", "keyof", "in"],
        "options_hi": ["instanceof", "typeof", "keyof", "in"],
        "answer_en": "instanceof",
        "answer_hi": "instanceof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which TypeScript keyword checks if a property exists in an object?",
        "question_hi": "TypeScript में object में property exist करती है या नहीं check करने वाला keyword कौन सा है?",
        "options_en": ["in", "typeof", "instanceof", "keyof"],
        "options_hi": ["in", "typeof", "instanceof", "keyof"],
        "answer_en": "in",
        "answer_hi": "in",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which TypeScript feature allows narrowing a type based on a condition at runtime?",
        "question_hi": "TypeScript में runtime पर condition के आधार पर type narrow करने की सुविधा कौन देती है?",
        "options_en": ["type guards", "type assertions", "generics", "interfaces"],
        "options_hi": ["type guards", "type assertions", "generics", "interfaces"],
        "answer_en": "type guards",
        "answer_hi": "type guards",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which TypeScript feature allows asserting a type without changing runtime behavior?",
        "question_hi": "TypeScript में ऐसा type assert करने की सुविधा जो runtime behavior न बदले, कौन देती है?",
        "options_en": ["type assertions", "type guards", "generics", "interfaces"],
        "options_hi": ["type assertions", "type guards", "generics", "interfaces"],
        "answer_en": "type assertions",
        "answer_hi": "type assertions",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which TypeScript type is used for an object with unknown property keys and values?",
        "question_hi": "TypeScript में ऐसा object type जिसमें unknown property keys और values हो, कौन सा है?",
        "options_en": ["Record<string, any>", "any", "object", "unknown"],
        "options_hi": ["Record<string, any>", "any", "object", "unknown"],
        "answer_en": "Record<string, any>",
        "answer_hi": "Record<string, any>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which TypeScript type represents a value that can be either true or false?",
        "question_hi": "TypeScript में ऐसा type जो true या false हो सकता है, कौन सा है?",
        "options_en": ["boolean", "string", "number", "any"],
        "options_hi": ["boolean", "string", "number", "any"],
        "answer_en": "boolean",
        "answer_hi": "boolean",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which TypeScript type represents a fixed-length array with specific types for each element?",
        "question_hi": "TypeScript में ऐसा array type जो fixed-length हो और प्रत्येक element का type specific हो, कौन सा है?",
        "options_en": ["tuple", "array", "any[]", "readonly[]"],
        "options_hi": ["tuple", "array", "any[]", "readonly[]"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which TypeScript type allows defining a set of named constants?",
        "question_hi": "TypeScript में named constants का set define करने वाला type कौन सा है?",
        "options_en": ["enum", "tuple", "union", "interface"],
        "options_hi": ["enum", "tuple", "union", "interface"],
        "answer_en": "enum",
        "answer_hi": "enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which TypeScript feature allows extending multiple interfaces?",
        "question_hi": "TypeScript में multiple interfaces extend करने की सुविधा कौन देती है?",
        "options_en": ["interface inheritance", "class inheritance", "abstract class", "generics"],
        "options_hi": ["interface inheritance", "class inheritance", "abstract class", "generics"],
        "answer_en": "interface inheritance",
        "answer_hi": "interface inheritance",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which TypeScript feature allows defining a type for an object structure without implementation?",
        "question_hi": "TypeScript में object structure के लिए type define करने की सुविधा बिना implementation के कौन देती है?",
        "options_en": ["interface", "class", "type alias", "enum"],
        "options_hi": ["interface", "class", "type alias", "enum"],
        "answer_en": "interface",
        "answer_hi": "interface",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which TypeScript feature allows creating a new name for a type?",
        "question_hi": "TypeScript में किसी type के लिए नया नाम create करने की सुविधा कौन देती है?",
        "options_en": ["type alias", "interface", "class", "enum"],
        "options_hi": ["type alias", "interface", "class", "enum"],
        "answer_en": "type alias",
        "answer_hi": "type alias",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which TypeScript keyword defines a value that should not be reassigned?",
        "question_hi": "TypeScript में ऐसा value define करने वाला keyword जो reassigned न हो, कौन सा है?",
        "options_en": ["readonly", "const", "let", "private"],
        "options_hi": ["readonly", "const", "let", "private"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which TypeScript feature allows checking if a type is assignable to another type?",
        "question_hi": "TypeScript में यह check करने की सुविधा कि एक type दूसरे type को assign किया जा सकता है, कौन देती है?",
        "options_en": ["type compatibility", "type assertion", "type guard", "generics"],
        "options_hi": ["type compatibility", "type assertion", "type guard", "generics"],
        "answer_en": "type compatibility",
        "answer_hi": "type compatibility",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which TypeScript keyword defines an abstract class that cannot be instantiated directly?",
        "question_hi": "TypeScript में ऐसा abstract class define करने वाला keyword जो सीधे instantiate न हो, कौन सा है?",
        "options_en": ["abstract", "interface", "class", "extends"],
        "options_hi": ["abstract", "interface", "class", "extends"],
        "answer_en": "abstract",
        "answer_hi": "abstract",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which TypeScript feature allows implementing multiple interfaces in a class?",
        "question_hi": "TypeScript में class में multiple interfaces implement करने की सुविधा कौन देती है?",
        "options_en": ["implements", "extends", "abstract", "interface"],
        "options_hi": ["implements", "extends", "abstract", "interface"],
        "answer_en": "implements",
        "answer_hi": "implements",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which TypeScript type is used to represent a value that can be anything?",
        "question_hi": "TypeScript में ऐसा type जो कोई भी value represent कर सके, कौन सा है?",
        "options_en": ["any", "unknown", "object", "never"],
        "options_hi": ["any", "unknown", "object", "never"],
        "answer_en": "any",
        "answer_hi": "any",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which TypeScript type represents a value with an unknown type but enforces type checking before use?",
        "question_hi": "TypeScript में ऐसा type जो unknown value रखे लेकिन use से पहले type check करे, कौन सा है?",
        "options_en": ["unknown", "any", "object", "never"],
        "options_hi": ["unknown", "any", "object", "never"],
        "answer_en": "unknown",
        "answer_hi": "unknown",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which TypeScript feature allows defining a type that can never occur?",
        "question_hi": "TypeScript में ऐसा type define करने की सुविधा जो कभी occur न हो, कौन देती है?",
        "options_en": ["never", "void", "any", "unknown"],
        "options_hi": ["never", "void", "any", "unknown"],
        "answer_en": "never",
        "answer_hi": "never",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which TypeScript feature allows creating an immutable array?",
        "question_hi": "TypeScript में immutable array create करने की सुविधा कौन देती है?",
        "options_en": ["readonly array", "tuple", "enum", "const array"],
        "options_hi": ["readonly array", "tuple", "enum", "const array"],
        "answer_en": "readonly array",
        "answer_hi": "readonly array",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which TypeScript type represents a key of another type?",
        "question_hi": "TypeScript में ऐसा type जो किसी अन्य type की key represent करे, कौन सा है?",
        "options_en": ["keyof", "typeof", "instanceof", "in"],
        "options_hi": ["keyof", "typeof", "instanceof", "in"],
        "answer_en": "keyof",
        "answer_hi": "keyof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which TypeScript keyword allows type casting from one type to another?",
        "question_hi": "TypeScript में एक type को दूसरे type में cast करने वाला keyword कौन सा है?",
        "options_en": ["as", "typeof", "instanceof", "keyof"],
        "options_hi": ["as", "typeof", "instanceof", "keyof"],
        "answer_en": "as",
        "answer_hi": "as",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which TypeScript feature allows defining multiple overloads for a function?",
        "question_hi": "TypeScript में function के लिए multiple overloads define करने की सुविधा कौन देती है?",
        "options_en": ["function overloading", "optional parameters", "default parameters", "rest parameters"],
        "options_hi": ["function overloading", "optional parameters", "default parameters", "rest parameters"],
        "answer_en": "function overloading",
        "answer_hi": "function overloading",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which TypeScript feature allows defining a class constructor that can be called with different parameter sets?",
        "question_hi": "TypeScript में ऐसा class constructor define करने की सुविधा जो अलग-अलग parameters के साथ call हो सके, कौन देती है?",
        "options_en": ["constructor overloading", "optional parameters", "default parameters", "rest parameters"],
        "options_hi": ["constructor overloading", "optional parameters", "default parameters", "rest parameters"],
        "answer_en": "constructor overloading",
        "answer_hi": "constructor overloading",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which TypeScript feature allows defining a variable with multiple types?",
        "question_hi": "TypeScript में ऐसा variable define करने की सुविधा जो multiple types रख सके, कौन देती है?",
        "options_en": ["union types", "intersection types", "any", "unknown"],
        "options_hi": ["union types", "intersection types", "any", "unknown"],
        "answer_en": "union types",
        "answer_hi": "union types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which TypeScript feature allows combining multiple types into a single type?",
        "question_hi": "TypeScript में multiple types को single type में combine करने की सुविधा कौन देती है?",
        "options_en": ["intersection types", "union types", "tuple", "enum"],
        "options_hi": ["intersection types", "union types", "tuple", "enum"],
        "answer_en": "intersection types",
        "answer_hi": "intersection types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which TypeScript type is used for key-value pairs with known types for keys and values?",
        "question_hi": "TypeScript में ऐसा type जो key-value pairs represent करे जिनके keys और values का type known हो, कौन सा है?",
        "options_en": ["Record<K,V>", "object", "Map<K,V>", "any"],
        "options_hi": ["Record<K,V>", "object", "Map<K,V>", "any"],
        "answer_en": "Record<K,V>",
        "answer_hi": "Record<K,V>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which TypeScript feature allows creating aliases for union or intersection types?",
        "question_hi": "TypeScript में union या intersection types के लिए alias create करने की सुविधा कौन देती है?",
        "options_en": ["type alias", "interface", "enum", "class"],
        "options_hi": ["type alias", "interface", "enum", "class"],
        "answer_en": "type alias",
        "answer_hi": "type alias",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which TypeScript type represents an array with values of multiple types in order?",
        "question_hi": "TypeScript में ऐसा array type जो multiple types के values को order में रखे, कौन सा है?",
        "options_en": ["tuple", "array", "union", "any[]"],
        "options_hi": ["tuple", "array", "union", "any[]"],
        "answer_en": "tuple",
        "answer_hi": "tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which TypeScript feature allows marking a class method as static?",
        "question_hi": "TypeScript में class method को static mark करने की सुविधा कौन देती है?",
        "options_en": ["static", "readonly", "private", "protected"],
        "options_hi": ["static", "readonly", "private", "protected"],
        "answer_en": "static",
        "answer_hi": "static",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which TypeScript feature allows marking a property so it cannot be reassigned after initialization?",
        "question_hi": "TypeScript में property को mark करने की सुविधा ताकि initialization के बाद reassigned न हो, कौन देती है?",
        "options_en": ["readonly", "const", "private", "protected"],
        "options_hi": ["readonly", "const", "private", "protected"],
        "answer_en": "readonly",
        "answer_hi": "readonly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which TypeScript feature allows a class to inherit properties and methods from another class?",
        "question_hi": "TypeScript में class को दूसरी class से properties और methods inherit करने की सुविधा कौन देती है?",
        "options_en": ["extends", "implements", "interface", "abstract"],
        "options_hi": ["extends", "implements", "interface", "abstract"],
        "answer_en": "extends",
        "answer_hi": "extends",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which TypeScript feature allows defining a property with a default value in a class?",
        "question_hi": "TypeScript में class में property को default value देने की सुविधा कौन देती है?",
        "options_en": ["default property values", "optional parameters", "readonly", "static"],
        "options_hi": ["default property values", "optional parameters", "readonly", "static"],
        "answer_en": "default property values",
        "answer_hi": "default property values",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which TypeScript feature allows defining a generic interface?",
        "question_hi": "TypeScript में generic interface define करने की सुविधा कौन देती है?",
        "options_en": ["interface with generics", "type alias", "abstract class", "enum"],
        "options_hi": ["interface with generics", "type alias", "abstract class", "enum"],
        "answer_en": "interface with generics",
        "answer_hi": "interface with generics",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which TypeScript feature allows enforcing a type at compile time without runtime checks?",
        "question_hi": "TypeScript में compile time पर type enforce करने की सुविधा बिना runtime checks के कौन देती है?",
        "options_en": ["type checking", "type assertion", "type guard", "generics"],
        "options_hi": ["type checking", "type assertion", "type guard", "generics"],
        "answer_en": "type checking",
        "answer_hi": "type checking",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which TypeScript feature allows defining an interface for a function type?",
        "question_hi": "TypeScript में function type के लिए interface define करने की सुविधा कौन देती है?",
        "options_en": ["call signature in interface", "type alias", "abstract class", "enum"],
        "options_hi": ["call signature in interface", "type alias", "abstract class", "enum"],
        "answer_en": "call signature in interface",
        "answer_hi": "call signature in interface",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which TypeScript feature allows defining a tuple type with optional elements?",
        "question_hi": "TypeScript में ऐसा tuple type define करने की सुविधा जो optional elements रखे, कौन देती है?",
        "options_en": ["optional tuple elements", "readonly tuple", "union type", "enum"],
        "options_hi": ["optional tuple elements", "readonly tuple", "union type", "enum"],
        "answer_en": "optional tuple elements",
        "answer_hi": "optional tuple elements",
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