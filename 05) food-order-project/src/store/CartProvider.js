import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex((item) => {
      //음식 리스트 순서 인덱스 (한번 클릭하면 장바구니가 빈것으로 간주하고 -1, 한번 이상 클릭하면 리스트 별로 0,1,2...
      return item.id === action.item.id;
    });
    //가져온 item들을 꺼내기 전에 먼저 항목이 이미 장바구니에 들어있는지 확인
    const existingCartItem = state.items[existingCartItemIndex];

    let newUpdatedItems;
    let updatedItems;

    if (existingCartItem) {
      // true
      newUpdatedItems = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount, //기존에 있던 수량에 추가된 수량 추가
      };
      updatedItems = [...state.items]; //기존 항목을 복사한 새 배열 (메모리 안에 있는 이전 배열이 수정되지 않게)
      updatedItems[existingCartItemIndex] = newUpdatedItems;
    } else {
      // false
      updatedItems = state.items.concat(action.item); //비어있다면 현재 빈 배열에 새로 들어온 아이템만 추가
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount, //어느쪽이든 updatedItems를 선택하는 새 state 스냅샷 반환
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex]; //현재 갖고있는 음식 중 dispatch한 음식 선택
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      //수량 1개에서 -버튼을 누른다면

      updatedItems = state.items.filter((item) => item.id !== action.id); //현재 음식 리스트 중 dispatch한 음식을 제외한 음식만 남김
    } else {
      const newUpdatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updatedItems = [...state.items]; //복사
      updatedItems[existingCartItemIndex] = newUpdatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
