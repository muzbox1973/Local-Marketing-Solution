import React, { useState } from 'react';
import { SOL_HOSPITAL, SOL_RESTAURANT, SOL_ACADEMY } from '../images/assets';
import { Stethoscope, Utensils, GraduationCap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Solution: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hospital' | 'restaurant' | 'academy'>('hospital');

  const industries = {
    hospital: {
      title: "병원 / 의원",
      icon: <Stethoscope size={24} />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      image: SOL_HOSPITAL,
      description: "환자는 신뢰할 수 있는 병원을 찾습니다. 의료법을 준수하며 전문성을 강조하는 콘텐츠로 지역 내 명의 이미지를 구축합니다.",
      points: [
        "지역 + 질환명 키워드 (예: 강남 임플란트) 상위 선점",
        "원장님의 철학이 담긴 브랜드 블로그 운영",
        "플레이스 예약 연동 및 신뢰도 중심의 리뷰 관리",
        "진료 과목별 맞춤형 랜딩 페이지 제작 지원"
      ]
    },
    restaurant: {
      title: "요식업 / 카페",
      icon: <Utensils size={24} />,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      image: SOL_RESTAURANT,
      description: "맛은 기본, 이제는 '보여지는 맛'이 중요합니다. 식욕을 자극하는 비주얼 콘텐츠와 지역 핫플레이스 전략을 제안합니다.",
      points: [
        "인스타그램 감성 사진 촬영 및 해시태그 최적화",
        "지역 맛집 랭킹 상위 노출 및 지도 순위 관리",
        "블로그 체험단 모집을 통한 바이럴 마케팅",
        "네이버 예약/주문 활성화로 회전율 증대"
      ]
    },
    academy: {
      title: "학원 / 교육",
      icon: <GraduationCap size={24} />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      image: SOL_ACADEMY,
      description: "학부모님의 마음을 움직여야 합니다. 합격 사례와 성적 향상 데이터를 기반으로 검증된 교육 기관임을 증명합니다.",
      points: [
        "지역 맘카페 교육 정보 공유 및 침투 마케팅",
        "합격자 명단, 성적 우수 사례 블로그 포스팅",
        "학부모 설명회 홍보 및 신청 페이지 제작",
        "원생/학부모 만족도 리뷰 관리 시스템"
      ]
    }
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            업종별 맞춤형 성장 전략
          </h1>
          <p className="text-lg text-slate-600">
            모든 가게의 처방이 같을 수는 없습니다.<br />
            우리동네 은행은 업종별 특성에 맞는 <span className="text-primary font-bold">정밀 진단 솔루션</span>을 제공합니다.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(Object.keys(industries) as Array<keyof typeof industries>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 ${
                activeTab === key
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-slate-500 hover:bg-slate-100 shadow-sm'
              }`}
            >
              {industries[key].icon}
              {industries[key].title}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden animate-fade-in">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img 
                src={industries[activeTab].image} 
                alt={industries[activeTab].title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            
            <div className="p-8 md:p-12 lg:p-16">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 font-bold text-sm ${industries[activeTab].bgColor} ${industries[activeTab].color}`}>
                {industries[activeTab].icon}
                {industries[activeTab].title} 전문 솔루션
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                {industries[activeTab].title.split(' ')[0]}을 위한 마케팅 처방전
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {industries[activeTab].description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {industries[activeTab].points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className={`flex-shrink-0 mt-1 ${industries[activeTab].color}`} size={20} />
                    <span className="text-slate-700 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/consulting"
                className="inline-block w-full sm:w-auto text-center bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg"
              >
                우리 업종 전략 상담받기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;