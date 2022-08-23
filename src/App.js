import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const companies = [
    "Google",
    "Facebook",
    "Youtube",
    "Twitter",
    "Linkedin",
    "Twitch",
    "Instagram"
  ];

  useEffect(() => {
    const results = companies.filter((company) =>
      company.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (searchTerm === "") {
      setSearchResults([]);
      return;
    }
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="container">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="data">
        {searchResults.map((company, index) => (
          <div key={index} className="row">
            {company}
          </div>
        ))}
      </div>
    </div>
  );
}
