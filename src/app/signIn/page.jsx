"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!formData.password) {
      newErrors.password = "Kata sandi wajib diisi";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Login berhasil!");
        setFormData({ email: "", password: "" });
        // TODO: redirect ke dashboard/home
      } else {
        setMessage(data.message || "Email atau kata sandi salah");
      }
    } catch (error) {
      setMessage("Server error, coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-4 py-2">
      <div className="flex flex-col gap-5 w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-xl font-bold text-green-700">
            Selamat Datang Kembali!
          </h1>
          <p className="text-sm text-gray-600">
            Masuk ke akunmu untuk melanjutkan.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Masukkan email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 text-sm"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 relative">
            <label className="text-sm" htmlFor="password">
              Kata Sandi
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan kata sandi"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 text-sm"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition-all disabled:opacity-60"
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>
        {message && (
          <p className="text-center text-sm text-gray-700">{message}</p>
        )}
        <p className="text-center text-xs text-gray-600">
          Belum punya akun?{" "}
          <a href="/signup" className="text-green-700 hover:underline">
            Daftar di sini
          </a>
        </p>
      </div>
    </div>
  );
}
