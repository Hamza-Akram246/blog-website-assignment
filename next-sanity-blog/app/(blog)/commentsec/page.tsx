"use client";

import React, { useState, useEffect } from "react";

// Define the type for a comment
interface Comment {
  username: string;
  comment: string;
  id: number;
}

const CommentSec = () => {
  // Set the correct type for comments state
  const [comments, setComments] = useState<Comment[]>([]);
  const [username, setUsername] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  // Load comments from local storage when component mounts (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedComments = JSON.parse(localStorage.getItem("comments") || "[]") as Comment[];
      setComments(storedComments);
    }
  }, []);

  // Save comments to local storage whenever comments change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("comments", JSON.stringify(comments));
    }
  }, [comments]);

  const handleAddComment = () => {
    if (username.trim() && comment.trim()) {
      const newComment: Comment = { username, comment, id: Date.now() }; // Correctly type the new comment
      setComments([newComment, ...comments]); // Add new comment to the top
      setUsername("");
      setComment("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Comments Section</h2>
      <div className="flex flex-col gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter your name"
          className="border p-2 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          placeholder="Enter your comment"
          className="border p-2 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button
          onClick={handleAddComment}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Add Comment
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3">All Comments</h3>
        <ul className="space-y-4">
          {comments.map((item) => (
            <li
              key={item.id}
              className="border p-4 rounded-md bg-gray-50 shadow-sm"
            >
              <p className="text-sm font-semibold">{item.username}</p>
              <p className="text-gray-700 mt-1">{item.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentSec;
