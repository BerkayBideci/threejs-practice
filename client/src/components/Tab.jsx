import { useSnapshot } from "valtio"
import state from "../store/index"

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
    const snap = useSnapshot(state)
    const activeStyles = isFilterTab && isActiveTab ? { backgroundColor: snap.color, opacity: 1 } : null
    return (
        <div
            key={tab.name}
            className={`tab-btn ${isFilterTab ? "rounded-full glassmorphism" : "rounded-4"}`} onClick={handleClick}
            style={activeStyles}>
            <img
                src={tab.icon}
                alt={tab.name}
                className={`${isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12 object-contain"}`} />
        </div>
    )
}

export default Tab