"use client";
import React from "react";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Editor from "@components/Editor";

import ProtectedRouter from "@components/ProtectedRouters/ProtectedRoute";

const page = () => {
  const supabase = createClientComponentClient();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Insert data into the 'your_table_name' table
      const { data, error } = await supabase
        .from("blog_posts")
        .insert([{ title: title, image: image, content: content }])
        .select();

      if (error) {
        console.error("Error inserting data:", error);
      } else {
        console.log("Data inserted successfully:", data);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <ProtectedRouter>
      <section className="container md:px-5 py-10 mx-auto  ">
        <div className="lg:px-40">
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 ">
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="email">Title</Label>
              <Input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="rounded-none text-black"
              />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="Image">Image URL</Label>
              <Input
                type="text"
                id="Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://example.com"
                className="rounded-none text-black"
              />
            </div>
            <div>
              <Label>Content</Label>
              <Editor setContent={setContent} />
            </div>
            <div>
              <Button type="submit">Publish</Button>
            </div>
          </form>
        </div>
      </section>
    </ProtectedRouter>
  );
};

export default page;
