import { takeLatest, call, put, all } from 'typed-redux-saga';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import { fetchFakeStoreCategories } from '../../utils/fake-store';
import LOCAL_SHOP_DATA from '../../data/local-shop-data';
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action';
import { CATEGORIES_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
  try {
    // Try Fake Store API first; if it fails, fall back to firebase util
    let categoriesArray;
    try {
      categoriesArray = yield call(fetchFakeStoreCategories);
    } catch (err) {
      categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
    }

    // Ensure legacy local SHOP_DATA categories are present (e.g., 'Jackets', 'Mens', 'Womens')
    try {
      const local: any[] = LOCAL_SHOP_DATA as any[];
      const existingKeys = new Set(categoriesArray.map((c: any) => (c.title || c.name || '').toString().toLowerCase()));
      const toAdd = local
        .map((s) => ({
          ...s,
          title: (s.title || '').toString(),
          items: s.items || [],
          route: (s.title || '').toString().toLowerCase(),
        }))
        .filter((s) => !existingKeys.has(s.title.toLowerCase()));

      if (toAdd.length) {
        categoriesArray = categoriesArray.concat(toAdd);
      }
    } catch (e) {
      // ignore local merge errors
    }

    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error as Error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
