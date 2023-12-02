import { axiosInstance } from "./axios";
import { type paths } from "@/schemas/schema";

export type PostAuthLoginBodyParam =
  paths["/auth/login"]["post"]["parameters"]["body"];

export type PostAuthLoginResponse =
  paths["/auth/login"]["post"]["responses"]["200"]["schema"];

export const postAuthLogin = async (
  params: PostAuthLoginBodyParam,
): Promise<PostAuthLoginResponse> => {
  const { data } = await axiosInstance.post<PostAuthLoginResponse>(
    "/auth/login",
    params,
  );
  return data;
};

export type PostAuthLogoutResponse =
  paths["/auth/logout"]["post"]["responses"]["200"]["schema"];

export const postAuthLogout = async (): Promise<PostAuthLogoutResponse> => {
  const { data } =
    await axiosInstance.post<PostAuthLogoutResponse>("/auth/logout");
  return data;
};

export type PostAuthRegisterBodyParam =
  paths["/auth/register"]["post"]["parameters"]["body"];

export type PostAuthRegisterResponse =
  paths["/auth/register"]["post"]["responses"]["201"]["schema"];

export const postAuthRegister = async (
  params: PostAuthRegisterBodyParam,
): Promise<PostAuthRegisterResponse> => {
  const { data } = await axiosInstance.post<PostAuthRegisterResponse>(
    "/auth/register",
    params,
  );
  return data;
};

export type GetAuthMeResponse =
  paths["/auth/me"]["get"]["responses"]["200"]["schema"];

export const getAuthMe = async (): Promise<GetAuthMeResponse> => {
  const { data } = await axiosInstance.get<GetAuthMeResponse>("/auth/me");
  return data;
};

export type GetExercisesResponse =
  paths["/exercises"]["get"]["responses"]["200"]["schema"];

export const getExercises = async (): Promise<GetExercisesResponse> => {
  const { data } = await axiosInstance.get<GetExercisesResponse>("/exercises");
  return data;
};

export type CreateExerciseBodyParam =
  paths["/exercises"]["post"]["parameters"]["body"];

export type CreateExerciseResponse =
  paths["/exercises"]["post"]["responses"]["201"]["schema"];

export const createExercise = async (
  params: CreateExerciseBodyParam,
): Promise<CreateExerciseResponse> => {
  const { data } = await axiosInstance.post<CreateExerciseResponse>(
    "/exercises",
    params,
  );
  return data;
};

export type CreateManyExercisesBodyParam =
  paths["/exercises/many"]["post"]["parameters"]["body"];

export type CreateManyExercisesResponse =
  paths["/exercises/many"]["post"]["responses"]["201"]["schema"];

export const createManyExercises = async (
  params: CreateManyExercisesBodyParam,
): Promise<CreateManyExercisesResponse> => {
  const { data } = await axiosInstance.post<CreateManyExercisesResponse>(
    "/exercises/many",
    params,
  );
  return data;
};

export type GetExerciseByType =
  paths["/exercises/type/{type}"]["get"]["parameters"]["path"];

export type GetExerciseByTypeResponse =
  paths["/exercises/type/{type}"]["get"]["responses"]["200"]["schema"];

export const getExerciseByType = async (
  params: GetExerciseByType,
): Promise<GetExerciseByTypeResponse> => {
  const { data } = await axiosInstance.get<GetExerciseByTypeResponse>(
    `/exercises/type/${params.type}`,
  );
  return data;
};

export type GetExerciseById =
  paths["/exercises/{id}"]["get"]["parameters"]["path"];

export type GetExerciseByIdResponse =
  paths["/exercises/{id}"]["get"]["responses"]["200"]["schema"];

export const getExerciseById = async (): Promise<GetExerciseByIdResponse> => {
  const { data } =
    await axiosInstance.get<GetExerciseByIdResponse>(`/exercises/{id}`);
  return data;
};

export type UpdateExerciseByIdPathParam =
  paths["/exercises/{id}"]["put"]["parameters"]["path"];

export type UpdateExerciseByIdBodyParam =
  paths["/exercises/{id}"]["put"]["parameters"]["body"];

