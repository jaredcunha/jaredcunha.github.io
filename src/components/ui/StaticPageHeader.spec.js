import React from 'react';
import StaticPageHeader from './StaticPageHeader';
import { screen, render } from '@testing-library/react';

describe('StaticPageHeader', () => {
  it('renders correctly', () => {
    render(<StaticPageHeader title="Default Starter" />);
    expect(screen.getByText('Default Starter')).toBeInTheDocument();
  });
});
