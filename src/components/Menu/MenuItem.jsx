const MenuItem = (menuItem) => {
  const { image, name, description, basePrice, sizes, extraIngredientPrices } =
    menuItem;
  return (
    <div className=" menu-scale-animation bg-gray-100 p-4 rounded-lg text-center">
      <div className="text-center">
        <img
          className="max-h-auto max-h-24 block mx-auto"
          src={image}
          alt="salad"
        />
      </div>
      <h4 className="font-semibold text-xl my-3">{name}</h4>
      <p className="text-gray-500 text-sm">{description}</p>
      <div className="flex justify-evenly items-center mt-4">
        <span className="text-xl font-semibold">${basePrice}</span>
        <button className="btn-primary">Add to cart</button>
      </div>
    </div>
  );
};

export default MenuItem;
