import React from 'react';
import Icon from './Icon';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Icon', () => {
  it('renders correctly with no accessibility violations', async () => {
    const { container } = render(<Icon icon="bell" />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
