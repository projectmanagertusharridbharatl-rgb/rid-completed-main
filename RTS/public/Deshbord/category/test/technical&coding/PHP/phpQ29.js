const questions = [
  {
    "num": 801,
    "question_en": "Which magic constant returns the directory of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल की directory लौटाता है?",
    "options_en": [
      "$_POST",
      "?:",
      "__DIR__",
      "explode()"
    ],
    "options_hi": [
      "$_POST",
      "?:",
      "__DIR__",
      "explode()"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 802,
    "question_en": "Which function starts a session in PHP? (Example: array_keys())",
    "question_hi": "PHP में session शुरू करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (array_keys())",
    "options_en": [
      "catch",
      "array_keys()",
      ".",
      "$_COOKIE"
    ],
    "options_hi": [
      "catch",
      "array_keys()",
      ".",
      "$_COOKIE"
    ],
    "answer_en": "array_keys()",
    "answer_hi": "array_keys()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 803,
    "question_en": "Which function destroys a session? (Example: password_hash())",
    "question_hi": "कौन-सा फ़ंक्शन session को नष्ट करता है? (password_hash())",
    "options_en": [
      "password_hash()",
      "/",
      "+",
      "define()"
    ],
    "options_hi": [
      "password_hash()",
      "/",
      "+",
      "define()"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 804,
    "question_en": "Which function sets a cookie? (Example: array_slice())",
    "question_hi": "कौन-सा फ़ंक्शन cookie सेट करता है? (array_slice())",
    "options_en": [
      ".",
      "unset",
      "htmlspecialchars()",
      "array_slice()"
    ],
    "options_hi": [
      ".",
      "unset",
      "htmlspecialchars()",
      "array_slice()"
    ],
    "answer_en": "array_slice()",
    "answer_hi": "array_slice()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 805,
    "question_en": "Which function sends a raw HTTP header? (Example: header())",
    "question_hi": "कौन-सा फ़ंक्शन raw HTTP header भेजता है? (header())",
    "options_en": [
      "implements",
      "count()",
      "*",
      "header()"
    ],
    "options_hi": [
      "implements",
      "count()",
      "*",
      "header()"
    ],
    "answer_en": "header()",
    "answer_hi": "header()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 806,
    "question_en": "Which function connects to MySQL using mysqli extension? (Example: array_search())",
    "question_hi": "mysqli के साथ MySQL से कनेक्ट करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (array_search())",
    "options_en": [
      "array_map()",
      "<=>",
      "return",
      "array_search()"
    ],
    "options_hi": [
      "array_map()",
      "<=>",
      "return",
      "array_search()"
    ],
    "answer_en": "array_search()",
    "answer_hi": "array_search()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 807,
    "question_en": "Which PHP extension offers a database abstraction layer (PDO)?",
    "question_hi": "कौन-सा extension database abstraction layer (PDO) प्रदान करता है?",
    "options_en": [
      "do-while",
      "PDO",
      "isset()",
      "require()"
    ],
    "options_hi": [
      "do-while",
      "PDO",
      "isset()",
      "require()"
    ],
    "answer_en": "PDO",
    "answer_hi": "PDO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 808,
    "question_en": "Which PDO method prepares a statement for execution?",
    "question_hi": "PDO में किस method से statement prepare किया जाता है?",
    "options_en": [
      "prepare()",
      "$_GET",
      ".",
      "final"
    ],
    "options_hi": [
      "prepare()",
      "$_GET",
      ".",
      "final"
    ],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 809,
    "question_en": "Which PDO method executes a prepared statement?",
    "question_hi": "PDO में किस method से prepared statement execute किया जाता है?",
    "options_en": [
      "$_GET",
      "execute()",
      "protected",
      "header()"
    ],
    "options_hi": [
      "$_GET",
      "execute()",
      "protected",
      "header()"
    ],
    "answer_en": "execute()",
    "answer_hi": "execute()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 810,
    "question_en": "Which PDO method begins a transaction?",
    "question_hi": "PDO में transaction शुरू करने के लिए कौन-सा method उपयोग होता है?",
    "options_en": [
      "class",
      "beginTransaction()",
      "for",
      "mysqli_real_escape_string()"
    ],
    "options_hi": [
      "class",
      "beginTransaction()",
      "for",
      "mysqli_real_escape_string()"
    ],
    "answer_en": "beginTransaction()",
    "answer_hi": "beginTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 811,
    "question_en": "Which function securely hashes passwords?",
    "question_hi": "पासवर्ड को सुरक्षित रूप से hash करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": [
      "closedir()",
      "||",
      "json_decode()",
      "password_hash()"
    ],
    "options_hi": [
      "closedir()",
      "||",
      "json_decode()",
      "password_hash()"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 812,
    "question_en": "Which function verifies a password against a hash?",
    "question_hi": "कौन-सा फ़ंक्शन पासवर्ड को hash के खिलाफ सत्यापित करता है?",
    "options_en": [
      "count()",
      "password_verify()",
      "date()",
      "catch"
    ],
    "options_hi": [
      "count()",
      "password_verify()",
      "date()",
      "catch"
    ],
    "answer_en": "password_verify()",
    "answer_hi": "password_verify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 813,
    "question_en": "Which function returns the type of a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल का प्रकार बताता है?",
    "options_en": [
      "%",
      "commit()",
      "gettype()",
      "$_FILES"
    ],
    "options_hi": [
      "%",
      "commit()",
      "gettype()",
      "$_FILES"
    ],
    "answer_en": "gettype()",
    "answer_hi": "gettype()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 814,
    "question_en": "Which function prints human-readable information about a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल की human-readable जानकारी दिखाता है?",
    "options_en": [
      "$_GET",
      "array_unique()",
      "print_r()",
      "array_values()"
    ],
    "options_hi": [
      "$_GET",
      "array_unique()",
      "print_r()",
      "array_values()"
    ],
    "answer_en": "print_r()",
    "answer_hi": "print_r()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 815,
    "question_en": "Which function dumps information about a variable with type and value?",
    "question_hi": "कौन-सा फ़ंक्शन वैरिएबल के प्रकार और मान सहित जानकारी दिखाता है?",
    "options_en": [
      "var_dump()",
      "strlen()",
      "opendir()",
      "PDO::__construct()"
    ],
    "options_hi": [
      "var_dump()",
      "strlen()",
      "opendir()",
      "PDO::__construct()"
    ],
    "answer_en": "var_dump()",
    "answer_hi": "var_dump()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 816,
    "question_en": "Which construct includes a file and generates a fatal error if missing?",
    "question_hi": "कौन-सा construct फ़ाइल शामिल करता है और यदि फ़ाइल गायब हो तो fatal error देता है?",
    "options_en": [
      "$_COOKIE",
      "array_values()",
      "require()",
      "$_REQUEST"
    ],
    "options_hi": [
      "$_COOKIE",
      "array_values()",
      "require()",
      "$_REQUEST"
    ],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 817,
    "question_en": "Which construct includes a file only once?",
    "question_hi": "कौन-सा construct फ़ाइल को केवल एक बार include करता है?",
    "options_en": [
      "throw",
      "include_once()",
      "/",
      "implements"
    ],
    "options_hi": [
      "throw",
      "include_once()",
      "/",
      "implements"
    ],
    "answer_en": "include_once()",
    "answer_hi": "include_once()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 818,
    "question_en": "Which operator suppresses errors in PHP?",
    "question_hi": "PHP में errors suppress करने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": [
      "@",
      "is_file()",
      "define()",
      "array_unshift()"
    ],
    "options_hi": [
      "@",
      "is_file()",
      "define()",
      "array_unshift()"
    ],
    "answer_en": "@",
    "answer_hi": "@",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 819,
    "question_en": "Which operator is the null coalescing operator introduced in PHP 7?",
    "question_hi": "PHP 7 में पेश किया गया null coalescing operator कौन-सा है?",
    "options_en": [
      "array_unshift()",
      "unlink()",
      "is_file()",
      "??"
    ],
    "options_hi": [
      "array_unshift()",
      "unlink()",
      "is_file()",
      "??"
    ],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 820,
    "question_en": "Which operator is the spaceship operator for three-way comparison?",
    "question_hi": "तीन-तरफा तुलना के लिए spaceship operator कौन-सा है?",
    "options_en": [
      "isset",
      "<=>",
      "$_POST",
      "finally"
    ],
    "options_hi": [
      "isset",
      "<=>",
      "$_POST",
      "finally"
    ],
    "answer_en": "<=>",
    "answer_hi": "<=>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 821,
    "question_en": "Which PHP function returns the length of a string? (Example: explode())",
    "question_hi": "PHP में स्ट्रिंग की लंबाई किस फ़ंक्शन से मिलती है? (explode())",
    "options_en": [
      "__DIR__",
      "explode()",
      "is_file()",
      "unlink()"
    ],
    "options_hi": [
      "__DIR__",
      "explode()",
      "is_file()",
      "unlink()"
    ],
    "answer_en": "explode()",
    "answer_hi": "explode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 822,
    "question_en": "Which function finds the position of the first occurrence of a substring? (Example: continue)",
    "question_hi": "कौन-सा फ़ंक्शन किसी सबस्ट्रिंग के पहले occurrence की स्थिति देता है? (continue)",
    "options_en": [
      "continue",
      "htmlspecialchars()",
      "var_dump()",
      "array_push()"
    ],
    "options_hi": [
      "continue",
      "htmlspecialchars()",
      "var_dump()",
      "array_push()"
    ],
    "answer_en": "continue",
    "answer_hi": "continue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 823,
    "question_en": "Which function returns part of a string? (Example: count())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग का हिस्सा लौटाता है? (count())",
    "options_en": [
      "strlen()",
      "__construct()",
      "count()",
      "new"
    ],
    "options_hi": [
      "strlen()",
      "__construct()",
      "count()",
      "new"
    ],
    "answer_en": "count()",
    "answer_hi": "count()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 824,
    "question_en": "Which function removes whitespace from both ends of a string? (Example: str_replace())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग के दोनों सिरों से whitespace हटाता है? (str_replace())",
    "options_en": [
      "str_replace()",
      "array_values()",
      "time()",
      "-"
    ],
    "options_hi": [
      "str_replace()",
      "array_values()",
      "time()",
      "-"
    ],
    "answer_en": "str_replace()",
    "answer_hi": "str_replace()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 825,
    "question_en": "Which operator concatenates strings in PHP? (Example: !=)",
    "question_hi": "PHP में स्ट्रिंग जोड़ने के लिए कौन-सा operator उपयोग होता है? (!=)",
    "options_en": [
      "!=",
      "mkdir()",
      "sort()",
      "prepare()"
    ],
    "options_hi": [
      "!=",
      "mkdir()",
      "sort()",
      "prepare()"
    ],
    "answer_en": "!=",
    "answer_hi": "!=",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 826,
    "question_en": "Which superglobal stores POST data? (Example: $_SERVER)",
    "question_hi": "POST डेटा किस superglobal में संग्रहीत होता है? ($_SERVER)",
    "options_en": [
      "array_slice()",
      "break",
      "in_array()",
      "$_SERVER"
    ],
    "options_hi": [
      "array_slice()",
      "break",
      "in_array()",
      "$_SERVER"
    ],
    "answer_en": "$_SERVER",
    "answer_hi": "$_SERVER",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 827,
    "question_en": "Which function checks if a file exists? (Example: opendir())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि फ़ाइल मौजूद है? (opendir())",
    "options_en": [
      "opendir()",
      "execute()",
      "__LINE__",
      "$_REQUEST"
    ],
    "options_hi": [
      "opendir()",
      "execute()",
      "__LINE__",
      "$_REQUEST"
    ],
    "answer_en": "opendir()",
    "answer_hi": "opendir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 828,
    "question_en": "Which function reads an entire file into a string? (Example: is_dir())",
    "question_hi": "कौन-सा फ़ंक्शन पूरी फ़ाइल को एक स्ट्रिंग में पढ़ता है? (is_dir())",
    "options_en": [
      "||",
      "is_dir()",
      "@",
      "<"
    ],
    "options_hi": [
      "||",
      "is_dir()",
      "@",
      "<"
    ],
    "answer_en": "is_dir()",
    "answer_hi": "is_dir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 829,
    "question_en": "Which function opens a file or URL? (Example: fclose())",
    "question_hi": "कौन-सा फ़ंक्शन किसी फ़ाइल या URL को खोलता है? (fclose())",
    "options_en": [
      "session_destroy()",
      "$GLOBALS",
      "fclose()",
      "is_dir()"
    ],
    "options_hi": [
      "session_destroy()",
      "$GLOBALS",
      "fclose()",
      "is_dir()"
    ],
    "answer_en": "fclose()",
    "answer_hi": "fclose()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 830,
    "question_en": "Which function closes an open file pointer? (Example: fclose())",
    "question_hi": "कौन-सा फ़ंक्शन खुली फ़ाइल pointer को बंद करता है? (fclose())",
    "options_en": [
      "fclose()",
      "array_keys()",
      "class",
      "session_destroy()"
    ],
    "options_hi": [
      "fclose()",
      "array_keys()",
      "class",
      "session_destroy()"
    ],
    "answer_en": "fclose()",
    "answer_hi": "fclose()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 831,
    "question_en": "Which function writes data to a file? (Example: fwrite())",
    "question_hi": "कौन-सा फ़ंक्शन फ़ाइल में डेटा लिखता है? (fwrite())",
    "options_en": [
      "$GLOBALS",
      "extends",
      "unlink()",
      "fwrite()"
    ],
    "options_hi": [
      "$GLOBALS",
      "extends",
      "unlink()",
      "fwrite()"
    ],
    "answer_en": "fwrite()",
    "answer_hi": "fwrite()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 832,
    "question_en": "Which function splits a string by a delimiter into an array? (Example: array_keys())",
    "question_hi": "कौन-सा फ़ंक्शन किसी delimiter से स्ट्रिंग को array में बाँटता है? (array_keys())",
    "options_en": [
      "unlink()",
      "break",
      "use",
      "array_keys()"
    ],
    "options_hi": [
      "unlink()",
      "break",
      "use",
      "array_keys()"
    ],
    "answer_en": "array_keys()",
    "answer_hi": "array_keys()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 833,
    "question_en": "Which function joins array elements with a glue string? (Example: array_pop())",
    "question_hi": "कौन-सा फ़ंक्शन array के elements को एक string से जोड़ता है? (array_pop())",
    "options_en": [
      "array_merge()",
      "$_SESSION",
      "array_pop()",
      "array_shift()"
    ],
    "options_hi": [
      "array_merge()",
      "$_SESSION",
      "array_pop()",
      "array_shift()"
    ],
    "answer_en": "array_pop()",
    "answer_hi": "array_pop()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 834,
    "question_en": "Which function adds one or more elements to the end of an array? (Example: while)",
    "question_hi": "कौन-सा फ़ंक्शन array के अंत में एक या अधिक तत्व जोड़ता है? (while)",
    "options_en": [
      "array_slice()",
      "while",
      "<",
      "const"
    ],
    "options_hi": [
      "array_slice()",
      "while",
      "<",
      "const"
    ],
    "answer_en": "while",
    "answer_hi": "while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 835,
    "question_en": "Which function removes and returns the last element of an array? (Example: asort())",
    "question_hi": "कौन-सा फ़ंक्शन array का अंतिम तत्व हटाता और लौटाता है? (asort())",
    "options_en": [
      "asort()",
      "$_SERVER",
      "phpversion()",
      "array_values()"
    ],
    "options_hi": [
      "asort()",
      "$_SERVER",
      "phpversion()",
      "array_values()"
    ],
    "answer_en": "asort()",
    "answer_hi": "asort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 836,
    "question_en": "Which function checks if a value exists in an array? (Example: phpinfo())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि कोई मान array में मौजूद है? (phpinfo())",
    "options_en": [
      "phpinfo()",
      "throw",
      "global",
      "try"
    ],
    "options_hi": [
      "phpinfo()",
      "throw",
      "global",
      "try"
    ],
    "answer_en": "phpinfo()",
    "answer_hi": "phpinfo()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 837,
    "question_en": "Which function returns the number of elements in an array? (Example: array_unshift())",
    "question_hi": "कौन-सा फ़ंक्शन array में तत्वों की संख्या देता है? (array_unshift())",
    "options_en": [
      "try",
      "ksort()",
      "array_unshift()",
      "commit()"
    ],
    "options_hi": [
      "try",
      "ksort()",
      "array_unshift()",
      "commit()"
    ],
    "answer_en": "array_unshift()",
    "answer_hi": "array_unshift()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 838,
    "question_en": "Which keyword defines a function in PHP? (Example: finally)",
    "question_hi": "PHP में फ़ंक्शन को परिभाषित करने के लिए कौन-सा keyword उपयोग होता है? (finally)",
    "options_en": [
      "explode()",
      "finally",
      "!==",
      "mysqli_query()"
    ],
    "options_hi": [
      "explode()",
      "finally",
      "!==",
      "mysqli_query()"
    ],
    "answer_en": "finally",
    "answer_hi": "finally",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 839,
    "question_en": "Which keyword declares a class in PHP? (Example: finally)",
    "question_hi": "PHP में class घोषित करने के लिए कौन-सा keyword उपयोग होता है? (finally)",
    "options_en": [
      "rollBack()",
      "finally",
      "catch",
      "print_r()"
    ],
    "options_hi": [
      "rollBack()",
      "finally",
      "catch",
      "print_r()"
    ],
    "answer_en": "finally",
    "answer_hi": "finally",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 840,
    "question_en": "Which keyword is used to inherit from a parent class? (Example: finally)",
    "question_hi": "Parent class से inherit करने के लिए कौन-सा keyword उपयोग होता है? (finally)",
    "options_en": [
      "finally",
      "implements",
      "setcookie()",
      "opendir()"
    ],
    "options_hi": [
      "finally",
      "implements",
      "setcookie()",
      "opendir()"
    ],
    "answer_en": "finally",
    "answer_hi": "finally",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 841,
    "question_en": "Which magic constant returns the full path and filename of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल का पूरा path और filename लौटाता है?",
    "options_en": [
      "array_unshift()",
      "function",
      "__FILE__",
      "array_keys()"
    ],
    "options_hi": [
      "array_unshift()",
      "function",
      "__FILE__",
      "array_keys()"
    ],
    "answer_en": "__FILE__",
    "answer_hi": "__FILE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 842,
    "question_en": "Which magic constant returns the directory of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल की directory लौटाता है?",
    "options_en": [
      "$_SERVER",
      "array_push()",
      "__DIR__",
      "echo"
    ],
    "options_hi": [
      "$_SERVER",
      "array_push()",
      "__DIR__",
      "echo"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 843,
    "question_en": "Which function starts a session in PHP? (Example: define())",
    "question_hi": "PHP में session शुरू करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (define())",
    "options_en": [
      "$GLOBALS",
      "define()",
      "require_once()",
      "namespace"
    ],
    "options_hi": [
      "$GLOBALS",
      "define()",
      "require_once()",
      "namespace"
    ],
    "answer_en": "define()",
    "answer_hi": "define()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 844,
    "question_en": "Which function destroys a session? (Example: password_verify())",
    "question_hi": "कौन-सा फ़ंक्शन session को नष्ट करता है? (password_verify())",
    "options_en": [
      "password_verify()",
      "throw",
      "===",
      "commit()"
    ],
    "options_hi": [
      "password_verify()",
      "throw",
      "===",
      "commit()"
    ],
    "answer_en": "password_verify()",
    "answer_hi": "password_verify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 845,
    "question_en": "Which function sets a cookie? (Example: count())",
    "question_hi": "कौन-सा फ़ंक्शन cookie सेट करता है? (count())",
    "options_en": [
      "microtime()",
      "count()",
      "session_destroy()",
      "||"
    ],
    "options_hi": [
      "microtime()",
      "count()",
      "session_destroy()",
      "||"
    ],
    "answer_en": "count()",
    "answer_hi": "count()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 846,
    "question_en": "Which function sends a raw HTTP header? (Example: __DIR__)",
    "question_hi": "कौन-सा फ़ंक्शन raw HTTP header भेजता है? (__DIR__)",
    "options_en": [
      "__DIR__",
      "strlen()",
      "array_shift()",
      "public"
    ],
    "options_hi": [
      "__DIR__",
      "strlen()",
      "array_shift()",
      "public"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 847,
    "question_en": "Which function connects to MySQL using mysqli extension? (Example: array_keys())",
    "question_hi": "mysqli के साथ MySQL से कनेक्ट करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (array_keys())",
    "options_en": [
      "array_keys()",
      "beginTransaction()",
      "fread()",
      "$_ENV"
    ],
    "options_hi": [
      "array_keys()",
      "beginTransaction()",
      "fread()",
      "$_ENV"
    ],
    "answer_en": "array_keys()",
    "answer_hi": "array_keys()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 848,
    "question_en": "Which PHP extension offers a database abstraction layer (PDO)?",
    "question_hi": "कौन-सा extension database abstraction layer (PDO) प्रदान करता है?",
    "options_en": [
      "array_push()",
      "PDO",
      "gettype()",
      "str_replace()"
    ],
    "options_hi": [
      "array_push()",
      "PDO",
      "gettype()",
      "str_replace()"
    ],
    "answer_en": "PDO",
    "answer_hi": "PDO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 849,
    "question_en": "Which PDO method prepares a statement for execution?",
    "question_hi": "PDO में किस method से statement prepare किया जाता है?",
    "options_en": [
      "execute()",
      "prepare()",
      "require_once()",
      "=="
    ],
    "options_hi": [
      "execute()",
      "prepare()",
      "require_once()",
      "=="
    ],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 850,
    "question_en": "Which PDO method executes a prepared statement?",
    "question_hi": "PDO में किस method से prepared statement execute किया जाता है?",
    "options_en": [
      "array_push()",
      "PDO::__construct()",
      "password_hash()",
      "execute()"
    ],
    "options_hi": [
      "array_push()",
      "PDO::__construct()",
      "password_hash()",
      "execute()"
    ],
    "answer_en": "execute()",
    "answer_hi": "execute()",
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