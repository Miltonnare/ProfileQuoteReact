import { useState, useEffect } from "react";
import Infom from "./Info";
import AIM from "./assets/AIM.jpeg";
import "./index.css"; 

function CardApp() {
  const [userQuote, setUserQuote] = useState("");
  const [quote, setQuote] = useState<string[]>([]);
  const [newQuote, setNewQuote] = useState("");
  const [showQuote, setShowQuote] = useState(false);
  const [bgColor, setBgColor] = useState("#ffffff");

  
  useEffect(() => {
    const savedQuotes = localStorage.getItem("quotes");
    if (savedQuotes) {
      setQuote(JSON.parse(savedQuotes));
    }
  }, []);

  
  const HandlesNewQuote = () => {
    if (newQuote.trim() === "") return;
    const updatedQuotes = [...quote, newQuote];
    setQuote(updatedQuotes);
    setNewQuote("");
    localStorage.setItem("quotes", JSON.stringify(updatedQuotes)); 
  };

  
  const HandleShowQuote = () => {
    if (quote.length === 0) {
      alert("There is no Quote to be Displayed");
      return;
    }
    if (!showQuote) {
      const randomIndex = Math.floor(Math.random() * quote.length);
      setUserQuote(quote[randomIndex]);
      handleBackgroundColor(); 
    }
    setShowQuote((prev) => !prev); 
  };

  
  const clearQuotes = () => {
    setQuote([]);
    localStorage.removeItem("quotes");
  };

 
  const handleBackgroundColor = () => {
    const colors = ["#f8d7da", "#d4edda", "#d1ecf1", "#fff3cd", "#f0f8ff"];
    setBgColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div className="Container" style={{ backgroundColor: bgColor }}>
      <h2>
        Success is no accident. It is hard work, perseverance, learning,
        studying, sacrifice, and most of all, love of what you are doing or
        learning to do." – Pelé
      </h2>
      <img src={AIM} alt="ProfilePicture" className="photo" />
      <p>
        <Infom />
      </p>
      <button onClick={HandleShowQuote}>
        {showQuote ? "HIDE QUOTE" : "SHOW QUOTE"}
      </button>
      {showQuote && <p className="quote-display">{userQuote}</p>}

      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          HandlesNewQuote();
        }}
      >
        <input
          type="text"
          placeholder="Enter your Quote"
          value={newQuote}
          onChange={(e) => setNewQuote(e.target.value)}
        />
        <button type="submit">Add Quote</button>
      </form>

      {quote.length > 0 ? (
        <div>
          <p>Quotes List:</p>
          <ul>
            {quote.map((q, index) => (
              <li key={index}>"{q}"</li>
            ))}
          </ul>
          <button onClick={clearQuotes}>Clear All Quotes</button>
        </div>
      ) : (
        <p>Type your Quote</p>
      )}
    </div>
  );
}

export default CardApp;
