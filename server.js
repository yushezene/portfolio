/*// Import express
const express = require('express');
const app = express();
const PORT = 3000;

// Home Route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Zene\'s Node.js App!</h1><p>Use /about or /contact</p>');
});

// About Route
app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1><p>This app is built by Zene as part of the web team.</p>');
});

// Contact Route
app.get('/contact', (req, res) => {
  res.send('<h1>Contact</h1><p>Email: zeneansari@gmail.com</p>');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

*/

// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

// Log visitor love button click
app.post('/api/visitor', (req, res) => {
  console.log('Visitor liked Zene’s site!');
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// json for aboout page 
app.get('/api/about-data', (req, res) => {
  res.json({
    skills: [
      { name: "HTML", color: "blue" },
      { name: "CSS", color: "blue" },
      { name: "Tailwind CSS", color: "blue" },
      { name: "JavaScript", color: "blue" },
      { name: "PHP", color: "blue" },
      { name: "Node.js", color: "blue" },
      { name: "React", color: "blue" },
      { name: "Firebase", color: "blue" },
      { name: "Python", color: "blue" },
      { name: "C++ , C , C#", color: "blue" },
      { name: "Java", color: "blue" },
      { name: "TypeScript", color: "blue" },
      { name: "Canva", color: "blue" },
      { name: "Git & GitHub", color: "blue" },
      { name: "Content Writing", color: "blue" },
      { name: "Design Thinking", color: "blue" },
      { name: "SQL", color: "blue" },
      { name: "Data Science", color: "blue" },
      { name: "Computer Networks", color: "blue" },
      { name: "MVC", color: "blue" },
      { name: "ASP .Net", color: "blue" },

    ],
    projects: [
      {
        title: "ReConnect",
        description: "A full-stack Firebase-powered app to collect anonymous feedback from rehabilitation center patients.",
        image: "assets/Project1.png"
      },
      {
        title: "SocietySync",
        description: "A community issue reporting portal for managing housing society complaints and maintenance.Allows Engagement with Points and Chatbox System",
        image: "assets/Project2.png"
      },
      {
        title: "BlushBouquet",
        description: "An e-commerce React app with cart, filters, and dynamic routing for a seamless shopping experience.",
        image: "assets/Project3.png"
      },
      {
        title: "ClassBridge",
        description: "An appointment system for students to book meetings with teachers—simple, clean, and helpful.",
        image: "assets/Project4.png"
      },
      {
        title: "ZenChat",
        description: "Your pocket companion for emotional support and mental clarity. ZenChat is under construction — we’re training the chatbot to better support you!",
        image: "assets/Project5.png"
      }
    ]
  });
});
