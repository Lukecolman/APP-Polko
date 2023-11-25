import React from 'react';

const ProductList = ({ products, onModify, onRemove }) => {
    const handleModify = (product, operation) => {
        if (operation === 'increment') {
            console.log('Incrementing product:', product);
            onModify(product, 'increment');
        } else if (operation === 'decrement' && product.quantity > 1) {
            console.log('Decrementing product:', product);
            onModify(product, 'decrement');
        }
    };

    const handleRemove = (product) => {
        onRemove(product);
    };

    return (
        <>
            <section className='productList-section '>
                <table>
                    <thead>
                        <tr>
                            <th className=' productList-th productList-t-wide tStart'>Producto</th>
                            <th className=' productList-t productList-t-narrow'>Cantidad</th>
                            <th className=' productList-t productList-t-narrow'>Subtotal</th>
                            <th className=' productList-t productList-t-narrow'>Total</th>
                            <th className=' productList-t productList-t-narrow'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.name}>
                                <td>
                                    <div className='productList-product-containter'>
                                        <div className='productList-product-img'>
                                            <img src={product.img} alt={product.name} className='rounded-full' />
                                        </div>
                                        <div>
                                            <div className=' productList-t'>{product.name}</div>
                                            <div className='productList-product-description'>{product.description}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-center  '>
                                    <div>
                                        <button onClick={() => handleModify(product, 'decrement')}>-</button>
                                        {product.quantity}
                                        <button onClick={() => handleModify(product, 'increment')}>+</button>
                                    </div>
                                </td>
                                <td className='productList-t '>${product.price}</td>
                                <td className='productList-t '>${product.quantity * product.price}</td>
                                <td className='td-cosito'>
                                    <button onClick={() => handleRemove(product)}>Remover</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default ProductList;
