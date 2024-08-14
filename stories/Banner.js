import { color } from "storybook/internal/theming";
import "./banner.css";

export const createBanner = ({
  titleHeading,
  titlePara,
  color,
  fontSize,
} = {}) => {
  const banner = document.createElement("div");
  banner.classList = "bannder";
  banner.style.backgroundColor = color;

  const bannerHeading = document.createElement("h2");
  bannerHeading.classList = "banner-heading";
  bannerHeading.textContent = titleHeading;
  bannerHeading.style.fontSize = fontSize;

  const bannerPara = document.createElement("p");
  bannerPara.classList = "banner-para";
  bannerPara.textContent = titlePara;

  banner.appendChild(bannerHeading);
  banner.appendChild(bannerPara);

  return banner;
};
