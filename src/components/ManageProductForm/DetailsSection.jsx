
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
    const { register, formState: { errors } } = useFormContext();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/api/categories').then(res => {
          res.json().then(categories => {
            setCategories(categories);
          });
        });
    }, []);

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                <input
                    type="number"
                    {...register("price", { required: "Price is required" })}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>}
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                    {...register("description", { required: "Description is required" })}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
            </div>
            <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                <select
                    {...register("category", {
                        required: "This field is required",
                    })}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                    <option value="" className="text-sm font-bold">
                        Select as Category
                    </option>
                    {categories?.length > 0 && categories.map(c => (
                        <option key={c._id} value={c.name}>{c.name}</option>
                    ))}
                </select>   
                {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>}
            </div>
        </div>
    )
}

export default DetailsSection;