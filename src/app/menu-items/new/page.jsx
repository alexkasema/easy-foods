"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import Left from "@/components/Icons/Left";
import MenuItemForm from "@/components/ManageMenuForm/MenuItemForm";
import { useProfile } from "@/components/UseProfile";
import UserTabs from "@/components/UserTabs/UserTabs";
import Link from "next/link";
import toast from "react-hot-toast";

const NewMenuItemPage = () => {
  const { loading, data } = useProfile();
  const [redirectToItems, setRedirectToItems] = useState(false);

  const handleFormSubmit = async (ev, data) => {
    ev.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/menu-items", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) resolve();
      else reject();
    });

    await toast.promise(savingPromise, {
      loading: "Saving this tasty item",
      success: "Saved",
      error: "Error",
    });

    setRedirectToItems(true);
  };

  if (redirectToItems) {
    return redirect("/menu-items");
  }

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
      <MenuItemForm menuItem={null} onSubmit={handleFormSubmit} />
    </section>
  );
};

export default NewMenuItemPage;