export type UpdateExerciseByIdResponse =
  paths["/exercises/{id}"]["put"]["responses"]["200"]["schema"];

export const updateExerciseById = async (
  params: UpdateExerciseByIdPathParam & UpdateExerciseByIdBodyParam,
): Promise<UpdateExerciseByIdResponse> => {
  const { data } = await axiosInstance.put<UpdateExerciseByIdResponse>(
    `/exercises/${params.id}`,
    params,
  );
  return data;
};

export type DeleteExerciseByIdPathParam =
  paths["/exercises/{id}"]["delete"]["parameters"]["path"];

export type DeleteExerciseByIdResponse =
  paths["/exercises/{id}"]["delete"]["responses"]["204"]["schema"];

export const deleteExerciseById = async (
  params: DeleteExerciseByIdPathParam,
): Promise<DeleteExerciseByIdResponse> => {
  const { data } = await axiosInstance.delete<DeleteExerciseByIdResponse>(
    `/exercises/${params.id}`,
  );
  return data;
};

export type GetAllNutritionResponse =
  paths["/nutritions"]["get"]["responses"]["200"]["schema"];

export const getAllNutrition = async (): Promise<GetAllNutritionResponse> => {
  const { data } =
    await axiosInstance.get<GetAllNutritionResponse>("/nutritions");
  return data;
};

export type CreateNutritionBodyParam =
  paths["/nutritions"]["post"]["parameters"]["body"];

export type CreateNutritionResponse =
  paths["/nutritions"]["post"]["responses"]["201"]["schema"];

export const createNutrition = async (
  params: CreateNutritionBodyParam,
): Promise<CreateNutritionResponse> => {
  const { data } = await axiosInstance.post<CreateNutritionResponse>(
    "/nutritions",
    params,
  );
  return data;
};

export type GetAllNutritionByUserIdPathParam =
  paths["/nutritions/user/{userid}"]["get"]["parameters"]["path"];

export type GetAllNutritionByUserIdResponse =
  paths["/nutritions/user/{userid}"]["get"]["responses"]["200"]["schema"];

export const getAllNutritionByUserId = async (
  params: GetAllNutritionByUserIdPathParam,
): Promise<GetAllNutritionByUserIdResponse> => {
  const { data } = await axiosInstance.get<GetAllNutritionByUserIdResponse>(
    `/nutritions/user/${params.userid}`,
  );
  return data;
};

export type GetNutritionByIdPathParam =
  paths["/nutritions/{id}"]["get"]["parameters"]["path"];

export type GetNutritionByIdResponse =
  paths["/nutritions/{id}"]["get"]["responses"]["200"]["schema"];

export const getNutritionById = async (
  params: GetNutritionByIdPathParam,
): Promise<GetNutritionByIdResponse> => {
  const { data } = await axiosInstance.get<GetNutritionByIdResponse>(
    `/nutritions/${params.id}`,
  );
  return data;
};

export type UpdateNutritionByIdPathParam =
  paths["/nutritions/{id}"]["put"]["parameters"]["path"];

export type UpdateNutritionByIdBodyParam =
  paths["/nutritions/{id}"]["put"]["parameters"]["body"];

export type UpdateNutritionByIdResponse =
  paths["/nutritions/{id}"]["put"]["responses"]["200"]["schema"];

export const updateNutritionById = async (
  params: UpdateNutritionByIdPathParam & UpdateNutritionByIdBodyParam,
): Promise<UpdateNutritionByIdResponse> => {
  const { data } = await axiosInstance.put<UpdateNutritionByIdResponse>(
    `/nutritions/${params.id}`,
    params,
  );
  return data;
};

export type DeleteNutritionByIdPathParam =
  paths["/nutritions/{id}"]["delete"]["parameters"]["path"];

export type DeleteNutritionByIdResponse =
  paths["/nutritions/{id}"]["delete"]["responses"]["204"]["schema"];

export const deleteNutritionById = async (
  params: DeleteNutritionByIdPathParam,
): Promise<DeleteNutritionByIdResponse> => {
  const { data } = await axiosInstance.delete<DeleteNutritionByIdResponse>(
    `/nutritions/${params.id}`,
  );
  return data;
};

