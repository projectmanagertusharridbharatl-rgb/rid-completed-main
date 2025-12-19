const questions =[
  {
    "num": 1,
    "question_en": "Which TypeScript keyword is used to declare a variable that cannot be reassigned?",
    "question_hi": "कौन सा TypeScript keyword variable को reassignment से रोकता है?",
    "options_en": ["const", "let", "var", "readonly"],
    "options_hi": ["const", "let", "var", "readonly"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which TypeScript type represents values that will never occur?",
    "question_hi": "कौन सा TypeScript type उन values को represent करता है जो कभी occur नहीं होंगी?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which TypeScript type represents a function that returns nothing?",
    "question_hi": "कौन सा TypeScript type उस function के लिए है जो कुछ return नहीं करता?",
    "options_en": ["void", "never", "any", "unknown"],
    "options_hi": ["void", "never", "any", "unknown"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which TypeScript feature allows defining multiple possible types for a variable?",
    "question_hi": "कौन सा TypeScript feature variable के लिए multiple possible types define करने देता है?",
    "options_en": ["union type", "intersection type", "tuple", "enum"],
    "options_hi": ["union type", "intersection type", "tuple", "enum"],
    "answer_en": "union type",
    "answer_hi": "union type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which TypeScript feature combines multiple types into one using &?",
    "question_hi": "कौन सा TypeScript feature multiple types को & के माध्यम से combine करता है?",
    "options_en": ["intersection type", "union type", "tuple", "any"],
    "options_hi": ["intersection type", "union type", "tuple", "any"],
    "answer_en": "intersection type",
    "answer_hi": "intersection type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which TypeScript feature allows defining a contract for objects and classes?",
    "question_hi": "कौन सा TypeScript feature objects और classes के लिए contract define करता है?",
    "options_en": ["interface", "type alias", "class", "enum"],
    "options_hi": ["interface", "type alias", "class", "enum"],
    "answer_en": "interface",
    "answer_hi": "interface",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which TypeScript feature allows creating a new type by picking specific properties of an existing type?",
    "question_hi": "कौन सा TypeScript feature existing type की specific properties को चुनकर नया type बनाता है?",
    "options_en": ["Pick", "Omit", "Partial", "Required"],
    "options_hi": ["Pick", "Omit", "Partial", "Required"],
    "answer_en": "Pick",
    "answer_hi": "Pick",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which TypeScript feature allows creating a new type by omitting certain properties from an existing type?",
    "question_hi": "कौन सा TypeScript feature existing type में से कुछ properties को हटाकर नया type बनाता है?",
    "options_en": ["Omit", "Pick", "Partial", "Readonly"],
    "options_hi": ["Omit", "Pick", "Partial", "Readonly"],
    "answer_en": "Omit",
    "answer_hi": "Omit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which TypeScript utility type makes all properties of T optional?",
    "question_hi": "कौन सा TypeScript utility type T की सभी properties को optional बनाता है?",
    "options_en": ["Partial", "Required", "Readonly", "Pick"],
    "options_hi": ["Partial", "Required", "Readonly", "Pick"],
    "answer_en": "Partial",
    "answer_hi": "Partial",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which TypeScript utility type makes all properties of T required?",
    "question_hi": "कौन सा TypeScript utility type T की सभी properties को required बनाता है?",
    "options_en": ["Required", "Partial", "Readonly", "Pick"],
    "options_hi": ["Required", "Partial", "Readonly", "Pick"],
    "answer_en": "Required",
    "answer_hi": "Required",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which TypeScript utility type makes all properties of T readonly?",
    "question_hi": "कौन सा TypeScript utility type T की सभी properties को readonly बनाता है?",
    "options_en": ["Readonly", "Partial", "Required", "Pick"],
    "options_hi": ["Readonly", "Partial", "Required", "Pick"],
    "answer_en": "Readonly",
    "answer_hi": "Readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which TypeScript feature allows a class to inherit from another class?",
    "question_hi": "कौन सा TypeScript feature class को दूसरी class से inherit करने देता है?",
    "options_en": ["extends", "implements", "override", "super"],
    "options_hi": ["extends", "implements", "override", "super"],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which keyword allows a class to implement an interface?",
    "question_hi": "कौन सा keyword class को interface implement करने देता है?",
    "options_en": ["implements", "extends", "override", "interface"],
    "options_hi": ["implements", "extends", "override", "interface"],
    "answer_en": "implements",
    "answer_hi": "implements",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which keyword allows calling a parent class method in a derived class?",
    "question_hi": "कौन सा keyword derived class में parent class के method को call करने देता है?",
    "options_en": ["super", "this", "extends", "override"],
    "options_hi": ["super", "this", "extends", "override"],
    "answer_en": "super",
    "answer_hi": "super",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which keyword allows marking a property as read-only in a class?",
    "question_hi": "कौन सा keyword class में property को read-only mark करने के लिए उपयोग होता है?",
    "options_en": ["readonly", "const", "private", "protected"],
    "options_hi": ["readonly", "const", "private", "protected"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which TypeScript keyword is used to declare a variable that can be reassigned?",
    "question_hi": "कौन सा TypeScript keyword variable को reassignment की अनुमति देता है?",
    "options_en": ["let", "const", "var", "readonly"],
    "options_hi": ["let", "const", "var", "readonly"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which TypeScript type can hold any value but requires type checking before use?",
    "question_hi": "कौन सा TypeScript type किसी भी value को hold कर सकता है लेकिन use से पहले type check करनी होती है?",
    "options_en": ["unknown", "any", "void", "never"],
    "options_hi": ["unknown", "any", "void", "never"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which TypeScript keyword defines an abstract method in a class?",
    "question_hi": "कौन सा TypeScript keyword class में abstract method define करता है?",
    "options_en": ["abstract", "override", "virtual", "implements"],
    "options_hi": ["abstract", "override", "virtual", "implements"],
    "answer_en": "abstract",
    "answer_hi": "abstract",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which TypeScript keyword allows pausing execution inside an async function?",
    "question_hi": "कौन सा TypeScript keyword async function के अंदर execution को रोकता है?",
    "options_en": ["await", "async", "pause", "stop"],
    "options_hi": ["await", "async", "pause", "stop"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which TypeScript keyword is used to declare an asynchronous function?",
    "question_hi": "कौन सा TypeScript keyword asynchronous function declare करने के लिए उपयोग होता है?",
    "options_en": ["async", "await", "function", "promise"],
    "options_hi": ["async", "await", "function", "promise"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which TypeScript type represents a fixed-length array with known types?",
    "question_hi": "कौन सा TypeScript type fixed-length array को known types के साथ represent करता है?",
    "options_en": ["tuple", "array", "readonly array", "any"],
    "options_hi": ["tuple", "array", "readonly array", "any"],
    "answer_en": "tuple",
    "answer_hi": "tuple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which TypeScript type represents an object with string keys and values of type T?",
    "question_hi": "कौन सा TypeScript type object को represent करता है जिसके string keys और type T के values हों?",
    "options_en": ["Record<string, T>", "Map<string, T>", "Object<T>", "Dictionary<T>"],
    "options_hi": ["Record<string, T>", "Map<string, T>", "Object<T>", "Dictionary<T>"],
    "answer_en": "Record<string, T>",
    "answer_hi": "Record<string, T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which TypeScript feature allows making only some properties of a type optional?",
    "question_hi": "कौन सा TypeScript feature केवल कुछ properties को optional बनाता है?",
    "options_en": ["Partial", "Pick", "Omit", "Required"],
    "options_hi": ["Partial", "Pick", "Omit", "Required"],
    "answer_en": "Partial",
    "answer_hi": "Partial",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which TypeScript feature allows a variable to accept multiple types using |?",
    "question_hi": "कौन सा TypeScript feature variable को multiple types accept करने देता है using |?",
    "options_en": ["union type", "intersection type", "any", "unknown"],
    "options_hi": ["union type", "intersection type", "any", "unknown"],
    "answer_en": "union type",
    "answer_hi": "union type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which TypeScript type represents a value that is either string or number?",
    "question_hi": "कौन सा TypeScript type string या number value को represent करता है?",
    "options_en": ["string | number", "any", "unknown", "object"],
    "options_hi": ["string | number", "any", "unknown", "object"],
    "answer_en": "string | number",
    "answer_hi": "string | number",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which TypeScript keyword is used to specify a default export from a module?",
    "question_hi": "कौन सा TypeScript keyword module से default export specify करने के लिए इस्तेमाल होता है?",
    "options_en": ["default", "export", "module", "import"],
    "options_hi": ["default", "export", "module", "import"],
    "answer_en": "default",
    "answer_hi": "default",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which TypeScript type can hold any value and bypass type checking?",
    "question_hi": "कौन सा TypeScript type किसी भी value को hold कर सकता है और type checking को bypass करता है?",
    "options_en": ["any", "unknown", "never", "void"],
    "options_hi": ["any", "unknown", "never", "void"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which TypeScript type represents values that never occur?",
    "question_hi": "कौन सा TypeScript type उन values को represent करता है जो कभी occur नहीं होती?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which TypeScript utility type removes null and undefined from a type?",
    "question_hi": "कौन सा TypeScript utility type किसी type से null और undefined को हटा देता है?",
    "options_en": ["NonNullable", "Partial", "Required", "Readonly"],
    "options_hi": ["NonNullable", "Partial", "Required", "Readonly"],
    "answer_en": "NonNullable",
    "answer_hi": "NonNullable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which TypeScript utility type converts all properties of T to mutable?",
    "question_hi": "कौन सा TypeScript utility type T की सभी properties को mutable बनाता है?",
    "options_en": ["Mutable", "Readonly", "Partial", "Required"],
    "options_hi": ["Mutable", "Readonly", "Partial", "Required"],
    "answer_en": "Mutable",
    "answer_hi": "Mutable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which TypeScript type allows creating a type with only selected properties of T?",
    "question_hi": "कौन सा TypeScript type केवल T की चुनी हुई properties के साथ type बनाता है?",
    "options_en": ["Pick", "Omit", "Partial", "Required"],
    "options_hi": ["Pick", "Omit", "Partial", "Required"],
    "answer_en": "Pick",
    "answer_hi": "Pick",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which TypeScript type removes specific properties from T?",
    "question_hi": "कौन सा TypeScript type T से specific properties हटाता है?",
    "options_en": ["Omit", "Pick", "Partial", "Required"],
    "options_hi": ["Omit", "Pick", "Partial", "Required"],
    "answer_en": "Omit",
    "answer_hi": "Omit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which TypeScript type constructs a type with all properties of T as optional?",
    "question_hi": "कौन सा TypeScript type T की सभी properties को optional बनाता है?",
    "options_en": ["Partial", "Required", "Readonly", "Pick"],
    "options_hi": ["Partial", "Required", "Readonly", "Pick"],
    "answer_en": "Partial",
    "answer_hi": "Partial",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which TypeScript type constructs a type with all properties of T required?",
    "question_hi": "कौन सा TypeScript type T की सभी properties को required बनाता है?",
    "options_en": ["Required", "Partial", "Readonly", "Pick"],
    "options_hi": ["Required", "Partial", "Readonly", "Pick"],
    "answer_en": "Required",
    "answer_hi": "Required",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which TypeScript type constructs a type with all properties of T as readonly?",
    "question_hi": "कौन सा TypeScript type T की सभी properties को readonly बनाता है?",
    "options_en": ["Readonly", "Partial", "Required", "Pick"],
    "options_hi": ["Readonly", "Partial", "Required", "Pick"],
    "answer_en": "Readonly",
    "answer_hi": "Readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which TypeScript keyword allows you to declare an abstract class?",
    "question_hi": "कौन सा TypeScript keyword abstract class declare करने के लिए इस्तेमाल होता है?",
    "options_en": ["abstract", "interface", "class", "extends"],
    "options_hi": ["abstract", "interface", "class", "extends"],
    "answer_en": "abstract",
    "answer_hi": "abstract",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which TypeScript keyword allows a class to implement an interface?",
    "question_hi": "कौन सा TypeScript keyword class को interface implement करने देता है?",
    "options_en": ["implements", "extends", "abstract", "override"],
    "options_hi": ["implements", "extends", "abstract", "override"],
    "answer_en": "implements",
    "answer_hi": "implements",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which TypeScript keyword is used to call a parent class constructor?",
    "question_hi": "कौन सा TypeScript keyword parent class constructor को call करने के लिए इस्तेमाल होता है?",
    "options_en": ["super", "this", "extends", "base"],
    "options_hi": ["super", "this", "extends", "base"],
    "answer_en": "super",
    "answer_hi": "super",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which TypeScript type allows combining multiple types into one using &?",
    "question_hi": "कौन सा TypeScript type multiple types को & का उपयोग करके combine करता है?",
    "options_en": ["intersection type", "union type", "tuple", "any"],
    "options_hi": ["intersection type", "union type", "tuple", "any"],
    "answer_en": "intersection type",
    "answer_hi": "intersection type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
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
    "num": 41,
    "question_en": "Which TypeScript type allows defining a read-only array?",
    "question_hi": "कौन सा TypeScript type read-only array define करने देता है?",
    "options_en": ["readonly array", "tuple", "array", "any"],
    "options_hi": ["readonly array", "tuple", "array", "any"],
    "answer_en": "readonly array",
    "answer_hi": "readonly array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which TypeScript type is used to describe a function signature?",
    "question_hi": "कौन सा TypeScript type function signature describe करने के लिए इस्तेमाल होता है?",
    "options_en": ["function type", "any", "void", "unknown"],
    "options_hi": ["function type", "any", "void", "unknown"],
    "answer_en": "function type",
    "answer_hi": "function type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which TypeScript keyword is used to declare a module?",
    "question_hi": "कौन सा TypeScript keyword module declare करने के लिए इस्तेमाल होता है?",
    "options_en": ["module", "namespace", "package", "import"],
    "options_hi": ["module", "namespace", "package", "import"],
    "answer_en": "module",
    "answer_hi": "module",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which TypeScript keyword is used to import a module?",
    "question_hi": "कौन सा TypeScript keyword module import करने के लिए इस्तेमाल होता है?",
    "options_en": ["import", "export", "require", "module"],
    "options_hi": ["import", "export", "require", "module"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which TypeScript type can be used to hold values of any type but is safer than any?",
    "question_hi": "कौन सा TypeScript type किसी भी type के value को hold कर सकता है लेकिन any से safer है?",
    "options_en": ["unknown", "any", "never", "void"],
    "options_hi": ["unknown", "any", "never", "void"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which TypeScript type is used for a function that never returns?",
    "question_hi": "कौन सा TypeScript type उस function के लिए है जो कभी return नहीं करता?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which TypeScript type allows creating an object with dynamic keys of a specific type?",
    "question_hi": "कौन सा TypeScript type dynamic keys वाले object को specific type के साथ बनाने देता है?",
    "options_en": ["Record", "Map", "Object", "Dictionary"],
    "options_hi": ["Record", "Map", "Object", "Dictionary"],
    "answer_en": "Record",
    "answer_hi": "Record",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which TypeScript keyword allows pausing the execution of an async function?",
    "question_hi": "कौन सा TypeScript keyword async function के execution को pause करता है?",
    "options_en": ["await", "async", "pause", "stop"],
    "options_hi": ["await", "async", "pause", "stop"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which TypeScript keyword declares an asynchronous function?",
    "question_hi": "कौन सा TypeScript keyword asynchronous function declare करता है?",
    "options_en": ["async", "await", "function", "promise"],
    "options_hi": ["async", "await", "function", "promise"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which TypeScript feature allows type aliasing for union and intersection types?",
    "question_hi": "कौन सा TypeScript feature union और intersection types के लिए type aliasing देता है?",
    "options_en": ["type alias", "interface", "enum", "class"],
    "options_hi": ["type alias", "interface", "enum", "class"],
    "answer_en": "type alias",
    "answer_hi": "type alias",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Which TypeScript type allows optional properties in an object type?",
    "question_hi": "कौन सा TypeScript type object type में optional properties allow करता है?",
    "options_en": ["Partial", "Required", "Readonly", "Pick"],
    "options_hi": ["Partial", "Required", "Readonly", "Pick"],
    "answer_en": "Partial",
    "answer_hi": "Partial",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which TypeScript type removes optional modifiers from properties?",
    "question_hi": "कौन सा TypeScript type properties से optional modifiers हटा देता है?",
    "options_en": ["Required", "Partial", "Readonly", "Pick"],
    "options_hi": ["Required", "Partial", "Readonly", "Pick"],
    "answer_en": "Required",
    "answer_hi": "Required",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which TypeScript type converts all properties to read-only?",
    "question_hi": "कौन सा TypeScript type सभी properties को read-only बनाता है?",
    "options_en": ["Readonly", "Partial", "Required", "Pick"],
    "options_hi": ["Readonly", "Partial", "Required", "Pick"],
    "answer_en": "Readonly",
    "answer_hi": "Readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which TypeScript type allows constructing a new type by picking specific keys from T?",
    "question_hi": "कौन सा TypeScript type T की specific keys को चुनकर नया type बनाता है?",
    "options_en": ["Pick", "Omit", "Partial", "Required"],
    "options_hi": ["Pick", "Omit", "Partial", "Required"],
    "answer_en": "Pick",
    "answer_hi": "Pick",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Which TypeScript type allows constructing a new type by omitting specific keys from T?",
    "question_hi": "कौन सा TypeScript type T की specific keys को हटाकर नया type बनाता है?",
    "options_en": ["Omit", "Pick", "Partial", "Required"],
    "options_hi": ["Omit", "Pick", "Partial", "Required"],
    "answer_en": "Omit",
    "answer_hi": "Omit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Which TypeScript type allows a variable to hold any type but with safer type checking than 'any'?",
    "question_hi": "कौन सा TypeScript type किसी variable को किसी भी type का value hold करने देता है लेकिन 'any' से safer है?",
    "options_en": ["unknown", "any", "never", "void"],
    "options_hi": ["unknown", "any", "never", "void"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which TypeScript keyword defines a constant variable?",
    "question_hi": "कौन सा TypeScript keyword constant variable define करने के लिए इस्तेमाल होता है?",
    "options_en": ["const", "let", "var", "readonly"],
    "options_hi": ["const", "let", "var", "readonly"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which TypeScript keyword allows you to define a variable that can be reassigned?",
    "question_hi": "कौन सा TypeScript keyword variable define करने के लिए है जिसे reassigned किया जा सकता है?",
    "options_en": ["let", "const", "var", "readonly"],
    "options_hi": ["let", "const", "var", "readonly"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which TypeScript keyword declares a variable globally in its scope?",
    "question_hi": "कौन सा TypeScript keyword variable को उसके scope में globally declare करता है?",
    "options_en": ["var", "let", "const", "global"],
    "options_hi": ["var", "let", "const", "global"],
    "answer_en": "var",
    "answer_hi": "var",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which TypeScript type represents a function that does not return anything?",
    "question_hi": "कौन सा TypeScript type function को represent करता है जो कुछ return नहीं करता?",
    "options_en": ["void", "never", "any", "unknown"],
    "options_hi": ["void", "never", "any", "unknown"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Which TypeScript type represents values that can never occur?",
    "question_hi": "कौन सा TypeScript type values को represent करता है जो कभी occur नहीं होते?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which TypeScript type constructs an object type with specific keys of type T?",
    "question_hi": "कौन सा TypeScript type object type बनाता है जिसमें specific keys type T के होते हैं?",
    "options_en": ["Record", "Map", "Object", "Dictionary"],
    "options_hi": ["Record", "Map", "Object", "Dictionary"],
    "answer_en": "Record",
    "answer_hi": "Record",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
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
    "num": 64,
    "question_en": "Which TypeScript type constructs a new type by picking certain properties from T?",
    "question_hi": "कौन सा TypeScript type T से कुछ properties चुनकर नया type बनाता है?",
    "options_en": ["Pick", "Omit", "Partial", "Required"],
    "options_hi": ["Pick", "Omit", "Partial", "Required"],
    "answer_en": "Pick",
    "answer_hi": "Pick",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which TypeScript type constructs a new type by omitting certain properties from T?",
    "question_hi": "कौन सा TypeScript type T से कुछ properties हटाकर नया type बनाता है?",
    "options_en": ["Omit", "Pick", "Partial", "Required"],
    "options_hi": ["Omit", "Pick", "Partial", "Required"],
    "answer_en": "Omit",
    "answer_hi": "Omit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Which TypeScript type makes all properties of T optional?",
    "question_hi": "कौन सा TypeScript type T की सभी properties को optional बनाता है?",
    "options_en": ["Partial", "Required", "Readonly", "Pick"],
    "options_hi": ["Partial", "Required", "Readonly", "Pick"],
    "answer_en": "Partial",
    "answer_hi": "Partial",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which TypeScript type makes all properties of T required?",
    "question_hi": "कौन सा TypeScript type T की सभी properties को required बनाता है?",
    "options_en": ["Required", "Partial", "Readonly", "Pick"],
    "options_hi": ["Required", "Partial", "Readonly", "Pick"],
    "answer_en": "Required",
    "answer_hi": "Required",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which TypeScript type makes all properties of T read-only?",
    "question_hi": "कौन सा TypeScript type T की सभी properties को read-only बनाता है?",
    "options_en": ["Readonly", "Partial", "Required", "Pick"],
    "options_hi": ["Readonly", "Partial", "Required", "Pick"],
    "answer_en": "Readonly",
    "answer_hi": "Readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which TypeScript keyword declares an abstract class?",
    "question_hi": "कौन सा TypeScript keyword abstract class declare करने के लिए इस्तेमाल होता है?",
    "options_en": ["abstract", "class", "interface", "extends"],
    "options_hi": ["abstract", "class", "interface", "extends"],
    "answer_en": "abstract",
    "answer_hi": "abstract",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which TypeScript keyword allows a class to inherit from another class?",
    "question_hi": "कौन सा TypeScript keyword class को किसी दूसरी class से inherit करने देता है?",
    "options_en": ["extends", "implements", "inherits", "super"],
    "options_hi": ["extends", "implements", "inherits", "super"],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "Which TypeScript keyword allows a class to implement an interface?",
    "question_hi": "कौन सा TypeScript keyword class को interface implement करने देता है?",
    "options_en": ["implements", "extends", "interface", "abstract"],
    "options_hi": ["implements", "extends", "interface", "abstract"],
    "answer_en": "implements",
    "answer_hi": "implements",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which TypeScript keyword is used to call the constructor of a parent class?",
    "question_hi": "कौन सा TypeScript keyword parent class के constructor को call करने के लिए इस्तेमाल होता है?",
    "options_en": ["super", "this", "extends", "base"],
    "options_hi": ["super", "this", "extends", "base"],
    "answer_en": "super",
    "answer_hi": "super",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which TypeScript type represents a tuple of known fixed types?",
    "question_hi": "कौन सा TypeScript type fixed types वाले tuple को represent करता है?",
    "options_en": ["tuple", "array", "any", "readonly array"],
    "options_hi": ["tuple", "array", "any", "readonly array"],
    "answer_en": "tuple",
    "answer_hi": "tuple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which TypeScript keyword declares an interface?",
    "question_hi": "कौन सा TypeScript keyword interface declare करने के लिए इस्तेमाल होता है?",
    "options_en": ["interface", "type", "class", "abstract"],
    "options_hi": ["interface", "type", "class", "abstract"],
    "answer_en": "interface",
    "answer_hi": "interface",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which TypeScript type allows combining multiple types into one using &?",
    "question_hi": "कौन सा TypeScript type multiple types को combine करता है using &?",
    "options_en": ["intersection type", "union type", "any", "unknown"],
    "options_hi": ["intersection type", "union type", "any", "unknown"],
    "answer_en": "intersection type",
    "answer_hi": "intersection type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
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
    "num": 77,
    "question_en": "Which TypeScript type allows you to define an object with dynamic keys?",
    "question_hi": "कौन सा TypeScript type dynamic keys वाले object define करने देता है?",
    "options_en": ["Record", "Map", "Object", "Dictionary"],
    "options_hi": ["Record", "Map", "Object", "Dictionary"],
    "answer_en": "Record",
    "answer_hi": "Record",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which TypeScript utility type constructs a type with all properties optional?",
    "question_hi": "कौन सा TypeScript utility type सभी properties को optional बनाता है?",
    "options_en": ["Partial", "Required", "Readonly", "Pick"],
    "options_hi": ["Partial", "Required", "Readonly", "Pick"],
    "answer_en": "Partial",
    "answer_hi": "Partial",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
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
    "num": 80,
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
    "num": 81,
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
    "num": 82,
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
    "num": 83,
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
    "num": 84,
    "question_en": "Which TypeScript keyword declares a variable with block scope?",
    "question_hi": "कौन सा TypeScript keyword block scope वाली variable declare करने के लिए इस्तेमाल होता है?",
    "options_en": ["let", "var", "const", "readonly"],
    "options_hi": ["let", "var", "const", "readonly"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which TypeScript keyword declares a constant variable?",
    "question_hi": "कौन सा TypeScript keyword constant variable declare करने के लिए इस्तेमाल होता है?",
    "options_en": ["const", "let", "var", "readonly"],
    "options_hi": ["const", "let", "var", "readonly"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Which TypeScript keyword declares an asynchronous function?",
    "question_hi": "कौन सा TypeScript keyword asynchronous function declare करता है?",
    "options_en": ["async", "await", "function", "promise"],
    "options_hi": ["async", "await", "function", "promise"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which TypeScript keyword pauses execution inside an async function?",
    "question_hi": "कौन सा TypeScript keyword async function के अंदर execution को रोकता है?",
    "options_en": ["await", "async", "pause", "stop"],
    "options_hi": ["await", "async", "pause", "stop"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which TypeScript type represents a fixed length array with known types?",
    "question_hi": "कौन सा TypeScript type fixed length array with known types को represent करता है?",
    "options_en": ["tuple", "array", "readonly array", "any"],
    "options_hi": ["tuple", "array", "readonly array", "any"],
    "answer_en": "tuple",
    "answer_hi": "tuple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which TypeScript type allows you to create a new type by combining types using &?",
    "question_hi": "कौन सा TypeScript type types को & के साथ combine करके नया type बनाता है?",
    "options_en": ["intersection type", "union type", "any", "unknown"],
    "options_hi": ["intersection type", "union type", "any", "unknown"],
    "answer_en": "intersection type",
    "answer_hi": "intersection type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which TypeScript type allows you to create a new type that can be any of the provided types?",
    "question_hi": "कौन सा TypeScript type नया type बनाता है जो provided types में से कोई भी हो सकता है?",
    "options_en": ["union type", "intersection type", "any", "unknown"],
    "options_hi": ["union type", "intersection type", "any", "unknown"],
    "answer_en": "union type",
    "answer_hi": "union type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Which TypeScript keyword declares a module?",
    "question_hi": "कौन सा TypeScript keyword module declare करने के लिए इस्तेमाल होता है?",
    "options_en": ["module", "namespace", "package", "import"],
    "options_hi": ["module", "namespace", "package", "import"],
    "answer_en": "module",
    "answer_hi": "module",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which TypeScript keyword is used to import a module?",
    "question_hi": "कौन सा TypeScript keyword module import करने के लिए इस्तेमाल होता है?",
    "options_en": ["import", "export", "require", "module"],
    "options_hi": ["import", "export", "require", "module"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which TypeScript type represents a variable that never returns?",
    "question_hi": "कौन सा TypeScript type variable को represent करता है जो कभी return नहीं करता?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which TypeScript type is used for a function that does not return any value?",
    "question_hi": "कौन सा TypeScript type function के लिए है जो कोई value return नहीं करता?",
    "options_en": ["void", "never", "any", "unknown"],
    "options_hi": ["void", "never", "any", "unknown"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which TypeScript feature allows defining type aliases?",
    "question_hi": "कौन सा TypeScript feature type aliases define करने देता है?",
    "options_en": ["type alias", "interface", "enum", "class"],
    "options_hi": ["type alias", "interface", "enum", "class"],
    "answer_en": "type alias",
    "answer_hi": "type alias",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Which TypeScript keyword allows using generics in a class or function?",
    "question_hi": "कौन सा TypeScript keyword class या function में generics इस्तेमाल करने देता है?",
    "options_en": ["<T>", "extends", "implements", "type"],
    "options_hi": ["<T>", "extends", "implements", "type"],
    "answer_en": "<T>",
    "answer_hi": "<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which TypeScript keyword allows a function parameter to have a default value?",
    "question_hi": "कौन सा TypeScript keyword function parameter को default value देता है?",
    "options_en": ["=", "default", "let", "const"],
    "options_hi": ["=", "default", "let", "const"],
    "answer_en": "=",
    "answer_hi": "=",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which TypeScript type ensures a variable has a fixed set of values?",
    "question_hi": "कौन सा TypeScript type variable को fixed set of values देता है?",
    "options_en": ["enum", "union type", "literal type", "any"],
    "options_hi": ["enum", "union type", "literal type", "any"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which TypeScript type allows creating custom string or numeric literal types?",
    "question_hi": "कौन सा TypeScript type custom string या numeric literal types बनाता है?",
    "options_en": ["literal type", "enum", "any", "unknown"],
    "options_hi": ["literal type", "enum", "any", "unknown"],
    "answer_en": "literal type",
    "answer_hi": "literal type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which TypeScript keyword pauses execution inside an async function?",
    "question_hi": "कौन सा TypeScript keyword async function के अंदर execution को रोकता है?",
    "options_en": ["await", "async", "pause", "stop"],
    "options_hi": ["await", "async", "pause", "stop"],
    "answer_en": "await",
    "answer_hi": "await",
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