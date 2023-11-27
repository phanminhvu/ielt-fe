class IeltsResult {
  getIeltListeningsResult() {
    const data = [
      { brandScore: 5, name: "test", sessionDate: "22/07/27" },
      { brandScore: 5, name: "test", sessionDate: "22/07/27" },
      { brandScore: 5, name: "test", sessionDate: "22/07/27" },
      { brandScore: 5, name: "test", sessionDate: "22/07/27" },
    ];

    return Promise.resolve({ data });
  }
  getIeltReadingResult() {
    const data = {
      part1: [
        {
          id: 1,
          question: "When you rang, I .......... my bike.",
          choosea: "cleaned",
          chooseb: "was cleaning",
          choosec: "",
          choosed: "clean",
          typeAnswer: "Multiple Choice",
        },
        {
          id: 2,
          question: "At my last basketball club, we .......... every Saturday for three hours.",
          choosea: "were training",
          chooseb: "training",
          choosec: "train",
          choosed: "used to train",
          answer: "",
          typeAnswer: "",
        },
        {
          id: 3,
          question: "When you rang, I .......... my bike.",
          choosea: "cleaned",
          chooseb: "was cleaning",
          choosec: "",
          choosed: "clean",
          typeAnswer: "",
        },
      ],
      part2: [
        {
          id: 14,
          question: "In squash, you .......... a ball against a wall.",
          choosea: "hit",
          chooseb: "hits",
          choosec: "are hitting",
          choosed: "will hit",
          typeAnswer: "",
        },
        {
          id: 15,
          question: "I ..........  a newspaper at least once a week.",
          choosea: "reads",
          chooseb: "am reading",
          choosec: "will read",
          choosed: "read",
          typeAnswer: "",
        },
        {
          id: 16,
          question: ".......... the piano for two hours every day?",
          choosea: "Will you practise",
          chooseb: "Do you practise",
          choosec: "Are you practise",
          choosed: "Are you practising",
          typeAnswer: "",
        },
      ],
      part3: [
        {
          id: 27,
          question: "This job is much ………. than the last one!",
          choosea: "Ahard",
          chooseb: "hardest",
          choosec: "Charder",
          choosed: "Dmore hard",
          typeAnswer: "",
        },
        {
          id: 28,
          question: "Charlotte earns ………. much money that she can't spend it all!",
          choosea: "such",
          chooseb: "enough",
          choosec: "too",
          choosed: "so",
          typeAnswer: "",
        },
        {
          id: 29,
          question: "We have to work much longer each day………. in my old job.",
          choosea: "from",
          chooseb: "that",
          choosec: "with",
          choosed: "than",
          typeAnswer: "",
        },
      ],
    };

    return Promise.resolve({ data });
  }
}

