import React from 'react'

const NoteCard = ({ title, content }) => {
  return (
    <div style={{ background: "black", color: "white", padding: "20px", borderRadius: "10px", border:"1px solid white" }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default NoteCard;




