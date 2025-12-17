import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            {/*------------------ Header -------------------*/}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
            >
                <h2 className="font-playfair text-3xl md:text-5xl font-semibold text-secondary mb-4">
                    Get in <span className="text-primary font-bold">Touch</span>
                </h2>
                <p className="max-w-2xl mx-auto text-accent text-sm md:text-base">
                    Have questions or ready to plan your dream event?
                    We’d love to hear from you.
                </p>
            </motion.div>

            {/*------------------- Content ------------------*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                {/*--------- Contact Info ----------*/}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <div className="bg-pink-50 border border-pink-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="font-playfair text-xl font-semibold text-secondary mb-4">
                            Contact Information
                        </h3>

                        <div className="space-y-4 text-accent">
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-primary" />
                                <span>+880 1234-567890</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-primary" />
                                <span>support@styleddecor.com</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-primary" />
                                <span>Dhaka, Bangladesh</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border rounded-2xl p-6 shadow-sm">
                        <h4 className="font-semibold text-secondary mb-2">
                            Business Hours
                        </h4>
                        <p className="text-sm text-accent">
                            Saturday – Thursday: 10:00 AM – 8:00 PM <br />
                            Friday: Closed
                        </p>
                    </div>
                </motion.div>

                {/*----------- Contact Form -------------*/}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
                >
                    <h3 className="font-playfair text-xl font-semibold text-secondary mb-6">
                        Send Us a Message
                    </h3>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Write your message..."
                                className="textarea textarea-bordered w-full"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full btn btn-md bg-primary text-white hover:bg-primary/90 transition-all rounded-full"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
