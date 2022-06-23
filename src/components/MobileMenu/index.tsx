/* eslint-disable no-unused-vars */
import React, { useCallback } from "react";
import styles from "./styles.module.css";
import Dialog from "@mui/material/Dialog";
import { useRouter } from "next/router";
import { T } from "../../hooks/translation";
import Image from "next/image";
import { TELIO_BLOG, TELIO_CAREERS } from "../../constants";
import {
  openTelioAppAppStore,
  openTelioAppPlayStore,
  openTelioZalo,
} from "../../utils";
import { WrapImage } from "../WrapImage";
type MobileMenuProps = {
  showDrawer: any;
  toggleDrawer: any;
  setShowDrawer: any;
};
function MobileMenu({
  showDrawer,
  toggleDrawer,
  setShowDrawer,
}: MobileMenuProps) {
  const navigate = (href: any) => {
    setShowDrawer(false);
    window.location = href;
  };
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const handleLanguageChange = useCallback(
    (value: string) => {
      if (locale !== value) {
        router.push({ pathname, query }, asPath, { locale: value });
      }
      setShowDrawer(false);
    },
    [asPath, locale, pathname, query, router, setShowDrawer]
  );

  return (
    <>
      <Dialog onClose={toggleDrawer(false)} open={showDrawer} fullScreen={true}>
        <div>
          <div className={styles.rowMobileMenu}>
            <div className={styles.wrapClose} onClick={toggleDrawer(false)}>
              <div>{T("mobileMenu.close")}</div>
              <WrapImage
                desktop={{
                  src: "/images/Exit.png",
                  alt: "Exit",
                  className: styles.menuImage,
                  style: { marginLeft: "4px", marginRight: "unset" },
                  layout: "fill",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className={styles.wrapMenuContent}>
            <div
              className={`${styles.rowMobileMenu} ${styles.menuTitle}`}
              onClick={() => navigate(TELIO_CAREERS + T("link"))}
            >
              {T("mobileMenu.careers")}
            </div>
            <div
              className={`${styles.rowMobileMenu} ${styles.menuTitle}`}
              onClick={() => navigate(TELIO_BLOG + T("link"))}
            >
              blog
            </div>

            <div className={`${styles.menuTitle}`}>
              {T("mobileMenu.language")}
            </div>
            <div className={`${styles.rowMobileMenu} ${styles.itemList}`}>
              <div
                className={styles.wrapMemuItem}
                onClick={() => {
                  handleLanguageChange("vi");
                }}
              >
                <WrapImage
                  desktop={{
                    src: "/images/VN.png",
                    alt: "VN",
                    layout: "fill",
                    objectFit: "cover",
                    className: styles.menuImage,
                  }}
                />
                {T("mobileMenu.vietnamese")}
              </div>
              <div
                className={styles.wrapMemuItem}
                onClick={() => {
                  handleLanguageChange("en");
                }}
              >
                <WrapImage
                  desktop={{
                    src: "/images/USA.png",
                    alt: "USA",
                    layout: "fill",
                    objectFit: "cover",
                    className: styles.menuImage,
                  }}
                />
                {T("mobileMenu.english")}
              </div>
            </div>
            <div className={`${styles.menuTitle}`}>
              {T("mobileMenu.product")}
            </div>
            <div className={`${styles.rowMobileMenu} ${styles.itemList}`}>
              <div
                className={`${styles.wrapMemuItemApp} ${styles.zaloApp}`}
                onClick={openTelioZalo}
              >
                <WrapImage
                  desktop={{
                    src: "/images/zalo-logo.png",
                    alt: "USA",
                    layout: "fill",
                    objectFit: "cover",
                    className: styles.menuImage,
                  }}
                />
                Telio Zalo Store
              </div>
              <div
                className={`${styles.wrapMemuItemApp} ${styles.mobileApp}`}
                onClick={openTelioAppPlayStore}
              >
                <WrapImage
                  desktop={{
                    src: "/images/playStoreIcon.svg",
                    alt: "CH play",
                    layout: "fill",
                    objectFit: "cover",
                    className: styles.menuImage,
                  }}
                />
                {T("ung-dung-telio")} (Android)
              </div>
              <div
                className={`${styles.wrapMemuItemApp} ${styles.mobileApp}`}
                onClick={openTelioAppAppStore}
              >
                <WrapImage
                  desktop={{
                    src: "/images/appStoreIcon.svg",
                    alt: "APP store",
                    layout: "fill",
                    objectFit: "cover",
                    className: styles.menuImage,
                  }}
                />
                {T("ung-dung-telio")} (IOS)
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default MobileMenu;
