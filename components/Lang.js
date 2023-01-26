import React from 'react'

function Lang({
  title,
  html,
  css,
  java,
  boostrap,
  es6,
  react,
  context,
  redux,
}) {
  return (
    <>
      <div className='bg-[#E4EAFC] rounded-2xl p-6 lg:p-8'>
        <h2 className='text-vendiitPrimary text-[18px] leading-126 font-semibold font-clashDisplay pb-8'>
          {title}
        </h2>
        <div className='flex items-center justify-between gap-8'>
          <div>
            <div className='flex items-center gap-4 pb-4'>
              <p>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.1359 0.24999C4.65243 0.175928 0.175867 4.65249 0.249929 10.1359C0.323054 15.3948 4.60509 19.6769 9.86399 19.75C15.3484 19.825 19.824 15.3484 19.749 9.86499C19.6768 4.60515 15.3948 0.323115 10.1359 0.24999ZM9.34884 9.27202L11.7652 6.5064C11.8962 6.35659 12.0812 6.26492 12.2797 6.25156C12.4782 6.2382 12.6739 6.30424 12.8237 6.43515C12.9735 6.56606 13.0652 6.75111 13.0785 6.94961C13.0919 7.14811 13.0258 7.34378 12.8949 7.49358L10.4785 10.2592C10.4137 10.3334 10.3349 10.3941 10.2466 10.4378C10.1584 10.4815 10.0623 10.5074 9.96406 10.514C9.86578 10.5207 9.76715 10.5079 9.67381 10.4764C9.58048 10.4449 9.49426 10.3953 9.42009 10.3305C9.34591 10.2656 9.28523 10.1868 9.2415 10.0986C9.19778 10.0103 9.17187 9.91428 9.16525 9.816C9.15864 9.71771 9.17144 9.61909 9.20294 9.52575C9.23444 9.43242 9.28402 9.3462 9.34884 9.27202ZM7.52727 13.5306C7.38664 13.6712 7.19594 13.7501 6.99712 13.7501C6.79829 13.7501 6.6076 13.6712 6.46696 13.5306L4.2193 11.2806C4.14968 11.2109 4.09447 11.1282 4.05681 11.0372C4.01916 10.9462 3.9998 10.8486 3.99984 10.7501C3.99989 10.6516 4.01933 10.5541 4.05707 10.4631C4.0948 10.3721 4.15009 10.2895 4.21977 10.2198C4.28946 10.1502 4.37217 10.095 4.46319 10.0573C4.55421 10.0197 4.65176 10.0003 4.75026 10.0004C4.84876 10.0004 4.94629 10.0199 5.03728 10.0576C5.12827 10.0953 5.21093 10.1506 5.28055 10.2203L7.53055 12.4703C7.67067 12.6114 7.74903 12.8023 7.74841 13.0011C7.7478 13.2 7.66826 13.3904 7.52727 13.5306ZM15.8148 7.49358L10.5704 13.4936C10.5028 13.571 10.4201 13.6337 10.3273 13.6778C10.2345 13.7219 10.1336 13.7465 10.0309 13.75H10.0056C9.907 13.75 9.80941 13.7306 9.71836 13.6929C9.62732 13.6552 9.54459 13.5999 9.47493 13.5301L7.22774 11.2801C7.08714 11.1394 7.00819 10.9486 7.00828 10.7497C7.00837 10.5507 7.08748 10.36 7.22821 10.2194C7.36894 10.0788 7.55976 9.99982 7.7587 9.9999C7.95763 9.99999 8.14839 10.0791 8.28899 10.2198L9.68587 11.6181C9.72218 11.6544 9.76557 11.6829 9.81334 11.7018C9.86111 11.7206 9.91225 11.7295 9.96358 11.7278C10.0149 11.7261 10.0654 11.7138 10.1118 11.6918C10.1582 11.6698 10.1996 11.6385 10.2334 11.5998L14.6865 6.5064C14.8174 6.35659 15.0025 6.26492 15.201 6.25156C15.3994 6.2382 15.5951 6.30424 15.7449 6.43515C15.8947 6.56606 15.9864 6.75111 15.9998 6.94961C16.0131 7.14811 15.9471 7.34378 15.8162 7.49358H15.8148Z'
                    fill='#184CD1'
                  />
                </svg>
              </p>
              <p className='font-sora font-light text-base leading-[24px] text-black '>
                {html}
              </p>
            </div>
            <div className='flex items-center gap-4 pb-4'>
              <p>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.1359 0.24999C4.65243 0.175928 0.175867 4.65249 0.249929 10.1359C0.323054 15.3948 4.60509 19.6769 9.86399 19.75C15.3484 19.825 19.824 15.3484 19.749 9.86499C19.6768 4.60515 15.3948 0.323115 10.1359 0.24999ZM9.34884 9.27202L11.7652 6.5064C11.8962 6.35659 12.0812 6.26492 12.2797 6.25156C12.4782 6.2382 12.6739 6.30424 12.8237 6.43515C12.9735 6.56606 13.0652 6.75111 13.0785 6.94961C13.0919 7.14811 13.0258 7.34378 12.8949 7.49358L10.4785 10.2592C10.4137 10.3334 10.3349 10.3941 10.2466 10.4378C10.1584 10.4815 10.0623 10.5074 9.96406 10.514C9.86578 10.5207 9.76715 10.5079 9.67381 10.4764C9.58048 10.4449 9.49426 10.3953 9.42009 10.3305C9.34591 10.2656 9.28523 10.1868 9.2415 10.0986C9.19778 10.0103 9.17187 9.91428 9.16525 9.816C9.15864 9.71771 9.17144 9.61909 9.20294 9.52575C9.23444 9.43242 9.28402 9.3462 9.34884 9.27202ZM7.52727 13.5306C7.38664 13.6712 7.19594 13.7501 6.99712 13.7501C6.79829 13.7501 6.6076 13.6712 6.46696 13.5306L4.2193 11.2806C4.14968 11.2109 4.09447 11.1282 4.05681 11.0372C4.01916 10.9462 3.9998 10.8486 3.99984 10.7501C3.99989 10.6516 4.01933 10.5541 4.05707 10.4631C4.0948 10.3721 4.15009 10.2895 4.21977 10.2198C4.28946 10.1502 4.37217 10.095 4.46319 10.0573C4.55421 10.0197 4.65176 10.0003 4.75026 10.0004C4.84876 10.0004 4.94629 10.0199 5.03728 10.0576C5.12827 10.0953 5.21093 10.1506 5.28055 10.2203L7.53055 12.4703C7.67067 12.6114 7.74903 12.8023 7.74841 13.0011C7.7478 13.2 7.66826 13.3904 7.52727 13.5306ZM15.8148 7.49358L10.5704 13.4936C10.5028 13.571 10.4201 13.6337 10.3273 13.6778C10.2345 13.7219 10.1336 13.7465 10.0309 13.75H10.0056C9.907 13.75 9.80941 13.7306 9.71836 13.6929C9.62732 13.6552 9.54459 13.5999 9.47493 13.5301L7.22774 11.2801C7.08714 11.1394 7.00819 10.9486 7.00828 10.7497C7.00837 10.5507 7.08748 10.36 7.22821 10.2194C7.36894 10.0788 7.55976 9.99982 7.7587 9.9999C7.95763 9.99999 8.14839 10.0791 8.28899 10.2198L9.68587 11.6181C9.72218 11.6544 9.76557 11.6829 9.81334 11.7018C9.86111 11.7206 9.91225 11.7295 9.96358 11.7278C10.0149 11.7261 10.0654 11.7138 10.1118 11.6918C10.1582 11.6698 10.1996 11.6385 10.2334 11.5998L14.6865 6.5064C14.8174 6.35659 15.0025 6.26492 15.201 6.25156C15.3994 6.2382 15.5951 6.30424 15.7449 6.43515C15.8947 6.56606 15.9864 6.75111 15.9998 6.94961C16.0131 7.14811 15.9471 7.34378 15.8162 7.49358H15.8148Z'
                    fill='#184CD1'
                  />
                </svg>
              </p>
              <p className='font-sora font-light text-base leading-[24px] text-black'>
                {css}
              </p>
            </div>
            <div className='flex items-center gap-4 pb-4'>
              <p>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.1359 0.24999C4.65243 0.175928 0.175867 4.65249 0.249929 10.1359C0.323054 15.3948 4.60509 19.6769 9.86399 19.75C15.3484 19.825 19.824 15.3484 19.749 9.86499C19.6768 4.60515 15.3948 0.323115 10.1359 0.24999ZM9.34884 9.27202L11.7652 6.5064C11.8962 6.35659 12.0812 6.26492 12.2797 6.25156C12.4782 6.2382 12.6739 6.30424 12.8237 6.43515C12.9735 6.56606 13.0652 6.75111 13.0785 6.94961C13.0919 7.14811 13.0258 7.34378 12.8949 7.49358L10.4785 10.2592C10.4137 10.3334 10.3349 10.3941 10.2466 10.4378C10.1584 10.4815 10.0623 10.5074 9.96406 10.514C9.86578 10.5207 9.76715 10.5079 9.67381 10.4764C9.58048 10.4449 9.49426 10.3953 9.42009 10.3305C9.34591 10.2656 9.28523 10.1868 9.2415 10.0986C9.19778 10.0103 9.17187 9.91428 9.16525 9.816C9.15864 9.71771 9.17144 9.61909 9.20294 9.52575C9.23444 9.43242 9.28402 9.3462 9.34884 9.27202ZM7.52727 13.5306C7.38664 13.6712 7.19594 13.7501 6.99712 13.7501C6.79829 13.7501 6.6076 13.6712 6.46696 13.5306L4.2193 11.2806C4.14968 11.2109 4.09447 11.1282 4.05681 11.0372C4.01916 10.9462 3.9998 10.8486 3.99984 10.7501C3.99989 10.6516 4.01933 10.5541 4.05707 10.4631C4.0948 10.3721 4.15009 10.2895 4.21977 10.2198C4.28946 10.1502 4.37217 10.095 4.46319 10.0573C4.55421 10.0197 4.65176 10.0003 4.75026 10.0004C4.84876 10.0004 4.94629 10.0199 5.03728 10.0576C5.12827 10.0953 5.21093 10.1506 5.28055 10.2203L7.53055 12.4703C7.67067 12.6114 7.74903 12.8023 7.74841 13.0011C7.7478 13.2 7.66826 13.3904 7.52727 13.5306ZM15.8148 7.49358L10.5704 13.4936C10.5028 13.571 10.4201 13.6337 10.3273 13.6778C10.2345 13.7219 10.1336 13.7465 10.0309 13.75H10.0056C9.907 13.75 9.80941 13.7306 9.71836 13.6929C9.62732 13.6552 9.54459 13.5999 9.47493 13.5301L7.22774 11.2801C7.08714 11.1394 7.00819 10.9486 7.00828 10.7497C7.00837 10.5507 7.08748 10.36 7.22821 10.2194C7.36894 10.0788 7.55976 9.99982 7.7587 9.9999C7.95763 9.99999 8.14839 10.0791 8.28899 10.2198L9.68587 11.6181C9.72218 11.6544 9.76557 11.6829 9.81334 11.7018C9.86111 11.7206 9.91225 11.7295 9.96358 11.7278C10.0149 11.7261 10.0654 11.7138 10.1118 11.6918C10.1582 11.6698 10.1996 11.6385 10.2334 11.5998L14.6865 6.5064C14.8174 6.35659 15.0025 6.26492 15.201 6.25156C15.3994 6.2382 15.5951 6.30424 15.7449 6.43515C15.8947 6.56606 15.9864 6.75111 15.9998 6.94961C16.0131 7.14811 15.9471 7.34378 15.8162 7.49358H15.8148Z'
                    fill='#184CD1'
                  />
                </svg>
              </p>
              <p className='font-sora font-light text-base leading-[24px] text-black'>
                {java}
              </p>
            </div>
            <div className='flex items-center gap-4'>
              <p>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.1359 0.24999C4.65243 0.175928 0.175867 4.65249 0.249929 10.1359C0.323054 15.3948 4.60509 19.6769 9.86399 19.75C15.3484 19.825 19.824 15.3484 19.749 9.86499C19.6768 4.60515 15.3948 0.323115 10.1359 0.24999ZM9.34884 9.27202L11.7652 6.5064C11.8962 6.35659 12.0812 6.26492 12.2797 6.25156C12.4782 6.2382 12.6739 6.30424 12.8237 6.43515C12.9735 6.56606 13.0652 6.75111 13.0785 6.94961C13.0919 7.14811 13.0258 7.34378 12.8949 7.49358L10.4785 10.2592C10.4137 10.3334 10.3349 10.3941 10.2466 10.4378C10.1584 10.4815 10.0623 10.5074 9.96406 10.514C9.86578 10.5207 9.76715 10.5079 9.67381 10.4764C9.58048 10.4449 9.49426 10.3953 9.42009 10.3305C9.34591 10.2656 9.28523 10.1868 9.2415 10.0986C9.19778 10.0103 9.17187 9.91428 9.16525 9.816C9.15864 9.71771 9.17144 9.61909 9.20294 9.52575C9.23444 9.43242 9.28402 9.3462 9.34884 9.27202ZM7.52727 13.5306C7.38664 13.6712 7.19594 13.7501 6.99712 13.7501C6.79829 13.7501 6.6076 13.6712 6.46696 13.5306L4.2193 11.2806C4.14968 11.2109 4.09447 11.1282 4.05681 11.0372C4.01916 10.9462 3.9998 10.8486 3.99984 10.7501C3.99989 10.6516 4.01933 10.5541 4.05707 10.4631C4.0948 10.3721 4.15009 10.2895 4.21977 10.2198C4.28946 10.1502 4.37217 10.095 4.46319 10.0573C4.55421 10.0197 4.65176 10.0003 4.75026 10.0004C4.84876 10.0004 4.94629 10.0199 5.03728 10.0576C5.12827 10.0953 5.21093 10.1506 5.28055 10.2203L7.53055 12.4703C7.67067 12.6114 7.74903 12.8023 7.74841 13.0011C7.7478 13.2 7.66826 13.3904 7.52727 13.5306ZM15.8148 7.49358L10.5704 13.4936C10.5028 13.571 10.4201 13.6337 10.3273 13.6778C10.2345 13.7219 10.1336 13.7465 10.0309 13.75H10.0056C9.907 13.75 9.80941 13.7306 9.71836 13.6929C9.62732 13.6552 9.54459 13.5999 9.47493 13.5301L7.22774 11.2801C7.08714 11.1394 7.00819 10.9486 7.00828 10.7497C7.00837 10.5507 7.08748 10.36 7.22821 10.2194C7.36894 10.0788 7.55976 9.99982 7.7587 9.9999C7.95763 9.99999 8.14839 10.0791 8.28899 10.2198L9.68587 11.6181C9.72218 11.6544 9.76557 11.6829 9.81334 11.7018C9.86111 11.7206 9.91225 11.7295 9.96358 11.7278C10.0149 11.7261 10.0654 11.7138 10.1118 11.6918C10.1582 11.6698 10.1996 11.6385 10.2334 11.5998L14.6865 6.5064C14.8174 6.35659 15.0025 6.26492 15.201 6.25156C15.3994 6.2382 15.5951 6.30424 15.7449 6.43515C15.8947 6.56606 15.9864 6.75111 15.9998 6.94961C16.0131 7.14811 15.9471 7.34378 15.8162 7.49358H15.8148Z'
                    fill='#184CD1'
                  />
                </svg>
              </p>
              <p className='font-sora font-light text-base leading-[24px] text-black '>
                {boostrap}
              </p>
            </div>
          </div>
          <div>
            <div className='flex items-center gap-4 pb-4'>
              <p>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.1359 0.24999C4.65243 0.175928 0.175867 4.65249 0.249929 10.1359C0.323054 15.3948 4.60509 19.6769 9.86399 19.75C15.3484 19.825 19.824 15.3484 19.749 9.86499C19.6768 4.60515 15.3948 0.323115 10.1359 0.24999ZM9.34884 9.27202L11.7652 6.5064C11.8962 6.35659 12.0812 6.26492 12.2797 6.25156C12.4782 6.2382 12.6739 6.30424 12.8237 6.43515C12.9735 6.56606 13.0652 6.75111 13.0785 6.94961C13.0919 7.14811 13.0258 7.34378 12.8949 7.49358L10.4785 10.2592C10.4137 10.3334 10.3349 10.3941 10.2466 10.4378C10.1584 10.4815 10.0623 10.5074 9.96406 10.514C9.86578 10.5207 9.76715 10.5079 9.67381 10.4764C9.58048 10.4449 9.49426 10.3953 9.42009 10.3305C9.34591 10.2656 9.28523 10.1868 9.2415 10.0986C9.19778 10.0103 9.17187 9.91428 9.16525 9.816C9.15864 9.71771 9.17144 9.61909 9.20294 9.52575C9.23444 9.43242 9.28402 9.3462 9.34884 9.27202ZM7.52727 13.5306C7.38664 13.6712 7.19594 13.7501 6.99712 13.7501C6.79829 13.7501 6.6076 13.6712 6.46696 13.5306L4.2193 11.2806C4.14968 11.2109 4.09447 11.1282 4.05681 11.0372C4.01916 10.9462 3.9998 10.8486 3.99984 10.7501C3.99989 10.6516 4.01933 10.5541 4.05707 10.4631C4.0948 10.3721 4.15009 10.2895 4.21977 10.2198C4.28946 10.1502 4.37217 10.095 4.46319 10.0573C4.55421 10.0197 4.65176 10.0003 4.75026 10.0004C4.84876 10.0004 4.94629 10.0199 5.03728 10.0576C5.12827 10.0953 5.21093 10.1506 5.28055 10.2203L7.53055 12.4703C7.67067 12.6114 7.74903 12.8023 7.74841 13.0011C7.7478 13.2 7.66826 13.3904 7.52727 13.5306ZM15.8148 7.49358L10.5704 13.4936C10.5028 13.571 10.4201 13.6337 10.3273 13.6778C10.2345 13.7219 10.1336 13.7465 10.0309 13.75H10.0056C9.907 13.75 9.80941 13.7306 9.71836 13.6929C9.62732 13.6552 9.54459 13.5999 9.47493 13.5301L7.22774 11.2801C7.08714 11.1394 7.00819 10.9486 7.00828 10.7497C7.00837 10.5507 7.08748 10.36 7.22821 10.2194C7.36894 10.0788 7.55976 9.99982 7.7587 9.9999C7.95763 9.99999 8.14839 10.0791 8.28899 10.2198L9.68587 11.6181C9.72218 11.6544 9.76557 11.6829 9.81334 11.7018C9.86111 11.7206 9.91225 11.7295 9.96358 11.7278C10.0149 11.7261 10.0654 11.7138 10.1118 11.6918C10.1582 11.6698 10.1996 11.6385 10.2334 11.5998L14.6865 6.5064C14.8174 6.35659 15.0025 6.26492 15.201 6.25156C15.3994 6.2382 15.5951 6.30424 15.7449 6.43515C15.8947 6.56606 15.9864 6.75111 15.9998 6.94961C16.0131 7.14811 15.9471 7.34378 15.8162 7.49358H15.8148Z'
                    fill='#184CD1'
                  />
                </svg>
              </p>
              <p className='font-sora font-light text-base leading-[24px] text-black '>
                {es6}
              </p>
            </div>
            <div className='flex items-center gap-4 pb-4'>
              <p>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.1359 0.24999C4.65243 0.175928 0.175867 4.65249 0.249929 10.1359C0.323054 15.3948 4.60509 19.6769 9.86399 19.75C15.3484 19.825 19.824 15.3484 19.749 9.86499C19.6768 4.60515 15.3948 0.323115 10.1359 0.24999ZM9.34884 9.27202L11.7652 6.5064C11.8962 6.35659 12.0812 6.26492 12.2797 6.25156C12.4782 6.2382 12.6739 6.30424 12.8237 6.43515C12.9735 6.56606 13.0652 6.75111 13.0785 6.94961C13.0919 7.14811 13.0258 7.34378 12.8949 7.49358L10.4785 10.2592C10.4137 10.3334 10.3349 10.3941 10.2466 10.4378C10.1584 10.4815 10.0623 10.5074 9.96406 10.514C9.86578 10.5207 9.76715 10.5079 9.67381 10.4764C9.58048 10.4449 9.49426 10.3953 9.42009 10.3305C9.34591 10.2656 9.28523 10.1868 9.2415 10.0986C9.19778 10.0103 9.17187 9.91428 9.16525 9.816C9.15864 9.71771 9.17144 9.61909 9.20294 9.52575C9.23444 9.43242 9.28402 9.3462 9.34884 9.27202ZM7.52727 13.5306C7.38664 13.6712 7.19594 13.7501 6.99712 13.7501C6.79829 13.7501 6.6076 13.6712 6.46696 13.5306L4.2193 11.2806C4.14968 11.2109 4.09447 11.1282 4.05681 11.0372C4.01916 10.9462 3.9998 10.8486 3.99984 10.7501C3.99989 10.6516 4.01933 10.5541 4.05707 10.4631C4.0948 10.3721 4.15009 10.2895 4.21977 10.2198C4.28946 10.1502 4.37217 10.095 4.46319 10.0573C4.55421 10.0197 4.65176 10.0003 4.75026 10.0004C4.84876 10.0004 4.94629 10.0199 5.03728 10.0576C5.12827 10.0953 5.21093 10.1506 5.28055 10.2203L7.53055 12.4703C7.67067 12.6114 7.74903 12.8023 7.74841 13.0011C7.7478 13.2 7.66826 13.3904 7.52727 13.5306ZM15.8148 7.49358L10.5704 13.4936C10.5028 13.571 10.4201 13.6337 10.3273 13.6778C10.2345 13.7219 10.1336 13.7465 10.0309 13.75H10.0056C9.907 13.75 9.80941 13.7306 9.71836 13.6929C9.62732 13.6552 9.54459 13.5999 9.47493 13.5301L7.22774 11.2801C7.08714 11.1394 7.00819 10.9486 7.00828 10.7497C7.00837 10.5507 7.08748 10.36 7.22821 10.2194C7.36894 10.0788 7.55976 9.99982 7.7587 9.9999C7.95763 9.99999 8.14839 10.0791 8.28899 10.2198L9.68587 11.6181C9.72218 11.6544 9.76557 11.6829 9.81334 11.7018C9.86111 11.7206 9.91225 11.7295 9.96358 11.7278C10.0149 11.7261 10.0654 11.7138 10.1118 11.6918C10.1582 11.6698 10.1996 11.6385 10.2334 11.5998L14.6865 6.5064C14.8174 6.35659 15.0025 6.26492 15.201 6.25156C15.3994 6.2382 15.5951 6.30424 15.7449 6.43515C15.8947 6.56606 15.9864 6.75111 15.9998 6.94961C16.0131 7.14811 15.9471 7.34378 15.8162 7.49358H15.8148Z'
                    fill='#184CD1'
                  />
                </svg>
              </p>
              <p className='font-sora font-light text-base leading-[24px] text-black '>
                {react}
              </p>
            </div>
            <div className='flex items-center gap-4 pb-4'>
              <p>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.1359 0.24999C4.65243 0.175928 0.175867 4.65249 0.249929 10.1359C0.323054 15.3948 4.60509 19.6769 9.86399 19.75C15.3484 19.825 19.824 15.3484 19.749 9.86499C19.6768 4.60515 15.3948 0.323115 10.1359 0.24999ZM9.34884 9.27202L11.7652 6.5064C11.8962 6.35659 12.0812 6.26492 12.2797 6.25156C12.4782 6.2382 12.6739 6.30424 12.8237 6.43515C12.9735 6.56606 13.0652 6.75111 13.0785 6.94961C13.0919 7.14811 13.0258 7.34378 12.8949 7.49358L10.4785 10.2592C10.4137 10.3334 10.3349 10.3941 10.2466 10.4378C10.1584 10.4815 10.0623 10.5074 9.96406 10.514C9.86578 10.5207 9.76715 10.5079 9.67381 10.4764C9.58048 10.4449 9.49426 10.3953 9.42009 10.3305C9.34591 10.2656 9.28523 10.1868 9.2415 10.0986C9.19778 10.0103 9.17187 9.91428 9.16525 9.816C9.15864 9.71771 9.17144 9.61909 9.20294 9.52575C9.23444 9.43242 9.28402 9.3462 9.34884 9.27202ZM7.52727 13.5306C7.38664 13.6712 7.19594 13.7501 6.99712 13.7501C6.79829 13.7501 6.6076 13.6712 6.46696 13.5306L4.2193 11.2806C4.14968 11.2109 4.09447 11.1282 4.05681 11.0372C4.01916 10.9462 3.9998 10.8486 3.99984 10.7501C3.99989 10.6516 4.01933 10.5541 4.05707 10.4631C4.0948 10.3721 4.15009 10.2895 4.21977 10.2198C4.28946 10.1502 4.37217 10.095 4.46319 10.0573C4.55421 10.0197 4.65176 10.0003 4.75026 10.0004C4.84876 10.0004 4.94629 10.0199 5.03728 10.0576C5.12827 10.0953 5.21093 10.1506 5.28055 10.2203L7.53055 12.4703C7.67067 12.6114 7.74903 12.8023 7.74841 13.0011C7.7478 13.2 7.66826 13.3904 7.52727 13.5306ZM15.8148 7.49358L10.5704 13.4936C10.5028 13.571 10.4201 13.6337 10.3273 13.6778C10.2345 13.7219 10.1336 13.7465 10.0309 13.75H10.0056C9.907 13.75 9.80941 13.7306 9.71836 13.6929C9.62732 13.6552 9.54459 13.5999 9.47493 13.5301L7.22774 11.2801C7.08714 11.1394 7.00819 10.9486 7.00828 10.7497C7.00837 10.5507 7.08748 10.36 7.22821 10.2194C7.36894 10.0788 7.55976 9.99982 7.7587 9.9999C7.95763 9.99999 8.14839 10.0791 8.28899 10.2198L9.68587 11.6181C9.72218 11.6544 9.76557 11.6829 9.81334 11.7018C9.86111 11.7206 9.91225 11.7295 9.96358 11.7278C10.0149 11.7261 10.0654 11.7138 10.1118 11.6918C10.1582 11.6698 10.1996 11.6385 10.2334 11.5998L14.6865 6.5064C14.8174 6.35659 15.0025 6.26492 15.201 6.25156C15.3994 6.2382 15.5951 6.30424 15.7449 6.43515C15.8947 6.56606 15.9864 6.75111 15.9998 6.94961C16.0131 7.14811 15.9471 7.34378 15.8162 7.49358H15.8148Z'
                    fill='#184CD1'
                  />
                </svg>
              </p>
              <p className='font-sora font-light text-base leading-[24px] text-black '>
                {context}
              </p>
            </div>
            <div className='flex items-center gap-4 pb-4'>
              <p>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.1359 0.24999C4.65243 0.175928 0.175867 4.65249 0.249929 10.1359C0.323054 15.3948 4.60509 19.6769 9.86399 19.75C15.3484 19.825 19.824 15.3484 19.749 9.86499C19.6768 4.60515 15.3948 0.323115 10.1359 0.24999ZM9.34884 9.27202L11.7652 6.5064C11.8962 6.35659 12.0812 6.26492 12.2797 6.25156C12.4782 6.2382 12.6739 6.30424 12.8237 6.43515C12.9735 6.56606 13.0652 6.75111 13.0785 6.94961C13.0919 7.14811 13.0258 7.34378 12.8949 7.49358L10.4785 10.2592C10.4137 10.3334 10.3349 10.3941 10.2466 10.4378C10.1584 10.4815 10.0623 10.5074 9.96406 10.514C9.86578 10.5207 9.76715 10.5079 9.67381 10.4764C9.58048 10.4449 9.49426 10.3953 9.42009 10.3305C9.34591 10.2656 9.28523 10.1868 9.2415 10.0986C9.19778 10.0103 9.17187 9.91428 9.16525 9.816C9.15864 9.71771 9.17144 9.61909 9.20294 9.52575C9.23444 9.43242 9.28402 9.3462 9.34884 9.27202ZM7.52727 13.5306C7.38664 13.6712 7.19594 13.7501 6.99712 13.7501C6.79829 13.7501 6.6076 13.6712 6.46696 13.5306L4.2193 11.2806C4.14968 11.2109 4.09447 11.1282 4.05681 11.0372C4.01916 10.9462 3.9998 10.8486 3.99984 10.7501C3.99989 10.6516 4.01933 10.5541 4.05707 10.4631C4.0948 10.3721 4.15009 10.2895 4.21977 10.2198C4.28946 10.1502 4.37217 10.095 4.46319 10.0573C4.55421 10.0197 4.65176 10.0003 4.75026 10.0004C4.84876 10.0004 4.94629 10.0199 5.03728 10.0576C5.12827 10.0953 5.21093 10.1506 5.28055 10.2203L7.53055 12.4703C7.67067 12.6114 7.74903 12.8023 7.74841 13.0011C7.7478 13.2 7.66826 13.3904 7.52727 13.5306ZM15.8148 7.49358L10.5704 13.4936C10.5028 13.571 10.4201 13.6337 10.3273 13.6778C10.2345 13.7219 10.1336 13.7465 10.0309 13.75H10.0056C9.907 13.75 9.80941 13.7306 9.71836 13.6929C9.62732 13.6552 9.54459 13.5999 9.47493 13.5301L7.22774 11.2801C7.08714 11.1394 7.00819 10.9486 7.00828 10.7497C7.00837 10.5507 7.08748 10.36 7.22821 10.2194C7.36894 10.0788 7.55976 9.99982 7.7587 9.9999C7.95763 9.99999 8.14839 10.0791 8.28899 10.2198L9.68587 11.6181C9.72218 11.6544 9.76557 11.6829 9.81334 11.7018C9.86111 11.7206 9.91225 11.7295 9.96358 11.7278C10.0149 11.7261 10.0654 11.7138 10.1118 11.6918C10.1582 11.6698 10.1996 11.6385 10.2334 11.5998L14.6865 6.5064C14.8174 6.35659 15.0025 6.26492 15.201 6.25156C15.3994 6.2382 15.5951 6.30424 15.7449 6.43515C15.8947 6.56606 15.9864 6.75111 15.9998 6.94961C16.0131 7.14811 15.9471 7.34378 15.8162 7.49358H15.8148Z'
                    fill='#184CD1'
                  />
                </svg>
              </p>
              <p className='font-sora font-light text-base leading-[24px] text-black '>
                {redux}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Lang
