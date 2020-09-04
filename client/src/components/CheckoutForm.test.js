import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<nav></nav>)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const inputFirstName = screen.getByLabelText(/first name/i)
    const inputLastName = screen.getByLabelText(/last name/i)
    const inputAddress = screen.getByLabelText(/address/i)
    const inputCity = screen.getByLabelText(/city/i)
    const inputState = screen.getByLabelText(/state/i)
    const inputZip = screen.getByLabelText(/zip/i)

    fireEvent.change(inputFirstName, { target: { value:'Kate' } })
    fireEvent.change(inputLastName, { target: { value:'Roy' } })
    fireEvent.change(inputAddress, { target: { value:'Jasmine Dragon' } })
    fireEvent.change(inputCity, { target: { value:'Upper Ring' } })
    fireEvent.change(inputState,{ target: { value:'Ba Sing Se'}})
    fireEvent.change(inputZip, { target: { value:'09856' } })

    const checkoutButton = screen.getByRole('button',/checkout/i)

    fireEvent.click(checkoutButton)

    expect(screen.getByTestId(/successMessage/i)).toBeInTheDocument()
    expect(screen.getByText(/Kate/i)).toBeInTheDocument()
    expect(screen.getByText(/Roy/i)).toBeInTheDocument()
    expect(screen.getByText(/Jasmine Dragon/i)).toBeInTheDocument()
    expect(screen.getByText(/Upper Ring/i)).toBeInTheDocument()
    expect(screen.getByText(/Ba Sing Se/i)).toBeInTheDocument()
    expect(screen.getByText(/09856/i)).toBeInTheDocument()

});
