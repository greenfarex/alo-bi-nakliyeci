import './App.css'
import logo from './assets/logo.png'
import ducato from './assets/ducato2.png'
const trackWhatsApp = (location) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', {
      button_location: location,
    })
  }
}

function App() {
  return (
    <div className="site">

      {/* HEADER */}
      <header className="header">
        <div className="container header-inner">

          <a href="/" className="logo">
            <img src={logo} alt="Alo bi nakliyeci" />
          </a>

          <nav className="nav">
            <a href="#anasayfa">Ana Sayfa</a>
            <a href="#hizmetler">Hizmetlerimiz</a>
            <a href="#neden-biz">Neden Biz?</a>
            <a href="#iletisim">İletişim</a>
          </nav>

          <a href="#iletisim" className="header-button">
            Teklif Al
          </a>

        </div>
      </header>


      {/* ANA İÇERİK */}
      <main>

        {/* HERO */}
        <section className="hero" id="anasayfa">
          <div className="container hero-content">

            <div className="hero-text">

              <div className="badge">
                🚚 İstanbul & Türkiye Geneli
              </div>

              <h1>
                Yükünüzü <span>Güvenle</span><br />
                Taşıyoruz.
              </h1>

              <p>
                İstanbul'dan Türkiye'nin her yerine parça eşya,
                paletli yük, motosiklet ve şehirler arası nakliye
                hizmeti.
              </p>

              <div className="hero-buttons">

                <a href="#iletisim" className="primary-button">
                  Hemen Teklif Al →
                </a>

                <a
                  href="https://wa.me/905342359168?text=Merhaba%2C%20Alo%20Bi%20Nakliyeci%27den%20nakliye%20fiyat%C4%B1%20almak%20istiyorum.%0A%0ANereden%3A%20%0ANereye%3A%20%0AY%C3%BCk%C3%BCn%20t%C3%BCr%C3%BC%3A"
                  className="whatsapp-button"
                >
                  WhatsApp'tan Teklif Al
                </a>

              </div>

              <div className="hero-features">

                <div>
                  <strong>✓</strong>
                  Zamanında Teslimat
                </div>

                <div>
                  <strong>✓</strong>
                  Güvenli Taşıma
                </div>

                <div>
                  <strong>✓</strong>
                  Hızlı Teklif
                </div>

              </div>

            </div>


            {/* HERO ARAÇ */}
            <div className="hero-visual">

              <div className="orange-circle"></div>

              <div className="vehicle-card">

                <img
                  src={ducato}
                  alt="Fiat Ducato nakliye aracı"
                  className="hero-truck"
                />

              </div>

              <div className="floating-card">

                <span className="check-icon">
                  ✓
                </span>

                <div>
                  <strong>Güvenli Taşıma</strong>
                  <small>Profesyonel hizmet</small>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* HİZMETLER */}
        <section className="services" id="hizmetler">
          <div className="container">

            <div className="section-heading">

              <span>HİZMETLERİMİZ</span>

              <h2>
                İhtiyacınıza uygun taşıma çözümleri
              </h2>

              <p>
                Yükünüz ne olursa olsun, doğru araç ve doğru planlama
                ile güvenli şekilde taşıyoruz.
              </p>

            </div>


            <div className="service-grid">

              <div className="service-card">

                <div className="service-icon">
                  📦
                </div>

                <h3>
                  Parça Eşya Taşıma
                </h3>

                <p>
                  Az miktardaki eşyalarınızı güvenli şekilde
                  istediğiniz adrese ulaştırıyoruz.
                </p>

              </div>


              <div className="service-card">

                <div className="service-icon">
                  🚚
                </div>

                <h3>
                  Şehirler Arası Nakliye
                </h3>

                <p>
                  İstanbul'dan Türkiye'nin birçok noktasına
                  şehirler arası taşıma hizmeti.
                </p>

              </div>


              <div className="service-card">

                <div className="service-icon">
                  🏗️
                </div>

                <h3>
                  Paletli Yük Taşıma
                </h3>

                <p>
                  İşletmelerinizin paletli ve ticari yüklerini
                  güvenle taşıyoruz.
                </p>

              </div>


              <div className="service-card">

                <div className="service-icon">
                  🏍️
                </div>

                <h3>
                  Motosiklet Taşıma
                </h3>

                <p>
                  Motosikletlerinizi güvenli taşıma yöntemleriyle
                  adresinden teslim alıyoruz.
                </p>

              </div>


              <div className="service-card">

                <div className="service-icon">
                  🛋️
                </div>

                <h3>
                  Mobilya & Çeyiz
                </h3>

                <p>
                  Mobilya, beyaz eşya ve çeyiz eşyalarınızı
                  özenle taşıyoruz.
                </p>

              </div>


              <div className="service-card">

                <div className="service-icon">
                  🚗
                </div>

                <h3>
                  Motor & Araç Transferi
                </h3>

                <p>
                  Araç ve motor transfer ihtiyaçlarınız için
                  güvenilir taşıma hizmeti.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* NEDEN BİZ */}
        <section className="why-us" id="neden-biz">

          <div className="container why-grid">

            <div>

              <span className="section-label">
                NEDEN ALO Bİ NAKLİYECİ?
              </span>

              <h2>
                Sadece taşımıyoruz,<br />
                <span>işinizi kolaylaştırıyoruz.</span>
              </h2>

              <p>
                Taşıma sürecini başından sonuna kadar planlıyor,
                yükünüze uygun araçla güvenli ve zamanında teslimat
                sağlıyoruz.
              </p>

            </div>


            <div className="advantages">

              <div className="advantage">

                <span>01</span>

                <div>

                  <h3>
                    Hızlı Teklif
                  </h3>

                  <p>
                    Bilgilerinizi alın, size kısa sürede fiyat verelim.
                  </p>

                </div>

              </div>


              <div className="advantage">

                <span>02</span>

                <div>

                  <h3>
                    Doğru Araç
                  </h3>

                  <p>
                    Yükünüze uygun araç ile taşıma gerçekleştiriyoruz.
                  </p>

                </div>

              </div>


              <div className="advantage">

                <span>03</span>

                <div>

                  <h3>
                    Güvenli Teslimat
                  </h3>

                  <p>
                    Yükünüzü adresinden teslim alıp güvenle ulaştırıyoruz.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* İLETİŞİM */}
        <section className="contact" id="iletisim">

          <div className="container">

            <div className="contact-box">

              <div>

                <span>
                  TAŞIMA İHTİYACINIZ MI VAR?
                </span>

                <h2>
                  Nereden nereye?
                  <br />
                  Hemen fiyat alın.
                </h2>

                <p>
                  Yükünüzü, başlangıç ve varış noktanızı WhatsApp
                  üzerinden bize gönderin.
                </p>

              </div>

              <a
                href="https://wa.me/905342359168?text=Merhaba%2C%20Alo%20Bi%20Nakliyeci%27den%20nakliye%20fiyat%C4%B1%20almak%20istiyorum.%0A%0ANereden%3A%20%0ANereye%3A%20%0AY%C3%BCk%C3%BCn%20t%C3%BCr%C3%BC%3A"
                className="contact-button"
              >
                WhatsApp'tan Teklif Al →
              </a>

            </div>

          </div>

        </section>

      </main>

      <a
        href="https://wa.me/905342359168?text=Merhaba%2C%20Alo%20Bi%20Nakliyeci%27den%20nakliye%20fiyat%C4%B1%20almak%20istiyorum.%0A%0ANereden%3A%20%0ANereye%3A%20%0AY%C3%BCk%C3%BCn%20t%C3%BCr%C3%BC%3A"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          right: "25px",
          bottom: "25px",
          zIndex: 999999,
          background: "#198754",
          color: "white",
          padding: "14px 20px",
          borderRadius: "50px",
          fontWeight: "800",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        WhatsApp ↗
      </a>
      {/* FOOTER */}
      <footer className="footer">

        <div className="container footer-inner">

          <div>

            <strong>
              ALO Bİ NAKLİYECİ
            </strong>

            <p>
              İstanbul & Türkiye Geneli Nakliye
            </p>

          </div>

          <p>
            © 2026 Alo bi nakliyeci. Tüm hakları saklıdır.
          </p>

        </div>

      </footer>

    </div>
  )
}

export default App
