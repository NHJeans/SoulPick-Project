import InfoCard from '../../components/Information/InfoCard';
import {MyPageContainer} from "./style.js";
import LayoutContainer from "../../components/Layout/LayoutContainer/index.js";
import MyPost from "../../components/Information/MyPost/index.js";

function MyPage() {
  return (
    <MyPageContainer>
      <LayoutContainer>
        <InfoCard />
        <MyPost />
      </LayoutContainer>
    </MyPageContainer>
  );
}

export default MyPage;
