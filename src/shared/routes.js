/**
 * Created by unnKoel on 2017/7/16.
 */

// @flow

export const HOME_PAGE_ROUTE = '/'
export const HELLO_PAGE_ROUTE = '/hello'
export const HELLO_ASYNC_PAGE_ROUTE = '/hello-async'
export const NOT_FOUND_DEMO_PAGE_ROUTE = '/404'

// eslint-disable-next-line import/prefer-default-export
export const helloEndPointRoute = (num: ? number) => `/ajax/hello/${num || ':num'}`
