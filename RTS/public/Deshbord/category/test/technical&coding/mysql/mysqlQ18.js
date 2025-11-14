const questions = [
 {
    "num": 1,
    "question_en": "What is the purpose of the 'CREATE USER' command in MySQL?",
    "question_hi": "MySQL में 'CREATE USER' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "CREATE USER",
      "CREATE TABLE",
      "GRANT",
      "FLUSH PRIVILEGES"
    ],
    "options_hi": [
      "CREATE USER",
      "CREATE TABLE",
      "GRANT",
      "FLUSH PRIVILEGES"
    ],
    "answer_en": "CREATE USER",
    "answer_hi": "CREATE USER",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the purpose of the 'DROP USER' command in MySQL?",
    "question_hi": "MySQL में 'DROP USER' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "DROP USER",
      "DELETE",
      "SELECT",
      "ALTER TABLE"
    ],
    "options_hi": [
      "DROP USER",
      "DELETE",
      "SELECT",
      "ALTER TABLE"
    ],
    "answer_en": "DROP USER",
    "answer_hi": "DROP USER",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "What is the purpose of the 'SET PASSWORD' command in MySQL?",
    "question_hi": "MySQL में 'SET PASSWORD' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "SET PASSWORD",
      "DELETE",
      "CREATE TABLE",
      "CREATE INDEX"
    ],
    "options_hi": [
      "SET PASSWORD",
      "DELETE",
      "CREATE TABLE",
      "CREATE INDEX"
    ],
    "answer_en": "SET PASSWORD",
    "answer_hi": "SET PASSWORD",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the purpose of the 'FLUSH PRIVILEGES' command in MySQL?",
    "question_hi": "MySQL में 'FLUSH PRIVILEGES' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "FLUSH PRIVILEGES",
      "CREATE INDEX",
      "DELETE",
      "DROP USER"
    ],
    "options_hi": [
      "FLUSH PRIVILEGES",
      "CREATE INDEX",
      "DELETE",
      "DROP USER"
    ],
    "answer_en": "FLUSH PRIVILEGES",
    "answer_hi": "FLUSH PRIVILEGES",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What kind of function is ROW_NUMBER() in SQL?",
    "question_hi": "SQL में ROW_NUMBER() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "ROW_NUMBER()",
      "NOW()",
      "LOWER()",
      "LAG()"
    ],
    "options_hi": [
      "ROW_NUMBER()",
      "NOW()",
      "LOWER()",
      "LAG()"
    ],
    "answer_en": "ROW_NUMBER()",
    "answer_hi": "ROW_NUMBER()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What kind of function is RANK() in SQL?",
    "question_hi": "SQL में RANK() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "RANK()",
      "JSON_OBJECT()",
      "NOW()",
      "DENSE_RANK()"
    ],
    "options_hi": [
      "RANK()",
      "JSON_OBJECT()",
      "NOW()",
      "DENSE_RANK()"
    ],
    "answer_en": "RANK()",
    "answer_hi": "RANK()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What kind of function is DENSE_RANK() in SQL?",
    "question_hi": "SQL में DENSE_RANK() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "DENSE_RANK()",
      "RANK()",
      "COALESCE()",
      "ROW_NUMBER()"
    ],
    "options_hi": [
      "DENSE_RANK()",
      "RANK()",
      "COALESCE()",
      "ROW_NUMBER()"
    ],
    "answer_en": "DENSE_RANK()",
    "answer_hi": "DENSE_RANK()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What kind of function is NTILE() in SQL?",
    "question_hi": "SQL में NTILE() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "NTILE()",
      "UPPER()",
      "ROW_NUMBER()",
      "CHAR_LENGTH()"
    ],
    "options_hi": [
      "NTILE()",
      "UPPER()",
      "ROW_NUMBER()",
      "CHAR_LENGTH()"
    ],
    "answer_en": "NTILE()",
    "answer_hi": "NTILE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What kind of function is LAG() in SQL?",
    "question_hi": "SQL में LAG() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "LAG()",
      "CURDATE()",
      "ROW_NUMBER()",
      "CONCAT()"
    ],
    "options_hi": [
      "LAG()",
      "CURDATE()",
      "ROW_NUMBER()",
      "CONCAT()"
    ],
    "answer_en": "LAG()",
    "answer_hi": "LAG()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What kind of function is LEAD() in SQL?",
    "question_hi": "SQL में LEAD() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "LEAD()",
      "DATEDIFF()",
      "RANK()",
      "LAG()"
    ],
    "options_hi": [
      "LEAD()",
      "DATEDIFF()",
      "RANK()",
      "LAG()"
    ],
    "answer_en": "LEAD()",
    "answer_hi": "LEAD()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What kind of function is FIRST_VALUE() in SQL?",
    "question_hi": "SQL में FIRST_VALUE() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "FIRST_VALUE()",
      "LEAD()",
      "RANK()",
      "IFNULL()"
    ],
    "options_hi": [
      "FIRST_VALUE()",
      "LEAD()",
      "RANK()",
      "IFNULL()"
    ],
    "answer_en": "FIRST_VALUE()",
    "answer_hi": "FIRST_VALUE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What kind of function is LAST_VALUE() in SQL?",
    "question_hi": "SQL में LAST_VALUE() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "LAST_VALUE()",
      "JSON_OBJECT()",
      "RANK()",
      "MAX()"
    ],
    "options_hi": [
      "LAST_VALUE()",
      "JSON_OBJECT()",
      "RANK()",
      "MAX()"
    ],
    "answer_en": "LAST_VALUE()",
    "answer_hi": "LAST_VALUE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which SQL statement is used to perform the operation: SELECT?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: SELECT?",
    "options_en": [
      "COUNT()",
      "SELECT",
      "LENGTH()",
      "JSON_OBJECT()"
    ],
    "options_hi": [
      "COUNT()",
      "SELECT",
      "LENGTH()",
      "JSON_OBJECT()"
    ],
    "answer_en": "SELECT",
    "answer_hi": "SELECT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which SQL statement is used to perform the operation: INSERT?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: INSERT?",
    "options_en": [
      "JSON_OBJECT()",
      "CREATE TABLE",
      "HAVING",
      "INSERT"
    ],
    "options_hi": [
      "JSON_OBJECT()",
      "CREATE TABLE",
      "HAVING",
      "INSERT"
    ],
    "answer_en": "INSERT",
    "answer_hi": "INSERT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which SQL statement is used to perform the operation: UPDATE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: UPDATE?",
    "options_en": [
      "UPDATE",
      "CREATE VIEW",
      "JOIN",
      "IFNULL()"
    ],
    "options_hi": [
      "UPDATE",
      "CREATE VIEW",
      "JOIN",
      "IFNULL()"
    ],
    "answer_en": "UPDATE",
    "answer_hi": "UPDATE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which SQL statement is used to perform the operation: DELETE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: DELETE?",
    "options_en": [
      "DELETE",
      "DROP INDEX",
      "BLOB",
      "AVG()"
    ],
    "options_hi": [
      "DELETE",
      "DROP INDEX",
      "BLOB",
      "AVG()"
    ],
    "answer_en": "DELETE",
    "answer_hi": "DELETE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which SQL statement is used to perform the operation: TRUNCATE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: TRUNCATE?",
    "options_en": [
      "TRUNCATE",
      "UPPER()",
      "VARCHAR(255)",
      "DECIMAL(10,2)"
    ],
    "options_hi": [
      "TRUNCATE",
      "UPPER()",
      "VARCHAR(255)",
      "DECIMAL(10,2)"
    ],
    "answer_en": "TRUNCATE",
    "answer_hi": "TRUNCATE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which SQL statement is used to perform the operation: REPLACE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: REPLACE?",
    "options_en": [
      "JSON_ARRAY()",
      "REPLACE",
      "SELECT",
      "CURDATE()"
    ],
    "options_hi": [
      "JSON_ARRAY()",
      "REPLACE",
      "SELECT",
      "CURDATE()"
    ],
    "answer_en": "REPLACE",
    "answer_hi": "REPLACE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which SQL statement is used to perform the operation: CREATE TABLE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: CREATE TABLE?",
    "options_en": [
      "CREATE TABLE",
      "JSON_OBJECT()",
      "CONCAT()",
      "DROP TABLE"
    ],
    "options_hi": [
      "CREATE TABLE",
      "JSON_OBJECT()",
      "CONCAT()",
      "DROP TABLE"
    ],
    "answer_en": "CREATE TABLE",
    "answer_hi": "CREATE TABLE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which SQL statement is used to perform the operation: ALTER TABLE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: ALTER TABLE?",
    "options_en": [
      "DATETIME",
      "DELETE",
      "ALTER TABLE",
      "SELECT"
    ],
    "options_hi": [
      "DATETIME",
      "DELETE",
      "ALTER TABLE",
      "SELECT"
    ],
    "answer_en": "ALTER TABLE",
    "answer_hi": "ALTER TABLE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which SQL statement is used to perform the operation: DROP TABLE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: DROP TABLE?",
    "options_en": [
      "IFNULL()",
      "DROP TABLE",
      "CREATE FUNCTION",
      "DELETE"
    ],
    "options_hi": [
      "IFNULL()",
      "DROP TABLE",
      "CREATE FUNCTION",
      "DELETE"
    ],
    "answer_en": "DROP TABLE",
    "answer_hi": "DROP TABLE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which SQL statement is used to perform the operation: CREATE INDEX?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: CREATE INDEX?",
    "options_en": [
      "SUBSTRING()",
      "CREATE INDEX",
      "DROP TABLE",
      "INT"
    ],
    "options_hi": [
      "SUBSTRING()",
      "CREATE INDEX",
      "DROP TABLE",
      "INT"
    ],
    "answer_en": "CREATE INDEX",
    "answer_hi": "CREATE INDEX",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which SQL statement is used to perform the operation: DROP INDEX?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: DROP INDEX?",
    "options_en": [
      "SELECT",
      "DROP INDEX",
      "MIN()",
      "DATE_ADD()"
    ],
    "options_hi": [
      "SELECT",
      "DROP INDEX",
      "MIN()",
      "DATE_ADD()"
    ],
    "answer_en": "DROP INDEX",
    "answer_hi": "DROP INDEX",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which SQL statement is used to perform the operation: CREATE VIEW?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: CREATE VIEW?",
    "options_en": [
      "MIN()",
      "AVG()",
      "SELECT",
      "CREATE VIEW"
    ],
    "options_hi": [
      "MIN()",
      "AVG()",
      "SELECT",
      "CREATE VIEW"
    ],
    "answer_en": "CREATE VIEW",
    "answer_hi": "CREATE VIEW",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which SQL statement is used to perform the operation: CREATE PROCEDURE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: CREATE PROCEDURE?",
    "options_en": [
      "GROUP BY",
      "JSON_OBJECT()",
      "CREATE PROCEDURE",
      "VARCHAR(255)"
    ],
    "options_hi": [
      "GROUP BY",
      "JSON_OBJECT()",
      "CREATE PROCEDURE",
      "VARCHAR(255)"
    ],
    "answer_en": "CREATE PROCEDURE",
    "answer_hi": "CREATE PROCEDURE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which SQL statement is used to perform the operation: CREATE FUNCTION?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: CREATE FUNCTION?",
    "options_en": [
      "DATEDIFF()",
      "CHAR_LENGTH()",
      "MAX()",
      "CREATE FUNCTION"
    ],
    "options_hi": [
      "DATEDIFF()",
      "CHAR_LENGTH()",
      "MAX()",
      "CREATE FUNCTION"
    ],
    "answer_en": "CREATE FUNCTION",
    "answer_hi": "CREATE FUNCTION",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which clause is used for: WHERE?",
    "question_hi": "किस क्लॉज़ का उपयोग किया जाता है: WHERE?",
    "options_en": [
      "ON",
      "CHAR_LENGTH()",
      "DELETE",
      "WHERE"
    ],
    "options_hi": [
      "ON",
      "CHAR_LENGTH()",
      "DELETE",
      "WHERE"
    ],
    "answer_en": "WHERE",
    "answer_hi": "WHERE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which clause is used for: GROUP BY?",
    "question_hi": "किस क्लॉज़ का उपयोग किया जाता है: GROUP BY?",
    "options_en": [
      "CREATE VIEW",
      "COALESCE()",
      "UNION",
      "GROUP BY"
    ],
    "options_hi": [
      "CREATE VIEW",
      "COALESCE()",
      "UNION",
      "GROUP BY"
    ],
    "answer_en": "GROUP BY",
    "answer_hi": "GROUP BY",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which clause is used for: ORDER BY?",
    "question_hi": "किस क्लॉज़ का उपयोग किया जाता है: ORDER BY?",
    "options_en": [
      "DATE_SUB()",
      "ORDER BY",
      "ON",
      "IFNULL()"
    ],
    "options_hi": [
      "DATE_SUB()",
      "ORDER BY",
      "ON",
      "IFNULL()"
    ],
    "answer_en": "ORDER BY",
    "answer_hi": "ORDER BY",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which clause is used for: HAVING?",
    "question_hi": "किस क्लॉज़ का उपयोग किया जाता है: HAVING?",
    "options_en": [
      "ORDER BY",
      "CROSS JOIN",
      "HAVING",
      "JSON_ARRAY()"
    ],
    "options_hi": [
      "ORDER BY",
      "CROSS JOIN",
      "HAVING",
      "JSON_ARRAY()"
    ],
    "answer_en": "HAVING",
    "answer_hi": "HAVING",
    "attempted": false,
    "selected": ""
  },
  {
    "num":31,
    "question_en": "Which clause is used for: LIMIT?",
    "question_hi": "किस क्लॉज़ का उपयोग किया जाता है: LIMIT?",
    "options_en": [
      "LIMIT",
      "RIGHT JOIN",
      "SUM()",
      "DATEDIFF()"
    ],
    "options_hi": [
      "LIMIT",
      "RIGHT JOIN",
      "SUM()",
      "DATEDIFF()"
    ],
    "answer_en": "LIMIT",
    "answer_hi": "LIMIT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which clause is used for: JOIN?",
    "question_hi": "किस क्लॉज़ का उपयोग किया जाता है: JOIN?",
    "options_en": [
      "DATE_ADD()",
      "DATEDIFF()",
      "WHERE",
      "JOIN"
    ],
    "options_hi": [
      "DATE_ADD()",
      "DATEDIFF()",
      "WHERE",
      "JOIN"
    ],
    "answer_en": "JOIN",
    "answer_hi": "JOIN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which clause is used for: ON?",
    "question_hi": "किस क्लॉज़ का उपयोग किया जाता है: ON?",
    "options_en": [
      "MAX()",
      "INSERT",
      "ON",
      "RIGHT JOIN"
    ],
    "options_hi": [
      "MAX()",
      "INSERT",
      "ON",
      "RIGHT JOIN"
    ],
    "answer_en": "ON",
    "answer_hi": "ON",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which clause is used for: USING?",
    "question_hi": "किस क्लॉज़ का उपयोग किया जाता है: USING?",
    "options_en": [
      "SUM()",
      "CREATE INDEX",
      "USING",
      "RIGHT JOIN"
    ],
    "options_hi": [
      "SUM()",
      "CREATE INDEX",
      "USING",
      "RIGHT JOIN"
    ],
    "answer_en": "USING",
    "answer_hi": "USING",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which clause is used for: DISTINCT?",
    "question_hi": "किस क्लॉज़ का उपयोग किया जाता है: DISTINCT?",
    "options_en": [
      "SUM()",
      "CREATE INDEX",
      "DROP INDEX",
      "DISTINCT"
    ],
    "options_hi": [
      "SUM()",
      "CREATE INDEX",
      "DROP INDEX",
      "DISTINCT"
    ],
    "answer_en": "DISTINCT",
    "answer_hi": "DISTINCT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which clause is used for: UNION?",
    "question_hi": "किस क्लॉज़ का उपयोग किया जाता है: UNION?",
    "options_en": [
      "UNION",
      "LEFT JOIN",
      "DELETE",
      "RIGHT JOIN"
    ],
    "options_hi": [
      "UNION",
      "LEFT JOIN",
      "DELETE",
      "RIGHT JOIN"
    ],
    "answer_en": "UNION",
    "answer_hi": "UNION",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What does the INNER JOIN do in terms of result rows?",
    "question_hi": "INNER JOIN परिणाम पंक्तियों के संदर्भ में क्या करता है?",
    "options_en": [
      "LEFT JOIN",
      "INNER JOIN",
      "JOIN",
      "INSERT"
    ],
    "options_hi": [
      "LEFT JOIN",
      "INNER JOIN",
      "JOIN",
      "INSERT"
    ],
    "answer_en": "INNER JOIN",
    "answer_hi": "INNER JOIN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does the LEFT JOIN do in terms of result rows?",
    "question_hi": "LEFT JOIN परिणाम पंक्तियों के संदर्भ में क्या करता है?",
    "options_en": [
      "REPLACE",
      "CREATE INDEX",
      "RIGHT JOIN",
      "LEFT JOIN"
    ],
    "options_hi": [
      "REPLACE",
      "CREATE INDEX",
      "RIGHT JOIN",
      "LEFT JOIN"
    ],
    "answer_en": "LEFT JOIN",
    "answer_hi": "LEFT JOIN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What does the RIGHT JOIN do in terms of result rows?",
    "question_hi": "RIGHT JOIN परिणाम पंक्तियों के संदर्भ में क्या करता है?",
    "options_en": [
      "JOIN",
      "ALTER TABLE",
      "RIGHT JOIN",
      "CREATE VIEW"
    ],
    "options_hi": [
      "JOIN",
      "ALTER TABLE",
      "RIGHT JOIN",
      "CREATE VIEW"
    ],
    "answer_en": "RIGHT JOIN",
    "answer_hi": "RIGHT JOIN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What does the FULL JOIN do in terms of result rows?",
    "question_hi": "FULL JOIN परिणाम पंक्तियों के संदर्भ में क्या करता है?",
    "options_en": [
      "CREATE INDEX",
      "JOIN",
      "REPLACE",
      "FULL JOIN"
    ],
    "options_hi": [
      "CREATE INDEX",
      "JOIN",
      "REPLACE",
      "FULL JOIN"
    ],
    "answer_en": "FULL JOIN",
    "answer_hi": "FULL JOIN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What does the CROSS JOIN do in terms of result rows?",
    "question_hi": "CROSS JOIN परिणाम पंक्तियों के संदर्भ में क्या करता है?",
    "options_en": [
      "CROSS JOIN",
      "CREATE FUNCTION",
      "ORDER BY",
      "GROUP BY"
    ],
    "options_hi": [
      "CROSS JOIN",
      "CREATE FUNCTION",
      "ORDER BY",
      "GROUP BY"
    ],
    "answer_en": "CROSS JOIN",
    "answer_hi": "CROSS JOIN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the purpose of the MySQL function COUNT()?",
    "question_hi": "MySQL फ़ंक्शन COUNT() का उद्देश्य क्या है?",
    "options_en": [
      "NOW()",
      "CREATE VIEW",
      "LAG()",
      "COUNT()"
    ],
    "options_hi": [
      "NOW()",
      "CREATE VIEW",
      "LAG()",
      "COUNT()"
    ],
    "answer_en": "COUNT()",
    "answer_hi": "COUNT()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the purpose of the MySQL function SUM()?",
    "question_hi": "MySQL फ़ंक्शन SUM() का उद्देश्य क्या है?",
    "options_en": [
      "DECIMAL(10,2)",
      "CREATE FUNCTION",
      "DROP INDEX",
      "SUM()"
    ],
    "options_hi": [
      "DECIMAL(10,2)",
      "CREATE FUNCTION",
      "DROP INDEX",
      "SUM()"
    ],
    "answer_en": "SUM()",
    "answer_hi": "SUM()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the purpose of the MySQL function AVG()?",
    "question_hi": "MySQL फ़ंक्शन AVG() का उद्देश्य क्या है?",
    "options_en": [
      "AVG()",
      "CREATE VIEW",
      "UPDATE",
      "REPLACE"
    ],
    "options_hi": [
      "AVG()",
      "CREATE VIEW",
      "UPDATE",
      "REPLACE"
    ],
    "answer_en": "AVG()",
    "answer_hi": "AVG()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the purpose of the MySQL function MIN()?",
    "question_hi": "MySQL फ़ंक्शन MIN() का उद्देश्य क्या है?",
    "options_en": [
      "CURDATE()",
      "MIN()",
      "DATETIME",
      "DELETE"
    ],
    "options_hi": [
      "CURDATE()",
      "MIN()",
      "DATETIME",
      "DELETE"
    ],
    "answer_en": "MIN()",
    "answer_hi": "MIN()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the purpose of the MySQL function MAX()?",
    "question_hi": "MySQL फ़ंक्शन MAX() का उद्देश्य क्या है?",
    "options_en": [
      "DATE_SUB()",
      "CREATE VIEW",
      "MAX()",
      "INSERT"
    ],
    "options_hi": [
      "DATE_SUB()",
      "CREATE VIEW",
      "MAX()",
      "INSERT"
    ],
    "answer_en": "MAX()",
    "answer_hi": "MAX()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the purpose of the MySQL function NOW()?",
    "question_hi": "MySQL फ़ंक्शन NOW() का उद्देश्य क्या है?",
    "options_en": [
      "MAX()",
      "LAST_VALUE()",
      "CREATE VIEW",
      "NOW()"
    ],
    "options_hi": [
      "MAX()",
      "LAST_VALUE()",
      "CREATE VIEW",
      "NOW()"
    ],
    "answer_en": "NOW()",
    "answer_hi": "NOW()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the purpose of the MySQL function CURDATE()?",
    "question_hi": "MySQL फ़ंक्शन CURDATE() का उद्देश्य क्या है?",
    "options_en": [
      "ROW_NUMBER()",
      "CURDATE()",
      "SUBSTRING()",
      "DECIMAL(10,2)"
    ],
    "options_hi": [
      "ROW_NUMBER()",
      "CURDATE()",
      "SUBSTRING()",
      "DECIMAL(10,2)"
    ],
    "answer_en": "CURDATE()",
    "answer_hi": "CURDATE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the purpose of the MySQL function DATEDIFF()?",
    "question_hi": "MySQL फ़ंक्शन DATEDIFF() का उद्देश्य क्या है?",
    "options_en": [
      "UPDATE",
      "DATETIME",
      "DATEDIFF()",
      "CREATE PROCEDURE"
    ],
    "options_hi": [
      "UPDATE",
      "DATETIME",
      "DATEDIFF()",
      "CREATE PROCEDURE"
    ],
    "answer_en": "DATEDIFF()",
    "answer_hi": "DATEDIFF()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the purpose of the MySQL function DATE_ADD()?",
    "question_hi": "MySQL फ़ंक्शन DATE_ADD() का उद्देश्य क्या है?",
    "options_en": [
      "LOWER()",
      "DATE_ADD()",
      "CHAR_LENGTH()",
      "SUBSTRING()"
    ],
    "options_hi": [
      "LOWER()",
      "DATE_ADD()",
      "CHAR_LENGTH()",
      "SUBSTRING()"
    ],
    "answer_en": "DATE_ADD()",
    "answer_hi": "DATE_ADD()",
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