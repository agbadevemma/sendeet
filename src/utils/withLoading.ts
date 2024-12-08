// app/utils/withLoading.ts

import { setLoading } from "@/lib/slices/loadingSlice";


export const withLoading = (
  onQueryStartedCallback?: (
    arg: any,
    api: { dispatch: Function; queryFulfilled: Promise<any> }
  ) => Promise<void>
) => {
  return async (arg: any, { dispatch, queryFulfilled }: { dispatch: Function; queryFulfilled: Promise<any> }) => {
    try {
      dispatch(setLoading(true)); // Start loading
      if (onQueryStartedCallback) {
        await onQueryStartedCallback(arg, { dispatch, queryFulfilled });
      }
      await queryFulfilled;
    } catch (err) {
      console.error(err); // Handle errors
    } finally {
      dispatch(setLoading(false)); // End loading
    }
  };
};
