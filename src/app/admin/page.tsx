/** @format */
"use client";
import { usePackStore } from "@/contexts/store";
import { useEffect, useState } from "react";
import styles from "../../components/MyCard.module.css";
import { nanoid } from "nanoid";
import { ITypes } from "@/app/types/MyCard.types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

  const initializeArrayWithValues = (n: number, val = 0) => Array(n).fill(val);
  let arr: ITypes[] = [];
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
      <div className="w-full sm:p-4">
        <h2 className="p-4">All links</h2>
        <div className="rounded-md sm:border">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Booked</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell>Agent Daniel has booked it</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV002</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>{" "}
                <TableCell>Agent Daniel has booked it</TableCell>
                <TableCell className="text-right">$50.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV003</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell>Agent Daniel has booked it</TableCell>
                <TableCell className="text-right">$66500000000.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
