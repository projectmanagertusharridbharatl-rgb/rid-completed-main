const questions = [
  {
    "num": 201,
    "question_en": "Which construct includes a file and generates a fatal error if missing?",
    "question_hi": "कौन-सा construct फ़ाइल शामिल करता है और यदि फ़ाइल गायब हो तो fatal error देता है?",
    "options_en": [
      "time()",
      "explode()",
      "__FILE__",
      "require()"
    ],
    "options_hi": [
      "time()",
      "explode()",
      "__FILE__",
      "require()"
    ],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 202,
    "question_en": "Which construct includes a file only once?",
    "question_hi": "कौन-सा construct फ़ाइल को केवल एक बार include करता है?",
    "options_en": [
      "const",
      "fopen()",
      "include_once()",
      "==="
    ],
    "options_hi": [
      "const",
      "fopen()",
      "include_once()",
      "==="
    ],
    "answer_en": "include_once()",
    "answer_hi": "include_once()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 203,
    "question_en": "Which operator suppresses errors in PHP?",
    "question_hi": "PHP में errors suppress करने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": [
      "substr()",
      "array_merge()",
      ">=",
      "@"
    ],
    "options_hi": [
      "substr()",
      "array_merge()",
      ">=",
      "@"
    ],
    "answer_en": "@",
    "answer_hi": "@",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 204,
    "question_en": "Which operator is the null coalescing operator introduced in PHP 7?",
    "question_hi": "PHP 7 में पेश किया गया null coalescing operator कौन-सा है?",
    "options_en": [
      "%",
      "??",
      "try",
      "continue"
    ],
    "options_hi": [
      "%",
      "??",
      "try",
      "continue"
    ],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 205,
    "question_en": "Which operator is the spaceship operator for three-way comparison?",
    "question_hi": "तीन-तरफा तुलना के लिए spaceship operator कौन-सा है?",
    "options_en": [
      "<=>",
      "finally",
      "asort()",
      "mkdir()"
    ],
    "options_hi": [
      "<=>",
      "finally",
      "asort()",
      "mkdir()"
    ],
    "answer_en": "<=>",
    "answer_hi": "<=>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 206,
    "question_en": "Which PHP function returns the length of a string? (Example: exit())",
    "question_hi": "PHP में स्ट्रिंग की लंबाई किस फ़ंक्शन से मिलती है? (exit())",
    "options_en": [
      "interface",
      "exit()",
      "+",
      "isset()"
    ],
    "options_hi": [
      "interface",
      "exit()",
      "+",
      "isset()"
    ],
    "answer_en": "exit()",
    "answer_hi": "exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 207,
    "question_en": "Which function finds the position of the first occurrence of a substring? (Example: mysqli_query())",
    "question_hi": "कौन-सा फ़ंक्शन किसी सबस्ट्रिंग के पहले occurrence की स्थिति देता है? (mysqli_query())",
    "options_en": [
      "mysqli_query()",
      "/",
      "array_values()",
      "session_destroy()"
    ],
    "options_hi": [
      "mysqli_query()",
      "/",
      "array_values()",
      "session_destroy()"
    ],
    "answer_en": "mysqli_query()",
    "answer_hi": "mysqli_query()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 208,
    "question_en": "Which function returns part of a string? (Example: __DIR__)",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग का हिस्सा लौटाता है? (__DIR__)",
    "options_en": [
      "unlink()",
      "implode()",
      "__DIR__",
      "phpversion()"
    ],
    "options_hi": [
      "unlink()",
      "implode()",
      "__DIR__",
      "phpversion()"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 209,
    "question_en": "Which function removes whitespace from both ends of a string? (Example: session_destroy())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग के दोनों सिरों से whitespace हटाता है? (session_destroy())",
    "options_en": [
      "explode()",
      "session_destroy()",
      "count()",
      "array_slice()"
    ],
    "options_hi": [
      "explode()",
      "session_destroy()",
      "count()",
      "array_slice()"
    ],
    "answer_en": "session_destroy()",
    "answer_hi": "session_destroy()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 210,
    "question_en": "Which operator concatenates strings in PHP? (Example: ||)",
    "question_hi": "PHP में स्ट्रिंग जोड़ने के लिए कौन-सा operator उपयोग होता है? (||)",
    "options_en": [
      "$_REQUEST",
      "microtime()",
      "||",
      "session_destroy()"
    ],
    "options_hi": [
      "$_REQUEST",
      "microtime()",
      "||",
      "session_destroy()"
    ],
    "answer_en": "||",
    "answer_hi": "||",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 211,
    "question_en": "Which superglobal stores POST data? (Example: $GLOBALS)",
    "question_hi": "POST डेटा किस superglobal में संग्रहीत होता है? ($GLOBALS)",
    "options_en": [
      "mysqli_query()",
      "execute()",
      "final",
      "$GLOBALS"
    ],
    "options_hi": [
      "mysqli_query()",
      "execute()",
      "final",
      "$GLOBALS"
    ],
    "answer_en": "$GLOBALS",
    "answer_hi": "$GLOBALS",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 212,
    "question_en": "Which function checks if a file exists? (Example: opendir())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि फ़ाइल मौजूद है? (opendir())",
    "options_en": [
      "mysqli_real_escape_string()",
      "opendir()",
      ">",
      "file_exists()"
    ],
    "options_hi": [
      "mysqli_real_escape_string()",
      "opendir()",
      ">",
      "file_exists()"
    ],
    "answer_en": "opendir()",
    "answer_hi": "opendir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 213,
    "question_en": "Which function reads an entire file into a string? (Example: array_splice())",
    "question_hi": "कौन-सा फ़ंक्शन पूरी फ़ाइल को एक स्ट्रिंग में पढ़ता है? (array_splice())",
    "options_en": [
      ">=",
      "array_splice()",
      "mkdir()",
      "__FILE__"
    ],
    "options_hi": [
      ">=",
      "array_splice()",
      "mkdir()",
      "__FILE__"
    ],
    "answer_en": "array_splice()",
    "answer_hi": "array_splice()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 214,
    "question_en": "Which function opens a file or URL? (Example: yield)",
    "question_hi": "कौन-सा फ़ंक्शन किसी फ़ाइल या URL को खोलता है? (yield)",
    "options_en": [
      "rmdir()",
      "break",
      "file_get_contents()",
      "yield"
    ],
    "options_hi": [
      "rmdir()",
      "break",
      "file_get_contents()",
      "yield"
    ],
    "answer_en": "yield",
    "answer_hi": "yield",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 215,
    "question_en": "Which function closes an open file pointer? (Example: __DIR__)",
    "question_hi": "कौन-सा फ़ंक्शन खुली फ़ाइल pointer को बंद करता है? (__DIR__)",
    "options_en": [
      "__DIR__",
      "catch",
      "trait",
      "final"
    ],
    "options_hi": [
      "__DIR__",
      "catch",
      "trait",
      "final"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 216,
    "question_en": "Which function writes data to a file? (Example: ksort())",
    "question_hi": "कौन-सा फ़ंक्शन फ़ाइल में डेटा लिखता है? (ksort())",
    "options_en": [
      "ksort()",
      "is_dir()",
      "sort()",
      "const"
    ],
    "options_hi": [
      "ksort()",
      "is_dir()",
      "sort()",
      "const"
    ],
    "answer_en": "ksort()",
    "answer_hi": "ksort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 217,
    "question_en": "Which function splits a string by a delimiter into an array? (Example: array_merge())",
    "question_hi": "कौन-सा फ़ंक्शन किसी delimiter से स्ट्रिंग को array में बाँटता है? (array_merge())",
    "options_en": [
      "public",
      "final",
      "microtime()",
      "array_merge()"
    ],
    "options_hi": [
      "public",
      "final",
      "microtime()",
      "array_merge()"
    ],
    "answer_en": "array_merge()",
    "answer_hi": "array_merge()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 218,
    "question_en": "Which function joins array elements with a glue string? (Example: prepare())",
    "question_hi": "कौन-सा फ़ंक्शन array के elements को एक string से जोड़ता है? (prepare())",
    "options_en": [
      "microtime()",
      "array_unshift()",
      "@",
      "prepare()"
    ],
    "options_hi": [
      "microtime()",
      "array_unshift()",
      "@",
      "prepare()"
    ],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 219,
    "question_en": "Which function adds one or more elements to the end of an array? (Example: htmlentities())",
    "question_hi": "कौन-सा फ़ंक्शन array के अंत में एक या अधिक तत्व जोड़ता है? (htmlentities())",
    "options_en": [
      "==",
      "htmlentities()",
      "@",
      "array_unshift()"
    ],
    "options_hi": [
      "==",
      "htmlentities()",
      "@",
      "array_unshift()"
    ],
    "answer_en": "htmlentities()",
    "answer_hi": "htmlentities()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 220,
    "question_en": "Which function removes and returns the last element of an array? (Example: microtime())",
    "question_hi": "कौन-सा फ़ंक्शन array का अंतिम तत्व हटाता और लौटाता है? (microtime())",
    "options_en": [
      "microtime()",
      "die()",
      "array_keys()",
      "password_hash()"
    ],
    "options_hi": [
      "microtime()",
      "die()",
      "array_keys()",
      "password_hash()"
    ],
    "answer_en": "microtime()",
    "answer_hi": "microtime()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 221,
    "question_en": "Which function checks if a value exists in an array? (Example: print_r())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि कोई मान array में मौजूद है? (print_r())",
    "options_en": [
      "array_map()",
      "mysqli_fetch_assoc()",
      "substr()",
      "print_r()"
    ],
    "options_hi": [
      "array_map()",
      "mysqli_fetch_assoc()",
      "substr()",
      "print_r()"
    ],
    "answer_en": "print_r()",
    "answer_hi": "print_r()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 222,
    "question_en": "Which function returns the number of elements in an array? (Example: array_map())",
    "question_hi": "कौन-सा फ़ंक्शन array में तत्वों की संख्या देता है? (array_map())",
    "options_en": [
      "is_null()",
      "mysqli_real_escape_string()",
      "array_map()",
      "__FILE__"
    ],
    "options_hi": [
      "is_null()",
      "mysqli_real_escape_string()",
      "array_map()",
      "__FILE__"
    ],
    "answer_en": "array_map()",
    "answer_hi": "array_map()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 223,
    "question_en": "Which keyword defines a function in PHP? (Example: trait)",
    "question_hi": "PHP में फ़ंक्शन को परिभाषित करने के लिए कौन-सा keyword उपयोग होता है? (trait)",
    "options_en": [
      "$GLOBALS",
      "array_unshift()",
      "yield",
      "trait"
    ],
    "options_hi": [
      "$GLOBALS",
      "array_unshift()",
      "yield",
      "trait"
    ],
    "answer_en": "trait",
    "answer_hi": "trait",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 224,
    "question_en": "Which keyword declares a class in PHP? (Example: protected)",
    "question_hi": "PHP में class घोषित करने के लिए कौन-सा keyword उपयोग होता है? (protected)",
    "options_en": [
      "isset",
      "var_dump()",
      "protected",
      "fopen()"
    ],
    "options_hi": [
      "isset",
      "var_dump()",
      "protected",
      "fopen()"
    ],
    "answer_en": "protected",
    "answer_hi": "protected",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 225,
    "question_en": "Which keyword is used to inherit from a parent class? (Example: namespace)",
    "question_hi": "Parent class से inherit करने के लिए कौन-सा keyword उपयोग होता है? (namespace)",
    "options_en": [
      "namespace",
      "array_shift()",
      "execute()",
      "$_SERVER"
    ],
    "options_hi": [
      "namespace",
      "array_shift()",
      "execute()",
      "$_SERVER"
    ],
    "answer_en": "namespace",
    "answer_hi": "namespace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 226,
    "question_en": "Which magic constant returns the full path and filename of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल का पूरा path और filename लौटाता है?",
    "options_en": [
      "interface",
      "strlen()",
      "print_r()",
      "__FILE__"
    ],
    "options_hi": [
      "interface",
      "strlen()",
      "print_r()",
      "__FILE__"
    ],
    "answer_en": "__FILE__",
    "answer_hi": "__FILE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 227,
    "question_en": "Which magic constant returns the directory of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल की directory लौटाता है?",
    "options_en": [
      "time()",
      "require_once()",
      "PDO::__construct()",
      "__DIR__"
    ],
    "options_hi": [
      "time()",
      "require_once()",
      "PDO::__construct()",
      "__DIR__"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 228,
    "question_en": "Which function starts a session in PHP? (Example: array_pop())",
    "question_hi": "PHP में session शुरू करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (array_pop())",
    "options_en": [
      "__construct()",
      "return",
      "password_verify()",
      "array_pop()"
    ],
    "options_hi": [
      "__construct()",
      "return",
      "password_verify()",
      "array_pop()"
    ],
    "answer_en": "array_pop()",
    "answer_hi": "array_pop()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 229,
    "question_en": "Which function destroys a session? (Example: header())",
    "question_hi": "कौन-सा फ़ंक्शन session को नष्ट करता है? (header())",
    "options_en": [
      "@",
      "/",
      "header()",
      "public"
    ],
    "options_hi": [
      "@",
      "/",
      "header()",
      "public"
    ],
    "answer_en": "header()",
    "answer_hi": "header()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 230,
    "question_en": "Which function sets a cookie? (Example: setcookie())",
    "question_hi": "कौन-सा फ़ंक्शन cookie सेट करता है? (setcookie())",
    "options_en": [
      "array_slice()",
      "setcookie()",
      "opendir()",
      "session_destroy()"
    ],
    "options_hi": [
      "array_slice()",
      "setcookie()",
      "opendir()",
      "session_destroy()"
    ],
    "answer_en": "setcookie()",
    "answer_hi": "setcookie()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 231,
    "question_en": "Which function sends a raw HTTP header? (Example: do-while)",
    "question_hi": "कौन-सा फ़ंक्शन raw HTTP header भेजता है? (do-while)",
    "options_en": [
      "do-while",
      "*",
      "$_ENV",
      "array_reduce()"
    ],
    "options_hi": [
      "do-while",
      "*",
      "$_ENV",
      "array_reduce()"
    ],
    "answer_en": "do-while",
    "answer_hi": "do-while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 232,
    "question_en": "Which function connects to MySQL using mysqli extension? (Example: session_destroy())",
    "question_hi": "mysqli के साथ MySQL से कनेक्ट करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (session_destroy())",
    "options_en": [
      "htmlentities()",
      "session_destroy()",
      "yield",
      "str_replace()"
    ],
    "options_hi": [
      "htmlentities()",
      "session_destroy()",
      "yield",
      "str_replace()"
    ],
    "answer_en": "session_destroy()",
    "answer_hi": "session_destroy()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 233,
    "question_en": "Which PHP extension offers a database abstraction layer (PDO)?",
    "question_hi": "कौन-सा extension database abstraction layer (PDO) प्रदान करता है?",
    "options_en": [
      "PDO",
      "===",
      "microtime()",
      "print"
    ],
    "options_hi": [
      "PDO",
      "===",
      "microtime()",
      "print"
    ],
    "answer_en": "PDO",
    "answer_hi": "PDO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 234,
    "question_en": "Which PDO method prepares a statement for execution?",
    "question_hi": "PDO में किस method से statement prepare किया जाता है?",
    "options_en": [
      "implode()",
      "password_verify()",
      "prepare()",
      "print"
    ],
    "options_hi": [
      "implode()",
      "password_verify()",
      "prepare()",
      "print"
    ],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 235,
    "question_en": "Which PDO method executes a prepared statement?",
    "question_hi": "PDO में किस method से prepared statement execute किया जाता है?",
    "options_en": [
      "substr()",
      "execute()",
      "array_keys()",
      "array_splice()"
    ],
    "options_hi": [
      "substr()",
      "execute()",
      "array_keys()",
      "array_splice()"
    ],
    "answer_en": "execute()",
    "answer_hi": "execute()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 236,
    "question_en": "Which PDO method begins a transaction?",
    "question_hi": "PDO में transaction शुरू करने के लिए कौन-सा method उपयोग होता है?",
    "options_en": [
      "beginTransaction()",
      "include()",
      "eval()",
      "implode()"
    ],
    "options_hi": [
      "beginTransaction()",
      "include()",
      "eval()",
      "implode()"
    ],
    "answer_en": "beginTransaction()",
    "answer_hi": "beginTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 237,
    "question_en": "Which function securely hashes passwords?",
    "question_hi": "पासवर्ड को सुरक्षित रूप से hash करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": [
      "yield",
      "password_hash()",
      "finally",
      "require()"
    ],
    "options_hi": [
      "yield",
      "password_hash()",
      "finally",
      "require()"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 238,
    "question_en": "Which function verifies a password against a hash?",
    "question_hi": "कौन-सा फ़ंक्शन पासवर्ड को hash के खिलाफ सत्यापित करता है?",
    "options_en": [
      "const",
      "password_verify()",
      "$GLOBALS",
      "fread()"
    ],
    "options_hi": [
      "const",
      "password_verify()",
      "$GLOBALS",
      "fread()"
    ],
    "answer_en": "password_verify()",
    "answer_hi": "password_verify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 239,
    "question_en": "Which function returns the type of a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल का प्रकार बताता है?",
    "options_en": [
      "public",
      "beginTransaction()",
      "array_merge()",
      "gettype()"
    ],
    "options_hi": [
      "public",
      "beginTransaction()",
      "array_merge()",
      "gettype()"
    ],
    "answer_en": "gettype()",
    "answer_hi": "gettype()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 240,
    "question_en": "Which function prints human-readable information about a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल की human-readable जानकारी दिखाता है?",
    "options_en": [
      "print_r()",
      "setcookie()",
      "yield",
      "header()"
    ],
    "options_hi": [
      "print_r()",
      "setcookie()",
      "yield",
      "header()"
    ],
    "answer_en": "print_r()",
    "answer_hi": "print_r()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 241,
    "question_en": "Which function dumps information about a variable with type and value?",
    "question_hi": "कौन-सा फ़ंक्शन वैरिएबल के प्रकार और मान सहित जानकारी दिखाता है?",
    "options_en": [
      "foreach",
      "rollBack()",
      "setcookie()",
      "var_dump()"
    ],
    "options_hi": [
      "foreach",
      "rollBack()",
      "setcookie()",
      "var_dump()"
    ],
    "answer_en": "var_dump()",
    "answer_hi": "var_dump()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 242,
    "question_en": "Which construct includes a file and generates a fatal error if missing?",
    "question_hi": "कौन-सा construct फ़ाइल शामिल करता है और यदि फ़ाइल गायब हो तो fatal error देता है?",
    "options_en": [
      "require()",
      "try",
      "date()",
      "static"
    ],
    "options_hi": [
      "require()",
      "try",
      "date()",
      "static"
    ],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 243,
    "question_en": "Which construct includes a file only once?",
    "question_hi": "कौन-सा construct फ़ाइल को केवल एक बार include करता है?",
    "options_en": [
      "include_once()",
      "$_GET",
      "finally",
      "array_shift()"
    ],
    "options_hi": [
      "include_once()",
      "$_GET",
      "finally",
      "array_shift()"
    ],
    "answer_en": "include_once()",
    "answer_hi": "include_once()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 244,
    "question_en": "Which operator suppresses errors in PHP?",
    "question_hi": "PHP में errors suppress करने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": [
      "microtime()",
      "@",
      "array_shift()",
      "array_reduce()"
    ],
    "options_hi": [
      "microtime()",
      "@",
      "array_shift()",
      "array_reduce()"
    ],
    "answer_en": "@",
    "answer_hi": "@",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 245,
    "question_en": "Which operator is the null coalescing operator introduced in PHP 7?",
    "question_hi": "PHP 7 में पेश किया गया null coalescing operator कौन-सा है?",
    "options_en": [
      "catch",
      "is_null()",
      "fread()",
      "??"
    ],
    "options_hi": [
      "catch",
      "is_null()",
      "fread()",
      "??"
    ],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 246,
    "question_en": "Which operator is the spaceship operator for three-way comparison?",
    "question_hi": "तीन-तरफा तुलना के लिए spaceship operator कौन-सा है?",
    "options_en": [
      "!==",
      "$GLOBALS",
      "gettype()",
      "<=>"
    ],
    "options_hi": [
      "!==",
      "$GLOBALS",
      "gettype()",
      "<=>"
    ],
    "answer_en": "<=>",
    "answer_hi": "<=>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 247,
    "question_en": "Which PHP function returns the length of a string? (Example: array_pop())",
    "question_hi": "PHP में स्ट्रिंग की लंबाई किस फ़ंक्शन से मिलती है? (array_pop())",
    "options_en": [
      "try",
      "mysqli_fetch_assoc()",
      "session_destroy()",
      "array_pop()"
    ],
    "options_hi": [
      "try",
      "mysqli_fetch_assoc()",
      "session_destroy()",
      "array_pop()"
    ],
    "answer_en": "array_pop()",
    "answer_hi": "array_pop()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 248,
    "question_en": "Which function finds the position of the first occurrence of a substring? (Example: array_filter())",
    "question_hi": "कौन-सा फ़ंक्शन किसी सबस्ट्रिंग के पहले occurrence की स्थिति देता है? (array_filter())",
    "options_en": [
      "unlink()",
      "__destruct()",
      "array_filter()",
      "<=>"
    ],
    "options_hi": [
      "unlink()",
      "__destruct()",
      "array_filter()",
      "<=>"
    ],
    "answer_en": "array_filter()",
    "answer_hi": "array_filter()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 249,
    "question_en": "Which function returns part of a string? (Example: file_exists())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग का हिस्सा लौटाता है? (file_exists())",
    "options_en": [
      "print",
      "yield",
      "catch",
      "file_exists()"
    ],
    "options_hi": [
      "print",
      "yield",
      "catch",
      "file_exists()"
    ],
    "answer_en": "file_exists()",
    "answer_hi": "file_exists()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 250,
    "question_en": "Which function removes whitespace from both ends of a string? (Example: while)",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग के दोनों सिरों से whitespace हटाता है? (while)",
    "options_en": [
      "while",
      "password_hash()",
      "finally",
      "is_null()"
    ],
    "options_hi": [
      "while",
      "password_hash()",
      "finally",
      "is_null()"
    ],
    "answer_en": "while",
    "answer_hi": "while",
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