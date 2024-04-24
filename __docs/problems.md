<!-- Problem is not resolved -->

- Nextjs: intercepting, parrallel

- Feartures: comments (socketio), ads, notification, videos, compress, buffer ...

- Security:
+ XSS: insert harmful js --> "escape html" library

+ DOS: (denial of service): server overload --> "express-rate-limit"

+ authentication & authorization: hash & 2 factor

+ IDOR: (`user_id` on url) --> compare pathname vs user_id in access_token

+ sql injection: `select * from users where id = ${id}` --> 

```js
const query = `select * from users where id = ?`;
connection.query(query, [id], (err, result) => {
    // Handle error
    // handle result
})
```

- filter: dropdown
- comment: ui, logic, ...

# Environment
- [Example .env](https://github.com/vercel/next.js/tree/canary/examples/environment-variables)
