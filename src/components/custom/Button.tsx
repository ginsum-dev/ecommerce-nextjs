const variantMap = {
  primary: "bg-orange-400 text-white font-bold hover:bg-orange-500",
  outline: "border border-gray-300 hover:bg-gray-100",
};

const disabledStyle =
  "disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed";

export default function Button({
  children,
  className,
  onClick,
  variant = "primary",
  disabled = false,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  disabled?: boolean;
}) {
  return (
    <button
      className={`rounded-lg p-2 cursor-pointer ${variantMap[variant]} ${disabledStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
