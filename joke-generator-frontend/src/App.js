import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    category: 'Any',
    customCategory: '',
    language: 'en - English',
    blacklistedFlags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    responseFormat: 'default (json)',
    jokeType: {
      single: true,
      twopart: false,
    },
    searchString: '',
    idRangeFrom: 0,
    idRangeTo: 1367,
    amount: 1,
  });

  const [joke, setJoke] = useState(null);

  const categories = ['Any', 'Programming', 'Misc', 'Dark', 'Pun', 'Spooky', 'Christmas'];
  const languages = ['en - English', 'es - Spanish', 'fr - French']; // Add more as needed
  const responseFormats = ['default (json)', 'xml', 'yaml', 'plain text'];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        blacklistedFlags: {
          ...prev.blacklistedFlags,
          [name]: checked,
        },
        jokeType: name === 'single'
            ? { single: checked, twopart: !checked }
            : { single: !checked, twopart: checked },
      }));
    } else if (name === 'category' && value === 'Custom') {
      setFormData((prev) => ({
        ...prev,
        category: value,
        customCategory: '',
      }));
    } else if (name === 'customCategory') {
      setFormData((prev) => ({
        ...prev,
        customCategory: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate fetching a joke (replace with actual API call)
    const simulatedJoke = {
      joke: "Why do programmers prefer dark mode? Because light attracts bugs.",
    };
    setJoke(simulatedJoke);
  };

  return (
      <div className="App">
        <h1>Try It Out Here!</h1>
        <form onSubmit={handleSubmit} className="joke-form">
          <div className="form-group">
            <label>Select category / categories:</label>
            <div>
              {categories.map((cat) => (
                  <label key={cat}>
                    <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={formData.category === cat}
                        onChange={handleInputChange}
                    />
                    {cat}
                  </label>
              ))}
              <input
                  type="text"
                  name="customCategory"
                  value={formData.customCategory}
                  onChange={handleInputChange}
                  placeholder="Custom category"
                  disabled={formData.category !== 'Custom'}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Select language:</label>
            <select
                name="language"
                value={formData.language}
                onChange={handleInputChange}
            >
              {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Select flags to blacklist: (optional)</label>
            {Object.keys(formData.blacklistedFlags).map((flag) => (
                <label key={flag}>
                  <input
                      type="checkbox"
                      name={flag}
                      checked={formData.blacklistedFlags[flag]}
                      onChange={handleInputChange}
                  />
                  {flag.charAt(0).toUpperCase() + flag.slice(1)}
                </label>
            ))}
          </div>

          <div className="form-group">
            <label>Select response format:</label>
            {responseFormats.map((format) => (
                <label key={format}>
                  <input
                      type="radio"
                      name="responseFormat"
                      value={format}
                      checked={formData.responseFormat === format}
                      onChange={handleInputChange}
                  />
                  {format}
                </label>
            ))}
          </div>

          <div className="form-group">
            <label>Select at least one joke type:</label>
            <label>
              <input
                  type="checkbox"
                  name="single"
                  checked={formData.jokeType.single}
                  onChange={handleInputChange}
              />
              Single
            </label>
            <label>
              <input
                  type="checkbox"
                  name="twopart"
                  checked={formData.jokeType.twopart}
                  onChange={handleInputChange}
              />
              Two-part
            </label>
          </div>

          <div className="form-group">
            <label>Search for a joke that contains this search string: (optional)</label>
            <input
                type="text"
                name="searchString"
                value={formData.searchString}
                onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Search for a joke in this ID range: (optional)</label>
            <input
                type="number"
                name="idRangeFrom"
                value={formData.idRangeFrom}
                onChange={handleInputChange}
                min="0"
            />
            <input
                type="number"
                name="idRangeTo"
                value={formData.idRangeTo}
                onChange={handleInputChange}
                min="0"
            />
          </div>

          <div className="form-group">
            <label>Amount of jokes:</label>
            <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                min="1"
            />
          </div>

          <p>URL: https://v2.jokeapi.dev/joke/{formData.category || 'Any'}</p>

          <button type="submit">Send Request &gt;</button>
          <button type="button" onClick={() => setFormData({
            category: 'Any',
            customCategory: '',
            language: 'en - English',
            blacklistedFlags: {
              nsfw: false,
              religious: false,
              political: false,
              racist: false,
              sexist: false,
              explicit: false,
            },
            responseFormat: 'default (json)',
            jokeType: { single: true, twopart: false },
            searchString: '',
            idRangeFrom: 0,
            idRangeTo: 1367,
            amount: 1,
          })}>
            Reset Form
          </button>
        </form>

        {joke && (
            <div className="joke-result">
              <h2>Joke Result:</h2>
              <pre>{JSON.stringify(joke, null, 2)}</pre>
            </div>
        )}
      </div>
  );
}

export default App;