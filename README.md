# hotel-worx-2
Complete revamp of the original hotel-worx

## How can you use this project?
1. **Clone the repo** onto your local computer:
```
git clone git@github.com:mike14747/hotel-worx-2.git
```
2. Create a **.env** file in the root folder with the following content:
```
PORT=3001
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PW=<your-mysql-password>
DB_NAME=hotel_worx_2_db
SESSION_SECRET=<your-session-secret>
```
3. Install the **npm packages**. From the root directory, run:
```
npm install
```
4. Install the database by using the schema/seeds file (**config/hotel_worx_2_db.sql**).
5. Create a "/client" folder where the react frontend app will reside.

## This project was created and is maintained by:
* Mike Gullo (https://github.com/mike14747)
* This project's github repo: https://github.com/mike14747/hotel-worx-2