const initialState = {
  kitchenware: [],
};

const kitchenwareReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_CATEGORY_SUCCESS":
      return {
        ...state, 
      };
  }
};
