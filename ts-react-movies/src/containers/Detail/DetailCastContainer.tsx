import React, { useEffect, useState } from "react";
import DetailCastListModal from "components/common/Modal/Modal";
import { connect } from "react-redux";
import { RootState } from "modules";
import { getCastDetail } from "modules/Detail/detailCast";

interface DetailCastContainerProps {
  castInfo: any;
  castCredits: any;
  getCastDetail: Function;
  castId: number;
}
const DetailCastContainer: React.SFC<DetailCastContainerProps> = ({
  castInfo,
  castCredits,
  getCastDetail,
  castId,
}) => {
  useEffect(() => {
    getCastDetail(castId);
  }, [castId]);
  const [modalStatus, setModalStatus] = useState(false);

  const openModal = () => {
    setModalStatus(true);
  };
  const closeModal = () => {
    setModalStatus(false);
  };

  return (
    <>
      <DetailCastListModal
        modalStatus={modalStatus}
        close={closeModal}
        castInfo={castInfo}
        castCredits={castCredits}
      />
    </>
  );
};

export default connect(
  (state: RootState, props) => ({
    loading: state.castInfo.loading,
    castInfo: state.castInfo.castInfo,
    castCredits: state.castInfo.castCredits,
  }),
  { getCastDetail }
)(DetailCastContainer);
