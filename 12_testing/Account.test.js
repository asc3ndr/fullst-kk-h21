import { fireEvent, render, screen } from '@testing-library/react';
import { Account } from './Account';

it('should render Account balance', () => {
    render(<Account />)

    const paragraph = screen.getByText(/Account balance:/i);
    expect(paragraph).toBeInTheDocument();
});

it('should check that Account balance starts at 500', () => {
    render(<Account />)

    const paragraph = screen.getByText(/Account balance:/i);
    expect(paragraph).toHaveTextContent("Account balance: 500");
});

it('should increment balance by 100 when increment is called', () => {
    render(<Account />)

    fireEvent.click(screen.getByText("Increment"))
    const paragraph = screen.getByText(/Account balance:/i);
    expect(paragraph).toHaveTextContent("Account balance: 600");
});

it('should decrement balance by 100 when decrement is called', () => {
    render(<Account />)

    fireEvent.click(screen.getByText("Decrement"))
    const paragraph = screen.getByText(/Account balance:/i);
    expect(paragraph).toHaveTextContent("Account balance: 400");
});

it('should check that the correct message is displayed when balance is <= 0', () => {
    render(<Account />)

    fireEvent.click(screen.getByText("Decrement"))
    fireEvent.click(screen.getByText("Decrement"))
    fireEvent.click(screen.getByText("Decrement"))
    fireEvent.click(screen.getByText("Decrement"))
    fireEvent.click(screen.getByText("Decrement"))

    const paragraph = screen.getByText(/Account balance:/i);
    expect(paragraph).toHaveTextContent("Account balance: You are broke! :-(");
});
