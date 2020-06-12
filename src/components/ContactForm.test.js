import React from "react";
import { render, fireEvent, getByTestId, getByLabelText, waitFor } from "@testing-library/react";
import Form from "./ContactForm";


test("renders App without crashing", () => {
    render(<Form />);
  });

test("Check First Name", () => {
    //arange
    const { getByPlaceholderText } = render(<Form />);
    //Act
    const fName = getByPlaceholderText(/edd/i);
    fireEvent.change(fName, { target: {value: "Me"} });
    expect (fName.value).toBe("Me");
});

test("Check Last Name", () => {
    //arange
    const { getByPlaceholderText } = render(<Form />);
    //Act
    const lName = getByPlaceholderText(/burke/i);
    fireEvent.change(lName, { target: {value: "last"} });
    expect (lName.value).toBe("last");
});

test("Check Email", () => {
    //arange
    const { getByTestId } = render(<Form />);
    //Act
    const email = getByTestId(/email/i);
    fireEvent.change(email, { target: {value: "MeLast@email.com"} });
    expect (email.value).toBe("MeLast@email.com");
});


test("Name length", async ()=>{
    const {getByTestId} = render(<Form/>);

    const name = getByTestId(/firstname/i);
    fireEvent.change(name, {target: {value: "Me"}});
    fireEvent.click(getByTestId('button'));
    
    await waitFor(()=> expect(getByTestId(/nameError/i)));
    
});
