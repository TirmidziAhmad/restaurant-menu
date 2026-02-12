import { Link } from "react-router-dom";
import { Heading } from "../atoms/Typography";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { Rating } from "../molecules/Rating";
import { RestaurantMetaData } from "../molecules/RestaurantMetaData";
import type { Restaurant } from "../../types/restaurant";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className="flex flex-col group animate-in fade-in duration-500">
      <div className="aspect-[4/3] bg-neutral-200 mb-4 overflow-hidden relative group">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {!restaurant.isOpen && <Badge variant="overlay">Closed</Badge>}
      </div>

      <Heading level={3}>{restaurant.name}</Heading>

      <Rating rating={restaurant.rating} />

      <div className="flex items-center justify-between mt-3">
        <RestaurantMetaData
          category={restaurant.category}
          priceRange={restaurant.priceRange}
        />

        <Badge variant={restaurant.isOpen ? "success" : "danger"}>
          {restaurant.isOpen ? "Open Now" : "Closed"}
        </Badge>
      </div>

      <Link to={`/items/${restaurant.id}`}>
        <Button variant="primary" size="full" className="mt-6">
          Learn More
        </Button>
      </Link>
    </div>
  );
}
