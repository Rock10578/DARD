import React from 'react';

function About() {
  const sectionStyle = {
    margin: '20px 0',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333'
  };

  const textStyle = {
    fontSize: '16px',
    color: '#666'
  };

  return (
    <div style={{ marginTop: '10px', padding: '20px', maxWidth: '800px', margin: '60px auto' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>About Our Portal</h1>
      <h3>Recommendations System</h3>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Courses</h2>
        <p style={textStyle}>
          Our portal offers a wide range of courses to help you advance your career and personal growth. 
          From technical skills to soft skills, you'll find courses that suit your learning needs and pace.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Jobs</h2>
        <p style={textStyle}>
          Explore the latest job opportunities in various industries. Our job board is regularly updated 
          to connect you with employers looking for talent like yours. Find your next career move with ease.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>News</h2>
        <p style={textStyle}>
          Stay informed with the latest news and trends in your field. Our news section covers a broad 
          spectrum of topics to keep you up-to-date with the information that matters most.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Books</h2>
        <p style={textStyle}>
          Discover books that can inspire and educate. Our recommendations cover a variety of genres and 
          subjects, carefully curated to enrich your knowledge and provide insightful perspectives.
        </p>
      </div>
    </div>
  );
}

export default About;
