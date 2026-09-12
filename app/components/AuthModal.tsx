"use client";

import { useState } from "react";
import { X, Mail, Lock, User as UserIcon } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "signup";
}

export default function AuthModal({
  isOpen,
  onClose,
  initialMode = "login",
}: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {mode === "login" ? "Welcome back to AirNest" : "Create your AirNest account"}
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            {mode === "login"
              ? "Enter your credentials to access your stays"
              : "Join millions of travelers discovering unique stays worldwide"}
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center text-emerald-600 font-semibold flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl font-bold">
              ✓
            </div>
            <span>{mode === "login" ? "Successfully logged in!" : "Account created successfully!"}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {mode === "signup" && (
              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">Full Name</label>
                <div className="relative">
                  <UserIcon className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF5A5F] focus:outline-none"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-xs font-semibold text-gray-700 block mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF5A5F] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-700 block mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF5A5F] focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-3 text-sm font-semibold text-white bg-[#FF5A5F] hover:bg-[#e0484d] rounded-xl shadow-md transition transform active:scale-98"
            >
              {mode === "login" ? "Log in" : "Sign up"}
            </button>
          </form>
        )}

        {/* Toggle Mode Footer */}
        <div className="mt-6 pt-4 border-t border-gray-100 text-center text-xs text-gray-600">
          {mode === "login" ? (
            <span>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("signup")}
                className="font-bold text-[#FF5A5F] hover:underline"
              >
                Sign up
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("login")}
                className="font-bold text-[#FF5A5F] hover:underline"
              >
                Log in
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
