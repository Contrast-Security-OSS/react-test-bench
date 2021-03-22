import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Navigation from './Navigation';

test('renders a navigation menu with server vulnerabilities placeholder link', () => {
  const server = {};
  const { container } = render(
    <MemoryRouter>
      <Navigation server={server} />
    </MemoryRouter>
  );
  expect(screen.getByText('Server Vulnerabilities')).toHaveClass(
    'nav-link disabled'
  );
  expect(container).toMatchSnapshot();
});

test('renders a navigation menu with an Express vulnerabilities link', () => {
  const server = { framework: 'Express' };
  const { container } = render(
    <MemoryRouter>
      <Navigation server={server} />
    </MemoryRouter>
  );
  expect(screen.getByText('Express Vulnerabilities')).toHaveClass('nav-link');
  expect(container).toMatchSnapshot();
});
