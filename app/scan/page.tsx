"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Html5QrcodeScanner } from "html5-qrcode";
export default function Check() {
  const [scanResult, setScanResult] = useState("");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 10,
      },
      false
    );

    scanner.render(success, error);
    function success(res: string) {
      // console.log(res);
      setScanResult(res);
    }

    function error(err: any) {
      // scanner.clear();
      console.log(err);
    }
  }, [setScanResult]);

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-[100svh] m-[3rem]">
      {scanResult ? (
        <div>
          <p className="flex gap-2 items-center">
            <span className="font-bold">Scan Success:</span>{" "}
            <Link
              href={`/employee/${scanResult}`}
              className="bg-[#3D4DC8] text-white px-3 py-2 underline"
            >
              View Employee
            </Link>
          </p>
        </div>
      ) : (
        <div className="p-6 bg-[#3D4DC8] rounded-lg">
          <div
            id="reader"
            className="p-4 bg-white font-bold border-none outline-none text-[#333333]"
          ></div>
        </div>
      )}
    </div>
  );
}
