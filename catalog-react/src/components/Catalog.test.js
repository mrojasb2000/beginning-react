import React from 'react';
import { render } from '@testing-library/react';
import Catalog from './Catalog';

test('renders learn react link', () => {
  const { getByText } = render(<Catalog />);
  const linkElement = getByText(/Catalog/i);
  expect(linkElement).toBeInTheDocument();
});
