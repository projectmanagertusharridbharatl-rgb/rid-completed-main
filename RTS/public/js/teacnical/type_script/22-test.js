const questions = [
  {
    "num": 1,
    "question_en": "What is TypeScript mainly used for?",
    "question_hi": "TypeScript मुख्य रूप से किसके लिए उपयोग किया जाता है?",
    "options_en": ["Static typing", "Database queries", "Operating systems", "Networking"],
    "options_hi": ["स्टैटिक टाइपिंग", "डेटाबेस क्वेरी", "ऑपरेटिंग सिस्टम", "नेटवर्किंग"],
    "answer_en": "Static typing",
    "answer_hi": "स्टैटिक टाइपिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which file extension is used for TypeScript?",
    "question_hi": "TypeScript के लिए कौन सा file extension उपयोग होता है?",
    "options_en": [".js", ".ts", ".json", ".jsx"],
    "options_hi": [".js", ".ts", ".json", ".jsx"],
    "answer_en": ".ts",
    "answer_hi": ".ts",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "TypeScript is a superset of which language?",
    "question_hi": "TypeScript किस language का superset है?",
    "options_en": ["Python", "Java", "JavaScript", "Ruby"],
    "options_hi": ["Python", "Java", "JavaScript", "Ruby"],
    "answer_en": "JavaScript",
    "answer_hi": "JavaScript",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which TypeScript type represents absence of value?",
    "question_hi": "कौन सा TypeScript type value की अनुपस्थिति दर्शाता है?",
    "options_en": ["any", "void", "unknown", "object"],
    "options_hi": ["any", "void", "unknown", "object"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which keyword is used to define a variable with a constant value?",
    "question_hi": "Constant value के लिए कौन सा keyword उपयोग किया जाता है?",
    "options_en": ["let", "var", "const", "static"],
    "options_hi": ["let", "var", "const", "static"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which type allows any value without restrictions?",
    "question_hi": "कौन सा type किसी भी value को बिना restriction स्वीकार करता है?",
    "options_en": ["any", "unknown", "never", "void"],
    "options_hi": ["any", "unknown", "never", "void"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which operator is used for type assertion?",
    "question_hi": "Type assertion के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["as", ":", "::", "="],
    "options_hi": ["as", ":", "::", "="],
    "answer_en": "as",
    "answer_hi": "as",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which type represents a value that never occurs?",
    "question_hi": "कौन सा type उस value को दर्शाता है जो कभी नहीं होती?",
    "options_en": ["never", "unknown", "void", "null"],
    "options_hi": ["never", "unknown", "void", "null"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which TypeScript feature ensures type checking before execution?",
    "question_hi": "कौन सा TypeScript feature execution से पहले type checking करता है?",
    "options_en": ["Dynamic typing", "Static typing", "Loose typing", "Runtime typing"],
    "options_hi": ["डायनामिक टाइपिंग", "स्टैटिक टाइपिंग", "लूज़ टाइपिंग", "रनटाइम टाइपिंग"],
    "answer_en": "Static typing",
    "answer_hi": "स्टैटिक टाइपिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which keyword is used to create a class?",
    "question_hi": "Class बनाने के लिए कौन सा keyword उपयोग किया जाता है?",
    "options_en": ["object", "class", "struct", "model"],
    "options_hi": ["object", "class", "struct", "model"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which keyword is used for inheritance in TypeScript?",
    "question_hi": "TypeScript में inheritance के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["inherits", "extends", "super", "implements"],
    "options_hi": ["inherits", "extends", "super", "implements"],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which keyword calls the parent class constructor?",
    "question_hi": "Parent class का constructor कौन सा keyword call करता है?",
    "options_en": ["parent()", "base()", "super()", "extends()"],
    "options_hi": ["parent()", "base()", "super()", "extends()"],
    "answer_en": "super()",
    "answer_hi": "super()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which type restricts the variable to specific allowed values?",
    "question_hi": "कौन सा type variable को केवल विशेष मानों तक सीमित करता है?",
    "options_en": ["Literal type", "Tuple", "Any", "Record"],
    "options_hi": ["Literal type", "Tuple", "Any", "Record"],
    "answer_en": "Literal type",
    "answer_hi": "Literal type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which keyword defines a read-only class property?",
    "question_hi": "Class property को read-only बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["readonly", "static", "final", "sealed"],
    "options_hi": ["readonly", "static", "final", "sealed"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which keyword prevents modification of a variable?",
    "question_hi": "कौन सा keyword variable में बदलाव को रोकता है?",
    "options_en": ["const", "let", "var", "static"],
    "options_hi": ["const", "let", "var", "static"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which operator removes null and undefined from a type?",
    "question_hi": "कौन सा ऑपरेटर type से null और undefined हटाता है?",
    "options_en": ["!", "NonNullable", "??", "as"],
    "options_hi": ["!", "NonNullable", "??", "as"],
    "answer_en": "NonNullable",
    "answer_hi": "NonNullable",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 17,
    "question_en": "Which type is safer alternative to any?",
    "question_hi": "Any के सुरक्षित विकल्प के रूप में कौन सा type उपयोग होता है?",
    "options_en": ["unknown", "void", "never", "null"],
    "options_hi": ["unknown", "void", "never", "null"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 18,
    "question_en": "What is the default access modifier in TypeScript?",
    "question_hi": "TypeScript में default access modifier क्या है?",
    "options_en": ["public", "private", "protected", "readonly"],
    "options_hi": ["public", "private", "protected", "readonly"],
    "answer_en": "public",
    "answer_hi": "public",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 19,
    "question_en": "Which of the following is used to define interfaces?",
    "question_hi": "Interface define करने के लिए क्या उपयोग होता है?",
    "options_en": ["interface", "class", "module", "namespace"],
    "options_hi": ["interface", "class", "module", "namespace"],
    "answer_en": "interface",
    "answer_hi": "interface",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 20,
    "question_en": "Which property makes a method belong to the class rather than objects?",
    "question_hi": "कौन सी property method को class से जोड़ती है न कि object से?",
    "options_en": ["static", "readonly", "abstract", "virtual"],
    "options_hi": ["static", "readonly", "abstract", "virtual"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which directive compiles TypeScript to JavaScript?",
    "question_hi": "कौन सा निर्देश TypeScript को JavaScript में compile करता है?",
    "options_en": ["tsc", "npm run", "node", "js-build"],
    "options_hi": ["tsc", "npm run", "node", "js-build"],
    "answer_en": "tsc",
    "answer_hi": "tsc",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 22,
    "question_en": "Which file stores TypeScript compiler settings?",
    "question_hi": "TypeScript compiler settings किस file में store होती हैं?",
    "options_en": ["config.json", "tsconfig.json", "package.json", "settings.json"],
    "options_hi": ["config.json", "tsconfig.json", "package.json", "settings.json"],
    "answer_en": "tsconfig.json",
    "answer_hi": "tsconfig.json",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 23,
    "question_en": "Which type represents an array with fixed length and types?",
    "question_hi": "कौन सा type fixed length और types वाले array को दर्शाता है?",
    "options_en": ["tuple", "array", "record", "literal"],
    "options_hi": ["tuple", "array", "record", "literal"],
    "answer_en": "tuple",
    "answer_hi": "tuple",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 24,
    "question_en": "Which keyword is used to implement an interface?",
    "question_hi": "Interface को implement करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["extends", "implements", "uses", "apply"],
    "options_hi": ["extends", "implements", "uses", "apply"],
    "answer_en": "implements",
    "answer_hi": "implements",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 25,
    "question_en": "Which type is used when a value is not returned?",
    "question_hi": "कौन सा type तब उपयोग होता है जब कोई value return नहीं होती?",
    "options_en": ["void", "never", "null", "undefined"],
    "options_hi": ["void", "never", "null", "undefined"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which keyword creates an abstract class?",
    "question_hi": "Abstract class बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["abstract", "static", "virtual", "implements"],
    "options_hi": ["abstract", "static", "virtual", "implements"],
    "answer_en": "abstract",
    "answer_hi": "abstract",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 27,
    "question_en": "Which type ensures the value must be defined before use?",
    "question_hi": "कौन सा type सुनिश्चित करता है कि value उपयोग से पहले define हो?",
    "options_en": ["non-null", "strict", "required", "!"],
    "options_hi": ["non-null", "strict", "required", "!"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 28,
    "question_en": "Which function is used to check a variable type?",
    "question_hi": "कौन सा function variable के type की जांच करता है?",
    "options_en": ["typeof", "instance", "type", "check"],
    "options_hi": ["typeof", "instance", "type", "check"],
    "answer_en": "typeof",
    "answer_hi": "typeof",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 29,
    "question_en": "Which method checks whether a value is an instance of a class?",
    "question_hi": "कौन सी method जांचती है कि value किसी class की instance है?",
    "options_en": ["instanceof", "typeof", "is", "equals"],
    "options_hi": ["instanceof", "typeof", "is", "equals"],
    "answer_en": "instanceof",
    "answer_hi": "instanceof",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 30,
    "question_en": "Which TypeScript feature is used for code reuse?",
    "question_hi": "कौन सा TypeScript feature code reuse में मदद करता है?",
    "options_en": ["Classes", "Variables", "Literals", "Modules"],
    "options_hi": ["Classes", "Variables", "Literals", "Modules"],
    "answer_en": "Classes",
    "answer_hi": "Classes",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which keyword creates a module?",
    "question_hi": "Module बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["module", "namespace", "class", "interface"],
    "options_hi": ["module", "namespace", "class", "interface"],
    "answer_en": "namespace",
    "answer_hi": "namespace",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 32,
    "question_en": "Which operator provides default value when null or undefined?",
    "question_hi": "Null या undefined होने पर कौन सा ऑपरेटर default value देता है?",
    "options_en": ["??", "||", "&&", "!="],
    "options_hi": ["??", "||", "&&", "!="],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 33,
    "question_en": "Which type is returned when type is not known?",
    "question_hi": "जब type ज्ञात नहीं हो तो कौन सा type उपयोग होता है?",
    "options_en": ["unknown", "any", "void", "never"],
    "options_hi": ["unknown", "any", "void", "never"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 34,
    "question_en": "Which statement exports a function?",
    "question_hi": "Function को export करने के लिए कौन सा statement उपयोग होता है?",
    "options_en": ["export", "send", "return", "expose"],
    "options_hi": ["export", "send", "return", "expose"],
    "answer_en": "export",
    "answer_hi": "export",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 35,
    "question_en": "Which statement imports a module?",
    "question_hi": "Module को import करने के लिए कौन सा statement उपयोग होता है?",
    "options_en": ["import", "include", "load", "get"],
    "options_hi": ["import", "include", "load", "get"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which type eliminates optional properties?",
    "question_hi": "कौन सा type optional properties को हटाता है?",
    "options_en": ["Required", "Partial", "Record", "Pick"],
    "options_hi": ["Required", "Partial", "Record", "Pick"],
    "answer_en": "Required",
    "answer_hi": "Required",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 37,
    "question_en": "Which utility makes all properties optional?",
    "question_hi": "कौन सा utility type सभी properties को optional बनाता है?",
    "options_en": ["Partial", "Required", "ReadOnly", "Pick"],
    "options_hi": ["Partial", "Required", "ReadOnly", "Pick"],
    "answer_en": "Partial",
    "answer_hi": "Partial",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 38,
    "question_en": "Which type creates an unmodifiable object?",
    "question_hi": "कौन सा type unmodifiable object बनाता है?",
    "options_en": ["Readonly", "Partial", "Record", "Tuple"],
    "options_hi": ["Readonly", "Partial", "Record", "Tuple"],
    "answer_en": "Readonly",
    "answer_hi": "Readonly",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 39,
    "question_en": "Which type picks selected properties from an object?",
    "question_hi": "कौन सा type object से चुनी हुई properties को लेता है?",
    "options_en": ["Pick", "Partial", "Required", "Record"],
    "options_hi": ["Pick", "Partial", "Required", "Record"],
    "answer_en": "Pick",
    "answer_hi": "Pick",
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
    "question_en": "Which utility type makes all properties in a type optional?",
    "question_hi": "कौन सा यूटिलिटी टाइप किसी टाइप की सभी प्रॉपर्टीज़ को ऑप्शनल बनाता है?",
    "options_en": ["Partial", "Required", "Pick", "Record"],
    "options_hi": ["Partial", "Required", "Pick", "Record"],
    "answer_en": "Partial",
    "answer_hi": "Partial",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which operator is used for non-null assertion?",
    "question_hi": "नॉन-नल assertion के लिए कौन-सा ऑपरेटर उपयोग होता है?",
    "options_en": ["!", "?", "!!", "??"],
    "options_hi": ["!", "?", "!!", "??"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which keyword is used to create a type alias?",
    "question_hi": "टाइप alias बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["type", "alias", "define", "model"],
    "options_hi": ["type", "alias", "define", "model"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which utility type makes all properties required?",
    "question_hi": "कौन सा यूटिलिटी टाइप सभी properties को required बनाता है?",
    "options_en": ["Required", "Partial", "Readonly", "Pick"],
    "options_hi": ["Required", "Partial", "Readonly", "Pick"],
    "answer_en": "Required",
    "answer_hi": "Required",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which TypeScript feature restricts a variable to certain values?",
    "question_hi": "कौन सा TypeScript फीचर किसी variable को सीमित मानों तक restrict करता है?",
    "options_en": ["Union Types", "Any", "Generics", "Modules"],
    "options_hi": ["Union Types", "Any", "Generics", "Modules"],
    "answer_en": "Union Types",
    "answer_hi": "Union Types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the default type of an untyped function parameter?",
    "question_hi": "बिना type दिए function parameter का default type क्या होता है?",
    "options_en": ["any", "unknown", "void", "never"],
    "options_hi": ["any", "unknown", "void", "never"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which type removes null and undefined from a type?",
    "question_hi": "कौन सा टाइप किसी टाइप से null और undefined हटाता है?",
    "options_en": ["NonNullable", "Exclude", "Omit", "Pick"],
    "options_hi": ["NonNullable", "Exclude", "Omit", "Pick"],
    "answer_en": "NonNullable",
    "answer_hi": "NonNullable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which type represents values that never occur?",
    "question_hi": "कौन सा टाइप उन मानों को दर्शाता है जो कभी नहीं होते?",
    "options_en": ["never", "void", "null", "undefined"],
    "options_hi": ["never", "void", "null", "undefined"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which operator checks if a property exists in an object?",
    "question_hi": "कौन सा ऑपरेटर चेक करता है कि किसी object में property मौजूद है?",
    "options_en": ["in", "has", "exists", "contains"],
    "options_hi": ["in", "has", "exists", "contains"],
    "answer_en": "in",
    "answer_hi": "in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which keyword is used to implement an interface?",
    "question_hi": "किस keyword का उपयोग interface को implement करने के लिए होता है?",
    "options_en": ["implements", "extends", "inherit", "super"],
    "options_hi": ["implements", "extends", "inherit", "super"],
    "answer_en": "implements",
    "answer_hi": "implements",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 51,
    "question_en": "Which keyword is used to inherit a class?",
    "question_hi": "कौन सा keyword एक class को inherit करने के लिए उपयोग होता है?",
    "options_en": ["extends", "implements", "inherit", "super"],
    "options_hi": ["extends", "implements", "inherit", "super"],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is returned by a function with return type void?",
    "question_hi": "void return type वाली function क्या return करता है?",
    "options_en": ["undefined", "null", "0", "nothing"],
    "options_hi": ["undefined", "null", "0", "कुछ नहीं"],
    "answer_en": "undefined",
    "answer_hi": "undefined",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which type allows a value to be one of many types?",
    "question_hi": "कौन सा टाइप एक value को कई types में से एक होने की अनुमति देता है?",
    "options_en": ["Union", "Intersection", "Any", "Tuple"],
    "options_hi": ["Union", "Intersection", "Any", "Tuple"],
    "answer_en": "Union",
    "answer_hi": "Union",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which type combines multiple types into one?",
    "question_hi": "कौन सा टाइप कई types को एक में जोड़ता है?",
    "options_en": ["Intersection", "Union", "Tuple", "Record"],
    "options_hi": ["Intersection", "Union", "Tuple", "Record"],
    "answer_en": "Intersection",
    "answer_hi": "Intersection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Which keyword calls the parent class constructor?",
    "question_hi": "कौन सा keyword parent class constructor को call करता है?",
    "options_en": ["super", "base", "parent", "call"],
    "options_hi": ["super", "base", "parent", "call"],
    "answer_en": "super",
    "answer_hi": "super",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 56,
    "question_en": "Which type represents unknown values safely?",
    "question_hi": "कौन सा टाइप unknown values को safely represent करता है?",
    "options_en": ["unknown", "any", "never", "void"],
    "options_hi": ["unknown", "any", "never", "void"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 57,
    "question_en": "Which keyword is used to define abstract methods?",
    "question_hi": "abstract methods को define करने के लिए कौन सा keyword इस्तेमाल होता है?",
    "options_en": ["abstract", "virtual", "override", "implements"],
    "options_hi": ["abstract", "virtual", "override", "implements"],
    "answer_en": "abstract",
    "answer_hi": "abstract",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 58,
    "question_en": "Which type converts all properties of an object into readonly?",
    "question_hi": "कौन सा टाइप object की सभी properties को readonly बना देता है?",
    "options_en": ["Readonly", "Partial", "Required", "Pick"],
    "options_hi": ["Readonly", "Partial", "Required", "Pick"],
    "answer_en": "Readonly",
    "answer_hi": "Readonly",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 59,
    "question_en": "Which type helps create a new type by excluding specific properties?",
    "question_hi": "कौन सा टाइप चुनी हुई properties को exclude करके नया टाइप बनाता है?",
    "options_en": ["Omit", "Pick", "Exclude", "Record"],
    "options_hi": ["Omit", "Pick", "Exclude", "Record"],
    "answer_en": "Omit",
    "answer_hi": "Omit",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 60,
    "question_en": "Which type picks specific properties from a type?",
    "question_hi": "कौन सा टाइप किसी टाइप से specific properties को select करता है?",
    "options_en": ["Pick", "Omit", "Partial", "Record"],
    "options_hi": ["Pick", "Omit", "Partial", "Record"],
    "answer_en": "Pick",
    "answer_hi": "Pick",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 61,
    "question_en": "Which operator provides a default value when null or undefined?",
    "question_hi": "कौन सा ऑपरेटर null या undefined होने पर default value देता है?",
    "options_en": ["??", "||", "?", "&&"],
    "options_hi": ["??", "||", "?", "&&"],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 62,
    "question_en": "Which type is used to map all properties of an object to another type?",
    "question_hi": "कौन सा टाइप object की सभी properties को दूसरे टाइप से map करता है?",
    "options_en": ["Record", "Pick", "Omit", "Map"],
    "options_hi": ["Record", "Pick", "Omit", "Map"],
    "answer_en": "Record",
    "answer_hi": "Record",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 63,
    "question_en": "Which type is used to create tuples of fixed length?",
    "question_hi": "कौन सा टाइप fixed length tuples बनाने के लिए उपयोग होता है?",
    "options_en": ["Tuple", "Array", "Union", "Record"],
    "options_hi": ["Tuple", "Array", "Union", "Record"],
    "answer_en": "Tuple",
    "answer_hi": "Tuple",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 64,
    "question_en": "Which statement is used to stop a loop?",
    "question_hi": "कौन सा स्टेटमेंट loop को रोकने के लिए उपयोग होता है?",
    "options_en": ["break", "stop", "end", "halt"],
    "options_hi": ["break", "stop", "end", "halt"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 65,
    "question_en": "Which loop executes at least once?",
    "question_hi": "कौन सा loop कम से कम एक बार चलता है?",
    "options_en": ["do-while", "while", "for", "foreach"],
    "options_hi": ["do-while", "while", "for", "foreach"],
    "answer_en": "do-while",
    "answer_hi": "do-while",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 66,
    "question_en": "Which method converts JSON string into an object?",
    "question_hi": "कौन सी method JSON string को object में बदलती है?",
    "options_en": ["JSON.parse()", "JSON.stringify()", "toJSON()", "parseJSON()"],
    "options_hi": ["JSON.parse()", "JSON.stringify()", "toJSON()", "parseJSON()"],
    "answer_en": "JSON.parse()",
    "answer_hi": "JSON.parse()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 67,
    "question_en": "Which method converts an object into JSON string?",
    "question_hi": "कौन सी method object को JSON string में बदलती है?",
    "options_en": ["JSON.stringify()", "JSON.parse()", "toString()", "encode()"],
    "options_hi": ["JSON.stringify()", "JSON.parse()", "toString()", "encode()"],
    "answer_en": "JSON.stringify()",
    "answer_hi": "JSON.stringify()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 68,
    "question_en": "Which event is triggered when the DOM is fully loaded?",
    "question_hi": "कौन सा event DOM के पूरी तरह लोड होने पर trigger होता है?",
    "options_en": ["DOMContentLoaded", "load", "ready", "init"],
    "options_hi": ["DOMContentLoaded", "load", "ready", "init"],
    "answer_en": "DOMContentLoaded",
    "answer_hi": "DOMContentLoaded",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 69,
    "question_en": "Which function is used to delay execution?",
    "question_hi": "कौन सी function execution को delay करने के लिए उपयोग होती है?",
    "options_en": ["setTimeout", "setInterval", "delay", "wait"],
    "options_hi": ["setTimeout", "setInterval", "delay", "wait"],
    "answer_en": "setTimeout",
    "answer_hi": "setTimeout",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 70,
    "question_en": "Which function is used for repeated execution?",
    "question_hi": "कौन सी function बार-बार execution करती है?",
    "options_en": ["setInterval", "setTimeout", "repeat()", "loop()"],
    "options_hi": ["setInterval", "setTimeout", "repeat()", "loop()"],
    "answer_en": "setInterval",
    "answer_hi": "setInterval",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 71,
    "question_en": "Which operator spreads array values?",
    "question_hi": "कौन सा ऑपरेटर array values को spread करता है?",
    "options_en": ["...", "**", "->", "<>"],
    "options_hi": ["...", "**", "->", "<>"],
    "answer_en": "...",
    "answer_hi": "...",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 72,
    "question_en": "Which function is used to merge arrays?",
    "question_hi": "कौन सी function arrays को merge करने के लिए उपयोग होती है?",
    "options_en": ["concat()", "merge()", "join()", "combine()"],
    "options_hi": ["concat()", "merge()", "join()", "combine()"],
    "answer_en": "concat()",
    "answer_hi": "concat()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 73,
    "question_en": "Which array method adds elements at the end?",
    "question_hi": "कौन सी array method अंत में elements जोड़ती है?",
    "options_en": ["push()", "pop()", "shift()", "unshift()"],
    "options_hi": ["push()", "pop()", "shift()", "unshift()"],
    "answer_en": "push()",
    "answer_hi": "push()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 74,
    "question_en": "Which array method removes the last element?",
    "question_hi": "कौन सी array method आखिरी element हटाती है?",
    "options_en": ["pop()", "shift()", "splice()", "slice()"],
    "options_hi": ["pop()", "shift()", "splice()", "slice()"],
    "answer_en": "pop()",
    "answer_hi": "pop()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 75,
    "question_en": "Which array method removes the first element?",
    "question_hi": "कौन सी array method पहला element हटाती है?",
    "options_en": ["shift()", "pop()", "slice()", "splice()"],
    "options_hi": ["shift()", "pop()", "slice()", "splice()"],
    "answer_en": "shift()",
    "answer_hi": "shift()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 76,
    "question_en": "Which array method adds elements to the beginning?",
    "question_hi": "कौन सी method array की शुरुआत में element जोड़ती है?",
    "options_en": ["unshift()", "push()", "pop()", "splice()"],
    "options_hi": ["unshift()", "push()", "pop()", "splice()"],
    "answer_en": "unshift()",
    "answer_hi": "unshift()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 77,
    "question_en": "Which method is used to sort an array?",
    "question_hi": "Array को sort करने के लिए कौन सी method उपयोग होती है?",
    "options_en": ["sort()", "order()", "arrange()", "filter()"],
    "options_hi": ["sort()", "order()", "arrange()", "filter()"],
    "answer_en": "sort()",
    "answer_hi": "sort()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 78,
    "question_en": "Which array method filters elements?",
    "question_hi": "कौन सी array method elements को filter करती है?",
    "options_en": ["filter()", "map()", "find()", "reduce()"],
    "options_hi": ["filter()", "map()", "find()", "reduce()"],
    "answer_en": "filter()",
    "answer_hi": "filter()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 79,
    "question_en": "Which method converts all array elements into a single value?",
    "question_hi": "कौन सी array method सभी elements को एक single value में बदलती है?",
    "options_en": ["reduce()", "map()", "filter()", "find()"],
    "options_hi": ["reduce()", "map()", "filter()", "find()"],
    "answer_en": "reduce()",
    "answer_hi": "reduce()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 80,
    "question_en": "Which keyword is used to export functions or variables?",
    "question_hi": "Functions या variables को export करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["export", "send", "share", "push"],
    "options_hi": ["export", "send", "share", "push"],
    "answer_en": "export",
    "answer_hi": "export",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 81,
    "question_en": "Which keyword imports exported modules?",
    "question_hi": "कौन सा keyword exported modules को import करता है?",
    "options_en": ["import", "require", "fetch", "load"],
    "options_hi": ["import", "require", "fetch", "load"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 82,
    "question_en": "Which file extension is used for TypeScript definition files?",
    "question_hi": "TypeScript definition files की extension क्या होती है?",
    "options_en": [".d.ts", ".tsd", ".tdef", ".ts"],
    "options_hi": [".d.ts", ".tsd", ".tdef", ".ts"],
    "answer_en": ".d.ts",
    "answer_hi": ".d.ts",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 83,
    "question_en": "Which method is used to check if an array includes a value?",
    "question_hi": "कौन सी array method चेक करती है कि value array में मौजूद है या नहीं?",
    "options_en": ["includes()", "contains()", "exists()", "has()"],
    "options_hi": ["includes()", "contains()", "exists()", "has()"],
    "answer_en": "includes()",
    "answer_hi": "includes()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 84,
    "question_en": "Which type allows multiple return value types?",
    "question_hi": "कौन सा टाइप multiple return value types की अनुमति देता है?",
    "options_en": ["Union", "Tuple", "Intersection", "Any"],
    "options_hi": ["Union", "Tuple", "Intersection", "Any"],
    "answer_en": "Union",
    "answer_hi": "Union",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 85,
    "question_en": "Which method finds the first element that matches a condition?",
    "question_hi": "कौन सी method वह पहला element ढूंढती है जो condition match करता है?",
    "options_en": ["find()", "filter()", "search()", "locate()"],
    "options_hi": ["find()", "filter()", "search()", "locate()"],
    "answer_en": "find()",
    "answer_hi": "find()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 86,
    "question_en": "Which operator is used for optional chaining?",
    "question_hi": "Optional chaining के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["?.", "??", "!", "??="],
    "options_hi": ["?.", "??", "!", "??="],
    "answer_en": "?.",
    "answer_hi": "?.",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 87,
    "question_en": "Which data type is used for big integers?",
    "question_hi": "बड़े integers के लिए कौन सा data type उपयोग होता है?",
    "options_en": ["bigint", "number", "long", "double"],
    "options_hi": ["bigint", "number", "long", "double"],
    "answer_en": "bigint",
    "answer_hi": "bigint",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 88,
    "question_en": "Which array method returns a new array without modifying the original?",
    "question_hi": "कौन सी array method original array को modify किए बिना नया array लौटाती है?",
    "options_en": ["map()", "splice()", "push()", "pop()"],
    "options_hi": ["map()", "splice()", "push()", "pop()"],
    "answer_en": "map()",
    "answer_hi": "map()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 89,
    "question_en": "Which method removes elements from an array?",
    "question_hi": "कौन सी method array से elements हटाती है?",
    "options_en": ["splice()", "slice()", "map()", "concat()"],
    "options_hi": ["splice()", "slice()", "map()", "concat()"],
    "answer_en": "splice()",
    "answer_hi": "splice()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 90,
    "question_en": "Which operator merges object properties?",
    "question_hi": "कौन सा ऑपरेटर object properties को merge करता है?",
    "options_en": ["...", "++", "<<", "->"],
    "options_hi": ["...", "++", "<<", "->"],
    "answer_en": "...",
    "answer_hi": "...",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 91,
    "question_en": "Which function checks if a variable is an array?",
    "question_hi": "कौन सी function चेक करती है कि variable array है या नहीं?",
    "options_en": ["Array.isArray()", "isArray()", "instanceof Array", "checkArray()"],
    "options_hi": ["Array.isArray()", "isArray()", "instanceof Array", "checkArray()"],
    "answer_en": "Array.isArray()",
    "answer_hi": "Array.isArray()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 92,
    "question_en": "Which type allows defining key and value types?",
    "question_hi": "कौन सा टाइप key और value types को define करने की अनुमति देता है?",
    "options_en": ["Record", "Tuple", "Union", "Map"],
    "options_hi": ["Record", "Tuple", "Union", "Map"],
    "answer_en": "Record",
    "answer_hi": "Record",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 93,
    "question_en": "Which loop iterates over object keys?",
    "question_hi": "कौन सा loop object की keys पर iterate करता है?",
    "options_en": ["for-in", "for-of", "for", "foreach"],
    "options_hi": ["for-in", "for-of", "for", "foreach"],
    "answer_en": "for-in",
    "answer_hi": "for-in",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 94,
    "question_en": "Which loop iterates over array values?",
    "question_hi": "कौन सा loop array values पर iterate करता है?",
    "options_en": ["for-of", "for-in", "foreach", "for"],
    "options_hi": ["for-of", "for-in", "foreach", "for"],
    "answer_en": "for-of",
    "answer_hi": "for-of",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 95,
    "question_en": "Which JavaScript feature does TypeScript add static types to?",
    "question_hi": "कौन सी JavaScript सुविधा को TypeScript static types जोड़कर सुधारता है?",
    "options_en": ["Dynamic typing", "Class system", "Async behavior", "DOM API"],
    "options_hi": ["Dynamic typing", "Class system", "Async behavior", "DOM API"],
    "answer_en": "Dynamic typing",
    "answer_hi": "Dynamic typing",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 96,
    "question_en": "Which method combines all array elements into a string?",
    "question_hi": "कौन सी method array के सभी elements को एक string में बदलती है?",
    "options_en": ["join()", "concat()", "reduce()", "stringify()"],
    "options_hi": ["join()", "concat()", "reduce()", "stringify()"],
    "answer_en": "join()",
    "answer_hi": "join()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 97,
    "question_en": "Which method returns part of an array without modifying it?",
    "question_hi": "कौन सी method array का हिस्सा लौटाती है बिना original array को बदले?",
    "options_en": ["slice()", "splice()", "filter()", "reduce()"],
    "options_hi": ["slice()", "splice()", "filter()", "reduce()"],
    "answer_en": "slice()",
    "answer_hi": "slice()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 98,
    "question_en": "Which method executes a function for each array element?",
    "question_hi": "कौन सी method array के प्रत्येक element के लिए function को execute करती है?",
    "options_en": ["forEach()", "map()", "reduce()", "filter()"],
    "options_hi": ["forEach()", "map()", "reduce()", "filter()"],
    "answer_en": "forEach()",
    "answer_hi": "forEach()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 99,
    "question_en": "Which keyword is used for asynchronous functions?",
    "question_hi": "कौन सा keyword asynchronous functions के लिए उपयोग होता है?",
    "options_en": ["async", "await", "sync", "callback"],
    "options_hi": ["async", "await", "sync", "callback"],
    "answer_en": "async",
    "answer_hi": "async",
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