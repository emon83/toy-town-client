import baseApi from "../../api/baseApi";

const feedbackApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    saveFeedback: builder.mutation({
      query: (feedbackData) => ({
        url: "/feedback",
        method: "POST",
        body: feedbackData,
      }),
    }),
    getFeedback: builder.query({
      query: () => "/feedbacks",
    }),
  }),
});

export const { useSaveFeedbackMutation, useGetFeedbackQuery } = feedbackApi;
