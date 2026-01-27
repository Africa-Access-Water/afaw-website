import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

const GoogleTranslate = () => {
  const location = useLocation();

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (!window.google || !window.google.translate) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    } else {
      window.googleTranslateElementInit();
    }
  }, [location.pathname]);

  return <div id="google_translate_element" />;
};

export default function FloatingGoogleTranslate() {
  const [open, setOpen] = useState(false);
  const fabRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (fabRef.current && !fabRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={fabRef}
      style={{
        position: "fixed",
        bottom: 24,
        left: 24,
        zIndex: 9999,
      }}
    >
      {/* 🌍 FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 16px",
          borderRadius: 30,
          border: "none",
          background: "#fff",
          color: "#1A76D1",
          fontSize: 14,
          cursor: "pointer",
          boxShadow: "0 6px 20px rgba(0,0,0,.25)",
        }}
        aria-label="Translate"
      >
        🌍
        <span>Translate</span>
      </button>

      {/* ✅ ALWAYS MOUNTED */}
      <div
        style={{
          marginTop: 10,
          background: "#fff",
          borderRadius: 12,
          padding: "10px 12px",
          boxShadow: "0 8px 25px rgba(0,0,0,.2)",
          display: open ? "block" : "none", // 👈 visibility only
        }}
      >
        <GoogleTranslate />
      </div>
    </div>
  );
}
