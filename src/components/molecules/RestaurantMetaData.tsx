import { Text } from "../atoms/Typography";

interface RestaurantMetaDataProps {
  category: string;
  priceRange: string;
}

export function RestaurantMetaData({
  category,
  priceRange,
}: RestaurantMetaDataProps) {
  return (
    <div className="flex items-center gap-1">
      <Text variant="meta">{category}</Text>
      <Text variant="meta">•</Text>
      <Text variant="meta">{priceRange}</Text>
    </div>
  );
}
