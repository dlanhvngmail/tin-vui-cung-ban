import { Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  featured?: boolean;
  id?: string;
}

const NewsCard = ({ title, excerpt, image, category, author, publishedAt, featured = false, id }: NewsCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`/news/${id}`);
    }
  };
  if (featured) {
    return (
      <article 
        className="group relative overflow-hidden rounded-xl bg-white shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer"
        onClick={handleClick}
      >
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <Badge className="mb-3 bg-news-accent text-white border-0">{category}</Badge>
          <h2 className="text-2xl font-bold leading-tight mb-3">{title}</h2>
          <p className="text-white/90 mb-4 line-clamp-2">{excerpt}</p>
          <div className="flex items-center space-x-4 text-sm text-white/80">
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
      </article>
    );
  }

  return (
    <article 
      className="group overflow-hidden rounded-lg bg-white shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <Badge className="mb-2 bg-news-primary/10 text-news-primary border-0 hover:bg-news-primary/20">
          {category}
        </Badge>
        <h3 className="text-lg font-semibold leading-tight mb-2 group-hover:text-news-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <User className="h-3 w-3" />
            <span>{author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{publishedAt}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;