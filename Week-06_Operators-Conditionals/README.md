# Week 06: Logical Operators and Conditionals

## Summary

This week deepens your JavaScript skills by focusing on logical operators and conditional statements. These concepts are essential for creating dynamic, decision-based features on your website.

## Resources

Here are some resources to help you understand logical operators and conditionals in JavaScript. It is not required to go through all of them, but they are good references if you need them or get stuck.

- [MDN JavaScript Conditionals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements)
- [W3 Schools JavaScript If...Else](https://www.w3schools.com/js/js_if_else.asp)
- [W3 Schools JavaScript Switch](https://www.w3schools.com/js/js_switch.asp)

## Tasks

### FreeCodeCamp Lab

- Complete selected lab on [Build a fortune teller](https://www.freecodecamp.org/learn/full-stack-developer/lab-fortune-teller/build-a-fortune-teller) to train conditional logic and logical operators.

### Project Work

- Remove pipes for now and implement bird movement:

  - Hide/remove pipes from rendering to focus only on the bird for now.
  - Look at your plan from the last weeks and use it to guide your implementation.
  - Implement movement with simple physics: variables `birdY`, `velocity`, `gravity`, `jumpStrength`.
  - On space/click, apply a negative velocity (flap). Clamp to canvas (floor/ceiling) and set GAME_OVER when hitting bounds.
  - Add a minimal game state: RUNNING vs GAME_OVER; add a restart handler (R/click) to reset.

- **Version Control:**
  - Commit on a branch (e.g., `week-06-bird-movement`) and submit a pull request.