import React, { useEffect, useState } from "react";
import DetailCastListModal from "components/common/Modal/Modal";

interface DetailCastContainerProps {
  castInfo: any;
  castCredits: any;
  isModal: boolean;
  close: (e: any) => void;
}
const DetailCastContainer: React.SFC<DetailCastContainerProps> = ({
  castInfo,
  castCredits,
  isModal,
  close,
}) => {
  return (
    <>
      <DetailCastListModal
        close={close}
        modalStatus={isModal}
        castInfo={castInfo}
        castCredits={castCredits}
      />
    </>
  );
};

export default DetailCastContainer;
