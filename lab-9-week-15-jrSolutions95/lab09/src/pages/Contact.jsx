import React from 'react'
/* if good image is found insert, looks cleaner */

function Contact() {
  return (
    <div className="mt-8 bg-white p-5 rounded-2xl text-gray-500">
      <h1 className="text-3xl font-bold mb-4">Contact Info</h1>
        <div>
          <p className="text-lg mb-2 text-gray-500">Feel free to reach out to me through the following:</p>
          <ul className="list-disc pl-6">
            <li>Email: <a href="mailto:larshaas@berkeley.edu">larshaas@berkeley.edu</a></li>
            <li>Instagram: <a href="https://www.instagram.com/aasheimjr95/?hl=nb" target="blank" 
              className="text-blue-300 hover:text-blue-800" 
              > aasheimjr95</a></li>
            <li>GitHub: <a href="https://github.com/jrSolutions95" target="blank" className="text-blue-300 hover:text-blue-800">
              jrSolutions95</a></li>
          </ul>
          <p className="mt-4 text-gray-500">I'm looking forward to hear from you!</p>
      </div>
    </div>
  );
}

export default Contact
