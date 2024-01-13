import Link from 'next/link';
import Image from 'next/image'; // Importing the Image component from Next.js
import "./style.css";

const Logo = () => {
  return (
    <>
      <div className='logo'>
        <svg className='svg-logo' width="120" height="76.6" viewBox="0 0 188 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M154.979 83.112C165.398 93.3146 175.48 103.21 185.523 113.145C187.186 114.791 189.372 116.732 186.861 119.055C184.491 121.249 182.471 119.15 180.813 117.529C168.258 105.257 155.758 92.9189 141.791 82.2244C134.997 77.0225 127.984 72.1071 121.06 67.0754C112.637 60.9532 112.297 56.9072 120.132 49.8233C128.663 42.1092 135.181 32.9327 140.734 22.9646C142.215 20.3054 143.044 17.5525 143.037 14.5843C132.313 12.0115 128.313 14.2048 124.717 23.3911C120.652 33.7739 115.465 43.6157 109.024 52.763C107.193 55.3638 105.132 57.7791 104.26 61.0384C103.446 64.0822 100.548 64.9947 97.794 65.5836C96.4134 65.8789 95.2937 64.9874 94.8008 63.678C93.7548 60.8994 95.846 59.2713 97.3403 57.5589C105.566 48.1333 112.207 37.7131 117.21 26.2476C118.027 24.375 119.487 22.737 117.611 20.4023C115.854 18.2151 114.103 17.8296 111.504 18.3479C106.658 19.3147 101.909 20.4492 97.672 23.1024C96.0007 24.1489 94.3031 25.5517 92.6855 23.3239C91.3759 21.5204 92.1035 19.6702 93.2997 17.9911C94.6283 16.1261 96.6445 15.2934 98.6648 14.6563C112.794 10.2006 127.334 7.76586 142.052 6.58504C148.438 6.07272 150.861 9.04964 150.823 15.543C150.792 20.7167 148.373 25.0052 145.887 29.2493C139.696 39.8185 132.175 49.3526 122.397 58.0204C133.02 67.1017 144.799 73.7364 154.979 83.112Z" fill="black" />
          <path d="M47.7402 12.0791C54.4191 9.87892 59.9323 6.79214 64.3964 1.90985C65.8977 0.26784 67.9837 -0.970603 69.9638 1.04608C71.9536 3.07269 70.5023 4.87202 68.9875 6.57861C52.665 24.9669 41.4823 46.6577 29.9479 68.0768C24.3821 78.4123 19.6577 89.2039 14.6224 99.8222C13.0897 103.054 11.2228 106.071 11.4497 110.054C11.6242 113.117 9.00824 115.379 7.01578 117.602C5.6975 119.073 4.09955 120.457 2.01716 119.408C-0.360125 118.21 -0.335739 116.006 0.559063 113.847C4.56206 104.187 8.53523 94.5138 12.6733 84.9118C22.1628 62.8922 33.188 41.7107 47.2109 22.1851C47.8015 21.3628 48.1619 20.3748 48.8295 19.0746C42.6553 19.7975 37.0098 20.5976 31.3367 21.0542C29.066 21.2369 25.9602 21.1543 25.6823 18.2016C25.3442 14.6088 28.7932 15.5388 30.8767 15.1446C36.3248 14.1137 41.7977 13.2136 47.7402 12.0791Z" fill="black"/>
          <path d="M82.5137 57.9707C85.561 57.837 88.0972 58.2961 88.3906 61.2351C88.673 64.0642 86.1898 65.8002 83.937 65.8755C73.436 66.2261 65.3595 73.2331 55.6881 75.7522C54.4502 76.0746 53.2753 76.6321 52.0478 77.003C48.8752 77.9615 45.4707 78.7042 43.1936 75.6362C41.0826 72.7922 41.7867 69.4581 43.4655 66.5375C46.8761 60.6043 50.2928 54.6659 53.9652 48.8943C60.0533 39.3263 66.4677 29.9695 71.7518 19.8999C72.817 17.87 73.6935 14.1282 77.0981 16.0349C80.0522 17.6893 77.5624 20.161 76.6436 22.1513C70.5135 35.43 61.7191 47.1215 54.3211 59.6454C52.3855 62.922 49.9355 65.9757 49.0868 70.7374C60.9969 68.0492 70.7825 61.0766 82.5137 57.9707Z" fill="black"/>
        </svg>
      </div>
    </>
  )
}

export default Logo;