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
      { name: "HTML", color: "red" },
      { name: "CSS", color: "blue" },
      { name: "Tailwind CSS", color: "green" },
      { name: "JavaScript", color: "yellow" },
      { name: "PHP", color: "purple" },
      { name: "Node.js", color: "green" },
      { name: "React", color: "indigo" },
      { name: "Firebase", color: "pink" },
      { name: "Python", color: "purple" },
      { name: "C++ , C , C#", color: "red" },
      { name: "Java", color: "yellow" },
      { name: "TypeScript", color: "orange" },
      { name: "Canva", color: "blue" },
      { name: "Git & GitHub", color: "indigo" },
      { name: "Content Writing", color: "pink" },
      { name: "Design Thinking", color: "violet" },
      { name: "SQL", color: "red" },
      { name: "Data Science", color: "yellow" },
      { name: "Computer Networks", color: "blue" },
      { name: "MVC", color: "orange" },
      { name: "ASP .Net", color: "indigo" },









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
      }
    ]
  });
});
