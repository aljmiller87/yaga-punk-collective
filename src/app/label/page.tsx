import React from "react";

export default function LabelPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Music Labels</h1>
      <p className="text-lg mb-8">
        Discover the music labels we work with and support.
      </p>

      <div className="grid gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Featured Labels</h2>
          <p className="text-gray-600">
            Content for featured music labels will be displayed here.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">All Labels</h2>
          <p className="text-gray-600">
            Browse through our complete collection of music labels.
          </p>
        </div>
      </div>
    </div>
  );
}
