"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FiEdit, FiTrash } from "react-icons/fi";
import api from "@/utils/api";
import { useRouter } from "next/navigation";
import {
  getToken,
  getUserIdFromToken,
  isAuthenticated,
  redirectToLogin,
} from "@/utils/auth";

export default function Page() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageFile: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editingPost, setEditingPost] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      Swal.fire({
        title: "Acceso restringido",
        text: "Inicia sesión para acceder a esta funcionalidad.",
        icon: "warning",
        confirmButtonText: "Ir al login",
      }).then(() => {
        redirectToLogin(router);
      });
    } else {
      fetchPosts(); 
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imageFile" && files && files[0]) {
      const file = files[0];
      setFormData({ ...formData, imageFile: file });
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const token = getToken(); 
    const userId = getUserIdFromToken();

    if (!token || !userId) {
      Swal.fire({
        title: "Acceso no autorizado",
        text: "Por favor, inicia sesión para realizar esta acción.",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
      redirectToLogin(router);
      return;
    }

    const data = new FormData();
    data.append("userId", userId); 
    data.append("title", formData.title);
    data.append("description", formData.description);

    if (formData.imageFile) {
      data.append("images", formData.imageFile);
    }

    try {
      Swal.fire({
        title: "Publicando...",
        text: "Por favor espere.",
        icon: "info",
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });

      await api.post("/post", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      Swal.fire({
        title: "Publicación exitosa",
        text: "Tu publicación ha sido creada.",
        icon: "success",
        confirmButtonText: "Cerrar",
      });

      setFormData({
        title: "",
        description: "",
        imageFile: null,
      });
      setPreviewImage(null);
      fetchPosts(); 
    } catch (error) {
      console.error("Error al crear publicación:", error.response || error);
      const backendMessage =
        error.response?.data?.error ||
        "Error desconocido al enviar el formulario";
      setErrorMessage(backendMessage);

      Swal.fire({
        title: "Error",
        text: backendMessage,
        icon: "error",
        confirmButtonText: "Cerrar",
      });
    }
  };

 
  const fetchPosts = async () => {
    const token = getToken(); 

    if (!token) {
      Swal.fire({
        title: "Acceso restringido",
        text: "Por favor inicia sesión para ver las publicaciones.",
        icon: "warning",
        confirmButtonText: "Cerrar",
      });
      redirectToLogin(router);
      return;
    }

    try {
      setLoading(true);
      const response = await api.get("/post", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.error(
        "Error al cargar las publicaciones:",
        error.response || error
      );
      Swal.fire("Error", "No se pudieron cargar las publicaciones", "error");
      setLoading(false);
    }
  };

  const handleEdit = (post) => {
    if (!post) {
      console.error("La publicación seleccionada está vacía.");
      return;
    }
    setEditingPost(post);
    setShowEditModal(true); 
  };

 
  const handleUpdate = async (e) => {
    e.preventDefault();

    const token = getToken();
    const userId = getUserIdFromToken(); 

    if (!token || !userId) {
      Swal.fire({
        title: "Acceso no autorizado",
        text: "Por favor, inicia sesión para realizar esta acción.",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
      redirectToLogin(router);
      return;
    }

    const data = new FormData();
    data.append("userId", userId); 
    data.append("title", editingPost.title);
    data.append("description", editingPost.description);
    if (editingPost.imageFile) {
      data.append("images", editingPost.imageFile);
    }

    try {
      Swal.fire({
        title: "Actualizando...",
        text: "Por favor espere.",
        icon: "info",
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });

      await api.put(`/post/${editingPost._id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      Swal.fire({
        title: "Actualización exitosa",
        text: "La publicación ha sido actualizada.",
        icon: "success",
        confirmButtonText: "Cerrar",
      });

      setShowEditModal(false);
      fetchPosts(); 
    } catch (error) {
      console.error(
        "Error al actualizar publicación:",
        error.response || error
      );
      Swal.fire({
        title: "Error",
        text: "No se pudo actualizar la publicación.",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
    }
  };


  const handleDelete = async (id) => {
    const token = getToken(); 

    if (!token) {
      Swal.fire({
        title: "Acceso no autorizado",
        text: "Por favor, inicia sesión para realizar esta acción.",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
      redirectToLogin(router);
      return;
    }

    try {
      const confirm = await Swal.fire({
        title: "¿Estás seguro?",
        text: "Esta acción eliminará permanentemente la publicación.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (confirm.isConfirmed) {
        await api.delete(`/post/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        Swal.fire("Eliminado", "La publicación ha sido eliminada.", "success");
        fetchPosts(); 
      }
    } catch (error) {
      console.error(
        "Error al eliminar la publicación:",
        error.response || error
      );
      Swal.fire("Error", "No se pudo eliminar la publicación", "error");
    }
  };

  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white">
      <section className="h-screen flex flex-col items-center justify-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-300"
          style={{
            backgroundImage: previewImage ? `url(${previewImage})` : "none",
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 bg-gray-800 bg-opacity-80 p-8 mt-4 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Crear Nueva Publicación
          </h2>
          {errorMessage && (
            <div className="p-4 bg-red-500 text-white rounded-lg mb-4">
              {errorMessage}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title" className="block text-sm font-medium">
                Título
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-lg"
                required
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium"
              >
                Descripción
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-lg"
                rows="3"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="imageFile" className="block text-sm font-medium">
                Subir Imagen de Fondo
              </label>
              <input
                type="file"
                id="imageFile"
                name="imageFile"
                onChange={handleChange}
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-lg"
                accept="image/*"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-bold mb-6">Publicaciones</h2>
        {loading ? (
          <p>Cargando publicaciones...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post._id}
                className="bg-gray-800 p-6 rounded-lg shadow-md text-white"
              >
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p className="mt-2 text-gray-300">{post.description}</p>
                {post.images?.length > 0 && (
                  <Image
                    src={post.images[0]}
                    alt={post.title}
                    objectFit="cover"
                    width={500}
                    height={300}
                    quality={100}
                  />
                )}
                <div className="flex mt-4 justify-between">
                  <button
                    onClick={() => handleEdit(post)}
                    className="flex items-center text-blue-500 hover:underline"
                  >
                    <FiEdit className="mr-1" />
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="flex items-center text-red-500 hover:underline"
                  >
                    <FiTrash className="mr-1" />
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Modal de edición */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Editar Publicación</h2>
            <form className="space-y-4" onSubmit={handleUpdate}>
              <div>
                <label
                  htmlFor="editTitle"
                  className="block text-sm font-medium"
                >
                  Título
                </label>
                <input
                  type="text"
                  id="editTitle"
                  name="title"
                  value={editingPost.title}
                  onChange={(e) =>
                    setEditingPost({ ...editingPost, title: e.target.value })
                  }
                  className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-lg"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="editDescription"
                  className="block text-sm font-medium"
                >
                  Descripción
                </label>
                <textarea
                  id="editDescription"
                  name="description"
                  value={editingPost.description}
                  onChange={(e) =>
                    setEditingPost({
                      ...editingPost,
                      description: e.target.value,
                    })
                  }
                  className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-lg"
                  rows="3"
                  required
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="editImageFile"
                  className="block text-sm font-medium"
                >
                  Cambiar Imagen (opcional)
                </label>
                <input
                  type="file"
                  id="editImageFile"
                  name="imageFile"
                  onChange={(e) =>
                    setEditingPost({
                      ...editingPost,
                      imageFile: e.target.files[0],
                    })
                  }
                  className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-lg"
                  accept="image/*"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
              >
                Guardar Cambios
              </button>
              <button
                type="button"
                onClick={() => setShowEditModal(false)}
                className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
