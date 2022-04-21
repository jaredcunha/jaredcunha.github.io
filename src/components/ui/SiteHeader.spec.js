import React from 'react';
import SiteHeader from './SiteHeader';
import { screen, render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('SiteHeader', () => {
  it('renders correctly with no accessibility violations', async () => {
    const { container } = render(<SiteHeader />);
    const results = await axe(container);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(results).toHaveNoViolations();
  });
});
