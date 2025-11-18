const questions = [
  {
    "num": 1,
    "question_en": "Which index type is 'FULLTEXT'?",
    "question_hi": "'FULLTEXT' किस प्रकार का index है?",
    "options_en": [
      "FULLTEXT",
      "SPATIAL",
      "DROP TABLE",
      "CREATE VIEW"
    ],
    "options_hi": [
      "FULLTEXT",
      "SPATIAL",
      "DROP TABLE",
      "CREATE VIEW"
    ],
    "answer_en": "FULLTEXT",
    "answer_hi": "FULLTEXT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which index type is 'SPATIAL'?",
    "question_hi": "'SPATIAL' किस प्रकार का index है?",
    "options_en": [
      "SPATIAL",
      "CREATE VIEW",
      "CSV",
      "REPLACE"
    ],
    "options_hi": [
      "SPATIAL",
      "CREATE VIEW",
      "CSV",
      "REPLACE"
    ],
    "answer_en": "SPATIAL",
    "answer_hi": "SPATIAL",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which data type is appropriate for storing INT values?",
    "question_hi": "INT मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "TIMESTAMP",
      "SUBSTRING()",
      "GROUP_CONCAT()",
      "INT"
    ],
    "options_hi": [
      "TIMESTAMP",
      "SUBSTRING()",
      "GROUP_CONCAT()",
      "INT"
    ],
    "answer_en": "INT",
    "answer_hi": "INT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which data type is appropriate for storing VARCHAR(255) values?",
    "question_hi": "VARCHAR(255) मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "AVG()",
      "DATETIME",
      "VARCHAR(255)",
      "DATE_SUB()"
    ],
    "options_hi": [
      "AVG()",
      "DATETIME",
      "VARCHAR(255)",
      "DATE_SUB()"
    ],
    "answer_en": "VARCHAR(255)",
    "answer_hi": "VARCHAR(255)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which data type is appropriate for storing TEXT values?",
    "question_hi": "TEXT मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "COALESCE()",
      "INT",
      "INSERT",
      "TEXT"
    ],
    "options_hi": [
      "COALESCE()",
      "INT",
      "INSERT",
      "TEXT"
    ],
    "answer_en": "TEXT",
    "answer_hi": "TEXT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which data type is appropriate for storing DATE values?",
    "question_hi": "DATE मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "DATE",
      "INT",
      "ALTER TABLE",
      "DATE_SUB()"
    ],
    "options_hi": [
      "DATE",
      "INT",
      "ALTER TABLE",
      "DATE_SUB()"
    ],
    "answer_en": "DATE",
    "answer_hi": "DATE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which data type is appropriate for storing DATETIME values?",
    "question_hi": "DATETIME मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "SUM()",
      "DATETIME",
      "CONCAT()",
      "COUNT()"
    ],
    "options_hi": [
      "SUM()",
      "DATETIME",
      "CONCAT()",
      "COUNT()"
    ],
    "answer_en": "DATETIME",
    "answer_hi": "DATETIME",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which data type is appropriate for storing TIMESTAMP values?",
    "question_hi": "TIMESTAMP मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "TIMESTAMP",
      "REPLACE",
      "UPDATE",
      "LENGTH()"
    ],
    "options_hi": [
      "TIMESTAMP",
      "REPLACE",
      "UPDATE",
      "LENGTH()"
    ],
    "answer_en": "TIMESTAMP",
    "answer_hi": "TIMESTAMP",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which data type is appropriate for storing JSON values?",
    "question_hi": "JSON मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "JSON",
      "SUM()",
      "SUBSTRING()",
      "TIMESTAMP"
    ],
    "options_hi": [
      "JSON",
      "SUM()",
      "SUBSTRING()",
      "TIMESTAMP"
    ],
    "answer_en": "JSON",
    "answer_hi": "JSON",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which data type is appropriate for storing BLOB values?",
    "question_hi": "BLOB मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "JSON_ARRAY()",
      "SUM()",
      "IFNULL()",
      "BLOB"
    ],
    "options_hi": [
      "JSON_ARRAY()",
      "SUM()",
      "IFNULL()",
      "BLOB"
    ],
    "answer_en": "BLOB",
    "answer_hi": "BLOB",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which data type is appropriate for storing DECIMAL(10,2) values?",
    "question_hi": "DECIMAL(10,2) मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "CREATE VIEW",
      "SUBSTRING()",
      "UPPER()",
      "DECIMAL(10,2)"
    ],
    "options_hi": [
      "CREATE VIEW",
      "SUBSTRING()",
      "UPPER()",
      "DECIMAL(10,2)"
    ],
    "answer_en": "DECIMAL(10,2)",
    "answer_hi": "DECIMAL(10,2)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which isolation level is 'READ UNCOMMITTED'?",
    "question_hi": "'READ UNCOMMITTED' कौन-सा isolation level है?",
    "options_en": [
      "READ UNCOMMITTED",
      "READ COMMITTED",
      "COMMIT",
      "ROLLBACK"
    ],
    "options_hi": [
      "READ UNCOMMITTED",
      "READ COMMITTED",
      "COMMIT",
      "ROLLBACK"
    ],
    "answer_en": "READ UNCOMMITTED",
    "answer_hi": "READ UNCOMMITTED",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which isolation level is 'READ COMMITTED'?",
    "question_hi": "'READ COMMITTED' कौन-सा isolation level है?",
    "options_en": [
      "READ COMMITTED",
      "SERIALIZABLE",
      "ROLLBACK",
      "BEGIN"
    ],
    "options_hi": [
      "READ COMMITTED",
      "SERIALIZABLE",
      "ROLLBACK",
      "BEGIN"
    ],
    "answer_en": "READ COMMITTED",
    "answer_hi": "READ COMMITTED",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which isolation level is 'REPEATABLE READ'?",
    "question_hi": "'REPEATABLE READ' कौन-सा isolation level है?",
    "options_en": [
      "REPEATABLE READ",
      "SERIALIZABLE",
      "BEGIN",
      "ROLLBACK"
    ],
    "options_hi": [
      "REPEATABLE READ",
      "SERIALIZABLE",
      "BEGIN",
      "ROLLBACK"
    ],
    "answer_en": "REPEATABLE READ",
    "answer_hi": "REPEATABLE READ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which isolation level is 'SERIALIZABLE'?",
    "question_hi": "'SERIALIZABLE' कौन-सा isolation level है?",
    "options_en": [
      "SERIALIZABLE",
      "REPEATABLE READ",
      "BEGIN",
      "SAVEPOINT"
    ],
    "options_hi": [
      "SERIALIZABLE",
      "REPEATABLE READ",
      "BEGIN",
      "SAVEPOINT"
    ],
    "answer_en": "SERIALIZABLE",
    "answer_hi": "SERIALIZABLE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the role of transaction statement 'BEGIN'?",
    "question_hi": "'BEGIN' transaction स्टेटमेंट की भूमिका क्या है?",
    "options_en": [
      "BEGIN",
      "REPLACE",
      "CREATE TABLE",
      "SELECT"
    ],
    "options_hi": [
      "BEGIN",
      "REPLACE",
      "CREATE TABLE",
      "SELECT"
    ],
    "answer_en": "BEGIN",
    "answer_hi": "BEGIN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the role of transaction statement 'COMMIT'?",
    "question_hi": "'COMMIT' transaction स्टेटमेंट की भूमिका क्या है?",
    "options_en": [
      "COMMIT",
      "UPDATE",
      "SELECT",
      "ROLLBACK"
    ],
    "options_hi": [
      "COMMIT",
      "UPDATE",
      "SELECT",
      "ROLLBACK"
    ],
    "answer_en": "COMMIT",
    "answer_hi": "COMMIT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the role of transaction statement 'ROLLBACK'?",
    "question_hi": "'ROLLBACK' transaction स्टेटमेंट की भूमिका क्या है?",
    "options_en": [
      "ROLLBACK",
      "CREATE FUNCTION",
      "CREATE INDEX",
      "DELETE"
    ],
    "options_hi": [
      "ROLLBACK",
      "CREATE FUNCTION",
      "CREATE INDEX",
      "DELETE"
    ],
    "answer_en": "ROLLBACK",
    "answer_hi": "ROLLBACK",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the role of transaction statement 'SAVEPOINT'?",
    "question_hi": "'SAVEPOINT' transaction स्टेटमेंट की भूमिका क्या है?",
    "options_en": [
      "SAVEPOINT",
      "RELEASE SAVEPOINT",
      "UPDATE",
      "COMMIT"
    ],
    "options_hi": [
      "SAVEPOINT",
      "RELEASE SAVEPOINT",
      "UPDATE",
      "COMMIT"
    ],
    "answer_en": "SAVEPOINT",
    "answer_hi": "SAVEPOINT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the role of transaction statement 'RELEASE SAVEPOINT'?",
    "question_hi": "'RELEASE SAVEPOINT' transaction स्टेटमेंट की भूमिका क्या है?",
    "options_en": [
      "RELEASE SAVEPOINT",
      "CREATE PROCEDURE",
      "ALTER TABLE",
      "DELETE"
    ],
    "options_hi": [
      "RELEASE SAVEPOINT",
      "CREATE PROCEDURE",
      "ALTER TABLE",
      "DELETE"
    ],
    "answer_en": "RELEASE SAVEPOINT",
    "answer_hi": "RELEASE SAVEPOINT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What does the MySQL command 'EXPLAIN' do?",
    "question_hi": "MySQL कमांड 'EXPLAIN' क्या करता है?",
    "options_en": [
      "EXPLAIN",
      "DESCRIBE",
      "SHOW STATUS",
      "ALTER TABLE"
    ],
    "options_hi": [
      "EXPLAIN",
      "DESCRIBE",
      "SHOW STATUS",
      "ALTER TABLE"
    ],
    "answer_en": "EXPLAIN",
    "answer_hi": "EXPLAIN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does the MySQL command 'ANALYZE' do?",
    "question_hi": "MySQL कमांड 'ANALYZE' क्या करता है?",
    "options_en": [
      "ANALYZE",
      "DROP INDEX",
      "CREATE PROCEDURE",
      "CREATE INDEX"
    ],
    "options_hi": [
      "ANALYZE",
      "DROP INDEX",
      "CREATE PROCEDURE",
      "CREATE INDEX"
    ],
    "answer_en": "ANALYZE",
    "answer_hi": "ANALYZE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What does the MySQL command 'OPTIMIZE TABLE' do?",
    "question_hi": "MySQL कमांड 'OPTIMIZE TABLE' क्या करता है?",
    "options_en": [
      "OPTIMIZE TABLE",
      "REPLACE",
      "ALTER TABLE",
      "EXPLAIN"
    ],
    "options_hi": [
      "OPTIMIZE TABLE",
      "REPLACE",
      "ALTER TABLE",
      "EXPLAIN"
    ],
    "answer_en": "OPTIMIZE TABLE",
    "answer_hi": "OPTIMIZE TABLE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does the MySQL command 'FLUSH' do?",
    "question_hi": "MySQL कमांड 'FLUSH' क्या करता है?",
    "options_en": [
      "FLUSH",
      "SHOW PROCESSLIST",
      "SHOW CREATE TABLE",
      "REPLACE"
    ],
    "options_hi": [
      "FLUSH",
      "SHOW PROCESSLIST",
      "SHOW CREATE TABLE",
      "REPLACE"
    ],
    "answer_en": "FLUSH",
    "answer_hi": "FLUSH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What does the MySQL command 'SHOW STATUS' do?",
    "question_hi": "MySQL कमांड 'SHOW STATUS' क्या करता है?",
    "options_en": [
      "SHOW STATUS",
      "CREATE INDEX",
      "CREATE TABLE",
      "SELECT"
    ],
    "options_hi": [
      "SHOW STATUS",
      "CREATE INDEX",
      "CREATE TABLE",
      "SELECT"
    ],
    "answer_en": "SHOW STATUS",
    "answer_hi": "SHOW STATUS",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does the MySQL command 'SHOW PROCESSLIST' do?",
    "question_hi": "MySQL कमांड 'SHOW PROCESSLIST' क्या करता है?",
    "options_en": [
      "SHOW PROCESSLIST",
      "CREATE VIEW",
      "SHOW STATUS",
      "DESCRIBE"
    ],
    "options_hi": [
      "SHOW PROCESSLIST",
      "CREATE VIEW",
      "SHOW STATUS",
      "DESCRIBE"
    ],
    "answer_en": "SHOW PROCESSLIST",
    "answer_hi": "SHOW PROCESSLIST",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What does the MySQL command 'SHOW VARIABLES' do?",
    "question_hi": "MySQL कमांड 'SHOW VARIABLES' क्या करता है?",
    "options_en": [
      "SHOW VARIABLES",
      "CREATE INDEX",
      "DESCRIBE",
      "ALTER TABLE"
    ],
    "options_hi": [
      "SHOW VARIABLES",
      "CREATE INDEX",
      "DESCRIBE",
      "ALTER TABLE"
    ],
    "answer_en": "SHOW VARIABLES",
    "answer_hi": "SHOW VARIABLES",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What does the MySQL command 'SHOW CREATE TABLE' do?",
    "question_hi": "MySQL कमांड 'SHOW CREATE TABLE' क्या करता है?",
    "options_en": [
      "SHOW CREATE TABLE",
      "CREATE VIEW",
      "TRUNCATE",
      "SHOW STATUS"
    ],
    "options_hi": [
      "SHOW CREATE TABLE",
      "CREATE VIEW",
      "TRUNCATE",
      "SHOW STATUS"
    ],
    "answer_en": "SHOW CREATE TABLE",
    "answer_hi": "SHOW CREATE TABLE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What does the MySQL command 'DESCRIBE' do?",
    "question_hi": "MySQL कमांड 'DESCRIBE' क्या करता है?",
    "options_en": [
      "DESCRIBE",
      "ALTER TABLE",
      "ANALYZE",
      "CREATE FUNCTION"
    ],
    "options_hi": [
      "DESCRIBE",
      "ALTER TABLE",
      "ANALYZE",
      "CREATE FUNCTION"
    ],
    "answer_en": "DESCRIBE",
    "answer_hi": "DESCRIBE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "In MySQL, what does 'Replication' relate to?",
    "question_hi": "MySQL में 'Replication' किससे संबंधित है?",
    "options_en": [
      "Replication",
      "Master-Slave",
      "OPTIMIZE TABLE",
      "SHOW STATUS"
    ],
    "options_hi": [
      "Replication",
      "Master-Slave",
      "OPTIMIZE TABLE",
      "SHOW STATUS"
    ],
    "answer_en": "Replication",
    "answer_hi": "Replication",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "In MySQL, what does 'Binary Log' relate to?",
    "question_hi": "MySQL में 'Binary Log' किससे संबंधित है?",
    "options_en": [
      "Binary Log",
      "SHOW PROCESSLIST",
      "OPTIMIZE TABLE",
      "EXPLAIN"
    ],
    "options_hi": [
      "Binary Log",
      "SHOW PROCESSLIST",
      "OPTIMIZE TABLE",
      "EXPLAIN"
    ],
    "answer_en": "Binary Log",
    "answer_hi": "Binary Log",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "In MySQL, what does 'GTID' relate to?",
    "question_hi": "MySQL में 'GTID' किससे संबंधित है?",
    "options_en": [
      "GTID",
      "Replication",
      "Change Data Capture",
      "SHOW CREATE TABLE"
    ],
    "options_hi": [
      "GTID",
      "Replication",
      "Change Data Capture",
      "SHOW CREATE TABLE"
    ],
    "answer_en": "GTID",
    "answer_hi": "GTID",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "In MySQL, what does 'Change Data Capture' relate to?",
    "question_hi": "MySQL में 'Change Data Capture' किससे संबंधित है?",
    "options_en": [
      "Change Data Capture",
      "SHOW VARIABLES",
      "ANALYZE",
      "DESCRIBE"
    ],
    "options_hi": [
      "Change Data Capture",
      "SHOW VARIABLES",
      "ANALYZE",
      "DESCRIBE"
    ],
    "answer_en": "Change Data Capture",
    "answer_hi": "Change Data Capture",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "In MySQL, what does 'Master-Slave' relate to?",
    "question_hi": "MySQL में 'Master-Slave' किससे संबंधित है?",
    "options_en": [
      "Master-Slave",
      "EXPLAIN",
      "FLUSH",
      "Change Data Capture"
    ],
    "options_hi": [
      "Master-Slave",
      "EXPLAIN",
      "FLUSH",
      "Change Data Capture"
    ],
    "answer_en": "Master-Slave",
    "answer_hi": "Master-Slave",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "In MySQL, what does 'Primary-Replica' relate to?",
    "question_hi": "MySQL में 'Primary-Replica' किससे संबंधित है?",
    "options_en": [
      "Primary-Replica",
      "Master-Slave",
      "Change Data Capture",
      "OPTIMIZE TABLE"
    ],
    "options_hi": [
      "Primary-Replica",
      "Master-Slave",
      "Change Data Capture",
      "OPTIMIZE TABLE"
    ],
    "answer_en": "Primary-Replica",
    "answer_hi": "Primary-Replica",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the purpose of the 'GRANT' command in MySQL?",
    "question_hi": "MySQL में 'GRANT' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "GRANT",
      "DROP USER",
      "UPDATE",
      "SET PASSWORD"
    ],
    "options_hi": [
      "GRANT",
      "DROP USER",
      "UPDATE",
      "SET PASSWORD"
    ],
    "answer_en": "GRANT",
    "answer_hi": "GRANT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the purpose of the 'REVOKE' command in MySQL?",
    "question_hi": "MySQL में 'REVOKE' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "REVOKE",
      "GRANT",
      "ALTER TABLE",
      "CREATE VIEW"
    ],
    "options_hi": [
      "REVOKE",
      "GRANT",
      "ALTER TABLE",
      "CREATE VIEW"
    ],
    "answer_en": "REVOKE",
    "answer_hi": "REVOKE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the purpose of the 'CREATE USER' command in MySQL?",
    "question_hi": "MySQL में 'CREATE USER' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "CREATE USER",
      "UPDATE",
      "DROP TABLE",
      "REVOKE"
    ],
    "options_hi": [
      "CREATE USER",
      "UPDATE",
      "DROP TABLE",
      "REVOKE"
    ],
    "answer_en": "CREATE USER",
    "answer_hi": "CREATE USER",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the purpose of the 'DROP USER' command in MySQL?",
    "question_hi": "MySQL में 'DROP USER' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "DROP USER",
      "FLUSH PRIVILEGES",
      "CREATE TABLE",
      "CREATE INDEX"
    ],
    "options_hi": [
      "DROP USER",
      "FLUSH PRIVILEGES",
      "CREATE TABLE",
      "CREATE INDEX"
    ],
    "answer_en": "DROP USER",
    "answer_hi": "DROP USER",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the purpose of the 'SET PASSWORD' command in MySQL?",
    "question_hi": "MySQL में 'SET PASSWORD' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "SET PASSWORD",
      "DELETE",
      "TRUNCATE",
      "REVOKE"
    ],
    "options_hi": [
      "SET PASSWORD",
      "DELETE",
      "TRUNCATE",
      "REVOKE"
    ],
    "answer_en": "SET PASSWORD",
    "answer_hi": "SET PASSWORD",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the purpose of the 'FLUSH PRIVILEGES' command in MySQL?",
    "question_hi": "MySQL में 'FLUSH PRIVILEGES' कमांड का उद्देश्य क्या है?",
    "options_en": [
      "FLUSH PRIVILEGES",
      "DELETE",
      "CREATE USER",
      "CREATE TABLE"
    ],
    "options_hi": [
      "FLUSH PRIVILEGES",
      "DELETE",
      "CREATE USER",
      "CREATE TABLE"
    ],
    "answer_en": "FLUSH PRIVILEGES",
    "answer_hi": "FLUSH PRIVILEGES",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What kind of function is ROW_NUMBER() in SQL?",
    "question_hi": "SQL में ROW_NUMBER() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "ROW_NUMBER()",
      "CONCAT()",
      "JSON_ARRAY()",
      "FIRST_VALUE()"
    ],
    "options_hi": [
      "ROW_NUMBER()",
      "CONCAT()",
      "JSON_ARRAY()",
      "FIRST_VALUE()"
    ],
    "answer_en": "ROW_NUMBER()",
    "answer_hi": "ROW_NUMBER()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What kind of function is RANK() in SQL?",
    "question_hi": "SQL में RANK() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "RANK()",
      "CONCAT()",
      "CHAR_LENGTH()",
      "SUBSTRING()"
    ],
    "options_hi": [
      "RANK()",
      "CONCAT()",
      "CHAR_LENGTH()",
      "SUBSTRING()"
    ],
    "answer_en": "RANK()",
    "answer_hi": "RANK()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What kind of function is DENSE_RANK() in SQL?",
    "question_hi": "SQL में DENSE_RANK() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "DENSE_RANK()",
      "SUM()",
      "LAG()",
      "FIRST_VALUE()"
    ],
    "options_hi": [
      "DENSE_RANK()",
      "SUM()",
      "LAG()",
      "FIRST_VALUE()"
    ],
    "answer_en": "DENSE_RANK()",
    "answer_hi": "DENSE_RANK()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What kind of function is NTILE() in SQL?",
    "question_hi": "SQL में NTILE() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "NTILE()",
      "GROUP_CONCAT()",
      "COALESCE()",
      "IFNULL()"
    ],
    "options_hi": [
      "NTILE()",
      "GROUP_CONCAT()",
      "COALESCE()",
      "IFNULL()"
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
      "JSON_OBJECT()",
      "CONCAT()",
      "COUNT()"
    ],
    "options_hi": [
      "LAG()",
      "JSON_OBJECT()",
      "CONCAT()",
      "COUNT()"
    ],
    "answer_en": "LAG()",
    "answer_hi": "LAG()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What kind of function is LEAD() in SQL?",
    "question_hi": "SQL में LEAD() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "LEAD()",
      "RANK()",
      "JSON_EXTRACT()",
      "ROW_NUMBER()"
    ],
    "options_hi": [
      "LEAD()",
      "RANK()",
      "JSON_EXTRACT()",
      "ROW_NUMBER()"
    ],
    "answer_en": "LEAD()",
    "answer_hi": "LEAD()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What kind of function is FIRST_VALUE() in SQL?",
    "question_hi": "SQL में FIRST_VALUE() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "FIRST_VALUE()",
      "LOWER()",
      "LAST_VALUE()",
      "CURDATE()"
    ],
    "options_hi": [
      "FIRST_VALUE()",
      "LOWER()",
      "LAST_VALUE()",
      "CURDATE()"
    ],
    "answer_en": "FIRST_VALUE()",
    "answer_hi": "FIRST_VALUE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What kind of function is LAST_VALUE() in SQL?",
    "question_hi": "SQL में LAST_VALUE() किस प्रकार का फ़ंक्शन है?",
    "options_en": [
      "LAST_VALUE()",
      "SUM()",
      "GROUP_CONCAT()",
      "JSON_EXTRACT()"
    ],
    "options_hi": [
      "LAST_VALUE()",
      "SUM()",
      "GROUP_CONCAT()",
      "JSON_EXTRACT()"
    ],
    "answer_en": "LAST_VALUE()",
    "answer_hi": "LAST_VALUE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which SQL statement is used to perform the operation: SELECT?",
    "question_hi": "किस SQL कथन का उपयोग ऑपरेशन करने के लिए किया जाता है: SELECT?",
    "options_en": [
      "BLOB",
      "CURDATE()",
      "REPLACE",
      "SELECT"
    ],
    "options_hi": [
      "BLOB",
      "CURDATE()",
      "REPLACE",
      "SELECT"
    ],
    "answer_en": "SELECT",
    "answer_hi": "SELECT",
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