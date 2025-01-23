

import React from 'react';
import Link from 'next/link';
import getAllBlogs  from '@/lib/getAllBlogs';

export default async function Blogs() {
  const blogs = await getAllBlogs();

  return (
    <div className="w-4/5 mx-auto">
        <div>
            <p className='text-center mt-5 text-3xl font-bold'>Blog Posts</p>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="card bg-base-100 shadow-xl cursor-pointer hover:scale-105 transition transform">
            <div className="card-body flex flex-col">
              <h2 className="card-title">{blog.title}</h2>
              <p>{blog.body.slice(0, 100)}...</p>
              <div className="mt-auto">
                <Link href={`/blogs/${blog.id}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}