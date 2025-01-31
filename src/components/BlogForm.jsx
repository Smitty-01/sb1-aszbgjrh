import { useState } from 'react';

function BlogForm({ onSubmit, categories }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onSubmit({ title, content, category });
      setTitle('');
      setContent('');
      setCategory(categories[0]);
    }
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <h2>Create New Post</h2>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          required
        />
      </div>
      <div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter content"
          required
        />
      </div>
      <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Post</button>
    </form>
  );
}

export default BlogForm;