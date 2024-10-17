/** @format */
import styles from "./MyCard.module.css";

let diamonds = [
  {
    id: "a",
    name: "ace diamond, one diamond , 1 diamond",
    uniq: "1",
    sty: `${styles.rank_a}`,
  },
  {
    id: "2",
    name: "two diamond , 2 diamond",
    uniq: "2",
    sty: `${styles.rank_2}`,
  },
  {
    id: "3",
    name: "three diamond , 3 diamond",
    uniq: "3",
    sty: `${styles.rank_3}`,
  },
  {
    id: "4",
    name: "four diamond , 4 diamond",
    uniq: "4",
    sty: `${styles.rank_4}`,
  },
  {
    id: "5",
    name: "five diamond , 5 diamond",
    uniq: "5",
    sty: `${styles.rank_5}`,
  },
  {
    id: "6",
    name: "six diamond , 6 diamond",
    uniq: "6",
    sty: `${styles.rank_6}`,
  },
  {
    id: "7",
    name: "seven diamond , 7 diamond",
    uniq: "7",
    sty: `${styles.rank_7}`,
  },
  {
    id: "8",
    name: "eight diamond , 8 diamond",
    uniq: "8",
    sty: `${styles.rank_8}`,
  },
  {
    id: "9",
    name: "nine diamond , 9 diamond",
    uniq: "9",
    sty: `${styles.rank_9}`,
  },
  {
    id: "10",
    name: "ten diamond , 10 diamond",
    uniq: "10",
    sty: `${styles.rank_10}`,
  },
  {
    id: "j",
    name: "jack diamond, j diamond",
    uniq: "J",
    sty: `${styles.rank_j}`,
  },
  {
    id: "q",
    name: "queen diamond, q diamond",
    uniq: "Q",
    sty: `${styles.rank_q}`,
  },
  {
    id: "k",
    name: "king diamond, k diamond",
    uniq: "K",
    sty: `${styles.rank_k}`,
  },
];

let clubs = [
  {
    id: "a",
    name: "ace clubs, one clubs , 1 clubs",
    uniq: "1",
    sty: `${styles.rank_a}`,
  },
  {
    id: "2",
    name: "two clubs , 2 clubs",
    uniq: "2",
    sty: `${styles.rank_2}`,
  },
  {
    id: "3",
    name: "three clubs , 3 clubs",
    uniq: "3",
    sty: `${styles.rank_3}`,
  },
  {
    id: "4",
    name: "four clubs , 4 clubs",
    uniq: "4",
    sty: `${styles.rank_4}`,
  },
  {
    id: "5",
    name: "five clubs , 5 clubs",
    uniq: "5",
    sty: `${styles.rank_5}`,
  },
  {
    id: "6",
    name: "six clubs , 6 clubs",
    uniq: "6",
    sty: `${styles.rank_6}`,
  },
  {
    id: "7",
    name: "seven clubs , 7 clubs",
    uniq: "7",
    sty: `${styles.rank_7}`,
  },
  {
    id: "8",
    name: "eight clubs , 8 clubs",
    uniq: "8",
    sty: `${styles.rank_8}`,
  },
  {
    id: "9",
    name: "nine clubs , 9 clubs",
    uniq: "9",
    sty: `${styles.rank_9}`,
  },
  {
    id: "10",
    name: "ten clubs , 10 clubs",
    uniq: "10",
    sty: `${styles.rank_10}`,
  },
  {
    id: "j",
    name: "jack clubs, j clubs",
    uniq: "J",
    sty: `${styles.rank_j}`,
  },
  {
    id: "q",
    name: "queen clubs, q clubs",
    uniq: "Q",
    sty: `${styles.rank_q}`,
  },
  {
    id: "k",
    name: "king clubs, k clubs",
    uniq: "K",
    sty: `${styles.rank_k}`,
  },
];

let spades = [
  {
    id: "a",
    name: "ace spades, one spades , 1 spades",
    uniq: "1",
    sty: `${styles.rank_a}`,
  },
  {
    id: "2",
    name: "two spades , 2 spades",
    uniq: "2",
    sty: `${styles.rank_2}`,
  },
  {
    id: "3",
    name: "three spades , 3 spades",
    uniq: "3",
    sty: `${styles.rank_3}`,
  },
  {
    id: "4",
    name: "four spades , 4 spades",
    uniq: "4",
    sty: `${styles.rank_4}`,
  },
  {
    id: "5",
    name: "five spades , 5 spades",
    uniq: "5",
    sty: `${styles.rank_5}`,
  },
  {
    id: "6",
    name: "six spades , 6 spades",
    uniq: "6",
    sty: `${styles.rank_6}`,
  },
  {
    id: "7",
    name: "seven spades , 7 spades",
    uniq: "7",
    sty: `${styles.rank_7}`,
  },
  {
    id: "8",
    name: "eight spades , 8 spades",
    uniq: "8",
    sty: `${styles.rank_8}`,
  },
  {
    id: "9",
    name: "nine spades , 9 spades",
    uniq: "9",
    sty: `${styles.rank_9}`,
  },
  {
    id: "10",
    name: "ten spades , 10 spades",
    uniq: "10",
    sty: `${styles.rank_10}`,
  },
  {
    id: "j",
    name: "jack spades, j spades",
    uniq: "J",
    sty: `${styles.rank_j}`,
  },
  {
    id: "q",
    name: "queen spades, q spades",
    uniq: "Q",
    sty: `${styles.rank_q}`,
  },
  {
    id: "k",
    name: "king spades, k spades",
    uniq: "K",
    sty: `${styles.rank_k}`,
  },
];

let hearts = [
  {
    id: "a",
    name: "ace hearts, one hearts , 1 hearts",
    uniq: "1",
    sty: `${styles.rank_a}`,
  },
  {
    id: "2",
    name: "two hearts , 2 hearts",
    uniq: "2",
    sty: `${styles.rank_2}`,
  },
  {
    id: "3",
    name: "three hearts , 3 hearts",
    uniq: "3",
    sty: `${styles.rank_3}`,
  },
  {
    id: "4",
    name: "four hearts , 4 hearts",
    uniq: "4",
    sty: `${styles.rank_4}`,
  },
  {
    id: "5",
    name: "five hearts , 5 hearts",
    uniq: "5",
    sty: `${styles.rank_5}`,
  },
  {
    id: "6",
    name: "six hearts , 6 hearts",
    uniq: "6",
    sty: `${styles.rank_6}`,
  },
  {
    id: "7",
    name: "seven hearts , 7 hearts",
    uniq: "7",
    sty: `${styles.rank_7}`,
  },
  {
    id: "8",
    name: "eight hearts , 8 hearts",
    uniq: "8",
    sty: `${styles.rank_8}`,
  },
  {
    id: "9",
    name: "nine hearts , 9 hearts",
    uniq: "9",
    sty: `${styles.rank_9}`,
  },
  {
    id: "10",
    name: "ten hearts , 10 hearts",
    uniq: "10",
    sty: `${styles.rank_10}`,
  },
  {
    id: "j",
    name: "jack hearts, j hearts",
    uniq: "J",
    sty: `${styles.rank_j}`,
  },
  {
    id: "q",
    name: "queen hearts, q hearts",
    uniq: "Q",
    sty: `${styles.rank_q}`,
  },
  {
    id: "k",
    name: "king hearts, k hearts",
    uniq: "K",
    sty: `${styles.rank_k}`,
  },
];

export { diamonds, clubs, spades, hearts };
