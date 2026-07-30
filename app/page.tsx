import Header from "./components/Header";
import ProductsSection from "./components/ProductsSection";

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero" id="home">
        <img src="/hero-bg.jpg" className="hero-img" alt="Hero Image" />
        <div className="container-wide">
          <div className="hero-content">
            <h1>
              PT. TEKNIK DEWA ARTHA
              <span>Solusi Rekayasa Industri Terpercaya</span>
            </h1>
            <p>
              Menyediakan komponen teknik berkualitas tinggi dan layanan
              rekayasa presisi untuk mendukung operasional industri manufaktur,
              pertambangan, dan energi di seluruh Indonesia. Kami adalah toko
              alat industri Surabaya dan Sidoarjo yang menjual alat industri
              berkualitas seperti gasket, fitting, valve, plat, pipa, dan
              sparepart teknik.
            </p>
            <div className="hero-actions">
              <a href="#products" className="btn btn-primary">
                Lihat Produk →
              </a>
              <a href="#contact" className="btn btn-outline">
                Konsultasi Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container about-grid">
          <div className="about-text">
            <span className="eyebrow">TENTANG KAMI</span>
            <h2>Pendahuluan</h2>
            <p>
              Membahas mengenai awal mulai perjalanan perusahaan karir kami
              dimulai, seiringan dengan perspektif kami terhadap lajur
              perputaran barang-barang industri yang semakin meningkat. Melalui
              perkembangan zona industri yang pesat dalam efektifitas dan
              efisiensinya, CV. TEKNIK DEWA ARTHA berdiri guna ikut serta untuk
              ambil bagian dalam pemenuhan kebutuhan dalam segala bidang
              industri maupun pembangunan umum.
            </p>
            <div className="vm-grid">
              <div className="vm-card">
                <div className="vm-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3>Visi CV. Teknik Dewa Artha</h3>
                <p>
                  Kami selalu berusaha untuk meningkatkan efisiensi dan
                  efektifitas perusahaan untuk menjadi mitra yang handal dan
                  profesional demi mewujudkan kepuasan pelanggan.
                </p>
                <p>
                  Senantiasa memenuhi seluruh ragam jenis barang permintaan
                  pelanggan, sehingga menjadikan perusahaan kami sebagai
                  &quot;one stop shopping&quot; segala jenis keperluan
                  perindustrian dan pembangunan umum.
                </p>
              </div>
              <div className="vm-card">
                <div className="vm-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2l1.5 6L20 6l-4 5 4 5-6.5-2L12 20l-1.5-6L4 16l4-5-4-5 6.5 2z" />
                  </svg>
                </div>
                <h3>Misi CV. Teknik Dewa Artha</h3>
                <ul>
                  <li>
                    Secara berkala meningkatkan performa dalam sistem manajemen.
                  </li>
                  <li>
                    Menjalin hubungan kerjasama yang baik dan berkelanjutan
                    dengan mitra perusahaan/konsumen dibidangnya.
                  </li>
                  <li>
                    Memenuhi kebutuhan sparepart/mengerjakan produk custom
                    dengan menjaga hasil kualitas kerja dan ketepatan waktu.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="about-media">
            <div className="about-photo">
              <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="500" fill="url(#g1)" />
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#3a5a7c" />
                    <stop offset="1" stopColor="#0f2440" />
                  </linearGradient>
                </defs>
                <g opacity="0.5" stroke="#cfe0f4" strokeWidth="2">
                  <line x1="20" y1="60" x2="380" y2="60" />
                  <line x1="20" y1="140" x2="380" y2="140" />
                  <line x1="60" y1="60" x2="60" y2="500" />
                  <line x1="340" y1="60" x2="340" y2="500" />
                </g>
                <circle
                  cx="200"
                  cy="230"
                  r="70"
                  fill="none"
                  stroke="#e7edf5"
                  strokeWidth="4"
                  opacity="0.7"
                />
                <rect
                  x="150"
                  y="300"
                  width="100"
                  height="130"
                  rx="6"
                  fill="#e7edf5"
                  opacity="0.85"
                />
                <rect
                  x="165"
                  y="320"
                  width="70"
                  height="10"
                  rx="3"
                  fill="#16375c"
                />
                <rect
                  x="165"
                  y="340"
                  width="70"
                  height="10"
                  rx="3"
                  fill="#16375c"
                />
                <rect
                  x="165"
                  y="360"
                  width="45"
                  height="10"
                  rx="3"
                  fill="#16375c"
                />
              </svg>
            </div>
            <div className="exp-badge">
              <div className="num">10+</div>
              <div className="lbl">TAHUN PENGALAMAN</div>
            </div>
          </div>
        </div>
      </section>

      {/* LEGALITAS */}
      {/* <section className="legal-section" id="legality">
        <div className="container">
          <div className="legal-head">
            <h2>Legalitas Perusahaan</h2>
            <p>
              Kami mengutamakan transparansi dan kepatuhan hukum untuk menjamin
              keamanan dan kepercayaan setiap kemitraan bisnis.
            </p>
            <div className="rule"></div>
          </div>
          <div className="legal-grid">
            <div className="legal-card">
              <div className="legal-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
                </svg>
              </div>
              <div>
                <h3>Akta Pendirian</h3>
                <p>
                  No 01 tanggal 01 Juli 2025, Notaris Andiny Rachmadani
                  Ekaputri, S.H., M.Kn.
                </p>
              </div>
            </div>
            <div className="legal-card">
              <div className="legal-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <line x1="14" y1="14" x2="21" y2="21" />
                  <line x1="21" y1="14" x2="14" y2="21" />
                </svg>
              </div>
              <div>
                <h3>Nomor NIB</h3>
                <div className="legal-nib">0407250078453</div>
              </div>
            </div>
            <div className="legal-card">
              <div className="legal-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <line x1="8" y1="13" x2="16" y2="13" />
                  <line x1="8" y1="17" x2="16" y2="17" />
                </svg>
              </div>
              <div>
                <h3>Nomor NPWP</h3>
                <div className="legal-nib">1000 0000 0359 6548</div>
              </div>
            </div>
            <div className="legal-card">
              <div className="legal-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                </svg>
              </div>
              <div>
                <h3>Nomor SKT</h3>
                <div className="legal-nib">AHU-0057037-AH.01.14 Tahun 2025</div>
              </div>
            </div>
            <div className="legal-card legal-card-8">
              <div className="legal-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                  <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </div>
              <div>
                <h3>Bidang Usaha</h3>
                <p>
                  Pipes, fitting, valve, aksesoris pendukung industrial,
                  wiremesh, fab. gasket / seal / mechanical seal, plat,
                  stainless, kuningan, besi, pemipaan jalur minyak / air /
                  pengkabelan, alat teknik, alat mekanikal, aksesoris SPBU.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* PRODUCTS */}
      <ProductsSection />

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Hubungi Kami</h2>
            <p>
              Tim teknis kami siap membantu memberikan solusi terbaik untuk
              kebutuhan industri Anda. Silakan hubungi kami melalui saluran
              berikut.
            </p>

            <div className="contact-item">
              <div className="contact-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4>Alamat Kantor</h4>
                <p>
                  JL. H. Syukur III No. 60 Sedati Sidoarjo, Jawa Timur -
                  Indonesia
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.79.6 2.65a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.43-1.43a2 2 0 0 1 2.11-.45c.86.28 1.75.48 2.65.6A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h4>Telepon</h4>
                <p>0856 4846 8999</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                >
                  <path d="M4 4h16v16H4z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <p>cvteknikdewaartha@yahoo.com</p>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              src="https://maps.google.com/maps?q=JL.%20H.%20Syukur%20III%20No.%2060%20Sedati%20Sidoarjo%2C%20Jawa%20Timur%20-%20Indonesia&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Lokasi Kantor PT. Teknik Dewa Artha"
            ></iframe>
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="wa-section">
        <h2>Butuh bantuan cepat?</h2>
        <p>
          Konsultasikan kebutuhan teknis industri Anda secara langsung dengan
          ahli kami melalui WhatsApp.
        </p>
        <a
          href="https://wa.me/6285648468999"
          target="_blank"
          className="wa-btn"
          rel="noreferrer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.4 5.13L2 22l5.13-1.49a9.87 9.87 0 0 0 4.91 1.31c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.72 14.13c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.03.26-3.4-.71-2.86-1.18-4.7-4.07-4.84-4.26-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.56-.35.75-.35h.54c.17 0 .4-.06.63.48.24.56.8 1.95.87 2.09.07.14.12.31.02.5-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.17-.21.71-.83.9-1.11.19-.29.38-.24.63-.14.26.1 1.65.78 1.93.92.29.14.48.21.55.33.07.12.07.71-.17 1.39z" />
          </svg>
          Chat via WhatsApp
        </a>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/6285648468999"
        target="_blank"
        className="wa-float"
        aria-label="Chat via WhatsApp"
        rel="noreferrer"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.4 5.13L2 22l5.13-1.49a9.87 9.87 0 0 0 4.91 1.31c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.72 14.13c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.03.26-3.4-.71-2.86-1.18-4.7-4.07-4.84-4.26-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.56-.35.75-.35h.54c.17 0 .4-.06.63.48.24.56.8 1.95.87 2.09.07.14.12.31.02.5-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.17-.21.71-.83.9-1.11.19-.29.38-.24.63-.14.26.1 1.65.78 1.93.92.29.14.48.21.55.33.07.12.07.71-.17 1.39z" />
        </svg>
      </a>

      <footer>
        <div className="container footer-inner">
          <div className="footer-left">
            <div className="fname">TEKNIK DEWA ARTHA</div>
            <div className="copy">
              © 2024 PT. TEKNIK DEWA ARTHA. All rights reserved.
            </div>
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Compliance</a>
          </div>
          <div className="footer-social">
            <span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
                <line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
              </svg>
            </span>
            <span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
