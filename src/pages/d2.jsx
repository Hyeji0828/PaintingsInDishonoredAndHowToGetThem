import React, {useState} from 'react';
import Card from '../components/Card'
import data from '../data/data.json';

const D2Page = () => {
    // 탭 선택 상태
    const [activeTab, setActiveTab] = useState("All");

    const missions = ["All", "m1", "m2"];

    const missionTitles = {
      "All" : "See All",
      "m1" : "A Long Day in Dunwall",
      "m2" : "Edge of the World"
    }

    const filteredData = activeTab ==="All"
        ? data
        : data.filter(item=>item.mission === activeTab);

    return (
      <div className="max-w-7xl mx-auto p-10">
        <h1 className="font-dishonored text-5xl mb-12 text-center italic">Dishonored 2</h1>

        {/* 카테고리 선택창*/}
        <div className="flex justify-center gap-4 mb-16">

          {missions.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-8 py-2 rounded-full transition-all duration-300 font-medium
                ${activeTab === tab 
                  ? 'bg-slate-900 text-white scale-105 shadow-lg' // 선택된 스타일
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200' // 비선택 스타일
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
          {filteredData.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>

        {filteredData.length === 0 && (
          <p className="text-center text-slate-400 mt-20">해당 카테고리에 아이템이 없습니다.</p>
        )}
      </div>
    )
}

export default D2Page;