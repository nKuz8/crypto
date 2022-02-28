import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

const newsApiHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': process.env.REACT_APP_NEWSAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
}

const baseUrl = process.env.REACT_APP_NEWSAPI_BASE_URL

const createRequest = (url) => ({url, headers: newsApiHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&count=${count}&freshness=Day&textFormat=Raw&safeSearch=Off`),
        }),
    }),
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi