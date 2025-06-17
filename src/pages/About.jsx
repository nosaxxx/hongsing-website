import React from 'react';
import { Users, Award, Target, Heart, Factory, Wrench, Shield, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const milestones = [
    { year: '2004', event: '上慶企業社成立' },
    { year: '2008', event: '擴大生產規模，引進先進設備' },
    { year: '2012', event: '通過ISO品質認證' },
    { year: '2016', event: '開發新產品線，拓展市場' },
    { year: '2020', event: '數位化轉型，提升服務效率' },
    { year: '2024', event: '持續創新，邁向永續發展' }
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: '品質第一',
      description: '嚴格的品質控管流程，確保每一件產品都符合最高標準'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: '客戶至上',
      description: '以客戶需求為導向，提供客製化解決方案'
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: '持續創新',
      description: '不斷研發新技術，提升產品競爭力'
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: '誠信經營',
      description: '以誠待人，建立長期穩定的合作關係'
    }
  ];

  const capabilities = [
    {
      icon: <Factory className="h-12 w-12 text-blue-600" />,
      title: '現代化工廠',
      description: '擁有現代化的生產設備和標準化的生產流程'
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-600" />,
      title: '專業技術',
      description: '經驗豐富的技術團隊，提供專業的技術支援'
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: '品質保證',
      description: '完善的品質管理系統，確保產品品質穩定'
    },
    {
      icon: <Clock className="h-12 w-12 text-blue-600" />,
      title: '快速交貨',
      description: '高效的生產排程，確保準時交貨'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">關於上慶企業社</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              成立於2004年，我們是一家專業的鐵網、金屬網、圍籬製造商，
              致力於為客戶提供高品質的產品和優質的服務。
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">公司簡介</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  上慶企業社（S.Q Manufacturers Co.）成立於2004年，是一家專業從事鐵網、
                  金屬網、圍籬網等金屬製品製造的企業。我們擁有20年的豐富經驗，
                  致力於為客戶提供高品質、高性能的產品。
                </p>
                <p>
                  公司位於台南市，擁有現代化的生產設備和專業的技術團隊。
                  我們的產品廣泛應用於建築、農業、工業等各個領域，
                  深受客戶信賴和好評。
                </p>
                <p>
                  我們始終堅持「品質第一、客戶至上」的經營理念，
                  不斷提升產品品質和服務水準，為客戶創造更大的價值。
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">公司數據</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                  <div className="text-gray-600">年經驗</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600">完成項目</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">產品種類</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                  <div className="text-gray-600">客戶滿意度</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">企業價值觀</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我們的核心價值觀指導著我們的每一個決策和行動
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">發展歷程</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              回顧我們的成長足跡，展望未來發展
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-6">
                      <CardContent className="p-0">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                        <p className="text-gray-700">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心能力</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我們的專業能力是客戶信賴的基礎
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {capability.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-600 text-sm">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-6">我們的使命</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                致力於成為客戶最信賴的金屬製品供應商，
                通過持續創新和優質服務，
                為客戶創造價值，為社會做出貢獻。
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-6">我們的願景</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                成為台灣地區領先的金屬網製品製造商，
                以卓越的品質和服務贏得客戶信賴，
                推動行業發展，實現永續經營。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

