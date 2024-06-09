import FlyingButton from "react-flying-item";

export default function AddToCartButton({
  hasSizesOrExtras,
  onClick,
  basePrice,
  image,
}) {
  if (!hasSizesOrExtras) {
    return (
      <div className="mt-4">
        <FlyingButton targetTop={"5%"} targetLeft={"95%"} src={image}>
          <div className="btn-primary" onClick={onClick}>
            Add to cart ${basePrice}
          </div>
        </FlyingButton>
      </div>
    );
  }
  return (
    <button type="button" onClick={onClick} className="btn-primary mt-4">
      <span>Add to cart (from ${basePrice})</span>
    </button>
  );
}
