"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthModal from "../components/AuthModal";
import { Mail, Phone, MapPin, Clock, ChevronDown, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "Room Booking",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        inquiryType: "Room Booking",
        subject: "",
        message: "",
      });
    }, 4000);
  };

  const faqs = [
    {
      question: "What types of stay options are available at HEAVENS Munnar?",
      answer: "We offer Deluxe Resort Rooms, Group Dormitories, Fresh Up day stay facilities, Stargazing Mountain Tent Camping, and cozy wooden A-Hut cottages.",
    },
    {
      question: "Can I book Jeep Trekking and Camp Fire during my stay?",
      answer: "Yes! Offroad Jeep Trekking tours and Night Camp Fires can be booked directly at the reception or reserved in advance via WhatsApp.",
    },
    {
      question: "Is the Swimming Pool open to all resort guests?",
      answer: "Yes, our hill-view swimming pool is accessible to guests staying in our Rooms, A-Huts, and Dormitory.",
    },
    {
      question: "What are the reception contact numbers for instant booking?",
      answer: "You can reach our reception team directly at +91 7902832575 or +91 8606392143, or message us on WhatsApp.",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar onOpenAuth={(mode) => { setAuthMode(mode); setAuthModalOpen(true); }} />

        <main className="max-w-7xl mx-auto px-4 md:px-12 py-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#FF5A5F] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2">
              Reception & Booking
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Contact HEAVENS Munnar
            </h1>
            <p className="text-sm sm:text-base text-gray-500">
              Get in touch with our reception team for Room Bookings, Dormitory, Tent Camping, A-Huts, or Jeep Trekking.
            </p>
          </div>

          {/* Form & Info Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-10 shadow-xs">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Direct Booking Query</h2>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center text-emerald-800 flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-lg font-bold">Inquiry Received!</h3>
                  <p className="text-xs text-emerald-600 max-w-sm">
                    Thank you. Our reception team will contact you shortly via phone or WhatsApp.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF5A5F] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">Phone Number / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="+91 9876543210"
                        className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF5A5F] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">Stay / Activity Required</label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF5A5F] focus:outline-none bg-white"
                      >
                        <option value="Room Booking">Deluxe Rooms</option>
                        <option value="Dormitory">Dormitory Stay</option>
                        <option value="A-Hut">A-Hut Cottage</option>
                        <option value="Tent Camping">Tent Camping</option>
                        <option value="Fresh Up">Fresh Up Rooms</option>
                        <option value="Jeep Trekking">Jeep Trekking Safari</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">Check-in Date</label>
                      <input
                        type="date"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF5A5F] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Special Requirements / Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us guest count, stay duration, or campfire/jeep safari requests..."
                      className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF5A5F] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 py-3.5 px-6 text-sm font-semibold text-white bg-[#FF5A5F] hover:bg-[#e0484d] rounded-xl shadow-md transition transform active:scale-98 cursor-pointer"
                  >
                    Submit Booking Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Right: Contact Information Box */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-gray-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col gap-6 shadow-lg">
                <h3 className="text-xl font-bold">Reception Contacts</h3>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF5A5F]/20 text-[#FF5A5F] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-semibold block uppercase">Resort Location</span>
                    <p className="text-sm font-medium text-gray-100 mt-0.5">
                      HEAVENS Holiday Resort,<br />Munnar, Kerala, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF5A5F]/20 text-[#FF5A5F] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-semibold block uppercase">Reception Phone / WhatsApp</span>
                    <div className="text-sm font-semibold text-gray-100 mt-1 flex flex-col gap-1">
                      <a href="tel:7902832575" className="hover:text-[#FF5A5F]">📞 7902832575</a>
                      <a href="tel:8606392143" className="hover:text-[#FF5A5F]">📞 8606392143</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF5A5F]/20 text-[#FF5A5F] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-semibold block uppercase">Instagram Page</span>
                    <a
                      href="https://instagram.com/heavensmunnar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#FF5A5F] hover:underline block mt-0.5"
                    >
                      @heavensmunnar
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-gray-800">
                  <div className="w-10 h-10 rounded-full bg-[#FF5A5F]/20 text-[#FF5A5F] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-semibold block uppercase">Reception Desk</span>
                    <p className="text-sm font-medium text-gray-100 mt-0.5">
                      24 Hours Open Reception Desk
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="max-w-4xl mx-auto my-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Quick answers about staying and booking at HEAVENS Munnar.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-gray-200/80 rounded-2xl p-5 bg-white shadow-xs cursor-pointer transition"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                  >
                    <div className="flex items-center justify-between font-bold text-gray-900 text-sm sm:text-base">
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#FF5A5F]" : ""
                        }`}
                      />
                    </div>
                    {isOpen && (
                      <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>

      <Footer />
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} initialMode={authMode} />
    </div>
  );
}
