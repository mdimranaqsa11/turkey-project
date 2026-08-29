export function Reveal({ children, as = "div", className }) {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
}

export function StaggerGroup({ children, className }) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className }) {
  return <div className={className}>{children}</div>;
}
