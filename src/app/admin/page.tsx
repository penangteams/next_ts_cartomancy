/** @format */
"use client";
import { usePackStore } from "@/contexts/store";
import { useEffect, useState } from "react";
import styles from "../../components/MyCard.module.css";
import { nanoid } from "nanoid";

const spadess = <>&spades;</>;
const diamss = <>&diams;</>;
const clubss = <>&clubs;</>;
const heartss = <>&hearts;</>;
const namediams = `${styles.diams}`;
const nameclubs = `${styles.clubs}`;
const namespades = `${styles.spades}`;
const namehearts = `${styles.hearts}`;

export default function AdminPage() {
  const mpacks = usePackStore((state) => state.myPacks);

  interface ITypes2 {
    id: string;
    name: string;
    uniq?: string;
    sty?: string;
  }

  const initializeArrayWithValues = (n: number, val = 0) => Array(n).fill(val);
  let arr: ITypes2[] = [];
  useEffect(() => {
    console.log("in admin::", mpacks);
  }, [mpacks]);

  return (
    <>
      <div className="my-7">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 auto-cols-max">
          {mpacks.length === 0 ? (
            <div>No data</div>
          ) : (
            mpacks.map((el, index) => {
              return (
                <div
                  className={`flex justify-center ${styles.playingCards} ${styles.fourColours} ${styles.rotateHand}`}
                  key={nanoid()}
                >
                  {el?.name?.includes("hearts") && (
                    <>
                      <div className={`${styles.card} ${el.sty} ${namehearts}`}>
                        <span className={styles.rank}>{el.uniq}</span>
                        <span className={styles.suit}>{heartss}</span>
                      </div>
                    </>
                  )}
                  {el?.name?.includes("spade") && (
                    <div className={`${styles.card} ${el.sty} ${namespades}`}>
                      <span className={styles.rank}>{el.uniq}</span>
                      <span className={styles.suit}>{spadess}</span>
                    </div>
                  )}
                  {el?.name?.includes("diamond") && (
                    <div className={`${styles.card} ${el.sty} ${namediams}`}>
                      <span className={styles.rank}>{el.uniq}</span>
                      <span className={styles.suit}>{diamss}</span>
                    </div>
                  )}
                  {el?.name?.includes("clubs") && (
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
