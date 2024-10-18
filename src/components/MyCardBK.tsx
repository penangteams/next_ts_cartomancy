/** @format */
"use client";
import styles from "./MyCard.module.css";
import { diamonds, clubs, hearts, spades } from "./allcards";
import { nanoid } from "nanoid";
import { useSearchStore } from "@/contexts/store";
import { motion, useTime, useTransform } from "framer-motion";

export default function MyCard() {
  // const [list, setList] = useState<string[]>([]); // This should be your fetched list
  const search = useSearchStore((state) => state.searchTerm);
  const time = useTime();
  const rotate = useTransform(time, [0, 5000], [0, 360], {
    clamp: true,
  });
  const spadess = <>&spades;</>;
  const diamss = <>&diams;</>;
  const clubss = <>&clubs;</>;
  const heartss = <>&hearts;</>;
  const namediams = `${styles.diams}`;
  const nameclubs = `${styles.clubs}`;
  const namespades = `${styles.spades}`;
  const namehearts = `${styles.hearts}`;
  const allCards = diamonds.concat(clubs).concat(hearts).concat(spades);
  //const initializeArrayWithValues = (n: number, val = 0) => Array(n).fill(val);
  //const arr1 = initializeArrayWithValues(52, 1); //make it 52 length on the left side, right is just a value
  const filteredList = allCards.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="my-7">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 auto-cols-max">
          {filteredList.length === 0 ? (
            <div>No data</div>
          ) : (
            filteredList.map((el, index) => {
              return (
                <div
                  className={`flex justify-center ${styles.playingCards} ${styles.fourColours} ${styles.rotateHand}`}
                  key={nanoid()}
                >
                  {el.name.includes("hearts") && (
                    <motion.div
                      className={`${styles.card} ${el.sty} ${namehearts}`}
                      // animate={{
                      //   scale: [1, 2, 2, 1, 1],
                      //   rotate: [0, 0, 270, 270, 0],
                      //   borderRadius: ["20%", "20%", "50%", "50%", "20%", "0%"],
                      // }}
                      style={{ rotate }}
                    >
                      <span className={styles.rank}>{el.uniq}</span>
                      <span className={styles.suit}>{heartss}</span>
                    </motion.div>
                  )}

                  {el.name.includes("spade") && (
                    <motion.div
                      className={`${styles.card} ${el.sty} ${namespades}`}
                      // animate={{
                      //   scale: [1, 2, 2, 1, 1],
                      //   rotate: [0, 0, 180, 180, 0],
                      //   borderRadius: ["20%", "20%", "50%", "50%", "20%", "0%"],
                      // }}
                      style={{ rotate }}
                    >
                      <span className={styles.rank}>{el.uniq}</span>
                      <span className={styles.suit}>{spadess}</span>
                    </motion.div>
                  )}
                  {el.name.includes("diamond") && (
                    <motion.div
                      className={`${styles.card} ${el.sty} ${namediams}`}
                      // animate={{
                      //   scale: [1, 2, 2, 1, 1],
                      //   rotate: [0, 0, 270, 270, 0],
                      //   borderRadius: ["20%", "20%", "50%", "50%", "20%", "0%"],
                      // }}
                      style={{ rotate }}
                    >
                      <span className={styles.rank}>{el.uniq}</span>
                      <span className={styles.suit}>{diamss}</span>
                    </motion.div>
                  )}
                  {el.name.includes("clubs") && (
                    <motion.div
                      className={`${styles.card} ${el.sty} ${nameclubs}`}
                      // animate={{
                      //   scale: [1, 2, 2, 1, 1],
                      //   rotate: [0, 0, 180, 180, 0],
                      //   borderRadius: ["20%", "20%", "50%", "50%", "20%", "0%"],
                      // }}
                      style={{ rotate }}
                    >
                      <span className={styles.rank}>{el.uniq}</span>
                      <span className={styles.suit}>{clubss}</span>
                    </motion.div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
