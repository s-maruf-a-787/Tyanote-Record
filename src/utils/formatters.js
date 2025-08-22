export const formatUSD = (n) =>
  `$${Number(n || 0).toLocaleString(undefined, { maximumFractionDigits: 2 })}`;

export const formatBDT = (n) =>
  `৳${Number(n || 0).toLocaleString(undefined, { maximumFractionDigits: 2 })}`;

export const clampPct = (n) =>
  Math.max(0, Math.min(100, Number(n || 0)));
