const questions = [
  {
    "num": 1,
    "question_en": "Which data type is appropriate for storing INT values?",
    "question_hi": "INT मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "JSON",
      "INT",
      "JSON_ARRAY()",
      "DATE_SUB()"
    ],
    "options_hi": [
      "JSON",
      "INT",
      "JSON_ARRAY()",
      "DATE_SUB()"
    ],
    "answer_en": "INT",
    "answer_hi": "INT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which data type is appropriate for storing VARCHAR(255) values?",
    "question_hi": "VARCHAR(255) मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "DATE_SUB()",
      "JSON_ARRAY()",
      "VARCHAR(255)",
      "COALESCE()"
    ],
    "options_hi": [
      "DATE_SUB()",
      "JSON_ARRAY()",
      "VARCHAR(255)",
      "COALESCE()"
    ],
    "answer_en": "VARCHAR(255)",
    "answer_hi": "VARCHAR(255)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which data type is appropriate for storing TEXT values?",
    "question_hi": "TEXT मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "TEXT",
      "BLOB",
      "SUBSTRING()",
      "GROUP_CONCAT()"
    ],
    "options_hi": [
      "TEXT",
      "BLOB",
      "SUBSTRING()",
      "GROUP_CONCAT()"
    ],
    "answer_en": "TEXT",
    "answer_hi": "TEXT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which data type is appropriate for storing DATE values?",
    "question_hi": "DATE मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "BLOB",
      "DATE",
      "CREATE FUNCTION",
      "AVG()"
    ],
    "options_hi": [
      "BLOB",
      "DATE",
      "CREATE FUNCTION",
      "AVG()"
    ],
    "answer_en": "DATE",
    "answer_hi": "DATE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which data type is appropriate for storing DATETIME values?",
    "question_hi": "DATETIME मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "CREATE FUNCTION",
      "DATETIME",
      "JSON_OBJECT()",
      "DECIMAL(10,2)"
    ],
    "options_hi": [
      "CREATE FUNCTION",
      "DATETIME",
      "JSON_OBJECT()",
      "DECIMAL(10,2)"
    ],
    "answer_en": "DATETIME",
    "answer_hi": "DATETIME",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which data type is appropriate for storing TIMESTAMP values?",
    "question_hi": "TIMESTAMP मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "MIN()",
      "CHAR_LENGTH()",
      "JSON_OBJECT()",
      "TIMESTAMP"
    ],
    "options_hi": [
      "MIN()",
      "CHAR_LENGTH()",
      "JSON_OBJECT()",
      "TIMESTAMP"
    ],
    "answer_en": "TIMESTAMP",
    "answer_hi": "TIMESTAMP",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which data type is appropriate for storing JSON values?",
    "question_hi": "JSON मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "CREATE INDEX",
      "JSON",
      "UPDATE",
      "DECIMAL(10,2)"
    ],
    "options_hi": [
      "CREATE INDEX",
      "JSON",
      "UPDATE",
      "DECIMAL(10,2)"
    ],
    "answer_en": "JSON",
    "answer_hi": "JSON",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which data type is appropriate for storing BLOB values?",
    "question_hi": "BLOB मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "CREATE FUNCTION",
      "GROUP_CONCAT()",
      "DATE",
      "BLOB"
    ],
    "options_hi": [
      "CREATE FUNCTION",
      "GROUP_CONCAT()",
      "DATE",
      "BLOB"
    ],
    "answer_en": "BLOB",
    "answer_hi": "BLOB",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which data type is appropriate for storing DECIMAL(10,2) values?",
    "question_hi": "DECIMAL(10,2) मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "CHAR_LENGTH()",
      "DECIMAL(10,2)",
      "TEXT",
      "DATEDIFF()"
    ],
    "options_hi": [
      "CHAR_LENGTH()",
      "DECIMAL(10,2)",
      "TEXT",
      "DATEDIFF()"
    ],
    "answer_en": "DECIMAL(10,2)",
    "answer_hi": "DECIMAL(10,2)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which isolation level is 'READ UNCOMMITTED'?",
    "question_hi": "'READ UNCOMMITTED' कौन-सा isolation level है?",
    "options_en": [
      "READ UNCOMMITTED",
      "SAVEPOINT",
      "RELEASE SAVEPOINT",
      "COMMIT"
    ],
    "options_hi": [
      "READ UNCOMMITTED",
      "SAVEPOINT",
      "RELEASE SAVEPOINT",
      "COMMIT"
    ],
    "answer_en": "READ UNCOMMITTED",
    "answer_hi": "READ UNCOMMITTED",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which isolation level is 'READ COMMITTED'?",
    "question_hi": "'READ COMMITTED' कौन-सा isolation level है?",
    "options_en": [
      "READ COMMITTED",
      "COMMIT",
      "ROLLBACK",
      "REPEATABLE READ"
    ],
    "options_hi": [
      "READ COMMITTED",
      "COMMIT",
      "ROLLBACK",
      "REPEATABLE READ"
    ],
    "answer_en": "READ COMMITTED",
    "answer_hi": "READ COMMITTED",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which isolation level is 'REPEATABLE READ'?",
    "question_hi": "'REPEATABLE READ' कौन-सा isolation level है?",
    "options_en": [
      "REPEATABLE READ",
      "SAVEPOINT",
      "BEGIN",
      "READ UNCOMMITTED"
    ],
    "options_hi": [
      "REPEATABLE READ",
      "SAVEPOINT",
      "BEGIN",
      "READ UNCOMMITTED"
    ],
    "answer_en": "REPEATABLE READ",
    "answer_hi": "REPEATABLE READ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which isolation level is 'SERIALIZABLE'?",
    "question_hi": "'SERIALIZABLE' कौन-सा isolation level है?",
    "options_en": [
      "SERIALIZABLE",
      "ROLLBACK",
      "SAVEPOINT",
      "READ UNCOMMITTED"
    ],
    "options_hi": [
      "SERIALIZABLE",
      "ROLLBACK",
      "SAVEPOINT",
      "READ UNCOMMITTED"
    ],
    "answer_en": "SERIALIZABLE",
    "answer_hi": "SERIALIZABLE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the role of transaction statement 'BEGIN'?",
    "question_hi": "'BEGIN' transaction स्टेटमेंट की भूमिका क्या है?",
    "options_en": [
      "BEGIN",
      "COMMIT",
      "REPLACE",
      "CREATE FUNCTION"
    ],
    "options_hi": [
      "BEGIN",
      "COMMIT",
      "REPLACE",
      "CREATE FUNCTION"
    ],
    "answer_en": "BEGIN",
    "answer_hi": "BEGIN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the role of transaction statement 'COMMIT'?",
    "question_hi": "'COMMIT' transaction स्टेटमेंट की भूमिका क्या है?",
    "options_en": [
      "COMMIT",
      "CREATE INDEX",
      "ALTER TABLE",
      "REPLACE"
    ],
    "options_hi": [
      "COMMIT",
      "CREATE INDEX",
      "ALTER TABLE",
      "REPLACE"
    ],
    "answer_en": "COMMIT",
    "answer_hi": "COMMIT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the role of transaction statement 'ROLLBACK'?",
    "question_hi": "'ROLLBACK' transaction स्टेटमेंट की भूमिका क्या है?",
    "options_en": [
      "ROLLBACK",
      "BEGIN",
      "CREATE INDEX",
      "DROP TABLE"
    ],
    "options_hi": [
      "ROLLBACK",
      "BEGIN",
      "CREATE INDEX",
      "DROP TABLE"
    ],
    "answer_en": "ROLLBACK",
    "answer_hi": "ROLLBACK",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the role of transaction statement 'SAVEPOINT'?",
    "question_hi": "'SAVEPOINT' transaction स्टेटमेंट की भूमिका क्या है?",
    "options_en": [
      "SAVEPOINT",
      "CREATE FUNCTION",
      "CREATE VIEW",
      "DROP INDEX"
    ],
    "options_hi": [
      "SAVEPOINT",
      "CREATE FUNCTION",
      "CREATE VIEW",
      "DROP INDEX"
    ],
    "answer_en": "SAVEPOINT",
    "answer_hi": "SAVEPOINT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the role of transaction statement 'RELEASE SAVEPOINT'?",
    "question_hi": "'RELEASE SAVEPOINT' transaction स्टेटमेंट की भूमिका क्या है?",
    "options_en": [
      "RELEASE SAVEPOINT",
      "CREATE FUNCTION",
      "TRUNCATE",
      "CREATE TABLE"
    ],
    "options_hi": [
      "RELEASE SAVEPOINT",
      "CREATE FUNCTION",
      "TRUNCATE",
      "CREATE TABLE"
    ],
    "answer_en": "RELEASE SAVEPOINT",
    "answer_hi": "RELEASE SAVEPOINT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What does the MySQL command 'EXPLAIN' do?",
    "question_hi": "MySQL कमांड 'EXPLAIN' क्या करता है?",
    "options_en": [
      "EXPLAIN",
      "DROP TABLE",
      "SHOW PROCESSLIST",
      "INSERT"
    ],
    "options_hi": [
      "EXPLAIN",
      "DROP TABLE",
      "SHOW PROCESSLIST",
      "INSERT"
    ],
    "answer_en": "EXPLAIN",
    "answer_hi": "EXPLAIN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does the MySQL command 'ANALYZE' do?",
    "question_hi": "MySQL कमांड 'ANALYZE' क्या करता है?",
    "options_en": [
      "ANALYZE",
      "DROP INDEX",
      "FLUSH",
      "CREATE INDEX"
    ],
    "options_hi": [
      "ANALYZE",
      "DROP INDEX",
      "FLUSH",
      "CREATE INDEX"
    ],
    "answer_en": "ANALYZE",
    "answer_hi": "ANALYZE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What does the MySQL command 'OPTIMIZE TABLE' do?",
    "question_hi": "MySQL कमांड 'OPTIMIZE TABLE' क्या करता है?",
    "options_en": [
      "OPTIMIZE TABLE",
      "CREATE FUNCTION",
      "ALTER TABLE",
      "DROP INDEX"
    ],
    "options_hi": [
      "OPTIMIZE TABLE",
      "CREATE FUNCTION",
      "ALTER TABLE",
      "DROP INDEX"
    ],
    "answer_en": "OPTIMIZE TABLE",
    "answer_hi": "OPTIMIZE TABLE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does the MySQL command 'FLUSH' do?",
    "question_hi": "MySQL कमांड 'FLUSH' क्या करता है?",
    "options_en": [
      "FLUSH",
      "DELETE",
      "REPLACE",
      "CREATE PROCEDURE"
    ],
    "options_hi": [
      "FLUSH",
      "DELETE",
      "REPLACE",
      "CREATE PROCEDURE"
    ],
    "answer_en": "FLUSH",
    "answer_hi": "FLUSH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What does the MySQL command 'SHOW STATUS' do?",
    "question_hi": "MySQL कमांड 'SHOW STATUS' क्या करता है?",
    "options_en": [
      "SHOW STATUS",
      "CREATE TABLE",
      "OPTIMIZE TABLE",
      "TRUNCATE"
    ],
    "options_hi": [
      "SHOW STATUS",
      "CREATE TABLE",
      "OPTIMIZE TABLE",
      "TRUNCATE"
    ],
    "answer_en": "SHOW STATUS",
    "answer_hi": "SHOW STATUS",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does the MySQL command 'SHOW PROCESSLIST' do?",
    "question_hi": "MySQL कमांड 'SHOW PROCESSLIST' क्या करता है?",
    "options_en": [
      "SHOW PROCESSLIST",
      "DESCRIBE",
      "DROP TABLE",
      "DELETE"
    ],
    "options_hi": [
      "SHOW PROCESSLIST",
      "DESCRIBE",
      "DROP TABLE",
      "DELETE"
    ],
    "answer_en": "SHOW PROCESSLIST",
    "answer_hi": "SHOW PROCESSLIST",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What does the MySQL command 'SHOW VARIABLES' do?",
    "question_hi": "MySQL कमांड 'SHOW VARIABLES' क्या करता है?",
    "options_en": [
      "SHOW VARIABLES",
      "CREATE FUNCTION",
      "OPTIMIZE TABLE",
      "REPLACE"
    ],
    "options_hi": [
      "SHOW VARIABLES",
      "CREATE FUNCTION",
      "OPTIMIZE TABLE",
      "REPLACE"
    ],
    "answer_en": "SHOW VARIABLES",
    "answer_hi": "SHOW VARIABLES",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does the MySQL command 'SHOW CREATE TABLE' do?",
    "question_hi": "MySQL कमांड 'SHOW CREATE TABLE' क्या करता है?",
    "options_en": [
      "SHOW CREATE TABLE",
      "DELETE",
      "SELECT",
      "TRUNCATE"
    ],
    "options_hi": [
      "SHOW CREATE TABLE",
      "DELETE",
      "SELECT",
      "TRUNCATE"
    ],
    "answer_en": "SHOW CREATE TABLE",
    "answer_hi": "SHOW CREATE TABLE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What does the MySQL command 'DESCRIBE' do?",
    "question_hi": "MySQL कमांड 'DESCRIBE' क्या करता है?",
    "options_en": [
      "DESCRIBE",
      "SHOW VARIABLES",
      "SHOW CREATE TABLE",
      "CREATE TABLE"
    ],
    "options_hi": [
      "DESCRIBE",
      "SHOW VARIABLES",
      "SHOW CREATE TABLE",
      "CREATE TABLE"
    ],
    "answer_en": "DESCRIBE",
    "answer_hi": "DESCRIBE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "In MySQL, what does 'Replication' relate to?",
    "question_hi": "MySQL में 'Replication' किससे संबंधित है?",
    "options_en": [
      "Replication",
      "ANALYZE",
      "EXPLAIN",
      "DESCRIBE"
    ],
    "options_hi": [
      "Replication",
      "ANALYZE",
      "EXPLAIN",
      "DESCRIBE"
    ],
    "answer_en": "Replication",
    "answer_hi": "Replication",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "In MySQL, what does 'Binary Log' relate to?",
    "question_hi": "MySQL में 'Binary Log' किससे संबंधित है?",
    "options_en": [
      "Binary Log",
      "Replication",
      "Primary-Replica",
      "Change Data Capture"
    ],
    "options_hi": [
      "Binary Log",
      "Replication",
      "Primary-Replica",
      "Change Data Capture"
    ],
    "answer_en": "Binary Log",
    "answer_hi": "Binary Log",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "In MySQL, what does 'GTID' relate to?",
    "question_hi": "MySQL में 'GTID' किससे संबंधित है?",
    "options_en": [
      "GTID",
      "OPTIMIZE TABLE",
      "Master-Slave",
      "SHOW STATUS"
    ],
    "options_hi": [
      "GTID",
      "OPTIMIZE TABLE",
      "Master-Slave",
      "SHOW STATUS"
    ],
    "answer_en": "GTID",
    "answer_hi": "GTID",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "In MySQL, what does 'Change Data Capture' relate to?",
    "question_hi": "MySQL में 'Change Data Capture' किससे संबंधित है?",
    "options_en": [
      "Change Data Capture",
      "SHOW VARIABLES",
      "OPTIMIZE TABLE",
      "SHOW PROCESSLIST"
    ],
    "options_hi": [
      "Change Data Capture",
      "SHOW VARIABLES",
      "OPTIMIZE TABLE",
      "SHOW PROCESSLIST"
    ],
    "answer_en": "Change Data Capture",
    "answer_hi": "Change Data Capture",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "In MySQL, what does 'Master-Slave' relate to?",
    "question_hi": "MySQL में 'Master-Slave' किससे संबंधित है?",
    "options_en": [
      "Master-Slave",
      "Replication",
      "Binary Log",
      "EXPLAIN"
    ],
    "options_hi": [
      "Master-Slave",
      "Replication",
      "Binary Log",
      "EXPLAIN"
    ],
    "answer_en": "Master-Slave",
    "answer_hi": "Master-Slave",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "In MySQL, what does 'Primary-Replica' relate to?",
    "question_hi": "MySQL में 'Primary-Replica' किससे संबंधित है?",
    "options_en": [
      "Primary-Replica",
      "OPTIMIZE TABLE",
      "FLUSH",
      "SHOW STATUS"
    ],
    "options_hi": [
      "Primary-Replica",
      "OPTIMIZE TABLE",
      "FLUSH",
      "SHOW STATUS"
    ],
    "answer_en": "Primary-Replica",
    "answer_hi": "Primary-Replica",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the purpose of the 'GRANT' command in MySQL?",
    "question_hi": "MySQL में 'GRANT' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "GRANT",
      "DELETE",
      "CREATE VIEW",
      "INSERT"
    ],
    "options_hi": [
      "GRANT",
      "DELETE",
      "CREATE VIEW",
      "INSERT"
    ],
    "answer_en": "GRANT",
    "answer_hi": "GRANT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the purpose of the 'REVOKE' command in MySQL?",
    "question_hi": "MySQL में 'REVOKE' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "REVOKE",
      "CREATE PROCEDURE",
      "CREATE TABLE",
      "TRUNCATE"
    ],
    "options_hi": [
      "REVOKE",
      "CREATE PROCEDURE",
      "CREATE TABLE",
      "TRUNCATE"
    ],
    "answer_en": "REVOKE",
    "answer_hi": "REVOKE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the purpose of the 'CREATE USER' command in MySQL?",
    "question_hi": "MySQL में 'CREATE USER' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "CREATE USER",
      "ALTER TABLE",
      "CREATE FUNCTION",
      "FLUSH PRIVILEGES"
    ],
    "options_hi": [
      "CREATE USER",
      "ALTER TABLE",
      "CREATE FUNCTION",
      "FLUSH PRIVILEGES"
    ],
    "answer_en": "CREATE USER",
    "answer_hi": "CREATE USER",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the purpose of the 'DROP USER' command in MySQL?",
    "question_hi": "MySQL में 'DROP USER' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "DROP USER",
      "DROP INDEX",
      "DROP TABLE",
      "REVOKE"
    ],
    "options_hi": [
      "DROP USER",
      "DROP INDEX",
      "DROP TABLE",
      "REVOKE"
    ],
    "answer_en": "DROP USER",
    "answer_hi": "DROP USER",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the purpose of the 'SET PASSWORD' command in MySQL?",
    "question_hi": "MySQL में 'SET PASSWORD' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "SET PASSWORD",
      "CREATE FUNCTION",
      "CREATE VIEW",
      "GRANT"
    ],
    "options_hi": [
      "SET PASSWORD",
      "CREATE FUNCTION",
      "CREATE VIEW",
      "GRANT"
    ],
    "answer_en": "SET PASSWORD",
    "answer_hi": "SET PASSWORD",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the purpose of the 'FLUSH PRIVILEGES' command in MySQL?",
    "question_hi": "MySQL में 'FLUSH PRIVILEGES' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "FLUSH PRIVILEGES",
      "UPDATE",
      "CREATE TABLE",
      "CREATE PROCEDURE"
    ],
    "options_hi": [
      "FLUSH PRIVILEGES",
      "UPDATE",
      "CREATE TABLE",
      "CREATE PROCEDURE"
    ],
    "answer_en": "FLUSH PRIVILEGES",
    "answer_hi": "FLUSH PRIVILEGES",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What kind of function is ROW_NUMBER() in SQL?",
    "question_hi": "SQL में ROW_NUMBER() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "ROW_NUMBER()",
      "DENSE_RANK()",
      "IFNULL()",
      "MAX()"
    ],
    "options_hi": [
      "ROW_NUMBER()",
      "DENSE_RANK()",
      "IFNULL()",
      "MAX()"
    ],
    "answer_en": "ROW_NUMBER()",
    "answer_hi": "ROW_NUMBER()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What kind of function is RANK() in SQL?",
    "question_hi": "SQL में RANK() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "RANK()",
      "LOWER()",
      "COUNT()",
      "LENGTH()"
    ],
    "options_hi": [
      "RANK()",
      "LOWER()",
      "COUNT()",
      "LENGTH()"
    ],
    "answer_en": "RANK()",
    "answer_hi": "RANK()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What kind of function is DENSE_RANK() in SQL?",
    "question_hi": "SQL में DENSE_RANK() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "DENSE_RANK()",
      "DATE_ADD()",
      "RANK()",
      "NTILE()"
    ],
    "options_hi": [
      "DENSE_RANK()",
      "DATE_ADD()",
      "RANK()",
      "NTILE()"
    ],
    "answer_en": "DENSE_RANK()",
    "answer_hi": "DENSE_RANK()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What kind of function is NTILE() in SQL?",
    "question_hi": "SQL में NTILE() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "NTILE()",
      "NOW()",
      "SUM()",
      "RANK()"
    ],
    "options_hi": [
      "NTILE()",
      "NOW()",
      "SUM()",
      "RANK()"
    ],
    "answer_en": "NTILE()",
    "answer_hi": "NTILE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What kind of function is LAG() in SQL?",
    "question_hi": "SQL में LAG() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "LAG()",
      "COUNT()",
      "NOW()",
      "JSON_ARRAY()"
    ],
    "options_hi": [
      "LAG()",
      "COUNT()",
      "NOW()",
      "JSON_ARRAY()"
    ],
    "answer_en": "LAG()",
    "answer_hi": "LAG()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What kind of function is LEAD() in SQL?",
    "question_hi": "SQL में LEAD() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "LEAD()",
      "CHAR_LENGTH()",
      "NTILE()",
      "LENGTH()"
    ],
    "options_hi": [
      "LEAD()",
      "CHAR_LENGTH()",
      "NTILE()",
      "LENGTH()"
    ],
    "answer_en": "LEAD()",
    "answer_hi": "LEAD()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What kind of function is FIRST_VALUE() in SQL?",
    "question_hi": "SQL में FIRST_VALUE() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "FIRST_VALUE()",
      "IFNULL()",
      "UPPER()",
      "DATE_ADD()"
    ],
    "options_hi": [
      "FIRST_VALUE()",
      "IFNULL()",
      "UPPER()",
      "DATE_ADD()"
    ],
    "answer_en": "FIRST_VALUE()",
    "answer_hi": "FIRST_VALUE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What kind of function is LAST_VALUE() in SQL?",
    "question_hi": "SQL में LAST_VALUE() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "LAST_VALUE()",
      "LOWER()",
      "COALESCE()",
      "JSON_ARRAY()"
    ],
    "options_hi": [
      "LAST_VALUE()",
      "LOWER()",
      "COALESCE()",
      "JSON_ARRAY()"
    ],
    "answer_en": "LAST_VALUE()",
    "answer_hi": "LAST_VALUE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which SQL statement is used to perform the operation: SELECT?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: SELECT?",
    "options_en": [
      "SELECT",
      "CHAR_LENGTH()",
      "COUNT()",
      "ON"
    ],
    "options_hi": [
      "SELECT",
      "CHAR_LENGTH()",
      "COUNT()",
      "ON"
    ],
    "answer_en": "SELECT",
    "answer_hi": "SELECT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which SQL statement is used to perform the operation: INSERT?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: INSERT?",
    "options_en": [
      "INSERT",
      "NOW()",
      "DECIMAL(10,2)",
      "JSON"
    ],
    "options_hi": [
      "INSERT",
      "NOW()",
      "DECIMAL(10,2)",
      "JSON"
    ],
    "answer_en": "INSERT",
    "answer_hi": "INSERT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which SQL statement is used to perform the operation: UPDATE?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: UPDATE?",
    "options_en": [
      "AVG()",
      "UPDATE",
      "NOW()",
      "MAX()"
    ],
    "options_hi": [
      "AVG()",
      "UPDATE",
      "NOW()",
      "MAX()"
    ],
    "answer_en": "UPDATE",
    "answer_hi": "UPDATE",
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