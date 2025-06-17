import React, { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: '全部項目' },
    { id: 'residential', name: '住宅項目' },
    { id: 'commercial', name: '商業項目' },
    { id: 'industrial', name: '工業項目' },
    { id: 'agricultural', name: '農業項目' },
    { id: 'infrastructure', name: '基礎設施' }
  ];

  const projects = [
    {
      id: 1,
      title: '台南科技園區圍籬工程',
      category: 'industrial',
      location: '台南市安南區',
      date: '2024年3月',
      client: '台南科技園區管理局',
      description: '為台南科技園區提供全面的圍籬解決方案，包括主要圍籬、安全門禁系統等。',
      products: ['點焊鋼絲網', '電動推拉門', '鍍鋅立柱'],
      area: '5,000平方公尺',
      duration: '45天',
      challenges: '需要在不影響園區正常運營的情況下完成施工',
      solution: '採用分段施工方式，使用高品質點焊鋼絲網確保安全性',
      results: '成功提升園區安全等級，獲得客戶高度評價',
      images: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
      testimonial: {
        content: '上慶企業社的專業服務和高品質產品讓我們非常滿意，施工過程中的配合度也很高。',
        author: '張經理',
        position: '台南科技園區管理局'
      }
    },
    {
      id: 2,
      title: '高雄住宅社區圍籬美化',
      category: 'residential',
      location: '高雄市左營區',
      date: '2024年1月',
      client: '翠湖社區管理委員會',
      description: '為高端住宅社區提供美觀且實用的圍籬解決方案，提升社區整體形象。',
      products: ['PVC菱形網', '烤漆鋼管', '景觀門'],
      area: '2,800平方公尺',
      duration: '30天',
      challenges: '需要兼顧美觀性和實用性，符合社區高端定位',
      solution: '選用PVC彩色菱形網搭配烤漆立柱，色彩搭配和諧',
      results: '大幅提升社區外觀，住戶滿意度達98%',
      images: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
      testimonial: {
        content: '新的圍籬不僅美觀，品質也很好，為我們社區增色不少。',
        author: '李主委',
        position: '翠湖社區管理委員會'
      }
    },
    {
      id: 3,
      title: '嘉義農場智能圍籬系統',
      category: 'agricultural',
      location: '嘉義縣朴子市',
      date: '2023年11月',
      client: '綠野農場',
      description: '為大型農場提供智能化圍籬系統，包括太陽能門控和監控設備。',
      products: ['鍍鋅菱形網', '太陽能農地門', '監控立柱'],
      area: '15,000平方公尺',
      duration: '60天',
      challenges: '農場位置偏遠，需要無電源解決方案',
      solution: '採用太陽能供電系統，配合無線監控技術',
      results: '實現農場全天候監控，大幅降低管理成本',
      images: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
      testimonial: {
        content: '太陽能門控系統非常實用，解決了我們偏遠農場的電力問題。',
        author: '陳老闆',
        position: '綠野農場'
      }
    },
    {
      id: 4,
      title: '屏東工業區安全圍籬',
      category: 'industrial',
      location: '屏東縣屏東市',
      date: '2023年9月',
      client: '屏東工業區開發公司',
      description: '為工業區提供高安全等級的圍籬系統，確保區域安全。',
      products: ['刺絲網', '點焊鋼絲網', '安全門禁'],
      area: '8,000平方公尺',
      duration: '50天',
      challenges: '需要達到高安全等級要求',
      solution: '採用多層防護設計，結合刺絲網和監控系統',
      results: '成功通過安全驗收，零安全事故記錄',
      images: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
      testimonial: {
        content: '專業的安全圍籬設計，讓我們的工業區安全等級大幅提升。',
        author: '王總經理',
        position: '屏東工業區開發公司'
      }
    },
    {
      id: 5,
      title: '台南學校運動場圍網',
      category: 'infrastructure',
      location: '台南市東區',
      date: '2023年7月',
      client: '台南市立中學',
      description: '為學校運動場提供專業的圍網系統，確保學生運動安全。',
      products: ['彩色菱形網', '運動場專用立柱', '安全門'],
      area: '3,500平方公尺',
      duration: '25天',
      challenges: '需要在暑假期間完成，時間緊迫',
      solution: '增加施工人員，採用預製化安裝方式',
      results: '按時完工，為新學期做好準備',
      images: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
      testimonial: {
        content: '施工品質優良，按時完工，學生們都很喜歡新的運動場。',
        author: '林校長',
        position: '台南市立中學'
      }
    },
    {
      id: 6,
      title: '金門觀光景點圍籬',
      category: 'commercial',
      location: '金門縣金城鎮',
      date: '2023年5月',
      client: '金門縣政府',
      description: '為金門重要觀光景點提供美觀的圍籬系統，兼顧安全和景觀需求。',
      products: ['PVC菱形網', '景觀立柱', '裝飾門'],
      area: '4,200平方公尺',
      duration: '35天',
      challenges: '需要配合當地建築風格和景觀要求',
      solution: '客製化設計，選用與環境協調的色彩和造型',
      results: '成為景點的一部分，獲得遊客好評',
      images: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
      testimonial: {
        content: '圍籬設計很好地融入了景觀，既實用又美觀。',
        author: '黃科長',
        position: '金門縣政府觀光處'
      }
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">工程實績</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              多年來我們完成了眾多優質項目，為客戶提供專業可靠的圍籬解決方案
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">完成項目</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500萬+</div>
              <div className="text-gray-600">施工面積(m²)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-gray-600">客戶滿意度</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">服務年限</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="搜尋項目..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600">
              找到 {filteredProjects.length} 個項目
            </p>
          </div>

          <div className="space-y-12">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Project Images */}
                    <div className="relative">
                      <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                        <div className="w-full h-64 lg:h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                          <span className="text-gray-600">項目圖片</span>
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {categories.find(cat => cat.id === project.category)?.name}
                        </span>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-8">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{project.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{project.location}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">客戶：</h4>
                          <p className="text-sm text-gray-600">{project.client}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">施工面積：</h4>
                          <p className="text-sm text-gray-600">{project.area}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">工期：</h4>
                          <p className="text-sm text-gray-600">{project.duration}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">使用產品：</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.products.map((product, idx) => (
                              <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                {product}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-1">挑戰：</h4>
                          <p className="text-sm text-gray-600">{project.challenges}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-1">解決方案：</h4>
                          <p className="text-sm text-gray-600">{project.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-1">成果：</h4>
                          <p className="text-sm text-gray-600">{project.results}</p>
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <p className="text-sm text-gray-600 italic mb-2">"{project.testimonial.content}"</p>
                        <div className="text-sm">
                          <span className="font-semibold text-gray-900">{project.testimonial.author}</span>
                          <span className="text-gray-500"> - {project.testimonial.position}</span>
                        </div>
                      </div>

                      <Button className="w-full sm:w-auto">
                        查看更多詳情
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
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
          <h2 className="text-3xl font-bold mb-4">準備開始您的項目？</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            讓我們的專業團隊為您提供最適合的圍籬解決方案
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            聯絡我們討論項目
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;

