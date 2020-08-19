
type SetSpecResponsePayload = {
  payload: {
    path: string;
    method: string;
    res?: {
      obj?: {
        token?: string;
      };
    };
  };
};

export function SwaggerAuthPlugin() {
  return {
    statePlugins: {
      auth: {
        reducers: {
          "spec_set_response": (state: any, action: SetSpecResponsePayload) => {
            const isLoginSuccess = (action.payload.path === '/token' && action.payload.method === 'post');
            const isLogOutSuccess = (action.payload.path === '/token' && action.payload.method === 'delete');
            const isRefreshSuccess = (action.payload.path === '/token/refresh' && action.payload.method === 'get');

            if ((isRefreshSuccess || isLoginSuccess) && action.payload?.res?.obj?.token) {
              return state.mergeDeep({
                authorized: {
                  jwt: {
                    "name": "jwt",
                    "schema": {
                      "type": "http",
                      "scheme": "bearer",
                      "bearerFormat": "JWT"
                    },
                    "value": action.payload.res.obj.token
                  }
                }
              });
            }

            if (isLogOutSuccess) {
              return state.mergeDeep({ authorized: { jwt: undefined } });
            }

            return state;
          }
        }
      }
    }
  };
}
