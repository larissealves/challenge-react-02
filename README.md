````markdown


## React Interview Challenge #02

Este repositório contém a resolução do desafio de formulário de login proposto pelo canal do [fernandev](https://www.youtube.com/@fernandev), utilizando React e os conceitos de componentes controlados e promessas.

---

## 🛠️ Como o desafio foi resolvido

### ✅ 1. Disparo da função `login()`
O botão de login chama a função `handleLogin`, que executa a função `login({ email, password })` importada de `utils.js`. O login é tratado com `.then()`, `.catch()` e `.finally()` para lidar com sucesso, erro e loading de forma adequada.

---

### ✅ 2. Botão de login desabilitado
O botão fica desabilitado quando:
- O campo de e-mail está vazio
- A senha tem menos de 6 caracteres
- O login está em andamento (`isLoading`)

```jsx
<button disabled={email && password.length >= 6 && !isLoading ? "" : "disabled"}>
```

---

### ✅ 3. Mensagem de erro
Caso o login falhe, uma mensagem de erro é exibida abaixo do título. A mensagem é controlada via `useState(error)` e **é automaticamente limpa** quando o usuário começa a digitar novamente em qualquer um dos campos.

```jsx
onChange={(e) => {
  setPassword(e.target.value);
  setError(""); // limpa erro ao digitar
}}
```

---

### ✅ 4. Alerta de sucesso
Se o login for bem-sucedido, um `alert()` é exibido com a mensagem de sucesso:

```js
alert("Login realizado com sucesso!");
```

---

### ✅ 5. Limpeza dos campos
Após o login (com sucesso ou não), os campos `email` e `password` são limpos com:

```js
setEmail("");
setPassword("");
```

Essa limpeza só funciona corretamente porque os inputs estão com `value={email}` e `value={password}`, tornando-os **inputs controlados** pelo React.

---

## 📁 Estrutura do projeto

- `App.jsx` — Componente com o formulário de login
- `utils.js` — Função `login()` simulando uma chamada assíncrona
- `index.css` — Estilos da aplicação
- `README.md` — Este arquivo

---

## ▶️ Vídeo de referência

Resolução do desafio no canal do Fernando:
# fernandev 
https://youtu.be/NAtf3T9gG7s
