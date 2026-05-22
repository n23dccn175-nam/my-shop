import { useState, useEffect } from 'react'
import { getAllProducts, formatPrice } from '../services/productService'

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getAllProducts()
        setProducts(data)
      } catch (err) {
        setError('Không thể tải danh sách sản phẩm. Vui lòng thử lại sau.')
        console.error('Lỗi khi tải sản phẩm:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) {
    return (
      <section className="products">
        <h2>Tất Cả Sản Phẩm</h2>
        <p style={{ textAlign: 'center', padding: '40px', color: '#888' }}>Đang tải sản phẩm...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="products">
        <h2>Tất Cả Sản Phẩm</h2>
        <p style={{ textAlign: 'center', padding: '40px', color: '#e44d26' }}>{error}</p>
      </section>
    )
  }

  return (
    <section className="products">
      <h2>Tất Cả Sản Phẩm</h2>
      <div className="product-list">
        {products.map((sp) => (
          <div className="product-card" key={sp.id}>
            <img src={sp.imageUrl} alt={sp.name} />
            <span className="category-badge">{sp.category}</span>
            <h3>{sp.name}</h3>
            <p className="price">{formatPrice(sp.price)}</p>
            <button className="btn">Thêm vào giỏ</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products
