import { RestaurantCard } from "./RestaurantCard";
import { Heading, Text } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import type { Restaurant } from "../../types/restaurant";

interface RestaurantGridProps {
  restaurants: Restaurant[];
  title: string;
  onClearFilters: () => void;
  onLoadMore?: () => void;
}

export function RestaurantGrid({
  restaurants,
  title,
  onClearFilters,
  onLoadMore,
}: RestaurantGridProps) {
  return (
    <section>
      <Heading level={2}>{title}</Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {restaurants.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>

      {restaurants.length === 0 && (
        <div className="py-24 text-center">
          <Text variant="description" className="mx-auto mb-4">
            No restaurants found matching your filters.
          </Text>
          <button
            onClick={onClearFilters}
            className="text-[#002B56] font-bold uppercase text-xs tracking-widest hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {restaurants.length > 0 && onLoadMore && (
        <div className="mt-16 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={onLoadMore}
            className="px-24"
          >
            Load More
          </Button>
        </div>
      )}
    </section>
  );
}
