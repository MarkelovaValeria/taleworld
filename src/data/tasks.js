export const mockTasks = [
  {
    id: 1,
    question:
      "Choose the correct form of the verb: She ___ to school every day.",
    type: {
      id: 1,
      type: "grammar",
    },
    subType: {
      id: 1,
      subType: "present simple",
    },
    options: [
      { id: 1, text: "go", isCorrect: false },
      { id: 2, text: "goes", isCorrect: true },
      { id: 3, text: "going", isCorrect: false },
      { id: 4, text: "gone", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Select the correct sentence:",
    type: {
      id: 1,
      type: "grammar",
    },
    subType: {
      id: 2,
      subType: "past simple",
    },
    options: [
      { id: 5, text: "I goed to the store", isCorrect: false },
      { id: 6, text: "I went to the store", isCorrect: true },
      { id: 7, text: "I going to the store", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "Choose the correct translation: 'Book'",
    type: {
      id: 2,
      type: "reading",
    },
    subType: {
      id: 3,
      subType: "vocabulary",
    },
    options: [
      { id: 8, text: "Книга", isCorrect: true },
      { id: 9, text: "Стол", isCorrect: false },
      { id: 10, text: "Вікно", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "What is the synonym of 'big'?",
    type: {
      id: 2,
      type: "reading",
    },
    subType: {
      id: 3,
      subType: "vocabulary",
    },
    options: [
      { id: 11, text: "small", isCorrect: false },
      { id: 12, text: "large", isCorrect: true },
      { id: 13, text: "tiny", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "Fill in the blank: They ___ playing football now.",
    type: {
      id: 1,
      type: "grammar",
    },
    subType: {
      id: 4,
      subType: "present continuous",
    },
    options: [
      { id: 14, text: "is", isCorrect: false },
      { id: 15, text: "are", isCorrect: true },
      { id: 16, text: "am", isCorrect: false },
    ],
  },
  {
    id: 6,
    question: "Choose the correct word: He has ___ finished his work.",
    type: {
      id: 1,
      type: "grammar",
    },
    subType: {
      id: 5,
      subType: "present perfect",
    },
    options: [
      { id: 17, text: "already", isCorrect: true },
      { id: 18, text: "yesterday", isCorrect: false },
      { id: 19, text: "tomorrow", isCorrect: false },
    ],
  },
  {
    id: 7,
    question: "Select the correct sentence:",
    type: {
      id: 3,
      type: "writing",
    },
    subType: {
      id: 6,
      subType: "sentence structure",
    },
    options: [
      { id: 20, text: "She is teacher", isCorrect: false },
      { id: 21, text: "She is a teacher", isCorrect: true },
      { id: 22, text: "She a teacher is", isCorrect: false },
    ],
  },
];
