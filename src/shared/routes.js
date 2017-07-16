/**
 * Created by unnKoel on 2017/7/16.
 */

// @flow

// eslint-disable-next-line import/prefer-default-export
export const helloEndPointRoute = (num: ? number) => `/ajax/hello/${num || ':num'}`
