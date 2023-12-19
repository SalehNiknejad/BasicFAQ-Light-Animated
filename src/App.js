import logo from './logo.svg';
import './App.css';
import Header from './Header';
import questions from './Questions';
import { useState } from 'react';
import FAQ from './FAQ';

function App() {
  const [faqs , setFaqs] = useState(questions);
  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App">
      <div>
      <Header />
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;
