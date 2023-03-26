function Navbar(props) {
  return (
    <div>
      <div>{props.title}</div>
      <ul>
        <li>Home</li>
        <li>Contents</li>
        <li>{!props.newValue ? "Contact" : props.newValue}</li>
      </ul>
    </div>
  );
}

export default Navbar;
