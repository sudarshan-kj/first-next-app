import styles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map((article, id) => (
        <ArticleItem key={id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
