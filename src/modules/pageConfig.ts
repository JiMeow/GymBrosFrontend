import { type LayoutType } from "./layout/AppLayout";

export type PageMetaData = {
  id: string;
  label: string;
  path: string;
  layout: LayoutType;
  Icon?: React.FC;
};

export const pages = {
  login: {
    id: "login",
    label: "เข้าสู่ระบบ",
    path: "/auth/login",
    layout: "user",
  },
  register: {
    id: "register",
    label: "สมัครสมาชิก",
    path: "/auth/register",
    layout: "user",
  },
  home: {
    id: "home",
    label: "หน้าแรก",
    path: "/",
    layout: "user",
  },
} as const satisfies Record<string, PageMetaData>;

export type PagePath = (typeof pages)[keyof typeof pages]["path"];

export type PageId = keyof typeof pages;
