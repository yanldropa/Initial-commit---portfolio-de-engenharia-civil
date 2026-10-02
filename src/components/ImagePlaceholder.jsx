export default function ImagePlaceholder({ src, label, className = "" }) {
  return (
    <div className={`image-placeholder ${className}`}>
      <img
        src={src}
        alt={label}
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.parentElement.classList.add("missing-image");
        }}
      />
      <span>{label}</span>
    </div>
  );
}