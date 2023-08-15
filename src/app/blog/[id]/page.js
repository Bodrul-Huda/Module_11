import Image from "next/image";
import Data from "../../../../data/blogData.json";
import Link from "next/link";

export default async function Post({ params }) {
  const id = params.id;
  const post = Data.find((post) => post.id == id);

  return (
    <section className="container mx-auto py-16 px-4 w-1/2">
      <Link href="/blog">
        <button className="py-2">&#60;&#60;Back</button>
      </Link>
      <div>
        <h1 className="text-gray-800 text-center font-bold text-xl">
          {post.title}
        </h1>
        <p className="text-sm text-slate-500 text-right py-1">
          Publish on: {post.date}
        </p>
      </div>
      <div className="image m-3 pt-5 flex justify-center">
        <Image src={post.image} width={1000} height={1000} alt="image1" />
      </div>
      <div className=" p-2  flex justify-center text-justify">
        <p className="text-gray-600">{post.content}</p>
      </div>
    </section>
  );
}
