import React from 'react';
import StaticPageHeader from './StaticPageHeader';
import { screen, render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('StaticPageHeader', () => {
  it('renders correctly with no accessibility violations', async () => {
    const { container } = render(<StaticPageHeader title="Default Starter" />);
    const results = await axe(container);
    expect(screen.getByText('Default Starter')).toBeInTheDocument();
    expect(results).toHaveNoViolations();
  });
});
