import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../App";
import { setUserData } from "../redux/useSlice";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

function EditProfile() {
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);
  const [name, setName] = useState(userData.name || "");
  const [description, setDescription] = useState(userData.description || "");
  const [photoUrl, setPhotoUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const formData = new FormData();
  formData.append("name", name);
  formData.append("description", description);
  formData.append("photoUrl", photoUrl);

  const handleEditProfile = async () => {
    setLoading(true);
    try {
      const result = await axios.post(
        serverUrl + "/api/user/profile",
        formData,
        { withCredentials: true }
      );
      dispatch(setUserData(result.data));
      setLoading(false);
      navigate("/");
      toast.success("Profile updated");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-xl w-full relative">
        <FaArrowLeftLong
          className="absolute top-[8%] left-[5%] w-[22px] h-[22px] cursor-pointer"
          onClick={() => navigate("/")}
        />
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6"></h2>
        <form
          action=""
          className="space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col items-center text-center">
            {userData?.photoUrl ? (
              <img
                src={userData?.photoUrl}
                className="w-24 h-24 rounded-full object-cover border-4 border-black"
                alt=""
              />
            ) : (
              <div className="w-24 h-24 rounded-full text-white flex items-center justify-center text-[30px] border-2 bg-black border-white">
                {userData?.name?.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="image"
              className="text-sm font-medium text-gray-700"
            >
              Select Avatar
            </label>
            <input
              id="image"
              type="file"
              name="photoUrl"
              placeholder="PhotoUrl"
              accept="image/*"
              className="w-full px-4 py-2 border rounded-md text-sm"
              onChange={(e) => setPhotoUrl(e.target.files[0])}
            />
          </div>

          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              UserName
            </label>
            <input
              id="name"
              type="text"
              placeholder={userData.name}
              className="w-full px-4 py-2 border rounded-md text-sm"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input
              readOnly
              id="email"
              type="text"
              placeholder={userData.email}
              className="w-full px-4 py-2 border rounded-md text-sm"
            />
          </div>
          <div>
            <label htmlFor="description" className="text-sm font-medium text-gray-700">Bio</label>
            <textarea
              id="description"
              rows={3}
              name="description"
              placeholder="Tell us about yourself"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-black"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <button
            className="w-full bg-black active:bg-[#454545] text-white py-2 rounded-md font-medium transition cursor-pointer"
            disabled={loading}
            onClick={handleEditProfile}
          >
            {loading ? <ClipLoader size={30} color="white" /> : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
