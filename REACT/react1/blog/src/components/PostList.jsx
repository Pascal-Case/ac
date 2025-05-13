function PostList({ posts, onLike, onDelete, onSelectPost }) {
  if (posts.length === 0) {
    return <div className="empty-list">등록된 게시물이 없습니다.</div>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div className="list" key={post.id}>
          <h4>
            <span onClick={() => onSelectPost(post.id)} style={{ cursor: 'pointer' }}>
              {post.title}
            </span>{' '}
            <span onClick={() => onLike(post.id)} style={{ cursor: 'pointer' }}>
              👍
            </span>{' '}
            {post.good}
            <button onClick={() => onDelete(post.id)} className="delete-button">
              삭제
            </button>
          </h4>
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
