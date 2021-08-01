import React from 'react';
import { render } from '@testing-library/react';

import Toast from './toast';

describe('Component: Toast', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Toast message={'alert message test'} />);
    expect(getByText(/alert message test/i)).toBeInTheDocument();
  });
});
