import BlogEntry from './BlogEntry';

function App() {
  return (
    <div>
      <h1>My Blog </h1>
      <BlogEntry title="Yolo Lee is cool" summary=" Yolo Lee is a fictional character used for demonstration purposes. Born
        with an adventurous and curious personality," />
      <BlogEntry title="Do you want to meet Yolo?" summary="  Yolo Lee is a fictional character used for demonstration purposes. Born
        with an adventurous and curious personality, Yolo enjoys exploring new
        ideas, hobbies, and experiences. Always eager to learn, Yolo balances
        creativity with practical thinking, making decisions thoughtfully yet
        confidently. Friends describe Yolo as friendly, energetic, and
        approachable, someone who easily connects with others. Whether
        experimenting with art, technology, or fitness, Yolo approaches each
        activity with enthusiasm and a sense of fun. Yolo Lee’s story is not
        tied to any real-life achievements, but serves as a flexible example of
        a motivated and personable individual for design, writing, or app
        mockups."  />
      <BlogEntry title="Yolo Lee is cool" summary=" Yolo Lee is a fictional character used for demonstration purposes. Born
        with an adventurous and curious personality, Yolo enjoys exploring new
        ideas, hobbies, and experiences. Always eager to learn, Yolo balances
        creativity with practical thinking, making decisions thoughtfully yet
        confidently. " />
      {/* blogentry can have different contents in it  */}
    </div>
  );
}

export default App;
