import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";
// import config from "@/config";


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["USER","TOUR","TOUR_TYPE"],
  endpoints: () => ({}),
});


// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseUrl: config.baseUrl,
//   credentials: "include",
//   // baseQuery: fetchBaseQuery({
//   //   baseUrl: "http://localhost:5000/api/v1",
//   // }),
//   endpoints: () => ({}),
// });