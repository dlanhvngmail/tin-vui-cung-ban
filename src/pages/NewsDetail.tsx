import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, Share2, BookmarkPlus, Eye } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import heroImage from "@/assets/hero-news.jpg";
import businessImage from "@/assets/business-news.jpg";
import techImage from "@/assets/tech-news.jpg";
import sportsImage from "@/assets/sports-news.jpg";

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - trong thực tế sẽ fetch từ API
  const newsData = {
    "1": {
      id: "1",
      title: "Công nghệ AI mới nhất đang thay đổi thế giới như thế nào",
      excerpt: "Những tiến bộ vượt bậc trong lĩnh vực trí tuệ nhân tạo đang mở ra những cơ hội mới và thách thức lớn cho nhân loại trong thế kỷ 21.",
      content: `
        <p>Trí tuệ nhân tạo (AI) đang trở thành một trong những công nghệ quan trọng nhất của thế kỷ 21, với tác động sâu rộng đến mọi khía cạnh của cuộc sống con người. Từ y tế, giáo dục đến giao thông và sản xuất, AI đang thay đổi cách chúng ta làm việc, học tập và tương tác với thế giới xung quanh.</p>

        <h3>Những ứng dụng đột phá trong y tế</h3>
        <p>Trong lĩnh vực y tế, AI đã cho thấy những kết quả ấn tượng trong việc chẩn đoán bệnh, phát hiện sớm ung thư và phát triển thuốc mới. Các thuật toán machine learning có thể phân tích hình ảnh y tế với độ chính xác cao hơn con người, giúp các bác sĩ đưa ra quyết định điều trị tốt hơn.</p>

        <h3>Tác động đến thị trường lao động</h3>
        <p>Trong khi AI mang lại nhiều lợi ích, nó cũng đặt ra những thách thức về việc làm. Nhiều công việc truyền thống có thể bị thay thế bởi máy móc thông minh, đòi hỏi lực lượng lao động phải tái đào tạo và thích ứng với những kỹ năng mới.</p>

        <h3>Tương lai của AI</h3>
        <p>Các chuyên gia dự đoán rằng trong 10 năm tới, AI sẽ trở nên phổ biến hơn và được tích hợp vào hầu hết các thiết bị và dịch vụ mà chúng ta sử dụng hàng ngày. Điều quan trọng là chúng ta cần phát triển AI một cách có trách nhiệm, đảm bảo nó phục vụ lợi ích chung của nhân loại.</p>
      `,
      image: heroImage,
      category: "Công nghệ",
      author: "Nguyễn Văn A",
      publishedAt: "2 giờ trước",
      views: "12,543",
      readTime: "5 phút đọc"
    },
    "2": {
      id: "2", 
      title: "Thị trường chứng khoán Việt Nam tăng trưởng mạnh trong quý III",
      excerpt: "Các chuyên gia phân tích cho rằng đây là dấu hiệu tích cực cho nền kinh tế trong giai đoạn phục hồi sau đại dịch.",
      content: `
        <p>Thị trường chứng khoán Việt Nam đã ghi nhận mức tăng trưởng ấn tượng trong quý III năm 2024, với VN-Index tăng hơn 15% so với đầu quý. Đây được coi là tín hiệu tích cực cho thấy niềm tin của nhà đầu tư đang dần phục hồi.</p>

        <h3>Những động lực tăng trưởng chính</h3>
        <p>Sự tăng trưởng này được thúc đẩy bởi nhiều yếu tố, bao gồm kết quả kinh doanh tích cực của các doanh nghiệp niêm yết, chính sách tiền tệ ổn định và dòng vốn ngoại tăng mạnh. Đặc biệt, các cổ phiếu ngân hàng và bất động sản đã có những bước tiến vượt bậc.</p>

        <h3>Triển vọng cho quý IV</h3>
        <p>Các chuyên gia dự báo thị trường sẽ tiếp tục duy trì xu hướng tích cực trong quý IV, với kỳ vọng VN-Index có thể đạt mức 1,300 điểm vào cuối năm. Tuy nhiên, nhà đầu tư cũng cần thận trọng với những biến động có thể xảy ra từ thị trường toàn cầu.</p>
      `,
      image: businessImage,
      category: "Kinh tế",
      author: "Trần Thị B",
      publishedAt: "4 giờ trước",
      views: "8,921",
      readTime: "3 phút đọc"
    }
  };

  const article = newsData[id as keyof typeof newsData];

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Không tìm thấy bài viết</h1>
          <Button onClick={() => navigate("/")} className="bg-news-primary hover:bg-news-primary/90">
            Quay về trang chủ
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-6 text-muted-foreground hover:text-news-primary"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại
          </Button>

          {/* Article header */}
          <article className="space-y-6">
            <div className="space-y-4">
              <Badge className="bg-news-primary/10 text-news-primary border-0 hover:bg-news-primary/20">
                {article.category}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl font-bold leading-tight text-news-dark">
                {article.title}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            {/* Article meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground py-4">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{article.publishedAt}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                <span>{article.views} lượt xem</span>
              </div>
              <div className="text-news-primary font-medium">
                {article.readTime}
              </div>
            </div>

            <Separator />

            {/* Article actions */}
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm" className="border-news-primary text-news-primary hover:bg-news-primary hover:text-white">
                  <Share2 className="h-4 w-4 mr-2" />
                  Chia sẻ
                </Button>
                <Button variant="outline" size="sm" className="border-news-primary text-news-primary hover:bg-news-primary hover:text-white">
                  <BookmarkPlus className="h-4 w-4 mr-2" />
                  Lưu bài viết
                </Button>
              </div>
            </div>

            {/* Featured image */}
            <div className="aspect-video overflow-hidden rounded-xl">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article content */}
            <div 
              className="prose prose-lg max-w-none mt-8 text-foreground prose-headings:text-news-dark prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-relaxed prose-p:mb-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Article footer */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-muted-foreground">Bài viết hữu ích?</span>
                  <Button variant="outline" size="sm" className="border-news-primary text-news-primary hover:bg-news-primary hover:text-white">
                    👍 Hữu ích
                  </Button>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm" className="border-news-primary text-news-primary hover:bg-news-primary hover:text-white">
                    <Share2 className="h-4 w-4 mr-2" />
                    Chia sẻ bài viết
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetail;