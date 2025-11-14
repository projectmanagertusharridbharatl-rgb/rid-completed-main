const questions = [
  {
    "num": 601,
    "question_en": "Which function connects to MySQL using mysqli extension? (Example: isset())",
    "question_hi": "mysqli के साथ MySQL से कनेक्ट करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (isset())",
    "options_en": [
      "isset()",
      "==",
      "continue",
      "array_push()"
    ],
    "options_hi": [
      "isset()",
      "==",
      "continue",
      "array_push()"
    ],
    "answer_en": "isset()",
    "answer_hi": "isset()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 602,
    "question_en": "Which PHP extension offers a database abstraction layer (PDO)?",
    "question_hi": "कौन-सा extension database abstraction layer (PDO) प्रदान करता है?",
    "options_en": [
      "function",
      "rollBack()",
      "PDO",
      "$_SERVER"
    ],
    "options_hi": [
      "function",
      "rollBack()",
      "PDO",
      "$_SERVER"
    ],
    "answer_en": "PDO",
    "answer_hi": "PDO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 603,
    "question_en": "Which PDO method prepares a statement for execution?",
    "question_hi": "PDO में किस method से statement prepare किया जाता है?",
    "options_en": [
      "implode()",
      "password_hash()",
      "__LINE__",
      "prepare()"
    ],
    "options_hi": [
      "implode()",
      "password_hash()",
      "__LINE__",
      "prepare()"
    ],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 604,
    "question_en": "Which PDO method executes a prepared statement?",
    "question_hi": "PDO में किस method से prepared statement execute किया जाता है?",
    "options_en": [
      "mkdir()",
      "execute()",
      "file_exists()",
      "!="
    ],
    "options_hi": [
      "mkdir()",
      "execute()",
      "file_exists()",
      "!="
    ],
    "answer_en": "execute()",
    "answer_hi": "execute()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 605,
    "question_en": "Which PDO method begins a transaction?",
    "question_hi": "PDO में transaction शुरू करने के लिए कौन-सा method उपयोग होता है?",
    "options_en": [
      "prepare()",
      "beginTransaction()",
      "opendir()",
      "array_unshift()"
    ],
    "options_hi": [
      "prepare()",
      "beginTransaction()",
      "opendir()",
      "array_unshift()"
    ],
    "answer_en": "beginTransaction()",
    "answer_hi": "beginTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 606,
    "question_en": "Which function securely hashes passwords?",
    "question_hi": "पासवर्ड को सुरक्षित रूप से hash करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": [
      "$_GET",
      "rmdir()",
      "||",
      "password_hash()"
    ],
    "options_hi": [
      "$_GET",
      "rmdir()",
      "||",
      "password_hash()"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 607,
    "question_en": "Which function verifies a password against a hash?",
    "question_hi": "कौन-सा फ़ंक्शन पासवर्ड को hash के खिलाफ सत्यापित करता है?",
    "options_en": [
      ">=",
      "strpos()",
      "interface",
      "password_verify()"
    ],
    "options_hi": [
      ">=",
      "strpos()",
      "interface",
      "password_verify()"
    ],
    "answer_en": "password_verify()",
    "answer_hi": "password_verify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 608,
    "question_en": "Which function returns the type of a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल का प्रकार बताता है?",
    "options_en": [
      "fwrite()",
      "phpversion()",
      "gettype()",
      "global"
    ],
    "options_hi": [
      "fwrite()",
      "phpversion()",
      "gettype()",
      "global"
    ],
    "answer_en": "gettype()",
    "answer_hi": "gettype()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 609,
    "question_en": "Which function prints human-readable information about a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल की human-readable जानकारी दिखाता है?",
    "options_en": [
      "print_r()",
      "closedir()",
      "mysqli_query()",
      "unset"
    ],
    "options_hi": [
      "print_r()",
      "closedir()",
      "mysqli_query()",
      "unset"
    ],
    "answer_en": "print_r()",
    "answer_hi": "print_r()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 610,
    "question_en": "Which function dumps information about a variable with type and value?",
    "question_hi": "कौन-सा फ़ंक्शन वैरिएबल के प्रकार और मान सहित जानकारी दिखाता है?",
    "options_en": [
      "$_ENV",
      "var_dump()",
      "new",
      "implements"
    ],
    "options_hi": [
      "$_ENV",
      "var_dump()",
      "new",
      "implements"
    ],
    "answer_en": "var_dump()",
    "answer_hi": "var_dump()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 611,
    "question_en": "Which construct includes a file and generates a fatal error if missing?",
    "question_hi": "कौन-सा construct फ़ाइल शामिल करता है और यदि फ़ाइल गायब हो तो fatal error देता है?",
    "options_en": [
      "interface",
      "array_slice()",
      "array_unshift()",
      "require()"
    ],
    "options_hi": [
      "interface",
      "array_slice()",
      "array_unshift()",
      "require()"
    ],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 612,
    "question_en": "Which construct includes a file only once?",
    "question_hi": "कौन-सा construct फ़ाइल को केवल एक बार include करता है?",
    "options_en": [
      "array_merge()",
      "include_once()",
      "@",
      "array_unique()"
    ],
    "options_hi": [
      "array_merge()",
      "include_once()",
      "@",
      "array_unique()"
    ],
    "answer_en": "include_once()",
    "answer_hi": "include_once()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 613,
    "question_en": "Which operator suppresses errors in PHP?",
    "question_hi": "PHP में errors suppress करने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": [
      "function",
      "is_null()",
      "@",
      "yield"
    ],
    "options_hi": [
      "function",
      "is_null()",
      "@",
      "yield"
    ],
    "answer_en": "@",
    "answer_hi": "@",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 614,
    "question_en": "Which operator is the null coalescing operator introduced in PHP 7?",
    "question_hi": "PHP 7 में पेश किया गया null coalescing operator कौन-सा है?",
    "options_en": [
      "??",
      "class",
      "mysqli_fetch_assoc()",
      "$_SESSION"
    ],
    "options_hi": [
      "??",
      "class",
      "mysqli_fetch_assoc()",
      "$_SESSION"
    ],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 615,
    "question_en": "Which operator is the spaceship operator for three-way comparison?",
    "question_hi": "तीन-तरफा तुलना के लिए spaceship operator कौन-सा है?",
    "options_en": [
      "array_merge()",
      "<=>",
      "fopen()",
      "PDO::__construct()"
    ],
    "options_hi": [
      "array_merge()",
      "<=>",
      "fopen()",
      "PDO::__construct()"
    ],
    "answer_en": "<=>",
    "answer_hi": "<=>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 616,
    "question_en": "Which PHP function returns the length of a string? (Example: file_get_contents())",
    "question_hi": "PHP में स्ट्रिंग की लंबाई किस फ़ंक्शन से मिलती है? (file_get_contents())",
    "options_en": [
      "class",
      "file_get_contents()",
      "mysqli_query()",
      "mkdir()"
    ],
    "options_hi": [
      "class",
      "file_get_contents()",
      "mysqli_query()",
      "mkdir()"
    ],
    "answer_en": "file_get_contents()",
    "answer_hi": "file_get_contents()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 617,
    "question_en": "Which function finds the position of the first occurrence of a substring? (Example: array_map())",
    "question_hi": "कौन-सा फ़ंक्शन किसी सबस्ट्रिंग के पहले occurrence की स्थिति देता है? (array_map())",
    "options_en": [
      "phpinfo()",
      "prepare()",
      "array_map()",
      "json_encode()"
    ],
    "options_hi": [
      "phpinfo()",
      "prepare()",
      "array_map()",
      "json_encode()"
    ],
    "answer_en": "array_map()",
    "answer_hi": "array_map()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 618,
    "question_en": "Which function returns part of a string? (Example: implode())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग का हिस्सा लौटाता है? (implode())",
    "options_en": [
      "namespace",
      "array_push()",
      "==",
      "implode()"
    ],
    "options_hi": [
      "namespace",
      "array_push()",
      "==",
      "implode()"
    ],
    "answer_en": "implode()",
    "answer_hi": "implode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 619,
    "question_en": "Which function removes whitespace from both ends of a string? (Example: date())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग के दोनों सिरों से whitespace हटाता है? (date())",
    "options_en": [
      "date()",
      "*",
      "rmdir()",
      "mkdir()"
    ],
    "options_hi": [
      "date()",
      "*",
      "rmdir()",
      "mkdir()"
    ],
    "answer_en": "date()",
    "answer_hi": "date()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 620,
    "question_en": "Which operator concatenates strings in PHP? (Example: .)",
    "question_hi": "PHP में स्ट्रिंग जोड़ने के लिए कौन-सा operator उपयोग होता है? (.)",
    "options_en": [
      ".",
      "print_r()",
      "try",
      "interface"
    ],
    "options_hi": [
      ".",
      "print_r()",
      "try",
      "interface"
    ],
    "answer_en": ".",
    "answer_hi": ".",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 621,
    "question_en": "Which superglobal stores POST data? (Example: $_POST)",
    "question_hi": "POST डेटा किस superglobal में संग्रहीत होता है? ($_POST)",
    "options_en": [
      "mkdir()",
      "fopen()",
      "$_POST",
      "rollBack()"
    ],
    "options_hi": [
      "mkdir()",
      "fopen()",
      "$_POST",
      "rollBack()"
    ],
    "answer_en": "$_POST",
    "answer_hi": "$_POST",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 622,
    "question_en": "Which function checks if a file exists? (Example: __FILE__)",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि फ़ाइल मौजूद है? (__FILE__)",
    "options_en": [
      "try",
      "__destruct()",
      "__FILE__",
      "__LINE__"
    ],
    "options_hi": [
      "try",
      "__destruct()",
      "__FILE__",
      "__LINE__"
    ],
    "answer_en": "__FILE__",
    "answer_hi": "__FILE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 623,
    "question_en": "Which function reads an entire file into a string? (Example: mysqli_real_escape_string())",
    "question_hi": "कौन-सा फ़ंक्शन पूरी फ़ाइल को एक स्ट्रिंग में पढ़ता है? (mysqli_real_escape_string())",
    "options_en": [
      "implements",
      "mysqli_real_escape_string()",
      "file_get_contents()",
      "microtime()"
    ],
    "options_hi": [
      "implements",
      "mysqli_real_escape_string()",
      "file_get_contents()",
      "microtime()"
    ],
    "answer_en": "mysqli_real_escape_string()",
    "answer_hi": "mysqli_real_escape_string()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 624,
    "question_en": "Which function opens a file or URL? (Example: isset())",
    "question_hi": "कौन-सा फ़ंक्शन किसी फ़ाइल या URL को खोलता है? (isset())",
    "options_en": [
      "isset()",
      "die()",
      "__FILE__",
      "$_FILES"
    ],
    "options_hi": [
      "isset()",
      "die()",
      "__FILE__",
      "$_FILES"
    ],
    "answer_en": "isset()",
    "answer_hi": "isset()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 625,
    "question_en": "Which function closes an open file pointer? (Example: fopen())",
    "question_hi": "कौन-सा फ़ंक्शन खुली फ़ाइल pointer को बंद करता है? (fopen())",
    "options_en": [
      "$_GET",
      "PDO::__construct()",
      "mysqli_fetch_assoc()",
      "fopen()"
    ],
    "options_hi": [
      "$_GET",
      "PDO::__construct()",
      "mysqli_fetch_assoc()",
      "fopen()"
    ],
    "answer_en": "fopen()",
    "answer_hi": "fopen()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 626,
    "question_en": "Which function writes data to a file? (Example: mysqli_query())",
    "question_hi": "कौन-सा फ़ंक्शन फ़ाइल में डेटा लिखता है? (mysqli_query())",
    "options_en": [
      "array_push()",
      "mysqli_query()",
      "?:",
      "<=>"
    ],
    "options_hi": [
      "array_push()",
      "mysqli_query()",
      "?:",
      "<=>"
    ],
    "answer_en": "mysqli_query()",
    "answer_hi": "mysqli_query()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 627,
    "question_en": "Which function splits a string by a delimiter into an array? (Example: count())",
    "question_hi": "कौन-सा फ़ंक्शन किसी delimiter से स्ट्रिंग को array में बाँटता है? (count())",
    "options_en": [
      "explode()",
      "print_r()",
      "count()",
      "@"
    ],
    "options_hi": [
      "explode()",
      "print_r()",
      "count()",
      "@"
    ],
    "answer_en": "count()",
    "answer_hi": "count()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 628,
    "question_en": "Which function joins array elements with a glue string? (Example: define())",
    "question_hi": "कौन-सा फ़ंक्शन array के elements को एक string से जोड़ता है? (define())",
    "options_en": [
      "strlen()",
      "rmdir()",
      "define()",
      "is_dir()"
    ],
    "options_hi": [
      "strlen()",
      "rmdir()",
      "define()",
      "is_dir()"
    ],
    "answer_en": "define()",
    "answer_hi": "define()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 629,
    "question_en": "Which function adds one or more elements to the end of an array? (Example: htmlspecialchars())",
    "question_hi": "कौन-सा फ़ंक्शन array के अंत में एक या अधिक तत्व जोड़ता है? (htmlspecialchars())",
    "options_en": [
      "password_hash()",
      ">",
      "PDO::__construct()",
      "htmlspecialchars()"
    ],
    "options_hi": [
      "password_hash()",
      ">",
      "PDO::__construct()",
      "htmlspecialchars()"
    ],
    "answer_en": "htmlspecialchars()",
    "answer_hi": "htmlspecialchars()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 630,
    "question_en": "Which function removes and returns the last element of an array? (Example: prepare())",
    "question_hi": "कौन-सा फ़ंक्शन array का अंतिम तत्व हटाता और लौटाता है? (prepare())",
    "options_en": [
      "array_map()",
      "array_shift()",
      "prepare()",
      "??"
    ],
    "options_hi": [
      "array_map()",
      "array_shift()",
      "prepare()",
      "??"
    ],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 631,
    "question_en": "Which function checks if a value exists in an array? (Example: unlink())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि कोई मान array में मौजूद है? (unlink())",
    "options_en": [
      "sort()",
      "return",
      "unlink()",
      "&&"
    ],
    "options_hi": [
      "sort()",
      "return",
      "unlink()",
      "&&"
    ],
    "answer_en": "unlink()",
    "answer_hi": "unlink()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 632,
    "question_en": "Which function returns the number of elements in an array? (Example: commit())",
    "question_hi": "कौन-सा फ़ंक्शन array में तत्वों की संख्या देता है? (commit())",
    "options_en": [
      "catch",
      "commit()",
      "fopen()",
      "namespace"
    ],
    "options_hi": [
      "catch",
      "commit()",
      "fopen()",
      "namespace"
    ],
    "answer_en": "commit()",
    "answer_hi": "commit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 633,
    "question_en": "Which keyword defines a function in PHP? (Example: class)",
    "question_hi": "PHP में फ़ंक्शन को परिभाषित करने के लिए कौन-सा keyword उपयोग होता है? (class)",
    "options_en": [
      ">=",
      "<=",
      "substr()",
      "class"
    ],
    "options_hi": [
      ">=",
      "<=",
      "substr()",
      "class"
    ],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 634,
    "question_en": "Which keyword declares a class in PHP? (Example: function)",
    "question_hi": "PHP में class घोषित करने के लिए कौन-सा keyword उपयोग होता है? (function)",
    "options_en": [
      "<=>",
      "is_file()",
      "function",
      "use"
    ],
    "options_hi": [
      "<=>",
      "is_file()",
      "function",
      "use"
    ],
    "answer_en": "function",
    "answer_hi": "function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 635,
    "question_en": "Which keyword is used to inherit from a parent class? (Example: use)",
    "question_hi": "Parent class से inherit करने के लिए कौन-सा keyword उपयोग होता है? (use)",
    "options_en": [
      "final",
      "use",
      "yield",
      "session_start()"
    ],
    "options_hi": [
      "final",
      "use",
      "yield",
      "session_start()"
    ],
    "answer_en": "use",
    "answer_hi": "use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 636,
    "question_en": "Which magic constant returns the full path and filename of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल का पूरा path और filename लौटाता है?",
    "options_en": [
      "__FILE__",
      "exit()",
      "__DIR__",
      "str_replace()"
    ],
    "options_hi": [
      "__FILE__",
      "exit()",
      "__DIR__",
      "str_replace()"
    ],
    "answer_en": "__FILE__",
    "answer_hi": "__FILE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 637,
    "question_en": "Which magic constant returns the directory of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल की directory लौटाता है?",
    "options_en": [
      "array_unshift()",
      "static",
      "fclose()",
      "__DIR__"
    ],
    "options_hi": [
      "array_unshift()",
      "static",
      "fclose()",
      "__DIR__"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 638,
    "question_en": "Which function starts a session in PHP? (Example: mysqli_connect())",
    "question_hi": "PHP में session शुरू करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (mysqli_connect())",
    "options_en": [
      "var_dump()",
      "mysqli_connect()",
      "is_file()",
      ">"
    ],
    "options_hi": [
      "var_dump()",
      "mysqli_connect()",
      "is_file()",
      ">"
    ],
    "answer_en": "mysqli_connect()",
    "answer_hi": "mysqli_connect()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 639,
    "question_en": "Which function destroys a session? (Example: __DIR__)",
    "question_hi": "कौन-सा फ़ंक्शन session को नष्ट करता है? (__DIR__)",
    "options_en": [
      "eval()",
      "__DIR__",
      "==",
      "echo"
    ],
    "options_hi": [
      "eval()",
      "__DIR__",
      "==",
      "echo"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 640,
    "question_en": "Which function sets a cookie? (Example: gettype())",
    "question_hi": "कौन-सा फ़ंक्शन cookie सेट करता है? (gettype())",
    "options_en": [
      "gettype()",
      "require_once()",
      "htmlentities()",
      "for"
    ],
    "options_hi": [
      "gettype()",
      "require_once()",
      "htmlentities()",
      "for"
    ],
    "answer_en": "gettype()",
    "answer_hi": "gettype()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 641,
    "question_en": "Which function sends a raw HTTP header? (Example: json_decode())",
    "question_hi": "कौन-सा फ़ंक्शन raw HTTP header भेजता है? (json_decode())",
    "options_en": [
      "json_decode()",
      "str_replace()",
      "die()",
      "microtime()"
    ],
    "options_hi": [
      "json_decode()",
      "str_replace()",
      "die()",
      "microtime()"
    ],
    "answer_en": "json_decode()",
    "answer_hi": "json_decode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 642,
    "question_en": "Which function connects to MySQL using mysqli extension? (Example: var_dump())",
    "question_hi": "mysqli के साथ MySQL से कनेक्ट करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (var_dump())",
    "options_en": [
      "var_dump()",
      "function",
      "<=>",
      "fwrite()"
    ],
    "options_hi": [
      "var_dump()",
      "function",
      "<=>",
      "fwrite()"
    ],
    "answer_en": "var_dump()",
    "answer_hi": "var_dump()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 643,
    "question_en": "Which PHP extension offers a database abstraction layer (PDO)?",
    "question_hi": "कौन-सा extension database abstraction layer (PDO) प्रदान करता है?",
    "options_en": [
      "rmdir()",
      "PDO",
      "try",
      "??"
    ],
    "options_hi": [
      "rmdir()",
      "PDO",
      "try",
      "??"
    ],
    "answer_en": "PDO",
    "answer_hi": "PDO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 644,
    "question_en": "Which PDO method prepares a statement for execution?",
    "question_hi": "PDO में किस method से statement prepare किया जाता है?",
    "options_en": [
      "prepare()",
      "array_push()",
      "array_keys()",
      "%"
    ],
    "options_hi": [
      "prepare()",
      "array_push()",
      "array_keys()",
      "%"
    ],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 645,
    "question_en": "Which PDO method executes a prepared statement?",
    "question_hi": "PDO में किस method से prepared statement execute किया जाता है?",
    "options_en": [
      "execute()",
      "PDO::__construct()",
      "try",
      "fclose()"
    ],
    "options_hi": [
      "execute()",
      "PDO::__construct()",
      "try",
      "fclose()"
    ],
    "answer_en": "execute()",
    "answer_hi": "execute()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 646,
    "question_en": "Which PDO method begins a transaction?",
    "question_hi": "PDO में transaction शुरू करने के लिए कौन-सा method उपयोग होता है?",
    "options_en": [
      "try",
      "array_reduce()",
      "array_unique()",
      "beginTransaction()"
    ],
    "options_hi": [
      "try",
      "array_reduce()",
      "array_unique()",
      "beginTransaction()"
    ],
    "answer_en": "beginTransaction()",
    "answer_hi": "beginTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 647,
    "question_en": "Which function securely hashes passwords?",
    "question_hi": "पासवर्ड को सुरक्षित रूप से hash करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": [
      "password_hash()",
      "die()",
      "%",
      "mysqli_connect()"
    ],
    "options_hi": [
      "password_hash()",
      "die()",
      "%",
      "mysqli_connect()"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 648,
    "question_en": "Which function verifies a password against a hash?",
    "question_hi": "कौन-सा फ़ंक्शन पासवर्ड को hash के खिलाफ सत्यापित करता है?",
    "options_en": [
      "namespace",
      "continue",
      "__FILE__",
      "password_verify()"
    ],
    "options_hi": [
      "namespace",
      "continue",
      "__FILE__",
      "password_verify()"
    ],
    "answer_en": "password_verify()",
    "answer_hi": "password_verify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 649,
    "question_en": "Which function returns the type of a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल का प्रकार बताता है?",
    "options_en": [
      "gettype()",
      "PDO::__construct()",
      "rmdir()",
      "trait"
    ],
    "options_hi": [
      "gettype()",
      "PDO::__construct()",
      "rmdir()",
      "trait"
    ],
    "answer_en": "gettype()",
    "answer_hi": "gettype()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 650,
    "question_en": "Which function prints human-readable information about a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल की human-readable जानकारी दिखाता है?",
    "options_en": [
      "print_r()",
      "execute()",
      "str_replace()",
      "while"
    ],
    "options_hi": [
      "print_r()",
      "execute()",
      "str_replace()",
      "while"
    ],
    "answer_en": "print_r()",
    "answer_hi": "print_r()",
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