const port = process.env.PORT || 5001;
const express = require("express");
const app = express();

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/form");
});

app.get("/form", (req, res) => {
  res.send(`
    <form action="/submit" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required><br>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required><br>

      <label for="comments">Comments:</label>
      <input type="text" id="comments" name="comments" ><br>

      <label for="newsletter">Sign-up for the newsletter?</label>
      <input type="checkbox" id="newsletter" name="newsletter" value="yes"><br><br>

      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/submit", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const comments = req.body.comments || "n/a";
  const newsletter = req.body.newsletter
    ? "Yes, sign me up for the newsletter."
    : "No, thank you.";

  res.send(`
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Comments: ${comments}</p>
    <p>Newsletter: ${newsletter}</p>
  `);
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
