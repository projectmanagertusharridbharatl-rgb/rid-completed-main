const questions = [
  {
    "num": 1,
    "question_en": "What does TypeScript add on top of JavaScript?",
    "question_hi": "TypeScript JavaScript के ऊपर क्या जोड़ता है?",
    "options_en": ["Static typing", "Faster runtime", "Server support", "UI features"],
    "options_hi": ["स्टैटिक टाइपिंग", "तेज़ रनटाइम", "सर्वर सपोर्ट", "UI फीचर्स"],
    "answer_en": "Static typing",
    "answer_hi": "स्टैटिक टाइपिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which file extension is used for TypeScript?",
    "question_hi": "TypeScript के लिए कौन सा फ़ाइल एक्सटेंशन उपयोग होता है?",
    "options_en": [".ts", ".js", ".tsx", ".json"],
    "options_hi": [".ts", ".js", ".tsx", ".json"],
    "answer_en": ".ts",
    "answer_hi": ".ts",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which command compiles TypeScript to JavaScript?",
    "question_hi": "TypeScript को JavaScript में कंपाइल करने का कमांड कौन सा है?",
    "options_en": ["tsc", "node", "npm build", "ts-run"],
    "options_hi": ["tsc", "node", "npm build", "ts-run"],
    "answer_en": "tsc",
    "answer_hi": "tsc",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which of these is a TypeScript primitive type?",
    "question_hi": "इनमें से कौन सा TypeScript का primitive type है?",
    "options_en": ["number", "array", "object", "class"],
    "options_hi": ["number", "array", "object", "class"],
    "answer_en": "number",
    "answer_hi": "number",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which keyword is used to define variables with type safety?",
    "question_hi": "कौन सा keyword type safety के साथ variables को define करता है?",
    "options_en": ["let", "var", "const", "All of these"],
    "options_hi": ["let", "var", "const", "इन सभी"],
    "answer_en": "All of these",
    "answer_hi": "इन सभी",
    "attempted": false,
    "selected": ""
  },

  /* ------------------ CONTINUING 6 TO 55 ------------------ */

  {
    "num": 6,
    "question_en": "Which type represents unknown data safely?",
    "question_hi": "कौन सा type unknown data को safely दर्शाता है?",
    "options_en": ["unknown", "any", "void", "never"],
    "options_hi": ["unknown", "any", "void", "never"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which operator is used for type annotation?",
    "question_hi": "Type annotation के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": [":", "::", "=>", "="],
    "options_hi": [":", "::", "=>", "="],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which type means a function does not return anything?",
    "question_hi": "कौन सा type दर्शाता है कि function कुछ return नहीं करता?",
    "options_en": ["void", "never", "null", "undefined"],
    "options_hi": ["void", "never", "null", "undefined"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which TypeScript type allows multiple possible types?",
    "question_hi": "कौन सा TypeScript type कई संभावित types को अनुमति देता है?",
    "options_en": ["union", "tuple", "interface", "enum"],
    "options_hi": ["union", "tuple", "interface", "enum"],
    "answer_en": "union",
    "answer_hi": "union",
    "attempted": false,
    "selected": ""
},
{
    "num": 10,
    "question_en": "Which keyword is used to define a constant in TypeScript?",
    "question_hi": "कौन सा keyword TypeScript में constant define करने के लिए उपयोग होता है?",
    "options_en": ["const", "constant", "fix", "let"],
    "options_hi": ["const", "constant", "fix", "let"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
},
{
    "num": 11,
    "question_en": "What does the 'any' type represent?",
    "question_hi": "'any' type क्या दर्शाता है?",
    "options_en": ["Any value", "Number only", "String only", "Boolean only"],
    "options_hi": ["कोई भी मान", "सिर्फ संख्या", "सिर्फ स्ट्रिंग", "सिर्फ बूलियन"],
    "answer_en": "Any value",
    "answer_hi": "कोई भी मान",
    "attempted": false,
    "selected": ""
},
{
    "num": 12,
    "question_en": "Which type ensures strict type safety?",
    "question_hi": "कौन सा type strict type safety सुनिश्चित करता है?",
    "options_en": ["unknown", "any", "void", "null"],
    "options_hi": ["unknown", "any", "void", "null"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
},
{
    "num": 13,
    "question_en": "Which symbol is used for optional properties?",
    "question_hi": "Optional properties के लिए कौन सा symbol उपयोग होता है?",
    "options_en": ["?", "!", "#", "*"],
    "options_hi": ["?", "!", "#", "*"],
    "answer_en": "?",
    "answer_hi": "?",
    "attempted": false,
    "selected": ""
},
{
    "num": 14,
    "question_en": "Which TypeScript feature allows object structure definition?",
    "question_hi": "कौन सा TypeScript feature object structure define करने देता है?",
    "options_en": ["interface", "enum", "module", "namespace"],
    "options_hi": ["interface", "enum", "module", "namespace"],
    "answer_en": "interface",
    "answer_hi": "interface",
    "attempted": false,
    "selected": ""
},
{
    "num": 15,
    "question_en": "Which TypeScript type is used for fixed-length arrays?",
    "question_hi": "कौन सा TypeScript type fixed-length arrays के लिए उपयोग होता है?",
    "options_en": ["tuple", "union", "enum", "record"],
    "options_hi": ["tuple", "union", "enum", "record"],
    "answer_en": "tuple",
    "answer_hi": "tuple",
    "attempted": false,
    "selected": ""
},
{
    "num": 16,
    "question_en": "Which keyword makes a class member unchangeable?",
    "question_hi": "कौन सा keyword class member को unchangeable बनाता है?",
    "options_en": ["readonly", "static", "abstract", "const"],
    "options_hi": ["readonly", "static", "abstract", "const"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
},
{
    "num": 17,
    "question_en": "Which feature supports default values for function parameters?",
    "question_hi": "कौन सा feature function parameters के लिए default values को support करता है?",
    "options_en": ["default parameters", "optional parameters", "rest parameters", "spread operator"],
    "options_hi": ["default parameters", "optional parameters", "rest parameters", "spread operator"],
    "answer_en": "default parameters",
    "answer_hi": "default parameters",
    "attempted": false,
    "selected": ""
},
{
    "num": 18,
    "question_en": "Which feature groups multiple related constants?",
    "question_hi": "कौन सा feature कई संबंधित constants को समूहित करता है?",
    "options_en": ["enum", "tuple", "interface", "class"],
    "options_hi": ["enum", "tuple", "interface", "class"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
},
{
    "num": 19,
    "question_en": "Which of these checks type at compile time?",
    "question_hi": "इनमें से कौन compile time पर type check करता है?",
    "options_en": ["TypeScript", "JavaScript", "HTML", "CSS"],
    "options_hi": ["TypeScript", "JavaScript", "HTML", "CSS"],
    "answer_en": "TypeScript",
    "answer_hi": "TypeScript",
    "attempted": false,
    "selected": ""
},
{
    "num": 20,
    "question_en": "Which function parameter allows unlimited values?",
    "question_hi": "कौन सा function parameter असीमित values लेने देता है?",
    "options_en": ["rest parameter", "optional parameter", "default parameter", "none"],
    "options_hi": ["rest parameter", "optional parameter", "default parameter", "none"],
    "answer_en": "rest parameter",
    "answer_hi": "rest parameter",
    "attempted": false,
    "selected": ""
},

/* ------- CONTINUE 21 to 55 ------- */

{
    "num": 21,
    "question_en": "Which keyword is used for inheritance in classes?",
    "question_hi": "क्लासेस में inheritance के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["extends", "inherits", "super", "override"],
    "options_hi": ["extends", "inherits", "super", "override"],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": ""
},
{
    "num": 22,
    "question_en": "Which method is used to call parent class constructor?",
    "question_hi": "Parent class constructor को कॉल करने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["super()", "parent()", "extends()", "base()"],
    "options_hi": ["super()", "parent()", "extends()", "base()"],
    "answer_en": "super()",
    "answer_hi": "super()",
    "attempted": false,
    "selected": ""
},
{
    "num": 23,
    "question_en": "What is the default access modifier in TypeScript?",
    "question_hi": "TypeScript में default access modifier क्या होता है?",
    "options_en": ["public", "private", "protected", "readonly"],
    "options_hi": ["public", "private", "protected", "readonly"],
    "answer_en": "public",
    "answer_hi": "public",
    "attempted": false,
    "selected": ""
},
{
    "num": 24,
    "question_en": "Which modifier hides class members from outside?",
    "question_hi": "कौन सा modifier class members को बाहर से छुपाता है?",
    "options_en": ["private", "public", "protected", "readonly"],
    "options_hi": ["private", "public", "protected", "readonly"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
},
{
    "num": 25,
    "question_en": "Which type is used for both number and string?",
    "question_hi": "कौन सा type number और string दोनों के लिए उपयोग किया जा सकता है?",
    "options_en": ["union", "tuple", "enum", "record"],
    "options_hi": ["union", "tuple", "enum", "record"],
    "answer_en": "union",
    "answer_hi": "union",
    "attempted": false,
    "selected": ""
},

{
    "num": 26,
    "question_en": "Which utility type makes all properties optional?",
    "question_hi": "कौन सा utility type सभी properties optional बनाता है?",
    "options_en": ["Partial", "Required", "Readonly", "Pick"],
    "options_hi": ["Partial", "Required", "Readonly", "Pick"],
    "answer_en": "Partial",
    "answer_hi": "Partial",
    "attempted": false,
    "selected": ""
},
{
    "num": 27,
    "question_en": "Which utility type makes all properties required?",
    "question_hi": "कौन सा utility type सभी properties को required बनाता है?",
    "options_en": ["Required", "Partial", "Record", "Pick"],
    "options_hi": ["Required", "Partial", "Record", "Pick"],
    "answer_en": "Required",
    "answer_hi": "Required",
    "attempted": false,
    "selected": ""
},
{
    "num": 28,
    "question_en": "Which utility type makes all properties readonly?",
    "question_hi": "कौन सा utility type सभी properties को readonly बनाता है?",
    "options_en": ["Readonly", "Pick", "Omit", "Partial"],
    "options_hi": ["Readonly", "Pick", "Omit", "Partial"],
    "answer_en": "Readonly",
    "answer_hi": "Readonly",
    "attempted": false,
    "selected": ""
},
{
    "num": 29,
    "question_en": "Which utility type picks selected properties?",
    "question_hi": "कौन सा utility type केवल चुनी गई properties को चुनता है?",
    "options_en": ["Pick", "Omit", "Record", "Partial"],
    "options_hi": ["Pick", "Omit", "Record", "Partial"],
    "answer_en": "Pick",
    "answer_hi": "Pick",
    "attempted": false,
    "selected": ""
},
{
    "num": 30,
    "question_en": "Which utility type removes selected properties?",
    "question_hi": "कौन सा utility type चुनी गई properties को हटाता है?",
    "options_en": ["Omit", "Pick", "Partial", "Record"],
    "options_hi": ["Omit", "Pick", "Partial", "Record"],
    "answer_en": "Omit",
    "answer_hi": "Omit",
    "attempted": false,
    "selected": ""
},

{
    "num": 31,
    "question_en": "Which type is used to store key-value pairs?",
    "question_hi": "Key-value pairs को store करने के लिए कौन सा type उपयोग होता है?",
    "options_en": ["Record", "Tuple", "Enum", "Array"],
    "options_hi": ["Record", "Tuple", "Enum", "Array"],
    "answer_en": "Record",
    "answer_hi": "Record",
    "attempted": false,
    "selected": ""
},
{
    "num": 32,
    "question_en": "Which keyword is used to import modules?",
    "question_hi": "Modules को import करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["import", "require", "include", "fetch"],
    "options_hi": ["import", "require", "include", "fetch"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
},
{
    "num": 33,
    "question_en": "Which keyword exports functions or variables?",
    "question_hi": "Functions या variables को export करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["export", "public", "return", "module"],
    "options_hi": ["export", "public", "return", "module"],
    "answer_en": "export",
    "answer_hi": "export",
    "attempted": false,
    "selected": ""
},
{
    "num": 34,
    "question_en": "Which tool checks TypeScript code errors?",
    "question_hi": "कौन सा tool TypeScript code की errors को check करता है?",
    "options_en": ["tsc", "node", "npm", "webpack"],
    "options_hi": ["tsc", "node", "npm", "webpack"],
    "answer_en": "tsc",
    "answer_hi": "tsc",
    "attempted": false,
    "selected": ""
},
{
    "num": 35,
    "question_en": "Which concept supports code reusability?",
    "question_hi": "कौन सा concept code reusability को support करता है?",
    "options_en": ["inheritance", "function", "enum", "array"],
    "options_hi": ["inheritance", "function", "enum", "array"],
    "answer_en": "inheritance",
    "answer_hi": "inheritance",
    "attempted": false,
    "selected": ""
},

{
    "num": 36,
    "question_en": "Which type is used for representing no value?",
    "question_hi": "कौन सा type 'no value' दर्शाता है?",
    "options_en": ["void", "never", "unknown", "null"],
    "options_hi": ["void", "never", "unknown", "null"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
},
{
    "num": 37,
    "question_en": "Which TypeScript type never occurs?",
    "question_hi": "कौन सा TypeScript type कभी नहीं होता?",
    "options_en": ["never", "void", "unknown", "any"],
    "options_hi": ["never", "void", "unknown", "any"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
},
{
    "num": 38,
    "question_en": "Which method is used to override parent method?",
    "question_hi": "Parent method को override करने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["same method name", "extends", "super", "clone"],
    "options_hi": ["same method name", "extends", "super", "clone"],
    "answer_en": "same method name",
    "answer_hi": "same method name",
    "attempted": false,
    "selected": ""
},
{
    "num": 39,
    "question_en": "Which TypeScript feature supports polymorphism?",
    "question_hi": "कौन सा TypeScript feature polymorphism को support करता है?",
    "options_en": ["inheritance", "tuple", "enum", "record"],
    "options_hi": ["inheritance", "tuple", "enum", "record"],
    "answer_en": "inheritance",
    "answer_hi": "inheritance",
    "attempted": false,
    "selected": ""
},
{
    "num": 40,
    "question_en": "Which TypeScript feature improves tooling support?",
    "question_hi": "कौन सा TypeScript feature tooling support को बेहतर बनाता है?",
    "options_en": ["types", "comments", "hoisting", "closures"],
    "options_hi": ["types", "comments", "hoisting", "closures"],
    "answer_en": "types",
    "answer_hi": "types",
    "attempted": false,
    "selected": ""
},

{
    "num": 41,
    "question_en": "Which keyword makes method accessible only inside class and subclasses?",
    "question_hi": "कौन सा keyword method को केवल class और subclasses में accessible बनाता है?",
    "options_en": ["protected", "private", "public", "static"],
    "options_hi": ["protected", "private", "public", "static"],
    "answer_en": "protected",
    "answer_hi": "protected",
    "attempted": false,
    "selected": ""
},
{
    "num": 42,
    "question_en": "Which type allows defining fixed set of numeric or string constants?",
    "question_hi": "कौन सा type numeric या string constants के fixed set को define करने देता है?",
    "options_en": ["enum", "tuple", "interface", "map"],
    "options_hi": ["enum", "tuple", "interface", "map"],
    "answer_en": "enum",
    "answer_hi": "enum",
    "attempted": false,
    "selected": ""
},
{
    "num": 43,
    "question_en": "Which feature enforces that all cases are handled in switch?",
    "question_hi": "कौन सा feature switch में सभी cases handle होने को सुनिश्चित करता है?",
    "options_en": ["never type", "void type", "any type", "tuple type"],
    "options_hi": ["never type", "void type", "any type", "tuple type"],
    "answer_en": "never type",
    "answer_hi": "never type",
    "attempted": false,
    "selected": ""
},
{
    "num": 44,
    "question_en": "Which feature allows defining methods in interface?",
    "question_hi": "कौन सा feature interface में methods define करने देता है?",
    "options_en": ["interface methods", "abstract methods", "modules", "tuples"],
    "options_hi": ["interface methods", "abstract methods", "modules", "tuples"],
    "answer_en": "interface methods",
    "answer_hi": "interface methods",
    "attempted": false,
    "selected": ""
},
{
    "num": 45,
    "question_en": "Which operator checks if property exists in object?",
    "question_hi": "कौन सा operator check करता है कि property object में मौजूद है?",
    "options_en": ["in operator", "keyof", "typeof", "instanceof"],
    "options_hi": ["in operator", "keyof", "typeof", "instanceof"],
    "answer_en": "in operator",
    "answer_hi": "in operator",
    "attempted": false,
    "selected": ""
},

{
    "num": 46,
    "question_en": "Which keyword is used to create a new instance of class?",
    "question_hi": "कौन सा keyword class का नया instance बनाने के लिए उपयोग होता है?",
    "options_en": ["new", "create", "instance", "object"],
    "options_hi": ["new", "create", "instance", "object"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
},
{
    "num": 47,
    "question_en": "Which feature allows you to define function types?",
    "question_hi": "कौन सा feature function types को define करने देता है?",
    "options_en": ["function type", "enum", "tuple", "module"],
    "options_hi": ["function type", "enum", "tuple", "module"],
    "answer_en": "function type",
    "answer_hi": "function type",
    "attempted": false,
    "selected": ""
},
{
    "num": 48,
    "question_en": "Which keyword allows class properties to be static?",
    "question_hi": "कौन सा keyword class properties को static बनाता है?",
    "options_en": ["static", "readonly", "abstract", "public"],
    "options_hi": ["static", "readonly", "abstract", "public"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
},
{
    "num": 49,
    "question_en": "Which TypeScript type shows value may be undefined?",
    "question_hi": "कौन सा TypeScript type दर्शाता है कि मूल्य undefined हो सकता है?",
    "options_en": ["undefined", "null", "never", "void"],
    "options_hi": ["undefined", "null", "never", "void"],
    "answer_en": "undefined",
    "answer_hi": "undefined",
    "attempted": false,
    "selected": ""
},
{
    "num": 50,
    "question_en": "Which type ensures value can be null?",
    "question_hi": "कौन सा type दर्शाता है कि value null हो सकती है?",
    "options_en": ["null", "undefined", "void", "never"],
    "options_hi": ["null", "undefined", "void", "never"],
    "answer_en": "null",
    "answer_hi": "null",
    "attempted": false,
    "selected": ""
},

{
    "num": 51,
    "question_en": "Which feature provides compile-time code checking?",
    "question_hi": "कौन सा feature compile-time code checking प्रदान करता है?",
    "options_en": ["type checking", "hoisting", "scoping", "closures"],
    "options_hi": ["type checking", "hoisting", "scoping", "closures"],
    "answer_en": "type checking",
    "answer_hi": "type checking",
    "attempted": false,
    "selected": ""
},
{
    "num": 52,
    "question_en": "Which TypeScript feature supports overloading functions?",
    "question_hi": "कौन सा TypeScript feature functions overloading को support करता है?",
    "options_en": ["function overloads", "tuple", "enum", "interface"],
    "options_hi": ["function overloads", "tuple", "enum", "interface"],
    "answer_en": "function overloads",
    "answer_hi": "function overloads",
    "attempted": false,
    "selected": ""
},
{
    "num": 53,
    "question_en": "Which type narrows automatically based on conditions?",
    "question_hi": "कौन सा type conditions के आधार पर automatically narrow होता है?",
    "options_en": ["type guards", "generics", "union", "tuple"],
    "options_hi": ["type guards", "generics", "union", "tuple"],
    "answer_en": "type guards",
    "answer_hi": "type guards",
    "attempted": false,
    "selected": ""
},
{
    "num": 54,
    "question_en": "Which feature allows creating custom types?",
    "question_hi": "कौन सा feature custom types बनाने देता है?",
    "options_en": ["type alias", "enum", "class", "tuple"],
    "options_hi": ["type alias", "enum", "class", "tuple"],
    "answer_en": "type alias",
    "answer_hi": "type alias",
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
    "question_en": "Which keyword is used to create a read-only property in TypeScript?",
    "question_hi": "TypeScript में read-only प्रॉपर्टी बनाने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["readonly", "static", "final", "private"],
    "options_hi": ["readonly", "static", "final", "private"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
},
{
    "num": 57,
    "question_en": "Which TypeScript type represents values that will never occur?",
    "question_hi": "TypeScript में कौन सा टाइप उन मानों को दर्शाता है जो कभी नहीं होंगे?",
    "options_en": ["never", "void", "null", "undefined"],
    "options_hi": ["never", "void", "null", "undefined"],
    "answer_en": "never",
    "answer_hi": "never",
    "attempted": false,
    "selected": ""
},
{
    "num": 58,
    "question_en": "Which method is used to check if a value is an array in TypeScript?",
    "question_hi": "TypeScript में किस मेथड का उपयोग किया जाता है यह जाँचने के लिए कि कोई मान array है?",
    "options_en": ["Array.isArray()", "instanceof Array", "typeof array", "isArray()"],
    "options_hi": ["Array.isArray()", "instanceof Array", "typeof array", "isArray()"],
    "answer_en": "Array.isArray()",
    "answer_hi": "Array.isArray()",
    "attempted": false,
    "selected": ""
},
{
    "num": 59,
    "question_en": "Which TypeScript utility makes all properties of a type required?",
    "question_hi": "कौन सा TypeScript utility किसी टाइप की सभी प्रॉपर्टीज़ को required बनाता है?",
    "options_en": ["Required", "Partial", "Readonly", "Record"],
    "options_hi": ["Required", "Partial", "Readonly", "Record"],
    "answer_en": "Required",
    "answer_hi": "Required",
    "attempted": false,
    "selected": ""
},
{
    "num": 60,
    "question_en": "Which utility creates a type with optional properties?",
    "question_hi": "कौन सा utility टाइप की प्रॉपर्टीज़ को optional बनाता है?",
    "options_en": ["Partial", "Required", "Pick", "Omit"],
    "options_hi": ["Partial", "Required", "Pick", "Omit"],
    "answer_en": "Partial",
    "answer_hi": "Partial",
    "attempted": false,
    "selected": ""
},
{
    "num": 61,
    "question_en": "Which keyword is used to inherit a class in TypeScript?",
    "question_hi": "TypeScript में किसी class को inherit करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["extends", "implements", "inherit", "uses"],
    "options_hi": ["extends", "implements", "inherit", "uses"],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": ""
},
{
    "num": 62,
    "question_en": "Which keyword is used to implement an interface in a class?",
    "question_hi": "किस keyword का उपयोग किसी class में interface को लागू करने के लिए किया जाता है?",
    "options_en": ["implements", "extends", "interface", "apply"],
    "options_hi": ["implements", "extends", "interface", "apply"],
    "answer_en": "implements",
    "answer_hi": "implements",
    "attempted": false,
    "selected": ""
},
{
    "num": 63,
    "question_en": "TypeScript compiles into which language?",
    "question_hi": "TypeScript किस भाषा में compile होता है?",
    "options_en": ["JavaScript", "Python", "C++", "Java"],
    "options_hi": ["JavaScript", "Python", "C++", "Java"],
    "answer_en": "JavaScript",
    "answer_hi": "JavaScript",
    "attempted": false,
    "selected": ""
},
{
    "num": 64,
    "question_en": "Which TypeScript feature ensures that objects meet a specific structure?",
    "question_hi": "कौन सा TypeScript feature सुनिश्चित करता है कि objects एक विशेष संरचना का पालन करें?",
    "options_en": ["Interfaces", "Enums", "Classes", "Modules"],
    "options_hi": ["Interfaces", "Enums", "Classes", "Modules"],
    "answer_en": "Interfaces",
    "answer_hi": "Interfaces",
    "attempted": false,
    "selected": ""
},
{
    "num": 65,
    "question_en": "Which type is used when a variable can store different types?",
    "question_hi": "कौन सा टाइप तब उपयोग होता है जब कोई variable अलग-अलग प्रकार के मान रख सकता है?",
    "options_en": ["Union Type", "never", "tuple", "interface"],
    "options_hi": ["Union Type", "never", "tuple", "interface"],
    "answer_en": "Union Type",
    "answer_hi": "Union Type",
    "attempted": false,
    "selected": ""
},
{
    "num": 66,
    "question_en": "Which TypeScript feature helps catch errors before runtime?",
    "question_hi": "कौन सा TypeScript feature runtime से पहले errors पकड़ने में मदद करता है?",
    "options_en": ["Static typing", "Dynamic typing", "Hoisting", "Polymorphism"],
    "options_hi": ["Static typing", "Dynamic typing", "Hoisting", "Polymorphism"],
    "answer_en": "Static typing",
    "answer_hi": "Static typing",
    "attempted": false,
    "selected": ""
},
{
    "num": 67,
    "question_en": "Which operator is used for non-null assertion?",
    "question_hi": "कौन सा ऑपरेटर non-null assertion के लिए उपयोग होता है?",
    "options_en": ["!", "?", "??", "!=="],
    "options_hi": ["!", "?", "??", "!=="],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
},
{
    "num": 68,
    "question_en": "Which type represents absence of a value?",
    "question_hi": "कौन सा टाइप मान के अभाव को दर्शाता है?",
    "options_en": ["void", "never", "null", "undefined"],
    "options_hi": ["void", "never", "null", "undefined"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
},
{
    "num": 69,
    "question_en": "Which keyword is used to define a namespace?",
    "question_hi": "Namespace को define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["namespace", "module", "space", "package"],
    "options_hi": ["namespace", "module", "space", "package"],
    "answer_en": "namespace",
    "answer_hi": "namespace",
    "attempted": false,
    "selected": ""
},
{
    "num": 70,
    "question_en": "Which TypeScript utility removes null and undefined from a type?",
    "question_hi": "कौन सा TypeScript utility null और undefined को किसी टाइप से हटा देता है?",
    "options_en": ["NonNullable", "Exclude", "Omit", "Pick"],
    "options_hi": ["NonNullable", "Exclude", "Omit", "Pick"],
    "answer_en": "NonNullable",
    "answer_hi": "NonNullable",
    "attempted": false,
    "selected": ""
},
{
    "num": 71,
    "question_en": "Which keyword is used to declare an abstract class?",
    "question_hi": "Abstract class घोषित करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["abstract", "virtual", "override", "implements"],
    "options_hi": ["abstract", "virtual", "override", "implements"],
    "answer_en": "abstract",
    "answer_hi": "abstract",
    "attempted": false,
    "selected": ""
},
{
    "num": 72,
    "question_en": "Which type allows fixed-length arrays with specific types?",
    "question_hi": "कौन सा टाइप specific types वाली fixed-length arrays को अनुमति देता है?",
    "options_en": ["Tuple", "Array", "Union", "Record"],
    "options_hi": ["Tuple", "Array", "Union", "Record"],
    "answer_en": "Tuple",
    "answer_hi": "Tuple",
    "attempted": false,
    "selected": ""
},
{
    "num": 73,
    "question_en": "Which TypeScript tool installs TypeScript globally?",
    "question_hi": "कौन सा टूल TypeScript को global रूप से इंस्टॉल करता है?",
    "options_en": ["npm", "yarn", "pnpm", "tsc"],
    "options_hi": ["npm", "yarn", "pnpm", "tsc"],
    "answer_en": "npm",
    "answer_hi": "npm",
    "attempted": false,
    "selected": ""
},
{
    "num": 74,
    "question_en": "Which file indicates TypeScript configuration?",
    "question_hi": "कौन सी फ़ाइल TypeScript configuration को दर्शाती है?",
    "options_en": ["tsconfig.json", "package.json", "config.ts", "ts.json"],
    "options_hi": ["tsconfig.json", "package.json", "config.ts", "ts.json"],
    "answer_en": "tsconfig.json",
    "answer_hi": "tsconfig.json",
    "attempted": false,
    "selected": ""
},
{
    "num": 75,
    "question_en": "Which property in tsconfig enables all strict type checks?",
    "question_hi": "tsconfig में कौन सी property सभी strict type checks सक्षम करती है?",
    "options_en": ["strict", "noImplicitAny", "target", "module"],
    "options_hi": ["strict", "noImplicitAny", "target", "module"],
    "answer_en": "strict",
    "answer_hi": "strict",
    "attempted": false,
    "selected": ""
},
{
    "num": 76,
    "question_en": "Which TypeScript type is used to describe objects with string keys and specific values?",
    "question_hi": "कौन सा TypeScript टाइप string keys और specific values वाले objects को दर्शाता है?",
    "options_en": ["Record", "Map", "Tuple", "Array"],
    "options_hi": ["Record", "Map", "Tuple", "Array"],
    "answer_en": "Record",
    "answer_hi": "Record",
    "attempted": false,
    "selected": ""
},
{
    "num": 77,
    "question_en": "Which operator is used to provide a default value when null or undefined?",
    "question_hi": "कौन सा ऑपरेटर null या undefined होने पर default value देता है?",
    "options_en": ["??", "||", "&&", "?:"],
    "options_hi": ["??", "||", "&&", "?:"],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
},
{
    "num": 78,
    "question_en": "Which keyword is used in TypeScript to define class properties inside the constructor?",
    "question_hi": "Constructor के अंदर class properties define करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["public", "static", "readonly", "super"],
    "options_hi": ["public", "static", "readonly", "super"],
    "answer_en": "public",
    "answer_hi": "public",
    "attempted": false,
    "selected": ""
},
{
    "num": 79,
    "question_en": "Which modifier restricts access to a class property to only inside the class?",
    "question_hi": "कौन सा modifier class property की पहुंच केवल class के अंदर सीमित करता है?",
    "options_en": ["private", "protected", "public", "readonly"],
    "options_hi": ["private", "protected", "public", "readonly"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
},
{
    "num": 80,
    "question_en": "Which modifier allows class members to be accessed only within the class and its subclasses?",
    "question_hi": "कौन सा modifier class members को केवल class और उसकी subclasses तक सीमित करता है?",
    "options_en": ["protected", "private", "public", "static"],
    "options_hi": ["protected", "private", "public", "static"],
    "answer_en": "protected",
    "answer_hi": "protected",
    "attempted": false,
    "selected": ""
},
{
    "num": 81,
    "question_en": "Which TypeScript feature allows defining functions with multiple signatures?",
    "question_hi": "कौन सा TypeScript feature functions को multiple signatures define करने देता है?",
    "options_en": ["Function Overloading", "Generics", "Interfaces", "Modules"],
    "options_hi": ["Function Overloading", "Generics", "Interfaces", "Modules"],
    "answer_en": "Function Overloading",
    "answer_hi": "Function Overloading",
    "attempted": false,
    "selected": ""
},
{
    "num": 82,
    "question_en": "Which feature provides type safety for reusable components?",
    "question_hi": "Reusable components के लिए type safety कौन सा feature प्रदान करता है?",
    "options_en": ["Generics", "Enums", "Modules", "Namespaces"],
    "options_hi": ["Generics", "Enums", "Modules", "Namespaces"],
    "answer_en": "Generics",
    "answer_hi": "Generics",
    "attempted": false,
    "selected": ""
},
{
    "num": 83,
    "question_en": "Which TypeScript type defines a key-value structure?",
    "question_hi": "कौन सा TypeScript टाइप key-value संरचना को दर्शाता है?",
    "options_en": ["Record", "Tuple", "Union", "Enum"],
    "options_hi": ["Record", "Tuple", "Union", "Enum"],
    "answer_en": "Record",
    "answer_hi": "Record",
    "attempted": false,
    "selected": ""
},
{
    "num": 84,
    "question_en": "Which statement is true about enums?",
    "question_hi": "Enums के बारे में कौन सा कथन सही है?",
    "options_en": ["They group related constants", "They store arrays", "They define classes", "They perform loops"],
    "options_hi": ["वे related constants को समूहित करते हैं", "वे arrays स्टोर करते हैं", "वे classes define करते हैं", "वे loops perform करते हैं"],
    "answer_en": "They group related constants",
    "answer_hi": "वे related constants को समूहित करते हैं",
    "attempted": false,
    "selected": ""
},
{
    "num": 85,
    "question_en": "Which type is useful to combine two or more types?",
    "question_hi": "दो या अधिक types को मिलाने के लिए कौन सा टाइप उपयोगी है?",
    "options_en": ["Intersection Type", "Union Type", "Tuple", "Enum"],
    "options_hi": ["Intersection Type", "Union Type", "Tuple", "Enum"],
    "answer_en": "Intersection Type",
    "answer_hi": "Intersection Type",
    "attempted": false,
    "selected": ""
},
{
    "num": 86,
    "question_en": "Which TypeScript type represents intentional absence?",
    "question_hi": "कौन सा TypeScript टाइप जानबूझकर अभाव को दर्शाता है?",
    "options_en": ["null", "undefined", "never", "void"],
    "options_hi": ["null", "undefined", "never", "void"],
    "answer_en": "null",
    "answer_hi": "null",
    "attempted": false,
    "selected": ""
},
{
    "num": 87,
    "question_en": "Which TypeScript feature prevents assigning incorrect types?",
    "question_hi": "कौन सा TypeScript feature गलत types को assign होने से रोकता है?",
    "options_en": ["Type Checking", "Hoisting", "Closures", "Scope"],
    "options_hi": ["Type Checking", "Hoisting", "Closures", "Scope"],
    "answer_en": "Type Checking",
    "answer_hi": "Type Checking",
    "attempted": false,
    "selected": ""
},
{
    "num": 88,
    "question_en": "Which keyword creates an alias for an existing type?",
    "question_hi": "कौन सा keyword किसी मौजूदा टाइप के लिए alias बनाता है?",
    "options_en": ["type", "alias", "as", "using"],
    "options_hi": ["type", "alias", "as", "using"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
},
{
    "num": 89,
    "question_en": "Which file extension is used for TypeScript React files?",
    "question_hi": "TypeScript React फाइलों के लिए कौन सा extension उपयोग होता है?",
    "options_en": ["tsx", "tsr", "jsx", "tr"],
    "options_hi": ["tsx", "tsr", "jsx", "tr"],
    "answer_en": "tsx",
    "answer_hi": "tsx",
    "attempted": false,
    "selected": ""
},
{
    "num": 90,
    "question_en": "Which method converts TypeScript code to JavaScript?",
    "question_hi": "कौन सा method TypeScript को JavaScript में बदलता है?",
    "options_en": ["tsc", "npm", "node", "babel"],
    "options_hi": ["tsc", "npm", "node", "babel"],
    "answer_en": "tsc",
    "answer_hi": "tsc",
    "attempted": false,
    "selected": ""
},
{
    "num": 91,
    "question_en": "Which type describes an object with unknown properties?",
    "question_hi": "कौन सा टाइप unknown properties वाले object को दर्शाता है?",
    "options_en": ["Record<string, unknown>", "Tuple", "never", "Enum"],
    "options_hi": ["Record<string, unknown>", "Tuple", "never", "Enum"],
    "answer_en": "Record<string, unknown>",
    "answer_hi": "Record<string, unknown>",
    "attempted": false,
    "selected": ""
},
{
    "num": 92,
    "question_en": "Which operator is used for optional chaining?",
    "question_hi": "Optional chaining के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["?.", "??", "::", "|"],
    "options_hi": ["?.", "??", "::", "|"],
    "answer_en": "?.",
    "answer_hi": "?.",
    "attempted": false,
    "selected": ""
},
{
    "num": 93,
    "question_en": "Which TypeScript feature allows combining properties of multiple types?",
    "question_hi": "कौन सा TypeScript feature कई types की properties को जोड़ने की अनुमति देता है?",
    "options_en": ["Intersection", "Tuple", "Enum", "Module"],
    "options_hi": ["Intersection", "Tuple", "Enum", "Module"],
    "answer_en": "Intersection",
    "answer_hi": "Intersection",
    "attempted": false,
    "selected": ""
},
{
    "num": 94,
    "question_en": "Which TypeScript feature helps to specify the shape of a function?",
    "question_hi": "कौन सा TypeScript feature किसी function के रूप को निर्दिष्ट करने में मदद करता है?",
    "options_en": ["Function type", "Enum", "Module", "Tuple"],
    "options_hi": ["Function type", "Enum", "Module", "Tuple"],
    "answer_en": "Function type",
    "answer_hi": "Function type",
    "attempted": false,
    "selected": ""
},
{
    "num": 95,
    "question_en": "Which keyword prevents class inheritance?",
    "question_hi": "कौन सा keyword class inheritance को रोकता है?",
    "options_en": ["final (not available in TS)", "const", "static", "private"],
    "options_hi": ["final (TS में उपलब्ध नहीं)", "const", "static", "private"],
    "answer_en": "final (not available in TS)",
    "answer_hi": "final (TS में उपलब्ध नहीं)",
    "attempted": false,
    "selected": ""
},
{
    "num": 96,
    "question_en": "Which TypeScript type is best for representing an ID that could be a string or number?",
    "question_hi": "कौन सा TypeScript टाइप किसी ID को दर्शाने के लिए उपयुक्त है जो string या number हो सकती है?",
    "options_en": ["string | number", "any", "never", "tuple"],
    "options_hi": ["string | number", "any", "never", "tuple"],
    "answer_en": "string | number",
    "answer_hi": "string | number",
    "attempted": false,
    "selected": ""
},
{
    "num": 97,
    "question_en": "Which type is used when the exact structure of data is unknown?",
    "question_hi": "जब डेटा की सही संरचना unknown हो, तब कौन सा टाइप उपयोग होता है?",
    "options_en": ["unknown", "any", "never", "null"],
    "options_hi": ["unknown", "any", "never", "null"],
    "answer_en": "unknown",
    "answer_hi": "unknown",
    "attempted": false,
    "selected": ""
},
{
    "num": 98,
    "question_en": "Which TypeScript utility extracts keys from a type?",
    "question_hi": "कौन सा TypeScript utility किसी टाइप से keys निकालता है?",
    "options_en": ["keyof", "typeof", "Pick", "Omit"],
    "options_hi": ["keyof", "typeof", "Pick", "Omit"],
    "answer_en": "keyof",
    "answer_hi": "keyof",
    "attempted": false,
    "selected": ""
},
{
    "num": 99,
    "question_en": "Which type ensures a value is assigned before it is used?",
    "question_hi": "कौन सा टाइप सुनिश्चित करता है कि कोई मान उपयोग से पहले assign किया गया है?",
    "options_en": ["definite assignment assertion", "never", "tuple", "void"],
    "options_hi": ["definite assignment assertion", "never", "tuple", "void"],
    "answer_en": "definite assignment assertion",
    "answer_hi": "definite assignment assertion",
    "attempted": false,
    "selected": ""
},
{
    "num": 100,
    "question_en": "Which feature is used to restrict a variable to specific fixed values?",
    "question_hi": "कौन सा feature किसी variable को निश्चित मानों तक सीमित करता है?",
    "options_en": ["Literal Types", "Tuple", "Enum", "Module"],
    "options_hi": ["Literal Types", "Tuple", "Enum", "Module"],
    "answer_en": "Literal Types",
    "answer_hi": "Literal Types",
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