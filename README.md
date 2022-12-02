# 307 Learn By Dining

![example workflow](https://github.com/domdavidson251/307/actions/runs/3598871793)

### Project Blurb
A food review website for Cal Poly dining. Allows for user-input reviews specific to restaurants. The reviews contain a star rating out of 5 and a character-limited description. There is a home page of the restaurants, a submit-review page, and a restaurant-specific page with the restaurant's menu items, and user-reviews. A user can search for restaurants, and search for menu items. Similarly, a user can sort the reviews based on the star ratings.

### Demo Video 
(must be downloaded (we guarantee no viruses ;))): 
https://drive.google.com/file/d/1c54vXaxd6iqPcIXNlGOoCCREnnga6X6S/view?usp=share_link

### UI Prototype
https://www.figma.com/file/02rQIAj3SRb8QyAo1Xr9Wv/Learn-By-Dining?node-id=0%3A1

### Development Environment Setup
cd frontend and run 'npm start' to start frontend.
cd backend and run 'node backend.js' to start backend.

To connect to cloud DB, put a file called ".env" in your backend folder, and add this line (insert your username and password):
`MONGODB_URI="mongodb+srv://username:password@cluster0.jycgx75.mongodb.net/?retryWrites=true&w=majority"`

To run test files in backend:
`npm test`

### Style checker
Prettier https://prettier.io/

How to install: lookup on “Prettier - Code formatter.” on VS Code Extensions and download

### UML Class Diagram
https://app.diagrams.net/#G19K_cfk0hN7-p1JWH0YYM0P6OavStVjzK

### Sequence Diagram for Submitting Review 
(You may need to click "Edit this Design" in order to view the diagram, ur browser might have issues displaying it as a thumbnail)
https://online.visual-paradigm.com/community/share/learnbydining-16a85vmeud

### Code Coverage Report

PASS  models/menu.test.js <br>
PASS  models/reviews.test.js <br>
PASS  models/restaurant.test.js <br>

File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s               
--------------------|---------|----------|---------|---------|---------------------------------
All files           |   80.68 |       50 |     100 |   80.68 |                                 
 schema-services.js |   78.75 |       50 |     100 |   78.75 | ...,108-109,117,134-135,148-149 
 schemas.js         |     100 |      100 |     100 |     100 |                                 

Test Suites: 3 passed, 3 total <br>
Tests:       11 passed, 11 total <br>
Snapshots:   0 total <br>
Time:        2.462 s, estimated 3 s <br>
Ran all test suites. <br>
