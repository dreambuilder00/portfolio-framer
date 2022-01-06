import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
  TwitterLogo,
  GlobeHemisphereWest,
} from "phosphor-react";
import Memoji from "../images/[removal 1.png";
import Logo from "../images/stan-1.svg";
import WavyHand from "../images/wavy 1.png";
import Navbar from "../component/navbar";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [show_nav, setShow_nav] = useState(false);

  const setNav = (value) => {
    setShow_nav(value);
  };
  return (
    <div
      className={
        show_nav
          ? `${styles.container} ${styles.container_cropped}`
          : `${styles.container}`
      }
    >
      <Head>
        <title>Ugwu Stanley</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../images/[removal 1.png" />
        {/* google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Fira+Code:wght@300;400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* <div className={show_nav ? styles.show_nav : styles.hide_nav}> */}
        <AnimatePresence>
              {show_nav? 
                    <Navbar setNav={setNav} show_nav={show_nav} />: null
              }
        </ AnimatePresence>
      {/* </div> */}

      <main className={styles.main}>
        <div className={styles.home_screen}>
          <header className={styles.main}>
            <nav className={styles.nav}>
              <Image
                className={styles.logo}
                width="100"
                height="100"
                src={Logo}
                alt="ugwu stanley site logo"
              ></Image>

              <div
                className={
                  show_nav
                    ? `${styles.menu_bar} ${styles.menu_bar_clicked}`
                    : `${styles.menu_bar} ${styles.menu_bar_unclicked}`
                }
                onClick={() => setShow_nav(!show_nav)}
              >
                <div className={styles.menu_bar_arrow}></div>
                <motion.div
                  initial={show_nav ? { rotate: 0 } : null}
                  animate={show_nav ? { rotate: 90 } : null}
                  transition={{ duration: 0.1, ease: "linear" }}
                  className={styles.menu_bar_arrow}
                ></motion.div>
              </div>
            </nav>
          </header>

          <section className={styles.intro}>
            {/* header */}

            <span>
              <p className={styles.intro_p}>Hi, i&apos;m</p>
              <motion.h1 className={styles.intro_h1}>
                Ugwu Chiagozie Stanley
              </motion.h1>
              <h4 className={styles.intro_h4}>
                a software developer who build innovative products
              </h4>

              <button className={styles.hire_me_btn}>
                <p className={styles.hire_me_btn_p}>Hire me</p>
                <div className={styles.hire_me_btn_arrow}></div>
              </button>
            </span>

            <div className={styles.intro_socials}>
              <LinkedinLogo size={25} color="#D6D8D8" weight="fill" />
              <InstagramLogo color="#D6D8D8" weight="fill" size={25} />
              <TwitterLogo size={25} color="#D6D8D8" weight="fill" />
              <GithubLogo size={25} color="#D6D8D8" weight="fill" />
            </div>

            <div className={styles.nav_indicator}>
              <h4 className={styles.nav_indicator_1}>01</h4>
              <h4 className={styles.nav_indicator_2}>02</h4>
              <h4 className={styles.nav_indicator_3}>03</h4>
              <h4 className={styles.nav_indicator_4}>04</h4>
            </div>
          </section>
        </div>

        <section className={styles.about_me}>
          <div className={styles.about_me_heading}>
            <div className={styles.about_me_heading_arrow}></div>
            <p className={styles.about_me_heading_p}>About me</p>
          </div>

          <div className={styles.about_me_main}>
            <div className={styles.about_me_main_s1}>
              <p className={styles.about_me_main_s1_p}>
                <span>
                  Hello there{" "}
                  <span className="wavyhand">
                    <Image
                      src={WavyHand}
                      className={styles.wavyHand}
                      alt="My memoji smiling face"
                    />
                  </span>{" "}
                </span>
                , meet Stanley a software developer passionate about software
                products and focused on building innovative pixel perfect
                applications
              </p>

              <h4 className={styles.about_me_main_s1_h4}>Want to hire me?</h4>
              <button className={styles.download_cv}>
                <div className={styles.download_cv_arrows}></div>
                <p className={styles.download_cv_p}>Download CV</p>
              </button>
            </div>
            <div className={styles.about_me_main_s2}>
              <Image
                src={Memoji}
                className={styles.memoji}
                alt="My memoji smiling face"
              />
            </div>
          </div>
        </section>

        <section className={styles.projects}>
          <div className={styles.projects_heading}>
            <p className={styles.projects_heading_p}>Featured Projects</p>
            <div className={styles.projects_heading_arrow}></div>
          </div>

          <div className={styles.projects_main_1}>
            <div className={styles.projects_main_1_card_1}>
              <h1 className={styles.projects_main_1_card_1_h1}>02</h1>
              <p className={styles.projects_main_1_card_1_tools}>
                HTMl/css Javascript AOS
              </p>

              <h2 className={styles.projects_main_1_card_1_h2}>Bookmarks</h2>
              <p className={styles.projects_main_1_card_1_desc}>
                A landing page for bookmarks chrome extension
              </p>

              <div className={styles.projects_main_1_card_1_links}>
                <span className={styles.projects_main_1_card_1_links_website}>
                  Website
                </span>

                <GlobeHemisphereWest size={25} color="#D6D8D8" weight="fill" />

                <span className={styles.projects_main_1_card_1_links_github}>
                  GitHub
                </span>

                <GithubLogo size={25} color="#D6D8D8" weight="fill" />
              </div>
            </div>

            <div className={styles.projects_main_1_card_2}>
              <h1 className={styles.projects_main_1_card_2_h1}>01</h1>
              <p className={styles.projects_main_1_card_2_tools}>
                HTMl/css Javascript AOS
              </p>

              <h2 className={styles.projects_main_1_card_2_h2}>Bookmarks</h2>
              <p className={styles.projects_main_1_card_2_desc}>
                A landing page for bookmarks chrome extension
              </p>

              <div className={styles.projects_main_1_card_2_links}>
                <span className={styles.projects_main_1_card_2_links_website}>
                  Website
                </span>

                <GlobeHemisphereWest size={25} color="#D6D8D8" weight="fill" />

                <span className={styles.projects_main_1_card_2_links_github}>
                  GitHub
                </span>

                <GithubLogo size={25} color="#D6D8D8" weight="fill" />
              </div>
            </div>
          </div>

          <div className={styles.projects_main_2}>
            <div className={styles.projects_main_2_card_3}>
              <h1 className={styles.projects_main_2_card_3_h1}>03</h1>
              <p className={styles.projects_main_2_card_3_tools}>
                HTMl/css Javascript AOS
              </p>

              <h2 className={styles.projects_main_2_card_3_h2}>Bookmarks</h2>
              <p className={styles.projects_main_2_card_3_desc}>
                A landing page for bookmarks chrome extension
              </p>

              <div className={styles.projects_main_2_card_3_links}>
                <span className={styles.projects_main_2_card_3_links_website}>
                  Website
                </span>

                <GlobeHemisphereWest size={25} color="#D6D8D8" weight="fill" />

                <span className={styles.projects_main_2_card_3_links_github}>
                  GitHub
                </span>

                <GithubLogo size={25} color="#D6D8D8" weight="fill" />
              </div>
            </div>

            <div className={styles.projects_main_2_card_4}>
              <h1 className={styles.projects_main_2_card_4_h1}>04</h1>
              <p className={styles.projects_main_2_card_4_tools}>
                HTMl/css Javascript AOS
              </p>

              <h2 className={styles.projects_main_2_card_4_h2}>Bookmarks</h2>
              <p className={styles.projects_main_2_card_4_desc}>
                A landing page for bookmarks chrome extension
              </p>

              <div className={styles.projects_main_2_card_4_links}>
                <span className={styles.projects_main_2_card_4_links_website}>
                  Website
                </span>

                <GlobeHemisphereWest size={25} color="#D6D8D8" weight="fill" />

                <span className={styles.projects_main_2_card_4_links_github}>
                  GitHub
                </span>

                <GithubLogo size={25} color="#D6D8D8" weight="fill" />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <div className={styles.contact_heading}>
            <div className={styles.contact_heading_arrow}></div>
            <p className={styles.contact_heading_p}>Contact Details</p>
          </div>

          <div className={styles.contact_details}>
            <h2 className={styles.contact_details_email}>
              ugwuchiagoziestanley@gmail.com
            </h2>
            <h2 className={styles.contact_details_phone}>
              +(234) 906 270 9826
            </h2>
            <div className={styles.contact_details_line}></div>
            <div className={styles.contact_details_socials}>
              <LinkedinLogo size={22} color="#ABABAD" weight="fill" />
              <InstagramLogo color="#ABABAD" weight="fill" size={22} />
              <TwitterLogo size={22} color="#ABABAD" weight="fill" />
              <GithubLogo size={22} color="#ABABAD" weight="fill" />
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footer_text}>++~ 2021 UGWU CHIAGOZIE STANLEY</p>
      </footer>
    </div>
  );
}
