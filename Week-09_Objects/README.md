# Week 09: Objects

## Summary

This week focuses on JavaScript objects, a fundamental data structure that allows you to store collections of data and more complex entities. You will learn how to create, access, and manipulate objects, which are essential for organizing your code and managing state in your applications.
We will also scope and figure out the final project for the course.

## Resources

- [MDN Web Docs: JavaScript Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [W3 Schools JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)
- [W3 Schools JavaScript Object Methods](https://www.w3schools.com/js/js_object_methods.asp)

## Tasks

### FreeCodeCamp Lab

- Complete the challenges on [Basic Data Structures: Objects](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/) to practice creating and accessing object properties.

### Project Work

  - Create a `pipes` array and push your first pipe pair object `{ x, topHeight, gap, width }`.
  - In the game loop, iterate over `pipes` to move each left by a constant `speed`.
  - When a pipe goes off-screen, remove it from the array and spawn a new one (timer or frame counter).
  - Ensure drawing order is background -> pipes -> bird.

  - Add a `score` variable; increment when the bird passes a pipe pair.
  - Implement collision detection between the bird’s rectangle and pipe rectangles. End the game on collision.

  - Bonus: draw score text to the canvas

- **Version Control:**
  - Commit on a branch with a message like "week-09: pipes array + movement" and open a PR.
  - Send a link to your PR to your assigned teacher for feedback in Slack.