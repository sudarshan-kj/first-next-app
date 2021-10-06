import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Preview.module.css";

const WithPreview =
  (Component) =>
  ({ isPreview, ...rest }) => {
    const router = useRouter();

    return (
      <>
        {isPreview && (
          <div
            className={styles.previewContainer}
            onClick={() => router.push("/api/clearPreview")}
          >
            In Preview Mode. Click to exit
          </div>
        )}
        <Component {...rest} />
      </>
    );
  };

export default WithPreview;
