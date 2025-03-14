import { TypographyTypes } from "../../../types/Typography.types";

export const Typography = ({ as: Tag, children }: TypographyTypes) => {
  return <Tag>{children}</Tag>;
};