export const ieltsReadingDataDummy = {
  part1: {
    reading: "abc",
    questions: {
      // typeAnswer: "multiple",
      group: [
        {
          id: 1,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
          index: 0,
        },
        {
          id: 2,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 3,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
      ],
      group2: [
        {
          id: 4,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 5,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 6,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
      ],
    },

    contentReading: {
      title: "Snow White and the Seven Dwarfs",
      desc: "asdfgkhfksdahfkhakhk",
    },
  },
  part2: {
    reading: "abc",
    questions: {
      // typeAnswer: "multiple",
      group3: [
        {
          id: 7,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 8,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 9,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
      ],
      gruop4: [
        {
          id: 10,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 11,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 12,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
      ],
    },
    contentReading: {
      title: "The Frog Prince: The Princess and the Frog",
      desc: "asdfgkhfksdahfkhakhk",
    },
  },
  part3: {
    reading: "abc",
    questions: {
      // typeAnswer: "multiple",
      group5: [
        {
          id: 13,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 14,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 15,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
      ],
      group6: [
        {
          id: 16,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 17,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 18,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 19,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
      ],
    },
    contentReading: {
      title: "Goldilocks and the Three Bears",
      desc: "asdfgkhfksdahfkhakhk",
    },
  },
};
export const ieltsReadingDataDummy2 = {
  part1: {
    reading: "abc",
    questions: {
      // typeAnswer: "multiple",
      group: [
        {
          id: 1,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
          index: 0,
        },
        {
          id: 2,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 3,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
      ],
      group2: [
        {
          id: 4,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 5,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 6,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
      ],
    },

    contentReading: {
      title: "Snow White and the Seven Dwarfs",
      desc: "asdfgkhfksdahfkhakhk",
    },
  },
  part2: {
    reading: "abc",
    questions: {
      // typeAnswer: "multiple",
      group3: [
        {
          id: 7,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 8,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 9,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
      ],
      gruop4: [
        {
          id: 10,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 11,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 12,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
      ],
    },
    contentReading: {
      title: "The Frog Prince: The Princess and the Frog",
      desc: "asdfgkhfksdahfkhakhk",
    },
  },
  part3: {
    reading: "abc",
    questions: {
      // typeAnswer: "multiple",
      group5: [
        {
          id: 13,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 14,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 15,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
      ],
      group6: [
        {
          id: 16,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 17,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 18,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
        {
          id: 19,
          question: "When you rang, I .......... my bike.",
          answers: {
            a: "cleaned",
            b: "was cleaning",
            c: "used to clean",
            d: "clean",
          },
        },
      ],
    },
    contentReading: {
      title: "Goldilocks and the Three Bears",
      desc: "asdfgkhfksdahfkhakhk",
    },
  },
};

export const dataDummy = {
  part1: [
    {
      id: 1,
      question: "When you rang, I .......... my bike.",
      answers: {
        a: "cleaned",
        b: "was cleaning",
        c: "used to clean",
        d: "clean",
      },
      typeAnswer: "multiple",
      index: 0,
    },
    {
      id: 2,
      question: "At my last basketball club, we .......... every Saturday for three hours.",
      answers: {
        a: "were training",
        b: "training",
        c: "train",
        d: "used to train",
      },
      typeAnswer: "multiple",
    },
    {
      id: 3,
      question: "Leon never .......... about it, but he was once a world champion skier.",
      answers: {
        a: "talks",
        b: "is talking",
        c: "was talking",
        d: "talk",
      },
      typeAnswer: "multiple",
    },
  ],
  part2: [
    {
      id: 4,
      question: "I .......... golf, but now I really like it.",
      answers: {
        a: "don't use to",
        b: "don't used to",
        c: "didn't used to",
        d: "didn't use to",
      },
      typeAnswer: "multiple",
    },
    {
      id: 5,
      question: ".......... here since 2005? ",
      answers: {
        a: "Have you lived",
        b: "Did you live",
        c: "Do you live",
        d: "Have you live",
      },
      typeAnswer: "multiple",
    },
    {
      id: 6,
      question: "Carol and I .......... to the cinema three nights ago.",
      answers: {
        a: "have been",
        b: "went",
        c: "goes",
        d: "go",
      },
      typeAnswer: "multiple",
    },
  ],
  part3: [
    {
      id: 7,
      question: "Gordon? I think he .......... a letter at the moment.",
      answers: {
        a: "is writing",
        b: "writes",
        c: "write",
        d: "wrote",
      },
      typeAnswer: "multiple",
    },
    {
      id: 8,
      question: "Josh .......... my bike! It's so annoying.",
      answers: {
        a: "is always use",
        b: "is always using",
        c: "always use",
        d: "always uses",
      },
      typeAnswer: "multiple",
    },
    {
      id: 9,
      question: " .......... you .......... a shower when the earthquake happened?",
      answers: {
        a: "Are you having",
        b: "Was you having",
        c: "Were you having",
        d: "Did you have",
      },
      typeAnswer: "multiple",
    },
    {
      id: 10,
      question: "Penny .......... to catch the bus when she slipped and fell.",
      answers: {
        a: "are running",
        b: "is running",
        c: "was running",
        d: "were running",
      },
      typeAnswer: "multiple",
    },
  ],
};
export const ieltsApi = new IeltsResult();
