'use client';

import Right from "@/components/Icons/Right";
import { useProfile } from "@/components/UseProfile";
import UserTabs from "@/components/UserTabs/UserTabs";
import Link from "next/link";



const MenuItemsPage = () => {

    const {loading, data} = useProfile();

    if (loading) {
        return 'Loading user info...';
    }
    
    if (!data.admin) {
        return 'Not an admin.';
    }

    return (
        <section className="mt-8 max-w-2xl mx-auto">
            <UserTabs isAdmin={true} />
            <div className="mt-8">
                <Link
                    className="btn-edit flex items-center justify-center gap-2"
                    href={'/menu-items/new'}>
                    <span>Crete new menu item</span>
                    <Right />
                </Link>
            </div>

            <div>
                <h2 className="text-sm text-gray-500 mt-8">Edit menu item:</h2>
            </div>
        </section>
    )
}

export default MenuItemsPage;