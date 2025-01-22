"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Swal from "sweetalert2";
import api from "@/utils/api";
import { getToken, isAuthenticated, redirectToLogin } from "@/utils/auth";
import { useRouter } from "next/navigation";

export default function PersonalAdmin() {
  const { t } = useLanguage();
  const router = useRouter();

  const [personalData, setPersonalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    email: "",
  });

  // Verifica si el usuario está autenticado
  useEffect(() => {
    if (!isAuthenticated()) {
      Swal.fire({
        title: "Acceso restringido",
        text: "Por favor, inicia sesión para acceder.",
        icon: "warning",
        confirmButtonText: "Ir al login",
      }).then(() => {
        redirectToLogin(router);
      });
      return;
    }

    // Cargar datos de la API si está autenticado
    const fetchPersonalData = async () => {
      const token = getToken();
      try {
        const response = await api.get("/personal", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPersonalData(response.data);
      } catch (err) {
        setError(err.message || "Error al cargar los datos");
      } finally {
        setLoading(false);
      }
    };

    fetchPersonalData();
  }, [router]);

  // Manejar clic en "Editar"
  const handleEdit = (id) => {
    const person = personalData.find((p) => p._id === id);
    if (person) {
      setEditingId(id);
      setFormData({
        name: person.name,
        position: person.position,
        email: person.email,
      });
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({ name: "", position: "", email: "" });
  };

  // Guardar cambios
  const handleSaveEdit = async () => {
    const token = getToken();
    try {
      const updatedPerson = await api.put(
        `/personal/${editingId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Swal.fire({
        title: "Actualizado",
        text: "El registro se ha actualizado correctamente.",
        icon: "success",
      });

      setPersonalData((prev) =>
        prev.map((p) => (p._id === editingId ? updatedPerson.data : p))
      );
      handleCancelEdit();
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: err.response?.data?.message || "Error actualizando los datos",
        icon: "error",
      });
    }
  };

  // Eliminar registro
  const handleDelete = async (id) => {
    const token = getToken();
    const confirmDelete = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará el registro de forma permanente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (confirmDelete.isConfirmed) {
      try {
        await api.delete(`/personal/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        Swal.fire({
          title: "Eliminado",
          text: "El registro ha sido eliminado correctamente.",
          icon: "success",
        });

        setPersonalData((prev) => prev.filter((p) => p._id !== id));
      } catch (err) {
        Swal.fire({
          title: "Error",
          text: err.response?.data?.message || "Error eliminando el registro",
          icon: "error",
        });
      }
    }
  };

  // Agregar nuevo registro
  const handleAddNew = async () => {
    const token = getToken();
    try {
      const newPerson = await api.post(
        "/personal",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Swal.fire({
        title: "Agregado",
        text: "El registro se ha agregado correctamente.",
        icon: "success",
      });

      setPersonalData((prev) => [...prev, newPerson.data]);
      setFormData({ name: "", position: "", email: "" });
      setShowAddForm(false);
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: err.response?.data?.message || "Error agregando el registro",
        icon: "error",
      });
    }
  };

  // Manejo del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background-primary">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-red-500 text-center">{t.errorMessage || error}</p>
    );
  }


  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white sm:mt-20 mt-10">
      <section className="py-8 px-6 bg-white dark:bg-background-tertiary">
        <div className="p-8 text-black dark:text-white">
          <h1 className="text-3xl font-bold mb-6 text-center">
            {t.adminTitle || "Gestión de Personal"}
          </h1>
          <div className="mb-4 flex justify-between">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={() => setShowAddForm((prev) => !prev)}
            >
              {showAddForm ? "Cancelar" : "Agregar Nuevo"}
            </button>
          </div>

          <table className="table-auto w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Puesto</th>
                <th className="px-4 py-2">Correo</th>
                <th className="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {personalData.map((person) => (
                <tr
                  key={person._id}
                  className="border-t border-gray-300 dark:border-gray-700"
                >
                  <td className="px-4 py-2">{person.name}</td>
                  <td className="px-4 py-2">{person.position}</td>
                  <td className="px-4 py-2">{person.email}</td>
                  <td className="px-4 py-2 flex space-x-2">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      onClick={() => handleEdit(person._id)}
                    >
                      Editar
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      onClick={() => handleDelete(person._id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Formulario de Edición */}
          {editingId && (
            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded shadow-md">
              <h2 className="text-xl font-bold mb-4 text-center">
                Editar Registro
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSaveEdit();
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="p-2 border rounded"
                    required
                  />
                  <input
                    type="text"
                    name="position"
                    placeholder="Puesto"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="p-2 border rounded"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="p-2 border rounded"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    onClick={handleCancelEdit}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Formulario de Agregar */}
          {showAddForm && (
            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded shadow-md">
              <h2 className="text-xl font-bold mb-4 text-center">
                Agregar Nuevo Registro
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddNew();
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="p-2 border rounded"
                    required
                  />
                  <input
                    type="text"
                    name="position"
                    placeholder="Puesto"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="p-2 border rounded"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="p-2 border rounded"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    onClick={() => setShowAddForm(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Agregar
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
