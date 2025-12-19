const questions =[
  {
    "num": 1,
    "question_en": "What is TypeScript primarily used for?",
    "question_hi": "TypeScript मुख्य रूप से किसके लिए उपयोग किया जाता है?",
    "options_en": ["Adding types to JavaScript", "Styling web pages", "Database management", "Server configuration"],
    "options_hi": ["JavaScript में types जोड़ने के लिए", "वेब पेज स्टाइल करने के लिए", "डेटाबेस प्रबंधन के लिए", "सर्वर कॉन्फ़िगरेशन के लिए"],
    "answer_en": "Adding types to JavaScript",
    "answer_hi": "JavaScript में types जोड़ने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which TypeScript feature allows defining variable types?",
    "question_hi": "कौन सा TypeScript feature variable के types define करने देता है?",
    "options_en": ["Type annotations", "Modules", "Interfaces", "Enums"],
    "options_hi": ["Type annotations", "Modules", "Interfaces", "Enums"],
    "answer_en": "Type annotations",
    "answer_hi": "Type annotations",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which keyword declares a variable that cannot be reassigned?",
    "question_hi": "कौन सा keyword variable declare करने के लिए है जिसे reassigned नहीं किया जा सकता?",
    "options_en": ["const", "let", "var", "readonly"],
    "options_hi": ["const", "let", "var", "readonly"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which TypeScript type allows any type of value but with type checking disabled?",
    "question_hi": "कौन सा TypeScript type किसी भी type का value hold करता है लेकिन type checking को disable करता है?",
    "options_en": ["any", "unknown", "never", "void"],
    "options_hi": ["any", "unknown", "never", "void"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which TypeScript type is safer than 'any' but allows dynamic values?",
    "question_hi": "कौन सा TypeScript type 'any' से safer है लेकिन dynamic values allow करता है?",
    "options_en": ["unknown", "any", "void", "never"],
    "options_hi": ["unknown", "any", "void", "never"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which keyword declares a variable that can be reassigned within block scope?",
    "question_hi": "कौन सा keyword block scope में reassigned होने वाला variable declare करता है?",
    "options_en": ["let", "const", "var", "readonly"],
    "options_hi": ["let", "const", "var", "readonly"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which TypeScript type represents a function that never returns?",
    "question_hi": "कौन सा TypeScript type function को represent करता है जो कभी return नहीं करता?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which TypeScript type represents a function that does not return any value?",
    "question_hi": "कौन सा TypeScript type function को represent करता है जो कोई value return नहीं करता?",
    "options_en": ["void", "never", "any", "unknown"],
    "options_hi": ["void", "never", "any", "unknown"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which TypeScript keyword is used to define an interface?",
    "question_hi": "कौन सा TypeScript keyword interface define करने के लिए है?",
    "options_en": ["interface", "type", "class", "abstract"],
    "options_hi": ["interface", "type", "class", "abstract"],
    "answer_en": "interface",
    "answer_hi": "interface",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which TypeScript keyword allows a class to implement an interface?",
    "question_hi": "कौन सा TypeScript keyword class को interface implement करने देता है?",
    "options_en": ["implements", "extends", "abstract", "interface"],
    "options_hi": ["implements", "extends", "abstract", "interface"],
    "answer_en": "implements",
    "answer_hi": "implements",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which keyword is used for class inheritance?",
    "question_hi": "Class inheritance के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["extends", "implements", "inherits", "super"],
    "options_hi": ["extends", "implements", "inherits", "super"],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which TypeScript feature allows aliasing a union of literal types?",
    "question_hi": "कौन सा feature literal types के union को alias करने देता है?",
    "options_en": ["type alias", "interface", "enum", "class"],
    "options_hi": ["type alias", "interface", "enum", "class"],
    "answer_en": "type alias",
    "answer_hi": "type alias",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which TypeScript feature allows creating readonly properties?",
    "question_hi": "कौन सा feature readonly properties बनाने देता है?",
    "options_en": ["readonly", "const", "final", "immutable"],
    "options_hi": ["readonly", "const", "final", "immutable"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which keyword is used to create enumerated types?",
    "question_hi": "Enumerated types बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["enum", "type", "interface", "class"],
    "options_hi": ["enum", "type", "interface", "class"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which TypeScript keyword defines a constant variable?",
    "question_hi": "कौन सा TypeScript keyword constant variable define करता है?",
    "options_en": ["const", "let", "var", "readonly"],
    "options_hi": ["const", "let", "var", "readonly"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which TypeScript type allows creating fixed length arrays with known types?",
    "question_hi": "कौन सा TypeScript type fixed length array with known types बनाता है?",
    "options_en": ["tuple", "array", "any", "unknown"],
    "options_hi": ["tuple", "array", "any", "unknown"],
    "answer_en": "tuple",
    "answer_hi": "tuple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which TypeScript type allows a variable to accept multiple types using |?",
    "question_hi": "कौन सा TypeScript type variable को multiple types accept करने देता है using |?",
    "options_en": ["union type", "intersection type", "any", "unknown"],
    "options_hi": ["union type", "intersection type", "any", "unknown"],
    "answer_en": "union type",
    "answer_hi": "union type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which TypeScript type allows creating a new type by combining types using &?",
    "question_hi": "कौन सा TypeScript type types को & के साथ combine करके नया type बनाता है?",
    "options_en": ["intersection type", "union type", "any", "unknown"],
    "options_hi": ["intersection type", "union type", "any", "unknown"],
    "answer_en": "intersection type",
    "answer_hi": "intersection type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which TypeScript utility type makes all properties optional?",
    "question_hi": "कौन सा TypeScript utility type सभी properties को optional बनाता है?",
    "options_en": ["Partial", "Required", "Readonly", "Pick"],
    "options_hi": ["Partial", "Required", "Readonly", "Pick"],
    "answer_en": "Partial",
    "answer_hi": "Partial",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which TypeScript utility type makes all properties required?",
    "question_hi": "कौन सा TypeScript utility type सभी properties को required बनाता है?",
    "options_en": ["Required", "Partial", "Readonly", "Pick"],
    "options_hi": ["Required", "Partial", "Readonly", "Pick"],
    "answer_en": "Required",
    "answer_hi": "Required",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which TypeScript utility type converts all properties to read-only?",
    "question_hi": "कौन सा TypeScript utility type सभी properties को read-only बनाता है?",
    "options_en": ["Readonly", "Partial", "Required", "Pick"],
    "options_hi": ["Readonly", "Partial", "Required", "Pick"],
    "answer_en": "Readonly",
    "answer_hi": "Readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which TypeScript utility type removes 'null' and 'undefined' from a type?",
    "question_hi": "कौन सा TypeScript utility type किसी type से 'null' और 'undefined' हटा देता है?",
    "options_en": ["NonNullable", "Partial", "Required", "Readonly"],
    "options_hi": ["NonNullable", "Partial", "Required", "Readonly"],
    "answer_en": "NonNullable",
    "answer_hi": "NonNullable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which TypeScript utility type constructs a new type by picking certain keys from T?",
    "question_hi": "कौन सा TypeScript utility type T से कुछ keys चुनकर नया type बनाता है?",
    "options_en": ["Pick", "Omit", "Partial", "Required"],
    "options_hi": ["Pick", "Omit", "Partial", "Required"],
    "answer_en": "Pick",
    "answer_hi": "Pick",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which TypeScript utility type constructs a new type by omitting certain keys from T?",
    "question_hi": "कौन सा TypeScript utility type T से कुछ keys हटाकर नया type बनाता है?",
    "options_en": ["Omit", "Pick", "Partial", "Required"],
    "options_hi": ["Omit", "Pick", "Partial", "Required"],
    "answer_en": "Omit",
    "answer_hi": "Omit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which keyword declares an asynchronous function?",
    "question_hi": "कौन सा keyword asynchronous function declare करता है?",
    "options_en": ["async", "await", "function", "promise"],
    "options_hi": ["async", "await", "function", "promise"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which keyword pauses execution inside an async function?",
    "question_hi": "कौन सा keyword async function के अंदर execution को रोकता है?",
    "options_en": ["await", "async", "pause", "stop"],
    "options_hi": ["await", "async", "pause", "stop"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which TypeScript type represents a variable that can hold any value?",
    "question_hi": "कौन सा TypeScript type variable को किसी भी value hold करने देता है?",
    "options_en": ["any", "unknown", "never", "void"],
    "options_hi": ["any", "unknown", "never", "void"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which TypeScript type represents a variable with a type not known at compile time?",
    "question_hi": "कौन सा TypeScript type variable को represent करता है जिसका type compile time पर unknown है?",
    "options_en": ["unknown", "any", "never", "void"],
    "options_hi": ["unknown", "any", "never", "void"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which TypeScript type never occurs, usually used for functions that never return?",
    "question_hi": "कौन सा TypeScript type कभी occur नहीं होता, usually उन functions के लिए use होता है जो कभी return नहीं करते?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which TypeScript type is used for a function that does not return a value?",
    "question_hi": "कौन सा TypeScript type function के लिए use होता है जो कोई value return नहीं करता?",
    "options_en": ["void", "never", "any", "unknown"],
    "options_hi": ["void", "never", "any", "unknown"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which keyword declares a module in TypeScript?",
    "question_hi": "कौन सा keyword TypeScript में module declare करने के लिए है?",
    "options_en": ["module", "namespace", "package", "import"],
    "options_hi": ["module", "namespace", "package", "import"],
    "answer_en": "module",
    "answer_hi": "module",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which keyword is used to import modules in TypeScript?",
    "question_hi": "कौन सा keyword TypeScript में modules import करने के लिए है?",
    "options_en": ["import", "export", "require", "module"],
    "options_hi": ["import", "export", "require", "module"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which keyword declares a type alias in TypeScript?",
    "question_hi": "कौन सा keyword TypeScript में type alias declare करता है?",
    "options_en": ["type", "interface", "enum", "class"],
    "options_hi": ["type", "interface", "enum", "class"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which TypeScript keyword declares a class?",
    "question_hi": "कौन सा TypeScript keyword class declare करता है?",
    "options_en": ["class", "interface", "type", "enum"],
    "options_hi": ["class", "interface", "type", "enum"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which keyword allows a class to extend another class in TypeScript?",
    "question_hi": "कौन सा keyword TypeScript में class को extend करने देता है?",
    "options_en": ["extends", "implements", "inherits", "super"],
    "options_hi": ["extends", "implements", "inherits", "super"],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which keyword allows a class to implement an interface in TypeScript?",
    "question_hi": "कौन सा keyword TypeScript में class को interface implement करने देता है?",
    "options_en": ["implements", "extends", "abstract", "interface"],
    "options_hi": ["implements", "extends", "abstract", "interface"],
    "answer_en": "implements",
    "answer_hi": "implements",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which TypeScript feature allows creating generic classes or functions?",
    "question_hi": "कौन सा TypeScript feature generic classes या functions बनाने देता है?",
    "options_en": ["generics", "any", "union type", "intersection type"],
    "options_hi": ["generics", "any", "union type", "intersection type"],
    "answer_en": "generics",
    "answer_hi": "generics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which TypeScript type represents a function parameter that can be multiple types?",
    "question_hi": "कौन सा TypeScript type function parameter को represent करता है जो multiple types हो सकता है?",
    "options_en": ["union type", "intersection type", "any", "unknown"],
    "options_hi": ["union type", "intersection type", "any", "unknown"],
    "answer_en": "union type",
    "answer_hi": "union type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which TypeScript type represents a function combining multiple types using &?",
    "question_hi": "कौन सा TypeScript type function को represent करता है जो multiple types & के साथ combine करता है?",
    "options_en": ["intersection type", "union type", "any", "unknown"],
    "options_hi": ["intersection type", "union type", "any", "unknown"],
    "answer_en": "intersection type",
    "answer_hi": "intersection type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which TypeScript type omits selected properties from an object?",
    "question_hi": "कौन सा type object से चुनी हुई properties को हटाता है?",
    "options_en": ["Omit", "Pick", "Partial", "Record"],
    "options_hi": ["Omit", "Pick", "Partial", "Record"],
    "answer_en": "Omit",
    "answer_hi": "Omit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which TypeScript utility type creates a new type from a set of keys?",
    "question_hi": "कौन सा TypeScript utility type keys से नया type बनाता है?",
    "options_en": ["Pick", "Omit", "Partial", "Required"],
    "options_hi": ["Pick", "Omit", "Partial", "Required"],
    "answer_en": "Pick",
    "answer_hi": "Pick",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which TypeScript utility type ensures a property cannot be changed?",
    "question_hi": "कौन सा TypeScript utility type property को change होने से रोकता है?",
    "options_en": ["Readonly", "Partial", "Required", "Pick"],
    "options_hi": ["Readonly", "Partial", "Required", "Pick"],
    "answer_en": "Readonly",
    "answer_hi": "Readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which TypeScript keyword declares a generic parameter?",
    "question_hi": "कौन सा TypeScript keyword generic parameter declare करता है?",
    "options_en": ["<T>", "extends", "implements", "type"],
    "options_hi": ["<T>", "extends", "implements", "type"],
    "answer_en": "<T>",
    "answer_hi": "<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which TypeScript utility type removes 'null' and 'undefined' from a type?",
    "question_hi": "कौन सा TypeScript utility type किसी type से 'null' और 'undefined' हटाता है?",
    "options_en": ["NonNullable", "Partial", "Required", "Readonly"],
    "options_hi": ["NonNullable", "Partial", "Required", "Readonly"],
    "answer_en": "NonNullable",
    "answer_hi": "NonNullable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which TypeScript utility type constructs a type with all optional properties?",
    "question_hi": "कौन सा TypeScript utility type सभी properties को optional बनाता है?",
    "options_en": ["Partial", "Required", "Readonly", "Pick"],
    "options_hi": ["Partial", "Required", "Readonly", "Pick"],
    "answer_en": "Partial",
    "answer_hi": "Partial",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which TypeScript utility type constructs a type with all required properties?",
    "question_hi": "कौन सा TypeScript utility type सभी properties को required बनाता है?",
    "options_en": ["Required", "Partial", "Readonly", "Pick"],
    "options_hi": ["Required", "Partial", "Readonly", "Pick"],
    "answer_en": "Required",
    "answer_hi": "Required",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which keyword allows a class method to call its parent class method?",
    "question_hi": "कौन सा keyword class method को parent class method call करने देता है?",
    "options_en": ["super", "this", "extends", "implements"],
    "options_hi": ["super", "this", "extends", "implements"],
    "answer_en": "super",
    "answer_hi": "super",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which TypeScript keyword allows creating a read-only array?",
    "question_hi": "कौन सा TypeScript keyword read-only array बनाने देता है?",
    "options_en": ["readonly", "const", "let", "final"],
    "options_hi": ["readonly", "const", "let", "final"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which TypeScript feature allows using types across multiple files?",
    "question_hi": "कौन सा TypeScript feature types को multiple files में use करने देता है?",
    "options_en": ["export/import", "namespace", "module", "interface"],
    "options_hi": ["export/import", "namespace", "module", "interface"],
    "answer_en": "export/import",
    "answer_hi": "export/import",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which TypeScript keyword declares an abstract class?",
    "question_hi": "कौन सा TypeScript keyword abstract class declare करता है?",
    "options_en": ["abstract", "class", "interface", "type"],
    "options_hi": ["abstract", "class", "interface", "type"],
    "answer_en": "abstract",
    "answer_hi": "abstract",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Which keyword allows declaring optional properties in an interface?",
    "question_hi": "कौन सा keyword interface में optional properties declare करने देता है?",
    "options_en": ["?", "optional", "readonly", "partial"],
    "options_hi": ["?", "optional", "readonly", "partial"],
    "answer_en": "?",
    "answer_hi": "?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which TypeScript feature allows function overloading?",
    "question_hi": "कौन सा TypeScript feature function overloading की अनुमति देता है?",
    "options_en": ["function signatures", "interfaces", "classes", "generics"],
    "options_hi": ["function signatures", "interfaces", "classes", "generics"],
    "answer_en": "function signatures",
    "answer_hi": "function signatures",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which TypeScript type represents an object with keys of type string and values of type number?",
    "question_hi": "कौन सा TypeScript type object को represent करता है जिसकी keys string और values number type की हों?",
    "options_en": ["Record<string, number>", "Map<string, number>", "object", "any"],
    "options_hi": ["Record<string, number>", "Map<string, number>", "object", "any"],
    "answer_en": "Record<string, number>",
    "answer_hi": "Record<string, number>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which TypeScript utility type converts all properties of T to optional and read-only?",
    "question_hi": "कौन सा TypeScript utility type T की सभी properties को optional और read-only बनाता है?",
    "options_en": ["Partial & Readonly", "Required & Readonly", "Pick & Omit", "Readonly"],
    "options_hi": ["Partial & Readonly", "Required & Readonly", "Pick & Omit", "Readonly"],
    "answer_en": "Partial & Readonly",
    "answer_hi": "Partial & Readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Which TypeScript keyword allows aliasing a union of literal types?",
    "question_hi": "कौन सा feature literal types के union को alias करने देता है?",
    "options_en": ["type alias", "interface", "enum", "class"],
    "options_hi": ["type alias", "interface", "enum", "class"],
    "answer_en": "type alias",
    "answer_hi": "type alias",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Which TypeScript keyword prevents a class from being instantiated directly?",
    "question_hi": "कौन सा TypeScript keyword class को directly instantiate होने से रोकता है?",
    "options_en": ["abstract", "readonly", "private", "final"],
    "options_hi": ["abstract", "readonly", "private", "final"],
    "answer_en": "abstract",
    "answer_hi": "abstract",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which TypeScript feature allows enforcing type constraints on generic types?",
    "question_hi": "कौन सा TypeScript feature generic types पर type constraints enforce करने देता है?",
    "options_en": ["extends", "implements", "interface", "type"],
    "options_hi": ["extends", "implements", "interface", "type"],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which TypeScript type represents the combination of multiple types into one?",
    "question_hi": "कौन सा TypeScript type multiple types को combine करके एक type बनाता है?",
    "options_en": ["intersection type", "union type", "any", "unknown"],
    "options_hi": ["intersection type", "union type", "any", "unknown"],
    "answer_en": "intersection type",
    "answer_hi": "intersection type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which TypeScript keyword allows marking class members as private?",
    "question_hi": "कौन सा TypeScript keyword class members को private mark करने देता है?",
    "options_en": ["private", "protected", "public", "readonly"],
    "options_hi": ["private", "protected", "public", "readonly"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which TypeScript keyword allows marking class members as protected?",
    "question_hi": "कौन सा TypeScript keyword class members को protected mark करने देता है?",
    "options_en": ["protected", "private", "public", "readonly"],
    "options_hi": ["protected", "private", "public", "readonly"],
    "answer_en": "protected",
    "answer_hi": "protected",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Which TypeScript type represents an object whose keys are strings and values can be of any type?",
    "question_hi": "कौन सा TypeScript type object को represent करता है जिसकी keys string और values किसी भी type की हो सकती हैं?",
    "options_en": ["Record<string, any>", "object", "Map<string, any>", "any"],
    "options_hi": ["Record<string, any>", "object", "Map<string, any>", "any"],
    "answer_en": "Record<string, any>",
    "answer_hi": "Record<string, any>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which TypeScript feature allows specifying default values for function parameters?",
    "question_hi": "कौन सा TypeScript feature function parameters के लिए default values specify करने देता है?",
    "options_en": ["default parameters", "optional parameters", "rest parameters", "any"],
    "options_hi": ["default parameters", "optional parameters", "rest parameters", "any"],
    "answer_en": "default parameters",
    "answer_hi": "default parameters",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which TypeScript feature allows a function to accept an arbitrary number of arguments?",
    "question_hi": "कौन सा TypeScript feature function को arbitrary number of arguments accept करने देता है?",
    "options_en": ["rest parameters", "optional parameters", "default parameters", "any"],
    "options_hi": ["rest parameters", "optional parameters", "default parameters", "any"],
    "answer_en": "rest parameters",
    "answer_hi": "rest parameters",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which TypeScript keyword declares a variable that cannot be reassigned?",
    "question_hi": "कौन सा TypeScript keyword variable declare करता है जिसे reassigned नहीं किया जा सकता?",
    "options_en": ["const", "let", "var", "readonly"],
    "options_hi": ["const", "let", "var", "readonly"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which TypeScript feature allows defining types for function return values?",
    "question_hi": "कौन सा TypeScript feature function return values के लिए types define करने देता है?",
    "options_en": ["return type annotations", "interface", "class", "enum"],
    "options_hi": ["return type annotations", "interface", "class", "enum"],
    "answer_en": "return type annotations",
    "answer_hi": "return type annotations",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Which TypeScript keyword defines an enumeration?",
    "question_hi": "कौन सा TypeScript keyword enumeration define करता है?",
    "options_en": ["enum", "type", "interface", "class"],
    "options_hi": ["enum", "type", "interface", "class"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which TypeScript type allows assigning either a number or a string?",
    "question_hi": "कौन सा TypeScript type number या string assign करने देता है?",
    "options_en": ["union type", "intersection type", "any", "unknown"],
    "options_hi": ["union type", "intersection type", "any", "unknown"],
    "answer_en": "union type",
    "answer_hi": "union type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which TypeScript keyword allows creating a class that cannot be extended?",
    "question_hi": "कौन सा TypeScript keyword class को extend होने से रोकता है?",
    "options_en": ["final", "abstract", "readonly", "private"],
    "options_hi": ["final", "abstract", "readonly", "private"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which TypeScript type represents any non-nullish value?",
    "question_hi": "कौन सा TypeScript type किसी भी non-nullish value को represent करता है?",
    "options_en": ["NonNullable<T>", "Partial<T>", "Required<T>", "Readonly<T>"],
    "options_hi": ["NonNullable<T>", "Partial<T>", "Required<T>", "Readonly<T>"],
    "answer_en": "NonNullable<T>",
    "answer_hi": "NonNullable<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which TypeScript keyword is used to define a type that can be extended?",
    "question_hi": "कौन सा TypeScript keyword type को extendable बनाने के लिए use होता है?",
    "options_en": ["interface", "type", "class", "enum"],
    "options_hi": ["interface", "type", "class", "enum"],
    "answer_en": "interface",
    "answer_hi": "interface",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "Which TypeScript utility type makes all properties of a type required?",
    "question_hi": "कौन सा TypeScript utility type किसी type की सभी properties को required बनाता है?",
    "options_en": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T>"],
    "options_hi": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T>"],
    "answer_en": "Required<T>",
    "answer_hi": "Required<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which TypeScript feature allows restricting the type of elements in an array?",
    "question_hi": "कौन सा TypeScript feature array में elements के type को restrict करता है?",
    "options_en": ["generics", "union types", "interfaces", "any"],
    "options_hi": ["generics", "union types", "interfaces", "any"],
    "answer_en": "generics",
    "answer_hi": "generics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which TypeScript type allows representing any value but disables most type-checking?",
    "question_hi": "कौन सा TypeScript type किसी भी value को represent करता है लेकिन अधिकतर type-checking disable करता है?",
    "options_en": ["any", "unknown", "never", "void"],
    "options_hi": ["any", "unknown", "never", "void"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which TypeScript type is safer than 'any' because it forces type checking before usage?",
    "question_hi": "कौन सा TypeScript type 'any' से safer है क्योंकि यह usage से पहले type checking force करता है?",
    "options_en": ["unknown", "any", "never", "void"],
    "options_hi": ["unknown", "any", "never", "void"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which TypeScript type represents a function that never returns?",
    "question_hi": "कौन सा TypeScript type ऐसे function को represent करता है जो कभी return नहीं करता?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Which TypeScript feature allows mapping types from one type to another?",
    "question_hi": "कौन सा TypeScript feature types को एक type से दूसरे type में map करने देता है?",
    "options_en": ["mapped types", "conditional types", "generics", "interfaces"],
    "options_hi": ["mapped types", "conditional types", "generics", "interfaces"],
    "answer_en": "mapped types",
    "answer_hi": "mapped types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which TypeScript feature allows creating types based on conditions?",
    "question_hi": "कौन सा TypeScript feature conditions के आधार पर types बनाने देता है?",
    "options_en": ["conditional types", "mapped types", "generics", "interfaces"],
    "options_hi": ["conditional types", "mapped types", "generics", "interfaces"],
    "answer_en": "conditional types",
    "answer_hi": "conditional types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which TypeScript keyword allows restricting values to a set of literals?",
    "question_hi": "कौन सा TypeScript keyword values को एक set of literals तक restrict करता है?",
    "options_en": ["literal types", "enum", "interface", "type alias"],
    "options_hi": ["literal types", "enum", "interface", "type alias"],
    "answer_en": "literal types",
    "answer_hi": "literal types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which TypeScript feature allows creating an object with keys from a union type?",
    "question_hi": "कौन सा TypeScript feature union type से keys वाले object बनाने देता है?",
    "options_en": ["Record", "Pick", "Omit", "Partial"],
    "options_hi": ["Record", "Pick", "Omit", "Partial"],
    "answer_en": "Record",
    "answer_hi": "Record",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which TypeScript keyword allows defining an index signature in a type?",
    "question_hi": "कौन सा TypeScript keyword type में index signature define करने देता है?",
    "options_en": ["[key: string]: type", "interface", "type", "enum"],
    "options_hi": ["[key: string]: type", "interface", "type", "enum"],
    "answer_en": "[key: string]: type",
    "answer_hi": "[key: string]: type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Which TypeScript keyword pauses execution inside an async function?",
    "question_hi": "कौन सा keyword async function के अंदर execution को रोकता है?",
    "options_en": ["await", "async", "pause", "stop"],
    "options_hi": ["await", "async", "pause", "stop"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which TypeScript keyword declares a variable whose type cannot be changed?",
    "question_hi": "कौन सा TypeScript keyword variable declare करता है जिसकी type change नहीं हो सकती?",
    "options_en": ["const", "let", "var", "readonly"],
    "options_hi": ["const", "let", "var", "readonly"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Which TypeScript keyword declares a function that returns nothing?",
    "question_hi": "कौन सा TypeScript keyword function declare करता है जो कुछ return नहीं करता?",
    "options_en": ["void", "never", "any", "unknown"],
    "options_hi": ["void", "never", "any", "unknown"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which TypeScript keyword declares a function that never completes normally?",
    "question_hi": "कौन सा TypeScript keyword function declare करता है जो normal तरीके से complete नहीं होता?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which TypeScript feature allows defining multiple possible types for a variable?",
    "question_hi": "कौन सा TypeScript feature variable के लिए multiple possible types define करने देता है?",
    "options_en": ["union types", "intersection types", "generics", "any"],
    "options_hi": ["union types", "intersection types", "generics", "any"],
    "answer_en": "union types",
    "answer_hi": "union types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Which TypeScript feature allows combining multiple types into one?",
    "question_hi": "कौन सा TypeScript feature multiple types को combine करके एक type बनाता है?",
    "options_en": ["intersection types", "union types", "any", "unknown"],
    "options_hi": ["intersection types", "union types", "any", "unknown"],
    "answer_en": "intersection types",
    "answer_hi": "intersection types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which TypeScript keyword defines a constructor parameter as a member of the class?",
    "question_hi": "कौन सा TypeScript keyword constructor parameter को class का member बनाता है?",
    "options_en": ["public", "private", "protected", "readonly"],
    "options_hi": ["public", "private", "protected", "readonly"],
    "answer_en": "public",
    "answer_hi": "public",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which TypeScript feature allows extracting a subset of properties from a type?",
    "question_hi": "कौन सा TypeScript feature type से कुछ selected properties extract करने देता है?",
    "options_en": ["Pick", "Omit", "Partial", "Required"],
    "options_hi": ["Pick", "Omit", "Partial", "Required"],
    "answer_en": "Pick",
    "answer_hi": "Pick",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which TypeScript feature removes selected properties from a type?",
    "question_hi": "कौन सा TypeScript feature type से selected properties remove करता है?",
    "options_en": ["Omit", "Pick", "Partial", "Required"],
    "options_hi": ["Omit", "Pick", "Partial", "Required"],
    "answer_en": "Omit",
    "answer_hi": "Omit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which TypeScript keyword declares a readonly class property?",
    "question_hi": "कौन सा TypeScript keyword readonly class property declare करता है?",
    "options_en": ["readonly", "const", "private", "protected"],
    "options_hi": ["readonly", "const", "private", "protected"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Which TypeScript feature allows combining types conditionally based on another type?",
    "question_hi": "कौन सा TypeScript feature types को conditionally combine करने देता है?",
    "options_en": ["conditional types", "mapped types", "generics", "union types"],
    "options_hi": ["conditional types", "mapped types", "generics", "union types"],
    "answer_en": "conditional types",
    "answer_hi": "conditional types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which TypeScript keyword allows importing types from other files?",
    "question_hi": "कौन सा TypeScript keyword types को अन्य files से import करने देता है?",
    "options_en": ["import", "export", "require", "include"],
    "options_hi": ["import", "export", "require", "include"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which TypeScript keyword allows exporting types to be used in other files?",
    "question_hi": "कौन सा TypeScript keyword types को अन्य files में use करने के लिए export करता है?",
    "options_en": ["export", "import", "require", "include"],
    "options_hi": ["export", "import", "require", "include"],
    "answer_en": "export",
    "answer_hi": "export",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which TypeScript type represents a constructor of a class?",
    "question_hi": "कौन सा TypeScript type class का constructor represent करता है?",
    "options_en": ["new () => T", "T", "any", "unknown"],
    "options_hi": ["new () => T", "T", "any", "unknown"],
    "answer_en": "new () => T",
    "answer_hi": "new () => T",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which TypeScript type represents an array of unknown length and type?",
    "question_hi": "कौन सा TypeScript type unknown length और type वाले array को represent करता है?",
    "options_en": ["any[]", "Array<any>", "unknown[]", "Array<unknown>"],
    "options_hi": ["any[]", "Array<any>", "unknown[]", "Array<unknown>"],
    "answer_en": "unknown[]",
    "answer_hi": "unknown[]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Which TypeScript type represents a function signature?",
    "question_hi": "कौन सा TypeScript type function signature represent करता है?",
    "options_en": ["(arg: T) => U", "function", "any", "unknown"],
    "options_hi": ["(arg: T) => U", "function", "any", "unknown"],
    "answer_en": "(arg: T) => U",
    "answer_hi": "(arg: T) => U",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which TypeScript keyword allows a class to implement multiple interfaces?",
    "question_hi": "कौन सा TypeScript keyword class को multiple interfaces implement करने देता है?",
    "options_en": ["implements", "extends", "interface", "type"],
    "options_hi": ["implements", "extends", "interface", "type"],
    "answer_en": "implements",
    "answer_hi": "implements",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which TypeScript feature allows type narrowing using conditional checks?",
    "question_hi": "कौन सा TypeScript feature conditional checks के जरिए type narrowing करता है?",
    "options_en": ["type guards", "interfaces", "generics", "union types"],
    "options_hi": ["type guards", "interfaces", "generics", "union types"],
    "answer_en": "type guards",
    "answer_hi": "type guards",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which TypeScript feature allows asserting a variable as a specific type?",
    "question_hi": "कौन सा TypeScript feature variable को specific type के रूप में assert करने देता है?",
    "options_en": ["type assertion", "interface", "type alias", "generics"],
    "options_hi": ["type assertion", "interface", "type alias", "generics"],
    "answer_en": "type assertion",
    "answer_hi": "type assertion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which TypeScript keyword pauses execution inside an async function?",
    "question_hi": "कौन सा keyword async function के अंदर execution को रोकता है?",
    "options_en": ["await", "async", "pause", "stop"],
    "options_hi": ["await", "async", "pause", "stop"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  
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