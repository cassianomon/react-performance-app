export interface AddToWishlistProps {
  onAddToWishlist: () => void;
  onRequestClose: () => void;
}

export function AddToWishlist({
  onAddToWishlist,
  onRequestClose,
}: AddToWishlistProps) {
  return (
    <span>
      You want to add to Wishlist?
      <button onClick={onAddToWishlist}>Yes</button>
      <button onClick={onRequestClose}>No</button>
    </span>
  );
}
