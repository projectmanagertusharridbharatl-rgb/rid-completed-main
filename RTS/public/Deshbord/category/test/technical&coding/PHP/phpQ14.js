const questions = [
  {
    "num": 1,
    "question_en": "Which PHP function returns the length of a string? (Example: beginTransaction())",
    "question_hi": "PHP में स्ट्रिंग की लंबाई किस फ़ंक्शन से मिलती है? (beginTransaction())",
    "options_en": [
      "interface",
      "beginTransaction()",
      "print",
      "explode()"
    ],
    "options_hi": [
      "interface",
      "beginTransaction()",
      "print",
      "explode()"
    ],
    "answer_en": "beginTransaction()",
    "answer_hi": "beginTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which function finds the position of the first occurrence of a substring? (Example: execute())",
    "question_hi": "कौन-सा फ़ंक्शन किसी सबस्ट्रिंग के पहले occurrence की स्थिति देता है? (execute())",
    "options_en": [
      "password_verify()",
      "date()",
      "execute()",
      "mysqli_fetch_assoc()"
    ],
    "options_hi": [
      "password_verify()",
      "date()",
      "execute()",
      "mysqli_fetch_assoc()"
    ],
    "answer_en": "execute()",
    "answer_hi": "execute()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which function returns part of a string? (Example: is_null())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग का हिस्सा लौटाता है? (is_null())",
    "options_en": [
      "date()",
      "substr()",
      "is_null()",
      "==="
    ],
    "options_hi": [
      "date()",
      "substr()",
      "is_null()",
      "==="
    ],
    "answer_en": "is_null()",
    "answer_hi": "is_null()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which function removes whitespace from both ends of a string? (Example: asort())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग के दोनों सिरों से whitespace हटाता है? (asort())",
    "options_en": [
      "asort()",
      "print_r()",
      "execute()",
      "array_keys()"
    ],
    "options_hi": [
      "asort()",
      "print_r()",
      "execute()",
      "array_keys()"
    ],
    "answer_en": "asort()",
    "answer_hi": "asort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which operator concatenates strings in PHP? (Example: !=)",
    "question_hi": "PHP में स्ट्रिंग जोड़ने के लिए कौन-सा operator उपयोग होता है? (!=)",
    "options_en": [
      "!=",
      "implode()",
      "-",
      "empty"
    ],
    "options_hi": [
      "!=",
      "implode()",
      "-",
      "empty"
    ],
    "answer_en": "!=",
    "answer_hi": "!=",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which superglobal stores POST data? (Example: $_ENV)",
    "question_hi": "POST डेटा किस superglobal में संग्रहीत होता है? ($_ENV)",
    "options_en": [
      "extends",
      "prepare()",
      "$_ENV",
      "json_decode()"
    ],
    "options_hi": [
      "extends",
      "prepare()",
      "$_ENV",
      "json_decode()"
    ],
    "answer_en": "$_ENV",
    "answer_hi": "$_ENV",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which function checks if a file exists? (Example: session_start())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि फ़ाइल मौजूद है? (session_start())",
    "options_en": [
      "array_unique()",
      "while",
      "session_start()",
      "$_GET"
    ],
    "options_hi": [
      "array_unique()",
      "while",
      "session_start()",
      "$_GET"
    ],
    "answer_en": "session_start()",
    "answer_hi": "session_start()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which function reads an entire file into a string? (Example: password_hash())",
    "question_hi": "कौन-सा फ़ंक्शन पूरी फ़ाइल को एक स्ट्रिंग में पढ़ता है? (password_hash())",
    "options_en": [
      "password_hash()",
      "is_dir()",
      "array_map()",
      "mkdir()"
    ],
    "options_hi": [
      "password_hash()",
      "is_dir()",
      "array_map()",
      "mkdir()"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which function opens a file or URL? (Example: continue)",
    "question_hi": "कौन-सा फ़ंक्शन किसी फ़ाइल या URL को खोलता है? (continue)",
    "options_en": [
      "time()",
      "continue",
      "is_null()",
      "array_merge()"
    ],
    "options_hi": [
      "time()",
      "continue",
      "is_null()",
      "array_merge()"
    ],
    "answer_en": "continue",
    "answer_hi": "continue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which function closes an open file pointer? (Example: is_file())",
    "question_hi": "कौन-सा फ़ंक्शन खुली फ़ाइल pointer को बंद करता है? (is_file())",
    "options_en": [
      "is_file()",
      "array_reduce()",
      "file_put_contents()",
      "exit()"
    ],
    "options_hi": [
      "is_file()",
      "array_reduce()",
      "file_put_contents()",
      "exit()"
    ],
    "answer_en": "is_file()",
    "answer_hi": "is_file()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which function writes data to a file? (Example: htmlspecialchars())",
    "question_hi": "कौन-सा फ़ंक्शन फ़ाइल में डेटा लिखता है? (htmlspecialchars())",
    "options_en": [
      "htmlspecialchars()",
      "<=>",
      "execute()",
      "beginTransaction()"
    ],
    "options_hi": [
      "htmlspecialchars()",
      "<=>",
      "execute()",
      "beginTransaction()"
    ],
    "answer_en": "htmlspecialchars()",
    "answer_hi": "htmlspecialchars()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which function splits a string by a delimiter into an array? (Example: opendir())",
    "question_hi": "कौन-सा फ़ंक्शन किसी delimiter से स्ट्रिंग को array में बाँटता है? (opendir())",
    "options_en": [
      "interface",
      "commit()",
      "opendir()",
      "function"
    ],
    "options_hi": [
      "interface",
      "commit()",
      "opendir()",
      "function"
    ],
    "answer_en": "opendir()",
    "answer_hi": "opendir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which function joins array elements with a glue string? (Example: fwrite())",
    "question_hi": "कौन-सा फ़ंक्शन array के elements को एक string से जोड़ता है? (fwrite())",
    "options_en": [
      "!=",
      "fwrite()",
      "||",
      "array_map()"
    ],
    "options_hi": [
      "!=",
      "fwrite()",
      "||",
      "array_map()"
    ],
    "answer_en": "fwrite()",
    "answer_hi": "fwrite()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which function adds one or more elements to the end of an array? (Example: password_hash())",
    "question_hi": "कौन-सा फ़ंक्शन array के अंत में एक या अधिक तत्व जोड़ता है? (password_hash())",
    "options_en": [
      "implements",
      "header()",
      "setcookie()",
      "password_hash()"
    ],
    "options_hi": [
      "implements",
      "header()",
      "setcookie()",
      "password_hash()"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which function removes and returns the last element of an array? (Example: time())",
    "question_hi": "कौन-सा फ़ंक्शन array का अंतिम तत्व हटाता और लौटाता है? (time())",
    "options_en": [
      "-",
      "time()",
      "$_SERVER",
      "global"
    ],
    "options_hi": [
      "-",
      "time()",
      "$_SERVER",
      "global"
    ],
    "answer_en": "time()",
    "answer_hi": "time()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which function checks if a value exists in an array? (Example: array_filter())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि कोई मान array में मौजूद है? (array_filter())",
    "options_en": [
      "array_filter()",
      "readdir()",
      "implode()",
      "==="
    ],
    "options_hi": [
      "array_filter()",
      "readdir()",
      "implode()",
      "==="
    ],
    "answer_en": "array_filter()",
    "answer_hi": "array_filter()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which function returns the number of elements in an array? (Example: yield)",
    "question_hi": "कौन-सा फ़ंक्शन array में तत्वों की संख्या देता है? (yield)",
    "options_en": [
      "yield",
      "<=",
      "throw",
      "beginTransaction()"
    ],
    "options_hi": [
      "yield",
      "<=",
      "throw",
      "beginTransaction()"
    ],
    "answer_en": "yield",
    "answer_hi": "yield",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword defines a function in PHP? (Example: final)",
    "question_hi": "PHP में फ़ंक्शन को परिभाषित करने के लिए कौन-सा keyword उपयोग होता है? (final)",
    "options_en": [
      "is_file()",
      "array_values()",
      "final",
      "??"
    ],
    "options_hi": [
      "is_file()",
      "array_values()",
      "final",
      "??"
    ],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which keyword declares a class in PHP? (Example: new)",
    "question_hi": "PHP में class घोषित करने के लिए कौन-सा keyword उपयोग होता है? (new)",
    "options_en": [
      "file_exists()",
      "new",
      "fclose()",
      "mkdir()"
    ],
    "options_hi": [
      "file_exists()",
      "new",
      "fclose()",
      "mkdir()"
    ],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which keyword is used to inherit from a parent class? (Example: function)",
    "question_hi": "Parent class से inherit करने के लिए कौन-सा keyword उपयोग होता है? (function)",
    "options_en": [
      "in_array()",
      "function",
      "phpinfo()",
      "exit()"
    ],
    "options_hi": [
      "in_array()",
      "function",
      "phpinfo()",
      "exit()"
    ],
    "answer_en": "function",
    "answer_hi": "function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which magic constant returns the full path and filename of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल का पूरा path और filename लौटाता है?",
    "options_en": [
      "__FILE__",
      "$_ENV",
      "&&",
      "yield"
    ],
    "options_hi": [
      "__FILE__",
      "$_ENV",
      "&&",
      "yield"
    ],
    "answer_en": "__FILE__",
    "answer_hi": "__FILE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which magic constant returns the directory of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल की directory लौटाता है?",
    "options_en": [
      "<=>",
      "!",
      "sort()",
      "__DIR__"
    ],
    "options_hi": [
      "<=>",
      "!",
      "sort()",
      "__DIR__"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which function starts a session in PHP? (Example: password_hash())",
    "question_hi": "PHP में session शुरू करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (password_hash())",
    "options_en": [
      "password_hash()",
      "substr()",
      "$_SERVER",
      "empty"
    ],
    "options_hi": [
      "password_hash()",
      "substr()",
      "$_SERVER",
      "empty"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which function destroys a session? (Example: count())",
    "question_hi": "कौन-सा फ़ंक्शन session को नष्ट करता है? (count())",
    "options_en": [
      "gettype()",
      "trait",
      "htmlspecialchars()",
      "count()"
    ],
    "options_hi": [
      "gettype()",
      "trait",
      "htmlspecialchars()",
      "count()"
    ],
    "answer_en": "count()",
    "answer_hi": "count()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which function sets a cookie? (Example: microtime())",
    "question_hi": "कौन-सा फ़ंक्शन cookie सेट करता है? (microtime())",
    "options_en": [
      "microtime()",
      "file_exists()",
      "fread()",
      "count()"
    ],
    "options_hi": [
      "microtime()",
      "file_exists()",
      "fread()",
      "count()"
    ],
    "answer_en": "microtime()",
    "answer_hi": "microtime()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which function sends a raw HTTP header? (Example: fclose())",
    "question_hi": "कौन-सा फ़ंक्शन raw HTTP header भेजता है? (fclose())",
    "options_en": [
      "fclose()",
      "$_ENV",
      "PDO::__construct()",
      "||"
    ],
    "options_hi": [
      "fclose()",
      "$_ENV",
      "PDO::__construct()",
      "||"
    ],
    "answer_en": "fclose()",
    "answer_hi": "fclose()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which function connects to MySQL using mysqli extension? (Example: file_get_contents())",
    "question_hi": "mysqli के साथ MySQL से कनेक्ट करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (file_get_contents())",
    "options_en": [
      "setcookie()",
      "date()",
      "file_get_contents()",
      "unset"
    ],
    "options_hi": [
      "setcookie()",
      "date()",
      "file_get_contents()",
      "unset"
    ],
    "answer_en": "file_get_contents()",
    "answer_hi": "file_get_contents()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which PHP extension offers a database abstraction layer (PDO)?",
    "question_hi": "कौन-सा extension database abstraction layer (PDO) प्रदान करता है?",
    "options_en": [
      "is_null()",
      "public",
      "PDO",
      "namespace"
    ],
    "options_hi": [
      "is_null()",
      "public",
      "PDO",
      "namespace"
    ],
    "answer_en": "PDO",
    "answer_hi": "PDO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which PDO method prepares a statement for execution?",
    "question_hi": "PDO में किस method से statement prepare किया जाता है?",
    "options_en": [
      "prepare()",
      "$_REQUEST",
      "str_replace()",
      "try"
    ],
    "options_hi": [
      "prepare()",
      "$_REQUEST",
      "str_replace()",
      "try"
    ],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which PDO method executes a prepared statement?",
    "question_hi": "PDO में किस method से prepared statement execute किया जाता है?",
    "options_en": [
      "array_splice()",
      "yield",
      "execute()",
      "catch"
    ],
    "options_hi": [
      "array_splice()",
      "yield",
      "execute()",
      "catch"
    ],
    "answer_en": "execute()",
    "answer_hi": "execute()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which PDO method begins a transaction?",
    "question_hi": "PDO में transaction शुरू करने के लिए कौन-सा method उपयोग होता है?",
    "options_en": [
      ">",
      ".",
      "beginTransaction()",
      "-"
    ],
    "options_hi": [
      ">",
      ".",
      "beginTransaction()",
      "-"
    ],
    "answer_en": "beginTransaction()",
    "answer_hi": "beginTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which function securely hashes passwords?",
    "question_hi": "पासवर्ड को सुरक्षित रूप से hash करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": [
      "password_hash()",
      "static",
      "namespace",
      "gettype()"
    ],
    "options_hi": [
      "password_hash()",
      "static",
      "namespace",
      "gettype()"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which function verifies a password against a hash?",
    "question_hi": "कौन-सा फ़ंक्शन पासवर्ड को hash के खिलाफ सत्यापित करता है?",
    "options_en": [
      "is_dir()",
      "password_verify()",
      "print_r()",
      "fclose()"
    ],
    "options_hi": [
      "is_dir()",
      "password_verify()",
      "print_r()",
      "fclose()"
    ],
    "answer_en": "password_verify()",
    "answer_hi": "password_verify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which function returns the type of a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल का प्रकार बताता है?",
    "options_en": [
      "array_slice()",
      "strlen()",
      "try",
      "gettype()"
    ],
    "options_hi": [
      "array_slice()",
      "strlen()",
      "try",
      "gettype()"
    ],
    "answer_en": "gettype()",
    "answer_hi": "gettype()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which function prints human-readable information about a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल की human-readable जानकारी दिखाता है?",
    "options_en": [
      "session_start()",
      "print_r()",
      "die()",
      "beginTransaction()"
    ],
    "options_hi": [
      "session_start()",
      "print_r()",
      "die()",
      "beginTransaction()"
    ],
    "answer_en": "print_r()",
    "answer_hi": "print_r()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which function dumps information about a variable with type and value?",
    "question_hi": "कौन-सा फ़ंक्शन वैरिएबल के प्रकार और मान सहित जानकारी दिखाता है?",
    "options_en": [
      "password_hash()",
      "is_null()",
      "var_dump()",
      "$_REQUEST"
    ],
    "options_hi": [
      "password_hash()",
      "is_null()",
      "var_dump()",
      "$_REQUEST"
    ],
    "answer_en": "var_dump()",
    "answer_hi": "var_dump()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which construct includes a file and generates a fatal error if missing?",
    "question_hi": "कौन-सा construct फ़ाइल शामिल करता है और यदि फ़ाइल गायब हो तो fatal error देता है?",
    "options_en": [
      "require()",
      "global",
      "array_splice()",
      "$_COOKIE"
    ],
    "options_hi": [
      "require()",
      "global",
      "array_splice()",
      "$_COOKIE"
    ],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which construct includes a file only once?",
    "question_hi": "कौन-सा construct फ़ाइल को केवल एक बार include करता है?",
    "options_en": [
      "PDO::__construct()",
      "time()",
      "session_destroy()",
      "include_once()"
    ],
    "options_hi": [
      "PDO::__construct()",
      "time()",
      "session_destroy()",
      "include_once()"
    ],
    "answer_en": "include_once()",
    "answer_hi": "include_once()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which operator suppresses errors in PHP?",
    "question_hi": "PHP में errors suppress करने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": [
      "ksort()",
      "@",
      "implode()",
      "$_COOKIE"
    ],
    "options_hi": [
      "ksort()",
      "@",
      "implode()",
      "$_COOKIE"
    ],
    "answer_en": "@",
    "answer_hi": "@",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which operator is the null coalescing operator introduced in PHP 7?",
    "question_hi": "PHP 7 में पेश किया गया null coalescing operator कौन-सा है?",
    "options_en": [
      "password_verify()",
      "commit()",
      "??",
      "*"
    ],
    "options_hi": [
      "password_verify()",
      "commit()",
      "??",
      "*"
    ],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which operator is the spaceship operator for three-way comparison?",
    "question_hi": "तीन-तरफा तुलना के लिए spaceship operator कौन-सा है?",
    "options_en": [
      "<=>",
      "is_null()",
      "catch",
      "require()"
    ],
    "options_hi": [
      "<=>",
      "is_null()",
      "catch",
      "require()"
    ],
    "answer_en": "<=>",
    "answer_hi": "<=>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which PHP function returns the length of a string? (Example: file_get_contents())",
    "question_hi": "PHP में स्ट्रिंग की लंबाई किस फ़ंक्शन से मिलती है? (file_get_contents())",
    "options_en": [
      "json_decode()",
      "array_reduce()",
      "PDO::__construct()",
      "file_get_contents()"
    ],
    "options_hi": [
      "json_decode()",
      "array_reduce()",
      "PDO::__construct()",
      "file_get_contents()"
    ],
    "answer_en": "file_get_contents()",
    "answer_hi": "file_get_contents()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which function finds the position of the first occurrence of a substring? (Example: exit())",
    "question_hi": "कौन-सा फ़ंक्शन किसी सबस्ट्रिंग के पहले occurrence की स्थिति देता है? (exit())",
    "options_en": [
      "unset",
      "execute()",
      "private",
      "exit()"
    ],
    "options_hi": [
      "unset",
      "execute()",
      "private",
      "exit()"
    ],
    "answer_en": "exit()",
    "answer_hi": "exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which function returns part of a string? (Example: str_replace())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग का हिस्सा लौटाता है? (str_replace())",
    "options_en": [
      "str_replace()",
      "function",
      "require_once()",
      "time()"
    ],
    "options_hi": [
      "str_replace()",
      "function",
      "require_once()",
      "time()"
    ],
    "answer_en": "str_replace()",
    "answer_hi": "str_replace()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which function removes whitespace from both ends of a string? (Example: file_exists())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग के दोनों सिरों से whitespace हटाता है? (file_exists())",
    "options_en": [
      "microtime()",
      "str_replace()",
      "mysqli_real_escape_string()",
      "file_exists()"
    ],
    "options_hi": [
      "microtime()",
      "str_replace()",
      "mysqli_real_escape_string()",
      "file_exists()"
    ],
    "answer_en": "file_exists()",
    "answer_hi": "file_exists()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which operator concatenates strings in PHP? (Example: !)",
    "question_hi": "PHP में स्ट्रिंग जोड़ने के लिए कौन-सा operator उपयोग होता है? (!)",
    "options_en": [
      "?:",
      "!",
      "print_r()",
      "$_REQUEST"
    ],
    "options_hi": [
      "?:",
      "!",
      "print_r()",
      "$_REQUEST"
    ],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which superglobal stores POST data? (Example: $GLOBALS)",
    "question_hi": "POST डेटा किस superglobal में संग्रहीत होता है? ($GLOBALS)",
    "options_en": [
      "strlen()",
      "$GLOBALS",
      "$_SERVER",
      "throw"
    ],
    "options_hi": [
      "strlen()",
      "$GLOBALS",
      "$_SERVER",
      "throw"
    ],
    "answer_en": "$GLOBALS",
    "answer_hi": "$GLOBALS",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which function checks if a file exists? (Example: print_r())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि फ़ाइल मौजूद है? (print_r())",
    "options_en": [
      "array_unshift()",
      "die()",
      "array_pop()",
      "print_r()"
    ],
    "options_hi": [
      "array_unshift()",
      "die()",
      "array_pop()",
      "print_r()"
    ],
    "answer_en": "print_r()",
    "answer_hi": "print_r()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which function reads an entire file into a string? (Example: session_destroy())",
    "question_hi": "कौन-सा फ़ंक्शन पूरी फ़ाइल को एक स्ट्रिंग में पढ़ता है? (session_destroy())",
    "options_en": [
      "foreach",
      "session_destroy()",
      "mysqli_real_escape_string()",
      "!=="
    ],
    "options_hi": [
      "foreach",
      "session_destroy()",
      "mysqli_real_escape_string()",
      "!=="
    ],
    "answer_en": "session_destroy()",
    "answer_hi": "session_destroy()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which function opens a file or URL? (Example: is_null())",
    "question_hi": "कौन-सा फ़ंक्शन किसी फ़ाइल या URL को खोलता है? (is_null())",
    "options_en": [
      "opendir()",
      "is_null()",
      "protected",
      "array_values()"
    ],
    "options_hi": [
      "opendir()",
      "is_null()",
      "protected",
      "array_values()"
    ],
    "answer_en": "is_null()",
    "answer_hi": "is_null()",
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