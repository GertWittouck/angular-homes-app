# angular-homes-app

## JSON server
The application will try to fetch the application data through a fake Rest API served up with [json-server](https://github.com/typicode/json-server/tree/v0).

Use the following command to install `JSON server` if you don't have it yet:
```
npm install -g json-server
```

A file called `db.json` needs to be created as well containing the data that will be served up by the fake REST API:
```
touch db.json
``

Once this is done, start the server:
```
json-server --watch db.json
```
