import './App.css';
import axios from 'axios';

const title = 'React GraphQL GitHub Client';

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${process.env.TOKEN_GITHUB}`,
  },
});

function App() {
  return (
    <div className="App">
      <h1>{title}</h1>
    </div>
  );
}

export default App;
