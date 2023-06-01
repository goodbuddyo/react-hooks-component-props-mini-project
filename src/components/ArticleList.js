import React from "react";
import Article from "./Article";

function ArticleList(props) {
  let article_posts=props.post
  const mapArticles=article_posts.map((postObj) => {
    return (<Article key={postObj.id} title={postObj.title} date={postObj.date} preview={postObj.preview} />)

  })

  return (
    <main id="article_list">
      {mapArticles}
    </main>
  );
}

export default ArticleList;



