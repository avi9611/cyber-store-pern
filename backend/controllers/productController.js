import { sql } from "../config/db.js";

export const getAllProducts =async (req, res) =>{
    try{
        const products=await sql`
        SELECT * FROM products
        ORDER BY created_at DESC`;

        console.log("products fetched",products);
        res.status(200).json({success:true,data:products});
    } catch(error){
        console.error("Error in get products",error);
        res.status(500).json({success:false, message:"Server error"});
    }
};

export const createProduct = async (req, res) =>{
    const { name, price, image } = req.body;

    if(!name || !price || !image){
        return res.status(400).json({success:false, message:"All fields are required"});
    }

    try{
        const newProduct=await sql`
            INSERT INTO products (name, price, image)
            VALUES (${name}, ${price}, ${image})
            RETURNING *
        `;
        console.log("Product created successfully",newProduct);

        res.status(201).json({success:true, message:"Product created successfully", data:newProduct[0]});

    } catch(error){
        console.error("Error in create product",error);
        res.status(500).json({success:false, message:"Server error"});
    }
};

export const getOneProducts = async (req, res) =>{
    const { id } = req.params;

    try{
        const product=await sql`
        SELECT * FROM products WHERE id=${id}
        `;

        res.status(200).json({success:true, message:"Product found successfully", data:product[0]});

    } catch (error) {
        console.error("Error in get one product", error);
        res.status(500).json({success:false, message:"Server error"});
    }
};

export const updateProduct = async (req, res) =>{
    const { id } = req.params;
    const { name, price, image } = req.body;

    try{
        const update=await sql`
        UPDATE products
        SET name=${name}, price=${price}, image=${image}
        WHERE id=${id}
        RETURNING *
        `;

        if(updateProduct.length ===0 ){
            return res.status(404).json({success:false, message:"Product not found"});
        }

        res.status(200).json({success:true, message:"Product updated successfully", data:update[0]});

    } catch(error){
        console.error("Error in update product", error);
        res.status(500).json({success:false, message:"Server error"});
    }
};

export const deleteProduct = async (req, res) =>{
    const { id } = req.params;

    try{
        const deleteProduct=await sql`
        DELETE FROM products WHERE id=${id}
        RETURNING *
        `;
        
        if(deleteProduct.length ===0){
            return res.status(404).json({success:false, message:"Product not found"});
        }
        
        res.status(200).json({success:true, message:"Product deleted successfully", data:deleteProduct[0]});

    } catch(error){
        console.error("Error in delete product", error);
        res.status(500).json({success:false, message:"Server error"});  
    }
};