export type GetAllPlansResponse =
  paths["/plans"]["get"]["responses"]["200"]["schema"];

export const getAllPlans = async (): Promise<GetAllPlansResponse> => {
  const { data } = await axiosInstance.get<GetAllPlansResponse>("/plans");
  return data;
};

export type CreatePlanBodyParam = paths["/plans"]["post"]["parameters"]["body"];

export type CreatePlanResponse =
  paths["/plans"]["post"]["responses"]["201"]["schema"];

export const createPlan = async (
  params: CreatePlanBodyParam,
): Promise<CreatePlanResponse> => {
  const { data } = await axiosInstance.post<CreatePlanResponse>(
    "/plans",
    params,
  );
  return data;
};

export type GetPlanByUserIdPathParam =
  paths["/plans/user/{user_id}"]["get"]["parameters"]["path"];

export type GetPlanByUserIdResponse =
  paths["/plans/user/{user_id}"]["get"]["responses"]["200"]["schema"];

export const getPlanByUserId = async (
  params: GetPlanByUserIdPathParam,
): Promise<GetPlanByUserIdResponse> => {
  const { data } = await axiosInstance.get<GetPlanByUserIdResponse>(
    `/plans/user/${params.user_id}`,
  );
  return data;
};

export type GetPlanByIdPathParam =
  paths["/plans/{id}"]["get"]["parameters"]["path"];

export type GetPlanByIdResponse =
  paths["/plans/{id}"]["get"]["responses"]["200"]["schema"];

export const getPlanById = async (
  params: GetPlanByIdPathParam,
): Promise<GetPlanByIdResponse> => {
  const { data } = await axiosInstance.get<GetPlanByIdResponse>(
    `/plans/${params.id}`,
  );
  return data;
};

export type UpdatePlanByIdPathParam =
  paths["/plans/{id}"]["put"]["parameters"]["path"];

export type UpdatePlanByIdBodyParam =
  paths["/plans/{id}"]["put"]["parameters"]["body"];

export type UpdatePlanByIdResponse =
  paths["/plans/{id}"]["put"]["responses"]["200"]["schema"];

export const updatePlanById = async (
  params: UpdatePlanByIdPathParam & UpdatePlanByIdBodyParam,
): Promise<UpdatePlanByIdResponse> => {
  const { data } = await axiosInstance.put<UpdatePlanByIdResponse>(
    `/plans/${params.id}`,
    params,
  );
  return data;
};

export type DeletePlanByIdPathParam =
  paths["/plans/{id}"]["delete"]["parameters"]["path"];

export type DeletePlanByIdResponse =
  paths["/plans/{id}"]["delete"]["responses"]["204"]["schema"];

export const deletePlanById = async (
  params: DeletePlanByIdPathParam,
): Promise<DeletePlanByIdResponse> => {
  const { data } = await axiosInstance.delete<DeletePlanByIdResponse>(
    `/plans/${params.id}`,
  );
  return data;
};

export type GetPlanByUserDayPathParam =
  paths["/plans/user/{user_id}/{day}"]["get"]["parameters"]["path"];

export type GetPlanByUserDayResponse =
  paths["/plans/user/{user_id}/{day}"]["get"]["responses"]["200"]["schema"];

export const getPlanByUserDay = async (
  params: GetPlanByUserDayPathParam,
): Promise<GetPlanByUserDayResponse> => {
  const { data } = await axiosInstance.get<GetPlanByUserDayResponse>(
    `/plans/user/${params.user_id}/${params.day}`,
  );
  return data;
};

export type UpdatePlanByUserDayPathParam =
  paths["/plans/user/{user_id}/{day}"]["put"]["parameters"]["path"];

export type UpdatePlanByUserDayBodyParam =
  paths["/plans/user/{user_id}/{day}"]["put"]["parameters"]["body"];

export type UpdatePlanByUserDayResponse =
  paths["/plans/user/{user_id}/{day}"]["put"]["responses"]["200"]["schema"];

