function Card({ children, className = "", ...restProps }) {
  return (
    <div className={`card ${className}`} {...restProps}>
      {children}
    </div>
  );
}

export default Card;