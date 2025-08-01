/*import Button from "../Button";

function LoginAndLogout() {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <Button text="Logout" />;
  } else {
    return <Button text="Login" />;
  }
}

export default LoginAndLogout;*/

/* import Button from "../Button";

function LoginAndLogout() {
  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn && <Button text="Logout" />}
      {!isLoggedIn && <Button text="Login" />}
    </div>
  );
}

export default LoginAndLogout; */

import Button from "../Button";

function LoginAndLogout() {
  const isLoggedIn = false;

  return isLoggedIn ? <Button text="Logout" /> : <Button text="Login" />;
}

export default LoginAndLogout;
