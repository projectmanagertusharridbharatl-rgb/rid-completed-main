const questions = [
  {
    "num": 1,
    "question_en": "Which TypeScript feature allows restricting a value to specific string literals?",
    "question_hi": "कौन सा TypeScript feature value को specific string literals तक सीमित करने देता है?",
    "options_en": ["Literal Types", "Enums", "Union Types", "Any"],
    "options_hi": ["Literal Types", "Enums", "Union Types", "Any"],
    "answer_en": "Literal Types",
    "answer_hi": "Literal Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which utility type constructs a type by excluding properties from another type?",
    "question_hi": "कौन सा utility type किसी type से properties exclude करके नया type बनाता है?",
    "options_en": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
    "options_hi": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
    "answer_en": "Omit<T, K>",
    "answer_hi": "Omit<T, K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which TypeScript keyword enforces a class to implement an interface?",
    "question_hi": "कौन सा TypeScript keyword class को interface implement करने के लिए बाध्य करता है?",
    "options_en": ["implements", "extends", "abstract", "readonly"],
    "options_hi": ["implements", "extends", "abstract", "readonly"],
    "answer_en": "implements",
    "answer_hi": "implements",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which TypeScript feature allows mapping all properties of a type to a new type?",
    "question_hi": "कौन सा TypeScript feature type की सभी properties को नए type में map करता है?",
    "options_en": ["Mapped Types", "Union Types", "Intersection Types", "Conditional Types"],
    "options_hi": ["Mapped Types", "Union Types", "Intersection Types", "Conditional Types"],
    "answer_en": "Mapped Types",
    "answer_hi": "Mapped Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which TypeScript type utility constructs a type with all properties as readonly?",
    "question_hi": "कौन सा TypeScript utility type सभी properties को readonly बनाता है?",
    "options_en": ["Readonly<T>", "Partial<T>", "Required<T>", "Pick<T>"],
    "options_hi": ["Readonly<T>", "Partial<T>", "Required<T>", "Pick<T>"],
    "answer_en": "Readonly<T>",
    "answer_hi": "Readonly<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which TypeScript keyword declares a generic type parameter?",
    "question_hi": "कौन सा TypeScript keyword generic type parameter declare करने के लिए use होता है?",
    "options_en": ["<T>", "type", "interface", "class"],
    "options_hi": ["<T>", "type", "interface", "class"],
    "answer_en": "<T>",
    "answer_hi": "<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which TypeScript feature allows creating a type based on another type conditionally?",
    "question_hi": "कौन सा TypeScript feature एक type को दूसरे type पर conditional रूप से define करता है?",
    "options_en": ["Conditional Types", "Mapped Types", "Intersection Types", "Union Types"],
    "options_hi": ["Conditional Types", "Mapped Types", "Intersection Types", "Union Types"],
    "answer_en": "Conditional Types",
    "answer_hi": "Conditional Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which TypeScript keyword allows a class to inherit from another class?",
    "question_hi": "कौन सा TypeScript keyword एक class को दूसरी class से inherit करने देता है?",
    "options_en": ["extends", "implements", "super", "abstract"],
    "options_hi": ["extends", "implements", "super", "abstract"],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which TypeScript feature extracts keys of a type as a union type?",
    "question_hi": "कौन सा TypeScript feature type की keys को union type के रूप में extract करता है?",
    "options_en": ["keyof", "typeof", "instanceof", "as"],
    "options_hi": ["keyof", "typeof", "instanceof", "as"],
    "answer_en": "keyof",
    "answer_hi": "keyof",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which TypeScript utility type constructs a type with only specified keys from another type?",
    "question_hi": "कौन सा TypeScript utility type केवल specified keys को लेकर नया type बनाता है?",
    "options_en": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Required<T>"],
    "options_hi": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Required<T>"],
    "answer_en": "Pick<T, K>",
    "answer_hi": "Pick<T, K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which TypeScript utility type constructs a type by excluding undefined and null?",
    "question_hi": "कौन सा TypeScript utility type undefined और null को exclude करके type बनाता है?",
    "options_en": ["NonNullable<T>", "Partial<T>", "Required<T>", "Readonly<T>"],
    "options_hi": ["NonNullable<T>", "Partial<T>", "Required<T>", "Readonly<T>"],
    "answer_en": "NonNullable<T>",
    "answer_hi": "NonNullable<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which TypeScript feature allows type assertion?",
    "question_hi": "कौन सा TypeScript feature type assertion की अनुमति देता है?",
    "options_en": ["as", "<T>", "typeof", "instanceof"],
    "options_hi": ["as", "<T>", "typeof", "instanceof"],
    "answer_en": "as",
    "answer_hi": "as",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which TypeScript type represents a value that never occurs?",
    "question_hi": "कौन सा TypeScript type ऐसे value को represent करता है जो कभी occur नहीं होता?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which TypeScript keyword allows defining an abstract class?",
    "question_hi": "कौन सा TypeScript keyword abstract class define करने के लिए use होता है?",
    "options_en": ["abstract", "extends", "implements", "readonly"],
    "options_hi": ["abstract", "extends", "implements", "readonly"],
    "answer_en": "abstract",
    "answer_hi": "abstract",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which TypeScript keyword allows defining a read-only property?",
    "question_hi": "कौन सा TypeScript keyword read-only property define करने के लिए use होता है?",
    "options_en": ["readonly", "private", "protected", "public"],
    "options_hi": ["readonly", "private", "protected", "public"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which TypeScript feature allows combining multiple types into one?",
    "question_hi": "कौन सा TypeScript feature multiple types को combine करके एक type बनाता है?",
    "options_en": ["Intersection Types", "Union Types", "Literal Types", "Mapped Types"],
    "options_hi": ["Intersection Types", "Union Types", "Literal Types", "Mapped Types"],
    "answer_en": "Intersection Types",
    "answer_hi": "Intersection Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which TypeScript feature allows defining multiple possible types for a property?",
    "question_hi": "कौन सा TypeScript feature property के लिए multiple possible types define करने देता है?",
    "options_en": ["Union Types", "Intersection Types", "Literal Types", "Mapped Types"],
    "options_hi": ["Union Types", "Intersection Types", "Literal Types", "Mapped Types"],
    "answer_en": "Union Types",
    "answer_hi": "Union Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which TypeScript feature maps an existing type into a new type?",
    "question_hi": "कौन सा TypeScript feature existing type को नए type में map करता है?",
    "options_en": ["Mapped Types", "Union Types", "Intersection Types", "Conditional Types"],
    "options_hi": ["Mapped Types", "Union Types", "Intersection Types", "Conditional Types"],
    "answer_en": "Mapped Types",
    "answer_hi": "Mapped Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which TypeScript feature creates type aliases?",
    "question_hi": "कौन सा TypeScript feature type alias बनाने के लिए use होता है?",
    "options_en": ["type", "interface", "enum", "class"],
    "options_hi": ["type", "interface", "enum", "class"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which TypeScript keyword allows overriding methods in a subclass?",
    "question_hi": "कौन सा TypeScript keyword subclass में methods override करने के लिए use होता है?",
    "options_en": ["override", "extends", "implements", "abstract"],
    "options_hi": ["override", "extends", "implements", "abstract"],
    "answer_en": "override",
    "answer_hi": "override",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which TypeScript utility type makes all properties of a type optional?",
    "question_hi": "कौन सा TypeScript utility type type की सभी properties को optional बनाता है?",
    "options_en": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T, K>"],
    "options_hi": ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T, K>"],
    "answer_en": "Partial<T>",
    "answer_hi": "Partial<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which TypeScript utility type makes all properties of a type required?",
    "question_hi": "कौन सा TypeScript utility type type की सभी properties को required बनाता है?",
    "options_en": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T, K>"],
    "options_hi": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T, K>"],
    "answer_en": "Required<T>",
    "answer_hi": "Required<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which TypeScript feature represents type based on conditions?",
    "question_hi": "कौन सा TypeScript feature conditional आधार पर type represent करता है?",
    "options_en": ["Conditional Types", "Mapped Types", "Union Types", "Intersection Types"],
    "options_hi": ["Conditional Types", "Mapped Types", "Union Types", "Intersection Types"],
    "answer_en": "Conditional Types",
    "answer_hi": "Conditional Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which TypeScript keyword gets the type of a variable or expression?",
    "question_hi": "कौन सा TypeScript keyword variable या expression का type पता करने के लिए use होता है?",
    "options_en": ["typeof", "keyof", "instanceof", "as"],
    "options_hi": ["typeof", "keyof", "instanceof", "as"],
    "answer_en": "typeof",
    "answer_hi": "typeof",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which TypeScript keyword extracts the type of a class or interface keys?",
    "question_hi": "कौन सा TypeScript keyword class या interface की keys का type extract करता है?",
    "options_en": ["keyof", "typeof", "extends", "implements"],
    "options_hi": ["keyof", "typeof", "extends", "implements"],
    "answer_en": "keyof",
    "answer_hi": "keyof",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which TypeScript type allows representing an object with arbitrary properties of a specific type?",
    "question_hi": "कौन सा TypeScript type arbitrary properties वाले object को specific type के लिए represent करता है?",
    "options_en": ["Record<K, T>", "Partial<T>", "Readonly<T>", "Pick<T, K>"],
    "options_hi": ["Record<K, T>", "Partial<T>", "Readonly<T>", "Pick<T, K>"],
    "answer_en": "Record<K, T>",
    "answer_hi": "Record<K, T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which TypeScript feature combines multiple types into a single type that satisfies all of them?",
    "question_hi": "कौन सा TypeScript feature multiple types को combine करके ऐसा type बनाता है जो सभी को satisfy करे?",
    "options_en": ["Intersection Types", "Union Types", "Literal Types", "Mapped Types"],
    "options_hi": ["Intersection Types", "Union Types", "Literal Types", "Mapped Types"],
    "answer_en": "Intersection Types",
    "answer_hi": "Intersection Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which TypeScript feature allows restricting a property to specific literal values?",
    "question_hi": "कौन सा TypeScript feature property को specific literal values तक सीमित करता है?",
    "options_en": ["Literal Types", "Enums", "Union Types", "Any"],
    "options_hi": ["Literal Types", "Enums", "Union Types", "Any"],
    "answer_en": "Literal Types",
    "answer_hi": "Literal Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which TypeScript type represents a value that can be any type?",
    "question_hi": "कौन सा TypeScript type किसी भी type की value को represent करता है?",
    "options_en": ["any", "unknown", "void", "never"],
    "options_hi": ["any", "unknown", "void", "never"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which TypeScript type represents a value whose type is unknown at compile time?",
    "question_hi": "कौन सा TypeScript type compile time पर unknown type वाली value को represent करता है?",
    "options_en": ["unknown", "any", "void", "never"],
    "options_hi": ["unknown", "any", "void", "never"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which TypeScript feature allows creating type-safe enums?",
    "question_hi": "कौन सा TypeScript feature type-safe enums बनाने के लिए use होता है?",
    "options_en": ["Enums", "Union Types", "Literal Types", "Mapped Types"],
    "options_hi": ["Enums", "Union Types", "Literal Types", "Mapped Types"],
    "answer_en": "Enums",
    "answer_hi": "Enums",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which TypeScript keyword allows type assertion in a safer way?",
    "question_hi": "कौन सा TypeScript keyword type assertion को safer way में allow करता है?",
    "options_en": ["as", "<T>", "typeof", "keyof"],
    "options_hi": ["as", "<T>", "typeof", "keyof"],
    "answer_en": "as",
    "answer_hi": "as",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which TypeScript keyword is used to check if an object is instance of a class?",
    "question_hi": "कौन सा TypeScript keyword object के class का instance होने की जांच करता है?",
    "options_en": ["instanceof", "typeof", "keyof", "extends"],
    "options_hi": ["instanceof", "typeof", "keyof", "extends"],
    "answer_en": "instanceof",
    "answer_hi": "instanceof",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which TypeScript type represents the absence of a return value?",
    "question_hi": "कौन सा TypeScript type return value के अभाव को represent करता है?",
    "options_en": ["void", "never", "any", "unknown"],
    "options_hi": ["void", "never", "any", "unknown"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which TypeScript keyword allows defining a class that cannot be instantiated directly?",
    "question_hi": "कौन सा TypeScript keyword class को define करता है जिसे directly instantiate नहीं किया जा सकता?",
    "options_en": ["abstract", "extends", "implements", "readonly"],
    "options_hi": ["abstract", "extends", "implements", "readonly"],
    "answer_en": "abstract",
    "answer_hi": "abstract",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which TypeScript feature allows defining multiple possible types for a function parameter?",
    "question_hi": "कौन सा TypeScript feature function parameter के लिए multiple possible types define करने देता है?",
    "options_en": ["Union Types", "Intersection Types", "Literal Types", "Mapped Types"],
    "options_hi": ["Union Types", "Intersection Types", "Literal Types", "Mapped Types"],
    "answer_en": "Union Types",
    "answer_hi": "Union Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which TypeScript feature allows defining custom type guards?",
    "question_hi": "कौन सा TypeScript feature custom type guards define करने की अनुमति देता है?",
    "options_en": ["Type Predicates", "Conditional Types", "Mapped Types", "Union Types"],
    "options_hi": ["Type Predicates", "Conditional Types", "Mapped Types", "Union Types"],
    "answer_en": "Type Predicates",
    "answer_hi": "Type Predicates",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which TypeScript feature allows creating types by combining multiple types into one?",
    "question_hi": "कौन सा TypeScript feature multiple types को combine करके एक नया type बनाता है?",
    "options_en": ["Intersection Types", "Union Types", "Literal Types", "Mapped Types"],
    "options_hi": ["Intersection Types", "Union Types", "Literal Types", "Mapped Types"],
    "answer_en": "Intersection Types",
    "answer_hi": "Intersection Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which TypeScript feature allows transforming an existing type into a new type with modifications?",
    "question_hi": "कौन सा TypeScript feature existing type को modifications के साथ नए type में transform करता है?",
    "options_en": ["Mapped Types", "Union Types", "Intersection Types", "Conditional Types"],
    "options_hi": ["Mapped Types", "Union Types", "Intersection Types", "Conditional Types"],
    "answer_en": "Mapped Types",
    "answer_hi": "Mapped Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which TypeScript feature creates a new type by selecting some properties of another type?",
    "question_hi": "कौन सा TypeScript feature किसी type की कुछ properties को select करके नया type बनाता है?",
    "options_en": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Required<T>"],
    "options_hi": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Required<T>"],
    "answer_en": "Pick<T, K>",
    "answer_hi": "Pick<T, K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which TypeScript feature creates a new type by removing some properties from another type?",
    "question_hi": "कौन सा TypeScript feature किसी type की कुछ properties remove करके नया type बनाता है?",
    "options_en": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
    "options_hi": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
    "answer_en": "Omit<T, K>",
    "answer_hi": "Omit<T, K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which TypeScript feature enforces type safety at compile time?",
    "question_hi": "कौन सा TypeScript feature compile time पर type safety enforce करता है?",
    "options_en": ["Static Typing", "Dynamic Typing", "Union Types", "Any"],
    "options_hi": ["Static Typing", "Dynamic Typing", "Union Types", "Any"],
    "answer_en": "Static Typing",
    "answer_hi": "Static Typing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which TypeScript type represents a function signature with no return value?",
    "question_hi": "कौन सा TypeScript type function signature को represent करता है जिसमें कोई return value नहीं होती?",
    "options_en": ["void", "never", "any", "unknown"],
    "options_hi": ["void", "never", "any", "unknown"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which TypeScript keyword defines a readonly array or tuple?",
    "question_hi": "कौन सा TypeScript keyword readonly array या tuple define करता है?",
    "options_en": ["readonly", "const", "immutable", "final"],
    "options_hi": ["readonly", "const", "immutable", "final"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which TypeScript feature allows you to define types for function parameters and return values?",
    "question_hi": "कौन सा TypeScript feature function parameters और return values के लिए types define करने देता है?",
    "options_en": ["Type Annotations", "Type Assertions", "Interfaces", "Generics"],
    "options_hi": ["Type Annotations", "Type Assertions", "Interfaces", "Generics"],
    "answer_en": "Type Annotations",
    "answer_hi": "Type Annotations",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which TypeScript feature allows parameterizing a function or class with types?",
    "question_hi": "कौन सा TypeScript feature function या class को types के साथ parameterize करने देता है?",
    "options_en": ["Generics", "Union Types", "Intersection Types", "Mapped Types"],
    "options_hi": ["Generics", "Union Types", "Intersection Types", "Mapped Types"],
    "answer_en": "Generics",
    "answer_hi": "Generics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which TypeScript keyword allows referring to the parent class constructor?",
    "question_hi": "कौन सा TypeScript keyword parent class constructor को refer करने देता है?",
    "options_en": ["super", "extends", "this", "base"],
    "options_hi": ["super", "extends", "this", "base"],
    "answer_en": "super",
    "answer_hi": "super",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which TypeScript feature allows combining multiple types but accepting only one at a time?",
    "question_hi": "कौन सा TypeScript feature multiple types combine करता है लेकिन एक समय में केवल एक accept करता है?",
    "options_en": ["Union Types", "Intersection Types", "Literal Types", "Mapped Types"],
    "options_hi": ["Union Types", "Intersection Types", "Literal Types", "Mapped Types"],
    "answer_en": "Union Types",
    "answer_hi": "Union Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which TypeScript feature allows defining a type that never occurs?",
    "question_hi": "कौन सा TypeScript feature type define करता है जो कभी occur नहीं होता?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which TypeScript keyword allows pausing asynchronous function execution until a promise resolves?",
    "question_hi": "कौन सा TypeScript keyword asynchronous function execution को रोकता है जब तक promise resolve नहीं होता?",
    "options_en": ["await", "async", "pause", "stop"],
    "options_hi": ["await", "async", "pause", "stop"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Which TypeScript feature allows creating a type by excluding null and undefined from another type?",
    "question_hi": "कौन सा TypeScript feature किसी type से null और undefined को exclude करके नया type बनाता है?",
    "options_en": ["NonNullable<T>", "Partial<T>", "Required<T>", "Readonly<T>"],
    "options_hi": ["NonNullable<T>", "Partial<T>", "Required<T>", "Readonly<T>"],
    "answer_en": "NonNullable<T>",
    "answer_hi": "NonNullable<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which TypeScript feature allows creating a type from a set of string literals?",
    "question_hi": "कौन सा TypeScript feature string literals के set से type बनाता है?",
    "options_en": ["Literal Types", "Enums", "Union Types", "Intersection Types"],
    "options_hi": ["Literal Types", "Enums", "Union Types", "Intersection Types"],
    "answer_en": "Literal Types",
    "answer_hi": "Literal Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which TypeScript feature allows you to enforce immutability on objects or arrays?",
    "question_hi": "कौन सा TypeScript feature objects या arrays पर immutability enforce करता है?",
    "options_en": ["Readonly<T>", "Partial<T>", "Required<T>", "Omit<T, K>"],
    "options_hi": ["Readonly<T>", "Partial<T>", "Required<T>", "Omit<T, K>"],
    "answer_en": "Readonly<T>",
    "answer_hi": "Readonly<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which TypeScript feature allows transforming one type into another type based on a condition?",
    "question_hi": "कौन सा TypeScript feature एक type को condition के आधार पर दूसरे type में transform करता है?",
    "options_en": ["Conditional Types", "Mapped Types", "Union Types", "Intersection Types"],
    "options_hi": ["Conditional Types", "Mapped Types", "Union Types", "Intersection Types"],
    "answer_en": "Conditional Types",
    "answer_hi": "Conditional Types",
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
    "question_en": "Which TypeScript keyword allows defining a type-safe function parameter that can accept multiple types?",
    "question_hi": "कौन सा TypeScript keyword type-safe function parameter define करता है जो multiple types accept कर सकता है?",
    "options_en": ["Union Types", "Intersection Types", "Generics", "Literal Types"],
    "options_hi": ["Union Types", "Intersection Types", "Generics", "Literal Types"],
    "answer_en": "Union Types",
    "answer_hi": "Union Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which TypeScript feature allows creating type-safe object maps with fixed keys?",
    "question_hi": "कौन सा TypeScript feature fixed keys के साथ type-safe object maps बनाता है?",
    "options_en": ["Record<K, T>", "Partial<T>", "Pick<T, K>", "Omit<T, K>"],
    "options_hi": ["Record<K, T>", "Partial<T>", "Pick<T, K>", "Omit<T, K>"],
    "answer_en": "Record<K, T>",
    "answer_hi": "Record<K, T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which TypeScript feature allows you to combine multiple types but only accept properties common to all types?",
    "question_hi": "कौन सा TypeScript feature multiple types combine करता है लेकिन केवल common properties accept करता है?",
    "options_en": ["Intersection Types", "Union Types", "Literal Types", "Mapped Types"],
    "options_hi": ["Intersection Types", "Union Types", "Literal Types", "Mapped Types"],
    "answer_en": "Intersection Types",
    "answer_hi": "Intersection Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Which TypeScript feature allows defining types with dynamic keys?",
    "question_hi": "कौन सा TypeScript feature dynamic keys वाले types define करने देता है?",
    "options_en": ["Index Signatures", "Mapped Types", "Union Types", "Literal Types"],
    "options_hi": ["Index Signatures", "Mapped Types", "Union Types", "Literal Types"],
    "answer_en": "Index Signatures",
    "answer_hi": "Index Signatures",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which TypeScript feature allows defining a type-safe method for type narrowing?",
    "question_hi": "कौन सा TypeScript feature type narrowing के लिए type-safe method define करता है?",
    "options_en": ["Type Predicates", "Conditional Types", "Mapped Types", "Union Types"],
    "options_hi": ["Type Predicates", "Conditional Types", "Mapped Types", "Union Types"],
    "answer_en": "Type Predicates",
    "answer_hi": "Type Predicates",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Which TypeScript feature ensures a property can only accept one specific value out of several?",
    "question_hi": "कौन सा TypeScript feature property को केवल एक specific value accept करने देता है?",
    "options_en": ["Literal Types", "Union Types", "Enums", "Intersection Types"],
    "options_hi": ["Literal Types", "Union Types", "Enums", "Intersection Types"],
    "answer_en": "Literal Types",
    "answer_hi": "Literal Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which TypeScript feature allows mapping all properties of a type to a new type?",
    "question_hi": "कौन सा TypeScript feature type की सभी properties को नए type में map करता है?",
    "options_en": ["Mapped Types", "Conditional Types", "Union Types", "Intersection Types"],
    "options_hi": ["Mapped Types", "Conditional Types", "Union Types", "Intersection Types"],
    "answer_en": "Mapped Types",
    "answer_hi": "Mapped Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which TypeScript feature allows restricting type values to a predefined set of string or numeric constants?",
    "question_hi": "कौन सा TypeScript feature type values को predefined string या numeric constants तक restrict करता है?",
    "options_en": ["Enums", "Union Types", "Literal Types", "Intersection Types"],
    "options_hi": ["Enums", "Union Types", "Literal Types", "Intersection Types"],
    "answer_en": "Enums",
    "answer_hi": "Enums",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which TypeScript utility type makes all properties of an object immutable?",
    "question_hi": "कौन सा TypeScript utility type object की सभी properties को immutable बनाता है?",
    "options_en": ["Readonly<T>", "Partial<T>", "Required<T>", "Omit<T, K>"],
    "options_hi": ["Readonly<T>", "Partial<T>", "Required<T>", "Omit<T, K>"],
    "answer_en": "Readonly<T>",
    "answer_hi": "Readonly<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Which TypeScript type represents a value that is guaranteed to never occur?",
    "question_hi": "कौन सा TypeScript type ऐसी value को represent करता है जो कभी occur नहीं होती?",
    "options_en": ["never", "void", "any", "unknown"],
    "options_hi": ["never", "void", "any", "unknown"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Which TypeScript keyword allows a class to implement an interface?",
    "question_hi": "कौन सा TypeScript keyword class को interface implement करने देता है?",
    "options_en": ["implements", "extends", "abstract", "readonly"],
    "options_hi": ["implements", "extends", "abstract", "readonly"],
    "answer_en": "implements",
    "answer_hi": "implements",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which TypeScript feature allows defining a type-safe function that accepts arguments of different types?",
    "question_hi": "कौन सा TypeScript feature type-safe function define करता है जो अलग-अलग types के arguments accept करता है?",
    "options_en": ["Generics", "Union Types", "Intersection Types", "Literal Types"],
    "options_hi": ["Generics", "Union Types", "Intersection Types", "Literal Types"],
    "answer_en": "Generics",
    "answer_hi": "Generics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which TypeScript keyword allows referring to the current class instance?",
    "question_hi": "कौन सा TypeScript keyword current class instance को refer करता है?",
    "options_en": ["this", "super", "self", "base"],
    "options_hi": ["this", "super", "self", "base"],
    "answer_en": "this",
    "answer_hi": "this",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which TypeScript feature allows restricting a type to exclude specific keys?",
    "question_hi": "कौन सा TypeScript feature type को कुछ specific keys exclude करने तक restrict करता है?",
    "options_en": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
    "options_hi": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
    "answer_en": "Omit<T, K>",
    "answer_hi": "Omit<T, K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which TypeScript feature allows creating a new type by selecting specific keys from another type?",
    "question_hi": "कौन सा TypeScript feature specific keys select करके नया type बनाता है?",
    "options_en": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Required<T>"],
    "options_hi": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Required<T>"],
    "answer_en": "Pick<T, K>",
    "answer_hi": "Pick<T, K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "Which TypeScript feature allows type checking at compile time to prevent errors?",
    "question_hi": "कौन सा TypeScript feature compile time पर type checking करता है ताकि errors prevent हो सकें?",
    "options_en": ["Static Typing", "Dynamic Typing", "Union Types", "Any"],
    "options_hi": ["Static Typing", "Dynamic Typing", "Union Types", "Any"],
    "answer_en": "Static Typing",
    "answer_hi": "Static Typing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which TypeScript feature allows defining a variable whose type is determined by another variable?",
    "question_hi": "कौन सा TypeScript feature variable define करता है जिसकी type किसी और variable से determined होती है?",
    "options_en": ["typeof", "keyof", "instanceof", "as"],
    "options_hi": ["typeof", "keyof", "instanceof", "as"],
    "answer_en": "typeof",
    "answer_hi": "typeof",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which TypeScript feature allows creating a type that is a subset of another type?",
    "question_hi": "कौन सा TypeScript feature type बनाता है जो किसी और type का subset हो?",
    "options_en": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Required<T>"],
    "options_hi": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Required<T>"],
    "answer_en": "Pick<T, K>",
    "answer_hi": "Pick<T, K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which TypeScript feature allows creating a type that excludes certain properties from another type?",
    "question_hi": "कौन सा TypeScript feature type बनाता है जो कुछ properties exclude करता है?",
    "options_en": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
    "options_hi": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
    "answer_en": "Omit<T, K>",
    "answer_hi": "Omit<T, K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which TypeScript feature allows defining the type of a function’s return value?",
    "question_hi": "कौन सा TypeScript feature function की return value का type define करने देता है?",
    "options_en": ["Type Annotations", "Type Assertions", "Generics", "Union Types"],
    "options_hi": ["Type Annotations", "Type Assertions", "Generics", "Union Types"],
    "answer_en": "Type Annotations",
    "answer_hi": "Type Annotations",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Which TypeScript feature allows converting a type to be optional for all its properties?",
    "question_hi": "कौन सा TypeScript feature किसी type की सभी properties को optional बनाता है?",
    "options_en": ["Partial<T>", "Required<T>", "Readonly<T>", "Omit<T, K>"],
    "options_hi": ["Partial<T>", "Required<T>", "Readonly<T>", "Omit<T, K>"],
    "answer_en": "Partial<T>",
    "answer_hi": "Partial<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Which TypeScript feature allows making all properties required in a type?",
    "question_hi": "कौन सा TypeScript feature किसी type की सभी properties को required बनाता है?",
    "options_en": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T, K>"],
    "options_hi": ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T, K>"],
    "answer_en": "Required<T>",
    "answer_hi": "Required<T>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which TypeScript feature allows asserting the type of a variable at compile time?",
    "question_hi": "कौन सा TypeScript feature variable का type compile time पर assert करने देता है?",
    "options_en": ["Type Assertions", "Type Annotations", "Generics", "Union Types"],
    "options_hi": ["Type Assertions", "Type Annotations", "Generics", "Union Types"],
    "answer_en": "Type Assertions",
    "answer_hi": "Type Assertions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which TypeScript keyword allows a class to define abstract methods?",
    "question_hi": "कौन सा TypeScript keyword class को abstract methods define करने देता है?",
    "options_en": ["abstract", "implements", "extends", "readonly"],
    "options_hi": ["abstract", "implements", "extends", "readonly"],
    "answer_en": "abstract",
    "answer_hi": "abstract",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which TypeScript feature allows combining multiple types into one?",
    "question_hi": "कौन सा TypeScript feature multiple types को combine करके एक बनाता है?",
    "options_en": ["Intersection Types", "Union Types", "Literal Types", "Mapped Types"],
    "options_hi": ["Intersection Types", "Union Types", "Literal Types", "Mapped Types"],
    "answer_en": "Intersection Types",
    "answer_hi": "Intersection Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Which TypeScript keyword allows a subclass to call a method from its parent class?",
    "question_hi": "कौन सा TypeScript keyword subclass को parent class का method call करने देता है?",
    "options_en": ["super", "this", "extends", "implements"],
    "options_hi": ["super", "this", "extends", "implements"],
    "answer_en": "super",
    "answer_hi": "super",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which TypeScript feature allows creating a type-safe enum?",
    "question_hi": "कौन सा TypeScript feature type-safe enum बनाता है?",
    "options_en": ["Enums", "Union Types", "Literal Types", "Intersection Types"],
    "options_hi": ["Enums", "Union Types", "Literal Types", "Intersection Types"],
    "answer_en": "Enums",
    "answer_hi": "Enums",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "Which TypeScript feature allows creating a type with all properties of T except K?",
    "question_hi": "कौन सा TypeScript feature T की सभी properties के साथ type बनाता है सिवाय K के?",
    "options_en": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
    "options_hi": ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Required<T>"],
    "answer_en": "Omit<T, K>",
    "answer_hi": "Omit<T, K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which TypeScript feature allows creating a type with only selected properties of another type?",
    "question_hi": "कौन सा TypeScript feature केवल चुनी हुई properties के साथ type बनाता है?",
    "options_en": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Required<T>"],
    "options_hi": ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Required<T>"],
    "answer_en": "Pick<T, K>",
    "answer_hi": "Pick<T, K>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which TypeScript type represents a value that may be null or undefined?",
    "question_hi": "कौन सा TypeScript type value को null या undefined होने की अनुमति देता है?",
    "options_en": ["null | undefined", "never", "any", "void"],
    "options_hi": ["null | undefined", "never", "any", "void"],
    "answer_en": "null | undefined",
    "answer_hi": "null | undefined",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Which TypeScript feature allows restricting a value to a set of predefined strings?",
    "question_hi": "कौन सा TypeScript feature value को predefined strings के set तक restrict करता है?",
    "options_en": ["Union Types", "Literal Types", "Enums", "Intersection Types"],
    "options_hi": ["Union Types", "Literal Types", "Enums", "Intersection Types"],
    "answer_en": "Literal Types",
    "answer_hi": "Literal Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which TypeScript feature allows you to safely access nested object properties?",
    "question_hi": "कौन सा TypeScript feature nested object properties को safely access करने देता है?",
    "options_en": ["Optional Chaining", "Nullish Coalescing", "Type Assertion", "Type Guard"],
    "options_hi": ["Optional Chaining", "Nullish Coalescing", "Type Assertion", "Type Guard"],
    "answer_en": "Optional Chaining",
    "answer_hi": "Optional Chaining",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which TypeScript feature allows you to provide a default value if a property is null or undefined?",
    "question_hi": "कौन सा TypeScript feature default value provide करता है अगर property null या undefined हो?",
    "options_en": ["Nullish Coalescing Operator (??)", "Optional Chaining", "Type Guard", "Type Assertion"],
    "options_hi": ["Nullish Coalescing Operator (??)", "Optional Chaining", "Type Guard", "Type Assertion"],
    "answer_en": "Nullish Coalescing Operator (??)",
    "answer_hi": "Nullish Coalescing Operator (??)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which TypeScript feature allows checking the type of a variable at runtime?",
    "question_hi": "कौन सा TypeScript feature runtime पर variable का type check करने देता है?",
    "options_en": ["Type Guards", "Type Assertions", "Union Types", "Literal Types"],
    "options_hi": ["Type Guards", "Type Assertions", "Union Types", "Literal Types"],
    "answer_en": "Type Guards",
    "answer_hi": "Type Guards",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which TypeScript feature allows defining a tuple with fixed types and length?",
    "question_hi": "कौन सा TypeScript feature fixed types और length वाला tuple define करता है?",
    "options_en": ["Tuples", "Arrays", "Union Types", "Intersection Types"],
    "options_hi": ["Tuples", "Arrays", "Union Types", "Intersection Types"],
    "answer_en": "Tuples",
    "answer_hi": "Tuples",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Which TypeScript feature allows converting one type to another type conditionally?",
    "question_hi": "कौन सा TypeScript feature एक type को condition के आधार पर दूसरे type में convert करता है?",
    "options_en": ["Conditional Types", "Mapped Types", "Union Types", "Intersection Types"],
    "options_hi": ["Conditional Types", "Mapped Types", "Union Types", "Intersection Types"],
    "answer_en": "Conditional Types",
    "answer_hi": "Conditional Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which TypeScript feature allows defining the type of object keys dynamically?",
    "question_hi": "कौन सा TypeScript feature object keys का type dynamically define करता है?",
    "options_en": ["Index Signatures", "Mapped Types", "Union Types", "Literal Types"],
    "options_hi": ["Index Signatures", "Mapped Types", "Union Types", "Literal Types"],
    "answer_en": "Index Signatures",
    "answer_hi": "Index Signatures",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Which TypeScript feature allows asserting a more specific type from a general type?",
    "question_hi": "कौन सा TypeScript feature general type से more specific type assert करने देता है?",
    "options_en": ["Type Assertions", "Type Guards", "Generics", "Union Types"],
    "options_hi": ["Type Assertions", "Type Guards", "Generics", "Union Types"],
    "answer_en": "Type Assertions",
    "answer_hi": "Type Assertions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which TypeScript feature allows you to define a class property that cannot be reassigned?",
    "question_hi": "कौन सा TypeScript feature class property को define करता है जो reassigned नहीं हो सकता?",
    "options_en": ["readonly", "private", "protected", "public"],
    "options_hi": ["readonly", "private", "protected", "public"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which TypeScript feature allows extracting the type of elements from an array type?",
    "question_hi": "कौन सा TypeScript feature array type के elements का type extract करता है?",
    "options_en": ["infer", "keyof", "typeof", "as const"],
    "options_hi": ["infer", "keyof", "typeof", "as const"],
    "answer_en": "infer",
    "answer_hi": "infer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Which TypeScript feature allows you to define a type alias for a function signature?",
    "question_hi": "कौन सा TypeScript feature function signature के लिए type alias define करता है?",
    "options_en": ["type alias", "interface", "class", "enum"],
    "options_hi": ["type alias", "interface", "class", "enum"],
    "answer_en": "type alias",
    "answer_hi": "type alias",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Which TypeScript keyword allows creating an abstract class?",
    "question_hi": "कौन सा TypeScript keyword abstract class बनाने के लिए उपयोग होता है?",
    "options_en": ["abstract", "extends", "implements", "readonly"],
    "options_hi": ["abstract", "extends", "implements", "readonly"],
    "answer_en": "abstract",
    "answer_hi": "abstract",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which TypeScript feature allows combining multiple interfaces into one?",
    "question_hi": "कौन सा TypeScript feature multiple interfaces को एक में combine करता है?",
    "options_en": ["Interface Merging", "Union Types", "Intersection Types", "Literal Types"],
    "options_hi": ["Interface Merging", "Union Types", "Intersection Types", "Literal Types"],
    "answer_en": "Interface Merging",
    "answer_hi": "Interface Merging",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which TypeScript feature allows you to extract a type from another type using keyof?",
    "question_hi": "कौन सा TypeScript feature keyof का उपयोग करके किसी type से type extract करता है?",
    "options_en": ["keyof", "typeof", "infer", "Partial<T>"],
    "options_hi": ["keyof", "typeof", "infer", "Partial<T>"],
    "answer_en": "keyof",
    "answer_hi": "keyof",
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