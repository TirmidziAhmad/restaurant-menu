import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getRestaurantById } from "../services/api";
import type { Restaurant } from "../types/restaurant";

const StarRating = ({
  rating,
  size = "lg",
}: {
  rating: number;
  size?: "sm" | "lg";
}) => {
  return (
    <div className="flex text-[#002B56]">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={size === "sm" ? "text-xs" : "text-2xl"}>
          {i < Math.floor(rating) ? "★" : i < rating ? "½" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default function RestaurantDetail() {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRestaurant = async () => {
      if (!id) return;

      setLoading(true);
      try {
        const data = await getRestaurantById(id);
        setRestaurant(data);
      } catch (err) {
        console.error("Error loading restaurant:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);

  const onWriteReview = () => {
    alert("This feature is coming soon!");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-neutral-400">Loading restaurant details...</p>
      </div>
    );
  }

  if (error || !restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-neutral-400">Restaurant not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#333] font-sans pb-24">
      {/* Navigation */}
      <nav className="border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center">
          <Link
            to="/"
            className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-[#002B56] transition-colors"
          >
            ← Back to Menu
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-light text-[#333] mb-4">
            {restaurant.name}
          </h1>
          <div className="flex items-center gap-4">
            <StarRating rating={restaurant.rating} />
            <span className="text-[#666] text-sm font-medium">
              ({restaurant.rating} / 5.0)
            </span>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="mb-12 aspect-[21/9] w-full bg-neutral-100 rounded-2xl overflow-hidden border border-neutral-200 shadow-sm group">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-neutral-100 pt-12">
          {/* Info Section */}
          <div className="space-y-12">
            <section>
              <h3 className="text-xl font-light mb-6">About</h3>
              <p className="text-[#666] leading-relaxed text-lg">
                {restaurant.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-neutral-100 text-[10px] font-bold uppercase tracking-widest text-neutral-500 rounded-full">
                  {restaurant.category}
                </span>
                <span className="px-3 py-1 bg-neutral-100 text-[10px] font-bold uppercase tracking-widest text-neutral-500 rounded-full">
                  {restaurant.priceRange}
                </span>
              </div>
            </section>

            {/* Map Section (Optional) */}
            <section className="space-y-6">
              <h3 className="text-xl font-light">Location</h3>
              <div className="aspect-[16/10] bg-neutral-100 rounded-lg overflow-hidden border border-neutral-200">
                <iframe
                  title="Restaurant Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(restaurant.name)}&z=15&output=embed`}
                  allowFullScreen
                />
              </div>
            </section>
          </div>

          {/* Reviews Section */}
          <div className="space-y-10">
            <h3 className="text-xl font-light">
              {restaurant.reviews?.length || 0} Reviews
            </h3>

            <div className="space-y-12">
              {restaurant.reviews?.map((review) => (
                <div key={review.id} className="flex gap-6 items-start group">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-neutral-200 border-2 border-white shadow-sm transition-transform group-hover:scale-110">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2 flex-grow">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-[#333]">{review.name}</h4>
                      <StarRating rating={review.rating} size="sm" />
                    </div>
                    <p className="text-[#666] leading-relaxed pt-2 italic">
                      "{review.text}"
                    </p>
                  </div>
                </div>
              ))}

              {(!restaurant.reviews || restaurant.reviews.length === 0) && (
                <p className="text-neutral-400 italic">
                  No reviews yet for this restaurant.
                </p>
              )}
            </div>

            <button
              onClick={onWriteReview}
              className="w-full py-4 border border-[#002B56] text-[#002B56] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#002B56] hover:text-white transition-all active:scale-[0.98]"
            >
              Write a Review
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
