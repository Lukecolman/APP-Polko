import React, { useState } from 'react';
import { ProductList, AddProductForm, CheckoutTotal } from './components';

const App = () => {
    const [products, setProducts] = useState([]);

    const handleAdd = (selectedProduct) => {
        const existingProduct = products.find((product) => product.name === selectedProduct.name);

        if (existingProduct) {
            // Si el producto ya existe, actualiza la cantidad
            const updatedProducts = products.map((product) =>
                product.name === selectedProduct.name ? { ...product, quantity: product.quantity + 1 } : product
            );
            setProducts(updatedProducts);
        } else {
            // Si el producto no existe, agrégalo al inventario con cantidad 1
            setProducts([...products, { ...selectedProduct, quantity: 1 }]);
        }
    };

    const handleModify = (selectedProduct, operation) => {
        // Encuentra el índice del producto en el array
        const index = products.findIndex((product) => product.name === selectedProduct.name);

        if (index !== -1) {
            const updatedProducts = [...products];

            // Modifica la cantidad según la operación
            if (operation === 'increment') {
                updatedProducts[index].quantity += 1;
            } else if (operation === 'decrement' && updatedProducts[index].quantity > 1) {
                updatedProducts[index].quantity -= 1;
            }

            // Actualiza el estado con el nuevo array de productos
            setProducts(updatedProducts);
        }
    };

    const handleRemove = (selectedProduct) => {
        // Lógica para quitar un producto del inventario
        const updatedProducts = products.filter((product) => product.name !== selectedProduct.name);
        setProducts(updatedProducts);
    };

    // Calcular el total de productos y el precio total
    const totalProducts = products.reduce((total, product) => total + product.quantity, 0);
    const totalPrice = products.reduce((total, product) => total + product.quantity * product.price, 0);

    return (
        <>
            <section className='app-section '>
                <div className='section-container '>
                    {/* LIST */}

                    <div className='bg-c1 list-container'>
                        <div className='list-subcontainer'>
                            <div className='titles'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className=' fill-white mt-1'
                                    id='Layer_1'
                                    data-name='Layer 1'
                                    viewBox='0 0 24 24'
                                    width='18'
                                    height='18'>
                                    <path d='M24,8L21.754,0H2.246L0,8c0,1.012,.378,1.937,1,2.643v10.357c0,1.654,1.346,3,3,3H12c1.654,0,3-1.346,3-3V11.463c.376-.218,.714-.496,1-.82,.733,.832,1.806,1.357,3,1.357h1c.345,0,.68-.044,1-.127v12.127h2V10.643c.622-.705,1-1.631,1-2.643Zm-12,14H4c-.551,0-1-.449-1-1v-3H13v3c0,.551-.449,1-1,1Zm1-6H3v-4.127c.32,.083,.655,.127,1,.127h1c1.194,0,2.266-.526,3-1.357,.734,.832,1.806,1.357,3,1.357h2v4Zm6-6c-1.103,0-2-.897-2-2h-2c0,1.103-.897,2-2,2h-2c-1.103,0-2-.897-2-2h-2c0,1.103-.897,2-2,2h-1c-1.061,0-1.931-.83-1.996-1.874L3.754,2h3.246v3h2V2h6v3h2V2h3.246l1.75,6.126c-.065,1.044-.936,1.874-1.996,1.874h-1Z' />
                                </svg>

                                <h2>Lista de Compras</h2>
                            </div>
                            <AddProductForm onAdd={handleAdd} />
                        </div>
                    </div>

                    <div className='cart-checkout-container'>
                        {/* CART */}
                        <div className='bg-c2 cart-container'>
                            <div className='cart-subcontainter '>
                                <div className=' titles pb-5'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className=' fill-white mt-1'
                                        id='Outline'
                                        viewBox='0 0 24 24'
                                        width='18'
                                        height='18'>
                                        <path d='M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z' />
                                        <circle cx='7' cy='22' r='2' />
                                        <circle cx='17' cy='22' r='2' />
                                    </svg>
                                    Carrito
                                </div>
                            </div>
                            <ProductList products={products} onModify={handleModify} onRemove={handleRemove} />
                        </div>

                        {/* CHECKOUT */}
                        <div className='bg-c2 checkout-container'>
                            <div className='titles checkout-subcontainer '>
                                <span>Checkout</span>
                                <CheckoutTotal totalProducts={totalProducts} totalPrice={totalPrice} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default App;
