import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3030/";

export const authApiSlice = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (registerData) => ({
                url: `users/register`,
                method: "POST",
                body: {
                    email: registerData.email,
                    password: registerData.password,
                    role: registerData.role,
                    experiences: registerData.experiences
                }
            })
        }),
        loginUser: builder.mutation({
            query: (loginData) => ({
                url: `users/authenticate`,
                method: "POST",
                body: {
                    email: loginData.email,
                    password: loginData.password,
                    role: loginData.role
                }
            })
        }),
        getUserInfo: builder.query({
            query: ({ userId, token }) => ({
                url: `users/${userId}`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }),
        getUserExperiences: builder.query({
            query: (token) => ({
                url: `experiences`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }),
        addExperiences: builder.mutation({
            query: ({ data, token }) => ({
                url: `experiences`,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: data
            })
        }),
        modifyExperience: builder.mutation({
            query: ({ experienceId, data, token }) => ({
                url: `experiences/${experienceId}`,
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: data
            })
        }),
        deleteExperience: builder.mutation({
            query: ({ experienceId, token }) => ({
                url: `experiences/${experienceId}`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }),
        getAllJobs: builder.query({
            query: (params) => ({
                url: `jobs`,
                method: "GET",
                params
            })
        }),
        createJob: builder.mutation({
            query: ({ data, token }) => ({
                url: `jobs`,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: data
            })
        }),
        modifyJob: builder.mutation({
            query: ({ jobId, data, token }) => ({
                url: `jobs/${jobId}`,
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: data
            })
        }),
        deleteJob: builder.mutation({
            query: ({ jobId, token }) => ({
                url: `jobs/${jobId}`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }),
        applyForJob: builder.mutation({
            query: ({ jobId, data, token }) => ({
                url: `applicants/${jobId}`,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: data
            })
        }),
        removeApplication: builder.mutation({
            query: ({ jobId, token }) => ({
                url: `applicants/${jobId}`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }),
        getApplicantsForJob: builder.query({
            query: ({ jobId, token }) => ({
                url: `applicants/${jobId}`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }),
        getJobsForApplicant: builder.query({
            query: (token) => ({
                url: `applicants`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    })
});

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useGetUserInfoQuery,
    useGetUserExperiencesQuery,
    useAddExperiencesMutation,
    useModifyExperienceMutation,
    useDeleteExperienceMutation,
    useGetAllJobsQuery,
    useCreateJobMutation,
    useModifyJobMutation,
    useDeleteJobMutation,
    useApplyForJobMutation,
    useRemoveApplicationMutation,
    useGetApplicantsForJobQuery,
    useGetJobsForApplicantQuery
} = authApiSlice;

export const authApiReducer = authApiSlice.reducer;
