import './App.css'

function App() {

  const products = [
    { id: 1, name: 'Áo Thun Trắng', price: '150.000đ', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80' },
    { id: 2, name: 'Quần Jeans Xanh', price: '350.000đ', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&q=80' },
    { id: 3, name: 'Giày Sneaker', price: '500.000đ', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80' },
    { id: 4, name: 'Túi Xách', price: '200.000đ', img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300&q=80' },
  ]

  return (
    <div>

      <header className="navbar">
        <h1 className="logo">MyShop</h1>
        <nav>
          <a href="#">Trang Chủ</a>
          <a href="#">Sản Phẩm</a>
          <a href="#">Liên Hệ</a>
        </nav>
      </header>

      <section className="banner">
        <h2>Chào mừng đến với MyShop!</h2>
        <p>Thời trang giá tốt, chất lượng cao</p>
        <button className="btn">Mua ngay tại đây</button>
      </section>

      <section className="products">
        <h2>Sản Phẩm Nổi Bật</h2>

        <div className="product-list">
          {products.map((sanPham) => (
            <div className="product-card" key={sanPham.id}>
              <img src={sanPham.img} alt={sanPham.name} />
              <h3>{sanPham.name}</h3>
              <p className="price">{sanPham.price}</p>
              <button className="btn">Thêm vào giỏ</button>
            </div>
          ))}
        </div>

      </section>

      <footer className="footer">
        <p>© 2025 MyShop - Tất cả quyền được bảo lưu</p>
      </footer>

    </div>
  )
}

export default App
