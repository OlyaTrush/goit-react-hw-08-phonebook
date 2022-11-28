import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts;

export const selectFilter = state => state.filter;

export const selectVisibleFilter = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normolizedFilter = filter.toLowerCase();

    return contacts.items.filter(item =>
      item.name.toLowerCase().includes(normolizedFilter)
    );
  }
);