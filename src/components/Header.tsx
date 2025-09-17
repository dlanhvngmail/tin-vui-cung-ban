import { Menu, Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-news-primary to-news-secondary">
            <span className="text-lg font-bold text-white">TT</span>
          </div>
          <span className="text-xl font-bold text-news-dark">Tin Tức 24h</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium text-news-dark hover:text-news-primary transition-colors">
            Trang chủ
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-news-primary transition-colors">
            Thế giới
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-news-primary transition-colors">
            Kinh tế
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-news-primary transition-colors">
            Công nghệ
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-news-primary transition-colors">
            Thể thao
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-news-primary transition-colors">
            Giải trí
          </a>
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm tin tức..."
                className="w-64 pl-10 bg-news-neutral border-0 focus-visible:ring-news-primary"
              />
            </div>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-news-primary">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;