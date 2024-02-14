import React, { useContext } from "react";
import UserContext from "../../src/utils/UserContext";

const Contact = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);
  return (
    <div>
      <div>
        <p>context api feature for acessing data from child</p>
        <label>UserName:</label>
        <input
          className="border border-black"
          type="text"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div>
        <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
        <form>
          <input
            type="text"
            className=" border border-black p-2 m-2"
            placeholder="name"
          />
          <input
            type="text"
            className=" border border-black p-2 m-2"
            placeholder="message"
          />
          <button className=" border border-black p-2 m-2 bg-gray-100 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
