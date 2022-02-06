function Alert(props) {
  /*
    Props of Alert
      - message: string
  */

  return (
    <div className="Alert">
      { props.message }
    </div>
  );
}

export default Alert;
