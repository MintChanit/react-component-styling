const Button = ({ variant, name }) => {
  const styles = {
    Primary: {
      backgroundColor: "#074EE8",
      color: "white",
    },
    Secondary: {
      backgroundColor: "#07A4E8",
      color: "white",
    },
    Error: {
      backgroundColor: "#DE5753",
      color: "white",
    },
    Success: {
      backgroundColor: "#26B795",
      color: "white",
    },
  };

  return <button style={styles[variant]}>{name}</button>;
};

export default Button;
