"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Build a robust mailto link from current form data
  const buildMailto = () => {
    const to = "jullipap@gmail.com";
    const subject = `[Website] New contact from ${formData.name || "Unknown"}`;
    const bodyText = [
      "Hello Circularity Centre,",
      "",
      "Someone submitted the website contact form:",
      `Name: ${formData.name || "-"}`,
      `Email: ${formData.email || "-"}`,
      formData.phone ? `Phone: ${formData.phone}` : undefined,
      "",
      "Message:",
      formData.message || "-",
      "",
      `Submitted from: ${
        typeof window !== "undefined" ? window.location.href : "-"
      }`,
    ]
      .filter(Boolean)
      .join("\n");

    const params = new URLSearchParams({ subject, body: bodyText });
    if (formData.email) params.append("cc", formData.email);
    return `mailto:${to}?${params.toString()}`;
  };

  const handleSend = () => {
    // Use native HTML5 validation
    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    if (form && !form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const mailto = buildMailto();
    try {
      window.location.href = mailto;
      setTimeout(() => {
        try { window.location.assign(mailto); } catch {}
      }, 50);
      const a = document.createElement("a");
      a.href = mailto;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.error("mailto failed", err);
    }
  };

  return (
    <div className="bg-[#74AA88] p-[46px] rounded-[32px] shadow-lg w-[473px] h-[583px] flex flex-col justify-center gap-2.5">
      <h2 className="text-white text-2xl font-semibold mb-2">
        We&apos;d love to hear from you!
      </h2>
      <p className="text-white mb-6">Let&apos;s get in touch.</p>
  <form id="contact-form" className="w-full space-y-2.5" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full px-6 py-3 rounded-full bg-transparent placeholder-white/90 text-white border border-white/80 focus:outline-none focus:ring-2 focus:ring-white/80 focus:border-white/90"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail"
          className="w-full px-6 py-3 rounded-full bg-transparent placeholder-white/90 text-white border border-white/80 focus:outline-none focus:ring-2 focus:ring-white/80 focus:border-white/90"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full px-6 py-3 rounded-full bg-transparent placeholder-white/90 text-white border border-white/80 focus:outline-none focus:ring-2 focus:ring-white/80 focus:border-white/90"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message..."
          rows={5}
          className="w-full px-6 py-4 rounded-[20px] bg-transparent placeholder-white/90 text-white border border-white/80 focus:outline-none focus:ring-2 focus:ring-white/80 focus:border-white/90 min-h-[160px] resize-none"
          required
        ></textarea>
        <div className="pt-2">
          <button
            type="button"
            onClick={handleSend}
            className="w-fit bg-white text-[#74AA88] font-semibold py-3 px-8 rounded-full shadow-lg shadow-black/10 hover:bg-gray-100 transition-colors mx-auto block"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
}
