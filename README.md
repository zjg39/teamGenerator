# teamGenerator


![screenshot of successful launch](teamGenerator/assets/screenshotTeamGenerator.png "A shot of the finished product")

### To use:

install: npm i
launch: node index.js

## Concept, User Experience, and Build


### Concept

#### The user needs a visual way to view current employees and their necessary information, with certain pieces of information that are unique to certain positions.  The user needs to feed this information into an app that will display what they entered in an intuitive way.


### User Experience 

#### Once the user launches the app (to use, near the top), they are asked a series of questions, starting with what kind of person they would like to add to their team (they must add at least one before they are given the option not to add any more members).  The user is presented with a series of questions that vary with each position.  Once they have completed their team, an HTML document is generated in the team folder for the user to enjoy.


### The Build

#### While this project, like so many others, was awkward to approach, it proved to be straightforward in its design.  A javascript file was made for the base 'employee' to act as a template, with the other positions modifying that template with different questions (for example, the manager position requires a phone number while the engineer instead requires a github id), and tests were made for each of those files to ensure that the right information was recieved.
  The index.js, while the most difficult part, was the easiest to understand, apart from the individual employee files.  After importing all of the necessary node modules and declaring an array in which to store the results of the questions, an inquirer function begins with each question array listed in the order of the employees.  Depending on the answer of the user (do they want another employee?  Or are they done building a team?), another section of code for a certain employee would execute or the function would enter the finishing sequence where the answers are fed through an HTML template and appended onto a larger script that can be deployed and viewed.  The user is informed of their success in the terminal with a message.
