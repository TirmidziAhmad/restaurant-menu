interface StarProps {
  filled: boolean;
  half?: boolean;
}

export function Star({ filled, half }: StarProps) {
  return <span className="text-lg">{filled ? "★" : half ? "½" : "☆"}</span>;
}
