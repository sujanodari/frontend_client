const limit: number | undefined = parseInt(process.env.REACT_APP_PAGE_LIMIT as string) || 5;

export default {
  pagination: {
    limit,
  },
};
