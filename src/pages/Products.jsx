const allProducts = [
  { id: 1, name: 'Áo Thun Trắng', price: '150.000đ', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80', category: 'Áo' },
  { id: 2, name: 'Quần Jeans Xanh', price: '350.000đ', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&q=80', category: 'Quần' },
  { id: 3, name: 'Giày Sneaker', price: '500.000đ', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80', category: 'Giày' },
  { id: 4, name: 'Túi Xách', price: '200.000đ', img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300&q=80', category: 'Phụ kiện' },
  { id: 5, name: 'Áo Khoác Denim', price: '450.000đ', img: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=300&q=80', category: 'Áo' },
  { id: 6, name: 'Quần Shorts', price: '180.000đ', img: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=300&q=80', category: 'Quần' },
  { id: 7, name: 'Mũ Lưỡi Trai', price: '120.000đ', img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&q=80', category: 'Phụ kiện' },
  { id: 8, name: 'Giày Sandal', price: '280.000đ', img: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=300&q=80', category: 'Giày' },
]

function Products() {
  return (
    <section className="products">
      <h2>Tất Cả Sản Phẩm</h2>
      <div className="product-list">
        {allProducts.map((sp) => (
          <div className="product-card" key={sp.id}>
            <img src={sp.img} alt={sp.name} />
            <span className="category-badge">{sp.category}</span>
            <h3>{sp.name}</h3>
            <p className="price">{sp.price}</p>
            <button className="btn">Thêm vào giỏ</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products
