import { Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  featured?: boolean;
}

const NewsCard = ({ title, excerpt, image, category, author, publishedAt, featured = false }: NewsCardProps) => {
  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-xl bg-white shadow-card hover:shadow-glow transition-all duration-500 cursor-pointer transform hover:scale-[1.02]">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-overlay opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <Badge className="mb-3 bg-gradient-accent text-white border-0 shadow-accent animate-pulse">{category}</Badge>
          <h2 className="text-2xl font-bold leading-tight mb-3 group-hover:text-white/95 transition-colors">{title}</h2>
          <p className="text-white/90 mb-4 line-clamp-2 group-hover:text-white/95 transition-colors">{excerpt}</p>
          <div className="flex items-center space-x-4 text-sm text-white/80 group-hover:text-white/90 transition-colors">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{publishedAt}</span>
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-accent rounded-full animate-pulse shadow-accent"></div>
      </article>
    );
  }

  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow-soft hover:shadow-glow transition-all duration-500 cursor-pointer transform hover:scale-[1.03] hover:-translate-y-1">
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4 relative">
        <Badge className="mb-2 bg-gradient-to-r from-news-primary/10 to-news-primary/20 text-news-primary border-0 hover:shadow-glow transition-all duration-300">
          {category}
        </Badge>
        <h3 className="text-lg font-semibold leading-tight mb-2 group-hover:bg-gradient-to-r group-hover:from-news-primary group-hover:to-news-primary-dark group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2 group-hover:text-foreground/80 transition-colors">{excerpt}</p>
        <div className="flex items-center justify-between text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors">
          <div className="flex items-center space-x-1">
            <User className="h-3 w-3" />
            <span>{author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{publishedAt}</span>
          </div>
        </div>
        <div className="absolute top-2 right-2 w-1 h-1 bg-gradient-accent rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
      </div>
    </article>
  );
};

export default NewsCard;