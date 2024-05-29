import TreesContent from "@/components/Trees/TreesContent";
import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import TreeSpeechButton from "@/components/Trees/TreeSpeechButton";
import Head from "next/head";

export function generateStaticParams() {
  return TreesContent.map((tree) => ({
    name: tree.slug,
  }));
}

// Metadata generator function
export async function generateMetadata({ params }) {
  const treeSlug = params.name;
  const tree = TreesContent.find((tree) => tree.slug === treeSlug);

  if (!tree) {
    return {
      title: 'Tree Not Found',
    };
  }

  return {
    title: tree.treename,
  };
}

const page = ({ params }) => {
  const treeSlug = params.name;
  const tree = TreesContent.find((tree) => tree.slug === treeSlug);

  if (!tree) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>{tree.treename} - iGreen</title>
      </Head>
      <div className="container mx-auto px-10 py-8">
        <div className="mb-8 flex flex-col items-center justify-center">
          <div className="relative w-[70%] md:w-full h-48 ">
            <Image
              src={tree.image}
              alt={tree.treename}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <nav className="mb-8 max-w-3xl mx-auto" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/">
                <div className="text-gray-500 hover:text-gray-700">Home</div>
              </Link>
            </li>
            <li>
              <span className="text-gray-500">{">"}</span>
            </li>
            <li>
              <Link href="/trees">
                <div className="text-gray-500 hover:text-gray-700">Trees</div>
              </Link>
            </li>
            <li>
              <span className="text-gray-500">{">"}</span>
            </li>
            <li className="text-jade-600">{tree.treename}</li>
          </ol>
        </nav>
        <div className="max-w-2xl mx-auto">
          <h1 className=" font-bold text-4xl flex gap-2 text-jade-600 mb-4">
            {tree.treename}{" "}
            <span>
              <TreeSpeechButton tree={tree} />
            </span>
          </h1>

          <h2 className="text-2xl italic mb-4">{tree.scientificname}</h2>
          <p className="text-gray-500 text-lg mb-6">{tree.desc}</p>
          <p className=" text-lg text-jade-500">{tree.funny}</p>
        </div>
      </div>
    </>
  );
};

export default page;
