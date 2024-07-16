import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import VideoCard from "../components/VideoCard";
import Modal from "../components/Modal";
import data from "../data.json";

function Home() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Load videos from data.json
    setVideos(data.videos || []);
  }, []);

  const handleEdit = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  const handleSave = (updatedVideo) => {
    setVideos(
      videos.map((video) =>
        video.id === updatedVideo.id ? updatedVideo : video
      )
    );
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <Banner featured={data.featured} />
      <div className="category">
        <div className="frontend">
          <h2>FRONT END</h2>
        </div>
        <div className="lista-videos-categoria">
          {videos
            .filter((video) => video.category === "FRONT END")
            .map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
        </div>
      </div>
      <div className="category">
        <div className="backend">
          <h2>BACK END</h2>
        </div>
        <div className="lista-videos-categoria">
          {videos
            .filter((video) => video.category === "BACK END")
            .map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
        </div>
      </div>
      <div className="category">
        <div className="inovacaogestao">
          <h2>INOVAÇÃO E GESTÃO</h2>
        </div>
        <div className="lista-videos-categoria">
          {videos
            .filter((video) => video.category === "INOVAÇÃO E GESTÃO")
            .map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          video={selectedVideo}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
      <Footer />
    </>
  );
}

export default Home;
