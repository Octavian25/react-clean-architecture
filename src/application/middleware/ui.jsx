import { PAGE_LOADED_LOGIN, setLoading } from '../actions/ui';

const pageLoadedFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === PAGE_LOADED_LOGIN) {
      log('Page Login Loaded');
      dispatch(setLoading(false));
    }
  };

const data = [pageLoadedFlow];

export default data;
