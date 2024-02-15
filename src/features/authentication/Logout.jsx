import React from "react";
import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogut } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

export const Logout = () => {
  const { logout, isLoading } = useLogut();
  return (
    <ButtonIcon onClick={logout} disabled={isLoading}>
      {isLoading ? <SpinnerMini /> : <HiArrowRightOnRectangle />}
    </ButtonIcon>
  );
};
