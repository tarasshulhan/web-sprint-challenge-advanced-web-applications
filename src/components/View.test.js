import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';
import mockArticleService from '../services/articleServices';
jest.mock('../services/articleServices')

const testArticles = [{
    id:"yaFmQ",
    headline: "headline",
    author: "author",
    summary: "summary",
    body: "body",
    createdOn: "2021-11-11T22:17:56+02:00",
    image: 'https://i.picsum.photos/id/134/300/300.jpg?hmac=b3gMz-pfa737vVp8dKmvrVyW-eLFdbJ6Zju4XLUr62k'
},{
    id:"yaBmQ",
    headline: "headline",
    author: "author",
    summary: "summary",
    body: "body",
    createdOn: "2021-11-11T22:17:56+02:00",
    image: 'https://i.picsum.photos/id/134/300/300.jpg?hmac=b3gMz-pfa737vVp8dKmvrVyW-eLFdbJ6Zju4XLUr62k'
},{
    id:"yaCmQ",
    headline: "headline",
    author: "author",
    summary: "summary",
    body: "body",
    createdOn: "2021-11-11T22:17:56+02:00",
    image: 'https://i.picsum.photos/id/134/300/300.jpg?hmac=b3gMz-pfa737vVp8dKmvrVyW-eLFdbJ6Zju4XLUr62k'
}];


test("renders zero articles without errors", async () => {
    mockArticleService.mockResolvedValueOnce(Promise.resolve([]))
    render(<View/>)
});

test("renders three articles without errors", async ()=> {
    mockArticleService.mockResolvedValueOnce(Promise.resolve(testArticles))
    render(<View/>)
 });

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.