# Week 05: Keyboard Events (Space to Jump) & GitHub Workflow

OMG you made it to week 5! Tilykke! Some more changes here!

## Summary

This week you will make your bird move: add a keyboard event so pressing the spacebar makes the bird "jump" upward while gravity constantly pulls it down. You'll practice:

- Listening for keyboard events (`keydown`).
- Updating variables every animation frame (`requestAnimationFrame`).
- Keeping logic very small and clear (gravity + jump velocity only).
- Using GitHub branches and pull requests for your changes.

## Resources

- [MDN: addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN: Keyboard events](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)
- [Video: GitHub for beginners](https://www.youtube.com/watch?v=i_23KUAEtUM)
- [Git in VS Code](https://code.visualstudio.com/docs/sourcecontrol/intro-to-git)
- [GitHub: Branching](https://docs.github.com/en/get-started/using-git/about-branches)
- [GitHub: Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

## Tasks

### FreeCodeCamp Lab

No external lab this week — focus fully on your project implementation + Git branching.

### Project Work: Make the Bird Jump

Goal: The bird falls due to gravity. When the player presses the spacebar, the bird moves upward (a quick negative velocity).

#### Step-by-step

1. Add the following functions to your `flappybird.js`

```js
// Function to draw the bird at its current position
function drawBird() {
  context.drawImage(birdImg, birdX, birdY, birdWidth, birdHeight);
}

// Main game loop
function update() {
  console.log("Game updating...");

  // Clears the entire canvas
  context.clearRect(0, 0, board.width, board.height);

  // Updates the bird's position
  birdY = birdY + 1; // Gravity effect: bird falls down each frame
  // Draws the bird at its new position
  drawBird();
  requestAnimationFrame(update);
}
```

And then at the bottom of your onload function:

```js
window.onload = function () {
  //... All the previous setup code ... NOTE: The game loop will make your pipes disappear! That is okay!

  //NEW: Start the game loop
  requestAnimationFrame(update);
};
```

2. Your bird will now fall down the screen due to gravity. It should move up when you press the spacebar.
   Find out how to listen for the spacebar key press using `addEventListener`. How can you distinguish the spacebar from other keys?

You decide how strong the jump is. Update the relevant `birdY` variable. The game loop will automatically pick up the new position on the next frame update.

3. Open the HTML file in your browser:

- The bird should fall slowly.
- Press space: it should jump up.

4. Optional ideas to experiment with (not required):

- Adjust the gravity strength (how fast the bird falls).
- Adjust the jump strength (how high the bird jumps when space is pressed).
- Show a "Game Over" text when the bird falls below the canvas.
- Draw a set of pipes that move from right to left.

### Version Control

1. Create a branch: `week-05-space-jump`.
2. Commit your changes with a clear message.
3. Push the branch and open a Pull Request to `main`.
4. Add a short PR description (what you added + any questions).
5. Share the PR link with your teacher on Slack for feedback.
