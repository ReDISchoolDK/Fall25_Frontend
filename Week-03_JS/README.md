# Week 3 JavaScript Basics

## Summary

This week, you will learn the basics of Javascript, how to use functions and learn about variables. Additionally, you will discover how to use the debugger in your browser.

## Resources

Here are some resources to help you understand the basics of JavaScript. It is not required to go through all of them, but they are good references if you need them or get stuck.

- [Reference values](https://ui.dev/primitive-vs-reference-values-in-javascript)
- [W3 schools JavaScript variables](https://www.w3schools.com/js/js_variables.asp)
- [W3 schools JavaScript functions](https://www.w3schools.com/js/js_functions.asp)

## Tasks

### FreeCodeCamp Lab

- Complete the [Build a JavaScript Trivia Bot](https://www.freecodecamp.org/learn/full-stack-developer/lab-javascript-trivia-bot/lab-javascript-trivia-bot) lab. This lab will help you practice essential JavaScript concepts like declaring variables, writing functions, and using conditional logic.

### Project Work

- In your project repository, we will render static sprites on the canvas (no movement yet):

  - create a `flappybird.js` file and link it in `index.html`.
  - Ensure your JS is loaded (e.g., `flappybird.js` referenced from `index.html`).

  - Load and draw the dynamic images at fixed positions:

    - Bird (`flappybird.png`) centered vertically.

    - A pair of pipes (`toppipe.png`, `bottompipe.png`) placed off to the right side.

    Example JavaScript snippet to get you started:

    ```js
    //board
    let board;
    let boardWidth = 360;
    let boardHeight = 640;
    let context;

    //bird
    let birdWidth = 34; //width/height ratio = 408/228 = 17/12
    let birdHeight = 24;
    let birdX = boardWidth/8;
    let birdY = boardHeight/2;
    let birdImg;

    //pipes
    let pipeWidth = 64; //width/height ratio = 384/3072 = 1/8
    let pipeHeight = 512;
    let pipeX = boardWidth;
    let pipeY = 0;

    let topPipeImg;
    let bottomPipeImg;

    window.onload = function() {
        board = document.getElementById("board");
        board.height = boardHeight;
        board.width = boardWidth;
        context = board.getContext("2d"); //used for drawing on the board

        //draw flappy bird
        context.fillStyle = "green";
        // Replace these with sensible numbers and experiment! :) e.g. context.fillRect(100, 100, 30, 50);
        context.fillRect(Rectangular X Position, Rectangular Y Position, Rectangular Width, Rectangular Height);

        //load images
        birdImg = new Image();
        birdImg.src = "./flappybird.png";
        birdImg.onload = function() {
          // Feel free to first experiment with some numbers: context.drawImage(birdImg, 100, 100, 30, 50) before using variables
            context.drawImage(Variable that holds the image, Image X Position, Image Y Position, Image Width, Image Height);
        }
    }
    ```

    A clean index.html:

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          ,
          content="width=device-width, initial-scale=1.0"
        />
        <title>Flappy Bird</title>
        <link rel="stylesheet" href="flappybird.css" />
        <script src="flappybird.js"></script>
      </head>
      <body>
        <canvas id="board"></canvas>
      </body>
    </html>
    ```

  - Keep your variables simple.

- Version Control
  - Commit with a message like "week-03: draw static bird and pipes" and push.
  - Send a link to your repo to your assigned teacher for feedback in Slack.
