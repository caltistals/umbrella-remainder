import path from 'path'
import express from 'express'

const app = express();
app.use(express.static("src"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});

const port = 3000;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
