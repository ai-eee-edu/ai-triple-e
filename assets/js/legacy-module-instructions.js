/* Teaching modules: edit labels and promptInstructions here to match the team's approved toolkit. */
window.AI_TRIPLE_E_MODULES = [
  {
    id:'lesson-plan',number:'01',title:'Lesson planning',bn:'পাঠ পরিকল্পনা',short:'Prepare an achievable, textbook-aligned lesson for your actual classroom.',
    goal:'A usable lesson sequence with realistic timings and check-for-understanding points.',
    promptInstructions:[
      'Create a practical, minute-by-minute lesson plan for the stated duration.',
      'State the learning outcomes exactly as provided. If they are unclear, flag the uncertainty instead of inventing an official curriculum outcome.',
      'Include a short introduction, teacher modelling, student practice, quick formative checks and a closing activity.',
      'Suggest activities feasible with the specified materials, class size and constraints.',
      'Use simple language that fits the age group; identify anything the teacher should verify in the textbook.'
    ],
    tutorial:['Choose the class and subject, then type the textbook lesson name.','Write the intended learning outcomes; use the official textbook when possible.','Set lesson duration, class size and resource constraints.','Generate and copy the prompt into an AI assistant.','Check the timing, content accuracy and feasibility before use.']
  },
  {
    id:'teaching-methods',number:'02',title:'Teaching methods',bn:'শিখন-শেখানো পদ্ধতি',short:'Explore engaging, low-resource ways to teach a specific concept.',
    goal:'Two or three actionable teaching strategies suitable for the stated learning goal.',
    promptInstructions:[
      'Recommend three age-appropriate teaching approaches for the stated lesson and learning outcomes.',
      'For each approach include teacher instructions, student participation, materials, estimated minutes and a quick comprehension check.',
      'Prefer methods that work with the available resources and realistic class size.',
      'Explain the trade-offs between the approaches and recommend the most practical one.',
      'Do not assume phones, projectors or internet access are available unless stated.'
    ],
    tutorial:['Identify what learners should be able to do.','Describe a practical teaching challenge, such as limited materials or time.','Generate methods matched to the classroom.','Choose one approach; adapt activities to local language and reality.','Try it, observe participation and revise your plan.']
  },
  {
    id:'materials',number:'03',title:'Teaching materials',bn:'শিক্ষণ উপকরণ',short:'Draft printable or board-based activities without requiring new equipment.',
    goal:'A ready-to-adapt activity sheet, example set or board plan.',
    promptInstructions:[
      'Create one low-cost teaching-learning material connected to the stated learning outcomes.',
      'Use only the stated available resources. If printing is unavailable, include a chalkboard-only alternative.',
      'Provide complete teacher instructions and the exact learner-facing text or questions.',
      'Keep language, difficulty and length suitable for the selected class and time.',
      'Check that instructions and any answers are internally consistent; mark facts needing external verification.'
    ],
    tutorial:['Select the lesson and type the specific teaching material you need under additional instructions.','List classroom materials available.','Generate draft student-facing content.','Proofread spellings, concepts and answers; adjust text to the textbook.','Print or prepare it on the board as appropriate.']
  },
  {
    id:'reading',number:'04',title:'Reading activities',bn:'পঠন ও অনুধাবন কার্যক্রম',short:'Build short reading-comprehension activities and guided questions.',
    goal:'Age-appropriate reading activities supporting meaning-making and understanding.',
    promptInstructions:[
      'Design a brief reading activity to help learners understand the provided text or lesson topic.',
      'Do not claim to quote the textbook unless the actual passage has been supplied in the prompt.',
      'Provide before-reading, during-reading and after-reading steps suited to the time available.',
      'Include literal and simple inferential questions with suggested responses; make them appropriate for the class.',
      'Offer a teacher-supported option for pupils who need more reading practice, without labelling individual children.'
    ],
    tutorial:['Use an approved short passage or clearly state the lesson topic.','Choose whether the focus is decoding, fluency or comprehension in your learning outcomes.','Generate read-aloud steps and questions.','Verify the questions against the actual text.','Use oral responses or board work to check understanding.']
  },
  {
    id:'learner-support',number:'05',title:'Learner support',bn:'শিক্ষার্থী সহায়তা',short:'Adapt an activity for learners with different starting points.',
    goal:'Manageable support options without separate technology for each learner.',
    promptInstructions:[
      'Keep the same core learning objective for the class while proposing simple tiers of support.',
      'Offer one supported version, one standard version and one extension activity where useful.',
      'Keep instructions practical for one teacher managing the stated number of students.',
      'Avoid diagnosing, labelling or making assumptions about individual students.',
      'Describe how the teacher can observe whether the support is working.'
    ],
    tutorial:['Identify one common barrier to learning without naming a child.','State the shared learning objective.','Generate supported, standard and extension tasks.','Choose only options manageable within the lesson.','Observe and adjust support, maintaining student dignity.']
  },
  {
    id:'assessment',number:'06',title:'Formative assessment',bn:'গঠনমূলক মূল্যায়ন',short:'Generate quick checks, sample answers and actionable feedback.',
    goal:'Simple in-class evidence of learning, not a high-stakes grading system.',
    promptInstructions:[
      'Produce three to five short formative checks aligned to the stated learning outcomes.',
      'Include a mix of oral, written or demonstration tasks feasible with the stated resources.',
      'Provide model responses or marking guidance and common misconceptions to watch for.',
      'Suggest brief feedback phrases and a follow-up action for learners who have not understood.',
      'Do not recommend collecting names, photos or identifiable student records in AI tools.'
    ],
    tutorial:['Write the learning outcome you want to check.','Choose your assessment constraints: time, class size and available materials.','Generate short questions and suggested answers.','Personally verify answer keys and age appropriateness.','Use results to adjust the next teaching step.']
  }
];
