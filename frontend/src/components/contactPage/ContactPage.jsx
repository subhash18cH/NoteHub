import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate()
  const onSubmitHandler = (event) => {
    toast.success("Message sent successfully!")
    event.preventDefault();
    navigate("/")
  };
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-74px)] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-4">
          We'd love to hear from you! If you have any questions or feedback,
          feel free to reach out to us.
        </p>
        <form onSubmit={onSubmitHandler} className="space-y-4">
          <div>
            <label
              className="block text-left text-gray-700 mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              required
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-left text-gray-700 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-left text-gray-700 mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              required
              id="message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;