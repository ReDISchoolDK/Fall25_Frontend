## Week 3: Interactive JavaScript Trivia Bot
**Summary:**  
This week, you will deepen your understanding of functions and learn about variables and their scopes. Additionally, you will discover how to use the debugger in your browser.

**Tasks:**
- **FreeCodeCamp Lab:**  
  - Complete the [Build a JavaScript Trivia Bot](https://www.freecodecamp.org/learn/full-stack-developer/lab-javascript-trivia-bot/lab-javascript-trivia-bot) lab. This lab will help you practice essential JavaScript concepts like declaring variables, writing functions, and using conditional logic.
  
- **Project Work:**  
  - **Update Folder Structure:**  
    Add ` script.js` files to each folder in your project. At the end it should be structured like this:
    ```
    src/
      ├── index.html
      ├── styles.css
      ├── script.js
      ├── about/
      │   ├── index.html
      │   ├── styles.css
      │   └── script.js
      └── projects/
          ├── index.html
          ├── styles.css
          └── script.js
    ```
  - **Linking Script Files:**  
    In each `index.html` file (in the root folder, the about folder, and the projects folder), add a `<script>` tag right before the closing `</body>` tag that links the corresponding `script.js` file. For example:
    ```html
    <script src="script.js"></script>
    ```
  - **Add Console Logs:**  
    In each `script.js` file, add a `console.log` statement to confirm that the file is loaded:
    - **Root folder's script.js:**
      ```js
      console.log("Homepage script loaded!");
      ```
    - **about folder's script.js:**
      ```js
      console.log("About page script loaded!");
      ```
    - **projects folder's script.js:**
      ```js
      console.log("Projects page script loaded!");
      ```
   
   That is all for this week, we are setting things up for the future here!
- **Version Control:**  
  - Commit your work with clear, descriptive messages and push your changes to GitHub.
  
- **Testing:**  
  - Open your `trivia/index.html` in a browser, test the interactive trivia bot, and use browser developer tools to debug any issues.
