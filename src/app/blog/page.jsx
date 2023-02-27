import Link from 'next/link';

const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

const Blog = async () => {
  const data = await getData();
  return (
  <main className='flex flex-col justify-center items-center gap-10'>
    <h1 className='font-bold text-3xl'>Blog Posts</h1>
    <ul className='grid grid-cols-4 p-10'>
      {data.map((post, index) => (
        <li 
        className='p-5 m-5 rounded-xl bg-white'
        key={index}>
          <Link href={`blog/${post.id}`}>
            <div className="text-black">  
              <h3 className='font-bold text-lg mb-5'>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </main>
  );
};

export default Blog;
