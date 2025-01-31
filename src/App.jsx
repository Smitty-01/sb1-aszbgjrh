import { useState } from 'react';
import BlogList from './components/BlogList';
import './App.css';

function App() {
  const initialBlogs = [
    {
      id: 1,
      title: "Understanding Phishing Attacks in 2024",
      content: "Phishing attacks have become increasingly sophisticated, using AI-generated content to create more convincing emails. Attackers are now employing deep fakes and voice cloning to impersonate executives in spear-phishing attempts. Always verify unexpected requests through a separate communication channel and enable multi-factor authentication on all accounts.",
      category: "phishing",
      votes: 45,
      comments: [
        { id: 1, text: "Great explanation of modern phishing techniques!" },
        { id: 2, text: "I recently encountered a similar attack at my workplace." }
      ]
    },
    {
      id: 2,
      title: "The Rise of QR Code Baiting",
      content: "Cybercriminals are increasingly using malicious QR codes in public places to trick users into visiting harmful websites. These codes might appear on fake parking tickets, restaurant menus, or promotional flyers. Always verify the URL before visiting any website accessed through a QR code, and use a QR scanner app that previews the link before opening it.",
      category: "baiting",
      votes: 32,
      comments: [
        { id: 3, text: "QR codes are everywhere these days, we need to be careful." }
      ]
    },
    {
      id: 3,
      title: "New Ransomware Strain Targeting Cloud Services",
      content: "A new strain of ransomware has been detected that specifically targets cloud storage services. This malware encrypts files in real-time as they sync with cloud storage, potentially affecting all connected devices. Regular offline backups and careful monitoring of file synchronization activities are essential for protection.",
      category: "malware",
      votes: 67,
      comments: [
        { id: 4, text: "This is scary stuff. Time to review our backup strategy." },
        { id: 5, text: "Does anyone know if this affects Google Drive?" }
      ]
    },
    {
      id: 4,
      title: "Social Engineering Through Professional Networks",
      content: "Attackers are creating elaborate fake profiles on LinkedIn and other professional networks to gain trust and access to corporate information. They often pose as recruiters or industry experts, building relationships over months before attempting to extract sensitive data or credentials. Always verify professional connections through official channels.",
      category: "social-engineering",
      votes: 53,
      comments: [
        { id: 6, text: "I've seen so many suspicious connection requests lately." }
      ]
    }
  ];

  const [blogs, setBlogs] = useState(initialBlogs);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'phishing', 'baiting', 'malware', 'social-engineering'];

  const handleVote = (id, type) => {
    setBlogs(blogs.map(blog => {
      if (blog.id === id) {
        return {
          ...blog,
          votes: type === 'up' ? blog.votes + 1 : blog.votes - 1
        };
      }
      return blog;
    }));
  };

  const addComment = (blogId, comment) => {
    setBlogs(blogs.map(blog => {
      if (blog.id === blogId) {
        return {
          ...blog,
          comments: [...blog.comments, { id: Date.now(), text: comment }]
        };
      }
      return blog;
    }));
  };

  const filteredBlogs = selectedCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="app-container">
      <h1>Cybersecurity Blog</h1>
      <div className="category-filter">
        <span>Filter by: </span>
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <BlogList 
        blogs={filteredBlogs} 
        onVote={handleVote} 
        onComment={addComment}
      />
    </div>
  );
}

export default App;