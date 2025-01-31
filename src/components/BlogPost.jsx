import { useState } from 'react';

function BlogPost({ blog, onVote, onComment }) {
  const [comment, setComment] = useState('');

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onComment(blog.id, comment);
      setComment('');
    }
  };

  return (
    <div className="blog-post">
      <div className="vote-section">
        <button onClick={() => onVote(blog.id, 'up')}>▲</button>
        <span>{blog.votes}</span>
        <button onClick={() => onVote(blog.id, 'down')}>▼</button>
      </div>
      <div className="content-section">
        <h2>{blog.title}</h2>
        <span className="category-tag">{blog.category}</span>
        <p>{blog.content}</p>
        
        <div className="comments-section">
          <h3>Comments</h3>
          <form onSubmit={handleSubmitComment}>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
            />
            <button type="submit">Post</button>
          </form>
          <div className="comments-list">
            {blog.comments.map(comment => (
              <div key={comment.id} className="comment">
                {comment.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;