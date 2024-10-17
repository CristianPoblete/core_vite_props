import React from 'react'
import Navigation from './components/Navigation'
import ProductList from './components/ProductList'
import './App.css'  

const products = [
  { id: 1, name: 'Laptop', price: 1500, description: 'Una potente laptop para trabajar y jugar.', stock: 10 },
  { id: 2, name: 'Smartphone', price: 800, description: 'Un smartphone de última generación con una de las mejores cámaras.', stock: 0 },
  { id: 3, name: 'Auriculares', price: 200, description: 'Auriculares con cancelación de ruido. No escucharás nada a tu alrededor.', stock: 5 },
  { id: 4, name: 'Monitor', price: 300, description: 'Monitor 4K para una experiencia visual increíble.', stock: 7 },
]

function App() {
  return (
    <div className="app">
      <Navigation />
      <h1>TechStore - Tu Destino para la Mejor Tecnología</h1>
      <ProductList products={products} />
    </div>
  )
}

export default App