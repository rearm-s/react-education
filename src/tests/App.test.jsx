import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

import App from '../App';

const mockEmail = 'george.bluth@reqres.in';
const mockPassword = '123';

describe('App', () => {
   it('should render App',() => {
      const { getByText, getByRole } = render(<App/>);
      const inputEmail = getByText(/email/i);
      const inputPassword = getByText(/password/i);
      const button = getByRole('button')
      expect(inputEmail).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
      expect(button).toBeInTheDocument();
   });

   it('should be able send request to server',async () => {
      const { getByTestId, getByText } = render(<App/>);
      const emailInput = getByTestId('email-input');
      const passwordInput = getByTestId('password-input');
      const handleOnLog = jest.fn();
      handleOnLog(mockEmail, mockPassword);
      fireEvent.change(emailInput, { target: { value: mockEmail } });
      fireEvent.change(passwordInput, { target: { value: mockPassword } });
      fireEvent.submit(getByText(/Submit/i));
      await waitFor(() => getByText('george.bluth@reqres.in'));
      expect(handleOnLog).toHaveBeenCalledWith('george.bluth@reqres.in', '123');

   });

});