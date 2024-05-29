import React from 'react';
import TreesContent from './TreesContent';
import Image from 'next/image';
import Link from 'next/link';

const TreesList = () => {
  return (
    <div className="container mx-auto px-14 py-8">
      <h1 className="text-3xl font-semibold mb-6">Explore Trees</h1>
      <nav className="mb-8 mx-auto" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/">
              <div className="text-gray-500 hover:text-gray-700">Home</div>
            </Link>
          </li>
          <li>
            <span className="text-gray-500">{'>'}</span>
          </li>
          <li>
            <div>
              <div className="text-jade-600">Trees</div>
            </div>
          </li>
        </ol>
      </nav>
      <div className="grid grid-cols-3 md:grid-cols-1  gap-4">
        {TreesContent.map((tree, index) => (
          <Link key={index} href={`/trees/${tree.slug}`}>
            <div className="rounded-lg overflow-hidden  flex flex-col hover:shadow-sm transition duration-300 h-full border border-slate-200 dark:border-slate-800">
              <div className="relative h-52">
                <Image
                  src={tree.image}
                  alt={tree.treename}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4 flex-grow">
                <h2 className="text-lg font-semibold mb-2">{tree.treename}</h2>
                <p className="text-gray-600">{tree.smalldesc}</p>
                <div className=" pt-2 text-jade-500 pl-[90%]">{tree.icon}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TreesList;
