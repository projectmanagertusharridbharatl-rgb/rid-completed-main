const questions = [
  {
    "num":.1,
    "question_en": "What does the MySQL command 'SHOW STATUS' do?",
    "question_hi": "MySQL कमांड 'SHOW STATUS' क्या करता है?",
    "options_en": [
      "SHOW STATUS",
      "SELECT",
      "TRUNCATE",
      "CREATE VIEW"
    ],
    "options_hi": [
      "SHOW STATUS",
      "SELECT",
      "TRUNCATE",
      "CREATE VIEW"
    ],
    "answer_en": "SHOW STATUS",
    "answer_hi": "SHOW STATUS",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does the MySQL command 'SHOW PROCESSLIST' do?",
    "question_hi": "MySQL कमांड 'SHOW PROCESSLIST' क्या करता है?",
    "options_en": [
      "SHOW PROCESSLIST",
      "TRUNCATE",
      "CREATE FUNCTION",
      "DELETE"
    ],
    "options_hi": [
      "SHOW PROCESSLIST",
      "TRUNCATE",
      "CREATE FUNCTION",
      "DELETE"
    ],
    "answer_en": "SHOW PROCESSLIST",
    "answer_hi": "SHOW PROCESSLIST",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does the MySQL command 'SHOW VARIABLES' do?",
    "question_hi": "MySQL कमांड 'SHOW VARIABLES' क्या करता है?",
    "options_en": [
      "SHOW VARIABLES",
      "SHOW PROCESSLIST",
      "OPTIMIZE TABLE",
      "DROP TABLE"
    ],
    "options_hi": [
      "SHOW VARIABLES",
      "SHOW PROCESSLIST",
      "OPTIMIZE TABLE",
      "DROP TABLE"
    ],
    "answer_en": "SHOW VARIABLES",
    "answer_hi": "SHOW VARIABLES",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What does the MySQL command 'SHOW CREATE TABLE' do?",
    "question_hi": "MySQL कमांड 'SHOW CREATE TABLE' क्या करता है?",
    "options_en": [
      "SHOW CREATE TABLE",
      "CREATE INDEX",
      "CREATE FUNCTION",
      "SHOW STATUS"
    ],
    "options_hi": [
      "SHOW CREATE TABLE",
      "CREATE INDEX",
      "CREATE FUNCTION",
      "SHOW STATUS"
    ],
    "answer_en": "SHOW CREATE TABLE",
    "answer_hi": "SHOW CREATE TABLE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What does the MySQL command 'DESCRIBE' do?",
    "question_hi": "MySQL कमांड 'DESCRIBE' क्या करता है?",
    "options_en": [
      "DESCRIBE",
      "CREATE VIEW",
      "CREATE INDEX",
      "SHOW STATUS"
    ],
    "options_hi": [
      "DESCRIBE",
      "CREATE VIEW",
      "CREATE INDEX",
      "SHOW STATUS"
    ],
    "answer_en": "DESCRIBE",
    "answer_hi": "DESCRIBE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "In MySQL, what does 'Replication' relate to?",
    "question_hi": "MySQL में 'Replication' किससे संबंधित है?",
    "options_en": [
      "Replication",
      "Primary-Replica",
      "DESCRIBE",
      "EXPLAIN"
    ],
    "options_hi": [
      "Replication",
      "Primary-Replica",
      "DESCRIBE",
      "EXPLAIN"
    ],
    "answer_en": "Replication",
    "answer_hi": "Replication",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "In MySQL, what does 'Binary Log' relate to?",
    "question_hi": "MySQL में 'Binary Log' किससे संबंधित है?",
    "options_en": [
      "Binary Log",
      "EXPLAIN",
      "FLUSH",
      "OPTIMIZE TABLE"
    ],
    "options_hi": [
      "Binary Log",
      "EXPLAIN",
      "FLUSH",
      "OPTIMIZE TABLE"
    ],
    "answer_en": "Binary Log",
    "answer_hi": "Binary Log",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "In MySQL, what does 'GTID' relate to?",
    "question_hi": "MySQL में 'GTID' किससे संबंधित है?",
    "options_en": [
      "GTID",
      "Binary Log",
      "OPTIMIZE TABLE",
    ],
    "options_hi": [
      "GTID",
      "Binary Log",
      "OPTIMIZE TABLE",
      "FLUSH"
    ],
    "answer_en": "GTID",
    "answer_hi": "GTID",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "In MySQL, what does 'Change Data Capture' relate to?",
    "question_hi": "MySQL में 'Change Data Capture' किससे संबंधित है?",
    "options_en": [
      "Change Data Capture",
      "SHOW PROCESSLIST",
      "Primary-Replica",
      "OPTIMIZE TABLE"
    ],
    "options_hi": [
      "Change Data Capture",
      "SHOW PROCESSLIST",
      "Primary-Replica",
      "OPTIMIZE TABLE"
    ],
    "answer_en": "Change Data Capture",
    "answer_hi": "Change Data Capture",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "In MySQL, what does 'Master-Slave' relate to?",
    "question_hi": "MySQL में 'Master-Slave' किससे संबंधित है?",
    "options_en": [
      "Master-Slave",
      "ANALYZE",
      "GTID",
      "SHOW VARIABLES"
    ],
    "options_hi": [
      "Master-Slave",
      "ANALYZE",
      "GTID",
      "SHOW VARIABLES"
    ],
    "answer_en": "Master-Slave",
    "answer_hi": "Master-Slave",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "In MySQL, what does 'Primary-Replica' relate to?",
    "question_hi": "MySQL में 'Primary-Replica' किससे संबंधित है?",
    "options_en": [
      "Primary-Replica",
      "SHOW CREATE TABLE",
      "FLUSH",
      "Master-Slave"
    ],
    "options_hi": [
      "Primary-Replica",
      "SHOW CREATE TABLE",
      "FLUSH",
      "Master-Slave"
    ],
    "answer_en": "Primary-Replica",
    "answer_hi": "Primary-Replica",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the purpose of the 'GRANT' command in MySQL?",
    "question_hi": "MySQL में 'GRANT' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "GRANT",
      "CREATE PROCEDURE",
      "SELECT",
      "TRUNCATE"
    ],
    "options_hi": [
      "GRANT",
      "CREATE PROCEDURE",
      "SELECT",
      "TRUNCATE"
    ],
    "answer_en": "GRANT",
    "answer_hi": "GRANT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the purpose of the 'REVOKE' command in MySQL?",
    "question_hi": "MySQL में 'REVOKE' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "REVOKE",
      "ALTER TABLE",
      "TRUNCATE",
      "CREATE TABLE"
    ],
    "options_hi": [
      "REVOKE",
      "ALTER TABLE",
      "TRUNCATE",
      "CREATE TABLE"
    ],
    "answer_en": "REVOKE",
    "answer_hi": "REVOKE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the purpose of the 'CREATE USER' command in MySQL?",
    "question_hi": "MySQL में 'CREATE USER' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "CREATE USER",
      "CREATE PROCEDURE",
      "SET PASSWORD",
      "REVOKE"
    ],
    "options_hi": [
      "CREATE USER",
      "CREATE PROCEDURE",
      "SET PASSWORD",
      "REVOKE"
    ],
    "answer_en": "CREATE USER",
    "answer_hi": "CREATE USER",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the purpose of the 'DROP USER' command in MySQL?",
    "question_hi": "MySQL में 'DROP USER' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "DROP USER",
      "TRUNCATE",
      "DELETE",
      "SET PASSWORD"
    ],
    "options_hi": [
      "DROP USER",
      "TRUNCATE",
      "DELETE",
      "SET PASSWORD"
    ],
    "answer_en": "DROP USER",
    "answer_hi": "DROP USER",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the purpose of the 'SET PASSWORD' command in MySQL?",
    "question_hi": "MySQL में 'SET PASSWORD' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "SET PASSWORD",
      "DROP USER",
      "DELETE",
      "DROP INDEX"
    ],
    "options_hi": [
      "SET PASSWORD",
      "DROP USER",
      "DELETE",
      "DROP INDEX"
    ],
    "answer_en": "SET PASSWORD",
    "answer_hi": "SET PASSWORD",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the purpose of the 'FLUSH PRIVILEGES' command in MySQL?",
    "question_hi": "MySQL में 'FLUSH PRIVILEGES' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "FLUSH PRIVILEGES",
      "CREATE PROCEDURE",
      "DROP INDEX",
      "GRANT"
    ],
    "options_hi": [
      "FLUSH PRIVILEGES",
      "CREATE PROCEDURE",
      "DROP INDEX",
      "GRANT"
    ],
    "answer_en": "FLUSH PRIVILEGES",
    "answer_hi": "FLUSH PRIVILEGES",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What kind of function is ROW_NUMBER() in SQL?",
    "question_hi": "SQL में ROW_NUMBER() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "ROW_NUMBER()",
      "GROUP_CONCAT()",
      "CHAR_LENGTH()",
      "DATE_ADD()"
    ],
    "options_hi": [
      "ROW_NUMBER()",
      "GROUP_CONCAT()",
      "CHAR_LENGTH()",
      "DATE_ADD()"
    ],
    "answer_en": "ROW_NUMBER()",
    "answer_hi": "ROW_NUMBER()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What kind of function is RANK() in SQL?",
    "question_hi": "SQL में RANK() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "RANK()",
      "DATE_SUB()",
      "DENSE_RANK()",
      "CURDATE()"
    ],
    "options_hi": [
      "RANK()",
      "DATE_SUB()",
      "DENSE_RANK()",
      "CURDATE()"
    ],
    "answer_en": "RANK()",
    "answer_hi": "RANK()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What kind of function is DENSE_RANK() in SQL?",
    "question_hi": "SQL में DENSE_RANK() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "DENSE_RANK()",
      "FIRST_VALUE()",
      "ROW_NUMBER()",
      "NOW()"
    ],
    "options_hi": [
      "DENSE_RANK()",
      "FIRST_VALUE()",
      "ROW_NUMBER()",
      "NOW()"
    ],
    "answer_en": "DENSE_RANK()",
    "answer_hi": "DENSE_RANK()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What kind of function is NTILE() in SQL?",
    "question_hi": "SQL में NTILE() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "NTILE()",
      "ROW_NUMBER()",
      "CURDATE()",
      "DENSE_RANK()"
    ],
    "options_hi": [
      "NTILE()",
      "ROW_NUMBER()",
      "CURDATE()",
      "DENSE_RANK()"
    ],
    "answer_en": "NTILE()",
    "answer_hi": "NTILE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What kind of function is LAG() in SQL?",
    "question_hi": "SQL में LAG() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "LAG()",
      "SUBSTRING()",
      "MIN()",
      "MAX()"
    ],
    "options_hi": [
      "LAG()",
      "SUBSTRING()",
      "MIN()",
      "MAX()"
    ],
    "answer_en": "LAG()",
    "answer_hi": "LAG()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What kind of function is LEAD() in SQL?",
    "question_hi": "SQL में LEAD() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "LEAD()",
      "ROW_NUMBER()",
      "FIRST_VALUE()",
      "GROUP_CONCAT()"
    ],
    "options_hi": [
      "LEAD()",
      "ROW_NUMBER()",
      "FIRST_VALUE()",
      "GROUP_CONCAT()"
    ],
    "answer_en": "LEAD()",
    "answer_hi": "LEAD()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What kind of function is FIRST_VALUE() in SQL?",
    "question_hi": "SQL में FIRST_VALUE() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "FIRST_VALUE()",
      "JSON_OBJECT()",
      "RANK()",
      "CURDATE()"
    ],
    "options_hi": [
      "FIRST_VALUE()",
      "JSON_OBJECT()",
      "RANK()",
      "CURDATE()"
    ],
    "answer_en": "FIRST_VALUE()",
    "answer_hi": "FIRST_VALUE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What kind of function is LAST_VALUE() in SQL?",
    "question_hi": "SQL में LAST_VALUE() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "LAST_VALUE()",
      "SUM()",
      "IFNULL()",
      "MIN()"
    ],
    "options_hi": [
      "LAST_VALUE()",
      "SUM()",
      "IFNULL()",
      "MIN()"
    ],
    "answer_en": "LAST_VALUE()",
    "answer_hi": "LAST_VALUE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which SQL statement is used to perform the operation: SELECT?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: SELECT?",
    "options_en": [
      "ORDER BY",
      "SELECT",
      "TIMESTAMP",
      "CREATE FUNCTION"
    ],
    "options_hi": [
      "ORDER BY",
      "SELECT",
      "TIMESTAMP",
      "CREATE FUNCTION"
    ],
    "answer_en": "SELECT",
    "answer_hi": "SELECT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which SQL statement is used to perform the operation: INSERT?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: INSERT?",
    "options_en": [
      "CREATE VIEW",
      "WHERE",
      "DATE",
      "INSERT"
    ],
    "options_hi": [
      "CREATE VIEW",
      "WHERE",
      "DATE",
      "INSERT"
    ],
    "answer_en": "INSERT",
    "answer_hi": "INSERT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which SQL statement is used to perform the operation: UPDATE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: UPDATE?",
    "options_en": [
      "SUBSTRING()",
      "DATE",
      "ON",
      "UPDATE"
    ],
    "options_hi": [
      "SUBSTRING()",
      "DATE",
      "ON",
      "UPDATE"
    ],
    "answer_en": "UPDATE",
    "answer_hi": "UPDATE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which SQL statement is used to perform the operation: DELETE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: DELETE?",
    "options_en": [
      "MIN()",
      "DATE",
      "SUBSTRING()",
      "DELETE"
    ],
    "options_hi": [
      "MIN()",
      "DATE",
      "SUBSTRING()",
      "DELETE"
    ],
    "answer_en": "DELETE",
    "answer_hi": "DELETE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which SQL statement is used to perform the operation: TRUNCATE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: TRUNCATE?",
    "options_en": [
      "TRUNCATE",
      "GROUP BY",
      "DATE_SUB()",
      "CREATE FUNCTION"
    ],
    "options_hi": [
      "TRUNCATE",
      "GROUP BY",
      "DATE_SUB()",
      "CREATE FUNCTION"
    ],
    "answer_en": "TRUNCATE",
    "answer_hi": "TRUNCATE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which SQL statement is used to perform the operation: REPLACE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: REPLACE?",
    "options_en": [
      "REPLACE",
      "BLOB",
      "CREATE TABLE",
      "SUM()"
    ],
    "options_hi": [
      "REPLACE",
      "BLOB",
      "CREATE TABLE",
      "SUM()"
    ],
    "answer_en": "REPLACE",
    "answer_hi": "REPLACE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which SQL statement is used to perform the operation: CREATE TABLE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: CREATE TABLE?",
    "options_en": [
      "CREATE VIEW",
      "JSON_ARRAY()",
      "CREATE TABLE",
      "AVG()"
    ],
    "options_hi": [
      "CREATE VIEW",
      "JSON_ARRAY()",
      "CREATE TABLE",
      "AVG()"
    ],
    "answer_en": "CREATE TABLE",
    "answer_hi": "CREATE TABLE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which SQL statement is used to perform the operation: ALTER TABLE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: ALTER TABLE?",
    "options_en": [
      "JSON",
      "DECIMAL(10,2)",
      "ALTER TABLE",
      "DATETIME"
    ],
    "options_hi": [
      "JSON",
      "DECIMAL(10,2)",
      "ALTER TABLE",
      "DATETIME"
    ],
    "answer_en": "ALTER TABLE",
    "answer_hi": "ALTER TABLE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which SQL statement is used to perform the operation: DROP TABLE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: DROP TABLE?",
    "options_en": [
      "LOWER()",
      "DROP TABLE",
      "JSON_ARRAY()",
      "MIN()"
    ],
    "options_hi": [
      "LOWER()",
      "DROP TABLE",
      "JSON_ARRAY()",
      "MIN()"
    ],
    "answer_en": "DROP TABLE",
    "answer_hi": "DROP TABLE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which SQL statement is used to perform the operation: CREATE INDEX?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: CREATE INDEX?",
    "options_en": [
      "ON",
      "LENGTH()",
      "SUBSTRING()",
      "CREATE INDEX"
    ],
    "options_hi": [
      "ON",
      "LENGTH()",
      "SUBSTRING()",
      "CREATE INDEX"
    ],
    "answer_en": "CREATE INDEX",
    "answer_hi": "CREATE INDEX",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which SQL statement is used to perform the operation: DROP INDEX?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: DROP INDEX?",
    "options_en": [
      "DROP INDEX",
      "CHAR_LENGTH()",
      "INSERT",
      "UPPER()"
    ],
    "options_hi": [
      "DROP INDEX",
      "CHAR_LENGTH()",
      "INSERT",
      "UPPER()"
    ],
    "answer_en": "DROP INDEX",
    "answer_hi": "DROP INDEX",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which SQL statement is used to perform the operation: CREATE VIEW?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: CREATE VIEW?",
    "options_en": [
      "SUM()",
      "INT",
      "CREATE VIEW",
      "JSON_EXTRACT()"
    ],
    "options_hi": [
      "SUM()",
      "INT",
      "CREATE VIEW",
      "JSON_EXTRACT()"
    ],
    "answer_en": "CREATE VIEW",
    "answer_hi": "CREATE VIEW",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which SQL statement is used to perform the operation: CREATE PROCEDURE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: CREATE PROCEDURE?",
    "options_en": [
      "CREATE TABLE",
      "CREATE VIEW",
      "CREATE PROCEDURE",
      "WHERE"
    ],
    "options_hi": [
      "CREATE TABLE",
      "CREATE VIEW",
      "CREATE PROCEDURE",
      "WHERE"
    ],
    "answer_en": "CREATE PROCEDURE",
    "answer_hi": "CREATE PROCEDURE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which SQL statement is used to perform the operation: CREATE FUNCTION?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: CREATE FUNCTION?",
    "options_en": [
      "VARCHAR(255)",
      "COALESCE()",
      "CREATE FUNCTION",
      "COUNT()"
    ],
    "options_hi": [
      "VARCHAR(255)",
      "COALESCE()",
      "CREATE FUNCTION",
      "COUNT()"
    ],
    "answer_en": "CREATE FUNCTION",
    "answer_hi": "CREATE FUNCTION",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which clause is used for: WHERE?",
    "question_hi": "किस क्लॉज़ का उपयोग किया जाता है: WHERE?",
    "options_en": [
      "ALTER TABLE",
      "CONCAT()",
      "JSON_EXTRACT()",
      "WHERE"
    ],
    "options_hi": [
      "ALTER TABLE",
      "CONCAT()",
      "JSON_EXTRACT()",
      "WHERE"
    ],
    "answer_en": "WHERE",
    "answer_hi": "WHERE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which clause is used for: GROUP BY?",
    "question_hi": "किस क्लॉज़ का उपयोग किया जाता है: GROUP BY?",
    "options_en": [
      "GROUP BY",
      "INNER JOIN",
      "CREATE VIEW",
      "CREATE TABLE"
    ],
    "options_hi": [
      "GROUP BY",
      "INNER JOIN",
      "CREATE VIEW",
      "CREATE TABLE"
    ],
    "answer_en": "GROUP BY",
    "answer_hi": "GROUP BY",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which clause is used for: ORDER BY?",
    "question_hi": "किस क्लॉज़ का उपयोग किया जाता है: ORDER BY?",
    "options_en": [
      "INSERT",
      "ON",
      "ORDER BY",
      "ALTER TABLE"
    ],
    "options_hi": [
      "INSERT",
      "ON",
      "ORDER BY",
      "ALTER TABLE"
    ],
    "answer_en": "ORDER BY",
    "answer_hi": "ORDER BY",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which clause is used for: HAVING?",
    "question_hi": "किस क्लॉज़ का उपयोग किया जाता है: HAVING?",
    "options_en": [
      "NOW()",
      "HAVING",
      "TRUNCATE",
      "DATEDIFF()"
    ],
    "options_hi": [
      "NOW()",
      "HAVING",
      "TRUNCATE",
      "DATEDIFF()"
    ],
    "answer_en": "HAVING",
    "answer_hi": "HAVING",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which clause is used for: LIMIT?",
    "question_hi": "किस क्लॉज़ का उपयोग किया जाता है: LIMIT?",
    "options_en": [
      "LIMIT",
      "DISTINCT",
      "DATE_SUB()",
      "ORDER BY"
    ],
    "options_hi": [
      "LIMIT",
      "DISTINCT",
      "DATE_SUB()",
      "ORDER BY"
    ],
    "answer_en": "LIMIT",
    "answer_hi": "LIMIT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which clause is used for: JOIN?",
    "question_hi": "किस क्लॉज़ का उपयोग किया जाता है: JOIN?",
    "options_en": [
      "JOIN",
      "ON",
      "WHERE",
      "GROUP_CONCAT()"
    ],
    "options_hi": [
      "JOIN",
      "ON",
      "WHERE",
      "GROUP_CONCAT()"
    ],
    "answer_en": "JOIN",
    "answer_hi": "JOIN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which clause is used for: ON?",
    "question_hi": "किस क्लॉज़ का उपयोग किया जाता है: ON?",
    "options_en": [
      "DROP INDEX",
      "LENGTH()",
      "ON",
      "DATE_ADD()"
    ],
    "options_hi": [
      "DROP INDEX",
      "LENGTH()",
      "ON",
      "DATE_ADD()"
    ],
    "answer_en": "ON",
    "answer_hi": "ON",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which clause is used for: USING?",
    "question_hi": "किस क्लॉज़ का उपयोग किया जाता है: USING?",
    "options_en": [
      "USING",
      "GROUP_CONCAT()",
      "WHERE",
      "IFNULL()"
    ],
    "options_hi": [
      "USING",
      "GROUP_CONCAT()",
      "WHERE",
      "IFNULL()"
    ],
    "answer_en": "USING",
    "answer_hi": "USING",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which clause is used for: DISTINCT?",
    "question_hi": "किस क्लॉज़ का उपयोग किया जाता है: DISTINCT?",
    "options_en": [
      "DISTINCT",
      "CREATE INDEX",
      "TRUNCATE",
      "COUNT()"
    ],
    "options_hi": [
      "DISTINCT",
      "CREATE INDEX",
      "TRUNCATE",
      "COUNT()"
    ],
    "answer_en": "DISTINCT",
    "answer_hi": "DISTINCT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which clause is used for: UNION?",
    "question_hi": "किस क्लॉज़ का उपयोग किया जाता है: UNION?",
    "options_en": [
      "NOW()",
      "CROSS JOIN",
      "UNION",
      "JSON_EXTRACT()"
    ],
    "options_hi": [
      "NOW()",
      "CROSS JOIN",
      "UNION",
      "JSON_EXTRACT()"
    ],
    "answer_en": "UNION",
    "answer_hi": "UNION",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50 ,
    "question_en": "What does the INNER JOIN do in terms of result rows?",
    "question_hi": "INNER JOIN परिणाम पंक्तियों के संदर्भ में क्या करता है?",
    "options_en": [
      "ALTER TABLE",
      "LEFT JOIN",
      "INNER JOIN",
      "SELECT"
    ],
    "options_hi": [
      "ALTER TABLE",
      "LEFT JOIN",
      "INNER JOIN",
      "SELECT"
    ],
    "answer_en": "INNER JOIN",
    "answer_hi": "INNER JOIN",
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