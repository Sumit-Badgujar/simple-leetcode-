const express = require('express')
const app = express()
const port = 3000

const USERS = [
    { email: 'test@example.com', password: 'password123' },
    { email: 'test1@example.com', password: 'password123' },
    { email: 'test2@example.com', password: 'securepassword' },
    { email: 'test3@example.com', password: 'anotherpassword' },
    { email: 'test4@example.com', password: 'strongpassword' },
    { email: 'test5@example.com', password: 'verystrongpassword' },
   
  ];
  
  const QUESTIONS = [
    {
      id: 1,
      title: "Find max of array",
      description: "Given an array, return the maximum element in the array.",
      testCases: [
        { input: "[1, 2, 3, 4, 5]", output: "5" },
        { input: "[-1, 0, -2]", output: "0" },
        { input: "[10]", output: "10" }
      ]
    },
    {
      id: 2,
      title: "Reverse a string",
      description: "Given a string, return a new string with the characters in reverse order.",
      testCases: [
        { input: '"hello"', output: '"olleh"' },
        { input: '"racecar"', output: '"racecar"' },
        { input: '""', output: '""' }
      ]
    },
    {
      id: 3,
      title: "Check if a number is even",
      description: "Given a number, return true if the number is even, false otherwise.",
      testCases: [
        { input: "4", output: "true" },
        { input: "9", output: "false" },
        { input: "-2", output: "true" }
      ]
    },
    {
      id: 4,
      title: "Check if a string is a palindrome",
      description: "Given a string, return true if the string reads the same backward as forward (palindrome), false otherwise.",
      testCases: [
        { input: '"madam"', output: "true" },
        { input: '"racecar"', output: "true" },
        { input: '"hello"', output: "false" }
      ]
    },
    {
      id: 5,
      title: "Find the sum of an array",
      description: "Given an array of numbers, return the sum of all elements in the array.",
      testCases: [
        { input: "[1, 2, 3]", output: "6" },
        { input: "[0, 0, 0]", output: "0" },
        { input: "[-1, 2, -5]", output: "-4" }
      ]
    },
    {
      id: 6,
      title: "Find the factorial of a number",
      description: "Given a non-negative integer n, return the factorial of n. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.",
      testCases: [
        { input: "5", output: "120" },
        { input: "0", output: "1" },
        { input: "3", output: "6" }
      ]
    },
    {
      id: 7,
      title: "Check if a number is prime",
      description: "Given a number, return true if the number is prime (has exactly two divisors: 1 and itself), false otherwise.",
      testCases: [
        { input: "7", output: "true" },
        { input: "12", output: "false" },
        { input: "2", output: "true" }
      ]
    },
    {
      id: 8,
      title: "Find the greatest common divisor (GCD) of two numbers",
      description: "Given two non-negative integers a and b, return the greatest common divisor (GCD) of a and b.",
      testCases: [
        { input: "10, 25", output: "5" },
        { input: "12, 18", output: "6" },
        { input: "17, 3", output: "1" }
      ]
    }]  

const SUBMISSION = [

]

// This middleware parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());

app.post('/signup', (req, res)=> {
  // Add logic to decode body
  const {email, password} = req.body ; 

  // body should have email and password, check if email & pass is provided 
  if(!email || !password){
    return res.status(400).send('Email & password both are required for signup') ;
  }
  
  // Validate email format (basic validation) 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send('Invalid email format');
  }

    // Password length check
    if (password.length < 6) {
        return res.status(400).send('Password must be at least 6 characters long');
      }

  //Store email and password (as is for now) in the USERS array above (only if the user with the given email doesnt exist)
  // Check if the user already exists
  const userExist = USERS.some(user=> user.email === email) ; 
  if(userExist){
    return res.status(400).send('User already exist in db') ; 
  }

  USERS.push({email, password}) ; 

  // return back 200 status code to the client
  return res.status(200).send('User registered successfully');

//   res.send('Hello World from yoyo signup !')
    console.log('USERS array after signup:', USERS);
})

app.post('/login', (req, res) => {
    // Add logic to decode body
    const { email, password } = req.body;
  
    // Body should have email and password
    if (!email || !password) {
      return res.status(400).send('Email and password both are required for login');
    }
  
    // Check if the user with the given email exists in the USERS array
    const user = USERS.find(user => user.email === email);
    if (!user) {
      return res.status(401).send('User not found');
    }
  
    // Also ensure that the password is the same
    if (user.password !== password) {
      return res.status(401).send('Incorrect password, try again');
    }
  
    // If the password is correct, return back 200 status code to the client
    // Also send back a token (any random string will do for now)
    const token = "someRandomSecureToken"; // In a real application, use a library to generate a secure token
  
    return res.status(200).json({ message: 'Login successful', token });
});

app.put('/reset-password', (req, res)=> {
    // console.log(req.body);

    // Add logic to decode body
    const { email, newPassword } = req.body; 

    // Body should have email and new password
    if (!email || !newPassword) {
        return res.status(400).send('Email and new password are required');
    }

    // Check if the user with the given email exists in the USERS array
    const user = USERS.find(user => user.email === email);
    if (!user) {
        return res.status(404).send('User not found');
    } 
    // else {
    // Update the user's password
    user.password = newPassword; 
    return res.status(200).send('Password reset successfully'); 
    // }
});

app.get('/questions', function(req, res) {

  //return the user all the questions in the QUESTIONS array
  res.status(200).json(QUESTIONS)

//   res.send("Hello World from route 3!")
})

app.post("/questions/:questionId/submissions", function(req, res) {
    // Step 1: Extract data from the request body and params
    const { email, answer } = req.body;
    const questionId = req.params.questionId;
    // Step 2: Validate the incoming data
    // if (!email || !answer) {
    //     return res.status(400).send('Email and answer are required');
    // }
    // Optional Step 3: Check if the user exists in the USERS array
    // Optional Step 4: Validate if the questionId exists in QUESTIONS array
    // Step 5: Store the submission in the SUBMISSION array
    SUBMISSION.push({ email, questionId, answer, submittedAt: new Date() });
    // Step 6: Return a success response
    res.status(200).send('Submission received successfully!');

    console.log(SUBMISSION) ;
});

app.get("/questions/:questionId/submissions", function(req, res) {
    const questionId = req.params.questionId; // Get the question ID from the route parameters

    // Filter submissions related to the specific question
    const questionSubmissions = SUBMISSION.filter(submission => submission.questionId === questionId);

    // Check if there are submissions for this question
    if (questionSubmissions.length > 0) {
        res.status(200).json(questionSubmissions); // Send back the submissions
    } else {
        res.status(404).send('No submissions found for this question'); // Handle no submissions case
    }
});


// leaving as hard todos
// Create a route that lets an admin add a new problem
// ensure that only admins can do that.

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})