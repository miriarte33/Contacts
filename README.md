# Contacts #
Fullstack Contacts app built with Express to communicate with a MySQL database in the backend and React for the frontend. Store and delete contacts saved in a local database. 
## To Run ##
### Dependencies ###
[MySQL](https://www.mysql.com/downloads/) must be downloaded and an account must be created in order to use this program. Create a database called contacts in MySQL before proceeding. 
### Instructions ###
Use ```npm install``` to install all express dependencies. Create a .env file in the root directory and place your MySQL password in there like this: 
```PASSWORD = "*****************"```. To start the project, use ```npm start```
Afterwards, cd into the client directory and run ```npm install``` again to install all react dependencies. Back in the root directory, use ```npm run dev``` to start the express server on port 5000 and the react app on port 3000.

