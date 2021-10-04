export default function Sort({ change_filter, filter }) {
    return (
        <div>
            {
                filter === 'ABC'
                    ?
                    <svg className="filter" onClick={() => change_filter()} viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.51 5.425H9.26L9.07 6H8.04L9.325 2.475H10.455L11.735 6H10.7L10.51 5.425ZM10.265 4.675L9.885 3.535L9.51 4.675H10.265ZM14.3044 4.19C14.5111 4.23667 14.6744 4.34 14.7944 4.5C14.9177 4.65667 14.9794 4.83667 14.9794 5.04C14.9794 5.34 14.8761 5.575 14.6694 5.745C14.4627 5.915 14.1727 6 13.7994 6H12.0544V2.475H13.7444C14.1044 2.475 14.3861 2.555 14.5894 2.715C14.7961 2.875 14.8994 3.1 14.8994 3.39C14.8994 3.59667 14.8444 3.77 14.7344 3.91C14.6277 4.04667 14.4844 4.14 14.3044 4.19ZM13.0344 3.875H13.5294C13.7761 3.875 13.8994 3.77333 13.8994 3.57C13.8994 3.36 13.7761 3.255 13.5294 3.255H13.0344V3.875ZM13.6044 5.21C13.8511 5.21 13.9744 5.10667 13.9744 4.9C13.9744 4.79333 13.9411 4.71167 13.8744 4.655C13.8111 4.59833 13.7194 4.57 13.5994 4.57H13.0344V5.21H13.6044ZM15.2889 4.23C15.2889 3.88333 15.3606 3.575 15.5039 3.305C15.6506 3.03167 15.8572 2.82 16.1239 2.67C16.3906 2.51667 16.6972 2.44 17.0439 2.44C17.4839 2.44 17.8539 2.55833 18.1539 2.795C18.4539 3.02833 18.6472 3.34667 18.7339 3.75H17.6789C17.6156 3.61667 17.5272 3.515 17.4139 3.445C17.3039 3.375 17.1756 3.34 17.0289 3.34C16.8022 3.34 16.6206 3.42167 16.4839 3.585C16.3506 3.745 16.2839 3.96 16.2839 4.23C16.2839 4.50333 16.3506 4.72167 16.4839 4.885C16.6206 5.045 16.8022 5.125 17.0289 5.125C17.1756 5.125 17.3039 5.09 17.4139 5.02C17.5272 4.95 17.6156 4.84833 17.6789 4.715H18.7339C18.6472 5.11833 18.4539 5.43833 18.1539 5.675C17.8539 5.90833 17.4839 6.025 17.0439 6.025C16.6972 6.025 16.3906 5.95 16.1239 5.8C15.8572 5.64667 15.6506 5.435 15.5039 5.165C15.3606 4.89167 15.2889 4.58 15.2889 4.23Z" fill="#fff" />
                        <path opacity="0.4" d="M4.70555 11.7345C4.18944 11.7345 3.77163 11.3104 3.77163 10.7867L3.51416 6.20792C3.51416 5.54042 4.04783 4.99999 4.70555 4.99999C5.36328 4.99999 5.89577 5.54042 5.89577 6.20792L5.63947 10.7867C5.63947 11.3104 5.22167 11.7345 4.70555 11.7345" fill="#fff" />
                        <path d="M5.98037 20.9516C5.98037 20.9516 5.71236 21.2271 5.54618 21.3471C5.30509 21.5324 5.00783 21.625 4.71173 21.625C4.37936 21.625 4.0704 21.5205 3.81877 21.3233C3.77313 21.277 3.57886 21.1024 3.41852 20.9397C2.41204 19.9883 0.765393 17.5047 0.262153 16.2042C0.182571 16.007 0.0105329 15.5082 0 15.2409C0 14.9867 0.0561757 14.7421 0.170868 14.5105C0.331202 14.2206 0.582823 13.9878 0.880085 13.8608C1.08606 13.7788 1.70282 13.6517 1.71453 13.6517C2.38981 13.5234 3.48757 13.4546 4.70003 13.4546C5.85514 13.4546 6.90727 13.5234 7.59308 13.628C7.60478 13.6398 8.37017 13.7669 8.6335 13.9071C9.11333 14.1624 9.41177 14.6613 9.41177 15.1946V15.2409C9.40006 15.5889 9.10163 16.3206 9.09109 16.3206C8.58785 17.5511 7.02079 19.9764 5.98037 20.9516" fill="#fff" />
                        <path d="M14.3493 18.8577C10.3855 18.8577 7 19.47 7 21.9174C7 24.3666 10.364 25 14.3493 25C18.3131 25 21.6987 24.3877 21.6987 21.9404C21.6987 19.4911 18.3347 18.8577 14.3493 18.8577" fill="#fff" />
                        <path opacity="0.4" d="M14.3494 16.5248C17.049 16.5248 19.2124 14.4062 19.2124 11.7624C19.2124 9.11865 17.049 7 14.3494 7C11.6507 7 9.48633 9.11865 9.48633 11.7624C9.48633 14.4062 11.6507 16.5248 14.3494 16.5248" fill="#fff" />
                        <path opacity="0.4" d="M21.1734 11.8488C21.1734 13.1951 20.7605 14.4513 20.0364 15.4948C19.9611 15.6022 20.0276 15.7468 20.1587 15.7698C20.3407 15.7996 20.5276 15.8178 20.7184 15.8216C22.6167 15.8705 24.3202 14.6736 24.7908 12.8712C25.4885 10.1968 23.4415 7.79544 20.8339 7.79544C20.5511 7.79544 20.2801 7.82419 20.0159 7.87689C19.9797 7.88456 19.9405 7.9018 19.921 7.93247C19.8955 7.97176 19.9141 8.02254 19.9395 8.05608C20.7233 9.13217 21.1734 10.4421 21.1734 11.8488" fill="#fff" />
                        <path d="M26.7791 19.1693C26.4317 18.444 25.5932 17.9466 24.3172 17.7023C23.7155 17.5586 22.0853 17.3545 20.5697 17.3832C20.5472 17.3861 20.5344 17.4014 20.5325 17.411C20.5295 17.4263 20.5364 17.4493 20.5658 17.4656C21.2663 17.8048 23.9738 19.2805 23.6333 22.3928C23.6186 22.5289 23.7292 22.6439 23.8671 22.6247C24.5335 22.5318 26.2478 22.1705 26.7791 21.0475C27.0736 20.4534 27.0736 19.7634 26.7791 19.1693" fill="#fff" />
                    </svg>


                    :

                    <svg className="filter" onClick={() => change_filter()} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.53 4.19C8.73667 4.23667 8.9 4.34 9.02 4.5C9.14333 4.65667 9.205 4.83667 9.205 5.04C9.205 5.34 9.10167 5.575 8.895 5.745C8.68833 5.915 8.39833 6 8.025 6H6.28V2.475H7.97C8.33 2.475 8.61167 2.555 8.815 2.715C9.02167 2.875 9.125 3.1 9.125 3.39C9.125 3.59667 9.07 3.77 8.96 3.91C8.85333 4.04667 8.71 4.14 8.53 4.19ZM7.26 3.875H7.755C8.00167 3.875 8.125 3.77333 8.125 3.57C8.125 3.36 8.00167 3.255 7.755 3.255H7.26V3.875ZM7.83 5.21C8.07667 5.21 8.2 5.10667 8.2 4.9C8.2 4.79333 8.16667 4.71167 8.1 4.655C8.03667 4.59833 7.945 4.57 7.825 4.57H7.26V5.21H7.83ZM9.51449 4.23C9.51449 3.88333 9.58616 3.575 9.72949 3.305C9.87616 3.03167 10.0828 2.82 10.3495 2.67C10.6162 2.51667 10.9228 2.44 11.2695 2.44C11.7095 2.44 12.0795 2.55833 12.3795 2.795C12.6795 3.02833 12.8728 3.34667 12.9595 3.75H11.9045C11.8412 3.61667 11.7528 3.515 11.6395 3.445C11.5295 3.375 11.4012 3.34 11.2545 3.34C11.0278 3.34 10.8462 3.42167 10.7095 3.585C10.5762 3.745 10.5095 3.96 10.5095 4.23C10.5095 4.50333 10.5762 4.72167 10.7095 4.885C10.8462 5.045 11.0278 5.125 11.2545 5.125C11.4012 5.125 11.5295 5.09 11.6395 5.02C11.7528 4.95 11.8412 4.84833 11.9045 4.715H12.9595C12.8728 5.11833 12.6795 5.43833 12.3795 5.675C12.0795 5.90833 11.7095 6.025 11.2695 6.025C10.9228 6.025 10.6162 5.95 10.3495 5.8C10.0828 5.64667 9.87616 5.435 9.72949 5.165C9.58616 4.89167 9.51449 4.58 9.51449 4.23ZM15.6536 5.425H14.4036L14.2136 6H13.1836L14.4686 2.475H15.5986L16.8786 6H15.8436L15.6536 5.425ZM15.4086 4.675L15.0286 3.535L14.6536 4.675H15.4086Z" fill="#fff" />
                        <path opacity="0.4" d="M22.7056 10.8905C22.1894 10.8905 21.7716 11.3146 21.7716 11.8383L21.5142 16.4171C21.5142 17.0846 22.0478 17.625 22.7056 17.625C23.3633 17.625 23.8958 17.0846 23.8958 16.4171L23.6395 11.8383C23.6395 11.3146 23.2217 10.8905 22.7056 10.8905" fill="#fff" />
                        <path d="M23.9804 1.67345C23.9804 1.67345 23.7124 1.39789 23.5462 1.27793C23.3051 1.09264 23.0078 1 22.7117 1C22.3794 1 22.0704 1.10452 21.8188 1.30169C21.7731 1.34801 21.5789 1.5226 21.4185 1.68532C20.412 2.6367 18.7654 5.12026 18.2622 6.42083C18.1826 6.618 18.0105 7.11685 18 7.38409C18 7.63827 18.0562 7.88294 18.1709 8.11455C18.3312 8.40436 18.5828 8.63715 18.8801 8.76424C19.0861 8.84619 19.7028 8.97328 19.7145 8.97328C20.3898 9.10156 21.4876 9.17045 22.7 9.17045C23.8551 9.17045 24.9073 9.10156 25.5931 8.99704C25.6048 8.98516 26.3702 8.85807 26.6335 8.71792C27.1133 8.46255 27.4118 7.96371 27.4118 7.43041V7.38409C27.4001 7.03608 27.1016 6.30444 27.0911 6.30444C26.5879 5.07394 25.0208 2.64858 23.9804 1.67345" fill="#fff" />
                        <path d="M9.34933 19.8577C5.38553 19.8577 2 20.47 2 22.9174C2 25.3666 5.364 26 9.34933 26C13.3131 26 16.6987 25.3877 16.6987 22.9404C16.6987 20.4911 13.3347 19.8577 9.34933 19.8577" fill="#fff" />
                        <path opacity="0.4" d="M9.34935 17.5248C12.049 17.5248 14.2124 15.4062 14.2124 12.7624C14.2124 10.1187 12.049 8 9.34935 8C6.65072 8 4.48633 10.1187 4.48633 12.7624C4.48633 15.4062 6.65072 17.5248 9.34935 17.5248" fill="#fff" />
                        <path opacity="0.4" d="M16.1734 12.8488C16.1734 14.1951 15.7605 15.4513 15.0364 16.4948C14.9611 16.6022 15.0276 16.7468 15.1587 16.7698C15.3407 16.7996 15.5276 16.8178 15.7184 16.8216C17.6167 16.8705 19.3202 15.6736 19.7908 13.8712C20.4885 11.1968 18.4415 8.79544 15.8339 8.79544C15.5511 8.79544 15.2801 8.82419 15.0159 8.87689C14.9797 8.88456 14.9405 8.9018 14.921 8.93247C14.8955 8.97176 14.9141 9.02254 14.9395 9.05608C15.7233 10.1322 16.1734 11.4421 16.1734 12.8488" fill="#fff" />
                        <path d="M21.7791 20.1693C21.4317 19.444 20.5932 18.9466 19.3172 18.7023C18.7155 18.5586 17.0853 18.3545 15.5697 18.3832C15.5472 18.3861 15.5344 18.4014 15.5325 18.411C15.5295 18.4263 15.5364 18.4493 15.5658 18.4656C16.2663 18.8048 18.9738 20.2805 18.6333 23.3928C18.6186 23.5289 18.7292 23.6439 18.8671 23.6247C19.5335 23.5318 21.2478 23.1705 21.7791 22.0475C22.0736 21.4534 22.0736 20.7634 21.7791 20.1693" fill="#fff" />
                    </svg>

            }
        </div>
    )
}
