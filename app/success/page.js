/** @format */

"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessPage() {
  const params = useSearchParams();
  const name = params.get("name");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className='flex items-center justify-center h-screen px-4'>
        <p className='p-6 bg-white rounded-2xl text-dark-gray'>
          <span className='font-bold'>Thank you, {name}!</span> Your message was
          sent successfully.🎉
        </p>
      </main>
    </Suspense>
  );
}

export default SuccessPage;
