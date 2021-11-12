import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';


const testArticle = {
    id:"yaFmQ",
    headline: "headline",
    author: "author",
    summary: "summary",
    body: "body",
    createdOn: "2021-11-11T22:17:56+02:00",
    image: 'https://i.picsum.photos/id/134/300/300.jpg?hmac=b3gMz-pfa737vVp8dKmvrVyW-eLFdbJ6Zju4XLUr62k'
};

const noAuthorArticle = {
    id:"yaFmQ",
    headline: "headline",
    author: "",
    summary: "summary",
    body: "body",
    createdOn: "2021-11-11T22:17:56+02:00",
    image: 'https://i.picsum.photos/id/134/300/300.jpg?hmac=b3gMz-pfa737vVp8dKmvrVyW-eLFdbJ6Zju4XLUr62k'
};

const testFn = () => {};

test('renders component without errors', ()=> {
    render(<Article article={testArticle} handleDelete={testFn} handleEditSelect={testFn}/>);
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle} handleDelete={testFn} handleEditSelect={testFn}/>);
    const author = screen.queryByText(/author/i);
    const headline = screen.queryByText(/headline/i);
    const summary = screen.queryByText(/summary/i);
    const body = screen.queryByText(/body/i);
    expect(author).toBeInTheDocument();
    expect(headline).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(body).toBeInTheDocument();
});


test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={noAuthorArticle} handleDelete={testFn} handleEditSelect={testFn}/>);
    const author = screen.queryByText(/Associated Press/i);
    expect(author).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const handleDelete = jest.fn();
    render(<Article article={noAuthorArticle} handleDelete={handleDelete} handleEditSelect={testFn}/>);
    const delButton = screen.queryByText(/Delete/i);
    userEvent.click(delButton);
    expect(handleDelete).toBeCalled();
});

//Task List:
//1. Complete all above tests. Create test article data when needed.