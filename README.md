# React Login Challenge — Personal Solution

This repository contains **my personal solution** to the login form challenge originally proposed by [fernandev](https://github.com/fernandodof/desafio-login-react).

> The original challenge was forked, resolved by me, and later migrated into this standalone repository with improvements and explanations.

---

## 🛠️ How the challenge was solved

### ✅ 1. Triggering the `login()` function
The login button calls the `handleLogin` function, which executes `login({ email, password })` from `utils.js`. It uses `.then()`, `.catch()`, and `.finally()` to handle success, error, and loading state properly.

---

### ✅ 2. Disabled login button conditions
The button is disabled when:
- The email field is empty
- The password has fewer than 6 characters
- The login is currently in progress (`isLoading` is true)

```jsx
<button disabled={email && password.length >= 6 && !isLoading ? "" : "disabled"}>
```

---

### ✅ 3. Error message
If login fails, an error message is displayed below the title. The error is managed using `useState(error)` and **automatically cleared** when the user starts typing in either field.

```jsx
onChange={(e) => {
  setPassword(e.target.value);
  setError(""); // clears error on input
}}
```

---

### ✅ 4. Success alert
If login succeeds, a success `alert()` is shown:

```js
alert("Login successful!");
```

---

### ✅ 5. Input clearing
After each login attempt (successful or not), the `email` and `password` fields are cleared:

```js
.then(()=> {
        alert('Login realizado com sucesso!')

        setEmail("");
        setPassword("");
})
```

---

## 🧪 Testing with Jest

The project uses [Jest](https://jestjs.io/) for unit testing the `login()` function.

### What is tested:

- ✅ Login success with valid email and password
- ❌ Login failure with incorrect password, validating the error message

### Test file location:

```
__tests__/utils.test.js
```

### Success case example:

```js
test("Successful login", async () => {
  const result = await login({ email: 'test@email.com', password: 'password123' });
  expect(result).toBeUndefined(); // function resolves with no value
});
```

### Failure case example:

```js
test("Login fails with incorrect password", async () => {
  let result = {};

  try {
    await login({ email: 'test@email.com', password: 'wrongpass' });
  } catch (err) {
    result.err = err;
  }

  expect(result.err).toEqual({ message: 'e-mail or password wrong.' });
});
```

---

### Configuration

#### `.babelrc`

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

#### `jest.config.js`

```js
module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  }
};
```

---

### Running tests

To run the tests:

```bash
npm run test
```

Or in watch mode:

```bash
npm run test:watch
```

---

## 📁 Project structure

- `App.jsx` — Login form component
- `utils.js` — Asynchronous `login()` function simulation
- `index.css` — Styling
- `__tests__/utils.test.js` — Unit tests with Jest
- `README.md` — This file

---

## 📺 Original challenge

- Original repo: https://github.com/fernandodof/desafio-login-react  
- Official solution video: https://youtu.be/NAtf3T9gG7s

---

