import React, { useState } from 'react';
import { stock } from '../../constants/stock.js';

const AddProductForm = ({ onAdd }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        // Cuando se hace clic en un producto, establece ese producto como seleccionado
        setSelectedProduct(product);

        // Llama a la función onAdd con el producto seleccionado
        if (product) {
            onAdd(product);
            console.log('Producto agregado:', product);
        }
    };

    return (
        <>
            <section>
                {stock.map((product) => (
                    <div
                        key={product.name}
                        className='addProductForm-container'
                        onClick={() => handleProductClick(product)}>
                        <div className='addProductForm-subcontainer'>
                            <div className='addProductForm-imgContainer'>
                                <img src={product.img} alt={product.name} className='addProductForm-img' />
                            </div>
                            <div className='addProductForm-textContainer'>
                                <div className='productForm-mainText'>
                                    <div>{product.name}</div>
                                    <div>${product.price}</div>
                                </div>
                                <div className='productForm-subText'>{product.description}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};

export default AddProductForm;
