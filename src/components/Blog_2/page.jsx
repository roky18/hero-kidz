import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Blog_2 = () => {
  const blogs = [
    {
      title: "শিশুদের শেখার খেলনা কেন গুরুত্বপূর্ণ?",
      date: "January 25, 2026",
      excerpt:
        "খেলনা শুধু মজা নয় — এটি শিশুদের cognitive, motor এবং social skills উন্নত করতে সাহায্য করে। আজ আমরা জানবো কোন ধরনের খেলনাগুলো সবচেয়ে উপকারী!",
      slug: "importance-of-educational-toys",
    },
    {
      title: "কিভাবে উপযোগী খেলনা বাছাই করবো?",
      date: "January 20, 2026",
      excerpt:
        "শিশুদের বয়স, শিখার ধরণ ও নিরাপত্তা দেখে যখন খেলনা বাছাই করবে — তখন কিছু specific criteria মনে রাখা উচিত।",
      slug: "how-to-choose-learning-toys",
    },
    {
      title: "Play‑Based Learning এর উপকারিতা",
      date: "January 15, 2026",
      excerpt:
        "Play‑based learning শিশুদের মধ্যে curiosity ও problem‑solving skill বাড়ায়। চলবে বলি কীভাবে play‑based activity শেখা সহজ করে!",
      slug: "benefits-of-play-based-learning",
    },
  ];

  return (
    <div className="max-w-5xl min-h-screen mx-auto px-6 py-10 space-y-8">
      <h1 className="text-4xl font-bold text-center">Our Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((post, i) => (
          <div
            key={i}
            className="border rounded-lg shadow hover:shadow-lg transition p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link
              href={`/blog`}
              className="text-blue-600 font-medium flex items-center gap-2"
            >
              Read More <FaArrowRight />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog_2;
