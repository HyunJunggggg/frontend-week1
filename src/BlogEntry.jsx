
function BlogEntry(props) {
    const buttonLabel = "Read More about Me ";
    return (
      <div className="entry">
        <h2>{props.title}, Introduce " Yolo Lee " </h2>
        <p>{props.summary}</p>
        <button>{buttonLabel}</button>
      </div>
    );
  }

    export default BlogEntry;