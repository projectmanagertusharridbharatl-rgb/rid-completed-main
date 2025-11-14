const questions = [
 {
    "num": 101,
    "question_en": "Which keyword declares a class in PHP? (Example: function)",
    "question_hi": "PHP में class घोषित करने के लिए कौन-सा keyword उपयोग होता है? (function)",
    "options_en": [
      "while",
      "is_dir()",
      "function",
      "unlink()"
    ],
    "options_hi": [
      "while",
      "is_dir()",
      "function",
      "unlink()"
    ],
    "answer_en": "function",
    "answer_hi": "function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 102,
    "question_en": "Which keyword is used to inherit from a parent class? (Example: echo)",
    "question_hi": "Parent class से inherit करने के लिए कौन-सा keyword उपयोग होता है? (echo)",
    "options_en": [
      "echo",
      "fclose()",
      "while",
      "trait"
    ],
    "options_hi": [
      "echo",
      "fclose()",
      "while",
      "trait"
    ],
    "answer_en": "echo",
    "answer_hi": "echo",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 103,
    "question_en": "Which magic constant returns the full path and filename of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल का पूरा path और filename लौटाता है?",
    "options_en": [
      "file_exists()",
      "opendir()",
      "__FILE__",
      "beginTransaction()"
    ],
    "options_hi": [
      "file_exists()",
      "opendir()",
      "__FILE__",
      "beginTransaction()"
    ],
    "answer_en": "__FILE__",
    "answer_hi": "__FILE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 104,
    "question_en": "Which magic constant returns the directory of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल की directory लौटाता है?",
    "options_en": [
      "||",
      "phpversion()",
      "__DIR__",
      "empty()"
    ],
    "options_hi": [
      "||",
      "phpversion()",
      "__DIR__",
      "empty()"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 105,
    "question_en": "Which function starts a session in PHP? (Example: strpos())",
    "question_hi": "PHP में session शुरू करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (strpos())",
    "options_en": [
      "strpos()",
      "trim()",
      "throw",
      "array_slice()"
    ],
    "options_hi": [
      "strpos()",
      "trim()",
      "throw",
      "array_slice()"
    ],
    "answer_en": "strpos()",
    "answer_hi": "strpos()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 106,
    "question_en": "Which function destroys a session? (Example: catch)",
    "question_hi": "कौन-सा फ़ंक्शन session को नष्ट करता है? (catch)",
    "options_en": [
      "catch",
      "__destruct()",
      "/",
      "session_start()"
    ],
    "options_hi": [
      "catch",
      "__destruct()",
      "/",
      "session_start()"
    ],
    "answer_en": "catch",
    "answer_hi": "catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 107,
    "question_en": "Which function sets a cookie? (Example: try)",
    "question_hi": "कौन-सा फ़ंक्शन cookie सेट करता है? (try)",
    "options_en": [
      "new",
      "microtime()",
      "===",
      "try"
    ],
    "options_hi": [
      "new",
      "microtime()",
      "===",
      "try"
    ],
    "answer_en": "try",
    "answer_hi": "try",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 108,
    "question_en": "Which function sends a raw HTTP header? (Example: while)",
    "question_hi": "कौन-सा फ़ंक्शन raw HTTP header भेजता है? (while)",
    "options_en": [
      "commit()",
      "array_merge()",
      "const",
      "while"
    ],
    "options_hi": [
      "commit()",
      "array_merge()",
      "const",
      "while"
    ],
    "answer_en": "while",
    "answer_hi": "while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 109,
    "question_en": "Which function connects to MySQL using mysqli extension? (Example: session_start())",
    "question_hi": "mysqli के साथ MySQL से कनेक्ट करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (session_start())",
    "options_en": [
      "session_start()",
      "phpinfo()",
      "??",
      "fwrite()"
    ],
    "options_hi": [
      "session_start()",
      "phpinfo()",
      "??",
      "fwrite()"
    ],
    "answer_en": "session_start()",
    "answer_hi": "session_start()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 110,
    "question_en": "Which PHP extension offers a database abstraction layer (PDO)?",
    "question_hi": "कौन-सा extension database abstraction layer (PDO) प्रदान करता है?",
    "options_en": [
      "PDO",
      "mysqli_query()",
      "+",
      "require_once()"
    ],
    "options_hi": [
      "PDO",
      "mysqli_query()",
      "+",
      "require_once()"
    ],
    "answer_en": "PDO",
    "answer_hi": "PDO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 111,
    "question_en": "Which PDO method prepares a statement for execution?",
    "question_hi": "PDO में किस method से statement prepare किया जाता है?",
    "options_en": [
      "prepare()",
      "private",
      "??",
      "var_dump()"
    ],
    "options_hi": [
      "prepare()",
      "private",
      "??",
      "var_dump()"
    ],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 112,
    "question_en": "Which PDO method executes a prepared statement?",
    "question_hi": "PDO में किस method से prepared statement execute किया जाता है?",
    "options_en": [
      "array_unique()",
      "foreach",
      "execute()",
      "mysqli_real_escape_string()"
    ],
    "options_hi": [
      "array_unique()",
      "foreach",
      "execute()",
      "mysqli_real_escape_string()"
    ],
    "answer_en": "execute()",
    "answer_hi": "execute()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 113,
    "question_en": "Which PDO method begins a transaction?",
    "question_hi": "PDO में transaction शुरू करने के लिए कौन-सा method उपयोग होता है?",
    "options_en": [
      "beginTransaction()",
      "mysqli_connect()",
      "define()",
      "include_once()"
    ],
    "options_hi": [
      "beginTransaction()",
      "mysqli_connect()",
      "define()",
      "include_once()"
    ],
    "answer_en": "beginTransaction()",
    "answer_hi": "beginTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 114,
    "question_en": "Which function securely hashes passwords?",
    "question_hi": "पासवर्ड को सुरक्षित रूप से hash करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": [
      "ksort()",
      "function",
      "password_hash()",
      "json_encode()"
    ],
    "options_hi": [
      "ksort()",
      "function",
      "password_hash()",
      "json_encode()"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 115,
    "question_en": "Which function verifies a password against a hash?",
    "question_hi": "कौन-सा फ़ंक्शन पासवर्ड को hash के खिलाफ सत्यापित करता है?",
    "options_en": [
      "&&",
      "isset",
      "password_verify()",
      "exit()"
    ],
    "options_hi": [
      "&&",
      "isset",
      "password_verify()",
      "exit()"
    ],
    "answer_en": "password_verify()",
    "answer_hi": "password_verify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 116,
    "question_en": "Which function returns the type of a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल का प्रकार बताता है?",
    "options_en": [
      "*",
      "namespace",
      "gettype()",
      "asort()"
    ],
    "options_hi": [
      "*",
      "namespace",
      "gettype()",
      "asort()"
    ],
    "answer_en": "gettype()",
    "answer_hi": "gettype()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 117,
    "question_en": "Which function prints human-readable information about a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल की human-readable जानकारी दिखाता है?",
    "options_en": [
      "str_replace()",
      "print_r()",
      "strpos()",
      ">="
    ],
    "options_hi": [
      "str_replace()",
      "print_r()",
      "strpos()",
      ">="
    ],
    "answer_en": "print_r()",
    "answer_hi": "print_r()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 118,
    "question_en": "Which function dumps information about a variable with type and value?",
    "question_hi": "कौन-सा फ़ंक्शन वैरिएबल के प्रकार और मान सहित जानकारी दिखाता है?",
    "options_en": [
      "array_slice()",
      "ksort()",
      "?:",
      "var_dump()"
    ],
    "options_hi": [
      "array_slice()",
      "ksort()",
      "?:",
      "var_dump()"
    ],
    "answer_en": "var_dump()",
    "answer_hi": "var_dump()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 119,
    "question_en": "Which construct includes a file and generates a fatal error if missing?",
    "question_hi": "कौन-सा construct फ़ाइल शामिल करता है और यदि फ़ाइल गायब हो तो fatal error देता है?",
    "options_en": [
      "continue",
      "require()",
      "array_shift()",
      "$_FILES"
    ],
    "options_hi": [
      "continue",
      "require()",
      "array_shift()",
      "$_FILES"
    ],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 120,
    "question_en": "Which construct includes a file only once?",
    "question_hi": "कौन-सा construct फ़ाइल को केवल एक बार include करता है?",
    "options_en": [
      "prepare()",
      "include_once()",
      "$_FILES",
      "eval()"
    ],
    "options_hi": [
      "prepare()",
      "include_once()",
      "$_FILES",
      "eval()"
    ],
    "answer_en": "include_once()",
    "answer_hi": "include_once()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 121,
    "question_en": "Which operator suppresses errors in PHP?",
    "question_hi": "PHP में errors suppress करने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": [
      "array_splice()",
      "namespace",
      "@",
      "global"
    ],
    "options_hi": [
      "array_splice()",
      "namespace",
      "@",
      "global"
    ],
    "answer_en": "@",
    "answer_hi": "@",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 122,
    "question_en": "Which operator is the null coalescing operator introduced in PHP 7?",
    "question_hi": "PHP 7 में पेश किया गया null coalescing operator कौन-सा है?",
    "options_en": [
      "private",
      "??",
      "-",
      "microtime()"
    ],
    "options_hi": [
      "private",
      "??",
      "-",
      "microtime()"
    ],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 123,
    "question_en": "Which operator is the spaceship operator for three-way comparison?",
    "question_hi": "तीन-तरफा तुलना के लिए spaceship operator कौन-सा है?",
    "options_en": [
      "||",
      "<=>",
      "catch",
      "implements"
    ],
    "options_hi": [
      "||",
      "<=>",
      "catch",
      "implements"
    ],
    "answer_en": "<=>",
    "answer_hi": "<=>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 124,
    "question_en": "Which PHP function returns the length of a string? (Example: throw)",
    "question_hi": "PHP में स्ट्रिंग की लंबाई किस फ़ंक्शन से मिलती है? (throw)",
    "options_en": [
      "throw",
      "array_splice()",
      "ksort()",
      "mysqli_real_escape_string()"
    ],
    "options_hi": [
      "throw",
      "array_splice()",
      "ksort()",
      "mysqli_real_escape_string()"
    ],
    "answer_en": "throw",
    "answer_hi": "throw",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 125,
    "question_en": "Which function finds the position of the first occurrence of a substring? (Example: array_slice())",
    "question_hi": "कौन-सा फ़ंक्शन किसी सबस्ट्रिंग के पहले occurrence की स्थिति देता है? (array_slice())",
    "options_en": [
      "!==",
      "execute()",
      "__LINE__",
      "array_slice()"
    ],
    "options_hi": [
      "!==",
      "execute()",
      "__LINE__",
      "array_slice()"
    ],
    "answer_en": "array_slice()",
    "answer_hi": "array_slice()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 126,
    "question_en": "Which function returns part of a string? (Example: var_dump())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग का हिस्सा लौटाता है? (var_dump())",
    "options_en": [
      "var_dump()",
      "do-while",
      "===",
      "fread()"
    ],
    "options_hi": [
      "var_dump()",
      "do-while",
      "===",
      "fread()"
    ],
    "answer_en": "var_dump()",
    "answer_hi": "var_dump()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 127,
    "question_en": "Which function removes whitespace from both ends of a string? (Example: password_hash())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग के दोनों सिरों से whitespace हटाता है? (password_hash())",
    "options_en": [
      "throw",
      "require_once()",
      "in_array()",
      "password_hash()"
    ],
    "options_hi": [
      "throw",
      "require_once()",
      "in_array()",
      "password_hash()"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 128,
    "question_en": "Which operator concatenates strings in PHP? (Example: .)",
    "question_hi": "PHP में स्ट्रिंग जोड़ने के लिए कौन-सा operator उपयोग होता है? (.)",
    "options_en": [
      "yield",
      "array_unique()",
      ".",
      "finally"
    ],
    "options_hi": [
      "yield",
      "array_unique()",
      ".",
      "finally"
    ],
    "answer_en": ".",
    "answer_hi": ".",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 129,
    "question_en": "Which superglobal stores POST data? (Example: $_SERVER)",
    "question_hi": "POST डेटा किस superglobal में संग्रहीत होता है? ($_SERVER)",
    "options_en": [
      "yield",
      "$_SERVER",
      "htmlentities()",
      "."
    ],
    "options_hi": [
      "yield",
      "$_SERVER",
      "htmlentities()",
      "."
    ],
    "answer_en": "$_SERVER",
    "answer_hi": "$_SERVER",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 130,
    "question_en": "Which function checks if a file exists? (Example: mysqli_real_escape_string())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि फ़ाइल मौजूद है? (mysqli_real_escape_string())",
    "options_en": [
      "do-while",
      "$_SERVER",
      "$GLOBALS",
      "mysqli_real_escape_string()"
    ],
    "options_hi": [
      "do-while",
      "$_SERVER",
      "$GLOBALS",
      "mysqli_real_escape_string()"
    ],
    "answer_en": "mysqli_real_escape_string()",
    "answer_hi": "mysqli_real_escape_string()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 131,
    "question_en": "Which function reads an entire file into a string? (Example: try)",
    "question_hi": "कौन-सा फ़ंक्शन पूरी फ़ाइल को एक स्ट्रिंग में पढ़ता है? (try)",
    "options_en": [
      "try",
      "echo",
      "exit()",
      "var_dump()"
    ],
    "options_hi": [
      "try",
      "echo",
      "exit()",
      "var_dump()"
    ],
    "answer_en": "try",
    "answer_hi": "try",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 132,
    "question_en": "Which function opens a file or URL? (Example: closedir())",
    "question_hi": "कौन-सा फ़ंक्शन किसी फ़ाइल या URL को खोलता है? (closedir())",
    "options_en": [
      "exit()",
      "closedir()",
      "private",
      "$GLOBALS"
    ],
    "options_hi": [
      "exit()",
      "closedir()",
      "private",
      "$GLOBALS"
    ],
    "answer_en": "closedir()",
    "answer_hi": "closedir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 133,
    "question_en": "Which function closes an open file pointer? (Example: ksort())",
    "question_hi": "कौन-सा फ़ंक्शन खुली फ़ाइल pointer को बंद करता है? (ksort())",
    "options_en": [
      "include()",
      "$_FILES",
      "===",
      "ksort()"
    ],
    "options_hi": [
      "include()",
      "$_FILES",
      "===",
      "ksort()"
    ],
    "answer_en": "ksort()",
    "answer_hi": "ksort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 134,
    "question_en": "Which function writes data to a file? (Example: is_null())",
    "question_hi": "कौन-सा फ़ंक्शन फ़ाइल में डेटा लिखता है? (is_null())",
    "options_en": [
      "json_decode()",
      "is_null()",
      "is_file()",
      "!="
    ],
    "options_hi": [
      "json_decode()",
      "is_null()",
      "is_file()",
      "!="
    ],
    "answer_en": "is_null()",
    "answer_hi": "is_null()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 135,
    "question_en": "Which function splits a string by a delimiter into an array? (Example: phpinfo())",
    "question_hi": "कौन-सा फ़ंक्शन किसी delimiter से स्ट्रिंग को array में बाँटता है? (phpinfo())",
    "options_en": [
      "is_dir()",
      "phpinfo()",
      "explode()",
      "try"
    ],
    "options_hi": [
      "is_dir()",
      "phpinfo()",
      "explode()",
      "try"
    ],
    "answer_en": "phpinfo()",
    "answer_hi": "phpinfo()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 136,
    "question_en": "Which function joins array elements with a glue string? (Example: array_push())",
    "question_hi": "कौन-सा फ़ंक्शन array के elements को एक string से जोड़ता है? (array_push())",
    "options_en": [
      "empty",
      "yield",
      "array_push()",
      "PDO::__construct()"
    ],
    "options_hi": [
      "empty",
      "yield",
      "array_push()",
      "PDO::__construct()"
    ],
    "answer_en": "array_push()",
    "answer_hi": "array_push()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 137,
    "question_en": "Which function adds one or more elements to the end of an array? (Example: rollBack())",
    "question_hi": "कौन-सा फ़ंक्शन array के अंत में एक या अधिक तत्व जोड़ता है? (rollBack())",
    "options_en": [
      "rollBack()",
      "explode()",
      "while",
      "throw"
    ],
    "options_hi": [
      "rollBack()",
      "explode()",
      "while",
      "throw"
    ],
    "answer_en": "rollBack()",
    "answer_hi": "rollBack()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 138,
    "question_en": "Which function removes and returns the last element of an array? (Example: fclose())",
    "question_hi": "कौन-सा फ़ंक्शन array का अंतिम तत्व हटाता और लौटाता है? (fclose())",
    "options_en": [
      "file_exists()",
      "?:",
      "/",
      "fclose()"
    ],
    "options_hi": [
      "file_exists()",
      "?:",
      "/",
      "fclose()"
    ],
    "answer_en": "fclose()",
    "answer_hi": "fclose()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 139,
    "question_en": "Which function checks if a value exists in an array? (Example: yield)",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि कोई मान array में मौजूद है? (yield)",
    "options_en": [
      "yield",
      ".",
      "finally",
      "array_unique()"
    ],
    "options_hi": [
      "yield",
      ".",
      "finally",
      "array_unique()"
    ],
    "answer_en": "yield",
    "answer_hi": "yield",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 140,
    "question_en": "Which function returns the number of elements in an array? (Example: array_merge())",
    "question_hi": "कौन-सा फ़ंक्शन array में तत्वों की संख्या देता है? (array_merge())",
    "options_en": [
      "mysqli_query()",
      "is_null()",
      "array_merge()",
      "return"
    ],
    "options_hi": [
      "mysqli_query()",
      "is_null()",
      "array_merge()",
      "return"
    ],
    "answer_en": "array_merge()",
    "answer_hi": "array_merge()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 141,
    "question_en": "Which keyword defines a function in PHP? (Example: use)",
    "question_hi": "PHP में फ़ंक्शन को परिभाषित करने के लिए कौन-सा keyword उपयोग होता है? (use)",
    "options_en": [
      "$_SERVER",
      "__destruct()",
      "use",
      "foreach"
    ],
    "options_hi": [
      "$_SERVER",
      "__destruct()",
      "use",
      "foreach"
    ],
    "answer_en": "use",
    "answer_hi": "use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 142,
    "question_en": "Which keyword declares a class in PHP? (Example: trait)",
    "question_hi": "PHP में class घोषित करने के लिए कौन-सा keyword उपयोग होता है? (trait)",
    "options_en": [
      "trait",
      "array_unshift()",
      "var_dump()",
      "trim()"
    ],
    "options_hi": [
      "trait",
      "array_unshift()",
      "var_dump()",
      "trim()"
    ],
    "answer_en": "trait",
    "answer_hi": "trait",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 143,
    "question_en": "Which keyword is used to inherit from a parent class? (Example: protected)",
    "question_hi": "Parent class से inherit करने के लिए कौन-सा keyword उपयोग होता है? (protected)",
    "options_en": [
      "new",
      "__DIR__",
      "unlink()",
      "protected"
    ],
    "options_hi": [
      "new",
      "__DIR__",
      "unlink()",
      "protected"
    ],
    "answer_en": "protected",
    "answer_hi": "protected",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 144,
    "question_en": "Which magic constant returns the full path and filename of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल का पूरा path और filename लौटाता है?",
    "options_en": [
      "array_unique()",
      "__FILE__",
      "die()",
      "array_unshift()"
    ],
    "options_hi": [
      "array_unique()",
      "__FILE__",
      "die()",
      "array_unshift()"
    ],
    "answer_en": "__FILE__",
    "answer_hi": "__FILE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 145,
    "question_en": "Which magic constant returns the directory of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल की directory लौटाता है?",
    "options_en": [
      "catch",
      "__DIR__",
      "$_ENV",
      "do-while"
    ],
    "options_hi": [
      "catch",
      "__DIR__",
      "$_ENV",
      "do-while"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 146,
    "question_en": "Which function starts a session in PHP? (Example: define())",
    "question_hi": "PHP में session शुरू करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (define())",
    "options_en": [
      "trait",
      "namespace",
      "%",
      "define()"
    ],
    "options_hi": [
      "trait",
      "namespace",
      "%",
      "define()"
    ],
    "answer_en": "define()",
    "answer_hi": "define()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 147,
    "question_en": "Which function destroys a session? (Example: mysqli_fetch_assoc())",
    "question_hi": "कौन-सा फ़ंक्शन session को नष्ट करता है? (mysqli_fetch_assoc())",
    "options_en": [
      "array_search()",
      "explode()",
      "mysqli_fetch_assoc()",
      "array_push()"
    ],
    "options_hi": [
      "array_search()",
      "explode()",
      "mysqli_fetch_assoc()",
      "array_push()"
    ],
    "answer_en": "mysqli_fetch_assoc()",
    "answer_hi": "mysqli_fetch_assoc()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 148,
    "question_en": "Which function sets a cookie? (Example: trim())",
    "question_hi": "कौन-सा फ़ंक्शन cookie सेट करता है? (trim())",
    "options_en": [
      "trim()",
      "is_file()",
      "password_verify()",
      "!"
    ],
    "options_hi": [
      "trim()",
      "is_file()",
      "password_verify()",
      "!"
    ],
    "answer_en": "trim()",
    "answer_hi": "trim()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 149,
    "question_en": "Which function sends a raw HTTP header? (Example: __LINE__)",
    "question_hi": "कौन-सा फ़ंक्शन raw HTTP header भेजता है? (__LINE__)",
    "options_en": [
      "ksort()",
      "??",
      "__LINE__",
      "PDO::__construct()"
    ],
    "options_hi": [
      "ksort()",
      "??",
      "__LINE__",
      "PDO::__construct()"
    ],
    "answer_en": "__LINE__",
    "answer_hi": "__LINE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 150,
    "question_en": "Which function connects to MySQL using mysqli extension? (Example: password_verify())",
    "question_hi": "mysqli के साथ MySQL से कनेक्ट करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (password_verify())",
    "options_en": [
      "password_verify()",
      "+",
      "__LINE__",
      "!"
    ],
    "options_hi": [
      "password_verify()",
      "+",
      "__LINE__",
      "!"
    ],
    "answer_en": "password_verify()",
    "answer_hi": "password_verify()",
    "attempted": false,
    "selected": ""
  },
];



let currentQuestion = 0; 
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes
let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");
        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

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

function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}



////////////////////////////////////////////////////////////////////////////////////////////

// submit 
function jumpToQuestion(index) {
            currentQuestion = index;
            loadQuestion(index);
        }

        function submitQuiz() {
            let confirmation = confirm("Are you sure you want to submit the test?");
            
            if (!confirmation) {
                return; // अगर यूज़र 'Cancel' करता है तो आगे नहीं बढ़ेंगे
            }

            let attempted = 0;
            let notAttempted = 0;
            let score = 0;
            const results = [];

            questions.forEach(q => {
                if (q.attempted) {
                    attempted++;
                    if (q.selected === q.answer) {
                        score++;
                    }
                } else {
                    notAttempted++;
                }
                results.push({ question: q.question, selected: q.selected || "Not Answered", correct: q.answer });
            });

            localStorage.setItem("attempted", attempted);
            localStorage.setItem("notAttempted", notAttempted);
            localStorage.setItem("score", score);
            localStorage.setItem("results", JSON.stringify(results));

            // रिजल्ट देखने से पहले एक और कन्फर्मेशन ले सकते हैं
            let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
            if (viewResult) {
                window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
            }
        }
        window.onload = () => {
            loadQuestion(currentQuestion);
        };


function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};


///////////////////////////////////////