import commentsData from "../../assets/data/comments.json";

function CommentsListPage() {
  const comments = commentsData;
  console.log(comments);

  return (
    <div>
      <h1>Comments List Page</h1>
      <ul>
        {commentsData?.comments.length > 0 ? (
          commentsData.comments.map((commentItem) => <div key = {commentItem.id}>
            <h2>Comment: {commentItem.id}</h2>
            <h5>{commentItem.user.fullName} ({commentItem.user.username})</h5>
            <p>{commentItem.body}</p>
            <h6>{commentItem.likes} Likes</h6>
          </div>)
        ) : (
          <h2>No data found</h2>
        )}
      </ul>
    </div>
  );
}

export default CommentsListPage;
