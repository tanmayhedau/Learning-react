function Student(props) {
  return (
    <div>
      <h1>Student component</h1>
      <button onClick={props.data}>Call function</button>
    </div>
  );
}

export default Student;
