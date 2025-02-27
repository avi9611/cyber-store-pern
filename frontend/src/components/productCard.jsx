import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { productStore } from "../store/productStore";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

function ProductCard({ product }) {
  const { deleteProduct } = productStore();
  const theme = useTheme();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(product.id);
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 360,
        height: "100%",
        boxShadow: theme.palette.mode === "dark"
          ? "0px 4px 10px rgba(255, 255, 255, 0.1)"
          : "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "16px", 
        overflow: "hidden", 
        transition: "all 0.3s ease",
        backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#fff",
        color: theme.palette.mode === "dark" ? "#fff" : "#333",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "&:hover": {
          boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
          transform: "translateY(-4px)", 
        },
      }}
    >
      {/* PRODUCT IMAGE */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%", 
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
        />
      </Box>

      {/* PRODUCT DETAILS */}
      <CardContent sx={{ flexGrow: 1, padding: "16px" }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {product.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.mode === "dark" ? "#f1c40f" : "#333",
            fontWeight: "bold",
          }}
          mb={2}
        >
          ${Number(product.price).toFixed(2)}
        </Typography>
      </CardContent>

      {/* PRODUCT ACTIONS */}
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Button
          component={Link}
          to={`/product/${product.id}`}
          variant="outlined"
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            color: theme.palette.mode === "dark" ? "#fff" : "#6200ea",
            borderColor: theme.palette.mode === "dark" ? "#fff" : "#6200ea",
            borderRadius: "12px", 
            padding: "8px 16px",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: theme.palette.mode === "dark" ? "#6200ea" : "#f5f5f5",
              borderColor: theme.palette.mode === "dark" ? "#6200ea" : "#6200ea",
              transform: "scale(1.05)",
            },
          }}
          startIcon={<EditIcon />}
        >
          Edit
        </Button>

        <IconButton
          onClick={handleDelete}
          sx={{
            background: theme.palette.mode === "dark" ? "#d32f2f" : "#ffebee",
            color: theme.palette.mode === "dark" ? "#fff" : "#d32f2f",
            borderRadius: "12px", 
            boxShadow: "0px 3px 8px rgba(211, 47, 47, 0.3)",
            transition: "all 0.3s ease",
            "&:hover": {
              background: theme.palette.mode === "dark" ? "#b71c1c" : "#ffcdd2",
              transform: "scale(1.1)",
              boxShadow: "0px 3px 10px rgba(211, 47, 47, 0.5)",
            },
          }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ProductCard;