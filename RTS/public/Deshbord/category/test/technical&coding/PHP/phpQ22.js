const questions = [
  {
    "num": 451,
    "question_en": "Which operator is the spaceship operator for three-way comparison?",
    "question_hi": "तीन-तरफा तुलना के लिए spaceship operator कौन-सा है?",
    "options_en": [
      "throw",
      "<=>",
      "finally",
      "."
    ],
    "options_hi": [
      "throw",
      "<=>",
      "finally",
      "."
    ],
    "answer_en": "<=>",
    "answer_hi": "<=>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 452,
    "question_en": "Which PHP function returns the length of a string? (Example: in_array())",
    "question_hi": "PHP में स्ट्रिंग की लंबाई किस फ़ंक्शन से मिलती है? (in_array())",
    "options_en": [
      "include()",
      "array_shift()",
      "array_search()",
      "in_array()"
    ],
    "options_hi": [
      "include()",
      "array_shift()",
      "array_search()",
      "in_array()"
    ],
    "answer_en": "in_array()",
    "answer_hi": "in_array()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 453,
    "question_en": "Which function finds the position of the first occurrence of a substring? (Example: commit())",
    "question_hi": "कौन-सा फ़ंक्शन किसी सबस्ट्रिंग के पहले occurrence की स्थिति देता है? (commit())",
    "options_en": [
      "commit()",
      "is_file()",
      "exit()",
      "||"
    ],
    "options_hi": [
      "commit()",
      "is_file()",
      "exit()",
      "||"
    ],
    "answer_en": "commit()",
    "answer_hi": "commit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 454,
    "question_en": "Which function returns part of a string? (Example: header())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग का हिस्सा लौटाता है? (header())",
    "options_en": [
      "strpos()",
      "extends",
      "beginTransaction()",
      "header()"
    ],
    "options_hi": [
      "strpos()",
      "extends",
      "beginTransaction()",
      "header()"
    ],
    "answer_en": "header()",
    "answer_hi": "header()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 455,
    "question_en": "Which function removes whitespace from both ends of a string? (Example: header())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग के दोनों सिरों से whitespace हटाता है? (header())",
    "options_en": [
      "array_filter()",
      "header()",
      "phpversion()",
      "!=="
    ],
    "options_hi": [
      "array_filter()",
      "header()",
      "phpversion()",
      "!=="
    ],
    "answer_en": "header()",
    "answer_hi": "header()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 456,
    "question_en": "Which operator concatenates strings in PHP? (Example: +)",
    "question_hi": "PHP में स्ट्रिंग जोड़ने के लिए कौन-सा operator उपयोग होता है? (+)",
    "options_en": [
      "+",
      "implements",
      "session_destroy()",
      "json_encode()"
    ],
    "options_hi": [
      "+",
      "implements",
      "session_destroy()",
      "json_encode()"
    ],
    "answer_en": "+",
    "answer_hi": "+",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 457,
    "question_en": "Which superglobal stores POST data? (Example: $_SERVER)",
    "question_hi": "POST डेटा किस superglobal में संग्रहीत होता है? ($_SERVER)",
    "options_en": [
      "array_keys()",
      "array_slice()",
      "$_SERVER",
      "exit()"
    ],
    "options_hi": [
      "array_keys()",
      "array_slice()",
      "$_SERVER",
      "exit()"
    ],
    "answer_en": "$_SERVER",
    "answer_hi": "$_SERVER",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 458,
    "question_en": "Which function checks if a file exists? (Example: mkdir())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि फ़ाइल मौजूद है? (mkdir())",
    "options_en": [
      "require_once()",
      "do-while",
      "<=>",
      "mkdir()"
    ],
    "options_hi": [
      "require_once()",
      "do-while",
      "<=>",
      "mkdir()"
    ],
    "answer_en": "mkdir()",
    "answer_hi": "mkdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 459,
    "question_en": "Which function reads an entire file into a string? (Example: array_slice())",
    "question_hi": "कौन-सा फ़ंक्शन पूरी फ़ाइल को एक स्ट्रिंग में पढ़ता है? (array_slice())",
    "options_en": [
      ".",
      "array_slice()",
      "beginTransaction()",
      "mysqli_connect()"
    ],
    "options_hi": [
      ".",
      "array_slice()",
      "beginTransaction()",
      "mysqli_connect()"
    ],
    "answer_en": "array_slice()",
    "answer_hi": "array_slice()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 460,
    "question_en": "Which function opens a file or URL? (Example: password_verify())",
    "question_hi": "कौन-सा फ़ंक्शन किसी फ़ाइल या URL को खोलता है? (password_verify())",
    "options_en": [
      "class",
      "password_verify()",
      "rmdir()",
      "%"
    ],
    "options_hi": [
      "class",
      "password_verify()",
      "rmdir()",
      "%"
    ],
    "answer_en": "password_verify()",
    "answer_hi": "password_verify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 461,
    "question_en": "Which function closes an open file pointer? (Example: time())",
    "question_hi": "कौन-सा फ़ंक्शन खुली फ़ाइल pointer को बंद करता है? (time())",
    "options_en": [
      "array_slice()",
      "die()",
      "time()",
      "sort()"
    ],
    "options_hi": [
      "array_slice()",
      "die()",
      "time()",
      "sort()"
    ],
    "answer_en": "time()",
    "answer_hi": "time()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 462,
    "question_en": "Which function writes data to a file? (Example: mysqli_query())",
    "question_hi": "कौन-सा फ़ंक्शन फ़ाइल में डेटा लिखता है? (mysqli_query())",
    "options_en": [
      "-",
      "interface",
      "mysqli_query()",
      "microtime()"
    ],
    "options_hi": [
      "-",
      "interface",
      "mysqli_query()",
      "microtime()"
    ],
    "answer_en": "mysqli_query()",
    "answer_hi": "mysqli_query()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 463,
    "question_en": "Which function splits a string by a delimiter into an array? (Example: array_unique())",
    "question_hi": "कौन-सा फ़ंक्शन किसी delimiter से स्ट्रिंग को array में बाँटता है? (array_unique())",
    "options_en": [
      "empty",
      "time()",
      "array_unique()",
      "||"
    ],
    "options_hi": [
      "empty",
      "time()",
      "array_unique()",
      "||"
    ],
    "answer_en": "array_unique()",
    "answer_hi": "array_unique()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 464,
    "question_en": "Which function joins array elements with a glue string? (Example: try)",
    "question_hi": "कौन-सा फ़ंक्शन array के elements को एक string से जोड़ता है? (try)",
    "options_en": [
      "finally",
      "fread()",
      "try",
      "use"
    ],
    "options_hi": [
      "finally",
      "fread()",
      "try",
      "use"
    ],
    "answer_en": "try",
    "answer_hi": "try",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 465,
    "question_en": "Which function adds one or more elements to the end of an array? (Example: array_splice())",
    "question_hi": "कौन-सा फ़ंक्शन array के अंत में एक या अधिक तत्व जोड़ता है? (array_splice())",
    "options_en": [
      "setcookie()",
      "$_COOKIE",
      "array_splice()",
      "define()"
    ],
    "options_hi": [
      "setcookie()",
      "$_COOKIE",
      "array_splice()",
      "define()"
    ],
    "answer_en": "array_splice()",
    "answer_hi": "array_splice()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 466,
    "question_en": "Which function removes and returns the last element of an array? (Example: asort())",
    "question_hi": "कौन-सा फ़ंक्शन array का अंतिम तत्व हटाता और लौटाता है? (asort())",
    "options_en": [
      "/",
      "PDO::__construct()",
      "__construct()",
      "asort()"
    ],
    "options_hi": [
      "/",
      "PDO::__construct()",
      "__construct()",
      "asort()"
    ],
    "answer_en": "asort()",
    "answer_hi": "asort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 467,
    "question_en": "Which function checks if a value exists in an array? (Example: array_merge())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि कोई मान array में मौजूद है? (array_merge())",
    "options_en": [
      "throw",
      "$_FILES",
      "array_merge()",
      "htmlspecialchars()"
    ],
    "options_hi": [
      "throw",
      "$_FILES",
      "array_merge()",
      "htmlspecialchars()"
    ],
    "answer_en": "array_merge()",
    "answer_hi": "array_merge()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 468,
    "question_en": "Which function returns the number of elements in an array? (Example: beginTransaction())",
    "question_hi": "कौन-सा फ़ंक्शन array में तत्वों की संख्या देता है? (beginTransaction())",
    "options_en": [
      "beginTransaction()",
      "try",
      "str_replace()",
      "closedir()"
    ],
    "options_hi": [
      "beginTransaction()",
      "try",
      "str_replace()",
      "closedir()"
    ],
    "answer_en": "beginTransaction()",
    "answer_hi": "beginTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 469,
    "question_en": "Which keyword defines a function in PHP? (Example: empty)",
    "question_hi": "PHP में फ़ंक्शन को परिभाषित करने के लिए कौन-सा keyword उपयोग होता है? (empty)",
    "options_en": [
      "array_reduce()",
      "empty",
      "use",
      "%"
    ],
    "options_hi": [
      "array_reduce()",
      "empty",
      "use",
      "%"
    ],
    "answer_en": "empty",
    "answer_hi": "empty",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 470,
    "question_en": "Which keyword declares a class in PHP? (Example: const)",
    "question_hi": "PHP में class घोषित करने के लिए कौन-सा keyword उपयोग होता है? (const)",
    "options_en": [
      "%",
      "const",
      "in_array()",
      "substr()"
    ],
    "options_hi": [
      "%",
      "const",
      "in_array()",
      "substr()"
    ],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 471,
    "question_en": "Which keyword is used to inherit from a parent class? (Example: print)",
    "question_hi": "Parent class से inherit करने के लिए कौन-सा keyword उपयोग होता है? (print)",
    "options_en": [
      "%",
      "print",
      "extends",
      "beginTransaction()"
    ],
    "options_hi": [
      "%",
      "print",
      "extends",
      "beginTransaction()"
    ],
    "answer_en": "print",
    "answer_hi": "print",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 472,
    "question_en": "Which magic constant returns the full path and filename of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल का पूरा path और filename लौटाता है?",
    "options_en": [
      "json_encode()",
      "<=>",
      "__FILE__",
      "throw"
    ],
    "options_hi": [
      "json_encode()",
      "<=>",
      "__FILE__",
      "throw"
    ],
    "answer_en": "__FILE__",
    "answer_hi": "__FILE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 473,
    "question_en": "Which magic constant returns the directory of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल की directory लौटाता है?",
    "options_en": [
      "function",
      "static",
      "str_replace()",
      "__DIR__"
    ],
    "options_hi": [
      "function",
      "static",
      "str_replace()",
      "__DIR__"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 474,
    "question_en": "Which function starts a session in PHP? (Example: include_once())",
    "question_hi": "PHP में session शुरू करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (include_once())",
    "options_en": [
      "closedir()",
      "mysqli_real_escape_string()",
      "include_once()",
      "/"
    ],
    "options_hi": [
      "closedir()",
      "mysqli_real_escape_string()",
      "include_once()",
      "/"
    ],
    "answer_en": "include_once()",
    "answer_hi": "include_once()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 475,
    "question_en": "Which function destroys a session? (Example: password_verify())",
    "question_hi": "कौन-सा फ़ंक्शन session को नष्ट करता है? (password_verify())",
    "options_en": [
      "use",
      "is_dir()",
      "password_verify()",
      "count()"
    ],
    "options_hi": [
      "use",
      "is_dir()",
      "password_verify()",
      "count()"
    ],
    "answer_en": "password_verify()",
    "answer_hi": "password_verify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 476,
    "question_en": "Which function sets a cookie? (Example: implode())",
    "question_hi": "कौन-सा फ़ंक्शन cookie सेट करता है? (implode())",
    "options_en": [
      "opendir()",
      "trait",
      "implode()",
      "continue"
    ],
    "options_hi": [
      "opendir()",
      "trait",
      "implode()",
      "continue"
    ],
    "answer_en": "implode()",
    "answer_hi": "implode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 477,
    "question_en": "Which function sends a raw HTTP header? (Example: __destruct())",
    "question_hi": "कौन-सा फ़ंक्शन raw HTTP header भेजता है? (__destruct())",
    "options_en": [
      ".",
      "trait",
      "__destruct()",
      "die()"
    ],
    "options_hi": [
      ".",
      "trait",
      "__destruct()",
      "die()"
    ],
    "answer_en": "__destruct()",
    "answer_hi": "__destruct()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 478,
    "question_en": "Which function connects to MySQL using mysqli extension? (Example: array_pop())",
    "question_hi": "mysqli के साथ MySQL से कनेक्ट करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (array_pop())",
    "options_en": [
      "global",
      "array_pop()",
      "array_merge()",
      "use"
    ],
    "options_hi": [
      "global",
      "array_pop()",
      "array_merge()",
      "use"
    ],
    "answer_en": "array_pop()",
    "answer_hi": "array_pop()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 479,
    "question_en": "Which PHP extension offers a database abstraction layer (PDO)?",
    "question_hi": "कौन-सा extension database abstraction layer (PDO) प्रदान करता है?",
    "options_en": [
      "gettype()",
      "while",
      "PDO",
      "global"
    ],
    "options_hi": [
      "gettype()",
      "while",
      "PDO",
      "global"
    ],
    "answer_en": "PDO",
    "answer_hi": "PDO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 480,
    "question_en": "Which PDO method prepares a statement for execution?",
    "question_hi": "PDO में किस method से statement prepare किया जाता है?",
    "options_en": [
      "in_array()",
      "is_null()",
      "prepare()",
      "rmdir()"
    ],
    "options_hi": [
      "in_array()",
      "is_null()",
      "prepare()",
      "rmdir()"
    ],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 481,
    "question_en": "Which PDO method executes a prepared statement?",
    "question_hi": "PDO में किस method से prepared statement execute किया जाता है?",
    "options_en": [
      "array_unique()",
      "execute()",
      "array_shift()",
      "yield"
    ],
    "options_hi": [
      "array_unique()",
      "execute()",
      "array_shift()",
      "yield"
    ],
    "answer_en": "execute()",
    "answer_hi": "execute()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 482,
    "question_en": "Which PDO method begins a transaction?",
    "question_hi": "PDO में transaction शुरू करने के लिए कौन-सा method उपयोग होता है?",
    "options_en": [
      "exit()",
      "implements",
      "<",
      "beginTransaction()"
    ],
    "options_hi": [
      "exit()",
      "implements",
      "<",
      "beginTransaction()"
    ],
    "answer_en": "beginTransaction()",
    "answer_hi": "beginTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 483,
    "question_en": "Which function securely hashes passwords?",
    "question_hi": "पासवर्ड को सुरक्षित रूप से hash करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": [
      "catch",
      "$GLOBALS",
      "$_GET",
      "password_hash()"
    ],
    "options_hi": [
      "catch",
      "$GLOBALS",
      "$_GET",
      "password_hash()"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 484,
    "question_en": "Which function verifies a password against a hash?",
    "question_hi": "कौन-सा फ़ंक्शन पासवर्ड को hash के खिलाफ सत्यापित करता है?",
    "options_en": [
      "$_GET",
      "password_verify()",
      "finally",
      "exit()"
    ],
    "options_hi": [
      "$_GET",
      "password_verify()",
      "finally",
      "exit()"
    ],
    "answer_en": "password_verify()",
    "answer_hi": "password_verify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 485,
    "question_en": "Which function returns the type of a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल का प्रकार बताता है?",
    "options_en": [
      "beginTransaction()",
      "time()",
      "rollBack()",
      "gettype()"
    ],
    "options_hi": [
      "beginTransaction()",
      "time()",
      "rollBack()",
      "gettype()"
    ],
    "answer_en": "gettype()",
    "answer_hi": "gettype()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 486,
    "question_en": "Which function prints human-readable information about a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल की human-readable जानकारी दिखाता है?",
    "options_en": [
      "print_r()",
      "<",
      "count()",
      "session_start()"
    ],
    "options_hi": [
      "print_r()",
      "<",
      "count()",
      "session_start()"
    ],
    "answer_en": "print_r()",
    "answer_hi": "print_r()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 487,
    "question_en": "Which function dumps information about a variable with type and value?",
    "question_hi": "कौन-सा फ़ंक्शन वैरिएबल के प्रकार और मान सहित जानकारी दिखाता है?",
    "options_en": [
      "static",
      "unset",
      "$_SESSION",
      "var_dump()"
    ],
    "options_hi": [
      "static",
      "unset",
      "$_SESSION",
      "var_dump()"
    ],
    "answer_en": "var_dump()",
    "answer_hi": "var_dump()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 488,
    "question_en": "Which construct includes a file and generates a fatal error if missing?",
    "question_hi": "कौन-सा construct फ़ाइल शामिल करता है और यदि फ़ाइल गायब हो तो fatal error देता है?",
    "options_en": [
      "is_file()",
      "trait",
      "closedir()",
      "require()"
    ],
    "options_hi": [
      "is_file()",
      "trait",
      "closedir()",
      "require()"
    ],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 489,
    "question_en": "Which construct includes a file only once?",
    "question_hi": "कौन-सा construct फ़ाइल को केवल एक बार include करता है?",
    "options_en": [
      "password_verify()",
      "trim()",
      "file_get_contents()",
      "include_once()"
    ],
    "options_hi": [
      "password_verify()",
      "trim()",
      "file_get_contents()",
      "include_once()"
    ],
    "answer_en": "include_once()",
    "answer_hi": "include_once()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 490,
    "question_en": "Which operator suppresses errors in PHP?",
    "question_hi": "PHP में errors suppress करने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": [
      "array_unique()",
      "yield",
      "@",
      "array_reduce()"
    ],
    "options_hi": [
      "array_unique()",
      "yield",
      "@",
      "array_reduce()"
    ],
    "answer_en": "@",
    "answer_hi": "@",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 491,
    "question_en": "Which operator is the null coalescing operator introduced in PHP 7?",
    "question_hi": "PHP 7 में पेश किया गया null coalescing operator कौन-सा है?",
    "options_en": [
      "__construct()",
      "??",
      ">=",
      "array_pop()"
    ],
    "options_hi": [
      "__construct()",
      "??",
      ">=",
      "array_pop()"
    ],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 492,
    "question_en": "Which operator is the spaceship operator for three-way comparison?",
    "question_hi": "तीन-तरफा तुलना के लिए spaceship operator कौन-सा है?",
    "options_en": [
      "asort()",
      "&&",
      "<=>",
      "print_r()"
    ],
    "options_hi": [
      "asort()",
      "&&",
      "<=>",
      "print_r()"
    ],
    "answer_en": "<=>",
    "answer_hi": "<=>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 493,
    "question_en": "Which PHP function returns the length of a string? (Example: opendir())",
    "question_hi": "PHP में स्ट्रिंग की लंबाई किस फ़ंक्शन से मिलती है? (opendir())",
    "options_en": [
      "array_values()",
      "namespace",
      "opendir()",
      "isset()"
    ],
    "options_hi": [
      "array_values()",
      "namespace",
      "opendir()",
      "isset()"
    ],
    "answer_en": "opendir()",
    "answer_hi": "opendir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 494,
    "question_en": "Which function finds the position of the first occurrence of a substring? (Example: __DIR__)",
    "question_hi": "कौन-सा फ़ंक्शन किसी सबस्ट्रिंग के पहले occurrence की स्थिति देता है? (__DIR__)",
    "options_en": [
      "extends",
      "var_dump()",
      "$_COOKIE",
      "__DIR__"
    ],
    "options_hi": [
      "extends",
      "var_dump()",
      "$_COOKIE",
      "__DIR__"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 495,
    "question_en": "Which function returns part of a string? (Example: setcookie())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग का हिस्सा लौटाता है? (setcookie())",
    "options_en": [
      "setcookie()",
      "explode()",
      "execute()",
      "date()"
    ],
    "options_hi": [
      "setcookie()",
      "explode()",
      "execute()",
      "date()"
    ],
    "answer_en": "setcookie()",
    "answer_hi": "setcookie()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 496,
    "question_en": "Which function removes whitespace from both ends of a string? (Example: mysqli_query())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग के दोनों सिरों से whitespace हटाता है? (mysqli_query())",
    "options_en": [
      "mysqli_query()",
      "continue",
      "array_splice()",
      "readdir()"
    ],
    "options_hi": [
      "mysqli_query()",
      "continue",
      "array_splice()",
      "readdir()"
    ],
    "answer_en": "mysqli_query()",
    "answer_hi": "mysqli_query()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 497,
    "question_en": "Which operator concatenates strings in PHP? (Example: ==)",
    "question_hi": "PHP में स्ट्रिंग जोड़ने के लिए कौन-सा operator उपयोग होता है? (==)",
    "options_en": [
      "catch",
      "?:",
      "==",
      "??"
    ],
    "options_hi": [
      "catch",
      "?:",
      "==",
      "??"
    ],
    "answer_en": "==",
    "answer_hi": "==",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 498,
    "question_en": "Which superglobal stores POST data? (Example: $_FILES)",
    "question_hi": "POST डेटा किस superglobal में संग्रहीत होता है? ($_FILES)",
    "options_en": [
      "array_keys()",
      "$_FILES",
      "__destruct()",
      "opendir()"
    ],
    "options_hi": [
      "array_keys()",
      "$_FILES",
      "__destruct()",
      "opendir()"
    ],
    "answer_en": "$_FILES",
    "answer_hi": "$_FILES",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 499,
    "question_en": "Which function checks if a file exists? (Example: require())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि फ़ाइल मौजूद है? (require())",
    "options_en": [
      "array_unique()",
      "require()",
      "array_filter()",
      "session_destroy()"
    ],
    "options_hi": [
      "array_unique()",
      "require()",
      "array_filter()",
      "session_destroy()"
    ],
    "answer_en": "require()",
    "answer_hi": "require()",
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