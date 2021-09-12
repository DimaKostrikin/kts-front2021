import RepoPage from '@components/RepoPage/RepoPage';
import ReposSearchPage from '@components/ReposSearchPage';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/repos" component={ReposSearchPage} />
      <Route exact path="/repos/:id" component={RepoPage} />
    </BrowserRouter>
  );
};

export default App;
