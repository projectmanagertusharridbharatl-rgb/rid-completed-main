const questions = [
 {
    "num": 251,
    "question_en": "Which operator concatenates strings in PHP? (Example: !=)",
    "question_hi": "PHP में स्ट्रिंग जोड़ने के लिए कौन-सा operator उपयोग होता है? (!=)",
    "options_en": [
      "file_put_contents()",
      "array_unique()",
      "!=",
      "-"
    ],
    "options_hi": [
      "file_put_contents()",
      "array_unique()",
      "!=",
      "-"
    ],
    "answer_en": "!=",
    "answer_hi": "!=",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 252,
    "question_en": "Which superglobal stores POST data? (Example: $_COOKIE)",
    "question_hi": "POST डेटा किस superglobal में संग्रहीत होता है? ($_COOKIE)",
    "options_en": [
      "public",
      "===",
      "$_COOKIE",
      "var_dump()"
    ],
    "options_hi": [
      "public",
      "===",
      "$_COOKIE",
      "var_dump()"
    ],
    "answer_en": "$_COOKIE",
    "answer_hi": "$_COOKIE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 253,
    "question_en": "Which function checks if a file exists? (Example: unlink())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि फ़ाइल मौजूद है? (unlink())",
    "options_en": [
      "unlink()",
      "session_start()",
      "is_file()",
      "header()"
    ],
    "options_hi": [
      "unlink()",
      "session_start()",
      "is_file()",
      "header()"
    ],
    "answer_en": "unlink()",
    "answer_hi": "unlink()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 254,
    "question_en": "Which function reads an entire file into a string? (Example: array_filter())",
    "question_hi": "कौन-सा फ़ंक्शन पूरी फ़ाइल को एक स्ट्रिंग में पढ़ता है? (array_filter())",
    "options_en": [
      "final",
      "array_filter()",
      "htmlentities()",
      "in_array()"
    ],
    "options_hi": [
      "final",
      "array_filter()",
      "htmlentities()",
      "in_array()"
    ],
    "answer_en": "array_filter()",
    "answer_hi": "array_filter()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 255,
    "question_en": "Which function opens a file or URL? (Example: session_start())",
    "question_hi": "कौन-सा फ़ंक्शन किसी फ़ाइल या URL को खोलता है? (session_start())",
    "options_en": [
      "session_destroy()",
      "session_start()",
      "rmdir()",
      "is_file()"
    ],
    "options_hi": [
      "session_destroy()",
      "session_start()",
      "rmdir()",
      "is_file()"
    ],
    "answer_en": "session_start()",
    "answer_hi": "session_start()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 256,
    "question_en": "Which function closes an open file pointer? (Example: array_map())",
    "question_hi": "कौन-सा फ़ंक्शन खुली फ़ाइल pointer को बंद करता है? (array_map())",
    "options_en": [
      "print_r()",
      "array_map()",
      "fwrite()",
      "__LINE__"
    ],
    "options_hi": [
      "print_r()",
      "array_map()",
      "fwrite()",
      "__LINE__"
    ],
    "answer_en": "array_map()",
    "answer_hi": "array_map()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 257,
    "question_en": "Which function writes data to a file? (Example: foreach)",
    "question_hi": "कौन-सा फ़ंक्शन फ़ाइल में डेटा लिखता है? (foreach)",
    "options_en": [
      "date()",
      "foreach",
      "$_SESSION",
      "catch"
    ],
    "options_hi": [
      "date()",
      "foreach",
      "$_SESSION",
      "catch"
    ],
    "answer_en": "foreach",
    "answer_hi": "foreach",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 258,
    "question_en": "Which function splits a string by a delimiter into an array? (Example: trim())",
    "question_hi": "कौन-सा फ़ंक्शन किसी delimiter से स्ट्रिंग को array में बाँटता है? (trim())",
    "options_en": [
      "trim()",
      "print",
      "$_SESSION",
      "/"
    ],
    "options_hi": [
      "trim()",
      "print",
      "$_SESSION",
      "/"
    ],
    "answer_en": "trim()",
    "answer_hi": "trim()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 259,
    "question_en": "Which function joins array elements with a glue string? (Example: array_splice())",
    "question_hi": "कौन-सा फ़ंक्शन array के elements को एक string से जोड़ता है? (array_splice())",
    "options_en": [
      "in_array()",
      "__destruct()",
      "echo",
      "array_splice()"
    ],
    "options_hi": [
      "in_array()",
      "__destruct()",
      "echo",
      "array_splice()"
    ],
    "answer_en": "array_splice()",
    "answer_hi": "array_splice()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 260,
    "question_en": "Which function adds one or more elements to the end of an array? (Example: eval())",
    "question_hi": "कौन-सा फ़ंक्शन array के अंत में एक या अधिक तत्व जोड़ता है? (eval())",
    "options_en": [
      "eval()",
      "-",
      "use",
      "function"
    ],
    "options_hi": [
      "eval()",
      "-",
      "use",
      "function"
    ],
    "answer_en": "eval()",
    "answer_hi": "eval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 261,
    "question_en": "Which function removes and returns the last element of an array? (Example: closedir())",
    "question_hi": "कौन-सा फ़ंक्शन array का अंतिम तत्व हटाता और लौटाता है? (closedir())",
    "options_en": [
      "closedir()",
      "strpos()",
      "function",
      "!="
    ],
    "options_hi": [
      "closedir()",
      "strpos()",
      "function",
      "!="
    ],
    "answer_en": "closedir()",
    "answer_hi": "closedir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 262,
    "question_en": "Which function checks if a value exists in an array? (Example: prepare())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि कोई मान array में मौजूद है? (prepare())",
    "options_en": [
      "try",
      "$GLOBALS",
      "protected",
      "prepare()"
    ],
    "options_hi": [
      "try",
      "$GLOBALS",
      "protected",
      "prepare()"
    ],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 263,
    "question_en": "Which function returns the number of elements in an array? (Example: array_map())",
    "question_hi": "कौन-सा फ़ंक्शन array में तत्वों की संख्या देता है? (array_map())",
    "options_en": [
      "catch",
      "array_map()",
      "$_POST",
      "return"
    ],
    "options_hi": [
      "catch",
      "array_map()",
      "$_POST",
      "return"
    ],
    "answer_en": "array_map()",
    "answer_hi": "array_map()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 264,
    "question_en": "Which keyword defines a function in PHP? (Example: implements)",
    "question_hi": "PHP में फ़ंक्शन को परिभाषित करने के लिए कौन-सा keyword उपयोग होता है? (implements)",
    "options_en": [
      "array_shift()",
      "file_exists()",
      "file_put_contents()",
      "implements"
    ],
    "options_hi": [
      "array_shift()",
      "file_exists()",
      "file_put_contents()",
      "implements"
    ],
    "answer_en": "implements",
    "answer_hi": "implements",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 265,
    "question_en": "Which keyword declares a class in PHP? (Example: throw)",
    "question_hi": "PHP में class घोषित करने के लिए कौन-सा keyword उपयोग होता है? (throw)",
    "options_en": [
      "throw",
      "empty()",
      "in_array()",
      "do-while"
    ],
    "options_hi": [
      "throw",
      "empty()",
      "in_array()",
      "do-while"
    ],
    "answer_en": "throw",
    "answer_hi": "throw",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 266,
    "question_en": "Which keyword is used to inherit from a parent class? (Example: private)",
    "question_hi": "Parent class से inherit करने के लिए कौन-सा keyword उपयोग होता है? (private)",
    "options_en": [
      "header()",
      "count()",
      "private",
      "$_FILES"
    ],
    "options_hi": [
      "header()",
      "count()",
      "private",
      "$_FILES"
    ],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 267,
    "question_en": "Which magic constant returns the full path and filename of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल का पूरा path और filename लौटाता है?",
    "options_en": [
      "__FILE__",
      "array_unshift()",
      "catch",
      "date()"
    ],
    "options_hi": [
      "__FILE__",
      "array_unshift()",
      "catch",
      "date()"
    ],
    "answer_en": "__FILE__",
    "answer_hi": "__FILE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 268,
    "question_en": "Which magic constant returns the directory of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल की directory लौटाता है?",
    "options_en": [
      ">",
      "__DIR__",
      "session_destroy()",
      "-"
    ],
    "options_hi": [
      ">",
      "__DIR__",
      "session_destroy()",
      "-"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 269,
    "question_en": "Which function starts a session in PHP? (Example: mkdir())",
    "question_hi": "PHP में session शुरू करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (mkdir())",
    "options_en": [
      "catch",
      "mkdir()",
      "implode()",
      "header()"
    ],
    "options_hi": [
      "catch",
      "mkdir()",
      "implode()",
      "header()"
    ],
    "answer_en": "mkdir()",
    "answer_hi": "mkdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 270,
    "question_en": "Which function destroys a session? (Example: explode())",
    "question_hi": "कौन-सा फ़ंक्शन session को नष्ट करता है? (explode())",
    "options_en": [
      "array_merge()",
      "explode()",
      "yield",
      "define()"
    ],
    "options_hi": [
      "array_merge()",
      "explode()",
      "yield",
      "define()"
    ],
    "answer_en": "explode()",
    "answer_hi": "explode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 271,
    "question_en": "Which function sets a cookie? (Example: for)",
    "question_hi": "कौन-सा फ़ंक्शन cookie सेट करता है? (for)",
    "options_en": [
      "for",
      "$GLOBALS",
      "$_COOKIE",
      "asort()"
    ],
    "options_hi": [
      "for",
      "$GLOBALS",
      "$_COOKIE",
      "asort()"
    ],
    "answer_en": "for",
    "answer_hi": "for",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 272,
    "question_en": "Which function sends a raw HTTP header? (Example: time())",
    "question_hi": "कौन-सा फ़ंक्शन raw HTTP header भेजता है? (time())",
    "options_en": [
      "-",
      "print",
      "time()",
      "mysqli_fetch_assoc()"
    ],
    "options_hi": [
      "-",
      "print",
      "time()",
      "mysqli_fetch_assoc()"
    ],
    "answer_en": "time()",
    "answer_hi": "time()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 273,
    "question_en": "Which function connects to MySQL using mysqli extension? (Example: array_values())",
    "question_hi": "mysqli के साथ MySQL से कनेक्ट करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (array_values())",
    "options_en": [
      "array_slice()",
      "__construct()",
      "beginTransaction()",
      "array_values()"
    ],
    "options_hi": [
      "array_slice()",
      "__construct()",
      "beginTransaction()",
      "array_values()"
    ],
    "answer_en": "array_values()",
    "answer_hi": "array_values()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 274,
    "question_en": "Which PHP extension offers a database abstraction layer (PDO)?",
    "question_hi": "कौन-सा extension database abstraction layer (PDO) प्रदान करता है?",
    "options_en": [
      "isset()",
      "explode()",
      "array_unique()",
      "PDO"
    ],
    "options_hi": [
      "isset()",
      "explode()",
      "array_unique()",
      "PDO"
    ],
    "answer_en": "PDO",
    "answer_hi": "PDO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 275,
    "question_en": "Which PDO method prepares a statement for execution?",
    "question_hi": "PDO में किस method से statement prepare किया जाता है?",
    "options_en": [
      "mysqli_real_escape_string()",
      "$_GET",
      "array_merge()",
      "prepare()"
    ],
    "options_hi": [
      "mysqli_real_escape_string()",
      "$_GET",
      "array_merge()",
      "prepare()"
    ],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 276,
    "question_en": "Which PDO method executes a prepared statement?",
    "question_hi": "PDO में किस method से prepared statement execute किया जाता है?",
    "options_en": [
      "beginTransaction()",
      "execute()",
      "yield",
      "include()"
    ],
    "options_hi": [
      "beginTransaction()",
      "execute()",
      "yield",
      "include()"
    ],
    "answer_en": "execute()",
    "answer_hi": "execute()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 277,
    "question_en": "Which PDO method begins a transaction?",
    "question_hi": "PDO में transaction शुरू करने के लिए कौन-सा method उपयोग होता है?",
    "options_en": [
      "isset()",
      "include()",
      "strlen()",
      "beginTransaction()"
    ],
    "options_hi": [
      "isset()",
      "include()",
      "strlen()",
      "beginTransaction()"
    ],
    "answer_en": "beginTransaction()",
    "answer_hi": "beginTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 278,
    "question_en": "Which function securely hashes passwords?",
    "question_hi": "पासवर्ड को सुरक्षित रूप से hash करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": [
      "for",
      "password_hash()",
      "in_array()",
      "final"
    ],
    "options_hi": [
      "for",
      "password_hash()",
      "in_array()",
      "final"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 279,
    "question_en": "Which function verifies a password against a hash?",
    "question_hi": "कौन-सा फ़ंक्शन पासवर्ड को hash के खिलाफ सत्यापित करता है?",
    "options_en": [
      "const",
      "file_put_contents()",
      "password_verify()",
      "!="
    ],
    "options_hi": [
      "const",
      "file_put_contents()",
      "password_verify()",
      "!="
    ],
    "answer_en": "password_verify()",
    "answer_hi": "password_verify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 280,
    "question_en": "Which function returns the type of a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल का प्रकार बताता है?",
    "options_en": [
      "gettype()",
      "mysqli_connect()",
      "unlink()",
      "==="
    ],
    "options_hi": [
      "gettype()",
      "mysqli_connect()",
      "unlink()",
      "==="
    ],
    "answer_en": "gettype()",
    "answer_hi": "gettype()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 281,
    "question_en": "Which function prints human-readable information about a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल की human-readable जानकारी दिखाता है?",
    "options_en": [
      "print_r()",
      "try",
      "is_dir()",
      "return"
    ],
    "options_hi": [
      "print_r()",
      "try",
      "is_dir()",
      "return"
    ],
    "answer_en": "print_r()",
    "answer_hi": "print_r()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 282,
    "question_en": "Which function dumps information about a variable with type and value?",
    "question_hi": "कौन-सा फ़ंक्शन वैरिएबल के प्रकार और मान सहित जानकारी दिखाता है?",
    "options_en": [
      "extends",
      "===",
      "var_dump()",
      "implements"
    ],
    "options_hi": [
      "extends",
      "===",
      "var_dump()",
      "implements"
    ],
    "answer_en": "var_dump()",
    "answer_hi": "var_dump()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 283,
    "question_en": "Which construct includes a file and generates a fatal error if missing?",
    "question_hi": "कौन-सा construct फ़ाइल शामिल करता है और यदि फ़ाइल गायब हो तो fatal error देता है?",
    "options_en": [
      "mysqli_real_escape_string()",
      "static",
      "require()",
      "opendir()"
    ],
    "options_hi": [
      "mysqli_real_escape_string()",
      "static",
      "require()",
      "opendir()"
    ],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 284,
    "question_en": "Which construct includes a file only once?",
    "question_hi": "कौन-सा construct फ़ाइल को केवल एक बार include करता है?",
    "options_en": [
      "trait",
      "<",
      "for",
      "include_once()"
    ],
    "options_hi": [
      "trait",
      "<",
      "for",
      "include_once()"
    ],
    "answer_en": "include_once()",
    "answer_hi": "include_once()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 285,
    "question_en": "Which operator suppresses errors in PHP?",
    "question_hi": "PHP में errors suppress करने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": [
      "@",
      ">=",
      "$_SESSION",
      "finally"
    ],
    "options_hi": [
      "@",
      ">=",
      "$_SESSION",
      "finally"
    ],
    "answer_en": "@",
    "answer_hi": "@",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 286,
    "question_en": "Which operator is the null coalescing operator introduced in PHP 7?",
    "question_hi": "PHP 7 में पेश किया गया null coalescing operator कौन-सा है?",
    "options_en": [
      "$_FILES",
      "do-while",
      "__DIR__",
      "??"
    ],
    "options_hi": [
      "$_FILES",
      "do-while",
      "__DIR__",
      "??"
    ],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 287,
    "question_en": "Which operator is the spaceship operator for three-way comparison?",
    "question_hi": "तीन-तरफा तुलना के लिए spaceship operator कौन-सा है?",
    "options_en": [
      "$_REQUEST",
      "file_get_contents()",
      "*",
      "<=>"
    ],
    "options_hi": [
      "$_REQUEST",
      "file_get_contents()",
      "*",
      "<=>"
    ],
    "answer_en": "<=>",
    "answer_hi": "<=>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 288,
    "question_en": "Which PHP function returns the length of a string? (Example: include_once())",
    "question_hi": "PHP में स्ट्रिंग की लंबाई किस फ़ंक्शन से मिलती है? (include_once())",
    "options_en": [
      "array_keys()",
      "+",
      "$_ENV",
      "include_once()"
    ],
    "options_hi": [
      "array_keys()",
      "+",
      "$_ENV",
      "include_once()"
    ],
    "answer_en": "include_once()",
    "answer_hi": "include_once()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 289,
    "question_en": "Which function finds the position of the first occurrence of a substring? (Example: fread())",
    "question_hi": "कौन-सा फ़ंक्शन किसी सबस्ट्रिंग के पहले occurrence की स्थिति देता है? (fread())",
    "options_en": [
      "!",
      ">",
      "fread()",
      "opendir()"
    ],
    "options_hi": [
      "!",
      ">",
      "fread()",
      "opendir()"
    ],
    "answer_en": "fread()",
    "answer_hi": "fread()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 290,
    "question_en": "Which function returns part of a string? (Example: session_start())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग का हिस्सा लौटाता है? (session_start())",
    "options_en": [
      "readdir()",
      "session_start()",
      "include_once()",
      "echo"
    ],
    "options_hi": [
      "readdir()",
      "session_start()",
      "include_once()",
      "echo"
    ],
    "answer_en": "session_start()",
    "answer_hi": "session_start()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 291,
    "question_en": "Which function removes whitespace from both ends of a string? (Example: is_null())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग के दोनों सिरों से whitespace हटाता है? (is_null())",
    "options_en": [
      "global",
      "protected",
      "is_null()",
      "array_keys()"
    ],
    "options_hi": [
      "global",
      "protected",
      "is_null()",
      "array_keys()"
    ],
    "answer_en": "is_null()",
    "answer_hi": "is_null()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 292,
    "question_en": "Which operator concatenates strings in PHP? (Example: ??)",
    "question_hi": "PHP में स्ट्रिंग जोड़ने के लिए कौन-सा operator उपयोग होता है? (??)",
    "options_en": [
      "mysqli_real_escape_string()",
      "??",
      "global",
      "define()"
    ],
    "options_hi": [
      "mysqli_real_escape_string()",
      "??",
      "global",
      "define()"
    ],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 293,
    "question_en": "Which superglobal stores POST data? (Example: $_GET)",
    "question_hi": "POST डेटा किस superglobal में संग्रहीत होता है? ($_GET)",
    "options_en": [
      "$_GET",
      "file_get_contents()",
      "rmdir()",
      "foreach"
    ],
    "options_hi": [
      "$_GET",
      "file_get_contents()",
      "rmdir()",
      "foreach"
    ],
    "answer_en": "$_GET",
    "answer_hi": "$_GET",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 294,
    "question_en": "Which function checks if a file exists? (Example: json_encode())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि फ़ाइल मौजूद है? (json_encode())",
    "options_en": [
      "json_encode()",
      ">=",
      "trim()",
      "microtime()"
    ],
    "options_hi": [
      "json_encode()",
      ">=",
      "trim()",
      "microtime()"
    ],
    "answer_en": "json_encode()",
    "answer_hi": "json_encode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 295,
    "question_en": "Which function reads an entire file into a string? (Example: continue)",
    "question_hi": "कौन-सा फ़ंक्शन पूरी फ़ाइल को एक स्ट्रिंग में पढ़ता है? (continue)",
    "options_en": [
      "$_REQUEST",
      "sort()",
      "continue",
      "isset()"
    ],
    "options_hi": [
      "$_REQUEST",
      "sort()",
      "continue",
      "isset()"
    ],
    "answer_en": "continue",
    "answer_hi": "continue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 296,
    "question_en": "Which function opens a file or URL? (Example: __DIR__)",
    "question_hi": "कौन-सा फ़ंक्शन किसी फ़ाइल या URL को खोलता है? (__DIR__)",
    "options_en": [
      "__DIR__",
      "array_reduce()",
      "empty",
      "array_push()"
    ],
    "options_hi": [
      "__DIR__",
      "array_reduce()",
      "empty",
      "array_push()"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 297,
    "question_en": "Which function closes an open file pointer? (Example: define())",
    "question_hi": "कौन-सा फ़ंक्शन खुली फ़ाइल pointer को बंद करता है? (define())",
    "options_en": [
      "$GLOBALS",
      "define()",
      "opendir()",
      "__DIR__"
    ],
    "options_hi": [
      "$GLOBALS",
      "define()",
      "opendir()",
      "__DIR__"
    ],
    "answer_en": "define()",
    "answer_hi": "define()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 298,
    "question_en": "Which function writes data to a file? (Example: is_null())",
    "question_hi": "कौन-सा फ़ंक्शन फ़ाइल में डेटा लिखता है? (is_null())",
    "options_en": [
      "namespace",
      "%",
      "protected",
      "is_null()"
    ],
    "options_hi": [
      "namespace",
      "%",
      "protected",
      "is_null()"
    ],
    "answer_en": "is_null()",
    "answer_hi": "is_null()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 299,
    "question_en": "Which function splits a string by a delimiter into an array? (Example: substr())",
    "question_hi": "कौन-सा फ़ंक्शन किसी delimiter से स्ट्रिंग को array में बाँटता है? (substr())",
    "options_en": [
      "trim()",
      "__destruct()",
      "eval()",
      "substr()"
    ],
    "options_hi": [
      "trim()",
      "__destruct()",
      "eval()",
      "substr()"
    ],
    "answer_en": "substr()",
    "answer_hi": "substr()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 300,
    "question_en": "Which function joins array elements with a glue string? (Example: var_dump())",
    "question_hi": "कौन-सा फ़ंक्शन array के elements को एक string से जोड़ता है? (var_dump())",
    "options_en": [
      "var_dump()",
      "class",
      "fread()",
      "for"
    ],
    "options_hi": [
      "var_dump()",
      "class",
      "fread()",
      "for"
    ],
    "answer_en": "var_dump()",
    "answer_hi": "var_dump()",
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