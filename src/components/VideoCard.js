import React from "react";

function VideoCard({ video, onEdit, onDelete }) {
  return (
    <div className="video-card">
      <img src={video.image} alt={video.title} />
      <div className="video-info">
        <button onClick={() => onDelete(video.id)}>Deletar</button>
        <button onClick={() => onEdit(video)}>Editar</button>
      </div>
    </div>
  );
}

export default VideoCard;
