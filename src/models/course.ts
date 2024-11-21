import {Category} from "./category.ts";

export interface Course {
    id: number;
    title: string;
    description: string;
    duration: number;
    category: Category;
}

export interface AddCourseRequest{
    id: number;
    title: string;
    description: string;
    duration: number;
    category: number;
}

export interface CourseCreateModel{
    id: number;
    title: string;
    description: string;
    duration: number;
    categoryId: number;
}

export interface CourseUpdateModel{
    title: string;
    description: string;
    duration: number;
    categoryId: number;
}
