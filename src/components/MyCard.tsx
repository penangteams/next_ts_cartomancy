/** @format */
"use client";
import styles from "./MyCard.module.css";
import { diamonds, clubs, hearts, spades } from "./allcards";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useSearchStore } from "@/contexts/store";

export default function MyCard() {
  // const [list, setList] = useState<string[]>([]); // This should be your fetched list
  const search = useSearchStore((state) => state.searchTerm);

  const spadess = <>&spades;</>;
  const diamss = <>&diams;</>;
  const clubss = <>&clubs;</>;
  const heartss = <>&hearts;</>;
  const namediams = `${styles.diams}`;
  const nameclubs = `${styles.clubs}`;
  const namespades = `${styles.spades}`;
  const namehearts = `${styles.hearts}`;
  const allCards = diamonds.concat(clubs).concat(hearts).concat(spades);
  const initializeArrayWithValues = (n: number, val = 0) => Array(n).fill(val);
  const arr1 = initializeArrayWithValues(52, 1); //make it 52 length on the left side, right is just a value
  const filteredList = allCards.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="container min-h-screen my-7">
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
                    <div className={`${styles.card} ${el.sty} ${namehearts}`}>
                      <span className={styles.rank}>{el.uniq}</span>
                      <span className={styles.suit}>{heartss}</span>
                    </div>
                  )}

                  {el.name.includes("spade") && (
                    <div className={`${styles.card} ${el.sty} ${namespades}`}>
                      <span className={styles.rank}>{el.uniq}</span>
                      <span className={styles.suit}>{spadess}</span>
                    </div>
                  )}
                  {el.name.includes("diamond") && (
                    <div className={`${styles.card} ${el.sty} ${namediams}`}>
                      <span className={styles.rank}>{el.uniq}</span>
                      <span className={styles.suit}>{diamss}</span>
                    </div>
                  )}
                  {el.name.includes("clubs") && (
                    <div className={`${styles.card} ${el.sty} ${nameclubs}`}>
                      <span className={styles.rank}>{el.uniq}</span>
                      <span className={styles.suit}>{clubss}</span>
                    </div>
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
