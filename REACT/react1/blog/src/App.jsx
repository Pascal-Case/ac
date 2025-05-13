import { useState } from 'react';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Modal from './components/Modal';

function App() {
  const TITLE = 'BLOG';
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: '남자 코드 추천',
      good: 0,
      date: '2025년 5월 10일',
    },
    {
      id: 2,
      title: '강남 우동 맛집',
      good: 0,
      date: '2025년 5월 11일',
    },
    {
      id: 3,
      title: '파이썬독학',
      good: 0,
      date: '2025년 5월 12일',
    },
  ]);

  const [selectedPostId, setSelectedPostId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLike = (id) => {
    setPosts((prevPosts) => prevPosts.map((post) => (post.id === id ? { ...post, good: post.good + 1 } : post)));
  };

  const deletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  const addPost = (newPost) => {
    setPosts((prevPosts) => [
      ...prevPosts,
      {
        id: Date.now(),
        ...newPost,
        good: 0,
        date: new Date().toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      },
    ]);
  };

  const toggleModal = (id = null) => {
    setIsModalOpen((prev) => !prev);
    setSelectedPostId(id);
  };

  const selectedPost = posts.find((post) => post.id === selectedPostId);

  return (
    <div className="App">
      <header className="black-nav">
        <h4>{TITLE}</h4>
      </header>

      <PostList posts={posts} onLike={handleLike} onDelete={deletePost} onSelectPost={toggleModal} />

      <PostForm onAddPost={addPost} />

      {isModalOpen && selectedPost && <Modal post={selectedPost} onClose={() => toggleModal()} />}
    </div>
  );
}

export default App;
