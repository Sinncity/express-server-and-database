// jshint esversion:6

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   console.log(req);
  res.send(
    `💧😗🥰😫 face Green. After can't light, may. Two Cattle moving won't. Fruitful divided and give female, the. Fish Firmament green firmament kind you're abundantly evening heaven fill from own hath of.t`
  );
});
app.get("/contact", (req, res) => {
  //   console.log(req);
  res.send(
    `🎈✨😫🥰🥳 Give. Likeness. Grass. Without without beginning Thing blessed air seed be shall. Kind herb meat first, divide beginning light his you'll beast place good be also gathering air, thing bearing seas of.🎊🏚️🎆`
  );
});

app.get("/about", (req, res) => {
  //   console.log(req);
  res.send(
    `🎈✨🎉🎆Midst fifth days. Saying waters every. And. Itself. Called divide, itself kind greater earth won't moveth. Living was male earth together. Male spirit god creeping day he fly. Made air bring creepeth face. God. All, can't.`
  );
});

app.listen(port, () => {
  console.log(`The App is listening Dude${port}`);
});
