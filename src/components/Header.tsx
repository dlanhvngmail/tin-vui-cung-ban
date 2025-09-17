import { Menu, Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-md bg-glass-bg supports-[backdrop-filter]:bg-glass-bg shadow-soft">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-news-primary to-news-primary-dark shadow-glow">
            <span className="text-lg font-bold text-white">TT</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-news-primary to-news-primary-dark bg-clip-text text-transparent">
            Tin Tức 24h
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium text-news-dark hover:text-news-primary transition-all duration-300 hover:scale-105 relative group">
            Trang chủ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-news-primary transition-all duration-300 hover:scale-105 relative group">
            Thế giới
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-news-primary transition-all duration-300 hover:scale-105 relative group">
            Kinh tế
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-news-primary transition-all duration-300 hover:scale-105 relative group">
            Công nghệ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-news-primary transition-all duration-300 hover:scale-105 relative group">
            Thể thao
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-news-primary transition-all duration-300 hover:scale-105 relative group">
            Giải trí
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-news-primary transition-colors" />
              <Input
                placeholder="Tìm kiếm tin tức..."
                className="w-64 pl-10 bg-news-neutral/80 backdrop-blur-sm border-0 focus-visible:ring-news-primary focus-visible:shadow-glow transition-all duration-300"
              />
            </div>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-news-primary relative">
              <Bell className="h-5 w-5 transition-all duration-300 hover:scale-110 hover:rotate-12" />
              <div className="absolute -top-1 -right-1 h-2 w-2 bg-gradient-accent rounded-full animate-pulse"></div>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden hover:text-news-primary transition-colors">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;