/* Toolkit-aligned candidate. Source: Toolkit.pdf, version 0.6, pp. 6-15. */
window.TRIPLE_E = {
  "modules": [
    {
      "id": "plan",
      "no": "01",
      "icon": "calendar",
      "bn": "PLAN · পাঠ পরিকল্পনা",
      "en": "PLAN · Lesson planning",
      "bnDesc": "শুরু, অনুশীলন, শিক্ষকের পর্যবেক্ষণ ও শেষ মূল্যায়ন মিলিয়ে বাস্তবসম্মত পাঠ তৈরি করুন।",
      "enDesc": "Plan an introduction, student practice, observation and final check.",
      "role": "তুমি বাংলাদেশের প্রাথমিক বিদ্যালয়ের একজন পাঠ পরিকল্পনা সহায়ক।",
      "goal": "শিখনফল, শিক্ষার্থীর অনুশীলন, শিক্ষকের পর্যবেক্ষণ ও শেষ মূল্যায়নকে একটি সংক্ষিপ্ত পাঠে যুক্ত করা।",
      "tasks": [
        [
          "standard",
          "টুলকিটের মূল পাঠ পরিকল্পনা",
          "Toolkit lesson plan"
        ],
        [
          "reading-plan",
          "পড়ার অনুশীলনসহ পাঠ পরিকল্পনা",
          "Lesson plan with reading practice"
        ],
        [
          "micro",
          "সংক্ষিপ্ত মাইক্রো-প্ল্যান",
          "Concise micro-plan"
        ]
      ],
      "fields": [
        {
          "id": "difficulty",
          "label": "শিক্ষার্থীদের সাধারণ শিখন-অসুবিধা (ঐচ্ছিক)",
          "en": "General learning difficulties (optional)",
          "type": "textarea",
          "placeholder": "যেমন: অনুচ্ছেদের মূলভাব বুঝতে সময় লাগে; নাম লিখবেন না।",
          "enPlaceholder": "General learning difficulties (optional)"
        },
        {
          "id": "teacher-focus",
          "label": "শিক্ষক বিশেষভাবে কী পর্যবেক্ষণ করবেন?",
          "en": "What should the teacher observe?",
          "type": "select",
          "options": [
            [
              "participation",
              "শিক্ষার্থীদের অংশগ্রহণ",
              "Student participation"
            ],
            [
              "reading",
              "পড়া ও অনুধাবন",
              "Reading and comprehension"
            ],
            [
              "understanding",
              "ধারণা বোঝা",
              "Understanding"
            ],
            [
              "responses",
              "উত্তরের ব্যাখ্যা",
              "Explanation of answers"
            ]
          ]
        }
      ],
      "tutorialBn": [
        "পাঠের নাম ও বই দেখে শিখনফল লিখুন।",
        "শিক্ষার্থী সংখ্যা, সময় ও উপকরণ দিন।",
        "শিক্ষার্থীদের সাধারণ অসুবিধা লিখতে পারেন, কিন্তু পরিচয় নয়।",
        "শুরু, অনুশীলন, পর্যবেক্ষণ ও শেষ মূল্যায়নের খসড়া প্রম্পট কপি করুন।",
        "AI-এর উত্তর পাঠ্যবই ও ARR-এর ছয়টি মানদণ্ডে যাচাই করুন।"
      ],
      "tutorialEn": [
        "Enter the lesson and the teacher-checked learning outcome.",
        "Add class size, time and materials.",
        "Describe broad learning needs without student identities.",
        "Copy a draft with introduction, practice, observation and closing check.",
        "Verify the AI output using the textbook and six ARR criteria."
      ]
    },
    {
      "id": "design",
      "no": "02",
      "icon": "files",
      "bn": "DESIGN · শিখন উপকরণ",
      "en": "DESIGN · Learning materials",
      "bnDesc": "কম খরচে পুনর্ব্যবহারযোগ্য উপকরণ, সহজ ও চ্যালেঞ্জিং অনুশীলন তৈরি করুন।",
      "enDesc": "Create reusable low-cost materials and two practice levels.",
      "role": "তুমি স্বল্প ব্যয়ের প্রাথমিক শিক্ষণ উপকরণ নকশায় অভিজ্ঞ সহায়ক।",
      "goal": "একটি পুনর্ব্যবহারযোগ্য উপকরণ, একই উদ্দেশ্যে সহজ ও চ্যালেঞ্জিং অনুশীলন, পাঁচটি নমুনা, উত্তর ও সম্ভাব্য সমস্যা।",
      "tasks": [
        [
          "reusable",
          "পুনর্ব্যবহারযোগ্য উপকরণ",
          "Reusable learning aid"
        ],
        [
          "word-cards",
          "শব্দকার্ড",
          "Word cards"
        ],
        [
          "event-cards",
          "ঘটনাক্রম কার্ড",
          "Sequence cards"
        ],
        [
          "board",
          "বোর্ডভিত্তিক অনুশীলন",
          "Board activity"
        ],
        [
          "two-level",
          "দুই স্তরের অনুশীলন",
          "Two-level practice"
        ]
      ],
      "fields": [
        {
          "id": "gap",
          "label": "যাদের বেশি সহায়তা লাগে, তাদের সাধারণ শিখনঘাটতি",
          "en": "General learning gap among pupils needing support",
          "type": "textarea",
          "placeholder": "যেমন: শব্দ পড়তে সময় লাগে; কোনো শিশুর নাম নয়।",
          "enPlaceholder": "General learning gap among pupils needing support"
        },
        {
          "id": "advanced",
          "label": "যারা তুলনামূলক অগ্রসর, তারা কী পারে?",
          "en": "What can more advanced learners do?",
          "type": "textarea",
          "placeholder": "যেমন: ছোট বাক্য পড়ে অর্থ বুঝতে পারে।",
          "enPlaceholder": "What can more advanced learners do?"
        },
        {
          "id": "sample-content",
          "label": "উপকরণে ব্যবহার করতে চান এমন শব্দ/উদাহরণ (ঐচ্ছিক)",
          "en": "Words/examples to include (optional)",
          "type": "textarea",
          "placeholder": "যেমন: মাটি, পানি, পাতা, গাছ",
          "enPlaceholder": "Words/examples to include (optional)"
        }
      ],
      "tutorialBn": [
        "পাঠ ও শিখনফল নির্ধারণ করুন।",
        "কী উপকরণ আছে এবং কোন শিক্ষার্থীদের সাধারণত কী সহায়তা লাগে লিখুন।",
        "পুনর্ব্যবহারযোগ্য উপকরণের ধরন বেছে নিন।",
        "AI-এর খসড়ায় ৫টি নমুনা, সহজ ও চ্যালেঞ্জিং কাজ এবং উত্তর যাচাই করুন।",
        "উপকরণটি বড়, দৃশ্যমান, সাশ্রয়ী ও বাস্তবে ব্যবহারযোগ্য কি না ARR দিয়ে দেখুন।"
      ],
      "tutorialEn": [
        "Enter the lesson and intended outcome.",
        "Describe available resources and broad learning needs.",
        "Choose the reusable material type.",
        "Check five examples, two practice levels, answers and feasibility.",
        "Confirm materials are affordable, visible and practical before use."
      ]
    },
    {
      "id": "facilitate",
      "no": "03",
      "icon": "users",
      "bn": "FACILITATE · শিখন কার্যক্রম",
      "en": "FACILITATE · Classroom activities",
      "bnDesc": "জোড়া বা ছোট দলে ১০–১৫ মিনিটের সক্রিয় অনুশীলন ও পর্যবেক্ষণ।",
      "enDesc": "Facilitate a 10–15 minute pair or group activity with a short learning check.",
      "role": "তুমি বড় ও সীমিত সম্পদের প্রাথমিক শ্রেণিতে শিক্ষার্থী-কেন্দ্রিক কার্যক্রম পরিকল্পনায় অভিজ্ঞ সহায়ক।",
      "goal": "প্রত্যেকে পড়বে, বলবে বা লিখবে; দল গঠন, শিক্ষকের পর্যবেক্ষণ, শব্দ বেশি হলে বিকল্প এবং শেষ ২ মিনিটের যাচাই থাকবে।",
      "tasks": [
        [
          "pair-reading",
          "জোড়ায় পড়ার অনুশীলন",
          "Pair reading"
        ],
        [
          "group-discussion",
          "ছোট দলে আলোচনা",
          "Small-group discussion"
        ],
        [
          "word-search",
          "শব্দ খোঁজার কার্যক্রম",
          "Word search"
        ],
        [
          "peer-explain",
          "সহপাঠীকে বোঝানো",
          "Peer explanation"
        ],
        [
          "mixed",
          "অন্যান্য অংশগ্রহণমূলক কাজ",
          "Other participatory activity"
        ]
      ],
      "fields": [
        {
          "id": "reading-levels",
          "label": "শিক্ষার্থীদের সাধারণ পড়ার/শিখনের স্তর",
          "en": "General reading/learning levels in the class",
          "type": "textarea",
          "placeholder": "যেমন: অনেকে ছোট বাক্য পড়তে পারে, কিছু শিক্ষার্থীর সহায়তা প্রয়োজন।",
          "enPlaceholder": "General reading/learning levels in the class"
        },
        {
          "id": "activity-duration",
          "label": "এই কার্যক্রমের সময়",
          "en": "Activity duration",
          "type": "select",
          "options": [
            [
              "15",
              "১৫ মিনিট",
              "15 minutes"
            ],
            [
              "10",
              "১০ মিনিট",
              "10 minutes"
            ],
            [
              "12",
              "১২ মিনিট",
              "12 minutes"
            ]
          ]
        },
        {
          "id": "noise",
          "label": "শব্দ বেড়ে গেলে ব্যবস্থা",
          "en": "Noise-management alternative",
          "type": "select",
          "options": [
            [
              "seated",
              "নিজ নিজ জায়গায় জোড়া কাজ",
              "In-seat pair work"
            ],
            [
              "quiet",
              "কম শব্দের লিখিত/ইশারা কাজ",
              "Quiet written/gesture work"
            ],
            [
              "flexible",
              "পরিস্থিতি অনুযায়ী",
              "As appropriate"
            ]
          ]
        },
        {
          "id": "reading-source",
          "label": "পাঠের নির্বাচিত অংশ (ঐচ্ছিক)",
          "en": "Teacher-provided reading extract (optional)",
          "type": "textarea",
          "placeholder": "শুধু পাঠ্যবইয়ের নির্বাচিত অংশ দিন; তথ্য না দিলে AI কল্পিত উদ্ধৃতি করবে না।",
          "enPlaceholder": "Teacher-provided reading extract (optional)",
          "whenTask": [
            "pair-reading"
          ]
        }
      ],
      "tutorialBn": [
        "শিখনফল ও শিক্ষার্থীদের সাধারণ পড়ার স্তর লিখুন।",
        "জোড়া বা ছোট দলে কাজের ধরন বেছে নিন।",
        "১০–১৫ মিনিটের মধ্যে শিক্ষার্থীদের কাজ, শিক্ষকের পর্যবেক্ষণ এবং শেষের ২ মিনিটের যাচাই রাখুন।",
        "দল গঠন ও শব্দ বেশি হলে বিকল্প যাচাই করুন।",
        "কাউকে অপমান বা বাদ না দিয়ে কার্যক্রম পরিচালনা করুন।"
      ],
      "tutorialEn": [
        "Enter the outcome and broad reading levels.",
        "Choose a pair or small-group activity.",
        "Ensure 10–15 minutes include teacher observation and a final two-minute check.",
        "Check grouping and alternatives for noisy classrooms.",
        "Include every child without stigma or exclusion."
      ]
    },
    {
      "id": "assess",
      "no": "04",
      "icon": "check",
      "bn": "ASSESS · গঠনমূলক মূল্যায়ন",
      "en": "ASSESS · Formative assessment",
      "bnDesc": "তিনটি প্রশ্ন, যাচাইযোগ্য উত্তর, ০–২ রুব্রিক ও পরের দিনের ৫ মিনিটের সহায়তা।",
      "enDesc": "Three questions, answers, a 0–2 rubric and next-day support.",
      "role": "তুমি বাংলাদেশের প্রাথমিক শ্রেণির গঠনমূলক মূল্যায়ন নকশায় সহায়ক।",
      "goal": "একটি সহজ, একটি মাঝারি ও একটি ব্যাখ্যামূলক প্রশ্ন, উত্তর, ০–২ পর্যবেক্ষণ রুব্রিক এবং পরের দিনের ৫ মিনিটের সহায়তা।",
      "tasks": [
        [
          "standard",
          "টুলকিটের ৩ প্রশ্ন ও ০–২ রুব্রিক",
          "Toolkit three questions and rubric"
        ],
        [
          "reading",
          "পড়া যাচাই",
          "Check independent reading"
        ],
        [
          "comprehension",
          "গল্পের অনুধাবন",
          "Check story comprehension"
        ],
        [
          "sequence",
          "ঘটনাক্রম যাচাই",
          "Check sequencing"
        ]
      ],
      "fields": [
        {
          "id": "evidence",
          "label": "কীভাবে শিক্ষার্থীর শিখন বুঝবেন?",
          "en": "What evidence will show learning?",
          "type": "select",
          "options": [
            [
              "oral",
              "মৌখিক উত্তর ও ব্যাখ্যা",
              "Oral response and explanation"
            ],
            [
              "written",
              "ছোট লিখিত উত্তর",
              "Short written response"
            ],
            [
              "observation",
              "শিক্ষকের পর্যবেক্ষণ",
              "Teacher observation"
            ],
            [
              "action",
              "শিক্ষার্থীর কাজ সম্পাদন",
              "Performance on task"
            ]
          ]
        },
        {
          "id": "misconception",
          "label": "সম্ভাব্য ভুল ধারণা (ঐচ্ছিক)",
          "en": "Common misunderstanding (optional)",
          "type": "textarea",
          "placeholder": "যেমন: শোনা উত্তরকে নিজে পড়তে পারার প্রমাণ মনে করে।",
          "enPlaceholder": "Common misunderstanding (optional)"
        }
      ],
      "tutorialBn": [
        "শিখনফল ও পাঠের বিষয় লিখুন।",
        "মূল্যায়নের সময়, উপকরণ ও শিখনের প্রমাণ নির্বাচন করুন।",
        "সহজ, মাঝারি ও ব্যাখ্যামূলক ৩টি প্রশ্ন; যাচাইযোগ্য উত্তর ও ০–২ রুব্রিক চাইুন।",
        "পরের দিনের ৫ মিনিটের সহায়তা যেন উত্তর অনুযায়ী বদলায়, তা দেখুন।",
        "উত্তর ও রুব্রিক বইয়ের সঙ্গে নিজে যাচাই করুন; শিশুদের ব্যক্তিগত তথ্য দেবেন না।"
      ],
      "tutorialEn": [
        "Enter the topic and learning outcome.",
        "Select time, materials and the evidence of learning.",
        "Request three levels of questions, checked answers, a 0–2 rubric and five-minute follow-up.",
        "Use what students actually did to plan next-day support.",
        "Verify answer keys and rubrics against the textbook."
      ]
    }
  ],
  "subjects": [
    [
      "Bangla",
      "বাংলা",
      "Bangla"
    ],
    [
      "English",
      "ইংরেজি",
      "English"
    ],
    [
      "Mathematics",
      "গণিত",
      "Mathematics"
    ],
    [
      "Primary Science",
      "প্রাথমিক বিজ্ঞান",
      "Primary Science"
    ],
    [
      "Bangladesh and Global Studies",
      "বাংলাদেশ ও বিশ্বপরিচয়",
      "Bangladesh and Global Studies"
    ],
    [
      "Other (teacher specified)",
      "অন্যান্য",
      "Other"
    ]
  ],
  "resources": [
    [
      "textbook",
      "পাঠ্যবই",
      "Textbook"
    ],
    [
      "board",
      "বোর্ড ও চক/মার্কার",
      "Board and chalk/marker"
    ],
    [
      "paper",
      "পুরোনো বা পুনর্ব্যবহারযোগ্য কাগজ",
      "Reused paper"
    ],
    [
      "local",
      "স্থানীয় সহজলভ্য বস্তু",
      "Locally available objects"
    ],
    [
      "printer",
      "প্রিন্টার",
      "Printer"
    ],
    [
      "projector",
      "প্রজেক্টর",
      "Projector"
    ]
  ],
  "version": "toolkit-v0.6-bangla-site-v2.1"
};
