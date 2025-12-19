const questions = [
  {
    "num": 1,
    "question_en": "Which TypeScript type allows only specific string values?",
    "question_hi": "कौन सा TypeScript टाइप केवल विशेष string values की अनुमति देता है?",
    "options_en": ["string literal type", "any", "enum", "tuple"],
    "options_hi": ["string literal type", "any", "enum", "tuple"],
    "answer_en": "string literal type",
    "answer_hi": "string literal type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which utility type constructs a type with all properties of T set to optional?",
    "question_hi": "कौन सा utility type T की सभी properties को optional बनाता है?",
    "options_en": ["Partial", "Required", "Readonly", "Pick"],
    "options_hi": ["Partial", "Required", "Readonly", "Pick"],
    "answer_en": "Partial",
    "answer_hi": "Partial",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which keyword creates a new object instance in TypeScript?",
    "question_hi": "TypeScript में नया object instance बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["new", "class", "interface", "extends"],
    "options_hi": ["new", "class", "interface", "extends"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which type represents a function that never returns?",
    "question_hi": "कौन सा टाइप उस function को दर्शाता है जो कभी return नहीं करता?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which feature allows extending a class in TypeScript?",
    "question_hi": "कौन सा feature TypeScript में class को extend करने की अनुमति देता है?",
    "options_en": ["extends", "implements", "interface", "super"],
    "options_hi": ["extends", "implements", "interface", "super"],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
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
    "num": 7,
    "question_en": "Which utility type picks a set of properties from a type?",
    "question_hi": "कौन सा utility type type से कुछ properties चुनता है?",
    "options_en": ["Pick", "Omit", "Partial", "Record"],
    "options_hi": ["Pick", "Omit", "Partial", "Record"],
    "answer_en": "Pick",
    "answer_hi": "Pick",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which type represents an array of multiple types in a fixed order?",
    "question_hi": "कौन सा type fixed order में multiple types की array को दर्शाता है?",
    "options_en": ["Tuple", "Array", "any", "enum"],
    "options_hi": ["Tuple", "Array", "any", "enum"],
    "answer_en": "Tuple",
    "answer_hi": "Tuple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which TypeScript feature allows defining custom types for objects?",
    "question_hi": "कौन सा TypeScript feature objects के लिए custom types define करने की अनुमति देता है?",
    "options_en": ["interface", "class", "enum", "type alias"],
    "options_hi": ["interface", "class", "enum", "type alias"],
    "answer_en": "interface",
    "answer_hi": "interface",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which keyword is used to enforce type checking on a variable?",
    "question_hi": "किस keyword का उपयोग variable पर type checking enforce करने के लिए किया जाता है?",
    "options_en": ["as", "any", "let", "const"],
    "options_hi": ["as", "any", "let", "const"],
    "answer_en": "as",
    "answer_hi": "as",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which type ensures a property cannot be modified after assignment?",
    "question_hi": "कौन सा type सुनिश्चित करता है कि property assignment के बाद modify नहीं की जा सकती?",
    "options_en": ["Readonly", "Partial", "const", "Immutable"],
    "options_hi": ["Readonly", "Partial", "const", "Immutable"],
    "answer_en": "Readonly",
    "answer_hi": "Readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which TypeScript type represents a value that might be null or undefined?",
    "question_hi": "कौन सा TypeScript type एक value को दर्शाता है जो null या undefined हो सकती है?",
    "options_en": ["nullable", "undefined", "null", "null | undefined"],
    "options_hi": ["nullable", "undefined", "null", "null | undefined"],
    "answer_en": "null | undefined",
    "answer_hi": "null | undefined",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which type can store values of different types in TypeScript?",
    "question_hi": "कौन सा type TypeScript में विभिन्न types की values store कर सकता है?",
    "options_en": ["union", "tuple", "enum", "any"],
    "options_hi": ["union", "tuple", "enum", "any"],
    "answer_en": "union",
    "answer_hi": "union",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which keyword implements an interface in a class?",
    "question_hi": "कौन सा keyword class में interface implement करने के लिए उपयोग होता है?",
    "options_en": ["implements", "extends", "interface", "class"],
    "options_hi": ["implements", "extends", "interface", "class"],
    "answer_en": "implements",
    "answer_hi": "implements",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which TypeScript feature allows combining multiple types into one?",
    "question_hi": "कौन सा TypeScript feature कई types को एक में combine करने की अनुमति देता है?",
    "options_en": ["union type", "intersection type", "tuple", "any"],
    "options_hi": ["union type", "intersection type", "tuple", "any"],
    "answer_en": "union type",
    "answer_hi": "union type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which utility type makes all properties required?",
    "question_hi": "कौन सा utility type सभी properties को required बनाता है?",
    "options_en": ["Required", "Partial", "Readonly", "Pick"],
    "options_hi": ["Required", "Partial", "Readonly", "Pick"],
    "answer_en": "Required",
    "answer_hi": "Required",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which type can store a set of key-value pairs with a fixed key type?",
    "question_hi": "कौन सा type fixed key type के साथ key-value pairs store कर सकता है?",
    "options_en": ["Record", "Map", "Object", "Tuple"],
    "options_hi": ["Record", "Map", "Object", "Tuple"],
    "answer_en": "Record",
    "answer_hi": "Record",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword allows type assertion in TypeScript?",
    "question_hi": "TypeScript में type assertion करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["as", "<>", "type", "assert"],
    "options_hi": ["as", "<>", "type", "assert"],
    "answer_en": "as",
    "answer_hi": "as",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which type represents an object with keys of type K and values of type T?",
    "question_hi": "कौन सा type type K के keys और type T के values वाला object दर्शाता है?",
    "options_en": ["Record<K,T>", "Map<K,T>", "Object<K,T>", "Tuple<K,T>"],
    "options_hi": ["Record<K,T>", "Map<K,T>", "Object<K,T>", "Tuple<K,T>"],
    "answer_en": "Record<K,T>",
    "answer_hi": "Record<K,T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which TypeScript feature allows creating custom types for objects?",
    "question_hi": "कौन सा TypeScript feature objects के लिए custom types बनाने की अनुमति देता है?",
    "options_en": ["interface", "type alias", "enum", "class"],
    "options_hi": ["interface", "type alias", "enum", "class"],
    "answer_en": "interface",
    "answer_hi": "interface",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which utility type removes certain keys from a type?",
    "question_hi": "कौन सा utility type type से कुछ keys को हटा देता है?",
    "options_en": ["Omit", "Pick", "Partial", "Exclude"],
    "options_hi": ["Omit", "Pick", "Partial", "Exclude"],
    "answer_en": "Omit",
    "answer_hi": "Omit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which TypeScript type represents an unknown type that needs type checking before use?",
    "question_hi": "कौन सा TypeScript type unknown है और उपयोग से पहले type checking की जरूरत होती है?",
    "options_en": ["unknown", "any", "void", "never"],
    "options_hi": ["unknown", "any", "void", "never"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which keyword is used inside a derived class to call the base class constructor?",
    "question_hi": "Derived class में base class constructor को call करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["super", "base", "extends", "this"],
    "options_hi": ["super", "base", "extends", "this"],
    "answer_en": "super",
    "answer_hi": "super",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which type is used to represent functions with variable arguments?",
    "question_hi": "कौन सा type functions को variable arguments के साथ represent करता है?",
    "options_en": ["rest parameters", "tuple", "array", "any"],
    "options_hi": ["rest parameters", "tuple", "array", "any"],
    "answer_en": "rest parameters",
    "answer_hi": "rest parameters",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which feature allows combining multiple types into one type using &?",
    "question_hi": "कौन सा feature & का उपयोग करके multiple types को एक में combine करता है?",
    "options_en": ["intersection type", "union type", "tuple", "enum"],
    "options_hi": ["intersection type", "union type", "tuple", "enum"],
    "answer_en": "intersection type",
    "answer_hi": "intersection type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which keyword declares a constant reference that cannot be reassigned?",
    "question_hi": "कौन सा keyword एक constant reference declare करता है जिसे reassigned नहीं किया जा सकता?",
    "options_en": ["const", "let", "var", "readonly"],
    "options_hi": ["const", "let", "var", "readonly"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which TypeScript feature allows numeric and string constants as a group?",
    "question_hi": "कौन सा TypeScript feature numeric और string constants को एक समूह के रूप में अनुमति देता है?",
    "options_en": ["enum", "tuple", "array", "union type"],
    "options_hi": ["enum", "tuple", "array", "union type"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which TypeScript keyword defines a class property or method that can be overridden?",
    "question_hi": "कौन सा TypeScript keyword class property या method को override करने योग्य बनाता है?",
    "options_en": ["protected", "private", "public", "readonly"],
    "options_hi": ["protected", "private", "public", "readonly"],
    "answer_en": "protected",
    "answer_hi": "protected",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which type allows indexing objects with string or number keys?",
    "question_hi": "कौन सा type objects को string या number keys के साथ index करने की अनुमति देता है?",
    "options_en": ["index signature", "Record", "Map", "object"],
    "options_hi": ["index signature", "Record", "Map", "object"],
    "answer_en": "index signature",
    "answer_hi": "index signature",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which TypeScript type represents a function with no return value?",
    "question_hi": "कौन सा TypeScript type function को दर्शाता है जिसका कोई return value नहीं है?",
    "options_en": ["void", "never", "any", "unknown"],
    "options_hi": ["void", "never", "any", "unknown"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which utility type excludes certain types from a union?",
    "question_hi": "कौन सा utility type union से कुछ types को exclude करता है?",
    "options_en": ["Exclude", "Omit", "Pick", "Partial"],
    "options_hi": ["Exclude", "Omit", "Pick", "Partial"],
    "answer_en": "Exclude",
    "answer_hi": "Exclude",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which TypeScript feature allows combining multiple types as optional properties?",
    "question_hi": "कौन सा TypeScript feature multiple types को optional properties के रूप में combine करता है?",
    "options_en": ["intersection with Partial", "union", "tuple", "enum"],
    "options_hi": ["intersection with Partial", "union", "tuple", "enum"],
    "answer_en": "intersection with Partial",
    "answer_hi": "intersection with Partial",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which type represents a fixed-length array with different types in each position?",
    "question_hi": "कौन सा type fixed-length array को represent करता है जिसमें हर position में अलग type हो?",
    "options_en": ["tuple", "array", "union", "any"],
    "options_hi": ["tuple", "array", "union", "any"],
    "answer_en": "tuple",
    "answer_hi": "tuple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which keyword allows using a type as another type name?",
    "question_hi": "कौन सा keyword एक type को दूसरे type नाम के रूप में उपयोग करने देता है?",
    "options_en": ["type", "interface", "enum", "class"],
    "options_hi": ["type", "interface", "enum", "class"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which type allows optional chaining for nested properties?",
    "question_hi": "कौन सा type nested properties के लिए optional chaining की अनुमति देता है?",
    "options_en": ["object?", "any", "unknown", "optional"],
    "options_hi": ["object?", "any", "unknown", "optional"],
    "answer_en": "object?",
    "answer_hi": "object?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which keyword declares a variable limited to a specific type?",
    "question_hi": "कौन सा keyword variable को specific type तक सीमित करने के लिए उपयोग होता है?",
    "options_en": ["let", "var", "const", "as"],
    "options_hi": ["let", "var", "const", "as"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which feature ensures a variable is never reassigned a different type?",
    "question_hi": "कौन सा feature सुनिश्चित करता है कि variable को कभी अलग type के साथ reassigned न किया जाए?",
    "options_en": ["type checking", "readonly", "const", "interface"],
    "options_hi": ["type checking", "readonly", "const", "interface"],
    "answer_en": "type checking",
    "answer_hi": "type checking",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which TypeScript feature allows default values for function parameters?",
    "question_hi": "कौन सा TypeScript feature function parameters के लिए default values की अनुमति देता है?",
    "options_en": ["default parameters", "optional parameters", "rest parameters", "tuple"],
    "options_hi": ["default parameters", "optional parameters", "rest parameters", "tuple"],
    "answer_en": "default parameters",
    "answer_hi": "default parameters",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which TypeScript feature allows safely accessing nested object properties?",
    "question_hi": "कौन सा TypeScript feature nested object properties को सुरक्षित रूप से access करने की अनुमति देता है?",
    "options_en": ["optional chaining", "type alias", "interface", "tuple"],
    "options_hi": ["optional chaining", "type alias", "interface", "tuple"],
    "answer_en": "optional chaining",
    "answer_hi": "optional chaining",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which type omits selected properties from an object?",
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
    "question_en": "Which type represents all possible keys of an object as a union?",
    "question_hi": "कौन सा type object की सभी possible keys को union के रूप में दर्शाता है?",
    "options_en": ["keyof", "Record", "Partial", "Pick"],
    "options_hi": ["keyof", "Record", "Partial", "Pick"],
    "answer_en": "keyof",
    "answer_hi": "keyof",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which utility type makes a type read-only?",
    "question_hi": "कौन सा utility type किसी type को read-only बनाता है?",
    "options_en": ["Readonly", "Partial", "Required", "Pick"],
    "options_hi": ["Readonly", "Partial", "Required", "Pick"],
    "answer_en": "Readonly",
    "answer_hi": "Readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which TypeScript type restricts a variable to a set of literal values?",
    "question_hi": "कौन सा TypeScript type variable को literal values के set तक सीमित करता है?",
    "options_en": ["literal type", "any", "enum", "tuple"],
    "options_hi": ["literal type", "any", "enum", "tuple"],
    "answer_en": "literal type",
    "answer_hi": "literal type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which TypeScript feature combines multiple interfaces into one?",
    "question_hi": "कौन सा TypeScript feature कई interfaces को एक में combine करता है?",
    "options_en": ["interface merging", "union type", "tuple", "class"],
    "options_hi": ["interface merging", "union type", "tuple", "class"],
    "answer_en": "interface merging",
    "answer_hi": "interface merging",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which type allows marking some properties as optional?",
    "question_hi": "कौन सा type कुछ properties को optional mark करने की अनुमति देता है?",
    "options_en": ["Partial", "Required", "Readonly", "Pick"],
    "options_hi": ["Partial", "Required", "Readonly", "Pick"],
    "answer_en": "Partial",
    "answer_hi": "Partial",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which keyword indicates a variable that is block scoped?",
    "question_hi": "कौन सा keyword variable को block scoped बनाता है?",
    "options_en": ["let", "var", "const", "readonly"],
    "options_hi": ["let", "var", "const", "readonly"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which type allows representing multiple types for a variable using |?",
    "question_hi": "कौन सा type | का उपयोग करके variable के लिए multiple types को represent करता है?",
    "options_en": ["union type", "intersection type", "tuple", "enum"],
    "options_hi": ["union type", "intersection type", "tuple", "enum"],
    "answer_en": "union type",
    "answer_hi": "union type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which type allows representing multiple types combined using &?",
    "question_hi": "कौन सा type & का उपयोग करके multiple types को combine करता है?",
    "options_en": ["intersection type", "union type", "tuple", "enum"],
    "options_hi": ["intersection type", "union type", "tuple", "enum"],
    "answer_en": "intersection type",
    "answer_hi": "intersection type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which keyword is used to define a TypeScript class?",
    "question_hi": "TypeScript class को define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["class", "interface", "type", "enum"],
    "options_hi": ["class", "interface", "type", "enum"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which keyword ensures a method can only be accessed within the class?",
    "question_hi": "कौन सा keyword method को केवल class के अंदर access करने की अनुमति देता है?",
    "options_en": ["private", "protected", "public", "readonly"],
    "options_hi": ["private", "protected", "public", "readonly"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Which keyword allows derived classes to override a method from the base class?",
    "question_hi": "कौन सा keyword derived classes को base class का method override करने देता है?",
    "options_en": ["override", "extends", "implements", "super"],
    "options_hi": ["override", "extends", "implements", "super"],
    "answer_en": "override",
    "answer_hi": "override",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which utility type constructs a type with all properties of T except those in K?",
    "question_hi": "कौन सा utility type T की सभी properties को बनाता है सिवाय K में मौजूद properties के?",
    "options_en": ["Omit", "Pick", "Partial", "Exclude"],
    "options_hi": ["Omit", "Pick", "Partial", "Exclude"],
    "answer_en": "Omit",
    "answer_hi": "Omit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which TypeScript feature allows checking the type of a variable at runtime?",
    "question_hi": "कौन सा TypeScript feature runtime पर variable के type को check करने देता है?",
    "options_en": ["type guards", "interfaces", "enums", "tuples"],
    "options_hi": ["type guards", "interfaces", "enums", "tuples"],
    "answer_en": "type guards",
    "answer_hi": "type guards",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which TypeScript feature allows you to create a variable with multiple possible types?",
    "question_hi": "कौन सा TypeScript feature variable को multiple possible types के साथ बनाने देता है?",
    "options_en": ["union type", "intersection type", "tuple", "enum"],
    "options_hi": ["union type", "intersection type", "tuple", "enum"],
    "answer_en": "union type",
    "answer_hi": "union type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
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
    "num": 56,
    "question_en": "Which type represents a readonly array of elements?",
    "question_hi": "कौन सा type elements की readonly array को represent करता है?",
    "options_en": ["ReadonlyArray", "Array", "Tuple", "any"],
    "options_hi": ["ReadonlyArray", "Array", "Tuple", "any"],
    "answer_en": "ReadonlyArray",
    "answer_hi": "ReadonlyArray",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which TypeScript feature enforces type safety for function parameters and return type?",
    "question_hi": "कौन सा TypeScript feature function parameters और return type के लिए type safety enforce करता है?",
    "options_en": ["type annotations", "any", "interfaces", "tuples"],
    "options_hi": ["type annotations", "any", "interfaces", "tuples"],
    "answer_en": "type annotations",
    "answer_hi": "type annotations",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which type allows defining an object with optional properties?",
    "question_hi": "कौन सा type optional properties के साथ object define करने देता है?",
    "options_en": ["Partial", "Required", "Readonly", "Pick"],
    "options_hi": ["Partial", "Required", "Readonly", "Pick"],
    "answer_en": "Partial",
    "answer_hi": "Partial",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which type represents all possible values of an enum?",
    "question_hi": "कौन सा type enum के सभी possible values को represent करता है?",
    "options_en": ["enum type", "any", "tuple", "union type"],
    "options_hi": ["enum type", "any", "tuple", "union type"],
    "answer_en": "enum type",
    "answer_hi": "enum type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which TypeScript feature allows optional function parameters?",
    "question_hi": "कौन सा TypeScript feature optional function parameters की अनुमति देता है?",
    "options_en": ["optional parameters", "default parameters", "rest parameters", "tuple"],
    "options_hi": ["optional parameters", "default parameters", "rest parameters", "tuple"],
    "answer_en": "optional parameters",
    "answer_hi": "optional parameters",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Which type represents a function signature with specific parameter and return types?",
    "question_hi": "कौन सा type specific parameter और return types वाले function signature को represent करता है?",
    "options_en": ["function type", "any", "tuple", "interface"],
    "options_hi": ["function type", "any", "tuple", "interface"],
    "answer_en": "function type",
    "answer_hi": "function type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which keyword allows using a class as a type in TypeScript?",
    "question_hi": "कौन सा keyword TypeScript में class को type के रूप में उपयोग करने देता है?",
    "options_en": ["typeof", "instanceof", "class", "interface"],
    "options_hi": ["typeof", "instanceof", "class", "interface"],
    "answer_en": "typeof",
    "answer_hi": "typeof",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which type allows creating a type based on the keys of another type?",
    "question_hi": "कौन सा type दूसरे type की keys के आधार पर type बनाने देता है?",
    "options_en": ["keyof", "Pick", "Omit", "Partial"],
    "options_hi": ["keyof", "Pick", "Omit", "Partial"],
    "answer_en": "keyof",
    "answer_hi": "keyof",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which TypeScript type represents a tuple with specific types in order?",
    "question_hi": "कौन सा TypeScript type क्रम में specific types वाले tuple को represent करता है?",
    "options_en": ["tuple", "array", "union", "any"],
    "options_hi": ["tuple", "array", "union", "any"],
    "answer_en": "tuple",
    "answer_hi": "tuple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which keyword is used to define a read-only property in a class?",
    "question_hi": "कौन सा keyword class में read-only property define करने के लिए उपयोग होता है?",
    "options_en": ["readonly", "const", "private", "protected"],
    "options_hi": ["readonly", "const", "private", "protected"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
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
    "num": 67,
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
    "num": 68,
    "question_en": "Which TypeScript feature allows function parameters to accept multiple values as an array?",
    "question_hi": "कौन सा TypeScript feature function parameters को array के रूप में multiple values accept करने देता है?",
    "options_en": ["rest parameters", "optional parameters", "default parameters", "tuple"],
    "options_hi": ["rest parameters", "optional parameters", "default parameters", "tuple"],
    "answer_en": "rest parameters",
    "answer_hi": "rest parameters",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which type constructs a type by picking a set of properties from T?",
    "question_hi": "कौन सा type T में से कुछ properties को चुनकर नया type बनाता है?",
    "options_en": ["Pick", "Omit", "Partial", "Required"],
    "options_hi": ["Pick", "Omit", "Partial", "Required"],
    "answer_en": "Pick",
    "answer_hi": "Pick",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which keyword allows a class to call a method from its parent class?",
    "question_hi": "कौन सा keyword class को parent class के method को call करने देता है?",
    "options_en": ["super", "this", "extends", "override"],
    "options_hi": ["super", "this", "extends", "override"],
    "answer_en": "super",
    "answer_hi": "super",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "Which TypeScript type represents all possible values except those in union U?",
    "question_hi": "कौन सा TypeScript type union U में मौजूद values को छोड़कर सभी possible values represent करता है?",
    "options_en": ["Exclude", "Pick", "Omit", "Partial"],
    "options_hi": ["Exclude", "Pick", "Omit", "Partial"],
    "answer_en": "Exclude",
    "answer_hi": "Exclude",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which TypeScript feature allows defining a contract for object shapes?",
    "question_hi": "कौन सा TypeScript feature object shapes के लिए contract define करने देता है?",
    "options_en": ["interface", "class", "type alias", "enum"],
    "options_hi": ["interface", "class", "type alias", "enum"],
    "answer_en": "interface",
    "answer_hi": "interface",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which TypeScript keyword ensures a class property is only accessible within the class and its subclasses?",
    "question_hi": "कौन सा TypeScript keyword class property को केवल class और उसके subclasses में accessible बनाता है?",
    "options_en": ["protected", "private", "public", "readonly"],
    "options_hi": ["protected", "private", "public", "readonly"],
    "answer_en": "protected",
    "answer_hi": "protected",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which type combines multiple types into one using &?",
    "question_hi": "कौन सा type multiple types को & का उपयोग करके combine करता है?",
    "options_en": ["intersection type", "union type", "tuple", "any"],
    "options_hi": ["intersection type", "union type", "tuple", "any"],
    "answer_en": "intersection type",
    "answer_hi": "intersection type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which TypeScript type ensures the object cannot be modified?",
    "question_hi": "कौन सा TypeScript type object को modify होने से रोकता है?",
    "options_en": ["Readonly", "Partial", "Required", "Pick"],
    "options_hi": ["Readonly", "Partial", "Required", "Pick"],
    "answer_en": "Readonly",
    "answer_hi": "Readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Which TypeScript feature allows defining default values for function parameters?",
    "question_hi": "कौन सा TypeScript feature function parameters के लिए default values define करने देता है?",
    "options_en": ["default parameters", "optional parameters", "rest parameters", "tuple"],
    "options_hi": ["default parameters", "optional parameters", "rest parameters", "tuple"],
    "answer_en": "default parameters",
    "answer_hi": "default parameters",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which type allows creating a new type with required properties from an existing type?",
    "question_hi": "कौन सा type existing type से required properties के साथ नया type बनाता है?",
    "options_en": ["Required", "Partial", "Readonly", "Pick"],
    "options_hi": ["Required", "Partial", "Readonly", "Pick"],
    "answer_en": "Required",
    "answer_hi": "Required",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which TypeScript type represents an array of elements with fixed types in order?",
    "question_hi": "कौन सा TypeScript type order में fixed types वाले elements की array को represent करता है?",
    "options_en": ["tuple", "array", "union", "any"],
    "options_hi": ["tuple", "array", "union", "any"],
    "answer_en": "tuple",
    "answer_hi": "tuple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which TypeScript keyword indicates a variable cannot be reassigned?",
    "question_hi": "कौन सा TypeScript keyword variable को reassignment से रोकता है?",
    "options_en": ["const", "let", "var", "readonly"],
    "options_hi": ["const", "let", "var", "readonly"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which TypeScript feature allows combining multiple object types into one?",
    "question_hi": "कौन सा TypeScript feature multiple object types को combine करके एक बनाता है?",
    "options_en": ["intersection type", "union type", "tuple", "enum"],
    "options_hi": ["intersection type", "union type", "tuple", "enum"],
    "answer_en": "intersection type",
    "answer_hi": "intersection type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Which TypeScript utility type extracts a subset of properties from T?",
    "question_hi": "कौन सा TypeScript utility type T में से कुछ properties का subset extract करता है?",
    "options_en": ["Pick", "Omit", "Partial", "Required"],
    "options_hi": ["Pick", "Omit", "Partial", "Required"],
    "answer_en": "Pick",
    "answer_hi": "Pick",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
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
    "num": 83,
    "question_en": "Which TypeScript type can store any value without type checking?",
    "question_hi": "कौन सा TypeScript type किसी भी value को बिना type check के store कर सकता है?",
    "options_en": ["any", "unknown", "void", "never"],
    "options_hi": ["any", "unknown", "void", "never"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which TypeScript type represents a value that will never occur?",
    "question_hi": "कौन सा TypeScript type ऐसी value को represent करता है जो कभी occur नहीं होगी?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which TypeScript type represents a value of any type but must be checked before use?",
    "question_hi": "कौन सा TypeScript type किसी भी type की value को represent करता है लेकिन use से पहले check करनी होती है?",
    "options_en": ["unknown", "any", "void", "never"],
    "options_hi": ["unknown", "any", "void", "never"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Which TypeScript type is used for a function that does not return anything?",
    "question_hi": "कौन सा TypeScript type उस function के लिए उपयोग होता है जो कुछ return नहीं करता?",
    "options_en": ["void", "never", "any", "unknown"],
    "options_hi": ["void", "never", "any", "unknown"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which TypeScript type ensures a type can only have specific values?",
    "question_hi": "कौन सा TypeScript type सुनिश्चित करता है कि type केवल specific values ही ले सकता है?",
    "options_en": ["literal type", "union type", "tuple", "any"],
    "options_hi": ["literal type", "union type", "tuple", "any"],
    "answer_en": "literal type",
    "answer_hi": "literal type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which keyword defines a read-only array in TypeScript?",
    "question_hi": "कौन सा keyword TypeScript में read-only array define करता है?",
    "options_en": ["ReadonlyArray", "Array", "tuple", "const"],
    "options_hi": ["ReadonlyArray", "Array", "tuple", "const"],
    "answer_en": "ReadonlyArray",
    "answer_hi": "ReadonlyArray",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which TypeScript feature allows a type to be defined in terms of another type?",
    "question_hi": "कौन सा TypeScript feature एक type को दूसरे type के आधार पर define करने देता है?",
    "options_en": ["type alias", "interface", "class", "enum"],
    "options_hi": ["type alias", "interface", "class", "enum"],
    "answer_en": "type alias",
    "answer_hi": "type alias",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which TypeScript type represents an ordered list of elements with fixed types?",
    "question_hi": "कौन सा TypeScript type fixed types वाले elements की ordered list को represent करता है?",
    "options_en": ["tuple", "array", "union", "any"],
    "options_hi": ["tuple", "array", "union", "any"],
    "answer_en": "tuple",
    "answer_hi": "tuple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Which TypeScript keyword ensures a variable can be reassigned?",
    "question_hi": "कौन सा TypeScript keyword variable को reassignment की अनुमति देता है?",
    "options_en": ["let", "const", "var", "readonly"],
    "options_hi": ["let", "const", "var", "readonly"],
    "answer_en": "let",
    "answer_hi": "let",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which keyword is used to check object type at runtime?",
    "question_hi": "कौन सा keyword runtime पर object type check करने के लिए उपयोग होता है?",
    "options_en": ["instanceof", "typeof", "as", "interface"],
    "options_hi": ["instanceof", "typeof", "as", "interface"],
    "answer_en": "instanceof",
    "answer_hi": "instanceof",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which TypeScript feature allows converting one type to another?",
    "question_hi": "कौन सा TypeScript feature एक type को दूसरे type में convert करने देता है?",
    "options_en": ["type assertion", "type alias", "interface", "class"],
    "options_hi": ["type assertion", "type alias", "interface", "class"],
    "answer_en": "type assertion",
    "answer_hi": "type assertion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which keyword indicates a variable type conversion in TypeScript?",
    "question_hi": "कौन सा keyword TypeScript में variable type conversion दिखाता है?",
    "options_en": ["as", "is", "instanceof", "typeof"],
    "options_hi": ["as", "is", "instanceof", "typeof"],
    "answer_en": "as",
    "answer_hi": "as",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which TypeScript type represents a key-value mapping?",
    "question_hi": "कौन सा TypeScript type key-value mapping को represent करता है?",
    "options_en": ["Record", "Map", "Tuple", "Array"],
    "options_hi": ["Record", "Map", "Tuple", "Array"],
    "answer_en": "Record",
    "answer_hi": "Record",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Which TypeScript utility type excludes null and undefined from a type?",
    "question_hi": "कौन सा TypeScript utility type null और undefined को type से exclude करता है?",
    "options_en": ["NonNullable", "Partial", "Required", "Readonly"],
    "options_hi": ["NonNullable", "Partial", "Required", "Readonly"],
    "answer_en": "NonNullable",
    "answer_hi": "NonNullable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which keyword marks a method as abstract in TypeScript?",
    "question_hi": "कौन सा keyword TypeScript में method को abstract mark करता है?",
    "options_en": ["abstract", "override", "virtual", "implements"],
    "options_hi": ["abstract", "override", "virtual", "implements"],
    "answer_en": "abstract",
    "answer_hi": "abstract",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which TypeScript feature allows a class to define a constructor with default parameters?",
    "question_hi": "कौन सा TypeScript feature class को default parameters वाले constructor define करने देता है?",
    "options_en": ["default parameters", "optional parameters", "rest parameters", "tuple"],
    "options_hi": ["default parameters", "optional parameters", "rest parameters", "tuple"],
    "answer_en": "default parameters",
    "answer_hi": "default parameters",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which keyword allows importing a module in TypeScript?",
    "question_hi": "कौन सा keyword TypeScript में module import करने के लिए उपयोग होता है?",
    "options_en": ["import", "require", "export", "module"],
    "options_hi": ["import", "require", "export", "module"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which keyword pauses execution inside an async function?",
    "question_hi": "कौन सा keyword async function के अंदर execution को रोकता है?",
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