const questions = [
  {
    "num": 1,
    "question_en": "What is the central conflict in 'Love Defiled'?",
    "options_en": ["Love vs. Hate", "Purity vs. Corruption", "Wealth vs. Poverty", "Past vs. Future"],
    "answer_en": "Purity vs. Corruption",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "In the poem, what has love become according to the speaker?",
    "options_en": ["A divine gift", "A market commodity", "A political tool", "A natural force"],
    "answer_en": "A market commodity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which manuscript from the British Library contains this poem?",
    "options_en": ["Harley MS 2253", "Cotton MS Vitellius", "Royal MS 12 C.xii", "Sloane MS 2593"],
    "answer_en": "Harley MS 2253",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What poetic structure characterizes 'Love Defiled'?",
    "options_en": ["Sonnet form", "Ballad stanza", "Free verse", "Heroic couplets"],
    "answer_en": "Ballad stanza",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What historical period's social changes does the poem reflect?",
    "options_en": ["11th century Norman England", "14th century post-plague England", "16th century Tudor England", "12th century Angevin England"],
    "answer_en": "14th century post-plague England",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What literary device is used to contrast 'then' and 'now' in the poem?",
    "options_en": ["Antithesis", "Metonymy", "Synecdoche", "Onomatopoeia"],
    "answer_en": "Antithesis",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What social group's influence is particularly criticized in the poem?",
    "options_en": ["The feudal nobility", "The merchant class", "The clergy", "The peasantry"],
    "answer_en": "The merchant class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What does 'defiled' metaphorically represent in the poem?",
    "options_en": ["Physical impurity", "Moral corruption", "Social elevation", "Religious sanctity"],
    "answer_en": "Moral corruption",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What aspect of medieval economy is satirized in the poem?",
    "options_en": ["The feudal system", "The money economy", "The guild system", "The manorial system"],
    "answer_en": "The money economy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What emotional quality dominates the speaker's tone?",
    "options_en": ["Angry denunciation", "Nostalgic lament", "Joyful celebration", "Ironic detachment"],
    "answer_en": "Nostalgic lament",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What quality of love does the poem suggest has been lost?",
    "options_en": ["Its physical expression", "Its spiritual dimension", "Its sincerity and purity", "Its social function"],
    "answer_en": "Its sincerity and purity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which poetic technique enhances the poem's musical quality?",
    "options_en": ["Alliteration and rhyme", "Enjambment and caesura", "Complex metaphors", "Foreign loan words"],
    "answer_en": "Alliteration and rhyme",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What type of imagery is most prevalent in describing corrupted love?",
    "options_en": ["Commercial and monetary imagery", "Religious and liturgical imagery", "Natural and seasonal imagery", "Military and chivalric imagery"],
    "answer_en": "Commercial and monetary imagery",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the poem's perspective on contemporary social values?",
    "options_en": ["Uncritical acceptance", "Cynical rejection", "Optimistic embrace", "Indifferent observation"],
    "answer_en": "Cynical rejection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "To which literary tradition does 'Love Defiled' primarily belong?",
    "options_en": ["Medieval complaint literature", "Courtly love poetry", "Religious devotional verse", "Chivalric romance"],
    "answer_en": "Medieval complaint literature",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What has replaced genuine affection according to the poem?",
    "options_en": ["Religious devotion", "Financial calculation", "Political ambition", "Social climbing"],
    "answer_en": "Financial calculation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What metrical pattern is characteristic of the poem?",
    "options_en": ["Iambic pentameter", "Four-stress ballad meter", "Free verse rhythms", "Complex alliterative verse"],
    "answer_en": "Four-stress ballad meter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which historical crisis influenced the poem's pessimistic outlook?",
    "options_en": ["The Black Death aftermath", "The Norman Conquest", "The Hundred Years' War", "The Peasants' Revolt"],
    "answer_en": "The Black Death aftermath",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What rhetorical device structures the poem's complaint?",
    "options_en": ["Anaphoric repetition", "Hyperbolic exaggeration", "Litotic understatement", "Chiasmic reversal"],
    "answer_en": "Anaphoric repetition",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does the poem imply about modern human relationships?",
    "options_en": ["They are more transactional", "They are more spiritual", "They are more honest", "They are more permanent"],
    "answer_en": "They are more transactional",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which contemporary work shares the poem's social criticism?",
    "options_en": ["Piers Plowman", "Sir Gawain and the Green Knight", "The Canterbury Tales", "The Book of Margery Kempe"],
    "answer_en": "Piers Plowman",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What rhyme scheme organizes the stanzas?",
    "options_en": ["ABAB", "AABB", "ABBA", "Irregular rhyme"],
    "answer_en": "AABB",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What fundamental social change does the poem lament?",
    "options_en": ["The rise of capitalist values", "The decline of monarchy", "The secularization of society", "The urbanization of population"],
    "answer_en": "The rise of capitalist values",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which poetic feature aids oral transmission and memory?",
    "options_en": ["Regular rhythm and refrain", "Complex philosophical content", "Lengthy narrative development", "Intricate allegorical layers"],
    "answer_en": "Regular rhythm and refrain",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What does the poem suggest about economic development?",
    "options_en": ["It corrupts moral values", "It improves social conditions", "It is morally neutral", "It is divinely ordained"],
    "answer_en": "It corrupts moral values",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What type of manuscript is Harley 2253?",
    "options_en": ["A miscellaneous literary anthology", "A religious devotional manual", "A legal codex", "A medical treatise"],
    "answer_en": "A miscellaneous literary anthology",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "From what narrative perspective is the poem written?",
    "options_en": ["First-person observer", "Third-person omniscient", "Dramatic monologue", "Dialogue between characters"],
    "answer_en": "First-person observer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What ethical value does the poem champion?",
    "options_en": ["Authenticity in human connections", "Wealth accumulation", "Social status advancement", "Political power seeking"],
    "answer_en": "Authenticity in human connections",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What literary convention does the poem subvert?",
    "options_en": ["The idealization of romantic love", "The celebration of nature", "The praise of divine love", "The glorification of heroism"],
    "answer_en": "The idealization of romantic love",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What modern literary form does the poem anticipate?",
    "options_en": ["The protest song", "The romantic novel", "The religious tract", "The political manifesto"],
    "answer_en": "The protest song",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What does the poem suggest about contemporary ethics?",
    "options_en": ["They have declined from past standards", "They have improved over time", "They remain constant", "They are irrelevant to love"],
    "answer_en": "They have declined from past standards",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which poetic device reinforces the central theme?",
    "options_en": ["Repetition of contrasting pairs", "Variation in meter", "Complex syntactic structures", "Foreign vocabulary"],
    "answer_en": "Repetition of contrasting pairs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What historical economic development shaped the poem?",
    "options_en": ["The monetization of the economy", "The feudalization of society", "The manorial system's dominance", "The guild system's rise"],
    "answer_en": "The monetization of the economy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the poem's emotional center?",
    "options_en": ["A profound sense of loss", "A call to revolutionary action", "A celebration of present joys", "A warning of future doom"],
    "answer_en": "A profound sense of loss",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which oral poetic tradition influences the poem's form?",
    "options_en": ["The English ballad tradition", "The Latin hymn tradition", "The French romance tradition", "The Celtic bardic tradition"],
    "answer_en": "The English ballad tradition",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What does the poem imply about societal evolution?",
    "options_en": ["Progress can involve moral regression", "Progress is always positive", "Society doesn't really change", "Change is determined by fate"],
    "answer_en": "Progress can involve moral regression",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which aspect of medieval oral poetry is evident?",
    "options_en": ["Formulaic expressions and repetition", "Complex philosophical argument", "Detailed character development", "Intricate plot construction"],
    "answer_en": "Formulaic expressions and repetition",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does the poem suggest about human motivation?",
    "options_en": ["Greed increasingly dominates", "Altruism is increasing", "Motivation is unchanging", "Divine guidance determines all"],
    "answer_en": "Greed increasingly dominates",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which poetic technique evokes nostalgia?",
    "options_en": ["Contrast between idealized past and corrupt present", "Alliterative patterns", "Enjambment across lines", "Caesura within lines"],
    "answer_en": "Contrast between idealized past and corrupt present",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What social transformation does the poem document?",
    "options_en": ["The bourgeoisie's rising influence", "The nobility's declining power", "The clergy's increasing corruption", "The peasantry's growing unrest"],
    "answer_en": "The bourgeoisie's rising influence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "At what societal level is the poem's criticism aimed?",
    "options_en": ["Structural and systemic", "Individual and personal", "Divine and cosmic", "Natural and environmental"],
    "answer_en": "Structural and systemic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What specific historical context informs the poem?",
    "options_en": ["Post-plague economic restructuring", "Norman cultural imposition", "Viking raid disruptions", "Tudor religious reforms"],
    "answer_en": "Post-plague economic restructuring",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What literary device organizes the thematic material?",
    "options_en": ["Parallel structure with variations", "Narrative flashbacks", "Descriptive digressions", "Dialogic exchanges"],
    "answer_en": "Parallel structure with variations",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does the poem imply about market values?",
    "options_en": ["They invade and corrupt personal life", "They improve personal relationships", "They are irrelevant to personal life", "They should dominate personal life"],
    "answer_en": "They invade and corrupt personal life",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which critical methodology best analyzes the poem?",
    "options_en": ["Marxist socio-economic critique", "Feminist gender analysis", "Psychoanalytic interpretation", "Formalist close reading"],
    "answer_en": "Marxist socio-economic critique",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the poem's ultimate message?",
    "options_en": ["A warning against materialism", "A call to political revolution", "An invitation to religious conversion", "A personal confession of failure"],
    "answer_en": "A warning against materialism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which aspect of late medieval society is targeted?",
    "options_en": ["The encroaching commercialization", "The feudal hierarchy", "The ecclesiastical establishment", "The monarchical power"],
    "answer_en": "The encroaching commercialization",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What makes the poem resonate with modern readers?",
    "options_en": ["Its critique of commodified relationships", "Its specific medieval references", "Its complex theological ideas", "Its obscure linguistic features"],
    "answer_en": "Its critique of commodified relationships",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What does the poem suggest about genuine love?",
    "options_en": ["It should transcend calculation", "It requires financial security", "It needs social approval", "It demands religious sanction"],
    "answer_en": "It should transcend calculation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which poetic feature enhances performative quality?",
    "options_en": ["Regular rhythmic patterns and rhymes", "Complex harmonic structures", "Dissonant musical effects", "Free improvisational style"],
    "answer_en": "Regular rhythmic patterns and rhymes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What contemporary social issue mirrors the poem's concern?",
    "options_en": ["The commercialization of dating", "The decline of organized religion", "The rise of nationalism", "Environmental degradation"],
    "answer_en": "The commercialization of dating",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What literary accomplishment does 'Love Defiled' represent?",
    "options_en": ["Early social critique in poetic form", "Perfect expression of courtly love", "Profound religious mystical experience", "Accurate historical chronicle in verse"],
    "answer_en": "Early social critique in poetic form",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What relationship does the poem criticize?",
    "options_en": ["Between love and financial exchange", "Between love and social status", "Between love and political power", "Between love and religious devotion"],
    "answer_en": "Between love and financial exchange",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which specific literary form does the poem employ?",
    "options_en": ["The complaint lyric", "The love sonnet", "The heroic epic", "The mystical vision poem"],
    "answer_en": "The complaint lyric",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is the poem's attitude toward commerce?",
    "options_en": ["Critical of its moral effects", "Appreciative of its benefits", "Neutral toward its impact", "Enthusiastic about its potential"],
    "answer_en": "Critical of its moral effects",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What social observation does the poem offer?",
    "options_en": ["Materialism corrupts human connections", "Aristocracy maintains moral standards", "Clergy provides ethical guidance", "Peasantry embodies authentic values"],
    "answer_en": "Materialism corrupts human connections",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What emotional atmosphere pervades the poem?",
    "options_en": ["Bittersweet melancholy", "Unadulterated joy", "Righteous anger", "Paralyzing fear"],
    "answer_en": "Bittersweet melancholy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What literary lineage does the poem continue?",
    "options_en": ["The medieval complaint tradition", "The Renaissance sonnet sequence", "The Romantic nature poetry", "The Modernist fragmented lyric"],
    "answer_en": "The medieval complaint tradition",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What does the poem present as corrupted by commerce?",
    "options_en": ["Authentic human emotion", "Religious faith", "Political loyalty", "Social hierarchy"],
    "answer_en": "Authentic human emotion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What aspect of love is highlighted as particularly vulnerable?",
    "options_en": ["Its purity and selflessness", "Its legal contractual nature", "Its physical expression", "Its spiritual dimension"],
    "answer_en": "Its purity and selflessness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Which literary device conveys social criticism?",
    "options_en": ["Ironic juxtaposition", "Metaphorical substitution", "Simile comparison", "Personification animation"],
    "answer_en": "Ironic juxtaposition",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What does the poem suggest about contemporary romance?",
    "options_en": ["It's often calculated and mercenary", "It's more spiritually elevated", "It's more honestly expressed", "It's more transient than before"],
    "answer_en": "It's often calculated and mercenary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "Which poetic technique creates rhythmic drive?",
    "options_en": ["Regular stress patterns", "Irregular pauses", "Complex metrical variations", "Free verse improvisation"],
    "answer_en": "Regular stress patterns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What social transformation is lamented?",
    "options_en": ["The commodification of intimacy", "The secularization of society", "The urbanization of life", "The centralization of authority"],
    "answer_en": "The commodification of intimacy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What does the poem imply about evaluating love?",
    "options_en": ["It shouldn't be measured monetarily", "It should be measured by beauty", "It should be measured by status", "It should be measured by devotion"],
    "answer_en": "It shouldn't be measured monetarily",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Which aspect of medieval economic life is critiqued?",
    "options_en": ["The intrusion of market values into personal life", "The persistence of feudal obligations", "The power of ecclesiastical wealth", "The extravagance of noble courts"],
    "answer_en": "The intrusion of market values into personal life",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is the poem's portrayal of the past?",
    "options_en": ["An idealized time of purity", "A criticized time of ignorance", "An ignored historical period", "A mythologized golden age"],
    "answer_en": "An idealized time of purity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which poetic feature creates mnemonic quality?",
    "options_en": ["Memorable refrain and rhythm", "Complex imagery systems", "Lengthy narrative arcs", "Philosophical depth"],
    "answer_en": "Memorable refrain and rhythm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What transformation of love does the poem trace?",
    "options_en": ["From emotional gift to economic transaction", "From private feeling to public display", "From spiritual union to physical attraction", "From temporary passion to eternal commitment"],
    "answer_en": "From emotional gift to economic transaction",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which literary technique emphasizes temporal contrast?",
    "options_en": ["Before/after juxtaposition", "Character development", "Plot progression", "Setting description"],
    "answer_en": "Before/after juxtaposition",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is the poem's primary social criticism?",
    "options_en": ["Moral decay through commercialization", "Political corruption in government", "Religious hypocrisy in church", "Social inequality in hierarchy"],
    "answer_en": "Moral decay through commercialization",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What does the poem present as incompatible with true love?",
    "options_en": ["Financial calculation", "Social convention", "Religious doctrine", "Family expectation"],
    "answer_en": "Financial calculation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which poetic device emphasizes temporal loss?",
    "options_en": ["Repetition of temporal contrasts", "Complex metaphorical systems", "Extended similes", "Personification of abstract concepts"],
    "answer_en": "Repetition of temporal contrasts",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What ethical principle does the poem uphold?",
    "options_en": ["Authenticity in emotional life", "Wealth accumulation", "Social mobility", "Political ambition"],
    "answer_en": "Authenticity in emotional life",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What specific historical anxieties does the poem express?",
    "options_en": ["Post-plague social dislocation", "Norman cultural domination", "Anglo-Saxon identity loss", "Tudor religious conflict"],
    "answer_en": "Post-plague social dislocation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What literary device structures the contrast?",
    "options_en": ["Parallel construction with variation", "Narrative flashback technique", "Descriptive imagery accumulation", "Dialogue exchange development"],
    "answer_en": "Parallel construction with variation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What does the poem suggest about market influence?",
    "options_en": ["It degrades human values", "It improves social conditions", "It is necessary for progress", "It is temporary in history"],
    "answer_en": "It degrades human values",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which aspect of love is highlighted as particularly lost?",
    "options_en": ["Its self-giving nature", "Its legal contractual aspect", "Its physical expression", "Its spiritual dimension"],
    "answer_en": "Its self-giving nature",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which poetic technique creates performative quality?",
    "options_en": ["Rhythmic and rhyming patterns", "Complex syntactic structures", "Foreign vocabulary insertion", "Technical terminology use"],
    "answer_en": "Rhythmic and rhyming patterns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What social phenomenon is being documented?",
    "options_en": ["The commodification of emotions", "The decline of religious faith", "The growth of urban centers", "The spread of epidemic disease"],
    "answer_en": "The commodification of emotions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What does the poem imply about modern priorities?",
    "options_en": ["Wealth often trumps emotional authenticity", "Emotional authenticity trumps wealth", "Both are equally prioritized", "Neither is considered important"],
    "answer_en": "Wealth often trumps emotional authenticity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which literary tradition is being critiqued?",
    "options_en": ["The courtly love tradition", "The religious mystical tradition", "The chivalric romance tradition", "The pastoral poetry tradition"],
    "answer_en": "The courtly love tradition",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What emotional effect does the poem create?",
    "options_en": ["Melancholic reflection on loss", "Angry denunciation of vice", "Joyful celebration of love", "Fearful warning of doom"],
    "answer_en": "Melancholic reflection on loss",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What does the poem suggest about economic systems?",
    "options_en": ["They can corrupt intimate relationships", "They improve intimate relationships", "They are irrelevant to relationships", "They determine relationship structures"],
    "answer_en": "They can corrupt intimate relationships",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which poetic feature facilitates oral transmission?",
    "options_en": ["Catchy rhythmic patterns", "Complex structural design", "Lengthy narrative development", "Philosophical argumentation"],
    "answer_en": "Catchy rhythmic patterns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What historical process is reflected?",
    "options_en": ["The monetization of social relations", "The feudalization of society", "The secularization of culture", "The urbanization of population"],
    "answer_en": "The monetization of social relations",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What literary device symbolizes corruption?",
    "options_en": ["Metaphor of monetary contamination", "Simile of natural decay", "Personification of abstract vices", "Allegory of spiritual journey"],
    "answer_en": "Metaphor of monetary contamination",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What does the poem suggest about social evolution?",
    "options_en": ["Material progress can entail moral regress", "Progress always improves morality", "Society's morality is static", "Morality is divinely predetermined"],
    "answer_en": "Material progress can entail moral regress",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which aspect of medieval transition is satirized?",
    "options_en": ["The emergence of commercial capitalism", "The persistence of feudal structures", "The power of ecclesiastical institutions", "The authority of royal government"],
    "answer_en": "The emergence of commercial capitalism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which poetic technique emphasizes opposition?",
    "options_en": ["Antithetical structure", "Metonymic substitution", "Synecdochic representation", "Onomatopoeic effect"],
    "answer_en": "Antithetical structure",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What does the poem imply about contemporary love?",
    "options_en": ["It's often commercialized", "It's more spiritually pure", "It's more authentically expressed", "It's less socially important"],
    "answer_en": "It's often commercialized",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which specific literary form is utilized?",
    "options_en": ["The lyric complaint", "The narrative ballad", "The dramatic monologue", "The epic poem"],
    "answer_en": "The lyric complaint",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What social critique is central?",
    "options_en": ["Materialism's corruption of love", "Political corruption's effects", "Religious hypocrisy's impact", "Social inequality's consequences"],
    "answer_en": "Materialism's corruption of love",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which poetic feature establishes rhythm?",
    "options_en": ["Regular metrical pattern", "Irregular rhythmic breaks", "Complex metrical variations", "Free verse organization"],
    "answer_en": "Regular metrical pattern",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What does the poem suggest about historical change?",
    "options_en": ["It can involve ethical deterioration", "It always involves ethical improvement", "It doesn't affect ethics", "It follows cyclical patterns"],
    "answer_en": "It can involve ethical deterioration",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Which literary device evokes longing?",
    "options_en": ["Idealization of vanished past", "Criticism of present conditions", "Hope for future improvement", "Fear of coming changes"],
    "answer_en": "Idealization of vanished past",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is the poem's view of commercial activity?",
    "options_en": ["As morally corrosive when extended to personal life", "As positive social development", "As morally neutral activity", "As divinely approved endeavor"],
    "answer_en": "As morally corrosive when extended to personal life",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which poetic technique communicates directly?",
    "options_en": ["Plain statement of theme", "Complex allegorical coding", "Obscure symbolic representation", "Abstract imagistic suggestion"],
    "answer_en": "Plain statement of theme",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What does the poem advocate for relationships?",
    "options_en": ["They should be based on genuine feeling", "They should be based on social advantage", "They should be based on religious duty", "They should be based on political alliance"],
    "answer_en": "They should be based on genuine feeling",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What literary mode does 'Love Defiled' exemplify?",
    "options_en": ["Medieval social criticism", "Courtly love celebration", "Religious devotion", "Chivalric glorification"],
    "answer_en": "Medieval social criticism",
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