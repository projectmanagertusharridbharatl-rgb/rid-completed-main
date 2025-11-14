const questions = [
  {
    "num": 500,
    "question_en": "Which function reads an entire file into a string? (Example: session_start())",
    "question_hi": "कौन-सा फ़ंक्शन पूरी फ़ाइल को एक स्ट्रिंग में पढ़ता है? (session_start())",
    "options_en": [
      "==",
      "$GLOBALS",
      "final",
      "session_start()"
    ],
    "options_hi": [
      "==",
      "$GLOBALS",
      "final",
      "session_start()"
    ],
    "answer_en": "session_start()",
    "answer_hi": "session_start()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 501,
    "question_en": "Which function opens a file or URL? (Example: array_merge())",
    "question_hi": "कौन-सा फ़ंक्शन किसी फ़ाइल या URL को खोलता है? (array_merge())",
    "options_en": [
      "array_pop()",
      "array_slice()",
      "implode()",
      "array_merge()"
    ],
    "options_hi": [
      "array_pop()",
      "array_slice()",
      "implode()",
      "array_merge()"
    ],
    "answer_en": "array_merge()",
    "answer_hi": "array_merge()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 502,
    "question_en": "Which function closes an open file pointer? (Example: include())",
    "question_hi": "कौन-सा फ़ंक्शन खुली फ़ाइल pointer को बंद करता है? (include())",
    "options_en": [
      "explode()",
      "fclose()",
      "sort()",
      "include()"
    ],
    "options_hi": [
      "explode()",
      "fclose()",
      "sort()",
      "include()"
    ],
    "answer_en": "include()",
    "answer_hi": "include()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 503,
    "question_en": "Which function writes data to a file? (Example: time())",
    "question_hi": "कौन-सा फ़ंक्शन फ़ाइल में डेटा लिखता है? (time())",
    "options_en": [
      "@",
      "$_COOKIE",
      "==",
      "time()"
    ],
    "options_hi": [
      "@",
      "$_COOKIE",
      "==",
      "time()"
    ],
    "answer_en": "time()",
    "answer_hi": "time()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 504,
    "question_en": "Which function splits a string by a delimiter into an array? (Example: mysqli_connect())",
    "question_hi": "कौन-सा फ़ंक्शन किसी delimiter से स्ट्रिंग को array में बाँटता है? (mysqli_connect())",
    "options_en": [
      "mysqli_connect()",
      "__FILE__",
      "extends",
      "array_filter()"
    ],
    "options_hi": [
      "mysqli_connect()",
      "__FILE__",
      "extends",
      "array_filter()"
    ],
    "answer_en": "mysqli_connect()",
    "answer_hi": "mysqli_connect()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 505,
    "question_en": "Which function joins array elements with a glue string? (Example: die())",
    "question_hi": "कौन-सा फ़ंक्शन array के elements को एक string से जोड़ता है? (die())",
    "options_en": [
      "die()",
      "asort()",
      "empty()",
      "require()"
    ],
    "options_hi": [
      "die()",
      "asort()",
      "empty()",
      "require()"
    ],
    "answer_en": "die()",
    "answer_hi": "die()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 506,
    "question_en": "Which function adds one or more elements to the end of an array? (Example: mysqli_real_escape_string())",
    "question_hi": "कौन-सा फ़ंक्शन array के अंत में एक या अधिक तत्व जोड़ता है? (mysqli_real_escape_string())",
    "options_en": [
      "array_map()",
      "trim()",
      "mysqli_real_escape_string()",
      "$_FILES"
    ],
    "options_hi": [
      "array_map()",
      "trim()",
      "mysqli_real_escape_string()",
      "$_FILES"
    ],
    "answer_en": "mysqli_real_escape_string()",
    "answer_hi": "mysqli_real_escape_string()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 507,
    "question_en": "Which function removes and returns the last element of an array? (Example: __LINE__)",
    "question_hi": "कौन-सा फ़ंक्शन array का अंतिम तत्व हटाता और लौटाता है? (__LINE__)",
    "options_en": [
      "<",
      "global",
      "password_hash()",
      "__LINE__"
    ],
    "options_hi": [
      "<",
      "global",
      "password_hash()",
      "__LINE__"
    ],
    "answer_en": "__LINE__",
    "answer_hi": "__LINE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 508,
    "question_en": "Which function checks if a value exists in an array? (Example: __LINE__)",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि कोई मान array में मौजूद है? (__LINE__)",
    "options_en": [
      "eval()",
      "empty",
      "rmdir()",
      "__LINE__"
    ],
    "options_hi": [
      "eval()",
      "empty",
      "rmdir()",
      "__LINE__"
    ],
    "answer_en": "__LINE__",
    "answer_hi": "__LINE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 509,
    "question_en": "Which function returns the number of elements in an array? (Example: mkdir())",
    "question_hi": "कौन-सा फ़ंक्शन array में तत्वों की संख्या देता है? (mkdir())",
    "options_en": [
      "extends",
      "gettype()",
      "PDO::__construct()",
      "mkdir()"
    ],
    "options_hi": [
      "extends",
      "gettype()",
      "PDO::__construct()",
      "mkdir()"
    ],
    "answer_en": "mkdir()",
    "answer_hi": "mkdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 510,
    "question_en": "Which keyword defines a function in PHP? (Example: class)",
    "question_hi": "PHP में फ़ंक्शन को परिभाषित करने के लिए कौन-सा keyword उपयोग होता है? (class)",
    "options_en": [
      "empty()",
      "prepare()",
      "class",
      "*"
    ],
    "options_hi": [
      "empty()",
      "prepare()",
      "class",
      "*"
    ],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 511,
    "question_en": "Which keyword declares a class in PHP? (Example: empty)",
    "question_hi": "PHP में class घोषित करने के लिए कौन-सा keyword उपयोग होता है? (empty)",
    "options_en": [
      "array_filter()",
      "PDO::__construct()",
      "empty",
      "array_push()"
    ],
    "options_hi": [
      "array_filter()",
      "PDO::__construct()",
      "empty",
      "array_push()"
    ],
    "answer_en": "empty",
    "answer_hi": "empty",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 512,
    "question_en": "Which keyword is used to inherit from a parent class? (Example: final)",
    "question_hi": "Parent class से inherit करने के लिए कौन-सा keyword उपयोग होता है? (final)",
    "options_en": [
      "throw",
      "do-while",
      "print_r()",
      "final"
    ],
    "options_hi": [
      "throw",
      "do-while",
      "print_r()",
      "final"
    ],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 513,
    "question_en": "Which magic constant returns the full path and filename of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल का पूरा path और filename लौटाता है?",
    "options_en": [
      "__FILE__",
      "include()",
      "__destruct()",
      "$_GET"
    ],
    "options_hi": [
      "__FILE__",
      "include()",
      "__destruct()",
      "$_GET"
    ],
    "answer_en": "__FILE__",
    "answer_hi": "__FILE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 514,
    "question_en": "Which magic constant returns the directory of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल की directory लौटाता है?",
    "options_en": [
      "file_put_contents()",
      "phpinfo()",
      "public",
      "__DIR__"
    ],
    "options_hi": [
      "file_put_contents()",
      "phpinfo()",
      "public",
      "__DIR__"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 515,
    "question_en": "Which function starts a session in PHP? (Example: strlen())",
    "question_hi": "PHP में session शुरू करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (strlen())",
    "options_en": [
      "strlen()",
      "try",
      "var_dump()",
      "!="
    ],
    "options_hi": [
      "strlen()",
      "try",
      "var_dump()",
      "!="
    ],
    "answer_en": "strlen()",
    "answer_hi": "strlen()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 516,
    "question_en": "Which function destroys a session? (Example: exit())",
    "question_hi": "कौन-सा फ़ंक्शन session को नष्ट करता है? (exit())",
    "options_en": [
      "exit()",
      "__DIR__",
      "!==",
      "password_hash()"
    ],
    "options_hi": [
      "exit()",
      "__DIR__",
      "!==",
      "password_hash()"
    ],
    "answer_en": "exit()",
    "answer_hi": "exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 517,
    "question_en": "Which function sets a cookie? (Example: ksort())",
    "question_hi": "कौन-सा फ़ंक्शन cookie सेट करता है? (ksort())",
    "options_en": [
      "mysqli_query()",
      "ksort()",
      "print_r()",
      "/"
    ],
    "options_hi": [
      "mysqli_query()",
      "ksort()",
      "print_r()",
      "/"
    ],
    "answer_en": "ksort()",
    "answer_hi": "ksort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 518,
    "question_en": "Which function sends a raw HTTP header? (Example: array_push())",
    "question_hi": "कौन-सा फ़ंक्शन raw HTTP header भेजता है? (array_push())",
    "options_en": [
      "for",
      "array_filter()",
      "strpos()",
      "array_push()"
    ],
    "options_hi": [
      "for",
      "array_filter()",
      "strpos()",
      "array_push()"
    ],
    "answer_en": "array_push()",
    "answer_hi": "array_push()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 519,
    "question_en": "Which function connects to MySQL using mysqli extension? (Example: is_null())",
    "question_hi": "mysqli के साथ MySQL से कनेक्ट करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (is_null())",
    "options_en": [
      "for",
      "require()",
      "private",
      "is_null()"
    ],
    "options_hi": [
      "for",
      "require()",
      "private",
      "is_null()"
    ],
    "answer_en": "is_null()",
    "answer_hi": "is_null()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 520,
    "question_en": "Which PHP extension offers a database abstraction layer (PDO)?",
    "question_hi": "कौन-सा extension database abstraction layer (PDO) प्रदान करता है?",
    "options_en": [
      "for",
      ".",
      "PDO",
      "phpversion()"
    ],
    "options_hi": [
      "for",
      ".",
      "PDO",
      "phpversion()"
    ],
    "answer_en": "PDO",
    "answer_hi": "PDO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 521,
    "question_en": "Which PDO method prepares a statement for execution?",
    "question_hi": "PDO में किस method से statement prepare किया जाता है?",
    "options_en": [
      "<=",
      "prepare()",
      "array_filter()",
      "static"
    ],
    "options_hi": [
      "<=",
      "prepare()",
      "array_filter()",
      "static"
    ],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 522,
    "question_en": "Which PDO method executes a prepared statement?",
    "question_hi": "PDO में किस method से prepared statement execute किया जाता है?",
    "options_en": [
      "new",
      "fread()",
      "asort()",
      "execute()"
    ],
    "options_hi": [
      "new",
      "fread()",
      "asort()",
      "execute()"
    ],
    "answer_en": "execute()",
    "answer_hi": "execute()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 523,
    "question_en": "Which PDO method begins a transaction?",
    "question_hi": "PDO में transaction शुरू करने के लिए कौन-सा method उपयोग होता है?",
    "options_en": [
      "beginTransaction()",
      "trim()",
      "asort()",
      "extends"
    ],
    "options_hi": [
      "beginTransaction()",
      "trim()",
      "asort()",
      "extends"
    ],
    "answer_en": "beginTransaction()",
    "answer_hi": "beginTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 524,
    "question_en": "Which function securely hashes passwords?",
    "question_hi": "पासवर्ड को सुरक्षित रूप से hash करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": [
      "array_pop()",
      ">",
      "password_hash()",
      "fopen()"
    ],
    "options_hi": [
      "array_pop()",
      ">",
      "password_hash()",
      "fopen()"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 525,
    "question_en": "Which function verifies a password against a hash?",
    "question_hi": "कौन-सा फ़ंक्शन पासवर्ड को hash के खिलाफ सत्यापित करता है?",
    "options_en": [
      "fread()",
      "for",
      "??",
      "password_verify()"
    ],
    "options_hi": [
      "fread()",
      "for",
      "??",
      "password_verify()"
    ],
    "answer_en": "password_verify()",
    "answer_hi": "password_verify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 526,
    "question_en": "Which function returns the type of a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल का प्रकार बताता है?",
    "options_en": [
      "__DIR__",
      "time()",
      "gettype()",
      "finally"
    ],
    "options_hi": [
      "__DIR__",
      "time()",
      "gettype()",
      "finally"
    ],
    "answer_en": "gettype()",
    "answer_hi": "gettype()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 527,
    "question_en": "Which function prints human-readable information about a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल की human-readable जानकारी दिखाता है?",
    "options_en": [
      "print_r()",
      "htmlentities()",
      "mysqli_connect()",
      "mkdir()"
    ],
    "options_hi": [
      "print_r()",
      "htmlentities()",
      "mysqli_connect()",
      "mkdir()"
    ],
    "answer_en": "print_r()",
    "answer_hi": "print_r()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 528,
    "question_en": "Which function dumps information about a variable with type and value?",
    "question_hi": "कौन-सा फ़ंक्शन वैरिएबल के प्रकार और मान सहित जानकारी दिखाता है?",
    "options_en": [
      "require_once()",
      "==",
      "array_values()",
      "var_dump()"
    ],
    "options_hi": [
      "require_once()",
      "==",
      "array_values()",
      "var_dump()"
    ],
    "answer_en": "var_dump()",
    "answer_hi": "var_dump()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 529,
    "question_en": "Which construct includes a file and generates a fatal error if missing?",
    "question_hi": "कौन-सा construct फ़ाइल शामिल करता है और यदि फ़ाइल गायब हो तो fatal error देता है?",
    "options_en": [
      "require()",
      "const",
      "print",
      "mkdir()"
    ],
    "options_hi": [
      "require()",
      "const",
      "print",
      "mkdir()"
    ],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 530,
    "question_en": "Which construct includes a file only once?",
    "question_hi": "कौन-सा construct फ़ाइल को केवल एक बार include करता है?",
    "options_en": [
      "include_once()",
      "$_SESSION",
      "exit()",
      "function"
    ],
    "options_hi": [
      "include_once()",
      "$_SESSION",
      "exit()",
      "function"
    ],
    "answer_en": "include_once()",
    "answer_hi": "include_once()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 531,
    "question_en": "Which operator suppresses errors in PHP?",
    "question_hi": "PHP में errors suppress करने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": [
      "-",
      "public",
      "@",
      "include()"
    ],
    "options_hi": [
      "-",
      "public",
      "@",
      "include()"
    ],
    "answer_en": "@",
    "answer_hi": "@",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 532,
    "question_en": "Which operator is the null coalescing operator introduced in PHP 7?",
    "question_hi": "PHP 7 में पेश किया गया null coalescing operator कौन-सा है?",
    "options_en": [
      "array_unique()",
      "??",
      "empty",
      "array_values()"
    ],
    "options_hi": [
      "array_unique()",
      "??",
      "empty",
      "array_values()"
    ],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 533,
    "question_en": "Which operator is the spaceship operator for three-way comparison?",
    "question_hi": "तीन-तरफा तुलना के लिए spaceship operator कौन-सा है?",
    "options_en": [
      "die()",
      "protected",
      "<=>",
      "session_start()"
    ],
    "options_hi": [
      "die()",
      "protected",
      "<=>",
      "session_start()"
    ],
    "answer_en": "<=>",
    "answer_hi": "<=>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 534,
    "question_en": "Which PHP function returns the length of a string? (Example: count())",
    "question_hi": "PHP में स्ट्रिंग की लंबाई किस फ़ंक्शन से मिलती है? (count())",
    "options_en": [
      "__FILE__",
      "count()",
      "empty()",
      "phpinfo()"
    ],
    "options_hi": [
      "__FILE__",
      "count()",
      "empty()",
      "phpinfo()"
    ],
    "answer_en": "count()",
    "answer_hi": "count()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 535,
    "question_en": "Which function finds the position of the first occurrence of a substring? (Example: include())",
    "question_hi": "कौन-सा फ़ंक्शन किसी सबस्ट्रिंग के पहले occurrence की स्थिति देता है? (include())",
    "options_en": [
      "use",
      "include()",
      "password_verify()",
      "password_hash()"
    ],
    "options_hi": [
      "use",
      "include()",
      "password_verify()",
      "password_hash()"
    ],
    "answer_en": "include()",
    "answer_hi": "include()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 536,
    "question_en": "Which function returns part of a string? (Example: htmlentities())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग का हिस्सा लौटाता है? (htmlentities())",
    "options_en": [
      "htmlentities()",
      "explode()",
      "strlen()",
      "print"
    ],
    "options_hi": [
      "htmlentities()",
      "explode()",
      "strlen()",
      "print"
    ],
    "answer_en": "htmlentities()",
    "answer_hi": "htmlentities()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 537,
    "question_en": "Which function removes whitespace from both ends of a string? (Example: ksort())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग के दोनों सिरों से whitespace हटाता है? (ksort())",
    "options_en": [
      "ksort()",
      "for",
      "private",
      "exit()"
    ],
    "options_hi": [
      "ksort()",
      "for",
      "private",
      "exit()"
    ],
    "answer_en": "ksort()",
    "answer_hi": "ksort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 538,
    "question_en": "Which operator concatenates strings in PHP? (Example: -)",
    "question_hi": "PHP में स्ट्रिंग जोड़ने के लिए कौन-सा operator उपयोग होता है? (-)",
    "options_en": [
      "substr()",
      "$_SERVER",
      "$GLOBALS",
      "-"
    ],
    "options_hi": [
      "substr()",
      "$_SERVER",
      "$GLOBALS",
      "-"
    ],
    "answer_en": "-",
    "answer_hi": "-",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 539,
    "question_en": "Which superglobal stores POST data? (Example: $_SERVER)",
    "question_hi": "POST डेटा किस superglobal में संग्रहीत होता है? ($_SERVER)",
    "options_en": [
      "finally",
      "print",
      "$_SERVER",
      "date()"
    ],
    "options_hi": [
      "finally",
      "print",
      "$_SERVER",
      "date()"
    ],
    "answer_en": "$_SERVER",
    "answer_hi": "$_SERVER",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 540,
    "question_en": "Which function checks if a file exists? (Example: array_push())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि फ़ाइल मौजूद है? (array_push())",
    "options_en": [
      "function",
      "ksort()",
      "array_push()",
      "mysqli_real_escape_string()"
    ],
    "options_hi": [
      "function",
      "ksort()",
      "array_push()",
      "mysqli_real_escape_string()"
    ],
    "answer_en": "array_push()",
    "answer_hi": "array_push()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 541,
    "question_en": "Which function reads an entire file into a string? (Example: substr())",
    "question_hi": "कौन-सा फ़ंक्शन पूरी फ़ाइल को एक स्ट्रिंग में पढ़ता है? (substr())",
    "options_en": [
      "substr()",
      "empty",
      "!",
      "array_map()"
    ],
    "options_hi": [
      "substr()",
      "empty",
      "!",
      "array_map()"
    ],
    "answer_en": "substr()",
    "answer_hi": "substr()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 542,
    "question_en": "Which function opens a file or URL? (Example: try)",
    "question_hi": "कौन-सा फ़ंक्शन किसी फ़ाइल या URL को खोलता है? (try)",
    "options_en": [
      "@",
      "try",
      "+",
      "."
    ],
    "options_hi": [
      "@",
      "try",
      "+",
      "."
    ],
    "answer_en": "try",
    "answer_hi": "try",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 543,
    "question_en": "Which function closes an open file pointer? (Example: array_reduce())",
    "question_hi": "कौन-सा फ़ंक्शन खुली फ़ाइल pointer को बंद करता है? (array_reduce())",
    "options_en": [
      "protected",
      "!==",
      "use",
      "array_reduce()"
    ],
    "options_hi": [
      "protected",
      "!==",
      "use",
      "array_reduce()"
    ],
    "answer_en": "array_reduce()",
    "answer_hi": "array_reduce()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 544,
    "question_en": "Which function writes data to a file? (Example: commit())",
    "question_hi": "कौन-सा फ़ंक्शन फ़ाइल में डेटा लिखता है? (commit())",
    "options_en": [
      "catch",
      "foreach",
      "eval()",
      "commit()"
    ],
    "options_hi": [
      "catch",
      "foreach",
      "eval()",
      "commit()"
    ],
    "answer_en": "commit()",
    "answer_hi": "commit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 545,
    "question_en": "Which function splits a string by a delimiter into an array? (Example: closedir())",
    "question_hi": "कौन-सा फ़ंक्शन किसी delimiter से स्ट्रिंग को array में बाँटता है? (closedir())",
    "options_en": [
      "explode()",
      "/",
      "interface",
      "closedir()"
    ],
    "options_hi": [
      "explode()",
      "/",
      "interface",
      "closedir()"
    ],
    "answer_en": "closedir()",
    "answer_hi": "closedir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 546,
    "question_en": "Which function joins array elements with a glue string? (Example: __destruct())",
    "question_hi": "कौन-सा फ़ंक्शन array के elements को एक string से जोड़ता है? (__destruct())",
    "options_en": [
      "__destruct()",
      "gettype()",
      "function",
      "trim()"
    ],
    "options_hi": [
      "__destruct()",
      "gettype()",
      "function",
      "trim()"
    ],
    "answer_en": "__destruct()",
    "answer_hi": "__destruct()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 547,
    "question_en": "Which function adds one or more elements to the end of an array? (Example: strpos())",
    "question_hi": "कौन-सा फ़ंक्शन array के अंत में एक या अधिक तत्व जोड़ता है? (strpos())",
    "options_en": [
      "final",
      "strpos()",
      "include_once()",
      "trait"
    ],
    "options_hi": [
      "final",
      "strpos()",
      "include_once()",
      "trait"
    ],
    "answer_en": "strpos()",
    "answer_hi": "strpos()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 548,
    "question_en": "Which function removes and returns the last element of an array? (Example: mysqli_real_escape_string())",
    "question_hi": "कौन-सा फ़ंक्शन array का अंतिम तत्व हटाता और लौटाता है? (mysqli_real_escape_string())",
    "options_en": [
      "?:",
      "const",
      "&&",
      "mysqli_real_escape_string()"
    ],
    "options_hi": [
      "?:",
      "const",
      "&&",
      "mysqli_real_escape_string()"
    ],
    "answer_en": "mysqli_real_escape_string()",
    "answer_hi": "mysqli_real_escape_string()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 549,
    "question_en": "Which function checks if a value exists in an array? (Example: execute())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि कोई मान array में मौजूद है? (execute())",
    "options_en": [
      "execute()",
      "asort()",
      "$_REQUEST",
      "<=>"
    ],
    "options_hi": [
      "execute()",
      "asort()",
      "$_REQUEST",
      "<=>"
    ],
    "answer_en": "execute()",
    "answer_hi": "execute()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 550,
    "question_en": "Which function returns the number of elements in an array? (Example: phpversion())",
    "question_hi": "कौन-सा फ़ंक्शन array में तत्वों की संख्या देता है? (phpversion())",
    "options_en": [
      "phpversion()",
      "do-while",
      "execute()",
      "isset"
    ],
    "options_hi": [
      "phpversion()",
      "do-while",
      "execute()",
      "isset"
    ],
    "answer_en": "phpversion()",
    "answer_hi": "phpversion()",
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