import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const products = [
    {
      name: '彩色菱形網',
      description: '多種顏色選擇，美觀實用',
      image: '/api/placeholder/300/200'
    },
    {
      name: '鍍鋅菱形網',
      description: '防鏽耐用，品質保證',
      image: '/api/placeholder/300/200'
    },
    {
      name: 'PVC菱形網',
      description: '環保材質，安全可靠',
      image: '/api/placeholder/300/200'
    },
    {
      name: '點焊鋼絲網',
      description: '結構穩固，承重力強',
      image: '/api/placeholder/300/200'
    }
  ];

  const advantages = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: '專業品質',
      description: '20年專業製造經驗，嚴格品質控管'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: '安全可靠',
      description: '通過各項安全認證，值得信賴'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: '客戶至上',
      description: '提供專業諮詢與完善售後服務'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: '快速交貨',
      description: '高效生產流程，準時交貨保證'
    }
  ];

  const testimonials = [
    {
      name: '王先生',
      company: '建設公司',
      content: '上慶企業社的產品品質優良，服務態度也很好，是值得信賴的合作夥伴。',
      rating: 5
    },
    {
      name: '李小姐',
      company: '農場主',
      content: '圍籬網的品質很好，安裝簡單，價格也很合理，非常滿意。',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                專業鐵網金屬網
                <span className="text-orange-400">圍籬製造商</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                20年專業製造經驗，提供高品質的鐵網、金屬網、圍籬網等產品，
                為您的工程項目提供最佳解決方案。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  查看產品
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  聯絡我們
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">為什麼選擇我們？</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>20年專業製造經驗</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>嚴格品質控管流程</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>客製化設計服務</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>完善售後服務保障</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">主要產品</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我們提供多種類型的鐵網、金屬網產品，滿足不同客戶的需求
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-t-lg">
                    <div className="w-full h-48 bg-gradient-to-br from-gray-300 to-gray-400 rounded-t-lg flex items-center justify-center">
                      <span className="text-gray-600 text-sm">產品圖片</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      了解更多
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                查看所有產品
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我們的優勢</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              專業、品質、服務是我們的核心價值
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">客戶見證</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              聽聽我們客戶的真實回饋
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">準備開始您的項目了嗎？</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            聯絡我們獲取專業諮詢和報價，我們將為您提供最適合的解決方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                立即諮詢
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                瀏覽產品
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

