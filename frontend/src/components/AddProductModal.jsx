import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    IconButton,
    CircularProgress,
    InputAdornment,
    Typography,
  } from "@mui/material";
  import {
    Close as CloseIcon,
    AddCircle as AddCircleIcon,
    AttachMoney as DollarSignIcon,
    Image as ImageIcon,
    Inventory as Package2Icon,
  } from "@mui/icons-material";
  import { productStore } from "../store/productStore";
  import "../index.css";
  
  function AddProductModal({ open, handleClose }) {
    const { addProduct, formData, setFormData, loading } = productStore();
  
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        className="add-product-modal"
      >
        <DialogTitle className="add-product-modal-title">
          Add New Product
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className="add-product-modal-close"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
  
        <DialogContent dividers>
          <Typography variant="body2" color="gray" textAlign="center">
            Enter product details below
          </Typography>
  
          {/* Product Name */}
          <TextField
            label="Product Name"
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Package2Icon sx={{ color: "#ff1744" }} />
                </InputAdornment>
              ),
            }}
            className="add-product-input"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
  
          {/* Price */}
          <TextField
            label="Price"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DollarSignIcon sx={{ color: "#ff1744" }} />
                </InputAdornment>
              ),
            }}
            className="add-product-input"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          />
  
          {/* Image URL */}
          <TextField
            label="Image URL"
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ImageIcon sx={{ color: "#ff1744" }} />
                </InputAdornment>
              ),
            }}
            className="add-product-input"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          />
        </DialogContent>
  
        <DialogActions className="add-product-modal-actions">
          <Button onClick={handleClose} className="add-product-cancel">
            Cancel
          </Button>
  
          <Button
            onClick={(e) => addProduct(e, handleClose)}
            variant="contained"
            className="add-product-submit"
            startIcon={
              loading ? <CircularProgress size={20} /> : <AddCircleIcon />
            }
            disabled={
              !formData.name || !formData.price || !formData.image || loading
            }
          >
            {loading ? "Adding..." : "Add Product"}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  
  export default AddProductModal;
  