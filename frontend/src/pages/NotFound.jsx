import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="not-found">
      <h2>404</h2>
      <p>Trang bạn tìm không tồn tại 😢</p>
      <Link to="/" className="btn">Về Trang Chủ</Link>
    </div>
  )
}

export default NotFound
