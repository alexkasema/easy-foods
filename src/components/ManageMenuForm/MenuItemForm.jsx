import { useState } from "react";
import EditableImage from "../EditableImage/EditableImage";

const MenuItemForm = ({ onSubmit, menuItem }) => {
  const [image, setImage] = useState(menuItem?.image || "");

  return (
    <form
      onSubmit={(ev) =>
        onSubmit(ev, {
          image,
        })
      }
      className="mt-8 max-w-2xl mx-auto"
    >
      <div
        className="md:grid items-start gap-4"
        style={{ gridTemplateColumns: ".3fr .7fr" }}
      >
        <div>
          <EditableImage link={image} setLink={setImage} />
        </div>
      </div>
    </form>
  );
};

export default MenuItemForm;
