import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import logo from './logo.svg';
import styles from './Home.module.css';

function Home() {
  useEffect(() => {
    document.title = 'React Test Bench';
  }, []);

  return (
    <Container as="main" className={styles.home}>
      <img src={logo} className={styles.logo} alt="logo" />
      <p>
        Edit <code>src/Home.jsx</code> and save to reload.
      </p>
      <a
        className={styles.link}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </Container>
  );
}

export default Home;
