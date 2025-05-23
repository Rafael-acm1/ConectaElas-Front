import React, { useState } from "react";
import "./CommentItem.css";

interface CommentProps {
  comentario?: string;
  createdAt?: string;
}

const Comment: React.FC<CommentProps> = ({ comentario = "", createdAt }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 200;

  const shouldTruncate = comentario.length > MAX_LENGTH;

  return (
    <div className="comment-item">
      <p className={`comment-text ${isExpanded ? "expanded" : ""}`}>
        {isExpanded || !shouldTruncate
          ? comentario
          : `${comentario.slice(0, MAX_LENGTH)}...`}
      </p>
      <span className="comment-date">
        {createdAt
          ? new Date(createdAt).toLocaleString("pt-BR")
          : "Data desconhecida"}
      </span>
      {shouldTruncate && (
        <button
          className="toggle-expand"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Ver menos" : "Ver mais"}
        </button>
      )}
    </div>
  );
};

export default Comment;
