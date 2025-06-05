import { Snackbar } from "@mui/joy";
import { CheckCircle } from "@mui/icons-material";
import { Error } from "@mui/icons-material";

function CustomSnackbar({ variant, color, open, onClose, message }) {
  return (
    <Snackbar
      variant={variant}
      color={color}
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      startDecorator={color === "success" ? <CheckCircle /> : <Error />}
      endDecorator={
        <button onClick={onClose} size="sm">
          Dismiss
        </button>
      }
    >
      {message}
    </Snackbar>
  );
}

export default CustomSnackbar;
