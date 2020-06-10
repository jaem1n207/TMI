import React from "react";
import { RouteComponentProps } from "react-router-dom";
import SubPage from "components/SubTemplate/SubTemplate";
import Navbar from "components/common/Navbar/Navbar";
import Header from "containers/Header/HeaderContainer";
import DetailContainer from "containers/Detail/DetailContainer";

interface MatchParams {
  movieId: string;
}
interface DetailPageProps extends RouteComponentProps<MatchParams> {}
const DetailPage: React.SFC<DetailPageProps> = (props) => {
  const { movieId } = props.match.params;
  const Components = {
    Navbar: <Navbar />,
    Header: <Header />,
    DetailContainer: <DetailContainer movie_id={movieId} />,
  };
  return <SubPage Components={Components}></SubPage>;
};

export default DetailPage;
