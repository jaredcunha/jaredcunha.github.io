import React from 'react';
import SiteHeader from './SiteHeader';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('SiteHeader', () => {
  it('renders correctly with no accessibility violations', async () => {
    const { container } = render(<SiteHeader />);
    const results = await axe(container);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(results).toHaveNoViolations();
  });
  it('expands to flyout menu on small screens when user clicks menu button', async () => {
    window.innerWidth = 500;
    render(<SiteHeader />);
    const menuButton = screen.getByTestId('open-nav-button');
    const navMenu = screen.getByTestId('nav-flyout');
    fireEvent.click(menuButton);
    await waitFor(() =>
      expect(navMenu).toHaveClass('nav__flyout nav__flyout--is-open')
    );
  });
  it('sends focus to the close button when mobile nav is opened', async () => {
    window.innerWidth = 500;
    render(<SiteHeader />);
    const menuButton = screen.getByTestId('open-nav-button');
    const closeButton = screen.getByTestId('close-nav-button');
    fireEvent.click(menuButton);
    await waitFor(() => expect(closeButton).toHaveFocus());
  });
  it('sends focus to the menu button when the mobile nav is closed', async () => {
    window.innerWidth = 500;
    render(<SiteHeader />);
    const menuButton = screen.getByTestId('open-nav-button');
    const closeButton = screen.getByTestId('close-nav-button');
    fireEvent.click(menuButton);
    fireEvent.click(closeButton);
    // Have to reset this because of rerender?
    const menuButton2 = screen.getByTestId('open-nav-button');
    await waitFor(() => expect(menuButton2).toHaveFocus());
  });
});
