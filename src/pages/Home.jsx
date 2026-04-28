import { Link } from 'react-router-dom'

const featuredProducts = [
  { id: 1, name: 'Áo Thun Trắng', price: '150.000đ', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80' },
  { id: 2, name: 'Quần Jeans Xanh', price: '350.000đ', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&q=80' },
  { id: 3, name: 'Giày Sneaker', price: '500.000đ', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80' },
  { id: 4, name: 'Túi Xách', price: '200.000đ', img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300&q=80' },
]

function Home() {
  return (
    <div>
      <section className="banner">
        <h2>Chào mừng đến với MyShop!</h2>
        <p>Thời trang giá tốt, chất lượng cao</p>
        <Link to="/products" className="btn">Xem Sản Phẩm</Link>
      </section>

      <section className="products">
        <h2>Sản Phẩm Nổi Bật</h2>
        <div className="product-list">
          {featuredProducts.map((sp) => (
            <div className="product-card" key={sp.id}>
              <img src={sp.img} alt={sp.name} />
              <h3>{sp.name}</h3>
              <p className="price">{sp.price}</p>
              <button className="btn">Thêm vào giỏ</button>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link to="/products" className="btn">Xem tất cả sản phẩm →</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
