import { Text } from "../atoms/Typography";
import { Checkbox } from "../atoms/Checkbox";
import { Select } from "../atoms/Select";
import { Button } from "../atoms/Button";

interface FilterBarProps {
  openNow: boolean;
  onOpenNowChange: () => void;
  price: string;
  onPriceChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onClearFilters: () => void;
  prices: string[];
  categories: string[];
}

export function FilterBar({
  openNow,
  onOpenNowChange,
  price,
  onPriceChange,
  selectedCategory,
  onCategoryChange,
  onClearFilters,
  prices,
  categories,
}: FilterBarProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-4 border-y border-neutral-100 mb-12 gap-6">
      <div className="flex flex-wrap items-center gap-8">
        <Text variant="label">Filter By:</Text>

        <Checkbox
          label="Open Now"
          checked={openNow}
          onChange={onOpenNowChange}
        />

        <Select
          value={price}
          onChange={(e) => onPriceChange(e.target.value)}
          placeholder="Price"
          options={prices.map((p) => ({ value: p, label: p }))}
        />

        <Select
          value={selectedCategory}
          onChange={onCategoryChange}
          placeholder="Categories"
          options={categories.map((c) => ({ value: c, label: c }))}
        />
      </div>

      <Button
        variant="secondary"
        size="sm"
        onClick={onClearFilters}
        className="px-8 text-neutral-400"
      >
        Clear All
      </Button>
    </div>
  );
}
