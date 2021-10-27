import { createAction } from "@reduxjs/toolkit";

export const getListRequest = createAction("pokemon/getListRequest");
export const getListSuccess = createAction("pokemon/getListSuccess");
export const getListError = createAction("pokemon/getListError");

export const getItemRequest = createAction("pokemon/getItemRequest");
export const getItemSuccess = createAction("pokemon/getItemSuccess");
export const getItemError = createAction("pokemon/getItemError");
