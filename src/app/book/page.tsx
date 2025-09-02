import React from "react";

export default function BookPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Books</h1>
      <p className="text-lg mb-8">
        Discover books, literature, and written works we recommend and support.
      </p>

      <div className="grid gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Featured Books</h2>
          <p className="text-gray-600">
            Check out our curated selection of must-read books.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Book Reviews</h2>
          <p className="text-gray-600">
            Read our thoughts on books that matter to our community.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Reading Lists</h2>
          <p className="text-gray-600">
            Themed reading lists for different topics and interests.
          </p>
        </div>
      </div>
    </div>
  );
}
