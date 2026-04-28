function Contact() {
  return (
    <div className="page-content">
      <div className="page-hero">
        <h2>Liên Hệ</h2>
        <p>Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Thông tin liên hệ</h3>
          <p>📍 123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh</p>
          <p>📞 0901 234 567</p>
          <p>✉️ hello@myshop.vn</p>
          <p>🕐 Thứ 2 - Thứ 7: 8:00 - 21:00</p>
        </div>

        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Đã gửi thành công! Chúng tôi sẽ phản hồi sớm.') }}>
          <h3>Gửi tin nhắn</h3>
          <input type="text" placeholder="Họ và tên" required />
          <input type="email" placeholder="Email của bạn" required />
          <textarea placeholder="Nội dung tin nhắn..." rows={5} required />
          <button type="submit" className="btn">Gửi tin nhắn</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
