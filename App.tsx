import React, { useState } from 'react';
import { 
  User, BookOpen, Rocket, Briefcase, Award, Mail, ChevronRight, 
  ExternalLink, Monitor, Download, MapPin, Phone, 
  Globe, ArrowUpRight, Youtube, Instagram, Facebook, Twitter
} from 'lucide-react';
import { motion } from 'framer-motion';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const ImagePlaceholder = ({ text, className = "h-48" }: { text: string, className?: string }) => (
    <div className={`w-full ${className} bg-muted/50 border border-foreground/5 rounded-2xl flex flex-col items-center justify-center text-foreground/20 p-6 text-center transition-all duration-300 group-hover:bg-muted`}>
      <Monitor className="mb-2 opacity-30" size={32} strokeWidth={1.5} />
      <span className="text-[10px] font-black uppercase tracking-[0.2em]">{text}</span>
    </div>
  );

  const SectionHeader = ({ icon: Icon, title }: { icon: any, title: string }) => (
    <div className="flex items-end justify-between mb-16">
      <div className="space-y-2">
        <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center text-primary">
          <Icon size={24} strokeWidth={2} />
        </div>
        <h2 className="text-6xl md:text-7xl font-black tracking-tighter lowercase">{title}</h2>
      </div>
      <div className="hidden md:flex w-16 h-16 rounded-full border border-foreground/10 items-center justify-center text-foreground/20">
        <ChevronRight size={32} />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 relative overflow-x-hidden">
      
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 blur-[100px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-xl px-8 py-4 rounded-full border border-white/20 shadow-sm relative">
          {/* 橙色装饰线条 */}
          <div className="absolute bottom-0 left-0 w-1/4 h-1 bg-primary rounded-full"></div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-white font-black text-sm">G</div>
            <span className="text-xl font-black tracking-tighter">高煦琰<span className="text-primary">.</span></span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-base font-black uppercase tracking-[0.2em]">
            {['home', 'education', 'projects', 'internship', 'campus'].map((tab) => (
              <a 
                key={tab} 
                href={`#${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`transition-all hover:text-primary ${activeTab === tab ? 'text-primary' : 'text-foreground/60'}`}
              >
                {tab === 'home' ? '首页' : tab === 'education' ? '基础信息' : tab === 'projects' ? '科研项目' : tab === 'internship' ? '教学实习' : '校园经历'}
              </a>
            ))}
          </div>
          <a href="mailto:gaoxuyan0309@126.com" className="h-10 bg-foreground text-white px-6 flex items-center rounded-full text-sm font-black uppercase tracking-widest hover:bg-primary transition-all">
            联系我
          </a>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section id="home" className="pt-48 pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto relative">
          {/* 橙色装饰线条 */}
          <div className="absolute top-0 left-0 w-1/3 h-1 bg-primary rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1 bg-primary rounded-full"></div>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full border border-foreground/5 text-[10px] font-black tracking-widest uppercase">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  江南大学 2026 现代教育技术
                </div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] lowercase">
                  gao xuyan<br/>
                  <span className="text-6xl md:text-8xl font-black text-primary tracking-wider opacity-80">高煦琰</span>
                </h1>
                <p className="text-2xl md:text-3xl font-serif italic text-foreground/60 leading-tight max-w-2xl">
                  用技术温暖教育
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { label: '政治', score: '62' },
                  { label: '英语二', score: '83' },
                  { label: '业务一', score: '132' },
                  { label: '业务二', score: '119' },
                  { label: '初试总分', score: '396', highlight: true }
                ].map((item, idx) => (
                  <div key={idx} className={`p-6 rounded-3xl border ${item.highlight ? 'bg-primary border-primary text-white shadow-xl shadow-primary/20' : 'bg-white border-foreground/5 text-foreground'} transition-all hover:scale-105`}>
                    <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${item.highlight ? 'opacity-60' : 'opacity-30'}`}>{item.label}</p>
                    <p className="text-3xl font-black tracking-tighter">{item.score}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="bg-primary aspect-square rounded-[4rem] p-12 flex flex-col justify-between relative overflow-hidden group">
                <div className="w-full h-full flex items-center justify-center">
                  <img src="/assets/profile.jpg" alt="Profile" className="w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-1" />
                </div>
                <div className="absolute top-8 right-8 w-16 h-16 bg-black rounded-full flex items-center justify-center text-white">
                  <Globe size={24} />
                </div>
                <div className="absolute bottom-12 right-12 flex flex-col gap-4 items-end">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                    <ArrowUpRight size={20} />
                  </div>
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-primary bg-muted overflow-hidden">
                        <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="user" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                </div>
                <Rocket className="absolute -left-10 -bottom-10 w-64 h-64 opacity-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Education & Skills */}
      <section id="education" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto relative">
          {/* 橙色装饰线条 */}
          <div className="absolute top-0 right-0 w-1/5 h-1 bg-primary rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-primary rounded-full"></div>
          <SectionHeader icon={BookOpen} title="education & skills" />
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-[2.5rem] p-12 border border-foreground/5 transition-all hover:border-primary/20 relative overflow-hidden">
                {/* 橙色装饰线条 */}
                <div className="absolute top-0 left-0 w-1/4 h-1 bg-primary"></div>
                <div className="flex flex-wrap justify-between items-start mb-12">
                  <div className="flex-1 mr-8">
                    <h3 className="text-4xl font-black tracking-tighter">江苏师范大学</h3>
                    <p className="text-primary font-bold text-lg mt-1">教育技术学 (师范) | 2022 - 2026</p>
                    <p className="text-foreground/40 text-base font-black uppercase tracking-widest mt-2">人工智能与计算机学院</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="px-6 py-2 bg-muted rounded-full text-[10px] font-black uppercase tracking-widest">本科在读</div>
                    <img src="/assets/yan.jpg" alt="Yan" className="w-32 h-32 rounded-lg object-cover object-[50%_20%]" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h4 className="text-base font-black text-foreground/30 uppercase tracking-[0.2em]">核心课程成绩 / Key Courses</h4>
                    <div className="space-y-4">
                      {[
                        { name: 'Python语言程序设计', score: '93' },
                        { name: '中小学人工智能教育', score: '91' },
                        { name: '虚拟现实设计与开发', score: '90' }
                      ].map((course, i) => (
                        <div key={i} className="flex justify-between items-center group">
                          <span className="text-lg font-bold group-hover:text-primary transition-colors">{course.name}</span>
                          <span className="w-10 h-10 flex items-center justify-center bg-muted rounded-full text-xs font-black text-primary">{course.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10">
                    <h4 className="text-base font-black text-primary mb-4 flex items-center gap-2 uppercase tracking-widest">
                      <ChevronRight size={16} strokeWidth={3} /> 毕业论文 / Thesis
                    </h4>
                    <p className="text-xl leading-tight font-bold">
                      《信息技术课程标准中美育缺位的检视与补位策略研究——基于UNESCO、美、英、中四份课标的内容分析》
                    </p>
                    <p className="text-sm text-foreground/60 mt-4 leading-relaxed">
                      ——基于对一线信息技术课堂美学呈现匮乏的实际观察，本研究试图系统诊断我国初中信息科技课程中美育的结构性缺位，并为课程标准的修订与教学实践提供本土化的改进建议。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-foreground rounded-[2.5rem] p-12 text-white flex flex-col justify-between relative overflow-hidden">
              {/* 橙色装饰线条 */}
              <div className="absolute top-0 right-0 w-1/3 h-1 bg-primary"></div>
              <div className="absolute bottom-0 left-0 w-1/4 h-1 bg-primary"></div>
              <div className="space-y-12">
                <h3 className="text-2xl font-black italic uppercase tracking-tight opacity-40">个人技能/Skills</h3>
                <div className="space-y-10">
                  <div>
                    <p className="text-base font-black text-white/30 uppercase tracking-widest mb-4">技能证书</p>
                    <div className="flex flex-wrap gap-2">
                      {['CET-6 (497)', 'CET-4 (503)', '普通话二甲'].map(s => (
                        <span key={s} className="bg-white/10 px-4 py-2 rounded-full text-lg font-bold">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-base font-black text-white/30 uppercase tracking-widest mb-4">专业技能</p>
                    <p className="text-lg text-white/80 leading-relaxed font-bold">
                      • Unity3D 、Python<br/>
                      • 熟练使用剪辑软件<br/>
                      • 专业办公软件应用
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-black text-xl">高</div>
                <div className="text-[10px] text-white/40 font-black leading-tight uppercase tracking-widest">
                  Tech-Driven<br/>Edu Specialist
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Innovation & Projects */}
      <section id="projects" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader icon={Rocket} title="innovation & projects" />

          <div className="bg-white rounded-[3rem] p-12 md:p-16 border border-foreground/5 mb-8 group hover:border-primary/20 transition-all">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-7 space-y-10">
                <div className="flex items-start justify-between">
                  <h3 className="text-4xl font-black tracking-tighter">HIGVR——打破虚实界限的<br/>沉浸式触控交互先锋</h3>
                  <span className="px-6 py-2 bg-primary text-white text-sm font-black rounded-full uppercase tracking-widest mt-2">核心成员</span>
                </div>
                
                <div className="space-y-8">
                  <p className="text-2xl leading-tight font-bold">
                    <span className="text-primary">全球首款</span> 集“振动—拉力—温觉”反馈于一体的XR体感手套。
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="p-6 bg-muted rounded-2xl">
                        <h4 className="text-sm font-black text-primary mb-3 uppercase tracking-widest">技术贡献</h4>
                        <ul className="text-sm font-bold space-y-2 opacity-60">
                          <li>• 撰写6万余字商业计划书及相关证明材料</li>
                          <li>• Unity3D 场景开发与答辩嵌入</li>
                          <li>• 15 项核心技术优化提炼</li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-6 bg-muted rounded-2xl">
                        <h4 className="text-sm font-black text-primary mb-3 uppercase tracking-widest">教学转化</h4>
                        <ul className="text-sm font-bold space-y-2 opacity-60">
                          <li>• 搭建 60+ 课件资源库</li>
                          <li>• 支撑跨区域沉浸式教学</li>
                          <li>• 开源场景平台内容建设</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-foreground/5 flex flex-wrap gap-6">
                  <div className="px-6 py-4 bg-accent/5 rounded-2xl border border-accent/10 flex items-start gap-4 shadow-lg">
                    <Award className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-sm font-black text-accent uppercase mb-1 italic tracking-widest">挑战杯/创新创业大赛</p>
                      <p className="text-lg font-black">国家级铜奖 / 江苏省金奖</p>
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-primary/5 rounded-2xl border border-primary/10 flex items-start gap-4 shadow-lg">
                    <Award className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-sm font-black text-primary uppercase mb-1 italic tracking-widest">建行杯/创新创业大赛</p>
                      <p className="text-lg font-black">国家级铜奖/江苏省金奖</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4 mt-8">
                <div className="w-full h-60 rounded-lg overflow-hidden border border-foreground/5 bg-white p-1">
                  <img src="/assets/手套1.gif" alt="手套实物图/Unity场景" className="w-full h-full object-cover rounded" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="w-full h-40 rounded-lg overflow-hidden border border-foreground/5 bg-white p-1">
                    <img src="/assets/合照1.png" alt="获奖证书 A" className="w-full h-full object-cover rounded" />
                  </div>
                  <div className="w-full h-40 rounded-lg overflow-hidden border border-foreground/5 bg-white p-1">
                    <img src="/assets/奖状.png" alt="获奖证书 B" className="w-full h-full object-cover rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-muted rounded-[2.5rem] p-12 group hover:bg-white border border-primary/20 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h3 className="text-3xl font-black tracking-tight">AI&STEM爱思信息科技课堂</h3>
                  <p className="text-primary text-3xl font-black mt-1 uppercase tracking-widest">项目负责人</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-foreground/20 group-hover:text-primary transition-all">
                  <ArrowUpRight size={24} />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-6 bg-white rounded-2xl text-center">
                  <p className="text-xl font-black">1560+</p>
                  <p className="text-sm text-foreground/30 font-black uppercase tracking-widest mt-1">覆盖学生</p>
                </div>
                <div className="p-6 bg-white rounded-2xl text-center">
                  <p className="text-xl font-black">5校10社区</p>
                  <p className="text-sm text-foreground/30 font-black uppercase tracking-widest mt-1">项目落地</p>
                </div>
              </div>
              
              <p className="text-lg text-foreground/60 leading-relaxed mb-10 font-bold">
                研发 60 课时 AI&STEM 课程，被中青网等国家级媒体报道，项目获评校志愿服务大赛三等奖。
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full h-48 rounded-lg overflow-hidden border border-foreground/5 bg-white p-1">
                  <img src="/assets/负责人.png" alt="负责人" className="w-full h-full object-cover rounded" />
                </div>
                <div className="w-full h-48 rounded-lg overflow-hidden border border-foreground/5 bg-white p-1">
                  <img src="/assets/志愿服务.png" alt="志愿服务" className="w-full h-full object-cover rounded" />
                </div>
              </div>
            </div>

            <div className="bg-foreground rounded-[2.5rem] p-12 text-white flex flex-col justify-between">
              <div className="space-y-12">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="text-primary" size={24} />
                    <h3 className="text-2xl font-black uppercase tracking-tight">在申请国家发明专利（第三发明人）</h3>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
                    <p className="text-lg font-black mb-1">《一种基于手部动作的自适应反馈控制系统》</p>
                    <p className="text-sm text-white/30 uppercase tracking-widest font-black italic">申请号: 202411082288.1</p>
                  </div>
                  <div className="w-full h-56 rounded-lg overflow-hidden border border-white/10">
                    <img src="/assets/专利.png" alt="专利图片" className="w-full h-full object-cover" />
                  </div>
                </div>
                
                <div className="pt-10 border-t border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="text-primary" size={24} />
                    <h3 className="text-2xl font-black uppercase tracking-tight">校级大创:校园急救常识普及与推广APP（项目负责人）</h3>
                  </div>
                  <p className="text-base text-white/60 leading-relaxed mb-8 font-bold">
                    立足教育技术专业，统筹App开发与医疗知识库构建，推动急救知识普及创新。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Teaching Internship */}
      <section id="internship" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto relative">
          {/* 橙色装饰线条 */}
          <div className="absolute top-0 right-0 w-1/3 h-1 bg-primary rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1 bg-primary rounded-full"></div>
          <SectionHeader icon={Briefcase} title="teaching internship" />

          <div className="space-y-8">
            <div className="bg-white rounded-[3rem] p-12 md:p-16 border border-foreground/5 transition-all hover:border-primary/20 relative overflow-hidden">
              {/* 橙色装饰线条 */}
              <div className="absolute top-0 left-0 w-1/2 h-1 bg-primary"></div>
              <div className="grid lg:grid-cols-12 gap-16">
                <div className="lg:col-span-8 space-y-10">
                  <div className="flex flex-wrap justify-between gap-8">
                    <div>
                      <h3 className="text-4xl font-black tracking-tighter">铜山区清华中学</h3>
                      <p className="text-primary font-black uppercase text-base tracking-widest mt-1 italic">实习信息技术教师兼班主任|2025/02-2025/05</p>
                    </div>
                    <div className="bg-primary text-white px-8 py-4 rounded-3xl text-center">
                      <p className="text-4xl font-black">80+ 节</p>
                      <p className="text-[10px] font-black uppercase opacity-60 tracking-widest mt-1">累计授课</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted rounded-[2rem] border-l-8 border-primary">
                      <p className="text-foreground font-black text-lg mb-3 uppercase tracking-tight">教学实施</p>
                      <p className="text-foreground/60 font-bold leading-relaxed">承担七年级 12 个班级信息技术课，每周 12 节，累计授课学生 500 余人。</p>
                    </div>
                    <div className="p-6 bg-muted rounded-[2rem] border-l-8 border-primary">
                      <p className="text-foreground font-black text-lg mb-3 uppercase tracking-tight">课程开发</p>
                      <p className="text-foreground/60 font-bold leading-relaxed">创新性设计并实施 STEM 积木智能拼搭社团课，指导学生完成编程与搭建任务，受到师生高度关注和欢迎。</p>
                    </div>
                    <div className="p-6 bg-muted rounded-[2rem] border-l-8 border-primary">
                      <p className="text-foreground font-black text-lg mb-3 uppercase tracking-tight">教学研究</p>
                      <p className="text-foreground/60 font-bold leading-relaxed">撰写教案 15 份、听评课记录 10 份，参与校级教研 6 次，完成 300 余份问卷及 2000 字报告。</p>
                    </div>
                    <div className="p-6 bg-muted rounded-[2rem] border-l-8 border-primary">
                      <p className="text-foreground font-black text-lg mb-3 uppercase tracking-tight">班主任工作</p>
                      <p className="text-foreground/60 font-bold leading-relaxed">协助班级日常管理，组织主题班会与班级活动各 4 次，记录班级日志 40 余篇。</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 space-y-4">
                  <div className="w-full h-56 rounded-2xl overflow-hidden border border-foreground/5 bg-white p-1">
                    <img src="/assets/教案.png" alt="清华中学教学 A" className="w-full h-full object-cover rounded" />
                  </div>
                  <div className="w-full h-56 rounded-2xl overflow-hidden border border-foreground/5 bg-white p-1">
                    <img src="/assets/实习1.png" alt="清华中学教学 B" className="w-full h-full object-cover rounded" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[2.5rem] p-12 border border-foreground/5 transition-all hover:border-primary/20 relative overflow-hidden flex flex-col">
                {/* 橙色装饰线条 */}
                <div className="absolute top-0 right-0 w-1/3 h-1 bg-primary"></div>
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-2xl font-black tracking-tight">徐州市第三十四中学</h3>
                  <span className="text-sm font-black text-foreground/30 uppercase tracking-widest">2024/08 - 2024/10</span>
                </div>
                <p className="text-lg text-foreground/60 leading-relaxed mb-8 font-bold">协助完成八年级信息技术教学任务，覆盖学生200余人，自主备课并独立授课3节，互动式教学反响热烈。</p>
                <div className="mt-auto">
                  <div className="w-full h-48 rounded-2xl overflow-hidden border border-foreground/5 bg-white p-1">
                    <img src="/assets/34.png" alt="三十四中校园合影" className="w-full h-full object-cover object-[50%_70%] rounded" />
                  </div>
                </div>
              </div>
              <div className="bg-foreground rounded-[2.5rem] p-12 text-white transition-all hover:scale-[1.02] relative overflow-hidden flex flex-col">
                {/* 橙色装饰线条 */}
                <div className="absolute top-0 left-0 w-1/4 h-1 bg-primary"></div>
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-2xl font-black text-primary italic tracking-tight">上水弥漫智能科技有限公司</h3>
                  <span className="text-sm font-black text-white/30 uppercase tracking-widest italic">2024/06 - 2024/12</span>
                </div>
                <p className="text-lg text-white/60 leading-relaxed mb-8 font-bold">担任市场运营与产品测试实习生，参与产品迭代与测试。</p>
                <div className="mt-auto">
                  <div className="w-full h-48 rounded-2xl overflow-hidden border border-foreground/5 bg-white p-1">
                    <img src="/assets/大赛.jpg" alt="企业展会照片" className="w-full h-full object-cover object-[50%_70%] rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Leadership */}
      <section id="campus" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto relative">
          {/* 橙色装饰线条 */}
          <div className="absolute top-0 left-0 w-1/3 h-1 bg-primary rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1 bg-primary rounded-full"></div>
          <SectionHeader icon={User} title="leadership" />

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-white rounded-[3rem] p-12 md:p-16 border border-foreground/5 relative overflow-hidden group hover:border-primary/20 transition-all">
              {/* 橙色装饰线条 */}
              <div className="absolute top-0 right-0 w-1/2 h-1 bg-primary"></div>
              <div className="relative z-10">
                <div className="flex flex-wrap justify-between items-start mb-12 gap-8">
                  <div>
                    <h3 className="text-4xl font-black tracking-tighter">曙光志愿者服务队队长</h3>
                    <p className="text-primary font-black text-base uppercase italic mt-1 tracking-widest">管理 200 人核心团队 | 2023 - 2024</p>
                  </div>
                  <div className="text-right">
                    <p className="text-5xl font-black text-foreground italic leading-none">100h</p>
                    <p className="text-sm text-foreground/30 font-black uppercase mt-2 tracking-widest">年均服务总时长</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6 text-lg text-foreground/60 leading-relaxed font-bold">
                    <p>● <span className="text-foreground font-black">团队管理：</span> 团队年度志愿时长 1200 小时，长期主持 3 项社会志愿服务项目。</p>
                    <p>● <span className="text-foreground font-black">赛事保障：</span> 徐州马拉松、汉文化论坛、校运动会等大型活动的志愿者。</p>
                    <p>● <span className="text-foreground font-black">品牌宣传：</span> 撰写新闻稿 12 篇，被团学苏刊等媒体报道 8 次，个人获“优秀青年志愿者”称号。</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-full h-48 rounded-2xl overflow-hidden border border-foreground/5 bg-white p-1">
                      <img src="/assets/志愿1.png" alt="志愿者活动1" className="w-full h-full object-cover rounded" />
                    </div>
                    <div className="w-full h-48 rounded-2xl overflow-hidden border border-foreground/5 bg-white p-1">
                      <img src="/assets/志愿2.png" alt="志愿者活动2" className="w-full h-full object-cover rounded" />
                    </div>
                  </div>
                </div>
              </div>
              <Briefcase className="absolute -right-10 -bottom-10 w-64 h-64 opacity-[0.03] group-hover:scale-110 transition-transform duration-500" />
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div className="bg-primary rounded-[2.5rem] p-10 text-white transition-all hover:scale-[1.05] relative overflow-hidden">
                {/* 橙色装饰线条 */}
                <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-white/30"></div>
                <h3 className="text-2xl font-black mb-2 tracking-tight">AI&STEM信息技术研学社 社长</h3>
                <p className="text-white/60 text-base font-black uppercase tracking-widest mb-6 italic">从 0 到 1 组建社团</p>
                <p className="text-lg leading-tight font-bold opacity-90 mb-8">吸纳社员 120+，年组织研学 20+场，个人 2 次获得“优秀社团成员”称号，</p>
                <div className="w-full h-32 rounded-2xl overflow-hidden border border-white/20 bg-white p-1">
                  <img src="/assets/社团.png" alt="社团活动合影" className="w-full h-full object-cover rounded" />
                </div>
              </div>
              <div className="bg-foreground rounded-[2.5rem] p-10 text-white transition-all hover:scale-[1.05] relative overflow-hidden">
                {/* 橙色装饰线条 */}
                <div className="absolute top-0 right-0 w-1/4 h-1 bg-primary"></div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">院外联部负责人</h3>
                <p className="text-lg text-white/60 leading-relaxed font-bold">统筹 1200+ 人规模院级活动，负责 20 名干事管理与招新协调。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-32 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-20">
            <div className="text-center md:text-left">
              <h3 className="text-7xl font-black tracking-tighter lowercase mb-8">gao xuyan<span className="text-primary">.</span></h3>
              <p className="text-white/40 font-black text-[10px] uppercase tracking-[0.3em] leading-loose">
                Modern Education Technology Specialist<br/>
                Jiangsu Normal University → Jiangnan University
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg font-bold">
              <a href="tel:15150548452" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-all"><Phone size={20} /></div>
                <span className="group-hover:text-primary transition-colors">151-5054-8452</span>
              </a>
              <a href="mailto:gaoxuyan0309@126.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-all"><Mail size={20} /></div>
                <span className="group-hover:text-primary transition-colors">gaoxuyan0309@126.com</span>
              </a>
              <div className="flex items-center gap-4 text-white/40">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"><MapPin size={20} /></div>
                江苏·南京
              </div>
              <div className="flex items-center gap-4 text-white/40">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center font-black italic text-xl">!</div>
                共青团员
              </div>
            </div>
          </div>
          
          <div className="mt-32 pt-12 border-t border-white/5 text-center text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">
            © 2026 VISUAL POETRY PORTFOLIO / DESIGN BY TECH & ART
          </div>
        </div>
      </footer>
      
      {/* Floating Actions */}
      <div className="fixed bottom-12 right-12 flex flex-col gap-4 z-50">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all"
        >
          <ChevronRight className="-rotate-90" size={24} />
        </button>
        <button className="w-14 h-14 bg-primary rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-black transition-all">
          <Download size={24} />
        </button>
      </div>

    </div>
  );
};

export default App;
