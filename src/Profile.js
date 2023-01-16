import { useState } from "react";

function Profile() {
  const [loggedIn, setLoggedIn] = useState(1);

  return (
    <div>
      {loggedIn == 1 ? (
        <h1>welcome user 1</h1>
      ) : loggedIn == 2 ? (
        <h1>welcome user 2</h1>
      ) : (
        <h1>welcome user 3</h1>
      )}
    </div>
  );
}

export default Profile;
