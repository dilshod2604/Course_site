import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    cteateUser: build.mutation<IUser, IUserRequest>({
      query: (data) => ({
        method: "POST",
        url: "/sign-up",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    signInUser: build.mutation<IUser, IUserSignInRequest>({
      query: (data) => ({
        method: "POST",
        url: "/sign-in",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    getMe: build.query<IUser, void>({
      query: () => ({
        method: "GET",
        url: "/user",
      }),
      providesTags: ["auth"],
    }),
  }),
});
export const { useCteateUserMutation, useSignInUserMutation, useGetMeQuery } =
  api;
