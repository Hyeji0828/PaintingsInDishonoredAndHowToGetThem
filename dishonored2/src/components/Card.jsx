import React, { useState } from 'react';

function Card({ title, eng_title, artist, artist_ingame, painting, images, content }){
    // 크게 보기 모달을 위한 상태 관리
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        // 카드의 전체적인 외곽선과 그림자, 배경색 지정
        <div className="flex flex-col md:flex-row max-w-4xl bg-white my-8 rounded-xl shadow-lg overflow-hidden border border-gray-200 mx-auto">
            
            {/* 왼쪽: 메인 성화(Painting) 이미지 */}
            <div className="md:w-1/3 bg-gray-100 flex justify-center items-center p-4 custom-zoom-in">
                <img 
                    src={painting} 
                    className="w-full h-auto shadow-md border-4 border-white transform hover:scale-105 transition-transform duration-300" 
                    alt={eng_title}
                    onClick={() => setSelectedImg(painting)}
                />
            </div>

            {/* 오른쪽: 상세 정보 섹션 */}
            <div className="md:w-2/3 p-6 flex flex-col">
                <div className="mb-4">
                    <h2 className="text-2xl font-serif font-bold text-gray-900">{title}</h2>
                    <p className="text-sm text-amber-700 italic">{eng_title}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm border-t border-b py-3 border-gray-100">
                    <div>
                        <span className="block text-gray-400 uppercase text-[10px] font-bold">Painted by</span>
                        <p className="font-medium text-gray-800">{artist}</p>
                    </div>
                    <div>
                        <span className="block text-gray-400 uppercase text-[10px] font-bold">Painted by (In-Game)</span>
                        <p className="font-medium text-gray-800">{artist_ingame}</p>
                    </div>
                </div>

                {/* 획득 방법(Images) 섹션 */}
                <div className="mb-4">
                    <span className="block text-gray-400 uppercase text-[10px] font-bold mb-2">How to get</span>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {images.map((image, index) => (
                            <img 
                                key={index} 
                                src={image} 
                                className="w-20 h-20 object-cover rounded border border-gray-200 hover:border-amber-500 cursor-pointer transition-colors"
                                alt={`Location step ${index + 1}`}
                                onClick={() => setSelectedImg(image)}
                            />
                        ))}
                    </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed bg-amber-50 p-3 rounded-lg border-l-4 border-amber-200">
                    {content}
                </p>
            </div>

            {/* 이미지 확대 모달 */}
            {selectedImg && (
                <div
                    className = "fixed inset-0 bg-black/80 z-50 flex justify-center items-center cursor-zoom-out p-4 animate-[fadeIn_0.3s_ease-in-out]"
                    onClick={()=> setSelectedImg(null)}
                >
                    <img
                        src={selectedImg}
                        className = "max-h-full max-w-full rounded-lg shadow-2xl animate-[zoomIn_0.3s_ease-out]"
                        alt="enlarged"
                    />
                    <button className="absolute top-5 right-5 text-white text-3xl font-bold cursor-pointer">&times;</button>
                </div>
            )}
        </div>
    )
}

export default Card;