export const updatePlanByUserDay = async (
  params: UpdatePlanByUserDayPathParam & UpdatePlanByUserDayBodyParam,
): Promise<UpdatePlanByUserDayResponse> => {
  const { data } = await axiosInstance.put<UpdatePlanByUserDayResponse>(
    `/plans/user/${params.user_id}/${params.day}`,
    params,
  );
  return data;
};

export type DeletePlanByUserDayPathParam =
  paths["/plans/user/{user_id}/{day}"]["delete"]["parameters"]["path"];

export type DeletePlanByUserDayResponse =
  paths["/plans/user/{user_id}/{day}"]["delete"]["responses"]["204"]["schema"];

export const deletePlanByUserDay = async (
  params: DeletePlanByUserDayPathParam,
): Promise<DeletePlanByUserDayResponse> => {
  const { data } = await axiosInstance.delete<DeletePlanByUserDayResponse>(
    `/plans/user/${params.user_id}/${params.day}`,
  );
  return data;
};

export type GetAllUsersResponse =
  paths["/users"]["get"]["responses"]["200"]["schema"];

export const getAllUsers = async (): Promise<GetAllUsersResponse> => {
  const { data } = await axiosInstance.get<GetAllUsersResponse>("/users");
  return data;
};

export type CreateUserBodyParam = paths["/users"]["post"]["parameters"]["body"];

export type CreateUserResponse =
  paths["/users"]["post"]["responses"]["201"]["schema"];

export const createUser = async (
  params: CreateUserBodyParam,
): Promise<CreateUserResponse> => {
  const { data } = await axiosInstance.post<CreateUserResponse>(
    "/users",
    params,
  );
  return data;
};

export type GetUserByIdPathParam =
  paths["/users/{id}"]["get"]["parameters"]["path"];

export type GetUserByIdResponse =
  paths["/users/{id}"]["get"]["responses"]["200"]["schema"];

export const getUserById = async (
  params: GetUserByIdPathParam,
): Promise<GetUserByIdResponse> => {
  const { data } = await axiosInstance.get<GetUserByIdResponse>(
    `/users/${params.id}`,
  );
  return data;
};

export type DeleteUserByIdPathParam =
  paths["/users/{id}"]["delete"]["parameters"]["path"];

export type DeleteUserByIdResponse =
  paths["/users/{id}"]["delete"]["responses"]["204"]["schema"];

export const deleteUserById = async (
  params: DeleteUserByIdPathParam,
): Promise<DeleteUserByIdResponse> => {
  const { data } = await axiosInstance.delete<DeleteUserByIdResponse>(
    `/users/${params.id}`,
  );
  return data;
};

export type UpdateUserUsepassByIdPathParam =
  paths["/users/{id}/usepass"]["patch"]["parameters"]["path"];

export type UpdateUserUsepassByIdBodyParam =
  paths["/users/{id}/usepass"]["patch"]["parameters"]["body"];

export type UpdateUserUsepassByIdResponse =
  paths["/users/{id}/usepass"]["patch"]["responses"]["200"]["schema"];

export const updateUserUsepassById = async (
  params: UpdateUserUsepassByIdPathParam & UpdateUserUsepassByIdBodyParam,
): Promise<UpdateUserUsepassByIdResponse> => {
  const { data } = await axiosInstance.patch<UpdateUserUsepassByIdResponse>(
    `/users/${params.id}/usepass`,
    params,
  );
  return data;
};

export type UpdateUserBodyByIdPathParam =
  paths["/users/{id}/body"]["patch"]["parameters"]["path"];

export type UpdateUserBodyByIdBodyParam =
  paths["/users/{id}/body"]["patch"]["parameters"]["body"];

export type UpdateUserBodyByIdResponse =
  paths["/users/{id}/body"]["patch"]["responses"]["200"]["schema"];

export const updateUserBodyById = async (
  params: UpdateUserBodyByIdPathParam & UpdateUserBodyByIdBodyParam,
): Promise<UpdateUserBodyByIdResponse> => {
  const { data } = await axiosInstance.patch<UpdateUserBodyByIdResponse>(
    `/users/${params.id}/body`,
    params,
  );
  return data;
};
