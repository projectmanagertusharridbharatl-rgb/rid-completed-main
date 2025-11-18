const questions = [
  {
    "num": 1,
    "question_en": "What is the purpose of the MySQL function UPPER()?",
    "question_hi": "MySQL फ़ंक्शन UPPER() का उद्देश्य क्या है?",
    "options_en": [
      "CREATE FUNCTION",
      "CHAR_LENGTH()",
      "UPPER()",
      "CONCAT()"
    ],
    "options_hi": [
      "CREATE FUNCTION",
      "CHAR_LENGTH()",
      "UPPER()",
      "CONCAT()"
    ],
    "answer_en": "UPPER()",
    "answer_hi": "UPPER()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the purpose of the MySQL function IFNULL()?",
    "question_hi": "MySQL फ़ंक्शन IFNULL() का उद्देश्य क्या है?",
    "options_en": [
      "UPPER()",
      "BLOB",
      "MAX()",
      "IFNULL()"
    ],
    "options_hi": [
      "UPPER()",
      "BLOB",
      "MAX()",
      "IFNULL()"
    ],
    "answer_en": "IFNULL()",
    "answer_hi": "IFNULL()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the purpose of the MySQL function COALESCE()?",
    "question_hi": "MySQL फ़ंक्शन COALESCE() का उद्देश्य क्या है?",
    "options_en": [
      "CREATE PROCEDURE",
      "ALTER TABLE",
      "COALESCE()",
      "TRUNCATE"
    ],
    "options_hi": [
      "CREATE PROCEDURE",
      "ALTER TABLE",
      "COALESCE()",
      "TRUNCATE"
    ],
    "answer_en": "COALESCE()",
    "answer_hi": "COALESCE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the purpose of the MySQL function GROUP_CONCAT()?",
    "question_hi": "MySQL फ़ंक्शन GROUP_CONCAT() का उद्देश्य क्या है?",
    "options_en": [
      "GROUP_CONCAT()",
      "ROW_NUMBER()",
      "JSON_OBJECT()",
      "DROP INDEX"
    ],
    "options_hi": [
      "GROUP_CONCAT()",
      "ROW_NUMBER()",
      "JSON_OBJECT()",
      "DROP INDEX"
    ],
    "answer_en": "GROUP_CONCAT()",
    "answer_hi": "GROUP_CONCAT()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the purpose of the MySQL function ROW_NUMBER()?",
    "question_hi": "MySQL फ़ंक्शन ROW_NUMBER() का उद्देश्य क्या है?",
    "options_en": [
      "ROW_NUMBER()",
      "ALTER TABLE",
      "CHAR_LENGTH()",
      "CONCAT()"
    ],
    "options_hi": [
      "ROW_NUMBER()",
      "ALTER TABLE",
      "CHAR_LENGTH()",
      "CONCAT()"
    ],
    "answer_en": "ROW_NUMBER()",
    "answer_hi": "ROW_NUMBER()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the purpose of the MySQL function RANK()?",
    "question_hi": "MySQL फ़ंक्शन RANK() का उद्देश्य क्या है?",
    "options_en": [
      "IFNULL()",
      "CREATE TABLE",
      "RANK()",
      "LAST_VALUE()"
    ],
    "options_hi": [
      "IFNULL()",
      "CREATE TABLE",
      "RANK()",
      "LAST_VALUE()"
    ],
    "answer_en": "RANK()",
    "answer_hi": "RANK()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the purpose of the MySQL function DENSE_RANK()?",
    "question_hi": "MySQL फ़ंक्शन DENSE_RANK() का उद्देश्य क्या है?",
    "options_en": [
      "COUNT()",
      "DENSE_RANK()",
      "DROP INDEX",
      "CREATE TABLE"
    ],
    "options_hi": [
      "COUNT()",
      "DENSE_RANK()",
      "DROP INDEX",
      "CREATE TABLE"
    ],
    "answer_en": "DENSE_RANK()",
    "answer_hi": "DENSE_RANK()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the purpose of the MySQL function NTILE()?",
    "question_hi": "MySQL फ़ंक्शन NTILE() का उद्देश्य क्या है?",
    "options_en": [
      "ROW_NUMBER()",
      "JSON_OBJECT()",
      "COUNT()",
      "NTILE()"
    ],
    "options_hi": [
      "ROW_NUMBER()",
      "JSON_OBJECT()",
      "COUNT()",
      "NTILE()"
    ],
    "answer_en": "NTILE()",
    "answer_hi": "NTILE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the purpose of the MySQL function LAG()?",
    "question_hi": "MySQL फ़ंक्शन LAG() का उद्देश्य क्या है?",
    "options_en": [
      "DELETE",
      "CHAR_LENGTH()",
      "LAG()",
      "GROUP_CONCAT()"
    ],
    "options_hi": [
      "DELETE",
      "CHAR_LENGTH()",
      "LAG()",
      "GROUP_CONCAT()"
    ],
    "answer_en": "LAG()",
    "answer_hi": "LAG()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the purpose of the MySQL function LEAD()?",
    "question_hi": "MySQL फ़ंक्शन LEAD() का उद्देश्य क्या है?",
    "options_en": [
      "AVG()",
      "CREATE FUNCTION",
      "JSON_ARRAY()",
      "LEAD()"
    ],
    "options_hi": [
      "AVG()",
      "CREATE FUNCTION",
      "JSON_ARRAY()",
      "LEAD()"
    ],
    "answer_en": "LEAD()",
    "answer_hi": "LEAD()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the purpose of the MySQL function FIRST_VALUE()?",
    "question_hi": "MySQL फ़ंक्शन FIRST_VALUE() का उद्देश्य क्या है?",
    "options_en": [
      "DATE_ADD()",
      "FIRST_VALUE()",
      "CREATE TABLE",
      "JSON_OBJECT()"
    ],
    "options_hi": [
      "DATE_ADD()",
      "FIRST_VALUE()",
      "CREATE TABLE",
      "JSON_OBJECT()"
    ],
    "answer_en": "FIRST_VALUE()",
    "answer_hi": "FIRST_VALUE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the purpose of the MySQL function LAST_VALUE()?",
    "question_hi": "MySQL फ़ंक्शन LAST_VALUE() का उद्देश्य क्या है?",
    "options_en": [
      "SELECT",
      "REPLACE",
      "LAST_VALUE()",
      "SUM()"
    ],
    "options_hi": [
      "SELECT",
      "REPLACE",
      "LAST_VALUE()",
      "SUM()"
    ],
    "answer_en": "LAST_VALUE()",
    "answer_hi": "LAST_VALUE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What does the constraint 'PRIMARY KEY' enforce on a column?",
    "question_hi": "कॉलम पर 'PRIMARY KEY' constraint किस चीज़ को लागू करता है?",
    "options_en": [
      "CREATE TABLE",
      "INSERT",
      "DROP INDEX",
      "PRIMARY KEY"
    ],
    "options_hi": [
      "CREATE TABLE",
      "INSERT",
      "DROP INDEX",
      "PRIMARY KEY"
    ],
    "answer_en": "PRIMARY KEY",
    "answer_hi": "PRIMARY KEY",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does the constraint 'FOREIGN KEY' enforce on a column?",
    "question_hi": "कॉलम पर 'FOREIGN KEY' constraint किस चीज़ को लागू करता है?",
    "options_en": [
      "JSON",
      "DROP INDEX",
      "TEXT",
      "FOREIGN KEY"
    ],
    "options_hi": [
      "JSON",
      "DROP INDEX",
      "TEXT",
      "FOREIGN KEY"
    ],
    "answer_en": "FOREIGN KEY",
    "answer_hi": "FOREIGN KEY",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does the constraint 'UNIQUE' enforce on a column?",
    "question_hi": "कॉलम पर 'UNIQUE' constraint किस चीज़ को लागू करता है?",
    "options_en": [
      "UNIQUE",
      "UPDATE",
      "INT",
      "NOT NULL"
    ],
    "options_hi": [
      "UNIQUE",
      "UPDATE",
      "INT",
      "NOT NULL"
    ],
    "answer_en": "UNIQUE",
    "answer_hi": "UNIQUE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What does the constraint 'CHECK' enforce on a column?",
    "question_hi": "कॉलम पर 'CHECK' constraint किस चीज़ को लागू करता है?",
    "options_en": [
      "CREATE TABLE",
      "CHECK",
      "DEFAULT",
      "DROP TABLE"
    ],
    "options_hi": [
      "CREATE TABLE",
      "CHECK",
      "DEFAULT",
      "DROP TABLE"
    ],
    "answer_en": "CHECK",
    "answer_hi": "CHECK",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What does the constraint 'NOT NULL' enforce on a column?",
    "question_hi": "कॉलम पर 'NOT NULL' constraint किस चीज़ को लागू करता है?",
    "options_en": [
      "REPLACE",
      "CREATE TABLE",
      "NOT NULL",
      "INT"
    ],
    "options_hi": [
      "REPLACE",
      "CREATE TABLE",
      "NOT NULL",
      "INT"
    ],
    "answer_en": "NOT NULL",
    "answer_hi": "NOT NULL",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does the constraint 'DEFAULT' enforce on a column?",
    "question_hi": "कॉलम पर 'DEFAULT' constraint किस चीज़ को लागू करता है?",
    "options_en": [
      "DATE",
      "CREATE INDEX",
      "DEFAULT",
      "REPLACE"
    ],
    "options_hi": [
      "DATE",
      "CREATE INDEX",
      "DEFAULT",
      "REPLACE"
    ],
    "answer_en": "DEFAULT",
    "answer_hi": "DEFAULT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which storage engine is 'InnoDB' in MySQL?",
    "question_hi": "MySQL में 'InnoDB' एक storage engine है?",
    "options_en": [
      "CREATE TABLE",
      "InnoDB",
      "SELECT",
      "INSERT"
    ],
    "options_hi": [
      "CREATE TABLE",
      "InnoDB",
      "SELECT",
      "INSERT"
    ],
    "answer_en": "InnoDB",
    "answer_hi": "InnoDB",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which storage engine is 'MyISAM' in MySQL?",
    "question_hi": "MySQL में 'MyISAM' एक storage engine है?",
    "options_en": [
      "REPLACE",
      "ALTER TABLE",
      "SPATIAL",
      "MyISAM"
    ],
    "options_hi": [
      "REPLACE",
      "ALTER TABLE",
      "SPATIAL",
      "MyISAM"
    ],
    "answer_en": "MyISAM",
    "answer_hi": "MyISAM",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which storage engine is 'Memory' in MySQL?",
    "question_hi": "MySQL में 'Memory' एक storage engine है?",
    "options_en": [
      "Memory",
      "CREATE INDEX",
      "CREATE PROCEDURE",
      "UPDATE"
    ],
    "options_hi": [
      "Memory",
      "CREATE INDEX",
      "CREATE PROCEDURE",
      "UPDATE"
    ],
    "answer_en": "Memory",
    "answer_hi": "Memory",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which storage engine is 'CSV' in MySQL?",
    "question_hi": "MySQL में 'CSV' एक storage engine है?",
    "options_en": [
      "InnoDB",
      "CREATE PROCEDURE",
      "CSV",
      "DELETE"
    ],
    "options_hi": [
      "InnoDB",
      "CREATE PROCEDURE",
      "CSV",
      "DELETE"
    ],
    "answer_en": "CSV",
    "answer_hi": "CSV",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which storage engine is 'NDB' in MySQL?",
    "question_hi": "MySQL में 'NDB' एक storage engine है?",
    "options_en": [
      "CREATE VIEW",
      "InnoDB",
      "FULLTEXT",
      "NDB"
    ],
    "options_hi": [
      "CREATE VIEW",
      "InnoDB",
      "FULLTEXT",
      "NDB"
    ],
    "answer_en": "NDB",
    "answer_hi": "NDB",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which storage engine is 'Archive' in MySQL?",
    "question_hi": "MySQL में 'Archive' एक storage engine है?",
    "options_en": [
      "CSV",
      "Archive",
      "Memory",
      "SELECT"
    ],
    "options_hi": [
      "CSV",
      "Archive",
      "Memory",
      "SELECT"
    ],
    "answer_en": "Archive",
    "answer_hi": "Archive",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which index type is 'BTREE'?",
    "question_hi": "'BTREE' किस प्रकार का index है?",
    "options_en": [
      "BTREE",
      "TRUNCATE",
      "SPATIAL",
      "CREATE VIEW"
    ],
    "options_hi": [
      "BTREE",
      "TRUNCATE",
      "SPATIAL",
      "CREATE VIEW"
    ],
    "answer_en": "BTREE",
    "answer_hi": "BTREE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which index type is 'HASH'?",
    "question_hi": "'HASH' किस प्रकार का index है?",
    "options_en": [
      "HASH",
      "DROP INDEX",
      "TRUNCATE",
      "FULLTEXT"
    ],
    "options_hi": [
      "HASH",
      "DROP INDEX",
      "TRUNCATE",
      "FULLTEXT"
    ],
    "answer_en": "HASH",
    "answer_hi": "HASH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which index type is 'FULLTEXT'?",
    "question_hi": "'FULLTEXT' किस प्रकार का index है?",
    "options_en": [
      "FULLTEXT",
      "UPDATE",
      "SPATIAL",
      "InnoDB"
    ],
    "options_hi": [
      "FULLTEXT",
      "UPDATE",
      "SPATIAL",
      "InnoDB"
    ],
    "answer_en": "FULLTEXT",
    "answer_hi": "FULLTEXT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which index type is 'SPATIAL'?",
    "question_hi": "'SPATIAL' किस प्रकार का index है?",
    "options_en": [
      "SPATIAL",
      "TRUNCATE",
      "DELETE",
      "HASH"
    ],
    "options_hi": [
      "SPATIAL",
      "TRUNCATE",
      "DELETE",
      "HASH"
    ],
    "answer_en": "SPATIAL",
    "answer_hi": "SPATIAL",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which data type is appropriate for storing INT values?",
    "question_hi": "INT मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "NOW()",
      "INT",
      "CURDATE()",
      "CONCAT()"
    ],
    "options_hi": [
      "NOW()",
      "INT",
      "CURDATE()",
      "CONCAT()"
    ],
    "answer_en": "INT",
    "answer_hi": "INT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which data type is appropriate for storing VARCHAR(255) values?",
    "question_hi": "VARCHAR(255) मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "MIN()",
      "DATE_ADD()",
      "VARCHAR(255)",
      "JSON_EXTRACT()"
    ],
    "options_hi": [
      "MIN()",
      "DATE_ADD()",
      "VARCHAR(255)",
      "JSON_EXTRACT()"
    ],
    "answer_en": "VARCHAR(255)",
    "answer_hi": "VARCHAR(255)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which data type is appropriate for storing TEXT values?",
    "question_hi": "TEXT मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "CREATE INDEX",
      "CREATE FUNCTION",
      "JSON",
      "TEXT"
    ],
    "options_hi": [
      "CREATE INDEX",
      "CREATE FUNCTION",
      "JSON",
      "TEXT"
    ],
    "answer_en": "TEXT",
    "answer_hi": "TEXT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which data type is appropriate for storing DATE values?",
    "question_hi": "DATE मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "BLOB",
      "DATE",
      "TEXT",
      "SELECT"
    ],
    "options_hi": [
      "BLOB",
      "DATE",
      "TEXT",
      "SELECT"
    ],
    "answer_en": "DATE",
    "answer_hi": "DATE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which data type is appropriate for storing DATETIME values?",
    "question_hi": "DATETIME मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "GROUP_CONCAT()",
      "DATETIME",
      "CREATE PROCEDURE",
      "CREATE VIEW"
    ],
    "options_hi": [
      "GROUP_CONCAT()",
      "DATETIME",
      "CREATE PROCEDURE",
      "CREATE VIEW"
    ],
    "answer_en": "DATETIME",
    "answer_hi": "DATETIME",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which data type is appropriate for storing TIMESTAMP values?",
    "question_hi": "TIMESTAMP मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "DATEDIFF()",
      "CURDATE()",
      "TIMESTAMP",
      "JSON"
    ],
    "options_hi": [
      "DATEDIFF()",
      "CURDATE()",
      "TIMESTAMP",
      "JSON"
    ],
    "answer_en": "TIMESTAMP",
    "answer_hi": "TIMESTAMP",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which data type is appropriate for storing JSON values?",
    "question_hi": "JSON मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "TIMESTAMP",
      "IFNULL()",
      "UPDATE",
      "JSON"
    ],
    "options_hi": [
      "TIMESTAMP",
      "IFNULL()",
      "UPDATE",
      "JSON"
    ],
    "answer_en": "JSON",
    "answer_hi": "JSON",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which data type is appropriate for storing BLOB values?",
    "question_hi": "BLOB मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "CHAR_LENGTH()",
      "BLOB",
      "CONCAT()",
      "NOW()"
    ],
    "options_hi": [
      "CHAR_LENGTH()",
      "BLOB",
      "CONCAT()",
      "NOW()"
    ],
    "answer_en": "BLOB",
    "answer_hi": "BLOB",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which data type is appropriate for storing DECIMAL(10,2) values?",
    "question_hi": "DECIMAL(10,2) मानों को संग्रहीत करने के लिए उपयुक्त data type कौन-सा है?",
    "options_en": [
      "COALESCE()",
      "DATE",
      "MIN()",
      "DECIMAL(10,2)"
    ],
    "options_hi": [
      "COALESCE()",
      "DATE",
      "MIN()",
      "DECIMAL(10,2)"
    ],
    "answer_en": "DECIMAL(10,2)",
    "answer_hi": "DECIMAL(10,2)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which isolation level is 'READ UNCOMMITTED'?",
    "question_hi": "'READ UNCOMMITTED' कौन-सा isolation level है?",
    "options_en": [
      "READ UNCOMMITTED",
      "BEGIN",
      "ROLLBACK",
      "RELEASE SAVEPOINT"
    ],
    "options_hi": [
      "READ UNCOMMITTED",
      "BEGIN",
      "ROLLBACK",
      "RELEASE SAVEPOINT"
    ],
    "answer_en": "READ UNCOMMITTED",
    "answer_hi": "READ UNCOMMITTED",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which isolation level is 'READ COMMITTED'?",
    "question_hi": "'READ COMMITTED' कौन-सा isolation level है?",
    "options_en": [
      "READ COMMITTED",
      "RELEASE SAVEPOINT",
      "REPEATABLE READ",
      "COMMIT"
    ],
    "options_hi": [
      "READ COMMITTED",
      "RELEASE SAVEPOINT",
      "REPEATABLE READ",
      "COMMIT"
    ],
    "answer_en": "READ COMMITTED",
    "answer_hi": "READ COMMITTED",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which isolation level is 'REPEATABLE READ'?",
    "question_hi": "'REPEATABLE READ' कौन-सा isolation level है?",
    "options_en": [
      "REPEATABLE READ",
      "COMMIT",
      "ROLLBACK",
      "READ UNCOMMITTED"
    ],
    "options_hi": [
      "REPEATABLE READ",
      "COMMIT",
      "ROLLBACK",
      "READ UNCOMMITTED"
    ],
    "answer_en": "REPEATABLE READ",
    "answer_hi": "REPEATABLE READ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which isolation level is 'SERIALIZABLE'?",
    "question_hi": "'SERIALIZABLE' कौन-सा isolation level है?",
    "options_en": [
      "SERIALIZABLE",
      "SAVEPOINT",
      "READ COMMITTED",
      "REPEATABLE READ"
    ],
    "options_hi": [
      "SERIALIZABLE",
      "SAVEPOINT",
      "READ COMMITTED",
      "REPEATABLE READ"
    ],
    "answer_en": "SERIALIZABLE",
    "answer_hi": "SERIALIZABLE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the role of transaction statement 'BEGIN'?",
    "question_hi": "'BEGIN' transaction स्टेटमेंट की भूमिका क्या है?",
    "options_en": [
      "BEGIN",
      "ROLLBACK",
      "DROP TABLE",
      "RELEASE SAVEPOINT"
    ],
    "options_hi": [
      "BEGIN",
      "ROLLBACK",
      "DROP TABLE",
      "RELEASE SAVEPOINT"
    ],
    "answer_en": "BEGIN",
    "answer_hi": "BEGIN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the role of transaction statement 'COMMIT'?",
    "question_hi": "'COMMIT' transaction स्टेटमेंट की भूमिका क्या है?",
    "options_en": [
      "COMMIT",
      "SAVEPOINT",
      "DROP INDEX",
      "REPLACE"
    ],
    "options_hi": [
      "COMMIT",
      "SAVEPOINT",
      "DROP INDEX",
      "REPLACE"
    ],
    "answer_en": "COMMIT",
    "answer_hi": "COMMIT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the role of transaction statement 'ROLLBACK'?",
    "question_hi": "'ROLLBACK' transaction स्टेटमेंट की भूमिका क्या है?",
    "options_en": [
      "ROLLBACK",
      "DROP TABLE",
      "RELEASE SAVEPOINT",
      "BEGIN"
    ],
    "options_hi": [
      "ROLLBACK",
      "DROP TABLE",
      "RELEASE SAVEPOINT",
      "BEGIN"
    ],
    "answer_en": "ROLLBACK",
    "answer_hi": "ROLLBACK",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the role of transaction statement 'SAVEPOINT'?",
    "question_hi": "'SAVEPOINT' transaction स्टेटमेंट की भूमिका क्या है?",
    "options_en": [
      "SAVEPOINT",
      "COMMIT",
      "CREATE VIEW",
      "DROP TABLE"
    ],
    "options_hi": [
      "SAVEPOINT",
      "COMMIT",
      "CREATE VIEW",
      "DROP TABLE"
    ],
    "answer_en": "SAVEPOINT",
    "answer_hi": "SAVEPOINT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the role of transaction statement 'RELEASE SAVEPOINT'?",
    "question_hi": "'RELEASE SAVEPOINT' transaction स्टेटमेंट की भूमिका क्या है?",
    "options_en": [
      "RELEASE SAVEPOINT",
      "REPLACE",
      "COMMIT",
      "ALTER TABLE"
    ],
    "options_hi": [
      "RELEASE SAVEPOINT",
      "REPLACE",
      "COMMIT",
      "ALTER TABLE"
    ],
    "answer_en": "RELEASE SAVEPOINT",
    "answer_hi": "RELEASE SAVEPOINT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What does the MySQL command 'EXPLAIN' do?",
    "question_hi": "MySQL कमांड 'EXPLAIN' क्या करता है?",
    "options_en": [
      "EXPLAIN",
      "OPTIMIZE TABLE",
      "INSERT",
      "CREATE TABLE"
    ],
    "options_hi": [
      "EXPLAIN",
      "OPTIMIZE TABLE",
      "INSERT",
      "CREATE TABLE"
    ],
    "answer_en": "EXPLAIN",
    "answer_hi": "EXPLAIN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What does the MySQL command 'ANALYZE' do?",
    "question_hi": "MySQL कमांड 'ANALYZE' क्या करता है?",
    "options_en": [
      "ANALYZE",
      "CREATE INDEX",
      "CREATE VIEW",
      "DESCRIBE"
    ],
    "options_hi": [
      "ANALYZE",
      "CREATE INDEX",
      "CREATE VIEW",
      "DESCRIBE"
    ],
    "answer_en": "ANALYZE",
    "answer_hi": "ANALYZE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What does the MySQL command 'OPTIMIZE TABLE' do?",
    "question_hi": "MySQL कमांड 'OPTIMIZE TABLE' क्या करता है?",
    "options_en": [
      "OPTIMIZE TABLE",
      "TRUNCATE",
      "DROP TABLE",
      "DESCRIBE"
    ],
    "options_hi": [
      "OPTIMIZE TABLE",
      "TRUNCATE",
      "DROP TABLE",
      "DESCRIBE"
    ],
    "answer_en": "OPTIMIZE TABLE",
    "answer_hi": "OPTIMIZE TABLE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does the MySQL command 'FLUSH' do?",
    "question_hi": "MySQL कमांड 'FLUSH' क्या करता है?",
    "options_en": [
      "FLUSH",
      "UPDATE",
      "DROP TABLE",
      "REPLACE"
    ],
    "options_hi": [
      "FLUSH",
      "UPDATE",
      "DROP TABLE",
      "REPLACE"
    ],
    "answer_en": "FLUSH",
    "answer_hi": "FLUSH",
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