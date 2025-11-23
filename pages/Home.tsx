import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, TrendingUp, PenTool, ArrowRight, Quote, ShieldCheck } from 'lucide-react';
import { HERO_BG, PROBLEM_IMG, FEATURE_MAP, FEATURE_REVIEW, FEATURE_CONTENT, INTERVIEW_OWNER_1, INTERVIEW_OWNER_2 } from '../images/assets';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="City Business" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
          <div className="max-w-2xl text-white">
            <div className="inline-block px-4 py-1.5 bg-accent/20 border border-accent/40 rounded-full text-accent font-bold text-sm mb-6 animate-fade-in-up">
              지역 소상공인 마케팅 파트너 1위
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
              아직도 동네 손님들이<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">우리 가게만 모르고</span><br />
              지나가나요?
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
              병원, 맛집, 학원 홍보부터 지도 순위 최적화까지.<br />
              사장님의 마케팅 고민, <strong>'우리동네 은행'</strong>이 확실한 매출 자산으로 바꿔드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/consulting" 
                className="px-8 py-4 bg-primary hover:bg-blue-700 text-white rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 text-center"
              >
                내 가게 무료 진단받기
              </Link>
              <Link 
                to="/solution" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg font-bold text-lg transition-all text-center flex items-center justify-center gap-2"
              >
                솔루션 자세히 보기 <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform"></div>
              <img src={PROBLEM_IMG} alt="Worried Owner" className="relative rounded-xl shadow-2xl w-full object-cover h-[400px] md:h-[500px]" />
              <div className="absolute bottom-6 right-6 bg-white p-6 rounded-lg shadow-xl max-w-xs">
                <p className="text-slate-600 italic">"맛도 좋고 서비스도 좋은데... 왜 손님이 안 올까요?"</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-primary font-bold tracking-wider uppercase mb-2">Problem & Solution</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                열심히만 하면 손님이 오던<br />
                시대는 <span className="text-red-500 underline decoration-wavy decoration-2 underline-offset-4">끝났습니다.</span>
              </h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                고객은 이제 스마트폰으로 '검색'하고 '비교'한 뒤 방문합니다. 
                온라인에서 보이지 않는 가게는 고객에게 <strong>존재하지 않는 가게</strong>와 같습니다.
              </p>
              <div className="bg-slate-50 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <p className="text-slate-800 font-medium text-lg">
                  우리동네 은행은 복잡한 마케팅 로직을 뚫고, 사장님의 매장을 지역 검색 결과 1등석에 앉혀드립니다. 
                  단순 노출이 아닌 <span className="bg-green-100 text-green-700 font-bold px-1">실제 방문</span>을 만듭니다.
                </p>
              </div>
              <Link to="/solution" className="text-primary font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all">
                어떻게 해결하나요? <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              성공하는 사장님의 3가지 필수 자산
            </h2>
            <p className="text-slate-600 text-lg">
              마케팅은 비용이 아니라 투자입니다. 가장 확실한 수익률을 보장합니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={FEATURE_MAP} alt="Map Optimization" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full z-20 text-primary">
                  <MapPin size={24} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">지역 검색 점유율 1위</h3>
                <p className="text-slate-600 mb-4">우리 동네 맛집, 00동 치과 검색 시 상위 노출을 보장합니다. 내 가게를 찾는 고객에게 가장 먼저 보여줍니다.</p>
                <div className="flex gap-2">
                  <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-700 rounded">플레이스 최적화</span>
                  <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-700 rounded">지도 순위</span>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={FEATURE_REVIEW} alt="Review Management" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full z-20 text-accent">
                  <ShieldCheck size={24} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">신뢰를 쌓는 리뷰 자산</h3>
                <p className="text-slate-600 mb-4">악성 리뷰는 방어하고 긍정 리뷰는 확산시킵니다. 별점 관리는 곧 매출 관리의 시작입니다.</p>
                <div className="flex gap-2">
                  <span className="text-xs font-bold px-2 py-1 bg-yellow-100 text-yellow-700 rounded">평점 4.8+</span>
                  <span className="text-xs font-bold px-2 py-1 bg-yellow-100 text-yellow-700 rounded">리뷰 답글 케어</span>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={FEATURE_CONTENT} alt="Content Marketing" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full z-20 text-secondary">
                  <PenTool size={24} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">고객을 부르는 스토리</h3>
                <p className="text-slate-600 mb-4">단순 홍보가 아닙니다. 전문 에디터가 가게만의 매력을 발굴하여 '가고 싶은 이유'를 만들어냅니다.</p>
                <div className="flex gap-2">
                  <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded">블로그</span>
                  <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded">인스타그램</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">이미 1,200명의 사장님이<br/>마케팅 적금에 가입하셨습니다.</h2>
            <p className="text-blue-200 text-lg">우리동네 은행은 사장님의 성공과 함께 성장합니다.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl flex gap-4">
              <img src={INTERVIEW_OWNER_1} alt="Dentist" className="w-16 h-16 rounded-full object-cover border-2 border-primary" />
              <div>
                <div className="text-accent mb-2 flex"><Quote size={20} className="fill-current rotate-180" /></div>
                <p className="text-lg font-medium mb-4">"개원 6개월 차 치과입니다. 솔루션 도입 후 신환 문의가 3배 늘었어요. 진료에만 집중할 수 있어 너무 좋습니다."</p>
                <div>
                  <div className="font-bold">김성민 원장</div>
                  <div className="text-sm text-slate-500">강남구 서울OO치과</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl flex gap-4">
              <img src={INTERVIEW_OWNER_2} alt="Cafe Owner" className="w-16 h-16 rounded-full object-cover border-2 border-secondary" />
              <div>
                <div className="text-accent mb-2 flex"><Quote size={20} className="fill-current rotate-180" /></div>
                <p className="text-lg font-medium mb-4">"동네 골목 상권이라 걱정했는데, 이제는 멀리서도 검색해서 찾아옵니다. 진짜 마케팅 효과가 있네요."</p>
                <div>
                  <div className="font-bold">이수진 대표</div>
                  <div className="text-sm text-slate-500">마포구 OO카페</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/cases" 
              className="inline-flex items-center gap-2 text-white font-bold text-lg border-b-2 border-white/50 hover:border-white pb-1 transition-all"
            >
              더 많은 성공 사례 보러가기 <TrendingUp size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;