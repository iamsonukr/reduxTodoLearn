import { createStore } from "@reduxjs/toolkit";
import { bugReducer } from "./reducer";

// createstore is an another example of higer order function because it takes another function (a reducer) as an agrument.

const bugStore=createStore(bugReducer)

export {bugStore}