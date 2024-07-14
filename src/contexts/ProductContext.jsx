import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// importing product data - STATIC DATA
// import productsData from "../data/productsData";

// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //products state
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  // useEffect(async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_API_URL}/products?organization_id=${process.env.REACT_APP_ORGANIZATION_ID}&Appid=${process.env.REACT_APP_APP_ID}&Apikey=${process.env.REACT_APP_API_KEY}`
  //     );

  //     setProducts(response.data.items);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // }, []);

  setProducts({
    {
      "name": "Hand-Painted Clay Tea Cup",
      "description": "Enjoy your tea in our beautifully Hand-Painted Clay Tea Cup. Each cup features intricate designs that add a touch of artistry to your tea time. The hand-painted patterns are vibrant and unique, making each cup a small work of art. Ideal for tea lovers, it also makes a thoughtful gift for friends and family.",
      "unique_id": "CL198253P",
      "url_slug": "hand-painted-clay-tea-cup",
      "is_available": true,
      "is_service": false,
      "previous_url_slugs": null,
      "unavailable": false,
      "unavailable_start": null,
      "unavailable_end": null,
      "id": "400837b66c0a449c8939c24f7a1dc3e2",
      "parent_product_id": null,
      "parent": null,
      "organization_id": "0b6ed16b94a6481683bb601916709d07",
      "product_image": [],
      "categories": [],
      "date_created": "2024-07-13T14:24:28",
      "last_updated": "2024-07-13T14:24:43",
      "user_id": "bbeb01c4d940419fba69408f77148ea8",
      "photos": [
        {
          "model_name": "products",
          "model_id": "400837b66c0a449c8939c24f7a1dc3e2",
          "organization_id": "0b6ed16b94a6481683bb601916709d07",
          "filename": "5a8f132f327b42809c3c208a5b416950.jpg",
          "url": "claytown-store/product_hand_painted_clay_tea_cup_d4c10f_1.jpg",
          "is_featured": false,
          "save_as_jpg": true,
          "is_public": true,
          "file_rename": false,
          "position": 1
        }
      ],
      "current_price": [
        {
          "NGN": [
            1800.0,
            null,
            []
          ]
        }
      ],
      "is_deleted": false,
      "available_quantity": 4.0,
      "selling_price": null,
      "discounted_price": null,
      "buying_price": null,
      "extra_infos": null
    },
    {
      "name": "Clay Dessert Plate",
      "description": "Serve your desserts in style with our Clay Dessert Plate. This smaller plate is perfect for sweet treats, appetizers, or snacks. Its smooth surface and elegant design make it a delightful addition to your tableware. Whether for everyday use or special occasions, this plate combines functionality with aesthetic appeal.",
      "unique_id": "CL198228P",
      "url_slug": "clay-dessert-plate",
      "is_available": true,
      "is_service": false,
      "previous_url_slugs": null,
      "unavailable": false,
      "unavailable_start": null,
      "unavailable_end": null,
      "id": "9b6d40c682894dc782f747924292b4f4",
      "parent_product_id": null,
      "parent": null,
      "organization_id": "0b6ed16b94a6481683bb601916709d07",
      "product_image": [],
      "categories": [],
      "date_created": "2024-07-13T14:20:25",
      "last_updated": "2024-07-13T14:20:40",
      "user_id": "bbeb01c4d940419fba69408f77148ea8",
      "photos": [
        {
          "model_name": "products",
          "model_id": "9b6d40c682894dc782f747924292b4f4",
          "organization_id": "0b6ed16b94a6481683bb601916709d07",
          "filename": "8ef26edb3c84414db2d141ca6776e562.jpg",
          "url": "claytown-store/product_clay_dessert_plate_177009_1.jpg",
          "is_featured": false,
          "save_as_jpg": true,
          "is_public": true,
          "file_rename": false,
          "position": 1
        }
      ],
      "current_price": [
        {
          "NGN": [
            1800.0,
            null,
            []
          ]
        }
      ],
      "is_deleted": false,
      "available_quantity": 6.0,
      "selling_price": null,
      "discounted_price": null,
      "buying_price": null,
      "extra_infos": null
    },
    {
      "name": "Still Life Clay Candle Holder",
      "description": "Create a serene atmosphere with our Still Life Clay Candle Holder. Handcrafted with attention to detail, this candle holder features a smooth surface and a minimalist design. Perfect for holding pillar or votive candles, it adds a warm, ambient glow to any room. Its timeless beauty and understated elegance make it a versatile decor piece for any setting.",
      "unique_id": "CL198340P",
      "url_slug": "still-life-clay-candle-holder",
      "is_available": true,
      "is_service": false,
      "previous_url_slugs": null,
      "unavailable": false,
      "unavailable_start": null,
      "unavailable_end": null,
      "id": "345e4ba7fdf2444d88fd5eddffabb979",
      "parent_product_id": null,
      "parent": null,
      "organization_id": "0b6ed16b94a6481683bb601916709d07",
      "product_image": [],
      "categories": [],
      "date_created": "2024-07-13T14:35:10",
      "last_updated": "2024-07-13T14:35:19",
      "user_id": "bbeb01c4d940419fba69408f77148ea8",
      "photos": [
        {
          "model_name": "products",
          "model_id": "345e4ba7fdf2444d88fd5eddffabb979",
          "organization_id": "0b6ed16b94a6481683bb601916709d07",
          "filename": "e73ccebee2434a75bc4758412ffad2b0.jpg",
          "url": "claytown-store/product_still_life_clay_candle_holder_001a49_1.jpg",
          "is_featured": false,
          "save_as_jpg": true,
          "is_public": true,
          "file_rename": false,
          "position": 1
        }
      ],
      "current_price": [
        {
          "NGN": [
            2200.0,
            null,
            []
          ]
        }
      ],
      "is_deleted": false,
      "available_quantity": 8.0,
      "selling_price": null,
      "discounted_price": null,
      "buying_price": null,
      "extra_infos": null
    },
    {
      "name": "Large Clay Mug with Handle",
      "description": "Our Large Clay Mug with Handle is perfect for those who love a generous serving of their favorite beverage. With its spacious interior and sturdy handle, this mug is ideal for soups, stews, or large drinks. The smooth finish and natural colors add a rustic charm to your kitchen. It's a versatile piece that's both practical and beautiful.",
      "unique_id": "CL198266P",
      "url_slug": "large-clay-mug-with-handle",
      "is_available": true,
      "is_service": false,
      "previous_url_slugs": null,
      "unavailable": false,
      "unavailable_start": null,
      "unavailable_end": null,
      "id": "73c3f3dae22646ba8ea32826da4b385b",
      "parent_product_id": null,
      "parent": null,
      "organization_id": "0b6ed16b94a6481683bb601916709d07",
      "product_image": [],
      "categories": [],
      "date_created": "2024-07-13T14:26:03",
      "last_updated": "2024-07-13T14:26:13",
      "user_id": "bbeb01c4d940419fba69408f77148ea8",
      "photos": [
        {
          "model_name": "products",
          "model_id": "73c3f3dae22646ba8ea32826da4b385b",
          "organization_id": "0b6ed16b94a6481683bb601916709d07",
          "filename": "10a28fd9e9104e4f920747df8b3fb06b.jpg",
          "url": "claytown-store/product_large_clay_mug_with_handle_e4c539_1.jpg",
          "is_featured": false,
          "save_as_jpg": true,
          "is_public": true,
          "file_rename": false,
          "position": 1
        }
      ],
      "current_price": [
        {
          "NGN": [
            2200.0,
            null,
            []
          ]
        }
      ],
      "is_deleted": false,
      "available_quantity": 4.0,
      "selling_price": null,
      "discounted_price": null,
      "buying_price": null,
      "extra_infos": null
    },
    {
      "name": "Handcrafted Clay Salad Plate",
      "description": "Our Handcrafted Clay Salad Plate is a work of art that adds charm to your dining table. Each plate is unique, with subtle variations in texture and color that highlight its handmade nature. Ideal for serving salads, starters, or side dishes, it brings a rustic elegance to your meals. Its natural beauty makes it a wonderful addition to any kitchen collection.",
      "unique_id": "CL198204P",
      "url_slug": "handcrafted-clay-salad-plate",
      "is_available": true,
      "is_service": false,
      "previous_url_slugs": null,
      "unavailable": false,
      "unavailable_start": null,
      "unavailable_end": null,
      "id": "a79291c5a1fe4e6d916f0b46a7e4ae75",
      "parent_product_id": null,
      "parent": null,
      "organization_id": "0b6ed16b94a6481683bb601916709d07",
      "product_image": [],
      "categories": [],
      "date_created": "2024-07-13T14:15:57",
      "last_updated": "2024-07-13T14:16:08",
      "user_id": "bbeb01c4d940419fba69408f77148ea8",
      "photos": [
        {
          "model_name": "products",
          "model_id": "a79291c5a1fe4e6d916f0b46a7e4ae75",
          "organization_id": "0b6ed16b94a6481683bb601916709d07",
          "filename": "7af09edef02043d3ba0531d520f44cc1.jpg",
          "url": "claytown-store/product_handcrafted_clay_salad_plate_df2638_1.jpg",
          "is_featured": false,
          "save_as_jpg": true,
          "is_public": true,
          "file_rename": false,
          "position": 1
        }
      ],
      "current_price": [
        {
          "NGN": [
            2200.0,
            null,
            []
          ]
        }
      ],
      "is_deleted": false,
      "available_quantity": 4.0,
      "selling_price": null,
      "discounted_price": null,
      "buying_price": null,
      "extra_infos": null
    },
    {
      "name": "Clay Espresso Cup",
      "description": "Our Clay Espresso Cup is small but stylish, perfect for a shot of espresso or a mini dessert. Handcrafted with attention to detail, it offers a smooth finish and a comfortable grip. Its compact size and elegant design make it a delightful addition to your coffee routine. Enhance your espresso experience with this charming cup.",
      "unique_id": "CL198278P",
      "url_slug": "clay-espresso-cup",
      "is_available": true,
      "is_service": false,
      "previous_url_slugs": null,
      "unavailable": false,
      "unavailable_start": null,
      "unavailable_end": null,
      "id": "cd3754c813ac4b5ea69190d4708dc260",
      "parent_product_id": null,
      "parent": null,
      "organization_id": "0b6ed16b94a6481683bb601916709d07",
      "product_image": [],
      "categories": [],
      "date_created": "2024-07-13T14:27:39",
      "last_updated": "2024-07-13T14:27:51",
      "user_id": "bbeb01c4d940419fba69408f77148ea8",
      "photos": [
        {
          "model_name": "products",
          "model_id": "cd3754c813ac4b5ea69190d4708dc260",
          "organization_id": "0b6ed16b94a6481683bb601916709d07",
          "filename": "d05c9a1d284943a69f5d424da6c89492.jpg",
          "url": "claytown-store/product_clay_espresso_cup_07c784_1.jpg",
          "is_featured": false,
          "save_as_jpg": true,
          "is_public": true,
          "file_rename": false,
          "position": 1
        }
      ],
      "current_price": [
        {
          "NGN": [
            2500.0,
            null,
            []
          ]
        }
      ],
      "is_deleted": false,
      "available_quantity": 6.0,
      "selling_price": null,
      "discounted_price": null,
      "buying_price": null,
      "extra_infos": null
    },
  })

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!products) {
    return <div>Loading.........</div>;
  }

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
