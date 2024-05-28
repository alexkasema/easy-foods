'use client';

import {useProfile} from "@/components/UseProfile";
import UserTabs from "@/components/UserTabs/UserTabs";
import { useState } from "react";
import toast from "react-hot-toast";

const CategoriesPage = () => {

    const [categoryName, setCategoryName] = useState('');
    const {loading:profileLoading, data:profileData} = useProfile();

    const handleCategorySubmit = async (ev) => {
        ev.preventDefault();
        const creationPromise = new Promise(async (resolve, reject) => {
            const data = {name:categoryName};
            const response = await fetch('/api/categories', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            setCategoryName('');
            if (response.ok)
                resolve();
            else
                reject();
        });
        await toast.promise(creationPromise, {
        loading: 'Creating your new category...',
        success: 'Category created',
        error: 'Something went wrong creating your category...',
        });
    }

    if (profileLoading) {
        return 'Loading user info...';
      }
    
    if (!profileData.admin) {
        return 'Not an admin';
    }

    return (
        <section className="mt-8 max-w-2xl mx-auto">
            <UserTabs isAdmin={true} />
            <form className="mt-8" onSubmit={handleCategorySubmit}>
                <div className="flex gap-2 items-end">
                    <div className="grow">
                        <label>
                        New category name
                        </label>
                        <input 
                            type="text"
                            value={categoryName}
                            onChange={ev => setCategoryName(ev.target.value)}
                        />
                    </div>
                    <div className="pb-2">
                        <button className=" btn-primary" type="submit">
                        Create
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default CategoriesPage;