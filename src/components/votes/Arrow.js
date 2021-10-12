import './Arrow.css';

export default function Arrow({selected, direction}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24.63" viewBox="0 0 14.278 14.626">
            <path className={`${direction} ${selected ? 'active' : ''}`} d="M.89,7.832.214,7.157a.727.727,0,0,1,0-1.031L6.123.214a.727.727,0,0,1,1.031,0l5.909,5.909a.727.727,0,0,1,0,1.031l-.675.675a.731.731,0,0,1-1.043-.012L7.857,4.156V12.9a.728.728,0,0,1-.73.73H6.154a.728.728,0,0,1-.73-.73V4.156L1.933,7.82A.725.725,0,0,1,.89,7.832Z" transform="translate(13.778 14.126) rotate(180)" strokeWidth="1"/>
        </svg>
    )
}