import emailjs from "emailjs-com"
import { useState } from "react"

function Contact() {

    const [formdata, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then(() => {
            alert("Message Sent!")
            setFormData({ name: "", email: "", message: "" })
        }).catch(() => {
            alert("Oops! Something went wrong. Please try again.")
        })
    }


    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-[#020617] relative overflow-hidden pt-32">

            {/* Neon background glows */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

            {/* Main Card */}
            <div className="relative z-10 max-w-4xl w-full bg-black/40 backdrop-blur-xl
                      rounded-3xl p-10 text-white
                      shadow-[0_0_35px_rgba(34,211,238,0.2)] text-center mt-5">

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6
                       text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]">
                    Contact Me
                </h1>

                {/* Subtext */}
                <p className="text-lg md:text-xl text-gray-300 mb-10">
                    I’m currently seeking{" "}
                    <span className="text-yellow-400 font-semibold">
                        frontend and MERN development opportunities
                    </span>
                    . If you’d like to collaborate or discuss an opportunity,
                    feel free to reach out.
                </p>

                {/* Contact Form */}
                <form className="grid gap-5 max-w-xl mx-auto" onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Your Name"
                        id="name"
                        name="name"
                        required
                        value={formdata.name}
                        className="p-4 rounded-xl bg-black/50 border border-cyan-400/30
                       text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.4)]
                       transition"
                        onChange={(e) => setFormData({ ...formdata, name: e.target.value })}
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        id="email"
                        name="email"
                        required
                        value={formdata.email}
                        className="p-4 rounded-xl bg-black/50 border border-cyan-400/30
                       text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.4)]
                       transition"
                        onChange={(e) => setFormData({ ...formdata, email: e.target.value })}
                    />

                    <textarea
                        rows="5"
                        id="message"
                        name="message"
                        required
                        value={formdata.message}
                        placeholder="Your Message"
                        className="p-4 rounded-xl bg-black/50 border border-cyan-400/30
                       text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.4)]
                       transition"
                        onChange={(e) => setFormData({ ...formdata, message: e.target.value })}
                    ></textarea>

                    <button
                        type="submit"
                        className="mt-4 bg-yellow-400 text-black py-3 rounded-full
                       font-semibold hover:bg-yellow-300
                       transition transform hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]"
                    >
                        Send Message
                    </button>
                </form>

                {/* Contact Details */}
                <div className="mt-12 text-center space-y-3 text-lg text-gray-300">
                    <p>
                        📧 Email :{" "}
                        <span className="text-cyan-400 hover:underline">
                            mhd.adhnan26@gmail.com
                        </span>
                    </p>

                    <p>
                        🔗 GitHub Link :{" "}
                        <span className="text-cyan-400 hover:underline">
                            github.com/Adhnan26
                        </span>
                    </p>

                    <p>
                        💼 LinkedIn :{" "}
                        <span className="text-cyan-400 hover:underline">
                            linkedin.com/in/adhnan26
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
