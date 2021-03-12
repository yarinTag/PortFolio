/** @format */

import { useState } from "react";
import "../styles/components/social_button.css";

export default function SocialButton({
  children,
  link = "https://google.com",
  color = "#fff",
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={link}
      className="social_button_btn"
      style={{
        color: hovered ? color : "black",
        borderColor: hovered ? color : "black",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}
