import {ContentListContainer} from "./style.js";
import ContentItem from "../ContentItem/index.js";

function ContentList({data}) {

  return (
      <ContentListContainer>
        {data.map((item) => (
          <ContentItem key={item.id} item={item} />
        ))}
      </ContentListContainer>
  )
}
export default ContentList