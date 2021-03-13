import Page from '../Page';
import styles from './index.module.css';
import logo from './logo.svg';

function Home() {
  return (
    <Page className={styles.home}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h1>React Test Bench</h1>
      <p>
        An intentionally vulnerable React app for demonstrating Contrast
        Security analysis and instrumentation.
      </p>
    </Page>
  );
}

export default Home;
