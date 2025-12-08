import { ScaleLoader } from "react-spinners";

const Loading = ({ loading = true, color = "#f472b6", size = 100 }) => {
  if (!loading) return null;

  return (
    <div style={styles.overlay}>
      <ScaleLoader color={color} size={size} />
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
};

export default Loading;
