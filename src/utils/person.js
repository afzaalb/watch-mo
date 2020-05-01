import { gender } from "../constants/person";

export const getTextByGender = (sex) => {
  const { MALE, FEMALE } = gender;
  switch (sex) {
    case FEMALE:
      return "Female";

    case MALE:
      return "Male";

    default:
      return "Female";
  }
};
