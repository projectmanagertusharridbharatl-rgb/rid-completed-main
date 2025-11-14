const questions = [
  {
    "num": 1,
    "question_en": "Which BSON type represents a 12-byte unique identifier used as primary key by default? (variant 27)",
    "question_hi": "कौन-सा BSON प्रकार 12-byte अद्वितीय पहचानकर्ता का प्रतिनिधित्व करता है जो default रूप से primary key के रूप में उपयोग होता है? (वेरिएंट 27)",
    "options_en": [
      "Schema Analyzer",
      "Oplog",
      "$match",
      "ObjectId"
    ],
    "options_hi": [
      "Schema Analyzer",
      "Oplog",
      "$match",
      "ObjectId"
    ],
    "answer_en": "ObjectId",
    "answer_hi": "ObjectId",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which index type supports text search on string content? (variant 27)",
    "question_hi": "कौन-सा index प्रकार string content पर text search का समर्थन करता है? (वेरिएंट 27)",
    "options_en": [
      "Text Index",
      "Decimal128",
      "Visual Explain",
      "$and"
    ],
    "options_hi": [
      "Text Index",
      "Decimal128",
      "Visual Explain",
      "$and"
    ],
    "answer_en": "Text Index",
    "answer_hi": "Text Index",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which aggregation stage filters documents (like WHERE)? (variant 27)",
    "question_hi": "कौन-सा aggregation stage documents को filter करता है (जैसे WHERE)? (वेरिएंट 27)",
    "options_en": [
      "$and",
      "Date",
      "session.abortTransaction()",
      "$match"
    ],
    "options_hi": [
      "$and",
      "Date",
      "session.abortTransaction()",
      "$match"
    ],
    "answer_en": "$match",
    "answer_hi": "$match",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which aggregation stage groups documents by a specified identifier? (variant 27)",
    "question_hi": "कौन-सा aggregation stage documents को किसी निर्दिष्ट identifier द्वारा समूहित करता है? (वेरिएंट 27)",
    "options_en": [
      "use <db>",
      "$group",
      "Serverless Instances",
      "$rename"
    ],
    "options_hi": [
      "use <db>",
      "$group",
      "Serverless Instances",
      "$rename"
    ],
    "answer_en": "$group",
    "answer_hi": "$group",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which command shows replication status for a replica set? (variant 27)",
    "question_hi": "Replica set के लिए replication status दिखाने वाला कौन-सा command है? (वेरिएंट 27)",
    "options_en": [
      "rs.status()",
      "mongorestore",
      "$facet",
      "Global Clusters"
    ],
    "options_hi": [
      "rs.status()",
      "mongorestore",
      "$facet",
      "Global Clusters"
    ],
    "answer_en": "rs.status()",
    "answer_hi": "rs.status()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which command initiates a new replica set? (variant 27)",
    "question_hi": "नया replica set शुरू करने के लिए कौन-सा command उपयोग किया जाता है? (वेरिएंट 27)",
    "options_en": [
      "LDAP",
      "config servers",
      "rs.initiate()",
      "Explain"
    ],
    "options_hi": [
      "LDAP",
      "config servers",
      "rs.initiate()",
      "Explain"
    ],
    "answer_en": "rs.initiate()",
    "answer_hi": "rs.initiate()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which command enables sharding for a database? (variant 27)",
    "question_hi": "किस command से किसी database के लिए sharding सक्षम किया जाता है? (वेरिएंट 27)",
    "options_en": [
      "config servers",
      "$or",
      "ObjectId()",
      "sh.enableSharding()"
    ],
    "options_hi": [
      "config servers",
      "$or",
      "ObjectId()",
      "sh.enableSharding()"
    ],
    "answer_en": "sh.enableSharding()",
    "answer_hi": "sh.enableSharding()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which function starts a client session for transactions? (variant 27)",
    "question_hi": "Transactions के लिए client session शुरू करने के लिए कौन-सा function उपयोग किया जाता है? (वेरिएंट 27)",
    "options_en": [
      "startSession()",
      "mongos",
      "$size",
      "mongosh"
    ],
    "options_hi": [
      "startSession()",
      "mongos",
      "$size",
      "mongosh"
    ],
    "answer_en": "startSession()",
    "answer_hi": "startSession()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which method commits a transaction in a session? (variant 27)",
    "question_hi": "सत्र में transaction commit करने के लिए कौन-सा method उपयोग होता है? (वेरिएंट 27)",
    "options_en": [
      "$or",
      "Automatic Failover",
      "Indexes",
      "session.commitTransaction()"
    ],
    "options_hi": [
      "$or",
      "Automatic Failover",
      "Indexes",
      "session.commitTransaction()"
    ],
    "answer_en": "session.commitTransaction()",
    "answer_hi": "session.commitTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which tool is used for logical backups (export) of MongoDB data? (variant 27)",
    "question_hi": "MongoDB डेटा के logical backups (export) के लिए कौन-सा टूल उपयोग होता है? (वेरिएंट 27)",
    "options_en": [
      "Covered Queries",
      "mongodump",
      "shard",
      "deleteMany()"
    ],
    "options_hi": [
      "Covered Queries",
      "mongodump",
      "shard",
      "deleteMany()"
    ],
    "answer_en": "mongodump",
    "answer_hi": "mongodump",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which command restores data from a mongodump archive? (variant 27)",
    "question_hi": "mongodump archive से डेटा restore करने के लिए कौन-सा command उपयोग होता है? (वेरिएंट 27)",
    "options_en": [
      "Indexes",
      "mongosh",
      "mongorestore",
      "Text Index"
    ],
    "options_hi": [
      "Indexes",
      "mongosh",
      "mongorestore",
      "Text Index"
    ],
    "answer_en": "mongorestore",
    "answer_hi": "mongorestore",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which operator matches documents that contain the specified field? (variant 27)",
    "question_hi": "कौन-सा operator उन documents से मेल खाता है जिनमें निर्दिष्ट field होता है? (वेरिएंट 27)",
    "options_en": [
      "_id",
      "Date",
      "$exists",
      "sh.enableSharding()"
    ],
    "options_hi": [
      "_id",
      "Date",
      "$exists",
      "sh.enableSharding()"
    ],
    "answer_en": "$exists",
    "answer_hi": "$exists",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which operator matches array elements that equal all the specified values? (variant 27)",
    "question_hi": "कौन-सा operator array elements से मेल खाता है जो सभी निर्दिष्ट मानों के बराबर हों? (वेरिएंट 27)",
    "options_en": [
      "$all",
      "$exists",
      "Global Clusters",
      "$skip"
    ],
    "options_hi": [
      "$all",
      "$exists",
      "Global Clusters",
      "$skip"
    ],
    "answer_en": "$all",
    "answer_hi": "$all",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which method updates a single document matching a filter? (variant 27)",
    "question_hi": "कौन-सा method filter से मेल खाती single document को update करता है? (वेरिएंट 27)",
    "options_en": [
      "updateOne()",
      "insertOne()",
      "$mul",
      "$set"
    ],
    "options_hi": [
      "updateOne()",
      "insertOne()",
      "$mul",
      "$set"
    ],
    "answer_en": "updateOne()",
    "answer_hi": "updateOne()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which method replaces a single document? (variant 27)",
    "question_hi": "कौन-सा method single document को पूरी तरह से replace करता है? (वेरिएंट 27)",
    "options_en": [
      "find()",
      "replaceOne()",
      "$set",
      "show collections"
    ],
    "options_hi": [
      "find()",
      "replaceOne()",
      "$set",
      "show collections"
    ],
    "answer_en": "replaceOne()",
    "answer_hi": "replaceOne()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which function returns the server status information? (variant 27)",
    "question_hi": "कौन-सा function server status जानकारी लौटाता है? (वेरिएंट 27)",
    "options_en": [
      "db.serverStatus()",
      "Atlas Search",
      "$set",
      "Write Concern"
    ],
    "options_hi": [
      "db.serverStatus()",
      "Atlas Search",
      "$set",
      "Write Concern"
    ],
    "answer_en": "db.serverStatus()",
    "answer_hi": "db.serverStatus()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which command shows current operations running on the server? (variant 27)",
    "question_hi": "सर्वर पर वर्तमान में चल रहे operations दिखाने के लिए कौन-सा command है? (वेरिएंट 27)",
    "options_en": [
      "$count",
      "db.currentOp()",
      "Compression",
      "WiredTiger"
    ],
    "options_hi": [
      "$count",
      "db.currentOp()",
      "Compression",
      "WiredTiger"
    ],
    "answer_en": "db.currentOp()",
    "answer_hi": "db.currentOp()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which MongoDB feature provides full-text search capabilities on collections? (variant 27)",
    "question_hi": "कौन-सा MongoDB फीचर collections पर full-text search क्षमताएँ प्रदान करता है? (वेरिएंट 27)",
    "options_en": [
      "$lt",
      "Atlas Search",
      "balancer",
      "Read Preference"
    ],
    "options_hi": [
      "$lt",
      "Atlas Search",
      "balancer",
      "Read Preference"
    ],
    "answer_en": "Atlas Search",
    "answer_hi": "Atlas Search",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which operator is used for element matching within arrays? (variant 27)",
    "question_hi": "Array के भीतर element matching के लिए कौन-सा operator उपयोग होता है? (वेरिएंट 27)",
    "options_en": [
      "Compound Index",
      "$elemMatch",
      "$unset",
      "Primary"
    ],
    "options_hi": [
      "Compound Index",
      "$elemMatch",
      "$unset",
      "Primary"
    ],
    "answer_en": "$elemMatch",
    "answer_hi": "$elemMatch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which index type allows automatic removal of documents after a certain time? (variant 27)",
    "question_hi": "कौन-सा index प्रकार निश्चित समय के बाद documents को automatic रूप से हटाने की अनुमति देता है? (वेरिएंट 27)",
    "options_en": [
      "$pop",
      "Null",
      "TTL Index",
      "Shard Key"
    ],
    "options_hi": [
      "$pop",
      "Null",
      "TTL Index",
      "Shard Key"
    ],
    "answer_en": "TTL Index",
    "answer_hi": "TTL Index",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which MongoDB feature provides managed database-as-a-service? (variant 27)",
    "question_hi": "कौन-सा MongoDB फीचर managed database-as-a-service प्रदान करता है? (वेरिएंट 27)",
    "options_en": [
      "TLS/SSL",
      "config servers",
      "$and",
      "Atlas"
    ],
    "options_hi": [
      "TLS/SSL",
      "config servers",
      "$and",
      "Atlas"
    ],
    "answer_en": "Atlas",
    "answer_hi": "Atlas",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which aggregation stage performs a left outer join with another collection? (variant 27)",
    "question_hi": "कौन-सा aggregation stage दूसरी collection के साथ left outer join करता है? (वेरिएंट 27)",
    "options_en": [
      "deleteOne()",
      "Indexes",
      "session.startTransaction()",
      "$lookup"
    ],
    "options_hi": [
      "deleteOne()",
      "Indexes",
      "session.startTransaction()",
      "$lookup"
    ],
    "answer_en": "$lookup",
    "answer_hi": "$lookup",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which command returns statistics for a collection? (variant 27)",
    "question_hi": "कौन-सा command किसी collection के लिए statistics लौटाता है? (वेरिएंट 27)",
    "options_en": [
      "db.collection.deleteOne()",
      "startSession()",
      "Compound Index",
      "db.collection.stats()"
    ],
    "options_hi": [
      "db.collection.deleteOne()",
      "startSession()",
      "Compound Index",
      "db.collection.stats()"
    ],
    "answer_en": "db.collection.stats()",
    "answer_hi": "db.collection.stats()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which operator is used to increment a numeric field? (variant 27)",
    "question_hi": "किस operator से किसी numeric field को increment किया जाता है? (वेरिएंट 27)",
    "options_en": [
      "Zone Sharding",
      "$or",
      "$inc",
      "LDAP"
    ],
    "options_hi": [
      "Zone Sharding",
      "$or",
      "$inc",
      "LDAP"
    ],
    "answer_en": "$inc",
    "answer_hi": "$inc",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which method removes all documents from a collection but retains indexes? (variant 27)",
    "question_hi": "कौन-सा method collection के सभी documents हटाता है पर indexes बनाए रखता है? (वेरिएंट 27)",
    "options_en": [
      "deleteMany()",
      "$ne",
      "$unwind",
      "db.collection.insertMany()"
    ],
    "options_hi": [
      "deleteMany()",
      "$ne",
      "$unwind",
      "db.collection.insertMany()"
    ],
    "answer_en": "deleteMany()",
    "answer_hi": "deleteMany()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which command shows current replica set configuration? (variant 27)",
    "question_hi": "वर्तमान replica set configuration दिखाने के लिए कौन-सा command है? (वेरिएंट 27)",
    "options_en": [
      "Atlas Search",
      "$pop",
      "$skip",
      "rs.conf()"
    ],
    "options_hi": [
      "Atlas Search",
      "$pop",
      "$skip",
      "rs.conf()"
    ],
    "answer_en": "rs.conf()",
    "answer_hi": "rs.conf()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which command is used to shard a collection? (variant 27)",
    "question_hi": "किस command का उपयोग collection को shard करने के लिए किया जाता है? (वेरिएंट 27)",
    "options_en": [
      "sh.shardCollection()",
      "Secondary",
      "$not",
      "Wildcard Index"
    ],
    "options_hi": [
      "sh.shardCollection()",
      "Secondary",
      "$not",
      "Wildcard Index"
    ],
    "answer_en": "sh.shardCollection()",
    "answer_hi": "sh.shardCollection()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which query operator matches documents that satisfy a regular expression? (variant 27)",
    "question_hi": "कौन-सा query operator उन documents से मेल खाता है जो regular expression को पूरा करते हैं? (वेरिएंट 27)",
    "options_en": [
      "withTransaction()",
      "$addToSet",
      "Denormalization",
      "$regex"
    ],
    "options_hi": [
      "withTransaction()",
      "$addToSet",
      "Denormalization",
      "$regex"
    ],
    "answer_en": "$regex",
    "answer_hi": "$regex",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which update operator removes a field from a document? (variant 27)",
    "question_hi": "कौन-सा update operator किसी document से field हटाता है? (वेरिएंट 27)",
    "options_en": [
      "$and",
      "$unset",
      "Shard Key",
      "$ne"
    ],
    "options_hi": [
      "$and",
      "$unset",
      "Shard Key",
      "$ne"
    ],
    "answer_en": "$unset",
    "answer_hi": "$unset",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which command shows current database stats? (variant 27)",
    "question_hi": "कौन-सा command वर्तमान database के stats दिखाता है? (वेरिएंट 27)",
    "options_en": [
      "Hash Sharding",
      "WiredTiger",
      "$pull",
      "db.stats()"
    ],
    "options_hi": [
      "Hash Sharding",
      "WiredTiger",
      "$pull",
      "db.stats()"
    ],
    "answer_en": "db.stats()",
    "answer_hi": "db.stats()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which BSON type stores binary data? (variant 27)",
    "question_hi": "कौन-सा BSON प्रकार binary data संग्रहीत करता है? (वेरिएंट 27)",
    "options_en": [
      "$and",
      "db.serverStatus()",
      "Hash Sharding",
      "Binary"
    ],
    "options_hi": [
      "$and",
      "db.serverStatus()",
      "Hash Sharding",
      "Binary"
    ],
    "answer_en": "Binary",
    "answer_hi": "Binary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which MongoDB feature supports horizontal scaling across shards? (variant 27)",
    "question_hi": "कौन-सा MongoDB फीचर shards के माध्यम से हॉरिजॉन्टल स्केलिंग का समर्थन करता है? (वेरिएंट 27)",
    "options_en": [
      "startSession()",
      "Sharding",
      "$gte",
      "$type"
    ],
    "options_hi": [
      "startSession()",
      "Sharding",
      "$gte",
      "$type"
    ],
    "answer_en": "Sharding",
    "answer_hi": "Sharding",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which command shows the current primary node in a replica set? (variant 27)",
    "question_hi": "Replica set में वर्तमान primary node दिखाने के लिए कौन-सा command है? (वेरिएंट 27)",
    "options_en": [
      "$unwind",
      "rs.isMaster()",
      "$setWindowFields",
      "x.509"
    ],
    "options_hi": [
      "$unwind",
      "rs.isMaster()",
      "$setWindowFields",
      "x.509"
    ],
    "answer_en": "rs.isMaster()",
    "answer_hi": "rs.isMaster()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which function generates a new ObjectId value? (variant 27)",
    "question_hi": "नई ObjectId value generate करने के लिए कौन-सा function उपयोग किया जाता है? (वेरिएंट 27)",
    "options_en": [
      "$pull",
      "$unset",
      "ObjectId()",
      "startSession()"
    ],
    "options_hi": [
      "$pull",
      "$unset",
      "ObjectId()",
      "startSession()"
    ],
    "answer_en": "ObjectId()",
    "answer_hi": "ObjectId()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which operator matches documents where field value is in the specified array? (variant 27)",
    "question_hi": "कौन-सा operator उन documents से मेल खाता है जिनमें field मान निर्दिष्ट array में है? (वेरिएंट 27)",
    "options_en": [
      "Aggregation Editor",
      "$pull",
      "mongorestore",
      "$in"
    ],
    "options_hi": [
      "Aggregation Editor",
      "$pull",
      "mongorestore",
      "$in"
    ],
    "answer_en": "$in",
    "answer_hi": "$in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which index type improves query performance for fields containing arrays? (variant 27)",
    "question_hi": "ऐसी fields के लिए जिनमें arrays होते हैं, query प्रदर्शन सुधारने वाला कौन-सा index प्रकार है? (वेरिएंट 27)",
    "options_en": [
      "Int32",
      "updateOne()",
      "Multikey Index",
      "config servers"
    ],
    "options_hi": [
      "Int32",
      "updateOne()",
      "Multikey Index",
      "config servers"
    ],
    "answer_en": "Multikey Index",
    "answer_hi": "Multikey Index",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which aggregation stage reshapes each document in the stream, adding or removing fields? (variant 27)",
    "question_hi": "कौन-सा aggregation stage stream में प्रत्येक document को reshape करता है, fields जोड़ता या हटाता है? (वेरिएंट 27)",
    "options_en": [
      "mongosh",
      "$project",
      "Schema Analyzer",
      "db.serverStatus()"
    ],
    "options_hi": [
      "mongosh",
      "$project",
      "Schema Analyzer",
      "db.serverStatus()"
    ],
    "answer_en": "$project",
    "answer_hi": "$project",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which command displays profiler data for diagnostic purposes? (variant 27)",
    "question_hi": "निदान के लिए profiler डेटा दिखाने के लिए कौन-सा command उपयोग होता है? (वेरिएंट 27)",
    "options_en": [
      "$currentDate",
      "updateMany()",
      "$pop",
      "db.system.profile.find()"
    ],
    "options_hi": [
      "$currentDate",
      "updateMany()",
      "$pop",
      "db.system.profile.find()"
    ],
    "answer_en": "db.system.profile.find()",
    "answer_hi": "db.system.profile.find()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which command lists all databases in the MongoDB shell? (variant 28)",
    "question_hi": "MongoDB shell में सभी डेटाबेस की सूची दिखाने के लिए कौन-सा कमांड है? (वेरिएंट 28)",
    "options_en": [
      "show dbs",
      "Replica Set",
      "$lookup",
      "Int32"
    ],
    "options_hi": [
      "show dbs",
      "Replica Set",
      "$lookup",
      "Int32"
    ],
    "answer_en": "show dbs",
    "answer_hi": "show dbs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which command lists collections in the current database? (variant 28)",
    "question_hi": "वर्तमान डेटाबेस में collections सूचीबद्ध करने के लिए कौन-सा कमांड है? (वेरिएंट 28)",
    "options_en": [
      "show collections",
      "find()",
      "ObjectId",
      "shard"
    ],
    "options_hi": [
      "show collections",
      "find()",
      "ObjectId",
      "shard"
    ],
    "answer_en": "show collections",
    "answer_hi": "show collections",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which method inserts a single document into a collection? (variant 28)",
    "question_hi": "किस मेथड से एक single document collection में insert किया जाता है? (वेरिएंट 28)",
    "options_en": [
      "$sort",
      "Object",
      "insertOne()",
      "Explain Plan"
    ],
    "options_hi": [
      "$sort",
      "Object",
      "insertOne()",
      "Explain Plan"
    ],
    "answer_en": "insertOne()",
    "answer_hi": "insertOne()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method inserts multiple documents into a collection? (variant 28)",
    "question_hi": "किस मेथड से एक से अधिक documents collection में insert किये जाते हैं? (वेरिएंट 28)",
    "options_en": [
      "deleteOne()",
      "insertMany()",
      "session.commitTransaction()",
      "TTL Index"
    ],
    "options_hi": [
      "deleteOne()",
      "insertMany()",
      "session.commitTransaction()",
      "TTL Index"
    ],
    "answer_en": "insertMany()",
    "answer_hi": "insertMany()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which query operator matches values that are greater than a specified value? (variant 28)",
    "question_hi": "कौन-सा query operator उन मानों से मेल खाता है जो निर्दिष्ट मान से बड़े हैं? (वेरिएंट 28)",
    "options_en": [
      "$gt",
      "$group",
      "$set",
      "Automatic Failover"
    ],
    "options_hi": [
      "$gt",
      "$group",
      "$set",
      "Automatic Failover"
    ],
    "answer_en": "$gt",
    "answer_hi": "$gt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which update operator sets the value of a field? (variant 28)",
    "question_hi": "कौन-सा update operator किसी field का मान सेट करता है? (वेरिएंट 28)",
    "options_en": [
      "mongotop",
      "$set",
      "$project",
      "startSession()"
    ],
    "options_hi": [
      "mongotop",
      "$set",
      "$project",
      "startSession()"
    ],
    "answer_en": "$set",
    "answer_hi": "$set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which BSON type represents a 12-byte unique identifier used as primary key by default? (variant 28)",
    "question_hi": "कौन-सा BSON प्रकार 12-byte अद्वितीय पहचानकर्ता का प्रतिनिधित्व करता है जो default रूप से primary key के रूप में उपयोग होता है? (वेरिएंट 28)",
    "options_en": [
      "$lookup",
      "$and",
      "Encryption at Rest",
      "ObjectId"
    ],
    "options_hi": [
      "$lookup",
      "$and",
      "Encryption at Rest",
      "ObjectId"
    ],
    "answer_en": "ObjectId",
    "answer_hi": "ObjectId",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which index type supports text search on string content? (variant 28)",
    "question_hi": "कौन-सा index प्रकार string content पर text search का समर्थन करता है? (वेरिएंट 28)",
    "options_en": [
      "$eq",
      "startSession()",
      "Text Index",
      "session.abortTransaction()"
    ],
    "options_hi": [
      "$eq",
      "startSession()",
      "Text Index",
      "session.abortTransaction()"
    ],
    "answer_en": "Text Index",
    "answer_hi": "Text Index",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which aggregation stage filters documents (like WHERE)? (variant 28)",
    "question_hi": "कौन-सा aggregation stage documents को filter करता है (जैसे WHERE)? (वेरिएंट 28)",
    "options_en": [
      "$match",
      "Encryption at Rest",
      "$gte",
      "mongos"
    ],
    "options_hi": [
      "$match",
      "Encryption at Rest",
      "$gte",
      "mongos"
    ],
    "answer_en": "$match",
    "answer_hi": "$match",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which aggregation stage groups documents by a specified identifier? (variant 28)",
    "question_hi": "कौन-सा aggregation stage documents को किसी निर्दिष्ट identifier द्वारा समूहित करता है? (वेरिएंट 28)",
    "options_en": [
      "Compression",
      "$group",
      "session.abortTransaction()",
      "Denormalization"
    ],
    "options_hi": [
      "Compression",
      "$group",
      "session.abortTransaction()",
      "Denormalization"
    ],
    "answer_en": "$group",
    "answer_hi": "$group",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which command shows replication status for a replica set? (variant 28)",
    "question_hi": "Replica set के लिए replication status दिखाने वाला कौन-सा command है? (वेरिएंट 28)",
    "options_en": [
      "rs.status()",
      "updateMany()",
      "Atlas",
      "ObjectId"
    ],
    "options_hi": [
      "rs.status()",
      "updateMany()",
      "Atlas",
      "ObjectId"
    ],
    "answer_en": "rs.status()",
    "answer_hi": "rs.status()",
    "attempted": false,
    "selected": ""
  },
   {
    "num": 50,
    "question_en": "Which command initiates a new replica set? (variant 28)",
    "question_hi": "नया replica set शुरू करने के लिए कौन-सा command उपयोग किया जाता है? (वेरिएंट 28)",
    "options_en": [
      "$gte",
      "x.509",
      "Range Sharding",
      "rs.initiate()"
    ],
    "options_hi": [
      "$gte",
      "x.509",
      "Range Sharding",
      "rs.initiate()"
    ],
    "answer_en": "rs.initiate()",
    "answer_hi": "rs.initiate()",
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