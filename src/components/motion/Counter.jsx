export function Counter({ value, className, suffix = "", prefix = "" }) {
  return (
    <span className={className}>
      {prefix}
      {Number(value).toLocaleString()}
      {suffix}
    </span>
  );
}
