import {render, screen} from '@testing-library/react';
import App from './App';
import React from 'react';
import initializeTest from './tests/test-base';

test('renders learn react link', () =>
  initializeTest(() => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/ui);
    expect(linkElement).toBeInTheDocument();
  }));
