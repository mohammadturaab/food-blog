import PostShow from "./components/Posts/post";
import PostCreate from "./components/Posts/postcreate";

function App() {
  return (
    <div>
      <h1>FOOD BLOG</h1>
      <PostCreate/>
      <PostShow/>
    </div>
  );
}

export default App;
