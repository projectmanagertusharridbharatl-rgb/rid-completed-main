const questions = [
  {
    "num": 1,
    "question_en": "What does the LEFT JOIN do in terms of result rows?",
    "question_hi": "LEFT JOIN परिणाम पंक्तियों के संदर्भ में क्या करता है?",
    "options_en": [
      "FULL JOIN",
      "DROP TABLE",
      "CREATE PROCEDURE",
      "LEFT JOIN"
    ],
    "options_hi": [
      "FULL JOIN",
      "DROP TABLE",
      "CREATE PROCEDURE",
      "LEFT JOIN"
    ],
    "answer_en": "LEFT JOIN",
    "answer_hi": "LEFT JOIN",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "What does the RIGHT JOIN do in terms of result rows?",
    "question_hi": "RIGHT JOIN परिणाम पंक्तियों के संदर्भ में क्या करता है?",
    "options_en": [
      "LIMIT",
      "RIGHT JOIN",
      "ALTER TABLE",
      "GROUP BY"
    ],
    "options_hi": [
      "LIMIT",
      "RIGHT JOIN",
      "ALTER TABLE",
      "GROUP BY"
    ],
    "answer_en": "RIGHT JOIN",
    "answer_hi": "RIGHT JOIN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does the FULL JOIN do in terms of result rows?",
    "question_hi": "FULL JOIN परिणाम पंक्तियों के संदर्भ में क्या करता है?",
    "options_en": [
      "CREATE VIEW",
      "INNER JOIN",
      "FULL JOIN",
      "INSERT"
    ],
    "options_hi": [
      "CREATE VIEW",
      "INNER JOIN",
      "FULL JOIN",
      "INSERT"
    ],
    "answer_en": "FULL JOIN",
    "answer_hi": "FULL JOIN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What does the CROSS JOIN do in terms of result rows?",
    "question_hi": "CROSS JOIN परिणाम पंक्तियों के संदर्भ में क्या करता है?",
    "options_en": [
      "WHERE",
      "DROP INDEX",
      "CROSS JOIN",
      "UPDATE"
    ],
    "options_hi": [
      "WHERE",
      "DROP INDEX",
      "CROSS JOIN",
      "UPDATE"
    ],
    "answer_en": "CROSS JOIN",
    "answer_hi": "CROSS JOIN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the purpose of the MySQL function COUNT()?",
    "question_hi": "MySQL फ़ंक्शन COUNT() का उद्देश्य क्या है?",
    "options_en": [
      "DATE",
      "TRUNCATE",
      "COUNT()",
      "ALTER TABLE"
    ],
    "options_hi": [
      "DATE",
      "TRUNCATE",
      "COUNT()",
      "ALTER TABLE"
    ],
    "answer_en": "COUNT()",
    "answer_hi": "COUNT()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the purpose of the MySQL function SUM()?",
    "question_hi": "MySQL फ़ंक्शन SUM() का उद्देश्य क्या है?",
    "options_en": [
      "JSON_EXTRACT()",
      "SUM()",
      "UPPER()",
      "SUBSTRING()"
    ],
    "options_hi": [
      "JSON_EXTRACT()",
      "SUM()",
      "UPPER()",
      "SUBSTRING()"
    ],
    "answer_en": "SUM()",
    "answer_hi": "SUM()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the purpose of the MySQL function AVG()?",
    "question_hi": "MySQL फ़ंक्शन AVG() का उद्देश्य क्या है?",
    "options_en": [
      "COALESCE()",
      "TEXT",
      "AVG()",
      "DATE_ADD()"
    ],
    "options_hi": [
      "COALESCE()",
      "TEXT",
      "AVG()",
      "DATE_ADD()"
    ],
    "answer_en": "AVG()",
    "answer_hi": "AVG()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the purpose of the MySQL function MIN()?",
    "question_hi": "MySQL फ़ंक्शन MIN() का उद्देश्य क्या है?",
    "options_en": [
      "MIN()",
      "JSON_ARRAY()",
      "ALTER TABLE",
      "DATE_ADD()"
    ],
    "options_hi": [
      "MIN()",
      "JSON_ARRAY()",
      "ALTER TABLE",
      "DATE_ADD()"
    ],
    "answer_en": "MIN()",
    "answer_hi": "MIN()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the purpose of the MySQL function MAX()?",
    "question_hi": "MySQL फ़ंक्शन MAX() का उद्देश्य क्या है?",
    "options_en": [
      "MIN()",
      "BLOB",
      "MAX()",
      "CREATE PROCEDURE"
    ],
    "options_hi": [
      "MIN()",
      "BLOB",
      "MAX()",
      "CREATE PROCEDURE"
    ],
    "answer_en": "MAX()",
    "answer_hi": "MAX()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the purpose of the MySQL function NOW()?",
    "question_hi": "MySQL फ़ंक्शन NOW() का उद्देश्य क्या है?",
    "options_en": [
      "DELETE",
      "RANK()",
      "AVG()",
      "NOW()"
    ],
    "options_hi": [
      "DELETE",
      "RANK()",
      "AVG()",
      "NOW()"
    ],
    "answer_en": "NOW()",
    "answer_hi": "NOW()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the purpose of the MySQL function CURDATE()?",
    "question_hi": "MySQL फ़ंक्शन CURDATE() का उद्देश्य क्या है?",
    "options_en": [
      "RANK()",
      "TRUNCATE",
      "CURDATE()",
      "TEXT"
    ],
    "options_hi": [
      "RANK()",
      "TRUNCATE",
      "CURDATE()",
      "TEXT"
    ],
    "answer_en": "CURDATE()",
    "answer_hi": "CURDATE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the purpose of the MySQL function DATEDIFF()?",
    "question_hi": "MySQL फ़ंक्शन DATEDIFF() का उद्देश्य क्या है?",
    "options_en": [
      "JSON_OBJECT()",
      "SUM()",
      "DATEDIFF()",
      "VARCHAR(255)"
    ],
    "options_hi": [
      "JSON_OBJECT()",
      "SUM()",
      "DATEDIFF()",
      "VARCHAR(255)"
    ],
    "answer_en": "DATEDIFF()",
    "answer_hi": "DATEDIFF()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the purpose of the MySQL function DATE_ADD()?",
    "question_hi": "MySQL फ़ंक्शन DATE_ADD() का उद्देश्य क्या है?",
    "options_en": [
      "CHAR_LENGTH()",
      "LENGTH()",
      "JSON_EXTRACT()",
      "DATE_ADD()"
    ],
    "options_hi": [
      "CHAR_LENGTH()",
      "LENGTH()",
      "JSON_EXTRACT()",
      "DATE_ADD()"
    ],
    "answer_en": "DATE_ADD()",
    "answer_hi": "DATE_ADD()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the purpose of the MySQL function DATE_SUB()?",
    "question_hi": "MySQL फ़ंक्शन DATE_SUB() का उद्देश्य क्या है?",
    "options_en": [
      "FIRST_VALUE()",
      "CREATE FUNCTION",
      "DATE_ADD()",
      "DATE_SUB()"
    ],
    "options_hi": [
      "FIRST_VALUE()",
      "CREATE FUNCTION",
      "DATE_ADD()",
      "DATE_SUB()"
    ],
    "answer_en": "DATE_SUB()",
    "answer_hi": "DATE_SUB()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the purpose of the MySQL function JSON_EXTRACT()?",
    "question_hi": "MySQL फ़ंक्शन JSON_EXTRACT() का उद्देश्य क्या है?",
    "options_en": [
      "RANK()",
      "CREATE TABLE",
      "FIRST_VALUE()",
      "JSON_EXTRACT()"
    ],
    "options_hi": [
      "RANK()",
      "CREATE TABLE",
      "FIRST_VALUE()",
      "JSON_EXTRACT()"
    ],
    "answer_en": "JSON_EXTRACT()",
    "answer_hi": "JSON_EXTRACT()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the purpose of the MySQL function JSON_OBJECT()?",
    "question_hi": "MySQL फ़ंक्शन JSON_OBJECT() का उद्देश्य क्या है?",
    "options_en": [
      "JSON_OBJECT()",
      "SELECT",
      "TRUNCATE",
      "SUM()"
    ],
    "options_hi": [
      "JSON_OBJECT()",
      "SELECT",
      "TRUNCATE",
      "SUM()"
    ],
    "answer_en": "JSON_OBJECT()",
    "answer_hi": "JSON_OBJECT()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the purpose of the MySQL function JSON_ARRAY()?",
    "question_hi": "MySQL फ़ंक्शन JSON_ARRAY() का उद्देश्य क्या है?",
    "options_en": [
      "JSON_ARRAY()",
      "ROW_NUMBER()",
      "DATE",
      "VARCHAR(255)"
    ],
    "options_hi": [
      "JSON_ARRAY()",
      "ROW_NUMBER()",
      "DATE",
      "VARCHAR(255)"
    ],
    "answer_en": "JSON_ARRAY()",
    "answer_hi": "JSON_ARRAY()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the purpose of the MySQL function CONCAT()?",
    "question_hi": "MySQL फ़ंक्शन CONCAT() का उद्देश्य क्या है?",
    "options_en": [
      "DATE_ADD()",
      "CREATE TABLE",
      "JSON_ARRAY()",
      "CONCAT()"
    ],
    "options_hi": [
      "DATE_ADD()",
      "CREATE TABLE",
      "JSON_ARRAY()",
      "CONCAT()"
    ],
    "answer_en": "CONCAT()",
    "answer_hi": "CONCAT()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the purpose of the MySQL function SUBSTRING()?",
    "question_hi": "MySQL फ़ंक्शन SUBSTRING() का उद्देश्य क्या है?",
    "options_en": [
      "CURDATE()",
      "SUBSTRING()",
      "LAG()",
      "DATE_SUB()"
    ],
    "options_hi": [
      "CURDATE()",
      "SUBSTRING()",
      "LAG()",
      "DATE_SUB()"
    ],
    "answer_en": "SUBSTRING()",
    "answer_hi": "SUBSTRING()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the purpose of the MySQL function LENGTH()?",
    "question_hi": "MySQL फ़ंक्शन LENGTH() का उद्देश्य क्या है?",
    "options_en": [
      "LENGTH()",
      "DECIMAL(10,2)",
      "LAG()",
      "LEAD()"
    ],
    "options_hi": [
      "LENGTH()",
      "DECIMAL(10,2)",
      "LAG()",
      "LEAD()"
    ],
    "answer_en": "LENGTH()",
    "answer_hi": "LENGTH()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the purpose of the MySQL function CHAR_LENGTH()?",
    "question_hi": "MySQL फ़ंक्शन CHAR_LENGTH() का उद्देश्य क्या है?",
    "options_en": [
      "LAG()",
      "DATE",
      "CHAR_LENGTH()",
      "DATE_ADD()"
    ],
    "options_hi": [
      "LAG()",
      "DATE",
      "CHAR_LENGTH()",
      "DATE_ADD()"
    ],
    "answer_en": "CHAR_LENGTH()",
    "answer_hi": "CHAR_LENGTH()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the purpose of the MySQL function LOWER()?",
    "question_hi": "MySQL फ़ंक्शन LOWER() का उद्देश्य क्या है?",
    "options_en": [
      "UPDATE",
      "SUM()",
      "CONCAT()",
      "LOWER()"
    ],
    "options_hi": [
      "UPDATE",
      "SUM()",
      "CONCAT()",
      "LOWER()"
    ],
    "answer_en": "LOWER()",
    "answer_hi": "LOWER()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the purpose of the MySQL function UPPER()?",
    "question_hi": "MySQL फ़ंक्शन UPPER() का उद्देश्य क्या है?",
    "options_en": [
      "UPPER()",
      "LAST_VALUE()",
      "CREATE TABLE",
      "IFNULL()"
    ],
    "options_hi": [
      "UPPER()",
      "LAST_VALUE()",
      "CREATE TABLE",
      "IFNULL()"
    ],
    "answer_en": "UPPER()",
    "answer_hi": "UPPER()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the purpose of the MySQL function IFNULL()?",
    "question_hi": "MySQL फ़ंक्शन IFNULL() का उद्देश्य क्या है?",
    "options_en": [
      "SUM()",
      "MIN()",
      "IFNULL()",
      "TIMESTAMP"
    ],
    "options_hi": [
      "SUM()",
      "MIN()",
      "IFNULL()",
      "TIMESTAMP"
    ],
    "answer_en": "IFNULL()",
    "answer_hi": "IFNULL()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the purpose of the MySQL function COALESCE()?",
    "question_hi": "MySQL फ़ंक्शन COALESCE() का उद्देश्य क्या है?",
    "options_en": [
      "COALESCE()",
      "DATETIME",
      "GROUP_CONCAT()",
      "SUM()"
    ],
    "options_hi": [
      "COALESCE()",
      "DATETIME",
      "GROUP_CONCAT()",
      "SUM()"
    ],
    "answer_en": "COALESCE()",
    "answer_hi": "COALESCE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "What is the purpose of the MySQL function GROUP_CONCAT()?",
    "question_hi": "MySQL फ़ंक्शन GROUP_CONCAT() का उद्देश्य क्या है?",
    "options_en": [
      "SUM()",
      "GROUP_CONCAT()",
      "SUBSTRING()",
      "DROP INDEX"
    ],
    "options_hi": [
      "SUM()",
      "GROUP_CONCAT()",
      "SUBSTRING()",
      "DROP INDEX"
    ],
    "answer_en": "GROUP_CONCAT()",
    "answer_hi": "GROUP_CONCAT()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the purpose of the MySQL function ROW_NUMBER()?",
    "question_hi": "MySQL फ़ंक्शन ROW_NUMBER() का उद्देश्य क्या है?",
    "options_en": [
      "REPLACE",
      "LAST_VALUE()",
      "MAX()",
      "ROW_NUMBER()"
    ],
    "options_hi": [
      "REPLACE",
      "LAST_VALUE()",
      "MAX()",
      "ROW_NUMBER()"
    ],
    "answer_en": "ROW_NUMBER()",
    "answer_hi": "ROW_NUMBER()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the purpose of the MySQL function RANK()?",
    "question_hi": "MySQL फ़ंक्शन RANK() का उद्देश्य क्या है?",
    "options_en": [
      "RANK()",
      "DATE_ADD()",
      "VARCHAR(255)",
      "COUNT()"
    ],
    "options_hi": [
      "RANK()",
      "DATE_ADD()",
      "VARCHAR(255)",
      "COUNT()"
    ],
    "answer_en": "RANK()",
    "answer_hi": "RANK()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the purpose of the MySQL function DENSE_RANK()?",
    "question_hi": "MySQL फ़ंक्शन DENSE_RANK() का उद्देश्य क्या है?",
    "options_en": [
      "CREATE INDEX",
      "BLOB",
      "DATETIME",
      "DENSE_RANK()"
    ],
    "options_hi": [
      "CREATE INDEX",
      "BLOB",
      "DATETIME",
      "DENSE_RANK()"
    ],
    "answer_en": "DENSE_RANK()",
    "answer_hi": "DENSE_RANK()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the purpose of the MySQL function NTILE()?",
    "question_hi": "MySQL फ़ंक्शन NTILE() का उद्देश्य क्या है?",
    "options_en": [
      "RANK()",
      "SUM()",
      "INSERT",
      "NTILE()"
    ],
    "options_hi": [
      "RANK()",
      "SUM()",
      "INSERT",
      "NTILE()"
    ],
    "answer_en": "NTILE()",
    "answer_hi": "NTILE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the purpose of the MySQL function LAG()?",
    "question_hi": "MySQL फ़ंक्शन LAG() का उद्देश्य क्या है?",
    "options_en": [
      "UPDATE",
      "MIN()",
      "UPPER()",
      "LAG()"
    ],
    "options_hi": [
      "UPDATE",
      "MIN()",
      "UPPER()",
      "LAG()"
    ],
    "answer_en": "LAG()",
    "answer_hi": "LAG()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the purpose of the MySQL function LEAD()?",
    "question_hi": "MySQL फ़ंक्शन LEAD() का उद्देश्य क्या है?",
    "options_en": [
      "CURDATE()",
      "SELECT",
      "LOWER()",
      "LEAD()"
    ],
    "options_hi": [
      "CURDATE()",
      "SELECT",
      "LOWER()",
      "LEAD()"
    ],
    "answer_en": "LEAD()",
    "answer_hi": "LEAD()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the purpose of the MySQL function FIRST_VALUE()?",
    "question_hi": "MySQL फ़ंक्शन FIRST_VALUE() का उद्देश्य क्या है?",
    "options_en": [
      "NOW()",
      "SUM()",
      "LAST_VALUE()",
      "FIRST_VALUE()"
    ],
    "options_hi": [
      "NOW()",
      "SUM()",
      "LAST_VALUE()",
      "FIRST_VALUE()"
    ],
    "answer_en": "FIRST_VALUE()",
    "answer_hi": "FIRST_VALUE()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the purpose of the MySQL function LAST_VALUE()?",
    "question_hi": "MySQL फ़ंक्शन LAST_VALUE() का उद्देश्य क्या है?",
    "options_en": [
      "JSON_OBJECT()",
      "CREATE TABLE",
      "LAST_VALUE()",
      "AVG()"
    ],
    "options_hi": [
      "JSON_OBJECT()",
      "CREATE TABLE",
      "LAST_VALUE()",
      "AVG()"
    ],
    "answer_en": "LAST_VALUE()",
    "answer_hi": "LAST_VALUE()",
    "attempted": false,
    "selected": ""
  },
  {"num": 35,
    "question_en": "What does the constraint 'PRIMARY KEY' enforce on a column?",
    "question_hi": "कॉलम पर 'PRIMARY KEY' constraint किस चीज़ को लागू करता है?",
    "options_en": [
      "UNIQUE",
      "TRUNCATE",
      "PRIMARY KEY",
      "FOREIGN KEY"
    ],
    "options_hi": [
      "UNIQUE",
      "TRUNCATE",
      "PRIMARY KEY",
      "FOREIGN KEY"
    ],
    "answer_en": "PRIMARY KEY",
    "answer_hi": "PRIMARY KEY",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What does the constraint 'FOREIGN KEY' enforce on a column?",
    "question_hi": "कॉलम पर 'FOREIGN KEY' constraint किस चीज़ को लागू करता है?",
    "options_en": [
      "INSERT",
      "TRUNCATE",
      "FOREIGN KEY",
      "JSON"
    ],
    "options_hi": [
      "INSERT",
      "TRUNCATE",
      "FOREIGN KEY",
      "JSON"
    ],
    "answer_en": "FOREIGN KEY",
    "answer_hi": "FOREIGN KEY",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What does the constraint 'UNIQUE' enforce on a column?",
    "question_hi": "कॉलम पर 'UNIQUE' constraint किस चीज़ को लागू करता है?",
    "options_en": [
      "UNIQUE",
      "TEXT",
      "SELECT",
      "INSERT"
    ],
    "options_hi": [
      "UNIQUE",
      "TEXT",
      "SELECT",
      "INSERT"
    ],
    "answer_en": "UNIQUE",
    "answer_hi": "UNIQUE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does the constraint 'CHECK' enforce on a column?",
    "question_hi": "कॉलम पर 'CHECK' constraint किस चीज़ को लागू करता है?",
    "options_en": [
      "CREATE PROCEDURE",
      "DROP INDEX",
      "CHECK",
      "PRIMARY KEY"
    ],
    "options_hi": [
      "CREATE PROCEDURE",
      "DROP INDEX",
      "CHECK",
      "PRIMARY KEY"
    ],
    "answer_en": "CHECK",
    "answer_hi": "CHECK",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What does the constraint 'NOT NULL' enforce on a column?",
    "question_hi": "कॉलम पर 'NOT NULL' constraint किस चीज़ को लागू करता है?",
    "options_en": [
      "CREATE FUNCTION",
      "NOT NULL",
      "DECIMAL(10,2)",
      "TEXT"
    ],
    "options_hi": [
      "CREATE FUNCTION",
      "NOT NULL",
      "DECIMAL(10,2)",
      "TEXT"
    ],
    "answer_en": "NOT NULL",
    "answer_hi": "NOT NULL",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What does the constraint 'DEFAULT' enforce on a column?",
    "question_hi": "कॉलम पर 'DEFAULT' constraint किस चीज़ को लागू करता है?",
    "options_en": [
      "NOT NULL",
      "DEFAULT",
      "VARCHAR(255)",
      "REPLACE"
    ],
    "options_hi": [
      "NOT NULL",
      "DEFAULT",
      "VARCHAR(255)",
      "REPLACE"
    ],
    "answer_en": "DEFAULT",
    "answer_hi": "DEFAULT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which storage engine is 'InnoDB' in MySQL?",
    "question_hi": "MySQL में 'InnoDB' एक storage engine है?",
    "options_en": [
      "SPATIAL",
      "InnoDB",
      "CSV",
      "CREATE PROCEDURE"
    ],
    "options_hi": [
      "SPATIAL",
      "InnoDB",
      "CSV",
      "CREATE PROCEDURE"
    ],
    "answer_en": "InnoDB",
    "answer_hi": "InnoDB",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which storage engine is 'MyISAM' in MySQL?",
    "question_hi": "MySQL में 'MyISAM' एक storage engine है?",
    "options_en": [
      "DELETE",
      "UPDATE",
      "CSV",
      "MyISAM"
    ],
    "options_hi": [
      "DELETE",
      "UPDATE",
      "CSV",
      "MyISAM"
    ],
    "answer_en": "MyISAM",
    "answer_hi": "MyISAM",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which storage engine is 'Memory' in MySQL?",
    "question_hi": "MySQL में 'Memory' एक storage engine है?",
    "options_en": [
      "Memory",
      "SELECT",
      "UPDATE",
      "Archive"
    ],
    "options_hi": [
      "Memory",
      "SELECT",
      "UPDATE",
      "Archive"
    ],
    "answer_en": "Memory",
    "answer_hi": "Memory",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which storage engine is 'CSV' in MySQL?",
    "question_hi": "MySQL में 'CSV' एक storage engine है?",
    "options_en": [
      "CREATE VIEW",
      "ALTER TABLE",
      "BTREE",
      "CSV"
    ],
    "options_hi": [
      "CREATE VIEW",
      "ALTER TABLE",
      "BTREE",
      "CSV"
    ],
    "answer_en": "CSV",
    "answer_hi": "CSV",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which storage engine is 'NDB' in MySQL?",
    "question_hi": "MySQL में 'NDB' एक storage engine है?",
    "options_en": [
      "NDB",
      "DROP TABLE",
      "REPLACE",
      "CSV"
    ],
    "options_hi": [
      "NDB",
      "DROP TABLE",
      "REPLACE",
      "CSV"
    ],
    "answer_en": "NDB",
    "answer_hi": "NDB",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which storage engine is 'Archive' in MySQL?",
    "question_hi": "MySQL में 'Archive' एक storage engine है?",
    "options_en": [
      "SPATIAL",
      "DELETE",
      "Archive",
      "TRUNCATE"
    ],
    "options_hi": [
      "SPATIAL",
      "DELETE",
      "Archive",
      "TRUNCATE"
    ],
    "answer_en": "Archive",
    "answer_hi": "Archive",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which index type is 'BTREE'?",
    "question_hi": "'BTREE' किस प्रकार का index है?",
    "options_en": [
      "BTREE",
      "Memory",
      "REPLACE",
      "HASH"
    ],
    "options_hi": [
      "BTREE",
      "Memory",
      "REPLACE",
      "HASH"
    ],
    "answer_en": "BTREE",
    "answer_hi": "BTREE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which index type is 'HASH'?",
    "question_hi": "'HASH' किस प्रकार का index है?",
    "options_en": [
      "HASH",
      "REPLACE",
      "INSERT",
      "ALTER TABLE"
    ],
    "options_hi": [
      "HASH",
      "REPLACE",
      "INSERT",
      "ALTER TABLE"
    ],
    "answer_en": "HASH",
    "answer_hi": "HASH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which index type is 'FULLTEXT'?",
    "question_hi": "'FULLTEXT' किस प्रकार का index है?",
    "options_en": [
      "FULLTEXT",
      "Archive",
      "REPLACE",
      "CREATE VIEW"
    ],
    "options_hi": [
      "FULLTEXT",
      "Archive",
      "REPLACE",
      "CREATE VIEW"
    ],
    "answer_en": "FULLTEXT",
    "answer_hi": "FULLTEXT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which index type is 'SPATIAL'?",
    "question_hi": "'SPATIAL' किस प्रकार का index है?",
    "options_en": [
      "SPATIAL",
      "ALTER TABLE",
      "CREATE VIEW",
      "Archive"
    ],
    "options_hi": [
      "SPATIAL",
      "ALTER TABLE",
      "CREATE VIEW",
      "Archive"
    ],
    "answer_en": "SPATIAL",
    "answer_hi": "SPATIAL",
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