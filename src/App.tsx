import GitHubStore from 'store/GitHubStore';

function App() {
  const gitHubStore = new GitHubStore();

  const EXAMPLE_ORGANIZATION = 'ktsstudio';

  gitHubStore.getOrganizationReposList({
    org: EXAMPLE_ORGANIZATION,
    sort: 'created',
    direction: 'desc',
    per_page: 100,
  }).then(result => {
    console.log(result.data); 
    // в консоли появится список репозиториев в ktsstudio
  })
  
  return (
    <div>a</div>
  );
}

export default App;

