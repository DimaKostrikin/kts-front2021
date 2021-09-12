// Здесь необходимо продемонстрировать создание и использование GitHubStore

import GitHubStore from '../store/GitHubStore';

const gitHubStore = new GitHubStore();

const EXAMPLE_ORGANIZATION = 'ktsstudio';

gitHubStore
  .getOrganizationReposList({
    org: EXAMPLE_ORGANIZATION,
    sort: 'created',
    direction: 'desc',
    per_page: 100,
  })
  .then((result) => {
    //console.log(result.data);
    // в консоли появится список репозиториев в ktsstudio
  });

// В ДЗ 1 Не требуется визуально в разметке отображать результат запроса к сети. Достаточно вывести в console.log
