import {ContentListContainer} from "./style.js";
import ContentItem from "../ContentItem/index.js";

function ContentList({data}) {

  const sortedData = [...data].sort((latest, oldest) => {
    return new Date(oldest.updated_at) - new Date(latest.updated_at);
  });

  return (
      <ContentListContainer>
        {sortedData.map((item) => (
          <ContentItem key={item.id} item={item} />
        ))}
      </ContentListContainer>
  )
}
export default ContentList