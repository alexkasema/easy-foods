"use client";

import Left from "@/components/Icons/Left";
import MenuItemForm from "@/components/ManageMenuForm/MenuItemForm";
import { useProfile } from "@/components/UseProfile";
import UserTabs from "@/components/UserTabs/UserTabs";
import Link from "next/link";

const NewMenuItemPage = () => {
  const { loading, data } = useProfile();

  const handleSave = async () => {};

  if (loading) {
    return "Loading user info...";
  }

  if (!data.admin) {
    return "Not an admin.";
  }

  return (
    <section className="mt-8">
      <UserTabs isAdmin={true} />
      <div className="max-w-2xl mx-auto mt-8">
        <Link href={"/menu-items"} className="btn-back">
          <Left />
          <span>Show all menu items</span>
        </Link>
      </div>
      <MenuItemForm menuItem={null} onSubmit={handleSave} />
    </section>
  );
};

export default NewMenuItemPage;
