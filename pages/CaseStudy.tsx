import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { CASE_GRAPH_1, INTERVIEW_OWNER_1, INTERVIEW_OWNER_2 } from '../images/assets';
import { TrendingUp, Users, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

const data = [
  { name: '1월', revenue: 2100 },
  { name: '2월', revenue: 2400 },
  { name: '3월', revenue: 3200 }, // 솔루션 도입
  { name: '4월', revenue: 4800 },
  { name: '5월', revenue: 5600 },
  { name: '6월', revenue: 6200 },
];

const CaseStudy: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            데이터로 증명하는 성공 리포트
          </h1>
          <p className="text-lg text-slate-600">
            말뿐인 홍보는 하지 않습니다.<br />
            오직 <span className="text-secondary font-bold">데이터</span>와 <span className="text-primary font-bold">매출</span>로 증명합니다.
          </p>
        </div>

        {/* Highlight Case */}
        <div className="mb-20">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
             {/* Abstract bg shape */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-block px-4 py-1.5 bg-green-500/20 text-green-400 font-bold rounded-full mb-6 text-sm">
                  CASE 01. 요식업
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  월 매출 2천만 원에서<br />
                  <span className="text-green-400">6천만 원 달성</span>까지 단 3개월.
                </h2>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  OO구 고깃집 사장님은 맛에는 자신 있었지만, 홍보 방법을 몰라 고민하셨습니다.
                  우리동네 은행의 '플레이스 최적화'와 '체험단 마케팅' 도입 후 놀라운 성장을 기록했습니다.
                </p>
                <div className="flex gap-8">
                  <div>
                    <div className="text-slate-400 text-sm mb-1">도입 전 매출</div>
                    <div className="text-2xl font-bold text-slate-300">2,100 만원</div>
                  </div>
                  <div className="w-px bg-slate-700 h-12"></div>
                  <div>
                    <div className="text-green-400 text-sm mb-1 font-bold">현재 매출</div>
                    <div className="text-3xl font-bold text-white">6,200 만원</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="text-green-400" /> 매출 성장 추이
                </h3>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                      <XAxis dataKey="name" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" unit="만원" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                        itemStyle={{ color: '#10B981' }}
                      />
                      <Area type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" name="매출" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Case 2 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <img src={INTERVIEW_OWNER_1} alt="Pilates" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h3 className="font-bold text-lg">신규 오픈 필라테스 센터</h3>
                <p className="text-slate-500 text-sm">오픈 1개월 만에 회원 100명 달성</p>
              </div>
            </div>
            <p className="text-slate-600 mb-6">
              "새로 오픈하면 저절로 회원이 올 줄 알았어요. 전문가의 도움으로 지역 맘카페와 인스타그램 타겟 광고를 시작했고, 오픈 이벤트가 조기 마감되는 효과를 봤습니다."
            </p>
            <div className="flex items-center gap-2 text-primary font-bold">
              <Users size={20} /> 
              <span>회원 수 0명 → 103명</span>
            </div>
          </div>

          {/* Case 3 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <img src={INTERVIEW_OWNER_2} alt="Restaurant" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h3 className="font-bold text-lg">골목 상권 파스타집</h3>
                <p className="text-slate-500 text-sm">네이버 예약 건수 400% 증가</p>
              </div>
            </div>
            <p className="text-slate-600 mb-6">
              "위치가 안 좋아서 걱정이었는데, '지도 순위'가 올라가니 찾아오는 손님이 늘었어요. 예쁜 음식 사진으로 블로그 작업을 한 게 신의 한 수 였습니다."
            </p>
            <div className="flex items-center gap-2 text-accent font-bold">
              <Wallet size={20} /> 
              <span>예약률 15% → 85%</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-2">다음 성공 사례의 주인공은 사장님입니다.</h3>
            <p className="text-slate-600 mb-6">지금 바로 내 가게의 가능성을 확인해보세요.</p>
            <Link to="/consulting" className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
              무료 진단 신청하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;