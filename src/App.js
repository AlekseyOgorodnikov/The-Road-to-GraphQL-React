import './App.css';
import axios from 'axios';

const title = 'React GraphQL GitHub Client';

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${process.env.TOKEN_GITHUB}`,
  },
});

const state = {
  path: 'the-road-to-learn-react/the-road-to-learn-react',
};

function onChange(event) {}

function onSubmit(event) {
  event.preventDefault();
}

function App() {
  return (
    <div className="App">
      <h1>{title}</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="url">Show open issues for github</label>
        <input
          type="text"
          id="url"
          style={{ width: '300px' }}
          onChange={onChange}
        />
        <button type="submit">Search</button>
      </form>
      <hr />
    </div>
  );
}

export default App;
