export default function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 outline-none focus:ring-2 focus:ring-neutral-800 ${className}`}
      {...props}
    />
  );
}
