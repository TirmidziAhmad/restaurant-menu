import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getRestaurants } from "../services/api";
import type { Restaurant } from "../types/restaurant";

// Components
import { Heading, Text } from "../components/atoms/Typography";
import { FilterBar } from "../components/organisms/FilterBar";
import { RestaurantGrid } from "../components/organisms/RestaurantGrid";

const CATEGORIES = [
  "Fast Food",
  "Japanese",
  "Thai",
  "Seafood",
  "Italian",
  "American",
  "Mexican",
  "Steakhouses",
];
const PRICES = ["$", "$$", "$$$", "$$$$"];

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [openNow, setOpenNow] = useState(false);
  const [price, setPrice] = useState("");

  const selectedCategory = searchParams.get("category") || "";

  // Fetch restaurants when category changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getRestaurants(selectedCategory || undefined);
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const clearFilters = () => {
    setOpenNow(false);
    setPrice("");
    setSearchParams({});
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value;
    if (newCategory) {
      setSearchParams({ category: newCategory });
    } else {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("category");
      setSearchParams(newParams);
    }
  };

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((r: Restaurant) => {
      if (openNow && !r.isOpen) return false;
      if (price && r.priceRange !== price) return false;
      return true;
    });
  }, [restaurants, openNow, price]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-[#333] font-sans flex items-center justify-center">
        <Text>Loading restaurants...</Text>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#333] font-sans">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <Heading level={1}>Restaurants</Heading>
        <Text variant="description" className="mb-12">
          Discover the finest dining experiences. From casual bites to fine
          dining, find exactly what you're craving.
        </Text>

        <FilterBar
          openNow={openNow}
          onOpenNowChange={() => setOpenNow(!openNow)}
          price={price}
          onPriceChange={setPrice}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          onClearFilters={clearFilters}
          prices={PRICES}
          categories={CATEGORIES}
        />

        <RestaurantGrid
          restaurants={filteredRestaurants}
          title="All Restaurants"
          onClearFilters={clearFilters}
        />
      </div>
    </div>
  );
}
