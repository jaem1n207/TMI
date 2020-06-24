import React from "react";
import DetailCast from "containers/Detail/DetailCastContainer";
import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
  castId: any;
}
interface DetailCastPageProps extends RouteComponentProps<MatchParams> {}
const DetailCastPage: React.SFC<DetailCastPageProps> = (props) => {
  const { castId } = props.match.params;

  return (
    <>
      <DetailCast castId={castId} />
    </>
  );
};

export default DetailCastPage;
