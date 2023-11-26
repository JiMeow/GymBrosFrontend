import { axiosInstance } from "./axios";
import { type paths } from "@/schemas/schema";

export type GetExercisesResponse = paths["/exercises"]["get"]["responses"]["200"]["schema"];

export const getExercises = async (): Promise<GetExercisesResponse> => {
  const { data } = await axiosInstance.get<GetExercisesResponse>(
    "/exercises",
  );
  return data;
};

export type CreateExerciseBodyParam = 
  paths["/exercises"]["post"]["parameters"]["body"]

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
}


export type CreateManyExercisesBodyParam =
  paths["/exercises/many"]["post"]["parameters"]["body"]

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
}

export type GetExerciseByType = 
  paths["/exercises/type/{type}"]["get"]["parameters"]["path"]

export type GetExerciseByTypeResponse =
  paths["/exercises/type/{type}"]["get"]["responses"]["200"]["schema"];

export const getExerciseByType = async (
  params: GetExerciseByType,
): Promise<GetExerciseByTypeResponse> => {
  const { data } = await axiosInstance.get<GetExerciseByTypeResponse>(
    `/exercises/type/${params.type}`,
  );
  return data;
}

export type GetExerciseById = 
  paths["/exercises/{id}"]["get"]["parameters"]["path"]

export type GetExerciseByIdResponse =
  paths["/exercises/{id}"]["get"]["responses"]["200"]["schema"];

export const getExerciseById = async (): Promise<GetExerciseByIdResponse> => {
  const { data } = await axiosInstance.get<GetExerciseByIdResponse>(
    `/exercises/{id}`,
  );
  return data;
}

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
}

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
}

export type GetAllNutritionResponse =
  paths["/nutritions"]["get"]["responses"]["200"]["schema"];

export const getAllNutrition = async (): Promise<GetAllNutritionResponse> => {
  const { data } = await axiosInstance.get<GetAllNutritionResponse>(
    "/nutritions",
  );
  return data;
}

export type CreateNutritionBodyParam = paths["/nutritions"]["post"]["parameters"]["body"]

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
}

export type GetAllNutritionByUserIdPathParam = 
  paths["/nutritions/user/{userid}"]["get"]["parameters"]["path"]

export type GetAllNutritionByUserIdResponse =
  paths["/nutritions/user/{userid}"]["get"]["responses"]["200"]["schema"];

export const getAllNutritionByUserId = async (
  params: GetAllNutritionByUserIdPathParam,
): Promise<GetAllNutritionByUserIdResponse> => {
  const { data } = await axiosInstance.get<GetAllNutritionByUserIdResponse>(
    `/nutritions/user/${params.userid}`,
  );
  return data;
}

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
}

