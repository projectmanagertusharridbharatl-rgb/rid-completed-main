const questions = [
    {
        "num": 1,
        "question_en": "What is the output of print([x if x % 2 == 0 else None for x in range(5)])?",
        "question_hi": "print([x if x % 2 == 0 else None for x in range(5)]) का आउटपुट क्या होगा?",
        "options_en": ["[0, None, 2, None, 4]", "[0, 2, 4]", "[None, 1, None, 3, None]", "Error"],
        "options_hi": ["[0, None, 2, None, 4]", "[0, 2, 4]", "[None, 1, None, 3, None]", "त्रुटि"],
        "answer_en": "[0, None, 2, None, 4]",
        "answer_hi": "[0, None, 2, None, 4]"
    },
    {
        "num": 2,
        "question_en": "What does print((lambda x: x**2)(5)) output?",
        "question_hi": "print((lambda x: x**2)(5)) का आउटपुट क्या होगा?",
        "options_en": ["25", "10", "125", "Error"],
        "options_hi": ["25", "10", "125", "त्रुटि"],
        "answer_en": "25",
        "answer_hi": "25"
    },
    {
        "num": 3,
        "question_en": "What is the output of print({x: x**2 for x in range(3)})?",
        "question_hi": "print({x: x**2 for x in range(3)}) का आउटपुट क्या होगा?",
        "options_en": ["{0: 0, 1: 1, 2: 4}", "{1: 1, 2: 4}", "[0, 1, 4]", "Error"],
        "options_hi": ["{0: 0, 1: 1, 2: 4}", "{1: 1, 2: 4}", "[0, 1, 4]", "त्रुटि"],
        "answer_en": "{0: 0, 1: 1, 2: 4}",
        "answer_hi": "{0: 0, 1: 1, 2: 4}"
    },
    {
        "num": 4,
        "question_en": "What does print([x+y for x in [1,2] for y in [3,4]]) output?",
        "question_hi": "print([x+y for x in [1,2] for y in [3,4]]) का आउटपुट क्या होगा?",
        "options_en": ["[4, 5, 5, 6]", "[4, 5]", "[1, 2, 3, 4]", "Error"],
        "options_hi": ["[4, 5, 5, 6]", "[4, 5]", "[1, 2, 3, 4]", "त्रुटि"],
        "answer_en": "[4, 5, 5, 6]",
        "answer_hi": "[4, 5, 5, 6]"
    },
    {
        "num": 5,
        "question_en": "What is the output of print((1, 2) + (3, 4))?",
        "question_hi": "print((1, 2) + (3, 4)) का आउटपुट क्या होगा?",
        "options_en": ["(1, 2, 3, 4)", "(4, 6)", "(1, 2)(3, 4)", "Error"],
        "options_hi": ["(1, 2, 3, 4)", "(4, 6)", "(1, 2)(3, 4)", "त्रुटि"],
        "answer_en": "(1, 2, 3, 4)",
        "answer_hi": "(1, 2, 3, 4)"
    },
    {
        "num": 6,
        "question_en": "What does print([1, 2, 3][::-1]) output?",
        "question_hi": "print([1, 2, 3][::-1]) का आउटपुट क्या होगा?",
        "options_en": ["[3, 2, 1]", "[1, 2, 3]", "[3]", "Error"],
        "options_hi": ["[3, 2, 1]", "[1, 2, 3]", "[3]", "त्रुटि"],
        "answer_en": "[3, 2, 1]",
        "answer_hi": "[3, 2, 1]"
    },
    {
        "num": 7,
        "question_en": "What is the output of print('hello'.upper().lower())?",
        "question_hi": "print('hello'.upper().lower()) का आउटपुट क्या होगा?",
        "options_en": ["hello", "HELLO", "Hello", "Error"],
        "options_hi": ["hello", "HELLO", "Hello", "त्रुटि"],
        "answer_en": "hello",
        "answer_hi": "hello"
    },
    {
        "num": 8,
        "question_en": "What does print(len('hello world'.split())) output?",
        "question_hi": "print(len('hello world'.split())) का आउटपुट क्या होगा?",
        "options_en": ["2", "11", "1", "Error"],
        "options_hi": ["2", "11", "1", "त्रुटि"],
        "answer_en": "2",
        "answer_hi": "2"
    },
    {
        "num": 9,
        "question_en": "What is the output of print([x*2 for x in range(3)])?",
        "question_hi": "print([x*2 for x in range(3)]) का आउटपुट क्या होगा?",
        "options_en": ["[0, 2, 4]", "[0, 1, 2]", "[2, 4, 6]", "Error"],
        "options_hi": ["[0, 2, 4]", "[0, 1, 2]", "[2, 4, 6]", "त्रुटि"],
        "answer_en": "[0, 2, 4]",
        "answer_hi": "[0, 2, 4]"
    },
    {
        "num": 10,
        "question_en": "What does print('abc'.find('b')) output?",
        "question_hi": "print('abc'.find('b')) का आउटपुट क्या होगा?",
        "options_en": ["1", "0", "-1", "Error"],
        "options_hi": ["1", "0", "-1", "त्रुटि"],
        "answer_en": "1",
        "answer_hi": "1"
    },
    {
        "num": 11,
        "question_en": "What is the output of print('hello'.replace('l', 'x'))?",
        "question_hi": "print('hello'.replace('l', 'x')) का आउटपुट क्या होगा?",
        "options_en": ["hexxo", "hexo", "hellx", "Error"],
        "options_hi": ["hexxo", "hexo", "hellx", "त्रुटि"],
        "answer_en": "hexxo",
        "answer_hi": "hexxo"
    },
    {
        "num": 12,
        "question_en": "What does print(' hello '.strip()) output?",
        "question_hi": "print(' hello '.strip()) का आउटपुट क्या होगा?",
        "options_en": ["hello", " hello", "hello ", "Error"],
        "options_hi": ["hello", " hello", "hello ", "त्रुटि"],
        "answer_en": "hello",
        "answer_hi": "hello"
    },
    {
        "num": 13,
        "question_en": "What is the output of print([1, 2] * 2)?",
        "question_hi": "print([1, 2] * 2) का आउटपुट क्या होगा?",
        "options_en": ["[1, 2, 1, 2]", "[2, 4]", "[1, 2, 2]", "Error"],
        "options_hi": ["[1, 2, 1, 2]", "[2, 4]", "[1, 2, 2]", "त्रुटि"],
        "answer_en": "[1, 2, 1, 2]",
        "answer_hi": "[1, 2, 1, 2]"
    },
    {
        "num": 14,
        "question_en": "What does print('hello'[::-1]) output?",
        "question_hi": "print('hello'[::-1]) का आउटपुट क्या होगा?",
        "options_en": ["olleh", "hello", "h", "Error"],
        "options_hi": ["olleh", "hello", "h", "त्रुटि"],
        "answer_en": "olleh",
        "answer_hi": "olleh"
    },
    {
        "num": 15,
        "question_en": "What is the output of print(max([1, 2, 3], key=lambda x: -x))?",
        "question_hi": "print(max([1, 2, 3], key=lambda x: -x)) का आउटपुट क्या होगा?",
        "options_en": ["1", "3", "2", "Error"],
        "options_hi": ["1", "3", "2", "त्रुटि"],
        "answer_en": "1",
        "answer_hi": "1"
    },
    {
        "num": 16,
        "question_en": "What does print(sorted([3, 1, 2], reverse=True)) output?",
        "question_hi": "print(sorted([3, 1, 2], reverse=True)) का आउटपुट क्या होगा?",
        "options_en": ["[3, 2, 1]", "[1, 2, 3]", "[3, 1, 2]", "Error"],
        "options_hi": ["[3, 2, 1]", "[1, 2, 3]", "[3, 1, 2]", "त्रुटि"],
        "answer_en": "[3, 2, 1]",
        "answer_hi": "[3, 2, 1]"
    },
    {
        "num": 17,
        "question_en": "What is the output of print('hello'.count('l'))?",
        "question_hi": "print('hello'.count('l')) का आउटपुट क्या होगा?",
        "options_en": ["2", "1", "3", "Error"],
        "options_hi": ["2", "1", "3", "त्रुटि"],
        "answer_en": "2",
        "answer_hi": "2"
    },
    {
        "num": 18,
        "question_en": "What does print([x for x in 'abc']) output?",
        "question_hi": "print([x for x in 'abc']) का आउटपुट क्या होगा?",
        "options_en": ["['a', 'b', 'c']", "['abc']", "[97, 98, 99]", "Error"],
        "options_hi": ["['a', 'b', 'c']", "['abc']", "[97, 98, 99]", "त्रुटि"],
        "answer_en": "['a', 'b', 'c']",
        "answer_hi": "['a', 'b', 'c']"
    },
    {
        "num": 19,
        "question_en": "What is the output of print('hello'.startswith('he'))?",
        "question_hi": "print('hello'.startswith('he')) का आउटपुट क्या होगा?",
        "options_en": ["True", "False", "he", "Error"],
        "options_hi": ["True", "False", "he", "त्रुटि"],
        "answer_en": "True",
        "answer_hi": "True"
    },
    {
        "num": 20,
        "question_en": "What does print('hello'.endswith('lo')) output?",
        "question_hi": "print('hello'.endswith('lo')) का आउटपुट क्या होगा?",
        "options_en": ["True", "False", "lo", "Error"],
        "options_hi": ["True", "False", "lo", "त्रुटि"],
        "answer_en": "True",
        "answer_hi": "True"
    },
    {
        "num": 21,
        "question_en": "What is the output of print('hello'.capitalize())?",
        "question_hi": "print('hello'.capitalize()) का आउटपुट क्या होगा?",
        "options_en": ["Hello", "HELLO", "hello", "Error"],
        "options_hi": ["Hello", "HELLO", "hello", "त्रुटि"],
        "answer_en": "Hello",
        "answer_hi": "Hello"
    },
    {
        "num": 22,
        "question_en": "What does print('hello'.title()) output?",
        "question_hi": "print('hello'.title()) का आउटपुट क्या होगा?",
        "options_en": ["Hello", "HELLO", "hello", "Error"],
        "options_hi": ["Hello", "HELLO", "hello", "त्रुटि"],
        "answer_en": "Hello",
        "answer_hi": "Hello"
    },
    {
        "num": 23,
        "question_en": "What is the output of print('hello'.swapcase())?",
        "question_hi": "print('hello'.swapcase()) का आउटपुट क्या होगा?",
        "options_en": ["HELLO", "Hello", "hELLO", "Error"],
        "options_hi": ["HELLO", "Hello", "hELLO", "त्रुटि"],
        "answer_en": "HELLO",
        "answer_hi": "HELLO"
    },
    {
        "num": 24,
        "question_en": "What does print('hello'.isalpha()) output?",
        "question_hi": "print('hello'.isalpha()) का आउटपुट क्या होगा?",
        "options_en": ["True", "False", "Error", "None"],
        "options_hi": ["True", "False", "त्रुटि", "None"],
        "answer_en": "True",
        "answer_hi": "True"
    },
    {
        "num": 25,
        "question_en": "What is the output of print('123'.isdigit())?",
        "question_hi": "print('123'.isdigit()) का आउटपुट क्या होगा?",
        "options_en": ["True", "False", "123", "Error"],
        "options_hi": ["True", "False", "123", "त्रुटि"],
        "answer_en": "True",
        "answer_hi": "True"
    },
    {
        "num": 26,
        "question_en": "What does print('hello world'.split(' ')) output?",
        "question_hi": "print('hello world'.split(' ')) का आउटपुट क्या होगा?",
        "options_en": ["['hello', 'world']", "['hello world']", "['h', 'e', 'l', 'l', 'o']", "Error"],
        "options_hi": ["['hello', 'world']", "['hello world']", "['h', 'e', 'l', 'l', 'o']", "त्रुटि"],
        "answer_en": "['hello', 'world']",
        "answer_hi": "['hello', 'world']"
    },
    {
        "num": 27,
        "question_en": "What is the output of print('-'.join(['a', 'b', 'c']))?",
        "question_hi": "print('-'.join(['a', 'b', 'c'])) का आउटपुट क्या होगा?",
        "options_en": ["a-b-c", "a b c", "abc", "Error"],
        "options_hi": ["a-b-c", "a b c", "abc", "त्रुटि"],
        "answer_en": "a-b-c",
        "answer_hi": "a-b-c"
    },
    {
        "num": 28,
        "question_en": "What does print('hello'.center(10, '-')) output?",
        "question_hi": "print('hello'.center(10, '-')) का आउटपुट क्या होगा?",
        "options_en": ["--hello---", "hello-----", "--hello--", "Error"],
        "options_hi": ["--hello---", "hello-----", "--hello--", "त्रुटि"],
        "answer_en": "--hello---",
        "answer_hi": "--hello---"
    },
    {
        "num": 29,
        "question_en": "What is the output of print('hello'.ljust(10, '-'))?",
        "question_hi": "print('hello'.ljust(10, '-')) का आउटपुट क्या होगा?",
        "options_en": ["hello-----", "--hello---", "-----hello", "Error"],
        "options_hi": ["hello-----", "--hello---", "-----hello", "त्रुटि"],
        "answer_en": "hello-----",
        "answer_hi": "hello-----"
    },
    {
        "num": 30,
        "question_en": "What does print('hello'.rjust(10, '-')) output?",
        "question_hi": "print('hello'.rjust(10, '-')) का आउटपुट क्या होगा?",
        "options_en": ["-----hello", "hello-----", "--hello---", "Error"],
        "options_hi": ["-----hello", "hello-----", "--hello---", "त्रुटि"],
        "answer_en": "-----hello",
        "answer_hi": "-----hello"
    },
    {
        "num": 31,
        "question_en": "What is the output of print('hello'.zfill(10))?",
        "question_hi": "print('hello'.zfill(10)) का आउटपुट क्या होगा?",
        "options_en": ["00000hello", "hello00000", " hello ", "Error"],
        "options_hi": ["00000hello", "hello00000", " hello ", "त्रुटि"],
        "answer_en": "00000hello",
        "answer_hi": "00000hello"
    },
    {
        "num": 32,
        "question_en": "What does print('hello world'.partition(' ')) output?",
        "question_hi": "print('hello world'.partition(' ')) का आउटपुट क्या होगा?",
        "options_en":[ "('hello', ' ', 'world')", "['hello', 'world']", "('hello world')", "Error"],
        "options_hi": ["('hello', ' ', 'world')", "['hello', 'world']", "('hello world')", "त्रुटि"],
        "answer_en": "('hello', ' ', 'world')",
        "answer_hi": "('hello', ' ', 'world')"
    },
    {
        "num": 33,
        "question_en": "What is the output of print('hello'.index('e'))?",
        "question_hi": "print('hello'.index('e')) का आउटपुट क्या होगा?",
        "options_en": ["1", "0", "2", "Error"],
        "options_hi": ["1", "0", "2", "त्रुटि"],
        "answer_en": "1",
        "answer_hi": "1"
    },
    {
        "num": 34,
        "question_en": "What does print('hello'.rfind('l')) output?",
        "question_hi": "print('hello'.rfind('l')) का आउटपुट क्या होगा?",
        "options_en": ["3", "2", "4", "Error"],
        "options_hi": ["3", "2", "4", "त्रुटि"],
        "answer_en": "3",
        "answer_hi": "3"
    },
    {
        "num": 35,
        "question_en": "What is the output of print('hello'.encode())?",
        "question_hi": "print('hello'.encode()) का आउटपुट क्या होगा?",
        "options_en": ["b'hello'", "hello", "104 101 108 108 111", "Error"],
        "options_hi": ["b'hello'", "hello", "104 101 108 108 111", "त्रुटि"],
        "answer_en": "b'hello'",
        "answer_hi": "b'hello'"
    },
    {
        "num": 36,
        "question_en": "What does print(b'hello'.decode()) output?",
        "question_hi": "print(b'hello'.decode()) का आउटपुट क्या होगा?",
        "options_en": ["hello", "b'hello'", "104 101 108 108 111", "Error"],
        "options_hi": ["hello", "b'hello'", "104 101 108 108 111", "त्रुटि"],
        "answer_en": "hello",
        "answer_hi": "hello"
    },
    {
        "num": 37,
        "question_en": "What is the output of print('hello'.isalnum())?",
        "question_hi": "print('hello'.isalnum()) का आउटपुट क्या होगा?",
        "options_en": ["True", "False", "Error", "None"],
        "options_hi": ["True", "False", "त्रुटि", "None"],
        "answer_en": "True",
        "answer_hi": "True"
    },
    {
        "num": 38,
        "question_en": "What does print('hello123'.isalnum()) output?",
        "question_hi": "print('hello123'.isalnum()) का आउटपुट क्या होगा?",
        "options_en": ["True", "False", "Error", "None"],
        "options_hi": ["True", "False", "त्रुटि", "None"],
        "answer_en": "True",
        "answer_hi": "True"
    },
    {
        "num": 39,
        "question_en": "What is the output of print('hello'.islower())?",
        "question_hi": "print('hello'.islower()) का आउटपुट क्या होगा?",
        "options_en": ["True", "False", "Error", "None"],
        "options_hi": ["True", "False", "त्रुटि", "None"],
        "answer_en": "True",
        "answer_hi": "True"
    },
    {
        "num": 40,
        "question_en": "What does print('HELLO'.isupper()) output?",
        "question_hi": "print('HELLO'.isupper()) का आउटपुट क्या होगा?",
        "options_en": ["True", "False", "Error", "None"],
        "options_hi": ["True", "False", "त्रुटि", "None"],
        "answer_en": "True",
        "answer_hi": "True"
    },
    {
        "num": 41,
        "question_en": "What is the output of print('   '.isspace())?",
        "question_hi": "print('   '.isspace()) का आउटपुट क्या होगा?",
        "options_en": ["True", "False", "Error", "None"],
        "options_hi": ["True", "False", "त्रुटि", "None"],
        "answer_en": "True",
        "answer_hi": "True"
    },
    {
        "num": 42,
        "question_en": "What does print('Hello World'.istitle()) output?",
        "question_hi": "print('Hello World'.istitle()) का आउटपुट क्या होगा?",
        "options_en": ["True", "False", "Error", "None"],
        "options_hi": ["True", "False", "त्रुटि", "None"],
        "answer_en": "True",
        "answer_hi": "True"
    },
    {
        "num": 43,
        "question_en": "What is the output of print('hello'.isprintable())?",
        "question_hi": "print('hello'.isprintable()) का आउटपुट क्या होगा?",
        "options_en": ["True", "False", "Error", "None"],
        "options_hi": ["True", "False", "त्रुटि", "None"],
        "answer_en": "True",
        "answer_hi": "True"
    },
    {
        "num": 44,
        "question_en": "What does print('hello'.isascii()) output?",
        "question_hi": "print('hello'.isascii()) का आउटपुट क्या होगा?",
        "options_en": ["True", "False", "Error", "None"],
        "options_hi": ["True", "False", "त्रुटि", "None"],
        "answer_en": "True",
        "answer_hi": "True"
    },
    {
        "num": 45,
        "question_en": "What is the output of print('hello'.isidentifier())?",
        "question_hi": "print('hello'.isidentifier()) का आउटपウट क्या होगा?",
        "options_en": ["True", "False", "Error", "None"],
        "options_hi": ["True", "False", "त्रुटि", "None"],
        "answer_en": "True",
        "answer_hi": "True"
    },
    {
        "num": 46,
        "question_en": "What does print('hello'.removeprefix('he')) output?",
        "question_hi": "print('hello'.removeprefix('he')) का आउटपुट क्या होगा?",
        "options_en": ["llo", "hello", "he", "Error"],
        "options_hi": ["llo", "hello", "he", "त्रुटि"],
        "answer_en": "llo",
        "answer_hi": "llo"
    },
    {
        "num": 47,
        "question_en": "What is the output of print('hello'.removesuffix('lo'))?",
        "question_hi": "print('hello'.removesuffix('lo')) का आउटपुट क्या होगा?",
        "options_en": ["hel", "hello", "lo", "Error"],
        "options_hi": ["hel", "hello", "lo", "त्रुटि"],
        "answer_en": "hel",
        "answer_hi": "hel"
    },
    {
        "num": 48,
        "question_en": "What does print('hello'.casefold() == 'HELLO'.casefold()) output?",
        "question_hi": "print('hello'.casefold() == 'HELLO'.casefold()) का आउटपुट क्या होगा?",
        "options_en": ["True", "False", "Error", "None"],
        "options_hi": ["True", "False", "त्रुटि", "None"],
        "answer_en": "True",
        "answer_hi": "True"
    },
    {
        "num": 49,
        "question_en": "What is the output of print('hello'.maketrans('hel', '123'))?",
        "question_hi": "print('hello'.maketrans('hel', '123')) का आउटपुट क्या होगा?",
        "options_en": ["{104: 49, 101: 50, 108: 51}", "123", "hello", "Error"],
        "options_hi": ["{104: 49, 101: 50, 108: 51}", "123", "hello", "त्रुटि"],
        "answer_en": "{104: 49, 101: 50, 108: 51}",
        "answer_hi": "{104: 49, 101: 50, 108: 51}"
    },
    {
        "num": 50,
        "question_en": "What does print('hello'.translate({104: 72, 101: 69})) output?",
        "question_hi": "print('hello'.translate({104: 72, 101: 69})) का आउटपुट क्या होगा?",
        "options_en": ["HEllo", "hello", "HELLO", "Error"],
        "options_hi": ["HEllo", "hello", "HELLO", "त्रुटि"],
        "answer_en": "HEllo",
        "answer_hi": "HEllo"
    }
]


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