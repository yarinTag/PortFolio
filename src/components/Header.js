/** @format */

import "../styles/components/header.css";
import SocialButton from "./SocialButton";

import pdf from "../pdfDownload/pdfResume.pdf";

export default function Header() {
  return (
    <section id="Home">
      <div className="header_container">
        <h1 className="header_name">Yarin Tagouri</h1>
        <h2 className="header_title">Third Year Student</h2>
        <p className="header_under_title">
          3rd Year Computer Science (B.sc) student. | Looking for a job as
          student software engineer.
          <br /> Full-time | Part-time | Development.
        </p>
        <div className="header_socials_container">
          <SocialButton link="https://github.com/yarinTag" color="black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              width="28"
              height="28"
            >
              <path d="M255.968 5.329C114.624 5.329 0 120.401 0 262.353c0 113.536 73.344 209.856 175.104 243.872 12.8 2.368 17.472-5.568 17.472-12.384 0-6.112-.224-22.272-.352-43.712-71.2 15.52-86.24-34.464-86.24-34.464-11.616-29.696-28.416-37.6-28.416-37.6-23.264-15.936 1.728-15.616 1.728-15.616 25.696 1.824 39.2 26.496 39.2 26.496 22.848 39.264 59.936 27.936 74.528 21.344 2.304-16.608 8.928-27.936 16.256-34.368-56.832-6.496-116.608-28.544-116.608-127.008 0-28.064 9.984-51.008 26.368-68.992-2.656-6.496-11.424-32.64 2.496-68 0 0 21.504-6.912 70.4 26.336 20.416-5.696 42.304-8.544 64.096-8.64 21.728.128 43.648 2.944 64.096 8.672 48.864-33.248 70.336-26.336 70.336-26.336 13.952 35.392 5.184 61.504 2.56 68 16.416 17.984 26.304 40.928 26.304 68.992 0 98.72-59.84 120.448-116.864 126.816 9.184 7.936 17.376 23.616 17.376 47.584 0 34.368-.32 62.08-.32 70.496 0 6.88 4.608 14.88 17.6 12.352C438.72 472.145 512 375.857 512 262.353 512 120.401 397.376 5.329 255.968 5.329z" />
            </svg>
          </SocialButton>
          <SocialButton
            link="https://www.linkedin.com/in/yarin-tagouri/"
            color="#0e76a8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              width="28"
              height="28"
            >
              <path d="M0 160h114.496v352H0zM426.368 164.128c-1.216-.384-2.368-.8-3.648-1.152a74.218 74.218 0 00-4.64-.896c-6.08-1.216-12.736-2.08-20.544-2.08-66.752 0-109.088 48.544-123.04 67.296V160H160v352h114.496V320s86.528-120.512 123.04-32v224H512V274.464c0-53.184-36.448-97.504-85.632-110.336z" />
              <circle cx="56" cy="56" r="56" />
            </svg>
          </SocialButton>
          <SocialButton
            link="https://api.whatsapp.com/send/?phone=972505739375&text=Hello Yarin , We would like to contact you regarding a job offer."
            color="green"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 513.64 513.64"
              fill="currentColor"
              width="28"
              height="28"
            >
              <path d="M499.66 376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36 17.92-7.68 23.041-33.28 35.841-56.32 30.72-51.2-12.8-120.32-79.36-133.12-133.12-7.68-23.041 7.68-48.641 30.72-56.32 33.28-10.24 43.52-53.76 17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12 0L18.38 62.08c-48.64 51.2 5.12 186.88 125.44 307.2s256 176.641 307.2 125.44l48.64-48.64c17.921-20.48 17.921-51.2 0-69.12z" />
            </svg>
          </SocialButton>
          <SocialButton link="mailto: yarin.tagouri@gmail.com" color="#FBBC05">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="28"
              height="28"
              fill="currentColor"
            >
              <path d="M339.392 258.624L512 367.744V144.896zM0 144.896v222.848l172.608-109.12zM480 80H32C16.032 80 3.36 91.904.96 107.232L256 275.264l255.04-168.032C508.64 91.904 495.968 80 480 80zM310.08 277.952l-45.28 29.824a15.983 15.983 0 01-8.8 2.624c-3.072 0-6.112-.864-8.8-2.624l-45.28-29.856L1.024 404.992C3.488 420.192 16.096 432 32 432h448c15.904 0 28.512-11.808 30.976-27.008L310.08 277.952z" />
            </svg>
          </SocialButton>
          <SocialButton link={pdf} color="red">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 31.256 31.256"
              fill="currentColor"
            >
              <path d="M13.153 12.339c.169 1.766.251 5.123-1.091 7.763-.109.213-.217.42-.325.618-2.334.716-4.799 2.072-5.21 3.565-.161.59-.013 1.18.406 1.619.437.455.98.697 1.574.697 1.437 0 2.931-1.371 4.563-4.187.592-.146 4.003-.562 4.72-.554 1.967 2.011 3.559 2.988 4.859 2.988.816 0 1.519-.412 1.929-1.133a1.608 1.608 0 00.003-1.597c-.816-1.474-3.994-2.074-5.9-2.211-.164-.179-.33-.365-.5-.558-1.952-2.23-2.75-5.506-3.045-7.218a18.95 18.95 0 00-.114-.957c-.126-.906-.695-1.042-1.023-1.042a.996.996 0 00-.747.338c-.305.346-.259.72-.229.97.028.246.072.57.13.899zM8.591 24.6c.187-.207.552-.512 1.105-.842-.516.56-.896.791-1.105.842zm13.954-1.743c-.167-.021-.485-.105-.995-.418.44.143.775.291.995.418zm-7.659-4.937c.365.741.771 1.416 1.217 2.021-.218.021-1.756.22-1.892.237.284-.696.509-1.451.675-2.258z" />
              <path d="M11.089 0L2.995 8.546v22.71h25.266V0H11.089zm-.714 3.594v3.787H6.788l3.587-3.787zm15.931 25.708H4.948V9.335h7.381V1.954h13.979v27.348h-.002z" />
            </svg>
          </SocialButton>
        </div>
      </div>
    </section>
  );
}
