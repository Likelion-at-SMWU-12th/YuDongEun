import { useQuery } from "@tanstack/react-query";

function App() {
  async function getPosts() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    //return await response.json();
    throw new Error("An error occurrec!");
  }
  const {
    data: postsData,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isPending) return "로딩 중입니다...";

  if (isError) return "에러가 발생했습니다.";

  console.log("postsData", postsData);

  const posts = postsData ?? [];

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
