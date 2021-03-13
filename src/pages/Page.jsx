import cx from 'classnames';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import styles from './Page.module.css';

function Page(props) {
  useEffect(() => {
    const title = props.title
      ? `${props.title} | React Test Bench`
      : 'React Test Bench';

    document.title = title;
  }, [props.title]);

  return (
    <Container as="main" className={cx(styles.page, props.className)}>
      {props.children}
    </Container>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Page;
