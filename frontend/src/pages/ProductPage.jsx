import { useNavigate, useParams } from "react-router-dom";
import { productStore } from "../store/productStore";
import { useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  Save as SaveIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

function ProductPage() {
  const {
    currentProduct,
    formData,
    setFormData,
    loading,
    error,
    fetchProduct,
    updateProduct,
    deleteProduct,
  } = productStore();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchProduct(id);
  }, [fetchProduct, id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
      navigate("/");
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography color="error" variant="h6">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Button
        onClick={() => navigate("/")}
        startIcon={<ArrowBackIcon />}
        sx={{
          mb: 3,
          textTransform: "none",
          fontWeight: "bold",
          color: "primary.main",
          "&:hover": { color: "primary.dark" },
        }}
      >
        Back to Products
      </Button>

      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
        {/* PRODUCT IMAGE */}
        <Card
          sx={{
            flex: 1,
            boxShadow: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: { xs: "250px", md: "100%" },
              width: "100%",
              objectFit: "cover",
            }}
            image={currentProduct?.image}
            alt={currentProduct?.name}
          />
        </Card>

        {/* PRODUCT FORM */}
        <Card sx={{ flex: 1, p: 3, boxShadow: 3, borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Edit Product
            </Typography>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateProduct(id);
              }}
            >
              <TextField
                fullWidth
                label="Product Name"
                variant="outlined"
                margin="normal"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <TextField
                fullWidth
                label="Price"
                type="number"
                variant="outlined"
                margin="normal"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />

              <TextField
                fullWidth
                label="Image URL"
                variant="outlined"
                margin="normal"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              />

              <Box
                display="flex"
                justifyContent="space-between"
                mt={3}
                gap={2}
                flexWrap="wrap"
              >
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={handleDelete}
                  size="large"
                  sx={{
                    minWidth: "140px",
                    fontWeight: "bold",
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "red.dark",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  Delete
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<SaveIcon />}
                  type="submit"
                  size="large"
                  sx={{
                    minWidth: "140px",
                    fontWeight: "bold",
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                      transform: "scale(1.05)",
                    },
                  }}
                  disabled={loading || !formData.name || !formData.price || !formData.image}
                >
                  Save Changes
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default ProductPage;
