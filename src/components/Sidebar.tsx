import { TrendingUp, Users, Globe, Laptop, Trophy, Heart } from "lucide-react";

const categories = [
  { name: "Tin nổi bật", icon: TrendingUp, color: "text-news-primary" },
  { name: "Thế giới", icon: Globe, color: "text-blue-500" },
  { name: "Kinh tế", icon: TrendingUp, color: "text-green-500" },
  { name: "Công nghệ", icon: Laptop, color: "text-purple-500" },
  { name: "Thể thao", icon: Trophy, color: "text-orange-500" },
  { name: "Sức khỏe", icon: Heart, color: "text-red-500" },
  { name: "Xã hội", icon: Users, color: "text-indigo-500" },
];

const Sidebar = () => {
  return (
    <aside className="space-y-6">
      {/* Categories */}
      <div className="rounded-lg bg-white p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-news-dark mb-4">Chuyên mục</h3>
        <div className="space-y-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <a
                key={index}
                href="#"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-news-neutral transition-colors group"
              >
                <Icon className={`h-5 w-5 ${category.color} group-hover:scale-110 transition-transform`} />
                <span className="text-sm font-medium text-news-dark group-hover:text-news-primary transition-colors">
                  {category.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Trending News */}
      <div className="rounded-lg bg-white p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-news-dark mb-4">Tin xu hướng</h3>
        <div className="space-y-4">
          {[
            "Công nghệ AI mới nhất từ các công ty hàng đầu",
            "Thị trường chứng khoán biến động mạnh",
            "Giải bóng đá World Cup 2024 sắp diễn ra",
            "Chính sách kinh tế mới được công bố",
          ].map((title, index) => (
            <a
              key={index}
              href="#"
              className="block p-3 rounded-lg hover:bg-news-neutral transition-colors group"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-news-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-news-primary">{index + 1}</span>
                </div>
                <span className="text-sm text-news-dark group-hover:text-news-primary transition-colors line-clamp-2">
                  {title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;