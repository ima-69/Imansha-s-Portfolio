import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "99d7bc73-76c9-4fb3-b984-9dfd1753b8d9",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setPopupMessage("Message sent! I will get back to you soon.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setPopupMessage("Failed to send message. Please try again later.");
        console.error("Web3Forms error:", data);
      }
    } catch (error) {
      setPopupMessage("An error occurred while sending message.");
      console.error("Fetch error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Automatically hide popup after 3 seconds
  useEffect(() => {
    if (popupMessage) {
      const timer = setTimeout(() => setPopupMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [popupMessage]);

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          <p className="mt-4 text-muted-foreground">
            Have a question or want to work together? Send me a message!
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="flex items-start">
                <Mail className="w-5 h-5 mt-1 mr-3 text-primary" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:imansha.idr@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    imansha.idr@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 mt-1 mr-3 text-primary" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+94763117229"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +94 76 311 7229
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 text-primary" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Mahiyangana, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Your message"
                />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  <Send size={18} className="mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Popup message */}
      {popupMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-3 rounded-md shadow-lg animate-fade-in-out z-50">
          {popupMessage}
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-out {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
          }
          10%,
          90% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
          }
        }
        .animate-fade-in-out {
          animation: fade-in-out 3s ease forwards;
        }
      `}</style>
    </section>
  );
}
