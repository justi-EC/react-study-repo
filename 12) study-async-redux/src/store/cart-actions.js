import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-df741-default-rtdb.firebaseio.com/cart.json"
      );

      if(!response.ok){
        throw new Error('데이터를 가져오지 못했습니다.')
      }
      const data = await response.json();
      return data;
    };
    try{
      const cartData = await fetchData();
    }catch(error){
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "실패",
          message: "데이터를 가져오지 못했습니다.",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "보내는 중...",
        message: "요청을 보내는 중입니다.",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-df741-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("요청에 실패했습니다");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "성공",
          message: "요청을 성공적으로 보냈습니다.",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "실패",
          message: "요청을 수행하지 못했습니다.",
        })
      );
    }
  };
};
