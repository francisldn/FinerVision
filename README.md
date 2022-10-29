# FINERVISION TEST

## CLIENT
* Client app is built using *TypeScript React* and *React hooks*, UI is rendered with *Styled Components*
* User can click the header to expand the form or navigate to the next form section by clicking "Next"
* **Form validation** is conducted for the section when the user clicks "Next" to navigate to the next section. If form inputs are not valid, user will be prompted to change the inputs
  * Full form validation is also conducted in the bottom section when the user clicks "Next", this ensures that all the input values are valid before sending the data to the server
  * All the fields, except for the Final comments, are marked as **required** fields. User who does not input a valid value will not be able to proceed
* The UI is developed to be responsive, so the Form and its elements will expand or shrink accordingly based on screen sizes
## SERVER
* Server app is built using *Typescript* with *Express*
* An API endpoint (``/user/create``) is created for posting data to the server
* **Client input validation** is performed in the *Controller* function, which ensures that the input values are valid before sending them to the database. Sequelize also validates input values before accepting them
  * Email duplication check is also added - to prevent the same user from registering multiple times

## HOW TO START THE APP
### Client
1. From the repo root folder, ``cd client`` to go into the ``client`` folder
2. Install dependencies
```
npm install
```
3. Set up the ``.env`` file for client, following the example in the ``.env.example`` file. You may use ``http://localhost:3001`` for the API endpoint in local environment.
4. Start the client app in ``http://localhost:3000`` in development environment
```
npm run start
```
5. Build app in production mode
```
npm run build
```

### Server
1. From the repo root folder, ``cd server`` to go into the ``server`` folder
2. Install dependencies
```
npm install
```
3. Set up the ``.env`` file for server, following the example in the ``.env.example`` file. You may use ``3001`` as the server port if you wish. 
4. Start the server in ``http://localhost:3001`` by running the command below. The CLI below will run ``tsc`` which compiles TypeScript into JavaScript and uses nodemon to run ``index.ts`` file.
```
npm run start
```
