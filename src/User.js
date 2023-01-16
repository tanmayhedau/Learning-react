function User(props) {
  return (
    <div>
      <h1>User component</h1>
      <button onClick={props.data}>Call function</button>
    </div>
  );
}

export default User;
