const questions = [
  {
    "num": 1,
    "question_en": "Who is the author of the essay 'Myth'?",
    "options_en": ["Rabindranath Tagore", "S. Radhakrishnan", "Aurobindo Ghosh", "J. Krishnamurti"],
    "answer_en": "S. Radhakrishnan",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is S. Radhakrishnan best known as?",
    "options_en": ["Poet", "Philosopher and statesman", "Scientist", "Novelist"],
    "answer_en": "Philosopher and statesman",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "In which work does Radhakrishnan discuss 'Myth'?",
    "options_en": ["The Hindu View of Life", "Eastern Religions and Western Thought", "An Idealist View of Life", "Recovery of Faith"],
    "answer_en": "Eastern Religions and Western Thought",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What according to Radhakrishnan is the primary function of myth?",
    "options_en": ["To entertain", "To convey spiritual truths", "To record history", "To control society"],
    "answer_en": "To convey spiritual truths",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Radhakrishnan views myth as:",
    "options_en": ["False stories", "Symbolic expressions of truth", "Primitive science", "Historical records"],
    "answer_en": "Symbolic expressions of truth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "How does Radhakrishnan distinguish myth from history?",
    "options_en": ["Myth is factual, history is fictional", "Myth conveys eternal truths, history records events", "No difference", "Myth is Western, history is Eastern"],
    "answer_en": "Myth conveys eternal truths, history records events",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is Radhakrishnan's attitude toward modern criticism of myths?",
    "options_en": ["Accepts it completely", "Rejects it as misunderstanding", "Partially accepts", "Ignores it"],
    "answer_en": "Rejects it as misunderstanding",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "According to Radhakrishnan, myths appeal to:",
    "options_en": ["Only uneducated people", "Human imagination and emotion", "Scientific mind", "Political leaders"],
    "answer_en": "Human imagination and emotion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What role do myths play in religion according to Radhakrishnan?",
    "options_en": ["They are obstacles", "They are essential vehicles of truth", "They should be eliminated", "They are historical accidents"],
    "answer_en": "They are essential vehicles of truth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Radhakrishnan compares myths to:",
    "options_en": ["Scientific formulas", "Poetic metaphors", "Legal documents", "Mathematical equations"],
    "answer_en": "Poetic metaphors",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "How does Radhakrishnan view the relationship between myth and philosophy?",
    "options_en": ["They are contradictory", "Myth is primitive philosophy", "Philosophy is refined myth", "They complement each other"],
    "answer_en": "They complement each other",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is Radhakrishnan's view on literal interpretation of myths?",
    "options_en": ["Essential for faith", "Leads to superstition", "Only correct approach", "Modern necessity"],
    "answer_en": "Leads to superstition",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "According to Radhakrishnan, myths contain:",
    "options_en": ["Historical facts", "Psychological truths", "Scientific knowledge", "Political ideologies"],
    "answer_en": "Psychological truths",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does Radhakrishnan say about myths across different cultures?",
    "options_en": ["They are completely different", "They share common truths", "Western myths superior", "Eastern myths superior"],
    "answer_en": "They share common truths",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Radhakrishnan's approach to myth is primarily:",
    "options_en": ["Anthropological", "Psychological", "Philosophical", "Historical"],
    "answer_en": "Philosophical",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What does Radhakrishnan believe about the origin of myths?",
    "options_en": ["Human invention to explain nature", "Divine revelation", "Historical events distorted", "Psychological projections"],
    "answer_en": "Psychological projections",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "How does Radhakrishnan view the evolution of myths?",
    "options_en": ["From false to true", "From simple to complex", "From symbolic to literal", "From religious to secular"],
    "answer_en": "From simple to complex",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the main purpose of mythological symbols according to Radhakrishnan?",
    "options_en": ["To conceal truth", "To reveal transcendental reality", "To create mystery", "To control masses"],
    "answer_en": "To reveal transcendental reality",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Radhakrishnan's interpretation of Hindu myths emphasizes:",
    "options_en": ["Literal truth", "Allegorical meaning", "Historical accuracy", "Ritual importance"],
    "answer_en": "Allegorical meaning",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does Radhakrishnan say about the relationship between myth and ritual?",
    "options_en": ["Myth precedes ritual", "Ritual creates myth", "They are independent", "They reinforce each other"],
    "answer_en": "They reinforce each other",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "According to Radhakrishnan, myths help in understanding:",
    "options_en": ["Scientific laws", "Human psyche and cosmic order", "Political systems", "Economic principles"],
    "answer_en": "Human psyche and cosmic order",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is Radhakrishnan's view on demythologization?",
    "options_en": ["Strongly supports", "Cautiously accepts", "Completely rejects", "Ignores the concept"],
    "answer_en": "Cautiously accepts",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "How does Radhakrishnan relate myth to truth?",
    "options_en": ["Myth conceals truth", "Myth is opposite of truth", "Myth embodies truth symbolically", "Myth has no relation to truth"],
    "answer_en": "Myth embodies truth symbolically",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does Radhakrishnan say about the permanence of myths?",
    "options_en": ["They become obsolete", "They adapt and survive", "They are eternal unchanged", "They disappear with science"],
    "answer_en": "They adapt and survive",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Radhakrishnan's philosophical school is primarily:",
    "options_en": ["Advaita Vedanta", "Samkhya", "Buddhism", "Western materialism"],
    "answer_en": "Advaita Vedanta",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What role does intuition play in understanding myths according to Radhakrishnan?",
    "options_en": ["No role", "Secondary role", "Essential role", "Only role"],
    "answer_en": "Essential role",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "How does Radhakrishnan view the conflict between science and myth?",
    "options_en": ["Science will replace myth", "They operate in different domains", "Myth is primitive science", "They are fundamentally opposed"],
    "answer_en": "They operate in different domains",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What according to Radhakrishnan is the value of mythological narratives?",
    "options_en": ["Entertainment value", "Moral and spiritual education", "Historical information", "Political propaganda"],
    "answer_en": "Moral and spiritual education",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Radhakrishnan's approach to interpreting myths is:",
    "options_en": ["Literalist", "Symbolic and philosophical", "Historical-critical", "Psychological reductionist"],
    "answer_en": "Symbolic and philosophical",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does Radhakrishnan say about the universality of mythological themes?",
    "options_en": ["They are culture-specific", "They reflect universal human experience", "They are random", "They are borrowed"],
    "answer_en": "They reflect universal human experience",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "How does Radhakrishnan view the relationship between myth and ethics?",
    "options_en": ["No relationship", "Myth provides ethical foundation", "Ethics replaces myth", "They conflict"],
    "answer_en": "Myth provides ethical foundation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is Radhakrishnan's position on the truth-content of myths?",
    "options_en": ["They contain no truth", "They contain relative truth", "They contain absolute truth symbolically", "Truth varies with interpretation"],
    "answer_en": "They contain absolute truth symbolically",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "According to Radhakrishnan, myths serve to:",
    "options_en": ["Simplify complex truths", "Complicate simple truths", "Hide truths from unworthy", "Create artificial mysteries"],
    "answer_en": "Simplify complex truths",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does Radhakrishnan say about the psychological function of myths?",
    "options_en": ["They satisfy emotional needs", "They create neuroses", "They have no psychological function", "They replace therapy"],
    "answer_en": "They satisfy emotional needs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Radhakrishnan's interpretation emphasizes which aspect of Hindu myths?",
    "options_en": ["Ritualistic", "Metaphysical", "Historical", "Social"],
    "answer_en": "Metaphysical",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "How does Radhakrishnan view the role of imagination in myth-making?",
    "options_en": ["As distortion", "As creative faculty for truth", "As irrelevant", "As obstacle"],
    "answer_en": "As creative faculty for truth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is Radhakrishnan's view on comparative mythology?",
    "options_en": ["Unnecessary", "Essential for understanding", "Dangerous", "Only for scholars"],
    "answer_en": "Essential for understanding",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "According to Radhakrishnan, the deepest meaning of myths is:",
    "options_en": ["Historical", "Psychological", "Spiritual", "Social"],
    "answer_en": "Spiritual",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "How does Radhakrishnan relate myth to reality?",
    "options_en": ["Myth is unreal", "Myth is more real than reality", "Myth points to higher reality", "No relation"],
    "answer_en": "Myth points to higher reality",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What does Radhakrishnan say about the authority of myths?",
    "options_en": ["They have divine authority", "Their authority comes from truth they convey", "They have no authority", "Authority depends on interpretation"],
    "answer_en": "Their authority comes from truth they convey",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Radhakrishnan's approach can be described as:",
    "options_en": ["Fundamentalist", "Modernist", "Neo-orthodox", "Liberal and interpretive"],
    "answer_en": "Liberal and interpretive",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What according to Radhakrishnan is the test of a true myth?",
    "options_en": ["Historical accuracy", "Spiritual effectiveness", "Scientific verification", "Popular acceptance"],
    "answer_en": "Spiritual effectiveness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "How does Radhakrishnan view the relationship between myth and dogma?",
    "options_en": ["They are identical", "Myth leads to dogma", "Dogma kills myth", "No relationship"],
    "answer_en": "Dogma kills myth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does Radhakrishnan say about the educational value of myths?",
    "options_en": ["They mislead", "They educate holistically", "They are only for children", "They have no educational value"],
    "answer_en": "They educate holistically",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Radhakrishnan emphasizes that myths should be interpreted:",
    "options_en": ["Literally", "Contextually", "Symbolically", "Historically"],
    "answer_en": "Symbolically",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is Radhakrishnan's view on the rationality of myths?",
    "options_en": ["They are irrational", "They are supra-rational", "They are anti-rational", "They are rational"],
    "answer_en": "They are supra-rational",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "How does Radhakrishnan relate myth to culture?",
    "options_en": ["Myth creates culture", "Culture creates myth", "They are independent", "They interact dynamically"],
    "answer_en": "They interact dynamically",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What does Radhakrishnan say about the preservation of myths?",
    "options_en": ["They should be preserved literally", "They should be reinterpreted for each age", "They should be discarded", "They preserve themselves"],
    "answer_en": "They should be reinterpreted for each age",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Radhakrishnan's philosophical stance on myth is closest to:",
    "options_en": ["Materialism", "Positivism", "Idealism", "Existentialism"],
    "answer_en": "Idealism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What according to Radhakrishnan is the ultimate source of myths?",
    "options_en": ["Human fear", "Divine inspiration", "Human spiritual intuition", "Environmental factors"],
    "answer_en": "Human spiritual intuition",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "How does Radhakrishnan view mythological language?",
    "options_en": ["As precise", "As symbolic and suggestive", "As deceptive", "As primitive"],
    "answer_en": "As symbolic and suggestive",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What does Radhakrishnan say about the truth in different myths?",
    "options_en": ["Only one myth contains truth", "All contain partial truth", "Truth is relative to culture", "Myths contain no truth"],
    "answer_en": "All contain partial truth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Radhakrishnan's method of interpreting myths involves:",
    "options_en": ["Textual criticism", "Psychological analysis", "Philosophical reflection", "All of these"],
    "answer_en": "All of these",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is Radhakrishnan's view on the evolution of religious understanding?",
    "options_en": ["From myth to philosophy to science", "From science to philosophy to myth", "Circular process", "No evolution"],
    "answer_en": "From myth to philosophy to science",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "How does Radhakrishnan relate myth to human development?",
    "options_en": ["Myth hinders development", "Myth is necessary for development", "Myth is irrelevant", "Myth is temporary stage"],
    "answer_en": "Myth is necessary for development",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What does Radhakrishnan say about the social function of myths?",
    "options_en": ["They maintain social order", "They challenge social order", "They have no social function", "They create social conflict"],
    "answer_en": "They maintain social order",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Radhakrishnan's interpretation of myth is influenced by:",
    "options_en": ["Western philosophy only", "Eastern philosophy only", "Both Eastern and Western thought", "Scientific thought only"],
    "answer_en": "Both Eastern and Western thought",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What according to Radhakrishnan is the relationship between myth and experience?",
    "options_en": ["Myth precedes experience", "Experience creates myth", "They interact", "No relationship"],
    "answer_en": "They interact",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "How does Radhakrishnan view the limitations of myths?",
    "options_en": ["They have no limitations", "They are limited by cultural context", "They are fundamentally limited", "Limitations are strengths"],
    "answer_en": "They are limited by cultural context",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What does Radhakrishnan say about the necessity of myths?",
    "options_en": ["They are unnecessary in modern age", "They are always necessary", "Necessary only for primitive minds", "Necessary for spiritual growth"],
    "answer_en": "Necessary for spiritual growth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Radhakrishnan emphasizes that myths should be understood:",
    "options_en": ["Individually", "As part of tradition", "Scientifically", "Politically"],
    "answer_en": "As part of tradition",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is Radhakrishnan's view on the conflict between different myths?",
    "options_en": ["One must choose the true myth", "All myths complement each other", "Myths inherently conflict", "Conflict is superficial"],
    "answer_en": "Conflict is superficial",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "How does Radhakrishnan relate myth to the Absolute?",
    "options_en": ["Myth describes the Absolute directly", "Myth points to the Absolute indirectly", "Myth has no relation to Absolute", "Myth is the Absolute"],
    "answer_en": "Myth points to the Absolute indirectly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What does Radhakrishnan say about the creative aspect of myth-making?",
    "options_en": ["It is human invention", "It is divine inspiration", "It is collective unconscious", "It is cultural expression"],
    "answer_en": "It is cultural expression",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "Radhakrishnan's position on myth can be called:",
    "options_en": ["Traditionalist", "Revisionist", "Synthetic", "Destructive"],
    "answer_en": "Synthetic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What according to Radhakrishnan is the relationship between myth and symbol?",
    "options_en": ["They are identical", "Myth uses symbols", "Symbols create myths", "No relationship"],
    "answer_en": "Myth uses symbols",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "How does Radhakrishnan view the psychological truth in myths?",
    "options_en": ["Primary truth", "Secondary truth", "No psychological truth", "Only truth"],
    "answer_en": "Primary truth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What does Radhakrishnan say about the adaptability of myths?",
    "options_en": ["They are rigid", "They adapt to new understandings", "They should not adapt", "Adaptation destroys them"],
    "answer_en": "They adapt to new understandings",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Radhakrishnan's interpretation gives importance to:",
    "options_en": ["Letter of the myth", "Spirit of the myth", "Historical context", "Author's intention"],
    "answer_en": "Spirit of the myth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is Radhakrishnan's view on the ethical dimension of myths?",
    "options_en": ["They have no ethics", "They contain ethical principles", "Ethics is separate from myth", "Myths are unethical"],
    "answer_en": "They contain ethical principles",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "How does Radhakrishnan relate myth to human consciousness?",
    "options_en": ["Myth shapes consciousness", "Consciousness creates myth", "Reciprocal relationship", "No relationship"],
    "answer_en": "Reciprocal relationship",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What does Radhakrishnan say about the validity of mythological claims?",
    "options_en": ["They are empirically valid", "They are spiritually valid", "They have no validity", "Validity is subjective"],
    "answer_en": "They are spiritually valid",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Radhakrishnan's approach to myth is:",
    "options_en": ["Exclusivist", "Inclusivist", "Relativist", "Skeptical"],
    "answer_en": "Inclusivist",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What according to Radhakrishnan is the ultimate purpose of myth?",
    "options_en": ["Social control", "Spiritual enlightenment", "Entertainment", "Historical preservation"],
    "answer_en": "Spiritual enlightenment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "How does Radhakrishnan view the relationship between myth and reality?",
    "options_en": ["Myth is less real", "Myth is more real", "Different levels of reality", "Same reality"],
    "answer_en": "Different levels of reality",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What does Radhakrishnan say about the interpretation of ancient myths today?",
    "options_en": ["Interpret literally", "Reinterpret symbolically", "Discard as outdated", "Accept without question"],
    "answer_en": "Reinterpret symbolically",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Radhakrishnan emphasizes that myths communicate through:",
    "options_en": ["Direct statements", "Symbols and stories", "Logical arguments", "Scientific facts"],
    "answer_en": "Symbols and stories",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is Radhakrishnan's view on the cognitive value of myths?",
    "options_en": ["No cognitive value", "Limited cognitive value", "Significant cognitive value", "Only cognitive value"],
    "answer_en": "Significant cognitive value",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "How does Radhakrishnan relate myth to human nature?",
    "options_en": ["Myth expresses human nature", "Myth distorts human nature", "No relation", "Human nature creates myth"],
    "answer_en": "Myth expresses human nature",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What does Radhakrishnan say about the permanence of mythological truths?",
    "options_en": ["They change with time", "They are eternal", "They are temporary", "There are no truths in myth"],
    "answer_en": "They are eternal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Radhakrishnan's philosophical method includes:",
    "options_en": ["Only Eastern methods", "Only Western methods", "Synthesis of methods", "Rejection of all methods"],
    "answer_en": "Synthesis of methods",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What according to Radhakrishnan is the relationship between myth and reason?",
    "options_en": ["Myth opposes reason", "Myth complements reason", "Reason destroys myth", "Myth is superior to reason"],
    "answer_en": "Myth complements reason",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "How does Radhakrishnan view the social criticism of myths?",
    "options_en": ["Completely valid", "Completely invalid", "Partially valid", "Irrelevant"],
    "answer_en": "Partially valid",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What does Radhakrishnan say about the universality of mythological interpretation?",
    "options_en": ["Only one interpretation", "Multiple valid interpretations", "Interpretation is personal", "No interpretation needed"],
    "answer_en": "Multiple valid interpretations",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Radhakrishnan's contribution to understanding myth is:",
    "options_en": ["Destroying myths", "Defending literal interpretation", "Providing philosophical interpretation", "Ignoring myths"],
    "answer_en": "Providing philosophical interpretation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is Radhakrishnan's view on the relationship between myth and faith?",
    "options_en": ["Myth creates faith", "Faith creates myth", "They are interdependent", "They conflict"],
    "answer_en": "They are interdependent",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "How does Radhakrishnan relate myth to the modern world?",
    "options_en": ["Myth is irrelevant", "Myth is essential", "Myth needs updating", "Myth should be abandoned"],
    "answer_en": "Myth is essential",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What does Radhakrishnan say about the emotional power of myths?",
    "options_en": ["They manipulate emotions", "They express emotions", "They control emotions", "They have no emotional power"],
    "answer_en": "They express emotions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Radhakrishnan's interpretation focuses on:",
    "options_en": ["Historical context", "Literary form", "Philosophical content", "Social impact"],
    "answer_en": "Philosophical content",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What according to Radhakrishnan is the test of mythological validity?",
    "options_en": ["Empirical verification", "Spiritual experience", "Logical consistency", "Historical evidence"],
    "answer_en": "Spiritual experience",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "How does Radhakrishnan view the diversity of myths?",
    "options_en": ["As contradiction", "As richness", "As confusion", "As error"],
    "answer_en": "As richness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What does Radhakrishnan say about the authority of mythological texts?",
    "options_en": ["Absolute authority", "No authority", "Conditional authority", "Authority from interpretation"],
    "answer_en": "Conditional authority",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Radhakrishnan's approach can be described as:",
    "options_en": ["Reductionist", "Holistic", "Fragmentary", "Superficial"],
    "answer_en": "Holistic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is Radhakrishnan's view on the relationship between myth and philosophy?",
    "options_en": ["Philosophy replaces myth", "Myth is primitive philosophy", "Philosophy clarifies myth", "They are identical"],
    "answer_en": "Philosophy clarifies myth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "How does Radhakrishnan relate myth to human destiny?",
    "options_en": ["Myth reveals destiny", "Myth creates destiny", "No relation", "Destiny creates myth"],
    "answer_en": "Myth reveals destiny",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What does Radhakrishnan say about the transformative power of myths?",
    "options_en": ["They cannot transform", "They transform individuals", "They transform societies", "Both individual and social transformation"],
    "answer_en": "Both individual and social transformation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Radhakrishnan emphasizes that understanding myths requires:",
    "options_en": ["Only intellect", "Only faith", "Intuition and intellect", "Only intuition"],
    "answer_en": "Intuition and intellect",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is Radhakrishnan's view on the contemporary relevance of myths?",
    "options_en": ["No relevance", "Limited relevance", "Great relevance", "Only historical relevance"],
    "answer_en": "Great relevance",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "How does Radhakrishnan view the relationship between myth and truth?",
    "options_en": ["Myth is false", "Myth contains truth", "Myth is truth", "Myth obscures truth"],
    "answer_en": "Myth contains truth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What according to Radhakrishnan is the ultimate value of studying myths?",
    "options_en": ["Historical knowledge", "Cultural understanding", "Spiritual growth", "All of these"],
    "answer_en": "All of these",
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