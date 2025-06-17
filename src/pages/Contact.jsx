import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, FileText, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    projectType: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('感謝您的諮詢，我們會盡快與您聯絡！');
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: '電話聯絡',
      details: ['06-123-4567', '06-123-4568'],
      description: '週一至週五 8:00-17:00'
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: '電子郵件',
      details: ['info@hongsing.com.tw', 'sales@hongsing.com.tw'],
      description: '24小時內回覆'
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: '公司地址',
      details: ['台南市某某區某某路123號'],
      description: '歡迎預約參觀工廠'
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: '營業時間',
      details: ['週一至週五：8:00-17:00', '週六：8:00-12:00'],
      description: '週日及國定假日休息'
    }
  ];

  const projectTypes = [
    '住宅圍籬',
    '商業圍籬',
    '工業圍籬',
    '農業圍籬',
    '運動場圍網',
    '安全圍籬',
    '景觀圍籬',
    '其他'
  ];

  const faqs = [
    {
      question: '你們提供免費報價嗎？',
      answer: '是的，我們提供免費的現場勘查和報價服務。請聯絡我們安排時間。'
    },
    {
      question: '施工需要多長時間？',
      answer: '施工時間取決於項目規模和複雜度，一般小型項目1-2週，大型項目4-8週。'
    },
    {
      question: '你們提供保固服務嗎？',
      answer: '我們提供1-3年的產品保固，具體保固期限依產品類型而定。'
    },
    {
      question: '可以客製化設計嗎？',
      answer: '當然可以，我們有專業的設計團隊，可以根據您的需求提供客製化解決方案。'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">聯絡我們</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              我們期待為您提供專業的圍籬解決方案，歡迎隨時與我們聯絡
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">線上諮詢</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          姓名 *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="請輸入您的姓名"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          電話 *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="請輸入聯絡電話"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          電子郵件 *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="請輸入電子郵件"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          公司名稱
                        </label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="請輸入公司名稱"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        項目類型
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">請選擇項目類型</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        主旨 *
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="請輸入諮詢主旨"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        詳細需求 *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="請詳細描述您的需求，包括項目規模、預算範圍、時間要求等"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      <Send className="mr-2 h-5 w-5" />
                      送出諮詢
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">公司位置</h3>
                  <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-lg mb-4">
                    <div className="w-full h-64 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
                      <span className="text-gray-600">Google Maps</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <strong>地址：</strong>台南市某某區某某路123號
                    </p>
                    <p className="text-gray-700">
                      <strong>交通：</strong>鄰近台南火車站，開車約15分鐘
                    </p>
                    <p className="text-gray-700">
                      <strong>停車：</strong>提供免費停車位
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">快速聯絡</h3>
                  <div className="space-y-4">
                    <Button className="w-full justify-start" variant="outline">
                      <Phone className="mr-3 h-5 w-5" />
                      立即撥打：06-123-4567
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <MessageCircle className="mr-3 h-5 w-5" />
                      LINE 線上諮詢
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <FileText className="mr-3 h-5 w-5" />
                      下載產品型錄
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">服務時間</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">週一至週五</span>
                      <span className="font-medium">8:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">週六</span>
                      <span className="font-medium">8:00 - 12:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">週日及國定假日</span>
                      <span className="text-red-500">休息</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <strong>緊急聯絡：</strong>如有緊急需求，請撥打 0912-345-678
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">常見問題</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              以下是客戶最常詢問的問題，如有其他疑問歡迎聯絡我們
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">還有疑問嗎？</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            我們的專業團隊隨時為您提供諮詢服務，歡迎聯絡我們
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Phone className="mr-2 h-5 w-5" />
              立即致電
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Mail className="mr-2 h-5 w-5" />
              發送郵件
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

