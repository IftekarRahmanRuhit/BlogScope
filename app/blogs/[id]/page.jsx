import getBlog from "@/lib/getBlog";

export default async function Blog ({params}) {

    const {id} = params

    const blog = await getBlog(id)
 
    
    return (
    <div className=" md:w-1/2 mx-auto my-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
        <p className="text-gray-500 text-sm ">Post ID: {blog.id}</p>
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p className="text-gray-700 leading-relaxed">{blog.body}</p>
          
        </div>
      </div>
    </div>
    );
};



// import { getBlog } from '@/lib/getBlog';

// export default async function BlogPost({params}) {
//      const {id} = params

//     const blog = await getBlog(id)

//   return (
//     <div className="container mx-auto my-12 px-4 sm:px-6 lg:px-8">
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="p-6">
//           <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
//           <p className="text-gray-700 leading-relaxed">{blog.body}</p>
//           <p className="text-gray-500 text-sm mt-4">Post ID: {blog.id}</p>
//         </div>
//       </div>
//     </div>
//   );
// }