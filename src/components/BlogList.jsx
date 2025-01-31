import BlogPost from './BlogPost';

function BlogList({ blogs, onVote, onComment }) {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <BlogPost 
          key={blog.id} 
          blog={blog} 
          onVote={onVote}
          onComment={onComment}
        />
      ))}
    </div>
  );
}

export default BlogList;