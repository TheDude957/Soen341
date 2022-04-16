// Unit tests to verify that the log in process is working correctly

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
//import '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import LoginPage from '../Pages/LoginPage';

import * as firebaseService from '../firebaseService';

import '@testing-library/jest-dom';

// mock react-navigate useNavigation
const mockedNavigator = jest.fn();
jest.mock('react-router-dom', () => {
  const actualNav = jest.requireActual('react-router-dom');
  return {
    ...actualNav,
    useNavigate: () => mockedNavigator,
  };
});

describe('LoginPage', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    mockedNavigator.mockClear();
  });

  it('should render LoginPage component', () => {
    const pageTitleEl = screen.getByTestId('page-title');
    expect(pageTitleEl).toBeInTheDocument();
    expect(pageTitleEl).toHaveTextContent('Login');
  });
  it('should handle event when the submit button is clicked', async () => {
    const SignInUserSpy = jest.spyOn(firebaseService, 'SignInUser');
    SignInUserSpy.mockResolvedValue('Sign in Successfully');

    const submitBtnEl = screen.getByTestId('submit-btn');

    expect(submitBtnEl).toBeInTheDocument();
    expect(submitBtnEl).toHaveTextContent('Sign in');

    // test for click event
    await userEvent.click(submitBtnEl);
    await waitFor(() => {
      expect(SignInUserSpy).toHaveBeenCalled();
    });
  });
});
