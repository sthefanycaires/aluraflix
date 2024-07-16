import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function NewVideo() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    image: "",
    video: "",
    description: "",
  });
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const savedVideos = JSON.parse(localStorage.getItem("videos")) || [];
    setVideos(savedVideos);
  }, []);

  useEffect(() => {
    localStorage.setItem("videos", JSON.stringify(videos));
  }, [videos]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newVideo = {
      id: videos.length + 1,
      ...form,
    };
    setVideos([...videos, newVideo]);

    handleClear();

    navigate("/");
  };

  const handleClear = () => {
    setForm({
      title: "",
      category: "",
      image: "",
      video: "",
      description: "",
    });
  };

  return (
    <>
      <Header />
      <div className="new-video">
        <div className="cabecalho-new-video">
          <h1>NOVO VÍDEO</h1>
          <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Título"
            value={form.title}
            onChange={handleChange}
          />
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option value="">Categoria</option>
            <option value="FRONT END">FRONT END</option>
            <option value="BACK END">BACK END</option>
            <option value="INOVAÇÃO E GESTÃO">INOVAÇÃO E GESTÃO</option>
          </select>
          <input
            type="text"
            name="image"
            placeholder="Imagem"
            value={form.image}
            onChange={handleChange}
          />
          <input
            type="text"
            name="video"
            placeholder="Vídeo"
            value={form.video}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Descrição"
            value={form.description}
            onChange={handleChange}
          ></textarea>
          <div className="botoes-criacao">
            <button className="botao-criacao-guardar" type="submit">
              GUARDAR
            </button>
            <button
              className="botao-criacao-limpar"
              type="button"
              onClick={handleClear}
            >
              LIMPAR
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default NewVideo;
