const Button = (props) => {
  const handleClick = () => {
    alert(`You clicked on ${props.children}`)
  };
  return (
    <>
      <button
        className={props.className}
        onClick={handleClick}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;