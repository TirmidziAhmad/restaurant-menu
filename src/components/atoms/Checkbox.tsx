import type { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Checkbox({ label, className = "", ...props }: CheckboxProps) {
  return (
    <label
      className={`flex items-center gap-2 cursor-pointer group ${className}`}
    >
      <input
        type="checkbox"
        className="appearance-none w-4 h-4 border-2 border-[#002B56] rounded-full bg-white checked:bg-[#002B56] checked:border-[#002B56] focus:outline-none transition duration-200 cursor-pointer"
        {...props}
      />

      <span className="text-sm font-medium border-b border-neutral-200 py-1 text-[#333] group-hover:text-[#002B56] transition-colors">
        {label}
      </span>
    </label>
  );
}
