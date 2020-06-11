import React from 'react';

const LOCAL_STRONG_LIST_USERS_KEY = "User.UsersArr";

export let UsersArr = JSON.parse(localStorage.getItem(LOCAL_STRONG_LIST_USERS_KEY)) || [];

export function saveLocal(){
    localStorage.setItem(LOCAL_STRONG_LIST_USERS_KEY, JSON.stringify(UsersArr));
  };