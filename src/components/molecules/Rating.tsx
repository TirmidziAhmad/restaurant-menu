import { Star } from "../atoms/Star";

interface RatingProps {
  rating: number;
}

export function Rating({ rating }: RatingProps) {
  return (
    <div className="flex text-[#002B56]">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          filled={i < Math.floor(rating)}
          half={i >= Math.floor(rating) && i < rating}
        />
      ))}
    </div>
  );
}
