# 307 Learn By Dining

Project Blurb: A food review website for Cal Poly dining. Allows for user-input reviews specific to restaurants. The reviews contain a star rating out of 5 and a character-limited description. There is a home page of the restaurants, a submit-review page, and a restaurant-specific page with the restaurant's menu items, and user-reviews. A user can search for restaurants, and search for menu items. Similarly, a user can sort the reviews based on the star ratings.

team repo

How To Run:
cd frontend and run 'npm start' to start frontend.
cd backend and run 'node backend.js' to start backend.

Figma Storyboard: https://www.figma.com/file/02rQIAj3SRb8QyAo1Xr9Wv/Learn-By-Dining?node-id=0%3A1

Main class diagram: https://app.diagrams.net/#G19K_cfk0hN7-p1JWH0YYM0P6OavStVjzK

Sequence Diagram for Submitting Review: https://online.visual-paradigm.com/community/share/learnbydining-16a85vmeud
(You may need to click "Edit this Design" in order to view the diagram, ur browser might have issues displaying it as a thumbnail)

Style checker: Prettier https://prettier.io/
How to install Prettier: lookup on “Prettier - Code formatter.” on VS Code Extensions and download

To connect to cloud DB, put a file called ".env" in your backend folder, and add this line (insert your username and password):

`MONGODB_URI="mongodb+srv://username:password@cluster0.jycgx75.mongodb.net/?retryWrites=true&w=majority"`

To run test files in backend:
`npm test`
