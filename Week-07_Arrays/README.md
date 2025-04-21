## Week 7: Arrays

## Summary  
Arrays are vital for handling lists of data. This week, you’ll learn how to work with arrays in JavaScript and use them to manage dynamic content on your site.

## Tasks

### FreeCodeCamp Lab 

  - Do the lab [Lunch Picker Program](https://www.freecodecamp.org/learn/full-stack-developer/lab-lunch-picker-program/build-a-lunch-picker-program)

### Project Work

  - **Project Setup:**

    - Create a new folder named `movie-watchlist` within your projects.
    - Inside the `movie-watchlist` folder, create three files: `index.html`, `styles.css`, and `script.js`.
    - Link `styles.css` and `script.js` properly in your `index.html` as usual.

  - **Build the HTML Structure:**

    - Add a form that includes:
    - An input field where users can type the title of a movie.
    - A button labeled "Add Movie" to submit the new movie.
    - Create a section (or a list element) where the watchlist will be displayed.
    - Include an area on the page to display the total count of movies currently in the watchlist.

  - **Style Your Application:**

    - In `styles.css`, apply basic styling to make your page visually appealing.
    - Consider using modern layout techniques (like Flexbox or Grid) to organize the form, list, and header effectively.

  - **Add JavaScript Functionality:**

    - In `script.js`, create an array that will store the movie titles.
    - Set up an event listener on the "Add Movie" button to:
      - Retrieve the movie title from the input field.
      - Add the movie to the array.
      - Update the displayed movie list and the total count.
      - For each movie in the list, display a "Remove" button that, when clicked:
        - Removes the movie from the array.
        - Updates the displayed list and total count accordingly.
    - Ensure that the DOM is updated dynamically after every change to the array.

  - **BONUS:**
    - Experiment with additional features such as:
      - Sorting the movies alphabetically.
      - Marking movies as "watched".
      - Something else that you think would be fun to add.

- **Version Control:**
  - Create a new branch for your conditional feature, and then submit a pull request.
