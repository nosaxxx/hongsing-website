import React, { useState } from 'react';
import { Search, Filter, Grid, List, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Products = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: '全部產品' },
    { id: 'fence', name: '圍籬網系列' },
    { id: 'wire', name: '鋼絲網系列' },
    { id: 'pipe', name: '管材系列' },
    { id: 'gate', name: '門類產品' }
  ];

  const products = [
    {
      id: 1,
      name: '彩色菱形網',
      category: 'fence',
      description: '採用優質鋼絲製造，表面經過特殊處理，具有多種顏色選擇，美觀實用。',
      features: ['多種顏色選擇', '防鏽處理', '安裝簡便', '美觀耐用'],
      applications: ['住宅圍籬', '公園景觀', '運動場地', '工廠圍籬'],
      specifications: {
        '網孔尺寸': '50mm x 50mm',
        '絲徑': '2.5mm - 4.0mm',
        '高度': '1.0m - 2.5m',
        '長度': '10m - 25m'
      },
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      name: '鍍鋅菱形網',
      category: 'fence',
      description: '經過熱浸鍍鋅處理，具有優異的防腐蝕性能，適用於各種環境。',
      features: ['熱浸鍍鋅', '防腐蝕性強', '使用壽命長', '經濟實用'],
      applications: ['農場圍籬', '工業用地', '道路護欄', '邊界圍籬'],
      specifications: {
        '網孔尺寸': '50mm x 50mm',
        '絲徑': '2.0mm - 3.5mm',
        '鍍鋅層厚度': '≥275g/m²',
        '高度': '1.0m - 3.0m'
      },
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      name: 'PVC菱形網',
      category: 'fence',
      description: '在鍍鋅基礎上包覆PVC塑料，具有更好的防腐性能和美觀效果。',
      features: ['PVC包覆', '顏色豐富', '環保材質', '維護簡單'],
      applications: ['學校圍籬', '住宅小區', '公共設施', '景觀工程'],
      specifications: {
        '網孔尺寸': '50mm x 50mm',
        '絲徑': '2.0mm + PVC',
        'PVC厚度': '0.5mm - 1.0mm',
        '顏色': '綠色、藍色、白色等'
      },
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      name: '點焊鋼絲網',
      category: 'wire',
      description: '採用優質低碳鋼絲，經過精密點焊工藝製造，結構穩固，承重力強。',
      features: ['點焊工藝', '結構穩固', '承重力強', '規格齊全'],
      applications: ['建築加固', '混凝土澆築', '地面鋪裝', '工業用途'],
      specifications: {
        '網孔尺寸': '50mm x 50mm - 200mm x 200mm',
        '絲徑': '3.0mm - 8.0mm',
        '片材尺寸': '1m x 2m - 2m x 3m',
        '表面處理': '鍍鋅或不鏽鋼'
      },
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      name: '刺絲網',
      category: 'wire',
      description: '專業安全防護產品，具有優異的防護效果，廣泛用於安全圍籬。',
      features: ['安全防護', '防攀爬', '耐候性強', '安裝靈活'],
      applications: ['監獄圍籬', '軍事設施', '邊界防護', '高安全區域'],
      specifications: {
        '刺距': '75mm - 150mm',
        '絲徑': '2.5mm',
        '刺長': '15mm',
        '包裝': '25kg/卷'
      },
      image: '/api/placeholder/400/300'
    },
    {
      id: 6,
      name: '鍍鋅管',
      category: 'pipe',
      description: '優質鋼管經過熱浸鍍鋅處理，具有優異的防腐性能，適用於各種結構工程。',
      features: ['熱浸鍍鋅', '防腐性能優', '強度高', '規格齊全'],
      applications: ['圍籬立柱', '結構支撐', '建築工程', '基礎設施'],
      specifications: {
        '外徑': '25mm - 150mm',
        '壁厚': '1.5mm - 6.0mm',
        '長度': '3m - 12m',
        '鍍鋅層': '≥350g/m²'
      },
      image: '/api/placeholder/400/300'
    },
    {
      id: 7,
      name: '烤漆鋼管',
      category: 'pipe',
      description: '經過表面處理和烤漆工藝，具有美觀的外觀和良好的防腐性能。',
      features: ['烤漆處理', '外觀美觀', '顏色多樣', '防腐耐用'],
      applications: ['裝飾圍籬', '景觀工程', '建築外觀', '公共設施'],
      specifications: {
        '外徑': '20mm - 100mm',
        '壁厚': '1.2mm - 4.0mm',
        '顏色': 'RAL色卡可選',
        '塗層厚度': '≥60μm'
      },
      image: '/api/placeholder/400/300'
    },
    {
      id: 8,
      name: '電動推拉門',
      category: 'gate',
      description: '自動化門控系統，操作便利，安全可靠，適用於各種場所的出入口控制。',
      features: ['電動控制', '遙控操作', '安全保護', '耐用可靠'],
      applications: ['工廠大門', '住宅小區', '停車場', '商業場所'],
      specifications: {
        '門寬': '3m - 12m',
        '門高': '1.5m - 3.0m',
        '驅動方式': '齒輪齒條',
        '控制方式': '遙控/按鈕/感應'
      },
      image: '/api/placeholder/400/300'
    },
    {
      id: 9,
      name: '太陽能農地門',
      category: 'gate',
      description: '結合太陽能技術的環保門控系統，無需外接電源，適合農地等偏遠地區使用。',
      features: ['太陽能供電', '環保節能', '無線控制', '維護簡單'],
      applications: ['農場入口', '果園大門', '牧場圍籬', '偏遠地區'],
      specifications: {
        '門寬': '2m - 8m',
        '太陽能板': '20W - 100W',
        '電池容量': '12V 20Ah - 100Ah',
        '續航時間': '7-15天'
      },
      image: '/api/placeholder/400/300'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">產品與服務</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              我們提供多樣化的鐵網、金屬網產品，滿足不同行業和應用需求
            </p>
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
                placeholder="搜尋產品..."
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

            {/* View Mode */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600">
              找到 {filteredProducts.length} 個產品
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-t-lg">
                      <div className="w-full h-48 bg-gradient-to-br from-gray-300 to-gray-400 rounded-t-lg flex items-center justify-center">
                        <span className="text-gray-600 text-sm">產品圖片</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">主要特點：</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        查看詳情
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      <div className="lg:col-span-1">
                        <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-lg">
                          <div className="w-full h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
                            <span className="text-gray-600 text-sm">產品圖片</span>
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-3">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-semibold text-gray-900">{product.name}</h3>
                          <Button>
                            查看詳情
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">主要特點：</h4>
                            <div className="flex flex-wrap gap-1">
                              {product.features.map((feature, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">應用領域：</h4>
                            <div className="flex flex-wrap gap-1">
                              {product.applications.slice(0, 4).map((application, index) => (
                                <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                  {application}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">需要客製化產品？</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            我們提供專業的客製化服務，根據您的具體需求設計和製造產品
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            聯絡我們討論需求
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;

