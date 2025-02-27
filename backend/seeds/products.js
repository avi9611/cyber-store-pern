import { sql } from "../config/db.js";

const SAMPLE_PRODUCTS = [
    {
      name: "RGB Mechanical Gaming Keyboard",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1713526211434-0b4c6c9adaa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Wireless Gaming Mouse Pro",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1619334084350-b093f0a9b40e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Gaming Headset with Surround Sound",
      price: 199.99,
      image:
        "https://plus.unsplash.com/premium_photo-1679177184017-7777cdbb2ba5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ergonomic Gaming Chair",
      price: 349.99,
      image:
        "https://plus.unsplash.com/premium_photo-1682141882061-c7676602e111?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "4K UltraWide Gaming Monitor",
      price: 799.99,
      image:
        "https://images.unsplash.com/photo-1651012998667-2c779fee76f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Customizable RGB Mousepad",
      price: 49.99,
      image:
        "https://i5.walmartimages.com/asr/fc9be889-823e-449c-a77f-505db19cb1f6.e9f9eb161c9e8953f473a6afad451e42.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
    },
    {
      name: "Professional Gaming Controller",
      price: 179.99,
      image:
        "https://images.unsplash.com/photo-1604586398467-32924c78b879?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "VR Headset with Motion Tracking",
      price: 399.99,
      image:
        "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Gaming Laptop with RTX Graphics",
      price: 1599.99,
      image:
        "https://images.unsplash.com/photo-1599299009482-3b5326fc52e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Streaming Microphone for Gamers",
      price: 99.99,
      image:
        "https://images.unsplash.com/photo-1644560286635-d8e1268af76f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  
  export { SAMPLE_PRODUCTS };
  

async function seedDatabase() {
  try {
    // first, clear existing data
    await sql`TRUNCATE TABLE products RESTART IDENTITY`;

    // insert all products
    for (const product of SAMPLE_PRODUCTS) {
      await sql`
        INSERT INTO products (name, price, image)
        VALUES (${product.name}, ${product.price}, ${product.image})
      `;
    }

    console.log("Database seeded successfully");
    process.exit(0); // success code
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1); // failure code
  }
}

seedDatabase();