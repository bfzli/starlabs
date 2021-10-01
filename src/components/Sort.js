import { useState } from "react";

export default function Sort({change_filter, filter}) {
    return (
        <div>
            {
                filter === 'ABC'

                ?

                <svg className="filter" onClick={() => change_filter()} viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M23.5812 13.6196V5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M26.1622 11.0269L23.5811 13.62L21 11.0269" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59151 15.2068C13.2805 15.2068 16.4335 15.7658 16.4335 17.9988C16.4335 20.2318 13.3015 20.8068 9.59151 20.8068C5.90151 20.8068 2.74951 20.2528 2.74951 18.0188C2.74951 15.7848 5.88051 15.2068 9.59151 15.2068Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59157 12.0198C7.16957 12.0198 5.20557 10.0568 5.20557 7.6348C5.20557 5.2128 7.16957 3.2498 9.59157 3.2498C12.0126 3.2498 13.9766 5.2128 13.9766 7.6348C13.9856 10.0478 12.0356 12.0108 9.62257 12.0198H9.59157Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M16.4832 10.8816C18.0842 10.6566 19.3172 9.2826 19.3202 7.6196C19.3202 5.9806 18.1252 4.6206 16.5582 4.3636" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M18.5955 14.7322C20.1465 14.9632 21.2295 15.5072 21.2295 16.6272C21.2295 17.3982 20.7195 17.8982 19.8955 18.2112" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                :

                <svg className="filter" onClick={() => change_filter()} viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.5811 5.00035V13.62" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 7.59305L23.5811 4.99998L26.1622 7.59305" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59151 15.2068C13.2805 15.2068 16.4335 15.7658 16.4335 17.9988C16.4335 20.2318 13.3015 20.8068 9.59151 20.8068C5.90151 20.8068 2.74951 20.2528 2.74951 18.0188C2.74951 15.7848 5.88051 15.2068 9.59151 15.2068Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59157 12.0198C7.16957 12.0198 5.20557 10.0568 5.20557 7.6348C5.20557 5.2128 7.16957 3.2498 9.59157 3.2498C12.0126 3.2498 13.9766 5.2128 13.9766 7.6348C13.9856 10.0478 12.0356 12.0108 9.62257 12.0198H9.59157Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.4832 10.8816C18.0842 10.6566 19.3172 9.2826 19.3202 7.6196C19.3202 5.9806 18.1252 4.6206 16.5582 4.3636" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.5955 14.7322C20.1465 14.9632 21.2295 15.5072 21.2295 16.6272C21.2295 17.3982 20.7195 17.8982 19.8955 18.2112" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            }
        </div>
    )
}
