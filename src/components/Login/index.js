const Login = () => (
  <div className="login-container">
    <div className="login-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
        className="logo"
      />
      <div className="input-container">
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <input id="username" className="input-element" />
      </div>
      <div className="input-container">
        <label htmlFor="username" className="label">
          PASSWORD
        </label>
        <input id="username" className="input-element" />
      </div>
      <button type="submit" className="login-button">
        Login
      </button>
    </div>
  </div>
)
export default Login
