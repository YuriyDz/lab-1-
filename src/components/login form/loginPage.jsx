import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [carName, setCarName] = useState('');
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleCarNameChang = (event) =>{
      setCarName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Перевірка введених даних
    if (email === 'example@example.com' && password === 'password123' && carName === 'carName') {
      // Успішна авторизація
     // console.log('Успішно авторизовано!');
    } else {
      // Невдала авторизація
      setError('Невірний email або пароль');
    }
  };

  return (
    <div>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Пароль:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <label>
          Марка автомобіля:
          <input type="carName" value={carName} onChange={handleCarNameChang} />
        </label>
        <button type="submit">Увійти</button>
      </form>
    </div>
  );
}

export default Login;