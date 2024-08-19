import "./profileName.css";

export const createProfileName = ({ title, color } = {}) => {
  const profileName = document.createElement("div");
  profileName.classList = "profile-name";

  const titleName = document.createElement("h2");
  titleName.textContent = title;
  titleName.style.color = color;

  profileName.appendChild(titleName);

  return profileName;
};
