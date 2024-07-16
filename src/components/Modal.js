import React, { useState } from "react";

function Modal({ video, onClose, onSave }) {
  const [form, setForm] = useState({
    id: video.id,
    title: video.title,
    category: video.category,
    image: video.image,
    video: video.video,
    description: video.description,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
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
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>EDITAR CARD:</h2>
        <form onSubmit={handleSubmit} className="form-edicao">
          <input
            className="campo-edicao"
            type="text"
            name="title"
            placeholder="Título"
            value={form.title}
            onChange={handleChange}
          />
          <select
            className="campo-edicao"
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
            className="campo-edicao"
            type="text"
            name="image"
            placeholder="Imagem"
            value={form.image}
            onChange={handleChange}
          />
          <input
            className="campo-edicao"
            type="text"
            name="video"
            placeholder="Vídeo"
            value={form.video}
            onChange={handleChange}
          />
          <textarea
            className="textarea-edicao"
            name="description"
            placeholder="Descrição"
            value={form.description}
            onChange={handleChange}
          ></textarea>
          <div className="botoes-edicao">
            <button className="botao-edicao-guardar" type="submit">
              GUARDAR
            </button>
            <button
              className="botao-edicao-limpar"
              type="button"
              onClick={handleClear}
            >
              LIMPAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
