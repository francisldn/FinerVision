# FinerVision Test

## How to Start the App
### Client
1. From the repo root folder, ``cd client`` to go into the ``client`` folder
2. Install dependencies
```
npm install
```
3. Set up the ``.env`` file for client, following the example in the ``.env.example`` file. You may use ``http://localhost:3001`` for the API endpoint in local environment.
4. Start the app in ``http://localhost:3000``
```
npm run start
```

### Server
1. From the repo root folder, ``cd server`` to go into the ``server`` folder
2. Install dependencies
```
npm install
```
3. Set up the ``.env`` file for server, following the example in the ``.env.example`` file. You may use ``3001`` as the server port if you wish. 
4. Start the app in ``http://localhost:3001``. The CLI below will run ``tsc`` which compiles TypeScript into JavaScript and uses nodemon to run ``index.ts`` file.
```
npm run start
```
