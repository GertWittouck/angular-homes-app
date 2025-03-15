# Angular Homes App
- Install Angular if you don't have it installed

  `npm install -g @angular/cli`

- Clone this branch to your local machine

  `git clone -b homes-app-start git@github.com:angular/codelabs.git homes-app`

- Once the code has been downloaded

  `cd homes-app`

- Install the depencies

  `npm install` 

- Run the application 

## JSON server
 The application will try to fetch the application data through a fake Rest API served up with [json-server](https://github.com/typicode/json-server/tree/v0).
 
 Use the following command to install `JSON server` if you don't have it yet:
 ```
 npm install -g json-server
 ```
 
 A file called `db.json` needs to be created as well containing the data that will be served up by the fake REST API:
 ```
 touch db.json
 ```
 
 Once this is done, start the server:
 ```
 json-server --watch db.json
 ```
 
 ## Further improvements to be made
 
 1. Replace browser fetch with `Angular HttpClient`.
