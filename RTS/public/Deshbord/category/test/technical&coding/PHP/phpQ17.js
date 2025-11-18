const questions = [
  {
    "num": 151,
    "question_en": "Which PHP extension offers a database abstraction layer (PDO)?",
    "question_hi": "कौन-सा extension database abstraction layer (PDO) प्रदान करता है?",
    "options_en": [
      "__construct()",
      "array_search()",
      "__LINE__",
      "PDO"
    ],
    "options_hi": [
      "__construct()",
      "array_search()",
      "__LINE__",
      "PDO"
    ],
    "answer_en": "PDO",
    "answer_hi": "PDO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 152,
    "question_en": "Which PDO method prepares a statement for execution?",
    "question_hi": "PDO में किस method से statement prepare किया जाता है?",
    "options_en": [
      "prepare()",
      "fopen()",
      "opendir()",
      "+"
    ],
    "options_hi": [
      "prepare()",
      "fopen()",
      "opendir()",
      "+"
    ],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 153,
    "question_en": "Which PDO method executes a prepared statement?",
    "question_hi": "PDO में किस method से prepared statement execute किया जाता है?",
    "options_en": [
      "finally",
      "session_destroy()",
      "execute()",
      "??"
    ],
    "options_hi": [
      "finally",
      "session_destroy()",
      "execute()",
      "??"
    ],
    "answer_en": "execute()",
    "answer_hi": "execute()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 154,
    "question_en": "Which PDO method begins a transaction?",
    "question_hi": "PDO में transaction शुरू करने के लिए कौन-सा method उपयोग होता है?",
    "options_en": [
      "beginTransaction()",
      "$_FILES",
      "static",
      "extends"
    ],
    "options_hi": [
      "beginTransaction()",
      "$_FILES",
      "static",
      "extends"
    ],
    "answer_en": "beginTransaction()",
    "answer_hi": "beginTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 155,
    "question_en": "Which function securely hashes passwords?",
    "question_hi": "पासवर्ड को सुरक्षित रूप से hash करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": [
      "password_hash()",
      "mkdir()",
      "for",
      "__FILE__"
    ],
    "options_hi": [
      "password_hash()",
      "mkdir()",
      "for",
      "__FILE__"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 156,
    "question_en": "Which function verifies a password against a hash?",
    "question_hi": "कौन-सा फ़ंक्शन पासवर्ड को hash के खिलाफ सत्यापित करता है?",
    "options_en": [
      "password_verify()",
      "substr()",
      "continue",
      "implements"
    ],
    "options_hi": [
      "password_verify()",
      "substr()",
      "continue",
      "implements"
    ],
    "answer_en": "password_verify()",
    "answer_hi": "password_verify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 157,
    "question_en": "Which function returns the type of a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल का प्रकार बताता है?",
    "options_en": [
      "prepare()",
      "gettype()",
      "isset",
      "throw"
    ],
    "options_hi": [
      "prepare()",
      "gettype()",
      "isset",
      "throw"
    ],
    "answer_en": "gettype()",
    "answer_hi": "gettype()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 158,
    "question_en": "Which function prints human-readable information about a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल की human-readable जानकारी दिखाता है?",
    "options_en": [
      "eval()",
      "die()",
      "$_FILES",
      "print_r()"
    ],
    "options_hi": [
      "eval()",
      "die()",
      "$_FILES",
      "print_r()"
    ],
    "answer_en": "print_r()",
    "answer_hi": "print_r()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 159,
    "question_en": "Which function dumps information about a variable with type and value?",
    "question_hi": "कौन-सा फ़ंक्शन वैरिएबल के प्रकार और मान सहित जानकारी दिखाता है?",
    "options_en": [
      "var_dump()",
      "throw",
      "strlen()",
      "implements"
    ],
    "options_hi": [
      "var_dump()",
      "throw",
      "strlen()",
      "implements"
    ],
    "answer_en": "var_dump()",
    "answer_hi": "var_dump()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 160,
    "question_en": "Which construct includes a file and generates a fatal error if missing?",
    "question_hi": "कौन-सा construct फ़ाइल शामिल करता है और यदि फ़ाइल गायब हो तो fatal error देता है?",
    "options_en": [
      "require()",
      "!=",
      "PDO::__construct()",
      ">="
    ],
    "options_hi": [
      "require()",
      "!=",
      "PDO::__construct()",
      ">="
    ],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 161,
    "question_en": "Which construct includes a file only once?",
    "question_hi": "कौन-सा construct फ़ाइल को केवल एक बार include करता है?",
    "options_en": [
      "strlen()",
      "throw",
      "mysqli_fetch_assoc()",
      "include_once()"
    ],
    "options_hi": [
      "strlen()",
      "throw",
      "mysqli_fetch_assoc()",
      "include_once()"
    ],
    "answer_en": "include_once()",
    "answer_hi": "include_once()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 162,
    "question_en": "Which operator suppresses errors in PHP?",
    "question_hi": "PHP में errors suppress करने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": [
      "print_r()",
      "implode()",
      "@",
      "$_SESSION"
    ],
    "options_hi": [
      "print_r()",
      "implode()",
      "@",
      "$_SESSION"
    ],
    "answer_en": "@",
    "answer_hi": "@",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 163,
    "question_en": "Which operator is the null coalescing operator introduced in PHP 7?",
    "question_hi": "PHP 7 में पेश किया गया null coalescing operator कौन-सा है?",
    "options_en": [
      "??",
      "var_dump()",
      "*",
      "@"
    ],
    "options_hi": [
      "??",
      "var_dump()",
      "*",
      "@"
    ],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 164,
    "question_en": "Which operator is the spaceship operator for three-way comparison?",
    "question_hi": "तीन-तरफा तुलना के लिए spaceship operator कौन-सा है?",
    "options_en": [
      "try",
      "array_search()",
      "array_shift()",
      "<=>"
    ],
    "options_hi": [
      "try",
      "array_search()",
      "array_shift()",
      "<=>"
    ],
    "answer_en": "<=>",
    "answer_hi": "<=>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 165,
    "question_en": "Which PHP function returns the length of a string? (Example: setcookie())",
    "question_hi": "PHP में स्ट्रिंग की लंबाई किस फ़ंक्शन से मिलती है? (setcookie())",
    "options_en": [
      "array_keys()",
      "setcookie()",
      "*",
      "htmlspecialchars()"
    ],
    "options_hi": [
      "array_keys()",
      "setcookie()",
      "*",
      "htmlspecialchars()"
    ],
    "answer_en": "setcookie()",
    "answer_hi": "setcookie()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 166,
    "question_en": "Which function finds the position of the first occurrence of a substring? (Example: mysqli_query())",
    "question_hi": "कौन-सा फ़ंक्शन किसी सबस्ट्रिंग के पहले occurrence की स्थिति देता है? (mysqli_query())",
    "options_en": [
      "$_COOKIE",
      "mysqli_query()",
      "$_POST",
      ">="
    ],
    "options_hi": [
      "$_COOKIE",
      "mysqli_query()",
      "$_POST",
      ">="
    ],
    "answer_en": "mysqli_query()",
    "answer_hi": "mysqli_query()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 167,
    "question_en": "Which function returns part of a string? (Example: implode())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग का हिस्सा लौटाता है? (implode())",
    "options_en": [
      "implode()",
      "readdir()",
      "!",
      "throw"
    ],
    "options_hi": [
      "implode()",
      "readdir()",
      "!",
      "throw"
    ],
    "answer_en": "implode()",
    "answer_hi": "implode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 168,
    "question_en": "Which function removes whitespace from both ends of a string? (Example: array_keys())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग के दोनों सिरों से whitespace हटाता है? (array_keys())",
    "options_en": [
      "$_FILES",
      "array_keys()",
      ".",
      "print"
    ],
    "options_hi": [
      "$_FILES",
      "array_keys()",
      ".",
      "print"
    ],
    "answer_en": "array_keys()",
    "answer_hi": "array_keys()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 169,
    "question_en": "Which operator concatenates strings in PHP? (Example: *)",
    "question_hi": "PHP में स्ट्रिंग जोड़ने के लिए कौन-सा operator उपयोग होता है? (*)",
    "options_en": [
      "*",
      "break",
      "$_ENV",
      "try"
    ],
    "options_hi": [
      "*",
      "break",
      "$_ENV",
      "try"
    ],
    "answer_en": "*",
    "answer_hi": "*",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 170,
    "question_en": "Which superglobal stores POST data? (Example: $GLOBALS)",
    "question_hi": "POST डेटा किस superglobal में संग्रहीत होता है? ($GLOBALS)",
    "options_en": [
      "$GLOBALS",
      "mysqli_connect()",
      "use",
      "__destruct()"
    ],
    "options_hi": [
      "$GLOBALS",
      "mysqli_connect()",
      "use",
      "__destruct()"
    ],
    "answer_en": "$GLOBALS",
    "answer_hi": "$GLOBALS",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 171,
    "question_en": "Which function checks if a file exists? (Example: session_destroy())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि फ़ाइल मौजूद है? (session_destroy())",
    "options_en": [
      "use",
      "session_destroy()",
      "array_slice()",
      "setcookie()"
    ],
    "options_hi": [
      "use",
      "session_destroy()",
      "array_slice()",
      "setcookie()"
    ],
    "answer_en": "session_destroy()",
    "answer_hi": "session_destroy()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 172,
    "question_en": "Which function reads an entire file into a string? (Example: implode())",
    "question_hi": "कौन-सा फ़ंक्शन पूरी फ़ाइल को एक स्ट्रिंग में पढ़ता है? (implode())",
    "options_en": [
      "*",
      "implode()",
      "const",
      "ksort()"
    ],
    "options_hi": [
      "*",
      "implode()",
      "const",
      "ksort()"
    ],
    "answer_en": "implode()",
    "answer_hi": "implode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 173,
    "question_en": "Which function opens a file or URL? (Example: array_filter())",
    "question_hi": "कौन-सा फ़ंक्शन किसी फ़ाइल या URL को खोलता है? (array_filter())",
    "options_en": [
      "array_filter()",
      "count()",
      "array_unshift()",
      "gettype()"
    ],
    "options_hi": [
      "array_filter()",
      "count()",
      "array_unshift()",
      "gettype()"
    ],
    "answer_en": "array_filter()",
    "answer_hi": "array_filter()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 174,
    "question_en": "Which function closes an open file pointer? (Example: yield)",
    "question_hi": "कौन-सा फ़ंक्शन खुली फ़ाइल pointer को बंद करता है? (yield)",
    "options_en": [
      "yield",
      "array_pop()",
      "readdir()",
      "$_ENV"
    ],
    "options_hi": [
      "yield",
      "array_pop()",
      "readdir()",
      "$_ENV"
    ],
    "answer_en": "yield",
    "answer_hi": "yield",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 175,
    "question_en": "Which function writes data to a file? (Example: continue)",
    "question_hi": "कौन-सा फ़ंक्शन फ़ाइल में डेटा लिखता है? (continue)",
    "options_en": [
      "isset()",
      "catch",
      "phpversion()",
      "continue"
    ],
    "options_hi": [
      "isset()",
      "catch",
      "phpversion()",
      "continue"
    ],
    "answer_en": "continue",
    "answer_hi": "continue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 176,
    "question_en": "Which function splits a string by a delimiter into an array? (Example: fclose())",
    "question_hi": "कौन-सा फ़ंक्शन किसी delimiter से स्ट्रिंग को array में बाँटता है? (fclose())",
    "options_en": [
      "fclose()",
      "$_REQUEST",
      "password_hash()",
      "array_unshift()"
    ],
    "options_hi": [
      "fclose()",
      "$_REQUEST",
      "password_hash()",
      "array_unshift()"
    ],
    "answer_en": "fclose()",
    "answer_hi": "fclose()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 177,
    "question_en": "Which function joins array elements with a glue string? (Example: commit())",
    "question_hi": "कौन-सा फ़ंक्शन array के elements को एक string से जोड़ता है? (commit())",
    "options_en": [
      "strpos()",
      "commit()",
      "const",
      "<"
    ],
    "options_hi": [
      "strpos()",
      "commit()",
      "const",
      "<"
    ],
    "answer_en": "commit()",
    "answer_hi": "commit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 178,
    "question_en": "Which function adds one or more elements to the end of an array? (Example: substr())",
    "question_hi": "कौन-सा फ़ंक्शन array के अंत में एक या अधिक तत्व जोड़ता है? (substr())",
    "options_en": [
      "var_dump()",
      "$_GET",
      "==",
      "substr()"
    ],
    "options_hi": [
      "var_dump()",
      "$_GET",
      "==",
      "substr()"
    ],
    "answer_en": "substr()",
    "answer_hi": "substr()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 179,
    "question_en": "Which function removes and returns the last element of an array? (Example: __DIR__)",
    "question_hi": "कौन-सा फ़ंक्शन array का अंतिम तत्व हटाता और लौटाता है? (__DIR__)",
    "options_en": [
      "isset",
      "prepare()",
      "__DIR__",
      "static"
    ],
    "options_hi": [
      "isset",
      "prepare()",
      "__DIR__",
      "static"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 180,
    "question_en": "Which function checks if a value exists in an array? (Example: time())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि कोई मान array में मौजूद है? (time())",
    "options_en": [
      "time()",
      "namespace",
      "*",
      "@"
    ],
    "options_hi": [
      "time()",
      "namespace",
      "*",
      "@"
    ],
    "answer_en": "time()",
    "answer_hi": "time()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 181,
    "question_en": "Which function returns the number of elements in an array? (Example: password_hash())",
    "question_hi": "कौन-सा फ़ंक्शन array में तत्वों की संख्या देता है? (password_hash())",
    "options_en": [
      "eval()",
      "*",
      "PDO::__construct()",
      "password_hash()"
    ],
    "options_hi": [
      "eval()",
      "*",
      "PDO::__construct()",
      "password_hash()"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 182,
    "question_en": "Which keyword defines a function in PHP? (Example: new)",
    "question_hi": "PHP में फ़ंक्शन को परिभाषित करने के लिए कौन-सा keyword उपयोग होता है? (new)",
    "options_en": [
      "function",
      "new",
      "json_decode()",
      "implode()"
    ],
    "options_hi": [
      "function",
      "new",
      "json_decode()",
      "implode()"
    ],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 183,
    "question_en": "Which keyword declares a class in PHP? (Example: extends)",
    "question_hi": "PHP में class घोषित करने के लिए कौन-सा keyword उपयोग होता है? (extends)",
    "options_en": [
      "extends",
      "$_COOKIE",
      "rollBack()",
      "implode()"
    ],
    "options_hi": [
      "extends",
      "$_COOKIE",
      "rollBack()",
      "implode()"
    ],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 184,
    "question_en": "Which keyword is used to inherit from a parent class? (Example: extends)",
    "question_hi": "Parent class से inherit करने के लिए कौन-सा keyword उपयोग होता है? (extends)",
    "options_en": [
      "array_splice()",
      "===",
      "extends",
      "%"
    ],
    "options_hi": [
      "array_splice()",
      "===",
      "extends",
      "%"
    ],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 185,
    "question_en": "Which magic constant returns the full path and filename of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल का पूरा path और filename लौटाता है?",
    "options_en": [
      "in_array()",
      "__FILE__",
      "strlen()",
      "do-while"
    ],
    "options_hi": [
      "in_array()",
      "__FILE__",
      "strlen()",
      "do-while"
    ],
    "answer_en": "__FILE__",
    "answer_hi": "__FILE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 186,
    "question_en": "Which magic constant returns the directory of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल की directory लौटाता है?",
    "options_en": [
      "die()",
      "is_null()",
      "&&",
      "__DIR__"
    ],
    "options_hi": [
      "die()",
      "is_null()",
      "&&",
      "__DIR__"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 187,
    "question_en": "Which function starts a session in PHP? (Example: array_pop())",
    "question_hi": "PHP में session शुरू करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (array_pop())",
    "options_en": [
      "phpversion()",
      "is_dir()",
      "array_pop()",
      "unset"
    ],
    "options_hi": [
      "phpversion()",
      "is_dir()",
      "array_pop()",
      "unset"
    ],
    "answer_en": "array_pop()",
    "answer_hi": "array_pop()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 188,
    "question_en": "Which function destroys a session? (Example: session_destroy())",
    "question_hi": "कौन-सा फ़ंक्शन session को नष्ट करता है? (session_destroy())",
    "options_en": [
      "&&",
      "array_search()",
      "session_destroy()",
      "!"
    ],
    "options_hi": [
      "&&",
      "array_search()",
      "session_destroy()",
      "!"
    ],
    "answer_en": "session_destroy()",
    "answer_hi": "session_destroy()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 189,
    "question_en": "Which function sets a cookie? (Example: in_array())",
    "question_hi": "कौन-सा फ़ंक्शन cookie सेट करता है? (in_array())",
    "options_en": [
      "password_hash()",
      "try",
      "class",
      "in_array()"
    ],
    "options_hi": [
      "password_hash()",
      "try",
      "class",
      "in_array()"
    ],
    "answer_en": "in_array()",
    "answer_hi": "in_array()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 190,
    "question_en": "Which function sends a raw HTTP header? (Example: substr())",
    "question_hi": "कौन-सा फ़ंक्शन raw HTTP header भेजता है? (substr())",
    "options_en": [
      "substr()",
      "is_file()",
      "htmlentities()",
      "/"
    ],
    "options_hi": [
      "substr()",
      "is_file()",
      "htmlentities()",
      "/"
    ],
    "answer_en": "substr()",
    "answer_hi": "substr()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 191,
    "question_en": "Which function connects to MySQL using mysqli extension? (Example: readdir())",
    "question_hi": "mysqli के साथ MySQL से कनेक्ट करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (readdir())",
    "options_en": [
      "===",
      "__FILE__",
      "readdir()",
      "count()"
    ],
    "options_hi": [
      "===",
      "__FILE__",
      "readdir()",
      "count()"
    ],
    "answer_en": "readdir()",
    "answer_hi": "readdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 192,
    "question_en": "Which PHP extension offers a database abstraction layer (PDO)?",
    "question_hi": "कौन-सा extension database abstraction layer (PDO) प्रदान करता है?",
    "options_en": [
      "$_POST",
      "PDO",
      "*",
      "foreach"
    ],
    "options_hi": [
      "$_POST",
      "PDO",
      "*",
      "foreach"
    ],
    "answer_en": "PDO",
    "answer_hi": "PDO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 193,
    "question_en": "Which PDO method prepares a statement for execution?",
    "question_hi": "PDO में किस method से statement prepare किया जाता है?",
    "options_en": [
      "substr()",
      "prepare()",
      "fread()",
      "htmlentities()"
    ],
    "options_hi": [
      "substr()",
      "prepare()",
      "fread()",
      "htmlentities()"
    ],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 194,
    "question_en": "Which PDO method executes a prepared statement?",
    "question_hi": "PDO में किस method से prepared statement execute किया जाता है?",
    "options_en": [
      "strlen()",
      "isset",
      "execute()",
      "echo"
    ],
    "options_hi": [
      "strlen()",
      "isset",
      "execute()",
      "echo"
    ],
    "answer_en": "execute()",
    "answer_hi": "execute()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 195,
    "question_en": "Which PDO method begins a transaction?",
    "question_hi": "PDO में transaction शुरू करने के लिए कौन-सा method उपयोग होता है?",
    "options_en": [
      "global",
      "beginTransaction()",
      "array_unshift()",
      "require_once()"
    ],
    "options_hi": [
      "global",
      "beginTransaction()",
      "array_unshift()",
      "require_once()"
    ],
    "answer_en": "beginTransaction()",
    "answer_hi": "beginTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 196,
    "question_en": "Which function securely hashes passwords?",
    "question_hi": "पासवर्ड को सुरक्षित रूप से hash करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": [
      "__construct()",
      "asort()",
      "password_hash()",
      "do-while"
    ],
    "options_hi": [
      "__construct()",
      "asort()",
      "password_hash()",
      "do-while"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 197,
    "question_en": "Which function verifies a password against a hash?",
    "question_hi": "कौन-सा फ़ंक्शन पासवर्ड को hash के खिलाफ सत्यापित करता है?",
    "options_en": [
      "str_replace()",
      "password_verify()",
      "__DIR__",
      "mysqli_real_escape_string()"
    ],
    "options_hi": [
      "str_replace()",
      "password_verify()",
      "__DIR__",
      "mysqli_real_escape_string()"
    ],
    "answer_en": "password_verify()",
    "answer_hi": "password_verify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 198,
    "question_en": "Which function returns the type of a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल का प्रकार बताता है?",
    "options_en": [
      "explode()",
      "gettype()",
      "substr()",
      "rmdir()"
    ],
    "options_hi": [
      "explode()",
      "gettype()",
      "substr()",
      "rmdir()"
    ],
    "answer_en": "gettype()",
    "answer_hi": "gettype()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 199,
    "question_en": "Which function prints human-readable information about a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल की human-readable जानकारी दिखाता है?",
    "options_en": [
      "array_search()",
      "phpinfo()",
      "return",
      "print_r()"
    ],
    "options_hi": [
      "array_search()",
      "phpinfo()",
      "return",
      "print_r()"
    ],
    "answer_en": "print_r()",
    "answer_hi": "print_r()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 200,
    "question_en": "Which function dumps information about a variable with type and value?",
    "question_hi": "कौन-सा फ़ंक्शन वैरिएबल के प्रकार और मान सहित जानकारी दिखाता है?",
    "options_en": [
      "array_splice()",
      "$_POST",
      "var_dump()",
      "empty()"
    ],
    "options_hi": [
      "array_splice()",
      "$_POST",
      "var_dump()",
      "empty()"
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