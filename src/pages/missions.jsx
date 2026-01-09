import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import Card from '../components/Card'
import data from '../data/data.json';

const TYPE_ORDER = ["paintings", "safes", "souvenir", "blueprints", "runes", "bonecharms"];
const BASE_URL = import.meta.env.BASE_URL;

const MissionPage = () => {
    // 탭 선택 상태
    const [activeTab, setActiveTab] = useState("All");

    const missions = ["All", "m1", "m2"];

    const missionTitles = {
      "All" : "See All",
      "m1" : "A Long Day in Dunwall",
      "m2" : "Edge of the World"
    }

    // 탭(mission) 별로 필터링
    const filteredData = activeTab ==="All"
        ? data
        : data.filter(item=>item.mission === activeTab);

    // 카테고리 별로 분류
    const groupedData = filteredData.reduce((acc, item) => {
      const group = item.type;
      if (!acc[group]) acc[group] = [];
      acc[group].push(item);
      return acc;
    }, {});

    return (
      <div className="max-w-7xl mx-auto p-10">
        <div className="flex justify-center">
          <img 
            src={`${BASE_URL}/Dishonored_2_logo.png`}
            className="mb-15"
          />
        </div>

        {/* 카테고리 선택창*/}
        <div className="flex justify-center gap-4 mb-16">
          {missions.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-8 py-2 rounded-full transition-all duration-300 font-medium
                ${activeTab === tab 
                  ? 'bg-primary text-white scale-105 shadow-lg' // 선택된 스타일
                  : 'bg-gray-200 text-slate-500 hover:bg-slate-200' // 비선택 스타일
                }
              `}
            >
              {missionTitles[tab]}
            </button>
          ))}
        </div>

        {/* 필터링된 데이터 출력 */}
        <div  key={activeTab}
              className="">
              <AnimatePresence>
              
              {TYPE_ORDER.map(groupName => {
                // 데이터가 없는 카테고리 예외
                const imtemsInGroup = groupedData[groupName] || [];
                if(imtemsInGroup.length === 0) return;
                return (
                  <section key={groupName} className="mb-16">
                    <h2 className="font-dishonored text-2xl">
                      {groupName}
                    </h2>
                    <div>
                      {imtemsInGroup.map(item => 
                        <motion.div
                        key={item.game + item.mission + item.type + item.id}
                        layout
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity:0, scale: 0.9}}
                        transition={{duration:0.5}}
                        >
                        <Card key={item.game + item.mission + item.type + item.id} {...item} />
                        </motion.div>
                      )}
                    </div>
                  </section>
                  );
              })}
            </AnimatePresence>
        </div>

        {filteredData.length === 0 && (
          <p className="text-center text-slate-400 mt-20">해당 카테고리에 아이템이 없습니다.</p>
        )}
      </div>
    )
}

export default MissionPage;