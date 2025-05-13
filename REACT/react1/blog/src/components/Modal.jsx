function Modal({ post, onClose }) {
  if (!post) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <h4>{post.title}</h4>
          <button onClick={onClose} className="close-button">
            ✕
          </button>
        </div>
        <div className="modal-content">
          <p>상세내용</p>
          <p>좋아요: {post.good}</p>
          <p>작성일: {post.date}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
