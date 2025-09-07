import React, { ReactNode, Children, isValidElement } from "react";
import Image, { StaticImageData } from "next/image";

import styles from "./styles.module.scss";

interface CopyAndTwoImageProps {
  img1: StaticImageData | string;
  img2: StaticImageData | string;
  children: ReactNode | ReactNode[];
  img1Position?: string;
  img2Position?: string;
  reverse?: boolean;
  mobileReverse?: boolean;
  img1Style?: "contain" | "cover";
  img2Style?: "contain" | "cover";
  img1Alt?: string;
  img2Alt?: string;
  title?: ReactNode;
}

const CopyAndTwoImage = ({
  img1,
  img2,
  children,
  img1Position = "50% 50%",
  img2Position = "50% 50%",
  reverse = false,
  mobileReverse = false,
  img1Style = "cover",
  img2Style = "cover",
  img1Alt = "",
  img2Alt = "",
  title,
}: CopyAndTwoImageProps) => {
  const componentClass = () => {
    let classStr = styles.CopyAndTwoImage;
    classStr += reverse ? ` ${styles.reverse}` : ``;
    classStr += mobileReverse ? ` ${styles.mobileReverse}` : ``;
    return classStr;
  };

  // Separate title from other content if title prop is not provided
  const getTitleAndContent = () => {
    if (title) {
      return {
        titleElement: title,
        contentElements: children,
        allContent: [title, children],
      };
    }

    // If no title prop, try to extract the first heading as title
    const childrenArray = Children.toArray(children);
    let titleElement: ReactNode = null;
    let contentElements: ReactNode[] = [];

    for (let i = 0; i < childrenArray.length; i++) {
      const child = childrenArray[i];
      if (
        isValidElement(child) &&
        typeof child.type === "string" &&
        ["h1", "h2", "h3", "h4", "h5", "h6"].includes(child.type)
      ) {
        titleElement = child;
        contentElements = childrenArray.slice(i + 1);
        break;
      }
    }

    // If no heading found, treat all children as content
    if (!titleElement) {
      contentElements = childrenArray;
    }

    return { titleElement, contentElements, allContent: children };
  };

  const { titleElement, contentElements, allContent } = getTitleAndContent();

  return (
    <div className={componentClass()}>
      {titleElement && <div className={styles.TitleBlock}>{titleElement}</div>}
      <div className={styles.ImagesBlock}>
        <div className={styles.ImageWrapper}>
          <Image
            style={{ objectPosition: img1Position, objectFit: img1Style }}
            src={img1}
            alt={img1Alt}
            className={styles.img}
            priority
            fill
          />
        </div>
        <div className={styles.ImageWrapper}>
          <Image
            style={{ objectPosition: img2Position, objectFit: img2Style }}
            src={img2}
            alt={img2Alt}
            className={styles.img}
            priority
            fill
          />
        </div>
      </div>
      <div className={styles.CopyBlock}>
        <div className={styles.MobileTabletContent}>{contentElements}</div>
        <div className={styles.DesktopContent}>{allContent}</div>
      </div>
    </div>
  );
};

export default CopyAndTwoImage;
