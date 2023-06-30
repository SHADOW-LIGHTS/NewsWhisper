import React from "react";
import "./Docs.css";

export default function Docs() {
  return (
    <div className="docs-container">
      <h1>
        Welcome to the Documentation for the Voice-Driven News Application!
      </h1>

      <div className="section">
        <h2>Introduction</h2>
        <p>
          Welcome to the documentation for the Voice-Driven News Application!
          This project aims to provide a seamless and intuitive news browsing
          experience through voice commands. By integrating the NewsAPI and Alan
          AI, users can fetch and interact with news articles using natural
          language.
        </p>
      </div>

      <div className="section">
        <h2>Project Overview</h2>
        <p>
          The <em>Voice-Driven News Application</em> leverages the capabilities
          of <strong>NewsAPI</strong> to fetch real-time news data from various
          sources and categories. The application then utilizes the{" "}
          <strong>Alan AI</strong> platform to enable voice-controlled
          functionality, allowing users to navigate through news articles, have
          headlines read out, open article links, and perform other tasks
          entirely through voice commands.
        </p>
      </div>

      <div className="section">
        <h2>Goals and Objectives</h2>
        <p>
          The primary goal of this project is to create a user-friendly news
          browsing experience that eliminates the need for manual interaction
          with the application. By leveraging voice recognition and synthesis
          technologies, users can access news content hands-free, making it
          convenient for multitasking, accessibility, and enhanced user
          experience.
        </p>
        <p>
          The key objectives of the Voice-Driven News Application are as
          follows:
        </p>
        <ul>
          <li>Enable voice-driven interaction for news browsing.</li>
          <li>Provide an intuitive and natural language interface.</li>
          <li>
            Fetch and display real-time news articles from various sources.
          </li>
          <li>
            Allow users to navigate through articles, listen to headlines, and
            open article links using voice commands.
          </li>
          <li>
            Support a wide range of news categories and sources for personalized
            news content.
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Target Audience</h2>
        <p>
          The Voice-Driven News Application targets individuals who consume news
          content regularly and prefer hands-free interaction. This includes
          busy professionals, multitaskers, visually impaired users, and anyone
          seeking a convenient and innovative way to access news updates.
        </p>
        <p>
          Whether you're a news enthusiast looking for a new way to stay
          informed or someone who values accessibility and convenience, this
          application is designed to cater to your needs.
        </p>
      </div>

      <div className="section">
        <p>
          In the following sections, we will explore the installation process,
          usage guide, API integration details, and more. Let's dive into the
          exciting features of the Voice-Driven News Application!
        </p>
      </div>
    </div>
  );
}
