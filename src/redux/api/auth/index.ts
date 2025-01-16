import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    cteateUser: build.mutation<UserResponse, UserRequest>({
      query: (data) => ({
        method: "POST",
        url: "/auth/sign-up",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    signInUser: build.mutation<UserResponse, SignInRequest>({
      query: (data) => ({
        method: "POST",
        url: "/auth/sign-in",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    getMe: build.query<UserResponse, void>({
      query: () => ({
        method: "GET",
        url: "/auth/user",
      }),
      providesTags: ["auth"],
    }),
    updateUserProfile: build.mutation<UserResponse, UpdateUserProfile>({
      query: (data) => ({
        method: "PATCH",
        url: "/auth/user",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});
export const {
  useCteateUserMutation,
  useSignInUserMutation,
  useGetMeQuery,
  useUpdateUserProfileMutation,
} = api;
