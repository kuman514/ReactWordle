function Alert(props) {
  /*
    Props of Alert
      - message: string
  */

  return (
    <div className="Alert">
      <div className="AlertContent">
        { props.message }
      </div>
    </div>
  );
}

export default Alert;
