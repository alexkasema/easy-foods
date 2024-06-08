"use client";

import { useEffect, useState } from "react";
import AddressInputs from "../AddressInputs/AddressInputs";
import { useProfile } from "../UseProfile";

const UserForm = ({ user, onSave }) => {
  const [userName, setUserName] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress || "");
  const [postalCode, setPostalCode] = useState(user?.postalCode || "");
  const [city, setCity] = useState(user?.city || "");
  const [country, setCountry] = useState(user?.country || "");
  const [admin, setAdmin] = useState(user?.admin || false);
  const { data: loggedInUserData } = useProfile();

  function handleAddressChange(propName, value) {
    if (propName === "phone") setPhone(value);
    if (propName === "streetAddress") setStreetAddress(value);
    if (propName === "postalCode") setPostalCode(value);
    if (propName === "city") setCity(value);
    if (propName === "country") setCountry(value);
  }

  useEffect(() => {
    setUserName(user?.name || "");
    setPhone(user?.phone || "");
    setStreetAddress(user?.streetAddress || "");
    setPostalCode(user?.postalCode || "");
    setCity(user?.city || "");
    setCountry(user?.country || "");
    setAdmin(user?.admin || false);
  }, [user]);

  return (
    <div>
      <form
        className="grow"
        onSubmit={(ev) =>
          onSave(ev, {
            name: userName,
            phone,
            admin,
            streetAddress,
            city,
            country,
            postalCode,
          })
        }
      >
        <label>First and last name</label>
        <input
          type="text"
          placeholder="First and last name"
          value={userName}
          onChange={(ev) => setUserName(ev.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          disabled={true}
          value={user?.email}
          placeholder={"email"}
        />
        <AddressInputs
          addressProps={{ phone, streetAddress, postalCode, city, country }}
          setAddressProp={handleAddressChange}
        />
        {loggedInUserData.admin && (
          <div>
            <label
              className="p-2 inline-flex items-center gap-2 mb-2"
              htmlFor="adminCb"
            >
              <input
                id="adminCb"
                type="checkbox"
                className=""
                value={"1"}
                checked={admin}
                onChange={(ev) => setAdmin(ev.target.checked)}
              />
              <span>Admin</span>
            </label>
          </div>
        )}
        <button className="btn-primary" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default UserForm;
