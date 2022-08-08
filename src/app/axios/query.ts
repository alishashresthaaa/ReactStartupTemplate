export const queryObject = {
  // data is stored in cache for the given time (inactive state) and deleted from the cache wheh the timer expires
  cacheTime: 10000, // 10 seconds Default time - 5minutes
  // the time for which the data remains fresh before it turns stale. No additional request is made until the staleTime expires which turn the data from fresh to stale.
  // is used when the data doesnot needs to be fetched for certain amount of time
  staleTime: 10000, // 5 seconds . Default time - 0 seconds
  // The query will refetch on mount if the data is stale. - true, false, "always"
  refetchOnMount: false,

  // Refetching querying after certain interval. default - false
  //   refetchInterval: 2000, // 2 seconds
  // refetching data in certain interval even in background
  refetchIntervalInBackground: true,
};
