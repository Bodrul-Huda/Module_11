import Image from "next/image";
import Data from "../../../data/blogData.json";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <div className=" container mx-auto py-8 px-5">
        <Link href="/">
          <button className="py-2">&#60;&#60;Back to Home</button>
        </Link>
        <h1 className="text-xl font-semibold py-2">Latest Posts</h1>
        <div className=" flex flex-wrap ">
          {Data.map((post) => (
            <Link
              href={`/blog/${post.id}`}
              key={post.id}
              className=" bg-slate-100 w-96 h-100 border rounded-md my-3 mx-3 shadow-md hover:scale-105 hover:ease-in-out hover:duration-700 "
            >
              <div className="relative w-full h-96">
                <Image src={post.image} layout="fill" alt="movies" />
              </div>
              <h3 className="text-lg font-semibold text-center">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
