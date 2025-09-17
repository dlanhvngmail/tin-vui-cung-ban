import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import Sidebar from "@/components/Sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock } from "lucide-react";

import heroImage from "@/assets/hero-news.jpg";
import businessImage from "@/assets/business-news.jpg";
import techImage from "@/assets/tech-news.jpg";
import sportsImage from "@/assets/sports-news.jpg";

const Index = () => {
  const featuredNews = {
    title: "Công nghệ AI mới nhất đang thay đổi thế giới như thế nào",
    excerpt: "Những tiến bộ vượt bậc trong lĩnh vực trí tuệ nhân tạo đang mở ra những cơ hội mới và thách thức lớn cho nhân loại trong thế kỷ 21.",
    image: heroImage,
    category: "Công nghệ",
    author: "Nguyễn Văn A",
    publishedAt: "2 giờ trước"
  };

  const newsData = [
    {
      title: "Thị trường chứng khoán Việt Nam tăng trưởng mạnh trong quý III",
      excerpt: "Các chuyên gia phân tích cho rằng đây là dấu hiệu tích cực cho nền kinh tế trong giai đoạn phục hồi sau đại dịch.",
      image: businessImage,
      category: "Kinh tế",
      author: "Trần Thị B",
      publishedAt: "4 giờ trước"
    },
    {
      title: "Breakthrough mới trong công nghệ chip semiconductor",
      excerpt: "Các nhà khoa học đã phát triển thành công chip mới với hiệu suất vượt trội và tiêu thụ năng lượng thấp hơn 40%.",
      image: techImage,
      category: "Công nghệ",
      author: "Lê Văn C",
      publishedAt: "6 giờ trước"
    },
    {
      title: "World Cup 2024: Đội tuyển Việt Nam chuẩn bị cho trận đấu quan trọng",
      excerpt: "HLV Park Hang-seo đã có những chiến lược mới để chuẩn bị cho trận đấu quyết định tại vòng loại World Cup.",
      image: sportsImage,
      category: "Thể thao",
      author: "Phạm Thị D",
      publishedAt: "8 giờ trước"
    },
    {
      title: "Chính sách mới về môi trường được Chính phủ thông qua",
      excerpt: "Luật mới sẽ có hiệu lực từ đầu năm 2025, nhằm tăng cường bảo vệ môi trường và phát triển bền vững.",
      image: businessImage,
      category: "Chính trị",
      author: "Hoàng Văn E",
      publishedAt: "10 giờ trước"
    },
    {
      title: "Startup Việt Nam nhận được đầu tư 50 triệu USD",
      excerpt: "Công ty công nghệ tài chính này đã thu hút được sự chú ý của các nhà đầu tư quốc tế với giải pháp thanh toán sáng tạo.",
      image: techImage,
      category: "Kinh doanh",
      author: "Vũ Thị F",
      publishedAt: "12 giờ trước"
    },
    {
      title: "Giải pháp mới cho vấn đề giao thông đô thị",
      excerpt: "Hệ thống giao thông thông minh được triển khai thí điểm tại TP.HCM, hứa hẹn giảm 30% thời gian di chuyển.",
      image: sportsImage,
      category: "Xã hội",
      author: "Đặng Văn G",
      publishedAt: "1 ngày trước"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breaking News Banner */}
      <div className="bg-gradient-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-[slide-in-right_3s_ease-in-out_infinite]"></div>
        <div className="container py-3 relative z-10">
          <div className="flex items-center space-x-3">
            <Badge className="bg-white/20 text-white border-0 animate-bounce shadow-accent">NÓNG</Badge>
            <div className="flex items-center space-x-2 text-sm">
              <TrendingUp className="h-4 w-4 animate-pulse" />
              <span className="font-medium">Tin nóng:</span>
              <span>Chính phủ công bố gói hỗ trợ kinh tế mới trị giá 10 tỷ USD</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white/20 to-transparent"></div>
      </div>

      <main className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Featured News */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-news-dark">Tin nổi bật</h2>
                <Button variant="outline" className="border-news-primary text-news-primary hover:bg-news-primary hover:text-white">
                  Xem tất cả
                </Button>
              </div>
              <NewsCard {...featuredNews} featured />
            </section>

            {/* Latest News */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-news-dark">Tin tức mới nhất</h2>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Cập nhật: {new Date().toLocaleTimeString('vi-VN')}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {newsData.map((news, index) => (
                  <NewsCard key={index} {...news} />
                ))}
              </div>
            </section>

            {/* Load More */}
            <div className="text-center pt-8">
              <Button className="bg-gradient-to-r from-news-primary to-news-primary-dark hover:shadow-glow hover:scale-105 transition-all duration-300 text-white px-8 relative overflow-hidden group">
                <span className="relative z-10">Tải thêm tin tức</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
