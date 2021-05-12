import Page from '../Page';

/**
 * @param {Object} props
 * @param {Object} props.server
 * @param {string} props.server.framework
 * @param {import('@contrast/test-bench-utils').Route[]} props.server.routes
 */
function ServerVulnerabilties({ server }) {
  const title = `${server.framework} Vulnerabilities`;

  const vulnerabilities = server.routes.map((route) => (
    <li key={route.base}>
      <a
        href={`//localhost:3001${route.base}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        {route.name}
      </a>
    </li>
  ));

  return (
    <Page title={title}>
      <h1>{server.framework} Test Bench</h1>
      <ul>{vulnerabilities}</ul>
    </Page>
  );
}

export default ServerVulnerabilties;
