import React from "react";
import Card from "@components/Blog/Card";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { Button } from "@components/ui/button";

const page = async function () {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { data: blogPosts, error } = await supabase
    .from("blog_posts")
    .select("*");

  return (
    <section className="container md:px-5 py-10 mx-auto">
      <div className="flex justify-between">
        <h2 className="max-md:text-xl">Blog Posts</h2>{" "}
      </div>

      <main className="my-12 grid grid-cols-1 gap-2 md:gap-3 lg:gap-4 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
        {blogPosts?.map((item) => (
          <Link href={`/blog/${item.id}`} className="cursor-pointer">
            <Card key={item.id} item={item} />
          </Link>
        ))}
      </main>
    </section>
  );
};

export default page;
