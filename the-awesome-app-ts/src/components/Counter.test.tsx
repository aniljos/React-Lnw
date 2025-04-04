import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

test("renders Counter", () => {

    render(<Counter initialCount={5}/>);
    const text =  screen.getByText(/Counter: 5/i);
    expect(text).toBeInTheDocument();
 })

 test("renders Counter inc counter", () => {

    render(<Counter initialCount={5}/>);
    const text =  screen.getByText(/Counter: 5/i);
    expect(text).toBeInTheDocument();

    const btn = screen.getByText("Inc");
    fireEvent.click(btn);
    const updatedText =  screen.getByText(/Counter: 7/i);
    expect(updatedText).toBeInTheDocument();

 })
