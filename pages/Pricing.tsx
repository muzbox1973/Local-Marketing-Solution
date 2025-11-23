import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            합리적인 마케팅 자산 투자
          </h1>
          <p className="text-lg text-slate-600">
            직원 한 명 월급보다 훨씬 적은 비용으로,<br />
            마케팅 <span className="text-primary font-bold">전문가 팀 전체</span>를 고용하는 효과를 누리세요.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
            <div className="mb-4">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">Starter</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">기본 관리형</h2>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-slate-900">50</span>
              <span className="text-slate-500">만원 / 월</span>
            </div>
            <p className="text-slate-600 text-sm mb-8 pb-8 border-b border-slate-100">
              이제 막 시작하는 사장님께 추천합니다.<br/>필수적인 기초 마케팅을 세팅합니다.
            </p>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="text-primary flex-shrink-0" size={20} />
                <span className="text-slate-700 text-sm">네이버 플레이스 기본 세팅</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-primary flex-shrink-0" size={20} />
                <span className="text-slate-700 text-sm">영수증 리뷰 답글 관리 (월 30건)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-primary flex-shrink-0" size={20} />
                <span className="text-slate-700 text-sm">브랜드 블로그 포스팅 월 4회</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-slate-300 flex-shrink-0" size={20} />
                <span className="text-slate-400 text-sm line-through">인스타그램 운영 대행</span>
              </li>
            </ul>
            <Link to="/consulting" className="w-full py-3 border-2 border-primary text-primary font-bold rounded-lg text-center hover:bg-primary hover:text-white transition-colors">
              스타터 상담하기
            </Link>
          </div>

          {/* Growth Plan (Best) */}
          <div className="bg-slate-900 rounded-2xl shadow-xl p-8 border border-slate-800 flex flex-col relative transform md:-translate-y-4 hover:-translate-y-6 transition-transform duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
              BEST CHOICE
            </div>
            <div className="mb-4">
              <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider">Growth</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">성장 가속형</h2>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-white">120</span>
              <span className="text-slate-400">만원 / 월</span>
            </div>
            <p className="text-slate-300 text-sm mb-8 pb-8 border-b border-slate-700">
              공격적인 확장이 필요한 시기입니다.<br/>다채널 마케팅으로 손님을 끌어모읍니다.
            </p>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="text-accent flex-shrink-0" size={20} />
                <span className="text-slate-200 text-sm">스타터 플랜 모든 혜택 포함</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-accent flex-shrink-0" size={20} />
                <span className="text-slate-200 text-sm">인스타그램 운영 대행 (릴스 포함)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-accent flex-shrink-0" size={20} />
                <span className="text-slate-200 text-sm">블로그 체험단 모집 월 10팀</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-accent flex-shrink-0" size={20} />
                <span className="text-slate-200 text-sm">지역 커뮤니티 바이럴 침투</span>
              </li>
            </ul>
            <Link to="/consulting" className="w-full py-3 bg-primary text-white font-bold rounded-lg text-center hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20">
              그로스 플랜 시작하기
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
            <div className="mb-4">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">Partner</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">프리미엄 파트너</h2>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl font-extrabold text-slate-900">별도 문의</span>
            </div>
            <p className="text-slate-600 text-sm mb-8 pb-8 border-b border-slate-100">
              지역 1등을 목표로 하신다면,<br/>전담 마케터가 모든 것을 관리해드립니다.
            </p>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="text-primary flex-shrink-0" size={20} />
                <span className="text-slate-700 text-sm">전담 마케터 1:1 배정</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-primary flex-shrink-0" size={20} />
                <span className="text-slate-700 text-sm">온/오프라인 통합 마케팅 설계</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-primary flex-shrink-0" size={20} />
                <span className="text-slate-700 text-sm">경쟁사 밀착 방어 및 대응</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-primary flex-shrink-0" size={20} />
                <span className="text-slate-700 text-sm">월간 심층 분석 리포트 제공</span>
              </li>
            </ul>
            <Link to="/consulting" className="w-full py-3 border-2 border-slate-200 text-slate-700 font-bold rounded-lg text-center hover:border-slate-800 hover:text-slate-900 transition-colors">
              문의하기
            </Link>
          </div>
        </div>

        <div className="mt-16 text-center text-slate-500 text-sm">
          * 모든 가격은 부가세(VAT) 별도입니다.<br/>
          * 계약 기간에 따라 추가 할인이 적용될 수 있습니다.
        </div>
      </div>
    </div>
  );
};

export default Pricing;