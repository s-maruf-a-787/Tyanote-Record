export default function Button({ children, onClick, variant = "primary" }) {
  const base = "px-3 py-2 rounded-xl text-sm font-medium transition shadow-sm";
  const styles = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-800",
    ghost: "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700",
    danger: "bg-red-600 text-white hover:bg-red-500",
  };
  return (
    <button className={`${base} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}
