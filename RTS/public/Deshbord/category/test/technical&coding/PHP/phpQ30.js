const questions = [
  {
    "num": 851,
    "question_en": "Which PDO method begins a transaction?",
    "question_hi": "PDO में transaction शुरू करने के लिए कौन-सा method उपयोग होता है?",
    "options_en": [
      "is_dir()",
      "session_start()",
      "try",
      "beginTransaction()"
    ],
    "options_hi": [
      "is_dir()",
      "session_start()",
      "try",
      "beginTransaction()"
    ],
    "answer_en": "beginTransaction()",
    "answer_hi": "beginTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 852,
    "question_en": "Which function securely hashes passwords?",
    "question_hi": "पासवर्ड को सुरक्षित रूप से hash करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": [
      "password_hash()",
      "throw",
      "closedir()",
      "!="
    ],
    "options_hi": [
      "password_hash()",
      "throw",
      "closedir()",
      "!="
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 853,
    "question_en": "Which function verifies a password against a hash?",
    "question_hi": "कौन-सा फ़ंक्शन पासवर्ड को hash के खिलाफ सत्यापित करता है?",
    "options_en": [
      "password_verify()",
      "__LINE__",
      "header()",
      ">="
    ],
    "options_hi": [
      "password_verify()",
      "__LINE__",
      "header()",
      ">="
    ],
    "answer_en": "password_verify()",
    "answer_hi": "password_verify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 854,
    "question_en": "Which function returns the type of a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल का प्रकार बताता है?",
    "options_en": [
      "array_keys()",
      "array_unique()",
      "gettype()",
      "<="
    ],
    "options_hi": [
      "array_keys()",
      "array_unique()",
      "gettype()",
      "<="
    ],
    "answer_en": "gettype()",
    "answer_hi": "gettype()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 855,
    "question_en": "Which function prints human-readable information about a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल की human-readable जानकारी दिखाता है?",
    "options_en": [
      "empty",
      "password_verify()",
      "print_r()",
      "asort()"
    ],
    "options_hi": [
      "empty",
      "password_verify()",
      "print_r()",
      "asort()"
    ],
    "answer_en": "print_r()",
    "answer_hi": "print_r()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 856,
    "question_en": "Which function dumps information about a variable with type and value?",
    "question_hi": "कौन-सा फ़ंक्शन वैरिएबल के प्रकार और मान सहित जानकारी दिखाता है?",
    "options_en": [
      "require()",
      "extends",
      "var_dump()",
      "password_hash()"
    ],
    "options_hi": [
      "require()",
      "extends",
      "var_dump()",
      "password_hash()"
    ],
    "answer_en": "var_dump()",
    "answer_hi": "var_dump()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 857,
    "question_en": "Which construct includes a file and generates a fatal error if missing?",
    "question_hi": "कौन-सा construct फ़ाइल शामिल करता है और यदि फ़ाइल गायब हो तो fatal error देता है?",
    "options_en": [
      "eval()",
      "ksort()",
      "isset()",
      "require()"
    ],
    "options_hi": [
      "eval()",
      "ksort()",
      "isset()",
      "require()"
    ],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 858,
    "question_en": "Which construct includes a file only once?",
    "question_hi": "कौन-सा construct फ़ाइल को केवल एक बार include करता है?",
    "options_en": [
      "header()",
      "yield",
      "exit()",
      "include_once()"
    ],
    "options_hi": [
      "header()",
      "yield",
      "exit()",
      "include_once()"
    ],
    "answer_en": "include_once()",
    "answer_hi": "include_once()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 859,
    "question_en": "Which operator suppresses errors in PHP?",
    "question_hi": "PHP में errors suppress करने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": [
      "@",
      "-",
      "return",
      "require_once()"
    ],
    "options_hi": [
      "@",
      "-",
      "return",
      "require_once()"
    ],
    "answer_en": "@",
    "answer_hi": "@",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 860,
    "question_en": "Which operator is the null coalescing operator introduced in PHP 7?",
    "question_hi": "PHP 7 में पेश किया गया null coalescing operator कौन-सा है?",
    "options_en": [
      "interface",
      "??",
      "!",
      "throw"
    ],
    "options_hi": [
      "interface",
      "??",
      "!",
      "throw"
    ],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 861,
    "question_en": "Which operator is the spaceship operator for three-way comparison?",
    "question_hi": "तीन-तरफा तुलना के लिए spaceship operator कौन-सा है?",
    "options_en": [
      "global",
      "array_filter()",
      "<=>",
      "htmlspecialchars()"
    ],
    "options_hi": [
      "global",
      "array_filter()",
      "<=>",
      "htmlspecialchars()"
    ],
    "answer_en": "<=>",
    "answer_hi": "<=>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 862,
    "question_en": "Which PHP function returns the length of a string? (Example: define())",
    "question_hi": "PHP में स्ट्रिंग की लंबाई किस फ़ंक्शन से मिलती है? (define())",
    "options_en": [
      "$_POST",
      "include()",
      "PDO::__construct()",
      "define()"
    ],
    "options_hi": [
      "$_POST",
      "include()",
      "PDO::__construct()",
      "define()"
    ],
    "answer_en": "define()",
    "answer_hi": "define()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 863,
    "question_en": "Which function finds the position of the first occurrence of a substring? (Example: catch)",
    "question_hi": "कौन-सा फ़ंक्शन किसी सबस्ट्रिंग के पहले occurrence की स्थिति देता है? (catch)",
    "options_en": [
      "catch",
      "empty()",
      "rollBack()",
      "foreach"
    ],
    "options_hi": [
      "catch",
      "empty()",
      "rollBack()",
      "foreach"
    ],
    "answer_en": "catch",
    "answer_hi": "catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 864,
    "question_en": "Which function returns part of a string? (Example: in_array())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग का हिस्सा लौटाता है? (in_array())",
    "options_en": [
      "print_r()",
      "mysqli_query()",
      "in_array()",
      "rmdir()"
    ],
    "options_hi": [
      "print_r()",
      "mysqli_query()",
      "in_array()",
      "rmdir()"
    ],
    "answer_en": "in_array()",
    "answer_hi": "in_array()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 865,
    "question_en": "Which function removes whitespace from both ends of a string? (Example: unlink())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग के दोनों सिरों से whitespace हटाता है? (unlink())",
    "options_en": [
      "__LINE__",
      "unlink()",
      "final",
      "||"
    ],
    "options_hi": [
      "__LINE__",
      "unlink()",
      "final",
      "||"
    ],
    "answer_en": "unlink()",
    "answer_hi": "unlink()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 866,
    "question_en": "Which operator concatenates strings in PHP? (Example: ===)",
    "question_hi": "PHP में स्ट्रिंग जोड़ने के लिए कौन-सा operator उपयोग होता है? (===)",
    "options_en": [
      "new",
      "===",
      "throw",
      "for"
    ],
    "options_hi": [
      "new",
      "===",
      "throw",
      "for"
    ],
    "answer_en": "===",
    "answer_hi": "===",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 867,
    "question_en": "Which superglobal stores POST data? (Example: $_SESSION)",
    "question_hi": "POST डेटा किस superglobal में संग्रहीत होता है? ($_SESSION)",
    "options_en": [
      "||",
      "$_SESSION",
      "json_encode()",
      "catch"
    ],
    "options_hi": [
      "||",
      "$_SESSION",
      "json_encode()",
      "catch"
    ],
    "answer_en": "$_SESSION",
    "answer_hi": "$_SESSION",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 868,
    "question_en": "Which function checks if a file exists? (Example: include_once())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि फ़ाइल मौजूद है? (include_once())",
    "options_en": [
      "include_once()",
      "function",
      "__LINE__",
      "array_search()"
    ],
    "options_hi": [
      "include_once()",
      "function",
      "__LINE__",
      "array_search()"
    ],
    "answer_en": "include_once()",
    "answer_hi": "include_once()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 869,
    "question_en": "Which function reads an entire file into a string? (Example: strpos())",
    "question_hi": "कौन-सा फ़ंक्शन पूरी फ़ाइल को एक स्ट्रिंग में पढ़ता है? (strpos())",
    "options_en": [
      "strpos()",
      "class",
      "file_put_contents()",
      "namespace"
    ],
    "options_hi": [
      "strpos()",
      "class",
      "file_put_contents()",
      "namespace"
    ],
    "answer_en": "strpos()",
    "answer_hi": "strpos()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 870,
    "question_en": "Which function opens a file or URL? (Example: mysqli_connect())",
    "question_hi": "कौन-सा फ़ंक्शन किसी फ़ाइल या URL को खोलता है? (mysqli_connect())",
    "options_en": [
      "beginTransaction()",
      "mysqli_connect()",
      "$_POST",
      "file_exists()"
    ],
    "options_hi": [
      "beginTransaction()",
      "mysqli_connect()",
      "$_POST",
      "file_exists()"
    ],
    "answer_en": "mysqli_connect()",
    "answer_hi": "mysqli_connect()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 871,
    "question_en": "Which function closes an open file pointer? (Example: array_unique())",
    "question_hi": "कौन-सा फ़ंक्शन खुली फ़ाइल pointer को बंद करता है? (array_unique())",
    "options_en": [
      "__FILE__",
      "__DIR__",
      "array_unique()",
      "is_file()"
    ],
    "options_hi": [
      "__FILE__",
      "__DIR__",
      "array_unique()",
      "is_file()"
    ],
    "answer_en": "array_unique()",
    "answer_hi": "array_unique()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 872,
    "question_en": "Which function writes data to a file? (Example: readdir())",
    "question_hi": "कौन-सा फ़ंक्शन फ़ाइल में डेटा लिखता है? (readdir())",
    "options_en": [
      "readdir()",
      "use",
      "const",
      "function"
    ],
    "options_hi": [
      "readdir()",
      "use",
      "const",
      "function"
    ],
    "answer_en": "readdir()",
    "answer_hi": "readdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 873,
    "question_en": "Which function splits a string by a delimiter into an array? (Example: mysqli_real_escape_string())",
    "question_hi": "कौन-सा फ़ंक्शन किसी delimiter से स्ट्रिंग को array में बाँटता है? (mysqli_real_escape_string())",
    "options_en": [
      "-",
      "__construct()",
      "__destruct()",
      "mysqli_real_escape_string()"
    ],
    "options_hi": [
      "-",
      "__construct()",
      "__destruct()",
      "mysqli_real_escape_string()"
    ],
    "answer_en": "mysqli_real_escape_string()",
    "answer_hi": "mysqli_real_escape_string()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 874,
    "question_en": "Which function joins array elements with a glue string? (Example: substr())",
    "question_hi": "कौन-सा फ़ंक्शन array के elements को एक string से जोड़ता है? (substr())",
    "options_en": [
      "*",
      ".",
      "substr()",
      "rollBack()"
    ],
    "options_hi": [
      "*",
      ".",
      "substr()",
      "rollBack()"
    ],
    "answer_en": "substr()",
    "answer_hi": "substr()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 875,
    "question_en": "Which function adds one or more elements to the end of an array? (Example: file_exists())",
    "question_hi": "कौन-सा फ़ंक्शन array के अंत में एक या अधिक तत्व जोड़ता है? (file_exists())",
    "options_en": [
      "array_keys()",
      "is_dir()",
      "setcookie()",
      "file_exists()"
    ],
    "options_hi": [
      "array_keys()",
      "is_dir()",
      "setcookie()",
      "file_exists()"
    ],
    "answer_en": "file_exists()",
    "answer_hi": "file_exists()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 876,
    "question_en": "Which function removes and returns the last element of an array? (Example: define())",
    "question_hi": "कौन-सा फ़ंक्शन array का अंतिम तत्व हटाता और लौटाता है? (define())",
    "options_en": [
      "define()",
      "new",
      "count()",
      "array_values()"
    ],
    "options_hi": [
      "define()",
      "new",
      "count()",
      "array_values()"
    ],
    "answer_en": "define()",
    "answer_hi": "define()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 877,
    "question_en": "Which function checks if a value exists in an array? (Example: array_reduce())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि कोई मान array में मौजूद है? (array_reduce())",
    "options_en": [
      "is_file()",
      "extends",
      "try",
      "array_reduce()"
    ],
    "options_hi": [
      "is_file()",
      "extends",
      "try",
      "array_reduce()"
    ],
    "answer_en": "array_reduce()",
    "answer_hi": "array_reduce()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 878,
    "question_en": "Which function returns the number of elements in an array? (Example: explode())",
    "question_hi": "कौन-सा फ़ंक्शन array में तत्वों की संख्या देता है? (explode())",
    "options_en": [
      "explode()",
      "namespace",
      "execute()",
      "!="
    ],
    "options_hi": [
      "explode()",
      "namespace",
      "execute()",
      "!="
    ],
    "answer_en": "explode()",
    "answer_hi": "explode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 879,
    "question_en": "Which keyword defines a function in PHP? (Example: return)",
    "question_hi": "PHP में फ़ंक्शन को परिभाषित करने के लिए कौन-सा keyword उपयोग होता है? (return)",
    "options_en": [
      "file_get_contents()",
      "public",
      "return",
      "catch"
    ],
    "options_hi": [
      "file_get_contents()",
      "public",
      "return",
      "catch"
    ],
    "answer_en": "return",
    "answer_hi": "return",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 880,
    "question_en": "Which keyword declares a class in PHP? (Example: global)",
    "question_hi": "PHP में class घोषित करने के लिए कौन-सा keyword उपयोग होता है? (global)",
    "options_en": [
      "array_keys()",
      "yield",
      "header()",
      "global"
    ],
    "options_hi": [
      "array_keys()",
      "yield",
      "header()",
      "global"
    ],
    "answer_en": "global",
    "answer_hi": "global",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 881,
    "question_en": "Which keyword is used to inherit from a parent class? (Example: finally)",
    "question_hi": "Parent class से inherit करने के लिए कौन-सा keyword उपयोग होता है? (finally)",
    "options_en": [
      "finally",
      "gettype()",
      "isset()",
      "closedir()"
    ],
    "options_hi": [
      "finally",
      "gettype()",
      "isset()",
      "closedir()"
    ],
    "answer_en": "finally",
    "answer_hi": "finally",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 882,
    "question_en": "Which magic constant returns the full path and filename of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल का पूरा path और filename लौटाता है?",
    "options_en": [
      "prepare()",
      "__FILE__",
      "for",
      "json_encode()"
    ],
    "options_hi": [
      "prepare()",
      "__FILE__",
      "for",
      "json_encode()"
    ],
    "answer_en": "__FILE__",
    "answer_hi": "__FILE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 883,
    "question_en": "Which magic constant returns the directory of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल की directory लौटाता है?",
    "options_en": [
      "__DIR__",
      "array_values()",
      "array_map()",
      "__destruct()"
    ],
    "options_hi": [
      "__DIR__",
      "array_values()",
      "array_map()",
      "__destruct()"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 884,
    "question_en": "Which function starts a session in PHP? (Example: explode())",
    "question_hi": "PHP में session शुरू करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (explode())",
    "options_en": [
      "explode()",
      "substr()",
      "array_search()",
      "array_merge()"
    ],
    "options_hi": [
      "explode()",
      "substr()",
      "array_search()",
      "array_merge()"
    ],
    "answer_en": "explode()",
    "answer_hi": "explode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 885,
    "question_en": "Which function destroys a session? (Example: trim())",
    "question_hi": "कौन-सा फ़ंक्शन session को नष्ट करता है? (trim())",
    "options_en": [
      "sort()",
      "__DIR__",
      "const",
      "trim()"
    ],
    "options_hi": [
      "sort()",
      "__DIR__",
      "const",
      "trim()"
    ],
    "answer_en": "trim()",
    "answer_hi": "trim()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 886,
    "question_en": "Which function sets a cookie? (Example: define())",
    "question_hi": "कौन-सा फ़ंक्शन cookie सेट करता है? (define())",
    "options_en": [
      "define()",
      "??",
      "array_reduce()",
      "mysqli_query()"
    ],
    "options_hi": [
      "define()",
      "??",
      "array_reduce()",
      "mysqli_query()"
    ],
    "answer_en": "define()",
    "answer_hi": "define()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 887,
    "question_en": "Which function sends a raw HTTP header? (Example: array_search())",
    "question_hi": "कौन-सा फ़ंक्शन raw HTTP header भेजता है? (array_search())",
    "options_en": [
      "beginTransaction()",
      "__destruct()",
      "extends",
      "array_search()"
    ],
    "options_hi": [
      "beginTransaction()",
      "__destruct()",
      "extends",
      "array_search()"
    ],
    "answer_en": "array_search()",
    "answer_hi": "array_search()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 888,
    "question_en": "Which function connects to MySQL using mysqli extension? (Example: date())",
    "question_hi": "mysqli के साथ MySQL से कनेक्ट करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (date())",
    "options_en": [
      "__DIR__",
      "date()",
      "file_exists()",
      "str_replace()"
    ],
    "options_hi": [
      "__DIR__",
      "date()",
      "file_exists()",
      "str_replace()"
    ],
    "answer_en": "date()",
    "answer_hi": "date()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 889,
    "question_en": "Which PHP extension offers a database abstraction layer (PDO)?",
    "question_hi": "कौन-सा extension database abstraction layer (PDO) प्रदान करता है?",
    "options_en": [
      "array_search()",
      "array_unshift()",
      "array_reduce()",
      "PDO"
    ],
    "options_hi": [
      "array_search()",
      "array_unshift()",
      "array_reduce()",
      "PDO"
    ],
    "answer_en": "PDO",
    "answer_hi": "PDO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 890,
    "question_en": "Which PDO method prepares a statement for execution?",
    "question_hi": "PDO में किस method से statement prepare किया जाता है?",
    "options_en": [
      "||",
      "prepare()",
      "__construct()",
      "interface"
    ],
    "options_hi": [
      "||",
      "prepare()",
      "__construct()",
      "interface"
    ],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 891,
    "question_en": "Which PDO method executes a prepared statement?",
    "question_hi": "PDO में किस method से prepared statement execute किया जाता है?",
    "options_en": [
      "-",
      "array_push()",
      "require()",
      "execute()"
    ],
    "options_hi": [
      "-",
      "array_push()",
      "require()",
      "execute()"
    ],
    "answer_en": "execute()",
    "answer_hi": "execute()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 892,
    "question_en": "Which PDO method begins a transaction?",
    "question_hi": "PDO में transaction शुरू करने के लिए कौन-सा method उपयोग होता है?",
    "options_en": [
      "array_shift()",
      "opendir()",
      "array_unshift()",
      "beginTransaction()"
    ],
    "options_hi": [
      "array_shift()",
      "opendir()",
      "array_unshift()",
      "beginTransaction()"
    ],
    "answer_en": "beginTransaction()",
    "answer_hi": "beginTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 893,
    "question_en": "Which function securely hashes passwords?",
    "question_hi": "पासवर्ड को सुरक्षित रूप से hash करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": [
      "prepare()",
      "password_hash()",
      "commit()",
      "time()"
    ],
    "options_hi": [
      "prepare()",
      "password_hash()",
      "commit()",
      "time()"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 894,
    "question_en": "Which function verifies a password against a hash?",
    "question_hi": "कौन-सा फ़ंक्शन पासवर्ड को hash के खिलाफ सत्यापित करता है?",
    "options_en": [
      "password_hash()",
      "include()",
      "include_once()",
      "password_verify()"
    ],
    "options_hi": [
      "password_hash()",
      "include()",
      "include_once()",
      "password_verify()"
    ],
    "answer_en": "password_verify()",
    "answer_hi": "password_verify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 895,
    "question_en": "Which function returns the type of a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल का प्रकार बताता है?",
    "options_en": [
      ">=",
      "<",
      "continue",
      "gettype()"
    ],
    "options_hi": [
      ">=",
      "<",
      "continue",
      "gettype()"
    ],
    "answer_en": "gettype()",
    "answer_hi": "gettype()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 896,
    "question_en": "Which function prints human-readable information about a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल की human-readable जानकारी दिखाता है?",
    "options_en": [
      "print_r()",
      "$GLOBALS",
      "is_dir()",
      "<="
    ],
    "options_hi": [
      "print_r()",
      "$GLOBALS",
      "is_dir()",
      "<="
    ],
    "answer_en": "print_r()",
    "answer_hi": "print_r()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 897,
    "question_en": "Which function dumps information about a variable with type and value?",
    "question_hi": "कौन-सा फ़ंक्शन वैरिएबल के प्रकार और मान सहित जानकारी दिखाता है?",
    "options_en": [
      ".",
      "var_dump()",
      "file_exists()",
      "throw"
    ],
    "options_hi": [
      ".",
      "var_dump()",
      "file_exists()",
      "throw"
    ],
    "answer_en": "var_dump()",
    "answer_hi": "var_dump()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 898,
    "question_en": "Which construct includes a file and generates a fatal error if missing?",
    "question_hi": "कौन-सा construct फ़ाइल शामिल करता है और यदि फ़ाइल गायब हो तो fatal error देता है?",
    "options_en": [
      "require()",
      "prepare()",
      "print",
      "strlen()"
    ],
    "options_hi": [
      "require()",
      "prepare()",
      "print",
      "strlen()"
    ],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 899,
    "question_en": "Which construct includes a file only once?",
    "question_hi": "कौन-सा construct फ़ाइल को केवल एक बार include करता है?",
    "options_en": [
      "gettype()",
      "include_once()",
      "json_decode()",
      "use"
    ],
    "options_hi": [
      "gettype()",
      "include_once()",
      "json_decode()",
      "use"
    ],
    "answer_en": "include_once()",
    "answer_hi": "include_once()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 900,
    "question_en": "Which operator suppresses errors in PHP?",
    "question_hi": "PHP में errors suppress करने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": [
      "@",
      "global",
      "$GLOBALS",
      "?:"
    ],
    "options_hi": [
      "@",
      "global",
      "$GLOBALS",
      "?:"
    ],
    "answer_en": "@",
    "answer_hi": "@",
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