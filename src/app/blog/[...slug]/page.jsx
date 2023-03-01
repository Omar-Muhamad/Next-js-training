const getData = async (slug) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
  );
  const data = await response.json();
  return data;
};

const Post = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  return (
    <main className="flex flex-col justify-center items-center gap-10">
      <h1 className="font-bold text-3xl">Blog Post</h1>
      <div className="p-5 m-5 rounded-xl bg-white">
        <div className="text-black">
          <h3 className="font-bold text-lg mb-5">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      </div>
    </main>
  );
};

export default Post;
