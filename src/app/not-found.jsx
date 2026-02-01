import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { fontBangla } from "./layout";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
      <p className="text-2xl font-semibold mb-3">Page Not Found</p>
      <p
        className={`${fontBangla.className} text-gray-600 font-bold text-xl mb-6`}
      >
        দুঃখিত! আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি পাওয়া যায়নি।
      </p>

      <Link
        href="/"
        className="flex items-center gap-2  px-5 py-3 rounded-lg btn btn-primary"
      >
        <FaArrowLeft />
        Back to Home
      </Link>
    </div>
  );
};

export default Error404;
