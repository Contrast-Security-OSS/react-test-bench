import { render } from '@testing-library/react';
import Home from './Home';

test('renders learn react link', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
