import React, { useState } from 'react'

    function ProductCard({ product }) {
    
    const [stock, setStock] = useState(product.stock)

    
    const handleBuy = () => {
        if (stock > 0) {
        setStock(stock - 1)
        }
    }

    return (
        <div className="product-card">
        <h2>{product.name}</h2>
        <p className="price">${product.price}</p>
        <p>{product.description}</p>
        <p className={stock > 0 ? 'in-stock' : 'out-of-stock'}>
            {stock > 0 ? `En Stock: ${stock}` : 'Agotado'}
        </p>
        {/* Paso 2: Botón para disminuir la cantidad en stock */}
        <button className="buy-button" onClick={handleBuy} disabled={stock === 0}>
            {stock > 0 ? 'Comprar' : 'Agotado'}
        </button>
        </div>
    )
    }

export default ProductCard