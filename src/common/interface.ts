export interface DispatchProps {
  dispatch?: (obj) => void;
}

export interface CommonProps extends DispatchProps {
  loading: any;
}

export interface LoadingProps {
  global: boolean;
  models: any;
  effects: any;
}

export interface GlobalStateProps {
  router: any;
  global: {
    collapsed: boolean;
  };
  list: any;
  user: any;
  loading: LoadingProps;
}
