import { TypographyTypes } from "../../../types/Typography.types";

export const Typography = ({ as: Tag, children,onClick }: TypographyTypes) => {
  return <Tag onClick={onClick}>{children}</Tag>;
};
