

const MenuItem = () => {
  return (
    <div className=" menu-scale-animation bg-gray-100 p-4 rounded-lg text-center">
        <div className="text-center">
            <img className="max-h-auto max-h-24 block mx-auto" src="/sallad1.png" alt="salad"/>
        </div>
        <h4 className="font-semibold text-xl my-3">Salad</h4>
        <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sequi recusandae mollitia exercitationem perspiciatis et officia, quidem, minima, eveniet aliquam quasi! Similique laudantium distinctio possimus reiciendis vitae suscipit dolores pariatur?</p>
        <div className="flex justify-evenly items-center mt-4">
            <span className="text-xl font-semibold">$10</span>
            <button className="btn-primary">Add to cart</button>
        </div>
    </div>
  )
}

export default MenuItem;