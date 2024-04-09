import React from 'react'
import Image from 'next/image'

const HomePage = () => {
  return (
    <main className="flex justify-center items-center">
          <div className="mx-[26px] my-[155px] border border-black-1 rounded-[20px] bg-white-1 min-w-[327] min-h-[501] max-w-[384px] max-h-[218.5]">
            <div className="m-[24px]">
              <div>
                <Image 
                  src="/illustration-article.svg"
                  alt="Component Image"
                  width={279}
                  height={200}
                  className="rounded-[10px] w-full"
                />
              </div>
                <p className="rounded-[4px] font-extrabold bg-yellow-1 px-[12px] py-[4px] w-fit mt-[24px]">Learning</p>
                <p className="my-[12px] text-[12px]">Published 21 Dec 2023</p>
                <h2 className="font-bold mb-[12px] text-[20px] cursor-pointer hover:text-yellow-1">HTML & CSS foundations</h2>
                <p className="text-[14px]">These Languages are the backbone of every website, defining structure, content and presentation.</p>
                <div className="flex items-center gap-3 mt-[24px]">
                  <Image 
                    src="/image-avatar.webp"
                    alt="Component Image"
                    width={32}
                    height={32}
                    style={{
                      objectFit: 'contain'
                    }}
                    className=""
                  />
                  <b>David Agbaniyaka</b>
                </div>
            </div>
          </div>
        </main>
  )
}

export default HomePage