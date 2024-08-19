import "./profilePicture.css";

export const createProfilePicture = ({ src } = {}) => {
  const profile = document.createElement("div");
  profile.classList = "profile";

  const imgProfile = document.createElement("img");
  imgProfile.src = src;

  profile.appendChild(imgProfile);

  return profile;
};
