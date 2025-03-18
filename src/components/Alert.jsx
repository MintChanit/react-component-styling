const Alert = ({ variant, message }) => {
    const styles = {
      Error: {
        backgroundColor: "rgb(248, 173, 179)",
        color: "#721C24",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px 0",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      },
      Warning: {
        backgroundColor: "rgb(255, 198, 145)",
        color: "#856404",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px 0",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      },
      Info: {
        backgroundColor: "#FFEEBA",
        color: "#856404",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px 0",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      },
      Success: {
        backgroundColor: "rgb(173, 255, 192)",
        color: "#155724",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px 0",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      },
    };
  
    // Using a mapping object for better readability
    const iconMap = {
      Error: <i className="bx bx-sad"></i>, // Boxicons
      Warning: <i class='bx bx-error'></i>,
      Info: <i class='bx bx-info-circle' ></i>,
      Success: <i class='bx bx-check-square'></i>,
    };
  
    return (
      <div style={styles[variant] || {}}>
        {iconMap[variant]} {message}
      </div>
    );
  };
  
  export default Alert;
  