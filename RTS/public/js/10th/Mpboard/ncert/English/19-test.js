const questions = [
  {
    "num": 1,
    "question_en": "What is the dominant theme of 'Love Defiled'?",
    "options_en": ["Celebration of nature", "Critique of commercialized love", "Praise of chivalry", "Religious devotion"],
    "answer_en": "Critique of commercialized love",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "In 'Love Defiled', what has become the 'new measure' of love?",
    "options_en": ["Beauty", "Wealth", "Nobility", "Piety"],
    "answer_en": "Wealth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which manuscript collection preserved 'Love Defiled'?",
    "options_en": ["The Vernon Manuscript", "The Harley Lyrics", "The Exeter Book", "The Auchinleck Manuscript"],
    "answer_en": "The Harley Lyrics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What poetic form does 'Love Defiled' primarily use?",
    "options_en": ["Sonnet", "Ballad stanza", "Free verse", "Terza rima"],
    "answer_en": "Ballad stanza",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What time period does 'Love Defiled' idealize?",
    "options_en": ["The distant past", "The present", "The future", "A mythical age"],
    "answer_en": "The distant past",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What literary device is used to contrast past and present love?",
    "options_en": ["Juxtaposition", "Metonymy", "Synecdoche", "Onomatopoeia"],
    "answer_en": "Juxtaposition",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What social class is primarily criticized in the poem?",
    "options_en": ["Nobility", "Clergy", "Merchants", "Peasants"],
    "answer_en": "Merchants",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What does the word 'defiled' imply in the poem's context?",
    "options_en": ["Purified", "Corrupted", "Hidden", "Revealed"],
    "answer_en": "Corrupted",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What historical period most influenced 'Love Defiled'?",
    "options_en": ["Anglo-Saxon period", "High Middle Ages", "Late Middle Ages", "Renaissance"],
    "answer_en": "Late Middle Ages",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the poem's primary emotional tone?",
    "options_en": ["Joyful", "Nostalgic", "Angry", "Hopeful"],
    "answer_en": "Nostalgic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What aspect of love does the poem suggest is lost?",
    "options_en": ["Its physical expression", "Its sincerity", "Its legality", "Its religious aspect"],
    "answer_en": "Its sincerity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which poetic technique creates musicality in the poem?",
    "options_en": ["Alliteration", "Enjambment", "Caesura", "Apostrophe"],
    "answer_en": "Alliteration",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What type of imagery dominates 'Love Defiled'?",
    "options_en": ["Commercial imagery", "Religious imagery", "Natural imagery", "Military imagery"],
    "answer_en": "Commercial imagery",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the poem's view of contemporary society?",
    "options_en": ["Idealistic", "Cynical", "Optimistic", "Indifferent"],
    "answer_en": "Cynical",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which literary tradition does 'Love Defiled' belong to?",
    "options_en": ["Medieval complaint poetry", "Courtly love tradition", "Religious mysticism", "Chivalric romance"],
    "answer_en": "Medieval complaint poetry",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What does the poem suggest has replaced true affection?",
    "options_en": ["Religious devotion", "Financial calculation", "Political ambition", "Family duty"],
    "answer_en": "Financial calculation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the poem's metrical structure?",
    "options_en": ["Iambic pentameter", "Four-stress lines", "Free verse", "Sprung rhythm"],
    "answer_en": "Four-stress lines",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which historical event's aftermath is reflected in the poem?",
    "options_en": ["The Black Death", "The Norman Conquest", "The Crusades", "The Peasants' Revolt"],
    "answer_en": "The Black Death",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What rhetorical device is prominent in the poem?",
    "options_en": ["Anaphora", "Hyperbole", "Litotes", "Chiasmus"],
    "answer_en": "Anaphora",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does the poem imply about human relationships?",
    "options_en": ["They have become transactional", "They have become more spiritual", "They have become more honest", "They have become temporary"],
    "answer_en": "They have become transactional",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which literary work shares themes with 'Love Defiled'?",
    "options_en": ["Piers Plowman", "Sir Gawain and the Green Knight", "The Canterbury Tales", "Pearl"],
    "answer_en": "Piers Plowman",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the poem's rhyme scheme?",
    "options_en": ["ABAB", "AABB", "ABBA", "Free verse"],
    "answer_en": "AABB",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What social change does the poem lament?",
    "options_en": ["Rise of capitalism", "Decline of monarchy", "Secularization", "Urbanization"],
    "answer_en": "Rise of capitalism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which poetic feature aids memorization?",
    "options_en": ["Regular rhyme and rhythm", "Complex metaphors", "Lengthy descriptions", "Philosophical digressions"],
    "answer_en": "Regular rhyme and rhythm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What does the poem suggest about economic changes?",
    "options_en": ["They corrupt moral values", "They improve society", "They are inevitable", "They are reversible"],
    "answer_en": "They corrupt moral values",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which manuscript is Harley 2253?",
    "options_en": ["A French chronicle", "An English lyric collection", "A legal document", "A medical treatise"],
    "answer_en": "An English lyric collection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the poem's perspective?",
    "options_en": ["First person observer", "Third person omniscient", "Dramatic monologue", "Dialogue"],
    "answer_en": "First person observer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which value does the poem uphold?",
    "options_en": ["Sincerity in relationships", "Wealth accumulation", "Social status", "Political power"],
    "answer_en": "Sincerity in relationships",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What literary convention does the poem challenge?",
    "options_en": ["Idealization of love", "Celebration of nature", "Praise of God", "Heroic adventure"],
    "answer_en": "Idealization of love",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which modern genre does 'Love Defiled' anticipate?",
    "options_en": ["Protest song", "Romantic novel", "Religious sermon", "Scientific essay"],
    "answer_en": "Protest song",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What does the poem suggest about contemporary morality?",
    "options_en": ["It has declined", "It has improved", "It is unchanged", "It is irrelevant"],
    "answer_en": "It has declined",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which poetic device creates emphasis?",
    "options_en": ["Repetition of key ideas", "Variation of meter", "Complex syntax", "Foreign vocabulary"],
    "answer_en": "Repetition of key ideas",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What historical development shaped the poem's concerns?",
    "options_en": ["Growth of money economy", "Decline of feudalism", "Rise of nation-states", "Spread of printing"],
    "answer_en": "Growth of money economy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the poem's emotional core?",
    "options_en": ["Sense of loss", "Call to action", "Celebration", "Warning"],
    "answer_en": "Sense of loss",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which literary tradition influences the poem's form?",
    "options_en": ["Oral ballad tradition", "Latin hymn tradition", "French romance tradition", "Classical epic tradition"],
    "answer_en": "Oral ballad tradition",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What does the poem imply about social values?",
    "options_en": ["They have deteriorated", "They have improved", "They remain constant", "They are irrelevant"],
    "answer_en": "They have deteriorated",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which aspect of medieval poetry is evident?",
    "options_en": ["Oral-formulaic style", "Complex allegory", "Classical allusion", "Scientific precision"],
    "answer_en": "Oral-formulaic style",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does the poem suggest about human nature?",
    "options_en": ["It is corrupted by greed", "It is inherently good", "It is divinely guided", "It is rationally controlled"],
    "answer_en": "It is corrupted by greed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which poetic technique creates nostalgia?",
    "options_en": ["Juxtaposition of past and present", "Alliteration", "Enjambment", "Caesura"],
    "answer_en": "Juxtaposition of past and present",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What social phenomenon does the poem document?",
    "options_en": ["Rise of merchant class", "Decline of monarchy", "Growth of cities", "Spread of literacy"],
    "answer_en": "Rise of merchant class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the poem's criticism primarily directed at?",
    "options_en": ["Social systems", "Individual sinners", "Natural forces", "Divine will"],
    "answer_en": "Social systems",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which historical context informs the poem?",
    "options_en": ["Post-plague economic changes", "Norman cultural imposition", "Viking invasions", "Tudor religious reforms"],
    "answer_en": "Post-plague economic changes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What literary device structures the poem?",
    "options_en": ["Parallelism", "Flashback", "Foreshadowing", "Stream of consciousness"],
    "answer_en": "Parallelism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does the poem imply about economic materialism?",
    "options_en": ["It corrupts human relationships", "It improves society", "It is necessary", "It is temporary"],
    "answer_en": "It corrupts human relationships",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which critical approach is most applicable?",
    "options_en": ["Marxist criticism", "Feminist criticism", "Psychoanalytic criticism", "Formalist criticism"],
    "answer_en": "Marxist criticism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the poem's message ultimately?",
    "options_en": ["Moral warning", "Political protest", "Religious conversion", "Personal confession"],
    "answer_en": "Moral warning",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which aspect of medieval society is targeted?",
    "options_en": ["Growing commercialism", "Feudal hierarchy", "Church authority", "Royal power"],
    "answer_en": "Growing commercialism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What makes the poem accessible to modern readers?",
    "options_en": ["Universal theme of corrupted values", "Specific historical references", "Complex medieval theology", "Obscure language"],
    "answer_en": "Universal theme of corrupted values",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What does the poem suggest about true love?",
    "options_en": ["It should be free from calculation", "It requires wealth", "It needs social approval", "It demands religious blessing"],
    "answer_en": "It should be free from calculation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which poetic feature enhances musicality?",
    "options_en": ["Regular rhythm and rhyme", "Complex harmonies", "Dissonant chords", "Free improvisation"],
    "answer_en": "Regular rhythm and rhyme",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What historical parallel exists today?",
    "options_en": ["Commercialization of relationships", "Decline of religion", "Rise of nationalism", "Environmental concerns"],
    "answer_en": "Commercialization of relationships",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What literary achievement does 'Love Defiled' represent?",
    "options_en": ["Early social criticism in lyric form", "Perfect courtly love expression", "Religious mystical experience", "Historical chronicle in verse"],
    "answer_en": "Early social criticism in lyric form",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What does the poem critique the connection between?",
    "options_en": ["Love and financial exchange", "Love and social status", "Love and political power", "Love and religious salvation"],
    "answer_en": "Love and financial exchange",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which literary form does the poem resemble?",
    "options_en": ["Complaint lyric", "Love sonnet", "Heroic epic", "Mystical vision"],
    "answer_en": "Complaint lyric",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is the poem's tone toward commerce?",
    "options_en": ["Critical", "Approving", "Neutral", "Enthusiastic"],
    "answer_en": "Critical",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What social commentary does the poem offer?",
    "options_en": ["Critique of materialism", "Praise of aristocracy", "Defense of clergy", "Celebration of peasants"],
    "answer_en": "Critique of materialism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What emotional texture does the poem have?",
    "options_en": ["Bittersweet", "Joyful", "Angry", "Fearful"],
    "answer_en": "Bittersweet",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What literary tradition does the poem continue?",
    "options_en": ["Medieval complaint poetry", "Renaissance sonnet sequence", "Romantic nature poetry", "Modernist fragmentation"],
    "answer_en": "Medieval complaint poetry",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What does the poem present as victim of commercialization?",
    "options_en": ["Genuine affection", "Religious faith", "Political loyalty", "Social hierarchy"],
    "answer_en": "Genuine affection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What aspect of love is emphasized as corrupted?",
    "options_en": ["Its purity", "Its legality", "Its physicality", "Its spirituality"],
    "answer_en": "Its purity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Which literary device conveys the poem's criticism?",
    "options_en": ["Irony", "Metaphor", "Simile", "Personification"],
    "answer_en": "Irony",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What does the poem suggest about contemporary relationships?",
    "options_en": ["They are based on calculation", "They are more spiritual", "They are more honest", "They are temporary"],
    "answer_en": "They are based on calculation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which poetic technique creates the poem's rhythm?",
    "options_en": ["Regular stress patterns", "Irregular pauses", "Complex meter", "Free verse"],
    "answer_en": "Regular stress patterns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What social change is lamented in the poem?",
    "options_en": ["Commercialization of relationships", "Secularization of society", "Urbanization of population", "Centralization of power"],
    "answer_en": "Commercialization of relationships",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What does the poem imply about the measurement of love?",
    "options_en": ["It should not be measured by wealth", "It should be measured by beauty", "It should be measured by status", "It should be measured by devotion"],
    "answer_en": "It should not be measured by wealth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Which aspect of medieval life is critiqued?",
    "options_en": ["Economic materialism", "Religious piety", "Feudal loyalty", "Chivalric honor"],
    "answer_en": "Economic materialism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is the poem's view of the past?",
    "options_en": ["Idealized", "Criticized", "Ignored", "Mythologized"],
    "answer_en": "Idealized",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which poetic feature creates memorability?",
    "options_en": ["Catchy refrain", "Complex imagery", "Lengthy narrative", "Philosophical depth"],
    "answer_en": "Catchy refrain",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What does the poem suggest about love's transformation?",
    "options_en": ["From purity to commodity", "From private to public", "From spiritual to physical", "From temporary to eternal"],
    "answer_en": "From purity to commodity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which literary technique emphasizes change?",
    "options_en": ["Before-and-after contrast", "Character development", "Plot progression", "Setting description"],
    "answer_en": "Before-and-after contrast",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is the poem's criticism of society?",
    "options_en": ["Moral decay through greed", "Political corruption", "Religious hypocrisy", "Social inequality"],
    "answer_en": "Moral decay through greed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What does the poem present as antithetical to true love?",
    "options_en": ["Financial calculation", "Social convention", "Religious doctrine", "Family expectation"],
    "answer_en": "Financial calculation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which poetic device creates emphasis on loss?",
    "options_en": ["Repetition of 'once' and 'now'", "Complex metaphors", "Extended similes", "Personification"],
    "answer_en": "Repetition of 'once' and 'now'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What social value does the poem champion?",
    "options_en": ["Authenticity in relationships", "Wealth accumulation", "Social mobility", "Political ambition"],
    "answer_en": "Authenticity in relationships",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What historical period's anxieties does the poem express?",
    "options_en": ["Post-Black Death society", "Norman Conquest era", "Anglo-Saxon period", "Tudor Reformation"],
    "answer_en": "Post-Black Death society",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What literary device structures the contrast?",
    "options_en": ["Parallel construction", "Narrative flashback", "Descriptive imagery", "Dialogue exchange"],
    "answer_en": "Parallel construction",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What does the poem suggest about commercial influence?",
    "options_en": ["It corrupts human values", "It improves society", "It is necessary", "It is temporary"],
    "answer_en": "It corrupts human values",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which aspect of love is highlighted as lost?",
    "options_en": ["Its selflessness", "Its legality", "Its physicality", "Its spirituality"],
    "answer_en": "Its selflessness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What poetic technique creates the poem's musical quality?",
    "options_en": ["Rhyme and rhythm", "Complex syntax", "Foreign words", "Technical terms"],
    "answer_en": "Rhyme and rhythm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What social phenomenon is documented?",
    "options_en": ["Commodification of emotions", "Decline of religion", "Rise of cities", "Spread of disease"],
    "answer_en": "Commodification of emotions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What does the poem imply about contemporary values?",
    "options_en": ["They prioritize wealth over love", "They prioritize love over wealth", "They balance both equally", "They ignore both"],
    "answer_en": "They prioritize wealth over love",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which literary tradition is subverted?",
    "options_en": ["Courtly love tradition", "Religious mysticism", "Chivalric romance", "Pastoral poetry"],
    "answer_en": "Courtly love tradition",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is the poem's emotional impact?",
    "options_en": ["Melancholic reflection", "Angry denunciation", "Joyful celebration", "Fearful warning"],
    "answer_en": "Melancholic reflection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What does the poem suggest about economic systems?",
    "options_en": ["They can corrupt human relationships", "They improve human relationships", "They are irrelevant to relationships", "They determine relationships"],
    "answer_en": "They can corrupt human relationships",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which poetic feature aids oral transmission?",
    "options_en": ["Memorable refrain", "Complex structure", "Lengthy narrative", "Philosophical depth"],
    "answer_en": "Memorable refrain",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What historical development is reflected?",
    "options_en": ["Monetization of society", "Feudalization of society", "Secularization of society", "Urbanization of society"],
    "answer_en": "Monetization of society",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What literary device emphasizes corruption?",
    "options_en": ["Metaphor of tarnished gold", "Simile of withered flowers", "Personification of nature", "Allegory of pilgrimage"],
    "answer_en": "Metaphor of tarnished gold",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What does the poem suggest about social change?",
    "options_en": ["It can degrade moral values", "It always improves society", "It is irrelevant to values", "It is determined by God"],
    "answer_en": "It can degrade moral values",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which aspect of medieval society is satirized?",
    "options_en": ["Emerging capitalism", "Feudal hierarchy", "Church authority", "Royal power"],
    "answer_en": "Emerging capitalism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What poetic technique creates emphasis on contrast?",
    "options_en": ["Antithesis", "Metonymy", "Synecdoche", "Onomatopoeia"],
    "answer_en": "Antithesis",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What does the poem imply about modern love?",
    "options_en": ["It is commodified", "It is more pure", "It is more spiritual", "It is less important"],
    "answer_en": "It is commodified",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which literary form is employed?",
    "options_en": ["Lyric complaint", "Narrative ballad", "Dramatic monologue", "Epic poem"],
    "answer_en": "Lyric complaint",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What social criticism is offered?",
    "options_en": ["Critique of materialism's effect on love", "Critique of political corruption", "Critique of religious hypocrisy", "Critique of social inequality"],
    "answer_en": "Critique of materialism's effect on love",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What poetic feature creates rhythm?",
    "options_en": ["Regular meter", "Irregular pauses", "Complex patterns", "Free form"],
    "answer_en": "Regular meter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What does the poem suggest about historical change?",
    "options_en": ["It can corrupt values", "It always improves values", "It has no effect on values", "It is cyclical"],
    "answer_en": "It can corrupt values",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Which literary device creates nostalgia?",
    "options_en": ["Idealization of past", "Criticism of present", "Hope for future", "Fear of change"],
    "answer_en": "Idealization of past",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is the poem's view of commerce?",
    "options_en": ["As corrupting influence", "As positive development", "As neutral force", "As divine gift"],
    "answer_en": "As corrupting influence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What poetic technique emphasizes message?",
    "options_en": ["Direct statement", "Complex allegory", "Obscure symbolism", "Abstract imagery"],
    "answer_en": "Direct statement",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What does the poem suggest about human relationships?",
    "options_en": ["They should be based on genuine affection", "They should be based on social advantage", "They should be based on religious duty", "They should be based on political alliance"],
    "answer_en": "They should be based on genuine affection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What literary tradition does 'Love Defiled' represent?",
    "options_en": ["Medieval social satire", "Courtly love poetry", "Religious devotion", "Chivalric romance"],
    "answer_en": "Medieval social satire",
    "attempted": false,
    "selected": ""
  }
];
// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

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
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
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

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
            return;
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // Calculate time spent
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // Save to localStorage
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }
        } else {
            notAttempted++;
        }

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    // Save result data
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // Stop camera stream if active
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }

    // Redirect
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.background = color;
        circle.textContent = i + 1;
        circle.onclick = () => jumpToQuestion(i);
        nav.appendChild(circle);
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA ----------------------
let videoStream;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};