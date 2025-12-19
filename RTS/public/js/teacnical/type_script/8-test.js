const questions =[
    {
        "num": 101,
        "question_en": "What is the main advantage of using TypeScript over JavaScript?",
        "question_hi": "JavaScript पर TypeScript use करने का main advantage क्या है?",
        "options_en": ["Static type checking", "Faster execution", "Smaller file size", "Better browser support"],
        "options_hi": ["Static type checking", "Faster execution", "Smaller file size", "Better browser support"],
        "answer_en": "Static type checking",
        "answer_hi": "Static type checking",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 102,
        "question_en": "Which year was TypeScript first released?",
        "question_hi": "TypeScript पहली बार किस year release हुआ था?",
        "options_en": ["2012", "2010", "2014", "2016"],
        "options_hi": ["2012", "2010", "2014", "2016"],
        "answer_en": "2012",
        "answer_hi": "2012",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 103,
        "question_en": "What does TypeScript compile to?",
        "question_hi": "TypeScript किसमें compile होता है?",
        "options_en": ["JavaScript", "Python", "Java", "C++"],
        "options_hi": ["JavaScript", "Python", "Java", "C++"],
        "answer_en": "JavaScript",
        "answer_hi": "JavaScript",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 104,
        "question_en": "Which of these is NOT a TypeScript primitive type?",
        "question_hi": "निम्न में से कौन TypeScript primitive type नहीं है?",
        "options_en": ["array", "string", "boolean", "number"],
        "options_hi": ["array", "string", "boolean", "number"],
        "answer_en": "array",
        "answer_hi": "array",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 105,
        "question_en": "How do you declare a variable that can be a string or null?",
        "question_hi": "Variable जो string या null हो सकती है, कैसे declare करें?",
        "options_en": ["let name: string | null;", "let name: string || null;", "let name: string && null;", "let name: string & null;"],
        "options_hi": ["let name: string | null;", "let name: string || null;", "let name: string && null;", "let name: string & null;"],
        "answer_en": "let name: string | null;",
        "answer_hi": "let name: string | null;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 106,
        "question_en": "What is the type of: let x = [1, 2, 3];",
        "question_hi": "let x = [1, 2, 3]; का type क्या होगा?",
        "options_en": ["number[]", "any[]", "array", "number"],
        "options_hi": ["number[]", "any[]", "array", "number"],
        "answer_en": "number[]",
        "answer_hi": "number[]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 107,
        "question_en": "Which keyword is used for constant variables?",
        "question_hi": "Constant variables के लिए कौन सा keyword use होता है?",
        "options_en": ["const", "let", "var", "static"],
        "options_hi": ["const", "let", "var", "static"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 108,
        "question_en": "What is the difference between 'let' and 'const'?",
        "question_hi": "'let' और 'const' में क्या difference है?",
        "options_en": ["const cannot be reassigned", "let cannot be reassigned", "No difference", "const has function scope"],
        "options_hi": ["const reassign नहीं किया जा सकता", "let reassign नहीं किया जा सकता", "कोई difference नहीं", "const का function scope होता है"],
        "answer_en": "const cannot be reassigned",
        "answer_hi": "const reassign नहीं किया जा सकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 109,
        "question_en": "How do you make a function parameter optional?",
        "question_hi": "Function parameter को optional कैसे बनाएं?",
        "options_en": ["param?: type", "param: type?", "optional param: type", "param: optional type"],
        "options_hi": ["param?: type", "param: type?", "optional param: type", "param: optional type"],
        "answer_en": "param?: type",
        "answer_hi": "param?: type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 110,
        "question_en": "What is the default value of an uninitialized variable?",
        "question_hi": "Uninitialized variable की default value क्या होती है?",
        "options_en": ["undefined", "null", "0", ""],
        "options_hi": ["undefined", "null", "0", ""],
        "answer_en": "undefined",
        "answer_hi": "undefined",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 111,
        "question_en": "Which type represents the absence of value intentionally?",
        "question_hi": "Intentional value की absence को कौन सा type represent करता है?",
        "options_en": ["null", "undefined", "void", "never"],
        "options_hi": ["null", "undefined", "void", "never"],
        "answer_en": "null",
        "answer_hi": "null",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 112,
        "question_en": "What is the type of: typeof 'hello'",
        "question_hi": "typeof 'hello' का type क्या होगा?",
        "options_en": ["string", "String", "any", "unknown"],
        "options_hi": ["string", "String", "any", "unknown"],
        "answer_en": "string",
        "answer_hi": "string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 113,
        "question_en": "How do you specify a function return type?",
        "question_hi": "Function return type कैसे specify करें?",
        "options_en": ["function name(): returnType {}", "function name(): returnType {}", "function name() returnType {}", "function name() -> returnType {}"],
        "options_hi": ["function name(): returnType {}", "function name(): returnType {}", "function name() returnType {}", "function name() -> returnType {}"],
        "answer_en": "function name(): returnType {}",
        "answer_hi": "function name(): returnType {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 114,
        "question_en": "What is the return type of a function that doesn't return anything?",
        "question_hi": "Function जो कुछ return नहीं करती, उसका return type क्या होता है?",
        "options_en": ["void", "undefined", "null", "any"],
        "options_hi": ["void", "undefined", "null", "any"],
        "answer_en": "void",
        "answer_hi": "void",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 115,
        "question_en": "Which type should you use when you don't know the type?",
        "question_hi": "जब आप type नहीं जानते तो कौन सा type use करना चाहिए?",
        "options_en": ["unknown", "any", "void", "never"],
        "options_hi": ["unknown", "any", "void", "never"],
        "answer_en": "unknown",
        "answer_hi": "unknown",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 116,
        "question_en": "What is the problem with using 'any' type?",
        "question_hi": "'any' type use करने में क्या problem है?",
        "options_en": ["Loses type safety", "Makes code faster", "Makes code smaller", "Better performance"],
        "options_hi": ["Type safety lose हो जाती है", "Code faster हो जाता है", "Code smaller हो जाता है", "Better performance"],
        "answer_en": "Loses type safety",
        "answer_hi": "Type safety lose हो जाती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 117,
        "question_en": "How do you create a type for an object with specific properties?",
        "question_hi": "Specific properties वाले object के लिए type कैसे create करें?",
        "options_en": ["interface or type alias", "class", "enum", "namespace"],
        "options_hi": ["interface या type alias", "class", "enum", "namespace"],
        "answer_en": "interface or type alias",
        "answer_hi": "interface या type alias",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 118,
        "question_en": "What is the difference between 'interface' and 'type'?",
        "question_hi": "'interface' और 'type' में क्या difference है?",
        "options_en": ["interface can be extended, type can use unions", "No difference", "type can be extended, interface can use unions", "interface is for classes only"],
        "options_hi": ["interface extend किया जा सकता है, type unions use कर सकता है", "कोई difference नहीं", "type extend किया जा सकता है, interface unions use कर सकता है", "interface केवल classes के लिए है"],
        "answer_en": "interface can be extended, type can use unions",
        "answer_hi": "interface extend किया जा सकता है, type unions use कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 119,
        "question_en": "How do you make all properties in an interface optional?",
        "question_hi": "Interface में सभी properties को optional कैसे बनाएं?",
        "options_en": ["Use Partial utility type", "Add ? to each property", "Use Optional utility type", "Cannot be done"],
        "options_hi": ["Partial utility type use करें", "हर property में ? add करें", "Optional utility type use करें", "Cannot be done"],
        "answer_en": "Use Partial utility type",
        "answer_hi": "Partial utility type use करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 120,
        "question_en": "What is a generic in TypeScript?",
        "question_hi": "TypeScript में generic क्या है?",
        "options_en": ["Reusable component that works with multiple types", "Specific type", "Any type", "Unknown type"],
        "options_hi": ["Reusable component जो multiple types के साथ work करता है", "Specific type", "Any type", "Unknown type"],
        "answer_en": "Reusable component that works with multiple types",
        "answer_hi": "Reusable component जो multiple types के साथ work करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 121,
        "question_en": "How do you declare a generic function?",
        "question_hi": "Generic function कैसे declare करें?",
        "options_en": ["function name<T>(arg: T): T {}", "function name<generic>(arg: generic): generic {}", "function name<T>(arg: any): any {}", "function name(arg: T): T {}"],
        "options_hi": ["function name<T>(arg: T): T {}", "function name<generic>(arg: generic): generic {}", "function name<T>(arg: any): any {}", "function name(arg: T): T {}"],
        "answer_en": "function name<T>(arg: T): T {}",
        "answer_hi": "function name<T>(arg: T): T {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 122,
        "question_en": "What is the purpose of 'extends' in generics?",
        "question_hi": "Generics में 'extends' का purpose क्या है?",
        "options_en": ["To constrain generic types", "To extend classes", "To implement interfaces", "To create new types"],
        "options_hi": ["Generic types constrain करने के लिए", "Classes extend करने के लिए", "Interfaces implement करने के लिए", "New types create करने के लिए"],
        "answer_en": "To constrain generic types",
        "answer_hi": "Generic types constrain करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 123,
        "question_en": "How do you create a class in TypeScript?",
        "question_hi": "TypeScript में class कैसे create करें?",
        "options_en": ["class Name {}", "interface Name {}", "type Name = {}", "function Name() {}"],
        "options_hi": ["class Name {}", "interface Name {}", "type Name = {}", "function Name() {}"],
        "answer_en": "class Name {}",
        "answer_hi": "class Name {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 124,
        "question_en": "What are access modifiers in TypeScript?",
        "question_hi": "TypeScript में access modifiers क्या हैं?",
        "options_en": ["public, private, protected", "static, readonly, abstract", "extends, implements", "interface, type, class"],
        "options_hi": ["public, private, protected", "static, readonly, abstract", "extends, implements", "interface, type, class"],
        "answer_en": "public, private, protected",
        "answer_hi": "public, private, protected",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 125,
        "question_en": "What is the default access modifier?",
        "question_hi": "Default access modifier कौन सा है?",
        "options_en": ["public", "private", "protected", "internal"],
        "options_hi": ["public", "private", "protected", "internal"],
        "answer_en": "public",
        "answer_hi": "public",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 126,
        "question_en": "How do you make a property accessible only within the class?",
        "question_hi": "Property को केवल class के अंदर accessible कैसे बनाएं?",
        "options_en": ["private propertyName;", "protected propertyName;", "public propertyName;", "internal propertyName;"],
        "options_hi": ["private propertyName;", "protected propertyName;", "public propertyName;", "internal propertyName;"],
        "answer_en": "private propertyName;",
        "answer_hi": "private propertyName;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 127,
        "question_en": "What does 'readonly' do to a property?",
        "question_hi": "'readonly' property के साथ क्या करता है?",
        "options_en": ["Makes it read-only after initialization", "Makes it write-only", "Makes it optional", "Makes it required"],
        "options_hi": ["Initialization के बाद read-only बनाता है", "Write-only बनाता है", "Optional बनाता है", "Required बनाता है"],
        "answer_en": "Makes it read-only after initialization",
        "answer_hi": "Initialization के बाद read-only बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 128,
        "question_en": "How do you define a static property?",
        "question_hi": "Static property कैसे define करें?",
        "options_en": ["static propertyName;", "readonly propertyName;", "const propertyName;", "let propertyName;"],
        "options_hi": ["static propertyName;", "readonly propertyName;", "const propertyName;", "let propertyName;"],
        "answer_en": "static propertyName;",
        "answer_hi": "static propertyName;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 129,
        "question_en": "What is an abstract class?",
        "question_hi": "Abstract class क्या है?",
        "options_en": ["Class that cannot be instantiated directly", "Class that can be instantiated", "Interface", "Type alias"],
        "options_hi": ["Class जो directly instantiate नहीं किया जा सकता", "Class जो instantiate किया जा सकता है", "Interface", "Type alias"],
        "answer_en": "Class that cannot be instantiated directly",
        "answer_hi": "Class जो directly instantiate नहीं किया जा सकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 130,
        "question_en": "How do you declare an abstract method?",
        "question_hi": "Abstract method कैसे declare करें?",
        "options_en": ["abstract methodName(): returnType;", "methodName(): returnType;", "virtual methodName(): returnType;", "override methodName(): returnType;"],
        "options_hi": ["abstract methodName(): returnType;", "methodName(): returnType;", "virtual methodName(): returnType;", "override methodName(): returnType;"],
        "answer_en": "abstract methodName(): returnType;",
        "answer_hi": "abstract methodName(): returnType;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 131,
        "question_en": "What is method overriding?",
        "question_hi": "Method overriding क्या है?",
        "options_en": ["Redefining method in child class", "Defining new method", "Deleting method", "Renaming method"],
        "options_hi": ["Child class में method redefine करना", "New method define करना", "Method delete करना", "Method rename करना"],
        "answer_en": "Redefining method in child class",
        "answer_hi": "Child class में method redefine करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 132,
        "question_en": "How do you call parent class constructor?",
        "question_hi": "Parent class constructor को कैसे call करें?",
        "options_en": ["super()", "base()", "parent()", "this()"],
        "options_hi": ["super()", "base()", "parent()", "this()"],
        "answer_en": "super()",
        "answer_hi": "super()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 133,
        "question_en": "What is an interface?",
        "question_hi": "Interface क्या है?",
        "options_en": ["Contract that defines structure", "Class implementation", "Type definition", "Function signature"],
        "options_hi": ["Contract जो structure define करता है", "Class implementation", "Type definition", "Function signature"],
        "answer_en": "Contract that defines structure",
        "answer_hi": "Contract जो structure define करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 134,
        "question_en": "How do you implement an interface in a class?",
        "question_hi": "Class में interface कैसे implement करें?",
        "options_en": ["class Name implements InterfaceName {}", "class Name extends InterfaceName {}", "class Name : InterfaceName {}", "class Name = InterfaceName {}"],
        "options_hi": ["class Name implements InterfaceName {}", "class Name extends InterfaceName {}", "class Name : InterfaceName {}", "class Name = InterfaceName {}"],
        "answer_en": "class Name implements InterfaceName {}",
        "answer_hi": "class Name implements InterfaceName {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 135,
        "question_en": "Can interfaces have implementation?",
        "question_hi": "क्या interfaces में implementation हो सकती है?",
        "options_en": ["No, only declaration", "Yes", "Only in abstract classes", "Only with default methods"],
        "options_hi": ["नहीं, केवल declaration", "हाँ", "केवल abstract classes में", "केवल default methods के साथ"],
        "answer_en": "No, only declaration",
        "answer_hi": "नहीं, केवल declaration",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 136,
        "question_en": "What is interface inheritance?",
        "question_hi": "Interface inheritance क्या है?",
        "options_en": ["One interface extending another", "Class implementing interface", "Interface implementing class", "Class extending interface"],
        "options_hi": ["एक interface दूसरे को extend कर रहा है", "Class interface implement कर रही है", "Interface class implement कर रहा है", "Class interface extend कर रही है"],
        "answer_en": "One interface extending another",
        "answer_hi": "एक interface दूसरे को extend कर रहा है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 137,
        "question_en": "How do you extend an interface?",
        "question_hi": "Interface को कैसे extend करें?",
        "options_en": ["interface A extends B {}", "interface A implements B {}", "interface A : B {}", "interface A = B {}"],
        "options_hi": ["interface A extends B {}", "interface A implements B {}", "interface A : B {}", "interface A = B {}"],
        "answer_en": "interface A extends B {}",
        "answer_hi": "interface A extends B {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 138,
        "question_en": "What is a hybrid interface?",
        "question_hi": "Hybrid interface क्या है?",
        "options_en": ["Interface with multiple types", "Interface with one type", "Class interface", "Abstract interface"],
        "options_hi": ["Multiple types वाला interface", "One type वाला interface", "Class interface", "Abstract interface"],
        "answer_en": "Interface with multiple types",
        "answer_hi": "Multiple types वाला interface",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 139,
        "question_en": "What is function overloading?",
        "question_hi": "Function overloading क्या है?",
        "options_en": ["Multiple function signatures with one implementation", "Multiple implementations", "Single signature", "No signature"],
        "options_hi": ["एक implementation के साथ multiple function signatures", "Multiple implementations", "Single signature", "No signature"],
        "answer_en": "Multiple function signatures with one implementation",
        "answer_hi": "एक implementation के साथ multiple function signatures",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 140,
        "question_en": "How do you declare function overloads?",
        "question_hi": "Function overloads कैसे declare करें?",
        "options_en": ["Multiple signatures followed by implementation", "Multiple implementations", "Using override keyword", "Using overload keyword"],
        "options_hi": ["Multiple signatures जिसके बाद implementation आता है", "Multiple implementations", "override keyword use करके", "overload keyword use करके"],
        "answer_en": "Multiple signatures followed by implementation",
        "answer_hi": "Multiple signatures जिसके बाद implementation आता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 141,
        "question_en": "What is a namespace?",
        "question_hi": "Namespace क्या है?",
        "options_en": ["Way to organize code", "Type definition", "Function", "Class"],
        "options_hi": ["Code organize करने का तरीका", "Type definition", "Function", "Class"],
        "answer_en": "Way to organize code",
        "answer_hi": "Code organize करने का तरीका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 142,
        "question_en": "How do you declare a namespace?",
        "question_hi": "Namespace कैसे declare करें?",
        "options_en": ["namespace Name {}", "module Name {}", "package Name {}", "library Name {}"],
        "options_hi": ["namespace Name {}", "module Name {}", "package Name {}", "library Name {}"],
        "answer_en": "namespace Name {}",
        "answer_hi": "namespace Name {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 143,
        "question_en": "What are modules in TypeScript?",
        "question_hi": "TypeScript में modules क्या हैं?",
        "options_en": ["ES6 modules for code organization", "Namespaces", "Classes", "Interfaces"],
        "options_hi": ["Code organization के लिए ES6 modules", "Namespaces", "Classes", "Interfaces"],
        "answer_en": "ES6 modules for code organization",
        "answer_hi": "Code organization के लिए ES6 modules",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 144,
        "question_en": "How do you export a function from a module?",
        "question_hi": "Module से function कैसे export करें?",
        "options_en": ["export function name() {}", "function export name() {}", "export: function name() {}", "function name() export {}"],
        "options_hi": ["export function name() {}", "function export name() {}", "export: function name() {}", "function name() export {}"],
        "answer_en": "export function name() {}",
        "answer_hi": "export function name() {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 145,
        "question_en": "How do you import a function from a module?",
        "question_hi": "Module से function कैसे import करें?",
        "options_en": ["import { name } from './module';", "import name from './module';", "require('./module').name;", "include './module';"],
        "options_hi": ["import { name } from './module';", "import name from './module';", "require('./module').name;", "include './module';"],
        "answer_en": "import { name } from './module';",
        "answer_hi": "import { name } from './module';",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 146,
        "question_en": "What is default export?",
        "question_hi": "Default export क्या है?",
        "options_en": ["Main export from a module", "Optional export", "Private export", "Public export"],
        "options_hi": ["Module का main export", "Optional export", "Private export", "Public export"],
        "answer_en": "Main export from a module",
        "answer_hi": "Module का main export",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 147,
        "question_en": "How do you use default export?",
        "question_hi": "Default export कैसे use करें?",
        "options_en": ["export default function;", "export function default;", "default export function;", "function export default;"],
        "options_hi": ["export default function;", "export function default;", "default export function;", "function export default;"],
        "answer_en": "export default function;",
        "answer_hi": "export default function;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 148,
        "question_en": "What are decorators?",
        "question_hi": "Decorators क्या हैं?",
        "options_en": ["Functions that modify classes/methods", "Type definitions", "Interfaces", "Classes"],
        "options_hi": ["Functions जो classes/methods modify करते हैं", "Type definitions", "Interfaces", "Classes"],
        "answer_en": "Functions that modify classes/methods",
        "answer_hi": "Functions जो classes/methods modify करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 149,
        "question_en": "How do you apply a decorator?",
        "question_hi": "Decorator कैसे apply करें?",
        "options_en": ["@decorator above declaration", "@decorator below declaration", "decorator() before declaration", "decorator() after declaration"],
        "options_hi": ["Declaration के ऊपर @decorator", "Declaration के नीचे @decorator", "Declaration से पहले decorator()", "Declaration के बाद decorator()"],
        "answer_en": "@decorator above declaration",
        "answer_hi": "Declaration के ऊपर @decorator",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 150,
        "question_en": "What is a class decorator?",
        "question_hi": "Class decorator क्या है?",
        "options_en": ["Decorator that applies to class", "Decorator for methods", "Decorator for properties", "Decorator for parameters"],
        "options_hi": ["Decorator जो class पर apply होता है", "Methods के लिए decorator", "Properties के लिए decorator", "Parameters के लिए decorator"],
        "answer_en": "Decorator that applies to class",
        "answer_hi": "Decorator जो class पर apply होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 151,
        "question_en": "What is a method decorator?",
        "question_hi": "Method decorator क्या है?",
        "options_en": ["Decorator that applies to methods", "Decorator for classes", "Decorator for properties", "Decorator for parameters"],
        "options_hi": ["Decorator जो methods पर apply होता है", "Classes के लिए decorator", "Properties के लिए decorator", "Parameters के लिए decorator"],
        "answer_en": "Decorator that applies to methods",
        "answer_hi": "Decorator जो methods पर apply होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 152,
        "question_en": "What is a property decorator?",
        "question_hi": "Property decorator क्या है?",
        "options_en": ["Decorator that applies to properties", "Decorator for classes", "Decorator for methods", "Decorator for parameters"],
        "options_hi": ["Decorator जो properties पर apply होता है", "Classes के लिए decorator", "Methods के लिए decorator", "Parameters के लिए decorator"],
        "answer_en": "Decorator that applies to properties",
        "answer_hi": "Decorator जो properties पर apply होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 153,
        "question_en": "What is a parameter decorator?",
        "question_hi": "Parameter decorator क्या है?",
        "options_en": ["Decorator that applies to parameters", "Decorator for classes", "Decorator for methods", "Decorator for properties"],
        "options_hi": ["Decorator जो parameters पर apply होता है", "Classes के लिए decorator", "Methods के लिए decorator", "Properties के लिए decorator"],
        "answer_en": "Decorator that applies to parameters",
        "answer_hi": "Decorator जो parameters पर apply होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 154,
        "question_en": "What are mixins?",
        "question_hi": "Mixins क्या हैं?",
        "options_en": ["Way to combine classes", "Type definitions", "Interfaces", "Functions"],
        "options_hi": ["Classes combine करने का तरीका", "Type definitions", "Interfaces", "Functions"],
        "answer_en": "Way to combine classes",
        "answer_hi": "Classes combine करने का तरीका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 155,
        "question_en": "What is declaration merging?",
        "question_hi": "Declaration merging क्या है?",
        "options_en": ["Combining multiple declarations", "Separating declarations", "Deleting declarations", "Ignoring declarations"],
        "options_hi": ["Multiple declarations combine करना", "Declarations separate करना", "Declarations delete करना", "Declarations ignore करना"],
        "answer_en": "Combining multiple declarations",
        "answer_hi": "Multiple declarations combine करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 156,
        "question_en": "What types support declaration merging?",
        "question_hi": "कौन से types declaration merging support करते हैं?",
        "options_en": ["Interfaces and namespaces", "Classes and functions", "Types and enums", "All types"],
        "options_hi": ["Interfaces और namespaces", "Classes और functions", "Types और enums", "सभी types"],
        "answer_en": "Interfaces and namespaces",
        "answer_hi": "Interfaces और namespaces",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 157,
        "question_en": "What is global augmentation?",
        "question_hi": "Global augmentation क्या है?",
        "options_en": ["Adding to global scope", "Subtracting from global scope", "Deleting global scope", "Ignoring global scope"],
        "options_hi": ["Global scope में add करना", "Global scope से subtract करना", "Global scope delete करना", "Global scope ignore करना"],
        "answer_en": "Adding to global scope",
        "answer_hi": "Global scope में add करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 158,
        "question_en": "What is module augmentation?",
        "question_hi": "Module augmentation क्या है?",
        "options_en": ["Adding to existing module declarations", "Subtracting from module declarations", "Deleting module declarations", "Ignoring module declarations"],
        "options_hi": ["Existing module declarations में add करना", "Module declarations से subtract करना", "Module declarations delete करना", "Module declarations ignore करना"],
        "answer_en": "Adding to existing module declarations",
        "answer_hi": "Existing module declarations में add करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 159,
        "question_en": "What are utility types?",
        "question_hi": "Utility types क्या हैं?",
        "options_en": ["Built-in types for common transformations", "User-defined types", "Primitive types", "Any types"],
        "options_hi": ["Common transformations के लिए built-in types", "User-defined types", "Primitive types", "Any types"],
        "answer_en": "Built-in types for common transformations",
        "answer_hi": "Common transformations के लिए built-in types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 160,
        "question_en": "What does Partial<T> do?",
        "question_hi": "Partial<T> क्या करता है?",
        "options_en": ["Makes all properties optional", "Makes all properties required", "Makes all properties readonly", "Picks some properties"],
        "options_hi": ["सभी properties को optional बनाता है", "सभी properties को required बनाता है", "सभी properties को readonly बनाता है", "कुछ properties pick करता है"],
        "answer_en": "Makes all properties optional",
        "answer_hi": "सभी properties को optional बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 161,
        "question_en": "What does Required<T> do?",
        "question_hi": "Required<T> क्या करता है?",
        "options_en": ["Makes all properties required", "Makes all properties optional", "Makes all properties readonly", "Picks some properties"],
        "options_hi": ["सभी properties को required बनाता है", "सभी properties को optional बनाता है", "सभी properties को readonly बनाता है", "कुछ properties pick करता है"],
        "answer_en": "Makes all properties required",
        "answer_hi": "सभी properties को required बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 162,
        "question_en": "What does Readonly<T> do?",
        "question_hi": "Readonly<T> क्या करता है?",
        "options_en": ["Makes all properties readonly", "Makes all properties required", "Makes all properties optional", "Picks some properties"],
        "options_hi": ["सभी properties को readonly बनाता है", "सभी properties को required बनाता है", "सभी properties को optional बनाता है", "कुछ properties pick करता है"],
        "answer_en": "Makes all properties readonly",
        "answer_hi": "सभी properties को readonly बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 163,
        "question_en": "What does Pick<T, K> do?",
        "question_hi": "Pick<T, K> क्या करता है?",
        "options_en": ["Picks specific properties from T", "Picks all properties", "Picks random properties", "Picks no properties"],
        "options_hi": ["T से specific properties pick करता है", "सभी properties pick करता है", "Random properties pick करता है", "कोई properties pick नहीं करता"],
        "answer_en": "Picks specific properties from T",
        "answer_hi": "T से specific properties pick करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 164,
        "question_en": "What does Omit<T, K> do?",
        "question_hi": "Omit<T, K> क्या करता है?",
        "options_en": ["Omits specific properties from T", "Omits all properties", "Omits no properties", "Omits random properties"],
        "options_hi": ["T से specific properties omit करता है", "सभी properties omit करता है", "कोई properties omit नहीं करता", "Random properties omit करता है"],
        "answer_en": "Omits specific properties from T",
        "answer_hi": "T से specific properties omit करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 165,
        "question_en": "What does Record<K, T> do?",
        "question_hi": "Record<K, T> क्या करता है?",
        "options_en": ["Creates object type with keys K and values T", "Creates array type", "Creates function type", "Creates class type"],
        "options_hi": ["Keys K और values T वाला object type create करता है", "Array type create करता है", "Function type create करता है", "Class type create करता है"],
        "answer_en": "Creates object type with keys K and values T",
        "answer_hi": "Keys K और values T वाला object type create करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 166,
        "question_en": "What does Exclude<T, U> do?",
        "question_hi": "Exclude<T, U> क्या करता है?",
        "options_en": ["Excludes types from T that are assignable to U", "Includes types from T", "Excludes all types", "Includes all types"],
        "options_hi": ["T से उन types को exclude करता है जो U को assignable हैं", "T से types include करता है", "सभी types exclude करता है", "सभी types include करता है"],
        "answer_en": "Excludes types from T that are assignable to U",
        "answer_hi": "T से उन types को exclude करता है जो U को assignable हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 167,
        "question_en": "What does Extract<T, U> do?",
        "question_hi": "Extract<T, U> क्या करता है?",
        "options_en": ["Extracts types from T that are assignable to U", "Extracts all types", "Extracts no types", "Extracts random types"],
        "options_hi": ["T से उन types को extract करता है जो U को assignable हैं", "सभी types extract करता है", "कोई types extract नहीं करता", "Random types extract करता है"],
        "answer_en": "Extracts types from T that are assignable to U",
        "answer_hi": "T से उन types को extract करता है जो U को assignable हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 168,
        "question_en": "What does NonNullable<T> do?",
        "question_hi": "NonNullable<T> क्या करता है?",
        "options_en": ["Excludes null and undefined from T", "Includes null and undefined", "Excludes all types", "Includes all types"],
        "options_hi": ["T से null और undefined exclude करता है", "Null और undefined include करता है", "सभी types exclude करता है", "सभी types include करता है"],
        "answer_en": "Excludes null and undefined from T",
        "answer_hi": "T से null और undefined exclude करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 169,
        "question_en": "What does Parameters<T> do?",
        "question_hi": "Parameters<T> क्या करता है?",
        "options_en": ["Gets parameters of function type T", "Gets return type", "Gets properties", "Gets methods"],
        "options_hi": ["Function type T के parameters प्राप्त करता है", "Return type प्राप्त करता है", "Properties प्राप्त करता है", "Methods प्राप्त करता है"],
        "answer_en": "Gets parameters of function type T",
        "answer_hi": "Function type T के parameters प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 170,
        "question_en": "What does ReturnType<T> do?",
        "question_hi": "ReturnType<T> क्या करता है?",
        "options_en": ["Gets return type of function type T", "Gets parameters", "Gets properties", "Gets methods"],
        "options_hi": ["Function type T का return type प्राप्त करता है", "Parameters प्राप्त करता है", "Properties प्राप्त करता है", "Methods प्राप्त करता है"],
        "answer_en": "Gets return type of function type T",
        "answer_hi": "Function type T का return type प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 171,
        "question_en": "What does InstanceType<T> do?",
        "question_hi": "InstanceType<T> क्या करता है?",
        "options_en": ["Gets instance type of constructor function T", "Gets static type", "Gets return type", "Gets parameters"],
        "options_hi": ["Constructor function T का instance type प्राप्त करता है", "Static type प्राप्त करता है", "Return type प्राप्त करता है", "Parameters प्राप्त करता है"],
        "answer_en": "Gets instance type of constructor function T",
        "answer_hi": "Constructor function T का instance type प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 172,
        "question_en": "What does ThisParameterType<T> do?",
        "question_hi": "ThisParameterType<T> क्या करता है?",
        "options_en": ["Gets this parameter type of function type T", "Gets return type", "Gets parameters", "Gets properties"],
        "options_hi": ["Function type T के this parameter type प्राप्त करता है", "Return type प्राप्त करता है", "Parameters प्राप्त करता है", "Properties प्राप्त करता है"],
        "answer_en": "Gets this parameter type of function type T",
        "answer_hi": "Function type T के this parameter type प्राप्त करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 173,
        "question_en": "What does OmitThisParameter<T> do?",
        "question_hi": "OmitThisParameter<T> क्या करता है?",
        "options_en": ["Removes this parameter from function type T", "Adds this parameter", "Changes this parameter", "Ignores this parameter"],
        "options_hi": ["Function type T से this parameter remove करता है", "This parameter add करता है", "This parameter change करता है", "This parameter ignore करता है"],
        "answer_en": "Removes this parameter from function type T",
        "answer_hi": "Function type T से this parameter remove करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 174,
        "question_en": "What does ThisType<T> do?",
        "question_hi": "ThisType<T> क्या करता है?",
        "options_en": ["Marks this type in object literal", "Marks return type", "Marks parameter type", "Marks property type"],
        "options_hi": ["Object literal में this type mark करता है", "Return type mark करता है", "Parameter type mark करता है", "Property type mark करता है"],
        "answer_en": "Marks this type in object literal",
        "answer_hi": "Object literal में this type mark करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 175,
        "question_en": "What are conditional types?",
        "question_hi": "Conditional types क्या हैं?",
        "options_en": ["Types that depend on conditions", "Types that are always true", "Types that are always false", "Types without conditions"],
        "options_hi": ["Conditions पर depend करने वाले types", "हमेशा true रहने वाले types", "हमेशा false रहने वाले types", "Conditions के बिना types"],
        "answer_en": "Types that depend on conditions",
        "answer_hi": "Conditions पर depend करने वाले types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 176,
        "question_en": "What is the syntax for conditional types?",
        "question_hi": "Conditional types का syntax क्या है?",
        "options_en": ["T extends U ? X : Y", "T extends U : X ? Y", "T ? U extends X : Y", "extends T U ? X : Y"],
        "options_hi": ["T extends U ? X : Y", "T extends U : X ? Y", "T ? U extends X : Y", "extends T U ? X : Y"],
        "answer_en": "T extends U ? X : Y",
        "answer_hi": "T extends U ? X : Y",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 177,
        "question_en": "What are mapped types?",
        "question_hi": "Mapped types क्या हैं?",
        "options_en": ["Types that map over properties of another type", "Types that create arrays", "Types that create functions", "Types that create classes"],
        "options_hi": ["Types जो another type की properties पर map करते हैं", "Types जो arrays create करते हैं", "Types जो functions create करते हैं", "Types जो classes create करते हैं"],
        "answer_en": "Types that map over properties of another type",
        "answer_hi": "Types जो another type की properties पर map करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 178,
        "question_en": "What is the syntax for mapped types?",
        "question_hi": "Mapped types का syntax क्या है?",
        "options_en": ["{ [K in keyof T]: U }", "{ [K of keyof T]: U }", "{ [K from keyof T]: U }", "{ [K for keyof T]: U }"],
        "options_hi": ["{ [K in keyof T]: U }", "{ [K of keyof T]: U }", "{ [K from keyof T]: U }", "{ [K for keyof T]: U }"],
        "answer_en": "{ [K in keyof T]: U }",
        "answer_hi": "{ [K in keyof T]: U }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 179,
        "question_en": "What are template literal types?",
        "question_hi": "Template literal types क्या हैं?",
        "options_en": ["String types that use template literal syntax", "Number types", "Boolean types", "Array types"],
        "options_hi": ["String types जो template literal syntax use करते हैं", "Number types", "Boolean types", "Array types"],
        "answer_en": "String types that use template literal syntax",
        "answer_hi": "String types जो template literal syntax use करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 180,
        "question_en": "What is the syntax for template literal types?",
        "question_hi": "Template literal types का syntax क्या है?",
        "options_en": ["`${A}${B}`", "${A}${B}", "`A B`", "A B"],
        "options_hi": ["`${A}${B}`", "${A}${B}", "`A B`", "A B"],
        "answer_en": "`${A}${B}`",
        "answer_hi": "`${A}${B}`",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 181,
        "question_en": "What are recursive types?",
        "question_hi": "Recursive types क्या हैं?",
        "options_en": ["Types that reference themselves", "Types that reference other types", "Types that don't reference anything", "Types that reference arrays"],
        "options_hi": ["Types जो खुद को reference करते हैं", "Types जो other types को reference करते हैं", "Types जो कुछ reference नहीं करते", "Types जो arrays को reference करते हैं"],
        "answer_en": "Types that reference themselves",
        "answer_hi": "Types जो खुद को reference करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 182,
        "question_en": "What is type inference?",
        "question_hi": "Type inference क्या है?",
        "options_en": ["Automatic type detection by TypeScript", "Manual type declaration", "Type checking", "Type conversion"],
        "options_hi": ["TypeScript द्वारा automatic type detection", "Manual type declaration", "Type checking", "Type conversion"],
        "answer_en": "Automatic type detection by TypeScript",
        "answer_hi": "TypeScript द्वारा automatic type detection",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 183,
        "question_en": "What is contextual typing?",
        "question_hi": "Contextual typing क्या है?",
        "options_en": ["Type inference based on context", "Manual typing", "No typing", "Random typing"],
        "options_hi": ["Context के आधार पर type inference", "Manual typing", "No typing", "Random typing"],
        "answer_en": "Type inference based on context",
        "answer_hi": "Context के आधार पर type inference",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 184,
        "question_en": "What is type compatibility?",
        "question_hi": "Type compatibility क्या है?",
        "options_en": ["When types can be used in place of each other", "When types are identical", "When types are different", "When types are unknown"],
        "options_hi": ["जब types एक दूसरे की जगह use किए जा सकते हैं", "जब types identical होते हैं", "जब types different होते हैं", "जब types unknown होते हैं"],
        "answer_en": "When types can be used in place of each other",
        "answer_hi": "जब types एक दूसरे की जगह use किए जा सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 185,
        "question_en": "What is structural typing?",
        "question_hi": "Structural typing क्या है?",
        "options_en": ["Type compatibility based on structure", "Type compatibility based on name", "Type compatibility based on size", "Type compatibility based on location"],
        "options_hi": ["Structure के आधार पर type compatibility", "Name के आधार पर type compatibility", "Size के आधार पर type compatibility", "Location के आधार पर type compatibility"],
        "answer_en": "Type compatibility based on structure",
        "answer_hi": "Structure के आधार पर type compatibility",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 186,
        "question_en": "What is nominal typing?",
        "question_hi": "Nominal typing क्या है?",
        "options_en": ["Type compatibility based on name", "Type compatibility based on structure", "Type compatibility based on size", "Type compatibility based on location"],
        "options_hi": ["Name के आधार पर type compatibility", "Structure के आधार पर type compatibility", "Size के आधार पर type compatibility", "Location के आधार पर type compatibility"],
        "answer_en": "Type compatibility based on name",
        "answer_hi": "Name के आधार पर type compatibility",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 187,
        "question_en": "Which typing does TypeScript use?",
        "question_hi": "TypeScript कौन सा typing use करता है?",
        "options_en": ["Structural typing", "Nominal typing", "Both", "Neither"],
        "options_hi": ["Structural typing", "Nominal typing", "दोनों", "कोई नहीं"],
        "answer_en": "Structural typing",
        "answer_hi": "Structural typing",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 188,
        "question_en": "What is type assertion?",
        "question_hi": "Type assertion क्या है?",
        "options_en": ["Telling TypeScript the type of value", "Asking TypeScript the type", "Ignoring TypeScript type", "Changing TypeScript type"],
        "options_hi": ["TypeScript को value का type बताना", "TypeScript से type पूछना", "TypeScript type ignore करना", "TypeScript type change करना"],
        "answer_en": "Telling TypeScript the type of value",
        "answer_hi": "TypeScript को value का type बताना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 189,
        "question_en": "What is type guard?",
        "question_hi": "Type guard क्या है?",
        "options_en": ["Runtime check that narrows type", "Compile time check", "No check", "Random check"],
        "options_hi": ["Runtime check जो type narrow करता है", "Compile time check", "No check", "Random check"],
        "answer_en": "Runtime check that narrows type",
        "answer_hi": "Runtime check जो type narrow करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 190,
        "question_en": "What is type predicate?",
        "question_hi": "Type predicate क्या है?",
        "options_en": ["Function that returns type predicate", "Function that returns value", "Function that creates value", "Function that deletes value"],
        "options_hi": ["Function जो type predicate return करता है", "Function जो value return करता है", "Function जो value create करता है", "Function जो value delete करता है"],
        "answer_en": "Function that returns type predicate",
        "answer_hi": "Function जो type predicate return करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 191,
        "question_en": "What is discriminated union?",
        "question_hi": "Discriminated union क्या है?",
        "options_en": ["Union type with common discriminant property", "Union type without common property", "Single type", "Any type"],
        "options_hi": ["Common discriminant property वाला union type", "Common property के बिना union type", "Single type", "Any type"],
        "answer_en": "Union type with common discriminant property",
        "answer_hi": "Common discriminant property वाला union type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 192,
        "question_en": "What is exhaustiveness checking?",
        "question_hi": "Exhaustiveness checking क्या है?",
        "options_en": ["Checking all union cases are handled", "Checking some cases", "Checking no cases", "Random checking"],
        "options_hi": ["सभी union cases handled हैं यह check करना", "कुछ cases check करना", "कोई cases check नहीं करना", "Random checking"],
        "answer_en": "Checking all union cases are handled",
        "answer_hi": "सभी union cases handled हैं यह check करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 193,
        "question_en": "What is the 'never' type used for in exhaustiveness checking?",
        "question_hi": "Exhaustiveness checking में 'never' type किसके लिए use होता है?",
        "options_en": ["To represent impossible case", "To represent possible case", "To represent any case", "To represent unknown case"],
        "options_hi": ["Impossible case represent करने के लिए", "Possible case represent करने के लिए", "Any case represent करने के लिए", "Unknown case represent करने के लिए"],
        "answer_en": "To represent impossible case",
        "answer_hi": "Impossible case represent करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 194,
        "question_en": "What is brand checking?",
        "question_hi": "Brand checking क्या है?",
        "options_en": ["Checking unique brand of type", "Checking no brand", "Checking random brand", "Checking multiple brands"],
        "options_hi": ["Type के unique brand को check करना", "No brand check करना", "Random brand check करना", "Multiple brands check करना"],
        "answer_en": "Checking unique brand of type",
        "answer_hi": "Type के unique brand को check करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 195,
        "question_en": "What is opaque type?",
        "question_hi": "Opaque type क्या है?",
        "options_en": ["Type that hides implementation details", "Type that shows implementation", "Type that has no implementation", "Type that has random implementation"],
        "options_hi": ["Type जो implementation details hide करता है", "Type जो implementation show करता है", "Type जिसकी कोई implementation नहीं है", "Type जिसकी random implementation है"],
        "answer_en": "Type that hides implementation details",
        "answer_hi": "Type जो implementation details hide करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 196,
        "question_en": "What is assertion function?",
        "question_hi": "Assertion function क्या है?",
        "options_en": ["Function that asserts condition at runtime", "Function that returns value", "Function that creates value", "Function that deletes value"],
        "options_hi": ["Function जो runtime पर condition assert करता है", "Function जो value return करता है", "Function जो value create करता है", "Function जो value delete करता है"],
        "answer_en": "Function that asserts condition at runtime",
        "answer_hi": "Function जो runtime पर condition assert करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 197,
        "question_en": "What is the 'satisfies' operator?",
        "question_hi": "'satisfies' operator क्या है?",
        "options_en": ["Checks if value satisfies type without changing type", "Changes type", "Ignores type", "Deletes type"],
        "options_hi": ["Check करता है कि value type satisfy करती है बिना type change किए", "Type change करता है", "Type ignore करता है", "Type delete करता है"],
        "answer_en": "Checks if value satisfies type without changing type",
        "answer_hi": "Check करता है कि value type satisfy करती है बिना type change किए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 198,
        "question_en": "What is const assertion?",
        "question_hi": "Const assertion क्या है?",
        "options_en": ["Makes literal types readonly", "Makes literal types writable", "Makes literal types deletable", "Makes literal types optional"],
        "options_hi": ["Literal types को readonly बनाता है", "Literal types को writable बनाता है", "Literal types को deletable बनाता है", "Literal types को optional बनाता है"],
        "answer_en": "Makes literal types readonly",
        "answer_hi": "Literal types को readonly बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 199,
        "question_en": "What does 'as const' do to object literals?",
        "question_hi": "'as const' object literals के साथ क्या करता है?",
        "options_en": ["Makes all properties readonly", "Makes all properties writable", "Makes all properties deletable", "Makes all properties optional"],
        "options_hi": ["सभी properties को readonly बनाता है", "सभी properties को writable बनाता है", "सभी properties को deletable बनाता है", "सभी properties को optional बनाता है"],
        "answer_en": "Makes all properties readonly",
        "answer_hi": "सभी properties को readonly बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 200,
        "question_en": "What is the main purpose of TypeScript's type system?",
        "question_hi": "TypeScript के type system का main purpose क्या है?",
        "options_en": ["Catch errors at compile time", "Make code run faster", "Reduce file size", "Improve browser compatibility"],
        "options_hi": ["Compile time पर errors catch करना", "Code को faster run करना", "File size reduce करना", "Browser compatibility improve करना"],
        "answer_en": "Catch errors at compile time",
        "answer_hi": "Compile time पर errors catch करना",
        "attempted": false,
        "selected": ""
    }
];

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