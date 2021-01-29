export { default as Post } from '../..\\components\\Post\\Post.vue'
export { default as PostForm } from '../..\\components\\Post\\PostForm.vue'
export { default as PostList } from '../..\\components\\Post\\PostList.vue'
export { default as Header } from '../..\\components\\system\\Header.vue'
export { default as Preloader } from '../..\\components\\UI\\Preloader.vue'
export { default as Search } from '../..\\components\\UI\\Search.vue'
export { default as Button } from '../..\\components\\UI\\Controls\\Button.vue'
export { default as Input } from '../..\\components\\UI\\Controls\\Input.vue'
export { default as Select } from '../..\\components\\UI\\Controls\\Select.vue'

export const LazyPost = import('../..\\components\\Post\\Post.vue' /* webpackChunkName: "components/post" */).then(c => c.default || c)
export const LazyPostForm = import('../..\\components\\Post\\PostForm.vue' /* webpackChunkName: "components/post-form" */).then(c => c.default || c)
export const LazyPostList = import('../..\\components\\Post\\PostList.vue' /* webpackChunkName: "components/post-list" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\system\\Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyPreloader = import('../..\\components\\UI\\Preloader.vue' /* webpackChunkName: "components/preloader" */).then(c => c.default || c)
export const LazySearch = import('../..\\components\\UI\\Search.vue' /* webpackChunkName: "components/search" */).then(c => c.default || c)
export const LazyButton = import('../..\\components\\UI\\Controls\\Button.vue' /* webpackChunkName: "components/button" */).then(c => c.default || c)
export const LazyInput = import('../..\\components\\UI\\Controls\\Input.vue' /* webpackChunkName: "components/input" */).then(c => c.default || c)
export const LazySelect = import('../..\\components\\UI\\Controls\\Select.vue' /* webpackChunkName: "components/select" */).then(c => c.default || c)
