import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import { BASE_URL, NAME_MAP, GROUP_ORDER } from "../constants/config";
import Card from '../components/Card'

const CollectionLayout = ({ data, tabField, groupField, startTab}) => {
    // 카테고리(Tab) 목록 + 중복 제거
    const categories = ["All", ...new Set(data.map(item=> item[tabField]))];

    const [activeTab, setActiveTab] = useState(startTab);

    // 카테고리(Tab) 별로 필터링
    const filteredData = activeTab === "All"
        ? data
        : data.filter(item => item[tabField] === activeTab);

    // 그룹별로 필터링
    const groupedData = filteredData.reduce((acc, item) => {
        const groupName = item[groupField];
        if (!acc[groupName]) acc[groupName] = [];
        acc[groupName].push(item);
        return acc;
    }, {});

    return (
    <div className="max-w-7xl mx-auto p-10">
        {/* Head */}
        <div className="flex justify-center">
            <img
                src={`${BASE_URL}/Dishonored_2_logo.png`}
                className="mb-15"
            />
        </div>

        {/* 카테고리(Tab) 선택창 */}
        <div className="flex justify-center gap-4 mb-16">
            {categories.map((tab) => (
                <button
                    key={tab}
                    onClick={()=>setActiveTab(tab)}
                    className={`
                        px-8 py-2 rounded-full transition-all duration-300 font-medium
                        ${activeTab === tab
                            ? 'bg-primary text-white scale-105 shadow-lg' // 선택된
                            : 'bg-gray-200 text-slate-500 hover:bg-slate-200' // 비선택
                        }
                    `}
                >
                    {NAME_MAP[tab] || tab} 
                </button>
            ))}
        </div>

        {/* Content */}
        <div key={activeTab}>
            <AnimatePresence>
            {/* 항목(카드) 뿌리기 */}
            {GROUP_ORDER[groupField].map(groupName => {
                // 데이터 없는 카테고리 제외
                const itemsInGroup = groupedData[groupName] || [];
                if(itemsInGroup.length===0) return;

                return(
                    <section key={groupName}
                             className="mb-16">
                        <h2 className="font-dishonored text-2xl">
                            {NAME_MAP[groupName]}
                        </h2>
                        <div>
                            {itemsInGroup.map(item =>
                                <motion.div
                                    key={item.game + item.mission + item.type + item.id}
                                    layout
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity:0, scale: 0.9}}
                                    transition={{duration:0.5}}
                                >
                                    <Card key={item.game + item.mission + item.type + item.id} {...item}/>
                                </motion.div>
                            )}
                        </div>
                    </section>
                );
            })}
            </AnimatePresence>
        </div>
    </div>
    );
}

export default CollectionLayout;