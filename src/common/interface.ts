export interface LoadingProps {
  global: boolean;
  models: any;
  effects: any;
}

export interface GlobalStateProps {
  router: {
    location: {
      pathname: string;
    };
  };
  global: {
    collapsed: boolean;
  };
  list: any;
  user: any;
  loading: LoadingProps;
}
