import React from 'react'

const NoteCard = ({ title, content }) => {
  return (
    <div style={{
      background: "#222",
      color: "white",
      padding: "20px",
      margin: "20px",
      borderRadius: "10px"
    }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default NoteCard;




