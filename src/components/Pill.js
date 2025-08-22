export default function Pill({ children }) {
  return (
    <span className="px-2.5 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
      {children}
    </span>
  );
}
