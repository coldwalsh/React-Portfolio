import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `mailto:colinwalsh014@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-background via-surface/20 to-background pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary mb-4">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Let's build{" "}
                        <em className="font-serif not-italic" style={{ color: "#CC7711" }}>
                            something great.
                        </em>
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
                        Have a project in mind? I'd love to hear about it. Send me a message
                        and let's discuss how we can work together.
                    </p>
                </div>

                {/* Two-column layout */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* Left — Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="glass rounded-2xl p-8 flex flex-col gap-5 animate-fade-in animation-delay-200"
                    >
                        {/* Name */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm text-foreground/70">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name..."
                                required
                                className="w-full bg-transparent rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-all duration-200"
                                style={{
                                    border: "1px solid rgba(204,119,17,0.25)",
                                }}
                                onFocus={(e) =>
                                    (e.target.style.border = "1px solid rgba(204,119,17,0.8)")
                                }
                                onBlur={(e) =>
                                    (e.target.style.border = "1px solid rgba(204,119,17,0.25)")
                                }
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm text-foreground/70">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                required
                                className="w-full bg-transparent rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-all duration-200"
                                style={{
                                    border: "1px solid rgba(204,119,17,0.25)",
                                }}
                                onFocus={(e) =>
                                    (e.target.style.border = "1px solid rgba(204,119,17,0.8)")
                                }
                                onBlur={(e) =>
                                    (e.target.style.border = "1px solid rgba(204,119,17,0.25)")
                                }
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1.5 flex-1">
                            <label className="text-sm text-foreground/70">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Your message..."
                                required
                                rows={6}
                                className="w-full bg-transparent rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none resize-none transition-all duration-200"
                                style={{
                                    border: "1px solid rgba(204,119,17,0.25)",
                                }}
                                onFocus={(e) =>
                                    (e.target.style.border = "1px solid rgba(204,119,17,0.8)")
                                }
                                onBlur={(e) =>
                                    (e.target.style.border = "1px solid rgba(204,119,17,0.25)")
                                }
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-95"
                            style={{ backgroundColor: "#CC7711" }}
                        >
                            Send Message
                            <Send size={16} />
                        </button>
                    </form>

                    {/* Right column */}
                    <div className="flex flex-col gap-6 animate-fade-in animation-delay-400">
                        {/* Contact Info card */}
                        <div className="glass rounded-2xl p-8 flex flex-col gap-6">
                            <h3 className="text-lg font-bold text-foreground">
                                Contact Information
                            </h3>

                            <ContactItem
                                icon={<Mail size={18} />}
                                label="Email"
                                value="colinwalsh014@gmail.com"
                            />
                            <ContactItem
                                icon={<Phone size={18} />}
                                label="Phone"
                                value="276-224-4208"
                            />
                            <ContactItem
                                icon={<MapPin size={18} />}
                                label="Location"
                                value="Charlottesville, VA"
                            />
                        </div>

                        {/* Availability card */}
                        <div className="glass rounded-2xl p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                                <span className="font-semibold text-foreground text-sm">
                                    Currently Available
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                I'm currently open to new opportunities and exciting projects.
                                Whether you need a full-stack engineer or just want to connect,
                                let's talk!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContactItem = ({ icon, label, value }) => (
    <div className="flex items-center gap-4">
        <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{
                backgroundColor: "rgba(204,119,17,0.12)",
                color: "#CC7711",
            }}
        >
            {icon}
        </div>
        <div>
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className="text-sm font-medium text-foreground">{value}</p>
        </div>
    </div>
);
