import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import blog from "@public/images/blog.jpg";
import { posts } from "@/data/posts";
import hero from "@public/images/hero.png";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import parse from "html-react-parser";
import moment from "moment";

async function Read({ params }) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  const postId = params.id;

  const { data: post, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", postId)
    .single();

  return (
    <>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gray-900">
        <div className="flex flex-col justify-between px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full max-w-3xl prose lg:prose-xl prose-invert ">
            <div className="my-4 flex items-center justify-between">
              <Link
                className="text-xl flex flex-row items-center mb-6 no-underline"
                href={`/`}
              >
                <FaChevronLeft /> Back
              </Link>

              <Link className="text-xl mb-6 no-underline" href={"/"}>
                #Design
              </Link>
            </div>

            <h1 className="mb-4 mt-4 text-3xl font-extrabold  lg:mb-6 lg:text-4xl text-white">
              {post.title}
            </h1>

            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-white">
                  <Image
                    height={40}
                    width={40}
                    className="mr-4 w-10 h-10 rounded-full"
                    src={hero}
                    alt={
                      "Lorem excepteur dolore ex veniam ad velit officia enim velit consequat consequat nulla eiusmod."
                    }
                  />

                  <Link
                    href={"/"}
                    rel="author"
                    className="no-underline text-xl font-bold text-white mr-2"
                  >
                    Lolenti Mohammad
                  </Link>

                  <time
                    className="text-base font-light text-gray-400 mx-1"
                    dateTime={"2022-02-08".toString()}
                    title="February 8th, 2022"
                  >
                    {moment(post.created_at).format("MMMM D, YYYY")}
                  </time>

                  <div className="text-base w-1 h-1 rounded-full bg-white mx-1"></div>

                  <p className="text-base font-light text-gray-400">
                    5 Min Read
                  </p>
                </div>
              </address>
            </header>

            <figure>
              <div className="">
                <Image
                  className="mx-auto"
                  src={post.image}
                  alt="demo image"
                  width={1000}
                  height={324}
                />
              </div>

              <figcaption className="text-center">
                Digital art by Anonymous
              </figcaption>
            </figure>

            {parse(post.content)}
          </article>
        </div>
      </main>
    </>
  );
}
export default Read;
