# Feedback Form
This Single Page Application is multi-part form at allows users to submit feedback. Redux stores the responses and then posts to a PostgreSQL database upon confirmation.

## Installation

Create your database and tables using the provided `data.sql` file. Start the server.

Install the npm package dependencies and start the server:
```
npm install
npm run server
```

Now that the server is running, open a new terminal and start the react client app.

```
npm run client
```

## Usage
1. The project should now be running locally on your computer, navigate in your browser to localhost:3000 if you aren't already
2. Answer the question on each page and hit submit
3. Review your feedback and hit submit one final time

## License

[MIT](https://choosealicense.com/licenses/mit/)