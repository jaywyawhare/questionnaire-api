const request = require('supertest');
const app = require('../index');

describe('Questionnaire API', () => {
  // Test the welcome endpoint
  describe('GET /api/welcome', () => {
    it('should return a success response with message', async () => {
      const response = await request(app).get('/api/welcome');
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('API successfully called');
    });
  });

  // Test the signup endpoint
  describe('POST /api/signup', () => {
    it('should sign up a user successfully', async () => {
      const response = await request(app)
        .post('/api/signup')
        .send({
          name: 'Gaurav Kumar Verma',
          email: '1905530@kiit.ac.in',
          password: 'example@123',
          phone_number: '+917735709660',
        });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Signed up successfully');
    }, 15000);
  });

  // Test the login endpoint
  describe('POST /api/login', () => {
    it('should log in a user successfully', async () => {
      const email = '1905530@kiit.ac.in';
      const password = 'example@123';
  
      const response = await request(app)
        .post('/api/login')
        .query({ email, password });
  
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBeDefined();
      expect(typeof response.body.message).toBe('string');
    }, 15000);
  });
  


// Test the submit test endpoint
    describe('POST /submit-test', () => {
    it('should submit a test and return the score', async () => {
        const response = await request(app)
        .post('/submit-test')
        .send({
            userId: '1',
            testId: '1',
            answers: [
            {
                questionId: 'question1',
                selectedOptions: ['choice1'],
            },
            ],
        });

        expect(response.status).toBe(200);
        expect(response.body.userId).toBe('1');
        expect(response.body.testId).toBe('1');
        expect(response.body.score).toBeDefined();
    });
    });
});