import {
  ContentsListContainer,
} from "./style.js";
import ContentItem from "../ContentItem/index.js";


const CONTENTS = [
  {name : '동방신기 오빠들 컴백했어여!~!!!!', contents: '귀걸이 네 몸무게~~~ 노노우~~~~ It\'s about the way you are~~~~~'},
  {name : '엔믹스,,,,,,,,미쳐', contents: '못잃어 꼭 들어보세요,,,,,,,,사랑해여 엔믹스!!!!!!!!!!!!!!!!!! 사랑해여 엔믹스!!!!!!!!!!!!!!!!!!'},
  {name : '에스파 수파노바 중독 되버렸는걸,,, 나 좀 살려@,@', contents: '수수수수파노바 노바~ 난 몰랑'},
  {name : 'test1', contents: 'test'},
  {name : 'test2', contents: 'test'},
  {name : 'test3', contents: 'test'},
];
function ContentsList() {
  return (
    <ContentsListContainer>
      {CONTENTS.map((content) => (
        <ContentItem key={content.name} content={content}/>
      ))}
    </ContentsListContainer>
  )
}
export default ContentsList