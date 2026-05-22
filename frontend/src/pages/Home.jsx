import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllProducts, formatPrice } from '../services/productService'

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchFeatured() {
      try {
        const data = await getAllProducts()
        setFeaturedProducts(data.slice(0, 4))
      } catch (err) {
        setError('Không thể tải sản phẩm nổi bật.')
        console.error('Lỗi khi tải sản phẩm nổi bật:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchFeatured()
  }, [])

  return (
    <div>
      <section className="banner">
        <h2>Chào mừng đến với MyShop!</h2>
        <p>Thời trang giá tốt, chất lượng cao</p>
        <Link to="/products" className="btn">Xem Sản Phẩm</Link>
      </section>

      <section className="products">
        <h2>Sản Phẩm Nổi Bật</h2>

        {loading && (
          <p style={{ textAlign: 'center', padding: '40px', color: '#888' }}>Đang tải sản phẩm...</p>
        )}

        {error && (
          <p style={{ textAlign: 'center', padding: '40px', color: '#e44d26' }}>{error}</p>
        )}

        {!loading && !error && (
          <div className="product-list">
            {featuredProducts.map((sp) => (
              <div className="product-card" key={sp.id}>
                <img src={sp.imageUrl} alt={sp.name} />
                <h3>{sp.name}</h3>
                <p className="price">{formatPrice(sp.price)}</p>
                <button className="btn">Thêm vào giỏ</button>
              </div>
            ))}
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link to="/products" className="btn">Xem tất cả sản phẩm →</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
