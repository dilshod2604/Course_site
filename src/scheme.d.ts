interface UserRequest {
  email: string;
  password: string;
  name?: string;
  avatar?: string;
  isAgree?: boolean;
}

interface SignInRequest {
  email: string;
  password: string;
}

interface CourseRequest {
  name: string;
  description: string;
  coverImage?: string;
  price: string;
  isFree: boolean;
  creatorId: string;
}

interface CreateLessonRequest {
  name: string;
  duration: number;
  coverImage: string;
  video: string;
  coursesId: string;
}
//user profile

interface UpdateUserProfile {
  name?: string | undefined;
  avatar?: string;
}
interface UpdateUserProfileAdmin {
  name?: string | undefined;
  avatar?: string;
}

interface UpdateFavoriteRequest {
  userId: string;
  coursesId: string;
  isFavorite: boolean;
}

interface UpdateUserCourseProgressRequest {
  userId: string;
  courseId: string;
  progress: number;
}

interface UserResponse {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  role: UserRole;
  isAgree?: boolean;
  createdAt: string;
  updatedAt: string;
}

interface CreateCourseResponse {
  id: string;
  name: string;
  description: string;
  coverImage?: string;
  price: string;
  isFree: boolean;
  creatorId: string;
  createdAt: string;
  updatedAt: string;
}

interface CourseResponse {
  id: string;
  name: string;
  description: string;
  coverImage?: string;
  price: string;
  isFree: boolean;
  lessons: LessonResponse[];
  createdAt: string;
  updatedAt: string;
}

interface LessonResponse {
  id: string;
  name: string;
  duration: number;
  coverImage: string;
  video: string;
  coursesId?: string;
}

interface UpdateUserCourseProgressResponse {
  userId: string;
  courseId: string;
  progress: number;
  updatedAt: string;
}
