import React from 'react'

const Background = ({width, height, style}) => {
  return (
    <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='false' style={style}>
        <g clip-path="url(#clip0_2_82)">
        <rect width="1677" height="1158" fill="#2148C0"/>
        <ellipse cx="255" cy="1025" rx="393" ry="434" fill="#264ECA"/>
        <ellipse cx="232.981" cy="1068.08" rx="224.433" ry="236.593" fill="#274FC7"/>
        <path d="M1078.75 152.516C940.115 166.46 845.819 56.6486 816 0L1699.33 3.81289V786H1600.67C1295.18 744.603 1346.61 579.559 1410.51 502.212C1447.82 447.924 1515.3 317.123 1486.67 228.229C1450.89 117.11 1252.04 135.085 1078.75 152.516Z" fill="#264ECA"/>
        <ellipse cx="140.096" cy="1191.98" rx="293.096" ry="308.975" fill="#244BC5"/>
        </g>
        <defs>
        <clipPath id="clip0_2_82">
        <rect width="1677" height="1158" fill="white"/>
        </clipPath>
        </defs>
    </svg>
  )
}

export default Background