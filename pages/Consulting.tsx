import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { CONTACT_MAP_IMG } from '../images/assets';

const Consulting: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    industry: 'hospital',
    phone: '',
    location: '',
    concern: 'exposure'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center bg-slate-50 px-4">
        <div className="bg-white p-12 rounded-3xl shadow-xl max-w-lg text-center animate-fade-in-up">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600 w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">신청이 완료되었습니다!</h2>
          <p className="text-slate-600 mb-8">
            성공적인 자산 관리를 위한 첫 걸음을 떼셨군요.<br/>
            담당자가 24시간 이내에 분석 리포트와 함께 연락드리겠습니다.
          </p>
          <button 
            onClick={() => window.location.href = '/'} 
            className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Image & Info */}
      <div className="w-full md:w-1/2 lg:w-5/12 relative hidden md:block">
        <div className="absolute inset-0">
          <img src={CONTACT_MAP_IMG} alt="Office" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        <div className="absolute inset-0 p-12 lg:p-20 flex flex-col justify-center text-white">
          <h2 className="text-4xl font-extrabold mb-6">
            지금 내 가게의<br/>
            <span className="text-accent">온라인 점수</span>는 몇 점일까요?
          </h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            1분 만에 신청하고, 지역 상권 분석 데이터가 포함된 '맞춤형 진단 리포트'를 무료로 받아보세요.
          </p>
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
            <p className="text-sm text-slate-200">
              ℹ️ 영업 전화를 먼저 드리지 않습니다. 보내드린 리포트를 보시고 필요하실 때 연락 주시면 됩니다.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 lg:w-7/12 bg-white flex items-center justify-center p-6 md:p-12 lg:p-20">
        <div className="max-w-xl w-full">
          <div className="md:hidden mb-8 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">무료 진단 신청</h1>
            <p className="text-slate-600">내 가게의 정확한 상태를 파악해보세요.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <label className="block text-sm font-bold text-slate-700">업종 선택</label>
              <div className="grid grid-cols-3 gap-3">
                {['hospital', 'restaurant', 'academy'].map((type) => (
                  <label key={type} className={`cursor-pointer border rounded-lg p-3 text-center transition-all ${formData.industry === type ? 'border-primary bg-blue-50 text-primary font-bold' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}>
                    <input 
                      type="radio" 
                      name="industry" 
                      value={type} 
                      checked={formData.industry === type}
                      onChange={handleChange}
                      className="hidden" 
                    />
                    {type === 'hospital' ? '병원/의원' : type === 'restaurant' ? '요식업' : '학원/교육'}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">상호명</label>
                <input 
                  type="text" 
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  placeholder="예: 우리동네 치과" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">연락처</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="010-0000-0000" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">매장 위치 (동/읍/면 까지)</label>
              <input 
                type="text" 
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="예: 서울시 강남구 역삼동" 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">가장 큰 고민은 무엇인가요?</label>
              <select 
                name="concern"
                value={formData.concern}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="exposure">검색해도 우리 가게가 안 나와요 (노출 부족)</option>
                <option value="review">악성 리뷰 때문에 스트레스 받아요 (평판 관리)</option>
                <option value="revenue">매출이 계속 떨어져서 불안해요 (매출 하락)</option>
                <option value="new">개업 예정이라 홍보 막막해요 (신규 오픈)</option>
              </select>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-primary text-white font-bold py-4 rounded-xl text-lg hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-1"
              >
                진단 리포트 무료 신청 <Send size={20} />
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">
                개인정보는 상담 목적 외에는 사용되지 않으며, 안전하게 보호됩니다.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Consulting;