require('dotenv').config();
const Test = require('./models/Test');
const mongoose = require('mongoose');

async function seed() {
  try {
    await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to the database');

    const testDetails = {
      test_id: 'test1',
      name: 'Sample Test',
      description: 'This is a sample test',
      questions: [
        {
          question_id: 'question1',
          text: 'What is the capital of France?',
          choices: [
            {
              choice_id: 'choice1',
              text: 'Paris',
              isCorrect: true,
            },
            {
              choice_id: 'choice2',
              text: 'London',
              isCorrect: false,
            },
            {
              choice_id: 'choice3',
              text: 'Rome',
              isCorrect: false,
            },
            {
              choice_id: 'choice4',
              text: 'Berlin',
              isCorrect: false,
            },
          ],
        },
        {
          question_id: 'question2',
          text: 'Which of the following are mammals?',
          choices: [
            {
              choice_id: 'choice5',
              text: 'Lion',
              isCorrect: true,
            },
            {
              choice_id: 'choice6',
              text: 'Eagle',
              isCorrect: false,
            },
            {
              choice_id: 'choice7',
              text: 'Dolphin',
              isCorrect: true,
            },
            {
              choice_id: 'choice8',
              text: 'Shark',
              isCorrect: false,
            },
          ],
        },
        {
          question_id: 'question3',
          text: 'What is the largest planet in our solar system?',
          choices: [
            {
              choice_id: 'choice9',
              text: 'Mars',
              isCorrect: false,
            },
            {
              choice_id: 'choice10',
              text: 'Saturn',
              isCorrect: false,
            },
            {
              choice_id: 'choice11',
              text: 'Jupiter',
              isCorrect: true,
            },
            {
              choice_id: 'choice12',
              text: 'Neptune',
              isCorrect: false,
            },
          ],
        },
        {
          question_id: 'question4',
          text: 'Who painted the Mona Lisa?',
          choices: [
            {
              choice_id: 'choice13',
              text: 'Pablo Picasso',
              isCorrect: false,
            },
            {
              choice_id: 'choice14',
              text: 'Leonardo da Vinci',
              isCorrect: true,
            },
            {
              choice_id: 'choice15',
              text: 'Vincent van Gogh',
              isCorrect: false,
            },
            {
              choice_id: 'choice16',
              text: 'Michelangelo',
              isCorrect: false,
            },
          ],
        },
        {
          question_id: 'question5',
          text: 'What is the chemical symbol for gold?',
          choices: [
            {
              choice_id: 'choice17',
              text: 'Ag',
              isCorrect: false,
            },
            {
              choice_id: 'choice18',
              text: 'Au',
              isCorrect: true,
            },
            {
              choice_id: 'choice19',
              text: 'Hg',
              isCorrect: false,
            },
            {
              choice_id: 'choice20',
              text: 'Cu',
              isCorrect: false,
            },
          ],
        },
        {
          question_id: 'question6',
          text: 'What is the highest mountain in the world?',
          choices: [
            {
              choice_id: 'choice21',
              text: 'Mount Kilimanjaro',
              isCorrect: false,
            },
            {
              choice_id: 'choice22',
              text: 'Mount Everest',
              isCorrect: true,
            },
            {
              choice_id: 'choice23',
              text: 'Mount Fuji',
              isCorrect: false,
            },
            {
              choice_id: 'choice24',
              text: 'Mount McKinley',
              isCorrect: false,
            },
          ],
        },
        {
          question_id: 'question7',
          text: 'Which country is known as the "Land of the Rising Sun"?',
          choices: [
            {
              choice_id: 'choice25',
              text: 'Japan',
              isCorrect: true,
            },
            {
              choice_id: 'choice26',
              text: 'China',
              isCorrect: false,
            },
            {
              choice_id: 'choice27',
              text: 'South Korea',
              isCorrect: false,
            },
            {
              choice_id: 'choice28',
              text: 'Thailand',
              isCorrect: false,
            },
          ],
        },
        {
          question_id: 'question8',
          text: 'What is the largest organ in the human body?',
          choices: [
            {
              choice_id: 'choice29',
              text: 'Heart',
              isCorrect: false,
            },
            {
              choice_id: 'choice30',
              text: 'Liver',
              isCorrect: true,
            },
            {
              choice_id: 'choice31',
              text: 'Brain',
              isCorrect: false,
            },
            {
              choice_id: 'choice32',
              text: 'Lungs',
              isCorrect: false,
            },
          ],
        },
        {
          question_id: 'question9',
          text: 'Who wrote the play "Romeo and Juliet"?',
          choices: [
            {
              choice_id: 'choice33',
              text: 'William Shakespeare',
              isCorrect: true,
            },
            {
              choice_id: 'choice34',
              text: 'George Bernard Shaw',
              isCorrect: false,
            },
            {
              choice_id: 'choice35',
              text: 'Arthur Miller',
              isCorrect: false,
            },
            {
              choice_id: 'choice36',
              text: 'Oscar Wilde',
              isCorrect: false,
            },
          ],
        },
        {
          question_id: 'question10',
          text: 'What is the currency of Australia?',
          choices: [
            {
              choice_id: 'choice37',
              text: 'Euro',
              isCorrect: false,
            },
            {
              choice_id: 'choice38',
              text: 'Pound',
              isCorrect: false,
            },
            {
              choice_id: 'choice39',
              text: 'Dollar',
              isCorrect: true,
            },
            {
              choice_id: 'choice40',
              text: 'Yen',
              isCorrect: false,
            },
          ],
        },
      ],
    };

    await Test.create(testDetails);
    console.log('Test seeded successfully');
  } catch (error) {
    console.error('Error seeding test:', error);
  } finally {
    mongoose.connection.close();
    console.log('Disconnected from the database');
  }
}

seed();