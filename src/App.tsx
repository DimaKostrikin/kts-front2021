import GitHubStore from 'store/GitHubStore';

function App() {
  const gitHubStore = new GitHubStore();

  const EXAMPLE_ORGANIZATION = 'ktsstudio';

  gitHubStore.getOrganizationReposList({
    org: EXAMPLE_ORGANIZATION,
    sort: 'created', // сортирую по дате создания
    direction: 'desc', // Самые свежесозданные
    per_page: 100, // 100 на странице
    // ну и тд
  }).then(result => {
    console.log(result.data); // в консоли появится список репозиториев в ktsstudio
  })
  
  return (
    <div className="App">
      <div>Пусто</div>
    </div>
  );
}

export default App;

