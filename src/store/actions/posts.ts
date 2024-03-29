import {IPost} from '../../types/types';

export const getPosts = (posts: IPost[]) => ({
    type: 'GET-POSTS', posts
}) as const;
export const removePost = (id: number) => ({
    type: 'REMOVE-POST', id
}) as const;
export const addPost = (post: IPost) => ({
    type: 'ADD-POST', post
}) as const;
export const removePostText = (id: number) => ({
    type: 'REMOVE-POST-TEXT', id
}) as const;
export const changePostTitle = (id: number, title: string) => ({
    type: 'CHANGE-POST-TITLE', id, title
}) as const;
export const changePostText = (id: number, text: string) => ({
    type: 'CHANGE-POST-TEXT', id, text
}) as const;
export const clearPostText = (id: number) => ({
    type: 'CLEAR-POST-TEXT', id
}) as const;