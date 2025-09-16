import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-news-dark text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-news-primary to-news-secondary">
                <span className="text-lg font-bold text-white">TT</span>
              </div>
              <span className="text-xl font-bold">Tin Tức 24h</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Mang đến cho bạn những tin tức nhanh chóng, chính xác và đáng tin cậy từ khắp nơi trên thế giới.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-news-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-news-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-news-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
            <div className="space-y-2">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Về chúng tôi</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Liên hệ</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Chính sách bảo mật</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Điều khoản sử dụng</a>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-white/80">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@tintuc24h.com</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+84 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Hà Nội, Việt Nam</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Tin Tức 24h. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;