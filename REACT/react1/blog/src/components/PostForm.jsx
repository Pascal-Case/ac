import { useState } from 'react';

function PostForm({ onAddPost }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAddPost({ title });
    setTitle('');
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="게시글 제목을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default PostForm;
