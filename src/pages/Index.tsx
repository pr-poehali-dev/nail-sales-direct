import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const products = [
    {
      category: "Гвозди винтовые / ерш / кольцевые",
      items: [
        { name: "2.5/45", quantity: "7200 шт", price: "2590 ₽" },
        { name: "2.5/50", quantity: "7200 шт", price: "2775 ₽" },
        { name: "2.5/55", quantity: "7200 шт", price: "2960 ₽" },
        { name: "2.5/60", quantity: "7200 шт", price: "3145 ₽" },
        { name: "2.5/70", quantity: "7200 шт", price: "3515 ₽" },
        { name: "2.5/80", quantity: "7200 шт", price: "3885 ₽" },
        { name: "2.8/60", quantity: "5400 шт", price: "2925 ₽" },
        { name: "2.8/70", quantity: "5400 шт", price: "3315 ₽" },
        { name: "2.8/80", quantity: "5400 шт", price: "3705 ₽" },
        { name: "2.8/88", quantity: "5400 шт", price: "3900 ₽" },
        { name: "2.8/90", quantity: "5400 шт", price: "4095 ₽" },
        { name: "3.1/70", quantity: "3600 шт", price: "2835 ₽" },
        { name: "3.1/80", quantity: "3600 шт", price: "3150 ₽" },
        { name: "3.1/90", quantity: "3600 шт", price: "3465 ₽" },
      ]
    },
    {
      category: "Гвозди гладкие общестроительные",
      items: [
        { name: "2.5/40", quantity: "7200 шт", price: "2310 ₽" },
        { name: "2.5/70", quantity: "7200 шт", price: "3465 ₽" },
        { name: "2.8/80", quantity: "5400 шт", price: "3500 ₽" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/files/Снимок экрана 2026-01-15 101907.png" 
                alt="ГЛОБУС-МЕТИЗ" 
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center gap-6">
              {[
                { id: "home", label: "Главная", icon: "Home" },
                { id: "products", label: "Продукция", icon: "Package" },
                { id: "production", label: "Производство", icon: "Factory" },
                { id: "price", label: "Прайс-лист", icon: "FileText" },
                { id: "delivery", label: "Доставка", icon: "Truck" },
                { id: "contacts", label: "Контакты", icon: "Phone" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? "text-primary" : "text-gray-600"
                  }`}
                >
                  <Icon name={item.icon} size={16} />
                  {item.label}
                </button>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-accent text-white">
                <Icon name="Award" size={14} className="mr-1" />
                Производитель №1 в Череповце
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Гвозди от<br />
                <span className="text-primary">производителя</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                ООО «ГЛОБУС-МЕТИЗ» — собственное производство метизов в Череповце. 
                Прямые поставки без посредников. Гарантия качества и низкие цены.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => scrollToSection("products")}>
                  <Icon name="Package" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("price")}>
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать прайс
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { icon: "Factory", label: "Собственное производство" },
                  { icon: "Shield", label: "Гарантия качества" },
                  { icon: "TrendingDown", label: "Низкие цены" },
                ].map((feature, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                      <Icon name={feature.icon} size={24} className="text-primary" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">{feature.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <Icon name="Construction" size={120} className="text-gray-400" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-white px-6 py-3 rounded-xl shadow-lg">
                  <p className="text-sm font-semibold">От 95 ₽/кг</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary text-white mb-4">
              <Icon name="Package" size={14} className="mr-1" />
              Наша продукция
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Каталог гвоздей</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Широкий ассортимент метизов для любых строительных задач
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="md:col-span-2 md:row-span-2">
              <img 
                src="https://cdn.poehali.dev/files/2.5х55винт,2.5х60кольцо,3.1х90кольцо.jpg"
                alt="Склад готовой продукции"
                className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02]"
              />
            </div>
            <div className="md:row-span-1">
              <img 
                src="https://cdn.poehali.dev/files/IMG_20240724_163958.jpg"
                alt="Гвозди барабанные винтовые"
                className="w-full h-48 md:h-full object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02]"
              />
            </div>
            <div className="md:row-span-1">
              <img 
                src="https://cdn.poehali.dev/files/IMG_20240724_164628.jpg"
                alt="Гвозди ерш кольцевые"
                className="w-full h-48 md:h-full object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="relative mb-12">
            <img 
              src="https://cdn.poehali.dev/files/2.5х45винт,2.5х70винт,2.5х50винт.jpg"
              alt="Ассортимент гвоздей на складе"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex items-end p-8">
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-2">Более 50 типоразмеров в наличии</h3>
                <p className="text-lg">Доставка по России, гарантия качества</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((category, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-primary">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border-b border-gray-200 last:border-0 pb-2 last:pb-0">
                      <p className="font-medium text-gray-900">{item.name}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Button size="lg" onClick={() => scrollToSection("price")}>
              <Icon name="FileText" size={20} className="mr-2" />
              Полный прайс-лист
            </Button>
            <Button size="lg" variant="outline" onClick={() => {
              const link = document.createElement('a');
              link.href = '/price.xlsx';
              link.download = 'Прайс-лист_ГЛОБУС-МЕТИЗ.xlsx';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}>
              <Icon name="Download" size={20} className="mr-2" />
              Скачать Excel
            </Button>
          </div>
        </div>
      </section>

      <section id="production" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-secondary text-white mb-4">
              <Icon name="Factory" size={14} className="mr-1" />
              О производстве
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наш цех в Череповце</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Современное оборудование и контроль качества на всех этапах
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                <Icon name="Factory" size={80} className="text-gray-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <Icon name="Cog" size={48} className="text-gray-400" />
                </div>
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <Icon name="Settings" size={48} className="text-gray-400" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={24} className="text-accent" />
                    Преимущества производства
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Собственная производственная база площадью 2500 м²",
                    "Современное европейское оборудование",
                    "Мощность производства до 50 тонн в месяц",
                    "Контроль качества на каждом этапе",
                    "Сертификаты соответствия ГОСТ",
                    "Возможность производства по чертежам заказчика",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary to-primary/90 text-white">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90 mb-1">Опыт работы</p>
                      <p className="text-4xl font-bold">15+ лет</p>
                    </div>
                    <Icon name="Award" size={64} className="opacity-20" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="price" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-accent text-white mb-4">
              <Icon name="FileText" size={14} className="mr-1" />
              Цены
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Прайс-лист</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Актуальные цены на всю продукцию. Оптовым покупателям — специальные условия
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-primary to-accent text-white">
                <CardTitle className="text-2xl">Базовый прайс-лист 2026</CardTitle>
                <CardDescription className="text-white/90">
                  Цены указаны за коробку (барабан)
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {products.map((category, idx) => (
                    <div key={idx}>
                      <h3 className="font-bold text-lg text-primary mb-3 flex items-center gap-2">
                        <Icon name="Folder" size={20} />
                        {category.category}
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b-2 border-primary/20">
                              <th className="text-left py-2 px-2 font-semibold text-gray-700">Размер</th>
                              <th className="text-center py-2 px-2 font-semibold text-gray-700">Гвоздей в коробке</th>
                              <th className="text-right py-2 px-2 font-semibold text-gray-700">Цена за коробку</th>
                            </tr>
                          </thead>
                          <tbody>
                            {category.items.map((item, itemIdx) => (
                              <tr key={itemIdx} className="border-b border-gray-200 last:border-0 hover:bg-gray-50">
                                <td className="py-3 px-2 font-medium text-gray-900">{item.name}</td>
                                <td className="py-3 px-2 text-center text-gray-700">{item.quantity}</td>
                                <td className="py-3 px-2 text-right font-bold text-accent text-lg">{item.price}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-accent/10 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" size={24} className="text-accent flex-shrink-0" />
                    <div className="space-y-2">
                      <p className="font-semibold text-gray-900">Особые условия:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• От 10 коробок — скидка 5%</li>
                        <li>• От 20 коробок — скидка 10%</li>
                        <li>• Постоянным клиентам — индивидуальные цены</li>
                        <li>• Доставка по Череповцу бесплатно от 5 коробок</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать прайс PDF
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={() => scrollToSection("contacts")}>
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Запросить расчет
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-secondary text-white mb-4">
              <Icon name="Truck" size={14} className="mr-1" />
              Логистика
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Доставка и оплата</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Быстрая доставка по России и удобные способы оплаты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={40} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Своя логистика</h3>
                <p className="text-gray-600">
                  Собственный автопарк для доставки по Вологодской области
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={40} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Вся Россия</h3>
                <p className="text-gray-600">
                  Отправка транспортными компаниями в любой регион
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={40} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Быстро</h3>
                <p className="text-gray-600">
                  Отгрузка в день заказа при наличии на складе
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Package" size={24} className="text-accent" />
                  Условия доставки
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Бесплатно по Череповцу от 300 кг",
                  "Вологда и область — от 500 ₽",
                  "Транспортные компании — по тарифам ТК",
                  "Самовывоз со склада в Череповце",
                  "Помощь в погрузке спецтехникой",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="CreditCard" size={24} className="text-primary" />
                  Способы оплаты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Безналичный расчет для юр. лиц",
                  "Наличными при самовывозе",
                  "Банковские карты",
                  "Рассрочка для постоянных клиентов",
                  "Оплата по факту получения груза",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary text-white mb-4">
              <Icon name="Phone" size={14} className="mr-1" />
              Связь
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Свяжитесь с нами удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>ООО «ГЛОБУС-МЕТИЗ»</CardTitle>
                  <CardDescription>Производство и продажа метизов</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { icon: "MapPin", label: "г. Череповец, ул. Промышленная, 45" },
                    { icon: "Phone", label: "+7 (8202) 55-33-11" },
                    { icon: "Mail", label: "info@globus-metiz.ru" },
                    { icon: "Clock", label: "Пн-Пт: 8:00-17:00, Сб: 9:00-14:00" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Icon name={item.icon} size={20} className="text-primary mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{item.label}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                <Icon name="Map" size={64} className="text-gray-400" />
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                      Ваше имя *
                    </label>
                    <Input placeholder="Иван Петров" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                      Телефон *
                    </label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                      Email
                    </label>
                    <Input type="email" placeholder="example@mail.ru" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                      Комментарий
                    </label>
                    <Textarea 
                      placeholder="Расскажите о своих потребностях: тип гвоздей, объем, сроки..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/Снимок экрана 2026-01-15 101907.png" 
                alt="ГЛОБУС-МЕТИЗ" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm">
                Производство метизов с 2010 года
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Строительные гвозди</li>
                <li>Кровельные гвозди</li>
                <li>Финишные гвозди</li>
                <li>Специальные гвозди</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О производстве</li>
                <li>Сертификаты</li>
                <li>Отзывы</li>
                <li>Вакансии</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (8202) 55-33-11</li>
                <li>info@globus-metiz.ru</li>
                <li>г. Череповец</li>
                <li>ул. Промышленная, 45</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 ООО «ГЛОБУС-МЕТИЗ». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;